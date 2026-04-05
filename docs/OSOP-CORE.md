# OSOP Core — Minimal Viable Standard

**Version:** 1.0.0
**Date:** 2026-04-04
**Status:** Active

---

## What is OSOP Core?

OSOP Core is the minimal subset of the OSOP specification designed for one purpose:

> **Describe and log AI agent workflows in a standard, portable format.**

Core intentionally limits scope to make adoption effortless. A valid OSOP Core workflow can be written in **15–25 lines of YAML**.

---

## When to Use Core vs Extended

| Use Case | Use Core | Use Extended |
|---|---|---|
| Logging what an AI agent did | ✅ | |
| Defining a multi-agent workflow | ✅ | |
| Simple API automation | ✅ | |
| Human-in-the-loop AI workflows | ✅ | |
| Database migrations | | ✅ |
| Docker/K8s orchestration | | ✅ |
| CI/CD pipelines with complex routing | | ✅ |
| Enterprise compliance & audit | | ✅ |

---

## Core Schema at a Glance

### 4 Node Types

| Type | Purpose | Example |
|---|---|---|
| `agent` | AI/LLM operations | Call Claude to analyze code |
| `api` | HTTP/webhook calls | POST to Slack, fetch from GitHub API |
| `cli` | Shell commands | Run tests, build, deploy |
| `human` | Manual steps | Review, approve, provide input |

Everything else (database, git, docker, infra, data) can be modeled as `cli` or `api` nodes with appropriate subtypes.

### 4 Edge Modes

| Mode | Behavior | `when` required? |
|---|---|---|
| `sequential` | A then B (default) | No |
| `conditional` | A then B if condition is true | Yes |
| `parallel` | A and B at the same time | No |
| `fallback` | B only if A fails | No |

### Required Fields

```yaml
osop_version: "1.0"     # Protocol version
id: "my-workflow"        # Unique identifier
name: "My Workflow"      # Human-readable name
nodes: [...]             # At least 1 node
edges: [...]             # At least 1 edge
```

### Optional Fields

```yaml
description: "..."       # What and why
version: "1.0.0"         # Workflow version (SemVer)
tags: [ai, automation]   # Classification
owner: "team-name"       # Responsible party
```

---

## Minimal Example: AI Code Review

```yaml
osop_version: "1.0"
id: "ai-code-review"
name: "AI Code Review"
description: "Agent reads a PR diff, provides review, human approves."
tags: [ai-agent, code-review]

nodes:
  - id: "fetch-diff"
    type: "api"
    name: "Fetch PR Diff"
    runtime:
      method: "GET"
      url: "https://api.github.com/repos/${inputs.repo}/pulls/${inputs.pr}/files"

  - id: "review"
    type: "agent"
    name: "AI Reviews Code"
    runtime:
      provider: "anthropic"
      model: "claude-sonnet-4-20250514"
      system_prompt: "You are a senior code reviewer. Be concise."

  - id: "approve"
    type: "human"
    subtype: "review"
    name: "Developer Reviews AI Feedback"

edges:
  - from: "fetch-diff"
    to: "review"
  - from: "review"
    to: "approve"
  - from: "approve"
    to: "review"
    mode: "fallback"
    label: "Rejected — AI re-reviews with feedback"
```

**That's 30 lines.** A complete, readable, portable workflow definition.

---

## Node Details

### `agent` — AI/LLM Operations

```yaml
- id: "analyze"
  type: "agent"
  name: "Analyze Data"
  runtime:
    provider: "anthropic"        # or openai, google, etc.
    model: "claude-sonnet-4-20250514"
    system_prompt: "Analyze the provided data and return insights as JSON."
    temperature: 0.3
    max_tokens: 4096
    tools: ["read_file", "web_search"]  # MCP tools available
  inputs:
    - name: "data"
      description: "Raw data to analyze"
  outputs:
    - name: "insights"
      description: "Structured analysis results"
```

**Subtypes:** `llm`, `rag`, `classifier`, `planner`, `multi-agent`

### `api` — HTTP Calls

```yaml
- id: "notify"
  type: "api"
  name: "Send Slack Notification"
  runtime:
    method: "POST"
    url: "https://hooks.slack.com/services/..."
    headers:
      Content-Type: "application/json"
    body_template: '{"text": "${outputs.analyze.summary}"}'
```

**Subtypes:** `rest`, `graphql`, `grpc`, `webhook`

### `cli` — Shell Commands

```yaml
- id: "run-tests"
  type: "cli"
  name: "Run Test Suite"
  runtime:
    command: "npm test"
    shell: "bash"
  timeout_sec: 300
```

**Subtypes:** `script`, `binary`, `repl`

### `human` — Manual Steps

```yaml
- id: "approve-deploy"
  type: "human"
  subtype: "approval"
  name: "Approve Production Deploy"
  description: "Senior engineer reviews and approves."
```

**Subtypes:** `approval`, `review`, `input`, `decision`

---

## Edge Details

### Sequential (default)

```yaml
- from: "step-a"
  to: "step-b"
  # mode defaults to "sequential"
```

### Conditional

```yaml
- from: "test"
  to: "deploy"
  mode: "conditional"
  when: "outputs.test.passed == true"
```

### Parallel

```yaml
- from: "start"
  to: "task-a"
  mode: "parallel"
- from: "start"
  to: "task-b"
  mode: "parallel"
```

### Fallback

```yaml
- from: "primary-api"
  to: "backup-api"
  mode: "fallback"
  label: "Primary failed, try backup"
```

---

## Execution Logs (`.osoplog`)

The companion `.osoplog.yaml` format records **what actually happened** when a workflow was executed. This is OSOP's unique differentiator — no other standard provides portable execution records.

See `osoplog.schema.json` for the full schema. Key fields:

```yaml
osoplog_version: "1.0"
run_id: "uuid-here"
workflow_id: "ai-code-review"    # Matches the .osop id
status: "COMPLETED"
started_at: "2026-04-04T10:00:00Z"
ended_at: "2026-04-04T10:05:32Z"
duration_ms: 332000

runtime:
  agent: "claude-code"
  model: "claude-opus-4-6"

node_records:
  - node_id: "fetch-diff"
    status: "COMPLETED"
    duration_ms: 1200
  - node_id: "review"
    status: "COMPLETED"
    duration_ms: 28000
    ai_metadata:
      model: "claude-sonnet-4-20250514"
      prompt_tokens: 3200
      completion_tokens: 850

result_summary: "AI reviewed PR #42: 3 issues found, 2 suggestions made."
```

---

## Relationship to OSOP Extended

OSOP Core is a **strict subset** of the full OSOP specification. Every valid Core document is also a valid Extended document. Core simply restricts:

- Node types to `agent`, `api`, `cli`, `human` (Extended adds 8 more)
- Edge modes to `sequential`, `conditional`, `parallel`, `fallback` (Extended adds 6 more)
- Top-level fields to the essentials (Extended adds security, observability, contracts, etc.)

When your needs grow, upgrade to Extended by changing your schema reference. No migration needed.

---

## Schema

Validate Core workflows against: `osop-core.schema.json`

```bash
osop validate --schema core my-workflow.osop.yaml
```
