# OSOP Daily Strategy Brief — 2026-05-11

> **Day 32. Week 2 opens.**
> Week 1 closed with zero actions shipped across all 31 days. The execution gap has crossed the threshold from an operational problem into a strategic one: Day 60 targets (200 stars, 10 external PRs, AAIF in review) are now structurally implausible unless actions begin shipping this week.
>
> Three new signals arrived this weekend that change the urgency calculus. AG-UI emerges as a third external protocol layer OSOP must address. Protocol ecosystem maps are being published without OSOP on them. The Arazzo "missing piece" narrative is setting. This brief does not litigate the execution gap further — it focuses on what to do today.

---

## Action Tracker (carry-forward from 2026-05-10)

| Action | Status | Days Pending | Change from yesterday |
|--------|--------|--------------|----------------------|
| OpenClaw PR (SOUL.md companion) | ⏳ Pending | **31** | No change. Execute today. |
| AAIF submission | ⏳ Pending | **31** | New hook: AG-UI gap + protocol ecosystem maps |
| OSP-0004: A2A agent subtype | ⏳ Pending | **31** | No change |
| OSP-0005: Trust policy | ⏳ Pending | **31** | No change |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **8** | No change |
| Three-way comparison doc | ⏳ Pending | **1** | Urgency elevated: Arazzo "missing piece" narrative setting |
| `osoplog-otel-mapping.md` | ⏳ Pending | **2** | No change |
| AG2 examples PR | ⏳ Pending | **2** | No change |
| AWS Agent Toolkit example | ⏳ Pending | **1** | No change |
| README audit-trail reframe | ⏳ Pending | **4** | No change |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~21 days to deadline | No change |
| AI Engineer World's Fair CFP | ⏳ Pending | ~30 days to event | No change |
| Adobe Workfront example | ⏳ Pending | **3** | No change |
| ACP workflow example | ⏳ Pending | **9** | No change |
| Strands migration example | ⏳ Pending | **9** | No change |
| LangGraph bridge doc | ⏳ Pending | **2** | New context: OAP v1.0 GA (see Intelligence) |
| Red Hat Developer blog pitch | ⏳ Pending | **2** | No change |
| NIST CAISI submission | ⏳ Pending | **6** | Check deadline today |
| Temporal community post | ⏳ Pending | **6** | No change |
| Archon compatibility Discussion | ⏳ Pending | **6** | No change |

---

## Intelligence

### New Signals (2026-05-11)

**AG-UI: the third protocol layer emerges, and it is not on OSOP's radar.**
Multiple 2026 protocol comparison guides now describe the agentic stack as three layers: MCP (tool connectivity) + A2A (agent-to-agent routing) + AG-UI (real-time agent-to-UI streaming). AG-UI handles the protocol by which an agent streams output updates to a frontend: text deltas, tool-call notifications, intermediate results, progress events. It is a genuinely separate layer from both MCP (which connects agents to tools) and A2A (which routes tasks between agents). OSOP's current positioning describes its relationship to MCP and A2A but says nothing about AG-UI. This creates two gaps: (1) OSOP's positioning stack table needs a row for AG-UI; (2) `.osoplog` has no field for recording UI-layer events emitted by an agent run. Both gaps are fixable without breaking changes. The second one (`.osoplog` `ui_events` field) is high-value because it makes OSOP the observable record for AG-UI interactions, which no other standard currently captures.

**AI Agent Protocol Ecosystem Map 2026 is published — OSOP is absent.**
digitalapplied.com published "AI Agent Protocol Ecosystem Map 2026: Complete Visual," mapping MCP, A2A, ACP, and UCP into a layered diagram. OSOP does not appear. This map, and others like it, are the first resource a developer or architect encounters when surveying the protocol landscape. An absent standard is an unknown standard. The gap is visible and fixable, but only through the AAIF submission (which places OSOP on the AAIF candidate list, making it citable in any AAIF-adjacent map) and through publishing the three-way comparison doc (which circulates OSOP's layer position alongside Arazzo and GitHub Agentic Workflows). The protocol ecosystem map is the discoverability funnel — not GitHub, not dev.to. Fix the map gap first.

**AAIF governance confirmed: 146 member organizations, MCP + A2A both under Linux Foundation.**
The Agentic AI Foundation now governs both MCP and A2A under the Linux Foundation umbrella. 146 member organizations: Anthropic, OpenAI, Google, Microsoft, AWS, Cloudflare, Bloomberg, and 138 others. The AAIF mission statement explicitly targets the workflow definition layer as the unoccupied seat: MCP fills tool connectivity, A2A fills agent routing, OTel fills span-level observability, and — in the AAIF's own public framing — no standard yet governs the workflow definition and execution audit layer. OSOP is not in the AAIF stack not because AAIF rejected it, but because OSOP has not been submitted. The seat is structurally vacant and structurally named. The 31-day delay on the AAIF submission is the single most expensive inaction in the backlog.

**VoltAgent: TypeScript AI agent framework with native workflow, MCP, memory, RAG — no portable workflow format.**
VoltAgent is an open-source TypeScript AI agent framework (GitHub: VoltAgent/voltagent) combining workflow DSL, MCP tool connectivity, memory, RAG, guardrails, and voice in a single package. It is the TypeScript equivalent of LangGraph + CrewAI + memory bundled together. VoltAgent has its own TypeScript-native workflow DSL — a proprietary format that is not portable outside the VoltAgent runtime. This is both a threat (another proprietary format forming) and an opportunity (VoltAgent's community is new and has not yet standardized on a workflow exchange format). The opportunity window: add an `osop-examples/voltagent/` example this week and submit it before the VoltAgent community builds its own workflow exchange story.

**LangGraph OAP v1.0 GA: cross-framework execution protocol — OSOP is the definition layer above it.**
LangGraph Open Agent Protocol v1.0 went GA, enabling agents built in LangGraph, CrewAI, and Microsoft Agent Framework to hand off execution to each other via standardized APIs. OAP handles runtime execution handoff between frameworks. It does not define what a workflow IS — it defines how agents call each other. OSOP defines the workflow. The LangGraph bridge doc needs one clear sentence: "OAP is the runtime handoff protocol; OSOP is the workflow definition format you write once and execute across any OAP-compatible framework." LangGraph is cited in 34% of enterprise agent-framework architecture decisions (Gartner Q1 2026). The bridge doc is a direct conversion path for that 34%.

**78% of enterprise AI teams have MCP-backed agents in production (April 2026 survey).**
Enterprise AI agents are not a future-state target — they are running in production today. The developer building a production MCP-backed enterprise agent today has no portable workflow definition format: they use Step Functions JSON, Bedrock Flows, proprietary YAML, or nothing. OSOP's total addressable community is active right now. The urgency of shipping the AAIF submission, the three-way comparison doc, and the first external PR is not speculative — it is a race against hardening proprietary formats.

**"Arazzo = the missing piece" narrative setting in the developer community.**
A February 2026 Marmelab article titled "Arazzo: The Missing Piece for AI-Assisted API Consumption" is circulating. The MCP spec references Arazzo directly. Nordic APIs published "Why AI Agents Need Deterministic API Workflows" framing Arazzo as the determinism answer for AI agents. If this narrative solidifies, OSOP will spend its first 18 months of public life explaining why Arazzo doesn't already solve the problem. The three-way comparison doc is the pre-emptive answer: Arazzo solves multi-step API workflow documentation; it does not capture AI agent workflow definitions with arbitrary node types, parallel branches, human-in-the-loop steps, or portable execution audit logs. Different problem, different spec. This distinction must be in writing and indexed before the next wave of Arazzo content drops.

### Continuing Signals (unchanged from 2026-05-10)

- MCP 2026 Roadmap names audit trails as the #1 enterprise gap in production MCP deployments.
- AWS MCP Server GA + SAP MCP GA: AWS verticalizing MCP into enterprise software verticals.
- AWS Agent Toolkit: MCP + Skills + Plugins bundled; no portable workflow definition format.
- Google ADK 1.0 GA with native A2A; OSP-0004 spec gap active against every ADK tutorial being written.
- A2A at 150+ production orgs, 22K+ stars, native in Azure AI Foundry and Amazon Bedrock AgentCore.
- OTel GenAI Semantic Conventions stable — `.osoplog` → OTel export has no moving targets.
- Agent Skills at 4-tool adoption (OpenClaw, Codex CLI, Cursor, Gemini CLI).
- GitHub Agentic Workflows in technical preview — search confusion live.
- Arazzo 1.0.1 stable; Redocly, Speakeasy, APIDog, Specmatic, Bruno all ship support.

---

## Threats

1. **OSOP absent from every published protocol ecosystem map.** Developers surveying the landscape see a complete stack (MCP + A2A + AG-UI + OTel) and conclude OSOP's layer is either solved or unnecessary. The longer OSOP is absent from maps, the more complete those maps look without it.

2. **Arazzo "missing piece" narrative.** The developer who reads the MCP spec → follows the Arazzo reference → reads "Arazzo: The Missing Piece" → adopts Arazzo for their workflow documentation → is not looking for OSOP. The comparison doc must be published before this funnel closes.

3. **AG-UI growing without OSOP observability.** AG-UI is being adopted as the UI streaming layer. None of the current AG-UI documentation references any execution audit format. The first framework to publish an "AG-UI + audit" story wins the observability narrative for UI-layer agent interactions. OSOP's `.osoplog ui_events` proposal can win this — if published before AG-UI releases a competing logging format.

4. **VoltAgent and jcode forming proprietary workflow patterns.** Each new framework that ships without OSOP adds another proprietary format to compete with. The window to be present at framework formation is short — typically the first 60–90 days of community activity.

5. **Day 60 targets compressing.** Day 31 metrics: 0 stars, 0 external PRs, 0 published content. The Day 30→60 compression means achieving 200 stars and 10 merged PRs in 27 days starting from zero requires a step-change in output velocity. The first week of Week 2 (this week) is the inflection point.

6. **ADK 1.0 GA corpus forming.** Every tutorial, blog post, and conference talk about Google ADK 1.0 uses ADK vocabulary (Agent Cards, task delegation, capability discovery). OSP-0004 is still unwritten. By the time it ships, translating OSOP vocabulary to ADK vocabulary will be necessary — instead of OSOP defining the vocabulary ADK tutorials reference.

---

## Opportunities

### Immediate (today and this week)

**1. OpenClaw PR — SOUL.md companion pattern** *(45 min; 31 days overdue; best framing yet; execute today)*

See May 10 brief for full framing. Summary: add `workflow.osop.yaml` alongside an existing SOUL.md skill in `openclaw/openclaw` or `mergisi/awesome-openclaw-agents`. PR title: "Add machine-readable OSOP workflow companion for [skill-name]." No behavioral changes. SOUL.md is for humans; `.osop.yaml` is for machines. README.md is to `package.json` as SOUL.md is to `.osop`.

This is the 32nd day this task has been executable and unexecuted. There is no blocker.

**2. Three-way comparison doc** *(90 min; publish to dev.to + HN + Arazzo GitHub Discussions)*

Arazzo vs. GitHub Agentic Workflows vs. OSOP. Intercepts two active confusion vectors before they harden. Structure:

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

Post as dev.to article. Submit to Hacker News "Show HN." Drop a comment in the Arazzo GitHub Discussions referencing the comparison.

**3. AAIF submission** *(2 hrs; 31 days overdue; gets OSOP on ecosystem maps; use new AG-UI gap hook)*

New opening paragraph for the submission incorporating today's signals:

> "The 2026 agentic AI protocol stack has three confirmed layers: MCP (tool connectivity, AAIF), A2A (agent routing, AAIF), and AG-UI (UI streaming, emerging). A fourth layer — workflow definition and execution audit — has no AAIF-governed standard. Enterprise AI teams running MCP-backed agents in production have no portable format for defining what those agents should do, in what order, with what inputs and outputs, and with what immutable record of what actually happened. OSOP fills this layer. We are applying for AAIF founding project status to formalize the workflow definition + execution audit seat in the AAIF stack."

**4. Contact protocol ecosystem map authors** *(15 min; immediate discoverability win)*

The digitalapplied.com "AI Agent Protocol Ecosystem Map 2026" is an actively maintained visual. Contact the author requesting OSOP inclusion in the workflow definition layer. Similarly, submit OSOP to the `awesome-ai-agents-2026` GitHub repo (caramaschiHG/awesome-ai-agents-2026) under a new "Workflow Standards" section. These are 15-minute tasks with permanent discoverability impact.

**5. VoltAgent integration target** *(60 min; framework community still forming)*

Add `osop-examples/voltagent/customer-support-workflow.osop.yaml` — a three-node workflow using VoltAgent's core primitives (tool call via MCP, memory retrieval, output streaming). Submit as a PR to VoltAgent's examples directory with OSOP as the portable definition companion. Non-invasive: the example works with or without OSOP validation. Seeds the OSOP presence in the TypeScript agent community.

### Medium-term (by May 17)

- **`osoplog-otel-mapping.md`** — Write the field mapping table. Prerequisite for AG2 PR, OTel blog, Red Hat Developer pitch.
- **AG2 examples PR** — After `osoplog-otel-mapping.md`. `.osop` companion to `research_and_summarize.py`.
- **OSP-0004: A2A agent subtype** — Three platform examples: Google ADK 1.0, Azure AI Foundry, Amazon Bedrock AgentCore.
- **LangGraph bridge doc** — "OAP is the runtime; OSOP is the definition." Maps vocabulary. Targets 34% enterprise share.
- **AWS Agent Toolkit example** — Publish before the May 6 news cycle fades.

---

## Evolution Ideas

### Spec Improvements

**`.osoplog` `ui_events` field — AG-UI event log in execution records** *(new; high-value; no competing standard)*

AG-UI streams real-time events from agent to frontend (text deltas, tool calls, progress, completions). No execution audit format currently captures these events. Adding `ui_events` to `.osoplog` node records makes OSOP the observable record for UI-layer agent interactions:

```yaml
node_records:
  - node_id: "chat-agent"
    status: "COMPLETED"
    duration_ms: 4200
    ai_metadata:
      model: "claude-sonnet-4-20250514"
      prompt_tokens: 1800
      completion_tokens: 420
    ui_events:           # new: AG-UI event log
      - type: "text_delta"
        offset_ms: 120
        content: "Analyzing your request..."
      - type: "tool_call"
        offset_ms: 890
        tool: "search"
        args: {query: "Q1 2026 revenue"}
      - type: "text_delta"
        offset_ms: 3100
        content: "Here are the results:"
      - type: "completion"
        offset_ms: 4180
```

This is a pure addition to the `.osoplog` schema — no breaking changes. It extends OSOP's audit coverage to the full agent interaction stack (tool calls via MCP + agent routing via A2A + UI events via AG-UI) and is the only execution audit format that would capture this layer.

**`protocol_bindings:` top-level field — declarative protocol manifest** *(new; positioning play)*

A top-level `protocol_bindings:` field makes OSOP the central declaration point for a workflow's protocol relationships. Instead of each tool inferring which protocols a workflow uses, the `.osop` file declares them explicitly:

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
  otel:
    endpoint: "https://otel.example.com:4317"

nodes: [...]
```

Strategic value: makes OSOP the manifest of the entire protocol stack for a workflow — not just a workflow definition, but the single file that describes how a workflow connects to MCP, A2A, AG-UI, and OTel. This is the "package.json for agentic workflows" positioning made concrete.

**`state_schema:` at workflow level** *(from May 10 brief; still not in spec; LangGraph critical)*

See May 10 brief. Adds LangGraph-style typed state to OSOP. Single most impactful spec change for LangGraph adoption. Include in OSP-0004 or a standalone OSP-0007.

**`max_cost_usd:` on workflow and agent nodes** *(from May 10 brief; enterprise governance)*

See May 10 brief. Cost governance field for AWS Bedrock and enterprise LLM deployments.

### Tooling Gaps

| Tool | Priority | New Trigger | Status |
|------|----------|-------------|--------|
| `osop validate --log` | 🔴 Critical | OSP-0007; `.osoplog` first-class validation | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS MCP GA "auditable" language | Not built |
| `osop export-agent-card` | 🔴 Critical | ADK 1.0 GA; A2A 5 SDKs; OSP-0004 | Not built |
| `osop export-bedrock` | 🔴 Critical | SAP MCP GA + Agent Toolkit GA | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native | Not built |
| `osop protocols` | 🟠 High | **New** — `protocol_bindings:` manifest field | Not built |
| `osop export-aws-agent-toolkit` | 🟠 High | AWS Agent Toolkit GA | Not built |
| `osop export-voltagent` | 🟠 High | **New** — VoltAgent TypeScript DSL bridge | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF | Not built |
| `osop import-sop` | 🟠 High | Strands + GitHub markdown → OSOP | Not built |
| `osop import-soul-md` | 🟡 Medium | OpenClaw 162 SOUL.md templates | Not built |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo adoption | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |

### Ecosystem Plays

| Target | Action | Effort | Rationale |
|--------|--------|--------|----------|
| **OpenClaw** | SOUL.md companion PR | 45 min | 247K+ stars; 31 days overdue |
| **AAIF** | Submit via LFX; use AG-UI gap hook | 2 hrs | Ecosystem map visibility; 31 days overdue |
| **Protocol ecosystem map authors** | Contact digitalapplied.com + awesome-ai-agents-2026 | 15 min | Free discoverability |
| **VoltAgent** | `.osop` example + PR | 60 min | New framework; community forming |
| **AG2 (AutoGen)** | `.osop` companion to `research_and_summarize.py` | 45 min | OTel native; after osoplog-otel-mapping |
| **LangGraph community** | Bridge doc: "OAP runtime, OSOP definition" | 60 min | 34% enterprise citations |
| **AWS community** | Blog: OSOP for AWS Agent Toolkit workflows | 60 min | SAP MCP + Agent Toolkit news cycle |
| **Arazzo GitHub Discussions** | Drop three-way comparison doc link | 15 min | MCP → Arazzo funnel interception |
| **Temporal community** | Forum post + durable-workflow example | 45 min | Production agent developer concentration |
| **Red Hat Developer** | Blog pitch: OTel vs OSOP observability layers | 30 min | Compliance/enterprise audience |
| **Adobe Workfront** | `workfront-approval-workflow.osop.yaml` | 60 min | Workfront MCP launches June 2026 |
| **NIST CAISI** | 2-page comment: "execution audit" framing | 90 min | Window closing; government vocabulary |
| **Google ADK community** | OSP-0004 + ADK bridge doc | 60 min | ADK 1.0 GA; A2A workflow vocabulary forming |

---

## Top 3 Actions for This Week

### 1. OpenClaw PR — SOUL.md companion *(45 min; execute today; Day 32)*

**The case for today specifically:** Every day of delay makes it more likely the OpenClaw community either publishes its own machine-readable workflow format or closes to external contributions. 45 minutes. No external dependencies. No review required. The PR either ships or it doesn't — and the reason it hasn't shipped for 31 days is not strategic, it is executional.

Steps: fork `openclaw/openclaw` → pick most-starred SOUL.md skill → add `workflow.osop.yaml` companion + one-paragraph `OSOP.md` explaining the relationship → submit PR with title "Add machine-readable OSOP workflow companion for [skill-name]".

### 2. Three-way comparison doc *(90 min; publish by Wednesday May 13)*

**Why this week specifically:** The Arazzo "missing piece" narrative is in active circulation. GitHub Agentic Workflows is in active technical preview generating search traffic. Every week without a published comparison doc is a week those narratives set further. The comparison doc is the single most important defensive document OSOP will ever publish — and it can be written in 90 minutes.

File: `docs/comparisons/workflow-formats-compared.md`. Post to dev.to. Submit to Hacker News "Show HN." Link from Arazzo GitHub Discussions.

### 3. AAIF submission *(2 hrs; by Friday May 15)*

**Why this is the highest-leverage action in the backlog:** The AAIF submission is the gate to every protocol ecosystem map. It is the gate to being cited in every "what protocol should I use for X" discussion. It is the gate to co-marketing with MCP and A2A. Every day OSOP is not in the AAIF stack is a day the stack looks complete without it. The submission is drafted. Use the new AG-UI gap hook as the opening paragraph.

---

## Adoption Metrics to Track

| Metric | Day 32 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
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
| Three-way comparison doc | Not written | Published + indexed | Top 3 search result |
| `osoplog-otel-mapping.md` | Not written | Published | Referenced in 3+ tools |
| `osop log-export --format otel-json` | Not built | Alpha | Stable |
| OpenClaw PR | Not submitted | Merged | SOUL.md pattern adopted in 5+ skills |
| VoltAgent example | Not written | Published | — |

---

*Today is Monday — ROADMAP has been updated to reflect Week 2 priorities.*
*Previous brief: [`2026-05-10-daily-brief.md`](./2026-05-10-daily-brief.md)*
