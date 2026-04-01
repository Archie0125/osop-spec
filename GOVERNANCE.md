# OSOP Governance Charter

**Version:** 1.0
**Effective:** 2026-04-01
**Model:** Inspired by the [OpenAPI Technical Steering Committee](https://www.openapis.org/participate/how-to-contribute) governance model.

---

## 1. Roles

### Founder / Editor-in-Chief

- Sets the long-term vision for the OSOP standard.
- Has final authority on tie-breaking decisions.
- Appoints initial Steering Group members.
- Current holder: Project founder.

### Spec Editors

- Maintain the core specification documents (`SPEC.md`, schemas, conformance levels).
- Review and merge OSP proposals that reach the Accepted stage.
- Ensure backward compatibility and consistency across spec versions.
- Minimum: 2 active editors at all times.

### Reference Maintainers

- Own the official reference implementations (validators, parsers, SDK libraries).
- Ensure reference implementations stay in sync with the latest released spec version.
- Responsible for conformance test suites.

### Registry Maintainers

- Manage the OSOP namespace registry and extension catalog.
- Review and approve namespace allocation requests under `io.osop.*`.
- Maintain the public registry at `registry.osop.ai`.

### Steering Group

- 5-7 members drawn from Spec Editors, Reference Maintainers, and community contributors.
- Elected annually by active contributors (1 commit or 1 accepted OSP in the past 12 months).
- Responsible for major/breaking change decisions, release approvals, and governance amendments.
- Quorum: Majority of seated members.

---

## 2. Decision Process

### Lazy Consensus (Minor Changes)

Applies to: documentation fixes, non-breaking schema additions, new examples, tooling updates.

1. Author opens a PR.
2. At least 1 Spec Editor approves.
3. If no objections after **72 hours**, the change is merged.
4. Any Steering Group member can escalate to a vote by commenting `ESCALATE`.

### Steering Group Vote (Major/Breaking Changes)

Applies to: breaking schema changes, new conformance levels, governance amendments, namespace policy changes.

1. Author submits an OSP (see section 3).
2. Public review period completes.
3. Steering Group holds a recorded vote.
4. Approval requires **supermajority (2/3)** of seated members.
5. Vetoes must include a written rationale and an alternative proposal.

---

## 3. Proposal Process (OSP)

OSP = **OSOP Standard Proposal**. All non-trivial changes to the specification go through this process.

### Lifecycle

```
Draft --> Review --> Accepted --> Implemented --> Released
  |         |
  |         +--> Rejected
  +--> Withdrawn
```

### Stages

| Stage | Duration | Description |
|---|---|---|
| **Draft** | Open-ended | Author writes proposal using the [OSP template](./PROPOSALS.md). Submitted as a PR to `proposals/`. |
| **Review** | 14 days (minor) / 30 days (major) | Public comment period. At least 2 Spec Editors must review. |
| **Accepted** | -- | Steering Group approves (lazy consensus for minor, vote for major). |
| **Implemented** | Varies | Reference implementation updated. Conformance tests added. |
| **Released** | Next scheduled release | Included in the next minor or major version per the release cadence. |

See [PROPOSALS.md](./PROPOSALS.md) for the full submission process and template.

---

## 4. Breaking Change Rules

A **breaking change** is any modification that would cause a previously valid `.osop.yaml` file to become invalid, or that changes the runtime semantics of an existing field.

| Requirement | Detail |
|---|---|
| **Deprecation period** | Minimum **90 days** from public announcement to removal. |
| **Public review** | Must go through a 30-day OSP review with the `breaking` label. |
| **Migration guide** | Required. Must be published before the deprecation period begins. |
| **Tooling support** | Validators must emit deprecation warnings for at least 1 minor release before removal. |
| **Changelog** | Breaking changes must be prominently listed in the release notes. |

---

## 5. Release Cadence

| Release Type | Frequency | Contains |
|---|---|---|
| **Patch** (`1.0.x`) | As needed | Errata, typo fixes, clarifications. No schema changes. |
| **Minor** (`1.x.0`) | **Quarterly** (Jan, Apr, Jul, Oct) | Additive features, new optional fields, new node types. |
| **Major** (`x.0.0`) | **Annually** (January) | Breaking changes after full deprecation cycle. |

Release dates are targets, not deadlines. A release may be delayed if critical issues are unresolved.

---

## 6. Namespace Rules

OSOP uses reverse-domain namespaces for extensions and custom node types.

| Namespace | Purpose | Governance |
|---|---|---|
| `org.osop.*` | **Official reserved** -- core spec types and fields | Spec Editors only |
| `io.osop.*` | **Official extensions** -- endorsed community extensions | Registry Maintainers approve |
| `com.company.*` | **Vendor custom** -- company-specific extensions | Self-governed by the vendor |
| `dev.user.*` | **Experimental** -- individual experiments and prototypes | No approval needed |

### Rules

1. Extensions under `org.osop.*` require an accepted OSP.
2. Extensions under `io.osop.*` require a registry application with documentation, schema, and at least one reference implementation.
3. Vendor and experimental namespaces are self-service but must not conflict with official namespaces.
4. Namespace squatting (registering names without intent to use) is prohibited.

---

## 7. Code of Conduct

All participants in the OSOP community must follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

Summary: Be respectful, be constructive, be inclusive. Harassment and discrimination are not tolerated. Violations should be reported to **conduct@osop.ai**.

---

## 8. Amendments

This governance charter may be amended by a **supermajority (2/3)** vote of the Steering Group, with a **30-day** public review period.

---

*Questions? Open a discussion at [github.com/osop/spec/discussions](https://github.com/osop/spec/discussions) or email governance@osop.ai.*
