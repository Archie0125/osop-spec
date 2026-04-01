# OSP-0002: Tool Action Log

- **Status:** Draft
- **Author:** OSOP Core Team
- **Created:** 2026-04-01
- **Target Version:** 1.1.0

## Summary

Extend the `.osoplog` `tools_used` field with fine-grained action details, and add an optional `reasoning` block for capturing decision rationale.

## Motivation

Current `tools_used` is a flat list: `[{tool: "Read", calls: 4}]`. This tells us *what* was used but not *how* or *why*.

Claude Code's 42 tools each have distinct semantics — file reads, code searches, edits, shell commands. A flat count loses critical information for debugging, auditing, and learning from agent behavior.

Similarly, agents make decisions at every step but OSOP has no way to capture the reasoning chain — what alternatives were considered and why one was chosen.

## Specification

### Extended tools_used

```yaml
tools_used:
  - tool: "Read"
    calls: 4
    details:                           # NEW: optional array
      - file: "src/auth.ts"
        lines: "1-50"
        result: "found token refresh logic"
      - file: "src/middleware.ts"
        lines: "20-80"
        result: "found race condition in concurrent requests"
  - tool: "Edit"
    calls: 1
    side_effects: ["file_modified"]    # NEW: optional
    idempotent: false                  # NEW: optional
    details:
      - file: "src/auth.ts"
        lines_changed: 5
        description: "Added mutex lock"
  - tool: "Bash"
    calls: 1
    details:
      - command: "npx tsc --noEmit"
        exit_code: 0
        result: "pass"
```

| Field | Type | Description |
|-------|------|-------------|
| `details` | `array` | Per-invocation details (optional) |
| `details[].file` | `string` | File path involved |
| `details[].lines` | `string` | Line range (e.g., "1-50") |
| `details[].pattern` | `string` | Search pattern (for grep/search tools) |
| `details[].matches` | `integer` | Number of matches found |
| `details[].command` | `string` | Shell command executed |
| `details[].exit_code` | `integer` | Command exit code |
| `details[].result` | `string` | Brief result description |
| `details[].lines_changed` | `integer` | Lines added/modified |
| `details[].description` | `string` | What the action did |
| `side_effects` | `string[]` | Side effects: `file_modified`, `file_created`, `file_deleted`, `process_started`, `network_request` |
| `idempotent` | `boolean` | Whether repeating this action produces the same result |

### Reasoning Block

Add an optional `reasoning` field to `node_records`:

```yaml
node_records:
  - node_id: "architecture_choice"
    reasoning:
      question: "How to fix the race condition?"
      alternatives:
        - id: "mutex"
          description: "Add mutex lock to prevent concurrent refresh"
          pros: ["simple", "low risk", "minimal code change"]
          cons: ["potential deadlock if timeout not set"]
        - id: "queue"
          description: "Queue refresh requests, process sequentially"
          pros: ["no deadlock risk", "deterministic ordering"]
          cons: ["more complex", "higher latency", "needs queue infrastructure"]
      selected: "mutex"
      rationale: "Simpler solution with lower risk. Deadlock mitigated by 5s timeout."
      confidence: 0.85
```

| Field | Type | Description |
|-------|------|-------------|
| `reasoning.question` | `string` | The decision being made |
| `reasoning.alternatives` | `array` | Options considered |
| `reasoning.alternatives[].id` | `string` | Short identifier |
| `reasoning.alternatives[].description` | `string` | What this option entails |
| `reasoning.alternatives[].pros` | `string[]` | Advantages |
| `reasoning.alternatives[].cons` | `string[]` | Disadvantages |
| `reasoning.selected` | `string` | ID of the chosen alternative |
| `reasoning.rationale` | `string` | Why this was chosen |
| `reasoning.confidence` | `number` | 0.0-1.0 confidence in the decision |

## Backward Compatibility

All new fields are **optional**. Existing `.osoplog` files remain valid. Tools that don't understand these fields can safely ignore them.

## References

- Claude Code tool system (42 tools with per-tool prompt.ts usage manuals)
- Claude Code's "read before edit" enforcement pattern
