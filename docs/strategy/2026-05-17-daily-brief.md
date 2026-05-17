# OSOP Daily Strategy Brief — 2026-05-17

> **Day 38. Week 6, Sunday.**
> Yesterday was the write window — four-way comparison doc, AAIF submission, CNCF comment, Conductor engagement. If any of those shipped on Saturday, the brief records progress. If none shipped, today is the last day before the Monday morning Hacker News window opens. The comparison doc must be written today. The Conductor community vocabulary is hardening — this is Day 3 of a 5-day window. New intelligence today surfaces two structural threats: (1) GitHub Agentic Workflows' choice of **Markdown** over YAML reveals industry friction with structured formats that OSOP must address head-on, and (2) Arazzo 1.1's planned AsyncAPI support means the "event-driven workflow" namespace OSOP has not yet claimed is about to be occupied by a better-resourced standard. Both have concrete spec responses.

---

## Action Tracker

| Action | Status | Days Pending | Today's Note |
|--------|--------|--------------|--------------|
| **Four-way comparison doc** | ⏳ Pending | **6** | Write today. HN post tomorrow 9am ET. |
| **AAIF submission** | ⏳ Pending | **38** | Weekend processing works. Send today if not sent yesterday. |
| **microsoft/conductor Discussions** | ⏳ Pending | **3** | Day 3 of 5-day window. Post today. |
| **CNCF TAG Runtime comment** | ⏳ Pending | **2** | Post today. GitHub issues work on weekends. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **38** | A2A v1.0 signed Agent Cards confirmed. |
| OSP-0005: Trust policy | ⏳ Pending | **38** | No change. |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **14** | No change. |
| **OSP-0008: `trigger:` extension** | ⏳ Pending | **New** | New today — preempts Arazzo 1.1 AsyncAPI expansion. |
| `osoplog-otel-mapping.md` | ⏳ Pending | **8** | Blocks AG2 PR, Red Hat pitch. Monday priority. |
| AG2 examples PR | ⏳ Pending | **8** | Blocked on `osoplog-otel-mapping.md`. |
| EU AI Act compliance content piece | ⏳ Pending | **3** | 76 days to enforcement. Write today alongside comparison doc. |
| OpenClaw PR | ⏳ Pending | **38** | 45 minutes. Monday. |
| AGNTCon / MCPCon CFP | ⏳ Pending | ~15 days | Closing. Abstract this week. |
| `osop import-agent-spec` proposal | ⏳ Pending | **2** | Oracle coalition still forming. Post this week. |
| VoltAgent integration example | ⏳ Pending | **5** | Community still forming. |
| OpenAgents integration example | ⏳ Pending | **5** | No change. |
| n8n ecosystem play | ⏳ Pending | **5** | No change. |
| Temporal community post | ⏳ Pending | **12** | Temporal confirmed as production standard (OpenAI Codex). |
| OSP-0007 (Compliance Extensions RFC) | ⏳ Pending | **3** | 76 days to EU AI Act. Write this week. |
| README audit-trail reframe | ⏳ Pending | **10** | Monday. 30 minutes. |

---

## Intelligence

### New Signals (2026-05-17)

**GitHub Agentic Workflows chose Markdown, not YAML — validation and warning in one signal.**
GitHub Agentic Workflows (technical preview, February 2026) lets developers define agentic repository automations using **plain Markdown** rather than complex YAML. The explicit design rationale: lower the barrier to entry. This is a direct signal about YAML fatigue in the developer audience OSOP is targeting. The warning: if GitHub — with 100M+ developer reach — normalizes Markdown as the agentic workflow authoring format, YAML-first formats face an uphill adoption battle. The opportunity: OSOP's YAML is the machine-parseable, auditable, schema-validated layer; Markdown can be the human authoring layer. A `osop generate --from-markdown` or an OSOP-flavored Markdown front-matter that compiles to `.osop.yaml` would address the adoption friction directly. No other structured workflow standard has built this bridge.

**Arazzo 1.1 will add AsyncAPI support — the event-driven agentic workflow namespace is about to be partially occupied.**
Arazzo 1.0.1 is stable and growing (Redocly, Speakeasy, APIDog, Specmatic, Bruno all have support). The upcoming 1.1 minor release will add AsyncAPI support, enabling Arazzo workflows to span HTTP and event-driven (queue/stream/webhook) APIs. OSOP currently has no `trigger:` block for event-driven invocation — a workflow can only be defined, not declared as subscribing to an event. When Arazzo 1.1 ships with AsyncAPI, it will be positioned as the standard for both API sequences AND event-driven workflow triggers. OSOP needs OSP-0008: `trigger:` extension before Arazzo 1.1 ships. This is a 2–3 week window.

**Temporal confirmed as production-standard durable agent execution — OpenAI Codex, LangGraph both run on it.**
Temporal is now the default infrastructure for durable, fault-tolerant AI agent execution at production scale. OpenAI uses it for Codex. LangGraph runs workflows on top of it natively. The positioning gap: Temporal handles durable execution but has no portable workflow definition format — every workflow is Python or TypeScript code. OSOP fills this gap. An `osop export-temporal` command that compiles an `.osop` file into a Temporal Workflow Definition (Python SDK) makes OSOP the human-readable source of truth that generates Temporal code. This is the "OSOP as configuration" story applied to the most-used durable execution infrastructure in the industry.

**LangGraph v1.0 GA introduces open Agent Protocol (OAP) for cross-framework runtime communication.**
LangGraph's GA release includes an open Agent Protocol for cross-framework agent communication — a runtime-level standard for agents to invoke each other regardless of underlying framework. This is a runtime communication protocol, not a workflow definition format. OAP handles "how agent A calls agent B at runtime"; OSOP handles "what the overall workflow looks like, what happened, and what it cost." These are complementary at different abstraction levels. The ecosystem play: a doc titled "LangGraph OAP + OSOP: runtime communication meets portable definition" that positions OSOP as the workflow layer on top of OAP's communication layer. LangGraph has 34% enterprise citation rate.

**AAIF governance structure confirmed: Anthropic, Block, OpenAI co-founding; Google, Microsoft, AWS, Cloudflare, Bloomberg supporting.**
The Agentic AI Foundation under the Linux Foundation is now formally constituted with the co-founders and supporting members confirmed. MCP is being donated as the founding protocol. The governance process follows the Linux Foundation's directed-fund model. OSOP's path: apply as a project within AAIF's governance, positioning `.osop` + `.osoplog` as the workflow definition and execution audit layer that complements MCP (tool connectivity) and A2A (agent routing). The AAIF governance map has three confirmed layers; OSOP's layer is unoccupied.

**Gartner: 40% of enterprises will embed AI agents by EOY 2026; 76–81% worry about proprietary lock-in.**
Gartner's projection confirms the enterprise adoption wave is active during OSOP's formation window. The 76–81% proprietary lock-in concern is OSOP's primary enterprise pitch — but only if OSOP has governance (AAIF) to back the "open" claim. Without AAIF submission, the "open standard" positioning is a claim, not an institution. With AAIF, it's verifiable.

**SmartBear's AI-ready API governance: 80M developer tool users.**
SmartBear (SwaggerHub, ReadyAPI, AlertSite) is building "AI-ready API governance" capabilities into their platform. Their Swagger ecosystem has 80M developers. If SmartBear adds OSOP schema validation alongside Arazzo validation, it would expose OSOP to an order of magnitude more developers than any blog post. The ecosystem play: a SmartBear plugin proposal or a conversation with their developer relations team about adding `.osop` file support to SwaggerHub. This is a medium-term play but the window to be "first mover" in their AI governance roadmap is now.

### Continuing Signals (from 2026-05-16)

- **Microsoft Conductor** (Day 3 post-launch): YAML multi-agent workflows, Jinja2 conditions, MIT license, zero orchestration tokens, no execution log. The differentiation gap is clear and confirmed. Community vocabulary is forming. Window for engagement closes in ~2 days.
- **Oracle Agent Spec + AG-UI + A2A coalition**: Three-party alignment without OSOP. `osop import-agent-spec` bridge is the correct response.
- **EU AI Act full enforcement: 76 days** (August 2, 2026). `.osoplog` maps to Article 12 field-for-field. No other open format does.
- **CNCF Cloud Native AI WG**: Kubernetes AI Conformance names agentic workflow validation without naming a format. OSOP is the natural fit. Comment on cncf/toc#1746 is overdue.
- **n8n: 150K+ stars**, no portable export format. `osop import-n8n` is the largest single ecosystem play available.

---

## Threats

1. **Arazzo 1.1 + AsyncAPI will partially occupy the event-driven agentic workflow namespace.** Arazzo has active tooling (5 major tools with support), OpenAPI Initiative governance, and Linux Foundation backing. When 1.1 ships with AsyncAPI support, developers searching for "event-driven agent workflow standard" will find Arazzo. OSOP needs a `trigger:` block before this happens. The window is 2–4 weeks.

2. **GitHub's Markdown-first agentic workflows normalize non-YAML formats.** GitHub's 100M+ developer platform choosing Markdown for agentic workflow definitions creates a narrative that YAML is too complex for agent workflows. This affects OSOP's core authoring format. If Markdown becomes the perceived developer-friendly format and YAML the enterprise-only format, OSOP's adoption funnel narrows significantly.

3. **Microsoft Conductor community vocabulary is hardening.** Day 3. The Discussions tab is forming. If no OSOP signal appears in those early conversations, the Conductor developer community will build their mental model of workflow standards without OSOP in it. This is a 48-hour window.

4. **AAIF submission at Day 38.** Each week without submission means OSOP is absent from a governance body whose protocol stack maps are now cited in enterprise procurement decisions. The member count (170+) grows weekly; the "founding project" framing weakens with each passing week.

5. **Oracle Agent Spec + AG-UI + A2A coalition formalizing.** Three-party stack backed by Oracle distribution, Google governance, CopilotKit community. The `osop import-agent-spec` bridge is the non-invasive response; without it, OSOP has no hook into their ecosystem.

6. **Day 60 targets at 22 days out with 0 on all metrics.** The structural gap is closing time, not closing work. All external presence actions remain pending.

---

## Opportunities

### Today (Sunday May 17) — Final Write Window

**1. Write the four-way comparison doc (90 min) → HN post tomorrow 9am ET**

This is the most time-sensitive action in the entire backlog. The Monday 9am ET Hacker News window opens tomorrow morning. The doc must be written today. If it does not ship today, the next viable Monday is May 25 — one week later, at which point Conductor's launch news will have aged out of the "this just shipped" narrative.

Comparison matrix (column 4 wins every enterprise row):

| Dimension | Arazzo 1.0.1 | GitHub Agentic WF | Microsoft Conductor | OSOP 1.0 |
|---|---|---|---|---|
| Workflow format | ✅ YAML | Markdown | ✅ YAML | ✅ YAML |
| Machine-parseable schema | ✅ OpenAPI-based | ❌ | ✅ JSON Schema | ✅ JSON Schema |
| AI-native node types | ❌ (API-only) | Partial | Agent-focused | ✅ 4 core / 12 extended |
| Human-in-the-loop node | ❌ | ❌ | ❌ | ✅ native `human` type |
| Portable execution log | ❌ | ❌ | ❌ | ✅ `.osoplog` |
| EU AI Act Article 12 | ❌ | ❌ | ❌ | ✅ field-for-field mapping |
| OTel export | ❌ | ❌ | ❌ | ✅ `.osoplog` → OTel mapping |
| Open governance body | OpenAPI Initiative | GitHub / Microsoft | None (MIT) | Submitting to AAIF |
| Deterministic routing | ✅ step sequences | Script-based | ✅ Jinja2 | ✅ conditional edges |
| Mermaid diagram generation | ❌ | ❌ | ✅ built-in | ✅ `osop validate` |
| MCP server | ❌ | ❌ | ❌ | ✅ `osop-mcp` |

Publish path:
- Write as `docs/comparisons/workflow-formats-compared.md`
- Cross-post to dev.to today (save as draft, publish Monday)
- Submit to Hacker News Monday 9am ET: `"Show HN: Four YAML workflow standards for AI agents compared — Arazzo, GitHub Agentic WF, Microsoft Conductor, and OSOP"`
- Drop link in: Arazzo GitHub Discussions, microsoft/conductor GitHub Discussions, CNCF Cloud Native AI WG

**2. AAIF submission (45 min)**

Day 38. LFX portal and email work on weekends. The opening paragraph incorporating Conductor's release is in the May 16 brief. Attachments are in the repo: `docs/SPEC.md`, `schema/osop.schema.json`, `docs/eu-ai-act-compliance.md`, `docs/conformance-levels.md`. This is the gate to everything: protocol stack map inclusion, AAIF governance branding, the "open vs. Microsoft-proprietary" narrative. No blockers.

**3. microsoft/conductor GitHub Discussions (30 min)**

Day 3. Post today. Frame:
> "Conductor solves deterministic execution beautifully — zero orchestration tokens, Jinja2 routing, version-controlled YAML. One thing it intentionally leaves out is a portable execution audit trail. For teams needing EU AI Act Article 12 compliance or OTel-compatible run history, we've been working on a companion format: `.osoplog`. It's being submitted to AAIF governance this week. Happy to show how the two compose — you define the workflow in Conductor YAML, emit a `.osoplog` at runtime, and you get both determinism and auditability."

This is the exact additive framing that makes it welcome in a new project's Discussions.

### This Week (May 18–24)

**4. OSP-0008: `trigger:` extension spec (Monday, 3 hrs)**

Preempts Arazzo 1.1's AsyncAPI expansion into event-driven workflows. Draft the RFC to add a top-level `trigger:` block to OSOP:

```yaml
osop_version: "1.1"
id: "pr-review-on-open"
name: "AI Review on PR Open"
trigger:
  type: "webhook"          # or: schedule, queue, event
  source: "github"
  event: "pull_request.opened"
  filter: 'payload.base.ref == "main"'
nodes:
  - id: "review"
    type: "agent"
    ...
```

Supported trigger types:
- `webhook` — HTTP POST from an external system
- `schedule` — cron expression (runs on a timer)
- `queue` — SQS, Pub/Sub, Kafka topic subscription
- `event` — A2A Agent Card event, MCP notification, or internal signal
- `manual` — explicit invocation only (current default behavior)

This makes OSOP the format that defines not only what a workflow does but when it starts — a complete autonomous agent specification.

**5. `osop export-temporal` design (Tuesday, 2 hrs)**

Temporal is the production durable execution layer for OpenAI Codex and LangGraph. No Temporal workflow has a portable human-readable definition — they're Python/TypeScript code. OSOP fills this gap. Design the export command:

```bash
osop export-temporal my-workflow.osop.yaml --sdk python --output ./workflows/
# Generates: ./workflows/my_workflow_workflow.py (Temporal Workflow class)
#            ./workflows/my_workflow_activities.py (Activity stubs)
```

The generated Temporal code includes:
- `@workflow.defn` class with `@workflow.run` method mapping OSOP edges to `await workflow.execute_activity()` calls
- `@activity.defn` stubs for each OSOP node
- Retry policies from OSOP edge `retry:` fields (once OSP-0008+ adds them)
- A comment block linking back to the source `.osop.yaml` for traceability

This makes OSOP the "source of truth" for a Temporal workflow — write OSOP once, generate Temporal code for production.

**6. Markdown-first authoring mode (Wednesday, design doc only)**

Responds to GitHub's signal that Markdown lowers barriers. Design a `.osop.md` format — Markdown with YAML front-matter — that compiles to a full `.osop.yaml`:

```markdown
---
osop_version: "1.0"
id: "pr-review"
name: "AI Code Review"
---

## Steps

1. **fetch-diff** (api): GET `https://api.github.com/repos/{repo}/pulls/{pr}/files`
2. **review** (agent): Claude reviews the diff. Provider: anthropic, model: claude-sonnet-4-6.
3. **approve** (human): Developer reviews AI feedback.

## Flow
fetch-diff → review → approve
```

Command: `osop compile my-workflow.osop.md` → generates `my-workflow.osop.yaml`.

This is not about being Markdown-first — it's about meeting developers where they are, then pulling them into the full OSOP ecosystem. GitHub's signal confirms the audience exists.

**7. `osoplog-otel-mapping.md` (Monday, 2 hrs)**

The unblocking doc for AG2 PR, Red Hat pitch, OTel blog. Write it Monday. This has been pending 8 days and blocks three downstream ecosystem plays.

**8. SmartBear developer relations outreach (Thursday, 30 min)**

80M developer tools audience. One email to their developer relations team proposing OSOP schema support in SwaggerHub / ReadyAPI. Frame: "You're building AI-ready API governance. OSOP is the AI agent workflow layer that complements Arazzo. A `.osop` file validates the agent orchestration; an Arazzo file validates the API calls within it. Supporting both makes SwaggerHub the complete AI workflow governance platform."

---

## Evolution Ideas

### Spec Improvements

**OSP-0008: `trigger:` top-level block — closes the event-driven gap before Arazzo 1.1**

See Opportunity #4 above for the full spec draft. Priority: ship the RFC this week. Arazzo 1.1's AsyncAPI support is coming; OSOP needs to claim the event-driven invocation namespace first. The `trigger:` block makes OSOP suitable for always-on autonomous agents (respond to webhooks, watch queues, run on schedule) rather than only manually invoked workflows.

**OSP-0009: `retry:` on edges and nodes — production reliability primitives**

Production workflows fail. Conductor has max iteration limits and wall-clock timeouts. OSOP has `timeout_sec` on nodes but no retry semantics on edges. Adding `retry:` to edges closes this gap:

```yaml
edges:
  - from: "call-api"
    to: "process-result"
    retry:
      max_attempts: 3
      backoff: "exponential"
      initial_delay_ms: 500
      on: ["TIMEOUT", "HTTP_5XX"]
```

This makes OSOP workflows production-safe without requiring a separate retry library. Every framework (Temporal, LangGraph, CrewAI Flows) has retry semantics; OSOP should have them in the spec, not leave them to the runtime.

**OSP-0010: `subworkflow` node type — workflow composition**

LangGraph supports nested graphs. Conductor supports agents that call other agents. OSOP has no way to call one `.osop` workflow from another. Adding a `subworkflow` node type enables composition:

```yaml
nodes:
  - id: "run-research"
    type: "subworkflow"
    name: "Research Phase"
    runtime:
      ref: "./research-workflow.osop.yaml"  # local ref
      # or:
      ref: "osop:acme/research-pipeline@1.2.0"  # registry ref (future)
    inputs:
      query: "${inputs.topic}"
    outputs:
      summary: "${outputs.run-research.result}"
```

This is the building block for a workflow registry — OSOP files that can be composed, versioned, and shared like npm packages. The `sop` (Standard Operating Procedure group) format already hints at this; `subworkflow` makes it explicit.

**Jinja2 compatibility note for `conditional` edges — Conductor alignment**

Conductor uses Jinja2 templates for condition expressions. OSOP's `conditional` edge uses a `when:` string with no specified expression language. Adding an explicit note in the spec (and the expression-language doc) that `when:` expressions MUST be compatible with Jinja2's boolean evaluation semantics would make OSOP-to-Conductor conversion lossless. This is a spec clarification, not a breaking change.

**`max_cost_usd:` governance field on workflow and agent nodes (reiterate from May 16)**

No open workflow standard has a native cost ceiling field. OSOP should ship this before any competitor. The field is simple to add, impossible to add after other fields crowd the schema, and addresses a top-3 enterprise objection to agentic AI in production.

### Tooling Gaps

| Tool | Priority | New Signal | Status |
|------|----------|------------|--------|
| `osop compile --from-markdown` | 🔴 Critical | **New — GitHub Agentic WF chose Markdown** | Not built |
| `osop export-temporal` | 🔴 Critical | **OpenAI Codex in production on Temporal** | Not built |
| `osop export-conductor` | 🔴 Critical | Day 3 post-launch | Not built |
| `osop import-conductor` | 🔴 Critical | Bidirectional bridge | Not built |
| `osop validate --log` | 🔴 Critical | `.osoplog` first-class validation | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 76-day countdown | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A v1.0 signed cards | Not built |
| `osop import-agent-spec` | 🔴 Critical | Oracle coalition forming | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ star ecosystem | Not built |
| `osop export-temporal` Python SDK output | 🟠 High | Temporal = production standard | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |
| SwaggerHub / ReadyAPI plugin | 🟡 Medium | **New — SmartBear 80M audience** | Not built |

### Ecosystem Plays

| Target | Action | Effort | Timing |
|--------|--------|--------|--------|
| **Hacker News** | "Show HN: Four YAML workflow standards for AI agents compared" | 90 min write today | **Tomorrow 9am ET** |
| **AAIF** | Submit — **TODAY** | 45 min | Day 38 |
| **microsoft/conductor Discussions** | Additive `.osoplog` complement comment | 30 min | **Today — Day 3 of 5** |
| **CNCF TAG Runtime / cncf/toc#1746** | Comment proposing OSOP as portable workflow format | 30 min | Today |
| **dev.to** | EU AI Act compliance content piece | 60 min | Today / Monday |
| **SmartBear DevRel** | Email proposing `.osop` + Arazzo joint support in SwaggerHub | 30 min | Thursday |
| **Arazzo GitHub Discussions** | Four-way comparison link + additive comment | 15 min | Monday |
| **Oracle agent-spec GitHub** | `osop import-agent-spec` bridge proposal | 30 min | Tuesday |
| **Temporal community** | Post: "OSOP as portable source of truth for Temporal workflows" | 45 min | Wednesday |
| **LangGraph community** | Doc: "LangGraph OAP + OSOP: runtime comms + portable definition" | 60 min | This week |
| **AGENTS.md community** | "AGENTS.md + OSOP: behavior + process" joint framing | 45 min | This week |
| **OpenClaw** | SOUL.md companion PR | 45 min | Monday |
| **OpenAgents** | `.osop` example + Discussion | 60 min | This week |
| **VoltAgent** | `.osop` example + PR | 60 min | This week |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | This week |
| **AG2 (AutoGen)** | `.osop` companion examples | 45 min | After `osoplog-otel-mapping.md` |
| **Red Hat Developer** | Blog pitch: MCP audit trails + `.osoplog` | 30 min | After `osoplog-otel-mapping.md` |
| **AGNTCon / MCPCon CFP** | Submit abstract | 90 min | This week — ~15 days to deadline |

---

## Top 3 Actions for This Week

### 1. Write the four-way comparison doc today; post to Hacker News tomorrow morning *(90 min)*

This is the most time-critical action in the entire backlog. The Monday 9am ET Hacker News window is tomorrow. The comparison doc must be written today. The Conductor column — shipped three days ago, MIT-licensed, no audit log, no governance, no compliance mapping — is the column that makes OSOP win on every enterprise-relevant dimension. This is the most impactful OSOP content that has ever been written. Missing the Monday window means waiting until May 25, by which point Conductor's launch news has aged.

Write target: `docs/comparisons/workflow-formats-compared.md`  
HN title: `"Show HN: I compared four YAML workflow standards for AI agents — Arazzo, GitHub Agentic WF, Microsoft Conductor, OSOP"`  
Drop links in: Arazzo GitHub Discussions, microsoft/conductor Discussions, CNCF Cloud Native AI WG

### 2. Draft OSP-0008: `trigger:` extension RFC *(Monday, 3 hrs)*

Arazzo 1.1 with AsyncAPI support is coming. When it ships, Arazzo will describe both API sequences AND event-driven invocation. OSOP needs to claim the event-driven agentic workflow namespace before that happens. A `trigger:` block (webhook, schedule, queue, event, manual) makes OSOP suitable for always-on autonomous agents. This is the most important spec addition that isn't yet in progress. Draft and publish the RFC as a GitHub Discussion in the osop-spec repo on Monday. The spec change itself is small (15–20 schema lines); the strategic value of being first is large.

### 3. Write `osoplog-otel-mapping.md` and submit the AG2 examples PR *(Monday, 3 hrs)*

This doc has been blocking three downstream ecosystem plays for 8 days. The AG2 (AutoGen) examples PR depends on it. The Red Hat Developer pitch depends on it. The OTel blog post depends on it. Write it Monday. The document is straightforward: a table mapping each `.osoplog` field to its OTel GenAI semantic convention equivalent, plus a 30-line Python snippet showing how to emit OTel spans from an `.osoplog` file. Once published, submit the AG2 examples PR the same day.

---

## Positioning Stack (updated May 17)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Donated to AAIF — 10K+ servers, 97M SDK downloads/month |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ v1.0 — 170+ orgs, signed Agent Cards |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Oracle + Google alignment |
| Agent behavior + workflow portability | Oracle Open Agent Spec | Oracle (open source) | ⚠️ Three-party coalition with AG-UI + A2A — OSOP bridge needed |
| Cross-framework runtime comms | LangGraph OAP | LangGraph | ✅ v1.0 GA |
| Agent capabilities / repo config | AGENTS.md | Open / de facto | ✅ 60K+ repos |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ 1.0.1 stable — 5-tool ecosystem; 1.1 + AsyncAPI coming |
| YAML multi-agent workflow runner | Microsoft Conductor | Microsoft (MIT, no governance) | ⚠️ Day 3 — community forming |
| Markdown agentic workflow runner | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview — signals Markdown > YAML in adoption friction |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no standard export |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ OpenAI Codex + LangGraph in production |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — native in AG2, Temporal |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG (naming gap) | ⏳ CNCF comment needed |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 76-day EU AI Act countdown |
| Event-driven workflow invocation | *(gap)* | *(gap — Arazzo 1.1 coming)* | ⏳ **OSP-0008 needed in 2–3 weeks** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — TODAY* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Metrics to Track

| Metric | Day 38 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog / content views | 0 | 10k | 50k |
| AAIF submission status | **Pending — send today** | In review | Accepted |
| OSP proposals published | 0 (OSP-0008 drafting Monday) | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| Four-way comparison doc | **Write today → HN tomorrow** | Top-3 search result | Referenced by 5+ tools |
| EU AI Act compliance content | **Write today** | Published | 500+ shares |
| `osoplog-otel-mapping.md` | Not written | Published | Referenced in 3+ tools |
| OSP-0008 (`trigger:`) RFC | **Draft Monday** | Published | Schema merged |
| OSP-0010 (`subworkflow`) RFC | Not drafted | Draft published | Under community review |
| `osop compile --from-markdown` | Not built | Design doc published | Alpha released |
| `osop export-temporal` | Not built | Design doc published | Alpha released |
| Conductor community engagement | **Post today** | `.osoplog` cited in Conductor docs | Bridge example merged |
| CNCF TAG Runtime comment | **Post today** | WG contributor | CNCF-endorsed |
| SmartBear DevRel outreach | Not contacted | Response received | Plugin proposed |

---

## Key Links

- Microsoft Conductor: https://github.com/microsoft/conductor
- Microsoft Conductor announcement (May 14): https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows/
- GitHub Agentic Workflows technical preview (Feb 2026): https://github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview/
- Arazzo Specification: https://spec.openapis.org/arazzo/latest.html
- A2A Protocol (v1.0, 170+ orgs): https://github.com/a2aproject/A2A
- LangGraph v1.0 GA: https://blog.langchain.dev/langgraph-v1-0/
- AAIF / MCP donation announcement: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- CNCF Cloud Native AI WG: https://tag-runtime.cncf.io/wgs/cnaiwg/
- CNCF TOC Issue #1746: https://github.com/cncf/toc/issues/1746
- Oracle Open Agent Specification: https://github.com/oracle/agent-spec
- Temporal: https://temporal.io
- EU AI Act full enforcement: **August 2, 2026 — 76 days**
- AI Agent Protocol Ecosystem Map: https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp

---

*Previous brief: [`2026-05-16-daily-brief.md`](./2026-05-16-daily-brief.md)*  
*Today is Sunday — ROADMAP update is tomorrow (Monday May 18).*  
*Write the comparison doc now. Submit to HN tomorrow 9am ET. Post to Conductor Discussions before end of day.*
