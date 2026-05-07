# OSOP Daily Strategy Brief — 2026-05-07

> Day 28. Thursday. **Day 30 is May 9 — 2 days away. All adoption metrics remain at 0.**

---

## Action Tracker (from 2026-05-06)

| Action | Status | Days Pending | Notes |
|--------|--------|--------------|-------|
| OpenClaw PR | ⏳ Pending | **27** | 30-minute task. 2 days to Day 30. No blockers. |
| AAIF submission | ⏳ Pending | **27** | Draft ready. Opening line confirmed. 2 days left. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **27** | Azure AI Foundry + Bedrock examples required. |
| OSP-0005: Trust policy | ⏳ Pending | **27** | Enterprise governance requirement. |
| OSP-0006: `skill_ref` | ⏳ Pending | **4** | Agent Skills window still open. |
| Arazzo comparison doc | ⏳ Pending | **27** | MCP spec references Arazzo. Defensive necessity. |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~25 days to deadline | |
| AI Engineer World's Fair CFP | ⏳ Pending | ~33 days to event | |
| NIST engagement | ⏳ Pending | **2** | Comment window still open. 90-minute task. |
| Archon compatibility Discussion | ⏳ Pending | **2** | 10-minute GitHub Discussion. |
| Temporal community forum post | ⏳ Pending | **2** | 300 words + example. |
| ACP workflow example | ⏳ Pending | **5** | |
| Strands migration example | ⏳ Pending | **5** | |
| "MCP + OSOP" blog post | ⏳ Pending | **27** | |
| "Your agents are in three clouds" blog post | ⏳ Pending | **1** | Microsoft Agent 365 news cycle still warm. |

**Meta-status:** 28 days. Zero items closed. Day 30 targets publish in 2 days. The question is no longer "what should we do" — the backlog is documented, prioritized, and dependency-free. The question is execution.

---

## Intelligence

### New Signals (2026-05-07)

- **Oracle Agent Spec + AG-UI + CopilotKit announce three-way alignment** — Oracle, CopilotKit (AG-UI protocol), and Google are formally aligning three open specifications to cover the full agentic app stack end-to-end: Oracle's Open Agent Specification defines agent behavior and workflows; AG-UI governs agentic frontends; a Google component governs model connectivity. The explicit goal is a fully portable agentic stack where agents can be defined once and run across any compatible runtime — described as "ONNX for AI agents." This is the most significant competitive signal this week: a coordinated, multi-org open standard effort positioning itself in the "workflow portability" layer that OSOP occupies. Oracle's Agent Spec already has LangGraph and CrewAI import/export support, enterprise backing, and an ArXiv technical report. The key differentiator OSOP must press immediately: Oracle's Agent Spec defines what agents *should do* — it produces no execution record of what they *actually did*. The `.osoplog` is uncontested. The brief must shift OSOP's primary identity accordingly (see Evolution Ideas).

- **"Why the Model Context Protocol Won" published by The New Stack** — The New Stack published a definitive retrospective confirming MCP's hegemony: 97M+ monthly SDK downloads, 5,800+ servers, AAIF governance, co-founded by Anthropic, OpenAI, and Block. The article frames MCP as settled infrastructure — "the USB-C of AI." This is strategically good for OSOP: settled infrastructure creates a stable foundation above which a workflow layer becomes necessary rather than optional. When MCP is a commodity, the differentiation moves up the stack to *what the agent does with those tools* — which is exactly what `.osop` + `.osoplog` defines and records. Use this framing in the AAIF submission.

- **Jama Software launches MCP Server — first engineering management platform with MCP** *(May 4, 2026)* — Jama Connect, a requirements management and compliance platform, announced the first MCP server for engineering management software. Jama's customers are compliance-heavy: aerospace, medical devices, automotive, defense. These are exactly the industries where execution audit trails are not optional but legally mandated. An OSOP `.osoplog` that captures every step of an agent-assisted requirements review is directly valuable to Jama's customer base. Opportunity: a Jama × OSOP example workflow (`requirements-review.osop.yaml`) + dev.to post targeting compliance engineers would place OSOP in front of the highest-value enterprise audience for the audit trail story.

- **MCP Dev Summit North America concluded in April 2026 with 1,200 attendees** — The AAIF held its first North American MCP Dev Summit in New York City in April 2026. OSOP was not represented. The next events — likely EU-focused or a second North American summit — are the first conference opportunity with a natural audience of MCP practitioners who are already building the workflows OSOP would standardize. Identifying and targeting the CFP for the next AAIF event is higher-priority than generic conference CFPs.

- **OpenAI announces "the next evolution of the Agents SDK"** — OpenAI published a roadmap update for their Agents SDK, signaling continued investment in the SDK as the primary abstraction layer for OpenAI-based agent development. The specific roadmap items were not detailed in public announcements, but the pattern is consistent: OpenAI is building a walled-garden agent development story with their own SDK as the entry point. Every developer who adopts OpenAI's Agents SDK as their primary workflow tool is a developer who needs OSOP as the portable escape hatch when they want to run the same workflow against Anthropic, Google, or an open model. The "OpenAI Agents SDK → OSOP export" converter is a long-term tooling priority that opens from this.

- **Adobe Workfront 2026 adds MCP connectivity (June 2026)** — Adobe Workfront, one of the largest enterprise project management platforms, will become reachable via MCP in June 2026. Enterprise project management workflows — review cycles, approval chains, cross-team handoffs — are a natural OSOP use case with first-class `human` node support. An `osop export-workfront` (or import) converter, or a `workfront-approval-workflow.osop.yaml` example, would place OSOP in front of enterprise project managers who are about to encounter MCP for the first time through a familiar tool.

- **Arazzo 1.0.1 patch release confirms continued momentum** — Arazzo shipped a 1.0.1 patch release with clarifications and expansions. Tooling adoption (Redocly, Speakeasy, APIDog, Specmatic, Bruno) is confirmed. The Arazzo comparison doc is more urgent than ever: Arazzo is actively patching, shipping, and gaining tooling while OSOP has not published a single external artifact in 28 days.

### Continuing Signals (unchanged from prior briefs)

- MCP spec references Arazzo for multi-step workflow descriptions — every MCP developer reading the spec is directed to Arazzo before OSOP exists in their mental model.
- A2A at 150+ orgs in production, 22,000+ GitHub stars, Azure AI Foundry + Amazon Bedrock native — OSP-0004 urgency unchanged.
- NIST CAISI Interoperability Profile targeting Q4 2026 — MCP and A2A named; OSOP not named; vocabulary still being formed.
- AAIF stack: MCP + A2A + Agent Skills + Arazzo (API workflows) + [OSOP — unsubmitted]. The seat is still empty.
- Agent Skills at 4-tool adoption (OpenClaw, Codex CLI, Cursor, Gemini CLI) — OSP-0006 window still open.
- Salesforce Agentforce Operations proprietary "Blueprints" — 150,000 enterprise customers defining workflows in a closed format.

---

## Threats

1. **Oracle Agent Spec + AG-UI three-way alignment is the week's biggest structural threat.** Three coordinated open-source specs from Oracle, Google, and CopilotKit are explicitly targeting agent workflow portability. They have an ArXiv paper, LangGraph/CrewAI adapters, enterprise distribution, and a growing developer community. OSOP's response is not to compete head-to-head on "portability" — OSOP wins on the axis Oracle Agent Spec cannot contest: the structured, replayable execution audit record. `.osoplog` is OSOP's moat. Oracle Agent Spec tells you what agents should do. OSOP tells you what they actually did, when, for how long, with which tokens, and whether it matched the definition.

2. **Day 30 arrives in 48 hours with all metrics at zero.** There is no longer any strategic analysis that increases the probability of hitting Day 30 targets. The only action that increases that probability is executing one of the three items: OpenClaw PR (30 min), AAIF submission (2 hours), Arazzo comparison doc (90 min). All three can close today.

3. **MCP spec → Arazzo reference is permanently compounding.** Each week the Arazzo comparison doc doesn't exist is another week MCP server builders have no OSOP-authored answer to the "workflow for my MCP server" question. Arazzo's 1.0.1 patch and tooling adoption news cycle is active right now. Being present in that conversation this week costs 90 minutes. Being absent continues to cost market position.

4. **Oracle Agent Spec + AG-UI closes OSOP's portability narrative if left unaddressed.** If OSOP continues to lead with "workflow definition" as its primary value proposition, it will increasingly collide with Oracle's Agent Spec in positioning discussions. The defensive move is to lead with the execution audit story instead — a story Oracle cannot replicate without fundamentally changing what their spec does.

5. **NIST vocabulary sets Q4 2026.** MCP and A2A are named. "Execution audit" is not named. NIST documents become the reference architecture that enterprise procurement teams cite. Every week without a NIST submission is a week the Q4 2026 vocabulary solidifies without OSOP.

---

## Strategic Reframe: `.osoplog` Is the Primary Moat

This week's Oracle Agent Spec + AG-UI alignment forces a clarification that should have happened earlier.

**OSOP has two value propositions. One is contested. One is not.**

| Value Proposition | Competitors |
|---|---|
| Workflow *definition* standard | Oracle Agent Spec, Arazzo, LangGraph OAP, CrewAI YAML |
| Execution *audit* standard | **None** |

The MCP 2026 Roadmap names execution audit trails as the #1 enterprise gap in production MCP deployments. Oracle Agent Spec has no execution record format. Arazzo has no execution record format. A2A's task lifecycle states are runtime ephemeral — they are not a structured, persistent, replayable audit log. LangGraph produces tracing data but not a portable, schema-validated execution record.

**`.osoplog` is the only structured, portable, schema-validated execution audit format in the agentic AI stack.**

This should become OSOP's primary brand message everywhere:
- GitHub README headline
- AAIF submission opening
- dev.to articles
- Conference CFP abstracts
- NIST submission framing

The reframe: *"OSOP is the audit trail standard for AI agent workflows. `.osop` defines what should happen. `.osoplog` records what actually happened. Together they close the enterprise governance gap that MCP, A2A, and agent portability specs leave open."*

This framing:
- Does not compete with Oracle Agent Spec (they can coexist; OSOP audits what Agent Spec-defined agents do)
- Does not compete with Arazzo (OSOP `api` nodes can reference Arazzo specs; OSOP logs the execution)
- Does not compete with A2A (OSOP workflows can contain `a2a` agent nodes; `.osoplog` captures `a2a_task_id`)
- Directly answers the MCP 2026 Roadmap's stated enterprise gap
- Is immediately defensible to NIST, AAIF, enterprise buyers, and conference program committees

---

## Opportunities

### Immediate (next 48 hours — before Day 30)

**Option A — Arazzo comparison doc** *(defensive necessity; 90 minutes)*
`docs/comparisons/arazzo-vs-osop.md` + 400-word dev.to post.
- Open with the MCP spec's reference to Arazzo — don't fight it, contextualise it
- Define the boundary: Arazzo sequences API calls; OSOP orchestrates the full stack and produces a replayable execution audit
- Introduce the complementarity framing: OSOP `api` nodes can reference Arazzo specs for the endpoint they call
- Close with the `.osoplog` moat: Arazzo defines workflows; OSOP audits them
- Post in MCP Discord, OpenAPI Initiative community, A2A community, and Arazzo's GitHub Discussions

**Option B — OpenClaw PR** *(30 minutes; Day 27)*
1. Fork OpenClaw
2. `examples/dev-automation-workflow.osop.yaml` — issue triage → code analysis → fix proposal → PR creation
3. PR title: "Add structured developer automation workflow example"
4. One sentence linking to spec; do not pitch OSOP
5. Submit

**Option C — AAIF submission** *(2 hours; Day 30 milestone)*
Opening line: *"Enterprises are deploying MCP and running into a predictable set of problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability."* (Source: MCP 2026 Roadmap)
Stack argument: MCP (tool connectivity) + A2A (agent routing) + OSOP (workflow definition + execution audit) = complete agentic AI infrastructure. Submit via `lfx.linuxfoundation.org/projects/new`.

### This Week

- **Compliance engineer blog post: Jama Connect × OSOP** — 500 words targeting compliance-heavy industries (aerospace, medical devices, automotive). Frame: MCP brings AI agents to requirements management; `.osoplog` gives you the audit trail your compliance framework requires. Publish with `requirements-review.osop.yaml` example.
- **Adobe Workfront workflow example** — `workfront-approval-workflow.osop.yaml`. Workfront MCP goes live June 2026; publish the OSOP example now, before the launch, so it's indexed when the news cycle runs.
- **NIST CAISI engagement** — 2-page submission. The three-sentence argument: MCP = tool connectivity (named in NIST baseline), A2A = agent routing (named in NIST baseline), OSOP = workflow definition + execution audit (not yet named; should be). 90 minutes.
- **OpenAI Agents SDK → OSOP export** — Add to tooling backlog; design the interface. One-way converter: Agents SDK workflow definition → `.osop.yaml`. Opens the door to OpenAI-native developers.

### Medium-Term

- **Oracle Agent Spec complementarity post** — Position OSOP as the audit layer for Oracle Agent Spec-defined agents. Not a competitor; a companion. Target Oracle's developer blog community.
- **AAIF MCP Dev Summit EU / next NA event** — Identify the next AAIF event CFP. The North American summit drew 1,200 in April. The next event is the highest-value conference target.
- **`osop export-openai-agents`** — Converter from OpenAI Agents SDK workflow → `.osop.yaml`.
- **JetBrains plugin** — Port `osop-vscode` to JetBrains. 10M+ developers, native MCP, 2026 AI + classic workflow roadmap.
- **Temporal community forum post** — 300 words + `temporal-durable-workflow.osop.yaml`. Highest-density production agent developer community.

---

## Evolution Ideas

### Spec Improvements

**README reframe: lead with `.osoplog`** *(no spec change required; 30-minute edit)*
The current README leads with the `.osop` workflow definition. Given the Oracle Agent Spec competitive signal and the MCP 2026 Roadmap audit trail gap, the README should lead with the execution audit story:
```
OSOP is the audit trail standard for AI agent workflows.
  .osop  — what should happen (workflow definition)
  .osoplog — what actually happened (execution record)
```
This is the highest-leverage 30-minute task that requires no code, no PR, no approval, and no external coordination.

**OSP-0004: `a2a` agent subtype** *(27 days overdue; hyperscaler-urgent)*
A2A is now in Azure AI Foundry, Amazon Bedrock AgentCore, and has 150+ orgs in production. The spec must include:
```yaml
- id: invoke-billing-agent
  type: agent
  subtype: a2a
  name: Invoke Billing Specialist Agent
  runtime:
    agent_card_url: "https://billing-agent.example.com/.well-known/agent.json"
    endpoint: "https://billing-agent.example.com/a2a"
    protocol: "a2a-1.2"
    task_input:
      message: "${inputs.customer_query}"
```
`.osoplog` captures `a2a_task_id` for cross-platform execution tracing.

**OSP-0007: `.osoplog` as primary spec** *(new; triggered by Oracle Agent Spec alignment signal)*
Formalize the `.osoplog` format as a first-class, versioned protocol — not just a companion to `.osop`. Define:
- Schema stability guarantees and version lifecycle
- Mandatory fields for compliance use cases (inputs_hash, outputs_hash, actor, timestamp)
- `.osoplog` validation as a standalone `osop validate --log` command
- Export adapters: `.osoplog` → OTel JSON, `.osoplog` → SIEM ingestion format

This is the spec change that turns OSOP from "workflow format with a log" into "audit standard with a workflow format."

**`arazzo_spec` field on `api` nodes** *(creates complementarity, closes the Arazzo objection)*
```yaml
- id: process-payment
  type: api
  name: Process Payment
  runtime:
    method: POST
    url: "https://api.payment.com/v2/charge"
    arazzo_spec: "./specs/payment-workflow.arazzo.yaml"  # optional
```
Turns "Arazzo or OSOP?" into "Arazzo *and* OSOP."

**OSP-0005: Trust policy** *(27 days overdue)*
`trust_policy:` on agent nodes. Enterprise pre-deployment governance. Required for credible AAIF submission.

**OSP-0006: `skill_ref`** *(4 days; Agent Skills window still open)*
Link agent nodes to Agent Skills `SKILL.md` manifests. Backwards compatible. OpenClaw + Codex CLI + Cursor + Gemini CLI adoption window.

### Tooling Gaps

| Tool | Priority | Why Now |
|------|----------|---------|
| `osop validate --log` | 🔴 Critical | Makes `.osoplog` a first-class validated artifact; OSP-0007 prerequisite |
| `osop export-agent-card` | 🔴 Critical | A2A v1.2, signed cards, 150+ orgs, hyperscaler-native |
| `osop export-bedrock` | 🔴 Critical | Amazon Bedrock AgentCore A2A native |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native, MAF 1.0 GA |
| `osop log-export --format otel-json` | 🔴 Critical | MCP roadmap audit trail gap; Jama/compliance use case |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM integration (Splunk, Datadog) for compliance audit |
| `osop export-agentforce` | 🟠 High | Salesforce Agentforce Operations; 150K enterprise customers |
| `osop export-openai-agents` | 🟠 High | **New**: OpenAI Agents SDK evolution signal; portable escape hatch |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF submission credibility |
| `osop import-sop` | 🟠 High | Strands + GitHub Agentic Workflow users |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo-level adoption; includes log validation |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience |
| JetBrains plugin | 🟡 Medium | 10M+ developers, native MCP, 2026 workflow roadmap |

### Ecosystem Plays

- **Oracle Agent Spec community** — Publish a post framing OSOP as the audit companion to Oracle's Agent Spec. Not a competitor; the record layer above the definition layer. Target Oracle developer blog and Agent Spec GitHub Discussions.
- **Jama Connect developer community** — Compliance-heavy industries are the highest-value `.osoplog` audience. Publish `requirements-review.osop.yaml` + compliance engineer blog post.
- **Adobe Workfront developer community** — Workfront MCP goes live June 2026. Publish the OSOP example before the launch.
- **AAIF MCP Dev Summit (next event)** — Identify CFP. 1,200 attendees in April 2026. This is the highest-value conference target in the stack.
- **NIST CAISI** — 2-page submission. 90 minutes. Get "execution audit" into NIST vocabulary before Q4 2026.
- **MCP Discord / OpenAPI Initiative** — Arazzo comparison doc must publish first; then post in both communities.
- **Temporal community forum** — 300 words + example. Production agent developer concentration.
- **Archon GitHub Discussions** — 10 minutes. Integration window still open.

---

## Top 3 Actions for This Week

### 1. Reframe the README — lead with `.osoplog` *(today; 30 minutes)*

This is the highest-leverage action available that has no dependencies, no coordination, and no review process.

The current README leads with `.osop` and describes OSOP as "the standard format for describing and logging AI agent workflows." After today's Oracle Agent Spec signal, this framing positions OSOP in a competitive fight it doesn't need to have. The execution audit story — `.osoplog` as the only structured, portable audit trail in the agentic AI stack — is uncontested and directly answers the MCP 2026 Roadmap's #1 enterprise gap.

**Specific change:** swap the README's opening two sentences to lead with the audit story. Update the tagline from "standard format for describing and logging" to "audit trail standard for AI agent workflows." Two paragraphs. 30 minutes. Ships immediately.

This change also ensures every new visitor to the repo after the AAIF submission, OpenClaw PR, or Arazzo comparison doc post lands on a README that leads with the strongest, most differentiated positioning available.

### 2. Arazzo comparison doc + dev.to post *(today; 90 minutes)*

This is the highest-time-pressure external deliverable. Arazzo shipped 1.0.1 this week. The MCP spec references Arazzo. Each day without this doc is another day MCP developers have no OSOP-authored answer at the natural search endpoint of the "MCP → Arazzo → limits" journey.

**Specific steps:**
1. Create `docs/comparisons/arazzo-vs-osop.md` in osop-spec
2. Open with the MCP spec reference — acknowledge directly, do not fight
3. Define the boundary: Arazzo = API call sequences; OSOP = full-stack workflow + execution audit
4. Introduce `arazzo_spec` field on `api` nodes as the complementarity bridge
5. Lead the closing section with `.osoplog` — the thing Arazzo cannot do
6. Write 400-word dev.to summary; link the full doc
7. Post in MCP Discord, OpenAPI Initiative Slack, Arazzo GitHub Discussions

### 3. AAIF submission *(today; 2 hours; Day 30 milestone)*

Day 30 is in 48 hours. The AAIF submission is the single item with the highest legitimacy multiplier and the longest review timeline. Every day it is not submitted is a day it cannot be reviewed.

**Opening line** (verbatim from MCP 2026 Roadmap): *"Enterprises are deploying MCP and running into a predictable set of problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability."*

**The stack argument** (updated for today's signals):
- MCP = tool connectivity → AAIF ✅
- A2A = agent routing → AAIF ✅
- Oracle Agent Spec = agent portability → Oracle ecosystem (not AAIF)
- Arazzo = API workflow sequences → OpenAPI Initiative / AAIF (API-only)
- **OSOP = workflow definition + execution audit → AAIF seat unoccupied**

The Oracle Agent Spec signal strengthens the OSOP submission argument: if Agent Spec covers portability, the execution audit layer is even more clearly unaddressed in the AAIF stack. Submit via `lfx.linuxfoundation.org/projects/new`.

---

## Adoption Metrics to Track

| Metric | Current | Target (Day 30 — May 9) | Target (Day 60) | Target (Day 90) |
|--------|---------|------------------------|-----------------|------------------|
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
| Arazzo comparison doc | Not started | **Published + indexed** | Top comparison result | — |
| OpenClaw PR | Not submitted | **Submitted** | Merged | — |
| NIST engagement | Not started | **Interest filed** | Comment on record | — |
| Oracle Agent Spec comparison doc | Not started | — | **Published** | Indexed |
| README audit-trail reframe | Not done | **Done** | — | — |
| `osop validate --log` | Not built | — | **Alpha** | Stable |
| AAIF MCP Dev Summit CFP | Not identified | **Identified** | Submitted | Presented |

---

## Notes

**The single most important strategic development this week** is the Oracle Agent Spec + AG-UI + CopilotKit three-way alignment. Three coordinated specs from Oracle, Google, and CopilotKit are explicitly occupying the "agent workflow portability" positioning that OSOP has been building toward. The correct response is not to compete directly but to lead harder with the execution audit story — the one angle these specs cannot replicate without becoming a different product. This brief's Top 3 Action #1 (README reframe) is the 30-minute signal to every visitor that OSOP has a clear, differentiated identity.

**"Why the Model Context Protocol Won" (The New Stack) is a gift.** When MCP is described as settled infrastructure — "the USB-C of AI" — it validates the case for a standard *above* MCP. Settled infrastructure creates the stable floor that the workflow and audit layers need. Use this framing in the AAIF submission and every external piece.

**Jama Software's MCP Server is an underreported signal.** Engineering management + compliance + MCP is exactly the audience for `.osoplog` as a compliance artifact. No one is writing for compliance engineers in the agentic AI space right now. That audience is small, high-value, and completely unaddressed by any existing agent workflow spec.

**Day 30 is 48 hours away.** Three items — README reframe (30 min), Arazzo comparison doc (90 min), AAIF submission (2 hours) — can all close before end of day today. The backlog has been analyzed for 28 days. The next 4 hours either change the trajectory or confirm the pattern.
