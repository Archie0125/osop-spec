# OSOP Daily Strategy Brief — 2026-05-23

> **Day 44. Week 3, Saturday.**
> Saturday execution frame: no community posts (weekend reach is 40–60% of weekday), no HN submission (9am ET Monday is the target). Best Saturday investments: spec writing (OSP-0008, `osoplog-otel-mapping.md`), content drafts staged for Monday, and evolution ideas that require uninterrupted thinking. Three genuinely new signals since yesterday: MCP going stateless (release candidate published), SmartBear live content on Arazzo+MCP (new contact hook confirmed), and enterprise observability becoming a consulting-firm-grade mandate (PwC, AWS ML team).

---

## Action Tracker (Day 44)

| Action | Status | Days Pending | Saturday Note |
|--------|--------|--------------|---------------|
| **AAIF submission** | ⏳ Pending | **44** | If not sent Friday — draft, send Monday morning. |
| **HN submission (four-way comparison doc)** | ⏳ Pending | **12** | **Monday 9am ET — do not submit today.** Draft final copy. |
| **OpenClaw SOUL.md PR** | ⏳ Pending | **44** | Zero blockers. 45 min. Submit Monday. |
| **OSP-0008: `trigger:` RFC** | ⏳ Pending | **7** | **Write today. ~8 days to Arazzo 1.1.** |
| **`osoplog-otel-mapping.md`** | ⏳ Pending | **14** | **Write today. Unblocks 3+ downstream actions.** |
| **Four-way comparison doc** | ⏳ Pending | **12** | Finalize draft today. Publish dev.to Sunday, HN Monday. |
| **Protocol ecosystem map contacts** | ⏳ Pending | **1** | Monday outreach (weekday response rates). |
| **SmartBear DevRel email** | ⏳ Pending | **6** | New hook confirmed (see Intelligence). Send Monday. |
| **AGNTCon / MCPCon CFP abstract** | ⏳ Pending | ~10 days to deadline | Draft today, submit Monday. |
| **LangGraph community post** | ⏳ Pending | **13** | Draft today, post Monday. |
| **Temporal community post** | ⏳ Pending | **18** | Draft today, post Monday. |
| **CNCF TAG Runtime comment** | ⏳ Pending | **8** | Monday. |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | **44** | Write Sunday alongside OSP-0008 review. |
| **OSP-0007: Compliance Extensions RFC** | ⏳ Pending | **9** | 70 days to EU AI Act enforcement. |
| OSP-0004: A2A agent subtype | ⏳ Pending | **44** | Needs A2A v1.2 update. |
| AG2 examples PR | ⏳ Pending | **14** | Blocked on `osoplog-otel-mapping.md`. Write today. |

---

## Intelligence

### New Signals (2026-05-23)

**MCP Going Stateless — July 28, 2026 Release Candidate Published.**

The MCP specification published a release candidate with a headline change: MCP is now stateless at the protocol layer, with six Specification Enhancement Proposals (SEPs) working together to accomplish this. The final MCP specification publishes July 28, 2026. This is the largest architectural shift to MCP since its launch.

Implication for OSOP: The `tools:` field on OSOP `agent` nodes currently declares MCP tools available to an agent without specifying connection semantics. As MCP moves to stateless transport (HTTP-like request/response rather than persistent sessions), OSOP's tool binding field should evolve to declare stateless invocation semantics. Specifically:
- `tools:` should optionally specify `transport: "stateless-http"` (vs. `stdio` or `sse`)
- The `.osoplog` `ai_metadata` block should record the MCP transport mode used at execution time
- No breaking change required — `transport` can default to `stdio` for backward compatibility

This is OSP-0013: Stateless MCP Tool Binding. It is low-urgency but time-sensitive: establishing OSOP's stateless-MCP binding semantics *before* the July 28 final spec positions OSOP as a protocol that evolves with MCP, not behind it.

**MCP Apps — Servers Can Now Ship HTML UI Interfaces.**

Alongside the stateless architecture announcement, the MCP 2026 roadmap introduces MCP Apps: MCP servers can ship interactive HTML interfaces rendered in a sandboxed iframe inside MCP host applications. All UI-initiated actions go through the same audit and consent path as direct tool calls.

Implication for OSOP: This is a concrete specification for machine-generated UI inside agent workflows — exactly what OSOP's `human` node type is intended to describe. A `human` node with `subtype: "mcp-app"` could declare that the human interaction occurs through an MCP App interface rather than an external URL or inline form. This aligns OSOP's human-in-the-loop model with MCP's native UI layer. Add to spec backlog as a `human` node subtype expansion.

**SmartBear Published "From Endpoints to Intent: Designing AI Agent Workflows with Arazzo and MCP" — The Contact Hook Is Now Live.**

SmartBear's developer blog published a full article positioning Arazzo + MCP as the 2026 AI agent workflow stack. The article describes a two-layer model: MCP for tool connectivity, Arazzo for API workflow sequencing. This is live, public content that SmartBear's DevRel team has invested in.

The hook this creates for the SmartBear email is now concrete: *"You published 'From Endpoints to Intent' — MCP for tools, Arazzo for API workflows. That's two of three layers. The third layer — agent workflow definition with execution audit — is what `.osop` and `.osoplog` provide. The complete stack is MCP → Arazzo → OSOP. A joint post on the three-layer stack would be the natural sequel to your 'endpoints to intent' piece, and OSOP already has a working Arazzo `api` node binding for the bridge."*

This framing positions OSOP as the continuation of content SmartBear has already published — not a pitch for something unrelated. The email writes itself. Draft today, send Monday.

**PwC Published AI Observability Guide — Third Major Consulting Firm Validating the Enterprise Mandate.**

PwC (following N-iX and Atlan) published an enterprise AI observability guide for 2026. The content positions audit trails, decision tracing, and execution logging as non-negotiable enterprise AI requirements — not optional DevOps tooling. The framing: enterprises that cannot audit their agents will face regulatory, reputational, and operational risk.

Implication for OSOP: Three major consulting firms (PwC, N-iX, Atlan) plus AWS's own ML team are all documenting "audit trails from day one" as the enterprise AI imperative. This creates an enterprise pitch that requires no OSOP explanation:

> *PwC, N-iX, Atlan, and AWS's own ML team all cite agent audit trails as non-negotiable. `.osoplog` is the open-standard audit trail for AI agent workflows — framework-neutral, human-readable, OTel-compatible. Every agent workflow that runs against a `.osop.yaml` definition generates a portable `.osoplog.yaml` record that satisfies the audit requirement without locking you into Datadog, Honeycomb, or any proprietary platform.*

Use in: AAIF submission, SmartBear email, CFP abstracts, CNCF TAG Runtime comment, HN title.

**AWS ML Team Published "Real-World Lessons from Building Agentic Systems at Amazon" — Audit and Evaluation Cited.**

Amazon's own ML team published lessons from building agentic systems at scale. Key findings: evaluation and audit trail completeness are the two most critical enterprise requirements — more important than model selection or prompt design. The article distinguishes between enterprises that achieve "durable, repeatable production orchestration" and those "locked in cycles of failed pilots" — the differentiator is whether they have structured audit data.

Implication for OSOP: AWS is the most credible possible authority for the enterprise audience. "Amazon's ML team says audit trail completeness is the enterprise differentiator" is a more powerful citation than even the Gartner 60% stat for technical enterprise buyers. Add to the enterprise pitch deck, AAIF submission, and SmartBear email.

**LangGraph v1.0 GA Introduces the Open Agent Protocol — New Positioning Stack Entry.**

LangGraph v1.0 GA introduces the "open Agent Protocol" for cross-framework communication and hybrid deployment. This is distinct from A2A (which handles agent-to-agent routing across organizations) — the open Agent Protocol handles cross-framework communication within a single deployment. The positioning stack in the ROADMAP does not yet include this protocol.

Implication for OSOP: The positioning stack table needs a new row: `LangGraph Agent Protocol | Cross-framework agent communication | LangGraph | ✅ Live — v1.0 GA`. OSOP's relationship to this protocol: the LangGraph Agent Protocol defines *how* agents communicate; OSOP defines *what* the workflow containing those communications is, and records what happened. The same complement relationship as with A2A, but at the intra-deployment layer. LangGraph blog community post framing: "OSOP + LangGraph Agent Protocol: LangGraph handles the routing; OSOP handles the definition and audit record."

**Arazzo Tooling Ecosystem Cohering — Redocly, Speakeasy, APIDog, Specmatic, Bruno.**

Five major API tooling vendors now have Arazzo support in 2026: Redocly, Speakeasy, APIDog, Specmatic, and Bruno. Additionally, Arazzo is now explicitly referenced in Anthropic's MCP specification as the standard way to describe multi-step API workflows that MCP servers expose. The Arazzo tooling ecosystem is consolidating faster than expected.

Implication for OSOP: Every developer using Redocly, Speakeasy, or Specmatic for their API workflow documentation is a potential OSOP adopter for the agent workflow layer above it. An `osop-arazzo-bridge` tutorial (30 min to write) targeting Speakeasy or Redocly users is a concrete funnel:

> *"You've described your API workflow in Arazzo. Now describe the AI agent that *calls* that Arazzo workflow in OSOP. When it runs, `.osoplog` gives you the audit record that Arazzo doesn't."*

This tutorial requires no changes to OSOP — the `api` node with `subtype: arazzo` binding already exists in the spec. It's a documentation play.

### Continuing Signals (Carried)

- **Gartner 60% AI agent deployment failure stat** — enterprise pitch anchor. PwC + AWS now reinforce it.
- **Three ecosystem maps missing OSOP** — Monday outreach task (DigitalApplied, StackOne, AI Agents Directory).
- **OSP-0008 window: ~8 days** — Arazzo 1.1 + AsyncAPI expansion imminent.
- **A2A v1.2 milestone: 150+ orgs, 5 SDK languages** — OSP-0004 still pending.
- **EU AI Act enforcement: 70 days** (August 2, 2026).
- **AWS Strands Agent SOPs** — third Markdown-first format. `osop compile --from-markdown` still not designed.
- **n8n: 9,752 community workflows in proprietary format** — `osop import-n8n` unbuilt.
- **Microsoft Conductor + MAF v1.0** — community forming around audit-free YAML runner.
- **Temporal: OpenAI Codex + LangGraph in production** — `osop export-temporal` unbuilt.

---

## Threats

1. **MCP stateless transition (July 28) may prompt other spec authors to update their tool-binding fields first.** If Arazzo, CrewAI, or LangGraph publish a stateless-MCP binding before OSOP, OSOP's tool declaration field looks legacy. OSP-0013 is an 8-week runway but it should ship before July 28.

2. **SmartBear is already writing about the Arazzo+MCP stack.** If SmartBear's next article covers "the third layer" (agent workflow definition) and names a competitor (or names nothing, implying the layer doesn't exist), the collaboration window closes. The email sends Monday.

3. **Enterprise observability market is being captured by proprietary tools.** PwC's guide recommends platform vendors (Datadog, Honeycomb), not open standards. Each consulting firm recommendation that goes to a proprietary platform is a OSOP absence in the enterprise evaluation process. The `osoplog-otel-mapping.md` document is the counter-argument: "Use your existing OTel stack, just add `.osoplog` as the source."

4. **Arazzo tooling ecosystem (Redocly, Speakeasy, Specmatic) is consolidating.** If any of these vendors publishes a "complete agent workflow spec" guide that names Arazzo as the only standard needed, OSOP's positioning as the outer layer becomes invisible. The bridge tutorial is the fix — it must appear in Speakeasy or Redocly's ecosystem before their next content sprint.

5. **Day 44. Seventeen days to Day 60 targets.** Zero external PRs, zero ecosystem map appearances, zero GitHub stars. The Saturday brief is not the problem — the execution gap is. Today's spec work (OSP-0008, `osoplog-otel-mapping.md`) creates the artifacts that Monday's community actions reference.

---

## Opportunities

### Today (Saturday, May 23)

**1. Write OSP-0008 `trigger:` RFC (~2 hours)**

The most time-constrained spec work in the backlog. ~8 days before Arazzo 1.1 claims the `trigger:` namespace in the API-workflow context. The RFC defines 5 trigger types:

```yaml
trigger:
  type: "webhook"        # HTTP POST triggers workflow run
  url: "${env.WEBHOOK_URL}"
  secret_ref: "webhook-secret"
  
# or:
trigger:
  type: "schedule"
  cron: "0 9 * * 1"     # Every Monday 9am UTC
  timezone: "UTC"

# or:
trigger:
  type: "queue"
  provider: "sqs"        # or: pubsub, amqp, kafka
  queue_url: "${env.QUEUE_URL}"
  max_concurrency: 5

# or:
trigger:
  type: "event"
  source: "cloudevents"  # or: eventbridge, azure-event-grid
  filter:
    type: "com.github.push"

# or:
trigger:
  type: "manual"         # default — explicit invocation only
```

Critical positioning paragraph for the RFC preamble (to distinguish from Arazzo triggers):

> *Arazzo 1.x defines triggers for API workflows — sequences of HTTP calls where trigger events initiate a chain of API operations. OSP-0008 defines triggers for agent workflows — executions that include LLM reasoning, MCP tool calls, human-in-the-loop pauses, conditional branching, and execution log generation. The two trigger namespaces are complementary: an OSOP `webhook` trigger can initiate an agent workflow that includes an Arazzo-defined API sub-workflow as an `api` node. They are not competing; they are adjacent layers.*

After the RFC ships: add a `trigger:` row to the four-way comparison doc (Arazzo: ❌ API only; OSOP: ✅ agent + event + schedule); update the AAIF submission; add one line to the SmartBear email.

**2. Write `osoplog-otel-mapping.md` (~2 hours)**

Unblocks: AG2 PR, Red Hat Developer blog pitch, OTel blog post, Temporal community post. The document is a field-level mapping between `.osoplog.yaml` and the OpenTelemetry GenAI Semantic Conventions:

| `.osoplog` field | OTel GenAI attribute | Notes |
|---|---|---|
| `run_id` | `trace.id` | Map run_id to trace root |
| `workflow_id` | `gen_ai.system` | Workflow as system boundary |
| `node_records[].node_id` | `span.name` | One span per node |
| `node_records[].duration_ms` | `span.duration` | Direct mapping |
| `node_records[].ai_metadata.model` | `gen_ai.request.model` | |
| `node_records[].ai_metadata.prompt_tokens` | `gen_ai.usage.input_tokens` | |
| `node_records[].ai_metadata.completion_tokens` | `gen_ai.usage.output_tokens` | |
| `node_records[].status` | `span.status` | COMPLETED → OK; FAILED → ERROR |
| `node_records[].error` | `exception.message` | |

The document's conclusion: any `.osoplog.yaml` file can be converted to a valid OTel trace with zero proprietary tooling. `osop log-export --format otel-json` is the CLI command that does it. The mapping document is the spec; the CLI command is the implementation.

Why this matters on Saturday: AG2 PR cannot ship until this document exists (it's the referenced spec). Red Hat Developer blog pitch cites this document as the enterprise integration story. The OTel blog post is the top-of-funnel article that mentions it. Three high-leverage actions unblocked by one 2-hour Saturday writing session.

**3. Draft the Four-Way Comparison Doc Final Version (1 hour)**

Finalize with today's new additions before Sunday publish / Monday HN:

**New column to add:** "Addresses Gartner + PwC + AWS integration risk?"

| Standard | Workflow type | Portable execution record | Governance | Stateless MCP | Addresses audit mandate? |
|---|---|---|---|---|---|
| Arazzo 1.0.1 | API workflows | ❌ | OpenAPI Initiative | ❌ no binding | Partial — API only |
| GitHub Agentic Workflows | Agent/Markdown | ❌ | GitHub / Microsoft | N/A | No |
| Microsoft Conductor | YAML multi-agent | ❌ | MIT, no governance | ❌ no binding | No audit layer |
| **OSOP 1.0** | **Agent+API+CLI+Human** | **✅ `.osoplog`** | **Submitting to AAIF** | **OSP-0013 planned** | **Yes — built for it** |

New opening paragraph using today's intelligence:

> *PwC, N-iX, Atlan, and Amazon's own ML team all say the same thing in 2026: agent workflow audit trails are the enterprise non-negotiable. Four workflow specifications exist today. Only one ships with a portable execution record. Here's the comparison.*

**4. Draft Monday's Community Posts (1.5 hours)**

Four posts to draft today, publish Monday when engagement peaks:
- **LangGraph Discussions**: "OSOP + LangGraph Agent Protocol — definition layer + routing layer"
- **Temporal Community**: "OSOP + Temporal — portable workflow definition for durable execution"
- **microsoft/conductor Discussions**: "OSOP as the audit layer for Conductor workflows"
- **Arazzo GitHub Discussions**: "OSP-0008 proposal — agent workflow triggers (complementary to Arazzo API triggers)"

**5. New Spec Ideas Writeup: OSP-0012 (`secrets:`) and OSP-0013 (Stateless MCP)**

Two short spec proposals to document while thinking is fresh:
- **OSP-0012: `secrets:` reference field** — Portable secret declaration (env, vault, AWS Secrets Manager, Azure Key Vault). Unblocks every enterprise adoption attempt that involves API keys.
- **OSP-0013: Stateless MCP Tool Binding** — Updates `tools:` field semantics for MCP's July 28 stateless transport. `transport: "stateless-http"` optional on tool declarations. No breaking change.

---

## Evolution Ideas

### New Spec Proposals

**OSP-0013: Stateless MCP Tool Binding**

MCP's July 28 final spec makes the protocol stateless at the transport layer. OSOP's `tools:` field on `agent` nodes should reflect this with an optional `transport` key:

```yaml
- id: "analyze"
  type: "agent"
  runtime:
    provider: "anthropic"
    model: "claude-sonnet-4-6"
    tools:
      - name: "web_search"
        transport: "stateless-http"   # new — default: "stdio"
        endpoint: "https://search.example.com/mcp"
      - name: "read_file"
        transport: "stdio"             # local process, unchanged
```

`.osoplog` companion field: `ai_metadata.mcp_transport` records the actual transport used at execution time. Backward-compatible: `transport` defaults to `stdio`, so all existing `.osop.yaml` files remain valid.

**OSP-0014: `workflow_registry:` top-level field**

Workflows that are part of a shared registry need a way to self-describe their canonical location:

```yaml
osop_version: "1.0"
id: "ai-code-review"
workflow_registry:
  canonical_url: "https://registry.osop.ai/workflows/ai-code-review"
  published_at: "2026-05-23"
  maintainer: "platform-team@example.com"
  changelog_url: "https://registry.osop.ai/workflows/ai-code-review/changelog"
```

Makes OSOP workflows self-registering and discoverable without a central registry authority. The `canonical_url` is a pointer, not a dependency — workflows run without it. This field is the prerequisite for an OSOP workflow registry (Day 90+ milestone).

**`human` node `mcp-app` subtype**

MCP Apps (announced in 2026 MCP roadmap) allow MCP servers to ship HTML UI interfaces rendered in sandboxed iframes. An OSOP `human` node with `subtype: "mcp-app"` would declare:

```yaml
- id: "approve-step"
  type: "human"
  subtype: "mcp-app"
  name: "Review and Approve"
  runtime:
    mcp_server: "approval-server"
    app_id: "approval-ui"
    timeout_sec: 86400   # 24 hours for async approval
```

This makes OSOP the only workflow spec with native MCP App human-in-the-loop integration.

**`arazzo-cli` bridge tutorial: the Speakeasy/Redocly adoption funnel**

A 500-word tutorial showing:
1. An Arazzo workflow (API layer) defined in `travel.arazzo.yaml`
2. An OSOP wrapper (agent layer) that calls it via `subtype: "arazzo"` api node
3. arazzo-cli exposing the Arazzo workflow as an MCP tool
4. `.osoplog` recording the full agent + Arazzo execution

Target: publish to dev.to, reference in Speakeasy Discord, link in SmartBear email. Every Speakeasy or Redocly user who writes Arazzo workflows is a direct OSOP adoption target. The tutorial is the zero-friction on-ramp.

### Tooling Gaps (Saturday Focus)

| Tool | Priority | Today's Signal | Status |
|------|----------|----------------|--------|
| `osop log-export --format otel-json` | 🔴 Critical | PwC + AWS ML endorsement of audit tooling | Not built |
| OSP-0008 `trigger:` RFC | 🔴 Critical | 8 days to Arazzo 1.1 | **Write today** |
| `osoplog-otel-mapping.md` | 🔴 Critical | Unblocks 3+ downstream | **Write today** |
| OSP-0013: Stateless MCP binding | 🔴 Critical | MCP July 28 final spec | Proposal today |
| `osop compile --from-markdown` | 🔴 Critical | AWS Strands + GitHub AW | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph prod | Not built |
| `osop export-conductor` | 🔴 Critical | MAF v1.0 GA; community forming | Not built |
| `osop import-n8n` | 🟠 High | 9,752 community workflows | Not built |
| arazzo-cli bridge tutorial | 🟠 High | Redocly, Speakeasy, Specmatic cohering | Not built (tutorial) |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 70 days; PwC + AWS endorsement | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |

### Ecosystem Plays (Monday Queue)

| Target | Action | New Hook | Effort |
|--------|--------|----------|--------|
| **SmartBear DevRel** | Email re: three-layer stack joint post | "From Endpoints to Intent" sequel | 30 min |
| **DigitalApplied** | Add workflow definition category to protocol map | Missing layer framing | 15 min |
| **StackOne** | Add "Portable Workflow Definition" category | Gartner 60% + PwC + AWS | 15 min |
| **AI Agents Directory** | Submit OSOP entry | Community-maintained, accepts submissions | 10 min |
| **AAIF** | Submit application | Gartner + PwC + AWS mandate citations | 30 min |
| **LangGraph Discussions** | OSOP + Agent Protocol complement | Draft today | 30 min |
| **Temporal Community** | OSOP + durable execution | Draft today | 30 min |
| **microsoft/conductor Discussions** | OSOP as audit layer | Draft today | 30 min |
| **Speakeasy Discord** | arazzo-cli bridge tutorial share | Arazzo ecosystem cohering | 15 min |
| **OpenClaw** | SOUL.md `.osop.yaml` PR | First external PR | 45 min |
| **CNCF TAG Runtime** | Comment on cncf/toc#1746 | PwC + AWS audit mandate | 15 min |

---

## Top 3 Actions for Today (Saturday)

### 1. Write OSP-0008 `trigger:` RFC (2 hours)

The most time-constrained deliverable in the backlog. Eight days before Arazzo 1.1 claims the trigger namespace in the API-workflow context. Today is the right day: no community posts to send, no HN timing constraints, no Monday-morning deadlines. Two hours of focused spec writing. Publish to `docs/` in the osop-spec repo as a staged RFC. Once published, it becomes the reference document for the four-way comparison doc update, the AAIF submission addendum, and the SmartBear email hook. Five downstream updates from one 2-hour investment.

**Deliverable:** `docs/rfcs/OSP-0008-trigger.md` — 5 trigger types, complete YAML examples, positioning paragraph distinguishing agent-workflow triggers from Arazzo API-workflow triggers.

### 2. Write `osoplog-otel-mapping.md` (2 hours)

Fourteen days in the action tracker. This document unblocks AG2 PR, Red Hat Developer blog pitch, OTel community post, and Temporal community post — four high-leverage actions that cannot proceed without it. Saturday is the right day: the document requires focus, not external coordination.

**Deliverable:** `docs/osoplog-otel-mapping.md` — field-by-field mapping from `.osoplog.yaml` to OTel GenAI Semantic Conventions, with a `osop log-export --format otel-json` spec stub. Today's new signal (PwC + AWS ML team endorsing audit tooling as enterprise mandate) is the new opening paragraph: *"Amazon's ML team and PwC both cite execution audit as the enterprise AI non-negotiable. `osoplog-otel-mapping.md` shows how `.osoplog` becomes a valid OTel trace with zero proprietary tooling."*

### 3. Draft Monday's Community Posts + Finalize Four-Way Comparison Doc (1.5 hours)

Four community posts drafted today, published Monday for peak weekday engagement:
- **LangGraph Discussions** — "OSOP + LangGraph Agent Protocol: definition layer + routing layer."
- **Temporal Community** — "OSOP + Temporal: portable workflow definition for durable execution."
- **microsoft/conductor Discussions** — "OSOP as the audit layer for Conductor — the layer Conductor intentionally omits."
- **Arazzo GitHub Discussions** — "OSP-0008 proposal: agent workflow triggers as a distinct namespace from API workflow triggers."

Plus: finalize the four-way comparison doc with today's new column ("Addresses audit mandate?"), the new opening paragraph (PwC + AWS + Gartner), and the LangGraph Agent Protocol positioning stack update. Publish to dev.to Sunday evening. HN Monday 9am ET.

**Saturday total commitment: 5.5 hours. Output: 2 published RFCs, 4 community post drafts, 1 finalized comparison doc. All 5 are blocking or enabling Monday's community execution sprint.**

---

## Adoption Metrics to Track

| Metric | Day 44 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
|--------|----------------|-----------------------|-----------------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | 0 | 500 | 2,000 |
| External PRs submitted | 0 → **1 Monday (OpenClaw)** | 5 | 15 |
| External PRs merged | 0 | 10 | 25 |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 → **3 Monday** | 3 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog / content views | 0 | 10k | 50k |
| AAIF submission status | ⏳ Sending Monday | In review | Accepted |
| OSP proposals published | 0 → **1–2 today** | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| HN submission | **Monday 9am ET** | 1 post | 3 posts |
| Four-way comparison doc | dev.to Sunday / HN Monday | 10k views | — |
| Community posts (LangGraph, Temporal, Conductor, Arazzo) | Draft today → **Monday** | Posted | 5+ replies each |
| SmartBear DevRel contact | **Monday ("sequel" hook)** | Replied | Blog published |
| Protocol ecosystem map contacts | **Monday** | On all 3 | On 8+ |
| `osoplog-otel-mapping.md` published | **Today** | — | — |
| OSP-0008 RFC published | **Today** | — | — |

---

## Key Links (New Today)

- **MCP 2026 Roadmap**: https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/
- **MCP July 28, 2026 Stateless Release Candidate**: https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/
- **MCP Growing Pains Solved (stateless architecture detail)**: https://thenewstack.io/model-context-protocol-roadmap-2026/
- **SmartBear: "From Endpoints to Intent" (Arazzo + MCP)**: https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo/
- **PwC AI Observability for Enterprise**: https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-observability.html
- **AWS ML Team: Real-World Lessons from Agentic Systems at Amazon**: https://aws.amazon.com/blogs/machine-learning/evaluating-ai-agents-real-world-lessons-from-building-agentic-systems-at-amazon/
- **N-iX: AI Agent Observability (2026 Enterprise Standard)**: https://www.n-ix.com/ai-agent-observability/
- **Arazzo Specification (OAI)**: https://www.openapis.org/arazzo-specification
- **Arazzo Tooling Ecosystem (Speakeasy, Redocly, Specmatic)**: https://apiscout.dev/guides/openapi-arazzo-workflow-spec-2026
- **LangGraph v1.0 GA + Agent Protocol**: https://medium.com/data-science-collective/langgraph-vs-crewai-vs-autogen-which-agent-framework-should-you-actually-use-in-2026-b8b2c84f1229
- **Microsoft Conductor (GitHub)**: https://github.com/microsoft/conductor
- **Microsoft Agent Framework v1.0**: https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/
- **Microsoft MAF Workflows Docs**: https://learn.microsoft.com/en-us/agent-framework/workflows/
- **AAIF / MCP donation (Anthropic)**: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- **MCP "Why It Won" (mainstream infrastructure)**: https://thenewstack.io/why-the-model-context-protocol-won/
- **EU AI Act enforcement (August 2, 2026)**: https://decodethefuture.org/en/what-is-mcp-model-context-protocol/

---

*Previous brief: [`2026-05-22-daily-brief.md`](./2026-05-22-daily-brief.md)*
*Today is Saturday — write the things that survive the weekend. OSP-0008 RFC and `osoplog-otel-mapping.md` are the two artifacts that unlock Monday's community execution sprint. Community posts and ecosystem map contacts publish Monday for peak reach.*
*Day 44. 17 days to Day 60. One published RFC today converts the streak of zero deliverables.*
