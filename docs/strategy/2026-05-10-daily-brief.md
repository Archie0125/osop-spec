# OSOP Daily Strategy Brief — 2026-05-10

> **Day 31. The morning after Day 30 closed at zero.**
> Yesterday's brief documented the execution gap in full. This brief does not re-litigate it.
> New signals arrived overnight. One of them changes the OpenClaw PR strategy in a way that improves it.
> Three actions. This is the week they ship.

---

## Action Tracker (carry-forward from 2026-05-09)

| Action | Status | Days Pending | Effort | Change from yesterday |
|--------|--------|--------------|--------|----------------------|
| AAIF submission | ⏳ Pending | **30** | 2 hrs | New hook: AWS verticalizing MCP (SAP MCP GA) |
| OpenClaw PR | ⏳ Pending | **30** | 30–45 min | **New angle: SOUL.md companion pattern** |
| OSP-0004: A2A agent subtype | ⏳ Pending | **30** | 3 hrs | New hook: Google ADK 1.0 GA confirmed |
| OSP-0005: Trust policy | ⏳ Pending | **30** | 2 hrs | Unchanged |
| OSP-0006: `skill_ref` | ⏳ Pending | **7** | 2 hrs | Unchanged |
| Arazzo comparison doc | ⏳ Pending | **30** | 90 min | Unchanged |
| `osoplog-otel-mapping.md` | ⏳ Pending | **1** | 45 min | Unchanged |
| AG2 examples PR | ⏳ Pending | **1** | 45 min | Unchanged |
| README audit-trail reframe | ⏳ Pending | **3** | 30 min | Unchanged |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~22 days to deadline | 2 hrs | Unchanged |
| AI Engineer World's Fair CFP | ⏳ Pending | ~31 days to event | 1 hr | Unchanged |
| Adobe Workfront OSOP example | ⏳ Pending | **2** | 1 hr | Unchanged |
| ACP workflow example | ⏳ Pending | **8** | 1 hr | Unchanged |
| Strands migration example | ⏳ Pending | **8** | 1 hr | Unchanged |
| LangGraph bridge doc | ⏳ Pending | **1** | 60 min | Unchanged |
| Red Hat Developer blog pitch | ⏳ Pending | **1** | 30 min | Unchanged |
| NIST CAISI submission | ⏳ Pending | **5** | 90 min | Window still open; check deadline |
| Temporal community post | ⏳ Pending | **5** | 45 min | Unchanged |
| Archon compatibility Discussion | ⏳ Pending | **5** | 10 min | Unchanged |

---

## Intelligence

### New Signals (2026-05-10)

**AWS is verticalizing MCP — SAP MCP Server GA in Amazon Bedrock AgentCore.**
Four days after the general AWS MCP Server GA (May 6), AWS launched a second GA: the AWS for SAP MCP Server in Amazon Bedrock AgentCore. SAP is the ERP backbone of 400K+ organizations, including most of the Fortune 500. This is not a horizontal infrastructure play — AWS is packaging domain-specific agent gateways into each major enterprise software vertical. The sequence — generic AWS MCP → SAP MCP — signals a coming wave: Salesforce MCP, ServiceNow MCP, Workday MCP, Oracle MCP. Each of these deploys an AI agent that executes multi-step business workflows. None of them will have a portable definition format unless OSOP occupies that layer first. The Bedrock + SAP combination is the first concrete proof that enterprise AI agents are being built workflow-by-workflow into vertical business processes, not as horizontal AI platforms.

**AWS Agent Toolkit: MCP + Skills + Plugins as a unified framework.**
AWS shipped the Agent Toolkit this month — a unified framework combining MCP (tool connectivity), Agent Skills (capability declarations), and Plugins (runtime extensions). This is AWS's answer to OpenClaw's SOUL.md + Agent Skills ecosystem. It is also the first time a hyperscaler has bundled all three agent protocol layers into a single developer framework. The implication: enterprise developers building on AWS now have a one-stop agent development platform. What they do not have is a portable workflow definition format. Step Functions JSON is proprietary. Bedrock Flows is proprietary. The Agent Toolkit has no workflow definition standard. This is the seat OSOP must claim.

**OpenClaw SOUL.md pattern clarified — 162 production templates in Markdown.**
The `awesome-openclaw-agents` repository has 162 production-ready AI agent templates in SOUL.md format — a Markdown-based workflow definition that describes agent behavior in human-readable prose. OpenClaw's April 2026 update introduced Task Brain (SQLite-backed task ledger, described as "Kubernetes for agent tasks") and broke the previous `nodes.run` architecture. The SOUL.md format is deliberately human-readable: non-developers can read and modify agent behavior in plain English. OSOP's YAML is deliberately machine-readable: validators, exporters, and runtime engines can parse and execute it. These are not competing formats — they serve different layers of the same system, just as README serves humans and `package.json` serves machines. The non-invasive PR target for OpenClaw is not a standalone OSOP example — it is a `.osop.yaml` companion to an existing SOUL.md skill, demonstrating that OSOP is the machine-readable counterpart to SOUL.md's human-readable definition.

**Google ADK 1.0 confirmed GA (announced May 4).**
Google ADK 1.0 went GA this week, with native A2A protocol support as a first-class feature. ADK is the first major agent development framework to ship A2A as a core primitive — not an add-on. An ADK agent publishes an Agent Card automatically; the A2A protocol handles task delegation and capability discovery. This has a direct blocking effect on OSP-0004: if OSOP cannot express an A2A-native agent node, then every ADK user who adopts OSOP will immediately hit a spec gap when they try to define an A2A workflow. OSP-0004 must be published before ADK's GA press cycle fully propagates and before ADK-native workflow patterns become the de-facto A2A development vocabulary.

**GitHub Agentic Workflows in technical preview — Markdown-based CI/CD agents.**
GitHub launched Agentic Workflows in technical preview (Feb 2026, now maturing). These let teams write GitHub Actions workflows in plain Markdown instead of YAML. The framing: "AI agents that run within GitHub Actions, write workflows in Markdown instead of complex YAML." This is NOT a competitor to OSOP — GitHub Agentic Workflows are CI/CD automation (triggered by repo events), not AI agent workflow definitions (describing what an AI agent should do). But they will generate confusion. Developers searching for "AI workflow format" will encounter GitHub Agentic Workflows and may mistakenly believe GitHub has solved the workflow definition problem. A positioning note in the Arazzo comparison doc — expanded to a three-way comparison: Arazzo (API workflows), GitHub Agentic Workflows (CI/CD automation), OSOP (AI agent workflow definition and audit) — defuses this before it becomes a blocker.

**Arazzo 1.0.1 stable; MCP spec references Arazzo directly.**
Confirmed from multiple sources: Arazzo 1.0.1 is the current stable release; Redocly, Speakeasy, APIDog, Specmatic, and Bruno all have Arazzo support in 2026; and the MCP spec itself references Arazzo as the way to describe multi-step workflows that MCP servers expose. This last point is significant: a developer reading the MCP documentation today will encounter Arazzo before they encounter OSOP. The Arazzo comparison doc is no longer a medium-priority defensive artifact — it is the artifact that intercepts MCP-first developers before they settle on Arazzo and conclude the problem is solved.

### Continuing Signals (from 2026-05-09, unchanged)

- MCP 2026 Roadmap names audit trails as the #1 enterprise gap in production MCP deployments.
- AWS MCP Server GA uses the word "auditable" — still in its news cycle peak.
- A2A at 150+ production orgs, 22K+ GitHub stars, 5-language SDK ecosystem, native in Azure AI Foundry and Amazon Bedrock AgentCore.
- OTel GenAI Semantic Conventions reached stable in early 2026 — zero migration barriers between `.osoplog` fields and OTel spans.
- AG2 ships native OTel tracing in February 2026 — native bridge opportunity to OSOP's workflow layer.
- LangGraph accounts for 34% of enterprise agent-framework citations (Gartner Q1 2026).
- AAIF at 170+ member organizations; founding project inclusion window is narrowing.
- Agent Skills at 4-tool adoption (OpenClaw, Codex CLI, Cursor, Gemini CLI).

---

## Threats

1. **AWS verticalizing MCP creates platform-specific workflow formats before OSOP is visible.**
   AWS SAP MCP + Agent Toolkit = a company that is actively building the enterprise agent development stack. Each vertical MCP server AWS launches will come with proprietary workflow patterns (Step Functions, Bedrock Flows, Agent Toolkit configs). If OSOP is not present in these workflows as the definition layer, platform-specific formats will harden before OSOP has any presence. The window to be the portable standard is the period before platform lock-in sets in — likely 6–12 months.

2. **Google ADK 1.0 GA is defining A2A workflow vocabulary right now.**
   ADK is generating blog posts, tutorials, and conference talks about A2A workflows. Each of those artifacts uses ADK's vocabulary (Agent Cards, task delegation, capability discovery) without an OSOP equivalent. By the time OSP-0004 ships, the A2A workflow vocabulary may already be ADK-native and OSOP will need to translate into it rather than defining it.

3. **MCP spec references Arazzo — creating an Arazzo-first developer cohort.**
   Every developer who reads MCP documentation today encounters Arazzo before OSOP. If they adopt Arazzo for their MCP workflow documentation, the subsequent "why not OSOP?" question is answered by "we already use Arazzo" — a much harder objection to address than "we haven't decided yet."

4. **GitHub Agentic Workflows generates search confusion.**
   GitHub's brand power means "GitHub AI workflow" will dominate search results for the developer audience. Developers may conclude that GitHub Agentic Workflows solve the AI workflow definition problem and stop searching. OSOP's answer requires a clear three-way differentiation (CI/CD automation vs. API workflow vs. AI agent workflow definition + audit) that does not yet exist in any published OSOP document.

5. **The SOUL.md community is growing without OSOP.**
   162 production templates in `awesome-openclaw-agents` represent a growing library of AI agent workflow definitions — all in Markdown, none in a machine-readable standard. This is a community that will either converge on OSOP or invent their own machine-readable format. The PR opportunity is open now; it will close when the community standardizes on something else.

6. **Day 30 closed at zero; Day 60 targets become structurally harder each day.**
   The Day 60 targets (200 stars, 10 external PRs, AAIF in review) all depend on Day 30 actions shipping first. Each day of delay compresses the Day 30→60 window and reduces the probability of meeting Day 60 targets. This is a compounding execution risk, not a strategic risk.

---

## Opportunities

### Immediate (this week)

**1. OpenClaw PR — SOUL.md companion pattern** *(45 minutes; 30 days overdue; best PR framing yet)*

New angle that is better than a standalone example: instead of adding `examples/dev-automation-workflow.osop.yaml` as a new standalone file, add `.osop.yaml` as a companion to an existing SOUL.md skill in the main OpenClaw repo. The `awesome-openclaw-agents` repo has 162 SOUL.md templates — pick the most popular one (likely a dev-automation or code-review skill) and add `companion.osop.yaml` alongside `SOUL.md`.

PR title: `"Add machine-readable OSOP companion for [skill-name] skill"`

PR body (no pitch, just value): "Adds a companion `.osop.yaml` to the [skill-name] SOUL.md skill. SOUL.md defines the agent's behavior for humans; the `.osop.yaml` provides a machine-readable workflow definition for validation, export, and audit tooling. The companion file is optional — the skill works exactly as before without it."

This framing:
- Is non-invasive: zero behavioral changes
- Demonstrates the SOUL.md → OSOP complementarity pattern
- Positions OSOP as the machine-readable counterpart to SOUL.md, not a replacement
- Makes the PR immediately useful to anyone who wants workflow validation or export
- Seeds the pattern for 162 other SOUL.md templates

**2. AWS Agent Toolkit OSOP example** *(60 minutes; new; capitalizes on this week's news)*

The AWS Agent Toolkit GA is this week's news peak. A blog-ready OSOP workflow example for an AWS Agent Toolkit workflow — before any other workflow standard publishes one — captures a dominant search position and establishes OSOP as the portable definition format for AWS agent workflows.

Suggested example: `aws-agent-toolkit-sap-data-pull.osop.yaml` — a three-node workflow: (1) `api` node pulls SAP data via the SAP MCP Server, (2) `agent` node analyzes the data (Bedrock-hosted Claude), (3) `human` node routes the analysis result for approval. This directly demonstrates OSOP working with AWS's two newest GA announcements (MCP Server + SAP MCP Server in Bedrock).

Publish in `osop-examples/` and then write a dev.to post titled "How to Define an AWS Bedrock Agent Workflow in OSOP (Portable, Auditable, Framework-Agnostic)." This post enters the same news cycle as the AWS MCP Server GA coverage.

**3. Arazzo vs. OSOP vs. GitHub Agentic Workflows — three-way comparison doc** *(90 minutes; extended from Arazzo-only)*

Previously scoped as an Arazzo-only comparison. Expand to a three-way: Arazzo (multi-step API workflow documentation), GitHub Agentic Workflows (CI/CD automation with AI agents), OSOP (AI agent workflow definition + portable execution audit). The addition of GitHub Agentic Workflows is important because GitHub's brand power will generate search traffic that could otherwise reach OSOP.

File: `docs/comparisons/workflow-formats-compared.md`
Post to: dev.to, Hacker News, OpenAPI Initiative community
Link from: Arazzo GitHub Discussions thread

**4. AAIF submission** *(2 hours; 30 days overdue; new hook available)*

Add the AWS verticalization signal as the third enterprise hook alongside the MCP audit trail gap and the OTel complementarity frame:

1. **MCP 2026 Roadmap**: audit trails named as #1 enterprise gap → OSOP fills it
2. **AWS MCP GA + SAP MCP GA**: "auditable" is AWS's word → OSOP is the audit format
3. **AWS Agent Toolkit + Bedrock**: enterprise agent workflows are forming vertical patterns; no portable workflow definition standard exists → OSOP claims the unoccupied seat

The AAIF stack argument:
- MCP → tool connectivity → AAIF ✅
- A2A → agent routing → AAIF ✅
- OTel → span-level observability → CNCF ✅
- **OSOP → workflow definition + execution audit → AAIF seat vacant**

### This Week (by Friday May 15)

- **OSP-0004: A2A agent subtype** — Google ADK 1.0 GA adds urgency. Include an ADK-native example alongside the Azure AI Foundry and Bedrock examples from last week.
- **`osoplog-otel-mapping.md`** — `docs/integrations/osoplog-otel-mapping.md`. OTel GenAI stable. No moving targets. Write the field mapping table. Prerequisite for the OTel blog post, the AG2 PR, and the Red Hat Developer pitch.
- **AG2 examples PR** — Add `.osop` companion to `research_and_summarize.py`. After `osoplog-otel-mapping.md` is written (the PR references it).
- **LangGraph bridge doc** — `docs/integrations/osop-langgraph-bridge.md`. Maps OSOP vocabulary to LangGraph vocabulary. 34% of enterprise citations.

### Medium-Term

- **`osop export-agent-card`** — Generates A2A Agent Card JSON from `.osop` agent nodes. Prerequisite for OSP-0004 to have a tooling story. Implement after OSP-0004 spec is published.
- **`osop log-export --format otel-json`** — After `osoplog-otel-mapping.md` is published. OTel GenAI stable means the target is locked. No implementation risk.
- **AWS Bedrock OSOP export command** — `osop export-bedrock` — converts `.osop` to Bedrock Flows JSON. Targets the AWS Agent Toolkit + Bedrock vertical.
- **JetBrains plugin** — Port `osop-vscode`. 10M+ developer audience. Medium priority.
- **OSOP Playground (browser)** — Zero-install first experience. Arazzo has one via Redocly. OSOP needs one.

---

## Evolution Ideas

### Spec Improvements

**`runtime.soul_ref` — link agent nodes to SOUL.md skill definitions** *(new; triggered by OpenClaw SOUL.md pattern)*

OSP-0006 already proposes `skill_ref` for Agent Skills manifests. Expand to include SOUL.md as a first-class `skill_ref` target:

```yaml
- id: code-review-agent
  type: agent
  name: Code Review Specialist
  runtime:
    provider: anthropic
    model: claude-sonnet-4-20250514
    skill_ref:
      format: soul_md         # or agent_skills
      path: ./SOUL.md         # or URL
      skill_id: code-review   # optional section within the SOUL.md
```

This is the machine-readable bridge to the OpenClaw ecosystem. SOUL.md defines behavior for humans; `skill_ref` links OSOP's machine-readable workflow to that definition. Strengthens OSP-0006 and makes the OpenClaw PR even more compelling.

**`runtime.aws_toolkit` on agent nodes** *(new; triggered by AWS Agent Toolkit GA)*

Add `aws_toolkit` as an agent runtime binding alongside `anthropic`, `openai`, `google`, `ag2`:

```yaml
- id: sap-analysis-agent
  type: agent
  name: SAP Data Analyst
  runtime:
    provider: aws_toolkit
    model: bedrock:anthropic.claude-sonnet-4-20250514
    bedrock_region: us-east-1
    mcp_servers:
      - arn: "arn:aws:bedrock:us-east-1::mcp-server/aws-sap"
```

This ties OSOP directly to the AWS Agent Toolkit vocabulary and makes OSOP the natural workflow definition format for Bedrock-hosted agents.

**`state_schema:` at workflow level** *(new; triggered by LangGraph 34% enterprise share)*

LangGraph's core primitive is typed state dictionaries passed between nodes. OSOP currently has no equivalent — inputs and outputs are declared per-node but there is no workflow-level state schema. Adding `state_schema:` to the workflow root allows OSOP to express LangGraph-style stateful workflows precisely:

```yaml
osop_version: "1.0"
id: customer-support-triage
name: Customer Support Triage
state_schema:
  ticket_id: string
  severity: enum[low, medium, high, critical]
  resolution_status: enum[open, in_progress, resolved, escalated]
  assigned_to: string?
nodes: [...]
```

This is the single spec change most likely to lower friction for LangGraph developers evaluating OSOP. It speaks their vocabulary without requiring them to change their architecture.

**`max_cost_usd:` on workflow and agent nodes** *(new; enterprise cost governance)*

Enterprise teams running LLM agents at scale need cost controls at the workflow level. AWS Bedrock charges per-token; a runaway agent loop can generate unexpected bills. Adding `max_cost_usd:` as a constraint field:

```yaml
osop_version: "1.0"
id: bulk-document-analysis
max_cost_usd: 10.00           # workflow-level budget cap
nodes:
  - id: analyze-docs
    type: agent
    max_cost_usd: 2.00        # per-node budget cap
    runtime:
      provider: aws_toolkit
      model: bedrock:anthropic.claude-sonnet-4-20250514
```

This is a pure enterprise governance feature. It does not change execution semantics (the runtime enforces it, not OSOP) but it makes cost governance a first-class concern in the workflow definition, directly addressing the enterprise compliance audience targeted by the AAIF submission.

**OSP-0004: A2A agent subtype — new examples scope** *(30 days overdue; ADK 1.0 GA adds urgency)*

The OSP-0004 draft should now include three platform-specific A2A examples:
1. Google ADK 1.0 — `provider: adk`, Agent Card auto-publication, A2A task delegation
2. Azure AI Foundry — `provider: azure_ai_foundry`, MAF 1.0 integration
3. Amazon Bedrock AgentCore — `provider: aws_toolkit`, Bedrock A2A routing

All three hyperscalers have A2A in production. OSP-0004 must cover all three or it will be perceived as incomplete by any enterprise team evaluating the spec.

### Tooling Gaps

| Tool | Priority | New Trigger | Status |
|------|----------|-------------|--------|
| `osop validate --log` | 🔴 Critical | OSP-0007; `.osoplog` first-class | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable; Datadog native | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS MCP GA "auditable" hook | Not built |
| `osop export-agent-card` | 🔴 Critical | ADK 1.0 GA; A2A 5 SDKs; OSP-0004 | Not built |
| `osop export-bedrock` | 🔴 Critical | SAP MCP GA + Agent Toolkit GA | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native | Not built |
| `osop export-aws-agent-toolkit` | 🟠 High | **New** — AWS Agent Toolkit GA | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF | Not built |
| `osop import-sop` | 🟠 High | Strands + GitHub markdown → OSOP | Not built |
| `osop import-soul-md` | 🟡 Medium | **New** — OpenClaw 162 templates | Not built |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo adoption | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |

### Ecosystem Plays

| Target | Action | Effort | Rationale |
|--------|--------|--------|----------|
| **OpenClaw** | SOUL.md companion PR (new framing) | 45 min | 247K+ stars; SOUL.md pattern clarified; 30 days overdue |
| **AAIF** | Submit via LFX | 2 hrs | 30 days overdue; AWS verticalization = new enterprise hook |
| **AG2 (AutoGen)** | PR: `.osop` companion to `research_and_summarize.py` | 45 min | OTel native; OSOP = workflow definition above AG2 spans |
| **AWS community** | Blog: OSOP for AWS Agent Toolkit workflows | 60 min write | SAP MCP GA + Agent Toolkit GA news cycle peak |
| **LangGraph community** | Bridge doc + Forum post | 60 min | 34% enterprise architecture citations |
| **Temporal community** | Forum post + `temporal-durable-workflow.osop.yaml` | 45 min | Production agent developer concentration |
| **Red Hat Developer** | Blog pitch: OTel vs OSOP observability layers | 30 min pitch | Triple Red Hat signal; compliance audience |
| **Arazzo GitHub Discussions** | Post three-way comparison doc | 15 min (after doc) | MCP spec reference = Arazzo-first developers incoming |
| **Adobe Workfront** | `workfront-approval-workflow.osop.yaml` | 60 min | Workfront MCP launches June 2026; publish now |
| **Anthropic Discord** | OSOP + AWS Agent Toolkit + OTel demo | 45 min | AWS + Claude = enterprise agent deployment stack |
| **NIST CAISI** | 2-page comment submission | 90 min | Window closing; "execution audit" in NIST vocabulary |
| **Google ADK community** | OSP-0004 announcement + ADK bridge doc | 60 min | ADK 1.0 GA; OSOP must speak A2A or ADK users hit spec gap |

---

## Top 3 Actions for This Week

### 1. OpenClaw PR — SOUL.md companion pattern *(45 min; 30 days overdue)*

**Why today:** The SOUL.md companion pattern is the best framing for this PR yet identified. It positions OSOP correctly (machine-readable complement, not replacement), it seeds a pattern replicable across 162 templates, and it is the most likely PR to be accepted without controversy because it adds zero behavioral changes. This is a 45-minute task with no external dependencies. There is no better day than today.

**Specific steps:**
1. Fork `openclaw/openclaw` (or `mergisi/awesome-openclaw-agents`)
2. Pick the most-starred or most-referenced existing SOUL.md skill (likely a dev automation or code-review skill)
3. Create `[skill-directory]/workflow.osop.yaml` — a valid Core-schema OSOP file that represents the same workflow the SOUL.md describes, in machine-readable form
4. Create `[skill-directory]/OSOP.md` — one paragraph: "This skill includes a machine-readable OSOP workflow companion. SOUL.md defines behavior for humans; `workflow.osop.yaml` provides a portable, validatable workflow definition for tooling. Validate with: `osop validate workflow.osop.yaml`"
5. Submit PR: `"Add machine-readable OSOP workflow companion for [skill-name]"`

### 2. AAIF Submission *(2 hrs; 30 days overdue; highest legitimacy multiplier)*

**Why this week:** AWS just launched two MCP-adjacent products (MCP Server GA + SAP MCP in Bedrock + Agent Toolkit) in the same week. The enterprise agent platform is forming right now. The AAIF submission that references AWS's "auditable" language and AWS's verticalization of MCP reaches the AAIF committee while the news is fresh. A submission sent in Week 6 references last month's news; a submission sent this week references this week's news.

**New opening paragraph (incorporating AWS verticalization):**
> "In the first week of May 2026, AWS launched three agent infrastructure products: the MCP Server GA (described as providing 'secure, auditable access'), the SAP MCP Server GA in Bedrock AgentCore, and the Agent Toolkit. AWS is verticalizing MCP — packaging AI agent gateways into every major enterprise software vertical. The workflows these agents execute will be defined in some format. Today that format is proprietary (Step Functions JSON, Bedrock Flows). The Agentic AI Foundation's mission is to prevent that outcome. OSOP is the portable workflow definition and execution audit standard that belongs in the AAIF stack alongside MCP (tool connectivity) and A2A (agent routing)."

### 3. Three-way workflow formats comparison doc *(90 min; expands Arazzo-only scope)*

**Why this week:** Two new signals made this doc more urgent than the Arazzo-only version:
1. GitHub Agentic Workflows in technical preview creates search confusion NOW
2. MCP spec references Arazzo — Arazzo-first developer traffic is incoming NOW

The three-way comparison intercepts both. File: `docs/comparisons/workflow-formats-compared.md`. Post to dev.to + Hacker News. Link from Arazzo GitHub Discussions. This is the defensive document that prevents OSOP from losing the "why not Arazzo?" and "why not GitHub Agentic Workflows?" objections before the conversation starts.

**Structure:**
| Dimension | Arazzo | GitHub Agentic Workflows | OSOP |
|-----------|--------|--------------------------|------|
| What it defines | Multi-step API call sequences | CI/CD automation with AI actions | AI agent workflow definition + execution audit |
| Who runs it | API clients | GitHub Actions runners | Any OSOP-compatible runtime |
| Portable execution record | No | No | Yes (`.osoplog`) |
| AI agent-native node types | No (API-only) | Partial (GitHub Actions steps) | Yes (agent, api, cli, human) |
| Compliance/audit use | No | No | Yes (EU AI Act, NIST, SOC 2) |
| Machine-readable + human-readable | API-focused YAML | Markdown | YAML |
| OTel integration | No | No | Yes (`.osoplog` → OTel export) |
| Standards body | OpenAPI Initiative (Linux Foundation) | GitHub (Microsoft) | Submitted to AAIF |

---

## New Strategic Frame: "The SOUL.md Layer Model"

A new analogy that will resonate with the OpenClaw community and positions OSOP correctly from the first encounter:

```
SOUL.md (human layer)    → What the agent IS — persona, values, behaviors, escalation rules
                            Written for: humans (developers, product managers, compliance officers)
                            Format: Markdown
                            Consumed by: OpenClaw runtime, humans reviewing agent behavior

.osop (machine layer)    → What the workflow DOES — steps, edges, inputs, outputs, node types
                            Written for: machines (validators, exporters, audit systems)
                            Format: YAML
                            Consumed by: osop validate, osop export-*, SIEM, compliance tooling
```

The relationship: `SOUL.md` is to `.osop` as `README.md` is to `package.json`. One is for humans. One is for machines. Both describe the same system. Neither replaces the other.

This is the cleanest positioning statement yet for the OpenClaw community. It does not compete with SOUL.md. It complements it. And it immediately answers the "why do I need this?" question for every OpenClaw developer who already has a SOUL.md.

Proposed tweet/post after the PR ships:
> "SOUL.md tells humans what your AI agent does.\n`.osop` tells machines.\nSame agent, both layers. Example PR: [link]"

---

## Adoption Metrics to Track

| Metric | Day 31 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with .osop files | 0 | 20 | 50 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog/content views | 0 | 10k | 50k |
| AAIF submission status | Draft | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| `osop log-export --format otel-json` | Not built | Alpha | Stable |
| `osop log-export --format cloudtrail` | Not built | Alpha | Stable |
| `osop validate --log` | Not built | Alpha | Stable |
| `osoplog-otel-mapping.md` | Not written | Published | Referenced in 3+ tools |
| Three-way comparison doc | Not written | Published | Top search result |
| OpenClaw PR | Not submitted | Merged | SOUL.md pattern adopted |
| AG2 PR | Not submitted | Merged | — |
| AWS Agent Toolkit example | Not written | Published | — |
| LangGraph bridge doc | Not written | Published | — |
| Red Hat Developer blog | Not pitched | Published or in edit | — |

---

*Tomorrow is Monday, May 11 — ROADMAP update day. Today's brief feeds directly into the ROADMAP weekly synthesis.*
*Previous brief: [`2026-05-09-daily-brief.md`](./2026-05-09-daily-brief.md)*
