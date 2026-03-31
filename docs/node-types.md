# Node Types v1

| Type | Purpose | Key runtime fields | Required contract fields | Risk |
|------|---------|--------------------|-------------------------|------|
| `human` | Review / approve / supply data | `interface` | `handoff`, allowed actions | Human delay, misjudgment |
| `agent` | LLM reasoning / extraction / planning | `provider`, `model` | `inputs/outputs/schema`, `success_criteria` | Hallucination |
| `api` | HTTP call | `method`, `url`, `headers` | `request/response schema`, `idempotency` | Timeout, retry storm |
| `cli` | Shell command | `os`, `command` | exit code expectations | Dangerous commands |
| `db` | Query / write / transaction | `engine`, `action`, `table` | schema mapping, transaction | Data corruption |
| `git` | Commit / push / PR | `repo`, `branch`, `action` | commit policy | Supply chain risk |
| `docker` | Reproducible execution environment | `image`, `command` | mounts/resources | Container escape |
| `cicd` | Deploy / rollback | `provider`, `env` | gating/rollback policy | Production incident |
| `mcp` | MCP tool/resource call | `tool_name` | input/output schema | Arbitrary code exec |
| `system` | Branch / merge / validate (flow control) | depends on subtype | explicit purpose | Low |