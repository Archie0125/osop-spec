# OSOP Daily Strategy Brief — 2026-05-18

> **Day 39. Week 3, Monday.**
> Today is the most action-dense day in the project's brief history: the Hacker News window opens this morning, the microsoft/conductor Discussions engagement window closes today (Day 4/5 — final effective day), and the AAIF submission has been pending for 39 days. Three converging deadlines, one morning. No new analysis required — execution is the only variable. The week opens with a structural confirmation of the Markdown trend: AWS Strands Agent SOPs (open-sourced by Amazon) is the **third major Markdown-first agent workflow format** in six months, joining GitHub Agentic Workflows and general LLM instruction files (AGENTS.md, CLAUDE.md). Two of the three largest cloud providers have independently chosen Markdown over YAML for human-authored agent workflows. This is no longer an outlier signal — it is a format-war data point. `osop compile --from-markdown` moves from "good idea" to structural necessity this week.

---

## Action Tracker

| Action | Status | Days Pending | Today's Note |
|--------|--------|--------------|------------------|
| **Four-way comparison doc → Hacker News** | ⏳ Pending | **7** | **HN WINDOW OPEN NOW. Submit 9am ET.** |
| **AAIF submission** | ⏳ Pending | **39** | **Day 39 — no more delays. Send today.** |
| **microsoft/conductor Discussions** | ⏳ Pending | **4** | **Day 4/5 — FINAL EFFECTIVE DAY.** Post today. |
| **CNCF TAG Runtime / cncf/toc#1746** | ⏳ Pending | **3** | Post today alongside HN. |
| **OpenClaw PR** | ⏳ Pending | **39** | SOUL.md framing ready. 45 min. Execute today. |
| **`osoplog-otel-mapping.md`** | ⏳ Pending | **9** | Blocks AG2 PR, Red Hat pitch, OTel blog. Write today. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **39** | A2A 1-year milestone confirmed: 150+ orgs, 5 SDKs. |
| OSP-0005: Trust policy | ⏳ Pending | **39** | No change. |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **15** | No change. |
| **OSP-0007: Compliance Extensions RFC** | ⏳ Pending | **4** | 75 days to EU AI Act. This week. |
| **OSP-0008: `trigger:` extension RFC** | ⏳ Pending | **2** | 2-3 week window before Arazzo 1.1 + AsyncAPI. Draft Tuesday. |
| AG2 examples PR | ⏳ Pending | **9** | Blocked on `osoplog-otel-mapping.md`. |
| EU AI Act compliance content piece | ⏳ Pending | **4** | 75 days to August 2, 2026. Write today. |
| AGNTCon / MCPCon CFP | ⏳ Pending | ~14 days | Abstract this week — deadline closing. |
| **`osop import-agent-spec` proposal** | ⏳ Pending | **3** | Oracle WayFlow tutorial published — coalition deepening. Tuesday. |
| **`osop import-strands-sop` proposal** | ⏳ Pending | **New** | AWS Strands Agent SOPs open-sourced. Tuesday. |
| **`osop compile --from-markdown` design doc** | ⏳ Pending | **New** | 3rd Markdown-first format confirmed. Wednesday. |
| VoltAgent integration example | ⏳ Pending | **6** | Community forming. This week. |
| n8n ecosystem play | ⏳ Pending | **6** | 150K+ stars. This week. |
| Temporal community post | ⏳ Pending | **13** | OpenAI Codex + LangGraph confirmed in production. |
| README audit-trail reframe | ⏳ Pending | **11** | 30 min. Monday. |
| SmartBear DevRel outreach | ⏳ Pending | **1** | Email Thursday. |

---

## Intelligence

### New Signals (2026-05-18)

**AWS Strands Agent SOPs = third Markdown-first agent workflow format: the pattern is confirmed.**
AWS open-sourced [Strands Agent SOPs](https://github.com/strands-agents/agent-sop) — natural-language, Markdown-based workflow specifications for AI agents. Created inside Amazon's internal builder community and now public under open source. Strands SOPs run in Strands Agents, Kiro, Cursor, Claude Skills, MCP-compatible tools, and directly in ChatGPT and Claude. Workflows are defined in plain Markdown with parameterized inputs and constraint-based execution; no YAML or JSON schema required.

This is now a **three-signal pattern**, not an outlier:
- GitHub Agentic Workflows (Feb 2026): Markdown, 100M+ developer platform
- Strands Agent SOPs (AWS, 2025-2026): Markdown, Amazon cloud ecosystem
- General LLM instruction files (AGENTS.md, CLAUDE.md): Markdown, de facto standard

Two of the three largest cloud providers have independently chosen Markdown over structured YAML for human-authored agent workflow definitions, citing lower barrier to entry in both cases. OSOP's `osop compile --from-markdown` bridge is no longer an optional feature — it is the entry ramp into OSOP for the developer segment that Google, Microsoft, and AWS are actively courting with Markdown-first formats.

**GitHub Agentic Workflows: security architecture detailed (InfoQ, May 2026).**
GitHub published a detailed defense-in-depth security architecture for agentic CI/CD workflows — isolation, constrained execution, and **auditability** as the three pillars. The auditability requirement is described as essential for production agentic workflows. This is structurally what `.osoplog` provides — but platform-neutral, not GitHub-specific. The framing OSOP should own: platform-native agentic workflow security solves isolation and constrained execution; `.osoplog` solves the **portable, framework-neutral execution audit layer** that works regardless of which platform runs the workflow. This sentence is missing from every GitHub security architecture article and every Conductor overview. It belongs in the four-way comparison doc.

**Oracle Agent Spec + WayFlow tutorial deepens the coalition.**
Oracle published a developer tutorial: "Building an LLM Operations Agent with Open Agent Spec and WayFlow" — using WayFlow as the reference runtime for Agent Spec workflows. The Oracle + AG-UI (CopilotKit/Google) + A2A coalition now has a tutorial layer. Developer-facing entry points to a three-party ecosystem that does not include OSOP are forming this week. `osop import-agent-spec` bridge remains unwritten. The window to be the "portable bridge" rather than a competitor is this week — before the coalition's developer tutorials embed their own vocabulary.

**A2A Protocol one-year milestone: 150+ orgs, 22K+ GitHub stars, 5 SDK languages.**
A2A (donated to Linux Foundation by Google) now has 150+ supporting organizations: AWS, Cisco, Google, IBM, Microsoft, Salesforce, SAP, ServiceNow. Five production-ready SDK languages (Python, JavaScript, Java, Go, .NET). Deep integrations in Google AI Platform, Azure AI Foundry, and Amazon Bedrock. A2A is the settled standard for agent-to-agent routing — its layer in the stack is not OSOP's to compete for. OSOP's adjacent layer (workflow definition + execution audit) remains unclaimed by any AAIF-governed standard. The AAIF governance map explicitly names this seat as vacant.

**Hacker News window: OPEN TODAY.**
The four-way comparison doc (Arazzo, GitHub Agentic WF, Microsoft Conductor, OSOP) was targeted for writing yesterday (Sunday). Today is the Monday 9am ET HN submission window — the highest-traffic moment for technical content. "Show HN: I compared four YAML workflow standards for AI agents — Arazzo, GitHub Agentic WF, Microsoft Conductor, OSOP" leverages the Conductor launch news cycle (Day 4), the GitHub security architecture news cycle, and the active "AI agent workflow standards" conversation simultaneously. This is a once-per-week window. Missing it means waiting until May 25.

**Microsoft Conductor: Day 4 — final effective day for community engagement.**
Conductor (MIT, YAML multi-agent workflows, no execution log, no governance) launched May 14. Day 4. The GitHub Discussions community is forming vocabulary now. Early comments set the mental model for what Conductor is and what it is not. After Day 5, the community's understanding of "Conductor + portable audit trail" will form organically — or not at all. The additive `.osoplog` framing (see below) is ready. 30 minutes of execution.

### Continuing Signals (carried from 2026-05-17)

- **Arazzo 1.1 + AsyncAPI** — event-driven namespace occupancy in 2-3 weeks. OSP-0008 `trigger:` RFC window is live.
- **EU AI Act: 75 days** (August 2, 2026) — no open format maps to Article 12 field-for-field except `.osoplog`.
- **AAIF: Day 39** — each week without submission is a week absent from protocol stack maps cited in enterprise procurement.
- **LangGraph OAP v1.0 GA** — 34% enterprise citation rate; "OAP + OSOP" bridge doc unwritten.
- **Temporal: production standard** (OpenAI Codex, LangGraph) — `osop export-temporal` unbuilt.
- **n8n: 150K+ stars** — no portable export format; `osop import-n8n` is the largest single ecosystem play available.
- **SmartBear: 80M developer tool users** — AI-ready API governance roadmap active. Email this week.

---

## Threats

1. **Markdown is winning the human authoring format war.** Three independent signals from GitHub/Microsoft and AWS choosing Markdown over YAML for human-authored agent workflows. OSOP's YAML-first approach will face increasing adoption friction as the Markdown-first narrative hardens. The `osop compile --from-markdown` bridge is the only structural response — it reframes OSOP as the machine-readable layer *under* Markdown, not a competitor to it.

2. **Arazzo 1.1 + AsyncAPI will partially occupy the event-driven agentic workflow namespace.** Active tooling (Redocly, Speakeasy, APIDog, Bruno, Specmatic), Linux Foundation governance, OpenAPI Initiative backing. When 1.1 ships (2-3 weeks), developers searching for "event-driven agent workflow standard" will find Arazzo. OSP-0008 `trigger:` RFC must ship first.

3. **microsoft/conductor community window closes today.** Discussions are forming. The early vocabulary that developers use when describing "Conductor + audit" is being set right now. After today, this becomes a harder sell.

4. **Oracle + AG-UI + A2A coalition tutorials are forming developer entry points.** A three-party ecosystem with Oracle distribution, Google governance, and CopilotKit community is publishing developer tutorials without OSOP. `osop import-agent-spec` is the bridge response; unwritten at Day 39.

5. **Day 39 with 0 external presence across all metrics.** Day 60 targets (200 stars, 20 repos, 3 protocol map appearances) are 21 days out. No single action will close the gap in a day — but the gap requires consistent external action *this week* to remain reachable at all.

6. **AAIF submission at Day 39 = "open standard" is a claim, not an institution.** Every enterprise procurement document that references AAIF-governed standards excludes OSOP. Each week without submission is a week of legitimacy foregone.

---

## Opportunities

### Today (Monday May 18) — Three Converging Deadlines

**1. Hacker News: Submit the four-way comparison doc (9am ET)**

The Monday morning window is the highest-traffic time for technical content on Hacker News. "Show HN: I compared four YAML workflow standards for AI agents — Arazzo, GitHub Agentic WF, Microsoft Conductor, and OSOP" hits the Conductor launch cycle at Day 4, the GitHub security article at peak relevance, and the ongoing "AI agent workflow standards" conversation.

If the doc was written yesterday: submit now. Drop links simultaneously in Arazzo GitHub Discussions and microsoft/conductor Discussions.

If the doc was not completed: write the comparison table + key narrative sections (60 min), publish to `docs/comparisons/workflow-formats-compared.md`, then submit to HN.

Comparison matrix for the doc:

| Dimension | Arazzo 1.0.1 | GitHub Agentic WF | Microsoft Conductor | OSOP 1.0 |
|---|---|---|---|---|
| Workflow format | YAML | Markdown | YAML | YAML |
| Machine-parseable schema | OpenAPI-based | ❌ | JSON Schema | JSON Schema |
| AI-native node types | ❌ (API-only) | Partial | Agent-focused | 4 core / 12 extended |
| Human-in-the-loop | ❌ | ❌ | ❌ | Native `human` type |
| Portable execution log | ❌ | ❌ | ❌ | `.osoplog` |
| EU AI Act Article 12 | ❌ | ❌ | ❌ | Field-for-field mapping |
| OTel export | ❌ | ❌ | ❌ | `.osoplog` → OTel mapping |
| Open governance body | OpenAPI Initiative | GitHub / Microsoft | None (MIT) | Submitting to AAIF |
| Deterministic routing | Step sequences | Script-based | Jinja2 | Conditional edges |
| MCP server | ❌ | ❌ | ❌ | `osop-mcp` |
| Mermaid diagram output | ❌ | ❌ | Built-in | `osop validate` |

Publish path: dev.to (draft today, publish Monday), HN Show HN (9am ET), Arazzo GitHub Discussions, microsoft/conductor Discussions, CNCF Cloud Native AI WG.

**2. microsoft/conductor Discussions: Post today (Day 4/5 — FINAL)**

Post today. Exact framing:

> "Conductor solves deterministic execution beautifully — zero orchestration tokens, Jinja2 routing, version-controlled YAML. One thing it intentionally leaves out is a portable execution audit trail. For teams needing EU AI Act Article 12 compliance or OTel-compatible run history, we've been working on a companion format: `.osoplog`. It's being submitted to AAIF governance this week. Happy to show how the two compose — you define the workflow in Conductor YAML, emit a `.osoplog` at runtime, and you get both determinism and auditability."

This is additive, non-competitive, and solves a real gap that Conductor explicitly acknowledges (no audit log). It is a 30-minute action.

**3. AAIF submission: Send today (Day 39 — no new blockers)**

Attachments ready: `docs/SPEC.md`, `schema/osop.schema.json`, `docs/eu-ai-act-compliance.md`, `docs/conformance-levels.md`. Opening paragraph: OSOP fills the workflow definition + execution audit seat in the AAIF stack — the only layer in the AAIF governance map not yet occupied by a governed standard. The AG-UI gap confirmed in the May 16 brief remains the strongest hook. Conductor's launch adds a second hook: "the most visible YAML workflow runner to ship this month has no execution log and no governance — OSOP is both."

### This Week (May 18–24) — Week 3 Priorities

**4. OSP-0008: `trigger:` RFC (Tuesday, 3 hrs)**

Arazzo 1.1's AsyncAPI support is 2-3 weeks away. When it ships, Arazzo will describe both API sequences AND event-driven workflow invocation. OSOP needs a top-level `trigger:` block to claim the event-driven agentic workflow namespace before Arazzo 1.1 occupies it.

```yaml
osop_version: "1.1"
id: "pr-review-on-open"
name: "AI Review on PR Open"
trigger:
  type: "webhook"          # webhook | schedule | queue | event | manual
  source: "github"
  event: "pull_request.opened"
  filter: 'payload.base.ref == "main"'
nodes:
  - id: "review"
    type: "agent"
    ...
```

With `trigger:`, an OSOP file is a complete autonomous agent specification: not just what the workflow does, but when it starts. Publish as an RFC GitHub Discussion in osop-spec. The spec change is 15-20 schema lines; the strategic value is large.

**5. `osoplog-otel-mapping.md` (Monday, 2 hrs)**

9 days pending. Blocks AG2 PR, Red Hat pitch, OTel blog — three ecosystem plays for one document. The output is a table mapping each `.osoplog` field to its OTel GenAI semantic convention equivalent, plus a 30-line Python snippet showing OTel span emission from an `.osoplog` file. Write today. Submit AG2 examples PR the same day.

**6. `osop compile --from-markdown` design doc (Wednesday, 2 hrs)**

AWS Strands SOPs confirms the format war data point. Write a design doc (not implementation) for an `.osop.md` intermediate format — Markdown with YAML front-matter that compiles to `.osop.yaml`:

```markdown
---
osop_version: "1.0"
id: "pr-review"
name: "AI Code Review"
---

## Steps

1. **fetch-diff** (api): GET `https://api.github.com/repos/{repo}/pulls/{pr}/files`
2. **review** (agent): Claude reviews the diff. Provider: anthropic, model: claude-sonnet-4-6.
3. **approve** (human): Developer reviews AI feedback and approves or rejects.

## Flow
fetch-diff → review → approve
```

`osop compile my-workflow.osop.md` → `my-workflow.osop.yaml`

Publish to `docs/proposals/osop-markdown-authoring.md`. This positions OSOP as the bridge between the Markdown authoring world (GitHub, AWS) and the YAML execution world (schema-validated, audit-logged, governance-backed).

**7. OpenClaw PR (Monday, 45 min)**

Day 39. SOUL.md companion framing is ready. This is the trigger for the entire ecosystem presence strategy — the first external PR. Every day it doesn't ship is a day of zero external footprint.

**8. `osop import-strands-sop` and `osop import-agent-spec` bridge proposals (Tuesday)**

AWS Strands Agent SOPs is now public. Oracle Agent Spec + WayFlow tutorial is live. Post a GitHub Discussion in each repo proposing an OSOP bridge — not asking them to adopt OSOP, but offering to build a tool that imports their format into OSOP for teams who need schema validation, audit logs, or EU AI Act compliance. This is additive-only framing with zero adoption ask.

**9. AGNTCon / MCPCon CFP abstract (Wednesday-Thursday, 90 min)**

~14 days to deadline. Talk title: "The Missing Layer: Why AI Agent Workflows Need a Portable Audit Log." Abstract: OSOP as the workflow definition and execution audit standard complementing MCP, A2A, and AG-UI — with EU AI Act Article 12 as the forcing function. Submit to both NA and EU tracks.

---

## Evolution Ideas

### Spec Improvements

**`.osop.md` Markdown authoring format — responds to the three-signal pattern**

AWS Strands Agent SOPs and GitHub Agentic Workflows confirm that Markdown is the developer-preferred entry point for agent workflow authoring. OSOP's response: define an `.osop.md` intermediate format — Markdown with YAML front-matter — that `osop compile` transforms into a full `.osop.yaml`. OSOP is not competing with Markdown-first formats; it is the schema-validated, audit-logged, governance-backed layer that lives *underneath* Markdown. The compilation step is the bridge.

Key design constraints:
- Round-trippable: every `.osop.yaml` should have an `.osop.md` representation (generated by `osop decompile`)
- Additive: `.osop.md` is a convenience format; `.osop.yaml` remains canonical
- Compatible: all existing OSOP tooling works on the compiled `.osop.yaml`

**OSP-0008: `trigger:` top-level block** — See Opportunity #4 above. Full spec draft in May 17 brief. Preempts Arazzo 1.1 AsyncAPI.

**OSP-0009: `retry:` on edges — production reliability semantics**

Production workflows fail. Conductor has `max_iterations` and wall-clock timeouts. OSOP has `timeout_sec` on nodes but no retry semantics on edges. Adding `retry:` to edges closes this gap:

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

**OSP-0010: `subworkflow` node type — composition and registry building block**

LangGraph supports nested graphs. Conductor supports agents calling other agents. OSOP cannot call one `.osop` workflow from another. A `subworkflow` node type enables composition and is the building block for a future OSOP workflow registry.

**`osop-conductor-bridge.md` compatibility note**

Conductor uses Jinja2 templates for condition routing. OSOP's `when:` expressions on `conditional` edges have no specified evaluation language. A one-page compatibility note clarifying Jinja2 semantics alignment enables `osop import-conductor` / `osop export-conductor` tooling without ambiguity. 30-minute documentation task.

### Tooling Gaps

| Tool | Priority | Signal | Status |
|------|----------|--------|--------|
| `osop compile --from-markdown` | 🔴 Critical | GitHub + AWS = pattern confirmed | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph in production | Not built |
| `osop export-conductor` / `import-conductor` | 🔴 Critical | Conductor launched May 14 | Not built |
| `osop validate --log` | 🔴 Critical | `.osoplog` first-class validation | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable; Datadog native | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS MCP GA "auditable" language | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 75-day countdown | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A v1.0 — 150+ orgs, 5 SDK langs | Not built |
| `osop export-bedrock` | 🔴 Critical | SAP MCP GA + AWS Agent Toolkit GA | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native | Not built |
| `osop import-agent-spec` | 🔴 Critical | Oracle WayFlow tutorial published | Not built |
| `osop import-strands-sop` | 🟠 High | **New — AWS Strands Agent SOPs open-sourced** | Not built |
| `osop protocols` | 🟠 High | `protocol_bindings:` manifest inspector | Not built |
| `osop export-aws-agent-toolkit` | 🟠 High | AWS Agent Toolkit GA | Not built |
| `osop export-voltagent` | 🟠 High | VoltAgent TypeScript DSL bridge | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF | Not built |
| `osop import-sop` | 🟠 High | Strands + GitHub markdown → OSOP | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ star ecosystem | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |
| SwaggerHub / ReadyAPI plugin | 🟡 Medium | SmartBear 80M audience | Not built |
| `osop import-soul-md` | 🟡 Medium | OpenClaw 162 SOUL.md templates | Not built |
| `osop export-n8n` | 🟡 Medium | 150K-star ecosystem bridge | Not built |

### Ecosystem Plays

| Target | Action | Effort | Timing |
|--------|--------|--------|--------|
| **Hacker News** | "Show HN: Four workflow standards for AI agents compared" | Submit now | **TODAY 9am ET** |
| **AAIF** | Submit application | 45 min | **TODAY — Day 39** |
| **microsoft/conductor Discussions** | Additive `.osoplog` complement post | 30 min | **TODAY — Final window** |
| **CNCF TAG Runtime / cncf/toc#1746** | Comment proposing OSOP as portable format | 30 min | Today |
| **OpenClaw** | SOUL.md companion PR | 45 min | **TODAY** |
| **Arazzo GitHub Discussions** | Drop comparison doc link | 15 min | After HN post |
| **strands-agents/agent-sop** | Bridge proposal Discussion | 30 min | Tuesday |
| **oracle/agent-spec** | `osop import-agent-spec` bridge Discussion | 30 min | Tuesday |
| **AG2 examples PR** | After `osoplog-otel-mapping.md` | 45 min | Today |
| **dev.to** | EU AI Act compliance article | 60 min | Tuesday |
| **AGNTCon / MCPCon CFP** | Submit abstract (both tracks) | 90 min | Wednesday |
| **Temporal community** | Post: OSOP as portable source of truth for Temporal | 45 min | Wednesday |
| **LangGraph community** | "LangGraph OAP + OSOP: runtime comms + portable definition" | 60 min | Thursday |
| **SmartBear DevRel** | Email: `.osop` + Arazzo joint support in SwaggerHub | 30 min | Thursday |
| **VoltAgent** | `.osop` example + PR | 60 min | This week |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | This week |
| **OpenAgents** | `.osop` example + Discussion | 60 min | This week |
| **Red Hat Developer** | Blog pitch: MCP audit trails + `.osoplog` | 30 min | After OTel mapping doc |

---

## Top 3 Actions for This Week

### 1. Execute three converging deadlines today (~2.5 hrs total)

Three time-critical actions, one morning window:
- **Hacker News** — Submit four-way comparison doc (9am ET). Highest-leverage awareness action in the backlog. Conductor launch cycle at Day 4.
- **microsoft/conductor Discussions** — Post additive `.osoplog` framing (Day 4/5, final effective day). 30 min.
- **AAIF submission** — Send today. Day 39. Attachments ready, opening paragraph ready, no blockers.

Together, these three actions accomplish what 39 days of analysis has not: first external content presence (HN), first community engagement (Conductor), and institutional governance (AAIF). All three close or peak today. None require new analysis.

### 2. OSP-0008 `trigger:` RFC + `osoplog-otel-mapping.md` (Tuesday, 5 hrs combined)

- **OSP-0008** preempts Arazzo 1.1's AsyncAPI expansion into event-driven workflows. 2-3 week window. Full spec draft in May 17 brief. 3 hrs.
- **`osoplog-otel-mapping.md`** unblocks AG2 PR, Red Hat pitch, OTel blog — 3 ecosystem plays for 2 hrs of writing. Submit AG2 PR same day.

### 3. `osop compile --from-markdown` design doc + OpenClaw PR (Wednesday)

- **`osop compile --from-markdown` design doc** (2 hrs) — AWS Strands SOPs confirmation closes the debate. Publish `docs/proposals/osop-markdown-authoring.md` before other standards claim the "YAML + Markdown bridge" positioning.
- **OpenClaw PR** (45 min) — Day 39. First external PR. SOUL.md framing ready. Execute before end of day.

---

## Positioning Stack (updated 2026-05-18)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ Donated to AAIF — 10K+ servers, 97M SDK downloads/month |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ v1.0 — 150+ orgs, 22K+ stars, 5 SDK languages; 1-year milestone |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Oracle + Google + A2A alignment |
| YAML multi-agent workflow runner (no audit) | Microsoft Conductor | MIT (no governance) | ⚠️ Day 4 post-launch — community forming |
| Markdown agent workflow runner (GitHub-native) | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview — security architecture detailed |
| Markdown agent workflow instructions (AWS) | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ **New signal — third Markdown-first format** |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle (open source) | ⚠️ Coalition with AG-UI + A2A; WayFlow reference runtime |
| Cross-framework runtime comms | LangGraph OAP | LangGraph | ✅ v1.0 GA — 34% enterprise citation |
| Agent repo config | AGENTS.md | Open / de facto | ✅ 60K+ repos |
| API workflow documentation | Arazzo | OpenAPI Initiative / Linux Foundation | ✅ 1.0.1 stable; 1.1 + AsyncAPI coming in 2-3 weeks |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no portable export |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ OpenAI Codex + LangGraph in production |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — native in AG2, Temporal |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ Comment needed on cncf/toc#1746 |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 75-day EU AI Act countdown |
| Event-driven workflow invocation | *(gap — Arazzo 1.1 coming)* | *(gap)* | ⏳ **OSP-0008 needed in 2-3 weeks** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — TODAY* | ⏳ **Unoccupied by any governed standard** |

---

## Adoption Metrics to Track

| Metric | Day 39 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
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
| AAIF submission status | **Sending today** | In review | Accepted |
| OSP proposals published | 0 (OSP-0008 Tuesday) | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| Four-way comparison doc | **HN submission today** | Top-3 search result | Referenced by 5+ tools |
| EU AI Act compliance content | Writing today | Published | 500+ shares |
| `osoplog-otel-mapping.md` | Writing today | Published | Referenced in 3+ tools |
| OSP-0008 (`trigger:`) RFC | Drafting Tuesday | Published | Schema merged |
| `osop compile --from-markdown` design | Designing Wednesday | Design doc published | Alpha released |
| Conductor community engagement | **Posting today — final day** | `.osoplog` cited in docs | Bridge example live |
| OpenClaw PR | **Submitting today** | Merged | 5 follow-on PRs |
| Strands Agent SOPs bridge proposal | Posting Tuesday | Draft published | PR submitted |

---

## Key Links

- **Microsoft Conductor**: https://github.com/microsoft/conductor
- **Conductor announcement (May 14)**: https://opensource.microsoft.com/blog/2026/05/14/conductor-deterministic-orchestration-for-multi-agent-ai-workflows/
- **AWS Strands Agent SOPs (GitHub)**: https://github.com/strands-agents/agent-sop
- **AWS Strands SOP blog**: https://aws.amazon.com/blogs/opensource/introducing-strands-agent-sops-natural-language-workflows-for-ai-agents/
- **GitHub Agentic Workflows (Feb 2026)**: https://github.blog/changelog/2026-02-13-github-agentic-workflows-are-now-in-technical-preview/
- **GitHub Agentic WF security architecture (InfoQ, May 2026)**: https://www.infoq.com/news/2026/05/github-agentic-workflows/
- **Oracle Open Agent Spec**: https://github.com/oracle/agent-spec
- **Oracle Agent Spec + WayFlow tutorial**: https://medium.com/oracledevs/tutorial-building-an-ai-operations-assistant-with-open-agent-spec-and-wayflow-part-1-e08ab2e34648
- **Oracle Agent Spec + AG-UI integration**: https://blogs.oracle.com/ai-and-datascience/announcing-ag-ui-integration-for-agent-spec
- **A2A 1-year milestone (150+ orgs)**: https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- **Arazzo Specification**: https://spec.openapis.org/arazzo/latest.html
- **AAIF / MCP donation**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- **CNCF Cloud Native AI WG**: https://tag-runtime.cncf.io/wgs/cnaiwg/
- **CNCF TOC Issue #1746**: https://github.com/cncf/toc/issues/1746
- **Temporal + agentic AI**: https://temporal.io/blog/orchestrating-ambient-agents-with-temporal
- **EU AI Act full enforcement: August 2, 2026 — 75 days**
- **AI Agent Protocol Ecosystem Map**: https://www.digitalapplied.com/blog/ai-workflow-orchestration-platforms-comparison

---

*Previous brief: [`2026-05-17-daily-brief.md`](./2026-05-17-daily-brief.md)*
*Today is Monday — ROADMAP updated in `docs/ROADMAP.md`.*
*The comparison doc must post to HN today. The Conductor window closes today. The AAIF submission is 39 days overdue. Today is the day.*
