# OSOP Daily Strategy Brief — 2026-05-04

> Day 25 of the strategy program. Monday — ROADMAP updated today.

---

## Action Tracker (from 2026-05-03)

| Action | Status | Days Pending | Notes |
|--------|--------|--------------|-------|
| OSP-0004: A2A agent subtype | ⏳ Pending | **24** | Hyperscaler-tier urgent: A2A now in Azure AI Foundry + Amazon Bedrock AgentCore |
| OSP-0005: Trust policy for agent nodes | ⏳ Pending | **24** | |
| OSP-0006: `skill_ref` for Agent Skills | ⏳ Pending | **1** | Agent Skills at 4-tool adoption |
| AGNTCon / MCPCon NA + EU CFP | ⏳ Pending | ~4 weeks to deadline | |
| AI Engineer World's Fair CFP | ⏳ Pending | ~8 weeks to event | |
| AAIF submission | ⏳ Pending | **24** | New hook: MCP 2026 Roadmap names audit trails as top enterprise gap |
| OpenClaw PR | ⏳ Pending | **24** | 30-minute task. Execute today. |
| "MCP + OSOP" blog post | ⏳ Pending | 24 | Reframe as "MCP audit trail answer" |
| ADL x OSOP positioning piece | ⏳ Pending | 24 | |
| Arazzo comparison doc | ⏳ Pending | 24 | Write before Arazzo 1.1 press cycle |
| Strands SOP migration example | ⏳ Pending | 2 | |
| ACP workflow example | ⏳ Pending | 2 | |

**Meta-status**: 24 days, zero items closed. Today is the first Monday — see `docs/ROADMAP.md` for weekly synthesis. Execution remains the constraint.

---

## Intelligence

### New Signals (2026-05-04)

- **A2A enters the hyperscaler tier** — A2A v1.0 is now in production inside Azure AI Foundry and Amazon Bedrock AgentCore — the two dominant enterprise AI cloud platforms. The community: 150+ organizations, 22,000+ GitHub stars. OSP-0004 was urgent at 150 orgs; it is now urgent at hyperscaler platform integration. Every enterprise team building on Azure or AWS encounters A2A natively. An OSOP workflow calling an A2A agent on Bedrock or Azure is a tier-1 enterprise story. No such OSOP example exists yet.

- **MCP 2026 Roadmap explicitly names audit trails as a gap** — The official MCP project roadmap states enterprises running MCP are "running into predictable problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability." This is the most authoritative external validation of `.osoplog`'s purpose to date. The MCP project itself names the gap OSOP fills. This sentence belongs in the AAIF submission, every CFP abstract, and the osop.ai homepage.

- **A2A GitHub repo at 22,000+ stars** — For context: OSOP's combined ecosystem is at 0 stars. The developer community forming around A2A is exactly the base OSOP needs visibility into. OSP-0004 published = an immediate discoverability pathway to a 22K-developer community already invested in agent-to-agent workflows.

- **Red Hat MCP server for RHEL developer preview** — Enterprise Linux has entered the MCP ecosystem. RHEL-deployed MCP servers mean enterprises can run MCP-accessible tools on their own infrastructure. An OSOP workflow using `type: mcp` nodes against RHEL-hosted servers becomes a concrete enterprise on-premise story — a vertical OSOP is currently absent from.

- **Microsoft Agent Framework 1.0 confirmed GA** — OpenAPI-first, with native MCP, A2A, and OpenAPI support. The OSOP + MAF workflow expression story (use `.osop.yaml` to define what MAF executes) is now publishable and timely. PR #13727 is already open against `microsoft/semantic-kernel`.

- **LangGraph surpassed CrewAI in GitHub stars in early 2026** — Enterprise adoption chose the directed graph (DAG) model over role-based frameworks. OSOP's directed graph architecture is structurally aligned with what enterprises are selecting. The mental model enterprises already hold — graph nodes, edges, conditional routing — is exactly what `.osop` implements.

- **Arazzo positioning confirmed** — Arazzo describes itself as complementing OpenAPI "by shifting focus from individual endpoints to end-to-end business workflows." OSOP's differentiation: Arazzo chains API calls; OSOP orchestrates the full stack (LLM agents, humans, APIs, CLI, infra) and records execution. The comparison doc has its anchor quote.

- **MCP adoption: 78% of enterprise AI teams have MCP-backed agents in production** — 67% of CTOs surveyed name MCP their default agent-integration standard. 97M monthly SDK downloads, 5,800+ servers. OSOP needs to be the workflow format these teams reach for when they outgrow ad-hoc agent chains.

### Continuing Signals

- **Agent Skills at 4-tool adoption** — OpenClaw (247K+ stars), Codex CLI, Cursor, Gemini CLI. OSP-0006 `skill_ref` RFC still unwritten. Window is open while the standard is still forming.
- **MCP formally donated to AAIF / Linux Foundation** — Co-founded by Anthropic, OpenAI, Block; Google, Microsoft, AWS as members. AAIF stack: MCP (tools) + A2A (routing) + OSOP (workflow + audit — unsubmitted).
- **Agentic Commerce Protocol (ACP) launched** — OpenAI + Stripe. No OSOP workflow example for ACP flows yet.
- **LangGraph OAP** — Cross-framework execution protocol. OSOP sits above it as the workflow definition layer.
- **AWS Strands SOPs** — Markdown-based natural language workflows, Claude/GPT-4 native. No OSOP conversion example yet.
- **Temporal = durable execution** — OpenAI uses Temporal for Codex in production. No portable format layer above Temporal exists. OSOP fills it.

---

## Threats

1. **A2A in Azure + AWS = platform-native "workflow layer" pressure** — Microsoft and Amazon product teams will be asked "how do we define and document our A2A workflows?" If they ship platform-native answers before OSP-0004 exists, the format layer above their A2A implementations will be proprietary. The window to be the canonical open answer is a function of how long it takes their product teams to move.

2. **MCP audit trail gap is now public knowledge** — The MCP 2026 Roadmap naming audit trails as a top enterprise pain means other projects are reading that roadmap and considering solutions. `.osoplog` has a first-mover narrative window that opened with this publication and closes when a competing solution gains traction.

3. **Backlog velocity is negative** — 24 actions pending, 0 completed in 25 days. New urgent signals are being added each brief faster than existing items are cleared. The compound effect: by the time any item executes, three new urgent items have been identified. The bottleneck is not analysis.

4. **A2A working group forms without OSOP input** — The A2A project is under Linux Foundation governance with a formal working group. Every week OSOP is not at the table, the protocol's norms around workflow definition and execution logging solidify without OSOP's influence.

5. **Arazzo 1.1 + AsyncAPI press cycle approaching** — Without a published comparison doc, "why not just use Arazzo?" will be an unanswered objection for every API-heavy team. The doc needs to exist before the Arazzo 1.1 launch cycle.

---

## Opportunities

### Immediate (Today)

- **OpenClaw PR — execute in the next 30 minutes**: Fork OpenClaw, create `dev-automation-workflow.osop.yaml` (issue triage → code analysis → fix proposal → PR creation), submit. This is day 24 of "execute today."

- **AAIF submission — new opening line available**: The MCP 2026 Roadmap lists audit trails as the top enterprise gap in production MCP deployments. OSOP's `.osoplog` is that audit trail. The draft exists. Submit via `lfx.linuxfoundation.org`.

### This Week

- **OSP-0004: A2A Bridge spec with Azure + AWS examples** — Write the spec defining the `a2a` agent subtype. Add `examples/agent/a2a-bedrock-workflow.osop.yaml` (Amazon Bedrock AgentCore) and `examples/agent/a2a-azure-foundry-workflow.osop.yaml` (Azure AI Foundry). Request observer status at `a2aproject/A2A`.

- **"MCP says you need an audit trail. OSOP provides it." blog post** — 500 words, dev.to. Quote the MCP 2026 Roadmap directly. Show a `.osoplog` snippet. This is the highest-discoverability content play available right now — the MCP roadmap search traffic is live today.

- **Arazzo comparison doc** — `docs/comparisons/arazzo-vs-osop.md`. Open with Arazzo's own positioning quote. Frame: Arazzo = API call sequences; OSOP = full stack orchestration + execution audit. Complementary and frequently used together.

### Medium-Term (This Month)

- **`osop export-bedrock` + `osop export-azure-ai-foundry`** — Platform-specific export commands targeting the two largest enterprise AI clouds. Highest-reach tooling investments given A2A's hyperscaler integration.
- **OSOP x RHEL MCP example** — `examples/enterprise/rhel-mcp-workflow.osop.yaml` using `type: mcp` nodes against RHEL-hosted MCP servers. Enterprise on-premise credibility.
- **AGNTCon + MCPCon CFP** — ~4 weeks to deadline. MCP 2026 Roadmap audit trail quote is now the hook.
- **OSP-0005: Trust policy** — Enterprise requirement. Write the RFC.
- **OSP-0006: `skill_ref`** — Agent Skills window is open while the standard is still forming.

---

## Evolution Ideas

### Spec Improvements

**Reposition `.osoplog` as "the audit trail MCP's 2026 Roadmap says you need"**
No spec change required — documentation and messaging only. The MCP roadmap is the external authority; `.osoplog` is the answer. Every OSOP touchpoint should reflect this framing.

**OSP-0004: A2A Bridge** *(Day 24 overdue — now hyperscaler-urgent)*
Add `a2a` as a named `agent` subtype with `runtime.endpoint` and `runtime.agent_card_url`. New CLI: `osop export-agent-card`. Platform-specific examples for Azure AI Foundry and Amazon Bedrock AgentCore. `.osoplog` captures `a2a_task_id` for cross-platform execution tracing.

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

**OSP-0006: `skill_ref` on `agent` nodes** *(Day 1 — Agent Skills window open)*
Optional field referencing an Agent Skills `SKILL.md` manifest. Engines that don't support it ignore it. Makes OSOP workflows first-class citizens of the Agent Skills ecosystem.

**OSP-0005: Trust policy for agent nodes** *(Day 24 overdue)*
`trust_policy:` block on `agent` nodes. Enterprise pre-deployment governance requirement.

**SSO integration example**
OSOP already specifies `security.authentication.type: oidc`. Write `examples/enterprise/azure-ad-sso-workflow.osop.yaml`. Direct answer to the MCP roadmap's SSO gap.

**`workflow` node type** *(composability gap)*
Promote `workflow_ref` from a `system` node workaround to a first-class `workflow` node type. One of the most-requested features in any workflow system.

**Streaming semantics on `agent` nodes** *(LLM-reality gap)*
Every production LLM streams. Add `runtime.streaming: true` + `runtime.stream_to`. OSOP currently models agents as black-box blocking calls.

### Tooling Gaps

| Tool | Why Now | Impact | Effort |
|------|---------|--------|--------|
| `osop export-bedrock` | A2A in Bedrock AgentCore; largest enterprise AI cloud | Very High | Medium |
| `osop export-azure-ai-foundry` | A2A in Azure AI Foundry; MAF 1.0 GA | Very High | Medium |
| `osop export-agent-card` | A2A: 150 orgs, 22K stars, hyperscaler integration | High | Low |
| `osop import-sop` | Converts Strands/GitHub markdown workflow users | High | Medium |
| `osop log-export --format otel-json` | MCP roadmap names audit trail integration as gap | High | Medium |
| `osop trust-audit` | Enterprise pre-deployment checklist | High | Low |
| OSOP Playground (browser) | Zero-install first experience; search-indexed | High | High |
| GitHub Action: validate + trust-audit | Zero-friction repo-level adoption | Medium | Low |

### Ecosystem Plays

- **A2A working group** — Request observer/contributor status at `a2aproject/A2A`. OSOP's workflow definition + log layer is additive to A2A, not competing.
- **AWS + Azure integrations** — A2A examples for Bedrock AgentCore and Azure AI Foundry as the enterprise integration showcase. Highest-reach ecosystem plays available.
- **Red Hat RHEL MCP** — `type: mcp` workflow example against RHEL-hosted MCP server. Enterprise on-prem credibility.
- **AAIF** — MCP 2026 Roadmap audit trail quote is now the opening line of the submission.
- **Agent Skills (OSP-0006)** — OpenClaw's 247K-star community has never heard of OSOP. The PR and OSP-0006 change that.

---

## Top 3 Actions for This Week

### 1. Execute OpenClaw PR — today, 30 minutes (Day 24)

Instructions are unchanged from day 10. Execute them.

1. Fork the OpenClaw repository
2. Create `dev-automation-workflow.osop.yaml` — issue triage → code analysis → fix proposal → PR creation
3. Submit PR titled "Add structured developer automation workflow example"
4. One sentence linking to osop.ai in the description body

This is the entry point to a 247K-star community. It is a 30-minute task.

### 2. Submit AAIF application — this week, with new opening line

**New hook**: "The MCP 2026 Roadmap lists audit trails as the top enterprise gap in production MCP deployments. OSOP's `.osoplog` is that audit trail: an immutable, structured execution record of every node, tool call, token, and cost in a workflow run."

Then: AAIF has MCP (tool connectivity) + A2A (agent routing). The missing layer is portable workflow definition + execution audit. OSOP fills it. Submit via `lfx.linuxfoundation.org`.

### 3. Write OSP-0004 with Azure AI Foundry and Amazon Bedrock AgentCore examples

A2A is native to both hyperscaler AI platforms. The spec must exist.

1. `proposals/OSP-0004-a2a-support.md` — `a2a` subtype, `osop export-agent-card`, `.osoplog` A2A task ID capture
2. `examples/agent/a2a-bedrock-workflow.osop.yaml` — OSOP workflow calling an A2A agent on Amazon Bedrock AgentCore
3. `examples/agent/a2a-azure-foundry-workflow.osop.yaml` — same for Azure AI Foundry
4. `docs/integrations/a2a.md` — integration guide with runtime binding examples
5. Request observer status at `a2aproject/A2A`

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
| OSP proposals published | 3 | **6** (OSP-0004, 0005, 0006) | 8 | 12 |
| CFP submissions | 0 | **3** (AI Eng WF + AGNTCon + MCPCon) | — | 1+ accepted |
| Agent Skills integration (OSP-0006) | Not started | RFC published | Spec merged | 2+ tools referencing |
| ACP workflow example | 0 | 1 published | 3 | 5 |
| Arazzo comparison doc | Not started | Published | Indexed | Top result |
| A2A/Azure/AWS workflow examples | 0 | **3 published** | 5 | 10 |
| Web search presence for "OSOP workflow" | 1 page (osop.ai) | 5+ indexed pages | 20+ pages | Top-10 result |

---

## Notes

- **Today's defining signal**: A2A is in Azure AI Foundry and Amazon Bedrock AgentCore. This changes OSP-0004 from "protocol integration spec" to "hyperscaler platform integration spec." The examples need to be Azure-specific and AWS-specific, not just abstract A2A examples.

- **The MCP roadmap quote is a gift**: "Enterprises are deploying MCP and running into a predictable set of problems: audit trails, SSO-integrated auth, gateway behavior, and configuration portability." Every OSOP touchpoint — AAIF submission, CFP abstract, blog post, README — should open with this quote and immediately show `.osoplog` as the answer.

- **The stack is complete and named**: MCP = tool connectivity (AAIF). A2A = agent routing (AAIF). Agent Skills = agent capabilities (OpenClaw ecosystem). LangGraph OAP = cross-framework execution. OSOP = workflow definition + execution audit (unoccupied). Every layer has a name. OSOP's position is defined by exclusion. Stop describing the gap and start occupying the seat.

- **This is the first Monday brief.** ROADMAP is at `docs/ROADMAP.md`.
