# OSOP Glossary

**Version:** 1.0.0-draft

---

## Terms

### Adapter

A software component that translates between the OSOP runtime abstraction and a specific platform or tool. For example, a Kubernetes adapter knows how to execute an `infra` node with subtype `k8s` against a real Kubernetes cluster. Adapters are how OSOP achieves platform-agnosticism.

### Agent

(1) An AI system capable of autonomous or semi-autonomous action, including LLMs with tool use, classifiers, and multi-agent systems. (2) In OSOP, the `agent` node type representing work performed by an AI system.

### Conformance Level

One of four progressive tiers (0 through 3) that describe the completeness of an OSOP document. Level 0 is descriptive only. Level 3 is production-grade with full observability. See [conformance-levels.md](./conformance-levels.md).

### Contract

A formal specification of the data exchanged between two connected nodes. Contracts use JSON Schema to define the structure, types, and constraints of messages. Contracts enable static validation of process correctness without execution.

### Edge

A directed connection between two nodes that defines execution flow. Edges have a mode (sequential, conditional, parallel, etc.) and may include a CEL condition expression. Edges are the "arrows" in a process graph.

### Edge Mode

The execution semantics of an edge. OSOP defines eight modes: `sequential`, `conditional`, `parallel`, `loop`, `event`, `fallback`, `error`, and `timeout`. The mode determines when and how the target node is activated.

### Engine

A software system that executes OSOP workflows. An engine reads an `.osop.yaml` file, resolves inputs and secrets, evaluates edge conditions, dispatches work to adapters, handles retries and timeouts, and records execution results. OSOP is engine-agnostic — multiple engines can implement the specification.

### Evolution

The process of changing an OSOP workflow over time. OSOP supports evolution through versioned changelogs, deprecated nodes with sunset dates, and replacement mappings. Evolution metadata lives in the `evolution` block.

### Expression

A CEL (Common Expression Language) string used in `when` fields on edges. Expressions evaluate to a boolean and determine whether an edge is traversed. See [expression-language.md](./expression-language.md).

### Extension

A custom field added to an OSOP document using the `x-` prefix. Extensions allow tools and organizations to attach domain-specific metadata without breaking compatibility with standard OSOP engines.

### Handoff

The transfer of control and data from one node to the next along an edge. A handoff includes the message payload (validated against the contract, if present), execution context, and any transformed data. In human-to-agent handoffs, the handoff may cross trust boundaries.

### Input

(1) Data provided to a workflow when it starts, defined in the top-level `inputs` block. (2) Data consumed by a specific node, defined in `nodes[].inputs`. Inputs use JSON Schema for type definitions.

### Ledger

An immutable, append-only log of workflow execution events. The ledger records which nodes ran, when, for how long, who or what executed them, and whether they succeeded. The ledger is essential for audit, compliance, and debugging.

### Message

The data payload passed along an edge from one node to the next. Messages are validated against contracts (if defined) and may be transformed by edge-level `transform` rules.

### Metadata

(1) Arbitrary key-value pairs attached to any OSOP element via the `metadata` field. (2) System-generated execution metadata such as `run_id`, `timestamp`, and `actor`, accessible via the `${metadata.*}` namespace.

### Node

A single step, actor, or operation in an OSOP workflow. Every node has an `id`, `type`, and `name`. Nodes are the "boxes" in a process graph. OSOP defines 4 Core node types (agent, api, cli, human) + 8 Extended types. See [node-types.md](./node-types.md).

### Node Type

One of the 12 categories of nodes in OSOP: `human`, `agent`, `api`, `cli`, `db`, `git`, `docker`, `cicd`, `mcp`, `system`, `infra`, `data`. The type determines what kind of work the node performs and what runtime configuration it expects.

### Observability

The ability to understand the internal state of a running workflow from its external outputs. OSOP supports observability through OpenTelemetry tracing, metrics emission, and structured logging, configured in the `observability` block.

### OSOP Document

A single `.osop.yaml` or `.osop.json` file that defines one workflow. An OSOP document is the atomic unit of process definition.

### OSOP Version

The version of the OSOP protocol that a document conforms to, specified in the `osop_version` field. Follows `major.minor` format. The current version is `1.0`.

### Output

(1) Data produced by a workflow upon completion, defined in the top-level `outputs` block. (2) Data produced by a specific node, defined in `nodes[].outputs`. Outputs from one node become available to downstream nodes via `${outputs.<node_id>.<field>}`.

### Retry Policy

Configuration that determines how a failed node is retried. Includes maximum attempts, backoff strategy (fixed, linear, exponential), delay parameters, and which error types are retryable. Can be set globally or per-node.

### Runtime

The `runtime` block on a node that contains all configuration necessary for an engine to execute the node. Runtime schemas are type-specific — an `api` node's runtime includes `method`, `url`, and `headers`, while a `docker` node's runtime includes `dockerfile`, `image`, and `tag`.

### Secret

A sensitive value (API key, password, token, certificate) referenced via `${secrets.<name>}` and resolved at execution time by the engine's secrets provider. Secrets are never stored in OSOP files.

### Subtype

A more specific classification within a node type. For example, the `api` type has subtypes `rest`, `graphql`, `grpc`, `webhook`, and `soap`. Subtypes are optional but recommended for executable workflows.

### Timeout

The maximum duration allowed for a node or workflow to complete. Specified as a duration string (e.g., `"5m"`, `"1h"`, `"30s"`). When a timeout expires, the engine may trigger a `timeout` edge if one is defined.

### Trigger

An event or condition that initiates a workflow execution. OSOP supports triggers of type `webhook`, `schedule`, `event`, `manual`, `api`, and `file_watch`.

### Variable Interpolation

The mechanism for embedding dynamic values in OSOP strings using `${...}` syntax. Supports namespaces: `inputs`, `outputs`, `secrets`, `env`, `metadata`.

### Workflow

A complete process defined by an OSOP document. A workflow consists of nodes connected by edges, with optional contracts, triggers, security, and observability configuration. The terms "workflow" and "process" are used interchangeably in OSOP.

### Workflow Version

The version of a specific workflow, distinct from the OSOP protocol version. Specified in the top-level `version` field using SemVer. Tracks how a particular process evolves over time.

### Agent Runtime Binding

The specification for how AI agents consume `.osop` files as executable SOPs. Defines node-to-action mapping, edge-to-control-flow mapping, context passing, handoff protocols, and security requirements. See [agent-runtime-binding.md](./agent-runtime-binding.md).

### Execution Record (.osoplog)

An immutable record produced by an agent after executing a workflow. Contains per-node timing, status, inputs/outputs, AI metadata (model, tokens, cost, confidence), and human metadata (actor, decision). File extension: `.osoplog`, `.osoplog.yaml`, `.osoplog.json`.

### Iteration

The process of analyzing past `.osoplog` records to identify hotspots, bottlenecks, and failure patterns, then proposing improvements to the `.osop` file. Iteration is what makes OSOP workflows self-improving over time.

### MCP (Model Context Protocol)

An open protocol for connecting AI agents to external tools and data sources. OSOP integrates with MCP through the `mcp` node type and the `osop-mcp` server, which exposes OSOP operations as MCP tools.

### Node-to-Action Mapping

The correspondence between OSOP node types and agent runtime actions. For example, `api` nodes map to HTTP requests, `cli` nodes map to shell commands, `agent` nodes map to LLM invocations. Defined in the Agent Runtime Binding spec.

---

*See [SPEC.md](./SPEC.md) for the full protocol specification.*
