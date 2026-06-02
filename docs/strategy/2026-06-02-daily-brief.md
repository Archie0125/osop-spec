# OSOP Daily Strategy Brief — 2026-06-02

> **Day 54. Tuesday. Week 5, Day 2.**
>
> Yesterday (Day 53, Monday) was the planned "drought-breaker" day: CFP deadline, HN post, 3+ external PRs, OpenAgents example, SmartBear email, IETF Sharif contact, CNCF comment. Status of all June 1 actions is unverified — verify first thing.
>
> New signals overnight: Temporal Replay 2026 announced native Google ADK + OpenAI SDK integrations (3,000+ customers), making `osop export-temporal` the portability bridge for both hyperscalers. LangGraph's "open Agent Protocol" is a new competitive signal to track. Oracle Agent Spec coalition (Oracle + CopilotKit AG-UI + Google A2UI) confirmed growing — `agent_def_url:` on OSOP nodes is the 15-minute link. SmartBear published "From Endpoints to Intent" on Arazzo + MCP today — prime timing to send the DevRel email.
>
> `docs/proposals/` still does not exist. Thursday June 4 deadline is **2 days away**. `osoplog-otel-mapping.md` is due **tomorrow**.

---

## Action Tracker (Day 54 — Priority Order)

| Action | Status | Days Pending | Today? |
|--------|--------|--------------|--------|
| **Verify June 1 actions** (CFP, HN, PRs ×3, OpenAgents PR, SmartBear, IETF, CNCF) | ❓ Unverified | — | **Yes — morning, first task** |
| **Create `docs/proposals/` + OSP-0018** (tamper-evidence, 45 min) | 🔴 Not in repo | 3 | **Yes — publish today** |
| **Write `osoplog-otel-mapping.md`** | 🔴 Not in repo | 24 | **Yes — due tomorrow** |
| **OSP-0008: `trigger:` RFC** | 🔴 Not in repo | 17 | Today/tomorrow |
| **Arazzo 1.1 complement blog post (dev.to)** | ⏳ Pending | 9 | Draft today, post tomorrow |
| **AutoGen migration guide** | ⏳ Pending | 3 | Write today |
| **SmartBear DevRel email** | ⏳ Pending | 16 | **Yes — send today** |
| **OSP-0013: MCP stateless (revised)** | 🔴 Not in repo | 8 | By Thursday |
| **OSP-0015: Workflow Composition** | 🔴 Not in repo | 9 | By Thursday |
| **OSP-0004: A2A agent subtype** | 🔴 Not in repo | 54 | By Friday |
| **AAIF submission confirm** | ⏳ Unconfirmed | 54 | Verify today |
| **Temporal community note** | 🆕 New | 0 | Today — 20 min |

---

## Intelligence

### New Signals (Since June 1)

---

**Temporal Replay 2026: Google ADK + OpenAI SDK Native Integrations [EXPORT-TEMPORAL NOW CRITICAL]**

At Replay 2026, Temporal announced Serverless Workers, Standalone Activities, Workflow Streams, and — most critically — **native integrations with Google ADK and OpenAI Agents SDK**. Temporal now has 3,000+ paying customers (Nvidia, Netflix, OpenAI). OpenAI uses Temporal for Codex: agent workflows that survive server restarts and wait days for human approval.

What this means for OSOP:
- `osop export-temporal` is now the portability bridge for both hyperscaler SDKs (Google ADK 1.0 GA + OpenAI Agents SDK) simultaneously
- The OSOP → Temporal path = write once in OSOP, execute durably on Temporal, export `.osoplog` for audit
- Temporal's 3,000+ customer base is asking "how do I define my workflow in a portable format?" — OSOP is the answer
- This also validates **OSP-0009: `retry:` on edges** as a first-class concern: Temporal retry policies are production requirements for every one of those 3,000 customers

**Action (20 min today)**: Post to Temporal community Slack/forum — "OSOP is the portable definition format for Temporal agent workflows. OSOP Core → Temporal SDK = crash-proof execution + open audit trail." Link the README example.

---

**LangGraph "Open Agent Protocol" (OAP) [NEW COMPETITIVE SIGNAL — WATCH CLOSELY]**

LangGraph v1.0 GA ships an "open Agent Protocol" for cross-framework agent communication, hybrid deployment (Cloud Control Plane + VPC Data Plane), and time-travel debugging in LangGraph Studio. LangGraph now accounts for **34% of agent-framework citations in production architecture docs at 1,000+ employee companies** (Gartner, Q1 2026). LangGraph surpassed CrewAI in GitHub stars in early 2026.

Competitive assessment:
- LangGraph OAP = runtime execution protocol (agent communication, state checkpointing, hybrid deployment)
- OSOP = workflow definition format + execution audit record (define workflows portably, log what happened)
- These are **complementary today** — but LangGraph's v1.0 architecture implies a portable YAML workflow format could ship in v1.1 or v1.2
- If LangGraph ships a `.lg` workflow definition format with their existing 34% market share, they occupy OSOP's position before OSOP reaches credible ecosystem presence

**Actions**:
- Add LangGraph OAP explicitly to the ROADMAP positioning stack on Monday June 8
- Ship the LangGraph bridge doc (22 days pending) **before** LangGraph v1.1 ships — frame as "LangGraph handles execution state; OSOP handles the portable definition and audit trail"
- Frame the four-way comparison doc (if HN post from June 1 succeeded) to explicitly address LangGraph OAP

---

**Oracle Agent Spec + AG-UI + A2UI: Three-Layer Coalition Growing [OSOP SITS ABOVE ALL THREE]**

Oracle, CopilotKit (AG-UI), and Google (A2UI) confirmed alignment: three open specs assembled end-to-end for agentic apps. Oracle's WayFlow runtime imports/exports LangGraph and CrewAI agents via Oracle Agent Spec. The coalition covers:
- Oracle Agent Spec → agent definitions, capabilities, tool bindings
- AG-UI (CopilotKit) → frontend UI streaming protocol  
- A2UI (Google) → agent-to-UI routing protocol

OSOP's position: OSOP is the **workflow orchestration layer above all three** — it defines the sequence, conditions, and human approvals that invoke these agent capabilities, and the `.osoplog` records what actually happened.

The **`agent_def_url:`** field on OSOP `agent` nodes is the literal link:
```yaml
- id: "research-agent"
  type: "agent"
  agent_def_url: "https://agent-spec.oracle.com/agents/my-researcher"
  runtime:
    provider: "google"
    model: "gemini-2.0-flash"
```

This 15-minute spec change makes OSOP the orchestration wrapper for the entire Oracle/AG-UI/A2UI coalition **and** SKILL.md, **and** A2A Agent Cards, **and** Google ADK — all with one field.

**Action**: Add `agent_def_url:` to `docs/node-types.md` and `schema/osop-core.schema.json` today — 15 minutes, ships as a standalone patch.

---

**SmartBear Published "From Endpoints to Intent" — Arazzo + MCP [SEND EMAIL TODAY]**

SmartBear just published "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP" on their developer blog. They own Swagger, ReadyAPI, and an 80M-developer audience. This is the ideal moment to send the DevRel email:

Angle: "Your 'From Endpoints to Intent' framing is exactly right — and OSOP is the next layer. Arazzo sequences the API calls. OSOP orchestrates the AI reasoning, human approvals, and decisions that *invoke* those Arazzo sequences, and the `.osoplog` proves it happened. Open to a guest post or co-authored piece on the Arazzo → OSOP stack."

Send today, before the article momentum fades. Attach the Arazzo complement dev.to post (or a draft if not yet published).

---

**agenticapi.com: OpenAPI Extensions for AI Agent Discovery [FRAMING SIGNAL]**

A new player (agenticapi.com) is extending OpenAPI with `x-agentic-*` extensions: intent/action verb annotations, parameter impact metadata, compatibility markers. Their goal: make individual API endpoints more discoverable by AI agents.

Three-layer stack narrative OSOP should use:
1. **AgenticAPI** (or standard OpenAPI) → annotate endpoints for agent discovery
2. **Arazzo** → sequence those endpoints into deterministic call flows
3. **OSOP** → orchestrate the AI reasoning, human decisions, and approvals around those call flows, with an auditable execution record

This narrative explicitly positions OSOP at the top of an established stack. Use in: CNCF TAG Runtime comment, AAIF submission, HN post, any blog content.

---

**dagu: 3,447-Star YAML Workflow Engine with MCP + Human-in-the-Loop [NEW INTEGRATION TARGET]**

`dagucloud/dagu` (3,447 stars) is a local-first YAML workflow engine tagged `mcp-server`, `human-in-the-loop`, `durable-execution`, `workflow-orchestration`. It defines DAGs in declarative YAML and integrates with MCP. Its users are exactly OSOP's audience: developers who want portable, auditable workflow definitions.

OSOP opportunities:
- Non-invasive PR to dagucloud/dagu: add `.osop.yaml` definition alongside dagu's YAML example, showing how the same workflow is expressed in both formats. Demonstrates portability, adds OSOP to a 3,447-star repo's README context.
- New tooling: `osop export-dagu` — bridge OSOP Core workflows to dagu's DAG YAML format
- dagu is the first large YAML workflow repo identified that is not framework-locked. This is the non-invasive PR that should have been the first one submitted.

**Action**: Add dagu PR to the backlog; prioritize after awesome-ai-agents-2026 PRs.

---

**Observability Is the 2026 Enterprise Differentiator [MESSAGING UPDATE]**

Multiple enterprise architecture sources now explicitly cite observability — "a debugger for AI thoughts" — as the killer feature for AI orchestration platforms in 2026. LangGraph Studio's time-travel debugging and n8n's LangSmith integration are the cited examples.

OSOP's `.osoplog` IS this "debugger for AI thoughts" — but **portable and open**, not locked to LangGraph Studio or LangSmith. This is OSOP's enterprise buyer message:

> "Your LangGraph Studio debug session doesn't survive a framework migration. `.osoplog` is a portable, open-format execution record that travels with your workflow, not with your framework."

**Immediate action**: Update README first paragraph to lead with this framing. 20 minutes. High-impact change before any external traffic arrives.

---

### Continued Signals (Status Check)

| Signal | Status | Countdown |
|--------|--------|----------|
| MCP RC → Final spec | Active | **56 days** (Jul 28) |
| EU AI Act enforcement | Active | **61 days** (Aug 2) |
| Arazzo 1.2 (MCP step types) | Pre-window open | OSP-0013 must publish first |
| AutoGen maintenance mode | Migration wave active | ~1 week window left |
| SKILL.md + OSSA in search results | Active | Competitive positioning page needed |
| LangGraph OAP portable format risk | **New — WATCH** | v1.1 timeline unknown |
| `docs/proposals/` does not exist | **Day 54** | **2 days to Thursday deadline** |
| OSP proposals published | **0** | Day 54 |

---

## Threats

1. **`docs/proposals/` Thursday deadline at risk**: If OSP-0018, OSP-0008, and OSP-0013 don't exist by end of Thursday June 4, Week 5's highest credibility commitment fails for the fifth consecutive week. OSP-0018 is 45 minutes. There is no excuse for it not existing today.

2. **LangGraph shipping a portable workflow format**: LangGraph's v1.0 OAP architecture implies a YAML workflow definition format could ship in a minor release. With 34% enterprise market share, if they ship `.lg` files with validator + schema, they occupy OSOP Core's ground in weeks. The window to establish OSOP as the pre-existing standard is measured in sprints, not months.

3. **Arazzo 1.2 MCP steps locking in the competing node model**: 56 days. Arazzo tooling ecosystem (SmartBear, Speakeasy, Zuplo, Redocly, APIDog, Specmatic, Bruno) will integrate MCP step types the day Arazzo 1.2 ships. OSP-0013 must define OSOP's MCP annotation model — and be visible in the spec repo — before that moment.

4. **Oracle Agent Spec + WayFlow claiming the portability narrative**: Oracle's coalition is growing (AG-UI + A2UI confirmed). If WayFlow ships as the portability runtime and Oracle Agent Spec claims "define once, run anywhere" in blog content and conference talks, it may occupy OSOP's positioning before OSOP has ecosystem presence. The `agent_def_url:` field and `osop import-agent-spec` PR are the counter.

5. **AutoGen migration guide window closing in ~1 week**: Competing migration guides (LangGraph, CrewAI) are already publishing. OSOP's guide needs to publish in the next 5 days to catch the migration traffic wave.

---

## Opportunities

### Spec Improvements

- **`agent_def_url:` on `agent` nodes** (15 min): Single field addition to `docs/node-types.md` and `schema/osop-core.schema.json`. Links OSOP to Oracle Agent Spec, SKILL.md, A2A Agent Cards, Google ADK definitions simultaneously. Makes OSOP the orchestration wrapper for the entire agentic AI definition ecosystem. Publish today.

- **OSP-0009: `retry:` on edges** (confirmed by Temporal Replay 2026): Temporal's 3,000+ customers running AI workflows all need retry semantics. `retry: { max_attempts: 3, backoff: "exponential", on_error: ["timeout", "rate_limit"] }` on OSOP edges maps directly to Temporal retry policies. Makes OSOP the human-readable definition layer for Temporal workflows. Add to this week's proposal targets.

- **`task_lifecycle:` for MCP agent nodes** (OSP-0013 revised): MCP's confirmed Tasks extension (`tasks/get`, `tasks/update`, `tasks/cancel`) means MCP-backed agent nodes can be long-running polled tasks. The `.osoplog` must record: task handle ID, poll attempts, final status — not just a single call timestamp. `task_lifecycle: inline | poll | cancel` in the node runtime block.

- **Streaming semantics on `agent` nodes**: Temporal Workflow Streams + OpenAI WebSockets + MCP Tasks together validate streaming as a production requirement. `runtime.streaming: true` + `runtime.stream_to: "next-node-id"` enables OSOP workflows to describe streaming pipelines. Currently only an idea — promote to OSP proposal.

- **README reframe: "debugger for AI thoughts"** (20 min): Lead with the enterprise pain point — "AI orchestration without portable execution records is debugging in the dark." Reference the 2026 consensus on observability as the differentiator. Do before any external traffic hits.

### Tooling Gaps

- **`osop export-temporal`** (promoted to CRITICAL): With Google ADK and OpenAI SDK now Temporal-native, this tool bridges OSOP to 3,000+ enterprise customers. OSOP Core workflow → Temporal workflow definition. The spec mapping is already clear: nodes → activities, edges → workflow logic, `retry:` → Temporal retry policies.
- **`osop export-dagu`**: 3,447-star local YAML workflow engine. OSOP Core maps cleanly to dagu's DAG format. Proposal needed.
- **OSOP Playground (browser)**: Still the fastest path to the first 100 GitHub stars. Zero-install first experience.
- **`osop import-autogen`**: 100K+ users in migration mode. ~1 week window remaining.
- **GitHub Action: validate + log-validate**: Every repo that adds it is a public endorsement. Single-file install.

### Ecosystem Plays

- **Temporal community (20 min today)**: Post in Temporal Slack/forum referencing their Replay 2026 Google ADK + OpenAI SDK announcements. "OSOP is the portable definition format for Temporal agent workflows."
- **SmartBear DevRel email (15 min today)**: They just published on Arazzo + MCP. Ideal timing. Arazzo → OSOP complement story. Guest post pitch.
- **dagu integration example PR**: Non-invasive — add `.osop.yaml` alongside a dagu workflow example. Targets 3,447 stars.
- **AgenticAPI.com comment/post**: Three-layer stack (AgenticAPI → Arazzo → OSOP) narrative. Short comment on their blog or Dev.to post.
- **LangGraph bridge doc (22 days pending)**: Urgently needed given LangGraph OAP signal. Frame OSOP as the complement, not the competitor. Reference v1.0 GA explicitly.

---

## Top 3 Actions for Today (June 2)

### 1. Create `docs/proposals/` and Publish OSP-0018 — Today, 45 Minutes

Thursday's deadline is 2 days away. OSP-0018 is the shortest proposal in the backlog. It creates `docs/proposals/` and demonstrates that the RFC process is real — not just a roadmap promise.

Exact spec for OSP-0018:
```yaml
# .osoplog addition
log_hash:
  algorithm: "sha256"
  value: "<hex-encoded SHA-256 of the canonical JSON rendering>"
  canon: "rfc8785"  # JSON Canonicalization Scheme
  covers: "full"    # or "node_records_only"
```
Cross-reference: IETF draft-sharif-agent-audit-trail-00 (same tamper-evidence goal), RFC 8785 (JCS), EU AI Act Article 12 (integrity of records). Rationale: any OSOP user needing to prove to a regulator or auditor that their execution log has not been altered can compute and verify the hash. This is the minimum bar for EU AI Act compliance.

Steps:
1. `mkdir docs/proposals/`
2. Write `docs/proposals/OSP-0018-tamper-evidence.md` (~2 pages)
3. Commit and push

### 2. Write `osoplog-otel-mapping.md` — Today (Due Tomorrow)

24 days pending. Deadline: Wednesday June 3 (tomorrow). This document unlocks: SmartBear guest post, Sharif follow-up credibility, Red Hat pitch, AG2 examples PR, Waxell outreach, Temporal community post. Blocking 6+ downstream actions by not existing.

Four differentiation angles to cover (one section each, ~300 words each):
1. **`.osoplog` → OTel GenAI Semantic Conventions**: Field-for-field mapping. `node_records[].ai_metadata.prompt_tokens` → `gen_ai.usage.input_tokens`. `run_id` → `trace_id`. This makes OSOP the human-readable source of truth that generates OTel spans.
2. **`.osoplog` vs IETF Agent Audit Trail (AAT)**: OSOP is workflow-graph-aware (nodes, edges, conditions). IETF AAT is flat (a list of agent actions). OSOP is a superset: can export to AAT format, but AAT cannot represent workflow structure.
3. **`.osoplog` vs Oracle Agent Spec observability**: Oracle Agent Spec has agent definitions and tool calls. It has no execution audit record format. `.osoplog` is the execution layer Oracle Agent Spec is missing.
4. **`.osoplog` + Arazzo 1.1 complement**: Arazzo records what API calls were *planned*. `.osoplog` records what *actually happened*, including AI reasoning, human approvals, retry failures, and token costs.

Conclusion: "`.osoplog` is the only open-standard execution record format that is simultaneously OTel-exportable, IETF-AAT-compatible, workflow-graph-aware, and framework-agnostic."

### 3. Send SmartBear DevRel Email + Post Temporal Community Note — Today, 35 Minutes Total

Two 20-minute outreach actions that are time-sensitive today:

**SmartBear (15 min)**: "Your 'From Endpoints to Intent' piece on Arazzo + MCP is exactly right about where the field is heading. OSOP adds the next layer — the workflow that decides when and why those Arazzo API sequences get invoked, with a portable audit trail of the AI reasoning and human approvals. Open to a guest post or co-authored piece on the full MCP → Arazzo → OSOP stack. Here's the spec: [link]"

**Temporal community (20 min)**: Post in Temporal Slack #workflows or #announcements — "Temporal Replay 2026 announcements (Google ADK + OpenAI SDK native) are a huge validation. OSOP is a YAML workflow format that maps cleanly to Temporal: OSOP nodes → Temporal activities, OSOP edges → Temporal workflow logic, `.osoplog` → portable audit trail. Would love to show the community what OSOP + Temporal looks like. [README link]"

---

## Self-Evolution Analysis

### What's Missing From the Spec That Real-World Agents Need

1. **Edge retry semantics**: Temporal's 3,000+ production deployments prove retry-at-the-workflow-layer is not optional. OSOP Core has no `retry:` on edges. Every serious AI workflow needs it. OSP-0009 is the fix.

2. **`state_schema:` at workflow level**: LangGraph's 34% enterprise adoption is built on typed state + human-in-the-loop checkpoints. OSOP workflows pass data through outputs/inputs between nodes but define no shared workflow state schema. Without `state_schema:`, OSOP workflows are not LangGraph-compatible in the way that matters most to enterprise adopters.

3. **`trigger:` types** (OSP-0008): OSOP doesn't define how a workflow starts. CrewAI Flows, Temporal, dagu, n8n all have trigger primitives (cron, webhook, event, manual). A workflow definition without a trigger model is incomplete.

4. **Cost governance fields**: As enterprise AI adoption scales, `max_cost_usd:` and `budget_overflow_action: pause_for_approval` become compliance requirements. OSP-0017 addresses this; not yet published.

5. **`streaming:` semantics**: MCP Tasks + OpenAI WebSockets + Temporal Workflow Streams together confirm streaming is production-ready. OSOP has no way to describe a streaming workflow node.

### What Would Make a Framework Maintainer Integrate OSOP Natively

1. A working `osop import-{framework}` / `osop export-{framework}` CLI command for their format — reduces integration to one command
2. A concrete example showing OSOP adds audit trail capability their framework lacks
3. A reference in AAIF (giving them standards-body credibility for the integration)
4. An active `docs/proposals/` demonstrating this is a living spec, not a ghost project

### What Would Make an Enterprise Mandate OSOP

1. **EU AI Act Article 12 compliance** — OSP-0007 maps `.osoplog` fields to Article 12 requirements. 61 days to enforcement.
2. **OTel export** — `osop log-export --format otel-json` feeds their existing observability stack (Datadog, Honeycomb, Grafana)
3. **Tamper-evident execution records** — OSP-0018 SHA-256 + RFC 8785 for audit defense
4. **A reference in a standard they already track** — AAIF, IETF, or CNCF appearances

---

## Adoption Metrics to Track

| Metric | Day 53 Target (Jun 1) | Day 54 Actual | Day 60 Target (Jun 8) |
|--------|----------------------|---------------|----------------------|
| GitHub stars (osop-spec) | 200 (by Jun 8) | 0 ❓ | 200 |
| Combined ecosystem stars | 500 (by Jun 8) | ~1 ❓ | 500 |
| External PRs submitted | 4 (yesterday) | ❓ verify | 5+ |
| External PRs merged | 0 | ❓ verify | 5 |
| `docs/proposals/` exists | Yes (today) | **No** | Yes (3+ proposals) |
| OSP proposals published | OSP-0018 (today) | **0** | 3+ |
| Repos with `.osop` files | 20 (by Jun 8) | ❓ | 20 |
| Protocol ecosystem map appearances | 3 (yesterday) | ❓ verify | 5 |
| PyPI downloads | 2k/mo (by Jun 8) | — | 2k/mo |
| NPM downloads | 2k/mo (by Jun 8) | — | 2k/mo |
| AAIF submission | In review | ❓ verify | In review |
| CFP submissions | 1 (yesterday) | ❓ verify | 3 |
| EU AI Act countdown | 62 days | **61 days** | 55 days |
| MCP RC countdown | 57 days | **56 days** | 50 days |
| AutoGen guide published | This week | Not published | Published |
| LangGraph OAP risk assessed | — | **Added to watch list** | Addressed in bridge doc |

---

## New Items for Backlog (Identified Today)

| Item | Type | Priority | Why Now |
|------|------|----------|---------|
| `osop export-temporal` | Tooling | 🔴 **Promoted to Critical** | Google ADK + OpenAI SDK now Temporal-native (Replay 2026) |
| LangGraph bridge doc | Ecosystem | 🔴 **Urgency elevated** | LangGraph OAP competitive signal; v1.0 GA reference needed |
| `agent_def_url:` spec field | Spec | 🟠 High | 15-min change; links OSOP to Oracle/AG-UI/A2UI coalition |
| Temporal community post | Ecosystem | 🟠 High | Replay 2026 momentum; 3,000+ customers, Google ADK + OpenAI native |
| OSP-0009: `retry:` on edges | Spec (proposal) | 🟠 High | Temporal 3,000+ production confirms production requirement |
| `osop export-dagu` | Tooling | 🟠 High | 3,447-star YAML engine with MCP + HITL; natural bridge |
| dagu integration example PR | Ecosystem | 🟠 High | 3,447 stars; non-invasive; OSOP Core maps to their DAG format |
| AgenticAPI.com three-layer post | Content | 🟡 Medium | Establishes OSOP's position above Arazzo + AgenticAPI stack |
| README observability reframe | Docs | 🟠 High | "Debugger for AI thoughts" is 2026's enterprise language |

---

*Previous brief: [`2026-06-01-daily-brief.md`](./2026-06-01-daily-brief.md)*  
*Day 54, Tuesday, Week 5. `docs/proposals/` by tonight. `osoplog-otel-mapping.md` by tomorrow. SmartBear email today. Time is compressing.*
