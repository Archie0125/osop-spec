# OSOP Session Logging for Claude Code

> Drop this into your project's `CLAUDE.md` to enable automatic OSOP session logging.
> Every significant Claude Code session will produce `.osop` + `.osoplog.yaml` files
> that you can visualize at https://osop-editor.vercel.app

## Instructions for Claude Code

After completing a significant task (multi-step work, not trivial one-liners), produce an **OSOP session log**:

1. **Create a `.osop` file** describing the workflow you followed
2. **Create a `.osoplog.yaml` file** recording what you actually did
3. **Tell the user** to open both files at https://osop-editor.vercel.app and click the Risk button

### .osop format (workflow definition)

```yaml
osop_version: "1.0"
id: "session-<short-description>"
name: "<What you did>"
description: "<1-2 sentence summary>"
version: "1.0.0"
tags: [claude-code, <relevant-tags>]

nodes:
  - id: "<step-id>"
    type: "<node-type>"   # human, agent, mcp, cli, api, cicd, git, etc.
    name: "<Step Name>"
    description: "<What this step does>"
    security:
      risk_level: "<low|medium|high|critical>"  # Optional

edges:
  - from: "<step-a>"
    to: "<step-b>"
    mode: "sequential"    # sequential, parallel, conditional, fallback, etc.
```

### .osoplog.yaml format (execution record)

```yaml
osoplog_version: "1.0"
run_id: "<uuid>"
workflow_id: "<matches .osop id>"
mode: "live"
status: "COMPLETED"

trigger:
  type: "manual"
  actor: "user"
  timestamp: "<ISO timestamp>"

started_at: "<ISO timestamp>"
ended_at: "<ISO timestamp>"
duration_ms: <total ms>

runtime:
  agent: "claude-code"
  model: "<model>"

node_records:
  - node_id: "<step-id>"
    node_type: "<type>"
    attempt: 1
    status: "COMPLETED"
    started_at: "<ISO>"
    ended_at: "<ISO>"
    duration_ms: <ms>
    outputs:
      <what you produced>
    tools_used:
      - { tool: "<tool-name>", calls: <n> }

result_summary: "<1-2 sentence summary>"
```

### Node type mapping

| Claude Code Action | OSOP Node Type |
|---|---|
| Read/explore files | `mcp` |
| Edit/write files | `mcp` |
| Run shell commands | `cli` |
| Run tests | `cicd` |
| Git operations | `git` |
| Analyze/reason | `agent` |
| Ask user | `human` |
| API calls | `api` |

### Where to save

Save to a `sessions/` directory in the project root:
- `sessions/YYYY-MM-DD-<short-desc>.osop`
- `sessions/YYYY-MM-DD-<short-desc>.osoplog.yaml`

### When to generate

- After completing multi-step tasks (3+ distinct steps)
- After debugging sessions
- After feature implementations
- When the user asks "what did you do?"
