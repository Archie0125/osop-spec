# OSOP Roadmap

*Updated every Monday. Last update: 2026-05-25 (Week 4).*

---

## This Week: May 25–31, 2026

### Landscape Changes (Week of May 18–24)

- **Arazzo 1.1 shipped May 19** — AsyncAPI support, actor-in-loop on roadmap, MCP step types planned for 1.2. The response window is 6 days old and OSOP has published nothing. Complement doc and OSP-0008 (revised) ship this week.
- **MCP July 28 Release Candidate published** — Stateless protocol core, Extensions framework, Tasks, MCP Apps (sandboxed HTML iframe UIs). Final spec July 28, 64 days. MCP Apps directly enables OSOP `human` node `mcp-app` subtype (OSP-0016, new this week).
- **OTel confirmed as dominant observability standard (May 23)** — "Distributed tracing replaced logs and OpenTelemetry won." All major AI frameworks ship OTel auto-instrumentation. GenAI Semantic Conventions SIG has defined attribute schemas for LLM calls, agent invocations, and tool executions. `osoplog-otel-mapping.md` is OSOP's credential for enterprise observability conversations and has been pending 16 days.
- **OpenClaw surged to 210,000+ GitHub stars** — #1 trending AI agent project. SOUL.md PR (pending 46 days) now targets a tier-1 repo. Standalone value required; OSOP must be incidental, not the pitch.
- **A2A v1.2: cryptographic signed Agent Cards** — Domain verification via cryptographic signatures. OSP-0004 must reference v1.2 signed card format.
- **Temporal + OpenAI Agents SDK GA confirmed (March 23)** — OpenAI Codex, LangGraph v0.4, Replit Agent 3 all run production workflows on Temporal. Temporal community post 20 days overdue.
- **LangGraph v0.4 (April 2026) confirmed** — Improved state persistence, human-in-the-loop checkpoints. Any reference to "LangGraph v1.0 GA" in OSOP docs must be corrected to v0.4.
- **MCP 97M monthly SDK downloads** — 500+ public servers; Anthropic + OpenAI + Google DeepMind supporting. MCP is infrastructure.
- **"awesome-ai-agents-2026" curated repos (×3)** — Three high-star discoverability repos (Zijian-Ni, caramaschiHG, ARUNAGIRINATHAN-K) not listing OSOP. 30-min fix, today.
- **EU AI Act enforcement: 68 days** (August 2, 2026) — OSP-0007 compliance extensions still pending. No other governed standard maps to Article 12 field-for-field.

### Week 3 Top 3 Progress

| Action | Status | Notes |
|--------|--------|-------|
| 1. Monday May 18 sprint (HN, AAIF, OpenClaw PR) | ⏳ Pending — **Day 46** | No external deliverables shipped in Week 3. Monday May 25 sprint is the rescheduled execution day. |
| 2. OSP-0008 `trigger:` RFC + `osoplog-otel-mapping.md` | ⏳ Pending — **9 and 16 days overdue** | Arazzo 1.1 shipped May 19 — OSP-0008 preamble reframe required. Both prepared but unpublished. |
| 3. `osop compile --from-markdown` design doc + OpenClaw PR | ⏳ Pending — **Day 46** | OpenClaw PR still pending; target repo now 210K+ stars. Design doc not started. |

**Week 3 closed with zero external deliverables for the third consecutive week.** All three priorities remain unchanged. Week 4 breaks this pattern with full execution today (Day 46).

### Week 4 Priorities (May 25–31)

1. **Execute the Monday execution sprint — all five items today (May 25)** — HN post (9am ET), AAIF submission (9:30am), SmartBear email (10am), OpenClaw SOUL.md PR (11am), awesome-ai-agents-2026 PRs (afternoon). Success criterion: at least HN + AAIF + one external PR by end of today.

2. **Ship the three overdue writing deliverables (Tuesday–Wednesday)** — `osoplog-otel-mapping.md` (16 days pending, unblocks AG2 PR + Red Hat pitch + OTel blog), "OSOP + Arazzo 1.1" complement doc (publishes today), OSP-0008 revised RFC (Tuesday). Combined: ~5–6 hours. Combined unblocking ROI: 6+ downstream actions.

3. **Publish OSP-0015 (Workflow Composition) + OSP-0016 (MCP Apps `human` subtype) + OSP-0013 transport preview (Tuesday–Thursday)** — Three proposals that preempt competitive threats. OSP-0015 defines the Arazzo/OSOP composition point. OSP-0016 defines MCP Apps human-in-the-loop before any competitor specifies this pattern. OSP-0013 transport annotation is ready before July 28 MCP final spec.

---

## Cumulative Action Backlog

Items carried across multiple briefs without closure. Ordered by priority.

| Action | Days Pending | Priority | Notes |
|--------|-------------|----------|-------|
| OpenClaw SOUL.md PR | **46** | 🔴 Critical | 210K+ stars. Standalone value required. Execute today. |
| AAIF submission | **46** | 🔴 Critical | MCP + A2A + EU AI Act gap framing. Send 9:30am today. |
| OSP-0004: A2A agent subtype | **46** | 🔴 Critical | Update for A2A v1.2 signed cards. 3 hyperscaler examples needed. |
| Four-way comparison doc → HN | **14** | 🔴 Critical | Arazzo 1.1 as current baseline. **HN 9am ET today.** |
| OSP-0008: `trigger:` RFC (revised) | **9** | 🔴 Critical | Arazzo 1.1 live — response framing, not anticipation. Tuesday. |
| `osoplog-otel-mapping.md` | **16** | 🔴 Critical | OTel confirmed dominant. Unblocks AG2 PR, Red Hat, OTel blog. Today/tomorrow. |
| SmartBear DevRel email | **8** | 🔴 Critical | "Arazzo 1.1 sequel" hook. Send 10am today. |
| OSP-0007: Compliance Extensions RFC | **11** | 🔴 Critical | 68-day EU AI Act countdown. |
| AGNTCon / MCPCon CFP abstract | ~8 days to deadline | 🔴 Critical | Draft today, submit this week. |
| **"OSOP + Arazzo 1.1" complement doc** | **1** | 🔴 Critical | Publish dev.to today. |
| **OSP-0015: Workflow Composition** | **1** | 🔴 Critical | Arazzo `workflowId` step type exists. Tuesday. |
| **awesome-ai-agents-2026 PRs (×3)** | **0** | 🟠 High | **New — 30 min, 3 repos, today afternoon.** |
| **OSP-0016: MCP Apps `human` subtype** | **0** | 🟠 High | **New — MCP Apps RC. Wednesday.** |
| **OSP-0013: Transport annotation preview** | **0** | 🟠 High | **New — MCP stateless RC, 64 days. This week.** |
| **OSP-0017: Cost governance fields** | **0** | 🟠 High | **New — durable agents running "days." This week.** |
| OSP-0005: Trust policy | **46** | 🟠 High | Enterprise governance; AAIF prereq. |
| OSP-0006: `skill_ref` RFC | **21** | 🟠 High | Agent Skills window. |
| AG2 examples PR | **16** | 🟠 High | After `osoplog-otel-mapping.md`. |
| `osop import-agent-spec` proposal | **9** | 🟠 High | Oracle WayFlow coalition. |
| `osop import-strands-sop` proposal | **7** | 🟠 High | AWS Strands Agent SOPs (Markdown-first). |
| `osop compile --from-markdown` design doc | **7** | 🟠 High | Three-signal confirmation (GitHub, AWS, general LLM). |
| LangGraph bridge doc | **16** | 🟠 High | Reference v0.4 (not v1.0 GA). |
| AWS Agent Toolkit example | **13** | 🟠 High | May 6 news cycle. |
| VoltAgent integration example | **12** | 🟠 High | Community forming. |
| Contact protocol ecosystem map authors | **12** | 🟠 High | DigitalApplied, StackOne, AI Agents Directory — today. |
| AI Engineer World's Fair CFP | ~30 days to event | 🟠 High | Abstract drafted. |
| CNCF TAG Runtime comment | **10** | 🟠 High | cncf/toc#1746. Today. |
| README audit-trail reframe | **17** | 🟡 Medium | 30-min task. |
| ACP workflow example | **21** | 🟡 Medium | |
| Adobe Workfront example | **15** | 🟡 Medium | Workfront MCP June 2026. |
| Red Hat Developer blog pitch | **14** | 🟡 Medium | After `osoplog-otel-mapping.md`. |
| NIST CAISI submission | **18** | 🟡 Medium | Check deadline. |
| Temporal community post | **20** | 🟡 Medium | OpenAI Codex + LangGraph v0.4 GA confirmed. Draft today. |
| n8n ecosystem play | **12** | 🟡 Medium | 150K+ stars. |
| OpenAgents integration example | **12** | 🟡 Medium | A2A + MCP native framework. |
| LangGraph community post (v0.4) | **15** | 🟡 Medium | Reference v0.4 explicitly — not v1.0 GA. |

---

## Near-Term Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| AAIF application submitted | May 7 → **May 25** | ⏳ Overdue — sending today (9:30am) |
| First external PR submitted (OpenClaw) | May 4 → **May 25** | ⏳ Overdue — executing today (11am) |
| awesome-ai-agents-2026 PRs (×3) | **May 25** | 🆕 New — submitting today |
| Four-way comparison doc on Hacker News | May 18 → **May 25** | ⏳ Overdue — 9am ET today |
| "OSOP + Arazzo 1.1" complement doc (dev.to) | May 24 → **May 25** | ⏳ Publishing today |
| `osoplog-otel-mapping.md` published | May 19 → **May 26** | ⏳ Writing today/tomorrow |
| OSP-0008 (`trigger:`) RFC published (revised) | May 19 → **May 27** | ⏳ Tuesday |
| OSP-0015: Workflow Composition RFC | **May 27** | 🆕 New — Tuesday |
| OSP-0016: MCP Apps `human` subtype RFC | **May 28** | 🆕 New — Wednesday |
| OSP-0013: Transport annotation preview | **May 29** | 🆕 New — Thursday |
| OSP-0004 published | May 10 → **Jun 1** | ⏳ Overdue |
| `osop compile --from-markdown` design doc | May 20 → **May 28** | ⏳ |
| OSP-0005 + OSP-0006 RFCs published | May 22 → **May 29** | ⏳ |
| AGNTCon / MCPCon CFP submitted | **Jun 1** | ⏳ Draft this week |
| First GitHub star on osop-spec | Day 30 → **Day 60 (Jun 8)** | 0 stars |
| First external contributor | Day 60 (Jun 8) | ⏳ |
| OSOP on 3+ protocol ecosystem maps | Jun 8 | ⏳ Today (3 submissions) |

---

## Spec Backlog

| Proposal | Status | Priority | Summary |
|----------|--------|----------|---------|
| OSP-0004: A2A agent subtype | Draft pending | 🔴 Critical | `a2a` subtype + `osop export-agent-card`; A2A v1.2 signed cards; ADK, Azure AI Foundry, Bedrock examples |
| OSP-0005: Trust policy | Draft pending | 🔴 Critical | `trust_policy:` on agent nodes; enterprise governance; AAIF requirement |
| OSP-0008: `trigger:` extension (revised) | RFC drafting Tuesday | 🔴 Critical | Arazzo 1.1 live — response framing; webhook, schedule, queue, event, manual trigger types |
| OSP-0006: `skill_ref` | RFC pending | 🟠 High | Link agent nodes to Agent Skills manifests and SOUL.md |
| OSP-0007: Compliance Extensions | RFC pending | 🟠 High | EU AI Act Article 12 field mapping in `.osoplog`; 68-day countdown |
| **OSP-0013: MCP transport annotation** | **Preview draft** | **🟠 High** | **New — backward-compat `transport` field on tool declarations; `stdio` default; `stateless-http` for MCP 2026-07-28** |
| **OSP-0015: Workflow Composition** | **RFC drafting Tuesday** | **🔴 Critical** | **Arazzo `api` subtype calling Arazzo sub-workflows; OSOP `agent` subtype calling OSOP sub-workflows; linked `.osoplog` call trees via `run_id`** |
| **OSP-0016: MCP Apps `human` subtype** | **RFC drafting Wednesday** | **🟠 High** | **New — MCP Apps RC; `mcp-app` subtype declares MCP server + tool; `.osoplog` records interaction as `mcp_call` within human node record** |
| **OSP-0017: Cost governance** | **Proposal** | **🟠 High** | **New — `cost_governance:` top-level field; `max_cost_usd:`, `budget_overflow_action: pause_for_approval` creates system-generated `human` node** |
| OSP-0009: `retry:` on edges | Idea | 🟠 High | Production reliability: max_attempts, backoff, on-error conditions |
| OSP-0010: `subworkflow` node type | Superseded by OSP-0015 | 🟡 Medium | See OSP-0015 for composition |
| `.osop.md` Markdown authoring format | Proposal pending | 🟠 High | Three-signal confirmation (GitHub, AWS, general); `osop compile --from-markdown` |
| `protocol_bindings:` top-level field | Idea | 🟠 High | Declarative manifest of MCP/A2A/AG-UI/OTel relationships |
| `.osoplog` `ui_events` field | Idea | 🟠 High | AG-UI event log in execution records; no competing standard |
| `state_schema:` at workflow level | Idea | 🟠 High | LangGraph v0.4-style typed state; critical for 34% enterprise adoption |
| `runtime.aws_toolkit` on agent nodes | Idea | 🟠 High | AWS Agent Toolkit binding |
| Jinja2 compatibility note for `when:` | Idea | 🟡 Medium | Enables lossless Conductor ↔ OSOP conversion; 30-min spec clarification |
| Streaming semantics | Idea | 🟡 Medium | `runtime.streaming: true` + `runtime.stream_to` on agent nodes |
| `.osoplog` → OTel export | See tooling | 🔴 Critical | `osop log-export --format otel-json`; OTel confirmed dominant |
| ADL manifest integration | Idea | 🟡 Medium | `runtime.adl_manifest` on agent nodes |
| `workflow_registry:` self-description field (OSP-0014) | Idea | 🟡 Medium | `canonical_url`, `published_at`, `maintainer` — registry prerequisite |

---

## Tooling Backlog

| Tool | Priority | Status | Why Now |
|------|----------|--------|---------|
| `osop compile --from-markdown` | 🔴 Critical | Not built | **Three-signal pattern: GitHub + AWS + general LLM instruction files** |
| `osop validate --log` | 🔴 Critical | Not built | `.osoplog` first-class validation |
| `osop log-export --format otel-json` | 🔴 Critical | Not built | **OTel confirmed dominant (May 23); GenAI conventions stable** |
| `osop log-export --format cloudtrail` | 🔴 Critical | Not built | AWS MCP GA "auditable" language |
| `osop export-agent-card` | 🔴 Critical | Not built | A2A v1.2 — 150+ orgs, cryptographic signed cards |
| `osop export-bedrock` | 🔴 Critical | Not built | SAP MCP GA + Agent Toolkit GA |
| `osop export-azure-ai-foundry` | 🔴 Critical | Not built | Azure AI Foundry A2A native |
| `osop export-conductor` | 🔴 Critical | Not built | Conductor launched May 14 — community forming |
| `osop import-conductor` | 🔴 Critical | Not built | Bidirectional bridge |
| `osop export-temporal` | 🔴 Critical | Not built | **OpenAI Codex + LangGraph v0.4 in production on Temporal; GA confirmed** |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | Not built | 68-day countdown |
| `osop import-agent-spec` | 🔴 Critical | Not built | Oracle coalition; WayFlow tutorial published |
| `osop import-strands-sop` | 🟠 High | Not built | AWS Strands Agent SOPs open-sourced |
| `osop protocols` | 🟠 High | Not built | `protocol_bindings:` manifest inspector |
| `osop export-aws-agent-toolkit` | 🟠 High | Not built | AWS Agent Toolkit GA |
| `osop export-voltagent` | 🟠 High | Not built | VoltAgent TypeScript DSL bridge |
| `osop log-export --format siem` | 🟠 High | Not built | Enterprise SIEM (Splunk, Datadog) |
| `osop trust-audit` | 🟠 High | Not built | Enterprise governance; AAIF |
| `osop import-sop` | 🟠 High | Not built | Strands + GitHub markdown → OSOP |
| GitHub Action: validate + log-validate | 🟠 High | Not built | Zero-friction repo-level adoption |
| `osop import-n8n` | 🟠 High | Not built | 150K-star ecosystem; 9,752 community workflows |
| **awesome-ai-agents-2026 repo PRs (×3)** | **🟠 High** | **Submit today** | **New — Zijian-Ni, caramaschiHG, ARUNAGIRINATHAN-K; 30 min; permanent discoverability** |
| `osop import-soul-md` | 🟡 Medium | Not built | OpenClaw 210K+ stars; SOUL.md templates |
| OSOP Playground (browser) | 🟡 Medium | Not built | Zero-install first experience |
| `osop export-n8n` | 🟡 Medium | Not built | 150K-star ecosystem bridge |
| JetBrains plugin | 🟡 Medium | Not built | Port `osop-vscode`; 10M+ devs |
| SwaggerHub / ReadyAPI plugin | 🟡 Medium | Not built | SmartBear 80M audience |

---

## Positioning Stack

The agentic AI protocol stack has five confirmed layers plus several emerging formats. OSOP's seat is defined by exclusion.

| Layer | Standard | Governance | Status |
|-------|----------|------------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 500+ servers, 97M monthly SDK downloads; July 28 RC: stateless core + MCP Apps |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 150+ orgs, 22K+ stars, 5 SDKs; v1.2 cryptographic signed Agent Cards |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Adopted — Oracle + Google + A2A alignment |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — **v0.4 (April 2026)**, improved state persistence + human-in-the-loop checkpoints |
| Agent capabilities | Agent Skills / SOUL.md | OpenClaw ecosystem | ✅ Emerging — **OpenClaw 210K+ stars** |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — **1.1 (May 19, 2026)**: AsyncAPI support; actor-in-loop + MCP steps on roadmap |
| Span-level observability | OTel GenAI | CNCF | ✅ Dominant — **confirmed May 23 as THE standard; GenAI conventions stable** |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ Production — OpenAI Codex, LangGraph v0.4, Replit Agent 3 |
| YAML multi-agent workflow runner (no audit) | Microsoft Conductor | MIT (no governance) | ⚠️ Live — community forming; OSOP complements |
| Markdown agent workflow runner (GitHub) | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview — signals Markdown > YAML in DX |
| Markdown agent workflow instructions (AWS) | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ Live — third Markdown-first format; `osop compile --from-markdown` needed |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle (open source) | ⚠️ Coalition with AG-UI + A2A; `osop import-agent-spec` bridge needed |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no standard export; `osop import-n8n` opportunity |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ CNCF TAG Runtime comment needed |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 68-day EU AI Act countdown |
| Event-driven workflow invocation | Arazzo 1.1 (AsyncAPI) + OSP-0008 | OpenAPI Initiative + OSOP | ⏳ OSP-0008 response RFC — Tuesday |
| MCP App-driven human-in-the-loop | *(gap — MCP Apps RC)* | *(none)* | ⏳ **OSP-0016 needed before July 28** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — today* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Targets

| Metric | Day 46 (May 25) | Day 60 (Jun 8) | Day 90 (Jul 8) |
|--------|-----------------|----------------|----------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 → **4 today** | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 → **3 today** | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog/content views | 0 → **dev.to today** | 10k | 50k |
| AAIF submission status | **Sending today** | In review | Accepted |
| OSP proposals published | 0 → **3 this week** | 8 | 12 |
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
*Week 4 synthesis: see [`2026-05-25-daily-brief.md`](./strategy/2026-05-25-daily-brief.md)*
