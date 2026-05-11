# OSOP Roadmap

*Updated every Monday. Last update: 2026-05-11 (Week 2).*

---

## This Week: May 11–17, 2026

### Landscape Changes (Week of May 4–10)

- **AWS MCP Server GA (May 6) + SAP MCP Server GA in Bedrock AgentCore** — AWS verticalizing MCP into enterprise software verticals. Each vertical MCP server (Salesforce, ServiceNow, Workday will follow) executes multi-step business workflows with no portable definition format. Proprietary formats are forming now.
- **AWS Agent Toolkit GA** — MCP + Agent Skills + Plugins bundled into a unified developer framework. No portable workflow definition format included.
- **AG-UI protocol emerges as the third layer in the agent stack** — The agentic stack is now described as MCP (tools) + A2A (routing) + AG-UI (UI streaming). OSOP's positioning table must be updated. `.osoplog` `ui_events` field proposal closes the observability gap at this layer.
- **AI Agent Protocol Ecosystem Map 2026 published without OSOP** — digitalapplied.com and others are publishing protocol stack diagrams. OSOP is absent from all of them. AAIF submission is the gate to map inclusion.
- **AAIF governance confirmed: MCP + A2A under Linux Foundation, 146 member orgs** — Anthropic, OpenAI, Google, Microsoft, AWS, Cloudflare, Bloomberg. The workflow definition + execution audit seat is structurally named as vacant in AAIF's own stack organization.
- **Google ADK 1.0 GA with native A2A** — First major framework to ship A2A as a core primitive. Every ADK tutorial being written now uses ADK vocabulary, not OSOP. OSP-0004 gap is live.
- **LangGraph OAP v1.0 GA** — Cross-framework execution protocol. LangGraph, CrewAI, MAF can now hand off tasks. OAP is the runtime; OSOP is the definition layer above it. Bridge doc still unwritten.
- **Arazzo 1.0.1 stable; MCP spec references Arazzo directly** — MCP documentation now funnels developers to Arazzo. "Arazzo = missing piece" narrative actively circulating. Three-way comparison doc is the interception.
- **VoltAgent: new open-source TypeScript agent framework** — Workflow + MCP + memory + RAG. Community forming. No portable workflow format yet. Integration window open.
- **78% of enterprise AI teams have MCP-backed agents in production** (April 2026 survey) — OSOP's target audience is in production now, not future-state.
- **GitHub Agentic Workflows in technical preview** — Markdown-based CI/CD agents generating search confusion with AI agent workflow definition.

### Week 1 Top 3 Progress

| Action | Status | Notes |
|--------|--------|-------|
| 1. OpenClaw PR | ⏳ Pending | Day 32. SOUL.md companion framing ready. Execute today. |
| 2. AAIF submission | ⏳ Pending | Draft exists. AG-UI gap = new hook. Submit this week. |
| 3. OSP-0004: A2A agent subtype | ⏳ Pending | ADK 1.0 GA adds urgency. Now needs 3-hyperscaler examples. |

**All three Week 1 priorities remain pending.** This is the critical pattern to break in Week 2. No new strategic additions until at least one of these ships.

### Week 2 Priorities

1. **OpenClaw PR — SOUL.md companion** — Today. 45 minutes. Day 32. Non-negotiable.
2. **Three-way comparison doc** — By Wednesday May 13. Arazzo + GitHub Agentic Workflows + OSOP. Publish to dev.to + Hacker News. Drop link in Arazzo GitHub Discussions.
3. **AAIF submission** — By Friday May 15. Use the AG-UI gap as the new hook in the opening paragraph.

---

## Cumulative Action Backlog

Items carried across multiple briefs without closure. Ordered by priority.

| Action | Days Pending | Priority | Notes |
|--------|-------------|----------|-------|
| OpenClaw PR | 32 | 🔴 Critical | SOUL.md companion framing ready. Zero blockers. Execute. |
| AAIF submission | 32 | 🔴 Critical | AG-UI gap = new hook. Protocol ecosystem maps depend on this. |
| OSP-0004: A2A agent subtype | 32 | 🔴 Critical | 3 hyperscaler examples: Google ADK 1.0, Azure AI Foundry, Bedrock AgentCore |
| Three-way comparison doc | 2 | 🔴 Critical | Arazzo "missing piece" narrative setting. GitHub search confusion live. |
| AGNTCon/MCPCon CFP (NA + EU) | ~21 days to deadline | 🔴 Critical | Deadline closing |
| OSP-0005: Trust policy | 32 | 🟠 High | Enterprise governance requirement |
| OSP-0006: `skill_ref` RFC | 9 | 🟠 High | Agent Skills window open |
| `osoplog-otel-mapping.md` | 3 | 🟠 High | Prerequisite for AG2 PR, OTel blog, Red Hat pitch |
| AG2 examples PR | 3 | 🟠 High | After `osoplog-otel-mapping.md` |
| LangGraph bridge doc | 3 | 🟠 High | "OAP is the runtime, OSOP is the definition" |
| AWS Agent Toolkit example | 2 | 🟠 High | May 6 news cycle; publish before it fades |
| VoltAgent integration example | 1 | 🟠 High | New; community forming; integration window open |
| Contact protocol ecosystem map authors | 1 | 🟠 High | New; 15-min task; permanent discoverability |
| AI Engineer World's Fair CFP | ~30 days to event | 🟠 High | Abstract drafted |
| README audit-trail reframe | 5 | 🟡 Medium | 30-min task |
| Arazzo comparison doc | 32 | 🟡 Medium | Superseded by three-way comparison doc |
| ACP workflow example | 10 | 🟡 Medium | |
| Strands migration example | 10 | 🟡 Medium | |
| Adobe Workfront example | 4 | 🟡 Medium | Workfront MCP June 2026 |
| Red Hat Developer blog pitch | 3 | 🟡 Medium | |
| NIST CAISI submission | 7 | 🟡 Medium | Check deadline |
| Temporal community post | 7 | 🟡 Medium | |
| Archon compatibility Discussion | 7 | 🟡 Medium | |

---

## Near-Term Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| First external PR submitted (OpenClaw) | May 4 → **May 11** | ⏳ Overdue by 7 days |
| AAIF application submitted | May 7 → **May 15** | ⏳ Overdue by 8 days |
| OSP-0004 published | May 10 → **May 17** | ⏳ Overdue by 1 day |
| Three-way comparison doc published | **May 13** | ⏳ New |
| `osoplog-otel-mapping.md` published | **May 14** | ⏳ New |
| OSP-0005 + OSP-0006 RFCs published | May 15 | ⏳ |
| AGNTCon/MCPCon CFP submitted (NA + EU) | Jun 1 | ⏳ |
| First GitHub star on osop-spec | Day 30 → **Day 45 (May 25)** | 0 stars |
| First external contributor | Day 60 (Jun 8) | ⏳ |
| OSOP on 3+ protocol ecosystem maps | Jun 8 | ⏳ New |

---

## Spec Backlog

| Proposal | Status | Priority | Summary |
|----------|--------|----------|---------|
| OSP-0004: A2A agent subtype | Draft pending | 🔴 Critical | `a2a` subtype + `osop export-agent-card`; ADK 1.0, Azure AI Foundry, Bedrock examples |
| OSP-0005: Trust policy | Draft pending | 🔴 Critical | `trust_policy:` on agent nodes; enterprise governance |
| OSP-0006: `skill_ref` | RFC pending | 🟠 High | Link agent nodes to Agent Skills manifests and SOUL.md |
| `protocol_bindings:` top-level field | Idea | 🟠 High | **New** — Declarative manifest of MCP/A2A/AG-UI/OTel relationships |
| `.osoplog` `ui_events` field | Idea | 🟠 High | **New** — AG-UI event log in execution records; no competing standard |
| `state_schema:` at workflow level | Idea | 🟠 High | LangGraph-style typed state; critical for 34% enterprise adoption |
| `max_cost_usd:` on workflow + agent nodes | Idea | 🟠 High | Enterprise cost governance; AWS Bedrock / token budgets |
| `runtime.aws_toolkit` on agent nodes | Idea | 🟠 High | AWS Agent Toolkit binding alongside anthropic/openai/google/ag2 |
| `workflow` node type | Idea | 🟡 Medium | First-class sub-workflow invocation |
| Streaming semantics | Idea | 🟡 Medium | `runtime.streaming: true` + `runtime.stream_to` on agent nodes |
| `.osoplog` → OTel export | Idea | 🟡 Medium | `osop log-export --format otel-json` |
| ADL manifest integration | Idea | 🟡 Medium | `runtime.adl_manifest` on agent nodes |

---

## Tooling Backlog

| Tool | Priority | Status | Why Now |
|------|----------|--------|----------|
| `osop validate --log` | 🔴 Critical | Not built | `.osoplog` first-class validation |
| `osop log-export --format otel-json` | 🔴 Critical | Not built | OTel GenAI stable; Datadog native |
| `osop log-export --format cloudtrail` | 🔴 Critical | Not built | AWS MCP GA "auditable" language |
| `osop export-agent-card` | 🔴 Critical | Not built | ADK 1.0 GA; A2A 5 SDKs; OSP-0004 |
| `osop export-bedrock` | 🔴 Critical | Not built | SAP MCP GA + Agent Toolkit GA |
| `osop export-azure-ai-foundry` | 🔴 Critical | Not built | Azure AI Foundry A2A native |
| `osop protocols` | 🟠 High | Not built | **New** — `protocol_bindings:` manifest inspector |
| `osop export-aws-agent-toolkit` | 🟠 High | Not built | AWS Agent Toolkit GA |
| `osop export-voltagent` | 🟠 High | Not built | **New** — VoltAgent TypeScript DSL bridge |
| `osop log-export --format siem` | 🟠 High | Not built | Enterprise SIEM (Splunk, Datadog) |
| `osop trust-audit` | 🟠 High | Not built | Enterprise governance; AAIF |
| `osop import-sop` | 🟠 High | Not built | Strands + GitHub markdown → OSOP |
| `osop import-soul-md` | 🟡 Medium | Not built | OpenClaw 162 SOUL.md templates |
| GitHub Action: validate + log-validate | 🟡 Medium | Not built | Zero-friction repo-level adoption |
| OSOP Playground (browser) | 🟡 Medium | Not built | Zero-install first experience |
| `osop export-n8n` | 🟡 Medium | Not built | 150K-star ecosystem bridge |
| JetBrains plugin | 🟡 Medium | Not built | Port `osop-vscode`; 10M+ devs |

---

## Positioning Stack

The agentic AI protocol stack now has four named layers. OSOP's seat is defined by exclusion.

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 97M monthly SDK downloads, 5,800+ servers |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 150+ orgs, 22K+ stars, Azure AI Foundry + Amazon Bedrock |
| UI streaming | AG-UI | Emerging | ✅ Adopted — cited in major protocol comparison guides |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v1.0 GA |
| Agent capabilities | Agent Skills | OpenClaw ecosystem | ✅ Emerging — 4-tool adoption |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — 1.0.1 stable, MCP spec reference |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — native in AG2, Temporal, all major platforms |
| **Workflow definition + execution audit** | **OSOP** | *Submitted to AAIF → pending* | ⏳ **Unoccupied seat** |

---

## Adoption Targets

| Metric | Day 32 (May 11) | Day 60 (Jun 8) | Day 90 (Jul 8) |
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
| AAIF submission status | Draft | In review | Accepted |
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
*Week 1 synthesis: see [`2026-05-10-daily-brief.md`](./strategy/2026-05-10-daily-brief.md)*
