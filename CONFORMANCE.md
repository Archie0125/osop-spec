# OSOP Conformance Certification

**Version:** 1.0

This document defines the formal conformance levels for OSOP-compatible tools and platforms. For the detailed specification of what each level requires in an OSOP document, see [docs/conformance-levels.md](./docs/conformance-levels.md).

---

## Overview

Conformance certification applies to **tools** (parsers, validators, engines, observability platforms) -- not to OSOP documents themselves. A tool claims a conformance level by passing the corresponding test suite.

Four levels exist, each building on the previous:

---

## Level 0: Parse

The tool can read and parse valid `.osop.yaml` files into a structured representation.

### Required Capabilities

- Parse OSOP YAML into an in-memory data structure.
- Expose all top-level fields: `osop_version`, `id`, `name`, `description`, `nodes`, `edges`.
- Resolve node and edge references by ID.
- Detect and report syntax errors with file location (line, column).
- Handle all 12 node types without error.

### Test Suite

Run: `osop-conformance --level 0`
Test count: ~40 cases covering valid files, malformed YAML, missing required fields, and unknown node types.

### Badge

```
https://osop.ai/badge/level-0-v1.0.svg
```

![Level 0](https://osop.ai/badge/level-0-v1.0.svg)

---

## Level 1: Validate

The tool can validate OSOP documents against the schema and check data contracts between nodes.

### Required Capabilities

Everything from Level 0, plus:

- Validate documents against the [OSOP JSON Schema](./schema/osop.schema.json).
- Validate node `inputs` and `outputs` schemas (JSON Schema Draft 2020-12).
- Check that `contracts` between connected nodes are satisfiable (output schema of source is compatible with input schema of target).
- Detect unreachable nodes and disconnected subgraphs.
- Report all validation errors with paths (e.g., `nodes[2].inputs.type`).

### Test Suite

Run: `osop-conformance --level 1`
Test count: ~80 cases covering schema validation, contract mismatches, graph connectivity, and edge cases.

### Badge

```
https://osop.ai/badge/level-1-v1.0.svg
```

![Level 1](https://osop.ai/badge/level-1-v1.0.svg)

---

## Level 2: Execute

The tool can execute OSOP workflows end-to-end.

### Required Capabilities

Everything from Level 1, plus:

- Execute workflows by invoking node runtimes in topological order.
- Evaluate edge conditions (`when` expressions using CEL).
- Handle all edge modes: `sequential`, `conditional`, `parallel`, `loop`, `event`.
- Implement retry logic (fixed, exponential backoff).
- Enforce timeouts at both node and workflow level.
- Resolve secrets from configured providers.
- Route human nodes to the configured channel and collect responses.
- Pass outputs from upstream nodes as inputs to downstream nodes.

### Test Suite

Run: `osop-conformance --level 2`
Test count: ~120 cases covering execution paths, retry behavior, timeout enforcement, conditional routing, and error handling.

### Badge

```
https://osop.ai/badge/level-2-v1.0.svg
```

![Level 2](https://osop.ai/badge/level-2-v1.0.svg)

---

## Level 3: Observe

The tool provides full observability, audit, and evolution tracking for production workflows.

### Required Capabilities

Everything from Level 2, plus:

- Write immutable audit records to configured `ledger` backends.
- Emit distributed traces compatible with OpenTelemetry (W3C Trace Context propagation).
- Export metrics with configurable prefix and labels.
- Structured logging in JSON format with correlation IDs.
- Track `evolution` metadata: deprecated nodes, changelog, sunset dates.
- Emit deprecation warnings when deprecated nodes are executed.
- Support log retention policies.

### Test Suite

Run: `osop-conformance --level 3`
Test count: ~60 cases covering trace propagation, audit log integrity, metric emission, and deprecation warnings.

### Badge

```
https://osop.ai/badge/level-3-v1.0.svg
```

![Level 3](https://osop.ai/badge/level-3-v1.0.svg)

---

## Certification Process

1. **Run the test suite.** Execute `osop-conformance --level {n}` against your tool. All tests for the claimed level (and all levels below) must pass.
2. **Submit results.** Open a PR to `registry/conformance/` with your test output and tool metadata.
3. **Review.** A Registry Maintainer verifies the results.
4. **Badge issued.** Upon approval, your tool is listed in the [OSOP Registry](https://registry.osop.ai) and may display the conformance badge.

### Re-certification

- Required when a new spec version is released.
- Badge URLs include the spec version (e.g., `v1.0`, `v1.1`).
- Tools must re-certify within 90 days of a new minor release.

---

## Declaring Conformance

Tools and platforms declare their OSOP support by placing a `.osop-compat.json` file in their repository root. See the [osop-compat schema](./schemas/osop-compat.json) for the full specification.

Example:

```json
{
  "osop_version": "1.0",
  "conformance": "validate",
  "capabilities": ["parse", "validate", "render"],
  "extensions": [],
  "repo": "https://github.com/example/my-osop-tool",
  "maintainer": "example-team"
}
```

---

## Badge URL Format

```
https://osop.ai/badge/level-{n}-v{version}.svg
```

| Level | URL |
|---|---|
| Level 0: Parse | `https://osop.ai/badge/level-0-v1.0.svg` |
| Level 1: Validate | `https://osop.ai/badge/level-1-v1.0.svg` |
| Level 2: Execute | `https://osop.ai/badge/level-2-v1.0.svg` |
| Level 3: Observe | `https://osop.ai/badge/level-3-v1.0.svg` |

---

*See [GOVERNANCE.md](./GOVERNANCE.md) for the decision process behind conformance level changes and [docs/conformance-levels.md](./docs/conformance-levels.md) for what each level requires in OSOP documents.*
