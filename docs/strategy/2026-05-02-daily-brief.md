# OSOP Daily Strategy Brief — 2026-05-02

## Action Tracker (from 2026-05-01)

| Action | Status | Notes |
|--------|--------|-------|
| OSP-0004: A2A node type | ⏳ Pending | 22 days overdue; still the single highest-leverage spec move |
| OSP-0005: Trust policy for agent nodes | ⏳ Pending | 22 days overdue |
| AGNTCon/MCPCon CFP submission | ⏳ Pending | Deadline June 7-8 (~5 weeks); **AI Engineer World's Fair CFP now also open** |
| AAIF submission | ⏳ Pending | Drafted and unsubmitted; structural play, execute this week |
| OpenClaw PR | ⏳ Pending | **Day 22 pending; 30-min task; execute today** |
| "MCP + OSOP" blog post | ⏳ Pending | Still highest-reach content play without new tooling |
| ADL × OSOP positioning piece | ⏳ Pending | Window still open; NextMoca community young |
| Arazzo comparison doc | ⏳ Pending | Arazzo 1.1 + AsyncAPI about to ship; pre-empt the narrative now |

---

## Intelligence

### New Threats Emerged This Cycle (Day 23)

- **AWS Strands Agent SOPs launched** — AWS open-sourced a markdown-based natural language
  workflow specification called "Agent SOPs" ([GitHub](https://github.com/strands-agents/agent-sop),
  [AWS Blog](https://aws.amazon.com/blogs/opensource/introducing-strands-agent-sops-natural-language-workflows-for-ai-agents/)).
  SOPs are plain markdown files with parameterized inputs that guide AI agents through
  multi-step workflows. They work directly with Claude, GPT-4, Strands SDK, Kiro, and Cursor —
  no SDK required, no schema to learn. InfoWorld covered it as a developer-friendly alternative
  to complex custom code. This is the most significant new entrant in the workflow definition
  space since OSOP launched. AWS distribution + markdown format + zero learning curve = fast
  grassroots adoption among developer teams. **OSOP's response must be concrete, not conceptual:**
  machine-executability, structured diffing, `.osoplog` audit trail, and the synthesis loop are
  things markdown cannot do. The comparison doc writes itself — it just needs to be written.

- **GitHub Agentic Workflows entered technical preview (Feb 2026)** — GitHub now lets developers
  write repository automation workflows in plain Markdown instead of complex YAML, with AI agents
  executing them inside GitHub Actions
  ([Changelog](https://github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview/)).
  GitHub Squad embeds multi-agent workflows directly in repos. This is the second major platform
  in 30 days normalizing "markdown as workflow format" for developers. The trend is clear: the
  industry default for low-friction workflow specs is converging on natural language / markdown.
  OSOP's structural differentiation (schema validation, execution audit, synthesis loop) must be
  surfaced immediately or OSOP will be dismissed as "just a more complicated markdown SOP."

### Continuing Signals

- **A2A at v1.2, 150 orgs in production, Linux Foundation governance** — Status unchanged from
  yesterday's brief. OSP-0004 is urgent catch-up to a production standard, not a future-looking
  proposal. LangGraph, CrewAI, LlamaIndex, Semantic Kernel, and AutoGen now all have native A2A
  support. OSOP has zero A2A story.

- **MCP at 97M monthly downloads, 5,800+ servers, 78% enterprise adoption** — OSOP's MCP server
  is correctly placed. The audit trail gap flagged in the MCP 2026 roadmap ("enterprise teams need
  audit trails, SSO-integrated auth, gateway behavior, and configuration portability") maps
  exactly to what `.osoplog` provides. This language should be in every OSOP positioning doc.

- **AI Engineer World's Fair 2026 CFP is open** — June 29–July 2, San Francisco
  ([event page](https://www.ai.engineer/worldsfair)). This is a larger venue than AGNTCon with a
  broader developer audience. The synthesis loop story — define → execute → record → optimize —
  is a perfect World's Fair talk. Early submissions get committee feedback. The post-MCP Dev Summit
  community energy makes this the ideal moment for "here's the layer the stack was missing."

- **Arazzo 1.1 AsyncAPI support imminent** — v1.1 adds multi-protocol workflow sequences (HTTP +
  event-driven APIs). When it ships it gets a wave of OpenAPI/AsyncAPI press. OSOP's comparison
  doc needs to exist before that press wave, not in response to it.

- **OpenClaw at 210k+ stars** — Still the breakout trending project. The OpenClaw PR has been
  pending for 22 days. This is a 30-minute task with a direct line to the fastest-growing workflow
  automation community.

- **Temporal positioned as "Durable Agent Execution" standard** — Unchanged. The format layer
  above Temporal (portability, sharing, audit) remains OSOP's unclaimed territory in that ecosystem.

- **ADL community still young, still soliciting input** — Window remains open. Three months since
  launch, community still forming. The `runtime.adl_manifest` spec hook + positioning piece is
  still a convertible moment.

---

## Threats

1. **AWS Strands SOPs: markdown normalizes zero-friction workflows** — The combination of AWS
   distribution, Claude/GPT-4 native support, and markdown format means Agent SOPs will reach
   developers before OSOP does in most discovery scenarios. The "markdown SOP → OSOP upgrade"
   migration story (add structure, add audit trail, add synthesis) is the conversion funnel OSOP
   needs to build immediately.

2. **GitHub + AWS converging on markdown as the default workflow format** — Two of the most
   developer-trusted platforms are signaling the same direction in the same month. Without a
   clear "here's what you can't do with markdown" answer, OSOP risks being perceived as the
   harder option for the same outcome.

3. **A2A absorbing the execution narrative** — A2A v1.2 has signed Agent Cards, multi-tenancy,
   and cryptographic domain verification. If A2A adds even a lightweight execution trace format
   (a task log), it directly competes with `.osoplog`. The window to own the execution record
   layer above A2A is narrowing.

4. **Action backlog continues to age** — Day 22 with zero items closed. Each deferred action is
   a compounding cost: OpenClaw PR was timely 22 days ago, it's still timely today — but the
   relationship potential decreases as the project matures. The ADL community window closes as
   their mental models solidify. CFP deadlines move closer.

5. **Arazzo 1.1 press wave will surface "why not Arazzo?" objection** — Every developer in the
   OpenAPI ecosystem will ask this when Arazzo 1.1 ships. The answer exists (Arazzo = API
   sequences; OSOP = full workflow graph including agents, humans, CLI, and infra with execution
   audit) but it's not written anywhere publicly yet.

---

## Opportunities

### Immediate (This Weekend / Early Next Week)

- **OpenClaw PR — do it today** — 30-minute task that's been deferred 22 days. Create
  `one-click-dev-automation.osop.yaml` in the OpenClaw examples directory modeling their core
  workflow pattern (issue triage → code analysis → fix generation → PR creation). Submit as a
  standalone useful example, no OSOP pitch. The PR title should mention the workflow domain, not
  OSOP. Value-first.

- **AWS Strands SOP → OSOP migration example** — Write
  `examples/migrations/strands-sop-to-osop.osop.yaml` pairing an equivalent Strands markdown SOP
  side-by-side with its structured OSOP equivalent. Show the upgrade path: the markdown SOP
  becomes the human-readable documentation; the `.osop.yaml` becomes the machine-executable
  definition with schema validation, edge modes, and `.osoplog` output. Then write a 400-word
  dev.to post linking to it. This converts AWS's launch from a threat into OSOP's highest-reach
  discovery vector.

- **Submit AI Engineer World's Fair 2026 CFP** — CFP open now, event June 29–July 2, SF
  ([worldsfair](https://www.ai.engineer/worldsfair)). Talk title: *"The Portable Workflow Layer
  Above MCP + A2A: How .osop and .osoplog close the gap the agentic stack left open."* Core
  argument: MCP solved tool connectivity (97M monthly downloads); A2A solved agent-to-agent
  routing (150 production orgs); but there's still no portable, auditable format for what those
  agents actually *do* — their workflow graph and execution trace. `.osop` is the definition;
  `.osoplog` is the audit trail; the synthesis loop is the flywheel. Submit alongside AGNTCon.

- **Add OSOP to `caramaschiHG/awesome-ai-agents-2026`** — 300+ resources, updated monthly, GitHub
  repo. A one-paragraph PR adds OSOP to the "workflow standards" or "workflow definition" section.
  This is a 15-minute task that increases discoverability permanently.

### Medium-Term (This Week)

- **AAIF submission — execute** — The draft exists. The AAIF layer map is complete: MCP (tools) +
  A2A (agent-to-agent) + AGENTS.md (project guidance) + OSOP (workflow definition + execution
  audit). No other project covers that slot. Submit via the Linux Foundation intake process.

- **Arazzo comparison doc** — Write `docs/comparisons/arazzo-vs-osop.md` before Arazzo 1.1 ships
  with AsyncAPI support. Positioning: Arazzo sequences API calls across HTTP and async transports;
  OSOP orchestrates entire workflows including LLM agents, human approval steps, CLI operations,
  and infrastructure — and records execution. Complementary, not competing.

- **ADL × OSOP blog post** — Publish on dev.to: *"ADL defines what your agent IS. OSOP defines
  what workflows DO. Here's how to use both."* Engage the NextMoca team
  ([nextmoca/adl](https://github.com/nextmoca/adl)) with a GitHub comment proposing
  `runtime.adl_manifest` as a spec hook. Window is still open; execute before ADL reaches 6
  months and community mental models solidify.

---

## Evolution Ideas

### Spec Improvements

**OSP-0004: A2A Agent Subtype** *(critical — 22 days overdue)*
Spec already drafted in yesterday's brief. Nothing new to add except urgency: every day without
this, OSOP is invisible to 150 production A2A deployments and the 5 major frameworks (LangGraph,
CrewAI, LlamaIndex, Semantic Kernel, AutoGen) that now have native A2A support.

**Markdown SOP import** *(new — response to Strands/GitHub Agentic Workflows trend)*

Add a CLI command:
```bash
osop import-sop agent-workflow.md --out workflow.osop.yaml
```
This uses an LLM to parse a natural language markdown SOP and emit a structured `.osop.yaml`.
The positioning: markdown SOPs are the discovery format; `.osop.yaml` is the production format.
Every AWS Strands user who wants schema validation, parallel edges, fallback chains, and
`.osoplog` audit trails has a zero-friction upgrade path. This turns the Strands + GitHub
Agentic Workflows trend into a funnel, not a threat.

**`workflow` node type** *(composability gap — unchanged from yesterday)*
Sub-workflow invocation as a first-class node type, not a `workflow_ref` workaround. Most-requested
feature in any workflow system.

**Streaming semantics on `agent` nodes** *(LLM-reality gap — unchanged from yesterday)*
Every production LLM streams. OSOP currently has no `streaming:` field. Add it with an
optional `stream_to:` destination.

**`.osoplog` → OpenTelemetry export** *(observability integration)*
Map `.osoplog` fields to OTel spans: each node execution becomes a span, each edge traversal
becomes a link, `cost_usd` and `token_count` become span attributes. Output:
```bash
osop log-export my-run.osoplog --format otel-json
```
This makes OSOP execution records natively compatible with LangSmith, Jaeger, Datadog, Honeycomb,
and every OTel-compatible observability backend. Enterprise evaluators expect this.

### Tooling Gaps

- **`osop import-sop`**: LLM-assisted conversion of markdown SOPs to structured `.osop.yaml`.
  Converts Strands/GitHub Agentic Workflows users into OSOP adopters without requiring them to
  learn the schema first.
- **`osop log-export --format otel-json`**: OTel span export from `.osoplog` files. Enterprise
  observability integration in one command.
- **OSOP Playground** (unchanged, still highest-priority tooling): In-browser validator + visual
  workflow editor. Zero install. Indexable. Shareable. First experience without friction.
- **`osop export-agent-card`**: Generate A2A v1.2 Agent Card from a `.osop.yaml` workflow
  definition. Makes OSOP workflows discoverable by A2A registries.

### Ecosystem Plays

- **Strands users**: Write one worked migration example. One dev.to post. One GitHub comment on
  the `strands-agents/agent-sop` repo proposing OSOP as the structured evolution of markdown SOPs.
  Frame: "you write the SOP in markdown for humans; you run the `.osop.yaml` in production for
  machines." Add-only, useful standalone, no zero-sum framing.
- **GitHub Agentic Workflows community**: Blog post — *"GitHub Agentic Workflows vs. OSOP:
  same goal, different layers."* GitHub's markdown workflows are great for simple repo automation;
  OSOP adds structured edges, fallback chains, human-in-the-loop nodes, cost tracking, and
  execution audit. Use both: GitHub Agentic Workflows → triggers the `.osop` run → `.osoplog`
  captures it.
- **Awesome-AI-Agents-2026 PR**: 15-minute task, permanent discoverability boost.
- **A2A working group participation**: Request observer status at `a2aproject/A2A`. OSOP's
  execution log and workflow definition are additive to A2A — participation builds visibility
  with the 150 orgs already in production.

---

## Top 3 Actions for This Week

### 1. OpenClaw PR — execute today (30 minutes)
**Why now**: This has been deferred 22 days. It's the shortest path from zero to a real external
contribution in a 210k-star repository. The longer it waits, the more the project's community
forms without OSOP exposure. No analysis needed; just do it.

**Specific steps**:
1. Fork `openclaw` (or locate the examples/contrib directory)
2. Write `dev-automation-workflow.osop.yaml` modeling their core pattern:
   issue triage → code analysis → fix proposal → PR creation
3. Submit PR with title about the workflow domain ("Add structured developer automation workflow
   example"), not about OSOP
4. In the PR description, one sentence linking to osop.ai if they want to learn more

### 2. Submit AI Engineer World's Fair 2026 CFP
**Why now**: Event is June 29–July 2 in San Francisco. CFP is open today. The post-MCP Dev Summit
community energy makes this the ideal moment. Early submission gets committee feedback for
iteration before the deadline.

**Specific steps**:
1. Draft abstract (~300 words):
   - Hook: "MCP solved tool connectivity. A2A solved agent-to-agent routing. But what's the
     portable, auditable format for what those agents actually *do*? The stack has a gap."
   - Proof: `.osop` = workflow definition, `.osoplog` = execution audit trail, synthesis loop =
     optimization flywheel. Live demos available for both formats.
   - Outcome: Audience leaves knowing OSOP exists and how it fits between MCP and A2A.
2. Submit to AI Engineer World's Fair CFP at ai.engineer/worldsfair
3. Submit the same abstract (adapted) to AGNTCon + MCPCon NA
   (https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/cfp/)

### 3. Write "OSOP vs. AWS Strands SOPs" comparison + migration example
**Why now**: AWS Strands Agent SOPs just launched. The press cycle is active. Developer teams
are discovering it right now and forming their opinions on whether they need anything beyond
markdown. A concrete migration example + 400-word comparison post — written this weekend —
gets indexed before the narrative sets. Waiting two weeks means writing in response to the crowd,
not ahead of it.

**Specific steps**:
1. Write `examples/migrations/strands-sop-to-osop.osop.yaml` using a real Strands SOP example
   as the input, showing the structured equivalent with parallel edges, conditional routing,
   fallback handling, and `.osoplog` output that a markdown SOP cannot express
2. Write 400-word dev.to post: *"AWS Strands Agent SOPs are great. Here's what to do when you
   need schema validation, parallel execution, and an audit trail."* Zero-sum framing strictly
   avoided — the post ends with "use both."
3. Post link in the `strands-agents/agent-sop` GitHub Discussions with a framing of "exploring
   the structured complement to markdown SOPs"

---

## Adoption Metrics to Track

| Metric | Current | Target (Day 30) | Target (Day 60) | Target (Day 90) |
|--------|---------|-----------------|-----------------|-----------------|
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
| OSP proposals published | 3 | **5** (OSP-0004, 0005) | 8 | 12 |
| CFP submissions | 0 | **3** (AI Eng WF + AGNTCon NA + EU) | — | 1+ accepted |
| Web search presence for "OSOP workflow" | 0 results | 1+ indexed page | 5+ pages | Top-10 result |
| ADL collaboration status | Not started | Post published | NextMoca engaged | Co-positioning agreed |
| Strands/GitHub Agentic Workflows migration example | 0 | **1 published** | 3 | 5 |

---

## Notes

- Today is Saturday, May 2 — no ROADMAP update (Mondays only).
- This is Day 23 of the strategy program, second brief since April 10.
- **Critical meta-observation**: The action backlog is now 22 days old with zero items closed.
  The highest-priority action is not generating more analysis — it is closing the OpenClaw PR.
  22 days of deferral on a 30-minute task is a process failure, not a strategy failure.
- **The markdown trend is the week's most important new signal.** AWS Strands + GitHub Agentic
  Workflows both launched or entered preview in early 2026 and both normalize markdown as the
  developer-default workflow format. OSOP must ship `osop import-sop` and the Strands migration
  example before this narrative crystallizes. The window is weeks, not months.
- **The AAIF open seat remains real and time-limited.** The layer map is complete: MCP (tools),
  A2A (agent-to-agent), AGENTS.md (project guidance), OSOP (workflow definition + execution audit).
  No other project covers that slot. The submission is drafted. Submit it this week.
- **OSOP's synthesis loop is the answer to every competitor.** Strands markdown SOPs cannot
  produce a diff between two execution runs. A2A task logs are not a portable workflow definition.
  GitHub Agentic Workflows do not capture cost, token usage, or a replayable execution record.
  The synthesis loop — define → execute → record → synthesize → improve — is OSOP's unique
  value and it belongs at the front of every piece of communication.
