# The OSOP Manifesto

**Open Standard Operating Process**

*A universal protocol for defining how all processes work — for humans, AI agents, and machines alike.*

---

## The World Is Running on Broken Process Infrastructure

Every organization runs on processes. Deploying software. Onboarding employees. Processing orders. Training models. Responding to incidents. These processes are the circulatory system of modern work.

And yet, we have no standard way to define them.

Today, processes live in:

- **Confluence pages** that nobody reads and nobody updates.
- **Notion docs** that drift out of sync the moment they are published.
- **Shell scripts** that one engineer wrote three years ago and nobody else understands.
- **Tribal knowledge** locked inside the heads of senior team members who might leave tomorrow.
- **Vendor-specific workflow DSLs** that trap you inside a single platform.
- **Slack threads** where critical decisions vanish into the scroll.

This fragmentation has always been painful. But it was tolerable when humans were the only actors executing processes — because humans can improvise, ask questions, and fill in gaps.

That era is ending.

## AI Agents Changed Everything

AI agents are now participating in real workflows. They write code, review pull requests, manage infrastructure, analyze data, triage incidents, and interact with customers. They are not hypothetical. They are here, and their capabilities are growing every month.

But AI agents cannot read a Confluence page and reliably extract an executable process from it. They cannot interpret a hand-drawn diagram on a whiteboard. They cannot absorb tribal knowledge from a hallway conversation.

AI agents need **structured, machine-readable process definitions** to operate reliably. Without them, every agent integration is a bespoke, fragile, hand-wired integration. Every new tool requires custom glue code. Every process change requires re-engineering the agent.

This is the same problem the web faced before HTTP. The same problem APIs faced before OpenAPI. The same problem containers faced before OCI.

**The process layer of the modern stack has no standard. OSOP is that standard.**

## The Vision

OSOP — the Open Standard Operating Process — is a universal protocol for defining processes. Any process. Every process.

A single `.osop.yaml` file can describe:

- A CI/CD pipeline that builds, tests, and deploys a microservice.
- A data pipeline that ingests, transforms, validates, and loads data.
- An incident response runbook that pages on-call, triages severity, and coordinates resolution.
- A hiring workflow that moves candidates through screening, interviews, and offers.
- An AI agent workflow that chains multiple models, tools, and human checkpoints.
- An infrastructure provisioning process that spins up environments across cloud providers.

OSOP does not replace your tools. It describes how your tools work together. It is the **sheet music**, not the orchestra.

When every process is defined in OSOP:

- **Humans** can read and understand any process in any organization.
- **AI agents** can parse, validate, and execute processes without custom integration.
- **Platforms** can import, export, and interoperate on a shared format.
- **Organizations** can audit, version, and evolve their processes systematically.

## Core Principles

### 1. Human-Readable First

OSOP files are YAML. They read like structured English. A new team member should be able to open an `.osop.yaml` file and understand what a process does, who is involved, and how it flows — without consulting external documentation.

If a process definition requires a decoder ring to understand, it has failed.

### 2. Machine-Executable

Readability is necessary but not sufficient. OSOP files carry enough structure — typed nodes, validated contracts, runtime configurations — that an execution engine can run them without ambiguity. The same file that a human reads is the file that a machine executes.

### 3. Platform-Agnostic

OSOP does not belong to any vendor, cloud provider, or orchestration platform. It describes *what* a process does and *how it flows*, not *where* it runs. An OSOP file written for GitHub Actions can be adapted to GitLab CI, Jenkins, or a custom engine. The protocol is the constant; the runtime is the variable.

### 4. Composable

Processes are not monoliths. They are built from smaller processes. OSOP supports composition natively — a node in one workflow can reference an entire sub-workflow defined in another OSOP file. This enables organizations to build process libraries and assemble complex workflows from tested, reusable components.

### 5. Observable

A process that cannot be observed cannot be improved. OSOP includes first-class support for observability: structured logging, distributed tracing via OpenTelemetry, metric emission, and an immutable ledger of all process executions. Every run of an OSOP process produces a complete, auditable record.

### 6. Evolvable

Processes change. Teams learn. Requirements shift. OSOP treats evolution as a core concern, not an afterthought. Every OSOP file is versioned. Schema changes follow a disciplined RFC process. Breaking changes are explicit and managed. Deprecated nodes emit warnings, not errors. The protocol grows without breaking what already works.

## Why Now

Three forces are converging:

**AI agents are ready.** Large language models can now reason, plan, and use tools. But they need structured inputs to do so reliably. OSOP gives agents a standard format to consume and act on.

**Process complexity has outgrown ad-hoc solutions.** Modern systems involve dozens of tools, multiple teams, hybrid human-AI handoffs, and cross-cloud infrastructure. No single vendor's workflow DSL can capture this complexity. A neutral, open standard can.

**The interoperability gap is the bottleneck.** Organizations spend enormous effort wiring tools together. Every integration is custom. Every migration is painful. A shared process protocol eliminates this friction the same way HTTP eliminated the friction of network communication.

The window for establishing this standard is now. If we wait, the ecosystem will fragment into incompatible vendor formats — and we will spend the next decade building bridges between them.

## What OSOP Is Not

- **Not a workflow engine.** OSOP defines processes; engines execute them. OSOP is the spec, not the runtime.
- **Not a replacement for your tools.** Your CI/CD system, your database, your monitoring stack — they all stay. OSOP describes how they connect.
- **Not only for software engineering.** OSOP covers DevOps, yes — but also business processes, data pipelines, compliance workflows, and any other structured process.
- **Not a proprietary format.** OSOP is open source, Apache-2.0 licensed, and governed by its community.

## Join Us

OSOP is an open standard. It succeeds only if the community builds it, adopts it, and evolves it.

- **Read the spec.** Start with [SPEC.md](./SPEC.md) and the [conformance levels](./conformance-levels.md).
- **Try it.** Write an `.osop.yaml` file for a process you know well. See how it feels.
- **Contribute.** Open an issue, propose an RFC, submit a pull request. See [CONTRIBUTING.md](../CONTRIBUTING.md).
- **Spread the word.** If OSOP resonates with you, share it with your team, your community, your network.

The process layer is the last major layer of the modern stack without a universal standard.

Let's build it together.

---

*OSOP is an open-source project licensed under Apache-2.0.*
*Website: [osop.ai](https://osop.ai) | GitHub: [github.com/osop](https://github.com/osop)*
