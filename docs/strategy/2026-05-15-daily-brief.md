# OSOP Daily Strategy Brief — 2026-05-15

> **Day 36. Week 2, Friday. AAIF submission deadline is TODAY.**
> Yesterday, Microsoft shipped Conductor — an MIT-licensed, YAML-based deterministic multi-agent workflow tool. It is the most direct competitor OSOP has faced. The right response is not to pivot; it is to accelerate the three things that Conductor cannot do: execution audit records, EU AI Act compliance mapping, and AAIF governance. The AAIF submission is due today. The three-way comparison doc must add Conductor as column four and ship now. EU AI Act enforcement is 79 days away.

---

## Action Tracker

| Action | Status | Days Pending | Change from May 14 |
|--------|--------|--------------|-----------------|
| **AAIF submission** | ⏳ Pending | **36** | **DUE TODAY. Microsoft Conductor makes governance more urgent, not less. Ship.** |
| **Three-way comparison doc** | ⏳ Pending | **4** | **OVERDUE + Conductor is now column 4. Strongest version yet. Publish today.** |
| **OpenClaw PR (SOUL.md companion)** | ⏳ Pending | **36** | No change. Day 36. 45 minutes. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **36** | No change. A2A v1.0 now has signed Agent Cards + multi-tenancy. |
| OSP-0005: Trust policy | ⏳ Pending | **36** | No change |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **12** | No change |
| `osoplog-otel-mapping.md` | ⏳ Pending | **6** | Prerequisite for AG2 PR, Red Hat pitch, OTel blog |
| AG2 examples PR | ⏳ Pending | **6** | Blocked on `osoplog-otel-mapping.md` |
| AWS Agent Toolkit example | ⏳ Pending | **5** | News cycle fading |
| EU AI Act compliance content piece | ⏳ Pending | **1** | 79 days to enforcement |
| README audit-trail reframe | ⏳ Pending | **8** | Still undeployed |
| AGNTCon / MCPCon CFP | ⏳ Pending | ~17 days to deadline | Deadline closing |
| AI Engineer World's Fair CFP | ⏳ Pending | ~26 days to event | No change |
| OpenAgents integration example | ⏳ Pending | **3** | No change |
| n8n ecosystem play | ⏳ Pending | **3** | No change |
| MCP audit trail content post | ⏳ Pending | **3** | EU AI Act angle |
| LangGraph bridge doc | ⏳ Pending | **6** | No change |
| Red Hat Developer blog pitch | ⏳ Pending | **6** | No change |
| Contact protocol ecosystem map authors | ⏳ Pending | **4** | 15-min task |
| ACP workflow example | ⏳ Pending | **13** | No change |
| Strands migration example | ⏳ Pending | **13** | No change |
| Temporal community post | ⏳ Pending | **10** | Elevated: Temporal Replay 2026 serverless workers |
| NIST CAISI submission | ⏳ Pending | **10** | Check deadline |
| Archon compatibility Discussion | ⏳ Pending | **10** | No change |
| `osop export-cloudflare-workflows` | ⏳ Pending | **1** | No change |
| `osop export-temporal` | ⏳ Pending | **1** | No change |
| OSP-0007 (Compliance Extensions RFC) | ⏳ Pending | **1** | No change |
| **Conductor response strategy** | ⏳ Pending | **New** | **Microsoft shipped yesterday. Four-column comparison doc + differentiation narrative needed.** |
| **AGENTS.md competitive analysis** | ⏳ Pending | **New** | **60K+ repos. Understand positioning vs. `.sop` and OSOP tooling.** |

---

## Intelligence

### New Signals (2026-05-15)

**Microsoft shipped Conductor yesterday (May 14) — MIT-licensed YAML multi-agent workflow tool, direct structural competitor.**
Microsoft published Conductor on its Open Source Blog on May 14, 2026. It is an MIT-licensed CLI tool (under the `microsoft/conductor` GitHub org) that defines multi-agent AI workflows as YAML files declaring agents, their prompts, models, inputs, outputs, and routing logic. Key features: version-controlled diffable YAML workflows, deterministic routing graph visualized before execution, MCP server integration for tool access, shell command steps, and a built-in real-time web dashboard. It works with the GitHub Copilot SDK and the Anthropic Agents SDK. This is the most direct structural overlap with OSOP's `.osop` format that has ever shipped. It is also from Microsoft — which has the distribution, developer community, and documentation bandwidth to capture the "YAML workflow definition for agents" namespace before OSOP does.

Critical differentiation: Conductor is a workflow runner with a YAML definition format. OSOP is a workflow definition standard plus an execution audit format (`.osoplog`) plus a SOP document layer (`.sop`) plus conformance levels plus EU AI Act compliance mapping plus OTel observability plus AAIF governance. Conductor gives you a YAML to execute. OSOP gives you a YAML to execute AND a log format that satisfies your EU AI Act auditor. This distinction must be made explicit in every piece of content published this week.

The correct strategic response:
1. Do NOT pivot. OSOP's moats (`.osoplog`, compliance, governance) are exactly what Conductor lacks.
2. Add Conductor as column 4 in the comparison doc — today.
3. Ship the AAIF submission — the governance dimension is now the clearest differentiator from a Microsoft-proprietary format.
4. Publish OSP-0007 (Compliance Extensions RFC) before Conductor's ecosystem adds a log format.

**AAIF has grown to 170+ member organizations — 20 more than the 150+ cited in yesterday's brief.**
New search data confirms 170+ AAIF members including Microsoft, Google, AWS, Bloomberg, and Cloudflare as top-tier. This is accelerating. Every week the AAIF member list grows, OSOP's "founding project" framing weakens and the barrier to standing out in the governance application increases. The submission is due today. It ships today.

**AGENTS.md has been adopted by 60,000+ open-source repositories since August 2025.**
AGENTS.md is a lightweight Markdown file (lives alongside README.md) giving AI coding agents project-specific operational guidance. Adopted by Amp, Codex, Cursor, Devin, Factory, Gemini CLI, GitHub Copilot, Jules, and VS Code. 60,000+ repos in ~9 months. This is an adjacent market: AGENTS.md tells agents how to behave in a repo; OSOP tells agents what workflow to execute. They are complementary, not competing. Opportunity: OSOP's `.sop` format can reference AGENTS.md as the behavioral layer, while `.osop` defines the workflow layer. A joint explainer ("AGENTS.md + OSOP: the agent configuration stack for your repo") would reach the 60K+ repo audience with a natural hook.

**Arazzo ecosystem maturing — Redocly, Speakeasy, APIDog, Specmatic, Bruno all shipping support in 2026.**
Arazzo 1.0.1 is now getting multi-tool support. The "Arazzo = missing piece" narrative is spreading through developer content. The three-way (now four-way) comparison doc — Arazzo, GitHub Agentic Workflows, Microsoft Conductor, OSOP — is the interception. The longer this doc goes unpublished, the more the Arazzo-as-workflow-standard narrative sets without OSOP in it.

**A2A v1.0 now has signed Agent Cards and multi-tenancy support.**
A2A's v1.0 release introduced signed Agent Cards (cryptographic agent identity) and multi-tenancy. OSP-0004's `osop export-agent-card` command is now more critical than before — the Agent Card has a specific signed format, and OSOP's export needs to target that format precisely. 36 days overdue.

**The 2026 agentic AI protocol stack is described as MCP + A2A + AG-UI — OSOP remains absent from all canonical descriptions.**
Every major protocol comparison guide published in May 2026 describes the stack as MCP (tools) + A2A (routing) + AG-UI (UI streaming) + OTel (observability). OSOP is not in any of them. The AAIF submission is the gate to map inclusion. Contacting digitalapplied.com and other protocol map authors is a 15-minute task that yields permanent discoverability.

### Continuing Signals (from 2026-05-14)

- EU AI Act full enforcement: **79 days** (August 2, 2026). `.osoplog` satisfies Article 12 field-for-field.
- Cloudflare Dynamic Workflows: MIT-licensed, 50K concurrent instances, Agents Week 2026 launch.
- Temporal Replay 2026: serverless workers for AI agents; OpenAI Codex uses Temporal in production.
- n8n: 150K+ stars, AI agent nodes expanding, no portable export format.
- MCP 2026 roadmap names audit trails as #1 enterprise gap.
- OpenAgents: only MCP+A2A native framework; zero OSOP examples.
- 78% of enterprise AI teams have MCP-backed agents in production.

---

## Threats

1. **Microsoft Conductor — the most dangerous competitor OSOP has ever faced.** It is MIT-licensed, from Microsoft, works with Anthropic's own SDK, and targets the exact same "YAML workflow definition for AI agents" market. It does not have `.osoplog`, compliance mapping, or governance, but it has Microsoft's distribution, documentation budget, and developer community. If OSOP does not publish differentiation content this week, the narrative space will be occupied by Conductor tutorials.

2. **AAIF submission not sent.** Day 36. Microsoft Conductor being Microsoft-proprietary while OSOP is AAIF-governed is the cleanest differentiator available. Every day the submission is not filed, that differentiator is unavailable. Today is the self-imposed deadline. It ships today.

3. **Four-column comparison doc still unpublished — now 4 days overdue.** The three-way Arazzo comparison just became a four-way comparison that explicitly wins on governance and audit trail. This is the strongest piece of content OSOP has ever had the opportunity to publish. Every hour it is not live, Conductor and Arazzo tutorials are setting the vocabulary.

4. **AGENTS.md capturing the repo-level agent configuration namespace.** 60K repos in 9 months is extraordinary adoption velocity. If OSOP doesn't publish a "AGENTS.md + OSOP" joint framing quickly, OSOP will appear redundant to developers who see AGENTS.md as "the workflow standard."

5. **OSP-0004 at 36 days overdue while A2A v1.0 adds signed Agent Cards.** The Agent Card format has now changed (signed, multi-tenancy). The `osop export-agent-card` command needs to target the v1.0 signed format specifically.

6. **Day 60 (Jun 8) targets at 23 days out with 0 stars, 0 external PRs, 0 published content.** The structural gap between targets and actuals is unchanged. Today is the pivot day.

---

## Opportunities

### Immediate (today, Friday May 15)

**1. AAIF submission — DUE TODAY (45 min)**

Updated opening paragraph with Conductor response built in:

> "The 2026 agentic AI protocol stack has three confirmed AAIF-governed layers: MCP (tool connectivity) and A2A (agent routing), both under Linux Foundation governance. Yesterday, Microsoft shipped Conductor — an MIT-licensed YAML workflow tool for multi-agent systems — which confirms that the workflow definition layer is a recognized problem worth building for, but it is being filled by a proprietary Microsoft tool rather than an open, governed standard. The EU AI Act reaches full enforcement for High-Risk AI systems in 79 days (August 2, 2026), with explicit Article 12 requirements for timestamped execution logs that Conductor does not define and that OSOP's `.osoplog` format satisfies field-for-field. The MCP 2026 roadmap names audit trails as the #1 enterprise deployment gap. A fourth layer — open workflow definition and portable execution audit — has no AAIF-governed standard and no governance home. OSOP fills this layer. We are applying for AAIF founding project status."

Steps:
1. Open LFX portal or email AAIF contact.
2. Use the opening paragraph above verbatim.
3. Attach: `docs/SPEC.md`, `schema/osop.schema.json`, `docs/eu-ai-act-compliance.md`, `docs/conformance-levels.md`.
4. Submit.

**2. Four-way comparison doc — publish today (90 min, 4 days overdue)**

Add Conductor as column 4. This is the column that proves OSOP wins on governance and audit:

| Dimension | Arazzo | GitHub Agentic Workflows | Microsoft Conductor | OSOP |
|-----------|--------|--------------------------|---------------------|------|
| What it defines | Multi-step API call sequences | CI/CD automation with AI actions | Deterministic YAML multi-agent workflows | AI agent workflow definition + execution audit |
| Portable execution log | ❌ | ❌ | ❌ | ✅ `.osoplog` |
| AI agent-native node types | ❌ | Partial | Agent-focused | ✅ 12 types (agent, api, cli, human + 8 extended) |
| Human-in-the-loop | ❌ | ❌ | Partial | ✅ native `human` node |
| EU AI Act Article 12 compliance | ❌ | ❌ | ❌ | ✅ `.osoplog` maps to all required fields |
| OTel export | ❌ | ❌ | ❌ | ✅ `.osoplog` → OTel spans |
| Workflow synthesizes from run history | ❌ | ❌ | ❌ | ✅ `osop synthesize` |
| Open standards body | OpenAPI Initiative / Linux Foundation | GitHub (Microsoft) | Microsoft (MIT, no governance) | Submitted to AAIF |
| Dashboard / visualization | ❌ | ✅ (GitHub Actions) | ✅ built-in web dashboard | ✅ VS Code extension |

Publish as `docs/comparisons/workflow-formats-compared.md`. Cross-post to dev.to. Submit to Hacker News. Drop in Arazzo GitHub Discussions AND the Microsoft Conductor GitHub Discussions.

**3. Conductor positioning comment in microsoft/conductor GitHub Discussions (30 min)**

Post a friendly, additive comment in the Conductor GitHub Discussions (or a "Show HN" thread if one exists): "Conductor solves the execution definition beautifully. If you need a portable execution log for audit and compliance alongside it, here's a format being proposed for AAIF governance that Conductor could optionally emit: [link to `.osoplog` schema]." This is non-invasive, additive, and plants OSOP's flag in the Conductor community on day 1 — before the Conductor tutorial canon forms.

### This weekend (May 15–17)

**4. EU AI Act compliance content piece (60 min)**
"79 days to EU AI Act full enforcement. What your AI agents must log — and the open format that covers it today."
- Open with August 2 deadline and €35M fine scale.
- Show Article 12 requirements verbatim.
- Show `.osoplog` field-for-field mapping.
- Include a 10-line `.osoplog` YAML example.
- Add: "Conductor, LangGraph, CrewAI — none of these define an execution log format. `.osoplog` does."
- Close with the spec link.

**5. AGENTS.md + OSOP joint framing (45 min)**
Title: "AGENTS.md tells your agent how to behave. OSOP tells it what to do. Here's how they compose."
Target audience: the 60,000+ repos that already have AGENTS.md. This reaches the largest installed base of any adjacent standard. Publish to dev.to + the AGENTS.md GitHub Discussions.

**6. OpenClaw PR (45 min, Day 36 overdue)**
Fork `openclaw/openclaw`. Pick the most-starred SOUL.md skill. Add `workflow.osop.yaml` + brief `OSOP.md`. Submit PR. No new framing needed.

### Next week (May 18–22)

- OSP-0004: A2A agent subtype with signed Agent Card export targeting A2A v1.0 format
- OSP-0007: Compliance Extensions RFC (EU AI Act `retention_policy:` + `compliance_scope:`)
- `osoplog-otel-mapping.md` — prerequisite for AG2 PR, Red Hat pitch, OTel blog
- Temporal community post
- VoltAgent integration example
- OpenAgents integration example
- Contact protocol ecosystem map authors (digitalapplied.com)

---

## Evolution Ideas

### Spec Improvements

**Conductor response: `runtime.conductor` binding and `osop import-conductor` tool**

The fastest way to turn a threat into a funnel: allow Conductor YAML files to be imported into OSOP. Conductor workflows are a strict subset of what OSOP describes. A developer who starts with Conductor can import their workflow into OSOP to get the audit trail and compliance layer on top. This makes OSOP additive to Conductor rather than competing with it.

```bash
osop import-conductor my-workflow.yaml -o my-workflow.osop.yaml
```

Conversely, `osop export-conductor` lets OSOP users run their workflows in Conductor. This bidirectional bridge is the non-invasive play that makes OSOP a Conductor complement rather than a competitor.

**`runtime.conductor` on agent nodes:**
```yaml
- id: "research-agent"
  type: "agent"
  name: "Research Agent"
  runtime:
    provider: "conductor"
    workflow_file: "./research.yaml"    # existing Conductor YAML
    inputs:
      query: "${inputs.query}"
```

This lets OSOP describe the overall system while Conductor handles execution of individual agent steps. Complementary positioning.

**AGENTS.md interop: `agents_md_ref:` field at workflow level**

Since AGENTS.md is in 60K repos and OSOP wants to be in repos, add an optional field that links a workflow to the repo's AGENTS.md:

```yaml
osop_version: "1.0"
id: "code-review"
agents_md_ref: "./.github/AGENTS.md"    # optional; agent behavioral context
nodes:
  - id: "review"
    type: "agent"
    ...
```

This makes OSOP visible to developers who are already thinking about agent configuration files. It's a zero-cost hook into the largest installed base in the adjacent ecosystem.

**OSP-0007: Compliance Extensions RFC — draft this week**

79 days to EU AI Act enforcement. Bundle `retention_policy:` and `compliance_scope:` into a single RFC. Conductor's lack of a compliance layer is the clearest differentiator available. Publishing the RFC before Conductor's community adds one claims the namespace.

```yaml
# `.osoplog` compliance block
retention_policy:
  min_retention_days: 180     # EU AI Act minimum
  regulation: "eu-ai-act"    # "nist-ai-rmf-1.1", "soc2", "hipaa"
  delete_after_days: 365
  immutable: true

# `.osop` compliance classification
compliance_scope:
  eu_ai_act:
    risk_tier: "high"
    use_case_category: "employment"   # Annex III
  nist_ai_rmf:
    function: "govern"
```

**A2A v1.0 signed Agent Cards in OSP-0004**

A2A v1.0 introduced cryptographically signed Agent Cards. The `osop export-agent-card` command must produce a v1.0-compliant signed card. Update the OSP-0004 draft to include the signing mechanism (likely JWS with the agent's private key). The signed card should reference the `.osop` workflow file as the agent's operational specification.

### Tooling Gaps (updated)

| Tool | Priority | Trigger | Status |
|------|----------|---------|--------|
| `osop validate --log` | 🔴 Critical | `.osoplog` first-class validation | Not built |
| `osop import-conductor` | 🔴 Critical | **New — Microsoft Conductor shipped May 14** | Not built |
| `osop export-conductor` | 🔴 Critical | **New — bidirectional bridge play** | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable; Datadog native | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS MCP GA "auditable" language | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A v1.0 signed cards; OSP-0004 | Not built |
| `osop export-bedrock` | 🔴 Critical | SAP MCP + Agent Toolkit GA | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 79-day enforcement countdown | Not built |
| `osop export-cloudflare-workflows` | 🔴 Critical | Cloudflare Agents Week 2026, MIT, 50K instances | Not built |
| `osop export-temporal` | 🟠 High | Temporal Replay 2026; OpenAI Codex in production | Not built |
| `osop import-n8n` | 🟠 High | 150K+ star n8n ecosystem | Not built |
| `osop protocols` | 🟠 High | `protocol_bindings:` manifest inspector | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo adoption | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |

### Ecosystem Plays (updated)

| Target | Action | Effort | Rationale |
|--------|--------|--------|----------|
| **AAIF** | Submit — DUE TODAY | 45 min | Governance is now the differentiator from Conductor |
| **dev.to + Hacker News** | Four-way comparison doc | 90 min | **OVERDUE — Conductor is column 4; publish today** |
| **microsoft/conductor GitHub** | Additive Discussions comment | 30 min | **New — plant flag on day 1 before tutorial canon forms** |
| **dev.to + EU AI Act communities** | EU AI Act compliance content piece | 60 min | 79-day countdown; enterprise reach |
| **AGENTS.md community** | "AGENTS.md + OSOP" joint framing | 45 min | 60K-repo installed base |
| **OpenClaw** | SOUL.md companion PR | 45 min | Day 36 overdue |
| **Cloudflare community** | Agents Week post + example | 30 min | Momentum live now |
| **Temporal community** | Replay 2026 hook post | 30 min | Serverless workers for agents; OpenAI Codex |
| **OpenAgents** | `.osop` example + Discussion post | 60 min | Only MCP+A2A native framework |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | 150K+ stars |
| **MCP GitHub Discussions** | "`.osoplog` fills MCP's audit trail gap" | 45 min | MCP roadmap names the gap |
| **Protocol ecosystem map authors** | Contact digitalapplied.com | 15 min | 15-min task; permanent discoverability |
| **Arazzo GitHub Discussions** | Four-way comparison doc link | 15 min | Active narrative |
| **VoltAgent** | `.osop` example + PR | 60 min | Community forming |
| **AG2 (AutoGen)** | `.osop` companion examples | 45 min | After `osoplog-otel-mapping.md` |
| **LangGraph community** | Bridge doc: "OAP runtime, OSOP definition" | 60 min | 34% enterprise citations |
| **Red Hat Developer** | Blog pitch: MCP audit trails + `.osoplog` | 30 min | RHEL MCP server dev preview hook |
| **Cloudflare Developer Blog** | Pitch: `.osop` + Dynamic Workflows | 45 min | Agents Week 2026 momentum |
| **Adobe Workfront** | `workfront-approval-workflow.osop.yaml` | 60 min | Workfront MCP launches June 2026 |
| **NIST CAISI** | 2-page comment: "execution audit" framing | 90 min | Window closing |
| **Google ADK community** | OSP-0004 + ADK bridge doc | 60 min | A2A vocabulary forming now |

---

## Top 3 Actions for This Week (updated)

### 1. AAIF submission — DUE TODAY *(45 min)*

Microsoft Conductor being MIT-licensed but Microsoft-proprietary while OSOP is submitted to AAIF governance is now the single clearest differentiator available. An enterprise team choosing a workflow format today will ask: "Will this standard outlive one company's priorities?" The AAIF submission is the answer. Ship today using the opening paragraph in the Opportunities section.

### 2. Four-way comparison doc — publish today *(90 min, 4 days overdue)*

Arazzo + GitHub Agentic Workflows + Microsoft Conductor + OSOP. The Conductor column makes this the most compelling comparison OSOP has ever had to offer. The EU AI Act compliance row is the one no other format can match. Publish as `docs/comparisons/workflow-formats-compared.md`. Cross-post to dev.to, submit to Hacker News as "Show HN: I compared four YAML workflow standards for AI agents." Drop links in Arazzo GitHub Discussions and microsoft/conductor GitHub Discussions.

### 3. Conductor community engagement — post additive comment in microsoft/conductor *(30 min)*

The Conductor GitHub is brand new (published May 14). The community is not yet formed. A friendly, additive comment in GitHub Discussions on day 1 — suggesting `.osoplog` as a complementary audit format — reaches the Conductor community before the tutorial canon hardens. Frame: "Love the deterministic approach. For teams that need an execution audit trail alongside this — especially with EU AI Act enforcement in 79 days — here's a portable log format being submitted to AAIF governance: [link]."

---

## Positioning Stack (updated)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 97M monthly SDK downloads |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 170+ orgs, v1.0 signed Agent Cards |
| UI streaming | AG-UI | Emerging | ✅ Adopted — three-layer stack canonical |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v1.0 GA |
| Agent capabilities | Agent Skills / AGENTS.md | OpenClaw / Open | ✅ AGENTS.md: 60K+ repos |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — MCP spec reference; 5-tool ecosystem |
| YAML multi-agent workflow runner definition | Microsoft Conductor | Microsoft (MIT, no governance) | ⚠️ **New threat — shipped May 14, 2026** |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars; no standard export |
| Durable agent execution | Temporal / Cloudflare Workflows | Temporal (open), Cloudflare (MIT) | ✅ Temporal GA; Cloudflare Agents Week GA |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable |
| Regulatory compliance logging | *(unnamed)* | *(none)* | ⏳ **EU AI Act enforcement 79 days out — `.osoplog` is the only portable format that maps to Article 12** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — TODAY* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Metrics to Track

| Metric | Day 36 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
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
| AAIF submission status | **Submitting today** | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| Four-way comparison doc | **Overdue — publish today** | Indexed + linked | Top 3 search result |
| EU AI Act compliance content | Not written | Published | 500+ shares |
| `osoplog-otel-mapping.md` | Not written | Published | Referenced in 3+ tools |
| OpenClaw PR | Not submitted | Merged | Pattern in 5+ skills |
| Conductor community engagement | **New — today** | Follow-up PR or Discussion | Bidirectional bridge example |
| AGENTS.md + OSOP framing | **New — this weekend** | Published | Linked from AGENTS.md repo |
| OSP-0007 (Compliance Extensions RFC) | Not written | Draft | Published |

---

## Key Links

- Microsoft Conductor (shipped May 14): https://github.com/microsoft/conductor
- Microsoft Conductor announcement: https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows/
- A2A Protocol (v1.0, 170+ orgs): https://github.com/a2aproject/A2A
- AAIF (Agentic AI Foundation): https://openai.com/index/agentic-ai-foundation/
- AGENTS.md: adopted by 60K+ repos across Amp, Codex, Cursor, Devin
- Arazzo 1.0.1: https://spec.openapis.org/arazzo/latest.html
- Cloudflare Dynamic Workflows (Agents Week 2026): MIT-licensed durable execution
- EU AI Act full enforcement: **August 2, 2026 — 79 days**

---

*Previous brief: [`2026-05-14-daily-brief.md`](./2026-05-14-daily-brief.md)*
*Today is Friday — ROADMAP update is Monday May 18.*
*AAIF submission deadline: TODAY.*
