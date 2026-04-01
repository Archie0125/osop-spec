# OSP-0001: Agent Orchestration

- **Status:** Draft
- **Author:** OSOP Core Team
- **Created:** 2026-04-01
- **Target Version:** 1.1.0

## Summary

Extend the OSOP spec to describe **sub-agent spawning and coordination** — the pattern where a coordinator agent creates child agents to perform parallel work, then synthesizes their results.

This pattern is used by Claude Code (Explore/Plan/Worker agents), AutoGen, CrewAI, and other multi-agent frameworks.

## Motivation

Current OSOP can describe `agent` nodes and `parallel` edges, but cannot express:

1. **Parent-child relationships** — which agent spawned which
2. **Spawn policies** — limits on child count, tool access, recursion
3. **Isolation** — whether children run in separate contexts (worktrees, sandboxes)
4. **Coordinator pattern** — one agent dispatches work, doesn't execute itself

Without these, OSOP cannot accurately describe the most common AI agent orchestration pattern.

## Specification

### New Agent Subtypes

Add to the `agent` node type:

| Subtype | Description |
|---------|-------------|
| `coordinator` | Dispatches work to child agents, synthesizes results |
| `explore` | Read-only child agent for codebase search/research |
| `plan` | Read-only child agent for planning/architecture |
| `worker` | General-purpose child agent with full tool access |

### New Node Fields (Optional)

```yaml
nodes:
  - id: "worker_1"
    type: "agent"
    subtype: "explore"
    parent: "coordinator_id"    # References parent node id
```

| Field | Type | Description |
|-------|------|-------------|
| `parent` | `string` | ID of the parent node that spawns this agent |

### Spawn Policy (Optional, on coordinator nodes)

```yaml
nodes:
  - id: "coordinator"
    type: "agent"
    subtype: "coordinator"
    spawn_policy:
      max_children: 10
      child_tools: ["Read", "Grep", "Glob", "Bash"]
      can_spawn_children: false
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `spawn_policy.max_children` | `integer` | unlimited | Maximum child agents |
| `spawn_policy.child_tools` | `string[]` | all | Tools available to children |
| `spawn_policy.can_spawn_children` | `boolean` | `false` | Whether children can spawn their own children |

### New Edge Mode: `spawn`

```yaml
edges:
  - from: "coordinator"
    to: "worker_1"
    mode: "spawn"
    spawn_count: 3    # Optional: number of parallel instances
```

The `spawn` edge mode indicates the source node creates the target node as a child agent. Semantically similar to `parallel` but with parent-child ownership.

| Attribute | Type | Description |
|-----------|------|-------------|
| `spawn_count` | `integer` | Number of parallel instances to create |

### Execution Log Extensions (.osoplog)

```yaml
node_records:
  - node_id: "worker_1"
    parent_id: "coordinator"    # Which node spawned this
    spawn_index: 1              # Index among siblings (1-based)
    isolation: "worktree"       # Isolation mode: worktree, sandbox, none
```

| Field | Type | Description |
|-------|------|-------------|
| `parent_id` | `string` | ID of the parent node that spawned this record |
| `spawn_index` | `integer` | 1-based index among sibling spawns |
| `isolation` | `string` | Isolation mode: `worktree`, `sandbox`, `container`, `none` |

## Backward Compatibility

All new fields are **optional**. Existing `.osop` and `.osoplog` files remain valid without changes.

## Examples

See `osop-examples/claude-code-session/fix-auth-bug.osop` for a complete example.

## References

- Claude Code AgentTool source (sub-agent spawning with strict child constraints)
- AutoGen multi-agent conversations
- CrewAI crew/agent hierarchy
