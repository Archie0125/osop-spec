# OSOP Conformance Levels

**Version:** 1.0.0-draft

---

## Overview

OSOP defines four conformance levels that allow incremental adoption. A workflow at Level 0 is useful for documentation. A workflow at Level 3 is production-grade with full observability and audit capabilities.

Each level builds on the previous one. A Level 2 workflow satisfies all Level 0 and Level 1 requirements.

Conformance levels are **not declared** in the OSOP file. They are **inferred** by validators based on which fields are present and well-formed. A validation tool examines the document and reports which level it satisfies.

---

## Level 0 — Descriptive

**Purpose:** Document a process so humans can understand it.

**Use cases:**
- Onboarding documentation
- Runbook drafts
- Process discovery and mapping
- Architecture decision records that describe workflows

**Required fields:**

| Field | Description |
|---|---|
| `osop_version` | Protocol version |
| `id` | Unique process identifier |
| `name` | Human-readable name |
| `nodes[].id` | Unique identifier for each node |
| `nodes[].type` | One of the 12 node types |
| `nodes[].name` | Human-readable node name |
| `edges[].from` | Source node ID |
| `edges[].to` | Target node ID |

**Minimum viable example:**

```yaml
osop_version: "1.0"
id: "incident-response"
name: "Incident Response Process"
description: "How we respond to production incidents."

nodes:
  - id: "detect"
    type: "system"
    name: "Alert Fires"
  - id: "triage"
    type: "human"
    name: "On-Call Triages Severity"
  - id: "mitigate"
    type: "human"
    name: "Team Mitigates Issue"
  - id: "postmortem"
    type: "human"
    name: "Write Postmortem"

edges:
  - from: "detect"
    to: "triage"
  - from: "triage"
    to: "mitigate"
  - from: "mitigate"
    to: "postmortem"
```

**What you can do at Level 0:**
- Render the process as a visual graph
- Generate documentation from the OSOP file
- Search and catalog processes across an organization
- Validate that the graph structure is acyclic and connected

**What you cannot do:**
- Validate data flowing between nodes
- Execute the process automatically
- Audit past executions

---

## Level 1 — Validatable

**Purpose:** Define precise data contracts so the process can be statically validated without executing it.

**Use cases:**
- API contract testing
- CI/CD schema validation gates
- Cross-team interface agreements
- Pre-deployment validation checks

**Additional requirements (beyond Level 0):**

| Field | Description |
|---|---|
| `nodes[].inputs` | JSON Schema for node inputs |
| `nodes[].outputs` | JSON Schema for node outputs |
| `contracts` | At least one message contract between nodes |
| `inputs` | Workflow-level input schema |

**What Level 1 adds:**

```yaml
inputs:
  environment:
    type: string
    enum: [staging, production]
  service_name:
    type: string
    minLength: 1

nodes:
  - id: "build"
    type: "docker"
    name: "Build Image"
    inputs:
      service_name:
        type: string
    outputs:
      image_uri:
        type: string
        format: uri
      digest:
        type: string
        pattern: "^sha256:[a-f0-9]{64}$"

  - id: "deploy"
    type: "infra"
    name: "Deploy to Cluster"
    inputs:
      image_uri:
        type: string
        format: uri
      environment:
        type: string

contracts:
  build-to-deploy:
    description: "Container image reference passed from build to deploy"
    schema:
      type: object
      required: [image_uri, digest]
      properties:
        image_uri:
          type: string
          format: uri
        digest:
          type: string
```

**What you can do at Level 1:**
- Everything from Level 0
- Validate that node outputs satisfy downstream node inputs
- Validate contracts between connected nodes
- Detect schema mismatches before runtime
- Generate type-safe client stubs
- Produce data flow documentation automatically

---

## Level 2 — Executable

**Purpose:** Provide enough configuration for an engine to execute the process end-to-end.

**Use cases:**
- Automated CI/CD pipelines
- AI agent orchestration
- Scheduled data pipelines
- Infrastructure provisioning workflows

**Additional requirements (beyond Level 1):**

| Field | Description |
|---|---|
| `nodes[].runtime` | Runtime configuration for every non-human node |
| `edges[].mode` | Explicit edge modes where not sequential |
| `edges[].when` | CEL expressions for conditional/loop/event edges |
| `retry` | At least one retry policy (global or per-node) |
| `timeout` | At least one timeout (global or per-node) |
| `security` | Authentication and/or secrets configuration |

**What Level 2 adds:**

```yaml
security:
  secrets:
    provider: "env"

retry:
  max_attempts: 3
  backoff:
    type: exponential
    initial_delay: "2s"

timeout: "30m"

nodes:
  - id: "build"
    type: "docker"
    name: "Build Image"
    timeout: "10m"
    inputs:
      service_name:
        type: string
    outputs:
      image_uri:
        type: string
      digest:
        type: string
    runtime:
      dockerfile: "./Dockerfile"
      context: "."
      image: "registry.example.com/${inputs.service_name}"
      tag: "${inputs.version}"
      build_args:
        NODE_ENV: "production"

  - id: "deploy"
    type: "infra"
    subtype: "k8s"
    name: "Deploy to Cluster"
    timeout: "5m"
    retry:
      max_attempts: 2
      backoff:
        type: fixed
        initial_delay: "10s"
    inputs:
      image_uri:
        type: string
      environment:
        type: string
    runtime:
      manifest: "./k8s/deployment.yaml"
      namespace: "${inputs.environment}"
      wait: true

edges:
  - from: "build"
    to: "deploy"
    mode: "conditional"
    when: "outputs.build.digest != ''"
```

**What you can do at Level 2:**
- Everything from Level 1
- Execute the workflow via a compatible engine
- Handle failures with retry and timeout
- Resolve secrets and credentials
- Evaluate conditional routing at runtime

**Requirements for human nodes at Level 2:**

Human nodes do not require a `runtime` block in the traditional sense. Instead, they must specify enough information for an engine to route the task to the correct person and collect their response:

```yaml
- id: "approve"
  type: "human"
  subtype: "approval"
  name: "Production Approval"
  runtime:
    assignees: ["platform-lead"]
    channel: "slack"
    timeout: "24h"
    prompt: "Approve deployment of ${inputs.service_name} v${inputs.version} to production?"
    options: ["approved", "rejected"]
```

---

## Level 3 — Observable

**Purpose:** Add full observability, audit, and evolution support for production-grade workflows.

**Use cases:**
- Regulated environments (SOC 2, HIPAA, PCI-DSS)
- Mission-critical production pipelines
- Workflows requiring post-incident forensics
- Processes under active evolution and deprecation

**Additional requirements (beyond Level 2):**

| Field | Description |
|---|---|
| `ledger` | Audit trail configuration |
| `observability` | Tracing, metrics, and/or logging configuration |
| `evolution` | Changelog and/or deprecated nodes |

**What Level 3 adds:**

```yaml
ledger:
  enabled: true
  storage:
    type: "append-only-log"
    backend: "s3"
    config:
      bucket: "osop-audit"
      prefix: "deploy-web-service/"
  retention: "365d"
  fields:
    - run_id
    - timestamp
    - node_id
    - status
    - duration_ms
    - actor
    - inputs_hash
    - outputs_hash
    - error

observability:
  tracing:
    enabled: true
    exporter: "otlp"
    endpoint: "https://otel-collector.internal:4317"
    sampling_rate: 1.0
    propagation: "w3c"
  metrics:
    enabled: true
    exporter: "prometheus"
    prefix: "osop_deploy_"
    labels:
      service: "${inputs.service_name}"
      environment: "${inputs.environment}"
  logging:
    level: "info"
    format: "json"
    destination: "stdout"

evolution:
  deprecated_nodes:
    - id: "old-deploy-step"
      reason: "Replaced by blue-green deployment strategy"
      replacement: "deploy"
      sunset_date: "2026-09-01"
  changelog:
    - version: "2.1.0"
      date: "2026-03-15"
      changes:
        - "Added security scan step"
        - "Increased deploy timeout to 5m"
    - version: "2.0.0"
      date: "2026-01-10"
      changes:
        - "BREAKING: Switched from ECS to Kubernetes deployment"
        - "Added production approval gate"
```

**What you can do at Level 3:**
- Everything from Level 2
- Query an immutable audit log of every execution
- Trace requests across nodes with distributed tracing
- Emit metrics for dashboards and alerting
- Track process evolution over time
- Identify and plan migration away from deprecated nodes
- Meet compliance and regulatory audit requirements

---

## Conformance Validation

A conformance validator inspects an OSOP document and reports the highest level it satisfies.

```
$ osop validate deploy-web-service.osop.yaml

Conformance Report: deploy-web-service.osop.yaml
-------------------------------------------------
Level 0 (Descriptive):   PASS
Level 1 (Validatable):   PASS
Level 2 (Executable):    PASS
Level 3 (Observable):    PASS  (2 warnings)

Warnings:
  - evolution.deprecated_nodes[0].sunset_date is in the past (2026-09-01)
  - observability.metrics.exporter "prometheus" requires pull endpoint configuration

Result: Level 3 (Observable)
```

A document that passes Level 2 but not Level 3 is still a valid, executable OSOP workflow — it simply does not include production observability features.

---

## Choosing a Conformance Level

| Scenario | Recommended Level |
|---|---|
| Documenting an existing manual process | Level 0 |
| Defining API contracts between teams | Level 1 |
| Automating a CI/CD pipeline | Level 2 |
| Running a regulated production workflow | Level 3 |
| Starting with OSOP for the first time | Level 0, then iterate |

The levels are designed to support incremental adoption. Start at Level 0 to capture what exists today, then progressively add structure as the process matures.

---

*See [SPEC.md](./SPEC.md) for the full protocol specification.*
