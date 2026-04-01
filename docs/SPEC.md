# OSOP Protocol Specification Summary

**Version:** 1.0.0-draft
**Status:** Draft
**Date:** 2026-03-31

---

## 1. Overview

OSOP (Open Standard Operating Process) is a protocol for defining processes as structured, machine-readable, human-friendly documents. An OSOP file describes a directed graph of typed nodes connected by edges, with optional contracts, runtime configurations, and observability hooks.

This document provides a concise summary of the protocol structure. For detailed schemas, see the full JSON Schema files in the `schema/` directory.

## 2. File Format

OSOP files use YAML or JSON serialization.

| Property | Value |
|---|---|
| **File extensions** | `.osop.yaml`, `.osop.yml`, `.osop.json` |
| **YAML version** | 1.2 |
| **JSON version** | RFC 8259 |
| **Encoding** | UTF-8 |
| **Max file size** | 1 MB (recommended) |

YAML is the canonical format. JSON is supported for programmatic generation and consumption. The two representations are semantically identical.

## 3. Document Structure

Every OSOP document is a single YAML/JSON object with the following top-level structure:

```yaml
osop_version: "1.0"          # Required. Protocol version (SemVer major.minor).
id: "deploy-service"          # Required. Unique identifier (kebab-case, [a-z0-9-]).
name: "Deploy Service"        # Required. Human-readable name.
description: ""               # Optional. Purpose and context.
version: "2.1.0"              # Optional. Workflow version (SemVer).
owner: ""                     # Optional. Team or individual responsible.
tags: []                      # Optional. Classification tags.
metadata: {}                  # Optional. Arbitrary key-value metadata.

triggers: []                  # Optional. Events that start the workflow.
inputs: {}                    # Optional. Workflow-level input schema.
outputs: {}                   # Optional. Workflow-level output schema.

nodes: []                     # Required. List of process nodes.
edges: []                     # Required. List of connections between nodes.

contracts: {}                 # Optional. Message contracts between nodes.
security: {}                  # Optional. Security and access control.
retry: {}                     # Optional. Default retry policy.
timeout: ""                   # Optional. Global timeout.
ledger: {}                    # Optional. Audit and execution logging.
observability: {}             # Optional. Tracing, metrics, logging config.
evolution: {}                 # Optional. Deprecation and migration info.
extensions: {}                # Optional. Custom extensions (x- prefix).
```

### 3.1 Required Fields

| Field | Type | Description |
|---|---|---|
| `osop_version` | `string` | Protocol version. Must be `"1.0"` for this spec. |
| `id` | `string` | Unique process identifier. Pattern: `^[a-z][a-z0-9-]*$`. Max 128 chars. |
| `name` | `string` | Human-readable display name. Max 256 chars. |
| `nodes` | `array<Node>` | At least one node must be defined. |
| `edges` | `array<Edge>` | At least one edge must be defined (unless single-node workflow). |

## 4. Node Model

A node represents a single step, actor, or operation in a process.

### 4.1 Node Structure

```yaml
nodes:
  - id: "run-tests"           # Required. Unique within workflow.
    type: "cli"               # Required. One of 12 node types.
    subtype: "script"         # Optional. Type-specific subtype.
    name: "Run Test Suite"    # Required. Human-readable name.
    description: ""           # Optional.
    inputs: {}                # Optional. Input schema (JSON Schema).
    outputs: {}               # Optional. Output schema (JSON Schema).
    runtime: {}               # Optional. Type-specific runtime config.
    retry: {}                 # Optional. Node-level retry policy.
    timeout: "10m"            # Optional. Node-level timeout.
    metadata: {}              # Optional. Arbitrary metadata.
```

### 4.2 The 12 Node Types

| Type | Description | Example Subtypes |
|---|---|---|
| `human` | Tasks performed by people | `approval`, `review`, `input`, `decision` |
| `agent` | AI/LLM agent operations | `llm`, `rag`, `classifier`, `planner`, `multi-agent` |
| `api` | HTTP/gRPC/GraphQL calls | `rest`, `graphql`, `grpc`, `webhook`, `soap` |
| `cli` | Command-line operations | `script`, `binary`, `repl` |
| `db` | Database operations | `query`, `migration`, `backup`, `seed` |
| `git` | Version control operations | `commit`, `branch`, `merge`, `tag`, `pr` |
| `docker` | Container operations | `build`, `push`, `run`, `compose` |
| `cicd` | CI/CD pipeline steps | `build`, `test`, `deploy`, `release`, `rollback` |
| `mcp` | Model Context Protocol calls | `tool`, `resource`, `prompt`, `sampling` |
| `system` | OS/system-level operations | `file`, `network`, `process`, `cron` |
| `infra` | Infrastructure provisioning | `terraform`, `cloudformation`, `pulumi`, `k8s`, `helm` |
| `data` | Data processing operations | `transform`, `validate`, `load`, `extract`, `aggregate` |

For detailed documentation of each type, see [node-types.md](./node-types.md).

### 4.3 Runtime Configuration

Each node type defines its own `runtime` schema. The runtime block contains everything needed for an execution engine to run the node.

```yaml
# Example: API node runtime
runtime:
  method: POST
  url: "https://api.example.com/deploy"
  headers:
    Authorization: "Bearer ${secrets.API_TOKEN}"
  body:
    service: "${inputs.service_name}"
    version: "${inputs.version}"
  response_mapping:
    deploy_id: "$.data.id"
```

## 5. Edge Model

An edge defines the connection and flow control between two nodes.

### 5.1 Edge Structure

```yaml
edges:
  - from: "build"              # Required. Source node ID.
    to: "test"                 # Required. Target node ID.
    mode: "sequential"         # Optional. Default: "sequential".
    when: ""                   # Optional. CEL condition expression.
    label: ""                  # Optional. Human-readable label.
    contract: ""               # Optional. Reference to a contract ID.
    transform: {}              # Optional. Data transformation.
    metadata: {}               # Optional. Arbitrary metadata.
```

### 5.2 The 8 Edge Modes

| Mode | Description | `when` Required? |
|---|---|---|
| `sequential` | Execute target after source completes. Default mode. | No |
| `conditional` | Execute target only if `when` evaluates to `true`. | Yes |
| `parallel` | Execute target concurrently with other parallel edges from same source. | No |
| `loop` | Repeat target while `when` evaluates to `true`. | Yes |
| `event` | Execute target when an external event matches `when`. | Yes |
| `fallback` | Execute target if source fails. | No |
| `error` | Execute target on specific error conditions matching `when`. | Optional |
| `timeout` | Execute target if source exceeds its timeout. | No |

### 5.3 Parallel Edges

When multiple edges from the same source node have `mode: parallel`, their targets execute concurrently. The next sequential node waits for all parallel branches to complete (implicit join).

```yaml
edges:
  - from: "build"
    to: "unit-tests"
    mode: "parallel"
  - from: "build"
    to: "integration-tests"
    mode: "parallel"
  - from: "build"
    to: "lint"
    mode: "parallel"
  - from: "unit-tests"
    to: "deploy"
    mode: "sequential"
  - from: "integration-tests"
    to: "deploy"
    mode: "sequential"
  - from: "lint"
    to: "deploy"
    mode: "sequential"
```

## 6. Message Contracts

Contracts define the data schema exchanged between nodes.

```yaml
contracts:
  build-to-test:
    description: "Artifact produced by build, consumed by test"
    schema:
      type: object
      required: [artifact_path, commit_sha]
      properties:
        artifact_path:
          type: string
          description: "Path to the build artifact"
        commit_sha:
          type: string
          pattern: "^[a-f0-9]{40}$"
        build_time_ms:
          type: integer
          minimum: 0
```

Contracts use [JSON Schema](https://json-schema.org/) (draft 2020-12) for schema definitions.

## 7. Triggers

Triggers define how a workflow is initiated.

```yaml
triggers:
  - type: "webhook"
    config:
      path: "/deploy"
      method: POST
  - type: "schedule"
    config:
      cron: "0 2 * * *"
  - type: "event"
    config:
      source: "github"
      event: "push"
      filter:
        branch: "main"
  - type: "manual"
    config:
      required_inputs: ["environment", "version"]
```

Supported trigger types: `webhook`, `schedule`, `event`, `manual`, `api`, `file_watch`.

## 8. Security

```yaml
security:
  authentication:
    type: "oidc"
    provider: "https://auth.example.com"
  authorization:
    model: "rbac"
    roles:
      deployer:
        can_execute: ["deploy-*"]
        can_approve: ["production-*"]
      viewer:
        can_read: ["*"]
  secrets:
    provider: "vault"
    config:
      address: "https://vault.example.com"
      path: "secret/data/deploy"
```

## 9. Retry Policy

```yaml
retry:
  max_attempts: 3
  backoff:
    type: "exponential"      # "fixed", "exponential", "linear"
    initial_delay: "1s"
    max_delay: "30s"
    multiplier: 2.0
  retryable_errors:
    - "TIMEOUT"
    - "CONNECTION_REFUSED"
    - "5xx"
```

Retry policies can be defined globally (top-level) or per-node. Node-level policies override the global policy.

## 10. Observability

```yaml
observability:
  tracing:
    enabled: true
    exporter: "otlp"
    endpoint: "https://otel.example.com:4317"
    sampling_rate: 1.0
  metrics:
    enabled: true
    exporter: "prometheus"
    prefix: "osop_"
  logging:
    level: "info"
    format: "json"
    destination: "stdout"
```

OSOP uses [OpenTelemetry](https://opentelemetry.io/) as its observability standard.

## 11. Ledger

The ledger provides an immutable audit trail of workflow executions.

```yaml
ledger:
  enabled: true
  storage:
    type: "append-only-log"
    backend: "s3"
    config:
      bucket: "osop-ledger"
      prefix: "executions/"
  retention: "90d"
  fields:
    - run_id
    - timestamp
    - node_id
    - status
    - duration_ms
    - inputs_hash
    - outputs_hash
    - actor
```

## 12. Evolution

```yaml
evolution:
  deprecated_nodes:
    - id: "old-deploy"
      reason: "Replaced by blue-green deployment"
      replacement: "blue-green-deploy"
      sunset_date: "2026-06-01"
  changelog:
    - version: "2.1.0"
      date: "2026-03-15"
      changes:
        - "Added canary deployment step"
        - "Increased test timeout to 10m"
```

## 13. Conformance Levels

OSOP defines four conformance levels (0 through 3) that progressively add capabilities:

| Level | Name | Requirements |
|---|---|---|
| 0 | Descriptive | `nodes`, `edges`, `name`, `id`, `osop_version` |
| 1 | Validatable | Level 0 + `inputs`/`outputs`, `contracts`, JSON Schema |
| 2 | Executable | Level 1 + `runtime`, `retry`, `timeout`, `security` |
| 3 | Observable | Level 2 + `ledger`, `observability`, `evolution` |

For full details, see [conformance-levels.md](./conformance-levels.md).

## 14. Extension Mechanism

OSOP supports custom extensions using the `x-` prefix at any level of the document.

```yaml
nodes:
  - id: "custom-step"
    type: "api"
    name: "Custom Step"
    x-internal-team: "platform"
    x-cost-center: "eng-42"
    runtime:
      method: GET
      url: "https://api.example.com/status"
      x-custom-retry: true
```

Rules for extensions:
- Extension keys MUST start with `x-`.
- Extension values can be any valid YAML/JSON type.
- Engines MUST ignore extensions they do not understand.
- Extensions MUST NOT alter the semantics of standard fields.

## 15. Expression Language

OSOP uses [CEL (Common Expression Language)](https://cel.dev/) for all `when` conditions and dynamic expressions.

```yaml
edges:
  - from: "test"
    to: "deploy"
    mode: "conditional"
    when: "outputs.test.passed == true && inputs.environment != 'production'"
```

For details, see [expression-language.md](./expression-language.md).

## 16. Variable Interpolation

OSOP supports variable interpolation using `${...}` syntax in string values.

| Namespace | Description | Example |
|---|---|---|
| `inputs` | Workflow inputs | `${inputs.version}` |
| `outputs.<node_id>` | Output of a specific node | `${outputs.build.artifact_path}` |
| `secrets` | Secret values | `${secrets.API_TOKEN}` |
| `env` | Environment variables | `${env.HOME}` |
| `metadata` | Workflow metadata | `${metadata.run_id}` |

## 17. Complete Example

```yaml
osop_version: "1.0"
id: "deploy-web-service"
name: "Deploy Web Service"
description: "Build, test, and deploy the web service to production."
version: "2.1.0"
owner: "platform-team"
tags: [deployment, production, web]

inputs:
  service_name:
    type: string
    description: "Name of the service to deploy"
  version:
    type: string
    pattern: "^\\d+\\.\\d+\\.\\d+$"
  environment:
    type: string
    enum: [staging, production]
    default: staging

nodes:
  - id: "build"
    type: "docker"
    subtype: "build"
    name: "Build Container Image"
    runtime:
      dockerfile: "./Dockerfile"
      context: "."
      image: "registry.example.com/${inputs.service_name}"
      tag: "${inputs.version}"

  - id: "test"
    type: "cicd"
    subtype: "test"
    name: "Run Test Suite"
    timeout: "10m"
    runtime:
      command: "make test"
      environment:
        CI: "true"

  - id: "security-scan"
    type: "cli"
    subtype: "binary"
    name: "Security Scan"
    runtime:
      command: "trivy image registry.example.com/${inputs.service_name}:${inputs.version}"
      fail_on: "HIGH,CRITICAL"

  - id: "approve"
    type: "human"
    subtype: "approval"
    name: "Production Approval"
    runtime:
      approvers: ["platform-lead", "eng-manager"]
      min_approvals: 1
      timeout: "24h"

  - id: "deploy"
    type: "infra"
    subtype: "k8s"
    name: "Deploy to Kubernetes"
    runtime:
      manifest: "./k8s/deployment.yaml"
      namespace: "${inputs.environment}"
      wait: true
      timeout: "5m"

  - id: "verify"
    type: "api"
    subtype: "rest"
    name: "Health Check"
    retry:
      max_attempts: 5
      backoff:
        type: exponential
        initial_delay: "5s"
    runtime:
      method: GET
      url: "https://${inputs.service_name}.example.com/health"
      expected_status: 200

edges:
  - from: "build"
    to: "test"
    mode: "parallel"
  - from: "build"
    to: "security-scan"
    mode: "parallel"
  - from: "test"
    to: "approve"
  - from: "security-scan"
    to: "approve"
  - from: "approve"
    to: "deploy"
    mode: "conditional"
    when: "outputs.approve.decision == 'approved'"
  - from: "deploy"
    to: "verify"

contracts:
  build-output:
    schema:
      type: object
      required: [image, digest]
      properties:
        image:
          type: string
        digest:
          type: string
          pattern: "^sha256:[a-f0-9]{64}$"

observability:
  tracing:
    enabled: true
    exporter: "otlp"
  logging:
    level: "info"
    format: "json"
```

---

## 18. Agent Runtime Binding

OSOP files serve as executable SOPs for AI agents. See [agent-runtime-binding.md](./agent-runtime-binding.md) for:

- How agents read and execute `.osop` files step by step
- Node-to-action mapping (each node type → what the agent does)
- Edge-to-control-flow mapping (each edge mode → agent behavior)
- `.osoplog` execution record format
- MCP tool binding
- Multi-agent orchestration and handoff protocol
- Iteration protocol (analyze past runs → improve workflow)
- Security considerations (permission model, dangerous action classification)

---

## 19. Execution Reports

OSOP supports generating human-readable reports from workflow definitions and execution logs. Reports transform `.osoplog` records into structured HTML or plain text summaries.

See [execution-report.md](./execution-report.md) for:

- Three output formats: HTML, ANSI text, plain text
- Report structure: header, summary, node timeline, cost breakdown
- Design principles: zero icons, 5-color system, minimal output
- HTML and text report templates
- Input modes: definition-only, execution, log-only

---

*For the full JSON Schema definition, see `schema/osop-v1.schema.json`.*
*For questions and contributions, see [CONTRIBUTING.md](../CONTRIBUTING.md).*
