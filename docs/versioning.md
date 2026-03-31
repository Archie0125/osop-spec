# OSOP Versioning Policy

**Version:** 1.0.0-draft

---

## Overview

OSOP uses [Semantic Versioning 2.0.0](https://semver.org/) for both the protocol specification and individual workflow documents. This document defines the versioning rules, what constitutes breaking vs. non-breaking changes, and the RFC process for proposing schema changes.

## Two Version Fields

An OSOP document contains two distinct version identifiers:

| Field | Scope | Example | Purpose |
|---|---|---|---|
| `osop_version` | Protocol | `"1.0"` | Which version of the OSOP specification this document conforms to. |
| `version` | Workflow | `"3.2.1"` | The version of this specific workflow, managed by its owner. |

These versions are independent. A workflow at version `5.0.0` can conform to OSOP protocol version `1.0`.

## Protocol Versioning

### Format

The `osop_version` field uses `major.minor` format (no patch):

- **Major** increments signal breaking changes to the protocol schema.
- **Minor** increments signal backward-compatible additions.

Patch-level changes (typo fixes, clarifications) are tracked in the spec repository's changelog but do not change the `osop_version` value.

### Breaking Changes (Major Version Bump)

A change is **breaking** if a valid document under version N would be invalid or have different semantics under version N+1. Examples:

- Removing a required field
- Changing the type of an existing field
- Renaming a field
- Changing the semantics of an edge mode
- Removing a node type
- Changing the expression language
- Altering the variable interpolation syntax

### Non-Breaking Changes (Minor Version Bump)

A change is **non-breaking** if all valid documents under version N.M remain valid under version N.(M+1). Examples:

- Adding a new optional field
- Adding a new node type
- Adding a new edge mode
- Adding a new trigger type
- Adding a new subtype to an existing node type
- Relaxing a constraint (e.g., allowing a field to be optional that was previously required)
- Adding new built-in variable namespaces

### Version Negotiation

Engines MUST declare which OSOP versions they support. When loading a document:

1. Parse the `osop_version` field.
2. If the major version is unsupported, reject the document with a clear error.
3. If the minor version is higher than supported, process the document but warn about potentially unrecognized fields.
4. If the minor version is lower or equal, process normally.

## Workflow Versioning

### Format

The `version` field on a workflow uses full SemVer (`major.minor.patch`):

```
version: "2.1.3"
```

### Guidelines for Workflow Authors

**Major** (breaking):
- Changing the workflow's inputs or outputs in a backward-incompatible way
- Removing nodes that external systems depend on
- Changing the fundamental flow structure

**Minor** (feature):
- Adding new nodes or branches
- Adding optional inputs
- Improving retry or timeout policies
- Adding observability

**Patch** (fix):
- Fixing a timeout value
- Correcting a URL
- Updating a description
- Fixing a CEL expression

### Recording Changes

Use the `evolution.changelog` block to record version history:

```yaml
evolution:
  changelog:
    - version: "2.1.3"
      date: "2026-03-30"
      changes:
        - "Fixed health check timeout from 5s to 15s"
    - version: "2.1.0"
      date: "2026-03-15"
      changes:
        - "Added security scan node"
        - "Added Slack notification on failure"
    - version: "2.0.0"
      date: "2026-01-10"
      changes:
        - "BREAKING: Migrated from ECS to Kubernetes deployment"
        - "Changed inputs.cluster to inputs.namespace"
```

## Deprecation Policy

When a node, field, or feature is deprecated:

1. Mark it in `evolution.deprecated_nodes` with a `reason`, `replacement`, and `sunset_date`.
2. Engines MUST emit a warning when encountering deprecated elements.
3. Engines MUST NOT remove support for deprecated elements until the `sunset_date` has passed.
4. The minimum deprecation window is **90 days** from announcement to sunset.

```yaml
evolution:
  deprecated_nodes:
    - id: "old-deploy"
      reason: "Replaced by canary deployment strategy"
      replacement: "canary-deploy"
      sunset_date: "2026-07-01"
```

## RFC Process for Protocol Changes

All changes to the OSOP protocol specification go through the RFC (Request for Comments) process.

### Stages

1. **Discussion** — Open a GitHub Discussion in the `osop/spec` repository describing the problem and proposed solution. Gather initial feedback.

2. **RFC Draft** — Create a pull request adding a document to `rfcs/` with the following structure:
   ```
   rfcs/
     NNNN-short-title.md
   ```
   The RFC document must include:
   - **Summary**: One-paragraph description
   - **Motivation**: Why this change is needed
   - **Design**: Detailed proposal with examples
   - **Breaking Changes**: Whether this is a major or minor change and why
   - **Migration Path**: How existing documents adapt (if breaking)
   - **Alternatives Considered**: What other approaches were evaluated
   - **Open Questions**: Unresolved issues

3. **Review Period** — Minimum 14 days for minor changes, 30 days for major changes. The RFC must receive at least two approvals from maintainers.

4. **Final Comment Period (FCP)** — 7 days. The RFC is marked as entering FCP. Last chance for objections.

5. **Merge** — The RFC is merged and assigned a number. Implementation begins.

6. **Implementation** — Schema changes, validator updates, and documentation are implemented in a single release.

7. **Release** — The new protocol version is published with updated JSON Schema files, documentation, and validator tools.

### RFC Numbering

RFCs are numbered sequentially starting from `0001`. The number is assigned when the RFC enters the review period, not when it is first proposed.

### Who Can Propose RFCs

Anyone. The OSOP RFC process is open to all community members. Maintainers may fast-track non-controversial minor additions but must still go through the FCP stage.

## Release Schedule

OSOP does not follow a fixed release cadence. Releases are made when:

- One or more RFCs have been accepted and implemented
- Sufficient testing has been performed
- Documentation has been updated
- Migration guides have been written (for breaking changes)

Minor releases may happen as frequently as monthly. Major releases are expected to be rare (no more than once per year) to maintain ecosystem stability.

---

*See [SPEC.md](./SPEC.md) for the full protocol specification.*
*See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.*
