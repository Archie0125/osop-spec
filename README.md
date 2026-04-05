# OSOP Specification

**The standard format for describing and logging AI agent workflows.**

Two file formats:

- **`.osop`** — workflow definition. What should happen, step by step.
- **`.osoplog`** — execution record. What actually happened. Timestamps, tool calls, AI reasoning.

## OSOP Core (Start Here)

Most users need only **OSOP Core** — 4 node types, 4 edge modes:

| Node Type | Purpose | Example |
|---|---|---|
| `agent` | AI/LLM operations | Claude analyzes code |
| `api` | HTTP calls | POST to Slack webhook |
| `cli` | Shell commands | `npm test` |
| `human` | Manual steps | User reviews changes |

| Edge Mode | Behavior |
|---|---|
| `sequential` | A then B (default) |
| `conditional` | A then B if condition is true |
| `parallel` | A and B simultaneously |
| `fallback` | B only if A fails |

## Quick Start

```bash
pip install osop

# Validate a workflow
osop validate workflow.osop.yaml

# Validate against Core schema only
osop validate --schema core workflow.osop.yaml

# Render as Mermaid diagram
osop render workflow.osop.yaml
```

## What a .osop File Looks Like

```yaml
osop_version: "1.0"
id: "ai-code-review"
name: "AI Code Review"
tags: [ai-agent, code-review]

nodes:
  - id: "fetch-diff"
    type: "api"
    name: "Fetch PR Diff"
    runtime:
      method: "GET"
      url: "https://api.github.com/repos/org/repo/pulls/42/files"

  - id: "review"
    type: "agent"
    name: "AI Reviews Code"
    runtime:
      provider: "anthropic"
      model: "claude-sonnet-4-20250514"

  - id: "approve"
    type: "human"
    name: "Developer Reviews"

edges:
  - from: "fetch-diff"
    to: "review"
  - from: "review"
    to: "approve"
```

## What a .osoplog File Looks Like

```yaml
osoplog_version: "1.0"
run_id: "a1b2c3d4"
workflow_id: "ai-code-review"
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

result_summary: "AI reviewed PR #42: 3 issues found."
```

## Ecosystem

| Tool | What |
|------|------|
| [osop](https://github.com/Archie0125/osop) | Python CLI — validate, render, run, diff |
| [osop-mcp](https://github.com/Archie0125/osop-mcp) | MCP server (5 tools for Claude/Cursor/Windsurf) |
| [osop-editor](https://osop-editor.vercel.app) | Visual editor with risk analysis |
| [osop-examples](https://github.com/Archie0125/osop-examples) | Workflow templates |
| [osop-vscode](https://github.com/Archie0125/osop-vscode) | VS Code extension |

## Documentation

| Document | Description |
|----------|-------------|
| [OSOP Core](./docs/OSOP-CORE.md) | Core spec — 4 types, 4 modes (start here) |
| [Full Spec](./docs/SPEC.md) | Complete protocol (12 types, 10 modes) |
| [Node Types](./docs/node-types.md) | All types with examples |
| [Conformance](./docs/conformance-levels.md) | L0–L3 adoption levels |

## Schema Files

| File | Purpose |
|------|---------|
| `schema/osop-core.schema.json` | Core schema (recommended) |
| `schema/osop.schema.json` | Full schema (all types) |
| `schema/osoplog.schema.json` | Execution log schema |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). We welcome protocol proposals via RFC, new examples, and documentation improvements.

## License

Apache License 2.0
