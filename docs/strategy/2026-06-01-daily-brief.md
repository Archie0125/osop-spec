# OSOP Daily Strategy Brief — 2026-06-01

> **Day 53. Monday. Week 5 begins.**
>
> AGNTCon/MCPCon CFP deadline is today. OSP-0004 was targeted for June 1 — not published. `docs/proposals/` does not exist at Day 53. Week 4 closed with zero external deliverables — fourth consecutive week.
>
> New since May 30: jentic.com is building Arazzo-based workflow tooling (outreach target). Kong is using Arazzo for AI gateway features (enterprise validation). OpenAgents is the only framework with native A2A + MCP simultaneously (tier-1 integration example target). Google ADK 1.0 GA confirmed (OSP-0004 ADK example ready to write). "Agent-S" arxiv paper validates SOP → workflow thesis. Anthropic's MCP spec now formally cross-references Arazzo as the multi-step workflow standard — establishing the MCP → Arazzo → OSOP stack chain. MCP RC: 57 days. EU AI Act: 62 days.

---

## Action Tracker (Day 53 — Monday Priority Order)

| Action | Status | Days Pending | Today? |
|--------|--------|--------------|--------|
| **AGNTCon/MCPCon CFP submission** | 🔴 **DEADLINE TODAY** | 8 | **Yes — morning** |
| **Four-way comparison doc → HN** | ⏳ Pending | 21 | **Yes — 9am ET** |
| **awesome-ai-agents-2026 PRs ×3** | ⏳ Pending | 7 | **Yes — afternoon** |
| **OpenAgents integration example PR** | 🆕 New | 0 | **Yes — evening** |
| **SmartBear DevRel email** | ⏳ Pending | 15 | **Yes — send today** |
| **IETF AAT author (Sharif) contact** | ⏳ Pending | 2 | **Yes — 20 min** |
| **CNCF TAG Runtime comment** | ⏳ Pending | 15 | **Yes — 10 min** |
| **`osoplog-otel-mapping.md`** | 🔴 Not in repo | 23 | Write today/tomorrow |
| **OSP-0018: tamper-evidence** | 🔴 Not in repo | 2 | This week |
| **OSP-0008: `trigger:` RFC** | 🔴 Not in repo | 16 | This week |
| **OSP-0013: MCP stateless annotation (revised)** | 🔴 Not in repo | 7 | This week |
| **OSP-0015: Workflow Composition** | 🔴 Not in repo | 8 | This week |
| **OSP-0016: MCP Apps `human` subtype** | 🔴 Not in repo | 7 | This week |
| **OSP-0004: A2A agent subtype** | 🔴 Not in repo (was due today) | 53 | This week |
| **OSP-0007: Compliance Extensions** | 🔴 Not in repo | 18 | Next week |
| **OpenClaw SOUL.md PR** | ⏳ Pending | 53 | This week |
| **AAIF submission** | ⏳ Unconfirmed | 53 | Confirm today |
| **Arazzo 1.1 complement blog post** | ⏳ Pending | 8 | This week |
| **jentic.com outreach** | 🆕 New | 0 | After Arazzo post |
| **AutoGen migration guide** | ⏳ Pending | 2 | This week |
| **OSP-0006: `skill_ref` RFC** | ⏳ Pending | 28 | — |
| **OSP-0005: Trust policy RFC** | ⏳ Pending | 53 | — |
| **OSP-0017: Cost governance** | ⏳ Pending | 7 | — |
| **AG2 examples PR** | ⏳ Pending | 23 | After otel-mapping |
| **LangGraph bridge doc** | ⏳ Pending | 23 | — |

---

## Intelligence

### New Signals (Since May 30)

---

**jentic.com: Arazzo Workflow Tooling [NEW OUTREACH TARGET]**

jentic.com published "Building Reliable API Workflows with Arazzo" — actively building tooling on Arazzo. This is a tier-1 outreach target for the OSOP complement story: they own the API call sequencing layer; OSOP adds the agent reasoning, human approval, and execution audit layer above it.

Pitch angle: "Arazzo is the recipe card. OSOP is the kitchen journal." Cold email *after* the Arazzo complement blog post publishes (this week). Attach the post as the credibility artifact.

---

**Kong AI Gateway Using Arazzo [ENTERPRISE SIGNAL]**

Kong is building AI gateway features that use Arazzo documents to guide agent behavior — a tier-1 enterprise infrastructure player standardizing on Arazzo for the API orchestration layer. Enterprise AI teams using Kong will have Arazzo documents. OSOP is the next layer: the workflow format for the AI reasoning and human decisions that *invoke* those Arazzo API sequences.

Outreach angle: DevRel or developer blog pitch — "Kong + Arazzo handles your API calls. OSOP handles the workflow that decides when, why, and by whom those calls are made, and the audit log that proves it." Pitch after Arazzo blog post publishes.

---

**OpenAgents.org: Only Native A2A + MCP Framework [ELEVATED TO CRITICAL]**

OpenAgents is publicly positioning as the only framework with simultaneous native support for MCP (tool connectivity) and A2A (agent routing). It is directly comparing itself to LangGraph, CrewAI, and AutoGen in 2026 framework comparisons.

This makes it the strongest integration example target OSOP has:
- Aligns with OSP-0004 (A2A agent subtype) — the most overdue critical proposal
- Aligns with OSP-0013 (MCP transport annotation)
- A working OSOP workflow for an OpenAgents multi-agent scenario is the cleanest non-invasive PR possible

Action (today): Create `openagents/multi-agent-research.osop.yaml` in osop-examples. Standalone value: a workflow example developers can run. OSOP is incidental. Submit as PR to osop-examples.

---

**Google ADK 1.0 GA [A2A ECOSYSTEM SIGNAL]**

Google ADK (Agent Development Kit) 1.0 is GA. The three hyperscaler examples required for OSP-0004 are now ready to write: **Google ADK**, Azure AI Foundry, Amazon Bedrock Agent. OSP-0004 can ship this week with all three examples.

---

**Anthropic MCP Spec Cross-References Arazzo [COMPLEMENT STORY ANCHOR]**

Anthropic's MCP specification formally cross-references Arazzo as the canonical way to describe multi-step workflows MCP servers expose. This creates a formal stack chain:

> MCP defines tool connectivity → Arazzo (MCP-referenced) defines API call sequences → OSOP wraps both in AI-native workflows with execution audit

This is the most defensible positioning statement OSOP has had. Use it in: AAIF submission, Arazzo complement post, CNCF TAG Runtime comment, all outreach.

---

**"Agent-S: LLM Agentic Workflow to Automate SOPs" (arxiv 2503.15520) [ACADEMIC VALIDATION]**

Peer-reviewed paper mapping SOP → agentic workflow translation — OSOP's founding thesis. Citable in the manifesto, AAIF submission, and any blog post as academic validation of the problem space.

Reference: https://arxiv.org/abs/2503.15520

---

**OpenAI WebSockets in Responses API [STREAMING SEMANTICS SIGNAL]**

OpenAI validated that real-time streaming agentic workflows are production requirements. This directly supports `runtime.streaming: true` + `runtime.stream_to:` on OSOP `agent` nodes — currently in the spec backlog as "Streaming semantics."

---

**Nordicapis: "Why AI Agents Need Deterministic API Workflows" [POSITIONING SIGNAL]**

Nordicapis published an article framing the deterministic workflow problem in exactly OSOP's terms — without mentioning OSOP. Use this article as the evidence anchor in: CNCF TAG Runtime comment (today), AAIF submission narrative, Arazzo complement post.

---

### Continued Signals (Updated Counts)

- **MCP RC: 57 days** to final spec (July 28). OSP-0013 publication deadline. Stateless protocol core + Tasks extension change the node model.
- **EU AI Act: 62 days** to enforcement (August 2). OSP-0007 + OSP-0018 unbuilt. No CLI compliance check exists.
- **AutoGen in maintenance mode**: 2-week migration guide window. Other sources are already publishing LangGraph/CrewAI migration content.
- **IETF draft-sharif-agent-audit-trail-00**: Expires September 29. Contact author today — 20 minutes of asymmetric leverage.
- **Arazzo 1.2**: MCP step types on roadmap. OSP-0013 must publish before Arazzo 1.2 ships.
- **SKILL.md + OSSA**: Both now appearing in "AI agent workflow standard 2026" searches. Competitive positioning page needed.
- **`docs/proposals/`**: Does not exist. Day 53. Zero proposals shipped. This is the highest-credibility gap in the repo.

---

## Threats

1. **CFP closes today**: Missing AGNTCon/MCPCon is a zero-cost action with high downstream ROI — conference appearance, content reuse, AAIF credibility signal. Submit this morning.

2. **OpenAgents defines its own format before OSOP publishes an example**: OpenAgents is the only A2A + MCP native framework. If they publish their own workflow documentation guide first, they define the format. An OSOP example PR to osop-examples today pre-empts this.

3. **Arazzo 1.2 MCP step types before OSP-0013**: 57 days. Once Arazzo 1.2 ships MCP steps, the Arazzo tooling ecosystem (SmartBear, Speakeasy, Zuplo) integrates them. OSP-0013 must define OSOP's MCP node model before Arazzo 1.2 locks in the competing spec.

4. **AutoGen migration traffic saturating in ~2 weeks**: OSOP's migration guide competes against LangGraph and CrewAI guides already being published. The window is narrowing.

5. **EU AI Act in 62 days with no OSP-0007**: The IETF AAT draft will be the first available compliance standard. If OSOP doesn't ship OSP-0007 before August 2 enforcement, OSP-0007 arrives after the compliance wave.

6. **Day 53, zero proposals, `docs/proposals/` missing**: Every evaluator — framework maintainer, enterprise architect, AAIF reviewer, IETF author — visits osop-spec and sees a project that has published zero proposals in 53 days. The RFC process is a promise, not a practice. Three proposals this week transforms this completely.

---

## Opportunities

### Spec Improvements

- **`agent_def_url:` on `agent` nodes** (15-min change): One field in `docs/node-types.md` that links agent nodes to external definitions (Oracle agent-spec, SKILL.md, A2A Agent Cards, Google ADK). Makes OSOP the orchestration layer that *consumes* every agent-definition standard rather than competing with them.

- **OSP-0009: `retry:` on edges**: Temporal in production at OpenAI Codex + LangGraph v0.4 + Replit Agent validates retry semantics at the workflow layer. `retry: { max_attempts: 3, backoff: "exponential", on_error: ["timeout", "rate_limit"] }` on edges maps directly to Temporal retry policies. Makes OSOP the human-readable definition layer for Temporal workflows.

- **`state_schema:` at workflow level**: LangGraph v0.4's typed state + human-in-the-loop checkpoints is the pattern 34% of enterprise teams are adopting. Adding `state_schema:` in JSON Schema format makes OSOP workflows portable to LangGraph with zero migration.

- **Streaming semantics**: `runtime.streaming: true` + `runtime.stream_to: "next-node-id"` on `agent` nodes. OpenAI WebSockets + MCP Tasks extension together validate this as a production requirement.

- **OSP-0013 revised scope**: Stateless MCP core (no persistent session assumption) + Tasks extension (`task_lifecycle: "inline" | "poll" | "cancel"`). The `.osoplog` must record task handle lifecycle for polled tasks, not just a single call timestamp.

### Tooling Gaps

- **OSOP Playground (browser)**: The gap between "heard about OSOP" and "tried OSOP" is currently: install Python + `pip install osop`. A browser playground collapses this to zero. Fastest path to the first 100 GitHub stars.
- **`osop log-export --format ietf-aat`**: IETF AAT expires September 29. This tool is the concrete credibility artifact for the Sharif contact.
- **GitHub Action: validate + log-validate**: Every repo that adds it is a public endorsement. Single-file GitHub Action. Zero-friction adoption.
- **`osop import-autogen`**: 100K+ users in migration mode. 2-week window before the migration wave crests.
- **`osop export-temporal`**: OpenAI Codex + LangGraph v0.4 run on Temporal. OSOP → Temporal workflow definition bridge.

### Ecosystem Plays

- **OpenAgents**: PR to osop-examples — `openagents/multi-agent-research.osop.yaml`. Today.
- **jentic.com**: Cold email after Arazzo blog post publishes. Complement story.
- **Kong**: DevRel blog pitch after Arazzo blog post. Enterprise tier.
- **Nordicapis**: Comment referencing OSOP as the solution to their deterministic workflow problem.
- **CNCF TAG Runtime (cncf/toc#1746)**: Comment today — Nordicapis article as evidence, OSOP as the answer. 10 minutes. 15 days overdue.
- **arxiv Agent-S authors**: Email positioning OSOP as the standardization layer for their SOP → workflow research.
- **SmartBear**: Email today — Arazzo 1.1 AsyncAPI hook. "OSOP + Arazzo = full stack." Guest post pitch.

---

## Top 3 Actions for This Week (Week 5)

### 1. Break the Four-Week External Drought — Today (June 1)

Four weeks of zero external deliverables ends today.

- **Morning**: AGNTCon/MCPCon CFP submission + HN post (four-way comparison, 9am ET)
- **Midday**: SmartBear email + IETF Sharif contact + CNCF TAG Runtime comment (45 min total)
- **Afternoon**: awesome-ai-agents-2026 PRs ×3
- **Evening**: OpenAgents integration example PR to osop-examples

Success criterion: CFP submitted + HN posted + 4 external actions + 3 external PRs by midnight June 1.

### 2. Create `docs/proposals/` with Three Proposals by Thursday June 4

`docs/proposals/` does not exist. This is the most damaging credibility gap in the repo at Day 53. Three proposals by Thursday transforms OSOP from "a spec with promises" to "an active RFC-driven project."

Priority order:
1. **OSP-0018** (45 min): `.osoplog` tamper-evidence — SHA-256 + RFC 8785, IETF AAT alignment. Shortest, highest compliance credibility per hour.
2. **OSP-0008** (2 hr): `trigger:` RFC — CrewAI Flows in production validates the design exactly.
3. **OSP-0013** (2 hr, revised): Stateless MCP core + Tasks extension lifecycle — 57-day publication deadline.

Target: 3 proposals committed to `docs/proposals/` by end of Thursday June 4.

### 3. Publish `osoplog-otel-mapping.md` + Arazzo Complement Post by Wednesday June 3

These two documents unlock 8+ downstream actions that have been blocked for weeks:

- **`osoplog-otel-mapping.md`**: Four differentiation angles (OTel, IETF AAT, Oracle gap, Arazzo 1.1 complement). Unlocks SmartBear guest post, Sharif follow-up, Waxell outreach, Red Hat pitch, AG2 PR.
- **Arazzo complement blog post** (dev.to): Arazzo = API plane, OSOP = agent plane. MCP → Arazzo → OSOP stack chain. Makes jentic.com and Kong outreach credible.

Both are drafted or near-drafted. The bottleneck is shipping.

---

## Adoption Metrics to Track

| Metric | Day 53 (Jun 1) | Day 60 (Jun 8) | Day 90 (Jul 8) |
|--------|----------------|----------------|----------------|
| GitHub stars (osop-spec) | 0 | 200 | 500 |
| Combined ecosystem stars | ~1 | 500 | 2,000 |
| External PRs submitted | 0 → **4 today** | 5+ | 15 |
| External PRs merged | 0 | 5 | 25 |
| `docs/proposals/` exists | **No** | **Yes (3+ proposals)** | Yes (8+) |
| OSP proposals published | 0 → **3 by Thu** | 3+ | 8+ |
| Repos with `.osop` files | 0 | 20 | 50 |
| Protocol ecosystem map appearances | 0 → **3 today** | 5 | 8 |
| PyPI downloads | — | 2k/mo | 10k/mo |
| NPM downloads | — | 2k/mo | 10k/mo |
| Blog/content views | 0 | 10k | 50k |
| AAIF submission | Unconfirmed | In review | Accepted |
| CFP submissions | 0 → **1 today** | 3 | 1 accepted |
| EU AI Act countdown | **62 days** | 55 days | **0 (enforced Aug 2)** |
| MCP RC countdown | **57 days** | 50 days | 18 days |

---

*Previous brief: [`2026-05-30-daily-brief.md`](./2026-05-30-daily-brief.md)*  
*Day 53, Monday, Week 5. The drought ends today. CFP → HN → PRs → proposals. In that order.*
