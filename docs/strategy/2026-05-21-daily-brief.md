# OSOP Daily Strategy Brief — 2026-05-21

> **Day 42. Week 3, Thursday.**
> Yesterday's Wednesday deliverables: OpenClaw SOUL.md PR (45 min), `osop compile --from-markdown` design doc (2 hrs), AGNTCon/MCPCon CFP abstract (90 min), OSP-0005 Trust policy RFC (60 min), ADK multi-language example (60 min). This brief does not re-argue them — if unshipped, they carry. Today is Thursday. Thursday assignments from the Week 3 plan: HN submission (9am ET), LangGraph community post, Temporal community post, SmartBear DevRel outreach email, AAIF submission (hard deadline — no further slippage). One additional strategic finding from today's research demands attention: the Arazzo-for-AI-agents narrative is accelerating across five independent outlets simultaneously and needs an explicit OSOP counter-narrative. That counter-narrative is one sentence long and based on a moat no Arazzo tooling has ever addressed.

---

## Action Tracker (Day 42)

| Action | Status | Days Pending | Today's Note |
|--------|--------|--------------|------------------|
| **AAIF submission** | ⏳ Pending | **42** | **HARD DEADLINE TODAY. No further slippage.** |
| **HN submission (four-way comparison doc)** | ⏳ Pending | **10** | **9am ET TODAY. Window may not reopen this week.** |
| **LangGraph community post** | ⏳ Pending | **11** | Thursday assignment. 60 min. |
| **Temporal community post** | ⏳ Pending | **16** | Thursday assignment. 45 min. |
| **SmartBear DevRel email** | ⏳ Pending | **4** | Thursday assignment. 30 min. |
| **OpenClaw SOUL.md PR** | ⏳ Pending | **42** | If unshipped Wed — DO TODAY. 45 min. Zero blockers. |
| **`osop compile --from-markdown` design doc** | ⏳ Pending | **3** | If unshipped Wed — DO TODAY. |
| **AGNTCon / MCPCon CFP abstract** | ⏳ Pending | ~12 days to deadline | If unshipped Wed — submit today. |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **42** | If unshipped Wed — publish today. |
| **OSP-0008: `trigger:` RFC** | ⏳ Pending | **5** | ~11 days to Arazzo 1.1. Each day costs namespace priority. |
| `osoplog-otel-mapping.md` | ⏳ Pending | **12** | Unblocks AG2 PR, Red Hat pitch, OTel blog. |
| Four-way comparison doc (published content) | ⏳ Pending | **10** | Publish to dev.to today; HN 9am ET. |
| CNCF TAG Runtime comment | ⏳ Pending | **6** | 15 min. Today alongside HN. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **42** | Needs A2A v1.2 update before publishing. |
| AG2 examples PR | ⏳ Pending | **12** | Blocked on `osoplog-otel-mapping.md`. |
| `osop import-strands-sop` Discussion | ⏳ Pending | **3** | 30 min. |
| `osop import-agent-spec` Discussion | ⏳ Pending | **6** | 30 min. |
| Salesforce developer community post | ⏳ Pending | **2** | 30 min. |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **18** | This week. |
| OSP-0007: Compliance Extensions RFC | ⏳ Pending | **7** | 72 days to EU AI Act enforcement. |
| `osop export-maf` tooling spec | ⏳ Pending | **2** | New. Microsoft MAF v1.0. |
| n8n ecosystem play | ⏳ Pending | **9** | 150K+ stars; unstarted. |

---

## Intelligence

### New Signals (2026-05-21)

**The Arazzo-for-AI-Agents Narrative Is Accelerating — Five Independent Outlets, One Week.**
Today's research surfaced five separate 2026 articles explicitly positioning Arazzo as the AI agent workflow answer: SmartBear ("From Endpoints to Intent: Rethinking Agent API Workflows with Arazzo and MCP"), Nordic APIs ("Why AI Agents Need Deterministic API Workflows"), marmelab ("Arazzo: The Missing Piece for AI-Assisted API Consumption"), Jentic ("Building Reliable API Workflows with Arazzo"), and Tyk ("Arazzo and AI agents: your essential starter guide"). The framing is consistent: Arazzo + MCP = complete AI agent workflow infrastructure. No article in this set mentions an execution audit record. This is the most significant competitive narrative shift since OSOP's launch.

The OSOP response is one sentence: **Arazzo defines API workflows. OSOP defines agent workflows and records what happened.** The full counter-narrative: Arazzo 1.0.1 describes *which endpoints to call in what order* to achieve a business outcome. It has no concept of an execution record — what the agent actually called, what tokens it spent, what reasoning it used, what a compliance officer can audit six months from now. The `.osoplog` format has no equivalent anywhere in the Arazzo tooling ecosystem (Redocly, Speakeasy, APIDog, Bruno, Specmatic). Every Arazzo workflow that runs inside an AI agent is an `.osoplog` waiting to be born. Position: "Use Arazzo inside your OSOP `api` nodes. Use `.osoplog` to record what Arazzo workflows your agent actually executed." This framing makes OSOP *complementary* to the Arazzo ecosystem — every Arazzo adopter becomes a potential OSOP adopter.

Immediate action: The four-way comparison doc should now include an Arazzo row in the execution-record column ("❌ No execution log"). One paragraph added today turns a 9-item comparison into the most complete agent workflow standard comparison anywhere on the internet.

**MCP Hits 97 Million Monthly Downloads — The Infrastructure Below OSOP Is Mainstream.**
MCP reached 97 million monthly SDK downloads in March 2026, up from ~2 million at launch (November 2024). 5,800+ community and enterprise MCP servers. Gartner: 75% of API gateway vendors adding MCP features by 2026. The implication for OSOP is architectural, not competitive: the infrastructure OSOP sits above has cleared the mainstream adoption threshold. MCP is now a commodity developer assumption — like HTTP or OAuth. This means "OSOP for your MCP-powered agent workflows" is no longer a leap of abstraction; it is the natural next sentence after "I've set up MCP." The awareness pitch has changed: don't explain MCP to OSOP audiences. Explain OSOP to MCP audiences.

Action: The four-way comparison doc and CFP abstract should open with the MCP mainstream fact, then introduce the gap: "You have 5,800 MCP tools. You have a workflow that calls them in a sequence. Where does that sequence live? In a README? In a prompt? OSOP is the format."

**AAIF Founding Stack Confirmed — MCP + A2A + AGENTS.md (OpenAI). OSOP's Seat Is Visible.**
Anthropic's formal announcement confirmed the Agentic AI Foundation under the Linux Foundation, with three founding projects: MCP (Anthropic), goose (Block), and AGENTS.md (OpenAI). Google, Microsoft, AWS, Cloudflare, Bloomberg, Salesforce, SAP, ServiceNow as supporting members. The governance structure is now public. Each founding project occupies one layer: MCP = tool connectivity, AGENTS.md = agent behavior specification, goose = agent execution engine. The "workflow definition + execution audit" layer is visibly absent from the founding stack. OSOP's AAIF submission angle: "The founding stack defines what tools agents have, how agents behave, and one execution engine. No founding project defines a portable workflow format or a portable execution audit record — the layer every enterprise will require for EU AI Act compliance (August 2, 2026)." This is the strongest possible framing for the AAIF application, and it is ready to send today.

**OpenAgents Framework — Native MCP + A2A: A New Integration Target.**
OpenAgents is confirmed as the only AI agent framework with *native* support for both MCP and A2A simultaneously. It also supports A2A agent card publication and consumption. This makes it the most protocol-aligned framework in the ecosystem. An `osop-examples` PR adding an OpenAgents + OSOP example would demonstrate OSOP's protocol-neutral positioning with the most forward-compatible framework available. Target: add to ecosystem plays backlog at 🟠 High priority, this week.

**Arazzo 1.1 AsyncAPI Window Is ~11 Days. OSP-0008 Must Ship First.**
Arazzo 1.1 is confirmed to add AsyncAPI support, enabling event-driven workflows that span HTTP and message queue protocols. This is exactly the territory OSP-0008's `trigger:` extension claims. The framing difference: Arazzo `trigger:` would be for invoking API workflows via events. OSOP's `trigger:` is for invoking *agent* workflows via events — a distinct and broader scope. But once Arazzo 1.1 ships with AsyncAPI, the ecosystem will read `trigger:` as an Arazzo-owned concept. Publishing OSP-0008 first establishes that agent-workflow triggers are a distinct namespace from API-workflow triggers — an important distinction for standards positioning.

**EU AI Act: 72 Days to Enforcement (August 2, 2026).**
Countdown: 72 days as of today. The fine ceiling (35 million EUR or 7% of global annual turnover) is now appearing in developer-facing content, not just legal briefings. Dev.to, inkog.io, and VerisigAI all published compliance checklists in the past two weeks aimed at engineering teams. Enterprise procurement is beginning to include AI audit trail requirements in vendor questionnaires. OSP-0007 (Compliance Extensions RFC) maps `.osoplog` to Article 12 field-for-field. Each week OSP-0007 sits unpublished is a week where "what open format do I use for EU AI Act Article 12 compliance?" gets answered with "there isn't one" — the wrong answer for OSOP.

### Continuing Signals (carried)

- **Microsoft MAF v1.0 + Conductor** — Open Source Summit NA presentation this week. Community vocabulary forming without OSOP. `osop export-maf` bridge unbuilt.
- **A2A v1.2 signed agent cards** — Cryptographic enforcement for `trust_policy:` in OSP-0005.
- **Honeycomb Agent Timeline + Datadog agent tracing** — Proprietary observability filling the gap. `osoplog-otel-mapping.md` is the vendor-neutral answer. Day 12 pending.
- **Temporal durable execution in production** — OpenAI Codex + LangGraph. `osop export-temporal` unbuilt. Temporal community post due today.
- **AWS Strands Agent SOPs** — Third Markdown-first agent workflow format. `osop compile --from-markdown` design doc due (Wed backlog).
- **n8n 150K+ stars** — Largest single ecosystem play not started.
- **Google ADK 1.0 GA (Py/Go/Java/TS)** — Multi-language portable workflow definition opportunity.
- **LangGraph 34% enterprise citation** — Community post due today.

---

## Threats

1. **Arazzo + MCP is becoming the de-facto AI agent workflow narrative in developer content.** Five 2026 articles, all published independently, all reaching the same conclusion: Arazzo + MCP = complete agent infrastructure. OSOP is not in any of them. The counter-narrative ("Arazzo has no execution record; OSOP has no equivalent competition") is ready. It needs to be published — in the four-way comparison doc, in HN comments, in the CFP abstract — today.

2. **Day 42 with zero external actions. 19 days to Day 60. The targets are still mathematically possible but the slope is now vertical.** 200 stars, 5 external PRs, 20 repos, 3 protocol map appearances in 19 days requires starting today, not planning to start today.

3. **AAIF founding stack has three projects, none occupying OSOP's layer.** This is an opportunity, but the window is not infinite. Foundation governance structures fill up. "Workflow definition + execution audit" is the unoccupied seat today. It will not be unoccupied indefinitely.

4. **OSP-0008 `trigger:` window: ~11 days.** Arazzo 1.1 is confirmed. Publishing OSP-0008 before Arazzo 1.1 ships establishes OSOP's scope as distinct from Arazzo's. After Arazzo 1.1, the framing shifts from "OSOP defines agent triggers; Arazzo defines API triggers" to "OSOP responded to Arazzo." Standards positioning requires the first framing.

5. **EU AI Act enforcement: 72 days.** OSP-0007 is the answer to the compliance question enterprises are beginning to ask. Each week it sits as "Draft pending" sends enterprises to proprietary observability vendors instead.

6. **The Week 3 top 3 have not changed in three consecutive weeks.** The bottleneck is execution, not analysis. The brief is not the deliverable. The PR, the submission, the email — those are the deliverables.

---

## Opportunities

### Today (Thursday May 21)

**1. AAIF Submission — Hard Deadline, No Further Slippage (30 min)**

Day 42. Four weeks of "sending today." Today is the hard deadline. The case writes itself from today's research:

> The Agentic AI Foundation's founding stack covers tool connectivity (MCP), agent behavior (AGENTS.md), and one execution engine (goose). No founding project defines a portable workflow format or a portable execution audit record. OSOP fills this gap: `.osop` is the workflow definition; `.osoplog` is the execution record. `.osoplog` is the only open format that maps to EU AI Act Article 12 field-for-field, with enforcement 72 days away. We are submitting OSOP for consideration as the workflow definition + execution audit layer of the AAIF stack.

Send this. Today. It is 30 minutes. Nothing in the backlog changes the case; the case is complete.

**2. HN Submission — Four-Way Comparison Doc, 9am ET (15 min)**

The four-way comparison doc (Arazzo / GitHub Agentic Workflows / Microsoft Conductor / OSOP) should already exist. If the dev.to post was published Wednesday, submit the link to Hacker News at 9am ET today. If dev.to was not published Wednesday, publish it now and submit at the next opportune HN window (Thursday noon ET is the second best slot).

Add the Arazzo execution-record column to the comparison table before publishing. The table should now read:

| Standard | Defines workflow? | Portable execution record? | Governance? | AI agent native? |
|---|---|---|---|---|
| Arazzo 1.0.1 | ✅ API workflows | ❌ None | OpenAPI Initiative / LF | ⚠️ API-centric |
| GitHub Agentic Workflows | ✅ Markdown | ❌ None | GitHub / Microsoft | ✅ |
| Microsoft Conductor | ✅ YAML | ❌ None | MIT, no governance body | ✅ |
| **OSOP** | **✅ Agent + API + CLI + human** | **✅ `.osoplog`** | **Submitting to AAIF** | **✅** |

This table is the strongest single asset in the OSOP content library. Every row's "❌ None" in the execution record column is OSOP's competitive moat stated as fact, not marketing.

**3. LangGraph Community Post — "OAP Runtime + OSOP Definition" (60 min)**

LangGraph's Open Agent Protocol (OAP) defines how agents communicate at runtime. It does not define what a workflow *is* in a portable, schema-validated format — that is OSOP's layer. The framing for the LangGraph Discussions post:

> OAP is the runtime communication protocol between LangGraph nodes. OSOP is the portable workflow definition that lives above the runtime — the format you version-control, share across teams, and use to generate execution audit logs. An OSOP `.osop.yaml` is the source-of-truth your team can read, diff, and validate before a workflow ever touches a LangGraph runtime.

Anchor to the `state_schema:` spec idea (LangGraph-style typed state in OSOP). Show a code example. Non-invasive, add-only framing. No "please adopt OSOP" — just "here is how OSOP and OAP complement each other."

**4. Temporal Community Post — "OSOP as the Human-Readable Definition Above Temporal" (45 min)**

OpenAI Codex and LangGraph both run production workflows on Temporal. Every one of those workflows is defined in code — Python functions, TypeScript classes. None of them has a portable human-readable format that a non-developer can read, audit, or hand to a compliance officer. OSOP fills this gap. The Temporal Community Forum post:

> Temporal is the gold standard for durable, fault-tolerant workflow execution. But every Temporal workflow I've seen is defined entirely in code — which is great for developers but opaque to auditors, product managers, and the EU AI Act Article 12 compliance checklist (enforcement: August 2, 2026). OSOP is an open format for the *definition* that lives above Temporal's execution layer — the human-readable source-of-truth your team can validate, diff, and audit. `osop export-temporal` (currently on the roadmap) converts a `.osop.yaml` to a Temporal workflow scaffold. Does anyone in the Temporal community have opinions on what a portable workflow definition format should look like?

This framing invites community input, doesn't pitch adoption, and opens a conversation that OSOP controls.

**5. SmartBear DevRel Outreach — Arazzo + OSOP Joint Blog (30 min)**

SmartBear publishes Arazzo content and has an 80 million developer tools audience. The outreach angle from today's research is now stronger: SmartBear just published "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP" — and it has zero mention of execution audit records. Email:

> Subject: Joint blog idea — Arazzo workflows inside OSOP agent workflows
>
> Hi [name], I saw SmartBear's recent piece on Arazzo + MCP for AI agent workflows — exactly the right framing for where the ecosystem is going. I'm working on OSOP, an open standard for AI agent workflow *definition* and *execution audit records* (`.osoplog`). Arazzo and OSOP are complementary layers: Arazzo defines the API workflows; OSOP defines the *agent* workflow that calls them, and records what happened. The missing piece in the current Arazzo narrative is the execution record — which is what enterprises, auditors, and EU AI Act Article 12 compliance require. I'd love to co-write a post: "Arazzo + OSOP: the complete workflow standard stack for AI agents in 2026." Would that be interesting to your DevRel team?

**6. Arazzo Counter-Narrative — OSOP's `.osoplog` Moat (15 min, publish today)**

Write one LinkedIn post or short dev.to article today framing the Arazzo/OSOP complementarity. Core message:

> **Every Arazzo workflow your AI agent executes is an `.osoplog` waiting to be born.**
>
> Arazzo 1.0.1 solves a real problem: defining multi-step API workflows in a portable, schema-validated format. By 2026, five major tooling vendors (Redocly, Speakeasy, APIDog, Bruno, Specmatic) support it. Arazzo + MCP is becoming the de-facto infrastructure layer for AI agent API consumption.
>
> Here's what Arazzo doesn't have: an execution record.
>
> When your AI agent runs an Arazzo workflow at 2am and something goes wrong, Arazzo can't tell you what the agent actually called, what it received, or what decision it made at step 3. Your EU AI Act compliance officer will ask. Your CISO will ask. Your incident postmortem will need to know.
>
> OSOP's `.osoplog` format is the portable, OTel-compatible execution record that answers these questions — framework-neutral, governance-ready, readable by any auditor. OSOP's `api` node wraps Arazzo workflows. The agent workflow lives in `.osop.yaml`. What happened lives in `.osoplog`.
>
> Arazzo and OSOP are not competitors. They're the two halves of a complete agent workflow standard stack.

**7. OpenAgents Integration Example (new target — add to backlog)**

OpenAgents is the only framework with native MCP + A2A support simultaneously. An OSOP example showing an OpenAgents workflow defined in `.osop.yaml` — with an `agent` node using `subtype: a2a` and a `runtime.mcp_servers` field — demonstrates OSOP's compatibility with the most forward-compatible framework in the ecosystem. Add to osop-examples backlog. Priority: 🟠 High. Effort: 60 min. Submit this week.

---

## Evolution Ideas

### Spec Improvements

**Arazzo `api` node binding — make the relationship explicit in the schema.**

Arazzo is becoming a standard. OSOP's `api` node type should have an optional `arazzo` subtype binding that allows an Arazzo workflow file to be referenced as the definition of what the `api` node does:

```yaml
- id: "book-trip"
  type: "api"
  subtype: "arazzo"
  name: "Book Travel via Arazzo Workflow"
  runtime:
    arazzo_file: "./travel-booking.arazzo.yaml"
    workflow_id: "book-complete-trip"
    inputs:
      origin: "${inputs.origin}"
      destination: "${inputs.destination}"
```

This makes OSOP formally composable with Arazzo — every Arazzo workflow document becomes a valid OSOP `api` node body. The `.osoplog` then records that this Arazzo workflow was invoked, with timing and outcome. SmartBear's DevRel team would find this proposal concrete enough to publish about. Add to spec backlog as OSP-0011 draft.

**`execution_guarantees:` workflow-level field — Temporal parity.**

Temporal's durable execution model guarantees at-least-once delivery, automatic retries, and crash recovery. OSOP has `timeout_sec` and (proposed) `retry:` on edges, but no workflow-level execution guarantee declaration. Adding `execution_guarantees:` maps OSOP to Temporal's contract:

```yaml
osop_version: "1.1"
id: "critical-pipeline"
execution_guarantees:
  durability: "at-least-once"     # at-least-once | at-most-once | exactly-once
  on_crash: "resume"              # resume | restart | fail
  checkpoint_after_each_node: true
  max_total_duration_sec: 86400
```

This single field makes `osop export-temporal` semantically lossless — a Temporal workflow has every guarantee declared at the OSOP level. It also makes OSOP the portable definition format for any durable execution runtime (Temporal, Prefect, Airflow, Conductor) in a single addition.

**`audit_policy:` on workflow — EU AI Act mapping at the definition level.**

Instead of (or in addition to) OSP-0007's `.osoplog` extension, add `audit_policy:` directly to the `.osop.yaml` workflow definition. This makes compliance *declarative* at authoring time:

```yaml
osop_version: "1.1"
id: "customer-decision-agent"
audit_policy:
  framework: "eu-ai-act-article-12"   # or nist-ai-rmf, iso-42001
  log_inputs: true
  log_outputs: true
  log_reasoning: true
  retention_days: 730                 # Article 12: 2-year minimum for high-risk
  tamper_proof: true
  reviewer_required: true
```

`osop compliance-check --framework eu-ai-act` would validate that `audit_policy:` is present and correctly populated for any workflow that processes personal data. Zero ambiguity for compliance officers — the audit requirements are in the workflow definition itself.

### Tooling Gaps

| Tool | Priority | New Signal | Status |
|------|----------|------------|--------|
| Four-way comparison doc → HN + dev.to | 🔴 Critical | **TODAY — HN 9am ET** | Content draft ready |
| `osop compile --from-markdown` | 🔴 Critical | Wed backlog | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | Honeycomb Agent Timeline | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 72 days; 35M EUR | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph | Not built |
| `osop export-agent-card` (v1.2) | 🔴 Critical | A2A v1.2 signed cards | Not built |
| `osop export-maf` | 🔴 Critical | MAF v1.0 launched | Not built |
| `osop export-conductor` / `import-conductor` | 🔴 Critical | Conductor + MAF launch | Not built |
| `osop validate --log` | 🔴 Critical | `.osoplog` first-class | Not built |
| `osop import-arazzo` | 🟠 High | **NEW — Arazzo AI-agent narrative** | Not built |
| `osop trust-audit` | 🟠 High | OSP-0005 + A2A v1.2 | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ stars | Not built |
| `osop import-strands-sop` | 🟠 High | AWS Strands SOPs | Not built |
| `osop import-agent-spec` | 🟠 High | Oracle WayFlow tutorial | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | 10M+ devs | Not built |

**New: `osop import-arazzo`** — given Arazzo's accelerating ecosystem adoption, a tool that imports an Arazzo workflow file and generates a valid OSOP `api` node definition is both technically straightforward (Arazzo is JSON Schema-based) and strategically important (every Arazzo user becomes a potential OSOP user). Add to tooling backlog at 🟠 High priority.

### Ecosystem Plays

| Target | Action | Effort | Timing |
|--------|--------|--------|--------|
| **AAIF** | Submit application | **30 min** | **TODAY — hard deadline** |
| **Hacker News** | Submit four-way comparison doc | **15 min** | **9am ET TODAY** |
| **LangGraph Discussions** | OAP runtime + OSOP definition post | 60 min | **TODAY (Thursday assignment)** |
| **Temporal Community** | OSOP as portable definition above Temporal | 45 min | **TODAY (Thursday assignment)** |
| **SmartBear DevRel** | Arazzo + OSOP joint blog email | 30 min | **TODAY (Thursday assignment)** |
| **LinkedIn** | Arazzo counter-narrative post | 15 min | **TODAY** |
| **OpenClaw** | SOUL.md companion `.osop.yaml` PR | 45 min | TODAY (if not shipped Wed) |
| **dev.to** | Publish four-way comparison doc | 45 min | TODAY (if not shipped Wed) |
| **CNCF TAG Runtime** | Comment on cncf/toc#1746 | 15 min | TODAY |
| **AGNTCon / MCPCon / AI Eng WF** | CFP abstract submission | 90 min | TODAY (if not shipped Wed) |
| **osop-examples** | OpenAgents + OSOP example (NEW) | 60 min | This week |
| **microsoft/conductor Discussions** | OSOP audit layer for Conductor + MAF | 30 min | Today |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | This week |

---

## Top 3 Actions for Today (Thursday May 21)

### 1. AAIF Submission — Hard Deadline, Nonzero (30 min)

Day 42. This is the last Thursday before Day 60. The AAIF founding stack is confirmed public. The unoccupied seat (workflow definition + execution audit) is now documented in public governance filings. The submission is 30 minutes. The framing from today's research is stronger than any prior version: OSOP fills the gap that MCP, AGENTS.md, and goose explicitly do not occupy, and `.osoplog` is the only open format that addresses EU AI Act Article 12 with 72 days to enforcement. **Send it today. No further deferral.**

### 2. HN Submission + LangGraph + Temporal Posts — Conference of Evidence (2 hrs)

Three Thursday assignments that collectively accomplish the same thing: placing OSOP in the feeds of the developers most likely to adopt it.

- **9am ET: Submit four-way comparison doc to Hacker News.** Add the Arazzo execution-record row before publishing. Title: "Comparing AI agent workflow formats: Arazzo, GitHub Agentic Workflows, Microsoft Conductor, and OSOP."
- **Before noon: LangGraph Discussions post.** "OAP is the runtime protocol; OSOP is the portable definition above it." Include `state_schema:` code example.
- **Before 5pm: Temporal Community post.** "Every production Temporal workflow is OSOP-shaped; here's the format for the definition layer."

These three posts are separate communities, non-overlapping audiences, and each one is the first time OSOP has appeared in that community's field of view.

### 3. SmartBear Email + Arazzo Counter-Narrative (45 min)

The Arazzo-for-AI-agents narrative is accelerating faster than any other single threat in the landscape today. The response is ready. Deploy it in two forms:

- **SmartBear DevRel email** (30 min): Arazzo + OSOP joint blog proposal. SmartBear published the strongest Arazzo-for-agents content this week. They are looking for the next angle. OSOP's `.osoplog` moat is that angle.
- **LinkedIn post** (15 min): "Every Arazzo workflow your AI agent executes is an `.osoplog` waiting to be born." Two paragraphs. No jargon. Tag Arazzo, SmartBear, OpenAPI Initiative.

These two actions together seed the "OSOP completes Arazzo" narrative in the community that is currently forming the "Arazzo completes MCP" narrative. Done today, OSOP appears in the Arazzo conversation before it closes.

---

## Positioning Stack (updated 2026-05-21)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ **97M monthly SDK downloads — mainstream** |
| Agent-to-agent routing | A2A v1.2 | AAIF / Linux Foundation | ✅ 150+ orgs; signed cards; dynamic negotiation |
| Agent behavior spec | AGENTS.md | AAIF / Linux Foundation | ✅ OpenAI founding member |
| Agent execution engine | goose | AAIF / Block | ✅ AAIF founding project |
| UI streaming | AG-UI | CopilotKit | ✅ Oracle + Google alignment |
| Cross-framework runtime comms | LangGraph OAP | LangGraph | ✅ v1.0 GA; 34% enterprise citation |
| API workflow documentation | Arazzo 1.0.1 | OpenAPI Initiative / LF | ✅ **AI-agent narrative accelerating** — 1.1 + AsyncAPI in ~11 days |
| Durable agent execution | Temporal | MIT | ✅ OpenAI Codex + LangGraph production |
| Open agentic engine (Microsoft) | Microsoft Agent Framework v1.0 | MIT | ✅ Launched this week; no execution format |
| YAML multi-agent runner (no audit) | Microsoft Conductor | MIT | ⚠️ OSS NA 2026 presentation this week |
| Agent runtime security | Microsoft Agent Governance Toolkit | MIT | ✅ April 2026; governs permissions, not records |
| Cross-language agent runtime | Google ADK 1.0 | Apache 2.0 | ✅ GA — Py/Go/Java/TS |
| Markdown agent workflow (GitHub) | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview |
| Markdown agent workflow (AWS) | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ Open-sourced |
| Multi-framework native (MCP + A2A) | OpenAgents | Open source | ✅ **NEW target — MCP + A2A native** |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle | ⚠️ Coalition with AG-UI + A2A |
| Agent task/message schema | OSSA | None | ⚠️ Monitor — no institutional backing yet |
| Agent-native observability (proprietary) | Honeycomb Agent Timeline + Datadog | Proprietary | ⚠️ Filling gap; `osoplog-otel-mapping.md` is the answer |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — unstarted |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ Comment on cncf/toc#1746 pending |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 72-day EU AI Act countdown |
| Event-driven workflow invocation | *(gap — Arazzo 1.1 in ~11 days)* | *(gap)* | ⏳ OSP-0008 window closing |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — TODAY* | ⏳ Unoccupied by any governed standard |

---

## Adoption Metrics to Track

| Metric | Day 42 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 → **1 today (OpenClaw if unshipped)** | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog / content views | 0 | 10k | 50k |
| AAIF submission status | **Sending TODAY** | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | 0 → **1+ today** | 3 | 1+ accepted |
| HN submission | **TODAY 9am ET** | 1 post | 3 posts |
| LangGraph community post | **TODAY** | Posted | 5+ replies |
| Temporal community post | **TODAY** | Posted | 5+ replies |
| SmartBear DevRel contact | **TODAY** | Replied | Blog published |
| `osop import-arazzo` design | **NEW — backlog today** | Designed | Built |

---

## Key Links (New Today)

- **SmartBear: Arazzo + MCP for AI agents**: https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo/
- **Nordic APIs: Why AI agents need deterministic API workflows**: https://nordicapis.com/why-ai-agents-need-deterministic-api-workflows/
- **marmelab: Arazzo — the missing piece for AI-assisted API consumption**: https://marmelab.com/blog/2026/02/02/arazzo-a-documentation-helper-for-generating-client-code-using-ai.html
- **Tyk: Arazzo and AI agents starter guide**: https://tyk.io/blog/arazzo-and-ai-agents-your-essential-starter-guide/
- **Jentic: Building reliable API workflows with Arazzo**: https://jentic.com/blog/building-reliable-api-workflows-with-arazzo
- **MCP 97M monthly downloads**: https://www.digitalapplied.com/blog/mcp-97-million-downloads-model-context-protocol-mainstream
- **AAIF / MCP donation by Anthropic**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- **A2A: 150+ orgs, Linux Foundation**: https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- **OpenAgents (MCP + A2A native)**: https://openagents.org/blog/posts/2026-02-23-open-source-ai-agent-frameworks-compared
- **Arazzo Specification — OpenAPI Initiative**: https://www.openapis.org/arazzo-specification
- **Arazzo GitHub**: https://github.com/OAI/Arazzo-Specification
- **MCP 2026 Roadmap**: https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/
- **EU AI Act — 35M EUR fine detail**: https://inkog.io/labs/eu-ai-act-agent-compliance-checklist

---

*Previous brief: [`2026-05-20-daily-brief.md`](./2026-05-20-daily-brief.md)*  
*Today is Thursday — Week 3 Thursday deliverables: AAIF submission (hard deadline), HN 9am ET, LangGraph post, Temporal post, SmartBear email, Arazzo counter-narrative LinkedIn post.*  
*Day 42. 19 days to Day 60. The AAIF submission takes 30 minutes. The HN submission takes 15 minutes. The first community post takes 60 minutes. All three can be done before lunch. None has any blockers.*
