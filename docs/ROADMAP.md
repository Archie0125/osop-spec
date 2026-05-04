# OSOP Roadmap

*Updated every Monday. Last update: 2026-05-04 (Week 1).*

---

## This Week: May 4–10, 2026

### Landscape Changes (Week of Apr 27–May 3)

- **A2A v1.0 in production at Azure AI Foundry and Amazon Bedrock AgentCore** — A2A went from 150 production orgs to hyperscaler platform integration in a single week. Every enterprise team building on Azure or AWS now encounters A2A natively. 22,000+ GitHub stars.
- **MCP 2026 Roadmap published** — Officially flags audit trails, SSO auth, and configuration portability as the top enterprise gaps in production MCP deployments. Direct external validation of `.osoplog`'s purpose.
- **MCP donated to AAIF / Linux Foundation** — Co-founded by Anthropic, OpenAI, Block; Google, Microsoft, AWS, Cloudflare, Bloomberg as members. AAIF stack: MCP (tools) + A2A (routing) + [OSOP — not yet submitted].
- **Agent Skills crossed 4-tool adoption** — OpenClaw (247K+ stars), Codex CLI, Cursor, Gemini CLI adopted the open Agent Skills standard in one week. Fastest cross-tool protocol adoption since MCP's initial wave.
- **Agentic Commerce Protocol (ACP) launched** — OpenAI + Stripe co-launched an open standard for AI agent commerce interactions. New vertical for OSOP workflow examples.
- **LangGraph v1.0 GA with Open Agent Protocol (OAP)** — Cross-framework execution protocol. OSOP sits above OAP as the workflow definition layer.
- **Microsoft Agent Framework 1.0 confirmed GA** — Native MCP + A2A + OpenAPI support.
- **Red Hat MCP server for RHEL developer preview** — Enterprise Linux enters the MCP ecosystem.
- **Arazzo 1.1 with AsyncAPI support imminent** — Will trigger "Arazzo or OSOP?" objections at scale across API-centric teams.
- **78% of enterprise AI teams have MCP-backed agents in production** (April 2026 survey); 5,800+ MCP servers, 97M monthly SDK downloads.

### Last Week's Top 3 Progress

| Action | Status | Notes |
|--------|--------|-------|
| 1. OpenClaw PR | ⏳ Pending | Day 24. 30-minute task. Execute today. |
| 2. OSP-0006: `skill_ref` RFC | ⏳ Pending | Agent Skills window open; write the RFC this week |
| 3. AAIF submission | ⏳ Pending | New hook: MCP roadmap audit trail quote; submit this week |

### This Week's Priorities

1. **Execute OpenClaw PR** — Today. 30 minutes. Day 24. Non-negotiable.
2. **Submit AAIF application** — The MCP 2026 Roadmap names audit trails as the top enterprise gap. OSOP fills it. Submit this week.
3. **Write OSP-0004** — A2A is in Azure AI Foundry and Amazon Bedrock AgentCore. The spec must exist. Include platform-specific examples for both.

---

## Cumulative Action Backlog

Items carried across multiple briefs without closure. Ordered by priority.

| Action | Days Pending | Priority | Notes |
|--------|-------------|----------|-------|
| OpenClaw PR | 24 | 🔴 Critical | 30-minute task. Zero blockers. Execute. |
| AAIF submission | 24 | 🔴 Critical | Draft exists. New hook available. Submit. |
| OSP-0004: A2A agent subtype | 24 | 🔴 Critical | Now hyperscaler-urgent: Azure AI Foundry + Amazon Bedrock AgentCore |
| AGNTCon/MCPCon CFP (NA + EU) | ~28 to deadline | 🔴 Critical | 4 weeks remaining. MCP roadmap quote is the hook. |
| OSP-0005: Trust policy | 24 | 🟠 High | Enterprise governance requirement |
| OSP-0006: `skill_ref` | 1 | 🟠 High | Agent Skills window open while standard is forming |
| AI Engineer World's Fair CFP | ~35 to event | 🟠 High | Abstract drafted |
| ADL x OSOP positioning piece | 24 | 🟡 Medium | ADL community still forming; window shrinking |
| "MCP + OSOP" blog post | 24 | 🟡 Medium | Reframe as "the audit trail answer" |
| Arazzo comparison doc | 24 | 🟡 Medium | Write before Arazzo 1.1 press cycle |
| ACP workflow example | 2 | 🟡 Medium | |
| Strands migration example | 2 | 🟡 Medium | |

---

## Near-Term Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| First external PR submitted (OpenClaw) | May 4 | ⏳ |
| AAIF application submitted | May 7 | ⏳ |
| OSP-0004 published | May 10 | ⏳ |
| AGNTCon/MCPCon CFP submitted (NA + EU) | Jun 1 | ⏳ |
| Arazzo comparison doc published | May 10 | ⏳ |
| OSP-0005 + OSP-0006 RFCs published | May 15 | ⏳ |
| First GitHub star on osop-spec | Day 30 (May 9) | 0 stars |
| First external contributor | Day 60 (Jun 8) | ⏳ |

---

## Spec Backlog

| Proposal | Status | Priority | Summary |
|----------|--------|----------|---------|
| OSP-0004: A2A agent subtype | Draft pending | 🔴 Critical | `a2a` subtype + `osop export-agent-card`; Azure AI Foundry + Bedrock examples |
| OSP-0005: Trust policy | Draft pending | 🔴 Critical | `trust_policy:` on agent nodes; enterprise governance |
| OSP-0006: `skill_ref` | RFC pending | 🟠 High | Link agent nodes to Agent Skills `SKILL.md` manifests |
| `workflow` node type | Idea | 🟡 Medium | First-class sub-workflow invocation (replaces `workflow_ref` on `system` nodes) |
| Streaming semantics | Idea | 🟡 Medium | `runtime.streaming: true` + `runtime.stream_to` on agent nodes |
| `.osoplog` to OTel export | Idea | 🟡 Medium | `osop log-export --format otel-json` |
| ADL manifest integration | Idea | 🟡 Medium | `runtime.adl_manifest` on agent nodes |

---

## Tooling Backlog

| Tool | Priority | Status | Why Now |
|------|----------|--------|---------|
| `osop export-agent-card` | 🔴 Critical | Not built | A2A: 150 orgs, 22K stars, hyperscaler integration |
| `osop export-bedrock` | 🔴 Critical | Not built | A2A in Amazon Bedrock AgentCore; largest enterprise AI cloud |
| `osop export-azure-ai-foundry` | 🔴 Critical | Not built | A2A in Azure AI Foundry; MAF 1.0 GA |
| `osop import-sop` | 🟠 High | Not built | Converts Strands + GitHub Agentic Workflow markdown users to OSOP |
| `osop log-export --format otel-json` | 🟠 High | Not built | MCP roadmap names audit trail integration as enterprise gap |
| `osop trust-audit` | 🟠 High | Not built | Enterprise pre-deployment checklist |
| OSOP Playground (browser) | 🟡 Medium | Not built | Zero-install first experience; search-indexed |
| GitHub Action: validate + trust-audit | 🟡 Medium | Not built | Zero-friction repo-level adoption |
| `osop export-n8n` | 🟡 Medium | Not built | 150K-star ecosystem bridge |

---

## Positioning Stack

The agentic AI infrastructure stack is naming itself. OSOP's layer is defined by exclusion.

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 97M monthly SDK downloads, 5,800+ servers |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 150+ orgs, 22K+ stars, Azure AI Foundry + Amazon Bedrock |
| Agent capabilities | Agent Skills | OpenClaw ecosystem | ✅ Emerging — 4-tool adoption in 1 week |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v1.0 GA |
| **Workflow definition + execution audit** | **OSOP** | *Unsubmitted to AAIF* | ⏳ **Unoccupied seat** |

---

## Adoption Targets

| Metric | Day 30 (May 9) | Day 60 (Jun 8) | Day 90 (Jul 8) |
|--------|----------------|----------------|----------------|
| GitHub stars (osop-spec) | 50 | 200 | 500 |
| Combined ecosystem stars | 100 | 500 | 2,000 |
| External PRs merged | 3 | 10 | 25 |
| Repos with .osop files | 5 | 20 | 50 |
| PyPI/NPM downloads | 500/mo | 2k/mo | 10k/mo |
| Blog/content views | 2k | 10k | 50k |
| OSP proposals published | 6 | 8 | 12 |
| CFP submissions | 3 | — | 1+ accepted |

---

## Strategic Principles (Reminder)

1. **Solve their problem, OSOP is the side effect** — Never pitch OSOP directly. Add value first.
2. **Spec power + Tooling power + Ecosystem presence** — All three must advance together.
3. **Non-invasive PRs** — Every external contribution must be add-only, standalone, and useful without OSOP.
4. **Think in adoption funnels** — Awareness → Interest → Trial → Adoption → Advocacy.
5. **Be the standard before asking to be the standard** — Presence creates legitimacy.

---

*Daily briefs: [`docs/strategy/`](./strategy/)*
*Previous weekly synths: this is the first ROADMAP entry (week of May 4, 2026).*
