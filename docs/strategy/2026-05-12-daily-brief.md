# OSOP Daily Strategy Brief — 2026-05-12

> **Day 33. Week 2, Tuesday.**
> The three-way comparison doc is due TOMORROW (May 13). The OpenClaw PR is Day 33 overdue. The AAIF submission is due Friday (May 15). This brief focuses on three new signals that sharpen the urgency of all three deliverables — and introduces two new ecosystem plays that weren't on the radar yesterday.

---

## Action Tracker

| Action | Status | Days Pending | Change from yesterday |
|--------|--------|--------------|----------------------|
| **Three-way comparison doc** | ⏳ Pending | 2 | **DUE TOMORROW (May 13). Highest urgency item today.** |
| **OpenClaw PR (SOUL.md companion)** | ⏳ Pending | **33** | No change. Every day of delay increases the risk the community ships its own format. |
| **AAIF submission** | ⏳ Pending | **33** | Due Friday May 15. New hook: MCP roadmap names audit trails as #1 enterprise gap (see Intelligence). |
| OSP-0004: A2A agent subtype | ⏳ Pending | **33** | No change |
| OSP-0005: Trust policy | ⏳ Pending | **33** | No change |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **9** | No change |
| `osoplog-otel-mapping.md` | ⏳ Pending | 3 | No change |
| AG2 examples PR | ⏳ Pending | 3 | Blocked on `osoplog-otel-mapping.md` |
| AWS Agent Toolkit example | ⏳ Pending | 2 | News cycle fading. Publish this week or reschedule. |
| README audit-trail reframe | ⏳ Pending | 5 | New framing available: "Git history for agent runs" (see Evolution Ideas) |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~20 days to deadline | No change |
| AI Engineer World's Fair CFP | ⏳ Pending | ~29 days to event | No change |
| Adobe Workfront example | ⏳ Pending | 4 | No change |
| LangGraph bridge doc | ⏳ Pending | 3 | No change |
| Red Hat Developer blog pitch | ⏳ Pending | 3 | New hook: RHEL MCP server dev preview (see Intelligence) |
| Contact protocol ecosystem map authors | ⏳ Pending | 1 | No change. 15-min task. |
| ACP workflow example | ⏳ Pending | 10 | No change |
| Strands migration example | ⏳ Pending | 10 | No change |
| Temporal community post | ⏳ Pending | 7 | No change |
| Archon compatibility Discussion | ⏳ Pending | 7 | No change |
| NIST CAISI submission | ⏳ Pending | 7 | Check deadline |

---

## Intelligence

### New Signals (2026-05-12)

**n8n is the largest workflow ecosystem without OSOP — 150–179K GitHub stars, 400+ integrations.**
n8n is the most widely deployed workflow automation platform in this comparison landscape: 150,000–179,000 GitHub stars, 400+ native integrations, active community. Its workflow format is proprietary JSON — not portable, not readable as a workflow definition in the OSOP sense. The `osop export-n8n` and `osop import-n8n` tools would make OSOP the bridge between the no-code workflow world (n8n) and the agentic AI world (LangGraph, CrewAI, ADK). An n8n power user who builds workflows in n8n and then wants to port them to an agent runtime currently has no standard format to export to. OSOP solves that. This is not a marginal integration — it is access to the largest established workflow community adjacent to OSOP's target market. Action: add `osop export-n8n` and `osop import-n8n` to the tooling roadmap as 🔴 Critical.

**OpenAgents: only framework native to both MCP and A2A — natural OSOP companion, not yet on our radar.**
OpenAgents.org is the first and currently only agent framework to ship native support for both MCP (tool connectivity) and A2A (agent-to-agent routing). Every other framework supports at most one of the two standards natively. OpenAgents is explicitly positioned as the interoperability layer between frameworks — the framework you choose when you need agents to work across organizational and platform boundaries. OSOP and OpenAgents are structurally complementary: OpenAgents handles runtime interoperability (MCP + A2A); OSOP handles the definition and audit layer above it. An OSOP `.osop` file is the portable definition that specifies what an OpenAgents multi-framework workflow should do; the `.osoplog` is the execution record. Add OpenAgents to the ecosystem targets list. A PR adding an OSOP example to the OpenAgents docs would be the cleanest integration story in the entire ecosystem: OSOP + OpenAgents = define once, run anywhere, audit everything.

**MCP 2026 roadmap names audit trails as the #1 enterprise gap — OSOP fills it, but is not named.**
The official MCP 2026 roadmap (blog.modelcontextprotocol.io) lists enterprise readiness as a top-4 priority. The specific gaps named: audit trails, SSO-integrated auth, gateway behavior, and configuration portability. Audit trails are item one. The MCP team is publicly documenting the gap that `.osoplog` fills — but they are not referencing OSOP. This is a high-priority content opportunity: a short post titled "What MCP's 2026 roadmap says about audit trails — and how `.osoplog` fills the gap today" targets MCP developers actively looking for the audit trail solution. It is not a pitch — it is a direct answer to a documented gap. Post to the MCP GitHub Discussions, dev.to, and as a comment on the MCP roadmap blog post. This also strengthens the AAIF submission hook.

**Specmatic adding Arazzo support in early access — the OpenAPI toolchain is becoming workflow-aware.**
Specmatic, the contract testing and API mocking tool with significant enterprise adoption, is adding Arazzo workflow support (early access) alongside agentic workflow capabilities and a VS Code plugin. This signals that the OpenAPI toolchain ecosystem — Redocly, Speakeasy, APIDog, Bruno, and now Specmatic — is converging around Arazzo for API workflow documentation. The risk for OSOP: as each OpenAPI toolchain provider ships Arazzo support, the narrative "use Arazzo for AI agent workflows" will spread organically through the existing developer toolchain adoption surface. The three-way comparison doc (due TOMORROW) is the single document that intercepts this narrative before it hardens. It must be published before the next wave of Arazzo tooling announcements.

**Red Hat RHEL MCP server developer preview — enterprise Linux entering the agentic AI stack.**
Red Hat announced a developer preview of an MCP server for Red Hat Enterprise Linux (RHEL), designed to bridge RHEL and LLMs for intelligent troubleshooting. This is significant for OSOP because: (1) Red Hat's developer audience (enterprise Linux admins, platform engineers, SREs) is exactly the compliance-first audience for whom `.osoplog` as an audit trail has highest value; (2) Red Hat Developer Blog is a high-quality content channel that publishes technical deep-dives; (3) the pitch angle writes itself — "RHEL + MCP gives you AI tools; OSOP gives you the audit trail that enterprise Linux admins require." The Red Hat Developer blog pitch is already in the backlog — the RHEL MCP server dev preview is the hook that makes it timely.

**Google Cloud Next 2026 reconfirmed A2A's trajectory — 150+ orgs, Linux Foundation, native in Azure + Bedrock.**
Google Cloud Next 2026 coverage confirms A2A at 150+ production organizations, now under Linux Foundation governance alongside MCP. Azure AI Foundry and Amazon Bedrock AgentCore both ship native A2A support. The A2A adoption curve is steeper than MCP's was at the same age. OSP-0004 (A2A agent subtype) is not yet written. Every week that passes, more ADK tutorials, Bedrock Flows examples, and Azure AI Foundry walkthroughs are written without OSOP vocabulary. The vocabulary formation window for "how do you describe an A2A-capable agent in a workflow" is open now and will close by Q3 2026.

### Continuing Signals (from 2026-05-11)

- AG-UI is the third named protocol layer (MCP + A2A + AG-UI); OSOP positioning stack table needs updating.
- AI Agent Protocol Ecosystem Map 2026 published by digitalapplied.com without OSOP.
- AAIF: 146 member orgs; workflow definition layer named as vacant seat.
- VoltAgent: TypeScript agent framework forming proprietary workflow format; integration window open.
- LangGraph OAP v1.0 GA: OSOP is the definition layer above OAP.
- 78% of enterprise AI teams have MCP-backed agents in production.
- "Arazzo = the missing piece" narrative actively circulating; three-way comparison doc is the intercept.

---

## Threats

1. **Three-way comparison doc not published by tomorrow gives Arazzo more time to set as the default.** The MCP spec references Arazzo. Nordic APIs published "Why AI Agents Need Deterministic API Workflows" framing Arazzo as the AI agent answer. Specmatic is shipping Arazzo support. Each day without a published comparison is a day the "Arazzo solves AI agent workflows" narrative spreads through the developer toolchain community. This threat has a 24-hour horizon.

2. **n8n's proprietary JSON becomes the de facto no-code-to-agent export format.** n8n is actively expanding its AI agent capabilities (AI Agent nodes, MCP tool connections, LLM integrations). If n8n ships an export format before OSOP ships `osop import-n8n`, the 150K-star n8n community will standardize on n8n JSON as their portable workflow format. The window is likely 6–9 months before n8n's AI capabilities are mature enough that their format is sticky.

3. **OpenAgents adopts a proprietary workflow definition format.** OpenAgents is the MCP + A2A native framework — the exact architecture OSOP is designed to describe. If OpenAgents ships its own workflow definition format (even an informal one, like SOUL.md-style YAML), it will become the de facto standard for the MCP+A2A community. Contact the OpenAgents maintainers before this happens.

4. **MCP roadmap names OSOP's value props without naming OSOP.** The MCP team's audit trail roadmap item is generating developer attention. If a different project fills that slot — even informally, with a blog post or a YAML schema — before OSOP publishes the "`.osoplog` fills MCP's audit trail gap" content, OSOP loses the most direct conversion path from the 97M monthly MCP SDK downloads.

5. **Day 60 targets compressing from 27 days to 26.** 0 stars, 0 external PRs, 0 published content. Day 33. One fewer day to reach the 200-star, 10-PR, AAIF-in-review milestones. No new threats today — same structural pressure.

---

## Opportunities

### Immediate (today and this week)

**1. Three-way comparison doc — publish by tomorrow, May 13** *(90 min; highest urgency)*

Due date is tomorrow. This is not a "nice to have this week" item — it is a deadline that was set in the Week 2 priorities. The doc structure from yesterday's brief:

| Dimension | Arazzo | GitHub Agentic Workflows | OSOP |
|-----------|--------|--------------------------|------|
| What it defines | Multi-step API call sequences | CI/CD automation with AI actions | AI agent workflow definition + execution audit |
| Who executes | API clients, SDK generators | GitHub Actions runners | Any OSOP-compatible runtime |
| Portable execution log | No | No | Yes (`.osoplog`) |
| AI agent-native node types | No (API-only) | Partial (Actions steps) | Yes (agent, api, cli, human + 8 extended) |
| Human-in-the-loop | No | No | Yes (native `human` node type) |
| Compliance/audit trail | No | No | Yes (EU AI Act, NIST, SOC 2) |
| OTel export | No | No | Yes (`.osoplog` → OTel spans) |
| Standards body | OpenAPI Initiative / Linux Foundation | GitHub (Microsoft) | Submitted to AAIF |

Publish as `docs/comparisons/workflow-formats-compared.md`. Cross-post to dev.to. Submit to Hacker News "Show HN." Drop link in Arazzo GitHub Discussions. This is the document that defines OSOP's place in the landscape for every developer who encounters the Arazzo narrative.

**2. OpenClaw PR — SOUL.md companion** *(45 min; Day 33 overdue; execute today)*

Unchanged from previous briefs. There is no blocker. The framing is proven: SOUL.md is for humans; `.osop.yaml` is for machines. README.md is to `package.json` as SOUL.md is to `.osop`. Fork `openclaw/openclaw`, pick the most-starred SOUL.md skill, add `workflow.osop.yaml` + `OSOP.md`, submit PR.

**3. OpenAgents integration target — new, high-priority** *(60 min; first-mover window)*

OpenAgents is the only framework native to both MCP and A2A. Add `osop-examples/openagents/` with a multi-framework workflow example — an agent that uses MCP to connect to tools and A2A to hand off to another agent, with the full workflow defined in `.osop` and the execution record in `.osoplog`. Post to the OpenAgents GitHub Discussions with the framing: "OpenAgents handles runtime interoperability; OSOP handles the portable definition. Together they are the full stack for multi-framework agent workflows." This is the cleanest integration story in the ecosystem.

**4. MCP audit trail content opportunity** *(45 min; publish before other projects respond to the MCP roadmap)*

Write a short post: "MCP's 2026 roadmap lists audit trails as the #1 enterprise gap. Here's what that means and how `.osoplog` solves it today." This is not a pitch — it is a direct answer to a documented gap in a public roadmap. Post to dev.to and as a GitHub Discussion comment on the MCP repo. Drop it in the AAIF submission as supporting evidence.

**5. AAIF submission — by Friday May 15** *(2 hrs)*

New hook addition from today's signals: the MCP roadmap explicitly names audit trails as the #1 enterprise gap. This is citable in the AAIF submission opening paragraph:

> "The 2026 agentic AI protocol stack has three confirmed layers: MCP (tool connectivity, AAIF), A2A (agent routing, AAIF), and AG-UI (UI streaming, emerging). The MCP 2026 roadmap itself names audit trails as the #1 enterprise deployment gap. A fourth layer — workflow definition and execution audit — has no AAIF-governed standard. OSOP fills this layer and directly addresses the audit trail gap the MCP team has publicly named. We are applying for AAIF founding project status."

### Medium-term (by May 17)

- **`osoplog-otel-mapping.md`** — Prerequisite for AG2 PR, Red Hat pitch, OTel blog.
- **OSP-0004: A2A agent subtype** — Three platform examples: Google ADK 1.0, Azure AI Foundry, Amazon Bedrock AgentCore.
- **LangGraph bridge doc** — "OAP is the runtime; OSOP is the definition." Target 34% enterprise share.
- **AWS Agent Toolkit example** — Before the May 6 news cycle fully fades.
- **Contact protocol ecosystem map authors** — digitalapplied.com and awesome-ai-agents-2026. 15-min task.

---

## Evolution Ideas

### Spec Improvements

**`protocol_bindings:` top-level field — make OSOP the manifest of the full agent stack** *(carry-forward; elevated by n8n + OpenAgents signals)*

With n8n and OpenAgents now identified as integration targets, `protocol_bindings:` becomes even more strategically important. A workflow that connects n8n for trigger automation, MCP for tool connectivity, A2A for agent routing, and AG-UI for streaming would declare all of these in one place:

```yaml
osop_version: "1.0"
id: customer-support-agent
name: Customer Support Agent

protocol_bindings:
  mcp:
    servers: ["github-mcp", "slack-mcp"]
  a2a:
    agent_card_path: "./agent-card.json"
    discoverable: true
  ag_ui:
    stream_endpoint: "wss://app.example.com/agent-stream"
  n8n:
    trigger_webhook: "https://n8n.example.com/webhook/trigger"
  otel:
    endpoint: "https://otel.example.com:4317"

nodes: [...]
```

This makes OSOP the single source of truth for how a workflow connects to every adjacent protocol. No other standard does this. Include in OSP-0007 or as a standalone extension to OSP-0004.

**"Git history for agent runs" — reframe `.osoplog` with a stickier metaphor** *(new; messaging play)*

The current framing of `.osoplog` as an "execution audit log" is technically accurate but not memorable. "Git history for agent runs" is both accurate and immediately understood by every developer who uses git:
- Git stores what changed in your code, commit by commit. `.osoplog` stores what happened in your agent run, node by node.
- `git log` shows you the history of your codebase. `osop log show` shows you the history of your agent runs.
- `git diff` shows you what changed between commits. `osop log diff run-a run-b` shows you how two runs diverged.

This metaphor should be in the README, the OSOP-CORE.md, and every blog post. It is more memorable than "execution audit log" and more specific than "observability."

**`osop import-n8n` / `osop export-n8n` — bridge to the 150K-star workflow ecosystem** *(new; critical tooling gap)*

n8n's workflow format is JSON-based and well-documented. An import/export bridge would allow:
- n8n power users to export their AI agent workflows to OSOP for portability, framework migration, or audit compliance
- OSOP users to export to n8n for no-code execution or stakeholder visibility

This is the highest-leverage tooling addition not yet on the roadmap. Add to Tooling Backlog as 🔴 Critical alongside `osop export-agent-card` and `osop log-export --format otel-json`.

**`.osoplog` `ui_events` field** *(carry-forward from 2026-05-11; AG-UI gap)*

See May 11 brief. Captures AG-UI streaming events in the execution record. No competing standard. Pure addition, no breaking changes.

**`state_schema:` at workflow level** *(carry-forward; LangGraph critical)*

See May 10 brief. LangGraph-style typed state. Most impactful spec change for LangGraph adoption.

### Tooling Gaps (updated)

| Tool | Priority | Trigger | Status |
|------|----------|---------|--------|
| `osop import-n8n` | 🔴 Critical | **New** — 150K+ star n8n ecosystem; no OSOP bridge | Not built |
| `osop export-n8n` | 🔴 Critical | **New** — n8n AI agent nodes expanding | Not built |
| `osop validate --log` | 🔴 Critical | `.osoplog` first-class validation | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable; Datadog native | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS MCP GA "auditable" language | Not built |
| `osop export-agent-card` | 🔴 Critical | ADK 1.0 GA; A2A 5 SDKs; OSP-0004 | Not built |
| `osop export-bedrock` | 🔴 Critical | SAP MCP GA + Agent Toolkit GA | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native | Not built |
| `osop protocols` | 🟠 High | `protocol_bindings:` manifest inspector | Not built |
| `osop export-aws-agent-toolkit` | 🟠 High | AWS Agent Toolkit GA | Not built |
| `osop export-voltagent` | 🟠 High | VoltAgent TypeScript DSL bridge | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF | Not built |
| `osop import-sop` | 🟠 High | Strands + GitHub markdown → OSOP | Not built |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo adoption | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |

### Ecosystem Plays (updated)

| Target | Action | Effort | Rationale |
|--------|--------|--------|----------|
| **OpenAgents** | `.osop` example + GitHub Discussion post | 60 min | **New** — only MCP+A2A native framework; natural complement |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | **New** — 150K+ stars; biggest adjacent workflow ecosystem |
| **MCP GitHub Discussions** | "`.osoplog` fills MCP's audit trail gap" post | 45 min | **New** — MCP roadmap names the gap; intercept the developers looking for the answer |
| **OpenClaw** | SOUL.md companion PR | 45 min | Day 33 overdue |
| **AAIF** | Submit via LFX | 2 hrs | Day 33 overdue; ecosystem map gate |
| **Protocol ecosystem map authors** | Contact digitalapplied.com | 15 min | Free discoverability |
| **Arazzo GitHub Discussions** | Three-way comparison doc link | 15 min | Active narrative setting |
| **VoltAgent** | `.osop` example + PR | 60 min | New framework; community forming |
| **AG2 (AutoGen)** | `.osop` companion to `research_and_summarize.py` | 45 min | After `osoplog-otel-mapping.md` |
| **LangGraph community** | Bridge doc: "OAP runtime, OSOP definition" | 60 min | 34% enterprise citations |
| **Red Hat Developer** | Blog pitch: MCP audit trails + `.osoplog` | 30 min | RHEL MCP server dev preview hook |
| **AWS community** | Blog: OSOP for AWS Agent Toolkit workflows | 60 min | Fading news cycle; this week or reschedule |
| **Temporal community** | Forum post + durable-workflow example | 45 min | Production agent developer concentration |
| **Adobe Workfront** | `workfront-approval-workflow.osop.yaml` | 60 min | Workfront MCP launches June 2026 |
| **NIST CAISI** | 2-page comment: "execution audit" framing | 90 min | Window closing |
| **Google ADK community** | OSP-0004 + ADK bridge doc | 60 min | A2A vocabulary forming now |

---

## Top 3 Actions for This Week

### 1. Three-way comparison doc *(due TOMORROW, May 13 — 90 min)*

This is the only action with a hard deadline this week. The Arazzo "missing piece" narrative is in active circulation. The MCP spec references Arazzo. Specmatic is shipping Arazzo support. Nordic APIs published an Arazzo-for-AI-agents framing article. Every day without a published OSOP comparison is a day the narrative sets further.

Steps: write `docs/comparisons/workflow-formats-compared.md` → post to dev.to → submit to Hacker News "Show HN" → drop link in Arazzo GitHub Discussions. Start today. Publish tomorrow.

### 2. OpenClaw PR — SOUL.md companion *(45 min; Day 33 overdue; execute today)*

No new framing needed. No blockers. The PR that has not shipped for 33 days can be submitted in 45 minutes. The window for being the first external contributor to OpenClaw who brings OSOP closes a little more each day.

### 3. AAIF submission *(due Friday May 15 — 2 hrs)*

New hook from today: the MCP 2026 roadmap explicitly names audit trails as the #1 enterprise deployment gap. Cite this in the opening paragraph. The submission has been drafted since Day 1. The new hook makes the case stronger than it has ever been. Submit by Friday.

**Bonus — if the above three are done:** Contact the OpenAgents maintainers (GitHub Discussion post, 20 min) + contact digitalapplied.com about ecosystem map inclusion (email, 15 min). Together these two contacts are 35 minutes and have potentially permanent discoverability impact.

---

## Positioning Update

The agentic AI protocol stack — updated with today's signals:

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 97M monthly SDK downloads, 200+ servers, enterprise roadmap |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 150+ orgs, 22K+ stars, Azure + Bedrock native |
| UI streaming | AG-UI | Emerging | ✅ Adopted — three-layer stack canonical in 2026 guides |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v1.0 GA |
| Agent capabilities | Agent Skills | OpenClaw ecosystem | ✅ Emerging |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — MCP spec reference, toolchain adoption accelerating |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars; no standard export |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable |
| **Workflow definition + execution audit** | **OSOP** | *Submitted to AAIF → pending* | ⏳ **Unoccupied seat — MCP roadmap names the gap** |

New row added: n8n JSON as the de facto no-code workflow format. It is proprietary, not portable, and has no standard export. `osop import-n8n` is the bridge.

---

## Adoption Metrics to Track

| Metric | Day 33 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
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
| Three-way comparison doc | **In progress (due tomorrow)** | Published + indexed | Top 3 search result |
| `osoplog-otel-mapping.md` | Not written | Published | Referenced in 3+ tools |
| `osop log-export --format otel-json` | Not built | Alpha | Stable |
| `osop import-n8n` / `osop export-n8n` | **Not in roadmap until today** | Prototype | Beta |
| OpenClaw PR | Not submitted | Merged | SOUL.md pattern in 5+ skills |
| VoltAgent example | Not written | Published | — |
| OpenAgents example | **Not written (new target)** | Published | — |

---

*Today is Tuesday — ROADMAP was updated yesterday (Monday May 11) for Week 2.*
*Previous brief: [`2026-05-11-daily-brief.md`](./2026-05-11-daily-brief.md)*
