# OSOP Roadmap

*Updated every Monday. Last update: 2026-06-01 (Week 5).*

---

## This Week: June 1–7, 2026

### Landscape Changes (Week of May 25–June 1)

- **MCP RC goes stateless** — The MCP 2026 Release Candidate published a stateless protocol core: persistent server-side session state is no longer assumed. Each MCP call is self-contained. MCP Apps (sandboxed HTML iframe UIs for MCP servers) confirmed in RC. Tasks extension (`tasks/get`, `tasks/update`, `tasks/cancel`) enables long-running async agent operations. Final spec: **July 28, 2026 (57 days).** OSP-0013 revised scope: stateless core + task handle lifecycle.
- **Anthropic MCP spec now formally cross-references Arazzo** — Arazzo is the canonical standard for describing multi-step workflows MCP servers expose. This creates the formal stack chain: **MCP → Arazzo → OSOP**. The complement narrative is now anchored in Anthropic's own documentation.
- **Arazzo 1.1 (May 19): AsyncAPI support + MCP steps on Arazzo 1.2 roadmap** — Arazzo now covers both synchronous HTTP and asynchronous event-bus sequences in one document. MCP and A2A step types are confirmed for Arazzo 1.2. OSP-0013 must publish before Arazzo 1.2 ships and locks in the competing MCP node spec.
- **AutoGen officially in maintenance mode** — Microsoft is moving active development to its broader Agent Framework. 100K+ AutoGen users are evaluating alternatives. 2-week window for an OSOP AutoGen migration guide before search results saturate with LangGraph/CrewAI content.
- **Kong building Arazzo-based AI gateway features** — Enterprise infrastructure player standardizing on Arazzo for the API orchestration layer. Confirms OSOP's complement positioning reaches enterprise buyers. Outreach target after Arazzo blog post publishes.
- **jentic.com building Arazzo workflow tooling** — New tooling player in the Arazzo ecosystem. Tier-1 outreach target for the OSOP + Arazzo complement story. Cold email after Arazzo blog post.
- **OpenAgents.org: only A2A + MCP native framework** — Positioning directly against LangGraph/CrewAI/AutoGen. Strongest integration example target OSOP has. OSP-0004 (A2A subtype) and OSP-0013 (MCP annotation) both align. Integration example PR to osop-examples today.
- **Google ADK 1.0 GA** — The three hyperscaler examples for OSP-0004 are now ready: Google ADK, Azure AI Foundry, Amazon Bedrock Agent.
- **OTel confirmed dominant (May 23)** — GenAI Semantic Conventions stable. `osoplog-otel-mapping.md` (23 days pending) is the credential for every enterprise observability conversation.
- **SKILL.md + OSSA in search results** — Two additional "AI agent workflow standard" results now appearing alongside OSOP. Neither addresses workflow graphs, execution records, or compliance. Competitive positioning page needed.
- **IETF draft-sharif-agent-audit-trail-00** — Standards Track. SHA-256 + RFC 8785 tamper-evidence for agent audit records. OSP-0018 aligns. Expires September 29. Author contact overdue.
- **EU AI Act enforcement: 62 days** (August 2, 2026) — OSP-0007 compliance extensions and OSP-0018 tamper-evidence both unbuilt. No governed standard maps Article 12 field-for-field.
- **"Agent-S" arxiv paper (2503.15520)** — Peer-reviewed SOP → agentic workflow translation. Academic validation of OSOP's founding thesis. Citable in manifesto + AAIF submission.
- **A2A v1.2: cryptographic signed Agent Cards** — 150+ organizations in production. Linux Foundation governance. Google ADK 1.0 GA. OSP-0004 must reference v1.2 signed card format + three hyperscaler examples.

### Week 4 Progress (May 25–31)

| Action | Status | Notes |
|--------|--------|-------|
| 1. Execute Monday sprint (HN, AAIF, awesome PRs, OpenClaw, CFP draft) | ⏳ Pending — **Day 53** | Fourth consecutive week of zero external deliverables. |
| 2. Ship osoplog-otel-mapping.md + OSP-0008 + Arazzo complement doc | ⏳ Pending — **23 days overdue** | None of the three shipped. osoplog-otel-mapping.md now four-angle doc (OTel + IETF AAT + Oracle + Arazzo 1.1). |
| 3. Publish OSP-0013 + OSP-0016 + OSP-0004 | ⏳ Pending — **OSP-0013 revised scope** | MCP RC stateless core changes OSP-0013 model. `docs/proposals/` still does not exist. OSP-0004 was targeted for Jun 1. |

**Week 4 closed with zero external deliverables — fourth consecutive week.** Week 5 breaks this pattern.

### Week 5 Priorities (June 1–7)

1. **Break the four-week external drought — today** — AGNTCon/MCPCon CFP (deadline today, morning), HN four-way comparison post (9am ET), SmartBear + IETF Sharif + CNCF TAG Runtime actions (midday, 45 min total), awesome-ai-agents-2026 PRs ×3 (afternoon), OpenAgents integration example PR to osop-examples (evening). Success: CFP + HN + 3 external PRs before midnight.

2. **Create `docs/proposals/` and ship three proposals by Thursday June 4** — OSP-0018 (45 min: tamper-evidence, RFC 8785 alignment), OSP-0008 (2 hr: `trigger:` RFC, CrewAI Flows validated), OSP-0013 revised (2 hr: stateless MCP core + Tasks lifecycle). `docs/proposals/` does not exist at Day 53 — this is the highest credibility gap in the repo.

3. **Publish `osoplog-otel-mapping.md` + Arazzo complement post by Wednesday June 3** — Four-angle `osoplog-otel-mapping.md` (OTel + IETF AAT + Oracle gap + Arazzo 1.1; 23 days pending; unlocks 6+ downstream actions). Arazzo complement blog post on dev.to (MCP → Arazzo → OSOP chain; makes jentic + Kong outreach credible).

---

## Cumulative Action Backlog

Items carried across multiple briefs without closure. Ordered by priority.

| Action | Days Pending | Priority | Notes |
|--------|-------------|----------|-------|
| OpenClaw SOUL.md PR | **53** | 🔴 Critical | 373K+ stars. Standalone value required. |
| AAIF submission | **53** | 🔴 Critical | Confirm sent. MCP + A2A + EU AI Act gap framing. |
| OSP-0004: A2A agent subtype | **53** | 🔴 Critical | Was due Jun 1. A2A v1.2 signed cards. Google ADK + Azure AI Foundry + Bedrock examples. |
| Four-way comparison doc → HN | **21** | 🔴 Critical | Post 9am ET today. Arazzo 1.1 as current baseline. |
| **AGNTCon / MCPCon CFP** | **Deadline today** | 🔴 Critical | Submit this morning. EU AI Act + `.osoplog` audit trail angle. |
| `osoplog-otel-mapping.md` | **23** | 🔴 Critical | Four angles: OTel, IETF AAT, Oracle gap, Arazzo 1.1. Unlocks 6+ downstream actions. |
| OSP-0008: `trigger:` RFC | **16** | 🔴 Critical | CrewAI Flows validates. Arazzo 1.1 event-driven complement. |
| SmartBear DevRel email | **15** | 🔴 Critical | Arazzo 1.1 AsyncAPI + OSOP complement hook. Send today. |
| OSP-0007: Compliance Extensions RFC | **18** | 🔴 Critical | 62-day EU AI Act countdown. Article 12 field mapping. |
| **OSP-0015: Workflow Composition** | **8** | 🔴 Critical | Arazzo `workflowId` step type exists. Sub-workflow `run_id` call trees. |
| **OSP-0018: `.osoplog` tamper-evidence** | **2** | 🔴 Critical | RFC 8785 + SHA-256. 45 min. IETF AAT alignment. Ship this week. |
| **IETF AAT author (Sharif) contact** | **2** | 🔴 Critical | 20 min. Asymmetric leverage — may get OSOP cross-referenced in Standards Track RFC. |
| **"OSOP + Arazzo 1.1" complement post (dev.to)** | **8** | 🔴 Critical | MCP → Arazzo → OSOP chain. Kong + jentic outreach unlock. |
| **awesome-ai-agents-2026 PRs ×3** | **7** | 🟠 High | Zijian-Ni, caramaschiHG, ARUNAGIRINATHAN-K. 30 min. Today. |
| **OSP-0016: MCP Apps `human` subtype** | **7** | 🟠 High | MCP Apps RC confirmed. First-mover before July 28 final spec. |
| **OSP-0013: MCP transport annotation (revised)** | **7** | 🟠 High | Revised scope: stateless core + task handle lifecycle (`inline`/`poll`/`cancel`). 57-day deadline. |
| **OSP-0017: Cost governance fields** | **7** | 🟠 High | `max_cost_usd:`, `budget_overflow_action: pause_for_approval`. Durable agent context. |
| **OpenAgents integration example** | **0 (new today)** | 🟠 High | Only A2A + MCP native framework. PR to osop-examples today. |
| **AutoGen migration guide** | **2** | 🟠 High | 100K+ users in maintenance-mode migration. 2-week window. |
| **jentic.com outreach** | **0 (new today)** | 🟠 High | Arazzo workflow tooling builder. Cold email after Arazzo post. |
| OSP-0005: Trust policy | **53** | 🟠 High | Enterprise governance; AAIF prereq. |
| OSP-0006: `skill_ref` RFC | **28** | 🟠 High | Agent Skills window open. |
| AG2 examples PR | **23** | 🟠 High | After `osoplog-otel-mapping.md`. |
| `osop import-agent-spec` proposal | **16** | 🟠 High | Oracle WayFlow coalition. |
| `osop import-strands-sop` proposal | **14** | 🟠 High | AWS Strands Agent SOPs. |
| `osop compile --from-markdown` design doc | **14** | 🟠 High | Three-signal confirmation (GitHub + AWS + general). |
| LangGraph bridge doc | **23** | 🟠 High | Reference v0.4 (not v1.0 GA). |
| AWS Agent Toolkit example | **20** | 🟠 High | |
| VoltAgent integration example | **19** | 🟠 High | |
| Contact protocol ecosystem map authors | **19** | 🟠 High | DigitalApplied, StackOne, AI Agents Directory. |
| AI Engineer World's Fair CFP | **~27 days to event** | 🟠 High | Abstract drafted. |
| CNCF TAG Runtime comment | **15** | 🟠 High | cncf/toc#1746. 10 min. Today. |
| README audit-trail reframe | **24** | 🟡 Medium | 30-min task. |
| ACP workflow example | **28** | 🟡 Medium | |
| Adobe Workfront example | **22** | 🟡 Medium | Workfront MCP June 2026. |
| Red Hat Developer blog pitch | **21** | 🟡 Medium | After `osoplog-otel-mapping.md`. |
| NIST CAISI submission | **25** | 🟡 Medium | Check deadline. |
| Temporal community post | **27** | 🟡 Medium | OpenAI Codex + LangGraph v0.4 confirmed. |
| n8n ecosystem play | **19** | 🟡 Medium | 150K+ stars. |
| LangGraph community post (v0.4) | **22** | 🟡 Medium | Reference v0.4 explicitly. |
| SKILL.md/OSSA competitive positioning page | **2** | 🟡 Medium | Both in search results. |
| **Kong AI gateway outreach** | **0 (new today)** | 🟡 Medium | After Arazzo blog post. DevRel or blog pitch. |

---

## Near-Term Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| AGNTCon/MCPCon CFP submitted | **Jun 1 (today)** | 🔴 Submit this morning |
| Four-way comparison doc on HN | **Jun 1 (today)** | 🔴 9am ET today |
| awesome-ai-agents-2026 PRs ×3 | **Jun 1 (today)** | 🔴 Today |
| OpenAgents integration example PR | **Jun 1 (today)** | 🆕 Today |
| `docs/proposals/` created | **Jun 1 (today)** | 🔴 Overdue |
| OSP-0018: tamper-evidence published | **Jun 3** | ⏳ This week |
| OSP-0008: `trigger:` RFC published | **Jun 3** | ⏳ This week |
| `osoplog-otel-mapping.md` published | **Jun 3** | ⏳ 23 days overdue |
| Arazzo complement blog post (dev.to) | **Jun 3** | ⏳ 8 days overdue |
| OSP-0013 (revised): MCP stateless | **Jun 4** | ⏳ 57-day deadline |
| OSP-0015: Workflow Composition | **Jun 4** | ⏳ |
| OSP-0016: MCP Apps `human` subtype | **Jun 5** | ⏳ Before Jul 28 final spec |
| OSP-0004: A2A agent subtype | **Jun 6** | 🔴 Was due Jun 1 |
| OSP-0005 + OSP-0006 | **Jun 6** | ⏳ |
| AutoGen migration guide published | **Jun 7** | ⏳ 2-week window |
| AAIF submission confirmed | **Jun 8** | ⏳ Confirm today |
| First external PR merged | **Jun 8** | ⏳ 0 merged |
| First GitHub star on osop-spec | **Jun 8** | 0 stars |
| OSOP on 3+ protocol ecosystem maps | **Jun 8** | ⏳ 3 submissions today |
| EU AI Act enforcement | **Aug 2** | ⏳ **62 days** |
| MCP final spec published | **Jul 28** | ⏳ **57 days** |

---

## Spec Backlog

| Proposal | Status | Priority | Summary |
|----------|--------|----------|---------|
| OSP-0004: A2A agent subtype | Draft pending | 🔴 Critical | `a2a` subtype + `osop export-agent-card`; A2A v1.2 JWS/JCS signed cards; Google ADK + Azure AI Foundry + Bedrock examples |
| OSP-0005: Trust policy | Draft pending | 🔴 Critical | `trust_policy:` on agent nodes; enterprise governance; AAIF requirement |
| OSP-0007: Compliance Extensions | RFC pending | 🔴 Critical | EU AI Act Article 12 field mapping in `.osoplog`; 62-day countdown; NIST AI RMF 1.1 + IETF AAT |
| OSP-0008: `trigger:` extension | RFC this week | 🔴 Critical | CrewAI Flows validated; webhook, schedule, queue, event, manual trigger types |
| OSP-0015: Workflow Composition | RFC this week | 🔴 Critical | Arazzo `api` subtype calling Arazzo sub-workflows; OSOP `agent` subtype calling OSOP sub-workflows; linked `.osoplog` call trees via `run_id` |
| **OSP-0013: MCP transport annotation (revised)** | **RC this week** | **🔴 Critical** | **Stateless protocol core (no persistent session); `task_lifecycle: inline / poll / cancel`; task handle in `.osoplog`; 57-day deadline** |
| **OSP-0018: `.osoplog` tamper-evidence** | **RFC this week** | **🔴 Critical** | **SHA-256 + RFC 8785 (JCS) canonical hash; `log_hash:` field; IETF AAT draft alignment** |
| **OSP-0016: MCP Apps `human` subtype** | **RFC this week** | **🟠 High** | **`mcp-app` subtype; declares MCP server + tool; `.osoplog` records `mcp_call` within human node** |
| **OSP-0017: Cost governance** | **Proposal** | **🟠 High** | **`cost_governance:` top-level; `max_cost_usd:`, `budget_overflow_action: pause_for_approval`** |
| OSP-0006: `skill_ref` | RFC pending | 🟠 High | Link agent nodes to Agent Skills manifests and SOUL.md |
| OSP-0009: `retry:` on edges | Idea | 🟠 High | Production reliability: max_attempts, backoff, on-error; maps to Temporal retry policies |
| `.osop.md` Markdown authoring format | Proposal pending | 🟠 High | Three-signal confirmation (GitHub + AWS + general); `osop compile --from-markdown` |
| `state_schema:` at workflow level | Idea | 🟠 High | LangGraph v0.4-style typed state; critical for 34% enterprise adoption |
| `agent_def_url:` on `agent` nodes | 15-min change | 🟠 High | Link to Oracle agent-spec, SKILL.md, A2A Agent Cards, Google ADK. Makes OSOP the orchestration layer for every agent-definition standard. |
| Streaming semantics | Idea | 🟡 Medium | `runtime.streaming: true` + `runtime.stream_to`; OpenAI WebSockets validates |
| `protocol_bindings:` top-level field | Idea | 🟠 High | Declarative manifest of MCP/A2A/AG-UI/OTel relationships |
| `.osoplog` `ui_events` field | Idea | 🟠 High | AG-UI event log in execution records |
| `runtime.aws_toolkit` on agent nodes | Idea | 🟠 High | AWS Agent Toolkit binding |
| Jinja2 compatibility note for `when:` | Idea | 🟡 Medium | Enables lossless Conductor ↔ OSOP conversion; 30-min spec clarification |
| `.osoplog` → OTel export | See tooling | 🔴 Critical | `osop log-export --format otel-json`; OTel confirmed dominant |
| `.osoplog` → IETF AAT export | See tooling | 🔴 Critical | `osop log-export --format ietf-aat`; expires September 29 |
| `workflow_registry:` self-description field (OSP-0014) | Idea | 🟡 Medium | `canonical_url`, `published_at`, `maintainer` — registry prerequisite |

---

## Tooling Backlog

| Tool | Priority | Status | Why Now |
|------|----------|--------|---------|
| `osop compile --from-markdown` | 🔴 Critical | Not built | Three-signal: GitHub + AWS + general LLM instruction files |
| `osop validate --log` | 🔴 Critical | Not built | `.osoplog` first-class validation |
| `osop log-export --format otel-json` | 🔴 Critical | Not built | OTel confirmed dominant; GenAI conventions stable |
| `osop log-export --format ietf-aat` | 🔴 Critical | Not built | IETF AAT Standards Track; expires September 29 |
| `osop log-export --format cloudtrail` | 🔴 Critical | Not built | AWS auditable language |
| `osop export-agent-card` | 🔴 Critical | Not built | A2A v1.2 — JWS/JCS signed cards; 150+ orgs |
| `osop export-bedrock` | 🔴 Critical | Not built | SAP MCP GA + Agent Toolkit GA |
| `osop export-azure-ai-foundry` | 🔴 Critical | Not built | Azure AI Foundry A2A native |
| `osop export-conductor` | 🔴 Critical | Not built | Conductor launched May 14 |
| `osop import-conductor` | 🔴 Critical | Not built | Bidirectional bridge |
| `osop export-temporal` | 🔴 Critical | Not built | OpenAI Codex + LangGraph v0.4 in production on Temporal |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | Not built | 62-day countdown |
| `osop compliance-check --framework ietf-aat` | 🔴 Critical | Not built | IETF AAT draft alignment |
| `osop import-agent-spec` | 🔴 Critical | Not built | Oracle coalition |
| `osop import-strands-sop` | 🟠 High | Not built | AWS Strands Agent SOPs |
| `osop import-autogen` | 🟠 **New** | Not built | 100K+ users in maintenance-mode migration |
| `osop protocols` | 🟠 High | Not built | `protocol_bindings:` manifest inspector |
| `osop export-aws-agent-toolkit` | 🟠 High | Not built | AWS Agent Toolkit GA |
| `osop export-voltagent` | 🟠 High | Not built | VoltAgent TypeScript DSL bridge |
| `osop log-export --format siem` | 🟠 High | Not built | Enterprise SIEM (Splunk, Datadog) |
| `osop trust-audit` | 🟠 High | Not built | Enterprise governance; AAIF |
| `osop import-sop` | 🟠 High | Not built | Strands + GitHub markdown → OSOP |
| GitHub Action: validate + log-validate | 🟠 High | Not built | Zero-friction repo-level adoption |
| `osop import-n8n` | 🟠 High | Not built | 150K-star ecosystem; 9,752 community workflows |
| **awesome-ai-agents-2026 repo PRs ×3** | **🟠 High** | **Submit today** | Zijian-Ni, caramaschiHG, ARUNAGIRINATHAN-K |
| `osop import-soul-md` | 🟡 Medium | Not built | OpenClaw 373K+ stars |
| OSOP Playground (browser) | 🟡 Medium | Not built | Zero-install first experience; fastest path to 100 stars |
| `osop export-n8n` | 🟡 Medium | Not built | 150K-star ecosystem bridge |
| JetBrains plugin | 🟡 Medium | Not built | Port `osop-vscode`; 10M+ devs |
| SwaggerHub / ReadyAPI plugin | 🟡 Medium | Not built | SmartBear 80M audience |

---

## Positioning Stack

The agentic AI protocol stack has six confirmed layers plus several emerging formats. OSOP's seat is defined by exclusion.

| Layer | Standard | Governance | Status |
|-------|----------|------------| -------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 97M monthly SDK downloads; 5,800+ servers; **July 28 RC: stateless core + MCP Apps + Tasks** |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 150+ orgs; v1.2 cryptographic signed Agent Cards; **Google ADK 1.0 GA** |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Adopted — Oracle + Google + A2A alignment |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v0.4 (April 2026); typed state + human-in-the-loop checkpoints |
| Agent capabilities | Agent Skills / SOUL.md | OpenClaw ecosystem | ✅ Emerging — **373K+ stars** |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — **1.1 (May 19)**: AsyncAPI + actor-in-loop + MCP steps (Arazzo 1.2 roadmap); **MCP spec cross-references Arazzo** |
| Span-level observability | OTel GenAI | CNCF | ✅ Dominant — confirmed May 23; GenAI conventions stable |
| Agent audit records (flat) | IETF AAT | IETF | ⚠️ Standards Track — `draft-sharif-agent-audit-trail-00`; expires Sept 29; OSOP is workflow-aware superset |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ Production — OpenAI Codex, LangGraph v0.4, Replit Agent 3 |
| YAML multi-agent workflow runner | Microsoft Conductor | MIT (no governance) | ⚠️ Live — community forming; no audit trail; OSOP complements |
| Markdown agent workflow runner | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview — third Markdown-first signal |
| Markdown agent workflow instructions | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ Live — `osop compile --from-markdown` needed |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle (open source) | ⚠️ Coalition with AG-UI + A2A; `osop import-agent-spec` bridge needed |
| Agent skill definitions (Markdown) | SKILL.md | agensi.io | ⚠️ **In search results** — lightweight, no workflow graph or execution record |
| Unified task schema (no workflow graph) | OSSA | Open (Thomas Scola) | ⚠️ **In search results** — no execution log or compliance support |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no standard export |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ CNCF TAG Runtime comment needed today |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ **62-day EU AI Act countdown** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — confirm today* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Targets

| Metric | Day 53 (Jun 1) | Day 60 (Jun 8) | Day 90 (Jul 8) |
|--------|----------------|----------------|----------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | ~1 | 500 | 2,000 |
| External PRs submitted | 0 → **4 today** | 5+ | 15 |
| External PRs merged | 0 | 5 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 → **3 today** | 5 | 8 |
| `docs/proposals/` exists | **No** | **Yes — 3+ proposals** | Yes — 8+ |
| OSP proposals published | 0 → **3 by Thu** | 3+ | 8+ |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog/content views | 0 | 10k | 50k |
| AAIF submission status | Unconfirmed | In review | Accepted |
| CFP submissions | 0 → **1 today** | 3 | 1+ accepted |
| EU AI Act countdown | **62 days** | 55 days | **0 (Aug 2)** |
| MCP RC countdown | **57 days** | 50 days | 18 days |

---

## Strategic Principles (Reminder)

1. **Solve their problem, OSOP is the side effect** — Never pitch OSOP directly. Add value first.
2. **Spec power + Tooling power + Ecosystem presence** — All three must advance together.
3. **Non-invasive PRs** — Every external contribution must be add-only, standalone, and useful without OSOP.
4. **Think in adoption funnels** — Awareness → Interest → Trial → Adoption → Advocacy.
5. **Be the standard before asking to be the standard** — Presence creates legitimacy.

---

*Daily briefs: [`docs/strategy/`](./strategy/)*  
*Week 5 synthesis: see [`2026-06-01-daily-brief.md`](./strategy/2026-06-01-daily-brief.md)*
