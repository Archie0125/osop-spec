# OSOP Agent Runtime Binding

**Version:** 1.0.0-draft
**Status:** Draft
**Date:** 2026-03-31

---

## 1. Purpose

This document defines how AI agents consume `.osop` files as executable standard operating procedures. While the core OSOP spec defines **what** a process is, this document defines **how** agents bind to it at execution time.

An OSOP file serves two audiences simultaneously:

| Audience | Reads | Sees |
|---|---|---|
| **Human** | `.osop` via editor/docs | Graph, Story, Role views |
| **AI Agent** | `.osop` directly | Structured SOP to execute step-by-step |

This dual-mode design is the core value proposition of OSOP: one file, two consumers, zero translation.

---

## 2. Agent Execution Model

An agent executing an OSOP workflow follows a **plan-act-verify loop**, where the `.osop` file is the plan:

```
┌──────────────────────────────┐
│         .osop File           │
│  (the plan / the SOP)        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     Agent Runtime Loop       │
│                              │
│  1. Read current node        │
│  2. Resolve inputs           │
│  3. Execute action           │
│  4. Capture outputs          │
│  5. Evaluate outgoing edges  │
│  6. Advance to next node(s)  │
│  7. Log to .osoplog          │
│  8. Repeat until terminal    │
│                              │
└──────────────────────────────┘
```

### 2.1 Node-to-Action Mapping

Each OSOP node type maps to a specific agent action:

| Node Type | Agent Action | Tool / Mechanism |
|---|---|---|
| `human` | **Pause and request human input** | Present prompt, wait for response |
| `agent` | **Invoke LLM / sub-agent** | API call to model provider |
| `api` | **HTTP/gRPC call** | Use `http_request` tool or MCP tool |
| `cli` | **Execute shell command** | Use `bash` / `exec` tool |
| `db` | **Execute database query** | Use `db_query` tool or API |
| `git` | **Execute git operation** | Use `git` CLI or API |
| `docker` | **Container operation** | Use `docker` CLI |
| `cicd` | **Trigger CI/CD pipeline** | Use platform API (GitHub Actions, etc.) |
| `infra` | **Provision infrastructure** | Use `terraform` / `kubectl` / etc. |
| `mcp` | **Invoke MCP tool** | Direct MCP tool call |
| `system` | **System operation** | File I/O, process management |
| `event` | **Wait for or emit event** | Webhook listener, event bus |
| `gateway` | **Evaluate routing logic** | Evaluate `when` expressions |
| `data` | **Transform data** | Apply mapping / aggregation |
| `company` | **Cross-org message** | Send via protocol (API, EDI, email) |
| `department` | **Internal routing** | Forward to department queue |

### 2.2 Edge-to-Control-Flow Mapping

Each edge mode maps to an agent control flow pattern:

| Edge Mode | Agent Behavior |
|---|---|
| `sequential` | Execute target after source completes |
| `conditional` | Evaluate `when` expression; skip target if false |
| `parallel` | Fork: execute all parallel targets concurrently (Promise.all / asyncio.gather) |
| `loop` | While `when` is true, re-execute target; respect `max_iterations` |
| `event` | Block until external event matches `when` filter |
| `fallback` | On source failure, execute target instead of propagating error |
| `error` | On specific error matching `when`, execute target |
| `timeout` | On source timeout, execute target |
| `compensation` | On downstream failure, execute target to undo source's effects |
| `message` | Send structured message to external system (B2B) |
| `dataflow` | Pass data from source outputs to target inputs (no control dependency) |
| `signal` | Wait for external signal before proceeding |
| `weighted` | Randomly select target based on weight percentages |

---

## 3. Agent Reading Protocol

When an agent receives a `.osop` file, it MUST follow this reading order:

### Step 1: Parse Metadata

```yaml
# Agent extracts:
osop_version: "1.0"     # → Verify compatibility
id: "deploy-service"     # → Use as workflow identifier
name: "Deploy Service"   # → Use as task description
description: "..."       # → Use as context for decision-making
```

### Step 2: Identify Entry Points

Entry points are nodes with no incoming edges, or nodes referenced by `triggers`:

```python
# Pseudocode
entry_nodes = [n for n in nodes if no_edge_targets(n.id)]
if workflow.triggers:
    entry_nodes = match_trigger(workflow.triggers, current_context)
```

### Step 3: Build Execution Graph

The agent constructs a directed graph and performs topological sort:

```python
# Pseudocode
graph = build_graph(nodes, edges)
execution_order = topological_sort(graph)
parallel_groups = identify_parallel_forks(graph)
```

### Step 4: Resolve Variables

Before executing each node, resolve all `${...}` interpolations:

| Namespace | Source |
|---|---|
| `${inputs.*}` | Workflow inputs or previous node outputs |
| `${outputs.<node_id>.*}` | Specific node's output |
| `${secrets.*}` | Secrets provider (Vault, env vars, etc.) |
| `${env.*}` | Environment variables |
| `${metadata.*}` | Runtime metadata (run_id, timestamp, etc.) |

### Step 5: Execute Node

For each node, the agent:

1. Checks `preconditions` — all CEL expressions must evaluate to `true`
2. Checks `valid_window` — current time must be within window
3. Resolves `inputs` from upstream outputs or workflow inputs
4. Executes the action based on `type` and `runtime` config
5. Validates outputs against `success_criteria`
6. Records execution to `.osoplog`

### Step 6: Evaluate Outgoing Edges

After a node completes (or fails), the agent evaluates all outgoing edges:

```python
# Pseudocode
for edge in outgoing_edges(current_node):
    if edge.mode == "sequential":
        queue(edge.to)
    elif edge.mode == "conditional":
        if evaluate_cel(edge.when, context):
            queue(edge.to)
    elif edge.mode == "parallel":
        fork(edge.to)
    elif edge.mode == "fallback" and current_node.status == "FAILED":
        queue(edge.to)
    elif edge.mode == "loop":
        if evaluate_cel(edge.when, context):
            queue(edge.to)  # re-queue source
    # ... etc
```

---

## 4. Node Field Semantics for Agents

### 4.1 `purpose` — The Agent's Instruction

The `purpose` field is the primary instruction an agent uses to understand **what to do** at each step. It SHOULD be written as a clear, actionable instruction.

```yaml
# Good: Specific, actionable
purpose: "Query Jira API for all tickets in sprint 42 with status 'In Progress'"

# Bad: Vague
purpose: "Get ticket data"
```

### 4.2 `explain` — Context for Decision-Making

The `explain` block provides additional context that helps agents make better decisions:

```yaml
explain:
  why: "We check for duplicates before assignment to avoid wasted effort"
  what: "Compare incoming bug title against open issues using fuzzy match"
  result: "Returns is_duplicate: bool and duplicate_of: string"
```

| Field | Agent Use |
|---|---|
| `why` | Helps agent understand intent when making judgment calls |
| `what` | Detailed description of the action to perform |
| `result` | Expected output format — helps agent structure its response |

### 4.3 `runtime` — Execution Configuration

The `runtime` block contains everything an agent needs to execute the node:

```yaml
# For agent nodes: model, prompt, tools
runtime:
  model: "claude-sonnet-4-20250514"
  provider: "anthropic"
  system_prompt: "You are a code reviewer..."
  temperature: 0.2
  tools:
    - name: "read_file"
    - name: "search_code"

# For API nodes: endpoint, method, auth
runtime:
  method: POST
  url: "https://api.example.com/tickets"
  headers:
    Authorization: "Bearer ${secrets.JIRA_TOKEN}"

# For CLI nodes: command, env
runtime:
  command: "npm run test"
  working_dir: "${env.PROJECT_ROOT}"
```

### 4.4 `inputs` / `outputs` — Data Contract

Agents MUST respect input/output schemas for data passing between nodes:

```yaml
inputs:
  - name: bug_description
    type: string
    required: true
  - name: severity_hint
    type: string
    required: false

outputs:
  - name: category
    schema: "critical | high | medium | low"
  - name: assigned_to
    schema: string
```

### 4.5 `handoff` — Agent-to-Agent Context Transfer

When one agent node hands off to another, the `handoff` block defines what context to pass:

```yaml
handoff:
  summary_for_next_node: "I analyzed the bug report and found it's a memory leak in the cache layer. Stack trace points to cache.js:142."
  expected_output: "A pull request fixing the memory leak with tests"
  escalation: "human_review"  # If next agent fails, escalate to this node
```

### 4.6 `success_criteria` — Verification

After execution, agents evaluate `success_criteria` to determine if the node succeeded:

```yaml
success_criteria:
  - "All tests pass with 0 failures"
  - "Code coverage >= 80%"
  - "No critical security vulnerabilities"
```

If any criterion is not met, the node status is `FAILED` and fallback/error edges are evaluated.

### 4.7 `retry_policy` — Automatic Retry

Agents MUST implement retry behavior when specified:

```yaml
retry_policy:
  max_retries: 3
  strategy: "exponential_backoff"
  backoff_sec: 2
```

Each retry attempt is logged as a separate entry in the `.osoplog` with incrementing `attempt` numbers.

---

## 5. MCP Tool Binding

OSOP nodes map directly to [Model Context Protocol](https://modelcontextprotocol.io/) tool calls. The `osop-mcp` server exposes these tools:

### 5.1 Core MCP Tools

| MCP Tool | Description | Maps To |
|---|---|---|
| `osop_validate` | Validate a .osop file against the schema | Pre-execution check |
| `osop_run` | Execute a workflow (dry_run, simulated, live) | Full agent loop |
| `osop_step` | Execute a single node | One iteration of the loop |
| `osop_render` | Render workflow in a given format (story, graph, agent) | Human output |
| `osop_status` | Get current execution status | Monitoring |
| `osop_log` | Write a .osoplog entry | Recording |

### 5.2 Node-Level MCP Binding

When a node has `type: mcp`, it directly invokes an MCP tool:

```yaml
- id: "search_codebase"
  type: mcp
  purpose: "Search the codebase for references to the deprecated API"
  runtime:
    server: "filesystem"
    tool: "search_files"
    arguments:
      pattern: "deprecated_api_v1"
      path: "${env.PROJECT_ROOT}"
```

### 5.3 Any Node via MCP

Non-MCP nodes can also be executed via MCP tools if the agent runtime supports it:

```yaml
# This API node...
- id: "create_ticket"
  type: api
  runtime:
    method: POST
    url: "https://api.jira.com/rest/api/3/issue"

# ...can be executed by an agent using an HTTP MCP tool:
# mcp_call("http_request", { method: "POST", url: "...", body: "..." })
```

---

## 6. `.osoplog` — Execution Record Format

Every workflow execution produces a `.osoplog` file — an immutable, append-only record of what happened.

### 6.1 File Format

| Property | Value |
|---|---|
| **Extension** | `.osoplog`, `.osoplog.yaml`, `.osoplog.json` |
| **Encoding** | UTF-8 |
| **Structure** | Single YAML/JSON document |

### 6.2 Schema

```yaml
osoplog_version: "1.0"
run_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
workflow_id: "pr-review-pipeline"
workflow_version: "1.2.0"
workflow_hash: "sha256:abc123..."       # Hash of the .osop file at execution time

mode: "live"                            # live | dry_run | simulated
status: "COMPLETED"                     # PENDING | RUNNING | COMPLETED | FAILED | CANCELLED

trigger:
  type: "event"
  source: "github-webhook"
  actor: "developer@example.com"
  timestamp: "2026-03-31T10:00:00Z"

started_at: "2026-03-31T10:00:00Z"
ended_at: "2026-03-31T10:05:23Z"
duration_ms: 323000

# Agent runtime that executed the workflow
runtime:
  agent: "claude-code"                  # Which agent system ran this
  agent_version: "1.0.45"
  model: "claude-sonnet-4-20250514"            # Primary model used
  platform: "macos-14.2"
  session_id: "sess_abc123"

# Node-by-node execution trace
node_records:
  - node_id: "pr_opened"
    node_type: "event"
    attempt: 1
    status: "COMPLETED"
    started_at: "2026-03-31T10:00:00Z"
    ended_at: "2026-03-31T10:00:01Z"
    duration_ms: 1000
    outputs:
      pr_url: "https://github.com/org/repo/pull/42"
      diff_size: 234

  - node_id: "ai_code_review"
    node_type: "agent"
    attempt: 1
    status: "COMPLETED"
    started_at: "2026-03-31T10:00:01Z"
    ended_at: "2026-03-31T10:00:04Z"
    duration_ms: 3200
    inputs:
      diff_content: "[234 lines]"
    outputs:
      review_comments: 3
      risk_level: "medium"
    ai_metadata:
      model: "claude-sonnet-4-20250514"
      provider: "anthropic"
      prompt_tokens: 4500
      completion_tokens: 800
      cost_usd: 0.021
      confidence: 0.87
    tools_used:
      - { tool: "read_file", calls: 3 }
      - { tool: "search_code", calls: 1 }

  - node_id: "run_ci"
    node_type: "cicd"
    attempt: 1
    status: "FAILED"
    started_at: "2026-03-31T10:00:01Z"
    ended_at: "2026-03-31T10:02:30Z"
    duration_ms: 149000
    error:
      code: "TEST_FAILURE"
      message: "3 tests failed in auth.test.ts"
      details: "Expected 200, got 401 on line 42"

  - node_id: "run_ci"
    node_type: "cicd"
    attempt: 2                          # Retry
    status: "COMPLETED"
    started_at: "2026-03-31T10:02:35Z"
    ended_at: "2026-03-31T10:04:50Z"
    duration_ms: 135000
    outputs:
      test_report: "42/42 passed"

# Variables snapshot at end of execution
variables:
  pr_url: "https://github.com/org/repo/pull/42"
  ci_result: "pass"
  review_risk: "medium"

# Human-readable summary
result_summary: "PR #42 reviewed and merged. AI found 3 issues (1 fixed, 2 acknowledged). CI passed on retry."

# Cost tracking
cost:
  total_usd: 0.034
  breakdown:
    - { node_id: "ai_code_review", cost_usd: 0.021 }
    - { node_id: "human_review", cost_usd: 0.0 }
    - { node_id: "run_ci", cost_usd: 0.013 }
```

### 6.3 Required Fields

| Field | Type | Description |
|---|---|---|
| `osoplog_version` | `string` | Must be `"1.0"` |
| `run_id` | `string` | UUID v4, unique per execution |
| `workflow_id` | `string` | Matches the `.osop` file's `id` |
| `status` | `string` | Final execution status |
| `started_at` | `string` | ISO 8601 timestamp |
| `node_records` | `array` | At least one node record |

### 6.4 Node Record Required Fields

| Field | Type | Description |
|---|---|---|
| `node_id` | `string` | Matches a node `id` in the `.osop` file |
| `node_type` | `string` | The node's `type` |
| `attempt` | `integer` | Attempt number (1-indexed) |
| `status` | `string` | `COMPLETED`, `FAILED`, `SKIPPED`, `TIMED_OUT` |
| `started_at` | `string` | ISO 8601 timestamp |

### 6.5 Optional Metadata Blocks

**`ai_metadata`** — Present when node involves LLM:

```yaml
ai_metadata:
  model: "claude-sonnet-4-20250514"
  provider: "anthropic"
  prompt_tokens: 4500
  completion_tokens: 800
  cost_usd: 0.021
  confidence: 0.87              # Agent's self-assessed confidence (0-1)
  reasoning_trace: "..."        # Optional: chain-of-thought summary
```

**`human_metadata`** — Present when node involves human:

```yaml
human_metadata:
  actor: "alice@example.com"
  decision: "approved"
  notes: "Looks good, but watch the auth changes"
  response_time_ms: 45000
```

**`tools_used`** — Tools invoked during node execution:

```yaml
tools_used:
  - tool: "read_file"
    calls: 3
    avg_duration_ms: 12
  - tool: "bash"
    calls: 1
    avg_duration_ms: 2300
```

---

## 7. Iteration Protocol

After multiple executions, agents can analyze `.osoplog` files to improve the workflow.

### 7.1 Stats Aggregation

From N execution logs, compute:

```yaml
stats:
  total_runs: 25
  success_rate: 0.84
  avg_duration_ms: 312000
  node_stats:
    ai_code_review:
      avg_duration_ms: 3200
      failure_rate: 0.04
      avg_cost_usd: 0.021
    run_ci:
      avg_duration_ms: 142000
      failure_rate: 0.16        # ← Hotspot
      common_errors:
        - "TEST_FAILURE: auth.test.ts"
        - "TIMEOUT: integration tests"
    human_review:
      avg_duration_ms: 86400000  # ← Bottleneck (24h average)
      failure_rate: 0.0
```

### 7.2 Improvement Suggestions

Based on stats, an agent can propose improvements:

| Pattern | Suggestion |
|---|---|
| High failure rate on a node | Add `retry_policy` or `fallback` edge |
| Slow node blocking the pipeline | Add `timeout` or parallelize with other work |
| Human node with long wait times | Add auto-approval for low-risk cases |
| Repeated error pattern | Add pre-check node before the failing step |
| Redundant sequential steps | Merge or parallelize |

### 7.3 Iteration Record

```yaml
iteration:
  id: "iter-001"
  based_on_runs: ["run-1", "run-2", ..., "run-25"]
  analysis:
    hotspots:
      - node_id: "run_ci"
        issue: "16% failure rate, mostly auth test failures"
        suggestion: "Add retry_policy with max_retries: 2"
    bottlenecks:
      - node_id: "human_review"
        issue: "Average 24h wait time"
        suggestion: "Add auto-approve path for PRs with risk_level == 'low'"
  proposed_changes:
    - type: "add_retry"
      target: "run_ci"
      config:
        max_retries: 2
        strategy: "fixed"
        backoff_sec: 30
    - type: "add_conditional_bypass"
      target: "human_review"
      condition: "risk_level == 'low' AND ci_result == 'pass'"
      bypass_to: "auto_merge"
  status: "proposed"            # proposed | approved | applied | rejected
```

---

## 8. Multi-Agent Orchestration

When a workflow contains multiple `agent` nodes, the runtime must handle agent-to-agent coordination.

### 8.1 Context Passing

Agent nodes pass context through `outputs` → `inputs` via edges:

```yaml
nodes:
  - id: planner
    type: agent
    runtime:
      model: openclaw-v1
    outputs:
      - name: architecture_doc

  - id: coder
    type: agent
    runtime:
      model: claude-sonnet-4-20250514
    inputs:
      - name: architecture_doc     # ← Receives planner's output

edges:
  - from: planner
    to: coder
    mode: sequential
```

### 8.2 Handoff Protocol

When agents hand off to each other, the `handoff` block standardizes what gets passed:

```
Agent A completes
    │
    ├─ outputs → stored as node outputs
    ├─ handoff.summary_for_next_node → prepended to Agent B's context
    └─ handoff.expected_output → becomes Agent B's success criterion
         │
         ▼
Agent B receives
    │
    ├─ inputs ← mapped from Agent A's outputs
    ├─ context ← handoff summary
    └─ goal ← expected output
```

### 8.3 Sub-Agent Isolation

When a node uses `subtype: multi-agent`, the runtime spawns isolated sub-agents:

```yaml
- id: research_team
  type: agent
  subtype: multi-agent
  runtime:
    agents:
      - role: "web_researcher"
        model: "claude-sonnet-4-20250514"
        task: "Search for competitor pricing data"
      - role: "data_analyst"
        model: "claude-sonnet-4-20250514"
        task: "Analyze the collected data for trends"
    coordination: "sequential"    # sequential | parallel | consensus
    isolation: true               # Each sub-agent gets clean context
```

---

## 9. Security Considerations

### 9.1 Permission Model

Before executing any node, the agent runtime MUST check:

1. **Node permissions** — Does the agent have the required `security.permissions`?
2. **Secret access** — Are referenced `secrets` available and authorized?
3. **Classification** — Does the agent's clearance level meet the node's `classification`?
4. **Approval gate** — If `approval_gate.required`, pause and wait for human approval

### 9.2 Dangerous Action Classification

For `cli` and `bash`-equivalent nodes, the agent MUST classify the command:

| Risk Level | Examples | Required Action |
|---|---|---|
| **Safe** | `git status`, `ls`, `cat` | Execute immediately |
| **Moderate** | `npm install`, `docker build` | Log and execute |
| **Dangerous** | `rm -rf`, `DROP TABLE`, `git push --force` | Require human approval |
| **Blocked** | `curl | bash`, untrusted URLs | Refuse to execute |

### 9.3 Data Classification Enforcement

Nodes with `classification` fields restrict data flow:

```yaml
- id: process_pii
  type: agent
  classification: "confidential"
  # Agent MUST NOT:
  # - Log PII to .osoplog outputs
  # - Pass PII to nodes with lower classification
  # - Send PII to external services without encryption
```

---

## 10. Conformance Requirements

### Level 0 — Descriptive (Read-Only)

Agent can read and understand the workflow. No execution.

- Parse `.osop` file
- Explain workflow in natural language
- Identify entry points and terminal nodes
- List all node types and edge modes

### Level 1 — Validatable

Agent can validate the workflow structure.

- All Level 0 requirements
- Validate input/output schemas
- Check edge connectivity (no orphan nodes)
- Verify CEL expressions are syntactically valid
- Validate against JSON Schema

### Level 2 — Executable

Agent can execute the workflow.

- All Level 1 requirements
- Execute nodes based on `type` and `runtime`
- Evaluate `when` conditions
- Handle `retry_policy` and `timeout`
- Produce `.osoplog` records
- Implement all 13 edge modes

### Level 3 — Observable

Agent produces full telemetry.

- All Level 2 requirements
- Emit OpenTelemetry traces
- Track cost per node (`ai_metadata.cost_usd`)
- Compute and report `WorkflowStats`
- Generate iteration improvement suggestions

---

## 11. Reference Implementation

The reference implementation is the `osop-mcp` server, which exposes OSOP operations as MCP tools that any compatible agent can use.

```json
{
  "name": "osop",
  "version": "1.0.0",
  "tools": [
    {
      "name": "osop_validate",
      "description": "Validate a .osop workflow file",
      "inputSchema": {
        "type": "object",
        "properties": {
          "workflow": { "type": "string", "description": "YAML content or file path" }
        },
        "required": ["workflow"]
      }
    },
    {
      "name": "osop_run",
      "description": "Execute a workflow",
      "inputSchema": {
        "type": "object",
        "properties": {
          "workflow": { "type": "string" },
          "mode": { "type": "string", "enum": ["live", "dry_run", "simulated"] },
          "inputs": { "type": "object" }
        },
        "required": ["workflow"]
      }
    },
    {
      "name": "osop_step",
      "description": "Execute a single node in a workflow",
      "inputSchema": {
        "type": "object",
        "properties": {
          "workflow": { "type": "string" },
          "node_id": { "type": "string" },
          "inputs": { "type": "object" }
        },
        "required": ["workflow", "node_id"]
      }
    }
  ]
}
```

---

*This document is part of the OSOP specification. See [SPEC.md](./SPEC.md) for the core protocol.*
*For the .osoplog JSON Schema, see `schema/osoplog.schema.json`.*
