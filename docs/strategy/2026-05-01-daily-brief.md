# OSOP Daily Strategy Brief — 2026-05-01

## Action Tracker (from 2026-04-10)

| Action | Status | Notes |
|--------|--------|-------|
| OSP-0004: A2A node type | ⏳ Pending | 21 days overdue; A2A now at v1.2 — urgency critical |
| OSP-0005: Trust policy for agent nodes | ⏳ Pending | 21 days overdue; MCP poisoning cycle cooling |
| AGNTCon/MCPCon CFP submission | ⏳ Pending | Deadline moved from 8 weeks to **5-6 weeks** away |
| AAIF submission | ⏳ Pending | Draft exists; intake channel still not executed |
| OpenClaw PR | ⏳ Pending | 30-min task; 21 days deferred; execute today |
| "MCP + OSOP" blog post | ⏳ Pending | Still highest-reach content play |
| AgentSpec / ADL comparison doc | ⏳ Pending | NOW URGENT — ADL has Hacker News + InfoQ traction |
| Arazzo comparison doc | ⏳ Pending | Arazzo 1.1 AsyncAPI support imminent |

---

## Intelligence

### Protocol & Standards Layer (21-Day Delta Since Last Brief)

- **A2A Protocol reached v1.2**: Google's Agent2Agent (A2A) protocol grew from 50 launch
  partners to 150 orgs **in production** (not pilot). v1.2 adds signed Agent Cards with
  cryptographic domain verification, multi-tenancy (single endpoint hosts multiple agents),
  multi-protocol bindings (JSON-RPC + gRPC on same agent), and version negotiation from v0.3.
  A2A is now under Linux Foundation / AAIF governance. LangGraph, CrewAI, LlamaIndex, Semantic
  Kernel, and AutoGen all have native A2A support. OSP-0004 is no longer a future-looking proposal
  — it's urgent catch-up to a production standard.

- **MCP Dev Summit occurred April 2-3, NYC**: The first MCP Dev Summit under AAIF governance
  took place. Community momentum is at its highest. The aftermath is blogposts, discussion, and
  enterprise teams evaluating their MCP architecture. Every AAIF project (MCP, goose, AGENTS.md)
  is getting visibility — OSOP is not yet among them. The post-summit window for content is now.

- **AAIF is active and accepting new projects**: The Agentic AI Foundation (Anthropic, OpenAI,
  Block, Google, Microsoft, AWS, Bloomberg, Cloudflare as platinum members) is now operating under
  Linux Foundation governance. The three founding projects (MCP, goose, AGENTS.md) each address a
  different layer. No workflow definition + execution log standard has been contributed. This is
  OSOP's open seat. Every week without a submission is a week the roster solidifies without OSOP.

- **ADL (Agent Definition Language) has Hacker News + InfoQ traction**: NextMoca released ADL
  (Apache 2.0) in February 2026 as "the open standard AI agents have been missing." InfoQ covered
  it March 2026. ADL defines what an agent IS — identity, role, LLM settings, tools, permissions,
  RAG data access, governance metadata. OSOP defines what workflows DO and what happened during
  execution. These are complementary, not competing — but developers encountering both without
  clear positioning will be confused. ADL's community is young and actively soliciting input.
  The window to establish a "use both" narrative is open *right now*.

- **Google Cloud Next 2026** featured A2A prominently as the agent-to-agent communication layer.
  The community discourse is: MCP = tool connectivity, A2A = agent-to-agent, AGENTS.md = project
  guidance. There is no item in this stack for workflow definition + execution audit. That is
  OSOP's explicitly open slot.

- **Temporal is being positioned as "Durable Agent Execution" standard** for production agent
  workflows. Key distinction: Temporal is an execution *engine*, not a portable workflow *format*.
  An `.osop.yaml` file can describe what a Temporal workflow does, and `.osoplog` can capture what
  it executed. OSOP is the format layer Temporal workflows currently lack for portability.

- **Microsoft Agent Framework 1.0 is GA** (targeted Q1 2026, presumably now live). It is
  OpenAPI-first: any REST API with an OpenAPI spec can be imported as a callable tool. It supports
  MCP, A2A, and OpenAPI. The OSOP → MAF adapter story (use `.osop.yaml` to define the workflow
  that MAF executes) is now publishable and timely.

- **OpenAgents** is the only framework with native support for both MCP and A2A simultaneously.
  LangGraph and AutoGen still do not natively support either protocol. This fragmentation validates
  OSOP's existence: the workflow format must be framework-neutral.

- **Arazzo 1.1 with AsyncAPI support** is imminent (tracked April 10). Arazzo sequences API calls;
  OSOP orchestrates agents + humans + APIs + CLI + infra. The comparison doc remains unwritten.

---

## Threats

1. **OSOP search invisibility (day 22)**: Still zero web presence for "OSOP workflow standard."
   Discovery before advocacy. Nothing else compounds without fixing this first.

2. **A2A v1.2 absorbing workflow narrative**: With 150 production orgs and cryptographic Agent
   Cards, A2A is becoming the de-facto "how agents communicate." If A2A adds an execution log
   format (even lightweight), it competes directly with `.osoplog`. The window to own the
   execution record layer above A2A is now — not in two months.

3. **ADL community forms without OSOP engagement**: ADL is young (~3 months public) and
   specifically inviting framework maintainers and contributors to shape its evolution. If OSOP
   does not engage, ADL developers will build their own workflow extension rather than pointing
   users to OSOP. A timely blog post and GitHub comment on the ADL repo converts a potential
   competitor into a feeder ecosystem.

4. **AAIF project roster solidifying**: MCP Dev Summit was April 2-3. AAIF governance is
   operational. The founding projects are set. New project contributions require Working Group
   review. Every week of delay moves OSOP from "early contributor" to "late-stage applicant."

5. **Arazzo 1.1 + AsyncAPI press cycle**: When Arazzo 1.1 ships with AsyncAPI support, it will
   get a wave of press from the OpenAPI and AsyncAPI communities. Absent a clear OSOP comparison
   doc, "why not just use Arazzo?" will be an unanswered objection blocking OSOP adoption in
   API-heavy teams.

6. **Action backlog decay**: 8 actions from April 10 are still pending. Each deferred action
   represents a closed window (MCP poisoning news cycle, ADL community formation, A2A v1.2 moment).
   The accumulation of pending items is itself a risk signal.

---

## Opportunities

### Immediate (This Week)

- **Write OSP-0004: OSOP × A2A Bridge** — A2A v1.2 is in production at 150 orgs. The spec
  document should define: (a) `a2a` as a named `agent` subtype with `runtime.endpoint` pointing
  to an A2A service URL and `runtime.agent_card_url` for capability discovery; (b) a CLI command
  `osop export-agent-card <workflow.osop.yaml>` that generates an A2A v1.2-compliant Agent Card
  JSON from a workflow definition; (c) how `.osoplog` captures A2A `task_id` for cross-framework
  execution tracing. Publishing this makes OSOP visible to 150+ production A2A deployments.

- **Submit AGNTCon + MCPCon CFP (NA + EU)** — Deadline June 7-8, now ~5 weeks away. The post-MCP
  Dev Summit window is ideal: the community is active, organizers are engaged, and early
  submissions get committee feedback. Draft talk title: *"The missing layer: portable workflow
  definition and execution audit for production MCP + A2A systems."* Core argument: MCP solved
  tool connectivity; A2A solved agent-to-agent communication; `.osop` + `.osoplog` solve
  the workflow definition and execution audit gap that MCP's own 2026 roadmap flags as missing.
  [NA CFP](https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/cfp/) |
  [EU CFP](https://events.linuxfoundation.org/agntcon-mcpcon-europe/program/cfp/)

- **ADL × OSOP positioning piece** — Publish on dev.to and LinkedIn: *"ADL defines what your
  agent IS. OSOP defines what your workflows DO. Here's how to use both."* Core narrative:
  ADL = agent blueprint (capabilities, tools, LLM settings, governance); OSOP = workflow
  definition (how agents, humans, APIs, and CLI steps connect) + execution record (what actually
  ran, how long, what it cost). Propose: use an ADL manifest as the `runtime.adl_manifest`
  source in an OSOP `agent` node. Reach out to NextMoca team on GitHub with a link. The ADL
  community is young and collaborative — this has alliance potential.
  [ADL GitHub](https://github.com/nextmoca/adl)

### Medium-Term (This Month)

- **AAIF submission (execute)**: Draft `proposals/AAIF-submission.md` exists. The action
  remaining is submission via Linux Foundation project intake at linuxfoundation.org. OSOP fills
  a layer none of the three founding projects touch: portable workflow graphs + execution logs.
  The submission narrative: AAIF has MCP (tool access), A2A (agent-to-agent), AGENTS.md (project
  guidance) — the missing piece is a portable workflow definition + execution audit format. That
  is OSOP's charter.

- **OSP-0005: Trust Policy for agent nodes** — Still critical. Write
  `proposals/OSP-0005-trust-policy.md`. Schema: add `trust_policy:` to `agent` nodes with
  `level` (strict/sandboxed/permissive), `allowed_tools`, `deny_on_unknown_tool: bool`,
  `max_tool_calls_per_step`. The MCP tool poisoning news cycle has cooled, but enterprise
  evaluations of agent security are ongoing. This spec addition reads as mature governance.

- **Temporal × OSOP format story** — Write a blog post: *"Temporal gives you durable execution.
  OSOP gives you a portable format for what you're executing."* Provide a worked example showing
  a Temporal workflow side-by-side with its `.osop.yaml` equivalent. Target audience: Temporal
  users who need to document, share, or audit their agent workflows across teams. Zero OSOP pitch
  — just add value to the Temporal community.

- **OpenClaw PR** — Still pending after 21 days. This is a 30-minute task. Create one
  `.osop.yaml` example modeling an OpenClaw-style developer automation workflow (code analysis
  → fix suggestion → PR creation). Submit to the OpenClaw repo as an example contribution.
  No OSOP pitch — just a useful example that works standalone.

---

## Evolution Ideas

### Spec Improvements

**OSP-0004: A2A Agent Subtype + Agent Card Export** *(critical — execute this week)*

Add `a2a` as a named `agent` subtype:
```yaml
- id: research-specialist
  type: agent
  subtype: a2a
  name: Research Specialist Agent
  runtime:
    endpoint: "https://agents.example.com/research"
    agent_card_url: "https://agents.example.com/.well-known/agent.json"
    protocol: "a2a/1.2"
    task:
      message: "${inputs.research_query}"
    output_mapping:
      result: "$.artifacts[0].parts[0].text"
```
New CLI command:
```bash
osop export-agent-card my-workflow.osop.yaml --out agent-card.json
```
The exported Agent Card declares the workflow's capabilities and input/output schema in A2A v1.2
format, making the OSOP workflow discoverable by A2A registries.

**ADL Manifest Integration** *(new, alliance-oriented)*

Add `runtime.adl_manifest` to `agent` nodes, allowing an ADL file to be the canonical agent
definition source:
```yaml
- id: code-reviewer
  type: agent
  subtype: llm
  name: Code Review Agent
  runtime:
    adl_manifest: "./agents/code-reviewer.adl.yaml"  # ADL-defined agent
    input_mapping:
      messages:
        - role: user
          content: "Review this diff:\n${inputs.diff}"
```
This makes OSOP + ADL complementary stacks rather than competitors, and creates a natural
adoption funnel: ADL users need a workflow format → OSOP.

**`workflow` Node Type** *(composability gap)*

The current spec uses `workflow_ref` on `system` nodes (v1.1), which is a workaround, not a
first-class construct. Promote sub-workflow invocation to a dedicated node type:
```yaml
- id: run-onboarding
  type: workflow
  name: Customer Onboarding
  runtime:
    ref: "./onboarding.osop.yaml"  # or workflow id
    inputs:
      customer_id: "${inputs.customer_id}"
  outputs:
    - name: onboarding_status
      from: "$.outputs.final_status"
```
This is one of the most-requested features in any workflow system and its absence is a
friction point for teams building modular agent systems.

**Streaming Semantics on `agent` nodes** *(LLM-reality gap)*

Every production LLM streams token output. OSOP currently has no streaming field, meaning
agents that stream appear to produce no output until they finish. Add:
```yaml
- id: analysis
  type: agent
  subtype: llm
  runtime:
    model: "claude-sonnet-4-6"
    streaming: true
    stream_to: "${inputs.output_channel}"  # SSE endpoint, stdout, etc.
```

### Tooling Gaps

- **`osop export-agent-card`**: Generate an A2A v1.2-compliant Agent Card JSON from a `.osop.yaml`
  workflow definition. Makes OSOP workflows discoverable by A2A registries. Unlocks the
  150-org A2A production ecosystem as a potential adopter base.
- **`osop trust-audit`**: Given a `.osop` file, report which agent nodes have no `trust_policy`,
  which tools are undeclared, and which fallback paths are missing. Enterprise pre-deployment
  checklist.
- **GitHub Action: OSOP Validate + Trust Audit**: Two-step action — schema validation + trust
  audit. Any repo that merges this runs OSOP validation on every PR. Zero-friction discovery.
- **OSOP Playground**: Still the fastest path to fixing the zero-web-presence problem. An
  in-browser validator + visual workflow editor is indexable, shareable, and gives developers
  a zero-install first experience. This is the priority tooling investment.

### Ecosystem Plays

- **ADL GitHub engagement**: Comment on the `nextmoca/adl` issue tracker proposing
  OSOP as the workflow layer for ADL-defined agents. Frame as additive: ADL handles the
  agent definition problem; OSOP handles the workflow orchestration + execution audit problem.
- **Temporal community blog**: Publish a Temporal × OSOP comparison piece on the Temporal
  community forum and dev.to. Target query: "Temporal workflow documentation" and
  "portable workflow format for Temporal."
- **Microsoft Agent Framework adapter**: MAF 1.0 is GA. Write a worked example showing
  an MAF workflow expressed as an `.osop.yaml` file. Submit to the MAF examples repo.
  OpenAPI-first design means OSOP `api` nodes map directly to MAF tool definitions.
- **A2A working group participation**: With A2A at v1.2 under Linux Foundation, there is
  a formal working group. Request observer/contributor status. OSOP's execution log format
  and workflow definition are additive to A2A, not competing — participation builds visibility
  with the 150 orgs already using A2A in production.
- **Airflow migration content**: Airflow 2.x is now in security-only support. Millions of
  data pipeline engineers are evaluating alternatives. Write an Airflow DAG → OSOP migration
  example (`examples/data/airflow-migration.osop.yaml`) targeting "Airflow alternative 2026."

---

## Top 3 Actions for This Week

### 1. Write and publish OSP-0004: OSOP × A2A Bridge spec
**Why now**: A2A is at v1.2 with 150 production deployments. Every week without OSP-0004 means
OSOP is invisible to the fastest-growing production agent ecosystem. This also provides the
technical substance needed for the AGNTCon CFP abstract.

**Specific steps**:
1. Write `proposals/OSP-0004-a2a-support.md` — define `a2a` agent subtype, `osop export-agent-card`
   CLI command, `.osoplog` A2A task ID capture
2. Write `examples/agent/a2a-bridge-workflow.osop.yaml` — show an OSOP workflow that calls
   an A2A-compatible remote agent
3. Write `docs/integrations/a2a.md` — integration guide with code samples
4. Request observer status at the A2A GitHub working group (`a2aproject/A2A`)

### 2. Submit AGNTCon + MCPCon CFP to both NA and EU tracks
**Why now**: Deadline is June 7-8, now ~5 weeks away. Post-MCP Dev Summit (April 2-3)
community energy is at its highest. Early submissions get committee feedback for iteration.
Every week of delay reduces iteration cycles before the deadline.

**Specific steps**:
1. Draft abstract: *"The missing layer: portable workflow definition and execution audit for
   production MCP + A2A systems"*
   - Hook: MCP solved tool connectivity; A2A solved agent-to-agent; what about workflow
     portability and execution audit? (MCP's own 2026 roadmap lists audit trails as a gap.)
   - Proof: OSOP `.osop` = workflow definition, `.osoplog` = execution record, synthesis loop
     = optimization flywheel. No other standard provides all three.
   - Audience: MCP adopters who have tool connectivity but no workflow portability or audit.
2. Submit NA track: https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/cfp/
3. Submit EU track: https://events.linuxfoundation.org/agntcon-mcpcon-europe/program/cfp/

### 3. Publish ADL × OSOP positioning piece and engage NextMoca team
**Why now**: ADL is 3 months old and actively soliciting community input. The window to shape
the ADL community's understanding of OSOP as complementary (not competing) closes as ADL's
community forms its mental model. The positioning piece is also the highest-reach content play
available without waiting for tooling to be built.

**Specific steps**:
1. Write 600-word blog post: *"ADL defines what your agent IS. OSOP defines what workflows DO.
   Here's how to use both."* on dev.to
2. Comment on `nextmoca/adl` issues or discussions with a link to the post and a proposal
   for `runtime.adl_manifest` support in OSOP `agent` nodes
3. Post to LinkedIn tagging NextMoca — creates discovery and goodwill with a natural
   feeder community
4. Add `ADL manifest` to the OSP backlog as a v1.1 spec improvement

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
| OSP proposals published | 3 | **5** (OSP-0004, 0005) | 8 | 12 |
| CFP submissions (AGNTCon/MCPCon) | 0 | **2 submitted** | — | Accepted |
| Web search presence for "OSOP workflow" | 0 results | 1+ indexed page | 5+ pages | Top-10 result |
| ADL collaboration status | Not started | Post published | NextMoca engaged | Co-positioning agreed |

---

## Notes

- Today is Thursday, May 1 — no ROADMAP update (Mondays only).
- This is Day 22 of the strategy program, first brief since April 10 (21-day gap).
- Critical observation: the **action backlog is now 21 days old** with zero items closed.
  Every time-sensitive opportunity (MCP poisoning news cycle, ADL community formation, post-MCP
  Dev Summit window) has a shorter remaining window than it did in the April 10 brief.
  The highest-priority meta-action is assigning owners and due dates to the backlog — not
  generating more analysis.
- The **synthesis loop** remains OSOP's clearest unique differentiator: define → execute →
  record → synthesize → improve. No competitor (ADL, A2A, Arazzo, AGENTS.md) provides all
  three layers. This should lead every public description, CFP abstract, and comparison doc.
- **The AAIF open seat is real.** MCP = tool access. A2A = agent-to-agent. AGENTS.md = project
  guidance. None of these is a portable workflow definition format with execution audit. OSOP
  was built exactly for this slot. The submission is drafted. Submit it.
