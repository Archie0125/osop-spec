# OSOP Daily Strategy Brief — 2026-05-28

> **Day 49. Thursday — OSP-0006 + OSP-0013 Day. Wednesday carry-overs confirmed unshipped via repo inspection.**
> Checked `docs/proposals/` — directory does not exist. Zero OSP proposals have shipped to the repo. All items listed as "OVERDUE — NOT SHIPPED" in the Day 48 tracker remain unshipped: `osoplog-otel-mapping.md`, OSP-0008, OSP-0015, OSP-0016. Thursday's assignments (OSP-0006 and OSP-0013) are now added to an already six-item writing queue.
>
> New threat escalation: **Oracle's Open Agent Specification just announced AG-UI integration** — combining framework-agnostic workflow definition with UI streaming. This is the most complete single-stack OSOP competitor to date, with Oracle's enterprise distribution behind it. Immediate strategic response: position OSOP's portable execution record (`.osoplog`) as the layer Oracle agent-spec explicitly lacks.
>
> All six writing deliverables are due today. The window to establish OSOP's spec presence before enterprise tooling locks in around Oracle/A2A/MCP/Temporal is narrowing. Thursday must be a full writing day.

---

## Action Tracker (Day 49)

| Action | Status | Days Pending | Today / This Week |
|--------|--------|--------------|-------------------|
| **`osoplog-otel-mapping.md`** | 🔴 **OVERDUE — NOT SHIPPED** | **19** | Write first. Unblocks AG2 PR + OTel blog + Red Hat pitch. Oracle has no equivalent. |
| **OSP-0008: `trigger:` RFC (revised)** | 🔴 **OVERDUE — NOT SHIPPED** | **12** | Write second. Arazzo 1.1's AsyncAPI trigger support makes OSOP's AI-workflow trigger story urgent. |
| **OSP-0015: Workflow Composition** | 🔴 **OVERDUE — NOT SHIPPED** | **4** | Write third. Arazzo 1.1 chained workflow calls are live — OSP-0015 must align with them now. |
| **OSP-0016: MCP Apps `human` subtype** | 🔴 **OVERDUE — NOT SHIPPED** | **1** | Write fourth. MCP RC is live; July 28 final is 60 days away. |
| **OSP-0006: `skill_ref` RFC** | ⏳ **Thursday — Write Today** | **0** | Write fifth. Agent Skills open std + dotnet/skills integration target. |
| **OSP-0013: MCP transport annotation** | ⏳ **Thursday — Write Today** | **0** | Write sixth. MCP stateless core is RC; annotate `transport: stateless-http`. |
| **Oracle agent-spec response positioning** | 🆕 **New Today — Critical** | **0** | Draft 2-sentence positioning statement: "Oracle defines agents; OSOP defines what they do and records what they did." Publish in manifesto or README. |
| **AAIF submission** | 🔴 OVERDUE / CONFIRM | **49** | Send immediately if not sent. Oracle is already in the enterprise standard-body room. |
| **Hermes Agent GitHub issue** | ⏳ CONFIRM / OPEN TODAY | **1** | 30 min. 100K stars in 7 weeks; no workflow format. |
| **API Stronghold outreach** | ⏳ CONFIRM / SEND TODAY | **1** | 10 min. Exact `.osoplog` narrative confirmed by press. |
| **Moonwalk SIG engagement** | ⏳ CONFIRM / TODAY | **1** | 15 min. OAI/sig-moonwalk/discussions. |
| **OpenClaw SOUL.md PR** | ⏳ CONFIRM / OPEN TODAY | **49** | 373K stars confirmed. |
| **awesome-ai-agents-2026 PRs (×3)** | ⏳ CONFIRM / TODAY | **3** | 30 min. |
| **Agentailor submission** | ⏳ CONFIRM | **2** | 5 min. |
| **arxiv 2505.02279 author email** | ⏳ CONFIRM | **2** | 20 min. |
| **NIST CAISI submission** | ⏳ Deadline check | **21** | Check deadline. Submit this week. |
| **SmartBear DevRel email** | ⏳ CONFIRM | **11** | Send today. Hook: Arazzo 1.1 complement + OSOP. |
| **AEO Scanner PRs — METRICS.md cleanup** | 🆕 **Maintenance** | **0** | 9/23 open PRs in METRICS.md are for "AEO Scanner" (not OSOP). Clean up to show accurate OSOP PR count. |
| **OSP-0004: A2A agent subtype + signed cards** | ⏳ Pending | **52** | JWS RFC 7515 + JCS RFC 8785 — now confirmed technically. Friday or weekend. |
| **OSP-0007: Compliance Extensions** | ⏳ Pending | **14** | EU AI Act: **65 days** to enforcement (August 2, 2026). |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **49** | AAIF prereq. This week. |
| **OSP-0017: Cost governance fields** | ⏳ This Week | **2** | Friday. |
| **`state_schema:` design note** | ⏳ This Week | **2** | Friday. LangGraph v0.4 bridge. |
| **AG2 examples PR** | ⏳ Pending | **19** | Blocked on `osoplog-otel-mapping.md`. |
| **LangGraph community post** | ⏳ Pending | **18** | After OSP-0015. |
| **Temporal community post** | ⏳ Pending | **23** | After OSP-0013. |
| **HN post** | ⏳ Reschedule | **17** | Next Monday 9am ET. |
| **CNCF TAG Runtime comment** | ⏳ Pending | **13** | cncf/toc#1746 |

---

## Intelligence

### New Signals (2026-05-28)

---

**Oracle Open Agent Specification + AG-UI Integration — Most Complete OSOP Competitor Yet**

Oracle's Open Agent Specification (github.com/oracle/agent-spec), originally a framework-agnostic declarative language for agentic systems, has announced AG-UI (Agentic UI) integration. The combined stack now covers: standalone agent definitions, structured agentic workflows, multi-agent system composition, and live UI streaming.

Specification summary: Agent Spec defines building blocks for agents and workflows in a framework-agnostic YAML format. The AG-UI integration means Oracle agents can now stream real-time UI updates to frontends using the AG-UI open standard, making agent state visible in running applications.

Implication for OSOP: This is the most significant competitive development since the A2A protocol reached 150 organizations. Oracle Agent Spec now covers three of OSOP's four value pillars: workflow definition, multi-agent composition, and live UI streaming. The one layer it does not cover: **portable execution records**. Oracle Agent Spec has no equivalent to `.osoplog` — no structured audit trail, no OTel mapping, no compliance evidence format. This is OSOP's clearest differentiation and must be stated plainly. The positioning statement: *"Oracle Agent Spec defines how agents and workflows are structured. OSOP defines what agents do and records exactly what happened — the audit trail Oracle doesn't ship."*

Strategic response: Do not compete head-to-head on workflow definition richness. Differentiate on the execution record layer. Publish `osoplog-otel-mapping.md` today. An enterprise that adopts Oracle agent-spec still needs `.osoplog`-compatible audit records. Position OSOP as the execution log standard that works with any workflow definition format, including Oracle's.

---

**Next Moca Agent Definition Language (ADL) — Open Source, Apache 2.0, Feb 2026**

Next Moca released the Agent Definition Language (ADL) as an open-source specification in February 2026. ADL is vendor-neutral and provides a declarative format for defining AI agents: identity, role, LLM model setup, tools, permissions, RAG data access, dependencies, and governance metadata (ownership, version history). The project is positioned as "the open standard AI agents have been missing," comparable to what OpenAPI does for APIs.

ADL complements A2A, MCP, OpenAPI, and workflow engines — it focuses on the agent definition layer (who the agent is), not the workflow execution layer (what the agent does, in sequence, with records). ADL has been featured on InfoQ and All Things Open.

Implication for OSOP: ADL fills the agent identity layer. OSOP fills the workflow execution layer. These are genuinely complementary: an ADL-defined agent can be referenced as an OSOP `agent` node. The strategic move is to publish a complement doc: "ADL defines your agents. OSOP orchestrates them and records every run." This mirrors the Arazzo complement strategy and positions OSOP as the runtime-side partner to every agent-definition standard (ADL, SOUL.md, Agent Skills, A2A Agent Cards).

---

**Arazzo 1.1: Chained Workflow Execution + AsyncAPI Support — OSP-0015 Alignment Required**

Arazzo 1.1 shipped on May 19, 2026 (9 days ago). Key new capabilities directly relevant to OSOP:

1. **Chained workflow execution**: `sourceDescriptions` now accepts `asyncapi` documents alongside `openapi` and `arazzo`. Action Objects fully support calling other workflows with explicit input mapping via `parameters`, enabling composable sub-workflows.
2. **Advanced Selector Object**: New `Selector Object` supports fine-grained data extraction using `jsonpath`, `xpath`, or `jsonpointer` — directly applicable to OSOP's CEL expression layer for inter-node data passing.
3. **AsyncAPI steps**: Steps support `send` or `receive` actions with correlation identifiers for async request/response linking.
4. **`$self` identity**: New root-level `$self` field provides a canonical URI for referencing Arazzo descriptions.

Implication for OSOP: OSP-0015 (Workflow Composition, overdue 4 days) must explicitly align with Arazzo 1.1's chained execution model. The composition pattern should state: "An OSOP workflow can call an Arazzo workflow as an `api` node step; an Arazzo workflow can call an OSOP agent-workflow as an external step. OSP-0015 defines the OSOP side of this boundary." The `$self` URI pattern in Arazzo is a model for OSOP's workflow ID references in sub-workflow calls. OSP-0015 should adopt this pattern for `osop://` workflow references.

---

**A2A Protocol v1.2: JWS + JCS Technical Specification for Signed Agent Cards**

The A2A protocol signed Agent Card specification is now confirmed: cards are signed using **JSON Web Signature (JWS) as defined in RFC 7515**, canonicalized using **JSON Canonicalization Scheme (JCS) as defined in RFC 8785** before signing. The signatures allow clients to verify card authenticity and origin. A2A is now governed by the Linux Foundation's Agentic AI Foundation (AAIF).

Production adoption: Microsoft, AWS, Salesforce, SAP, and ServiceNow are running A2A in production (not pilot). 150+ organizations total.

Implication for OSOP: OSP-0004 (A2A agent subtype + signed cards, overdue 52 days) now has the specific technical references needed: JWS/RFC 7515 over JCS/RFC 8785. The `osop export-agent-card` CLI command should output a JSON document canonicalized per RFC 8785 and signed per RFC 7515. The OSP-0004 RFC should reference these standards directly. Priority this week: write OSP-0004 with the JWS/JCS implementation details, using the now-confirmed technical spec.

---

**MCP RC 2026: New Maintainers + Stateless Architecture Confirmed**

Two leadership additions to the MCP Core Maintainer group: **Clare Liguori** (joining as Core Maintainer) and **Den Delimarsky** (joining as Lead Maintainer). The July 28, 2026 final spec (60 days away) includes: stateless protocol core, Extensions framework, Tasks (handle-based lifecycle with `tasks/get`, `tasks/update`, `tasks/cancel`), MCP Apps (server-rendered sandboxed HTML UIs), authorization hardening, and formal deprecation policy.

The Tasks extension reshapes `.osoplog` `mcp` execution records: servers can respond to `tools/call` with a task handle rather than an immediate result. The client drives the task lifecycle with polling calls.

Implication for OSOP: OSP-0013 (MCP transport annotation, due today) must address the Tasks pattern in `.osoplog`. When an MCP tool call returns a task handle, the `.osoplog` record should capture: `mcp_task_id`, `initial_response: task_handle`, `final_response`, `poll_count`, `total_duration_ms`. The `transport` annotation field should support three values: `sse` (pre-RC), `stateless-http` (RC), and `http-task` (RC with Tasks extension). Clare Liguori's addition is notable — she is an AWS infrastructure architect, suggesting MCP is doubling down on enterprise/cloud production deployment.

---

**Enterprise AI Orchestration Consolidation: LangGraph 34%, Temporal = Durable Standard**

LangGraph accounts for 34% of agent-framework citations in production architecture documents at 1,000+ employee companies (Gartner, Q1 2026). Temporal is the standard for durable agent execution — confirmed in production at OpenAI Codex, LangGraph v0.4 (Multi-Region GA), and AWS Step Functions fallback scenarios.

The enterprise AI orchestration stack is consolidating around: MCP (tool connectivity), A2A (agent routing), LangGraph Agent Protocol (cross-framework execution), Temporal (durable state), and OpenTelemetry (observability). OSOP occupies the **workflow definition + audit record** layer that none of these four cover. The window to establish presence in this stack before it becomes entrenched is approximately 60 days (coincides with MCP July 28 final).

---

**METRICS.md: AEO Scanner PR Contamination**

The METRICS.md file (last updated May 27) lists 23 open PRs, but 9 of them are "Add AEO Scanner" submissions to SEO and generative AI repositories — unrelated to OSOP. The genuine OSOP PRs total **14**, targeting: windmill-labs, awesome-argo, restyler/awesome-n8n, agno-agi/agno, openai/swarm, microsoft/semantic-kernel, ag2ai/ag2, langgenius/dify, FoundationAgents/MetaGPT, crewAIInc/crewAI-examples, e2b-dev/awesome-ai-agents, awesome-windsurf, continuedev/awesome-rules, and anthropics/knowledge-work-plugins. The METRICS.md PR count should be corrected to reflect 14 active OSOP PRs and remove the AEO Scanner entries.

---

### Continuing Signals (Carried)

- **Hermes Agent: 100K stars in 7 weeks** — No workflow format. Highest-priority new integration target.
- **OpenClaw: 373,000+ GitHub stars** — SOUL.md PR pending 49 days.
- **AAIF: 49 days pending submission** — Oracle, MCP, goose, AGENTS.md already in the room.
- **EU AI Act enforcement: 65 days** (August 2, 2026) — OSP-0007 unbuilt.
- **OTel confirmed dominant** — `osoplog-otel-mapping.md` is 19-day pending.
- **MCP July 28 final: 60 days** — OSP-0013 + OSP-0016 both gated on this.
- **Arazzo 1.1 shipped 9 days ago** — Complement doc and OSP-0015 still pending.
- **A2A v1.2: 150+ organizations, AAIF governance** — OSP-0004 52 days pending.
- **LangGraph v0.4: 34% enterprise** — Bridge doc pending.
- **Agent Skills open standard: 30+ tool adoptions** — OSP-0006 due today.
- **AutoGen → AG2 active** — OSP docs reference needs update.
- **NIST CAISI** — Active Washington-backed initiative; deadline unconfirmed.
- **Academic survey arxiv 2505.02279** — Does not cite OSOP; author email pending.

---

## Threats

1. **Oracle agent-spec + AG-UI: enterprise-grade, Oracle-backed, workflow + UI combined.** This is the highest-priority new threat since A2A. Oracle covers: workflow definition, multi-agent composition, and UI streaming in one open spec. The only missing piece is execution records — OSOP's `.osoplog`. Publishing `osoplog-otel-mapping.md` today transforms this threat into a positioning opportunity: "Use Oracle agent-spec for your agents; use OSOP for your audit trail."

2. **Writing backlog (6 deliverables, 0 shipped) blocks every downstream action.** `docs/proposals/` directory does not exist. No OSP proposals are in the repo. Every enterprise evaluation of OSOP encounters a spec with promises but no published RFCs. The proposals are the proof that OSOP is actively governed. Without them, the 49-day-old spec looks abandoned.

3. **60-day MCP final creates an enterprise lock-in window.** When MCP July 28 final ships, enterprise tooling vendors will finalize their MCP integrations. Tooling vendors who integrate OTel + MCP execution records at this point will define the default observability format. OSOP's `osoplog-otel-mapping.md` must ship before vendors finalize their OTel/MCP schemas or OSOP becomes a follower standard rather than a defining one.

4. **Arazzo 1.1's chained workflow execution narrows OSP-0015's window.** Arazzo 1.1 published workflow-to-workflow calls 9 days ago. Every week OSP-0015 stays unwritten, the Arazzo community's instinct for sub-workflow composition will be shaped by Arazzo's model alone — not OSOP's. OSOP should align with and extend Arazzo's model, not diverge from it.

5. **49-day AAIF non-participation while Oracle and Google are in the room.** The AAIF holds summits with 1,200+ attendees. Oracle's agent-spec, Google's A2A, and Anthropic's MCP are ecosystem-defining forces in that body. OSOP has no presence. Every month without a submission is a month of missed positioning in the body that will define agentic AI governance.

6. **ADL and Agent Spec may absorb the "workflow standard" framing before OSOP publishes.** Next Moca ADL (Feb 2026) and Oracle Agent Spec are both now positioned as "the open standard for AI agents." Neither covers execution records, but both may expand into workflow execution semantics if OSOP doesn't claim the terminology first. The "OSOP is the OpenAPI of AI workflows" positioning must be published and repeated in every OSP proposal, blog post, and integration PR.

7. **14 open ecosystem PRs with 0 confirmed merged.** METRICS.md shows 14 genuine OSOP PRs to major repos. If none of these are merged, it signals low ecosystem traction. The goal this week: follow up on at least 3 PRs to confirm status and accelerate merges.

---

## Opportunities

### Critical: Today's Six Writing Deliverables

**Mandatory order — highest leverage to lowest:**

---

**1. `osoplog-otel-mapping.md` — The Oracle Differentiator (2–3 hours)**

Oracle agent-spec has no execution record format. This document is the proof point that OSOP covers the layer Oracle leaves empty.

Core structure:
```
## Why .osoplog + OTel

Oracle Agent Spec, A2A, LangGraph, and Temporal all define how agents
are structured or how they communicate. None define a portable execution
record. .osoplog is that record. This document maps .osoplog fields to
OpenTelemetry GenAI Semantic Conventions so any OTel-compatible
observability stack (Datadog, Grafana, Jaeger, Prometheus) can ingest OSOP
execution records natively.

## Field Mapping Table

| .osoplog field                   | OTel Span attribute              | GenAI Convention                  |
|----------------------------------|----------------------------------|-----------------------------------|
| run_id                           | trace_id                         | —                                 |
| node_id                          | span_id                          | gen_ai.operation.name             |
| ai_metadata.model                | gen_ai.request.model             | gen_ai.request.model              |
| ai_metadata.prompt_tokens        | gen_ai.usage.input_tokens        | gen_ai.usage.input_tokens         |
| ai_metadata.completion_tokens    | gen_ai.usage.output_tokens       | gen_ai.usage.output_tokens        |
| ai_metadata.cost_usd             | gen_ai.usage.cost                | (proposed extension)              |
| status                           | otel.status_code                 | —                                 |
| duration_ms                      | span duration                    | —                                 |
| error.message                    | exception.message                | —                                 |
| mcp_call.tool_name               | gen_ai.tool.name                 | gen_ai.tool.name                  |
| mcp_call.mcp_server              | server.address                   | —                                 |
| mcp_call.transport               | rpc.system                       | —                                 |
| human_response.approver          | enduser.id                       | —                                 |
| human_response.decision          | gen_ai.human.decision            | (OSOP extension)                  |

## MCP Tasks Pattern (.osoplog ← MCP RC Tasks Extension)

When an MCP tool returns a task handle (MCP RC Tasks extension):
- mcp_task_id: string (the handle)
- poll_count: integer
- final_status: completed | cancelled | failed
- total_duration_ms: includes all polling time

## Export Recipe

osop log-export --format otel-json → OTLP/HTTP JSON

## Vendor Compatibility

Datadog: ingest via OTLP HTTP endpoint + custom gen_ai.* attributes
Grafana: OpenTelemetry Collector → Tempo + Prometheus
Jaeger: OTLP over HTTP; trace_id = run_id
```

Publish to `docs/osoplog-otel-mapping.md`. Cross-link from SPEC.md, README, and conformance-levels.md (L3).

---

**2. OSP-0008: `trigger:` RFC (1–1.5 hours)**

Arazzo 1.1 handles HTTP-triggered API workflows. OSP-0008 handles AI-agent-workflow initiation — entirely different layer. Preamble must make the complement explicit.

Four trigger types:
- `webhook`: HTTP inbound to the OSOP runtime
- `schedule`: Cron or interval
- `queue`: Message queue (SQS, Kafka, Pub/Sub)
- `a2a_signal`: A2A task delegation from another agent (new in v1.1.0 of OSP-0008 based on A2A v1.2)

Publish to `docs/proposals/OSP-0008-triggers.md`.

---

**3. OSP-0015: Workflow Composition (1.5 hours)**

Arazzo 1.1 alignment is now required. The composition model must state that:
- An OSOP workflow can call an Arazzo workflow as an `api` node (HTTP call to an Arazzo-described endpoint)
- An OSOP workflow can call another OSOP workflow as a `spawn` edge
- The `$self` URI pattern from Arazzo 1.1 maps to OSOP's `osop://workflow-id` reference scheme
- Sub-workflow `.osoplog` records use `parent_run_id` to link call trees
- Arazzo 1.1's Selector Object (`jsonpath`, `xpath`, `jsonpointer`) is compatible with OSOP's CEL expression layer for output extraction

Publish to `docs/proposals/OSP-0015-workflow-composition.md`.

---

**4. OSP-0016: MCP Apps `human` Subtype (1 hour)**

MCP RC defines MCP Apps as server-rendered sandboxed HTML UIs. When a human approval step is served through an MCP App, it blurs `mcp` and `human` node boundaries.

```yaml
- id: "review-in-mcp-app"
  type: "human"
  subtype: "mcp-app"
  name: "Human Reviews in MCP App UI"
  runtime:
    mcp_server: "https://tools.example.com/mcp"
    tool: "review_workflow_output"
    renders_ui: true
    timeout: "2h"
    response_schema:
      type: object
      properties:
        decision:
          type: string
          enum: [approved, rejected, revision_requested]
        notes:
          type: string
```

`.osoplog` record adds: `rendered_ui: true`, `mcp_app_version`, `human_decision`. Note: MCP Tasks extension means the MCP App invocation may return a task handle rather than a synchronous response — capture both patterns.

Publish to `docs/proposals/OSP-0016-mcp-apps-human-subtype.md`.

---

**5. OSP-0006: `skill_ref` RFC — Agent Skills Open Standard (1 hour)**

The Agent Skills open standard has 30+ tool adoptions. Microsoft's dotnet/skills is a new concrete integration target. OSP-0006 defines the `skill_ref` field on `agent` nodes, linking OSOP nodes to published skill manifests.

```yaml
- id: "code-review-agent"
  type: "agent"
  name: "Code Review with Published Skills"
  runtime:
    model: "claude-sonnet-4-6"
    skill_ref:
      - url: "https://skills.example.com/.well-known/skills.json"
        skill_id: "code_review"
        version: "^1.0"
      - url: "https://raw.githubusercontent.com/microsoft/dotnet-skills/main/csharp-review/skill.json"
        skill_id: "dotnet_code_review"
```

The example in the RFC must reference `dotnet/skills` specifically — demonstrates multi-vendor skill compatibility from day one.

Publish to `docs/proposals/OSP-0006-skill-ref.md`.

---

**6. OSP-0013: MCP Transport Annotation (45 minutes)**

MCP RC changes transport from stateful SSE to stateless HTTP. The `mcp` node type and `.osoplog` `mcp_call` records need to annotate which transport was used, for audit reproducibility.

Three transport modes:
- `sse`: Pre-RC MCP (stateful, session-based)
- `stateless-http`: MCP RC core (each call is independent)
- `http-task`: MCP RC with Tasks extension (async task handle lifecycle)

```yaml
- id: "call-mcp-tool"
  type: "mcp"
  runtime:
    server: "https://tools.example.com/mcp"
    tool: "web_search"
    transport: "stateless-http"   # sse | stateless-http | http-task
    timeout: "30s"
```

Publish to `docs/proposals/OSP-0013-mcp-transport.md`.

---

### High Priority: Oracle Response Positioning (15 minutes)

**7. Draft and publish Oracle/ADL positioning statement**

Update `docs/manifesto.md` (or README) to include:

> *OSOP is not a competitor to Oracle Agent Spec, Next Moca ADL, or A2A Agent Cards. All three define what agents are and how they communicate. OSOP defines what agents do — the workflow graph of steps — and records exactly what happened, in a portable, OTel-compatible, compliance-ready format. An agent defined with ADL, an identity carried by an A2A signed card, and a workflow orchestrated by Oracle Agent Spec all generate OSOP-compatible `.osoplog` records.*

This positioning statement should appear in README, manifesto, and every complement document.

---

### Medium Priority: New Target + Quick-Hits (30 minutes total)

**8. ADL Complement Document Stub**

Create `docs/complements/osop-adl-complement.md` (stub):
- ADL covers: agent identity, role, LLM, tools, permissions, RAG, governance
- OSOP covers: what agents do (workflow graph) + what happened (execution record)
- Integration: OSOP `agent` nodes reference ADL-defined agents via `skill_ref` or `agent_def_url`

**9. Hermes Agent GitHub Issue (Confirm/Open)**
Open or confirm issue in NousResearch/hermes-agent. Frame: "Hermes workflows involve sequential tasks — `.osop.yaml` gives those a portable, version-controlled, shareable definition format."

**10. AEO Scanner PR Cleanup**
Remove 9 AEO Scanner entries from METRICS.md. Report accurate OSOP-only PR count (14 active PRs).

---

## Evolution Ideas

### Spec Improvements

**OSP-0019: Agent Definition URL (`agent_def_url:`) Field — ADL + Oracle Interop**

The ADL and Oracle Agent Spec announcements create a clear need: an OSOP `agent` node should be able to reference an external agent definition file rather than (or in addition to) inlining runtime parameters. Proposed field:

```yaml
- id: "research-agent"
  type: "agent"
  agent_def_url: "https://registry.example.com/agents/researcher-v2.adl.yaml"
  # Override only what changes per-workflow:
  runtime:
    task: "${inputs.research_topic}"
```

This makes OSOP the runtime orchestration layer for ADL-defined agents, Oracle Agent Spec-defined agents, and A2A-exposed agents alike — without competing on the agent definition format.

**`audit_trail:` top-level block in `.osoplog` — Enterprise Observability Completeness**

The enterprise observability stack (PwC, Voiceflow, Atlan) identifies four pillars: distributed traces, automated evaluations, retrieval logs, and policy compliance records. The current `.osoplog` covers traces and tool calls. Add a top-level `audit_trail:` block:

```yaml
audit_trail:
  evaluations:
    - node_id: "review"
      eval_type: "quality_check"
      score: 0.92
      evaluator: "claude-sonnet-4-6"
      criteria: ["accuracy", "completeness", "tone"]
  retrieval_log:
    - node_id: "rag-lookup"
      query: "${inputs.question}"
      sources_retrieved: 5
      top_source: "docs/policy.pdf"
      retrieval_score: 0.87
  policy_compliance:
    - policy: "no-pii"
      result: "pass"
    - policy: "human-approval-required"
      result: "pass"
      approved_by: "alice@example.com"
      approved_at: "2026-05-28T14:32:00Z"
```

This makes `.osoplog` enterprise-complete for EU AI Act Article 12 and NIST AI RMF requirements.

**`protocol_bindings.a2a:` JWS/JCS Reference Update**

OSP-0004 should add to the `protocol_bindings.a2a` field:

```yaml
protocol_bindings:
  a2a:
    agent_card_url: "https://agents.example.com/.well-known/agent.json"
    signed: true
    signing_standard: "JWS-RFC7515"
    canonicalization: "JCS-RFC8785"
```

This makes OSOP's A2A interop technically precise and auditable — enterprises deploying A2A in production need to know their agent cards are signed to the published standard.

### Tooling Gaps

| Tool | Priority | Signal | Status |
|------|----------|--------|--------|
| `osoplog-otel-mapping.md` | 🔴 Critical | 19 days; Oracle's gap; enterprise gate | **Write today (1st)** |
| `osop log-export --format otel-json` | 🔴 Critical | Depends on mapping doc | Not built |
| `osop export-agent-card` (JWS/JCS) | 🔴 Critical | A2A v1.2 + RFC 7515 + RFC 8785 | Not built |
| `osop export-temporal` | 🔴 Critical | Temporal = OpenAI Codex infra | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 65 days to enforcement | Not built |
| `osop export-oracle-agent-spec` | 🆕 **New Critical** | **Oracle has enterprise reach; bridge = adoption** | Not built |
| `osop import-oracle-agent-spec` | 🆕 **New Critical** | **Oracle AG-UI integration confirms enterprise intent** | Not built |
| `osop compile --from-markdown` | 🟠 High | AWS Strands + Agent Skills | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ stars | Not built |
| `osop import-soul-md` | 🟠 High | OpenClaw 373K+ stars | Not built |
| `osop import-hermes` | 🟠 High | Hermes Agent 100K stars | Not built |
| `osop import-adl` | 🆕 **New High** | **Next Moca ADL open-sourced; Apache 2.0** | Not built |
| METRICS.md AEO Scanner cleanup | 🟡 Maintenance | 9/23 PRs are not OSOP PRs | **5 min today** |

### Ecosystem Plays

| Target | Action | Hook | Timing |
|--------|--------|------|--------|
| **Six writing deliverables** | Ship today in priority order | 19-day backlog; Oracle gap now visible | **Today** |
| **Oracle agent-spec** | Positioning statement + bridge doc stub | AG-UI integration = enterprise competitor | **Today (15 min)** |
| **Next Moca ADL** | Complement doc stub + positioning | Apache 2.0; InfoQ coverage; "missing standard" framing | **Today (15 min)** |
| **Hermes Agent** | Confirm/open issue | 100K stars in 7 weeks; no workflow format | **Today (30 min)** |
| **API Stronghold** | Confirm/send guest post pitch | Exact `.osoplog` narrative match | **Today (10 min)** |
| **Moonwalk SIG** | Confirm/comment | OAI sig-moonwalk/discussions | **Today (15 min)** |
| **AAIF** | Confirm sent or send immediately | 49 days; Oracle + A2A in the room | **Immediately** |
| **OpenClaw** | Confirm/open SOUL.md PR | 373K stars (49 days pending) | **Today** |
| **awesome-ai-agents-2026 (×3)** | Confirm/submit | 30 min | **Today** |
| **AEO Scanner PRs** | Remove from METRICS.md | Accuracy | **5 min today** |
| **OSP-0004 (A2A)** | Write RFC with JWS/JCS refs | RFC 7515 + RFC 8785 now confirmed | **Friday** |
| **OSP-0017** | Cost governance fields | Temporal durable agents | **Friday** |
| **`state_schema:` design note** | Write | LangGraph v0.4 bridge | **Friday** |
| **LangGraph Discussions** | Agent Protocol complement framing | 34% enterprise adoption | **This week** |
| **Temporal Community** | Post on Nexus GA | OSP-0013 trigger | **After OSP-0013 ships** |
| **SmartBear DevRel** | Email pitch | Arazzo 1.1 complement + OSOP | **Today (10 min)** |
| **AG2 examples PR** | Follow up | After `osoplog-otel-mapping.md` | **Today** |
| **awesome-hermes-agent** | Add OSOP listing | 100K stars | **Today** |
| **ADL complement doc** | Stub + positioning | Next Moca Apache 2.0 | **Today (15 min)** |
| **Oracle interop doc** | Stub | AG-UI integration confirmed | **Today (15 min)** |
| **HN post** | Next Monday 9am ET | Four-way comparison | **Next Monday** |
| **NIST CAISI** | Deadline check | Washington-backed | **Today/this week** |
| **Agentailor** | Confirm submission | 5 min | **Confirm** |
| **arxiv 2505.02279 authors** | Confirm email sent | 20 min | **Confirm** |

---

## Top 3 Actions for This Week

### 1. Ship All Six Writing Deliverables Today — Oracle Has Exposed the Gap

Oracle agent-spec's AG-UI announcement makes today's writing block the highest-leverage day since OSOP launched. Oracle's spec does not cover execution records. The first spec to publish a credible `osoplog-otel-mapping.md` this week owns the enterprise audit narrative before vendors finalize their MCP/OTel integrations (60 days to MCP July 28). Priority order: `osoplog-otel-mapping.md` → OSP-0008 → OSP-0015 → OSP-0016 → OSP-0006 → OSP-0013. If only one ships today, it must be `osoplog-otel-mapping.md`.

### 2. Publish Oracle + ADL Positioning Statements (15 Minutes Each)

Two new direct competitors entered the frame today (Oracle + ADL). Both can be converted from threats to positioning opportunities within 30 minutes total. Write and publish the two positioning stubs — a one-paragraph manifest update and two complement doc stubs — that frame OSOP as the execution record layer that both Oracle and ADL lack. This is the fastest ROI action available that isn't a writing block.

### 3. Confirm or Execute All Pending ≤30-Minute Tasks in One Batch

Batch into one 60-minute block after the writing session: AAIF submission (send if not sent), Hermes Agent issue (open if not open), API Stronghold pitch (send if not sent), Moonwalk SIG comment (post if not posted), OpenClaw PR (open if not open), awesome-ai-agents-2026 PRs (×3), SmartBear email, Agentailor confirm, arxiv author email confirm, NIST deadline check, AEO Scanner METRICS.md cleanup. None of these requires more than 10 minutes individually.

---

## Adoption Metrics to Track

| Metric | Current | Day 49 Target | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|---------|---------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 0 | 200 | 500 |
| Combined ecosystem stars | ~1 (osop-agent-rules) | 1 | 500 | 2,000 |
| Open OSOP PRs (confirmed) | 14 | 14 | 20 | 30 |
| Merged external PRs | 0 (unconfirmed) | Confirm | 10 | 25 |
| Repos with `.osop` files | 0 | 0 | 20 | 50 |
| OSP proposals published | 0 | **+6 today target** | 8 | 12 |
| Writing docs shipped | 0 (`osoplog-otel-mapping.md`) | **+1 minimum** | 5 | 10 |
| Complement docs published | 0 | **+2 stubs (Oracle, ADL)** | 4 | 8 |
| PyPI downloads | — | — | 2k/mo | 10k/mo |
| NPM downloads | — | — | 2k/mo | 10k/mo |
| AAIF submission | Unconfirmed (49 days) | **Confirm/send** | Acknowledged | In review |
| Hermes Agent issue | Unconfirmed | **Open today** | In discussion | Integration PR |
| OpenClaw SOUL.md PR | Unconfirmed (49 days) | **Open today** | In review | Merged |
| awesome-hermes-agent | 0 | **+1 PR** | Listed | — |
| awesome-ai-agents-2026 | Unconfirmed | Confirm/submit ×3 | Listed ×3 | — |
| API Stronghold pitch | 0 | **Sent today** | Accepted | Published |
| Moonwalk SIG engagement | 0 | **Comment today** | Active | Referenced |
| CFP submissions | 0 | 0 | 3 | 1+ accepted |
| HN submission | 0 | 0 | 1 post | 3 posts |
| Academic citations | 0 | Confirm author email | 1 paper | 3 papers |
| EU AI Act compliance tool | Not built | Not built | Spec published | CLI working |
| Oracle bridge tool | Not built | 0 | Stub published | CLI working |

---

## Key Links (New Today)

- **Oracle Open Agent Specification**: https://github.com/oracle/agent-spec
- **Oracle Agent Spec + AG-UI Integration**: https://blogs.oracle.com/ai-and-datascience/announcing-ag-ui-integration-for-agent-spec
- **Oracle Agent Spec Paper (arxiv)**: https://arxiv.org/html/2510.04173v1
- **Next Moca Agent Definition Language (ADL)**: https://www.nextmoca.com/blogs/agent-definition-language-adl-the-open-source-standard-for-defining-ai-agents
- **ADL on InfoQ**: https://www.infoq.com/news/2026/02/agent-definition-language/
- **ADL on All Things Open**: https://allthingsopen.org/articles/agent-definition-language-open-standard-ai-agents
- **Arazzo 1.1 Specification**: https://spec.openapis.org/arazzo/latest.html
- **Arazzo 1.1 GitHub**: https://github.com/OAI/Arazzo-Specification
- **Arazzo 1.1 Guide (Zuplo)**: https://zuplo.com/blog/openapi-arazzo-overlay-specifications-guide
- **A2A Protocol Specification v1.2**: https://a2a-protocol.org/latest/specification/
- **A2A Linux Foundation Announcement (150+ orgs)**: https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- **MCP 2026 Roadmap**: https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/
- **MCP RC Release Candidate July 28**: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- **MCP Enterprise Adoption (CData)**: https://www.cdata.com/blog/2026-year-enterprise-ready-mcp-adoption
- **LangGraph + CrewAI + AutoGen 2026 Comparison**: https://pooya.blog/blog/crewai-vs-langgraph-autogen-comparison-2026/
- **Enterprise AI Orchestration April 2026**: https://www.fifthrow.com/blog/ai-agent-orchestration-goes-enterprise-the-april-2026-playbook-for-systematic-innovation-risk-and-value-at-scale
- **AI Orchestration Platforms 2026**: https://www.digitalapplied.com/blog/ai-workflow-orchestration-platforms-comparison
- **OpenAPI Initiative Newsletter Feb 2026 (Arazzo + Moonwalk)**: https://www.openapis.org/blog/2026/02/10/openapi-initiative-newsletter-february-2026
- **Anthropic donates MCP to AAIF**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

---

*Previous brief: [`2026-05-27-daily-brief.md`](./2026-05-27-daily-brief.md)*
*Today is Day 49, Thursday. Six writing deliverables pending. Oracle agent-spec + AG-UI escalates the competitive threat — but confirms OSOP's unique `.osoplog` position. Non-negotiable: `osoplog-otel-mapping.md` ships today. The 60-day MCP final window is the closing forcing function.*
