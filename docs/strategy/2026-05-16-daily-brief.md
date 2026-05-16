# OSOP Daily Strategy Brief — 2026-05-16

> **Day 37. Week 2, Saturday.**
> Yesterday's two non-negotiables — AAIF submission and four-way comparison doc — had self-imposed deadlines of May 15. Status is unconfirmed in the repo. This brief treats both as still-pending and maintains maximum urgency. The new signal today is structural: CNCF's Kubernetes AI Conformance Program has added **agentic workflow validation** as a formal requirement, and Oracle's Open Agent Specification has formed a three-party standards coalition with CopilotKit (AG-UI) and Google (A2A). OSOP is absent from both. The CNCF pathway is the highest-leverage new opportunity identified this week — a direct route to institutional adoption via an existing governance body that names the workflow definition gap explicitly.

---

## Action Tracker

| Action | Status | Days Pending | Change from May 15 |
|--------|--------|--------------|--------------------|
| **AAIF submission** | ⏳ Pending | **37** | Was due yesterday. If not sent, send today — AAIF form works on weekends. |
| **Four-way comparison doc** | ⏳ Pending | **5** | Was due yesterday. Write today (Sat). Post Monday morning for HN cycle. |
| **OpenClaw PR (SOUL.md companion)** | ⏳ Pending | **37** | No change. Zero blockers. 45 minutes. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **37** | A2A v1.0 signed cards format confirmed. |
| OSP-0005: Trust policy | ⏳ Pending | **37** | No change. |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **13** | No change. |
| `osoplog-otel-mapping.md` | ⏳ Pending | **7** | Blocks AG2 PR, Red Hat pitch. |
| AG2 examples PR | ⏳ Pending | **7** | Blocked on `osoplog-otel-mapping.md`. |
| EU AI Act compliance content piece | ⏳ Pending | **2** | 77 days to enforcement. Write today. |
| **Conductor community engagement** | ⏳ Pending | **2** | Day 2 post-ship. Window still open. Community not yet formed. |
| **CNCF TAG Runtime outreach** | ⏳ Pending | **New** | **Kubernetes AI Conformance now includes agentic workflow validation. OSOP is the natural fit. Contact today.** |
| **`osop import-agent-spec` proposal** | ⏳ Pending | **New** | Oracle Agent Spec + AG-UI + A2A coalition forming without OSOP. Bridge tool converts their ecosystem into an OSOP funnel. |
| AGENTS.md + OSOP framing | ⏳ Pending | **2** | 60K+ repo audience. Write today alongside EU AI Act piece. |
| AGNTCon / MCPCon CFP | ⏳ Pending | ~16 days to deadline | Closing fast. |
| README audit-trail reframe | ⏳ Pending | **9** | 30-min task. Still undeployed. |
| Contact protocol ecosystem map authors | ⏳ Pending | **5** | 15-min task. Permanent discoverability. |
| LangGraph bridge doc | ⏳ Pending | **7** | No change. |
| Red Hat Developer blog pitch | ⏳ Pending | **7** | No change. |
| VoltAgent integration example | ⏳ Pending | **4** | Community forming. Window shrinking. |
| OpenAgents integration example | ⏳ Pending | **4** | No change. |
| ACP workflow example | ⏳ Pending | **14** | No change. |
| Temporal community post | ⏳ Pending | **11** | No change. |
| AWS Agent Toolkit example | ⏳ Pending | **6** | News cycle fading. |
| n8n ecosystem play | ⏳ Pending | **4** | No change. |
| NIST CAISI submission | ⏳ Pending | **11** | Check deadline. |
| OSP-0007 (Compliance Extensions RFC) | ⏳ Pending | **2** | 77 days to EU AI Act. Write this weekend. |

---

## Intelligence

### New Signals (2026-05-16)

**CNCF Kubernetes AI Conformance Program now includes agentic workflow validation — institutional requirement without a named standard.**
CNCF's newly expanded Kubernetes AI Conformance Program mandates that certified platforms support "complex, multi-step AI agents" and meet Kubernetes v1.35 primitives. The Cloud Native AI Working Group (under CNCF TAG Runtime) is formally developing standards for distributed agentic systems including workflow portability, scheduling, and observability. The working group published a blog post on March 23, 2026 outlining its scope. Critically: the conformance program names agentic workflow validation as a requirement without specifying a workflow definition format. This is the same structural gap OSOP fills, now named by CNCF. This is the highest-leverage new opportunity identified this week — CNCF is the institutional body OSOP needs most, and they have named the gap explicitly.

**Oracle Open Agent Specification forms three-party standards coalition with CopilotKit (AG-UI) and Google (A2A) — OSOP absent.**
Oracle's Open Agent Specification (Agent Spec) is now integrating with AG-UI (CopilotKit) and A2A (Google) into a declared three-layer stack: Agent Spec defines agent behavior and workflows → AG-UI standardizes the UI streaming layer → A2A handles agent routing. Oracle also announced integration with Arize Phoenix for observability (OpenInference spans). This is a vertically integrated standard coalition with Oracle's distribution, Google's A2A governance weight, and CopilotKit's developer community. OSOP is not mentioned anywhere in this stack. However: Agent Spec targets framework portability (moving agents between LangGraph/CrewAI/AutoGen); OSOP targets workflow definition + execution audit. These are adjacent rather than competing. The correct response is a bridge, not a battle: `osop import-agent-spec` converts Oracle's declarative agent definitions into OSOP execution workflows.

**OpenAI's Open Responses Specification standardizing agentic LLM workflows — a second competing definition layer.**
OpenAI published the Open Responses Specification, which formalizes items, reasoning visibility, and tool execution models for multi-step agentic workflows. It aims to enable seamless transitions between proprietary and open-source models. This targets the model-interaction layer (what the LLM does step-by-step) rather than the workflow definition layer (what the overall system does). OSOP's positioning: Open Responses Specification defines how one LLM turn executes; OSOP defines the workflow that orchestrates multiple turns, multiple agents, and multiple node types. Complementary. The `agent` node type in OSOP can reference an Open Responses-compliant session as its runtime.

**Microsoft Conductor community: Day 2 post-ship, still forming.**
The microsoft/conductor GitHub repo is 48 hours old. The community is not yet formed. The Discussions tab has no established threads. This is the last moment when a friendly, additive OSOP comment in Conductor Discussions will reach the founding audience rather than be lost in noise. The window is open for approximately 3–5 more days before the community vocabulary hardens around Conductor's own framing.

**The full agentic protocol stack is now described with five named layers — OSOP absent from all.**
Multiple protocol comparison guides published this week describe the canonical stack as: MCP (tool connectivity) + A2A (agent routing) + AG-UI (UI streaming) + OTel (observability) + Oracle Agent Spec (workflow portability). OSOP is not in any of them. The AAIF submission is the gate to map inclusion. Contacting digitalapplied.com (publisher of the most-shared protocol map) is a 15-minute task.

**CNCF AI WG Gateway standard: token-rate limiting, semantic routing, payload processing for agents.**
The CNCF AI WG is also developing an AI Gateway standard for agentic networking. This is a new governance surface that OSOP's `runtime.security` and `observability` blocks could satisfy natively. An OSOP example showing how a workflow's observability block connects to an CNCF AI Gateway would position OSOP as cloud-native-compatible before the standard finalizes.

### Continuing Signals (from 2026-05-15)

- **Microsoft Conductor** shipped May 14. MIT-licensed. YAML multi-agent workflows. No `.osoplog`, no compliance mapping, no governance. The differentiation is clear — it must be published.
- **EU AI Act full enforcement: 77 days** (August 2, 2026). `.osoplog` satisfies Article 12 field-for-field. No other open format does this.
- **AAIF: 170+ member organizations.** Submission still pending. The governance seat is still vacant. Every week without a submission is a week OSOP cannot appear on protocol stack maps.
- **AGENTS.md: 60K+ repos.** Joint framing opportunity. This weekend is the write window.
- **Arazzo 1.0.1** ecosystem growing (Redocly, Speakeasy, APIDog, Specmatic, Bruno). The four-way comparison doc intercepts the "Arazzo = workflow standard" narrative before it sets.
- **78% of enterprise AI teams** have MCP-backed agents in production. The audience is live and has compliance requirements now.
- **n8n: 150K+ stars.** No portable export format. `osop import-n8n` is the largest single ecosystem play available.
- **Day 60 targets (Jun 8):** 200 stars, 5 external PRs, 20 repos with `.osop` files — 23 days out with 0 on all metrics.

---

## Threats

1. **Oracle Agent Spec + AG-UI + A2A coalition is the new structural threat.** A three-party standards alignment backed by Oracle (distribution), Google (A2A governance), and CopilotKit (developer community) defines a workflow definition + UI + routing stack without OSOP in it. If this coalition formalizes before OSOP publishes the Agent Spec bridge, the "open workflow standard" narrative is occupied by a better-resourced coalition.

2. **CNCF naming the workflow definition gap without naming OSOP.** The Kubernetes AI Conformance Program requires agentic workflow validation. The Cloud Native AI WG is developing standards for distributed agentic systems. Both name the gap; neither references OSOP. If OSOP doesn't contact CNCF TAG Runtime this week, a CNCF-endorsed format will fill the gap without OSOP being considered.

3. **Microsoft Conductor community forming without OSOP's flag planted.** 48 hours old. This is the last low-noise window to reach Conductor's founding developer community with the `.osoplog` complement framing. After 5–7 days, the community vocabulary will be set.

4. **AAIF submission at Day 37 — 20 new member orgs joined since Day 32.** Each week of delay makes the "founding project" framing harder. The member org count is now 170+; the governance application pool grows with it.

5. **Day 60 targets at 23 days out with 0 on all metrics.** The structural gap is not closing. The spec is ready. The tooling exists. The missing element is external presence — and all external presence actions remain pending.

6. **OpenAI Open Responses Specification occupying the "standard for agentic LLM workflows" narrative.** OpenAI has distribution and brand. Their spec targets the model-interaction layer, not the system workflow layer, but developer perception doesn't always separate these layers. OSOP needs a clear "how OSOP and Open Responses fit together" framing before developers conflate them.

---

## Opportunities

### Today (Saturday, May 16) — Write Window

Saturday is the best day to write long-form technical content for maximum Monday exposure. A "Show HN" post submitted Monday morning 8–10am ET catches the peak Hacker News traffic window. Writing today, scheduling for Monday, is the optimal timing strategy.

**1. Four-way comparison doc — write today, publish Monday (90 min)**

Arazzo vs. GitHub Agentic Workflows vs. Microsoft Conductor vs. OSOP. With Conductor as column 4, this is the most compelling OSOP content that has ever existed. The EU AI Act compliance row is the one no other format can match. Target:
- Write as `docs/comparisons/workflow-formats-compared.md`
- Cross-post to dev.to today
- Submit to Hacker News Monday 9am ET as "Show HN: I compared four YAML workflow standards for AI agents (with EU AI Act compliance scoring)"
- Drop link in Arazzo GitHub Discussions, microsoft/conductor GitHub Discussions, and the Hacker News thread on Conductor's launch

Comparison matrix header:

| Dimension | Arazzo 1.0.1 | GitHub Agentic WF | Microsoft Conductor | OSOP 1.1 |
|---|---|---|---|---|
| Workflow definition format | ✅ YAML | Markdown | ✅ YAML | ✅ YAML |
| Portable execution log | ❌ | ❌ | ❌ | ✅ `.osoplog` |
| EU AI Act Article 12 compliance | ❌ | ❌ | ❌ | ✅ field-for-field |
| AI agent-native node types | ❌ (API-only) | Partial | Agent-focused | ✅ 12 types |
| Human-in-the-loop node | ❌ | ❌ | ❌ | ✅ native `human` |
| OTel export | ❌ | ❌ | ❌ | ✅ `.osoplog` → OTel |
| Synthesize from run history | ❌ | ❌ | ❌ | ✅ `osop synthesize` |
| Open governance body | OpenAPI Initiative | GitHub/Microsoft | None (MIT) | Submitting to AAIF |
| Mermaid diagram generation | ❌ | ❌ | ✅ (built-in) | ✅ `osop validate` |

**2. AAIF submission — send today if not sent yesterday (45 min)**

AAIF's application process works via the LFX portal and email — weekends are fine. Use the opening paragraph from yesterday's brief verbatim. Attach: `docs/SPEC.md`, `schema/osop.schema.json`, `docs/eu-ai-act-compliance.md`, `docs/conformance-levels.md`. This is the gate to protocol stack map inclusion. It ships today.

**3. EU AI Act compliance content piece — write today (60 min)**

"77 days to EU AI Act full enforcement. What your AI agents must log — and the open format that covers it today."
- Open with August 2 deadline and €35M fine scale.
- Show Article 12 requirements verbatim.
- Show `.osoplog` field-for-field mapping.
- Include a 15-line `.osoplog` YAML example.
- Add: "Conductor, LangGraph, CrewAI, Oracle Agent Spec — none of these define an execution log format. `.osoplog` does."
- Close with spec link and AAIF status.

Publish to dev.to. Post in the EU AI Act LinkedIn communities and relevant Twitter/X threads. This is the highest-organic-reach content OSOP can publish: it's time-gated (77 days), specific (Article 12), and actionable.

**4. AGENTS.md + OSOP framing — write today (45 min)**

"AGENTS.md tells your agent how to behave. OSOP tells it what to do. Here's how they compose."
Target audience: 60,000+ repos already using AGENTS.md. Hook: these are complementary, not competing. Proposed `agents_md_ref:` field at the workflow level creates the explicit link. Post to dev.to + AGENTS.md GitHub Discussions.

### This Weekend (May 16–17)

**5. CNCF TAG Runtime Cloud Native AI WG outreach (30 min)**

The CNCF Cloud Native AI Working Group (under TAG Runtime) is developing standards for distributed agentic systems, including workflow portability. They have a GitHub issue open ([cncf/toc#1746](https://github.com/cncf/toc/issues/1746)) for "Cloud-Native Foundations for Distributed Agentic Systems." The correct action:
1. Post a comment on cncf/toc#1746 introducing OSOP as the portable workflow definition layer.
2. Add a comment proposing that `.osop` files serve as the portable workflow definition format for CNCF's agentic conformance program.
3. Frame it as additive: "We're proposing a portable workflow definition format for CNCF's agentic workload conformance work — happy to contribute to the WG."

This is a 30-minute task with potentially the highest institutional leverage of any action in the backlog. CNCF naming OSOP as the workflow standard inside the Kubernetes conformance program would be the most impactful endorsement available.

**6. Conductor community engagement (30 min)**

Post in microsoft/conductor GitHub Discussions. Frame: "Conductor solves deterministic execution beautifully. For teams that need a portable execution audit trail alongside it — especially with EU AI Act enforcement in 77 days — here is a format being submitted to AAIF governance that Conductor could optionally emit: [link to `.osoplog` schema and EU AI Act mapping doc]." Non-invasive, additive, reaches the founding audience before vocabulary hardens.

**7. Contact protocol ecosystem map authors (15 min)**

Email digitalapplied.com and getstream.io (both publish widely-cited protocol stack maps) with a one-paragraph OSOP introduction and a link to the four-way comparison doc. This is the fastest path to protocol map inclusion.

### Next Week (May 18–24)

- **OSP-0004: A2A agent subtype** — Update draft to target A2A v1.0 signed Agent Card format. 37 days overdue.
- **`osop import-agent-spec` proposal** — Oracle's Agent Spec uses YAML/JSON. Structural bridge is ~200 lines of Python. Converts Oracle's ecosystem into an OSOP funnel.
- **`osoplog-otel-mapping.md`** — Prerequisite for AG2 PR, Red Hat pitch, OTel blog. Write Monday.
- **OSP-0007: Compliance Extensions RFC** — `retention_policy:` + `compliance_scope:`. 77-day countdown makes this the RFC with the clearest deadline.
- **OpenClaw PR** — Day 37. Execute Monday. 45 minutes.
- **AGNTCon / MCPCon CFP** — ~16 days to deadline. Abstract draft exists.
- **VoltAgent integration example** — Community forming. Window shrinking.

---

## Evolution Ideas

### Spec Improvements

**`state_schema:` at the workflow level — CNCF compatibility and LangGraph parity**

The CNCF Cloud Native AI WG explicitly cites LangGraph-style typed state as a reference pattern for portable agentic systems. 34% of enterprise teams cite LangGraph as their framework. Both audiences expect a typed workflow state definition. OSOP has node-level `inputs`/`outputs` but no workflow-level state machine. Adding `state_schema:` closes this gap and makes OSOP structurally comparable to LangGraph's graph state while remaining framework-agnostic:

```yaml
osop_version: "1.1"
id: "research-pipeline"
state_schema:
  type: object
  properties:
    query:
      type: string
    search_results:
      type: array
      items:
        type: object
    draft:
      type: string
    approved:
      type: boolean
      default: false
  required: [query]
```

Nodes read from and write to the shared state via `${state.field_name}`. The `.osoplog` records state snapshots after each node for complete auditability. This is the single spec change most likely to accelerate enterprise adoption.

**`max_cost_usd:` governance field on workflow and agent nodes**

Enterprise AI governance requires cost ceilings. AWS Bedrock, Azure AI Foundry, and Anthropic all expose token cost metrics. No open workflow standard has a native cost governance field. OSOP adding it first claims the namespace:

```yaml
nodes:
  - id: "research-agent"
    type: "agent"
    name: "Research Agent"
    max_cost_usd: 0.50        # workflow fails if this node exceeds $0.50
    runtime:
      provider: "anthropic"
      model: "claude-opus-4-7"
```

```yaml
# workflow-level cost ceiling
osop_version: "1.1"
id: "full-pipeline"
max_cost_usd: 5.00            # entire workflow fails if total cost exceeds $5
```

This field would be unique to OSOP among all current workflow standards and addresses a top-3 enterprise objection to agentic AI in production.

**`protocol_bindings:` top-level field — OSOP as the protocol stack manifest**

Given that the canonical protocol stack is now MCP + A2A + AG-UI + OTel, OSOP should be able to declare which layer each component of a workflow speaks:

```yaml
protocol_bindings:
  mcp:
    servers:
      - id: "github"
        url: "https://mcp.github.com"
      - id: "slack"
        url: "https://mcp.slack.com"
  a2a:
    agents:
      - id: "research-agent"
        agent_card_url: "https://agents.example.com/research/.well-known/agent.json"
  ag_ui:
    stream_endpoint: "wss://ui.example.com/agent-stream"
  otel:
    endpoint: "https://otel.example.com:4317"
```

This makes an OSOP file the single source of truth for the entire protocol stack a workflow uses — no other format does this. It positions OSOP as the manifest for the full agentic AI stack.

**`osop import-agent-spec` tool — Oracle ecosystem bridge**

Oracle's Open Agent Specification uses a declarative YAML/JSON format for agent definitions. The structural overlap with OSOP's `agent` node type is high enough that a conversion tool is feasible in ~200 lines of Python. The bridge converts Oracle's ecosystem into an OSOP funnel:

```bash
osop import-agent-spec research-agent.agent-spec.yaml -o research-workflow.osop.yaml
```

This is the "non-invasive" play applied to Oracle's standard: OSOP becomes additive to Agent Spec rather than competing with it. Oracle's developer community discovers OSOP through the import bridge.

**Streaming semantics for AG-UI alignment**

The canonical stack now includes AG-UI for UI streaming events. OSOP's `.osoplog` should capture AG-UI events in a structured field to serve as the audit record for the full stack:

```yaml
# .osoplog
node_records:
  - node_id: "chat-agent"
    status: "COMPLETED"
    duration_ms: 4200
    ai_metadata:
      model: "claude-sonnet-4-6"
      prompt_tokens: 1200
      completion_tokens: 340
    ag_ui_events:              # new field
      - type: "text_message_start"
        timestamp: "2026-05-16T10:00:01.200Z"
      - type: "tool_call"
        tool: "search"
        timestamp: "2026-05-16T10:00:02.100Z"
      - type: "text_message_end"
        timestamp: "2026-05-16T10:00:05.400Z"
```

This makes `.osoplog` the only format that serves as an audit record for the full MCP + A2A + AG-UI + OTel stack.

### Tooling Gaps

| Tool | Priority | Trigger | Status |
|------|----------|---------|--------|
| `osop validate --log` | 🔴 Critical | `.osoplog` first-class validation | Not built |
| `osop import-conductor` | 🔴 Critical | Microsoft Conductor shipped May 14 | Not built |
| `osop export-conductor` | 🔴 Critical | Bidirectional bridge play | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable; Datadog native | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS MCP GA "auditable" language | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A v1.0 signed cards; OSP-0004 | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 77-day enforcement countdown | Not built |
| `osop import-agent-spec` | 🔴 Critical | **New — Oracle Agent Spec coalition** | Not built |
| `osop export-bedrock` | 🔴 Critical | SAP MCP + Agent Toolkit GA | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native | Not built |
| `osop export-cloudflare-workflows` | 🟠 High | Cloudflare Agents Week 2026 | Not built |
| `osop export-temporal` | 🟠 High | Temporal Replay 2026; Codex in production | Not built |
| `osop import-n8n` | 🟠 High | 150K+ star n8n ecosystem | Not built |
| `osop protocols` | 🟠 High | `protocol_bindings:` manifest inspector | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo adoption | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |

### Ecosystem Plays

| Target | Action | Effort | Rationale |
|--------|--------|--------|----------|
| **AAIF** | Submit — **TODAY** | 45 min | Day 37. Governance is the Conductor differentiator. |
| **dev.to + Hacker News** | Four-way comparison doc — write today, post Monday | 90 min | Conductor column wins every row that matters. |
| **CNCF TAG Runtime / cncf/toc#1746** | Comment proposing OSOP as portable workflow format | 30 min | **New — highest institutional leverage in the backlog** |
| **microsoft/conductor GitHub Discussions** | Additive `.osoplog` complement comment | 30 min | Day 2 — founding audience still forming |
| **Protocol map authors (digitalapplied.com)** | Email + four-way comparison link | 15 min | Permanent discoverability |
| **dev.to + EU AI Act communities** | EU AI Act compliance content piece | 60 min | 77-day countdown; enterprise reach |
| **AGENTS.md community** | "AGENTS.md + OSOP" joint framing | 45 min | 60K-repo installed base |
| **OpenClaw** | SOUL.md companion PR | 45 min | Day 37 overdue |
| **Oracle agent-spec GitHub** | `osop import-agent-spec` proposal Discussion | 30 min | **New — intercept coalition before it formalizes** |
| **Arazzo GitHub Discussions** | Four-way comparison link + additive comment | 15 min | Active "Arazzo = standard" narrative |
| **Temporal community** | Replay 2026 hook post | 30 min | OpenAI Codex in production |
| **OpenAgents** | `.osop` example + Discussion | 60 min | Only MCP+A2A native framework |
| **MCP GitHub Discussions** | "`.osoplog` fills MCP's audit trail gap" | 45 min | MCP roadmap names the gap #1 |
| **VoltAgent** | `.osop` example + PR | 60 min | Community forming; window shrinking |
| **AG2 (AutoGen)** | `.osop` companion examples | 45 min | After `osoplog-otel-mapping.md` |
| **LangGraph community** | Bridge doc: "OAP runtime, OSOP definition" | 60 min | 34% enterprise citations |
| **Red Hat Developer** | Blog pitch: MCP audit trails + `.osoplog` | 30 min | RHEL MCP server dev preview |
| **Adobe Workfront** | `workfront-approval-workflow.osop.yaml` | 60 min | Workfront MCP launches June 2026 |
| **NIST CAISI** | 2-page comment: "execution audit" framing | 90 min | Window closing |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | 150K+ stars |

---

## Top 3 Actions for This Week

### 1. Write the four-way comparison doc today; post to Hacker News Monday *(90 min)*

This is the highest-leverage piece of content OSOP has ever had the opportunity to publish, and Saturday is the optimal day to write it for Monday morning publication. Arazzo + GitHub Agentic Workflows + Microsoft Conductor + OSOP. The Conductor column — shipped two days ago, MIT-licensed, no audit log, no governance — is the column that makes OSOP win on every enterprise-relevant dimension. EU AI Act Article 12 compliance is the row that no competitor can match. The Monday "Show HN" submission at 9am ET catches the peak traffic window. The strategy:

1. Write `docs/comparisons/workflow-formats-compared.md` today (Saturday).
2. Cross-post to dev.to today; save as draft.
3. Monday 9am ET: submit "Show HN: I compared four YAML workflow standards for AI agents (Arazzo, GitHub Agentic WF, Microsoft Conductor, OSOP)" to Hacker News.
4. Same day: drop the link in Arazzo GitHub Discussions, microsoft/conductor Discussions, and the Arazzo Discord if accessible.

### 2. AAIF submission — send today if not yet sent *(45 min)*

Day 37. If this shipped Friday, the action is done. If it did not ship, today is the day. The LFX portal and email channel work on weekends. The opening paragraph incorporating Conductor's release is in yesterday's brief. Attachments are already in the repo. Four keystrokes away from the single action that unlocks protocol stack map inclusion, AAIF governance branding, and the "open vs. Microsoft-proprietary" differentiator. No blockers.

### 3. Contact CNCF TAG Runtime Cloud Native AI WG *(30 min)*

The CNCF Cloud Native AI Working Group has an open GitHub issue ([cncf/toc#1746](https://github.com/cncf/toc/issues/1746)) titled "Cloud-Native Foundations for Distributed Agentic Systems" and is actively developing standards for distributed agentic systems including workflow portability. The Kubernetes AI Conformance Program now mandates agentic workflow validation without naming a specific format. This is an institutional gap that OSOP was designed to fill. A comment on that issue — introducing OSOP as a candidate portable workflow definition format and expressing willingness to contribute to the WG — takes 30 minutes and could yield the highest-quality institutional endorsement in OSOP's history. Frame it as additive and collaborative, not self-promotional.

---

## Positioning Stack (updated)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Live — 97M monthly SDK downloads, 10K+ servers |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ Live — 170+ orgs, v1.0 signed Agent Cards |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Adopted — Oracle + Google alignment confirmed |
| Agent behavior + workflow portability | Oracle Open Agent Spec | Oracle (open source) | ⚠️ **New — three-party coalition forming with AG-UI + A2A** |
| Cross-framework execution | LangGraph OAP | LangGraph | ✅ Live — v1.0 GA |
| Agent capabilities / repo config | AGENTS.md | Open / de facto | ✅ 60K+ repos |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ Live — 1.0.1 stable, 5-tool ecosystem |
| YAML multi-agent workflow runner | Microsoft Conductor | Microsoft (MIT, no governance) | ⚠️ Shipped May 14 — community forming |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars; no standard export |
| Durable agent execution | Temporal / Cloudflare Workflows | Temporal / Cloudflare (MIT) | ✅ Stable |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — native in AG2, Temporal |
| Kubernetes agentic workflow validation | *(unnamed — CNCF gap)* | CNCF (seeking standard) | ⏳ **New — OSOP is the natural fit; contact this weekend** |
| Regulatory compliance logging | *(unnamed)* | *(none)* | ⏳ 77-day EU AI Act countdown — `.osoplog` is the only portable format that maps to Article 12 |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — TODAY* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Metrics to Track

| Metric | Day 37 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
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
| AAIF submission status | **Pending — submit today** | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| Four-way comparison doc | **Write today → Monday HN** | Indexed + linked | Top 3 search result |
| EU AI Act compliance content | **Write today** | Published | 500+ shares |
| AGENTS.md + OSOP framing | **Write today** | Published | Linked from AGENTS.md repo |
| `osoplog-otel-mapping.md` | Not written | Published | Referenced in 3+ tools |
| OpenClaw PR | Not submitted | Merged | Pattern in 5+ skills |
| CNCF TAG Runtime comment | **Post today** | WG contributor | CNCF-endorsed |
| Oracle Agent Spec bridge proposal | **New — this weekend** | Draft | `osop import-agent-spec` merged |
| Conductor community engagement | **Post today** | `.osoplog` cited in Conductor docs | Bidirectional bridge example |
| OSP-0007 (Compliance Extensions RFC) | Not written | Draft | Published |

---

## Key Links

- Microsoft Conductor: https://github.com/microsoft/conductor
- Microsoft Conductor announcement: https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows/
- Oracle Open Agent Specification: https://github.com/oracle/agent-spec
- A2A Protocol (v1.0, 170+ orgs): https://github.com/a2aproject/A2A
- CNCF Cloud Native AI WG: https://tag-runtime.cncf.io/wgs/cnaiwg/
- CNCF TOC Issue #1746: https://github.com/cncf/toc/issues/1746
- CNCF Agentic Standards blog post (March 23): https://www.cncf.io/blog/2026/03/23/cloud-native-agentic-standards/
- AGENTS.md: 60K+ repos (Amp, Codex, Cursor, Devin, Factory, Gemini CLI, Copilot, Jules, VS Code)
- Arazzo 1.0.1: https://spec.openapis.org/arazzo/latest.html
- EU AI Act full enforcement: **August 2, 2026 — 77 days**
- AI Agent Protocol Ecosystem Map: https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp

---

*Previous brief: [`2026-05-15-daily-brief.md`](./2026-05-15-daily-brief.md)*
*Today is Saturday — ROADMAP update is Monday May 18.*
*AAIF submission: send today. CNCF comment: post today. Comparison doc: write today, publish Monday.*
