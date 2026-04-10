# OSOP Daily Strategy Brief — 2026-04-10

## Yesterday's Action Tracker

| Action | Status | Notes |
|--------|--------|-------|
| Draft AAIF submission | ✅ Done | `proposals/AAIF-submission.md` exists; submission channel still needs execution |
| Publish "MCP + OSOP" technical piece | ⏳ Pending | Still the highest-reach content play available; blocking on draft |
| n8n integration PR | ⏳ In progress | No external merge yet; follow up with maintainer this week |
| OSP-0004: A2A node type | ⏳ Pending | Proposed yesterday; proposal doc not yet written |
| AgentSpec comparison doc | ⏳ Pending | High priority; no draft started |
| OpenClaw example PR | ⏳ Pending | 30-minute task; not yet executed |

---

## Intelligence

### Critical: OSOP Has Zero Search Presence

A direct search for `"OSOP" workflow agent standard` returns no results for this project. The
top results are an academic paper (Agent-S, a different project) and AWS Strands Agent SOPs.
OSOP is currently invisible on the open web. Every other action in this brief is secondary to
establishing search-indexed content. No external adoption happens before discovery.

### Protocol / Standards Layer

- **MCP tool poisoning attack published (April 1)**: Invariant Labs demonstrated a reproducible
  attack where malicious instructions embedded in MCP server documentation are sent to the AI
  upon connection, poisoning its behavior. This is a top-of-mind security concern for every
  enterprise MCP deployment. OSOP's schema currently has no trust or sandboxing model for agent
  nodes — this is a gap that, if filled, becomes a compelling enterprise differentiator.
- **Pinterest deployed production-scale MCP ecosystem (April 2026)**: Pinterest's engineering
  team built a production-ready MCP architecture with a central registry, production MCP servers,
  and agent integrations across developer tools — replacing ad hoc integrations. Their blog post
  signals that large-scale MCP deployments are now real. These deployments need workflow definition
  and audit records. OSOP `.osoplog` is the missing piece in Pinterest's architecture.
- **Lucidworks MCP launch (April 8)**: Enterprises reducing AI integration timelines by 10x. More
  MCP adoption = more workflows to define and audit = OSOP's TAM expanding daily.
- **A2A formally at Linux Foundation** (previously tracked): Google's A2A is governed, active,
  and gaining fast. OSOP's OSP-0004 A2A proposal remains urgent.

### Conference: CFP Deadline Is 8 Weeks Away

**AGNTCon + MCPCon** (both North America and Europe) CFPs close **June 7–8, 2026**. The
Linux Foundation events are the premier institutional venue for this community. The CFP focuses
on MCP integration, multi-agent orchestration, and enterprise readiness. OSOP has a natural
talk slot: workflow definition and execution auditability as the missing layer above MCP.

This is a hard deadline. A 60-day runway feels comfortable but first-draft proposals should be
submitted weeks before deadline for feedback iteration. Draft starts today.

### Competitor Moves

- **Arazzo 1.1 adding AsyncAPI support**: The OpenAPI Initiative's Arazzo spec (API workflow
  chaining) is adding support for AsyncAPI, extending coverage from HTTP-only to message-oriented
  APIs (Kafka, etc.). Arazzo is now positioned as the API + async workflow definition layer, backed
  by OpenAPI's enterprise footprint. Key difference from OSOP: Arazzo sequences API calls; OSOP
  orchestrates *agents with tools, humans, and APIs together*, and records execution. Non-overlapping
  but Arazzo will absorb the "API workflow" segment that some OSOP examples currently occupy.
- **Microsoft Agent Framework**: Q1 2026 ended March 31. The 1.0 GA targeted for Q1 may now be
  live. Verify status and, if GA, publish the OSOP → MAF adapter story immediately.
- **Airflow 2.x enters security-only support (April 2026)**: Millions of data pipeline engineers
  are evaluating migration paths. Airflow → modern orchestration is a real transition happening now.
  OSOP's `data` node type, combined with an Airflow-to-OSOP migration example, is a relevant
  entry point for this audience. Low competition, high intent.
- **Claw Code (OpenClaw)**: 210K GitHub stars. Covered yesterday — OpenClaw PR is a 30-minute
  execution. Still not done. Prioritize it today.

### Framework Landscape Summary

The three dominant production agent frameworks (LangGraph, CrewAI, Microsoft Agent Framework) each
use proprietary internal workflow representations. None can export to a shared format. The
interoperability gap OSOP addresses is still fully open and growing as the ecosystem fragments.

---

## Threats

1. **OSOP search invisibility**: The most immediate threat is not a competitor standard — it is
   zero web presence. A developer who hears about OSOP and searches cannot confirm it exists.
   This makes every other outreach effort (PRs, CFP talks, AAIF submissions) less effective because
   there is no web presence to land on.

2. **MCP security becoming a governance feature**: If the AAIF adds a security/trust layer to the
   MCP spec itself (as a response to the tool poisoning attack), they absorb the security narrative
   OSOP could own at the workflow layer. The window to claim "OSOP is the spec that adds trust
   policies to agent workflows" is narrow.

3. **Arazzo absorbing the API workflow segment**: With AsyncAPI support in 1.1 and OAI brand weight,
   Arazzo is becoming the default for API-heavy workflow definitions. Many OSOP examples overlap with
   this space. If Arazzo ships developer tooling (validators, playground, VS Code extension), it will
   outcompete OSOP on the API-workflow tier.

4. **Oracle AgentSpec + AG-UI + A2A three-way stack** (tracked from Day 2): Remains the primary
   structural threat. No change since yesterday — but urgency increases daily as enterprise evaluations
   begin.

5. **AAIF project roster timing**: The founding three projects (MCP, goose, AGENTS.md) are
   established. Every week without a formal OSOP submission is another week closer to the roster
   solidifying without OSOP's participation.

---

## Opportunities

### Immediate (Today / This Week)

- **Submit AGNTCon/MCPCon CFP draft** (hard deadline June 7–8): Draft a talk proposal titled
  *"MCP connects tools. OSOP connects the dots: workflow definition and audit for production agents."*
  Audience: MCP adopters who have tool connectivity but no workflow portability or execution record.
  Submit to both the North America (Oct 22–23, San Jose) and Europe (Sept 17–18, Amsterdam) tracks.
  Links: [NA CFP](https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/cfp/) |
  [EU CFP](https://events.linuxfoundation.org/agntcon-mcpcon-europe/program/cfp/)

- **OpenClaw PR** (30-minute execution, still pending): Create one `.osop.yaml` example modeling
  an OpenClaw-style developer automation workflow (code analysis → fix suggestion → PR creation).
  Submit to the OpenClaw repo as an "OSOP Example" contribution with a two-line explanation in the
  PR description. No OSOP pitch — just a useful example that works standalone.

- **Pinterest engineering blog outreach**: Pinterest just published their MCP production architecture.
  They have a public engineering blog and are clearly invested in MCP infrastructure. Reach out with
  a comment or direct message: "OSOP's `.osoplog` records what each agent step did, how long it
  took, what it cost, and what failed — exactly the audit layer a production MCP ecosystem needs."
  Offer a worked example using their published architecture.

### Medium-Term (This Month)

- **OSP-0005: Trust Policy for Agent Nodes**: Responding directly to the MCP tool poisoning attack,
  add a `trust_policy:` field to `agent` nodes in the OSOP spec. Semantics: `trust: strict` means
  the agent node must validate all tool call responses before acting; `trust: sandboxed` means the
  agent cannot make tool calls outside its declared `tools:` list. This is a 20-line schema addition
  with a massive enterprise security credibility story. Publish alongside a blog post: *"MCP tool
  poisoning and why your workflow spec needs a trust model."*

- **Airflow → OSOP migration example**: Write a detailed example converting an Airflow DAG to an
  OSOP workflow definition. Publish to osop-examples as `examples/data/airflow-migration.osop.yaml`
  with a companion markdown guide. Target audience: the millions of Airflow users now evaluating
  what comes next. Their search query is "Airflow alternative 2026" — OSOP should appear.

- **Arazzo ↔ OSOP bridge doc**: Write `docs/comparison/osop-vs-arazzo.md` making the distinction
  clear: Arazzo sequences API calls; OSOP orchestrates full agent workflows. Position OSOP as the
  superset — any Arazzo workflow is expressible as an OSOP workflow with `api` nodes — and provide
  a converter example. This prevents the "why not just use Arazzo?" objection from blocking OSOP
  adoption in API-heavy teams.

---

## Evolution Ideas

### Spec Improvements

- **OSP-0005: Trust Policy on Agent Nodes** *(new, security-motivated)*
  ```yaml
  nodes:
    - id: research-agent
      type: agent
      trust_policy:
        level: sandboxed          # strict | sandboxed | permissive
        allowed_tools: [web_search, read_file]
        deny_on_unknown_tool: true
        max_tool_calls_per_step: 10
  ```
  This is the most timely spec addition possible right now. The MCP tool poisoning story is live.
  Enterprise buyers evaluate security before adoption. OSOP with a trust model is enterprise-ready
  in a way no other agent workflow spec currently is.

- **Synthesis Loop Specification** *(formalizing the unique differentiator)*
  The "logs → optimized workflows" synthesis concept is mentioned in prose but not specified. Define
  it as a first-class construct: a `synthesis:` block at the `.osop` root that declares the
  optimization objective and acceptable log corpus:
  ```yaml
  synthesis:
    objective: minimize_cost        # minimize_cost | minimize_latency | maximize_reliability
    log_corpus: ./runs/*.osoplog.yaml
    auto_promote: false             # if true, CLI applies diffs automatically
  ```
  The CLI command `osop synthesize my-workflow.osop.yaml` then reads the log corpus and proposes
  improvements. This is OSOP's unique flywheel — no competitor has it.

- **Trigger Semantics (OSP-0005 or v1.1)**: The `triggers:` field is underdocumented (flagged
  yesterday). Promote to a formal RFC. Define four trigger types: `cron`, `webhook`, `event`,
  `manual`. Each needs a schema, a CLI invocation pattern, and a security model. This closes the
  gap between "OSOP describes a workflow" and "OSOP runs a workflow."

### Tooling Gaps

- **`osop trust-audit` CLI command**: Given a `.osop` file, report which agent nodes have no
  `trust_policy`, which tools are undeclared, and which fallback paths are missing. Pairs with the
  trust policy spec addition. Enterprise security teams will use this as a pre-deployment checklist.
- **GitHub Action: OSOP Validate + Trust Audit**: The planned GitHub Action should include two
  steps: schema validation and trust audit. Any repo that merges this action runs OSOP validation
  on every PR — viral discovery mechanism with zero friction for the adopting developer.
- **OSOP Playground (accelerate)**: An in-browser workflow editor and validator is on the roadmap.
  Moving this to top priority would solve the zero-web-presence problem immediately — a playground
  is indexable, shareable, and gives developers a zero-install first experience.

### Ecosystem Plays

- **Pinterest engineering team**: Direct engagement opportunity based on their public MCP deployment.
- **AGNTCon/MCPCon CFP**: Submit to both tracks (NA + EU) this week.
- **AAIF submission** (execute this week): Draft is ready. The submission channel is the Linux
  Foundation project intake process at linuxfoundation.org. Submit now.
- **Arazzo comparison doc**: Preemptive positioning before Arazzo 1.1 ships with AsyncAPI support
  and gets a wave of press coverage.
- **Airflow community**: Target the Airflow migration moment; write the example this week.

---

## Top 3 Actions for This Week

1. **Submit AGNTCon + MCPCon CFP (both tracks)**
   The June 7–8 deadline is 8 weeks away, but talk slots at LF events fill early and selection
   committees give more feedback time to early submissions. Draft today, submit by end of week.
   - Talk title: *"MCP connects tools. OSOP connects the dots."*
   - Core argument: MCP solved tool connectivity. The missing layer is portable, auditable workflow
     definition. OSOP fills that gap, and `.osoplog` gives enterprise teams the audit trail MCP's
     roadmap explicitly calls out as a gap.
   - Supporting proof: 113 example workflows, CLI, MCP server integration, EU AI Act compliance
     story, A2A node type proposal.
   - Submit via: [NA CFP](https://events.linuxfoundation.org/agntcon-mcpcon-north-america/program/cfp/)
     and [EU CFP](https://events.linuxfoundation.org/agntcon-mcpcon-europe/program/cfp/)

2. **Write and publish OSP-0005: Trust Policy for Agent Nodes**
   The MCP tool poisoning attack was published April 1 and is still circulating in enterprise
   security discussions. OSOP has a one-week window to respond with a credible, spec-level trust
   model before the news cycle moves on. Write `proposals/OSP-0005-trust-policy.md` today and
   publish a companion blog post: *"MCP tool poisoning and what your workflow spec needs to do
   about it."* This is the most time-sensitive spec move available.
   - Schema: `trust_policy:` field on `agent` nodes (see Evolution Ideas above)
   - CLI: `osop trust-audit <workflow.osop.yaml>` output
   - Blog: dev.to + LinkedIn targeting enterprise security and MCP-adopter audiences

3. **Carry forward: OSP-0004 A2A support + AAIF submission**
   Both of these were top priority yesterday and remain so. OSP-0004 makes OSOP compatible with
   the A2A Linux Foundation ecosystem. The AAIF submission `proposals/AAIF-submission.md` is
   complete — the only remaining step is identifying and using the LF project intake channel.
   These two actions together establish OSOP's institutional credibility in the two most important
   governance bodies currently forming.
   - OSP-0004: Write `proposals/OSP-0004-a2a-support.md` (3-hour task)
   - AAIF submission: Submit via Linux Foundation project intake at linuxfoundation.org

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
| A2A working group participation | Not started | Request sent | Active member | Contributor |
| OSP proposals published | 3 | 5 | 8 | 12 |
| CFP submissions (AGNTCon/MCPCon) | 0 | **2 submitted** | — | Accepted |
| Web search presence for "OSOP workflow" | 0 results | 1+ indexed page | 5+ pages | Top-10 result |

---

## Notes

- Today is Friday, April 10 — no ROADMAP update (Mondays only).
- This is Day 3 of daily briefs. Three new angles surface today that were not in previous briefs:
  (1) zero search presence as the primary adoption bottleneck, (2) MCP tool poisoning as a spec
  opportunity for OSOP's trust model, (3) AGNTCon CFP as a hard deadline 8 weeks out.
- The action backlog is growing (OpenClaw PR, "MCP + OSOP" blog, OSP-0004, AAIF submission,
  AgentSpec comparison). None of these are blocked on external dependencies — only on execution.
  A team triage to assign owners and due dates is overdue.
- The synthesis loop (`osop synthesize`) is OSOP's clearest unique differentiator against every
  competitor. It should appear in every public-facing description, CFP abstract, and comparison doc.
  Currently it lives only in internal docs. Surface it everywhere.
