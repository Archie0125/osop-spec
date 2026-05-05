# OSOP Daily Strategy Brief — 2026-05-05

> Day 26 of the strategy program. Tuesday. **Day 30 is 4 days away. All targets at 0.**

---

## Action Tracker (from 2026-05-04)

| Action | Status | Days Pending | Notes |
|--------|--------|--------------|-------|
| OpenClaw PR | ⏳ Pending | **25** | 30-minute task. Day 25. No blockers. |
| AAIF submission | ⏳ Pending | **25** | Draft exists. New hook: MCP roadmap audit trail quote. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **25** | Hyperscaler-urgent: Azure AI Foundry + Amazon Bedrock AgentCore |
| OSP-0005: Trust policy | ⏳ Pending | **25** | |
| OSP-0006: `skill_ref` for Agent Skills | ⏳ Pending | **2** | |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~27 days to deadline | |
| AI Engineer World's Fair CFP | ⏳ Pending | ~35 to event | |
| "MCP + OSOP" blog post | ⏳ Pending | 25 | |
| ADL × OSOP positioning piece | ⏳ Pending | 25 | |
| Arazzo comparison doc | ⏳ Pending | 25 | **Urgency elevated — see below** |
| ACP workflow example | ⏳ Pending | 3 | |
| Strands SOP migration example | ⏳ Pending | 3 | |

**Meta-status**: 26 days, zero items closed. Day 30 targets (50 GitHub stars, AAIF submitted, OpenClaw PR merged, OSP-0004/0005/0006 published) are 4 days away at 0% completion.

---

## Intelligence

### New Signals (2026-05-05)

- **Google Cloud Next 2026 made A2A mainstream** — The event landed A2A v1.0's "150 organizations in production" story in enterprise-tier press. "Full-stack bet against OpenAI and Anthropic" framing from The Next Web signals that A2A is now a vendor battleground, not just a protocol. Enterprise architects at Google Cloud Next are the exact audience who will ask "how do we define and document our A2A workflows?" No canonical answer exists today. OSP-0004 is that answer.

- **"Why the Model Context Protocol Won" — The New Stack** — The framing has shifted from "MCP is gaining traction" to "MCP won." When a technology is declared the winner in the tool-connectivity layer, the next architectural question becomes: *what manages the workflows above it?* This is the exact question OSOP answers. The article creates a high-traffic search entry point. A 400-word dev.to response titled "MCP Won the Tool Layer. Now What Orchestrates the Workflows?" with a `.osoplog` snippet would capture that traffic today.

- **SmartBear positions Arazzo as the MCP agent workflow spec — NOW the primary threat** — SmartBear (owns Swagger Editor, the dominant OpenAPI tooling; owner of SoapUI, ReadyAPI) published "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP." The article explicitly frames Arazzo MCP tools as "complete business capabilities" rather than raw API calls. SmartBear has the distribution — Swagger Editor alone has tens of millions of users. The developer sentence being written right now by enterprise API teams is: "We use MCP for tool connectivity. We use Arazzo for our agent workflows." The Arazzo comparison doc must exist before this framing solidifies. **This elevates the Arazzo comparison doc from medium priority to ship-this-week.**

- **NIST AI Agent Standards Initiative** — NIST created a formal AI Agent Standards Initiative in February 2026 to support "trusted, interoperable, and secure agentic AI standards and protocols." This is a US government standards body. Engagement here confers institutional legitimacy that AAIF membership alone cannot. OSOP has not filed any submission or expressed interest. The initiative is fresh enough that early engagement still constitutes founding-cohort status.

- **Archon: YAML workflow wrapper for Claude Code and Codex CLI** — An open-source project called Archon has emerged, explicitly wrapping Claude Code and Codex CLI in YAML-defined, version-controlled workflow pipelines ("deterministic, version-controlled pipelines"). The framing is identical to OSOP's. This is simultaneously: (a) a competing format signal — developers are independently converging on YAML workflow definitions for AI coding agents; (b) an immediate integration target — if Archon adopts OSOP format, OSOP gets a ready-made user base of Claude Code + Codex CLI developers; (c) an alternative to the OpenClaw PR if outreach to Archon is faster.

- **Jama Software MCP Server (May 4, 2026)** — Jama Connect 9.35 (engineering management software for multidisciplinary teams) shipped the first MCP Server in the engineering management vertical, enabling "Spec Driven Development via MCP." This signals enterprise tooling vendors are normalizing MCP integration. An OSOP workflow example modeling Jama's spec-driven development loop (requirements → agent validation → human review → approval) would be the first OSOP example in the engineering management vertical, with immediate relevance to Jama's customer base.

- **Temporal + OpenAI Agents SDK GA (March 2026)** — The durable execution + agent SDK integration is now generally available. This cements Temporal as production infrastructure beneath agent workflows. The portable workflow definition layer above Temporal — what you hand to another team, commit to version control, diff across runs — is still absent from Temporal's ecosystem. OSOP fills it. A `temporal-durable-workflow.osop.yaml` example in `osop-examples` and a 300-word post on the Temporal community forums would reach the highest-production-density agent developer community currently active.

### Continuing Signals

- **A2A in Azure AI Foundry + Amazon Bedrock AgentCore** — unchanged urgency; OSP-0004 is the spec; examples for both platforms needed
- **MCP 2026 Roadmap names audit trails as top enterprise gap** — `.osoplog` is the answer; belongs in every OSOP communication channel
- **Agent Skills at 4-tool adoption** — OSP-0006 window is open while the standard is forming
- **MCP at 97M monthly SDK downloads, 5,800+ servers, 78% enterprise AI team adoption** — OSOP needs to be the workflow format these teams reach for

---

## Threats

1. **SmartBear is writing the Arazzo-for-MCP story and has the distribution to make it stick** — SmartBear distributes Swagger Editor to tens of millions of API developers. Their editorial framing of Arazzo as the agent workflow spec will be read, shared, and cited by the same enterprise architects who are OSOP's primary adoption target. Every week without a published "OSOP vs. Arazzo" comparison doc is a week the developer mental model of "Arazzo = agent workflows" calcifies. The doc does not need to argue that Arazzo is wrong — it needs to precisely define the boundary (Arazzo = API call sequences; OSOP = full workflow graph with agents, humans, CLI, execution audit). That's a 600-word document.

2. **Day 30 is in 4 days at 0% execution** — The Day 30 internal targets (50 GitHub stars, AAIF submitted, OpenClaw PR merged, 3 OSP proposals published) were set on day 1 as 30-day milestones. Day 30 is May 9. Current state: 0 stars, 0 PRs, 0 proposals published, AAIF unsubmitted. Each day the gap between stated targets and reality widens, the credibility of all future target-setting erodes.

3. **Archon normalizes a competing YAML format before OSOP gets adoption** — Archon is solving the exact same developer problem OSOP solves (portable YAML workflow definitions for AI coding agents) but for a concrete tool pair (Claude Code + Codex CLI). If Archon establishes its own schema, the "YAML workflow for AI agents" mental real estate fragments. The integration window — reaching out to Archon maintainers before they publish a stable schema — is measured in days or weeks.

4. **A2A v1.3 execution log risk** — A2A has shipped cryptographic domain verification (v1.2) and signed Agent Cards. A v1.3 that adds even a minimal task execution log standard directly competes with `.osoplog`. The window to establish "A2A routes → OSOP defines → `.osoplog` audits" as canonical is narrowing with each A2A release.

5. **NIST standardization without OSOP input** — NIST's AI Agent Standards Initiative is in its early formation phase. The standards bodies, protocols, and formats that engage during the formation phase shape the vocabulary of the resulting standard. OSOP's absence means the "workflow definition and execution audit" concept is absent from the vocabulary NIST is forming.

---

## Opportunities

### Immediate (Today — pick one and execute)

**Option A — Arazzo comparison doc** *(elevated to today)*
Create `docs/comparisons/arazzo-vs-osop.md`. Open with Arazzo's own positioning: "shifts focus from individual endpoints to end-to-end business workflows." Frame the boundary precisely: Arazzo sequences API calls and produces nothing from execution; OSOP orchestrates the full stack (LLM agents, humans, APIs, CLI) and records a replayable execution audit. They are complementary: OSOP workflows can contain `api` nodes whose endpoints are described by Arazzo specs. 600 words. Publish to dev.to. Counter SmartBear's framing before it sets.

**Option B — OpenClaw PR** *(Day 25, 30 minutes)*
Fork OpenClaw. Create `dev-automation-workflow.osop.yaml` (issue triage → code analysis → fix proposal → PR creation). Submit. This is Day 25 of the same instruction.

**Option C — "MCP Won. Now What Orchestrates the Workflows?" blog post** *(new, high-traffic hook)*
400 words. Ref "Why the Model Context Protocol Won" (The New Stack). Show a 15-line `.osop.yaml` and a 10-line `.osoplog` snippet. Post to dev.to, HN, and the MCP Discord. The search traffic from "why MCP won" is live today.

### This Week

- **AAIF submission** — Unchanged. The MCP roadmap audit trail quote is the opening line. Submit via `lfx.linuxfoundation.org`.
- **OSP-0004: A2A spec** — Google Cloud Next 2026 landed A2A in the enterprise mainstream. The spec must exist.
- **Archon integration outreach** — Open a GitHub Discussion on Archon's repo: "OSOP compatibility for Archon workflow files." No code required; just introduce the format and ask if there's interest. If yes, write a converter.
- **NIST engagement** — Submit a brief (2-page) comment or interest filing to the NIST AI Agent Standards Initiative describing OSOP's role as a workflow definition and execution audit standard. Institutional engagement at NIST-tier carries outsized legitimacy at low effort during the initiative's formation phase.
- **Temporal community forum post** — 300 words + `temporal-durable-workflow.osop.yaml` example. Reach the highest-density production agent developer community without any PR or code contribution required.

### Medium-Term

- **"MCP Won" blog post** *(if not done today)* — The traffic window is active.
- **OSP-0005: Trust policy RFC** — Enterprise governance requirement; still needed.
- **OSP-0006: `skill_ref` RFC** — Agent Skills window is open.
- **Jama Connect workflow example** — `examples/enterprise/jama-spec-driven-dev.osop.yaml`. First OSOP example in the engineering management vertical.
- **ACP workflow example** — `examples/agentic-commerce-workflow.osop.yaml`.

---

## Evolution Ideas

### Spec Improvements

**OSP-0004: A2A Bridge** *(Day 25 overdue — Google Cloud Next just made it mainstream)*
The `a2a` agent subtype with `runtime.endpoint` and `runtime.agent_card_url`. Two platform-specific examples (Amazon Bedrock AgentCore + Azure AI Foundry). `.osoplog` captures `a2a_task_id` for cross-platform execution tracing. CLI: `osop export-agent-card`.

```yaml
- id: research-specialist
  type: agent
  subtype: a2a
  name: Research Specialist (Bedrock AgentCore)
  runtime:
    endpoint: "https://bedrock-agentcore.us-east-1.amazonaws.com/agents/ABCDEF/invoke"
    agent_card_url: "https://bedrock-agentcore.us-east-1.amazonaws.com/.well-known/agent.json"
    protocol: "a2a/1.0"
    task:
      message: "${inputs.research_query}"
    output_mapping:
      result: "$.artifacts[0].parts[0].text"
```

**OSP-0006: `skill_ref` on agent nodes** *(Day 2 — Agent Skills window open)*
Optional field referencing an Agent Skills `SKILL.md` manifest. Backwards compatible; engines that don't support it ignore it.

**OSP-0005: Trust policy for agent nodes** *(Day 25 overdue)*
`trust_policy:` block defining permission scope for agent nodes. Enterprise pre-deployment governance requirement.

**`workflow` node type** *(composability gap)*
First-class sub-workflow invocation. One of the most-requested features in any workflow system; currently a workaround via `system` nodes with `workflow_ref`.

**Streaming semantics** *(LLM-reality gap)*
`runtime.streaming: true` + `runtime.stream_to: <node_id>`. Every production LLM streams. OSOP models agents as blocking black boxes.

### Tooling Gaps

| Tool | Priority | Why Today |
|------|----------|-----------|
| `osop export-agent-card` | 🔴 Critical | A2A at Google Cloud Next 2026 mainstream moment |
| `osop export-bedrock` | 🔴 Critical | Amazon Bedrock AgentCore has A2A native |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry has A2A native + MAF 1.0 |
| `osop log-export --format otel-json` | 🟠 High | MCP roadmap names audit trail integration as gap |
| `osop import-sop` | 🟠 High | Converts Strands + GitHub Agentic Workflow markdown users |
| `osop trust-audit` | 🟠 High | Enterprise governance pre-deployment checklist |
| Archon format converter | 🟠 High | New: intercept Archon's user base before their schema hardens |
| GitHub Action: validate + trust-audit | 🟡 Medium | Zero-friction repo-level adoption |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience |

### Ecosystem Plays

- **SmartBear / Arazzo community** — Publish the comparison doc; position OSOP as *complementary* to Arazzo for MCP teams, not competing. Target: the SmartBear readership that just read the Arazzo + MCP article.
- **Archon GitHub Discussions** — Introduce OSOP format compatibility. Low-effort; high-upside if they adopt OSOP schema.
- **Temporal community forum** — Post a durable-execution workflow example. Reaches production agent developers directly.
- **NIST AI Agent Standards Initiative** — File an interest comment describing OSOP's role in the emerging standard stack.
- **A2A working group** — Request observer status at `a2aproject/A2A`.
- **AAIF** — MCP roadmap audit trail quote is the opening line. Submit this week.
- **awesome-ai-agents-2026** — 15-minute PR, 300+ curated resources, monthly updated.

---

## Top 3 Actions for This Week

### 1. Publish the Arazzo comparison doc — today

**Why now**: SmartBear published "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP" using OSOP's language ("complete business capabilities"). They have tens of millions of Swagger Editor users. The developer mental model being formed right now in enterprise API teams is "Arazzo = agent workflows." Every day without a written response, that model sets harder.

**Specific steps**:
1. Create `docs/comparisons/arazzo-vs-osop.md`
2. Open with Arazzo's positioning quote (available in the Arazzo spec and the SmartBear article)
3. Define the boundary: Arazzo sequences API calls (no agent nodes, no human nodes, no CLI, no execution log); OSOP orchestrates full-stack workflows and produces a replayable execution audit
4. Frame complementarity: OSOP workflows can contain `api` nodes whose endpoints are described by Arazzo specs; OSOP is not a replacement
5. Publish a 400-word summary to dev.to, link the full doc
6. Post in the OpenAPI community Slack/Discord

### 2. Execute OpenClaw PR — today (Day 25, 30 minutes)

No new analysis. No new blockers. The instructions are:
1. Fork the OpenClaw repository
2. Create `dev-automation-workflow.osop.yaml` in the examples or contrib directory
3. Model the pattern: issue triage → code analysis → fix proposal → PR creation
4. Title the PR: "Add structured developer automation workflow example"
5. One sentence in the description body linking to osop.ai
6. Submit

247,000-star community. 30-minute task. Day 25.

### 3. Submit AAIF application — this week (Day 25)

**Opening line** (use verbatim from MCP 2026 Roadmap): "Enterprises are deploying MCP and running into a predictable set of problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability."

**Argument**: The AAIF stack (MCP = tool connectivity, A2A = agent routing) has no layer for portable workflow definition or execution audit. OSOP fills it. `.osoplog` is the audit trail the MCP roadmap says enterprises need. Submit via `lfx.linuxfoundation.org/projects/new`.

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
| Discord members | 0 | 50 | 200 | 500 |
| Repos with .osop files | 0 | 5 | 20 | 50 |
| Blog/content views | 0 | 2k | 10k | 50k |
| AAIF submission status | Draft ready | **Submitted** | In review | Accepted/Pending |
| A2A working group participation | Not started | Observer requested | Active observer | Contributor |
| NIST engagement | Not started | Interest filed | Comment on record | — |
| OSP proposals published | 3 | **6** (0004, 0005, 0006) | 8 | 12 |
| CFP submissions | 0 | **3** | — | 1+ accepted |
| Arazzo comparison doc | Not started | **Published** | Indexed | Top comparison result |
| Archon compatibility | Not started | Discussion opened | — | Format adopted or converter shipped |
| ACP workflow example | 0 | 1 published | 3 | 5 |
| Strands migration example | 0 | 1 published | 3 | 5 |
| Web search presence for "OSOP workflow" | 0 results | 1+ indexed | 5+ pages | Top-10 result |

---

## Notes

- **Today's defining signal**: SmartBear is writing the "Arazzo = agent workflow spec" story for MCP teams using OSOP's language. SmartBear has the distribution to make that framing stick. The Arazzo comparison doc is no longer a medium-priority content play — it is an active positioning defense.

- **The "MCP Won" frame creates a natural opening**: The New Stack declaring MCP the winner of the tool-connectivity layer is the most useful framing OSOP has been handed. The question "MCP won — now what?" has a clean, short answer: a portable workflow definition layer that runs above MCP, records what executed, and lets you diff, replay, and hand off workflows across teams. That answer is OSOP. Write it today.

- **Day 30 is May 9 — 4 days away**: The brief has tracked 25+ days of "execute today" for the same three items (OpenClaw PR, AAIF, OSP-0004). The question is no longer strategic — it is purely executionary. One of the three must close this week. The OpenClaw PR is the lowest-friction option: 30 minutes, no approval process, no bureaucracy, immediate community exposure.

- **Archon is a new variable**: It is new enough that the maintainers have not yet published a stable YAML schema. That is the integration window. A GitHub Discussion post ("Would Archon benefit from OSOP format compatibility?") costs 10 minutes and has zero downside. If they say yes, OSOP gets a ready-made install base of Claude Code and Codex CLI developers. If they say no, nothing is lost.

- **The stack is complete, named, and OSOP's seat is still unoccupied**: MCP (tools, AAIF). A2A (routing, AAIF, Linux Foundation, Google Cloud Next 2026). Agent Skills (capabilities, OpenClaw ecosystem). LangGraph OAP (cross-framework execution). OSOP (workflow definition + execution audit — unoccupied). This sentence belongs on the osop.ai homepage, in the AAIF submission, and at the top of every CFP abstract. Stop stating the gap in strategy briefs. Publish it publicly.
