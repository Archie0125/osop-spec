# OSOP Daily Strategy Brief — 2026-05-24

> **Day 45. Week 7, Sunday.**
> Sunday execution frame: no community posts (weekend reach penalty), no HN submission (9am ET Monday). Critical correction from yesterday: **Arazzo 1.1 shipped May 19 — the "8 days away" window closed 4 days ago.** Posture shift required on OSP-0008 and all Arazzo-related positioning. Best Sunday investments: OSP-0008 with revised framing (response, not anticipation), OSP-0015 workflow composition proposal, "OSOP + Arazzo 1.1" complement doc for dev.to, HN post finalization, OSP-0005 trust policy. Tomorrow's Monday sprint is the most action-dense day in the history of this brief — 12 pending items converge.

---

## Action Tracker (Day 45)

| Action | Status | Days Pending | Sunday Note |
|--------|--------|--------------|-------------|
| **AAIF submission** | ⏳ Pending | **45** | Final copy ready. Send 9am Monday. |
| **HN submission (four-way comparison doc)** | ⏳ Pending | **13** | **Monday 9am ET. Finalize tonight.** |
| **OpenClaw SOUL.md PR** | ⏳ Pending | **45** | Zero blockers. Submit Monday afternoon. |
| **OSP-0008: `trigger:` RFC** | ⏳ Pending | **8** | **Arazzo 1.1 shipped May 19 — reframe preamble. Write today.** |
| **`osoplog-otel-mapping.md`** | ⏳ Pending | **15** | Write today if not written Saturday. Unblocks AG2 PR. |
| **Four-way comparison doc** | ⏳ Pending | **13** | Add Arazzo 1.1 actor-in-loop row. Publish dev.to today, HN Monday. |
| **Protocol ecosystem map contacts** | ⏳ Pending | **2** | Monday outreach (DigitalApplied, StackOne, AI Agents Directory). |
| **SmartBear DevRel email** | ⏳ Pending | **7** | New Arazzo 1.1 angle added. Send Monday. |
| **AGNTCon / MCPCon CFP abstract** | ⏳ Pending | ~9 days to deadline | Draft today, submit Monday. |
| **LangGraph community post** | ⏳ Pending | **14** | Draft today, post Monday. |
| **Temporal community post** | ⏳ Pending | **19** | Draft today, post Monday. |
| **CNCF TAG Runtime comment** | ⏳ Pending | **9** | Monday. |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **45** | Write today alongside OSP-0008. |
| **OSP-0007: Compliance Extensions RFC** | ⏳ Pending | **10** | 69 days to EU AI Act enforcement. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **45** | Needs A2A v1.2 spec update. |
| AG2 examples PR | ⏳ Pending | **15** | Blocked on `osoplog-otel-mapping.md`. |
| **OSP-0015: Workflow Composition** | 🆕 New | **0** | **New proposal — write today. Arazzo 1.1 has `workflowId` step; OSOP needs equivalent.** |
| **"OSOP + Arazzo 1.1" complement doc** | 🆕 New | **0** | **New — 400 words. Publish dev.to today. Arazzo 1.1 shipped May 19 — response window is open.** |

---

## Intelligence

### Critical Correction (2026-05-24)

**Arazzo Specification 1.1 Shipped May 19, 2026 — Four Days Ago.**

Yesterday's brief stated "8 days to Arazzo 1.1" as the urgency framing for OSP-0008. This was incorrect. The OpenAPI Initiative officially announced Arazzo Specification 1.1 on May 19, 2026. It has been live for four days. The posture shift is significant:

- OSP-0008 **cannot** be framed as "getting ahead of" Arazzo. It must be framed as a **direct response** — distinguishing agent-workflow triggers from the API-workflow triggers Arazzo now ships.
- The four-way comparison doc must reflect Arazzo 1.1 (not 1.0.1) as the current competitive baseline.
- The SmartBear email now has an even stronger hook: Arazzo 1.1 shipped last week; the OSOP complement story is the natural "what comes next" for developers who just discovered it.
- The response window is open: everyone who saw the Arazzo 1.1 announcement this week is now asking "what about the agent reasoning layer above the API layer?" This document should exist by tonight.

### New Signals (2026-05-24)

**Arazzo 1.1's AsyncAPI Support — And What It Reveals About Scope Ambition.**

Arazzo 1.1's headline addition is AsyncAPI support: for the first time, Arazzo workflows can declaratively describe sequences of calls spanning both synchronous and asynchronous APIs. A single Arazzo workflow can now call an HTTP endpoint, publish to an event bus, wait for an acknowledgment, and chain the result — all in one machine-readable document.

More revealing is what Arazzo is planning next: future versions include support for gRPC, GraphQL, SOAP, MCP, and A2A step types, plus **actor-in-loop support (human or agent)** for workflows requiring approval or intervention.

Implication for OSOP: Arazzo is explicitly expanding toward both the MCP tool layer and the human-in-the-loop layer — the two areas where OSOP has the clearest differentiation today. The window for establishing OSOP's distinct value is not years; it is months. Two defensive moves are required:

1. **Publish the differentiation argument now**, before Arazzo ships MCP step types: Arazzo invokes an MCP tool as a deterministic API call. OSOP orchestrates an LLM that reasons about whether and how to use MCP tools, with execution records. These are not the same thing.
2. **Publish OSP-0015 (Workflow Composition)** to define the composition point: an OSOP `api` node with `subtype: arazzo` calls an Arazzo workflow. The two specs are layered, not competing.

**Arazzo Actor-in-Loop — Direct Overlap with OSOP `human` Node Territory.**

Arazzo 1.1's roadmap item "actor-in-loop support (human or agent) for workflows requiring approval or intervention" is the most significant competitive signal in today's research. If Arazzo ships a mature human-in-the-loop model, developers comparing the two specs will see OSOP's `human` node as redundant.

The OSOP counter-argument (must be published as a `human` node spec note before Arazzo ships this):
- OSOP `human` nodes have typed subtypes: `approval`, `review`, `input`, `decision`, `mcp-app`
- OSOP `human` nodes record wait time, approver identity stub, and escalation path in `.osoplog`
- Arazzo's actor-in-loop will produce no portable execution record of who approved, when, and what state existed at approval time — the audit gap is structural to Arazzo's design
- `.osoplog` fills this gap: every human node execution is recorded with `node_id`, `status`, `duration_ms`, and optional `approver_ref` — a portable, framework-neutral audit record

This argument must exist in writing before Arazzo ships its actor-in-loop feature.

**OpenAgents — New Player: Only Framework with Native A2A + MCP Support.**

OpenAgents is described in 2026 framework comparisons as "the only framework with native support for both MCP (Model Context Protocol) and A2A (Agent2Agent Protocol)." LangGraph and AutoGen do not natively support either protocol, though community integrations exist.

Implication for OSOP: OpenAgents represents a new framework-level alternative to OSOP's positioning as the "framework-neutral" standard. If OpenAgents gains significant adoption as the MCP+A2A-native framework, developers may reach for OpenAgents instead of OSOP for multi-protocol agent workflows. Mitigation: OSOP is a *definition format* and *execution record*, not a runtime — it works with OpenAgents, LangGraph, and CrewAI equally. The OSP-0004 A2A agent subtype PR (still pending) is what makes OSOP the format that describes OpenAgents workflows, not an alternative to it.

**LangGraph Reality Check — v0.4 (April 2026), Not v1.0 GA.**

Framework comparison content this week clarifies: LangGraph shipped v0.4 in April 2026 with improved state persistence and human-in-the-loop checkpoints. The "v1.0 GA with open Agent Protocol" was referenced in last week's briefs — that framing may conflate LangGraph's current release with a roadmap item. The open Agent Protocol for cross-framework communication may be announced but not yet shipped.

Implication for OSOP: The ROADMAP's positioning stack entry for LangGraph should reflect v0.4's actual capabilities (improved state persistence, human-in-the-loop), not a v1.0 GA framing that may not be accurate. The OSOP + LangGraph community post should reference v0.4 specifically — precision builds credibility with LangGraph's technical community.

**Temporal + OpenAI Agents SDK Integration — Generally Available Since March 23, 2026.**

The OpenAI Agents SDK + Temporal Python SDK integration reached GA on March 23, 2026. OpenAI's VP of Application Infrastructure states Temporal's durable orchestration is "critical to handling massive scale, complex agentic workflows, infrastructure control plane, and data pipelines." OpenAI uses Temporal for Codex in production, handling agents that wait days for human approval and survive server restarts.

Implication for OSOP: This GA announcement is now 2 months old and OSOP has not published a Temporal community post or an `osop export-temporal` design. The Temporal community post is one of the clearest OSOP entry points: Temporal handles *durability*; OSOP handles *definition* and *audit records*. A developer using Temporal for their agent workflow has no portable format describing what the workflow does or an audit record of what it did — until they add OSOP. Draft the post today; publish Monday.

**Agentic AI Foundation (AAIF) Structure Confirmed — Linux Foundation Directed Fund.**

Anthropics donation of the Model Context Protocol to the Linux Foundation's Agentic AI Foundation is confirmed. The AAIF is a directed fund co-founded by Anthropic, Block, and OpenAI, with Google, Microsoft, AWS, Cloudflare, and Bloomberg as supporting members. This is the governance body that OSOP's AAIF submission is targeting.

Implication for OSOP: The submission must explicitly reference OSOP's relationship to MCP (OSOP `agent` nodes declare MCP tools; `.osoplog` records MCP tool calls at execution time) and to A2A (OSP-0004 adds native A2A agent subtype). The AAIF was founded to govern agentic AI standards — OSOP's claim is that it is the missing workflow definition and execution record layer in that governance scope. The submission is the most leveraged single action in the backlog.

**AgenticAPI OpenAPI Extensions — Alternative Discovery Mechanism Emerging.**

AgenticAPI (agenticapi.com) uses OpenAPI extensions to enhance AI agent discoverability: annotating endpoints with metadata about action-oriented verbs, categories, parameter impacts, and compatibility. This is a different layer from Arazzo (workflow sequencing) and OSOP (agent workflow definition + audit) — it sits at the API description level.

Implication for OSOP: This creates a three-layer stack even within the API world: AgenticAPI extensions (discoverability) → Arazzo (workflow sequencing) → OSOP `api` nodes (agent workflow context). More important: AgenticAPI's approach of extending existing standards (OpenAPI extensions) rather than creating new ones is a validated adoption pattern. OSOP's approach — a new file format rather than an OpenAPI extension — requires stronger justification. The `.osoplog` execution record is the justification: you cannot represent execution records as an OpenAPI extension. The format must exist independently.

### Continuing Signals (Carried)

- **MCP stateless RC (July 28 final spec)** — OSP-0013 stateless MCP binding, 64 days remaining
- **MCP Apps (server-rendered UI in iframes)** — `human` node `mcp-app` subtype proposal
- **A2A v1.2: 150+ orgs, cryptographic Agent Cards** — OSP-0004 still pending (45 days)
- **EU AI Act enforcement: 69 days** (August 2, 2026) — OSP-0007 compliance extensions
- **AWS Strands Agent SOPs** — Markdown-first format; `osop compile --from-markdown` still unbuilt
- **n8n: 9,752 community workflows in proprietary format** — `osop import-n8n` unbuilt
- **Microsoft Conductor + MAF v1.0** — YAML multi-agent runner, no audit layer — OSOP opportunity
- **Gartner 60% AI agent deployment failure stat** — enterprise pitch anchor
- **PwC + AWS ML team audit mandate citations** — enterprise pitch evidence
- **SmartBear "From Endpoints to Intent" article** — Arazzo + MCP framing, sequel hook ready

---

## Threats

1. **Arazzo's planned MCP step types will blur the OSOP `agent` node distinction.** When Arazzo ships native MCP invocation as a step type, developers will ask "why do I need OSOP's `agent` node? Arazzo already calls MCP tools." The counter-argument (Arazzo calls an MCP tool deterministically; OSOP orchestrates an LLM that *reasons* about which MCP tools to use) must be published **before** Arazzo ships this. Estimated Arazzo timeline: Arazzo 1.2, likely Q3-Q4 2026.

2. **Arazzo actor-in-loop makes OSOP `human` nodes look redundant if Arazzo ships first.** The differentiation (`.osoplog` records the approval event; Arazzo does not) must be spec-documented and publicly visible before Arazzo's actor-in-loop ships.

3. **Day 45, zero external deliverables.** Tomorrow's Monday sprint is the convergence of 45 days of preparation. Over-commitment risk: 12+ items in the queue. Priority order matters more than quantity. Three executed items are worth more than 12 partially started ones. Priority stack for Monday: (1) HN 9am ET, (2) AAIF submission, (3) SmartBear email, (4) OpenClaw PR. Everything else is secondary.

4. **OpenAgents as the "native A2A + MCP" framework could absorb the "multi-protocol agent" narrative** that OSOP needs to position around. The counter: OSOP is the format, not the runtime. OpenAgents workflows should be described in OSOP. The integration story (not competition) is correct.

5. **Arazzo 1.1 shipped May 19 and OSOP has published no response.** Every day without a response is a day where developers who discovered Arazzo 1.1 this week don't know OSOP exists as the complementary layer. The dev.to complement doc ships tonight.

---

## Opportunities

### Immediate (Today, Sunday)

**1. Publish "OSOP + Arazzo 1.1: The Complete Stack" (dev.to, tonight)**

The Arazzo 1.1 announcement was May 19. This week's developer attention is on Arazzo. The 400-word complement doc answers the question developers are already asking: "I have Arazzo for my API workflows. What handles the agent reasoning layer above it?"

Draft structure:

> *Arazzo 1.1 shipped last week. It's excellent — multi-step API workflows, AsyncAPI support, deterministic sequencing. Here's what it doesn't cover: the LLM that decides which API workflow to call, and the audit record of what happened when it did.*
>
> *That's OSOP. Not a competitor to Arazzo. The next layer.*
>
> *The stack: Arazzo describes the API sub-workflow. An OSOP `api` node with `subtype: arazzo` calls it from inside an agent workflow. When the run completes, `.osoplog` records the full execution — LLM reasoning time, token usage, which Arazzo workflow was called, what the outcome was. One portable YAML file. Zero proprietary observability vendor required.*
>
> *If you're using Arazzo 1.1 today, you already have the bottom layer. [Link to OSOP quickstart.]*

Publish to dev.to tonight. Cross-post link to Arazzo GitHub Discussions Monday. Reference in SmartBear email Monday.

**2. Write OSP-0008 with Revised Preamble**

Arazzo 1.1 is out. The OSP-0008 preamble must change from anticipating Arazzo's triggers to responding to them. Revised framing:

> *Arazzo 1.x defines triggers for API workflows — sequences of HTTP and async calls where trigger events initiate API operations. OSP-0008 defines triggers for agent workflows — executions that include LLM reasoning, MCP tool selection, human-in-the-loop pauses, conditional branching on LLM output, and execution log generation. A single production system may use both: an Arazzo webhook trigger initiates an API sub-workflow; an OSOP schedule trigger initiates the agent workflow that decides whether and how to call it. The trigger namespaces are adjacent layers with a defined composition point (OSOP `api` node with `subtype: arazzo`), not competing standards.*

Five trigger types (unchanged from yesterday): `webhook`, `schedule`, `queue`, `event`, `manual`.

**3. Write OSP-0015: Workflow Composition (Sub-workflow Invocation)**

Arazzo 1.1 has a `workflowId` step type for calling one Arazzo workflow from another. OSOP has no equivalent. This is a real adoption blocker for enterprise workflows that chain specialized agents. OSP-0015 defines two composition patterns:

```yaml
# Pattern 1: OSOP node calls an Arazzo workflow
- id: "book-travel"
  type: "api"
  subtype: "arazzo"
  name: "Run Travel Booking API Workflow"
  runtime:
    arazzo_workflow: "travel-booking.arazzo.yaml"
    workflow_id: "book-flight"
    inputs:
      origin: "${inputs.origin}"
      destination: "${inputs.destination}"

# Pattern 2: OSOP node calls another OSOP workflow
- id: "run-review"
  type: "agent"
  subtype: "workflow"
  name: "Run Code Review Sub-Workflow"
  runtime:
    osop_workflow: "ai-code-review.osop.yaml"
    inputs:
      repo: "${inputs.repo}"
      pr: "${inputs.pr}"
```

`.osoplog` records: the sub-workflow's `run_id`, its completion status, and its `duration_ms` as a single node record in the parent log. This makes execution records composable — a parent run's `.osoplog` contains a reference to each child run's `.osoplog` by `run_id`.

This proposal makes OSOP the natural composition format for enterprise multi-agent systems: individual agent workflows described in OSOP, composed into larger agent orchestrations also described in OSOP, with the full call tree captured in linked `.osoplog` files.

**4. Finalize HN Post for Monday 9am ET**

Update the post with:
- Arazzo 1.1 (not 1.0.1) as the current baseline
- New "actor-in-loop" row in the comparison table
- Opening paragraph: PwC + AWS ML team audit mandate framing
- Title options: *"Four AI workflow standards walk into 2026. Only one ships with a portable audit record."* or *"The AI workflow spec landscape in 2026: Arazzo, GitHub Agentic Workflows, Microsoft Conductor, and OSOP"*

### Monday Priority Stack (Execution Order)

| Time | Action | Why First |
|------|--------|----------|
| 9:00am ET | HN post | Timing-dependent. The window closes by noon. |
| 9:30am | AAIF submission | 45 days pending. Highest leverage single action. |
| 10:00am | SmartBear email | Arazzo 1.1 angle is fresh. Reply window 48–72h. |
| 11:00am | OpenClaw SOUL.md PR | First external PR. Unblocks external PR metric. |
| Afternoon | Community posts (4) | LangGraph, Temporal, Conductor, Arazzo Discussions. |
| Afternoon | Ecosystem map submissions (3) | DigitalApplied, StackOne, AI Agents Directory. |
| Afternoon | CNCF TAG Runtime comment | cncf/toc#1746 — audit mandate framing. |

---

## Evolution Ideas

### Spec Improvements

**Harden the `human` Node Audit Differentiation**

Add a spec note to `docs/node-types.md` under the `human` type section:

> *OSOP `human` nodes are the only workflow-spec-native way to record human intervention in an agent workflow execution. When a `human` node completes, the `.osoplog` records `node_id`, `status` (COMPLETED/TIMED_OUT/ESCALATED), `duration_ms` (wait time), and optional `approver_ref`. This produces a portable, framework-neutral audit record of every human-in-the-loop event. Competing workflow specifications (Arazzo actor-in-loop, LangGraph interrupts, Temporal signals) do not produce portable execution records of human events — they record the workflow state, not the approval event. `.osoplog` records both.*

This note turns a defensive observation into a spec-documented feature. It should be live before Arazzo ships its actor-in-loop feature.

**`tools:` Field Transport Annotation (OSP-0013 Preview)**

With MCP's July 28 final spec 64 days away, the `transport` annotation on `agent` node tool declarations should be drafted now:

```yaml
- id: "analyze"
  type: "agent"
  runtime:
    provider: "anthropic"
    model: "claude-sonnet-4-6"
    tools:
      - name: "web_search"
        transport: "stateless-http"   # MCP 2026-07-28 transport
        endpoint: "https://search.example.com/mcp"
      - name: "read_file"
        transport: "stdio"            # local process, backward compat default
```

Backward-compatible: `transport` defaults to `stdio` — all existing `.osop.yaml` files remain valid.

**`workflow_registry:` Self-Description Field (OSP-0014)**

Workflows published to a registry need canonical self-description. Proposed top-level field:

```yaml
osop_version: "1.0"
id: "ai-code-review"
workflow_registry:
  canonical_url: "https://registry.osop.ai/workflows/ai-code-review"
  published_at: "2026-05-24"
  maintainer: "platform-team@example.com"
```

The `canonical_url` is a pointer, not a dependency — workflows run without it. This field is the prerequisite for a workflow registry (Day 90+ milestone). Write the spec field now; build the registry later.

### Tooling Gaps (Sunday Priority)

| Tool | Priority | New Signal | Status |
|------|----------|------------|--------|
| OSP-0008 `trigger:` RFC (revised) | 🔴 Critical | Arazzo 1.1 shipped — reframe | **Write today** |
| OSP-0015: Workflow Composition | 🔴 Critical | Arazzo `workflowId` step type | **New — write today** |
| `osoplog-otel-mapping.md` | 🔴 Critical | Unblocks AG2 PR + 3 others | **Write today if not Saturday** |
| "OSOP + Arazzo 1.1" complement doc | 🔴 Critical | Arazzo 1.1 shipped May 19 | **New — publish dev.to tonight** |
| OSP-0005: Trust policy RFC | 🟠 High | AAIF submission prereq | Write today |
| `osop log-export --format otel-json` | 🔴 Critical | PwC + AWS ML endorsement | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph GA | Not built |
| `osop compile --from-markdown` | 🔴 Critical | AWS Strands + GitHub AW | Not built |
| `osop import-n8n` | 🟠 High | 9,752 community workflows | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 69 days; PwC + AWS endorsement | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |

### Ecosystem Plays

| Target | Action | Hook | Timing |
|--------|--------|------|--------|
| **dev.to** | Publish "OSOP + Arazzo 1.1: Complete Stack" | Arazzo 1.1 shipped last week | **Tonight** |
| **Hacker News** | Four-way comparison + audit mandate | Arazzo 1.1 as current baseline | **Monday 9am ET** |
| **AAIF** | Submit application | MCP + A2A + audit mandate alignment | **Monday 9:30am** |
| **SmartBear DevRel** | Email: "Arazzo 1.1 sequel" | Arazzo 1.1 = natural setup | **Monday 10am** |
| **OpenClaw** | SOUL.md `.osop.yaml` PR | First external PR | **Monday 11am** |
| **LangGraph Discussions** | OSOP + state persistence complement | LangGraph v0.4 specifics | Monday afternoon |
| **Temporal Community** | OSOP + durable execution | OpenAI SDK GA 2 months ago | Monday afternoon |
| **microsoft/conductor** | OSOP as audit layer | MAF v1.0 GA | Monday afternoon |
| **Arazzo GitHub Discussions** | OSP-0008 response post | Link to RFC, link to complement doc | Monday afternoon |
| **DigitalApplied** | Protocol map submission | Missing workflow definition layer | Monday afternoon |
| **StackOne** | "Portable Workflow Definition" category | Gartner + PwC + AWS | Monday afternoon |
| **AI Agents Directory** | Submit OSOP entry | Community-maintained | Monday afternoon |
| **CNCF TAG Runtime** | Comment on cncf/toc#1746 | Audit mandate framing | Monday afternoon |

---

## Top 3 Actions for This Week

### 1. Monday Execution Sprint — Strict Priority Order (Most Impactful)

Monday is the highest-leverage day in the project's history. 45 days of preparation converge. The risk is diffusion — starting 12 things and finishing zero. Strict priority order:

1. **9:00am ET — HN post.** Timing-dependent. Miss the window, wait another week.
2. **9:30am — AAIF submission.** 45 days pending. Highest leverage single action in the backlog. One accepted submission changes the project's governance trajectory permanently.
3. **10:00am — SmartBear email.** Arazzo 1.1 shipped last week — the "sequel to endpoints-to-intent" hook is at peak relevance right now, decays with each passing day.
4. **11:00am — OpenClaw SOUL.md PR.** Day 45 with zero external PRs. One merged PR breaks the streak and provides the social proof for all subsequent ecosystem PRs.
5. **Stop after 4 if needed.** Four completed actions on Monday matter more than 12 started ones.

### 2. "OSOP + Arazzo 1.1: The Complete Stack" + OSP-0008 (Today, Most Urgent)

Arazzo 1.1 shipped May 19. Every day without OSOP's response is a day where developers who discovered Arazzo 1.1 this week don't know OSOP exists as the complementary layer. The dev.to complement doc (400 words) ships tonight. OSP-0008 (revised preamble + 5 trigger types) ships as an RFC in the repo today. Together, these two artifacts give Monday's Arazzo Discussions post a concrete reference to link.

**Today deliverables:** `docs/strategy/2026-05-24-daily-brief.md` (this file), `docs/rfcs/OSP-0008-trigger.md` (revised), `docs/rfcs/OSP-0015-workflow-composition.md` (new), dev.to draft of complement doc.

### 3. Sharpen the OSOP Differentiation Argument Against Arazzo's Expansion (This Week)

Arazzo is explicitly planning MCP step types and actor-in-loop support. Before those ship, the OSOP differentiation must be documented in three places: (1) a spec note in `docs/node-types.md` on `human` node audit uniqueness, (2) the four-way comparison doc's new "Audit record?" column, (3) the SmartBear email's three-layer framing. These are not new content — they are precise insertions into existing content using the Arazzo 1.1 actor-in-loop detail as the sharpening signal.

---

## Adoption Metrics to Track

| Metric | Day 45 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 → **1 Monday (OpenClaw)** | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 → **3 Monday** | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog / content views | 0 → **dev.to tonight** | 10k | 50k |
| AAIF submission status | **Sending Monday 9:30am** | In review | Accepted |
| OSP proposals published | 0 → **2 today (OSP-0008r, OSP-0015)** | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| HN submission | **Monday 9am ET** | 1 post | 3 posts |
| Four-way comparison doc | dev.to tonight / HN Monday | 10k views | — |
| Community posts (LangGraph, Temporal, Conductor, Arazzo) | Draft today → **Monday** | Posted | 5+ replies each |
| SmartBear DevRel contact | **Monday (Arazzo 1.1 sequel hook)** | Replied | Blog published |
| `osoplog-otel-mapping.md` published | **Today** | — | Referenced externally |
| OSP-0008 RFC (revised) | **Today** | — | — |
| OSP-0015 RFC (workflow composition) | **Today** | — | — |
| "OSOP + Arazzo 1.1" complement doc | **dev.to tonight** | 5k views | — |
| `human` node audit note (spec) | **This week** | Published | Cited externally |

---

## Key Links (New Today)

- **Arazzo 1.1 Announcement (May 19, 2026)**: https://www.openapis.org/blog/2026/05/19/announcing-arazzo-specification-1-1
- **Arazzo Specification (current)**: https://spec.openapis.org/arazzo/latest.html
- **Arazzo GitHub Repository**: https://github.com/OAI/Arazzo-Specification
- **SmartBear: "From Endpoints to Intent" (Arazzo + MCP)**: https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo/
- **Arazzo + MCP — Nordic APIs**: https://nordicapis.com/why-ai-agents-need-deterministic-api-workflows/
- **Arazzo 1.0 Guide (APIScout, 2026)**: https://apiscout.dev/guides/openapi-arazzo-workflow-spec-2026
- **OpenAgents (A2A + MCP native)**: https://openagents.org/blog/posts/2026-02-23-open-source-ai-agent-frameworks-compared
- **LangGraph v0.4 context**: https://medium.com/data-science-collective/langgraph-vs-crewai-vs-autogen-which-agent-framework-should-you-actually-use-in-2026-b8b2c84f1229
- **Temporal + OpenAI Agents SDK GA**: https://temporal.io/blog/announcing-openai-agents-sdk-integration
- **Temporal Replay 2026 (serverless option)**: https://thenewstack.io/temporal-replay-2026-news/
- **AAIF / MCP donation (Anthropic)**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- **MCP July 28 Release Candidate**: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- **A2A v1.2 upgrade**: https://cloud.google.com/blog/products/ai-machine-learning/agent2agent-protocol-is-getting-an-upgrade
- **A2A at 150+ orgs**: https://www.programming-helper.com/tech/agent-to-agent-protocol-2026-google-a2a-standard
- **AgenticAPI OpenAPI extensions**: https://agenticapi.com/docs/openapi-extensions/
- **AI Workflow Orchestration Comparison 2026**: https://www.digitalapplied.com/blog/ai-workflow-orchestration-platforms-comparison
- **EU AI Act / OSOP compliance context**: https://decodethefuture.org/en/what-is-mcp-model-context-protocol/

---

*Previous brief: [`2026-05-23-daily-brief.md`](./2026-05-23-daily-brief.md)*
*Today is Sunday — last prep day before tomorrow's Monday sprint. The Arazzo 1.1 correction (shipped May 19, not "8 days away") changes the posture on OSP-0008 and the dev.to complement doc. Both ship today. Tomorrow at 9am ET the HN post goes live. The AAIF submission goes at 9:30am. Day 45 ends with two new spec proposals and a published complement doc. Day 46 launches with the heaviest execution sprint of the project.*
