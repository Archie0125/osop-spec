# OSOP Daily Strategy Brief — 2026-06-03

> **Day 55. Wednesday. Week 5, Day 3.**
>
> Today is a hard deadline day. Per the ROADMAP: `osoplog-otel-mapping.md` due today, Arazzo complement blog post due today, OSP-0018 due today, OSP-0008 due today. `docs/proposals/` was due yesterday — it does not exist. This brief will not re-explain why these matter. They are overdue. Ship them.
>
> Verify June 2 actions before anything else: OSP-0018 publish attempt, SmartBear email, Temporal community post, `osoplog-otel-mapping.md` draft status, AutoGen migration guide progress.

---

## Action Tracker (Day 55 — Priority Order)

| Action | Status | Days Overdue | Today? |
|--------|--------|--------------|--------|
| **Verify June 2 actions** (OSP-0018, SmartBear, Temporal post, otel-mapping draft) | ❓ Unverified | — | **Yes — first 10 min** |
| **Create `docs/proposals/` + publish OSP-0018** | 🔴 Not in repo | **1** | **Yes — 45 min, do first** |
| **Publish `osoplog-otel-mapping.md`** | 🔴 Not in repo | **25** | **Yes — due today** |
| **Publish Arazzo complement blog post (dev.to)** | ⏳ Pending | **10** | **Yes — due today** |
| **OSP-0008: `trigger:` RFC** | 🔴 Not in repo | **0** | **Yes — due today** |
| **OSP-0013: MCP stateless annotation (revised)** | 🔴 Not in repo | 9 | By Thursday |
| **OSP-0015: Workflow Composition** | 🔴 Not in repo | 10 | By Thursday |
| **OSP-0004: A2A agent subtype** | 🔴 Not in repo | 55 | By Friday |
| **AutoGen migration guide** | ⏳ Pending | 4 | ~3 days left in window |
| **dagu integration example PR** | 🆕 New | 0 | This week |
| **AAIF submission confirm** | ⏳ Unconfirmed | 55 | Verify today |

---

## Intelligence

### New Signals Since June 2

---

**A2A Protocol: 150+ Organizations, Enterprise Production Confirmed [CRITICAL POSITIONING UPDATE]**

The A2A protocol has now surpassed 150 organizations in production use, including Google, Microsoft, AWS, Salesforce, SAP, ServiceNow, Workday, and IBM. Azure AI Foundry, Amazon Bedrock AgentCore, and Google Cloud have all integrated A2A *natively*. A2A v1.0 released early 2026 as production-grade, with cryptographic signed Agent Cards (JWS/JCS). The GitHub repo has 22,000+ stars.

Significance for OSOP: A2A has become the dominant agent-to-agent routing standard faster than any protocol in this cycle. OSP-0004 was targeting A2A *v1.2* signed cards — but A2A has already crossed from "emerging standard" to "de facto platform requirement" for enterprise cloud buyers. Every hyperscaler is A2A-native. This makes OSP-0004 a Day 55 critical blocker:

- An OSOP workflow that *cannot* declare its agent nodes are A2A-native is invisible to enterprise cloud architects
- The `agent_def_url:` field (15-min change from yesterday) should reference A2A Agent Cards as the canonical URL target
- `osop export-agent-card` is now not a "nice to have" — it is the enterprise entry point

**Action (today, 15 min)**: Add `agent_def_url:` to `docs/node-types.md` and the core schema. Every A2A Agent Card is a valid URL. This single field makes OSOP the orchestration layer for the 150+ org ecosystem.

---

**Open Agent Specification (Agent-Spec) from arxiv [NEW COMPETITIVE SIGNAL]**

A new academic paper (arxiv 2510.04173, "Open Agent Specification (Agent Spec): A Unified Representation for AI Agents") is now appearing in search results alongside OSOP for "AI agent workflow standard specification" queries. It proposes a unified agent representation for capabilities, tools, and reasoning patterns.

Assessment:
- Agent-Spec addresses *agent definitions* (what an agent is, what tools it has) — not workflow graphs, not execution records, not compliance
- OSOP occupies the layer *above* Agent-Spec: OSOP orchestrates agents defined in Agent-Spec format (or SKILL.md, or A2A Agent Cards)
- The `agent_def_url:` field turns this into a partnership narrative, not a competition: "use Agent-Spec to define your agents; use OSOP to define what they do together and prove it with `.osoplog`"

**Action**: Add Agent-Spec (arxiv 2510.04173) to the positioning stack table in the ROADMAP on Monday. Draft one paragraph for the competitive positioning page (alongside SKILL.md and OSSA). The framing is: "OSOP is the workflow orchestration layer; Agent-Spec/SKILL.md/A2A Agent Cards are the agent definition layer — they complement."

---

**MCP Stateless RC + July 28 Deadline: 55 Days [SPEC CLOCK TICKING]**

The MCP 2026 Release Candidate has shipped with a stateless protocol core — persistent server-side session state is no longer assumed. Six Specification Enhancement Proposals (SEPs) delivered this. Key extensions confirmed in the RC:
- **MCP Apps** — server-rendered UI via sandboxed HTML iframes, `human` node subtype
- **Tasks extension** — `tasks/get`, `tasks/update`, `tasks/cancel`, enabling long-running async work
- **Authorization** — OAuth and OpenID Connect alignment

OSP-0013 revised scope (stateless core + task lifecycle) and OSP-0016 (MCP Apps `human` subtype) must be published before the final spec ships July 28. If OSOP does not have a published proposal for MCP node types before July 28, Arazzo 1.2 (which has MCP steps on its roadmap) will define the competing standard for MCP workflow nodes — and will be backed by the OpenAPI Initiative's entire tooling ecosystem.

**55-day window. No extensions. Publish OSP-0013 by tomorrow.**

---

**Arazzo Tooling Ecosystem Is More Mature Than Understood [URGENCY INCREASE]**

Arazzo 1.0 tooling support now includes: Redocly, Speakeasy, APIDog, Specmatic (with VSCode early access), Bruno, and Zuplo. The SmartBear "From Endpoints to Intent" blog (published yesterday) explicitly frames Arazzo + MCP as the agent workflow stack. Specmatic's roadmap includes VSCode plugin enhancements for agentic Arazzo workflows.

This raises urgency on two fronts:
1. The Arazzo complement blog post (due today) needs to publish *before* more Arazzo content dominates the search landscape for "AI agent workflow standard"
2. OSP-0013 and OSP-0008 must exist in `docs/proposals/` to give SmartBear, jentic, and the Arazzo tooling builders something to link to when they describe the "next layer above Arazzo"

---

**Temporal $300M Series D + Replay 2026: The Enterprise Execution Standard Is Chosen [CONFIRMATION]**

Temporal raised $300M Series D (Andreessen Horowitz), reached 3,000+ paying customers (OpenAI, Nvidia, Netflix, Replit, Lovable), and announced native Google ADK + OpenAI Agents SDK integrations at Replay 2026. OpenAI uses Temporal for Codex agent workflows — survive restarts, wait days for human approval. This is the confirmed production-grade execution layer for enterprise AI agents.

What this means: The "write once, execute anywhere" story for AI agent workflows is incomplete without a portable *definition* format above Temporal. Temporal defines execution semantics (durable execution, retry policies, workflow-as-code). OSOP defines the workflow itself (nodes, edges, conditions, human approvals) independently of the execution runtime. The pitch: "OSOP is the format you write. Temporal is the infrastructure that runs it."

`osop export-temporal` is now a path to 3,000+ enterprise prospects who are already sold on durable execution and need a portable workflow definition they can hand to a regulator, commit to git, and re-execute on a different runtime.

---

**LangGraph OAP: Runtime Protocol, Not Workflow Definition — Competitive Risk Clarified**

LangGraph v1.0's "open Agent Protocol" is confirmed as a *runtime* execution protocol (cross-framework agent communication, hybrid cloud/VPC deployment, time-travel checkpoints). It is not a YAML workflow definition format. LangGraph now holds 34% of production agent-framework citations at 1,000+ employee companies.

Competitive risk is real but addressable: the risk is that LangGraph ships a `.lg` YAML definition format in v1.1 or v1.2. The counter: LangGraph's team is focused on the execution layer. A portable workflow format is OSOP's specific thesis. The LangGraph bridge doc (22 days pending) needs to ship before v1.1 so the narrative is already established: "LangGraph handles execution state; OSOP handles the portable definition and audit trail."

---

**OTel GenAI Semantic Conventions: Stable and Dominant [CONFIRMS `osoplog-otel-mapping.md` TODAY]**

OpenTelemetry GenAI Semantic Conventions are confirmed stable and dominant as of May 2026. Datadog supports them natively (v1.37+). The spec defines four agent span operation types: `create_agent`, `invoke_agent`, `invoke_workflow`, `execute_tool`. The standard OTEL Python library instruments `invoke_agent` automatically with OpenAI's SDK.

OSOP's `.osoplog` is the human-readable, workflow-graph-aware source of truth that *generates* these OTel spans. `osoplog-otel-mapping.md` (25 days overdue, due today) is the document that proves this — field-for-field. It is the document SmartBear, IETF Sharif, Red Hat, and the CNCF TAG Runtime audience will read to understand why `.osoplog` is not just another log format. Ship it today.

---

### Continued Signals (Status)

| Signal | Status | Countdown |
|--------|--------|----------|
| MCP RC → Final spec | Active | **55 days** (Jul 28) |
| EU AI Act enforcement | Active | **60 days** (Aug 2) |
| AutoGen migration wave | Active | **~3 days left** in OSOP window |
| A2A v1.2 signed cards | Production | OSP-0004 overdue |
| LangGraph OAP format risk | Watch | v1.1 timeline unknown |
| Arazzo 1.2 MCP steps | Pre-window | OSP-0013 must precede |
| `docs/proposals/` | **Day 55** | **1 day overdue** |
| OSP proposals published | **0** | Day 55 |
| `osoplog-otel-mapping.md` | **Due today** | 25 days overdue |
| Arazzo complement post | **Due today** | 10 days overdue |

---

## Threats

1. **`docs/proposals/` does not exist — Day 55**: A spec project that cannot show a single published RFC after 55 days is a ghost project. No amount of strategy briefs changes this. OSP-0018 takes 45 minutes. The Thursday Jun 4 deadline for three proposals is tomorrow. Two proposals must ship today (OSP-0018 + OSP-0008) for Thursday to be achievable.

2. **LangGraph v1.1 could ship a YAML definition format**: With 34% enterprise market share, if LangGraph defines a `.lg` workflow file format in a minor release, it will absorb OSOP's target market before OSOP reaches 10 GitHub stars. The LangGraph bridge doc and published OSP proposals are the defenses. Both are unbuilt.

3. **Arazzo 1.2 pre-empts OSOP's MCP node model**: 55 days to July 28. Arazzo 1.2 has MCP step types on its roadmap. OSP-0013 must be visibly published in `docs/proposals/` before the Arazzo community discusses MCP integration — or OSOP will be late to the spec it should be driving.

4. **AutoGen migration guide window closes in ~3 days**: LangGraph and CrewAI migration guides are already publishing. Every developer who reads a competing guide is a potential OSOP adopter lost. The window is closing. Publish by Saturday June 6.

5. **A2A at 150+ organizations without OSOP presence**: The enterprise cloud architects reading A2A documentation and choosing Azure AI Foundry or Amazon Bedrock AgentCore have never heard of OSOP. OSP-0004 with concrete hyperscaler examples (Google ADK, Azure, Bedrock) is the entry point. It is 55 days overdue.

6. **Execution drought undermines ROADMAP credibility**: Week 5 was declared "the drought-breaker week." If June 3 closes with zero published proposals and zero confirmed external PRs, the ROADMAP becomes a credibility liability rather than an asset.

---

## Opportunities

### Spec Improvements

- **`agent_def_url:` on `agent` nodes** (15 min — ship today): Links OSOP nodes to A2A Agent Cards (150+ orgs), Oracle Agent Spec, SKILL.md, Google ADK definitions, and arxiv Agent-Spec simultaneously. Single field in `docs/node-types.md` + `schema/osop-core.schema.json`. Makes OSOP the orchestration wrapper for the entire agentic AI definition ecosystem.

- **OSP-0009: `retry:` on edges** (Temporal validated): Add to this week's proposals list. Temporal's 3,000+ production deployments prove retry-at-the-workflow-layer is non-negotiable. Format: `retry: { max_attempts: 3, backoff: "exponential", on_error: ["timeout", "rate_limit"] }`. Maps directly to Temporal retry policies.

- **OSP-0018: `.osoplog` tamper-evidence** (45 min — publish today):
  ```yaml
  log_hash:
    algorithm: "sha256"
    value: "<hex-encoded SHA-256 of canonical JSON>"
    canon: "rfc8785"
    covers: "full"
  ```
  Cross-references: IETF AAT draft (same goal), RFC 8785 (JCS), EU AI Act Article 12. 60-day EU countdown makes this a compliance story, not just a security story.

- **OSP-0008: `trigger:` extension** (due today):
  ```yaml
  trigger:
    type: "webhook" | "schedule" | "event" | "queue" | "manual"
    schedule: "0 9 * * 1-5"  # cron for schedule type
    event_source: "kafka://topic/agent-tasks"  # for event type
  ```
  CrewAI Flows, Temporal, dagu, n8n, and Arazzo 1.1 (AsyncAPI) all have trigger models. A workflow without a trigger model is not a workflow — it is a function stub.

- **OSP-0013: MCP transport annotation (revised)** (due tomorrow): MCP RC stateless core means no `session_id` persistence. New model: `task_lifecycle: inline | poll | cancel`. The `.osoplog` must record task handle IDs and poll sequences, not just call timestamps.

### Tooling Gaps

- **`osop export-temporal`** (CRITICAL): 3,000+ enterprise customers, $300M Series D, native Google ADK + OpenAI SDK. The OSOP → Temporal path is the enterprise portability story. Design the spec mapping: OSOP nodes → Temporal activities, OSOP edges → workflow logic, `retry:` → Temporal retry policies. Even a design doc published in `docs/` is better than silence.

- **`osop export-agent-card`** (now critical): A2A at 150+ organizations means every enterprise buyer expects to see an Agent Card. OSOP should be the format that *generates* Agent Cards from workflow node definitions. `osop export-agent-card --node review-agent` → outputs a valid A2A Agent Card JSON.

- **`osop compile --from-markdown`**: Three-signal confirmation (GitHub Agentic Workflows preview, AWS Strands Agent SOPs, general LLM instruction files). LLM-native teams are writing workflows in Markdown. OSOP should ingest them.

- **OSOP Playground (browser)**: Still the fastest path to 100 GitHub stars. Zero-install first experience. A single-page app that validates `.osop.yaml` and renders a Mermaid diagram. 1-2 day build.

- **GitHub Action: validate + log-validate**: Every repo that adds the action is a public endorsement. Install is a single-file copy-paste. The action should run `osop validate` on every PR that touches `.osop` files.

### Ecosystem Plays

- **dagu integration example PR** (3,447 stars, MCP + HITL tags): Non-invasive PR to `dagucloud/dagu` — add a `.osop.yaml` file alongside an existing dagu workflow example showing the same workflow in both formats. Demonstrates portability, adds OSOP to a high-relevance repo without requiring any code changes to dagu itself. Cleanest non-invasive PR in the backlog.

- **Temporal community post** (20 min, if not sent yesterday): Post in Temporal Slack/forum referencing Replay 2026 ADK + OpenAI SDK announcements: "OSOP is the portable workflow definition format for Temporal — write once in OSOP, execute durably, export `.osoplog` for audit. Here's how OSOP maps to Temporal activities: [link]."

- **SmartBear DevRel email** (if not sent yesterday): Their "From Endpoints to Intent" post on Arazzo + MCP is the natural opener. Pitch: "OSOP is the next layer. Arazzo sequences API calls. OSOP orchestrates the AI reasoning and human approvals around those calls, with a portable audit trail. Guest post or co-authored piece on the full MCP → Arazzo → OSOP stack?"

- **AgenticAPI.com positioning**: Three-layer stack narrative in a short comment or post: AgenticAPI annotates endpoints → Arazzo sequences them → OSOP orchestrates the AI decisions and approvals around them. Establish this narrative before AgenticAPI publishes competing framing.

- **IETF AAT author (Sharif) contact** (20 min): `draft-sharif-agent-audit-trail-00` expires September 29. Author contact remains unconfirmed. Asymmetric leverage: a cross-reference from a Standards Track RFC to OSOP is worth more than 100 GitHub stars. Email: find the author contact in the IETF datatracker, write one paragraph on how OSOP's `.osoplog` is workflow-graph-aware and can export to AAT format.

---

## Top 3 Actions for Today (June 3)

### 1. Create `docs/proposals/` — Publish OSP-0018 + OSP-0008 (90 minutes total)

**Do this before reading anything else today.** Both proposals are fully designed. The writing is the bottleneck.

**OSP-0018** (`docs/proposals/OSP-0018-tamper-evidence.md`, 45 min):
```yaml
# Add to .osoplog root
log_hash:
  algorithm: "sha256"
  value: "<hex-encoded SHA-256 of RFC 8785 canonical JSON>"
  canon: "rfc8785"
  covers: "full"   # or "node_records_only"
  signed_by: "optional: DID or key ID"
```
Rationale sections: (1) EU AI Act Article 12 requires records integrity, (2) IETF AAT draft uses the same approach, (3) RFC 8785 is the canonical JSON serialization standard, (4) verifiable with one `sha256sum` call — no external dependencies.

**OSP-0008** (`docs/proposals/OSP-0008-trigger.md`, 45 min):
```yaml
# Top-level .osop field
trigger:
  type: "webhook" | "schedule" | "event" | "queue" | "a2a" | "manual"
  # type-specific fields:
  schedule: "0 9 * * 1-5"          # cron expression (schedule)
  webhook_secret: "${WEBHOOK_SECRET}" # env ref (webhook)
  event_source: "kafka://topic/x"   # URI (event)
  queue_uri: "sqs://queue/agent"    # URI (queue)
  a2a_task_id: "${task.id}"         # A2A task initiation (a2a)
```
Rationale: CrewAI Flows (event triggers), Temporal (cron + manual), dagu (step triggers), n8n (webhook + schedule), Arazzo 1.1 (AsyncAPI event-driven). OSOP is the only format that can declare all five trigger modes in a single portable workflow.

### 2. Publish `osoplog-otel-mapping.md` (in `docs/`) — 90 minutes

25 days overdue. Due today. Blocks 6+ downstream actions. The document that establishes `.osoplog` as OTel-compatible, IETF-AAT-superset, and framework-agnostic.

Structure (four sections, ~300 words each):

**Section 1: `.osoplog` → OTel GenAI Semantic Conventions**
Field mapping table:
| `.osoplog` field | OTel GenAI span attribute |
|-----------------|--------------------------|
| `run_id` | `trace_id` |
| `workflow_id` | `gen_ai.system` (workflow context) |
| `node_records[].node_id` | span `name` |
| `node_records[].ai_metadata.prompt_tokens` | `gen_ai.usage.input_tokens` |
| `node_records[].ai_metadata.completion_tokens` | `gen_ai.usage.output_tokens` |
| `node_records[].ai_metadata.model` | `gen_ai.response.model` |
| `node_records[].duration_ms` | span `duration` |
| `node_records[].status` | span `status.code` |

Conclusion: `osop log-export --format otel-json` generates valid OTel spans from any `.osoplog` file.

**Section 2: `.osoplog` vs IETF Agent Audit Trail (AAT)**
IETF AAT is flat — a list of agent actions with timestamps. `.osoplog` is workflow-graph-aware: it records which *node* in which *workflow* produced each action, the edge conditions that led there, and the retry history. OSOP can export to AAT format; AAT cannot represent workflow structure. OSOP is a superset.

**Section 3: `.osoplog` vs Oracle Agent Spec observability**
Oracle Agent Spec defines agent capabilities and tool bindings. It has no execution audit record format. `.osoplog` is the execution record format Oracle Agent Spec is missing. `agent_def_url:` in the OSOP workflow links the definition to the execution history.

**Section 4: `.osoplog` + Arazzo 1.1 complement**
Arazzo documents what API calls were *planned* (the workflow definition). `.osoplog` records what *actually happened* — including AI reasoning tokens, human approval delays, retry sequences, and budget overruns. Together, Arazzo + `.osoplog` = complete workflow documentation (plan + actuals).

**Conclusion sentence**: "`.osoplog` is the only open-standard execution record format that is simultaneously OTel-exportable, IETF-AAT-compatible, workflow-graph-aware, and framework-agnostic."

### 3. Publish Arazzo Complement Blog Post on dev.to — 60 minutes

Due today. 10 days overdue. Unlocks SmartBear guest post, jentic outreach, Kong outreach, and the MCP → Arazzo → OSOP narrative in search results.

Title: **"OSOP Complements Arazzo 1.1: The Full Agentic Stack"**

Structure:
1. **The three-layer stack** (200 words): "Anthropic's MCP spec now cross-references Arazzo. Arazzo 1.1 covers AsyncAPI + synchronous HTTP workflows. But who orchestrates the *AI reasoning and human decisions* around those API calls? OSOP fills that gap."
2. **What Arazzo does** (150 words): Multi-step API workflow sequencing. Deterministic. Declarative. Great for describing what API calls to make and in what order.
3. **What OSOP adds** (200 words): Agent nodes (LLM reasoning), human approval nodes, conditional branches based on AI output, parallel execution, and a portable `.osoplog` that records what the AI actually decided. Not deterministic by design — accommodates AI non-determinism.
4. **Example: code review workflow** (200 words): Arazzo orchestrates the GitHub API calls (fetch PR diff, post comment). OSOP wraps those Arazzo workflows with the AI review step and human approval gate. Show the YAML side-by-side.
5. **MCP → Arazzo → OSOP: the confirmed stack** (150 words): MCP provides tool connectivity. Arazzo sequences tool calls into deterministic API workflows. OSOP orchestrates the AI decisions, human approvals, and multi-agent coordination around those workflows — and proves it happened with `.osoplog`.
6. **Call to action**: Link to osop-spec. Link to the OTel mapping doc. Link to `docs/proposals/OSP-0013`.

---

## Self-Evolution Analysis

### What Would Make a Developer Choose OSOP Over Rolling Their Own

The answer has shifted since early 2026. The 2026 developer is choosing between:
1. **Writing OSOP** — a validated YAML format with a schema, a CLI, a VS Code extension, and OTel export
2. **Writing LangGraph code** — Python-native, but framework-locked, no portable audit trail
3. **Writing Arazzo** — great for API workflows, no agent/human node concepts, no execution log
4. **Writing Temporal workflow code** — durable, but code (not declarative), no portable definition format

OSOP wins when it is the *only* format that is simultaneously: human-readable YAML, framework-agnostic, OTel-exportable, EU AI Act compliant, and cross-framework portable. **Every one of those properties requires a published proposal or document to be credible.** Right now, most are claims without evidence.

The single most impactful change to developer adoption: **a working online playground** (validate `.osop.yaml`, render Mermaid diagram, show the `.osoplog` schema). Zero-install first experience is the difference between "I'll try this" and "I'll bookmark this."

### What Would Make a Framework Maintainer Integrate OSOP Natively

1. `osop import-{their-format}` — reduces integration to one command
2. `docs/proposals/` with active RFCs — signals a living spec, not a ghost project
3. A published `osoplog-otel-mapping.md` — shows they gain observability capability without rebuilding their logging
4. A real example PR in their repo (non-invasive, standalone) — proves OSOP works with their stack

### What Would Make an Enterprise Mandate OSOP

1. **EU AI Act Article 12 compliance** — 60 days. OSP-0007 maps `.osoplog` fields to Article 12 log requirements. No other governed standard does this today.
2. **Tamper-evident audit records** — OSP-0018 SHA-256 + RFC 8785 for audit defense. Publish today.
3. **OTel export** — feeds their existing Datadog/Honeycomb stack with `osop log-export --format otel-json`
4. **Appearance in a standard they track** — AAIF, IETF, or CNCF. Submission status unconfirmed at Day 55.

---

## Adoption Metrics to Track

| Metric | Day 54 Actual | Day 55 Target | Day 60 Target (Jun 8) |
|--------|---------------|---------------|----------------------|
| GitHub stars (osop-spec) | 0 ❓ | Any | 200 |
| External PRs submitted | ❓ verify | +1 (dagu) | 5+ |
| External PRs merged | ❓ verify | 1 | 5 |
| `docs/proposals/` exists | **No** | **Yes** | Yes (3+ proposals) |
| OSP proposals published | **0** | **2** (0018 + 0008) | 3+ |
| `osoplog-otel-mapping.md` exists | **No** | **Yes** | Yes |
| Arazzo complement post published | **No** | **Yes** | Yes |
| Repos with `.osop` files | ❓ | — | 20 |
| Protocol ecosystem map appearances | ❓ verify | — | 5 |
| AAIF submission status | ❓ unconfirmed | Verify | In review |
| EU AI Act countdown | **60 days** | — | 55 days |
| MCP RC countdown | **55 days** | — | 50 days |
| AutoGen guide window | **~3 days left** | Draft started | Published |

---

## New Items for Backlog (Identified Today)

| Item | Type | Priority | Why Now |
|------|------|----------|---------|
| Agent-Spec (arxiv 2510.04173) positioning | Content | 🟠 High | Appears in "OSOP" search results; complement narrative needed |
| `osop export-agent-card` (A2A) | Tooling | 🔴 **Critical** | A2A at 150+ orgs; enterprise entry point |
| `agent_def_url:` field on `agent` nodes | Spec | 🟠 High | 15-min change; A2A + Agent-Spec + SKILL.md + Oracle all valid targets |
| Temporal design doc (even if not CLI) | Spec/Docs | 🔴 Critical | $300M Series D, 3k+ customers, Google ADK + OpenAI native |
| AgenticAPI.com three-layer positioning post | Content | 🟡 Medium | Establishes OSOP above AgenticAPI → Arazzo → OSOP stack |
| OSOP Playground (browser) | Tooling | 🟠 High | Fastest path to first 100 stars; zero-install first experience |

---

## Positioning Stack Update

One new entry since yesterday's ROADMAP:

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Agent capabilities spec | Open Agent Specification (Agent-Spec, arxiv 2510.04173) | Academic (no governance) | ⚠️ In search results alongside OSOP — complement narrative needed |

All other rows unchanged from ROADMAP June 1 table. Full update on Monday June 8.

---

*Previous brief: [`2026-06-02-daily-brief.md`](./2026-06-02-daily-brief.md)*
*Day 55, Wednesday, Week 5. Hard deadline day. `docs/proposals/` + OSP-0018 + OSP-0008 + `osoplog-otel-mapping.md` + Arazzo blog post — all due today. Verify June 2 actions first. Ship proposals before reading any further signals.*
