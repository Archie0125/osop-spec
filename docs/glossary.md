# Glossary

| Term | Definition |
|------|-----------|
| `.osop` | The workflow definition file (YAML or JSON). Single Source of Truth (SSOT). |
| `node` | A single unit of work. Types: human, agent, api, cli, db, git, docker, cicd, mcp, system. |
| `edge` | A directed connection between nodes. Modes: sequential, conditional, parallel, loop, event. |
| `contract` | The explicit agreement for a node: inputs, outputs, success criteria, failure modes, handoff. |
| `message envelope` | The standard wrapper for inter-node messages: run_id, producer, consumer, kind, payload, status. |
| `ledger` | Immutable run records for every workflow execution and node execution. |
| `IR` | Intermediate Representation — the internal graph compiled from `.osop` before execution. |
| `story view` | A human-readable narrative generated from the workflow definition. |
| `evolution` | The AI-assisted PR workflow: ledger + metrics → optimizer agent → patch/PR → human review → merge. |
| `handoff` | The structured summary passed from one node to the next. |
| `SSOT` | Single Source of Truth — the `.osop` file is the one authoritative definition of a process. |