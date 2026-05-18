# OSOP Roadmap

*Updated every Monday. Last update: 2026-05-18 (Week 3).*

---

## This Week: May 18–24, 2026

### Landscape Changes (Week of May 11–17)

- **Microsoft Conductor launched (May 14)** — YAML multi-agent workflow runner, MIT license, Jinja2 routing, deterministic orchestration, no execution log, no governance. Complement, not competitor: OSOP fills the exact audit and governance gap Conductor intentionally omits. Day 4 community engagement window closes today.
- **AWS Strands Agent SOPs open-sourced** — Natural-language, Markdown-based workflow specifications for AI agents. Runs in Strands Agents, Kiro, Cursor, Claude Skills, MCP tools, and direct LLM execution. Third major Markdown-first agent workflow format (joining GitHub Agentic Workflows and general instruction files). Two of three largest cloud providers now independently choose Markdown over YAML for human-authored agent workflows. `osop compile --from-markdown` moves from nice-to-have to structural necessity.
- **GitHub Agentic Workflows: security architecture detailed (InfoQ, May 2026)** — Defense-in-depth architecture for agentic CI/CD: isolation, constrained execution, auditability. Auditability cited as key enterprise requirement — exactly what `.osoplog` provides, platform-neutrally.
- **Oracle Agent Spec + WayFlow tutorial published** — Oracle published developer tutorials using WayFlow as the reference runtime for Agent Spec. Oracle + AG-UI (CopilotKit/Google) + A2A coalition now has a tutorial layer. `osop import-agent-spec` bridge still unwritten.
- **A2A Protocol 1-year milestone: 150+ orgs, 22K+ stars, 5 SDK languages** — AWS, Cisco, Google, IBM, Microsoft, Salesforce, SAP, ServiceNow all supporting. A2A is the settled standard for agent routing. OSOP's adjacent layer (workflow definition + execution audit) remains the unoccupied seat in the AAIF stack.
- **AAIF governance confirmed: Anthropic donated MCP** — Co-founded by Anthropic, Block, OpenAI; supported by Google, Microsoft, AWS, Cloudflare, Bloomberg. MCP is the founding protocol. OSOP's AAIF submission at Day 39 is the gate to the same institutional legitimacy.
- **Arazzo 1.1 planning confirmed: AsyncAPI support** — Event-driven namespace occupancy coming in 2-3 weeks. OSP-0008 `trigger:` RFC must ship before Arazzo 1.1.
- **Temporal confirmed as production durable execution standard** — OpenAI Codex and LangGraph both run production workflows on Temporal. No Temporal workflow has a portable human-readable definition format — OSOP fills this gap. `osop export-temporal` design needed.
- **EU AI Act: 75 days to enforcement** (August 2, 2026) — No open format maps to Article 12 field-for-field except `.osoplog`.
- **HN window: OPEN TODAY** — Four-way comparison doc (Arazzo, GitHub AW, Microsoft Conductor, OSOP) targets Monday 9am ET Hacker News submission. Highest-leverage content marketing action in the backlog.

### Week 2 Top 3 Progress

| Action | Status | Notes |
|--------|--------|-------|
| 1. OpenClaw PR | ⏳ Pending — Day 39 | SOUL.md framing ready. No blockers. Executing today. |
| 2. Three-way / four-way comparison doc | ⏳ Pending — Day 7 | Expanded to four-way (Conductor added). HN window is now. |
| 3. AAIF submission | ⏳ Pending — Day 39 | Conductor launch + AG-UI gap = two hooks confirmed. Sending today. |

**All three Week 2 priorities remain pending.** This is the third consecutive week where the top 3 have not changed. The backlog is not analysis-constrained — all three have ready-to-execute plans. The pattern to break in Week 3: three-action execution on Day 39 (Monday May 18). No new additions to the Week 3 top 3 until at least one of the Day-39 items ships.

### Week 3 Priorities

1. **Execute three converging deadlines today (Monday May 18)** — HN submission (comparison doc, 9am ET); microsoft/conductor Discussions post (final day of window); AAIF submission (Day 39, send today). Total: ~2.5 hours. Together: first content presence, first community engagement, institutional governance.

2. **OSP-0008 `trigger:` RFC + `osoplog-otel-mapping.md` (Tuesday, 5 hrs)** — OSP-0008 preempts Arazzo 1.1's AsyncAPI expansion (2-3 week window). `osoplog-otel-mapping.md` unblocks AG2 PR, Red Hat pitch, OTel blog (9 days blocked, 3:1 unblocking ROI). Both have complete specs in prior briefs.

3. **`osop compile --from-markdown` design doc + OpenClaw PR (Wednesday)** — AWS Strands SOPs confirms Markdown is the human authoring format cloud providers are betting on. Design doc for `.osop.md` intermediate format positions OSOP as the bridge, not a competitor. OpenClaw PR (45 min) triggers external ecosystem presence for the first time.

---

## Cumulative Action Backlog

Items carried across multiple briefs without closure. Ordered by priority.

| Action | Days Pending | Priority | Notes |
|--------|-------------|----------|-------|
| OpenClaw PR | 39 | 🔴 Critical | SOUL.md companion framing ready. Zero blockers. Execute today. |
| AAIF submission | 39 | 🔴 Critical | Conductor launch + AG-UI gap = two hooks. Send today. |
| OSP-0004: A2A agent subtype | 39 | 🔴 Critical | A2A 1-year milestone: 150+ orgs, 5 SDKs. 3 hyperscaler examples needed. |
| Four-way comparison doc → HN | 7 | 🔴 Critical | HN window open NOW. Conductor column is the winning differentiator. |
| OSP-0008: `trigger:` RFC | 2 | 🔴 Critical | Arazzo 1.1 + AsyncAPI in 2-3 weeks. Claim event-driven namespace first. |
| `osoplog-otel-mapping.md` | 9 | 🔴 Critical | Blocks AG2 PR, Red Hat pitch, OTel blog. 3:1 unblocking ROI. |
| microsoft/conductor Discussions | 4 | 🔴 Critical | **Day 4/5 — FINAL EFFECTIVE DAY.** Post today. |
| AGNTCon / MCPCon CFP (NA + EU) | ~14 days to deadline | 🔴 Critical | Abstract this week. |
| OSP-0005: Trust policy | 39 | 🟠 High | Enterprise governance requirement. |
| OSP-0006: `skill_ref` RFC | 15 | 🟠 High | Agent Skills window open. |
| OSP-0007: Compliance Extensions RFC | 4 | 🟠 High | 75-day EU AI Act countdown. |
| AG2 examples PR | 9 | 🟠 High | After `osoplog-otel-mapping.md`. |
| `osop import-agent-spec` proposal | 3 | 🟠 High | Oracle WayFlow tutorial published — coalition deepening. Tuesday. |
| `osop import-strands-sop` proposal | New | 🟠 High | AWS Strands Agent SOPs open-sourced. Tuesday. |
| `osop compile --from-markdown` design doc | New | 🟠 High | Three-signal pattern confirmed. Wednesday. |
| LangGraph bridge doc | 9 | 🟠 High | "OAP is the runtime, OSOP is the definition." |
| AWS Agent Toolkit example | 7 | 🟠 High | May 6 news cycle; still relevant. |
| VoltAgent integration example | 6 | 🟠 High | Community forming. |
| Contact protocol ecosystem map authors | 6 | 🟠 High | 15-min task; permanent discoverability. |
| AI Engineer World's Fair CFP | ~30 days to event | 🟠 High | Abstract drafted. |
| CNCF TAG Runtime comment | 3 | 🟠 High | Post today alongside HN. |
| README audit-trail reframe | 11 | 🟡 Medium | 30-min task. |
| ACP workflow example | 15 | 🟡 Medium | |
| Strands migration example | 15 | 🟡 Medium | |
| Adobe Workfront example | 9 | 🟡 Medium | Workfront MCP June 2026. |
| Red Hat Developer blog pitch | 8 | 🟡 Medium | After `osoplog-otel-mapping.md`. |
| NIST CAISI submission | 12 | 🟡 Medium | Check deadline. |
| Temporal community post | 13 | 🟡 Medium | OpenAI Codex + LangGraph confirmed. |
| SmartBear DevRel outreach | 1 | 🟡 Medium | Thursday email. 80M developer tools audience. |
| n8n ecosystem play | 6 | 🟡 Medium | 150K+ stars. |
| OpenAgents integration example | 6 | 🟡 Medium | |

---

## Near-Term Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| AAIF application submitted | May 7 → **May 18** | ⏳ Overdue — sending today |
| First external PR submitted (OpenClaw) | May 4 → **May 18** | ⏳ Overdue — executing today |
| Four-way comparison doc on Hacker News | **May 18** | ⏳ HN window open now |
| OSP-0004 published | May 10 → **May 22** | ⏳ Overdue |
| `osoplog-otel-mapping.md` published | **May 19** | ⏳ Writing today |
| OSP-0008 (`trigger:`) RFC published | **May 19** | ⏳ Drafting Tuesday |
| `osop compile --from-markdown` design doc | **May 20** | ⏳ New |
| OSP-0005 + OSP-0006 RFCs published | May 22 | ⏳ |
| AGNTCon / MCPCon CFP submitted (NA + EU) | **Jun 1** | ⏳ |
| First GitHub star on osop-spec | Day 30 → **Day 45 (May 25)** | 0 stars |
| First external contributor | Day 60 (Jun 8) | ⏳ |
| OSOP on 3+ protocol ecosystem maps | Jun 8 | ⏳ |

---

## Spec Backlog

| Proposal | Status | Priority | Summary |
|----------|--------|----------|---------|
| OSP-0004: A2A agent subtype | Draft pending | 🔴 Critical | `a2a` subtype + `osop export-agent-card`; A2A v1.0 1-year milestone; ADK, Azure AI Foundry, Bedrock examples |
| OSP-0005: Trust policy | Draft pending | 🔴 Critical | `trust_policy:` on agent nodes; enterprise governance; AAIF requirement |
| OSP-0008: `trigger:` extension | RFC drafting Tuesday | 🔴 Critical | Preempts Arazzo 1.1 + AsyncAPI; webhook, schedule, queue, event, manual trigger types |
| OSP-0006: `skill_ref` | RFC pending | 🟠 High | Link agent nodes to Agent Skills manifests and SOUL.md |
| OSP-0007: Compliance Extensions | RFC pending | 🟠 High | EU AI Act Article 12 field mapping in `.osoplog`; 75-day countdown |
| OSP-0009: `retry:` on edges | Idea | 🟠 High | Production reliability: max_attempts, backoff, on-error conditions |
| OSP-0010: `subworkflow` node type | Idea | 🟠 High | Composition and workflow registry building block |
| `.osop.md` Markdown authoring format | Proposal pending | 🟠 High | **New** — Three-signal confirmation (GitHub, AWS, general); `osop compile --from-markdown` |
| `protocol_bindings:` top-level field | Idea | 🟠 High | Declarative manifest of MCP/A2A/AG-UI/OTel relationships |
| `.osoplog` `ui_events` field | Idea | 🟠 High | AG-UI event log in execution records; no competing standard |
| `state_schema:` at workflow level | Idea | 🟠 High | LangGraph-style typed state; critical for 34% enterprise adoption |
| `max_cost_usd:` on workflow + agent nodes | Idea | 🟠 High | Enterprise cost governance; AWS Bedrock / token budgets |
| `runtime.aws_toolkit` on agent nodes | Idea | 🟠 High | AWS Agent Toolkit binding |
| Jinja2 compatibility note for `when:` | Idea | 🟡 Medium | Enables lossless Conductor ↔ OSOP conversion; 30-min spec clarification |
| `workflow` node type | Idea | 🟡 Medium | First-class sub-workflow invocation (precursor to OSP-0010) |
| Streaming semantics | Idea | 🟡 Medium | `runtime.streaming: true` + `runtime.stream_to` on agent nodes |
| `.osoplog` → OTel export | Idea | 🟡 Medium | `osop log-export --format otel-json` |
| ADL manifest integration | Idea | 🟡 Medium | `runtime.adl_manifest` on agent nodes |

---

## Tooling Backlog

| Tool | Priority | Status | Why Now |
|------|----------|--------|----------|
| `osop compile --from-markdown` | 🔴 Critical | Not built | **Three-signal pattern: GitHub + AWS + general LLM instruction files** |
| `osop validate --log` | 🔴 Critical | Not built | `.osoplog` first-class validation |
| `osop log-export --format otel-json` | 🔴 Critical | Not built | OTel GenAI stable; Datadog native |
| `osop log-export --format cloudtrail` | 🔴 Critical | Not built | AWS MCP GA "auditable" language |
| `osop export-agent-card` | 🔴 Critical | Not built | A2A v1.0 — 150+ orgs, 5 SDK languages |
| `osop export-bedrock` | 🔴 Critical | Not built | SAP MCP GA + Agent Toolkit GA |
| `osop export-azure-ai-foundry` | 🔴 Critical | Not built | Azure AI Foundry A2A native |
| `osop export-conductor` | 🔴 Critical | Not built | Conductor launched May 14 — community forming |
| `osop import-conductor` | 🔴 Critical | Not built | Bidirectional bridge |
| `osop export-temporal` | 🔴 Critical | Not built | OpenAI Codex + LangGraph in production on Temporal |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | Not built | 75-day countdown |
| `osop import-agent-spec` | 🔴 Critical | Not built | Oracle coalition; WayFlow tutorial published |
| `osop import-strands-sop` | 🟠 High | Not built | **New — AWS Strands Agent SOPs open-sourced** |
| `osop protocols` | 🟠 High | Not built | `protocol_bindings:` manifest inspector |
| `osop export-aws-agent-toolkit` | 🟠 High | Not built | AWS Agent Toolkit GA |
| `osop export-voltagent` | 🟠 High | Not built | VoltAgent TypeScript DSL bridge |
| `osop log-export --format siem` | 🟠 High | Not built | Enterprise SIEM (Splunk, Datadog) |
| `osop trust-audit` | 🟠 High | Not built | Enterprise governance; AAIF |
| `osop import-sop` | 🟠 High | Not built | Strands + GitHub markdown → OSOP |
| GitHub Action: validate + log-validate | 🟠 High | Not built | Zero-friction repo-level adoption |
| `osop import-n8n` | 🟠 High | Not built | 150K-star ecosystem |
| `osop import-soul-md` | 🟡 Medium | Not built | OpenClaw 162 SOUL.md templates |
| OSOP Playground (browser) | 🟡 Medium | Not built | Zero-install first experience |
| `osop export-n8n` | 🟡 Medium | Not built | 150K-star ecosystem bridge |
| JetBrains plugin | 🟡 Medium | Not built | Port `osop-vscode`; 10M+ devs |
| SwaggerHub / ReadyAPI plugin | 🟡 Medium | Not built | SmartBear 80M audience |

---

## Positioning Stack

The agentic AI protocol stack has five confirmed layers plus three emerging formats. OSOP's seat is defined by exclusion.

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 10K+ servers, 97M monthly SDK downloads |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 150+ orgs, 22K+ stars, 5 SDKs; 1-year milestone |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Adopted — Oracle + Google + A2A alignment |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v1.0 GA; 34% enterprise citation |
| Agent capabilities | Agent Skills / SOUL.md | OpenClaw ecosystem | ✅ Emerging |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — 1.0.1 stable; 1.1 + AsyncAPI coming |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — native in AG2, Temporal |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ Production — OpenAI Codex, LangGraph |
| YAML multi-agent workflow runner (no audit) | Microsoft Conductor | MIT (no governance) | ⚠️ Day 4 — community forming; OSOP complements |
| Markdown agent workflow runner (GitHub) | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview — signals Markdown > YAML in DX |
| Markdown agent workflow instructions (AWS) | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ **New — third Markdown-first format; OSOP bridge needed** |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle (open source) | ⚠️ Coalition with AG-UI + A2A; OSOP bridge needed |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no standard export; OSOP bridge opportunity |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ CNCF comment needed |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 75-day EU AI Act countdown |
| Event-driven workflow invocation | *(gap — Arazzo 1.1 coming)* | *(gap)* | ⏳ **OSP-0008 needed in 2-3 weeks** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — today* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Targets

| Metric | Day 39 (May 18) | Day 60 (Jun 8) | Day 90 (Jul 8) |
|--------|-----------------|----------------|----------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog/content views | 0 | 10k | 50k |
| AAIF submission status | **Sending today** | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |

---

## Strategic Principles (Reminder)

1. **Solve their problem, OSOP is the side effect** — Never pitch OSOP directly. Add value first.
2. **Spec power + Tooling power + Ecosystem presence** — All three must advance together.
3. **Non-invasive PRs** — Every external contribution must be add-only, standalone, and useful without OSOP.
4. **Think in adoption funnels** — Awareness → Interest → Trial → Adoption → Advocacy.
5. **Be the standard before asking to be the standard** — Presence creates legitimacy.

---

*Daily briefs: [`docs/strategy/`](./strategy/)*
*Week 3 synthesis: see [`2026-05-18-daily-brief.md`](./strategy/2026-05-18-daily-brief.md)*
