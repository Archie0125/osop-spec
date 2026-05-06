# OSOP Daily Strategy Brief — 2026-05-06

> Day 27. Wednesday. **Day 30 is May 9 — 3 days away. All adoption metrics remain at 0.**

---

## Action Tracker (from 2026-05-05)

| Action | Status | Days Pending | Notes |
|--------|--------|--------------|-------|
| OpenClaw PR | ⏳ Pending | **26** | 30-minute task. 3 days to Day 30. |
| AAIF submission | ⏳ Pending | **26** | Draft exists. MCP roadmap quote is opening line. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **26** | Azure AI Foundry + Amazon Bedrock examples required. |
| OSP-0005: Trust policy | ⏳ Pending | **26** | Enterprise governance requirement. |
| OSP-0006: `skill_ref` | ⏳ Pending | **3** | Agent Skills window open. |
| Arazzo comparison doc | ⏳ Pending | **26** | **Threat level: defensive. See below.** |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~26 days to deadline | |
| AI Engineer World's Fair CFP | ⏳ Pending | ~34 days to event | |
| "MCP + OSOP" blog post | ⏳ Pending | 26 | |
| ADL × OSOP positioning piece | ⏳ Pending | 26 | |
| ACP workflow example | ⏳ Pending | 4 | |
| Strands migration example | ⏳ Pending | 4 | |
| Archon compatibility Discussion | ⏳ Pending | 1 | 10-minute GitHub Discussion post. |
| NIST engagement | ⏳ Pending | 1 | Interoperability Profile comment window still open. |
| Temporal community forum post | ⏳ Pending | 1 | 300 words + example. |

**Meta-status**: 27 days, zero items closed. Three days remain to Day 30 targets. The OpenClaw PR is the only item with no dependencies, no approval process, and no bureaucracy. It must close today.

---

## Intelligence

### New Signals (2026-05-06)

- **MCP spec officially references Arazzo for multi-step workflows** — The MCP specification now explicitly cites Arazzo as the way to describe multi-step workflows that MCP servers expose. This is the hardest Arazzo threat signal to date: developers reading the canonical MCP documentation are being directed to Arazzo before they encounter OSOP. The developer sentence being written at this moment is: "I use MCP for tool connectivity and Arazzo for my agent workflows." OSOP is not in that sentence. The Arazzo comparison doc crossed from positioning to defensive necessity with this signal. It must publish before this mental model sets in MCP-native developer communities.

- **Salesforce launches Agentforce Operations** — Salesforce launched a new workflow execution platform explicitly designed to "turn back-office workflows into a set of tasks for specialized agents to complete," with proprietary "Blueprints" for workflow templates. The framing — "workflow execution control planes that impose deterministic structure" — is a direct overlap with OSOP's value proposition in the enterprise segment. Salesforce has 150,000+ enterprise customers. If Agentforce Operations establishes a proprietary workflow definition format that becomes the de facto standard for Salesforce's CRM-adjacent workflows, that is a significant portion of enterprise AI workflow real estate with no OSOP presence. Immediate opportunity: an `osop export-agentforce` converter would make OSOP the portable interop layer *above* Agentforce Operations, not a competitor to it.

- **Microsoft Agent 365 now GA with AWS Bedrock + Google Cloud registry sync** — Microsoft's Agent 365 shipped GA on May 1 with cross-cloud agent inventory and lifecycle governance (AWS Bedrock + Google Cloud). Enterprise IT teams can now discover and manage agents across all three hyperscalers from a single registry. This is a materially new signal: enterprise organizations now have a cross-cloud agent inventory but no portable workflow definition format for those agents. When an agent is registered in AWS Bedrock, Azure AI Foundry, and Google Cloud simultaneously, the question "how do we define and version-control what this agent's workflow does?" has no standard answer. OSOP is that answer. A blog post titled "Your agents are in three clouds — what defines what they do?" with a `.osop.yaml` example is a natural hook for this exact pain.

- **NIST AI Agent Standards Initiative — Interoperability Profile targeting Q4 2026** — NIST's CAISI initiative, launched February 2026, is targeting a formal AI Agent Interoperability Profile by Q4 2026. The profile identifies MCP and A2A as interoperability baselines. The workflow definition and execution audit layer is not mentioned in any NIST materials identified. The April sector-specific listening sessions (healthcare, finance, education) have concluded, but the profile is not published until Q4 — the comment and input window for the methodology and vocabulary is still open. NIST engagement at this phase constitutes founding-cohort status. A 2-page submission describing OSOP's role in the stack — "MCP = tool connectivity, A2A = agent routing, OSOP = workflow definition and execution audit" — costs 90 minutes to write and would place OSOP's vocabulary in a US government standards body's active working document.

- **JetBrains 2026 direction: "AI and Classic Workflows in JetBrains IDEs"** — JetBrains published their 2026 IDE roadmap explicitly integrating AI agents with "classic workflows" (CI/CD, build, test, deploy). JetBrains IDEs have 10M+ active developers and ship native MCP support. An OSOP JetBrains plugin (or even a formal partnership blog post) would place OSOP in front of a developer audience that is already being primed to think about AI + workflow integration. The `osop-vscode` extension is already in the ecosystem; a JetBrains port is the natural adjacency.

- **ACP (Agent Communication Protocol) joins the interoperability vocabulary** — Alongside MCP and A2A, a third protocol — ACP (Agent Communication Protocol), an open RESTful agent-to-agent standard — was referenced in multiple enterprise AI articles this week. ACP is distinct from A2A and is less established. The emergence of a third competing routing/communication protocol reinforces that the "workflow definition and execution audit" layer above all these protocols is increasingly unoccupied and increasingly necessary. OSOP sits above all of them and is format-agnostic to which routing protocol is used.

- **62% of organizations experimenting or scaling AI agents (McKinsey)** — 23% already scaling in at least one business function. Enterprise AI adoption is no longer early-adopter territory. This is a lagging indicator confirming that the enterprise workflow definition gap is now a present pain, not a future one.

### Continuing Signals

- **Arazzo now explicitly integrated into MCP server tooling** — Arazzo workflows can be surfaced as MCP tools ("complete business capability rather than a raw API call"); SmartBear is publishing this framing to tens of millions of Swagger Editor users. Each article in this cycle is another brick in the "Arazzo = agent workflow spec" mental model.
- **A2A v1.2 in production at Azure AI Foundry + Amazon Bedrock AgentCore** — unchanged urgency for OSP-0004 and `osop export-agent-card` / `osop export-bedrock` tooling.
- **AAIF stack has 170+ members, MCP at 110M+ monthly downloads** — OSOP's seat at the table remains empty.
- **Agent Skills at 4-tool adoption** — OSP-0006 window still open.

---

## Threats

1. **MCP spec references Arazzo — the developer funnel is now directing MCP users to Arazzo before OSOP exists in their mental model.** This is not SmartBear's editorial framing; this is the canonical MCP documentation. Every developer building an MCP server who reads the spec is being pointed to Arazzo for workflow descriptions. The Arazzo comparison doc is no longer a competitive positioning piece — it is the answer to the question these developers will ask when Arazzo's limits become apparent (no agent nodes, no human steps, no execution audit, no cross-framework portability). That doc must exist today.

2. **Salesforce Agentforce Operations is defining the enterprise workflow vocabulary with proprietary Blueprints.** 150,000 enterprise Salesforce customers represent a large portion of the enterprise AI adoption market. If Agentforce Operations' Blueprint format becomes the standard those teams use to define their agent workflows, the window for OSOP to be the portable interop format above it narrows quickly. First mover in the "OSOP ↔ Agentforce Operations" conversion story matters.

3. **Day 30 is in 3 days at 0% completion.** The Day 30 targets were published on Day 1 as 30-day milestones. Current state: 0 GitHub stars, 0 external PRs, 0 OSP proposals published, AAIF unsubmitted. Three items have been listed as "30-minute tasks" or "execute today" for 26 consecutive days. The only question remaining is whether to close one of them in the next 3 days or revise the targets downward. Revising the targets is the wrong choice.

4. **NIST Interoperability Profile being written without OSOP vocabulary.** Q4 2026 is the publication target. The profile's vocabulary — the terms, layers, and reference standards that NIST will use to describe the agentic AI stack — is being assembled right now. MCP and A2A are named. OSOP is not. If "portable workflow definition" and "execution audit" are not in NIST's vocabulary when the profile publishes, OSOP will need to argue uphill against a government-codified standard stack that doesn't include it.

5. **A2A v1.3 execution log risk** — unchanged from prior briefs; A2A's increasing maturity (signed Agent Cards in v1.2) continues to raise the probability of a task execution log in v1.3.

---

## Opportunities

### Immediate (Today — execute one)

**Option A — Arazzo comparison doc** *(now defensive; highest priority)*
Create `docs/comparisons/arazzo-vs-osop.md`. The MCP spec references Arazzo; this doc is the answer for the developer who follows that reference and hits Arazzo's limits.

**The boundary to define:**
- Arazzo: sequences API calls, assumes all workflow steps are HTTP endpoints, produces no execution record, has no concept of agent nodes, human steps, CLI operations, or cross-framework portability.
- OSOP: orchestrates the full stack (LLM agents, humans, APIs, CLI), produces a replayable `.osoplog` execution audit, and is runtime-agnostic.
- They are *complementary*: OSOP `api` nodes can reference Arazzo specs for the endpoints they call. OSOP is not replacing Arazzo; OSOP is what you reach for when your workflow contains anything other than API calls.

600 words. Publish to dev.to. Post link in the OpenAPI Initiative Discord, MCP Discord, and A2A community. Counter the MCP→Arazzo funnel with a OSOP answer at the natural drop-off point.

**Option B — OpenClaw PR** *(Day 26, 3 days to Day 30)*
Fork OpenClaw. Create `dev-automation-workflow.osop.yaml`. Issue triage → code analysis → fix proposal → PR creation. Submit. 30 minutes. This is the instruction for the 27th consecutive day.

**Option C — "Your agents are in three clouds — what defines what they do?" blog post** *(new hook from Microsoft Agent 365 GA)*
400 words responding directly to the Microsoft Agent 365 cross-cloud registry announcement. The gap it exposes — agents inventoried across three hyperscalers but no portable format for what they do — is OSOP's product pitch in one sentence. Publish to dev.to today while the Microsoft Agent 365 GA news cycle is active.

### This Week (before Day 30 — May 9)

- **AAIF submission** — Three days left. Opening line: "Enterprises are deploying MCP and running into a predictable set of problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability." Submit at `lfx.linuxfoundation.org/projects/new`.
- **OSP-0004: A2A agent subtype** — The spec must exist. A2A is in Azure AI Foundry, Amazon Bedrock AgentCore, and is now cited by Google Cloud Next 2026 as mainstream. Include platform-specific examples for both hyperscalers.
- **NIST engagement** — 2-page submission to NIST CAISI describing OSOP's role. Use the positioning stack sentence: "MCP = tool connectivity, A2A = agent routing, OSOP = workflow definition + execution audit." The Interoperability Profile vocabulary is still being formed.

### Medium-Term

- **`osop export-agentforce` converter** — Positions OSOP as the portable interop layer above Salesforce Agentforce Operations, not a competitor. Makes OSOP useful to the Salesforce developer ecosystem without requiring them to abandon Agentforce.
- **"Your agents are in three clouds" blog post** *(if not done today)*
- **JetBrains plugin** — Port `osop-vscode` to JetBrains. 10M+ developers, native MCP support, 2026 workflow integration roadmap. High distribution, clear value alignment.
- **Archon GitHub Discussion** — 10 minutes. Open a Discussion on Archon's repo asking about OSOP format compatibility. Integration window is open while their schema is still forming.
- **Temporal community forum post** — 300 words + `temporal-durable-workflow.osop.yaml` example. Highest-density production agent developer community currently active.
- **ACP workflow example** — `examples/agentic-commerce-workflow.osop.yaml`. ACP is entering the interoperability vocabulary alongside MCP and A2A.

---

## Evolution Ideas

### Spec Improvements

**OSP-0004: A2A agent subtype** *(Day 26 overdue — hyperscaler-urgent)*
`a2a` subtype with `runtime.endpoint`, `runtime.agent_card_url`, `runtime.protocol`. Platform-specific examples for Amazon Bedrock AgentCore and Azure AI Foundry. `.osoplog` captures `a2a_task_id` for cross-platform execution tracing.

**Arazzo `api` node extension** *(new — created by MCP→Arazzo reference)*
Add an optional `arazzo_spec` field to `api` nodes:
```yaml
- id: call-payment-api
  type: api
  name: Process Payment
  runtime:
    method: POST
    url: "https://api.payment.com/v2/charge"
    arazzo_spec: "./specs/payment-workflow.arazzo.yaml"  # optional: Arazzo spec describing this endpoint's workflow
```
This creates OSOP + Arazzo *complementarity* — OSOP orchestrates the full workflow; Arazzo describes the API interactions within it. This turns the "Arazzo or OSOP?" question into "Arazzo *and* OSOP," and gives API-first teams a migration path.

**`workflow` node type** *(composability — urgency raised by Salesforce Blueprints)*
Salesforce's proprietary "Blueprints" approach to reusable workflow templates confirms the market need for first-class sub-workflow invocation. A `workflow` node type (replacing workarounds via `system` nodes with `workflow_ref`) is a spec gap that Salesforce is solving proprietarily in their ecosystem.

**OSP-0005: Trust policy** *(Day 26 overdue)*
`trust_policy:` block on agent nodes. Enterprise pre-deployment governance checklist. Required for AAIF submission credibility with enterprise-focused AAIF members (AWS, Microsoft, Bloomberg).

**OSP-0006: `skill_ref`** *(Day 3 — Agent Skills window)*
Link agent nodes to Agent Skills `SKILL.md` manifests. Backwards compatible. OpenClaw + Codex CLI + Cursor + Gemini CLI adoption window is still open.

**Streaming semantics** *(LLM-reality gap)*
`runtime.streaming: true` + `runtime.stream_to: <node_id>`. Every production LLM streams; OSOP models agents as blocking black boxes.

### Tooling Gaps

| Tool | Priority | Why Now |
|------|----------|---------|
| `osop export-agent-card` | 🔴 Critical | A2A v1.2, signed cards, hyperscaler-native |
| `osop export-bedrock` | 🔴 Critical | Amazon Bedrock AgentCore A2A native |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native, MAF 1.0 GA |
| `osop export-agentforce` | 🔴 Critical | **New**: Salesforce Agentforce Operations launch; 150K enterprise customers |
| `osop log-export --format otel-json` | 🟠 High | MCP roadmap names audit trail as enterprise gap |
| `osop trust-audit` | 🟠 High | Enterprise governance; required for AAIF submission credibility |
| `osop import-sop` | 🟠 High | Converts Strands + GitHub Agentic Workflow users |
| Archon format converter | 🟠 High | Integration window open while Archon schema is forming |
| JetBrains plugin | 🟠 High | 10M+ developers, native MCP support, 2026 workflow roadmap |
| GitHub Action: validate + trust-audit | 🟡 Medium | Zero-friction repo-level adoption |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience |

### Ecosystem Plays

- **MCP Discord / MCP spec community** — Post the Arazzo comparison doc in the channels where MCP server builders are active. The MCP spec references Arazzo; OSOP needs to be present in the conversation that follows.
- **OpenAPI Initiative community** — The Arazzo comparison doc belongs in the OpenAPI community Slack and GitHub Discussions. Framing: OSOP and Arazzo are complementary; OSOP `api` nodes can reference Arazzo specs.
- **NIST CAISI** — 2-page submission for the Interoperability Profile. Get "portable workflow definition" and "execution audit" into NIST's vocabulary before Q4 2026.
- **Salesforce Agentforce developer community** — An `osop export-agentforce` example (or even a proof-of-concept OSOP → Agentforce Blueprint converter) makes OSOP immediately useful to 150K enterprise customers without competing with Salesforce.
- **JetBrains developer community** — Port `osop-vscode` to JetBrains. Blog post on JetBrains' 2026 AI + Classic Workflows integration.
- **Archon GitHub** — Open a Discussion: "OSOP format compatibility for Archon workflow files."
- **Temporal community forum** — 300 words + `temporal-durable-workflow.osop.yaml`. Highest-density production agent community.
- **AAIF** — Submit via `lfx.linuxfoundation.org/projects/new`. Three days to Day 30.

---

## Top 3 Actions for This Week

### 1. Publish Arazzo comparison doc — today

**Threat level upgraded: defensive.** The MCP specification itself now references Arazzo for multi-step workflows. Developers reading MCP docs are being sent to Arazzo before OSOP exists in their awareness. The developer journey is: MCP docs → Arazzo → hit limits (no agent nodes, no human steps, no execution record) → search for alternatives. OSOP must be the answer at the end of that search journey, and the comparison doc is the indexed artifact that makes that possible.

**Specific steps:**
1. Create `docs/comparisons/arazzo-vs-osop.md`
2. Open with the MCP spec's reference to Arazzo — acknowledge it directly, do not fight it
3. Define the boundary (Arazzo = API call sequences; OSOP = full-stack workflow + execution audit)
4. Frame the complementarity: `api` nodes in OSOP can reference Arazzo specs; they are not alternatives
5. Write a 400-word dev.to summary; link the full doc
6. Post in MCP Discord, OpenAPI Initiative community, and A2A community

Total time: 90 minutes.

### 2. Execute OpenClaw PR — today (Day 26, 30 minutes)

1. Fork the OpenClaw repository
2. Create `dev-automation-workflow.osop.yaml` in the examples or contrib directory
3. Model: issue triage → code analysis → fix proposal → PR creation
4. PR title: "Add structured developer automation workflow example"
5. One sentence in the PR body linking to the spec
6. Submit

247,000-star community. 30 minutes. Day 26. No new blockers. No new analysis needed.

### 3. Submit AAIF application — before May 9 (Day 30)

**The opening line (verbatim from MCP 2026 Roadmap):** "Enterprises are deploying MCP and running into a predictable set of problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability."

**The argument:** The AAIF stack has MCP (tool connectivity) and A2A (agent routing), both at the Linux Foundation. The workflow definition and execution audit layer is an unoccupied seat. `.osoplog` is the audit trail the MCP roadmap says enterprises need. Submit via `lfx.linuxfoundation.org/projects/new` before May 9.

---

## Adoption Metrics to Track

| Metric | Current | Target (Day 30 — May 9) | Target (Day 60) | Target (Day 90) |
|--------|---------|------------------------|-----------------|-----------------|
| GitHub stars (osop-spec) | 0 | 50 | 200 | 500 |
| Combined ecosystem stars | 0 | 100 | 500 | 2,000 |
| External PRs merged | 0 | 3 | 10 | 25 |
| Active adopters (badge) | 0 | 2 | 10 | 25 |
| NPM downloads (osop-sdk-js) | — | 500/mo | 2k/mo | 10k/mo |
| PyPI downloads (osop-sdk-py) | — | 500/mo | 2k/mo | 10k/mo |
| Repos with .osop files | 0 | 5 | 20 | 50 |
| Blog/content views | 0 | 2k | 10k | 50k |
| AAIF submission status | Draft ready | **Submitted** | In review | Accepted/Pending |
| OSP proposals published | 0 | **3** (0004, 0005, 0006) | 8 | 12 |
| CFP submissions | 0 | **3** | — | 1+ accepted |
| Arazzo comparison doc | Not started | **Published + indexed** | Top comparison result | |
| OpenClaw PR | Not submitted | **Submitted** | Merged | |
| NIST engagement | Not started | **Interest filed** | Comment on record | |
| Archon compatibility | Not started | Discussion opened | — | |
| ACP workflow example | 0 | 1 published | 3 | 5 |
| Web search presence for "OSOP workflow" | 0 results | 1+ indexed | 5+ pages | Top-10 result |

---

## Notes

**The single most important development today**: the MCP specification references Arazzo. This is not SmartBear's editorial; this is the authoritative MCP documentation. Every MCP server builder reading the spec is now being pointed to Arazzo before encountering OSOP. The Arazzo comparison doc is the most time-sensitive deliverable in the backlog as of this morning.

**The Microsoft Agent 365 + cross-cloud registry signal** opens a new narrative lane: "agents are now inventoried across three hyperscalers — what is the portable format that defines what they *do*?" This is a blog post that writes itself and does not require any PR, code, or approval process. It is a 400-word response to a news cycle that is active today.

**The NIST Interoperability Profile** is the longest-time-horizon item with the highest legitimacy multiplier. MCP and A2A are already named in the profile's baseline vocabulary. OSOP is not. The profile publishes Q4 2026 — there are still months to get the vocabulary right. 90 minutes of writing. Government-tier legitimacy.

**The Salesforce Agentforce Operations launch** is a signal to watch, not panic about. Salesforce will define workflows in its ecosystem proprietarily. The OSOP play is not to compete but to be the portable export layer above it — the format that lets a workflow defined in Agentforce Operations move to another runtime without rewriting. That is the `osop export-agentforce` tool's reason for existing.

**Day 30 is May 9.** The three items that must close before then are the OpenClaw PR, AAIF submission, and the Arazzo comparison doc. All three can be done before end of day today.
