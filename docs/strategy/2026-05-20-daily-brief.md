# OSOP Daily Strategy Brief — 2026-05-20

> **Day 41. Week 3, Wednesday.**
> Tuesday's assigned deliverables: `osoplog-otel-mapping.md` + OSP-0008 `trigger:` RFC. This brief does not re-argue them — if unshipped, they carry forward. Wednesday's assignments from the Week 3 plan: `osop compile --from-markdown` design doc + OpenClaw SOUL.md PR + AGNTCon/MCPCon CFP abstract. Three concrete outputs, all under 4 hours total. Day 60 is 20 days away. Zero external actions taken as of Day 40. The math is stark: 200 stars, 5 external PRs, 20 repos, and 3 protocol map appearances in 20 days require a nonzero starting point today. The OpenClaw PR takes 45 minutes and has zero blockers. It is the minimum viable external action.

---

## Action Tracker (Day 41)

| Action | Status | Days Pending | Today's Note |
|--------|--------|--------------|----------------|
| **OpenClaw SOUL.md PR** | ⏳ Pending | **41** | **TODAY — 45 min. Zero blockers. Do before lunch.** |
| **`osop compile --from-markdown` design doc** | ⏳ Pending | **2** | **TODAY — Wednesday assignment. 2 hrs.** |
| **AGNTCon / MCPCon CFP abstract** | ⏳ Pending | ~13 days to deadline | **TODAY — 90 min. Wednesday assignment.** |
| **OSP-0005: Trust policy (A2A v1.2 update)** | ⏳ Pending | **41** | **TODAY — 60 min. Wednesday assignment.** |
| **Google ADK multi-language `.osop` example** | ⏳ Pending | **2** | **TODAY — 60 min. Wednesday assignment.** |
| `osoplog-otel-mapping.md` | ⏳ Pending | **11** (if not shipped Tue) | TODAY if unshipped. Blocks AG2 PR, Red Hat pitch, OTel blog. |
| OSP-0008: `trigger:` RFC | ⏳ Pending | **4** (if not shipped Tue) | TODAY if unshipped. ~12-day Arazzo 1.1 window. |
| AG2 examples PR | ⏳ Pending | **11** | Blocked on `osoplog-otel-mapping.md`. |
| `osop import-strands-sop` Discussion | ⏳ Pending | **2** (if not posted Tue) | 30 min. |
| `osop import-agent-spec` Discussion | ⏳ Pending | **5** (if not posted Tue) | 30 min. |
| Salesforce developer community presence | ⏳ Pending | **1** (if not posted Tue) | 30 min. |
| CNCF TAG Runtime comment | ⏳ Pending | **5** | 15 min. |
| AAIF submission | ⏳ Pending | **41** | If still unsent: Thursday hard deadline. |
| Four-way comparison doc → dev.to / HN | ⏳ Pending | **9** | dev.to today; HN Thursday 9am ET. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **41** | Update for A2A v1.2 before publishing. |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **17** | Update for A2A capability negotiation. |
| OSP-0007: Compliance Extensions RFC | ⏳ Pending | **6** | 73-day EU AI Act countdown. This week. |
| LangGraph community post | ⏳ Pending | **10** | Thursday. |
| Temporal community post | ⏳ Pending | **15** | Thursday. |
| SmartBear DevRel outreach | ⏳ Pending | **3** | Thursday email. |
| n8n ecosystem play | ⏳ Pending | **8** | This week. |
| Notion developer community presence | ⏳ Pending | **2** | Today if time allows. |

---

## Intelligence

### New Signals (2026-05-20)

**Open Source Summit North America 2026 — Microsoft presenting Conductor + Microsoft Agent Framework this week.**
Microsoft published a summary on May 18 ("From open source to agentic systems: Microsoft at Open Source Summit North America 2026") covering both Conductor (YAML-driven deterministic multi-agent orchestration) and the separately-launched **Microsoft Agent Framework (MAF) v1.0** (open-source engine for agentic AI apps, MIT license). This is a live event — the open-source community is forming its vocabulary around deterministic agent orchestration *right now*, without OSOP in the frame.

Two implications:
1. **MAF v1.0 is a new entry in the positioning stack.** Conductor is a CLI atop MAF; MAF is the broader engine. Neither MAF nor Conductor produce a portable execution log. `osop export-maf` bridge concept: OSOP becomes the execution audit layer for the entire Microsoft open-source agentic stack. Add to tooling backlog.
2. **Conference social stream is live.** One LinkedIn comment or post on the OSS NA 2026 conversation (tagging Microsoft's Conductor or MAF posts) places OSOP in front of 10K+ open-source developers this week. 15 minutes. Angle: "Deterministic orchestration + portable execution audit are two sides of the same enterprise need. Conductor handles orchestration; `.osoplog` (OSOP) is the open standard for the portable audit record that feeds governance tools like Datadog, Splunk, and OTel-compatible systems."

**Microsoft Agent Governance Toolkit (April 2026) — runtime security without an execution record format.**
Microsoft separately open-sourced the Agent Governance Toolkit (April 2, 2026) — runtime security controls defining what AI agents are *allowed* to do. From Help Net Security: "Microsoft releases open-source toolkit to govern autonomous AI agents." The Governance Toolkit governs agent *permissions*. `.osoplog` records what agents actually *did*. These are adjacent, not competing. Positioning: OSOP's `.osoplog` is the portable execution record that feeds governance tools — including Microsoft's own Governance Toolkit, Honeycomb Agent Timeline, Datadog, and any OTel-compatible backend. One 200-word Discussion comment in the Microsoft Governance Toolkit or Conductor repo makes this positioning concrete.

**OSSA (Open Standard for Software Agents) — independently-proposed competitor appeared in search.**
A Medium article by Thomas Scola proposes "OSSA: Open Standard for Software Agents" — a Unified Task Schema for Multi-Platform Agent Execution. OSSA focuses on the task/message schema exchanged between agents (aligned with A2A's Task object). OSOP focuses on the workflow definition and execution audit log. These are potentially complementary layers (OSSA = agent task format; A2A = agent routing; OSOP = workflow definition + execution record), but OSSA's independent emergence confirms that the gap OSOP occupies is recognized by multiple people simultaneously. Monitor: if OSSA gains institutional backing, position OSOP as the workflow layer above the OSSA task layer. No action today.

**EU AI Act: 73 days to enforcement (August 2, 2026) — 35 million EUR fines.**
EU AI Act compliance search results confirm the specific requirements: audit logs must be tamper-proof, capture all inputs/outputs/metadata, support reconstruction of any agent decision, and be retained for a defined minimum period. Article 14 (Human Oversight) and Article 15 (Robustness) both have workflow-level traceability requirements. The penalty for non-compliance: 35 million EUR or 7% of global annual turnover, whichever is higher. This escalates OSP-0007 (Compliance Extensions RFC) from a strategic priority to a legal liability deadline for any enterprise OSOP advocate. The CFP abstract and comparison doc should both include: "OSOP's `.osoplog` + OSP-0007 is the only open workflow execution record format that maps to EU AI Act Article 12 field-for-field."

### Continuing Signals (carried)

- **A2A v1.2 signed agent cards + dynamic capability negotiation** — Updates OSP-0004, OSP-0005, OSP-0006 before publishing. `require_signed_card: true` makes trust enforcement verifiable.
- **Honeycomb Agent Timeline** (May 19) — Proprietary observability filling the gap. `osoplog-otel-mapping.md` is the vendor-neutral answer. Publish today if unshipped Tuesday.
- **Salesforce Agentforce Operations** (May 19) — 10M developer community; portable audit trail question not yet raised in their developer forums.
- **Arazzo 1.1 + AsyncAPI** — ~12 days to OSP-0008 window closing. Each day without publication loses namespace priority.
- **Google ADK 1.0 GA** (Python, Go, Java, TypeScript) — OSOP as the language-agnostic portable workflow definition for ADK-based agents.
- **AWS Strands Agent SOPs** — third Markdown-first agent workflow format. `osop compile --from-markdown` is today's deliverable.
- **GitHub Agentic Workflows** — second Markdown-first format (Microsoft/GitHub). Three-signal pattern confirmed.
- **Temporal** — OpenAI Codex + LangGraph in production. `osop export-temporal` unbuilt; Temporal community post due Thursday.
- **n8n: 150K+ stars** — largest single ecosystem play not yet started.
- **AAIF submission: Day 41** — If not sent Monday or Tuesday, Thursday is the hard deadline before it becomes a Week 4 slip.

---

## Threats

1. **Microsoft is presenting Conductor + MAF to the open-source community this week — the vocabulary is setting without OSOP.** The OSS NA 2026 developer conversation is live right now. One LinkedIn comment (15 min) is the minimum viable presence in a closing window.

2. **`osoplog-otel-mapping.md` on Day 11 (if unshipped) is blocking three ecosystem plays.** AG2 examples PR, Red Hat Developer pitch, and OTel integration blog are all waiting on one document. Each day of delay compounds downstream backlog.

3. **OSP-0008 window is narrowing to ~12 days.** Arazzo 1.1 with AsyncAPI support is the confirmed upcoming release. Once Arazzo claims the event-driven agentic workflow namespace, OSP-0008's framing shifts from "preempt" to "respond" — a materially weaker position with standards bodies and framework maintainers.

4. **Day 41 with 0 external actions = mathematical impossibility of Day 60 targets.** 200 stars, 5 external PRs, 20 repos, 3 protocol map appearances in 20 days require a nonzero starting point this week. The OpenClaw PR (45 min) is the lowest-cost, highest-signal way to break the streak. If Wednesday ends at 0 external actions, the Day 60 targets require formal revision.

5. **OSSA is an independently-proposed competitor.** Low institutional threat today; medium threat if it attracts backing from a framework or foundation. No action needed today — monitor.

6. **EU AI Act fines are larger than most startups' total funding.** 35M EUR or 7% of global annual turnover. Enterprise procurement teams reading compliance checklists will look for any vendor or open standard that maps to Article 12. OSP-0007 is the OSOP response. Each day it sits as "Draft pending" is a day enterprise buyers look elsewhere.

---

## Opportunities

### Today (Wednesday May 20)

**1. OpenClaw SOUL.md PR — First External Action (45 min)**

Day 41. Zero external actions. The OpenClaw repo contains 162 SOUL.md agent workflow templates. The play: add a companion `.osop.yaml` alongside one existing SOUL.md template. Add-only, non-invasive, no dependencies on any OSOP tooling. The `.osop.yaml` describes the same workflow in schema-validated OSOP format — giving any team using that SOUL.md template instant access to validation, execution logging, and OTel export.

PR description framing: "Adds a companion `.osop.yaml` workflow definition to make this agent workflow schema-validatable, portable across runtimes, and capable of generating execution audit logs. No changes to the existing SOUL.md."

This creates the first external footprint OSOP has ever had. Do it before anything else.

**2. `osop compile --from-markdown` design doc (2 hrs)**

Wednesday's Week 3 assignment. Three independent signals confirm Markdown is the human authoring format cloud providers are betting on:
- GitHub Agentic Workflows (Microsoft) — Markdown-first
- AWS Strands Agent SOPs (Amazon) — Markdown-first, natural language
- General AGENTS.md / CLAUDE.md / SOUL.md instruction files — Markdown everywhere

Publish: `docs/proposals/osop-markdown-authoring.md`

Document structure:
- **Problem**: Human authors prefer Markdown. Machines need schema-validated YAML. The gap is an OSOP-shaped opportunity — no existing standard provides both.
- **Proposal**: `.osop.md` — Markdown file with YAML front-matter blocks per node, compiled to `.osop.yaml` via `osop compile --from-markdown`.
- **Format sketch**:

```markdown
---
osop_version: "1.0"
id: "pr-review"
name: "AI PR Review"
---

## Overview
This workflow reviews pull requests using an AI agent.

## Steps

### fetch-diff
```yaml
type: api
runtime:
  method: GET
  url: https://api.github.com/repos/${inputs.repo}/pulls/${inputs.pr}/files
```

### review
```yaml
type: agent
runtime:
  provider: anthropic
  model: claude-sonnet-4-20250514
```
```

- **Why OSOP wins**: Markdown-first authoring for humans → schema-validated YAML for machines → `.osoplog` for compliance. Conductor gives you YAML. Strands SOPs give you Markdown. GitHub Agentic Workflows give you Markdown. OSOP gives you both, plus the portable execution record. No competing standard does all three.
- **Migration path**: `osop compile --from-markdown strands-sop.md` converts any AWS Strands SOP to `.osop.yaml` with zero manual editing.

**3. AGNTCon / MCPCon CFP abstract (90 min)**

~13 days to deadline. Write and submit to both NA and EU tracks, plus AI Engineer World's Fair.

**Title**: "The Missing Layer: Why AI Agent Workflows Need a Portable Audit Log"

**Abstract**:
> Every major agentic protocol has filled its layer. MCP handles tool connectivity. A2A routes agents. LangGraph OAP manages cross-framework execution. Temporal provides durable execution. But none answers the question an enterprise CTO, a CISO, or an EU AI Act compliance officer will ask: "What did the agent do — in a human-readable, framework-neutral format I can audit six months from now?"
>
> EU AI Act enforcement begins August 2, 2026. Article 12 requires tamper-proof audit logs that reconstruct agent decisions from inputs, outputs, and timestamps. The fine for non-compliance: 35 million EUR or 7% of global annual turnover. Proprietary observability platforms (Honeycomb Agent Timeline, Datadog agent tracing) are filling this gap vendor-by-vendor. This talk proposes a different answer: a portable open standard.
>
> This talk introduces OSOP — the open standard for AI agent workflow definition (`.osop`) and execution logging (`.osoplog`). We'll live-demo converting a real multi-agent production incident from a proprietary trace into an `.osoplog` file — readable by any OTel-compatible tool, any auditor, and any developer, without vendor lock-in. We'll show how a single `.osop.yaml` definition runs on LangGraph, Temporal, Google ADK, and Microsoft Conductor, producing a portable execution record at every step.

**4. OSP-0005: Trust policy — A2A v1.2 signed card enforcement (60 min)**

A2A v1.2 introduces cryptographic signing on Agent Cards. This makes `trust_policy:` on OSOP agent nodes verifiable, not just declarative — a concrete enforcement mechanism enterprises will accept before mandating any workflow standard.

```yaml
nodes:
  - id: "partner-agent"
    type: "agent"
    subtype: "a2a"
    trust_policy:
      require_signed_card: true
      allowed_domains: ["trusted.example.com"]
      min_card_version: "1.2"
      reject_on_verification_failure: true
      audit_on_verification: true  # emit .osoplog record on every card check
```

`osop trust-audit` against this spec is concrete: validate Agent Card signatures before execution begins, emit `.osoplog` records for every verification event. Publish OSP-0005 as a GitHub Discussion RFC today.

**5. Google ADK multi-language `.osop` example (60 min)**

A single `.osop.yaml` defining a research-and-summarize agent workflow, with four companion execution scripts showing the same workflow running via ADK Python, ADK Go, ADK Java, and ADK TypeScript. The `.osop.yaml` is identical across all four — only the runtime binding changes. PR to osop-examples. Non-invasive, add-only, useful standalone.

This demonstrates OSOP as the language-agnostic workflow definition layer for ADK-based agents — and is a direct answer to the multi-runtime portability claim that no other YAML workflow format makes.

**6. OSS NA 2026 LinkedIn presence (15 min)**

One comment on any post about Microsoft Conductor or the Microsoft Agent Framework from the OSS NA 2026 conference stream this week. Angle: "Deterministic orchestration (Conductor/MAF) + portable execution audit (OSOP `.osoplog`) are the two requirements enterprises have when moving agent workflows to production. Happy to share." Tags: `#OSSummitNA` `#AgenticAI`. This is a closing window — the conference is live now.

### This Week Remaining (Thu–Fri)

**7. Four-way comparison doc → dev.to (today) + HN Thursday (15 min)**
Publish the Arazzo / GitHub AW / Microsoft Conductor / OSOP comparison to dev.to today if unshipped. HN submission Thursday 9am ET.

**8. LangGraph + Temporal community posts (Thursday)**
- LangGraph: "OAP defines the runtime communication protocol. OSOP defines the portable workflow — what the workflow does, in a format any runtime can execute and any auditor can read."
- Temporal: "OSOP is the portable human-readable workflow definition that lives above Temporal's execution layer — the source of truth your team can audit, version-control, and re-run on any runtime."

**9. SmartBear DevRel outreach (Thursday)**
Email: SwaggerHub (80M developer tools audience) + Arazzo support + OSOP = natural Arazzo-adjacent partnership. Propose a joint blog post: "API workflows (Arazzo) + agent workflows (OSOP): the complete workflow standard stack for 2026."

**10. AAIF submission — Thursday hard deadline (if not sent)**
Day 41. Four consecutive days of "sending today." Thursday is the hard deadline before it becomes a Week 4 slip with no recovery path.

---

## Evolution Ideas

### Spec Improvements

**`state_schema:` at the workflow level — typed state for LangGraph compatibility**

LangGraph's 34% enterprise production citation rate is built on typed state management. Enterprises adopting LangGraph expect typed state. Adding `state_schema:` makes OSOP formally equivalent to LangGraph's typed graph state and importable in either direction.

```yaml
osop_version: "1.1"
id: "research-pipeline"
state_schema:
  query: {type: string, required: true}
  search_results: {type: array, items: string}
  summary: {type: string}
  confidence: {type: number, minimum: 0, maximum: 1}
nodes:
  - id: "search"
    type: "agent"
    inputs:
      - name: "query"
        from: "state.query"
    outputs:
      - name: "results"
        to: "state.search_results"
```

This is a 2-hour spec addition that makes the answer to "can I define LangGraph state in OSOP?" go from "no" to "yes."

**`osop export-maf` — bridge to Microsoft Agent Framework v1.0**

MAF v1.0 launched this week. Conductor runs atop MAF. Neither MAF nor Conductor produce a portable execution log. A bridge tool that exports an `.osop.yaml` to a MAF workflow definition — and imports a MAF execution trace to `.osoplog` format — makes OSOP the portable authoring and audit layer for the entire Microsoft open-source agentic stack. Zero changes required to MAF. Add to tooling backlog as 🔴 Critical.

**`workflow` node type — first-class sub-workflow invocation**

Every production orchestration system (Temporal, MAF, Conductor, LangGraph) supports nested workflow invocation. Adding a `workflow` node type that invokes another `.osop.yaml` by ID makes OSOP composable immediately — a prerequisite for a workflow registry and the "define once, compose anywhere" pattern that enterprise adoption requires.

```yaml
- id: "run-code-review"
  type: "workflow"
  name: "Run Code Review Sub-workflow"
  runtime:
    workflow_id: "ai-code-review"
    version: ">=1.0.0"
    inputs:
      repo: "${inputs.repo}"
      pr: "${inputs.pr}"
```

**OSP-0009: `retry:` on edges — production reliability parity**

Every production runtime has retry logic. OSOP has `timeout_sec` on nodes but no retry semantics on edges — which means OSOP-defined workflows lose fidelity when translated to Temporal, Conductor, or LangGraph. A 30-minute spec addition closes this gap simultaneously across all production runtimes.

```yaml
edges:
  - from: "call-api"
    to: "process-result"
    retry:
      max_attempts: 3
      backoff: "exponential"
      initial_delay_ms: 500
      on_errors: ["TIMEOUT", "HTTP_5XX", "RATE_LIMITED"]
```

**`protocol_bindings:` top-level field — one file, all protocol relationships**

As OSOP integrates MCP, A2A, AG-UI, and OTel, the relationship declarations are scattered across individual node fields. A top-level `protocol_bindings:` field makes an OSOP file a complete protocol manifest — one place to declare all agent protocol relationships.

```yaml
osop_version: "1.1"
id: "enterprise-workflow"
protocol_bindings:
  mcp:
    version: "2025-11-05"
    servers: ["filesystem", "github"]
  a2a:
    version: "1.2"
    require_signed_cards: true
  otel:
    endpoint: "https://otel.example.com"
    service_name: "my-workflow"
  ag_ui:
    enabled: true
```

### Tooling Gaps (Wednesday-Priority)

| Tool | Priority | New Signal | Status |
|------|----------|------------|--------|
| `osop compile --from-markdown` | 🔴 Critical | **TODAY'S design doc deliverable** | Not built |
| `osop export-maf` | 🔴 Critical | **NEW — MAF v1.0 launched this week** | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | Honeycomb Agent Timeline (May 19) | Not built |
| `osop export-agent-card` (v1.2) | 🔴 Critical | A2A v1.2 signed cards | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 73 days; 35M EUR fine | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph production | Not built |
| `osop trust-audit` | 🟠 High | **TODAY'S spec: OSP-0005 + A2A v1.2** | Not built |
| `osop export-conductor` / `import-conductor` | 🟠 High | Conductor + MAF launch week | Not built |
| `osop import-strands-sop` | 🟠 High | AWS Strands SOPs open-sourced | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ stars | Not built |
| `osop protocols` | 🟠 High | `protocol_bindings:` inspector | Not built |
| `osop import-agent-spec` | 🟠 High | Oracle WayFlow tutorial live | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | 10M+ devs | Not built |

### Ecosystem Plays (Wednesday)

| Target | Action | Effort | Timing |
|--------|--------|--------|--------|
| **OpenClaw** | SOUL.md companion `.osop.yaml` PR | **45 min** | **TODAY — Before lunch** |
| **AGNTCon / MCPCon / AI Engineer WF** | CFP abstract submission | **90 min** | **TODAY** |
| **OSS NA 2026** | LinkedIn comment on Conductor/MAF conversation | **15 min** | **TODAY — Closing window** |
| **osop-examples** | ADK multi-language `.osop` example PR | 60 min | Today |
| **OSP-0005 RFC** | Publish as osop-spec GitHub Discussion | 60 min | Today |
| **oracle/agent-spec** | `osop import-agent-spec` bridge Discussion | 30 min | Today (if not posted Tue) |
| **strands-agents/agent-sop** | `osop import-strands-sop` bridge Discussion | 30 min | Today (if not posted Tue) |
| **Salesforce developer community** | Agentforce Operations audit trail question | 30 min | Today (if not posted Tue) |
| **CNCF TAG Runtime** | Comment on cncf/toc#1746 | 15 min | Today (Day 5) |
| **dev.to** | Publish four-way comparison doc | 45 min | Today |
| **microsoft/conductor Discussions** | Complement post: OSOP audit layer for Conductor + MAF | 30 min | Today |
| **LangGraph Discussions** | "OAP runtime + OSOP definition" post | 60 min | Thursday |
| **Temporal Community Forum** | OSOP as portable workflow def above Temporal | 45 min | Thursday |
| **SmartBear DevRel** | Email: SwaggerHub + OSOP + Arazzo joint blog | 30 min | Thursday |
| **HN** | Submit four-way comparison doc | 15 min | Thursday 9am ET |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | This week |

---

## Top 3 Actions for Today (Wednesday May 20)

### 1. OpenClaw SOUL.md PR — Break the Zero-Presence Streak (45 min)

Day 41. Zero external actions taken in 41 days. The OpenClaw PR is the minimum viable external action: add a companion `.osop.yaml` alongside one SOUL.md template in OpenClaw's 162-template repo. Add-only, non-invasive, zero new dependencies, zero adoption ask from OpenClaw users. It takes 45 minutes and creates the first external footprint OSOP has ever had. Without this, Day 60 targets are not mathematical possibilities. Do it first.

PR framing: "Adds a companion `.osop.yaml` workflow definition alongside this SOUL.md template. The `.osop.yaml` is schema-validated, generates portable execution logs, and is readable by any OTel-compatible observability tool — no changes to the existing SOUL.md required."

### 2. `osop compile --from-markdown` design doc (2 hrs)

Wednesday's Week 3 assignment. Three independent signals — GitHub Agentic Workflows (Microsoft), AWS Strands Agent SOPs (Amazon), AGENTS.md / CLAUDE.md / SOUL.md instruction files — confirm that Markdown is the human authoring format that cloud providers, frameworks, and developers are choosing for AI agent workflows. OSOP's YAML is the machine format. The bridge between them is an OSOP-shaped opportunity that no competitor offers.

Publish `docs/proposals/osop-markdown-authoring.md`. This document defines `.osop.md` format and the `osop compile --from-markdown` command. It positions OSOP as the only standard that provides:
- Markdown-first authoring (human-readable, Git-native, matches GitHub AW + AWS Strands format)
- Schema-validated YAML output (machine-executable, validates against `osop-core.schema.json`)
- Portable execution record (`.osoplog`, OTel-exportable, EU AI Act-compatible)

No other workflow standard — Arazzo, Conductor, Strands SOPs, GitHub Agentic Workflows — provides all three.

### 3. AGNTCon / MCPCon CFP abstract — Conference Presence (90 min)

~13 days to deadline. Three submissions: AGNTCon NA, AGNTCon EU, AI Engineer World's Fair.

**Title**: "The Missing Layer: Why AI Agent Workflows Need a Portable Audit Log"

Key facts to include in the abstract:
- EU AI Act Article 12: tamper-proof agent audit logs required from August 2, 2026. Fine: 35M EUR or 7% of global annual turnover.
- Every major agentic protocol (MCP, A2A, OAP, Temporal) solves a runtime problem. None solves the portable execution record.
- Honeycomb, Datadog, Dynatrace: three proprietary agent observability products filling the gap vendor-by-vendor.
- OSOP `.osoplog`: the open, OTel-compatible, vendor-neutral execution record that feeds any observability tool.
- Demo: one multi-agent production incident, reconstructed in `.osoplog`, visualized simultaneously in Honeycomb and Datadog — no vendor lock-in.

---

## Positioning Stack (updated 2026-05-20)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ 10K+ servers, 97M SDK downloads/month |
| Agent-to-agent routing | A2A v1.2 | AAIF / Linux Foundation | ✅ 150+ orgs; signed agent cards; dynamic capability negotiation |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Oracle + Google + A2A alignment |
| Enterprise agent orchestration | Salesforce Agentforce Operations | Salesforce (proprietary) | ⚠️ No portable audit layer; OSOP opportunity |
| Open agentic engine (Microsoft) | Microsoft Agent Framework v1.0 | MIT / Microsoft | ✅ **NEW THIS WEEK** — no execution audit format; `osop export-maf` needed |
| YAML multi-agent runner (no audit) | Microsoft Conductor | MIT / Microsoft | ⚠️ Day 6 post-launch; community forming |
| Agent runtime security | Microsoft Agent Governance Toolkit | MIT / Microsoft | ✅ **NEW (April 2026)** — governs permissions; OSOP records what happened |
| Agent-native observability (proprietary) | Honeycomb Agent Timeline + Datadog | Proprietary | ⚠️ Filling gap vendor-by-vendor; `osoplog-otel-mapping.md` is the answer |
| Cross-language agent runtime | Google ADK 1.0 (Py/Go/Java/TS) | Google (Apache 2.0) | ✅ GA — OSOP as portable workflow definition for all 4 runtimes |
| Cross-framework runtime comms | LangGraph OAP | LangGraph | ✅ v1.0 GA — 34% enterprise citation |
| Markdown agent workflow (GitHub-native) | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview — signals Markdown > YAML in DX |
| Markdown agent workflow (AWS-native) | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ Open-sourced — `osop compile --from-markdown` design doc today |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle | ⚠️ Coalition with AG-UI + A2A; OSOP bridge needed |
| Agent task/message schema | OSSA (Open Standard for Software Agents) | None | ⚠️ **NEW** — independently proposed; monitor |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no standard export; OSOP bridge unstarted |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ OpenAI Codex + LangGraph in production; `osop export-temporal` unbuilt |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — `osoplog-otel-mapping.md` pending |
| API workflow documentation | Arazzo 1.0.1 | OpenAPI Initiative / LF | ✅ Stable; 1.1 + AsyncAPI in ~12 days |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ Comment on cncf/toc#1746 pending |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 73-day EU AI Act countdown |
| Event-driven workflow invocation | *(gap — Arazzo 1.1 in ~12 days)* | *(gap)* | ⏳ OSP-0008 pending; window closing |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF — Day 41* | ⏳ Unoccupied by any governed standard |

---

## Adoption Metrics to Track

| Metric | Day 41 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | **0 → 1 today** | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog / content views | 0 | 10k | 50k |
| AAIF submission status | Pending (Day 41) | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | **0 → 1+ today** | 3 | 1+ accepted |
| `osop compile --from-markdown` design doc | **Publishing TODAY** | Design published | Alpha CLI released |
| OpenClaw PR | **Submitting TODAY** | Merged | 5 follow-on PRs |
| AGNTCon / MCPCon / AI Eng WF CFP | **Submitting TODAY** | Both tracks submitted | 1+ accepted |
| OSP-0005 Trust policy RFC | **Publishing TODAY** | Schema merged | 2+ runtime implementations |
| ADK multi-language example | **Submitting TODAY** | PR merged | Cited in ADK docs |
| OSS NA 2026 LinkedIn presence | **TODAY — 15 min** | 3 conference threads | 1 panel/blog invite |
| microsoft/conductor Discussions post | **TODAY** | Thread active | Follow-on blog |

---

## Key Links (New Today)

- **Microsoft at Open Source Summit NA 2026**: https://opensource.microsoft.com/blog/2026/05/18/from-open-source-to-agentic-systems-microsoft-at-open-source-summit-north-america-2026/
- **Microsoft Agent Framework v1.0**: https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/
- **Microsoft Agent Governance Toolkit**: https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/
- **Microsoft Conductor GitHub**: https://github.com/microsoft/conductor
- **OSSA: Open Standard for Software Agents**: https://medium.com/@thomas.scola/open-standard-for-software-agents-ossa-4f5656fa7687
- **EU AI Act compliance checklist — 73 days**: https://dev.to/verisigilai/eu-ai-act-compliance-checklist-for-ai-agents-87-days-until-enforcement-3m1a
- **EU AI Act: 35M EUR fine detail**: https://inkog.io/labs/eu-ai-act-agent-compliance-checklist
- **Arazzo for AI agents**: https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo/
- **A2A Protocol 1-year milestone (150+ orgs)**: https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- **Google ADK 1.0 GA (multi-language)**: https://developers.googleblog.com/agents-adk-agent-engine-a2a-enhancements-google-io/
- **Temporal serverless at Replay 2026**: https://thenewstack.io/temporal-replay-2026-news/
- **MCP donated to AAIF / Linux Foundation**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

---

*Previous brief: [`2026-05-19-daily-brief.md`](./2026-05-19-daily-brief.md)*  
*Today is Wednesday — Week 3 Wednesday deliverables: OpenClaw PR (45 min) + `osop compile --from-markdown` design doc (2 hrs) + AGNTCon/MCPCon CFP abstract (90 min).*  
*Day 41. The first external PR takes 45 minutes. It has zero blockers. Ship it before lunch.*
