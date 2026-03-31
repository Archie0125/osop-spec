# OSOP Expression Language

**Version:** 1.0.0-draft

---

## Overview

OSOP uses [CEL (Common Expression Language)](https://cel.dev/) as its expression language for all `when` conditions on edges, dynamic string evaluation, and runtime logic. CEL was chosen because it is fast, safe, well-specified, and already adopted by Kubernetes, Google Cloud IAM, and Firebase.

CEL expressions in OSOP are always **pure** — they cannot produce side effects, make network calls, or modify state. They evaluate to a value (typically boolean for `when` conditions) based on the available context variables.

## Where Expressions Are Used

| Location | Type | Purpose |
|---|---|---|
| `edges[].when` | `boolean` | Determine whether an edge is traversed |
| `triggers[].config.filter` | `boolean` | Filter which events activate a trigger |
| Variable interpolation | `string` | Dynamic values in `${...}` blocks |

## Available Context Variables

CEL expressions in OSOP have access to the following context:

### `inputs`

Workflow-level input values.

```cel
inputs.environment == "production"
inputs.version.matches("^[0-9]+\\.[0-9]+\\.[0-9]+$")
inputs.tags.exists(t, t == "critical")
```

### `outputs.<node_id>`

Output values from a completed node. Only nodes that have already executed (upstream in the graph) are available.

```cel
outputs.build.digest != ""
outputs.test.passed == true
outputs.test.coverage >= 80.0
outputs.security_scan.vulnerabilities.size() == 0
```

### `metadata`

Execution metadata provided by the engine.

```cel
metadata.run_id != ""
metadata.attempt_number <= 3
metadata.triggered_by == "schedule"
```

### `env`

Environment variables available to the engine.

```cel
env.DEPLOY_ENV == "production"
has(env.FEATURE_FLAG_CANARY)
```

## CEL Type System

OSOP uses the standard CEL type system:

| CEL Type | JSON Schema Equivalent | Example |
|---|---|---|
| `bool` | `boolean` | `true`, `false` |
| `int` | `integer` | `42`, `-1` |
| `uint` | `integer` (minimum: 0) | `42u` |
| `double` | `number` | `3.14` |
| `string` | `string` | `"hello"` |
| `bytes` | `string` (format: byte) | `b"data"` |
| `list` | `array` | `[1, 2, 3]` |
| `map` | `object` | `{"key": "value"}` |
| `null_type` | `null` | `null` |
| `timestamp` | `string` (format: date-time) | `timestamp("2026-03-31T00:00:00Z")` |
| `duration` | `string` (format: duration) | `duration("5m")` |

## Operators

### Comparison

```cel
inputs.count == 5
inputs.count != 0
inputs.count > 10
inputs.count >= 10
inputs.count < 100
inputs.count <= 100
```

### Logical

```cel
inputs.env == "prod" && outputs.test.passed == true
inputs.env == "staging" || inputs.force_deploy == true
!(outputs.scan.has_vulnerabilities)
```

### Arithmetic

```cel
outputs.test.coverage + outputs.integration_test.coverage > 150.0
metadata.attempt_number * 2
```

### String Operations

```cel
inputs.branch.startsWith("release/")
inputs.email.endsWith("@example.com")
inputs.name.contains("admin")
inputs.version.matches("[0-9]+\\.[0-9]+\\.[0-9]+")
inputs.message.size() <= 280
```

### List Operations

```cel
inputs.tags.size() > 0
inputs.tags.exists(t, t == "urgent")
inputs.tags.all(t, t.size() > 0)
inputs.approvers.exists_one(a, a == "security-lead")
[1, 2, 3].map(x, x * 2)
[1, 2, 3].filter(x, x > 1)
```

### Map Operations

```cel
has(outputs.build.metadata.commit_sha)
outputs.build.metadata["commit_sha"]
```

### Ternary (Conditional)

```cel
inputs.environment == "production" ? "prod-cluster" : "staging-cluster"
```

## Standard Functions

OSOP engines MUST support the following CEL standard functions:

| Function | Description | Example |
|---|---|---|
| `size()` | Length of string, list, or map | `inputs.name.size()` |
| `contains()` | String contains substring | `inputs.url.contains("https")` |
| `startsWith()` | String starts with prefix | `inputs.branch.startsWith("feat/")` |
| `endsWith()` | String ends with suffix | `inputs.file.endsWith(".yaml")` |
| `matches()` | Regex match | `inputs.version.matches("^v[0-9]+")` |
| `has()` | Field existence check | `has(outputs.build.artifact)` |
| `type()` | Runtime type check | `type(inputs.count) == int` |
| `int()` | Convert to integer | `int(inputs.count_str)` |
| `uint()` | Convert to unsigned integer | `uint(inputs.port)` |
| `double()` | Convert to double | `double(inputs.threshold)` |
| `string()` | Convert to string | `string(inputs.count)` |
| `timestamp()` | Parse timestamp | `timestamp("2026-01-01T00:00:00Z")` |
| `duration()` | Parse duration | `duration("5m30s")` |

## OSOP-Specific Functions

In addition to standard CEL, OSOP defines these extension functions:

| Function | Description | Example |
|---|---|---|
| `status(node_id)` | Get execution status of a node | `status("build") == "success"` |
| `duration_of(node_id)` | Get execution duration of a node | `duration_of("build") < duration("10m")` |
| `error_of(node_id)` | Get error message of a failed node | `error_of("deploy").contains("timeout")` |
| `attempt()` | Current retry attempt number | `attempt() <= 3` |
| `now()` | Current timestamp | `now() - timestamp(inputs.deadline) < duration("1h")` |

## Examples by Edge Mode

### Conditional Edge

```yaml
edges:
  - from: "test"
    to: "deploy-staging"
    mode: "conditional"
    when: "outputs.test.passed == true && inputs.environment == 'staging'"

  - from: "test"
    to: "deploy-production"
    mode: "conditional"
    when: >
      outputs.test.passed == true
      && inputs.environment == 'production'
      && outputs.security_scan.vulnerabilities.size() == 0
```

### Loop Edge

```yaml
edges:
  - from: "poll-status"
    to: "poll-status"
    mode: "loop"
    when: "outputs.poll_status.state == 'in_progress' && attempt() <= 30"
```

### Event Edge

```yaml
edges:
  - from: "wait-for-approval"
    to: "deploy"
    mode: "event"
    when: "event.type == 'approval' && event.data.decision == 'approved'"
```

### Error Edge

```yaml
edges:
  - from: "deploy"
    to: "rollback"
    mode: "error"
    when: "error_of('deploy').contains('OOMKilled') || status('deploy') == 'timeout'"
```

## Expression Validation

OSOP validators SHOULD statically check CEL expressions at validation time:

1. **Parse check**: The expression must be syntactically valid CEL.
2. **Type check**: Variables referenced must exist in the available context (inputs, upstream outputs).
3. **Return type check**: `when` expressions must return `bool`.
4. **Safety check**: Expressions must not reference undefined variables or use unsupported functions.

Example validator output:

```
Edge "test -> deploy" expression error:
  when: "outputs.test.passsed == true"
                       ^^^^^^^ Unknown field 'passsed' on outputs.test.
                       Did you mean 'passed'?
```

## Performance Requirements

CEL expressions in OSOP MUST evaluate within **10 milliseconds** under normal conditions. Engines SHOULD reject or warn about expressions that are computationally expensive (e.g., deeply nested list comprehensions over large datasets).

Engines MAY cache compiled CEL programs for repeated evaluation.

---

*See [SPEC.md](./SPEC.md) for the full protocol specification.*
*See the [CEL specification](https://github.com/google/cel-spec) for the complete language reference.*
