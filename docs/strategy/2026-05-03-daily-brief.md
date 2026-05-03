# OSOP Daily Strategy Brief — 2026-05-03

> Day 24 of the strategy program. Sunday — no ROADMAP update today.

---

## Action Tracker (from 2026-05-02)

| Action | Status | Days Pending | Notes |
|--------|--------|--------------|-------|
| OSP-0004: A2A agent subtype | ⏳ Pending | **23** | Critical catch-up; 5 major frameworks now have native A2A |
| OSP-0005: Trust policy for agent nodes | ⏳ Pending | **23** | |
| AGNTCon / MCPCon NA CFP | ⏳ Pending | ~5 weeks to deadline | |
| AI Engineer World's Fair CFP | ⏳ Pending | ~8 weeks to event | Abstract drafted yesterday |
| AAIF submission | ⏳ Pending | **23** | **Urgency peaked: MCP formally donated to AAIF this week** |
| OpenClaw PR | ⏳ Pending | **23** | 30-minute task; execute today |
| "MCP + OSOP" blog post | ⏳ Pending | 23 | |
| ADL × OSOP positioning piece | ⏳ Pending | 23 | |
| Arazzo comparison doc | ⏳ Pending | 23 | Arazzo 1.1 + AsyncAPI imminent |
| Strands SOP migration example | ⏳ Pending | 1 | New from yesterday; window active |

**Meta-status**: 23 days, zero items closed. Strategy generation is not the bottleneck. Execution is.

---

## Intelligence

### New Signals (2026-05-03)

- **Agent Skills open standard crossed 4-tool adoption** — OpenClaw (247K stars, up from 210K last
  week), Codex CLI, Cursor, and Gemini CLI have all adopted the Agent Skills open standard. Skills
  are defined as a directory with a `SKILL.md` file (YAML frontmatter + markdown instructions).
  The standard makes agent *capabilities* portable across tools. This is the fastest cross-tool
  protocol adoption event since MCP's initial wave. OSOP currently has no integration story for
  Agent Skills — no `skill_ref` field, no worked example, no positioning. This is the new urgency
  this brief introduces.

- **OpenClaw accelerated to 247K+ stars** — Up from ~210K one week ago, driven in part by Agent
  Skills adoption. The OpenClaw PR has been pending 23 days. The community is forming right now.
  The window for a timely first-impression contribution narrows with every passing day.

- **MCP formally donated to AAIF / Linux Foundation** — Anthropic donated the Model Context
  Protocol to the Agentic AI Infrastructure Foundation (AAIF), a directed fund under the Linux
  Foundation, co-founded by Anthropic, Block, and OpenAI with support from Google, Microsoft,
  AWS, Cloudflare, and Bloomberg. MCP now has 97M monthly SDK downloads and 5,800+ servers.
  The AAIF layer stack is live: MCP (tools), A2A (agent routing). The "workflow definition +
  execution audit" seat is unoccupied. OSOP's AAIF submission has never been more timely — and
  never more time-sensitive.

- **Agentic Commerce Protocol (ACP) launched** — OpenAI and Stripe co-launched the Agentic
  Commerce Protocol as an open standard for AI agent commerce interactions
  (`agentic-commerce-protocol/agentic-commerce-protocol` on GitHub). OSOP can add a ready-to-use
  `.osop.yaml` example for an ACP-driven purchase workflow (discovery → product search → checkout
  → confirmation), positioning OSOP as the orchestration layer above commerce agents. Purely
  additive; high discoverability in a fast-growing vertical.

- **LangGraph v1.0 GA: "Open Agent Protocol" for cross-framework execution** — LangGraph
  introduced its own cross-framework communication protocol alongside Google's A2A. The two
  protocols are complementary (A2A = agent discovery/routing, LangGraph OAP = cross-framework
  execution). OSOP sits above both: `.osop` defines the workflow; A2A and OAP handle who executes
  what. The stack story gets cleaner as each layer names itself.

- **GitHub Agentic Workflows expanding scope** — April 20 weekly update added multi-agent workflow
  support. Markdown-as-workflow is now maturing inside GitHub's own platform with multi-agent
  primitives. The trend is accelerating, not plateauing.

- **Arazzo 1.1 imminent: AsyncAPI support** — The upcoming Arazzo 1.1 release adds AsyncAPI
  support, enabling workflow sequences spanning HTTP and event-driven protocols. When it ships,
  every OpenAPI/AsyncAPI developer will ask "Arazzo or OSOP?" The answer exists (Arazzo = API
  call sequences; OSOP = full workflow graph with LLM agents, human steps, CLI, infra, and
  execution audit) but is not written publicly yet.

### Continuing Signals

- **A2A v1.0 production, 150+ orgs, Linux Foundation** — Signed Agent Cards, Microsoft/AWS/
  Salesforce/SAP/ServiceNow in production. LangGraph, CrewAI, LlamaIndex, Semantic Kernel, and
  AutoGen all have native A2A support. OSOP has zero A2A story. OSP-0004 urgency unchanged.

- **AWS Strands Agent SOPs** — Markdown-based natural language workflow spec, Claude/GPT-4
  native support. No visible developer backlash or counter-narrative yet. Window to shape the
  conversation is still open.

- **Temporal: durable execution standard** — OpenAI uses Temporal for Codex in production.
  "Activity as tool" pattern (activities exposed as agent tools with OAI-compatible schemas)
  is the integration model. OSOP's format layer above Temporal (portable workflow definition +
  shareable execution audit) remains unclaimed territory.

- **n8n at 150K+ GitHub stars** — Positioned as the "action layer" for AI agents. Ecosystem
  interoperability play: an OSOP → n8n export tool would connect OSOP's workflow definitions
  to n8n's vast node library.

---

## Threats

1. **Agent Skills standard: a parallel capabilities layer OSOP doesn't address** — Agent Skills
   defines what an agent *can do* (skill portability). OSOP defines what an agent *should do*
   (workflow steps + audit). These are complementary but if Agent Skills reaches the point where
   every `agent` node's behavior is described by a `SKILL.md` reference and OSOP has no
   `skill_ref` hook, OSOP workflows become incomplete descriptions of real agent behavior. The
   integration window is open while the standard is still forming. OSP-0006 closes it.

2. **Markdown workflow formats compounding faster than expected** — GitHub Agentic Workflows now
   has multi-agent support; AWS Strands SOPs have Claude/GPT-4 native integration. Two platforms
   with massive developer trust are co-normalizing "markdown = workflow." The `osop import-sop`
   CLI command and the Strands migration example are the conversion funnel. Neither exists yet.

3. **AAIF composition risk** — MCP is in. A2A will be ratified. The "workflow definition +
   execution audit" seat will be filled by whoever submits first. The submission is drafted.
   Every day it sits unsubmitted is a day another project can claim the slot.

4. **A2A execution log risk** — A2A v1.2 added cryptographic domain verification and signed
   Agent Cards. A v1.3 that adds even a lightweight task execution log format directly competes
   with `.osoplog`. The window to establish "A2A routes → OSOP defines → `.osoplog` audits" as
   the canonical stack is narrowing with each A2A release.

5. **Action backlog compounds** — 23 days, zero items closed. Each additional day costs:
   OpenClaw community forms without OSOP exposure; ADL mental models solidify; CFP deadlines
   approach; the AAIF seat narrative ages.

---

## Opportunities

### Immediate (This Weekend)

- **OpenClaw PR — execute today** — 30 minutes. Fork, write
  `dev-automation-workflow.osop.yaml` modeling their core pattern (issue triage → code analysis
  → fix proposal → PR creation), submit with a domain-focused title. See yesterday's brief for
  specific steps. Nothing new to analyze.

- **Write OSP-0006: `skill_ref` on `agent` nodes** — 1-page RFC proposing an optional
  `skill_ref` field on `agent` nodes referencing an Agent Skills `SKILL.md` manifest:
  ```yaml
  - id: "triage-issue"
    type: "agent"
    name: "Triage GitHub Issue"
    skill_ref: ".skills/issue-triage/SKILL.md"
    runtime:
      provider: "anthropic"
      model: "claude-sonnet-4-20250514"
  ```
  Engines that don't support `skill_ref` ignore it (add-only, backwards compatible). This gives
  the OpenClaw / Codex CLI / Cursor / Gemini CLI user base a first-class hook into OSOP — their
  existing skill definitions become directly referenceable from OSOP workflows.

- **Add OSOP to `caramaschiHG/awesome-ai-agents-2026`** — 300+ resources, updated monthly.
  15-minute PR to the "workflow standards" or "workflow definition" section. Permanent
  discoverability with zero maintenance cost.

### Medium-Term (This Week)

- **AAIF submission** — The timing is at maximum leverage. MCP's Linux Foundation donation is
  fresh news. Submit via Linux Foundation intake. One-page submission covering the layer map:
  MCP (tools) + A2A (routing) + OSOP (workflow definition + execution audit).

- **ACP workflow example** — `examples/agentic-commerce-workflow.osop.yaml` modeling an
  AI-agent purchase flow using the Agentic Commerce Protocol. Purely additive; targets a new
  discovery vertical with zero competitive risk.

- **Arazzo comparison doc** — `docs/comparisons/arazzo-vs-osop.md` before Arazzo 1.1 ships.
  Positioning: Arazzo sequences API calls; OSOP orchestrates full workflows (agents, humans, CLI,
  infra) and records execution. Complementary and frequently used together.

- **Submit AI Engineer World's Fair CFP** — See yesterday's abstract draft. June 29–July 2, SF.
  Talk: *"The Portable Workflow Layer Above MCP + A2A."* Also submit to AGNTCon / MCPCon NA.

---

## Evolution Ideas

### Spec Improvements

**OSP-0006: `skill_ref` on `agent` nodes** *(new — Agent Skills integration)*
Optional field referencing an Agent Skills `SKILL.md` manifest. Engines SHOULD load the skill
manifest before executing the node. Add-only, backwards compatible. Makes OSOP workflows
first-class citizens of the Agent Skills ecosystem.

**OSP-0004: A2A agent subtype** *(critical — Day 23 overdue)*
`agent` node with `subtype: "a2a"` + `runtime.agent_card_url`. Makes OSOP the workflow layer
above A2A's 150-org production deployment.

**OSP-0005: Trust policy for agent nodes** *(Day 23 overdue)*
Permission model for what agent nodes can access. Required for enterprise adoption.

**`osop import-sop` CLI command** *(response to markdown workflow trend)*
LLM-assisted conversion of markdown SOPs (Strands, GitHub Agentic Workflows) to `.osop.yaml`.
Converts the markdown format trend into an OSOP adoption funnel.

**Streaming semantics on `agent` nodes**
Add `runtime.streaming: true` + `runtime.stream_to: <node_id>`. Every production LLM streams;
OSOP currently has no model for it.

**`.osoplog` → OTel span export**
`osop log-export --format otel-json` maps node executions to OTel spans. Required for
enterprise observability integrations (LangSmith, Jaeger, Datadog, Honeycomb).

### Tooling Gaps

| Tool | Impact | Effort |
|------|--------|--------|
| `osop import-sop` | High — converts markdown users to OSOP | Medium |
| `osop log-export --format otel-json` | High — enterprise observability | Medium |
| `osop export-agent-card` | High — A2A ecosystem entry | Low |
| OSOP Playground (in-browser) | High — zero-install first experience | High |
| `osop export-n8n` | Medium — 150K-star ecosystem bridge | Medium |

### Ecosystem Plays

- **Agent Skills**: OSP-0006 RFC + OpenClaw Discussions post + awesome-ai-agents-2026 PR
- **ACP**: `examples/agentic-commerce-workflow.osop.yaml` + dev.to post
- **AAIF**: Submit alongside MCP's foundation entry — peak timing
- **Strands**: Migration example + 400-word dev.to post — window still open
- **A2A working group**: Request observer status at `a2aproject/A2A`
- **ADL (nextmoca/adl)**: `runtime.adl_manifest` spec hook + positioning post

---

## Top 3 Actions for This Week

### 1. OpenClaw PR — execute today (30 minutes, Day 23)

No new analysis. Just execute.

1. Fork the OpenClaw repository and locate the examples or contrib directory
2. Write `dev-automation-workflow.osop.yaml` modeling: issue triage → code analysis → fix
   proposal → PR creation
3. Submit PR with a domain-focused title ("Add structured developer automation workflow
   example") — one sentence linking to osop.ai in the description
4. Done

### 2. Write OSP-0006: `skill_ref` for Agent Skills integration

**Why now**: Agent Skills just crossed the 4-tool adoption threshold (OpenClaw, Codex CLI,
Cursor, Gemini CLI) in a single week. This is the fastest cross-tool protocol adoption since
MCP's initial wave. Writing the RFC now — while the standard is still forming — positions OSOP
as a natural complement rather than an afterthought. The RFC is a 1-page spec doc. The window
for influence on how the skill ecosystem and the workflow ecosystem relate to each other is open
today; it narrows every week.

**Specific steps**:
1. Create `docs/proposals/OSP-0006-skill-ref.md`
2. Define `skill_ref: string` (optional) on `agent` node — path to `SKILL.md` manifest
3. Define runtime semantics: load skill instructions before LLM invocation; merge with
   `system_prompt` if both present
4. Add worked example: OpenClaw-style issue triage with `skill_ref`
5. Open as a GitHub Issue on osop-spec for community discussion
6. Post link in OpenClaw Discussions: "OSOP now supports Agent Skills `skill_ref` — here's how"

### 3. AAIF submission

**Why now**: MCP's Linux Foundation donation is this week's news. The AAIF layer stack is live
with MCP and is awaiting A2A ratification. The "workflow definition + execution audit" seat has
never had a clearer narrative anchor. Submitting this week = "OSOP filed alongside MCP's
foundation entry." Submitting next week = "OSOP filed after the news cycle moved on."

**Specific steps**:
1. Use the existing draft from earlier briefs
2. Frame the layer map explicitly: MCP (tool connectivity, 97M downloads) + A2A (agent routing,
   150 orgs) + OSOP (workflow definition + execution audit, the missing format layer)
3. Submit via Linux Foundation intake: `lfx.linuxfoundation.org/projects/new`
4. CC the AAIF working group
5. Publish a factual one-paragraph post announcing the submission

---

## Adoption Metrics to Track

| Metric | Current | Target (Day 30) | Target (Day 60) | Target (Day 90) |
|--------|---------|-----------------|-----------------|------------------|
| GitHub stars (osop-spec) | 0 | 50 | 200 | 500 |
| Combined ecosystem stars | 0 | 100 | 500 | 2,000 |
| External PRs merged | 0 | 3 | 10 | 25 |
| Active adopters (badge) | 0 | 2 | 10 | 25 |
| NPM downloads (osop-sdk-js) | — | 500/mo | 2k/mo | 10k/mo |
| PyPI downloads (osop-sdk-py) | — | 500/mo | 2k/mo | 10k/mo |
| Discord members | 0 | 50 | 200 | 500 |
| Repos with .osop files (GitHub search) | 0 | 5 | 20 | 50 |
| Blog/content views | 0 | 2k | 10k | 50k |
| AAIF submission status | Draft ready | **Submitted** | In review | Accepted/Pending |
| A2A working group participation | Not started | Observer requested | Active observer | Contributor |
| OSP proposals published | 3 | **6** (OSP-0004, 0005, 0006) | 8 | 12 |
| CFP submissions | 0 | **3** (AI Eng WF + AGNTCon + MCPCon) | — | 1+ accepted |
| Agent Skills integration (OSP-0006) | Not started | **RFC published** | Spec merged | 2+ tools referencing |
| Strands migration example | 0 | 1 published | 3 | 5 |
| ACP workflow example | 0 | 1 published | 3 | 5 |
| Web search presence for "OSOP workflow" | 0 results | 1+ indexed page | 5+ pages | Top-10 result |
| ADL collaboration | Not started | Post published | NextMoca engaged | Co-positioning agreed |

---

## Notes

- **The signal that changed today**: Agent Skills crossed 4-tool adoption simultaneously.
  OSP-0006 is the response — an optional `skill_ref` field that makes OSOP the workflow
  orchestration layer above skill definitions, not a competing format.

- **AAIF timing is at maximum leverage today.** MCP's Linux Foundation donation is this week's
  news. Each passing day dilutes the timing advantage. The submission is drafted.

- **The synthesis loop is OSOP's answer to every competitor.** Strands markdown SOPs cannot
  diff two execution runs. A2A task logs are not a portable workflow definition. GitHub Agentic
  Workflows do not capture cost, token usage, or a replayable execution record. The loop —
  define → execute → record → synthesize → improve — is OSOP's unique value and belongs at
  the front of every piece of communication.

- **The stack is naming itself.** MCP = tools. A2A = routing. LangGraph OAP = cross-framework
  execution. Agent Skills = capabilities. None of them define the workflow graph or the execution
  audit trail. OSOP's position is unambiguous. The brief needs to stop naming it and start
  occupying it.
