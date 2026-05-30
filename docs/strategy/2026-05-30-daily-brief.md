# OSOP Daily Strategy Brief — 2026-05-30

> **Day 51. Saturday — Arazzo 1.1 + AsyncAPI reshapes the complement story. MCP goes stateless. AutoGen declared maintenance. Proposals directory still does not exist.**
>
> Yesterday (Day 50) was the milestone. The action tracker carried six unconfirmed deliverables and four urgent 1-hour actions. Repo inspection confirms zero OSP proposals have shipped; `docs/proposals/` does not exist; `osoplog-otel-mapping.md` is not in the repo. That is the lead fact today.
>
> Three new signals change the landscape meaningfully: (1) Arazzo 1.1 released May 19 now includes AsyncAPI support, making Arazzo the first standard to cover both synchronous and asynchronous API workflow steps — this sharpens OSOP's differentiation surface and makes the complement story more precise than ever. (2) MCP published its 2026 RC with a stateless protocol core and a new Tasks extension — this directly changes what OSP-0013 (MCP transport annotation) must model. (3) AutoGen is officially in maintenance mode, with Microsoft shifting resources to its broader Agent Framework — 100K+ AutoGen users are evaluating alternatives, and OSOP has no migration guide.
>
> Saturday is a writing day. The proposals directory must exist before Monday.

---

## Action Tracker (Day 51)

| Action | Status | Days Pending | Priority |
|--------|--------|--------------|----------|
| **`osoplog-otel-mapping.md`** | 🔴 **NOT IN REPO** | **21** | **#1 — Non-negotiable. Three differentiation layers in one doc.** |
| **OSP-0018: `.osoplog` tamper-evidence** | 🔴 **NOT IN REPO** | **1** | **#2 — RFC 8785 + SHA-256. 45 minutes. IETF AAT alignment.** |
| **OSP-0008: `trigger:` RFC** | 🔴 **NOT IN REPO** | **14** | #3 — CrewAI Flows + event-driven workflows validate this now. |
| **OSP-0015: Workflow Composition** | 🔴 **NOT IN REPO** | **6** | #4 |
| **OSP-0016: MCP Apps `human` subtype** | 🔴 **NOT IN REPO** | **3** | #5 — MCP Apps (HTML UIs) just confirmed in RC. |
| **OSP-0006: `skill_ref` RFC** | 🔴 **NOT IN REPO** | **2** | #6 |
| **OSP-0013: MCP transport annotation** | 🔴 **NOT IN REPO** | **2** | **#7 — Must be revised to model stateless MCP core + Tasks extension.** |
| **SmartBear DevRel email** | ⏳ PENDING | **12** | **Send today. Arazzo 1.1 AsyncAPI angle is now the freshest hook.** |
| **IETF AAT author (Sharif) contact** | ⏳ PENDING | **1** | Send today. |
| **OpenClaw SOUL.md PR** | ⏳ CONFIRM | **51** | Confirm open. 373K+ stars. |
| **AAIF submission** | ⏳ CONFIRM | **51** | Confirm sent. |
| **awesome-ai-agents-2026 PRs (×3)** | ⏳ CONFIRM | **5** | |
| **Hermes Agent GitHub issue** | ⏳ CONFIRM | **3** | 100K stars. |
| **AutoGen migration guide** | 🆕 **New** | **0** | **AutoGen in maintenance mode. 100K+ users. High-signal opportunity.** |
| **OSP-0013 revision: stateless MCP core** | 🆕 **New — Revised scope** | **0** | **MCP RC changes the transport model. OSP-0013 must model task handles.** |
| **Arazzo 1.1 complement blog post** | 🆕 **New** | **0** | Arazzo now covers sync + async APIs. OSOP differentiation is sharper. |
| **OSP-0004: A2A signed cards** | ⏳ Pending | **54** | Weekend. RFC 7515 + RFC 8785. |
| **OSP-0007: Compliance Extensions** | ⏳ Pending | **16** | EU AI Act: **64 days**. NIST AI RMF 1.1 + IETF AAT. |
| **OSP-0017: Cost governance fields** | ⏳ Pending | **4** | |
| **`state_schema:` design note** | ⏳ Pending | **4** | LangGraph bridge. |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **51** | AAIF prereq. |
| **HN post (four-way comparison)** | ⏳ Monday 9am ET | **19** | |
| **NIST CAISI submission** | ⏳ Check deadline | **23** | |
| **CNCF TAG Runtime comment** | ⏳ Pending | **15** | cncf/toc#1746 |
| **METRICS.md cleanup** | ⏳ 5 min | **3** | Remove 9 AEO Scanner PRs; show 14 genuine PRs. |

---

## Intelligence

### New Signals (2026-05-30)

---

**Arazzo 1.1 + AsyncAPI: The Complement Story Just Got Sharper [CRITICAL NEW SIGNAL]**

The OpenAPI Initiative released Arazzo 1.1 on May 19, 2026 (11 days ago). The headline addition: **native AsyncAPI support**. A single Arazzo 1.1 workflow document can now declaratively chain synchronous HTTP steps, event bus publishes (AsyncAPI), and response-acknowledgment steps — all in one machine-readable document.

This is significant for OSOP positioning. Before Arazzo 1.1, the complement story was: "Arazzo defines API call sequences; OSOP defines AI agent workflows that include those API calls." After Arazzo 1.1, the story is sharper:

> **Arazzo 1.1 defines your API + event bus sequences (sync + async). OSOP defines AI-native workflows: the ones that include `agent` nodes (Claude, GPT-4), `human` approval steps, and MCP tool calls — and that produce portable `.osoplog` execution records with AI-specific metadata (tokens, cost, model). Arazzo and OSOP are orthogonal: Arazzo owns the data plane (API orchestration); OSOP owns the agent plane (AI orchestration with human-in-the-loop and audit trail).**

Arazzo does not model:
- `agent` node types (LLM calls with provider/model/system prompt/temperature)
- `human` node types (approval, review, decision with audit record)
- `.osoplog` execution records (per-node AI metadata, token counts, cost, model)
- Synthesis loops (N runs → `osop diff` → optimized workflow)
- Compliance export (IETF AAT, OTel GenAI Semantic Conventions)

OSOP does not model:
- API call sequences as a primary concept (they're `api` nodes, one among four types)
- AsyncAPI event bus message schemas
- OpenAPI parameter binding

This separation is clean and makes the "Arazzo + OSOP = full stack" pitch credible. Action: write this up as a blog post and as a section in `osoplog-otel-mapping.md`. The SmartBear DevRel email (12 days pending) should lead with the Arazzo 1.1 AsyncAPI angle — it's the freshest specific hook available today.

Arazzo 1.2 roadmap confirms MCP and A2A step types are coming. This narrows the window for OSP-0013 — once Arazzo has native MCP steps, OSOP must have published its own MCP node spec and the complement boundary must be clear and documented.

---

**MCP Goes Stateless: RC Published, Final Spec July 28 [PROTOCOL-LEVEL CHANGE]**

The MCP 2026 Release Candidate introduces three changes that directly affect OSOP's MCP integration strategy:

1. **Stateless protocol core**: MCP is now stateless at the protocol layer. Persistent server-side session state is no longer assumed. Each MCP call is self-contained. This changes what an `mcp` node in OSOP means at runtime: the node cannot assume a persistent MCP session exists between node executions. OSP-0013 must reflect this.

2. **Tasks extension**: MCP now supports `tools/call` returning a task handle, with the client driving lifecycle via `tasks/get`, `tasks/update`, `tasks/cancel`. This is exactly the pattern OSOP's `agent` nodes need for long-running AI operations. An `agent` node that calls an MCP-hosted model now returns a task handle, not an inline result — and the `.osoplog` must record task lifecycle events (created, polled, completed), not just a single call timestamp.

3. **MCP Apps**: MCP servers can now ship interactive HTML UIs that hosts render in a sandboxed iframe. This is directly relevant to OSP-0016 (`human` subtype for MCP-hosted approval UIs). The `human` node's `mcp_app_url` field concept is now protocol-supported.

Revision needed in OSP-0013: replace the persistent-connection transport model with a stateless + task-handle model:

```yaml
- id: "analyze-code"
  type: "agent"
  name: "Claude Code Review"
  runtime:
    provider: "mcp"
    server: "claude-code-mcp"
    transport: "http-stateless"        # MCP RC default
    task_lifecycle: "poll"             # tasks/get until COMPLETED
    tools: ["read_file", "search"]
```

The `.osoplog` for a stateless MCP agent node now records task handle lifecycle:

```yaml
- node_id: "analyze-code"
  status: "COMPLETED"
  mcp_metadata:
    task_id: "task-abc-123"
    transport: "http-stateless"
    polls: 3
    task_created_at: "2026-05-30T10:00:00Z"
    task_completed_at: "2026-05-30T10:01:45Z"
    duration_ms: 105000
```

RC final spec: July 28, 2026 (59 days). OSP-0013 must be published before then to set the OSOP MCP node standard before the RC becomes the ratified spec.

**MCP ecosystem scale**: 97 million monthly SDK downloads, 5,800+ servers. Red Hat announced MCP server developer preview for RHEL. Every MCP server is a potential OSOP `mcp` node target. The ecosystem is now large enough that OSOP MCP support is a mainstream adoption requirement, not an advanced feature.

---

**AutoGen in Maintenance Mode — 100K+ Users Without a Portable Workflow Format**

Microsoft has officially shifted AutoGen to maintenance mode as of 2026, with active development moving to the broader Microsoft Agent Framework. AutoGen had/has substantial production usage — 100K+ GitHub stars, widespread enterprise adoption.

For OSOP, this is a high-signal opportunity. AutoGen users need to:
1. Migrate existing workflows to a new framework (LangGraph, CrewAI, Microsoft Agent Framework)
2. Document what their agents actually do
3. Create portable records of historical executions

OSOP answers all three: a `.osop` file documents the workflow portably; an `.osoplog` file records historical execution; the `osop export-langgraph` and `osop export-crewai` tools (not yet built) would generate migration scaffolding.

Action: publish a blog post titled **"AutoGen workflows are now maintenance-mode: here's how to document them portably before you migrate"** — framed as a survival guide for AutoGen users, not an OSOP pitch. The `.osop` format is the side effect; the value is "your workflows are now documented and portable." This is exactly strategic principle #1: solve their problem, OSOP is the side effect.

Target publications: DEV.to, Medium (AutoGen users are developers). Reference: https://medium.com topic. No direct OSOP pitch. The post shows AutoGen workflow → `.osop` conversion, links to osop-examples repo for AutoGen examples, ends with "validate your workflow with `osop validate`."

---

**A2A Three-Layer Stack Becomes Consensus Architecture**

By May 2026, the three-layer AI agent protocol stack is industry consensus among the 150+ A2A/AAIF member organizations:
- **Layer 1 (Tools)**: MCP — how an agent connects to a tool
- **Layer 2 (Agent-to-Agent)**: A2A — how an agent delegates to another agent
- **Layer 3 (?)**: No standard exists for **workflow definition** — how a system of agents is specified, sequenced, and audited

OSOP occupies Layer 3. The three-layer framing is now OSOP's primary positioning: "MCP gives you tools. A2A gives you agent delegation. OSOP gives you the workflow definition that orchestrates both — and the execution record that proves what happened."

This is the AAIF submission framing. If OSOP is not in the AAIF conversation articulating Layer 3, someone else will define it — and the 150+ member organizations will ratify whatever gets there first.

---

**CrewAI Flows: Event-Driven Pipelines Validate OSP-0008**

CrewAI (31,200 stars, +1014% growth) added "Flows" — an event-driven pipeline mode — as a production feature in 2025. Flows use event triggers to start or resume workflows, a pattern OSOP's OSP-0008 (`trigger:` RFC) has been proposing for 14 days without shipping.

The fact that the fastest-growing framework has shipped event-driven triggers as a production feature validates OSP-0008's design premise exactly. OSOP's `trigger:` field would look like:

```yaml
trigger:
  type: "event"
  source: "github.webhook"
  event: "pull_request.opened"
  filter: "payload.base.ref == 'main'"
```

This is a 2-hour write. Shipping OSP-0008 this weekend positions OSOP ahead of the curve: CrewAI Flows proves the pattern works; OSOP standardizes it portably across all frameworks.

---

**SKILL.md and OSSA: Emerging Competitor Specs**

Two additional competitor specs surfaced in search results today:
- **SKILL.md** (agensi.io, 2026): An "open standard" for defining agent skills in Markdown. Positioned as a lightweight skill registry format. Does not address workflow sequencing, execution records, or compliance. Potential complement: SKILL.md defines individual agent capabilities; OSOP orchestrates those skills into workflows.
- **OSSA (Open Standard for Software Agents)** by Thomas Scola (Medium, 2025): A unified task schema for multi-platform agent execution. Focuses on task representation, not workflow graphs. No execution log format.

Neither is a direct threat to OSOP's core differentiation (`.osop` + `.osoplog` + CLI + ecosystem). Both confirm that the space is fragmenting without a dominant standard — which is exactly OSOP's opportunity window.

---

### Continuing Signals (Carried from Day 50)

- **IETF `draft-sharif-agent-audit-trail-00`**: Standards Track, expires Sept 29. SHA-256 + RFC 8785. OSOP's `.osoplog` is the workflow-aware superset. `osoplog-otel-mapping.md` must include IETF AAT compatibility section.
- **EU AI Act enforcement**: **64 days** (August 2, 2026). OSP-0007 unbuilt.
- **LangGraph v0.4**: 34% enterprise production. `state_schema:` design note pending.
- **Temporal**: Standard for durable execution, no portable workflow spec. OSOP gap.
- **Arazzo 1.1 tooling** (SmartBear, Speakeasy, Zuplo): Building Arazzo tooling now. OSOP complement window is open while Arazzo tooling is immature.
- **OpenClaw SOUL.md PR**: 373K+ stars. 51 days pending.
- **AAIF non-participation**: 51 days. MCP, A2A, Oracle in the room.
- **Hermes Agent**: 100K stars in 7 weeks. Integration issue pending 3 days.

---

## Threats

1. **The proposals directory still doesn't exist at Day 51.** Every evaluator — framework maintainer, enterprise architect, AAIF reviewer, IETF author — who looks at osop-spec sees a spec with docs but no governance. An empty `docs/proposals/` is better than a missing one, but zero shipped proposals signals the RFC process is a promise, not a practice. Every day this persists compounds the perception gap. The fix is 2–3 hours of writing, not a systems problem.

2. **Arazzo 1.2 will define MCP step types before OSP-0013 ships.** Arazzo 1.2 roadmap confirms MCP and A2A step types. The SmartBear, Speakeasy, and Zuplo tooling communities will integrate these step types. If OSOP hasn't published its MCP node annotation spec and the complement boundary document before Arazzo 1.2 ships (estimated 4–8 weeks), the "Arazzo handles API + MCP, OSOP handles what?" question will have no published answer. OSP-0013 must ship this weekend, revised to reflect MCP's stateless + task-handle model.

3. **MCP RC finalizes July 28 (59 days).** OSP-0013 must be published and reviewed before the RC becomes the ratified spec. The window for OSOP to set the MCP node standard is open now and closes hard in 59 days.

4. **AutoGen migration traffic will go somewhere.** AutoGen users searching for workflow documentation and migration guidance will land on LangGraph docs, CrewAI tutorials, and Microsoft Agent Framework guides. None of these will mention OSOP unless OSOP publishes an AutoGen-specific migration guide before those searches happen. This window is open for approximately 2–4 weeks before the migration wave crests.

5. **EU AI Act enforcement: 64 days.** The IETF AAT draft (flat records) will be the first open standard available to enterprises building compliance tooling. OSP-0007 (OSOP compliance extensions) and OSP-0018 (tamper-evidence) must ship before August 2 or OSOP misses the compliance wave entirely. At the current shipping rate (0 proposals in 51 days), OSP-0007 is at risk.

6. **SKILL.md and OSSA are in the search results now.** Developers searching "AI agent workflow standard 2026" are finding OSOP, SKILL.md, OSSA, and the Open Agent Specification (arxiv). OSOP's advantage is the full stack (spec + tooling + examples + VS Code ext + MCP server). But the tooling only matters if developers can find and compare it. The OSOP website needs a clear competitive positioning page that shows why OSOP and not SKILL.md/OSSA/Arazzo/A2A.

---

## Opportunities

### 1. Ship `osoplog-otel-mapping.md` Today — Now With Four Differentiation Angles

Since Day 29, this doc has been the #1 unshipped deliverable. At Day 51, it now covers four distinct competitive angles in a single document:

- **Oracle differentiator**: Oracle agent-spec has no execution record format — `.osoplog` fills the audit layer
- **IETF AAT complement**: `.osoplog` is workflow-aware; IETF AAT is flat-record. OSOP generates AAT-compatible records while capturing what AAT cannot: workflow graph, node types, inter-node data flow
- **OTel integration**: `.osoplog` maps to GenAI Semantic Conventions — Datadog/Grafana/Jaeger ingest
- **Arazzo complement**: Arazzo defines the API/event bus plane; OSOP defines the agent/human plane. An enterprise running both has complete coverage

Document structure (~400 lines):
```
## Part 1: OpenTelemetry GenAI Semantic Conventions Mapping
  - .osoplog field → OTel attribute table
  - agent node → gen_ai.* spans
  - Export command: osop log-export --format otel-json

## Part 2: IETF Agent Audit Trail Compatibility
  - What IETF AAT covers (flat records)
  - What .osoplog adds (workflow structure, typed nodes, AI metadata)
  - Field mapping table: IETF AAT ← .osoplog source
  - Export command: osop log-export --format ietf-aat
  - OSP-0018 tamper-evidence alignment (RFC 8785 + SHA-256)

## Part 3: Oracle Open Agent Specification — Audit Layer Gap
  - What Oracle agent-spec covers
  - What it doesn't: no execution record format
  - .osoplog as the Oracle audit layer

## Part 4: Arazzo 1.1 Complement
  - Arazzo: API/event bus workflow (sync + async)
  - OSOP: AI agent workflow (agent + human + MCP + audit)
  - How they compose: Arazzo steps appear as `api` nodes in OSOP
```

This is the single document that transforms OSOP from "a workflow definition format" into "the execution record and integration layer for the entire agentic AI standards stack." File path: `docs/osoplog-otel-mapping.md`.

---

### 2. OSP-0013 Revision: Model Stateless MCP Core + Task Handles

The original OSP-0013 concept assumed persistent MCP connections. MCP's RC invalidates that model. The revised OSP-0013 must define:

```yaml
# MCP node with stateless transport (MCP RC default)
- id: "mcp-tool-call"
  type: "agent"
  subtype: "mcp"
  name: "Call MCP Tool"
  runtime:
    provider: "mcp"
    server: "filesystem-mcp"
    transport: "http-stateless"        # MCP RC stateless default
    tool: "read_file"
    inputs:
      path: "${inputs.file_path}"
    task_lifecycle: "inline"           # inline=sync, poll=async via tasks/get

# MCP agent node with Tasks extension (long-running)
- id: "long-running-analysis"
  type: "agent"
  subtype: "mcp"
  name: "Deep Analysis Agent"
  runtime:
    provider: "mcp"
    server: "claude-analysis-mcp"
    transport: "http-stateless"
    task_lifecycle: "poll"             # Returns task handle, polls tasks/get
    poll_interval_sec: 5
    timeout_sec: 300
```

And the `.osoplog` task-handle records:

```yaml
- node_id: "long-running-analysis"
  status: "COMPLETED"
  duration_ms: 187000
  mcp_metadata:
    task_id: "task-xyz-789"
    transport: "http-stateless"
    lifecycle: "poll"
    polls_made: 12
    task_created_at: "2026-05-30T10:00:00Z"
    task_completed_at: "2026-05-30T10:03:07Z"
```

File: `docs/proposals/OSP-0013-mcp-transport-annotation.md`. This is 2 hours. The MCP RC July 28 deadline makes this time-boxed.

---

### 3. AutoGen Migration Guide — 100K Users, Zero Competition for This Content

No one has published an "AutoGen → OSOP" migration guide. The AutoGen maintenance-mode announcement creates an immediate search demand. The guide should:

1. Show a representative AutoGen workflow (GroupChat or Sequential) in Python
2. Show the equivalent `.osop` YAML (agent nodes, sequential/conditional edges)
3. Show the `.osoplog` output from a test run
4. Link to `osop validate` and `osop-examples`
5. End with a comparison table: AutoGen Python → OSOP YAML equivalents

This is framed as a **survival guide**, not an OSOP pitch. Title: "Your AutoGen workflows are in maintenance mode. Here's how to document them portably." Publish to DEV.to and Medium simultaneously. A GitHub repo example in `osop-examples/autogen-migration/` makes it concrete.

This is a 3-hour write. The window is 2–4 weeks (before AutoGen migration articles saturate search results with LangGraph/CrewAI content).

---

### 4. Send SmartBear DevRel Email — Arazzo 1.1 AsyncAPI Angle Is the Freshest Hook

The SmartBear DevRel email has been pending 12 days. The new Arazzo 1.1 AsyncAPI support makes the email more specific and compelling than the Day 50 draft:

> Subject: OSOP — the agent-plane complement to Arazzo 1.1's API plane (saw the AsyncAPI announcement)
>
> Hi [name] — Arazzo 1.1's AsyncAPI support is a strong move: sync + async APIs in one workflow document. The complement story with OSOP writes itself.
>
> OSOP (github.com/Archie0125/osop-spec) is one layer up: it's the workflow format for AI-agent-native workflows — the ones that include `agent` nodes (Claude, GPT-4o), `human` approval steps, MCP tool calls, and portable `.osoplog` execution records that map to OTel and the new IETF Agent Audit Trail draft. Arazzo defines the data plane (API orchestration); OSOP defines the agent plane (AI orchestration).
>
> The story is: Arazzo tells your HTTP + event bus calls; OSOP tells your agent reasoning + human decisions + audit trail. Together they're the complete picture of what an AI system did and why.
>
> Would you be open to a joint post: "Arazzo + OSOP: the complete workflow stack for AI-native systems"? I'd write it; you'd review it.

This email takes 3 minutes to send. The Arazzo 1.1 hook expires as the announcement ages.

---

### 5. Arazzo 1.1 Complement Blog Post — Positioning Before Arazzo 1.2 Ships

Publish a blog post establishing the Arazzo + OSOP complement narrative before Arazzo 1.2 (with MCP step types) ships and the tooling ecosystems lock in their narratives.

Title: **"Arazzo 1.1 covers your API plane. OSOP covers your agent plane. Here's the full stack."**

Structure:
- What Arazzo 1.1 covers: HTTP + AsyncAPI sequences, machine-readable, deterministic
- What Arazzo 1.1 doesn't cover: `agent` nodes, `human` nodes, `.osoplog` records, AI metadata, synthesis
- A side-by-side example: GitHub PR review workflow in Arazzo vs OSOP (showing the complement, not the competition)
- How they compose: the Arazzo workflow appears as an `api` node inside the OSOP workflow
- Call to action: `osop validate workflow.osop.yaml`

Publish to: DEV.to, OSOP website blog. Submit to SmartBear for guest post. Time: 2 hours.

---

## Evolution Ideas

### Spec Improvements

**OSP-0013 (revised): Stateless MCP core + Tasks extension lifecycle**

The MCP RC's stateless model requires OSOP to distinguish between:
- `task_lifecycle: inline` — synchronous MCP tool call, single round-trip
- `task_lifecycle: poll` — async task handle, poll `tasks/get` until COMPLETED or FAILED
- `task_lifecycle: cancel` — client-initiated cancellation via `tasks/cancel`

The `.osoplog` record for each lifecycle variant differs in structure. OSP-0013 must define all three patterns with YAML examples before the RC becomes ratified spec.

**`agent_def_url:` field on `agent` nodes — ADL/Oracle/A2A Interop**

With Oracle Agent Spec, SKILL.md (agensi.io), and A2A Agent Cards all defining agents externally, OSOP `agent` nodes need a first-class reference to an external agent definition:

```yaml
- id: "research-agent"
  type: "agent"
  agent_def_url: "https://registry.example.com/agents/researcher.skill.md"
  runtime:
    task: "${inputs.topic}"
```

This makes OSOP the orchestration layer for every agent-definition standard — not a competitor but a consumer. A 1-line field addition to the `agent` node spec in `docs/node-types.md`. No new proposal required.

**`trigger:` at workflow level — OSP-0008**

CrewAI Flows in production validates this. The `trigger:` field enables event-driven OSOP workflows that activate on GitHub webhooks, Slack messages, cron schedules, or custom events:

```yaml
trigger:
  type: "webhook"
  source: "github"
  event: "pull_request.opened"
  filter:
    base_branch: "main"
```

Also: `type: "cron"`, `type: "event-queue"`, `type: "manual"`. OSP-0008 is a 2-hour write. Ships the first entry in `docs/proposals/`.

**`export_formats:` in `.osoplog` schema**

Declare intended export formats in the log header:
```yaml
export_formats:
  - ietf-aat        # draft-sharif-agent-audit-trail-00
  - otel-json       # OpenTelemetry GenAI Semantic Conventions
  - cloudtrail      # AWS CloudTrail
```
This makes tooling discovery automatic and the `osop log-export` command self-documenting. 10-line schema addition.

### Tooling Gaps

| Tool | Priority | New Signal | Status |
|------|----------|-----------|--------|
| `osop log-export --format ietf-aat` | 🔴 Critical | IETF AAT Standards Track | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI dominant | Not built |
| `osoplog-otel-mapping.md` | 🔴 Critical | 21 days pending; four angles | **Write today** |
| `osop compliance-check --framework ietf-aat` | 🔴 Critical | 64 days to EU AI Act | Not built |
| `osop export-agent-card` (JWS/JCS, A2A v1.2) | 🔴 Critical | RFC 7515 + RFC 8785 | Not built |
| `osop export-temporal` | 🔴 Critical | Durable execution gap | Not built |
| AutoGen migration example | 🟠 **New** | AutoGen in maintenance | Not built |
| `osop import-autogen` | 🟠 **New** | 100K users in migration | Not built |
| `osop export-crewai-flows` | 🟠 High | CrewAI Flows in production | Not built |
| `osop export-mcp-stateless` | 🟠 **Revised** | MCP RC stateless core | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K-star ecosystem | Not built |

### Ecosystem Plays

| Target | Action | Hook | Today? |
|--------|--------|------|--------|
| **`osoplog-otel-mapping.md`** | Write + publish | Four-angle differentiation doc | **Yes — #1** |
| **OSP-0018: tamper-evidence** | Write + publish | IETF AAT RFC 8785 alignment | **Yes — 45 min** |
| **OSP-0008: trigger RFC** | Write + publish | CrewAI Flows validates design | **Yes — 2 hr** |
| **OSP-0013: MCP stateless** | Write revised proposal | MCP RC stateless + Tasks | **Yes — 2 hr** |
| **SmartBear DevRel** | Send email | Arazzo 1.1 AsyncAPI angle | **Yes — 3 min** |
| **IETF AAT author (Sharif)** | Contact | `.osoplog` as AAT superset | **Yes — 20 min** |
| **AutoGen migration guide** | Write + publish | Maintenance-mode announcement | This weekend |
| **Arazzo 1.1 complement post** | Write + publish | Before Arazzo 1.2 MCP steps | This week |
| **SKILL.md response** | Complement positioning page | agensi.io in search results | This week |
| **OpenClaw SOUL.md PR** | Confirm open | 373K+ stars | **Confirm today** |
| **AAIF submission** | Confirm sent | 51 days, milestone | **Confirm today** |
| **Hermes Agent issue** | Confirm open | 100K stars, 3 days | **Confirm today** |
| **Waxell/DigitalApplied outreach** | Comment after otel-mapping ships | Audit trail articles, no standard cited | After shipping |
| **CNCF TAG Runtime comment** | Submit comment | cncf/toc#1746 | Weekend |
| **OSP-0004: A2A signed cards** | Write | RFC 7515 + RFC 8785 | Weekend |
| **OSP-0007: Compliance Extensions** | Write | EU AI Act + NIST + IETF AAT | Next week — 64 day deadline |

---

## Top 3 Actions for This Week

### 1. Proposals Directory: Ship Three Proposals by Sunday — Create the Governance Signal

The single most impactful thing that can happen this week is not a blog post, not an email, not a search optimization. It is the existence of `docs/proposals/` with real content. Three proposals this weekend transforms osop-spec from "a spec with promises" to "an active RFC process."

Priority order:
- **OSP-0018** (45 min): SHA-256 + RFC 8785 tamper-evidence for `.osoplog` — the shortest proposal, the highest compliance credibility per hour
- **OSP-0008** (2 hr): `trigger:` RFC — event-driven workflows, validated by CrewAI Flows in production
- **OSP-0013** (2 hr, revised): Stateless MCP core + Tasks extension — time-boxed to 59 days before RC ratification

Specific steps:
1. `mkdir -p docs/proposals`
2. Write `docs/proposals/OSP-0018-tamper-evidence.md` (45 min)
3. Write `docs/proposals/OSP-0008-trigger-field.md` (2 hr)
4. Write `docs/proposals/OSP-0013-mcp-transport-annotation.md` (2 hr, stateless + task-handle model)
5. Commit: `git add docs/proposals/ && git commit -m "spec: add OSP-0008, OSP-0013, OSP-0018 proposals"`

This is 5 hours of writing. Today is Saturday. This is achievable before Monday's HN post.

### 2. Publish `osoplog-otel-mapping.md` — Four Differentiation Angles, One Document

This document has been 21 days pending and now covers OTel, IETF AAT, Oracle gap, and Arazzo 1.1 complement in a single authoritative document. It is the strongest single piece of technical content in the OSOP ecosystem because it answers four distinct buyer questions simultaneously:
- "How do I ingest OSOP logs into Datadog?" → OTel section
- "How do I satisfy IETF AAT compliance?" → IETF section with `osop log-export --format ietf-aat`
- "I use Oracle agent-spec — where's my audit record layer?" → Oracle section
- "I use Arazzo for APIs — where does OSOP fit?" → Arazzo complement section

Publish to `docs/osoplog-otel-mapping.md`. Commit immediately. All four outreach actions (Waxell, DigitalApplied, Tetrate, DEV.to audit trail) are blocked on this document existing.

### 3. Send SmartBear Email + Contact IETF Author — Two 20-Minute Actions That Compound Over Weeks

Neither of these actions produces immediate results, but both open relationships that compound:
- **SmartBear**: A guest post on SmartBear's blog reaches every Arazzo tooling consumer. The Arazzo 1.1 AsyncAPI hook makes the email timely right now — it ages every day.
- **IETF Sharif**: If the IETF AAT author cross-references OSOP in the draft, it becomes part of a Standards Track document. That is permanent, free distribution to every IETF subscriber and enterprise compliance team that reads the RFC. This is asymmetric leverage — 20 minutes for potentially years of discoverability.

Both happen in the time it takes to drink a coffee. Send today.

---

## Adoption Metrics to Track

| Metric | Day 51 (Today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | ~1 | 500 | 2,000 |
| OSP proposals published | **0** | **8** | 12 |
| `docs/proposals/` exists | **No** | **Yes — 3 proposals minimum** | Yes — 8+ proposals |
| `osoplog-otel-mapping.md` | **Pending 21 days** | Published | Referenced externally |
| IETF AAT compatibility section | 0 | In otel-mapping | Referenced by Sharif draft |
| AutoGen migration guide | 0 | Published | 500+ views |
| Arazzo complement post | 0 | Published | SmartBear guest post |
| Open OSOP PRs (confirmed) | 14 | 20 | 30 |
| Merged external PRs | 0 (unconfirmed) | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| AAIF submission | Unconfirmed | Acknowledged | In review |
| SmartBear contact | **Send today** | In discussion | Guest post live |
| IETF author contact | **Today** | Acknowledged | Cross-referenced |
| MCP RC alignment (OSP-0013) | **Pending** | Published | Referenced by MCP docs |
| EU AI Act compliance tool | Not built | OSP-0007 + 0018 spec | CLI working |
| PyPI downloads | — | 2k/mo | 10k/mo |
| CNCF TAG Runtime comment | Not sent | Sent | Acknowledged |

---

## Key Links (New Today)

- **Arazzo 1.1 + AsyncAPI announcement**: https://www.openapis.org/blog/2026/05/19/announcing-arazzo-specification-1-1
- **MCP 2026 RC announcement**: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- **MCP 2026 Roadmap**: https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/
- **AutoGen vs LangGraph vs CrewAI 2026**: https://pooya.blog/blog/crewai-vs-langgraph-autogen-comparison-2026/
- **SKILL.md specification**: https://www.agensi.io/learn/skill-md-specification-open-standard
- **OSSA (Open Standard for Software Agents)**: https://medium.com/@thomas.scola/open-standard-for-software-agents-ossa-4f5656fa7687
- **Open Agent Specification (arxiv)**: https://arxiv.org/pdf/2510.04173
- **A2A Protocol v1.2**: https://a2a-protocol.org/latest/
- **AAIF formation announcement**: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- **AI Agent Protocols 2026 complete guide**: https://www.ruh.ai/blogs/ai-agent-protocols-2026-complete-guide
- **MCP adoption statistics 2026**: https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol
- **IETF draft-sharif-agent-audit-trail-00**: https://datatracker.ietf.org/doc/draft-sharif-agent-audit-trail/
- **SmartBear: From Endpoints to Intent**: https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo/
- **Anthropic donates MCP to AAIF**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

---

*Previous brief: [`2026-05-29-daily-brief.md`](./2026-05-29-daily-brief.md)*
*Day 51, Saturday. Three proposals + `osoplog-otel-mapping.md` + two outreach actions. The proposals directory must exist before Monday's HN post. Arazzo 1.1 AsyncAPI and MCP's stateless RC are today's fresh anchors — both time-boxed windows. Execute.*
