# OSOP Daily Strategy Brief — 2026-05-29

> **Day 50. Friday — IETF validates `.osoplog`. SmartBear hook is fresh. Six writing deliverables still unconfirmed as shipped.**
>
> Day 50 milestone. The IETF has now published `draft-sharif-agent-audit-trail-00` — a Standards Track draft defining a JSON-based Agent Audit Trail format for autonomous AI agents, directly targeting EU AI Act, SOC 2, ISO/IEC 42001, and PCI DSS v4.0.1. This is the single most strategically important external development since A2A reached 150 organizations. It validates `.osoplog`'s entire premise — and creates both a differentiation opportunity (`.osoplog` is workflow-aware; AAT is flat) and a technical alignment requirement (add SHA-256 hash chaining to `.osoplog`, referencing the same RFC 8785 that AAT uses). Additionally: SmartBear published "From Endpoints to Intent" today (Arazzo + MCP blog post), making this the freshest available hook for the 11-day-pending DevRel email.
>
> Writing backlog status is unconfirmed. Repo inspection shows `docs/proposals/` does not exist — zero OSP proposals have shipped. `osoplog-otel-mapping.md` is not present in `docs/`. All six deliverables planned for Day 49 remain unconfirmed as shipped. Today is **Friday**: last writing window of the week. If `osoplog-otel-mapping.md` and OSP-0018 (tamper-evidence) don't ship today, the IETF draft will define the audit record standard before OSOP publishes its own.

---

## Action Tracker (Day 50)

| Action | Status | Days Pending | Today / Priority |
|--------|--------|--------------|------------------|
| **`osoplog-otel-mapping.md`** | 🔴 **UNCONFIRMED — NOT FOUND IN REPO** | **20** | **#1 today. IETF AAT makes this the most urgent doc in the ecosystem.** |
| **OSP-0008: `trigger:` RFC** | 🔴 **UNCONFIRMED — NOT FOUND IN REPO** | **13** | #2 today. |
| **OSP-0015: Workflow Composition** | 🔴 **UNCONFIRMED — NOT FOUND IN REPO** | **5** | #3 today. |
| **OSP-0016: MCP Apps `human` subtype** | 🔴 **UNCONFIRMED — NOT FOUND IN REPO** | **2** | #4 today. |
| **OSP-0006: `skill_ref` RFC** | 🔴 **UNCONFIRMED — NOT FOUND IN REPO** | **1** | #5 today. |
| **OSP-0013: MCP transport annotation** | 🔴 **UNCONFIRMED — NOT FOUND IN REPO** | **1** | #6 today. |
| **OSP-0018: `.osoplog` tamper-evidence** | 🆕 **New — Critical** | **0** | **#7 today. SHA-256 hash chaining. IETF AAT alignment. RFC 8785.** |
| **Contact IETF AAT author (Sharif)** | 🆕 **New** | **0** | 20 min. Position `.osoplog` as workflow-aware complement to AAT. |
| **SmartBear DevRel email** | ⏳ PENDING | **11** | **Send today. "From Endpoints to Intent" blog just published — freshest hook.** |
| **OpenClaw SOUL.md PR** | ⏳ CONFIRM | **50** | Confirm open or open immediately. 373K+ stars. |
| **AAIF submission** | ⏳ CONFIRM | **50** | Confirm sent or send immediately. 50-day milestone. |
| **awesome-ai-agents-2026 PRs (×3)** | ⏳ CONFIRM | **4** | Confirm submitted or submit. 30 min. |
| **Hermes Agent GitHub issue** | ⏳ CONFIRM | **2** | Confirm open. 100K stars. |
| **OSP-0004: A2A signed cards** | ⏳ Pending | **53** | Weekend target. RFC 7515 + RFC 8785 confirmed. |
| **OSP-0007: Compliance Extensions** | ⏳ Pending | **15** | **EU AI Act: 65 days. NIST AI RMF 1.1 (March 2026) must be referenced.** |
| **OSP-0017: Cost governance fields** | ⏳ Pending | **3** | Weekend. |
| **`state_schema:` design note** | ⏳ Pending | **3** | Weekend. |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **50** | AAIF prereq. |
| **METRICS.md AEO Scanner cleanup** | ⏳ 5 min | **2** | Remove 9 AEO Scanner PRs, show 14 genuine OSOP PRs. |
| **HN post (four-way comparison)** | ⏳ Next Monday 9am ET | **18** | |
| **NIST CAISI submission** | ⏳ Check deadline | **22** | |
| **CNCF TAG Runtime comment** | ⏳ Pending | **14** | cncf/toc#1746 |

---

## Intelligence

### New Signals (2026-05-29)

---

**IETF `draft-sharif-agent-audit-trail-00` — Standards Track, Expires September 29, 2026 [CRITICAL NEW SIGNAL]**

Published March 29, 2026. The IETF has accepted for publication a Standards Track Internet-Draft defining a standardised JSON-based Agent Audit Trail (AAT) format for autonomous AI systems. Author: Sharif. Datatracker: https://datatracker.ietf.org/doc/draft-sharif-agent-audit-trail/

Technical specification:
- **Mandatory fields**: agent identity, action classification (intent + action), outcome tracking (success/failure/partial), trust level reporting
- **Tamper-evidence**: SHA-256 hash chaining between records, referencing RFC 8785 (JCS — the same standard used by A2A v1.2 for signed Agent Cards)
- **Optional signatures**: ECDSA for non-repudiation
- **Regulatory alignment**: EU AI Act Article 12 (high-risk system logging, August 2026), SOC 2 Trust Services Criteria, ISO/IEC 42001, PCI DSS v4.0.1
- **Draft expires**: September 29, 2026 — at which point it advances toward RFC, revises, or lapses

Sharif published four related drafts simultaneously:
- `draft-sharif-aeba-00`: Agent Event Behaviour Analysis — behavioral security monitoring of autonomous agents
- `draft-sharif-agent-identity-framework-00`: Agent Identity Framework — trust and identity for AI agents
- `draft-sharif-attp-00`: Agent Trust Transport Protocol — secure agent-to-server communication
- `draft-sharif-attp-industrial-control-systems-00`: ATTP for SCADA/IoT environments

This cluster suggests a coordinated IETF effort on AI agent governance protocols, with AAT as the logging component. The author is building a standards suite, not just a single draft.

**Implication for OSOP — differentiation AND alignment:**

AAT is a flat-record logging format. It captures what an agent did (action-by-action JSON records) but has no concept of workflow structure, node types, edge modes, inter-node data flow, synthesis from multiple runs, or AI-specific metadata (tokens, cost, model). It does not link records to a workflow definition.

`.osoplog` is a workflow-aware execution record: it links to a `.osop` workflow definition, records per-node execution with type-specific metadata (AI tokens + cost on `agent` nodes, HTTP status on `api` nodes, human decision on `human` nodes), and supports the synthesis loop that generates optimized workflows from past runs. `.osoplog` is the format that answers: "Which workflow ran? Which step are we on? What did the AI model actually return? Did the human approve?"

The strategic response is: **position `.osoplog` as a workflow-aware superset of IETF AAT**. An OSOP execution record can export IETF AAT-compatible records. An enterprise using OSOP satisfies AAT compliance requirements automatically. Publish this positioning in `osoplog-otel-mapping.md` today — add a section: "IETF Agent Audit Trail Compatibility" alongside the OTel mapping.

**OSP-0018 (new, critical):** Add SHA-256 hash chaining to `.osoplog` records. AAT requires tamper-evidence. OSOP should adopt the same RFC 8785 canonicalization + SHA-256 chaining that AAT specifies. This makes `.osoplog` immediately AAT-compatible and gives OSOP a technically credible compliance story.

**Contact action**: Email or IETF datatracker comment to Sharif. Frame: "`.osoplog` is a workflow-aware format for AI agent execution records — it generates AAT-compatible flat records while also capturing the workflow graph context that AAT doesn't model. We'd like to align the field semantics. Would you be open to cross-referencing OSOP in the draft?"

---

**SmartBear: "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP" — Published Today**

SmartBear published a blog post exploring how Arazzo deterministic workflows and MCP tool abstraction work together. The post discusses surfacing Arazzo workflows as MCP tools and the shift from raw API calls to intent-based agent interactions. This is exactly the intersection where OSOP sits: OSOP is the workflow definition layer for AI-agent-specific workflows that Arazzo describes for API-centric workflows.

This is the freshest possible hook for the 11-day-pending SmartBear DevRel email. The email angle: "Saw your post on Arazzo + MCP. OSOP is the complementary format one layer up — where the workflow includes AI agent nodes, human approval steps, and produces portable execution records. We're positioning as the Arazzo complement for AI-native workflows. Would you be open to a guest post: 'Arazzo defines your API calls; OSOP defines your agent workflows'?"

Send today. The post is live. The hook expires as the post ages.

---

**Arazzo 1.2 Roadmap: MCP + A2A Step Types Confirmed**

The OpenAPI Initiative has confirmed that Arazzo 1.2 will include native MCP and A2A step types. Nordic APIs covered the intersection: "How Arazzo Could Help MCP Servers Orchestrate APIs for AI Consumers." Zuplo and Speakeasy are building Arazzo tooling.

Implication for OSP-0013: Arazzo 1.2 defining MCP steps means the window for OSP-0013 (OSOP's MCP transport annotation) is narrowing further. The distinction must be clear: Arazzo MCP steps describe MCP tool calls in an API workflow. OSOP MCP steps are part of an AI-agent workflow that includes `agent`, `human`, and other node types. Arazzo + OSOP are complementary at the same step level. OSP-0013 should explicitly state this. Publish before Arazzo 1.2 ships.

---

**NIST AI RMF 1.1 (March 2026) — AI Agent-Specific Update**

NIST released AI RMF 1.1 in March 2026 with explicit AI agent guidance. The framework now maps to EU AI Act requirements and provides US federal + enterprise context for AI governance. OSP-0007 (Compliance Extensions) has referenced only EU AI Act Article 12 in the backlog. The brief for Day 49 noted "65 days" to EU AI Act enforcement (August 2, 2026). OSP-0007 should now reference both frameworks explicitly:

- EU AI Act Article 12: automatic event logging for high-risk AI systems (August 2, 2026)
- NIST AI RMF 1.1: GOVERN 1.7, MAP 1.1, MEASURE 2.5, MANAGE 4.1 — the four functions most directly addressed by `.osoplog`
- IETF AAT draft: compliance logging baseline (now active)

This three-framework alignment makes OSP-0007 the most complete compliance spec in the agentic AI space.

---

**Industry Audit Trail Coverage Surge — `.osoplog` Positioning Window**

Multiple industry publications published AI agent audit trail guidance this week:
- Waxell.ai: "AI Agent Compliance Audit Trail [2026]" — practical guidance for enterprises
- DigitalApplied: "7 Best Practices for Agent Audit Trail Design 2026" — technical best practices
- Tetrate: "MCP Audit Logging: Tracing AI Agent Actions for Compliance" — MCP-specific
- DEV.to: "AI Agent Audit Trail: What Compliance Actually Requires in 2026"

None of these articles mentions a specific open standard for structured agent execution records. They describe what records should contain but point to no format. `.osoplog` is the answer to all of them. Once `osoplog-otel-mapping.md` ships, OSOP has a publishable response to every one of these articles: submit as a comment or guest post pitch within 24 hours of publication.

---

### Continuing Signals (Carried from Day 49)

- **Oracle agent-spec + AG-UI**: Most complete OSOP competitor; no execution record format. Differentiation = `.osoplog`.
- **Next Moca ADL**: Agent definition standard, Apache 2.0, InfoQ coverage. Complement doc stub needed.
- **OpenClaw: 373,000+ GitHub stars** — SOUL.md PR pending 50 days.
- **A2A v1.2: 150+ orgs, AAIF governance, JWS/JCS signed cards** — OSP-0004 pending 53 days.
- **MCP RC July 28: 60 days** — Stateless core + MCP Apps + Tasks extension. OSP-0013 + OSP-0016 gated on this.
- **EU AI Act enforcement: 65 days** (August 2, 2026) — OSP-0007 unbuilt.
- **LangGraph v0.4: 34% enterprise production** — Bridge doc pending.
- **Temporal GA: OpenAI Codex + LangGraph v0.4 production** — OSP-0013 trigger.
- **Arazzo 1.1: 10 days old** — Complement doc and OSP-0015 still pending.
- **Hermes Agent: 100K stars in 7 weeks** — Highest-priority new integration target.
- **AAIF: 50-day non-participation** — Oracle, MCP, A2A in the room.

---

## Threats

1. **IETF AAT draft becomes the EU AI Act compliance baseline before OSOP publishes OSP-0007.** The draft expires September 29, 2026. EU AI Act enforcement is August 2, 2026. If enterprise compliance teams adopt IETF AAT (flat records) as their standard before `.osoplog` (workflow-aware records) ships a compliance mapping, OSOP becomes a second-tier option. The window is 65 days. `osoplog-otel-mapping.md` with an IETF AAT compatibility section must ship today.

2. **Arazzo 1.2 will define MCP step types.** When this ships, every Arazzo tooling vendor (SmartBear, Speakeasy, Zuplo) will integrate MCP steps. The distinction between "Arazzo API workflow with MCP step" and "OSOP AI agent workflow with MCP node" will be lost unless OSP-0013 is published and the complement story is explicit. Narrowing window — estimate 4–8 weeks for Arazzo 1.2 to ship.

3. **50 days, zero OSP proposals in repo.** The `docs/proposals/` directory doesn't exist. Every external evaluator — AAIF reviewers, framework maintainers, enterprise teams — encounters an incomplete spec with promises but no published RFCs. The proposals are the governance signal that OSOP is actively maintained. Without them, OSOP looks abandoned at day 50.

4. **Waxell/DigitalApplied/Tetrate audit trail articles mention no specific standard.** These articles will be cited in enterprise compliance guidance. The first open standard to get mentioned in their follow-up coverage locks in as the reference. The window to submit a comment/guest pitch closes within days of each article's publication.

5. **Oracle agent-spec enterprise reach is compounding.** Oracle has distribution to 430,000+ customers. Every enterprise Oracle contact who sees agent-spec without also seeing a `.osoplog` execution record layer will consider the stack complete. The Oracle interop story (`.osoplog` works with Oracle agent-spec) must be published before Oracle's enterprise sales motion solidifies.

6. **50-day AAIF non-participation while the IETF is now also active.** The IETF AAT draft is now in the standards body room alongside AAIF. OSOP has presence in neither. The risk is that by the time OSOP submits to AAIF, the compliance narrative has been shaped by IETF AAT.

---

## Opportunities

### 1. `osoplog-otel-mapping.md` — IETF AAT Compatibility Section Makes This the Most Powerful Doc Yet

Yesterday's analysis established `osoplog-otel-mapping.md` as the Oracle differentiator. Today the IETF AAT draft makes it the **compliance baseline setter**. Add a third section alongside OTel and Oracle:

```
## IETF Agent Audit Trail (draft-sharif-agent-audit-trail-00) Compatibility

### What IETF AAT Covers
- Flat per-action JSON records
- Agent identity (agent_id, agent_type)
- Action classification (intent, action_type)
- Outcome tracking (success | failure | partial)
- Trust level reporting
- SHA-256 hash chaining for tamper-evidence (RFC 8785 canonicalization)

### What .osoplog Adds
- Workflow structure (linked to .osop workflow definition)
- Per-node typed records (agent, api, cli, human, mcp)
- AI-specific metadata: model, prompt_tokens, completion_tokens, cost_usd
- Human decision records: approver, decision, timestamp
- MCP call records: tool_name, server, transport, task_id
- Synthesis: multiple .osoplog records → optimized .osop workflow

### Generating AAT-Compatible Records from .osoplog

| IETF AAT Field          | .osoplog Source                                   |
|-------------------------|---------------------------------------------------|
| agent_id                | runtime.agent                                     |
| action_type             | node.type                                         |
| action_intent           | node.name                                         |
| outcome                 | node_record.status (COMPLETED=success)            |
| timestamp               | node_record.started_at                            |
| trust_level             | security.trust_policy (OSP-0005)                  |
| previous_record_hash    | SHA-256(RFC8785(prev_node_record)) [OSP-0018]     |

export command:
  osop log-export --format ietf-aat execution.osoplog.yaml
```

This single document now covers: OTel/Datadog/Grafana integration, Oracle audit gap, and IETF standards compliance. Publish to `docs/osoplog-otel-mapping.md`. Length: ~400 lines.

---

### 2. OSP-0018: `.osoplog` Tamper-Evidence (New Proposal — Urgent)

IETF AAT requires SHA-256 hash chaining with RFC 8785 canonicalization. A2A v1.2 uses the same RFC 8785 for signed Agent Cards. OSOP should adopt the same standard — creating a coherent technical story: OSOP, A2A, and IETF AAT all use RFC 8785 for tamper-evidence.

Proposed addition to `.osoplog` schema:

```yaml
osoplog_version: "1.0"
run_id: "a1b2c3d4"
workflow_id: "deploy-service"
status: "COMPLETED"

# OSP-0018: Tamper-evidence
tamper_evidence:
  algorithm: "SHA-256"          # RFC 8785 canonicalization
  genesis_hash: "<sha256-of-run-header>"
  chain:
    - node_id: "build"
      record_hash: "<sha256-of-node-record-json>"
      previous_hash: "<genesis_hash>"
    - node_id: "test"
      record_hash: "<sha256-of-node-record-json>"
      previous_hash: "<hash-of-build-record>"
  signature: "<optional ECDSA sig>"   # Non-repudiation
  signed_by: "osop-agent-runner-v1.2" # Agent identity
```

This is a 45-minute spec addition. OSP-0018 is the shortest proposal in the backlog and delivers the highest compliance credibility per hour spent. Publish to `docs/proposals/OSP-0018-tamper-evidence.md`.

---

### 3. Contact IETF AAT Author (Sharif) — 20 Minutes

The Sharif drafts cluster (AAT + AEBA + AIF + ATTP) represents a coordinated IETF AI agent governance effort. The author is building a standards suite for autonomous AI systems. OSOP complements rather than competes with this suite: AAT defines the per-action record schema; `.osoplog` defines the workflow-aware execution record that generates AAT-compatible records.

Contact via IETF datatracker or LinkedIn. Message:

> "I saw your draft-sharif-agent-audit-trail — exactly the standard the space needs. We're working on OSOP (osop-spec), a workflow-aware execution record format for AI agent workflows that generates AAT-compatible flat records while also capturing workflow structure. The mapping is clean: `.osoplog` → AAT export uses your field schema. Would you be open to cross-referencing in the draft, or exploring OSOP as a reference implementation that produces AAT-conformant records?"

---

### 4. Send SmartBear DevRel Email — Today's Blog Post Is the Hook

SmartBear published "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP" today. This is the 11-day-pending SmartBear email hook, now at maximum freshness.

Email (3 minutes):

> Subject: OSOP — the Arazzo complement for AI-native workflows (saw your post today)
>
> Hi [name] — saw SmartBear's post today on Arazzo + MCP workflows. Exactly the right framing.
>
> OSOP (github.com/Archie0125/osop-spec) is one layer up: it's the workflow definition format for AI-agent-native workflows — ones that include `agent` nodes (Claude, GPT-4), `human` approval steps, MCP tool calls, and execution records (`.osoplog`) that map to OTel and the new IETF Agent Audit Trail draft.
>
> The complement story writes itself: Arazzo defines your API call sequences; OSOP defines your AI agent workflows that invoke those APIs as one step among many. Would you be open to a guest post: "Arazzo + OSOP: the full API-to-agent workflow stack"?

---

### 5. Waxell / DigitalApplied Outreach — Audit Trail Article Comments

Four audit trail articles published this week mention no specific open standard. Submit comments or guest post pitches within 24 hours of `osoplog-otel-mapping.md` shipping:

- **Waxell.ai**: Comment with link to `osoplog-otel-mapping.md`: "`.osoplog` is an open standard that generates IETF AAT-compatible records with full OTel mapping."
- **DigitalApplied**: Guest post pitch: "The missing standard for agent audit trail design: `.osoplog` maps to all 7 of your best practices."
- **Tetrate**: Comment on MCP audit logging post: "OSP-0013 defines MCP transport annotation for audit-ready execution records."
- **DEV.to**: Submit OSOP as the answer to "what compliance actually requires."

This is a 30-minute batch action immediately after `osoplog-otel-mapping.md` ships.

---

## Evolution Ideas

### Spec Improvements

**OSP-0018: `.osoplog` Tamper-Evidence (RFC 8785 + SHA-256 hash chaining)**

Priority: 🔴 Critical. IETF AAT requires this. RFC 8785 is used by both A2A v1.2 (signed Agent Cards) and IETF AAT. Adopting the same canonicalization standard creates a coherent technical story across all three standards. Implementation: 45 minutes, 1 new spec proposal, no schema-breaking change.

**`state_schema:` at workflow level — LangGraph v0.4 Bridge**

LangGraph's 34% enterprise production adoption is driven by its typed shared state model. OSOP workflows with shared mutable state across nodes are currently inexpressible. A top-level `state_schema:` field (JSON Schema) enables workflows where nodes read and write to a typed shared state object — the model every production agent framework uses. This is the single spec gap most likely to prevent a LangGraph user from adopting OSOP. Design note target: this week.

**`agent_def_url:` field on agent nodes — ADL/Oracle/A2A Interop**

With Oracle Agent Spec, Next Moca ADL, and A2A Agent Cards all defining agents externally, OSOP `agent` nodes need a first-class way to reference an external agent definition:

```yaml
- id: "research-agent"
  type: "agent"
  agent_def_url: "https://registry.example.com/agents/researcher.adl.yaml"
  runtime:
    task: "${inputs.topic}"
```

This makes OSOP the runtime orchestration layer for every agent-definition standard. Not a new proposal — an addition to the existing `agent` node spec in `docs/node-types.md`.

**IETF AAT Export Field in `.osoplog` Schema**

Add to `.osoplog` schema (alongside `osoplog_version`):

```yaml
export_formats:
  - ietf-aat     # draft-sharif-agent-audit-trail-00
  - otel-json    # OpenTelemetry GenAI Semantic Conventions
  - cloudtrail   # AWS CloudTrail format
```

Declaring intended export formats in the log itself makes tooling discovery automatic and sets expectations for `osop log-export` capabilities.

### Tooling Gaps

| Tool | Priority | Signal | Status |
|------|----------|--------|--------|
| `osop log-export --format ietf-aat` | 🔴 **New Critical** | **IETF AAT draft is Standards Track** | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel confirmed dominant | Not built |
| `osoplog-otel-mapping.md` | 🔴 Critical | 20 days; Oracle gap; IETF gap; compliance surge | **Write today** |
| `osop compliance-check --framework ietf-aat` | 🔴 **New Critical** | 65 days to EU AI Act; IETF AAT is the baseline | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | Same 65-day window | Not built |
| `osop export-agent-card` (JWS/JCS) | 🔴 Critical | A2A v1.2, RFC 7515 + RFC 8785 | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph v0.4 | Not built |
| `osop export-oracle-agent-spec` | 🔴 Critical | Oracle enterprise distribution | Not built |
| `osop compile --from-markdown` | 🟠 High | AWS Strands + Agent Skills + GitHub | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K-star ecosystem | Not built |

### Ecosystem Plays

| Target | Action | Hook | Today? |
|--------|--------|------|--------|
| **`osoplog-otel-mapping.md`** | Write + publish | Oracle gap + IETF gap + compliance surge | **Yes — #1** |
| **OSP-0018: tamper-evidence** | Write + publish | IETF AAT RFC 8785 alignment | **Yes — 45 min** |
| **IETF AAT author (Sharif)** | Email/comment | Position `.osoplog` as workflow-aware AAT superset | **Yes — 20 min** |
| **SmartBear DevRel** | Send email | "From Endpoints to Intent" published today | **Yes — 3 min** |
| **Waxell.ai** | Comment after shipping otel-mapping | First open standard for audit trail articles | After shipping |
| **DigitalApplied** | Guest post pitch | 7 best practices → `.osoplog` answer | After shipping |
| **Tetrate** | Comment on MCP audit logging | OSP-0013 transport annotation | After shipping |
| **OpenClaw** | Confirm PR open | 373K stars, 50 days pending | **Confirm today** |
| **AAIF** | Confirm sent | 50 days, milestone | **Confirm today** |
| **OSP-0008/0015/0016/0006/0013** | Write remaining 5 proposals | Carry from Day 49 | Today if time allows |
| **OSP-0004: A2A signed cards** | Write with RFC 7515 + RFC 8785 | JWS/JCS confirmed | Weekend |
| **OSP-0007: Compliance Extensions** | Write with EU AI Act + NIST AI RMF 1.1 + IETF AAT | Three frameworks aligned | This week |
| **HN post** | Schedule next Monday 9am ET | Four-way comparison updated | Monday |

---

## Top 3 Actions for This Week

### 1. Ship `osoplog-otel-mapping.md` Today — Three Differentiation Layers in One Document

This document has been 20 days pending and now covers three distinct competitive angles:
- **Oracle differentiator**: Oracle agent-spec has no execution record format — `.osoplog` fills that layer
- **IETF AAT complement**: `.osoplog` is a workflow-aware superset of IETF AAT — generates AAT-compatible flat records
- **OTel integration**: `.osoplog` maps to GenAI Semantic Conventions for Datadog/Grafana/Jaeger ingest

This is the single document that transforms OSOP from "a workflow definition format" into "the execution record standard that works with Oracle, IETF, and OTel." Publish to `docs/osoplog-otel-mapping.md` today. If only one thing ships this week, this is it.

### 2. Publish OSP-0018 (Tamper-Evidence) + Send SmartBear Email + Contact IETF Author — Three 1-Hour Actions

After `osoplog-otel-mapping.md` ships, three 20–45-minute actions build on the momentum:
- **OSP-0018** (45 min): SHA-256 + RFC 8785 hash chaining in `.osoplog` — technically aligns OSOP with both IETF AAT and A2A v1.2, creating a coherent cryptographic story across all three standards
- **SmartBear email** (3 min): "From Endpoints to Intent" just published — send the pending DevRel email while the hook is fresh; this is the highest-ROI-per-minute action available today
- **IETF AAT author contact** (20 min): First-mover advantage in the IETF standards space; if Sharif references OSOP in the draft, it becomes part of the Standards Track document

### 3. Ship the Five Remaining OSP Proposals (Days 49–50 Carry) — End the Week with a Proposals Directory

The `docs/proposals/` directory still doesn't exist at Day 50. Shipping any OSP proposals transforms the repo's perceived maturity. Priority order for remaining proposals: OSP-0008 (triggers), OSP-0015 (composition), OSP-0016 (MCP Apps human), OSP-0006 (skill_ref), OSP-0013 (MCP transport). Combined time estimate: 5–6 hours. Even shipping two of five ends the week materially better than Day 49.

---

## Adoption Metrics to Track

| Metric | Day 50 (Today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | ~1 | 500 | 2,000 |
| Open OSOP PRs (confirmed) | 14 | 20 | 30 |
| Merged external PRs | 0 (unconfirmed) | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| OSP proposals published | 0 | 8 | 12 |
| `osoplog-otel-mapping.md` | **Pending 20 days** | Published | Referenced externally |
| IETF AAT compatibility section | 0 | Published in otel-mapping | Referenced by Sharif draft |
| OSP-0018 (tamper-evidence) | Proposed today | Published | Schema merged |
| AAIF submission | Unconfirmed (50 days) | Acknowledged | In review |
| SmartBear contact | **Send today** | In discussion | Guest post published |
| IETF author contact | **Today** | Acknowledged | Cross-reference in draft |
| Waxell/DigitalApplied mentions | 0 | 2 articles | 5 articles |
| HN submission | 0 | 1 post (Monday) | 3 posts |
| CFP submissions | 0 | 3 | 1+ accepted |
| EU AI Act compliance tool | Not built | OSP-0007 + OSP-0018 spec | CLI working |
| IETF AAT export command | Not built | Spec published | CLI working |
| PyPI downloads | — | 2k/mo | 10k/mo |

---

## Key Links (New Today)

- **IETF draft-sharif-agent-audit-trail-00**: https://datatracker.ietf.org/doc/draft-sharif-agent-audit-trail/
- **IETF AAT full text**: https://datatracker.ietf.org/doc/html/draft-sharif-agent-audit-trail-00
- **IETF draft-sharif-aeba-00 (AEBA)**: https://datatracker.ietf.org/doc/draft-sharif-aeba/
- **IETF draft-sharif-agent-identity-framework-00**: https://datatracker.ietf.org/doc/draft-sharif-agent-identity-framework/
- **IETF draft-sharif-attp-00**: https://datatracker.ietf.org/doc/draft-sharif-attp/
- **AgenticRail IETF AAT analysis**: https://agenticrail.nz/blog/ietf-agent-audit-trail/
- **SmartBear: From Endpoints to Intent (Arazzo + MCP)**: https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo/
- **Nordic APIs: How Arazzo Could Help MCP Servers**: https://nordicapis.com/how-arazzo-could-help-mcp-servers-orchestrate-apis-for-ai-consumers/
- **Arazzo 1.1.0 spec**: https://spec.openapis.org/arazzo/latest.html
- **Waxell.ai AI Agent Compliance Audit Trail**: https://www.waxell.ai/blog/ai-agent-compliance-audit-trail
- **DigitalApplied 7 Best Practices for Agent Audit Trail**: https://www.digitalapplied.com/blog/agent-audit-trail-design-7-best-practices-2026
- **Tetrate MCP Audit Logging**: https://tetrate.io/learn/ai/mcp/mcp-audit-logging
- **DEV.to AI Agent Audit Trail Compliance**: https://dev.to/waxell/your-ai-agents-and-the-audit-trail-what-compliance-actually-needs-33i5
- **MCP 2026 RC release candidate**: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- **A2A Protocol v1.2**: https://a2a-protocol.org/latest/
- **NIST AI RMF 1.1**: https://www.nist.gov/artificial-intelligence/executive-order-safe-secure-and-trustworthy-ai
- **Oracle Open Agent Specification**: https://github.com/oracle/agent-spec
- **Next Moca ADL**: https://www.nextmoca.com/blogs/agent-definition-language-adl-the-open-source-standard-for-defining-ai-agents
- **Anthropic donates MCP to AAIF**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

---

*Previous brief: [`2026-05-28-daily-brief.md`](./2026-05-28-daily-brief.md)*
*Today is Day 50, Friday. Non-negotiable: `osoplog-otel-mapping.md` ships today. OSP-0018 (tamper-evidence) ships today. SmartBear email sent today. IETF author contacted today. The IETF now validates the premise — execute before the standards body moves without OSOP.*
