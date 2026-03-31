# OSOP — Open Standard Operating Process

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Spec Version](https://img.shields.io/badge/spec-v1.0--draft-orange.svg)](./docs/SPEC.md)
[![Website](https://img.shields.io/badge/web-osop.ai-green.svg)](https://osop.ai)

**A universal protocol for defining how all processes work — for humans, AI agents, and machines.**

OSOP is an open standard for describing any process as a structured, machine-readable, human-friendly YAML/JSON document. Think of it as HTTP for process definitions, or OpenAPI for workflows.

---

## Why OSOP?

Processes today are scattered across Confluence pages, Notion docs, shell scripts, tribal knowledge, and vendor-specific workflow DSLs. Humans can muddle through this fragmentation. AI agents cannot.

OSOP provides a single, universal format that:

- **Humans** can read and understand immediately
- **AI agents** can parse, validate, and execute without custom integration
- **Platforms** can import, export, and interoperate on a shared standard
- **Organizations** can audit, version, and evolve systematically

Read the full [Manifesto](./docs/manifesto.md) for the vision behind OSOP.

## Quick Start

Create a file named `deploy.osop.yaml`:

```yaml
osop_version: "1.0"
id: "deploy-service"
name: "Deploy Service"
description: "Build, test, and deploy a service."

nodes:
  - id: "build"
    type: "docker"
    subtype: "build"
    name: "Build Image"

  - id: "test"
    type: "cicd"
    subtype: "test"
    name: "Run Tests"

  - id: "approve"
    type: "human"
    subtype: "approval"
    name: "Production Approval"

  - id: "deploy"
    type: "infra"
    subtype: "k8s"
    name: "Deploy to Kubernetes"

edges:
  - from: "build"
    to: "test"
  - from: "test"
    to: "approve"
  - from: "approve"
    to: "deploy"
    mode: "conditional"
    when: "outputs.approve.decision == 'approved'"
```

Validate it:

```bash
npx osop validate deploy.osop.yaml
```

## Key Concepts

| Concept | Description |
|---|---|
| **Node** | A single step in a process (build, test, approve, deploy) |
| **Edge** | A connection between nodes defining execution flow |
| **12 Node Types** | `human`, `agent`, `api`, `cli`, `db`, `git`, `docker`, `cicd`, `mcp`, `system`, `infra`, `data` |
| **8 Edge Modes** | `sequential`, `conditional`, `parallel`, `loop`, `event`, `fallback`, `error`, `timeout` |
| **4 Conformance Levels** | Descriptive, Validatable, Executable, Observable |
| **Expressions** | CEL (Common Expression Language) for conditions |

## Documentation

| Document | Description |
|---|---|
| [Manifesto](./docs/manifesto.md) | Vision, principles, and motivation |
| [Protocol Specification](./docs/SPEC.md) | Complete protocol structure and rules |
| [Node Types](./docs/node-types.md) | All 12 node types with subtypes and examples |
| [Conformance Levels](./docs/conformance-levels.md) | Levels 0-3: Descriptive to Observable |
| [Expression Language](./docs/expression-language.md) | CEL specification for `when` conditions |
| [Versioning](./docs/versioning.md) | SemVer policy and RFC process |
| [Glossary](./docs/glossary.md) | Definitions of key terms |

## What OSOP Covers

OSOP is not limited to DevOps. It describes **any** structured process:

- **CI/CD pipelines** — build, test, deploy, rollback
- **AI agent workflows** — LLM chains, RAG pipelines, multi-agent orchestration
- **Data pipelines** — ETL/ELT, validation, transformation
- **Infrastructure** — provisioning, scaling, disaster recovery
- **Business processes** — approvals, onboarding, compliance
- **Incident response** — detection, triage, mitigation, postmortem

## File Format

| Property | Value |
|---|---|
| Extensions | `.osop.yaml`, `.osop.yml`, `.osop.json` |
| Serialization | YAML 1.2 (canonical) or JSON |
| Encoding | UTF-8 |

## Project Structure

```
osop-spec/
  README.md              # This file
  LICENSE                 # Apache License 2.0
  CONTRIBUTING.md         # How to contribute
  CITATION.cff            # Academic citation metadata
  docs/
    manifesto.md          # Vision and principles
    SPEC.md               # Protocol specification
    node-types.md         # 12 node types reference
    conformance-levels.md # Levels 0-3
    expression-language.md # CEL specification
    versioning.md         # Versioning and RFC process
    glossary.md           # Key terms
```

## Contributing

We welcome contributions of all kinds. See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on:

- Reporting issues
- Proposing protocol changes via RFC
- Improving documentation
- Building tooling and adapters

## Community

- **Website**: [osop.ai](https://osop.ai)
- **GitHub**: [github.com/osop](https://github.com/osop)
- **Discussions**: [github.com/osop/spec/discussions](https://github.com/osop/spec/discussions)

## License

OSOP is licensed under the [Apache License 2.0](./LICENSE).

## Citation

If you reference OSOP in academic work, see [CITATION.cff](./CITATION.cff) for citation metadata.

---

*OSOP is the universal protocol for process definitions. Read the [manifesto](./docs/manifesto.md). Try the [spec](./docs/SPEC.md). Join the [community](https://github.com/osop).*
