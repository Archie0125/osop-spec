# Versioning Policy

## Spec Versioning

OSOP spec uses **semver**: `MAJOR.MINOR.PATCH`

- `MAJOR` — breaking changes to schema (removing required fields, changing types)
- `MINOR` — additive changes (new optional fields, new node types)
- `PATCH` — clarifications, doc fixes, no schema changes

## Workflow Versioning

Each `.osop` file declares `osop_version` (e.g. `"1.0"`).

Workflow instances should also track their own version in `metadata.version` using semver.

## Breaking vs Non-Breaking Changes

| Change | Type |
|--------|------|
| Remove a required field | BREAKING |
| Add a required field | BREAKING |
| Add an optional field | Non-breaking |
| Change a field type | BREAKING |
| Add a new node type | Non-breaking |
| Add a new enum value | Non-breaking |

## Diff Requirements

Every version bump must include:
- `metadata.change_summary` — human-readable summary of changes
- Node-level diff in the ledger (for runtime diffs)
- Story-level diff output via `osop diff v1 v2 --view story`