# osop-spec

The official schema and specification for **OSOP** (Open Standard Operating Process).

OSOP is a universal process operating system for the "AI + Human co-governance" era — making every process readable, executable, testable, traceable, versionable, and evolvable.

## Structure

| Path | Purpose |
|------|---------|
| `schema/` | JSON Schema definitions (v1) |
| `docs/` | Manifesto, glossary, node types, views, versioning |
| `examples/` | Reference workflows (PDF→AI→DB, CI/CD, agent collab) |
| `RFC/` | Community proposals |

## Core Repos

| Repo | Purpose |
|------|---------|
| [osop-spec](https://github.com/Archie0125/osop-spec) | This repo — schema & spec |
| [osop](https://github.com/Archie0125/osop) | CLI runtime — validate / run / render / test |

## Quick Start

```bash
pip install osop
osop validate examples/pdf-ai-db.osop.yaml
osop render examples/pdf-ai-db.osop.yaml --view story
```

## License

MIT