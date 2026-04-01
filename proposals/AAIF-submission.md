# OSOP: The Process Layer for the Agentic AI Stack

**Proposal to the Agentic AI Foundation (Linux Foundation)**

**Date:** 2026-04-01
**Authors:** OSOP Core Team
**License:** Apache 2.0
**Spec Repository:** github.com/Archie0125/osop-spec
**Website:** osop.dev

---

## Abstract

OSOP (Open Standard for Orchestration Protocols) is an open standard for defining, recording, and optimizing AI agent workflows. It provides two complementary YAML formats: `.osop` for workflow definition and `.osoplog` for execution records. Together, they create a closed-loop system where workflows can be defined declaratively, executed by any runtime, and improved based on observed execution data.

OSOP fills the **process layer** gap in the agentic AI stack. While MCP standardizes tool connectivity and AGENTS.md standardizes agent instructions, no existing standard addresses the fundamental questions: *What should an agent do? What did it actually do? How can the process be improved?*

We propose OSOP as a governed project under the Agentic AI Foundation, complementing MCP and AGENTS.md to complete the agentic AI infrastructure stack.

---

## The Gap

The agentic AI ecosystem has made remarkable progress on individual layers of the stack:

| Standard | Focus | Adoption |
|----------|-------|----------|
| **MCP** (Model Context Protocol) | How agents connect to tools | 97M+ installs |
| **AGENTS.md** | How to instruct agents | 60K+ repos |
| **OpenTelemetry** | How to monitor agents | Industry standard for observability |

**What is missing:** a standard that addresses the *process itself*:

1. **Define** what an agent should do — the sequence of steps, decision points, parallel branches, human checkpoints, and risk gates.
2. **Record** what an agent actually did — with structured execution logs that capture timing, token usage, tool calls, inputs/outputs, and error states.
3. **Optimize** the process over time — by comparing intended workflows against actual execution, identifying bottlenecks, failure hotspots, and parallelization opportunities.

No existing standard covers this. BPMN is too enterprise-heavy and predates the AI agent paradigm. OpenTelemetry operates at the infrastructure level, not the workflow level. The Oracle Agent Specification defines agents but lacks execution records. GitHub Actions and similar CI/CD formats are imperative, not declarative, and tightly coupled to their runtimes.

OSOP is purpose-built for this gap.

---

## What OSOP Provides

### .osop — Workflow Definition

A declarative YAML format that describes what an AI agent workflow *should* do:

```yaml
osop_version: "1.0"
id: "code-review-pipeline"
name: "Automated Code Review"
description: "Multi-agent code review with security scanning and human approval gate."

nodes:
  - id: "scan"
    type: "cicd"
    subtype: "test"
    name: "Security Scan"
    risk: { level: "low", category: "automated" }

  - id: "review"
    type: "agent"
    subtype: "llm"
    name: "AI Code Review"
    risk: { level: "medium", category: "ai-judgment" }

  - id: "approve"
    type: "human"
    subtype: "review"
    name: "Human Approval Gate"
    risk: { level: "low", category: "human-controlled" }

edges:
  - from: "scan"
    to: "review"
    mode: "sequential"
  - from: "review"
    to: "approve"
    mode: "sequential"
  - from: "review"
    to: "scan"
    mode: "fallback"
    label: "Re-scan on review failure"
```

**Key capabilities:**

- **16 node types** — `agent`, `mcp`, `cli`, `api`, `human`, `cicd`, `git`, `data`, `notification`, `timer`, `conditional`, `loop`, `subworkflow`, `webhook`, `queue`, `custom`
- **13 edge modes** — `sequential`, `parallel`, `conditional`, `fallback`, `loop`, `spawn`, `merge`, `race`, `timeout`, `retry`, `approval`, `event`, `default`
- **Sub-agent tracking** — Parent-child relationships with spawn indices for multi-agent orchestration
- **Built-in risk analysis** — Every node can declare risk level and category, enabling automated risk assessment before execution
- **Human-in-the-loop** — First-class support for approval gates, human review steps, and manual intervention points

### .osoplog — Execution Record

A structured YAML format that records what an agent *actually* did:

```yaml
osoplog_version: "1.0"
run_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
workflow_id: "code-review-pipeline"
status: "COMPLETED"
started_at: "2026-04-01T10:00:00Z"
ended_at: "2026-04-01T10:03:42Z"
duration_ms: 222000

node_records:
  - node_id: "scan"
    status: "COMPLETED"
    duration_ms: 45000
    tools_used:
      - { tool: "semgrep", calls: 1 }
    outputs:
      findings: 0

  - node_id: "review"
    status: "COMPLETED"
    duration_ms: 120000
    ai_metadata:
      model: "claude-opus-4-6"
      prompt_tokens: 15000
      completion_tokens: 3200
    outputs:
      verdict: "approve"
      comments: 3
```

### The Closed Loop

Together, `.osop` + `.osoplog` create a feedback loop:

```
Define (.osop) --> Execute (any runtime) --> Record (.osoplog)
     ^                                            |
     |                                            v
     +-------- Optimize (compare & improve) <-----+
```

This is analogous to how OpenAPI defines an API contract and API analytics record actual usage — except for workflows.

---

## Complementary to MCP and AGENTS.md

OSOP does not replace MCP or AGENTS.md. It is the layer above both.

```
+----------------------------------------------------------+
|                    APPLICATION LAYER                       |
+----------------------------------------------------------+
|                                                           |
|  +------------------+  +------------------+               |
|  |   AGENTS.md      |  |   OSOP (.osop)   |              |
|  |   Instructions   |  |   Process Def.   |              |
|  |   "What to know" |  |   "What to do"   |              |
|  +--------+---------+  +--------+---------+              |
|           |                      |                        |
|           v                      v                        |
|  +--------------------------------------------------+    |
|  |              AGENT RUNTIME                         |    |
|  |  (LangChain, CrewAI, AutoGen, Claude Code, etc.) |    |
|  +--------------------------------------------------+    |
|           |                      |                        |
|           v                      v                        |
|  +------------------+  +------------------+               |
|  |   MCP             |  |   OSOP (.osoplog)|              |
|  |   Tool Access     |  |   Execution Log  |              |
|  |   "How to connect"|  |   "What happened"|              |
|  +------------------+  +------------------+               |
|                                                           |
+----------------------------------------------------------+
|                 INFRASTRUCTURE LAYER                       |
|              (OpenTelemetry, Cloud, etc.)                  |
+----------------------------------------------------------+
```

**MCP** (plumbing) answers: "How does the agent call this tool?"
**AGENTS.md** (instructions) answers: "What context does the agent need?"
**OSOP** (process) answers: "What steps should the agent take, and what did it actually do?"

### Integration Points

- **MCP tools referenced in OSOP nodes:** An `mcp` node type can reference specific MCP servers and tools, creating a direct link between workflow definition and tool connectivity.
- **AGENTS.md context in OSOP steps:** Agent nodes can reference AGENTS.md files for context, combining process structure with agent instructions.
- **OpenTelemetry correlation:** `.osoplog` records can include trace IDs that correlate with OpenTelemetry spans, bridging workflow-level and infrastructure-level observability.

---

## Existing Ecosystem

OSOP has a growing ecosystem of tools and integrations:

| Project | Description | Status |
|---------|-------------|--------|
| **osop-spec** | Protocol specification v1.0 | Released |
| **osop-editor** | Visual workflow editor (React 19) | Live at osop-editor.vercel.app |
| **osop-mcp** | MCP server for OSOP operations | In development |
| **osop-sdk-js** | JavaScript/TypeScript SDK | Released |
| **osop-sdk-py** | Python SDK | Released |
| **osop-validate-action** | GitHub Action for CI validation | Released |
| **osop** (CLI) | Python CLI for validate/render/run | Released |
| **osop-examples** | 39+ workflow templates | Growing |
| **Claude Code plugin** | Native OSOP session logging | Active |
| **osop-interop** | Format converters (BPMN, GitHub Actions) | Planned |
| **osop-vscode** | VS Code extension | Planned |

### Adoption Signals

- Active integration PRs to agent frameworks (LangChain, CrewAI, AutoGen)
- Workflow examples covering CI/CD, code review, incident response, data pipelines, and multi-agent orchestration
- Claude Code natively generates `.osop` and `.osoplog` files as session records

---

## EU AI Act Compliance

The EU AI Act (effective 2026) imposes specific requirements on high-risk AI systems. OSOP directly addresses several of these:

### Article 19 — Automatically Generated Logs

> High-risk AI systems shall be designed and developed with capabilities enabling the automatic recording of events ('logs') while the high-risk AI systems is operating.

`.osoplog` satisfies this requirement by providing:

- **Structured execution records** with timestamps, durations, and status codes
- **Input/output capture** for each workflow step
- **AI metadata** including model identifiers, token usage, and prompt details
- **Human intervention records** documenting approval gates and manual overrides
- **Risk categorization** at the node level, enabling risk-proportionate logging

### Article 14 — Human Oversight

OSOP's `human` node type with `review` and `approval` subtypes provides auditable evidence of human-in-the-loop controls.

### Article 17 — Quality Management System

The `.osop` workflow definition serves as a process specification, and the `.osoplog` execution record serves as the quality record — together forming a lightweight quality management system for AI operations.

### Compliance Without Overhead

Organizations using OSOP get EU AI Act log compliance as a byproduct of normal workflow execution, rather than as a separate compliance burden.

---

## Governance Proposal

### What Moves Under AAIF

- **osop-spec** — The core specification, JSON Schema, and conformance test suite
- **RFC process** — All spec changes go through a formal RFC process with public comment periods
- **Conformance levels** — L1 (Parse), L2 (Validate), L3 (Execute), L4 (Observe)

### What Remains Independent

- **Tooling** — osop-editor, osop-cli, SDKs, GitHub Actions, and other tools remain independently maintained
- **Examples** — Community-contributed workflow examples
- **Integrations** — Third-party runtime integrations

### License

- Specification: Apache 2.0
- JSON Schema: Apache 2.0
- All tooling: Apache 2.0

### Governance Model

- **Spec Editors** — 3-5 maintainers with write access, 2 approvals required for spec changes
- **RFC Process** — Public proposals, 14-day comment period, editor vote
- **Conformance Testing** — Automated test suite that any runtime can run to verify compliance
- **Versioning** — Semantic versioning for the spec, with backward compatibility guarantees within major versions

---

## Next Steps

1. **Formal Submission** — Submit this proposal through the AAIF project intake process
2. **Technical Review** — Present to the AAIF Technical Advisory Council for architectural review
3. **Reference Implementations** — Deliver conformance-passing implementations in Python and TypeScript
4. **Conformance Test Suite** — Publish an automated test suite covering L1-L4 conformance levels
5. **MCP Integration Demo** — Build a reference integration showing OSOP + MCP working together
6. **AGENTS.md Bridge** — Define how AGENTS.md files can reference OSOP workflows and vice versa
7. **Community Feedback** — 30-day public comment period on the governance proposal

---

## Contact

- **GitHub:** github.com/Archie0125
- **Website:** osop.dev
- **Spec:** github.com/Archie0125/osop-spec
- **Editor:** osop-editor.vercel.app
