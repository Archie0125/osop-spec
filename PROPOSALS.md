# OSOP Standard Proposals (OSP)

**Version:** 1.0

An OSP is the formal mechanism for proposing changes to the OSOP specification. This document describes how to submit, review, and track proposals.

---

## How to Submit

1. **Check existing proposals.** Search `proposals/` and open issues to ensure your idea has not already been proposed.
2. **Open a discussion.** Start a GitHub Discussion under the `proposal` category to gauge community interest. This is optional but recommended.
3. **Write your proposal.** Create a file named `proposals/OSP-NNNN-short-title.md` using the template below. Use the next available number.
4. **Submit a PR.** Open a pull request targeting the `main` branch. Title the PR `OSP-NNNN: Short Title`. Add the label `osp`.

---

## Template

```markdown
# OSP-NNNN: Title

**Author:** Your Name (@github-handle)
**Status:** Draft
**Created:** YYYY-MM-DD
**Type:** Minor | Major | Breaking

---

## Summary

One paragraph describing the proposed change.

## Motivation

Why is this change needed? What problem does it solve? Include real-world use cases.

## Design

Detailed technical proposal. Include:
- YAML/JSON examples showing the proposed syntax.
- Schema changes (JSON Schema diff).
- Interaction with existing features.

## Breaking Changes

- Is this a breaking change? (Yes/No)
- If yes, what existing documents would be affected?
- Severity assessment (how many existing workflows would break).

## Migration Path

Step-by-step guide for users to migrate from the current behavior to the proposed behavior.
Include tooling recommendations (e.g., codemods, validator flags).

## Alternatives Considered

What other approaches were evaluated? Why were they rejected?

## Open Questions

Unresolved issues that need community input before finalization.

## References

Links to related OSPs, RFCs, issues, or external standards.
```

---

## Review Timeline

| Proposal Type | Review Period | Final Comment Period |
|---|---|---|
| **Minor** (additive, non-breaking) | 14 days | 7 days |
| **Major** (new conformance level, large feature) | 30 days | 7 days |
| **Breaking** (removes/changes existing behavior) | 30 days | 14 days |

The review period begins when a Spec Editor adds the `in-review` label.

---

## Acceptance Criteria

A proposal is accepted when **all** of the following are met:

1. **Review period complete.** The minimum review period has passed with no unresolved blocking objections.
2. **Spec Editor approval.** At least 2 Spec Editors approve the proposal.
3. **Steering Group approval.** For major/breaking proposals, a supermajority (2/3) vote of the Steering Group.
4. **Design clarity.** The proposal includes concrete schema examples and is unambiguous.
5. **Migration path.** For breaking changes, a migration guide exists and has been reviewed.
6. **No unresolved open questions.** All items in the Open Questions section are resolved or explicitly deferred to a follow-up OSP.

---

## Rejection and Withdrawal

- **Rejected:** A Spec Editor or the Steering Group may reject a proposal with a written rationale. The author may revise and resubmit as a new OSP.
- **Withdrawn:** The author may withdraw a proposal at any time before acceptance.
- **Deferred:** A proposal may be deferred if the community agrees it is valuable but premature. Deferred proposals are labeled `deferred` and can be re-opened.

---

## Implementation Tracking

Once accepted, proposals are tracked to completion:

| Stage | Tracked By |
|---|---|
| **Accepted** | OSP PR merged into `proposals/` with status `Accepted`. |
| **Schema updated** | PR to `schema/osop.schema.json` referencing the OSP number. |
| **Docs updated** | PR to `docs/` with updated specification text. |
| **Reference impl** | PR to the reference implementation repo (validator, parser, SDK). |
| **Conformance tests** | Test cases added to the conformance test suite. |
| **Released** | Included in a tagged spec release. OSP status updated to `Released`. |

Each implementation PR must reference the OSP number in its description (e.g., `Implements OSP-0042`).

---

## Proposal Index

Accepted proposals are listed in the `proposals/` directory. Each file contains the full proposal text and a status header indicating its current lifecycle stage.

| Status | Meaning |
|---|---|
| `Draft` | Under development by the author. |
| `In Review` | Open for public comment. |
| `Accepted` | Approved for implementation. |
| `Implemented` | Reference implementation complete. |
| `Released` | Shipped in a spec version. |
| `Rejected` | Not accepted. Rationale in the proposal. |
| `Withdrawn` | Retracted by the author. |
| `Deferred` | Postponed for future consideration. |

---

## Active Proposals

| OSP | Title | Status | Type | Target |
|-----|-------|--------|------|--------|
| [OSP-0001](proposals/OSP-0001-agent-orchestration.md) | Agent Orchestration | Draft | Minor | v1.1.0 |
| [OSP-0002](proposals/OSP-0002-tool-action-log.md) | Tool Action Log | Draft | Minor | v1.1.0 |

---

*See [GOVERNANCE.md](./GOVERNANCE.md) for the full decision-making process and [CONTRIBUTING.md](./CONTRIBUTING.md) for general contribution guidelines.*
