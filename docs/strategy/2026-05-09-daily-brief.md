# OSOP Daily Strategy Brief — 2026-05-09

> **Day 30. The milestone closes today.**
> All Day 30 adoption targets (50 stars, 3 external PRs, AAIF submitted, Arazzo doc published) remain at zero.
> This brief does not re-litigate that. The actions are known. This brief adds new signals and one new strategic frame.

---

## Action Tracker (from 2026-05-08)

| Action | Status | Days Pending | Note |
|--------|--------|--------------|------|
| AAIF submission | ⏳ Pending | **29** | Highest legitimacy multiplier. 2 hours. AWS "auditable" hook is still in its news cycle peak. |
| OpenClaw PR | ⏳ Pending | **29** | 30 minutes. No blockers. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **29** | A2A: 5 SDKs, Azure AI Foundry + Amazon Bedrock AgentCore. Blocking OSOP from being complete. |
| OSP-0005: Trust policy | ⏳ Pending | **29** | Enterprise governance. AAIF submission credibility. |
| OSP-0006: `skill_ref` | ⏳ Pending | **6** | Agent Skills window still open (OpenClaw, Codex CLI, Cursor, Gemini CLI). |
| Arazzo comparison doc | ⏳ Pending | **29** | MCP spec references Arazzo. Defensive. Must publish before Arazzo 1.1 press cycle. |
| README audit-trail reframe | ⏳ Pending | **2** | 30-minute edit. No dependencies. |
| AGNTCon / MCPCon CFP (NA + EU) | ⏳ Pending | ~23 days to deadline | |
| AI Engineer World's Fair CFP | ⏳ Pending | ~31 days to event | |
| NIST CAISI submission | ⏳ Pending | **4** | Comment window closing. |
| Archon compatibility Discussion | ⏳ Pending | **4** | 10-minute GitHub Discussion. |
| Temporal community forum post | ⏳ Pending | **4** | 300 words + example. |
| ACP workflow example | ⏳ Pending | **7** | |
| Strands migration example | ⏳ Pending | **7** | |
| "MCP + OSOP" blog post | ⏳ Pending | **29** | |
| Jama Connect compliance blog post | ⏳ Pending | **2** | |
| Adobe Workfront OSOP example | ⏳ Pending | **1** | Workfront MCP launches June 2026. Publish now to be indexed at launch. |
| AG2 examples PR | New | — | See Ecosystem Plays below. |

---

## Intelligence

### New Signals (2026-05-09)

- **OTel GenAI Semantic Conventions landed stable in early 2026.** The OpenTelemetry GenAI semantic conventions — covering `gen_ai.system`, `gen_ai.request.model`, `gen_ai.usage.input_tokens`, `gen_ai.usage.output_tokens`, and the full span schema for LLM calls and agent tool invocations — reached stable status in early 2026. This is significant for OSOP: there are now zero migration barriers between `.osoplog` fields and OTel spans. The `osop log-export --format otel-json` tool can map directly onto a ratified, stable schema with no moving targets. Enterprise observability tools — Datadog, Jaeger, Grafana, Uptrace — already consume the stable spec. An `.osoplog → OTel JSON` exporter today produces records that Datadog reads natively without custom parsing. This is the bridge that makes OSOP audit logs visible in the enterprise observability stack without asking anyone to change their tooling.

- **AG2 (formerly AutoGen) shipped native OpenTelemetry tracing in February 2026.** AG2 now instruments every agent invocation, tool call, and reasoning step as an OTel span with `gen_ai.*` attributes. AG2 is one of the three dominant multi-agent frameworks (alongside LangGraph and CrewAI), with a large Python developer community. The significance for OSOP: AG2 produces *operational* traces — what happened inside an agent execution. OSOP provides the *workflow definition* layer — what the agent *should* have done, step by step, with expected inputs and outputs. These are complementary artifacts. An AG2 user who also writes their workflow as an `.osop` file gets both: the structured definition (for documentation, compliance, and replay) and the OTel trace (for debugging and alerting). A PR to the AG2 examples repository adding an `.osop` workflow companion to one of their existing examples is a zero-friction entry point into the AG2 community.

- **Red Hat has now produced three separate agentic AI artifacts pointing at the same enterprise governance audience.** (1) Red Hat MCP Server for RHEL — developer preview announced this week; gives AI agents access to enterprise Linux infrastructure. (2) Red Hat Developer blog published a guide to distributed OTel tracing for agentic workflows in April 2026, covering streaming agents and multi-agent spans. (3) Red Hat's enterprise customer base (government, defense, healthcare, financial services) is the same compliance-heavy audience targeted by the Jama Connect compliance blog post. These three signals converge: Red Hat is actively building the technical case for AI agents in regulated environments, and their developer community is already wrestling with the audit and observability questions that OSOP answers. A Red Hat Developer blog submission — "How `.osoplog` Complements OTel Agent Traces in Regulated Environments" — would reach a pre-qualified, compliance-motivated audience directly.

- **Jaeger explicitly named the "AI agent observability gap" as the driver for adopting OTel at its core.** Jaeger, the dominant open-source distributed tracing platform (used by most Kubernetes-native enterprises), announced it has adopted OpenTelemetry as its core instrumentation layer specifically to address AI agent observability. Jaeger's framing: existing agent frameworks produce heterogeneous, incomparable traces; OTel's stable GenAI conventions create a common schema. OSOP's framing complements this: OTel traces *what the agent did* at the span level; `.osoplog` records *what the workflow executed* at the step level — a higher-order, schema-validated audit artifact that OTel traces alone cannot provide. Jaeger + OSOP = full-stack observability for agentic workflows.

- **Datadog natively supports OTel GenAI Semantic Conventions for LLM Observability.** Datadog's LLM Observability product now ingests OTel GenAI spans directly, with no custom exporter required. Datadog has 27,000+ enterprise customers. An `.osoplog → OTel JSON` exporter makes every OSOP workflow execution visible in Datadog out of the box. This is the single most direct path into enterprise monitoring dashboards without requiring any Datadog-specific integration work.

- **LangGraph accounts for 34% of enterprise agent-framework citations in production architecture documents** (Gartner, Q1 2026). LangGraph's graph-based workflow model — nodes as functions, edges as control flow, typed state dictionaries — is the closest architectural cousin to OSOP's node-and-edge model. A LangGraph user reading the OSOP spec should immediately recognize the vocabulary. An OSOP-to-LangGraph bridge document ("How OSOP `.osop` files map to LangGraph graphs") is the lowest-friction adoption piece for the largest enterprise framework community.

### Continuing Signals (unchanged from 2026-05-08)

- MCP 2026 Roadmap names audit trails as the #1 enterprise gap in production MCP deployments.
- AWS MCP Server GA (May 6) uses the word "auditable" — still in its news cycle peak. Best external hook for AAIF submission.
- AAIF at 170+ member organizations. Founding project inclusion window is narrowing.
- A2A at 150+ production orgs, 22K+ GitHub stars, 5-language SDK ecosystem, native in Azure AI Foundry and Amazon Bedrock AgentCore.
- Arazzo 1.0.1 stable; tooling confirmed at Redocly, Speakeasy, APIDog, Specmatic, Bruno; MCP spec references Arazzo directly.
- Agent Skills at 4-tool adoption (OpenClaw, Codex CLI, Cursor, Gemini CLI).
- The three-layer enterprise stack framing (MCP + A2A + context) is solidifying in analyst vocabulary without OSOP.

---

## Threats

1. **Day 30 closes today with all metrics at zero.** This is not a strategic failure — OSOP is a solid spec with a complete ecosystem story. It is an execution gap. The Day 30 targets were set 30 days ago. The actions to meet them have been identified for 28 of those 30 days. The threat is not the metrics; it is the pattern. If Day 60 closes with the same analysis-to-execution gap, the Day 90 targets become structurally unreachable before the enterprise stack vocabulary calcifies.

2. **OTel GenAI Semantic Conventions stability creates a closing window for `.osoplog → OTel` positioning.** While OTel was in flux, `.osoplog` could plausibly claim to be a more stable alternative to OTel's unstable GenAI schema. Now that OTel's GenAI schema is stable, that framing inverts: OSOP must be *complementary* to OTel, not a substitute. The complementarity argument (OTel = spans, OSOP = workflow audit) is the right one, but it requires the `osop log-export --format otel-json` tool to exist before the argument lands. A blog post claiming complementarity without a working exporter reads as vaporware. The tool must exist before the content.

3. **AG2's OTel integration means the AutoGen community is already solving agent observability.** AG2 developers who have OTel tracing built in may perceive `.osoplog` as redundant. The rebuttal — OTel traces spans, `.osoplog` audits workflow steps at a higher abstraction — is correct, but it requires an AG2 example that demonstrates both artifacts side by side. Without that example, the AG2 community will not discover OSOP's differentiation on their own.

4. **The Arazzo tooling flywheel is accelerating.** Arazzo 1.0.1 is stable; five major API tools have added Arazzo support; the MCP spec references it. Each new Arazzo-compatible tool is a developer who will encounter Arazzo before encountering OSOP. The Arazzo comparison doc is not optional — it is the defensive artifact that prevents OSOP from losing the "why not just use Arazzo?" objection before the conversation starts.

5. **The Red Hat developer community is forming its agent governance opinions now.** Red Hat published the OTel agent tracing guide in April 2026. The RHEL MCP server is in developer preview now. Red Hat's developer relations team is actively engaged in the agent observability space. Whoever publishes the first "agent audit trail" piece in the Red Hat Developer ecosystem defines the vocabulary for that community. That window is open today.

---

## New Strategic Frame: "OTel Traces the Spans. OSOP Audits the Workflow."

Yesterday introduced the CloudTrail analogy for enterprise architects and security teams. Today adds the OTel analogy for developers and DevOps engineers — a different audience, a different vocabulary, the same underlying OSOP value proposition.

**The two-layer observability model:**

```
OTel (gen_ai.* spans)     → What the agent DID at the span level
                             Debugging, alerting, latency profiling
                             Produced by: LangGraph, AG2, CrewAI (native adapters)
                             Consumed by: Datadog, Jaeger, Grafana

.osoplog (OSOP)           → What the WORKFLOW EXECUTED at the step level
                             Compliance audit, cost accounting, replay, diff
                             Produced by: any OSOP-compatible runtime
                             Consumed by: osop validate --log, SIEM, AAIF governance stack
```

These are not competing. OTel tells you a span took 2,400ms and consumed 3,200 input tokens. `.osoplog` tells you that was the `review` step of the `ai-code-review` workflow, run 4 against the `feature/auth` branch, executed by `claude-opus-4-7`, that `.osop` version `1.2.0` defines that step as requiring human approval before proceeding, and the step passed. OTel cannot tell you that. CloudTrail cannot tell you that. Only a workflow-level execution record can.

**Positioning implication:** OSOP's pitch to the DevOps audience is not "instead of OTel" — it is "OTel is already in your stack; here is the workflow audit layer that sits above it and gives your OTel spans meaning."

**Proposed README addition (below the CloudTrail tagline):**
> *"OTel traces the spans. OSOP audits the workflow. Together: full-stack observability for AI agent systems."*

---

## Opportunities

### Immediate (this week)

**1. AG2 examples PR** *(new; 45 minutes)*

AG2's GitHub repository has an `examples/` directory. A PR adding `examples/osop-workflow/research-and-summarize.osop.yaml` alongside their existing `research_and_summarize.py` example demonstrates the complementarity directly: AG2 runs the agent (produces OTel spans); OSOP defines the workflow (produces `.osoplog`). PR title: "Add OSOP workflow definition companion for research-and-summarize example." Do not pitch OSOP. The `.osop` file adds standalone value as structured documentation.

**2. `osop log-export --format otel-json` spec document** *(45 minutes; no implementation required yet)*

Before writing the tool, publish the mapping document: how each `.osoplog` field maps to OTel GenAI stable semantic conventions. This document:
- Demonstrates OSOP's OTel complementarity to the DevOps audience
- Serves as the specification the tool will implement
- Can be linked from the dev.to OTel integration post
- Gives AG2, LangGraph, and CrewAI contributors a concrete integration target

Create as `docs/integrations/osoplog-otel-mapping.md`. 200 lines. No code.

**3. AAIF submission** *(2 hours; 29 days overdue)*

The two-layer observability frame is now the second argument alongside CloudTrail: (1) OSOP is CloudTrail for AI agent workflows — enterprise architects; (2) OSOP is the workflow audit layer above OTel spans — DevOps engineers. AAIF's 170 member organizations include both audiences. Update the submission to include both frames.

**4. OpenClaw PR** *(30 minutes; 29 days overdue)*

Fork OpenClaw → `examples/dev-automation-workflow.osop.yaml` → PR. No pitch. Add value.

### This Week

- **LangGraph bridge document** *(60 minutes)* — `docs/integrations/osop-langgraph-bridge.md`. Maps OSOP node types to LangGraph node functions; OSOP edges to LangGraph edge conditions; `.osoplog` node records to LangGraph span attributes. Reaches the 34%-of-enterprise-architecture-citations community in their own vocabulary.

- **Red Hat Developer blog pitch** *(30 minutes to draft)* — Title: "Distributed Tracing vs. Workflow Auditing: How OTel and OSOP Solve Different Problems for Enterprise AI Agents." 800 words. Target: RHEL + OTel agentic workflow audience. Pitch via Red Hat Developer blog contributor program.

- **Arazzo comparison doc** *(90 minutes)* — `docs/comparisons/arazzo-vs-osop.md`. Still mandatory. Arazzo tooling flywheel is accelerating. Do this before Arazzo 1.1 press cycle.

- **README reframe** *(30 minutes)* — Update tagline; add OTel frame sentence; link `eu-ai-act-compliance.md`.

- **Adobe Workfront OSOP example** *(1 hour)* — `workfront-approval-workflow.osop.yaml`. Workfront MCP launches June 2026. Publish now; be indexed at launch.

### Medium-Term

- **`osop log-export --format otel-json`** — Implement after the mapping doc is published. Inputs: `.osoplog.yaml`. Output: OTel JSON (OTLP format). Map `node_records[].ai_metadata.model` → `gen_ai.request.model`; `node_records[].ai_metadata.prompt_tokens` → `gen_ai.usage.input_tokens`; etc.
- **`osop log-export --format cloudtrail`** — AWS CloudTrail JSON. Literal CloudTrail analogy; immediate utility for AWS shops.
- **`osop export-agent-card`** — A2A Agent Card JSON from `.osop` agent nodes. Prerequisite for OSP-0004 tooling story.
- **JetBrains plugin** — Port `osop-vscode`. 10M+ developer audience.
- **Jaeger integration note** — "OSOP workflow context for Jaeger AI agent traces." Jaeger has explicitly named the AI agent observability gap as their core focus. This is a receptive community.

---

## Evolution Ideas

### Spec Improvements

**`gen_ai.*` field alignment on `.osoplog` node records** *(new; triggered by OTel stable)*

Formalize the mapping between `.osoplog` `ai_metadata` fields and OTel GenAI stable attributes. Add to `osoplog.schema.json` as a comment block and to the spec as a table. This is not a schema change — it is a documentation alignment that enables tooling authors to write the exporter without guesswork:

| `.osoplog` field | OTel GenAI attribute | Notes |
|---|---|---|
| `ai_metadata.model` | `gen_ai.request.model` | string |
| `ai_metadata.prompt_tokens` | `gen_ai.usage.input_tokens` | integer |
| `ai_metadata.completion_tokens` | `gen_ai.usage.output_tokens` | integer |
| `ai_metadata.provider` | `gen_ai.system` | string |
| `node_id` | `gen_ai.operation.name` | string |
| `status` | `gen_ai.response.finish_reasons[]` | map to OTel enum |
| `duration_ms` | span duration | milliseconds → nanoseconds |

**`runtime.streaming: true` on agent nodes** *(new; triggered by Red Hat OTel streaming agent guide)*

Production agents increasingly run streaming LLM calls (partial token streaming for latency). The spec has no way to express this. Proposal:

```yaml
- id: analyze
  type: agent
  name: Streaming Analysis Agent
  runtime:
    provider: anthropic
    model: claude-opus-4-7
    streaming: true
    stream_to: "${outputs.analyze.stream}"  # named output stream
```

`.osoplog` records `first_token_ms` and `total_tokens_ms` alongside `duration_ms` for streaming nodes. This is how enterprise latency SLAs are tracked for streaming agents. OTel's GenAI spec already has `gen_ai.server.time_to_first_token` — OSOP should align.

**`provider: ag2` on agent nodes** *(new; AG2 OTel native integration)*

Add `ag2` to the enumerated provider values in `osop.schema.json`. AG2 agents produce OTel traces natively — the `.osoplog` record for an `ag2` agent node can include `otel_trace_id` as a first-class field, linking the OSOP workflow audit to the AG2 OTel span tree. This is the concrete integration bridge.

```yaml
- id: research-agent
  type: agent
  name: Research Specialist
  runtime:
    provider: ag2
    model: gpt-4o
    otel_trace_id: "${context.otel.trace_id}"  # propagate trace context
```

**OSP-0004: A2A agent subtype** *(29 days overdue; 5 SDKs; hyperscaler-native)*

Unchanged from yesterday — still the most urgent spec gap. A2A is in Azure AI Foundry and Amazon Bedrock AgentCore with 5-language SDK coverage. Every enterprise A2A workflow has no OSOP-native expression.

**OSP-0007: `.osoplog` as first-class versioned protocol** *(introduced yesterday; OTel stable adds urgency)*

With OTel GenAI stable, the case for independently versioning `.osoplog` strengthens: OTel has a stable schema, and `.osoplog` needs one too. OSP-0007 defines: schema stability guarantees, mandatory compliance fields (`inputs_hash`, `outputs_hash`, `actor`, `otel_trace_id` optional), `osop validate --log` as a standalone command, and export adapters (OTel, CloudTrail, SIEM CEF).

### Tooling Gaps

| Tool | Priority | Trigger | Status |
|------|----------|---------|--------|
| `osop validate --log` | 🔴 Critical | OSP-0007; makes `.osoplog` first-class | Not built |
| `osop log-export --format otel-json` | 🔴 Critical | OTel GenAI stable — zero migration barriers now | Not built |
| `osop log-export --format cloudtrail` | 🔴 Critical | AWS "auditable" GA + AAIF submission | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A: 5 SDKs, hyperscaler-native; OSP-0004 | Not built |
| `osop export-bedrock` | 🔴 Critical | Amazon Bedrock AgentCore A2A native | Not built |
| `osop export-azure-ai-foundry` | 🔴 Critical | Azure AI Foundry A2A native; MAF 1.0 GA | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) for compliance | Not built |
| `osop trust-audit` | 🟠 High | Enterprise governance; AAIF credibility | Not built |
| `osop import-sop` | 🟠 High | Strands + GitHub markdown → OSOP migration | Not built |
| `osop export-openai-agents` | 🟠 High | OpenAI Agents SDK escape hatch | Not built |
| GitHub Action: validate + log-validate | 🟡 Medium | Zero-friction repo-level adoption | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | Port `osop-vscode`; 10M+ developers | Not built |

### Ecosystem Plays

| Target | Action | Effort | Rationale |
|--------|--------|--------|-----------|
| **AG2 (AutoGen)** | PR: `.osop` companion to `research_and_summarize.py` | 45 min | AG2 OTel native; OSOP is the workflow definition layer above |
| **Red Hat Developer** | Blog pitch: OTel vs OSOP observability layers | 30 min pitch | Triple Red Hat signal; compliance audience pre-qualified |
| **OpenClaw** | PR: `dev-automation-workflow.osop.yaml` | 30 min | 247K stars; 29 days pending; no blockers |
| **AAIF** | Submit via LFX | 2 hours | 29 days pending; 170 members; window narrowing |
| **Arazzo GitHub Discussions** | Post Arazzo comparison doc | 15 min (after doc) | Defensive; MCP spec reference creates Arazzo-first developers |
| **LangGraph community** | Bridge doc + Forum post | 60 min | 34% of enterprise architecture citations |
| **Temporal community** | Forum post + `temporal-durable-workflow.osop.yaml` | 45 min | Production agent developer concentration |
| **Jaeger community** | Integration note: OSOP workflow context for Jaeger traces | 30 min | Jaeger named AI agent gap as their core focus; receptive |
| **Anthropic Discord** | "OSOP as Claude tool" + OTel frame demo | 45 min | Claude Tool Search + osop-mcp integration pattern |
| **Adobe Workfront** | `workfront-approval-workflow.osop.yaml` | 60 min | Workfront MCP launches June 2026; publish before launch |
| **NIST CAISI** | 2-page comment | 90 min | Window closing; get "execution audit" into NIST vocabulary |

---

## Top 3 Actions for This Week

### 1. AAIF Submission *(2 hours; 29 days overdue; highest leverage)*

The opening now has three external anchors:
1. AWS MCP Server GA (May 6): "auditable access" — hyperscaler validation
2. MCP 2026 Roadmap: audit trails as #1 enterprise gap — protocol governance validation
3. OTel GenAI stable (early 2026): the span-level observability layer is locked; the workflow-level audit layer is vacant — developer ecosystem validation

The stack argument:
- MCP = tool connectivity → AAIF ✅
- A2A = agent routing → AAIF ✅
- OTel = span-level observability → CNCF ✅
- **OSOP = workflow definition + execution audit → AAIF seat vacant**

Submit via `lfx.linuxfoundation.org/projects/new`. This is the single action with the longest review timeline — every day not submitted extends the review delay.

### 2. OpenClaw PR *(30 minutes; 29 days overdue; no blockers)*

Fork → `examples/dev-automation-workflow.osop.yaml` → PR → done. This is the most overdue item relative to effort. No external dependencies. No spec gaps. No draft to write. Just execution.

Specific file content: issue triage → code analysis → fix proposal → PR creation. Four nodes, three edges. Demonstrate `agent` + `api` + `human` node types in one file.

### 3. `osoplog-otel-mapping.md` + AG2 PR *(90 minutes combined; new this brief)*

Write `docs/integrations/osoplog-otel-mapping.md` (the OTel GenAI → `.osoplog` field mapping table). Then use the AG2 examples PR to demonstrate it in practice. These two actions together:
- Establish OSOP's OTel complementarity claim with a concrete document (not just a claim)
- Get OSOP into a top-3 multi-agent framework's example library
- Generate the first external PR submitted in 30 days
- Provide the content foundation for the Red Hat Developer blog pitch and the dev.to OTel integration post

---

## Day 30 Reckoning

| Metric | Day 30 Target | Actual | Delta |
|--------|--------------|--------|-------|
| GitHub stars (osop-spec) | 50 | 0 | -50 |
| Combined ecosystem stars | 100 | 0 | -100 |
| External PRs merged | 3 | 0 | -3 |
| Repos with .osop files | 5 | 0 | -5 |
| PyPI downloads | 500/mo | — | — |
| Blog/content views | 2k | 0 | -2k |
| AAIF submission status | Submitted | Draft ready | Unsubmitted |
| OSP proposals published | 3 | 0 | -3 |
| README audit-trail reframe | Done | Not done | Pending |
| Arazzo comparison doc | Published | Not started | Pending |
| OpenClaw PR | Submitted | Not submitted | Pending |

**Assessment:** The spec, tooling story, and strategic framing are all stronger on Day 30 than Day 1. The CloudTrail analogy, the OTel complementarity frame, the AAIF stack argument, the OSP proposals — all of this exists and is well-developed. The execution gap is entirely in external artifacts: nothing has been submitted, published, or PRed. Day 31 through Day 60 look different only if external artifacts start shipping.

**Day 60 milestone (June 8):** 200 stars, 10 external PRs merged, AAIF in review, Arazzo doc published, OSP-0004 + OSP-0005 + OSP-0006 published, 10k blog/content views. None of these are reachable without the Day 30 actions shipping first. The Day 30 actions are still all executable this week. Week 5 is not lost. But Week 5 is the last week where the Day 60 targets remain structurally achievable.

---

## Adoption Metrics to Track

| Metric | Day 30 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
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
| osoplog-otel-mapping.md | Not written | Published | Referenced in 3+ tools |
| Arazzo comparison doc | Not started | Top comparison result | — |
| AG2 PR | Not submitted | Merged | — |
| LangGraph bridge doc | Not written | Published | — |
| Red Hat Developer blog | Not pitched | Published or pitched | — |
