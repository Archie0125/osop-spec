# OSOP Daily Strategy Brief — 2026-05-27

> **Day 48. Wednesday — OSP-0016 Day + Day 47 Carry-Over Reckoning.**
> Commit history confirms only the Day 47 strategy brief shipped from yesterday — `osoplog-otel-mapping.md`, OSP-0008, and OSP-0015 are NOT in the repo. They carry forward as Critical overdue. Today's Wednesday assignment (OSP-0016: MCP Apps `human` subtype) is added to an already-overloaded queue. The highest-leverage move: batch all four writing tasks into a single uninterrupted work block today. The landscape brought one major new entrant: **Hermes Agent by NousResearch** just passed 100K GitHub stars in 7 weeks — faster than LangChain, AutoGPT, or any agent framework tracked — with no established workflow format. That is the highest-value new target this week.

---

## Action Tracker (Day 48)

| Action | Status | Days Pending | Today / This Week |
|--------|--------|--------------|-------------------|
| **`osoplog-otel-mapping.md`** | 🔴 **OVERDUE — NOT SHIPPED** | **18** | Write first. Unblocks AG2 PR + OTel blog + Red Hat pitch. |
| **OSP-0008: `trigger:` RFC (revised)** | 🔴 **OVERDUE — NOT SHIPPED** | **11** | Write second today. |
| **OSP-0015: Workflow Composition** | 🔴 **OVERDUE — NOT SHIPPED** | **3** | Write third today. |
| **OSP-0016: MCP Apps `human` subtype** | ⏳ **Wednesday — Write Today** | **0** | Write fourth today. MCP RC is live; define the pattern first. |
| **OSP-0006: `skill_ref` RFC** | ⬆️ Critical (upgraded Day 47) | **23** | Thursday. Agent Skills open std, 30+ tools. |
| **Hermes Agent OSOP integration** | 🆕 **New Today — High Urgency** | **0** | Open issue in NousResearch/hermes-agent. 100K stars in 7 weeks. |
| **API Stronghold outreach** | 🆕 **New Today** | **0** | 10 min. Their article = OSOP `.osoplog` narrative confirmed by press. |
| **HN post (four-way comparison)** | ⏳ Reschedule | **16** | Next Monday 9am ET. |
| **AAIF submission** | ⏳ Confirm / Send Immediately | **48** | No timing dependency. Send if not sent. |
| **SmartBear DevRel email** | ⏳ Confirm / Reschedule | **10** | Send today. Hook: Hermes + Arazzo 1.1 Arazzo + OSOP complement. |
| **OpenClaw SOUL.md PR** | ⏳ Confirm / Today | **48** | 373K stars confirmed. Open today if not opened. |
| **awesome-ai-agents-2026 PRs (×3)** | ⏳ Confirm / Today | **2** | 30 min. |
| **Agentailor submission** | ⏳ Confirm / Today | **1** | 5 min. |
| **arxiv 2505.02279 author email** | ⏳ Confirm / Today | **1** | 20 min. |
| **NIST CAISI submission** | ⏳ Deadline check | **20** | Check deadline. Submit this week. |
| **OSP-0004 AG2 reference update** | ⏳ Pending | **2** | Update node-types.md AutoGen → AG2. |
| **OSP-0007: Compliance Extensions** | ⏳ Pending | **13** | EU AI Act: **66 days** to enforcement (August 2, 2026). |
| **AG2 examples PR** | ⏳ Pending | **18** | Blocked on `osoplog-otel-mapping.md`. |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **48** | AAIF prereq. This week. |
| **"OSOP + Arazzo 1.1" complement doc** | ⏳ Pending | **3** | dev.to. After writing block. |
| **AGNTCon / MCPCon CFP** | ⏳ Pending | ~6 days to deadline | Draft alongside writing work. |
| **OSP-0013: MCP transport annotation** | 🆕 This Week | **1** | Thursday. Before MCP July 28 final (61 days). |
| **OSP-0017: Cost governance fields** | 🆕 This Week | **1** | Friday. Temporal durable agents running days. |
| **`state_schema:` workflow-level field** | 🆕 Design Note | **1** | Friday. LangGraph v0.4 bridge. |
| LangGraph community post | ⏳ Pending | **17** | After OSP-0015. |
| Temporal community post | ⏳ Pending | **22** | Nexus GA + Multi-Region GA confirmed. |
| CNCF TAG Runtime comment | ⏳ Pending | **12** | cncf/toc#1746 |

---

## Intelligence

### New Signals (2026-05-27)

**Hermes Agent (NousResearch) — Fastest-Growing Agent Framework Ever, No Workflow Format**

Hermes Agent just passed Claude Code in GitHub stars, reaching 100K in 7 weeks — faster than LangChain, AutoGPT, or any agent framework previously tracked. Hermes is a self-improving AI agent by NousResearch (builders of the Hermes model family). The framework supports terminal UI, a workspace setup (npm-based), and multi-channel deployment (Telegram, Discord, Slack, WhatsApp, Signal, Email). It has no established workflow definition format.

Implication for OSOP: This is the highest-priority new integration target since OpenClaw. At 100K stars in 7 weeks with no workflow standard, Hermes is at the exact stage where a format can become the default — before the project develops its own. The opportunity: open an issue in NousResearch/hermes-agent proposing OSOP as the workflow definition format for Hermes workflows. Frame it as "Hermes already has tasks and steps — `.osop.yaml` gives those a portable, inspectable, shareable format. Your users can version-control their Hermes workflows and replay them." The awesome-hermes-agent curated list (github.com/0xNyk/awesome-hermes-agent) is a secondary listing target. This is a Day 1-equivalent opportunity at a 100K-star project.

**"AI Agents Are Stateless. Your Audit Trail Can't Be." — OSOP `.osoplog` Validated by Industry Press**

API Stronghold (apistronghold.com) published a blog post with the exact title: "AI Agents Are Stateless. Your Audit Trail Can't Be." The post argues that agent auditability must be externalized — you cannot rely on the agent's internal state for compliance records. Key quotes: *"Log every agent decision, data access, and action with timestamps and reasoning. Store these records for compliance reviews and dispute resolution."*

Implication for OSOP: This article is one sentence away from describing `.osoplog`. OSOP's execution record format is exactly what this post says enterprises need — and OSOP is the only governed standard that defines a portable, structured schema for it. Action: reach out to API Stronghold and offer a follow-up guest post titled "What Should an AI Agent Audit Trail Look Like? Introducing `.osoplog`." This is a low-effort, high-signal awareness action that puts OSOP in front of the exact audience that needs it.

**AI Observability Is Now the #1 Enterprise AI Requirement**

PwC, Voiceflow, Atlan, and isimplifyme all published enterprise AI observability guides in 2026. Common framing: observability = distributed traces + automated evaluations + retrieval logs + tool-call audits. PwC frames auditability as a compliance mandate. Voiceflow identifies "tool-call audits" as one of four core pillars. Atlan says "agent observability encompasses the full system: reasoning chain, tool usage, memory, retrieval quality, and policy compliance."

Implication for OSOP: The enterprise is converging on observability as the gating requirement for agentic AI deployment. OSOP's `.osoplog` format maps directly to the industry's stated need. The missing piece: a published `osoplog-otel-mapping.md` document that proves OSOP's observability claim with a concrete OTel field mapping. This is the 18-day pending document. Every day it's missing, OSOP is visible to enterprises as a workflow definition tool, not an observability tool — which is the harder, higher-value enterprise sale.

**LangGraph v1.0 GA: Agent Protocol for Cross-Framework Communication**

LangGraph v1.0 GA introduced the "open Agent Protocol," allowing agents to communicate across frameworks (CrewAI, Microsoft Agent Framework, AG2) via standardized APIs. LangGraph now claims 34% of enterprise architecture citations (Gartner). The Agent Protocol is distinct from A2A — it defines how LangGraph graphs talk to each other and to agents in other frameworks.

Implication for OSOP: The LangGraph Agent Protocol defines the communication layer. OSOP defines the workflow definition layer. These are orthogonal. The positioning statement: "LangGraph Agent Protocol tells agents how to talk to each other. OSOP tells agents what to do and records what they did." Write this as a complement doc (similar to the planned Arazzo complement). This positions OSOP alongside LangGraph rather than against it — which is the same playbook that worked for OpenAPI + AsyncAPI.

**AAIF Formal Structure Confirmed — MCP Dev Summit North America (1,200 Attendees)**

The Agentic AI Foundation (AAIF) held its MCP Dev Summit North America in New York in April 2026 with ~1,200 attendees. Current AAIF projects: MCP (Anthropic), goose (Block), AGENTS.md (OpenAI). The AAIF is a Linux Foundation directed fund. Governance: AAIF Governing Board for strategic decisions; individual projects retain technical autonomy.

Implication for OSOP: The AAIF is the industry's neutral home for open agentic AI standards. OSOP is not an AAIF project yet. The strategic play is a two-step: (1) submit OSOP to the AAIF as a proposed project (the submission the tracker calls AAIF — confirm it was sent or send now), and (2) position OSOP as the fourth founding-adjacent project alongside MCP, goose, and AGENTS.md. OSOP covers the layer none of them cover: structured workflow definition + portable execution records. The 1,200-person MCP Dev Summit is also a CFP target for next year's cycle.

**OpenAPI Moonwalk SIG: Investigating "Agent-Ready" OpenAPI in 2026**

The OpenAPI Moonwalk SIG (working toward OpenAPI 4.0) is now explicitly investigating what OpenAPI needs to be "agent-ready." Focus areas: capability discovery, intent signaling, how Arazzo and Overlays intersect with agentic access. The SIG is asking: what additional metadata makes an OpenAPI document suitable for LLM-based workflows?

Implication for OSOP: The Moonwalk SIG is defining agent-readiness at the API description level. OSOP operates at the workflow definition level — one layer above. This is both an opportunity (engage with the SIG as the workflow complement to their API layer) and a threat (if Moonwalk extends OpenAPI to include workflow semantics, it could reduce the gap that Arazzo + OSOP fills). Action: engage with OAI/sig-moonwalk GitHub discussions. Propose OSOP as the workflow layer that sits above agent-ready OpenAPI documents — not competing, complementing.

**Microsoft dotnet/skills — New AI Skills Repository**

The official .NET team launched a "skills" GitHub repository providing AI programming agents with structured skills for C# and .NET development. This is an ecosystem adjacent to Agent Skills (the Anthropic open standard with 30+ tool adoptions).

Implication for OSOP: OSP-0006 (`skill_ref`) links OSOP `agent` nodes to skill manifests. The Microsoft dotnet/skills repo is a concrete integration target. When OSP-0006 ships Thursday, the example in the RFC should include a `skill_ref` to a dotnet/skills-style manifest. This demonstrates OSOP's multi-vendor skill compatibility from day one.

**MCP RC Stateless Architecture — `.osoplog` Record Implications**

The MCP July 28 RC makes MCP stateless at the protocol layer. Each tool call is now a self-contained HTTP request. This changes how `.osoplog` records `mcp` node execution: previously, session IDs could be recorded; now the audit record must capture request/response pairs without session context.

Implication for OSOP: The `mcp` node type in OSOP and the `.osoplog` `mcp_call` record need a spec note acknowledging stateless transport. OSP-0013 (MCP transport annotation, Thursday) should address this explicitly. The `.osoplog` schema's `mcp_metadata` block should record `transport: "stateless-http"` or `transport: "sse"` to maintain compatibility with both MCP RC and pre-RC deployments.

### Continuing Signals (Carried)

- **Hermes Agent: 100K stars in 7 weeks** — New today. Fastest-growing; no workflow format. Highest-priority new target.
- **Google I/O 2026 "Agentic Era"** — Industry's highest-profile legitimization signal.
- **NIST AI Agent Standards Initiative** — Active, Washington-backed. CAISI submission time-sensitive.
- **Arazzo 1.1 shipped May 19 (8 days ago)** — Complement doc still pending.
- **MCP July 28 RC live** — Stateless core + Extensions + MCP Apps. **61 days** to final.
- **OTel confirmed dominant** — `osoplog-otel-mapping.md` is the credential unlock. **18 days pending**.
- **OpenClaw: 373,000+ GitHub stars** (most-starred project in GitHub history, per May 2026 data). SOUL.md PR pending Day 48.
- **EU AI Act enforcement: 66 days** — OSP-0007 compliance extensions still unbuilt.
- **A2A v1.2: 150+ organizations** — Cryptographic signed Agent Cards. OSP-0004 needs update.
- **Temporal: Nexus GA, Multi-Region GA, OpenAI SDK integration GA** — `osop export-temporal` not built.
- **LangGraph v0.4: 34% of enterprise architecture docs (Gartner)** — Bridge doc pending.
- **Agent Skills open standard (30+ tool adoptions)** — OSP-0006 Critical.
- **MCP: 97M monthly SDK downloads, 10K+ active servers** — MCP is infrastructure.
- **AutoGen → maintenance mode / AG2 active** — OSOP docs need AG2 update.
- **Academic survey arxiv 2505.02279** — Does not cite OSOP. Author email pending.

---

## Threats

1. **18-day writing backlog blocking four downstream actions.** `osoplog-otel-mapping.md` has been OSOP's single-most-impactful unshipped deliverable for 18 consecutive days. Every day it remains unwritten, the "OSOP is production-ready" narrative is undefended against enterprise scrutiny.

2. **Hermes Agent could formalize its own workflow format before OSOP reaches it.** At 100K stars in 7 weeks, Hermes will attract contributors who want to standardize workflow definitions. The window to propose OSOP as the default is now — before any contributor opens a "we should define a workflow format" issue that goes in a different direction.

3. **Arazzo 1.1 continues advancing (actor-in-loop, MCP step types).** The "OSOP + Arazzo 1.1" complement doc is 3 days overdue. Without it, developers reading Arazzo 1.1 content are not discovering OSOP as the complementary layer.

4. **OpenAPI Moonwalk SIG could extend OpenAPI 4.0 to include workflow semantics.** The SIG is explicitly investigating agent-readiness. If their conclusions include native workflow primitives in OAS 4.0, the combined Arazzo + OAS 4.0 would cover OSOP's territory from the API side. Engaging with the SIG now positions OSOP as the workflow standard they reference, not the one they absorb.

5. **AAIF submission 48 days pending.** The AAIF held a 1,200-person summit in April without OSOP in the room. Every month without a submission is a month of missed ecosystem alignment.

6. **EU AI Act enforcement in 66 days.** OSP-0007 (compliance extensions) is still unbuilt. The enterprise narrative — "OSOP gives you audit records that satisfy EU AI Act traceability requirements" — is supported by `docs/eu-ai-act-compliance.md` but not by a working compliance-check CLI command.

7. **OpenClaw at 373K stars (48 days no PR).** The most-starred project in GitHub history doesn't know OSOP exists. Each passing week makes an "early integration" PR look like a late one.

---

## Opportunities

### Critical: Today's Writing Block (4 Documents)

**Priority order — all four in one session:**

**1. `osoplog-otel-mapping.md` (2–3 hours, Day 1 unblock)**

OTel confirmed dominant. GenAI Semantic Conventions stable. AI observability is now the #1 enterprise requirement per PwC, Voiceflow, and Atlan. This document is the proof that OSOP addresses that requirement.

Minimum viable structure:
```
## Field Mapping Table
| .osoplog field         | OTel Span attribute        | GenAI Convention          |
|------------------------|---------------------------|---------------------------|
| run_id                 | trace_id                  | —                         |
| node_id                | span_id                   | gen_ai.operation.name     |
| ai_metadata.model      | gen_ai.request.model      | gen_ai.request.model      |
| ai_metadata.prompt_tokens | gen_ai.usage.input_tokens | gen_ai.usage.input_tokens |
| ai_metadata.completion_tokens | gen_ai.usage.output_tokens | gen_ai.usage.output_tokens |
| status                 | otel.status_code          | —                         |
| duration_ms            | span duration             | —                         |
| cost_usd               | gen_ai.usage.cost         | (proposed)                |

## Export Recipe
`osop log-export --format otel-json` → OTLP JSON

## Vendor Compatibility
Datadog, Grafana, Prometheus, Jaeger ingestion notes
```

Publish to `docs/osoplog-otel-mapping.md`. Cross-link from SPEC.md, conformance-levels.md (L3 observability), README.

**2. OSP-0008: `trigger:` RFC (1–1.5 hours)**

Arazzo 1.1 is the HTTP-workflow trigger layer. OSP-0008 is the AI-agent-workflow trigger layer. These are complementary:
- Arazzo defines when an API workflow is called (HTTP in)
- OSP-0008 defines how an AI agent workflow starts (queue, schedule, event, manual, A2A signal)

Revised preamble: "Arazzo 1.1 defines when an API workflow is invoked. OSP-0008 defines how an AI agent workflow is invoked. An Arazzo workflow can be a step inside an OSOP workflow; an OSOP agent can decide which Arazzo workflow to call. Neither replaces the other."

Publish to `docs/proposals/OSP-0008-triggers.md`.

**3. OSP-0015: Workflow Composition (1–1.5 hours)**

Defines: OSOP calling Arazzo sub-workflows, OSOP calling OSOP sub-workflows, linked `.osoplog` call trees (parent_run_id / sub_run_id). This defines OSOP's composition point before Arazzo 1.2 does it first.

Publish to `docs/proposals/OSP-0015-workflow-composition.md`.

**4. OSP-0016: MCP Apps `human` Subtype (1 hour)**

MCP July 28 RC introduced MCP Apps — server-rendered UIs within MCP tool calls. This is the first concrete MCP primitive that blurs the boundary between `mcp` and `human` node types.

Define the `mcp-app` subtype for `human` nodes:
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

`.osoplog` `mcp_app_call` record captures: `tool_name`, `mcp_server`, `rendered_ui: true`, `human_response`, `duration_ms`. This is the first workflow spec to natively model sandboxed UI-driven human-in-the-loop — a concrete differentiation point before any competitor.

Publish to `docs/proposals/OSP-0016-mcp-apps-human-subtype.md`.

### High Priority: New Target (Today, 30 minutes)

**5. Hermes Agent Integration Proposal**

Open an issue in NousResearch/hermes-agent titled: *"Proposal: OSOP as the workflow definition format for Hermes workflows."*

Body:
```
Hermes workflows involve sequences of tasks across tools, agents, and human checkpoints.
OSOP (.osop.yaml) is an open standard for defining these as portable, version-controlled,
inspectable YAML graphs.

Value to Hermes users:
- Version-control your workflows alongside your code
- Replay any past run from the .osoplog execution record
- Visualize the workflow as a Mermaid diagram (`osop validate --render`)
- Share workflows as .osop.yaml — not proprietary config

Spec: https://github.com/Archie0125/osop-spec
CLI: pip install osop

Would love to discuss a reference integration or example.
```

Also add OSOP to the awesome-hermes-agent list (0xNyk/awesome-hermes-agent).

### Medium Priority: Narrative Amplification (Today, 10 minutes)

**6. API Stronghold Outreach**

Email or comment on "AI Agents Are Stateless. Your Audit Trail Can't Be." (apistronghold.com).

Pitch: *"Your article describes exactly what `.osoplog` solves. Would you consider a follow-up guest post: 'What Should an AI Agent Audit Trail Look Like? Introducing .osoplog'? I'm the maintainer of the OSOP specification."*

This is the highest-alignment earned media opportunity in today's research.

**7. OpenAPI Moonwalk SIG Engagement**

Engage in OAI/sig-moonwalk GitHub discussions (github.com/OAI/sig-moonwalk/discussions). Find the thread investigating agent-ready OpenAPI. Post:

*"OSOP (Open Standard Operating Process) is a YAML workflow definition format that operates at the layer above agent-ready API descriptions. While Moonwalk/Arazzo define how APIs are called, OSOP defines what the agent does across those calls — the directed graph of agent, API, CLI, and human nodes. Proposing OSOP as the workflow complement to agent-ready OpenAPI: [spec link]."*

---

## Evolution Ideas

### Spec Improvements

**OSP-0018: `hermes_workspace:` Node Type Integration (New, Priority: High)**

Hermes Agent uses a workspace model (npm-based). As Hermes workflows become more complex, a `hermes_workspace` node type (or `agent` subtype) would natively bind OSOP nodes to Hermes workspace configurations:

```yaml
- id: "hermes-research"
  type: "agent"
  subtype: "hermes"
  name: "Research with Hermes Agent"
  runtime:
    hermes_config: "./hermes.workspace.json"
    task: "${inputs.research_query}"
    tools: ["web_search", "file_read"]
    channels: ["terminal"]
```

Ship after OSP-0006 (Thursday). The Hermes integration PR uses this as proof of OSOP's extensibility story: *any agent framework gets a subtype.*

**Upgrade: `osoplog` `audit_trail` Top-Level Block (Priority: High)**

The enterprise observability narrative (PwC, Voiceflow, Atlan) identifies four pillars: distributed traces, automated evaluations, retrieval logs, and tool-call audits. The current `.osoplog` schema covers traces and tool calls well, but lacks a dedicated `evaluations` block. Add:

```yaml
audit_trail:
  evaluations:
    - node_id: "review"
      eval_type: "quality_check"
      score: 0.92
      evaluator: "claude-sonnet-4-6"
      criteria: "accuracy, completeness, tone"
  retrieval_log:
    - node_id: "rag-lookup"
      query: "${inputs.question}"
      sources_retrieved: 5
      top_source: "docs/policy.pdf"
  policy_compliance:
    - policy: "no-pii"
      result: "pass"
    - policy: "human-approval-required"
      result: "pass"
      approved_by: "alice@example.com"
```

This directly maps to Voiceflow's "four pillars" framing and makes OSOP's observability story enterprise-complete.

**`protocol_bindings.lf_agent_protocol:` — LangGraph Agent Protocol (New)**

LangGraph v1.0 GA introduced the open Agent Protocol for cross-framework communication. Add to `protocol_bindings:`:

```yaml
protocol_bindings:
  lf_agent_protocol:
    endpoint: "https://agents.example.com/langgraph"
    graph_id: "my-research-graph"
```

This lets OSOP workflows declare which LangGraph graphs they delegate to, making OSOP the coordination layer over LangGraph execution.

### Tooling Gaps (Updated Priorities)

| Tool | Priority | Signal | Status |
|------|----------|--------|--------|
| `osoplog-otel-mapping.md` | 🔴 Critical | 18 days; observability = #1 enterprise req | **Write today (1st)** |
| `osop log-export --format otel-json` | 🔴 Critical | Depends on mapping doc | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A v1.2 cryptographic cards; 150+ orgs | Not built |
| `osop export-temporal` | 🔴 Critical | Temporal = OpenAI Codex infra | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 66 days to enforcement | Not built |
| **Hermes Agent integration** | 🔴 **New Critical** | **100K stars in 7 weeks; no workflow format** | **Open issue today** |
| `osop compile --from-markdown` | 🟠 High | AWS Strands + Agent Skills | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ stars | Not built |
| `osop import-soul-md` | 🟠 High | OpenClaw 373K+ stars | Not built |
| **`osop import-hermes`** | 🟠 **New High** | **Hermes Agent 100K stars; JSON workspace format** | Not built |
| **AAIF submission** | 🔴 Critical | **48 days pending** | **Send immediately** |
| NIST CAISI submission | 🔴 Critical | Washington-backed; deadline check | This week |
| Agentailor submission | 🟠 High | 5 min | Confirm |
| arxiv 2505.02279 author email | 🟠 High | 20 min | Confirm |
| API Stronghold outreach | 🟠 **New High** | **Exact narrative match** | **Today (10 min)** |
| Moonwalk SIG engagement | 🟠 **New High** | **OAS 4.0 agent-readiness investigation** | **Today (15 min)** |
| Hermes Agent GitHub issue | 🔴 **New Critical** | **100K stars in 7 weeks** | **Today (30 min)** |

### Ecosystem Plays

| Target | Action | Hook | Timing |
|--------|--------|------|--------|
| **Writing block (4 docs)** | `osoplog-otel-mapping.md` → OSP-0008 → OSP-0015 → OSP-0016 | 18-day backlog; observability = enterprise gate | **Today, priority 1** |
| **Hermes Agent** | Open issue + awesome-hermes-agent PR | 100K stars in 7 weeks; no workflow format | **Today (30 min)** |
| **API Stronghold** | Guest post pitch | Exact `.osoplog` narrative | **Today (10 min)** |
| **Moonwalk SIG** | GitHub Discussion comment | OAS 4.0 agent-readiness investigation | **Today (15 min)** |
| **AAIF** | Confirm sent or send immediately | 48 days pending; 1,200-person summit missed | **Immediately** |
| **OpenClaw** | SOUL.md PR | 373K stars (most in GitHub history) | **Immediately if pending** |
| **awesome-ai-agents-2026 (×3)** | Listing PRs | 30 min | **Today if pending** |
| **Agentailor** | Confirm submission | 5 min | **Confirm** |
| **arxiv 2505.02279 authors** | Confirm email sent | 20 min | **Confirm** |
| **NIST CAISI** | Deadline check + submit | AI Agent Standards Initiative active | **Today/this week** |
| **AG2 examples PR** | Submit after `osoplog-otel-mapping.md` | AutoGen → AG2 transition | **After today** |
| **HN post** | Reschedule next Monday | 9am ET timing window | **Next Monday** |
| **OSP-0006** | Write `skill_ref` RFC | Agent Skills open std, 30+ tools; dotnet/skills | **Thursday** |
| **OSP-0013** | MCP transport annotation | MCP RC stateless; 61 days | **Thursday** |
| **OSP-0017** | Cost governance fields | Temporal durable runs; days-long agents | **Friday** |
| **`state_schema:` design note** | Write | LangGraph v0.4 bridge | **Friday** |
| **LangGraph Discussions** | Agent Protocol complement framing | 34% enterprise adoption | **This week** |
| **Temporal Community** | Post on Nexus GA + Multi-Region | Production infra + OpenAI SDK GA | **This week** |
| **awesome-hermes-agent** | Add OSOP to curated list | New target from today | **Today** |

---

## Top 3 Actions for This Week

### 1. Ship the Four Writing Deliverables in a Single Block Today

`osoplog-otel-mapping.md` (primary, 18 days overdue) → OSP-0008 revised → OSP-0015 Workflow Composition → OSP-0016 MCP Apps `human` subtype. In that order. These four documents have the highest collective multiplier effect: OTel mapping unlocks the enterprise narrative and AG2 PR; OSP-0008 responds to Arazzo 1.1; OSP-0015 claims the composition point; OSP-0016 differentiates on MCP RC.

Non-negotiable floor: `osoplog-otel-mapping.md` ships today. It has been the single most-blocked dependency for 18 days and unlocks four downstream actions.

### 2. Open the Hermes Agent Integration Issue (30 Minutes)

Hermes Agent is at 100K GitHub stars in 7 weeks with no workflow format. This is the highest-value new target since OpenClaw. Open the GitHub issue in NousResearch/hermes-agent today, add OSOP to awesome-hermes-agent, and note Hermes as an `agent` subtype target for OSP-0018. The window to be "the first workflow standard to support Hermes" is open right now.

### 3. Confirm or Execute All Pending ≤30-Minute Tasks

For each item with "Confirm" status: AAIF submission (send immediately if not sent), OpenClaw SOUL.md PR, awesome-ai-agents PRs (×3), Agentailor submission, arxiv author email, NIST deadline check, AG2 reference update in node-types.md, API Stronghold outreach, Moonwalk SIG comment. Batch all of these into one 90-minute execution block after the writing session.

---

## Adoption Metrics to Track

| Metric | Day 47 (yesterday) | Day 48 Target (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|--------------------|-----------------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 0 | 500 | 2,000 |
| External PRs submitted | Unconfirmed | Confirm today | 5 | 15 |
| External PRs merged | 0 | Confirm | 10 | 25 |
| Repos with `.osop` files | 0 | 0 | 20 | 50 |
| Protocol ecosystem map appearances | Unconfirmed | Confirm today | 3 | 8 |
| PyPI downloads | — | — | 2k/mo | 10k/mo |
| NPM downloads | — | — | 2k/mo | 10k/mo |
| OSP proposals published | 0 | **+4 today** | 8 | 12 |
| Writing docs shipped | 0 | **+1 minimum today** | 5 | 10 |
| CFP submissions | 0 | 0 | 3 | 1+ accepted |
| HN submission | Not posted | Reschedule Mon | 1 post | 3 posts |
| awesome-ai-agents-2026 listings | Unconfirmed | Confirm/submit | 3 | 5 |
| awesome-hermes-agent listing | 0 | **+1 issue today** | Listed | — |
| Academic citations | Unconfirmed | Confirm email | 1 paper cited | 3 papers |
| AAIF submission | Unconfirmed | **Send today** | In review | Accepted |
| NIST CAISI submission | Deadline check | Check today | Submitted | In review |
| Agentailor listing | Unconfirmed | Confirm | Listed | — |
| API Stronghold guest post | 0 | **Pitch today** | Accepted | Published |
| Moonwalk SIG engagement | 0 | **Comment today** | Active participant | Referenced |

---

## Key Links (New Today)

- **Hermes Agent (NousResearch)**: https://github.com/nousresearch/hermes-agent
- **awesome-hermes-agent curated list**: https://github.com/0xNyk/awesome-hermes-agent
- **Hermes Agent star race (May 2026)**: https://aiprofitboardroom.com/blog/hermes-ai-agent-framework-2026/
- **"AI Agents Are Stateless. Your Audit Trail Can't Be."**: https://www.apistronghold.com/blog/ai-agent-workflow-audit-trail
- **AI Agent Observability (Voiceflow 2026)**: https://www.voiceflow.com/blog/what-is-ai-agent-observability
- **AI Observability for Enterprise AI (PwC)**: https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-observability.html
- **OpenAPI Moonwalk SIG (agent-ready 2026)**: https://github.com/OAI/sig-moonwalk/discussions/219
- **OpenAPI Arazzo + Overlay Guide**: https://zuplo.com/blog/openapi-arazzo-overlay-specifications-guide
- **AAIF Linux Foundation announcement**: https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation
- **MCP joins AAIF**: https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/
- **MCP 2026 roadmap (stateless core, MCP Apps, Tasks)**: https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/
- **LangGraph Agent Protocol (cross-framework)**: https://gurusup.com/blog/best-multi-agent-frameworks-2026
- **A2A Protocol Specification (150+ orgs)**: https://a2a-protocol.org/latest/specification/
- **Microsoft dotnet/skills**: https://aitoolly.com/ai-news/article/2026-05-25-microsoft-dotnet-team-launches-skills-repository-to-empower-ai-programming-agents-for-c-and-net-deve
- **AI Agent Observability stack guide 2026**: https://isimplifyme.com/blog/agent-observability
- **OpenClaw 373K stars (GitHub history record)**: https://pasqualepillitteri.it/en/news/3327/github-trending-top-10-may-2026
- **Temporal as durable execution standard**: https://www.digitalapplied.com/blog/ai-workflow-orchestration-platforms-comparison

---

*Previous brief: [`2026-05-26-daily-brief.md`](./2026-05-26-daily-brief.md)*  
*Today is Day 48, Wednesday. Four writing deliverables due. New critical target: Hermes Agent (100K stars in 7 weeks, no workflow format). Non-negotiable: `osoplog-otel-mapping.md` ships today. Parallel quick-hits: Hermes issue, API Stronghold pitch, Moonwalk SIG comment, AAIF confirm/send.*
