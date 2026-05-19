# OSOP Daily Strategy Brief — 2026-05-19

> **Day 40. Week 3, Tuesday.**
> The Week 3 Monday window (HN, Conductor Discussions, AAIF submission) either shipped yesterday or it didn't. This brief does not recount it. Today's deliverables are assigned by the Week 3 plan: OSP-0008 `trigger:` RFC and `osoplog-otel-mapping.md`. These two outputs unlock 3+ downstream ecosystem plays and preempt Arazzo 1.1. New signals today validate the OSOP thesis from two unexpected directions: Salesforce confirms enterprise workflow chaos is a named problem with a product behind it; Honeycomb confirms agent observability is a confirmed category going proprietary. Both are OSOP territory. A2A v1.2 adds cryptographic trust to agent cards, directly updating OSP-0004 and OSP-0005 scope.

---

## Action Tracker (Day 40)

| Action | Status | Days Pending | Today's Note |
|--------|--------|--------------|------------------|
| **`osoplog-otel-mapping.md`** | ⏳ Pending | **10** | **TODAY — Blocks AG2 PR, Red Hat pitch, OTel blog. Write and publish.** |
| **OSP-0008: `trigger:` RFC** | ⏳ Pending | **3** | **TODAY — 2-week window before Arazzo 1.1 AsyncAPI. Write and publish.** |
| AAIF submission | ⏳ Pending | **40** (if not sent Mon) | If not sent yesterday: send today. No new prep needed. |
| Four-way comparison doc → HN | ⏳ Pending | **8** (if not posted Mon) | If not posted: publish to dev.to today, HN Thursday. |
| microsoft/conductor Discussions | ⏳ Pending | **5** | Window has passed. Post if still additive. Low priority. |
| OpenClaw PR | ⏳ Pending | **40** | Wednesday. 45 min. |
| CNCF TAG Runtime comment | ⏳ Pending | **4** | **15 min. TODAY.** |
| OSP-0004: A2A agent subtype | ⏳ Pending | **40** | Update for A2A v1.2 signed agent cards before publishing. |
| OSP-0005: Trust policy | ⏳ Pending | **40** | Update for A2A v1.2 signed cards. `require_signed_card: true` field. |
| OSP-0006: `skill_ref` RFC | ⏳ Pending | **16** | Update for A2A capability negotiation. |
| **OSP-0007: Compliance Extensions RFC** | ⏳ Pending | **5** | 74 days to EU AI Act. Write this week. |
| AG2 examples PR | ⏳ Pending | **10** | Blocked on `osoplog-otel-mapping.md`. **Unblocks today.** |
| **`osop import-strands-sop` proposal** | ⏳ Pending | **1** | **Post to strands-agents/agent-sop TODAY. 30 min.** |
| **`osop import-agent-spec` proposal** | ⏳ Pending | **4** | Post to oracle/agent-spec today. 30 min. |
| **Salesforce Agentforce Ops response** | ⏳ New | **0** | **NEW — 30 min. Raise portable audit trail question today.** |
| `osop compile --from-markdown` design doc | ⏳ Pending | **1** | Wednesday. |
| AGNTCon / MCPCon CFP abstract | ⏳ Pending | ~13 days | Wednesday-Thursday. |
| VoltAgent integration example | ⏳ Pending | **7** | This week. |
| Temporal community post | ⏳ Pending | **14** | Thursday. |
| LangGraph community post | ⏳ Pending | **9** | Thursday. |
| n8n ecosystem play | ⏳ Pending | **7** | This week. |
| SmartBear DevRel outreach | ⏳ Pending | **2** | Email Thursday. |
| README audit-trail reframe | ⏳ Pending | **12** | 30 min. Today if time allows. |

---

## Intelligence

### New Signals (2026-05-19)

**Salesforce launches Agentforce Operations — enterprise workflow chaos is now a named product problem.**
Salesforce launched Agentforce Operations (VentureBeat, May 19) — a platform explicitly designed to fix "the workflows breaking enterprise AI." The launch framing: enterprise AI teams are failing because workflows weren't built for agents; tasks fail and handoffs break as agents push into back-office systems. Salesforce's answer is centralized orchestration that routes tasks to specialized agents.

What Agentforce Operations provides: task routing, agent specialization, workflow repair. What it does not provide: a portable, vendor-neutral execution audit log. Every enterprise that deploys Agentforce Operations will eventually need to answer: "What did the agent do, in a format our auditors can read, regardless of which orchestrator ran it?" That is `.osoplog`. Opportunity: a 30-minute developer community post — not pitching OSOP, but raising the audit trail question in any Agentforce Operations developer thread. The Salesforce developer community is 10M+.

**Honeycomb launches "Agent Timeline" — proprietary observability is filling the gap OSOP should own.**
Honeycomb introduced Agent Timeline (multi-agent workflow view) and rebuilt their Canvas workspace as a dual-purpose chat and autonomous agent interface. This is a specific, named, production-ready proprietary observability product for multi-agent workflows. The threat: if Honeycomb, Datadog, and Dynatrace each build their own agent observability, the window for a standard portable execution log format narrows. The opportunity: each vendor that builds proprietary agent observability independently validates the category. OSOP's `osoplog-otel-mapping.md` positions `.osoplog` as the vendor-neutral source of truth that feeds any observability platform without lock-in. Publish today. Reference Honeycomb as the consumer in the document framing.

**A2A Protocol reaches v1.2 — signed agent cards with cryptographic domain verification.**
A2A v1.2 introduces signed Agent Cards using cryptographic signatures — agents now have verifiable identities, not just claimed identities. Direct implications:
- **OSP-0004 (A2A agent subtype)**: Must reference v1.2 signed card format before publishing. `osop export-agent-card` must emit v1.2 cards.
- **OSP-0005 (Trust policy)**: `trust_policy:` on agent nodes now has a concrete, standardized enforcement mechanism: `require_signed_card: true` validates against A2A v1.2 `AgentCard.signature` before execution. This makes OSOP trust enforcement verifiable and auditable — not just declarative.
- **OSP-0006 (`skill_ref`)**: A2A v1.2 adds dynamic capability negotiation. `skill_ref:` should support `negotiation: dynamic` with an A2A capability query at runtime.

**Google ADK 1.0 GA: Python, Go, Java, TypeScript — cross-language agent portability confirmed.**
ADK 1.0 (Google Cloud Next 2026) runs across four language runtimes with zero semantic drift. An agent prototyped in Python can deploy to a Java backend with no logic changes. OSOP workflow definitions are language-agnostic YAML — the natural portable workflow specification format for any ADK language binding. Opportunity: an ADK multi-language `.osop` example in osop-examples showing a single workflow definition running across ADK Python, Go, and Java. 60-minute osop-examples PR. Wednesday.

**Notion Developer Platform: Workers + External Agent APIs for multi-step workflows.**
Notion launched serverless Workers and External Agent APIs for custom multi-step automated workflows. Another major SaaS platform building proprietary agent workflow connectors without a portable audit format. Adds to the pattern: as the number of platforms grows, OSOP's portable execution log becomes more valuable, not less.

**Google Cloud Next 2026 — A2A v1.2 includes capability negotiation.**
From Google I/O developer updates: A2A now supports dynamic capability negotiation — agents can advertise and query capabilities at runtime rather than relying solely on static Agent Cards. Maps directly to OSP-0006 `skill_ref:` — OSOP's mechanism for linking agent nodes to capability manifests now has a natural A2A interoperability surface. OSP-0006 spec draft should reference A2A capability negotiation explicitly before publishing.

### Continuing Signals (carried)

- **AWS Strands Agent SOPs** — third Markdown-first agent workflow format. `osop compile --from-markdown` design doc due Wednesday.
- **Arazzo 1.1 + AsyncAPI** — 2-week window remaining to publish OSP-0008 `trigger:` RFC first.
- **EU AI Act: 74 days** (August 2, 2026) — OSP-0007 Compliance Extensions RFC this week.
- **Microsoft Conductor** — Day 5 post-launch. Community vocabulary is setting. Window has largely passed.
- **Temporal** — OpenAI Codex + LangGraph in production. `osop export-temporal` unbuilt.
- **n8n: 150K+ stars** — largest single ecosystem play not yet started.
- **A2A 1-year milestone: 150+ orgs, 22K+ stars, 5 SDK languages** — OSOP adjacent layer (workflow definition + execution audit) remains unoccupied in AAIF stack.

---

## Threats

1. **Proprietary agent observability is filling the gap OSOP should own.** Honeycomb Agent Timeline (May 19), Datadog agent tracing, Temporal built-in monitoring — every major observability vendor is building proprietary agent workflow views. The longer `osoplog-otel-mapping.md` stays unwritten, the more developers assume OTel + vendor tooling is the only answer. Today is the publishing deadline.

2. **Salesforce creates a vendor-lock audit narrative.** Enterprises adopting Agentforce Operations will hear Salesforce's answer to audit and governance — which is Salesforce-native. Every enterprise that deploys Agentforce Operations without hearing about `.osoplog` is a harder OSOP adoption later. The 30-minute community post is low-cost, high-reach.

3. **Arazzo 1.1 + AsyncAPI event-driven namespace is 2 weeks closer.** OSP-0008 `trigger:` RFC is on Day 3. Each day without publishing is one day closer to Arazzo 1.1 claiming the event-driven agentic workflow namespace. Today is the write-and-publish day.

4. **A2A v1.2 requires spec updates before publishing OSP-0004 and OSP-0005.** Both proposals were drafted targeting v1.0 capabilities. Publishing them without v1.2 updates (signed cards, capability negotiation) would make OSOP look behind on the protocol it claims to integrate with. Update before publishing this week.

5. **Day 40 with 0 external presence — the compounding threat.** Day 60 targets (200 stars, 20 repos, 3 protocol map appearances) are 20 days out. Zero trajectory in any metric requires a nonzero starting point this week. Three consecutive weeks of "today is the day" without execution is the pattern to break. The first published doc (either `osoplog-otel-mapping.md` or OSP-0008) breaks it.

---

## Opportunities

### Today (Tuesday May 19)

**1. Publish `osoplog-otel-mapping.md` + submit AG2 PR (2–2.5 hrs)**

Day 10 pending. Unlocks AG2 examples PR, Red Hat Developer blog pitch, OTel integration blog — three ecosystem plays for one document. Honeycomb's Agent Timeline launch today gives this document immediate news relevance: "OSOP `.osoplog` is the vendor-neutral execution record; Honeycomb, Datadog, or any OTel-compatible tool is the consumer. You're not locked into any vendor's agent timeline — you own the record."

Document structure:
- Introduction: why portable `.osoplog` → OTel GenAI matters (and why today's Honeycomb launch illustrates it)
- Field mapping table: `.osoplog` field → OTel GenAI semantic convention (`gen_ai.*`, `workflow.*` attributes)
- 30-line Python snippet: read `.osoplog`, emit OTel spans
- Compatible consumers: Honeycomb, Datadog, Grafana, New Relic, Temporal monitoring

Publish to `docs/osoplog-otel-mapping.md`. Submit AG2 PR same afternoon.

**2. Publish OSP-0008 `trigger:` RFC as GitHub Discussion (3 hrs)**

Day 3 pending; 2-week window. Full spec draft in May 17 brief. Publish as osop-spec GitHub Discussion with "RFC" label.

`trigger:` types to define:
- `webhook` — event-driven, HTTP POST payload
- `schedule` — cron expression
- `queue` — SQS, Pub/Sub, Kafka topic
- `event` — CloudEvents 1.0 standard
- `manual` — explicit CLI or API invocation

```yaml
osop_version: "1.1"
id: "pr-review-on-open"
name: "AI Review on PR Open"
trigger:
  type: "webhook"
  source: "github"
  event: "pull_request.opened"
  filter: 'payload.base.ref == "main"'
nodes:
  - id: "review"
    type: "agent"
    ...
```

With `trigger:`, an OSOP file becomes a complete autonomous agent specification: not just what the workflow does, but when it starts. No competing standard provides both in one portable YAML file.

**3. Salesforce + strands-agents community presence (1 hr combined)**

Two 30-minute plays that ride today's news cycle:

*Salesforce Agentforce Operations developer thread:*
> "The workflow routing and agent specialization in Agentforce Operations solve a real problem — multi-agent handoffs breaking in production. One thing enterprise teams will hit next: the portable audit trail. When an Agentforce workflow runs, what's the framework-neutral record of what happened — readable by your security team, your EU AI Act compliance officer, and your Datadog dashboard? `.osoplog` is an open format being submitted to AAIF governance that solves exactly this, as a complement to any orchestrator. Happy to share."

*strands-agents/agent-sop GitHub Discussion:*
> Propose `osop import-strands-sop` — a bridge tool that ingests a Strands Agent SOP Markdown file and emits an `.osop.yaml` for teams needing schema validation, execution audit logs, or EU AI Act Article 12 compliance. Additive-only framing. Zero adoption ask from their users.

**4. CNCF TAG Runtime / cncf/toc#1746 comment (15 min, TODAY)**

Day 4. 15-minute action. Propose OSOP as the portable workflow definition + execution audit format for the CNCF Cloud Native AI Working Group. Link `docs/SPEC.md` and `schema/osoplog.schema.json`. Reference OTel GenAI alignment.

### This Week Remaining (Wed–Fri)

**5. `osop compile --from-markdown` design doc (Wednesday, 2 hrs)**

Design `.osop.md` — Markdown with YAML front-matter that compiles to `.osop.yaml`. Publish `docs/proposals/osop-markdown-authoring.md`. Three-signal confirmation (GitHub AW, AWS Strands, AGENTS.md/CLAUDE.md) makes this the structural response to the Markdown-first format war.

**6. OpenClaw SOUL.md PR (Wednesday, 45 min)**

Day 40. The first external PR. SOUL.md companion framing is ready. Execute before end of day Wednesday.

**7. OSP-0005 Trust policy — update for A2A v1.2 signed cards (Wednesday)**

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
```

This makes OSOP trust enforcement verifiable against a cryptographic standard, not just declarative. `osop trust-audit` becomes concrete.

**8. AGNTCon / MCPCon CFP abstract (Wednesday–Thursday, 90 min)**

~13 days to deadline. Title: "The Missing Layer: Why AI Agent Workflows Need a Portable Audit Log." Submit to both NA and EU tracks.

**9. LangGraph + Temporal community posts (Thursday)**

- LangGraph: "OAP defines runtime communication. OSOP defines the portable workflow definition. Complementary layers."
- Temporal: "OSOP is the portable human-readable workflow definition format that lives above Temporal's execution layer — the source of truth your team can read, audit, and version-control regardless of which runtime executes it."

**10. Google ADK multi-language `.osop` example (Wednesday, 60 min)**

Single `.osop` file running via ADK in Python, Go, and Java — demonstrating OSOP as the language-agnostic workflow definition layer for ADK-based agents. osop-examples PR only. Non-invasive.

---

## Evolution Ideas

### Spec Improvements

**OSP-0005: Trust policy — A2A v1.2 cryptographic enforcement (new angle from today)**

A2A v1.2 signed Agent Cards give `trust_policy:` a concrete, standardized verification mechanism. A trust policy that references `AgentCard.signature` and validates against a known domain is auditable, not just declarative. This is the trust model enterprises will accept.

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
```

**OSP-0006: `skill_ref` — A2A capability negotiation alignment (updated scope)**

```yaml
nodes:
  - id: "research-agent"
    type: "agent"
    skill_ref:
      source: "a2a"
      agent_card_url: "https://agents.example.com/.well-known/agent.json"
      required_capabilities: ["web_search", "document_analysis"]
      negotiation: "dynamic"
```

Dynamic capability negotiation at runtime means `skill_ref:` enforces that the agent actually has the capabilities the workflow requires before execution begins.

**`protocol_bindings:` top-level field — declare all protocol relationships in one place**

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

This turns an OSOP file into a protocol manifest — one file that declares all agent protocol relationships for an enterprise workflow. `osop protocols` command becomes the inspector for this field.

**OSP-0009: `retry:` on edges — production reliability semantics**

Production workflows fail. Conductor has timeout controls; OSOP has `timeout_sec` on nodes but no retry semantics on edges.

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

### Tooling Gaps (Priority-ordered for this week)

| Tool | Priority | New Signal | Status |
|------|----------|------------|--------|
| `osop log-export --format otel-json` | 🔴 Critical | Honeycomb Agent Timeline confirms the need | Not built |
| `osop export-agent-card` | 🔴 Critical | A2A v1.2 — must emit signed cards | Not built |
| `osop compliance-check --framework eu-ai-act` | 🔴 Critical | 74 days to enforcement | Not built |
| `osop compile --from-markdown` | 🔴 Critical | AWS Strands + GitHub AW = confirmed pattern | Not built |
| `osop export-temporal` | 🔴 Critical | OpenAI Codex + LangGraph confirmed in production | Not built |
| `osop trust-audit` | 🟠 High | A2A v1.2 signed cards = concrete implementation path | Not built |
| `osop import-strands-sop` | 🟠 High | AWS Strands SOPs open-sourced | Not built |
| `osop export-conductor` / `import-conductor` | 🟠 High | Conductor Day 5 | Not built |
| GitHub Action: validate + log-validate | 🟠 High | Zero-friction repo adoption | Not built |
| `osop import-n8n` | 🟠 High | 150K+ star ecosystem | Not built |
| `osop protocols` | 🟠 High | `protocol_bindings:` manifest inspector | Not built |
| `osop import-agent-spec` | 🟠 High | Oracle WayFlow tutorial live | Not built |
| `osop export-bedrock` / `export-azure-ai-foundry` | 🟠 High | Hyperscaler A2A integration | Not built |
| `osop log-export --format siem` | 🟠 High | Enterprise SIEM (Splunk, Datadog) | Not built |
| OSOP Playground (browser) | 🟡 Medium | Zero-install first experience | Not built |
| JetBrains plugin | 🟡 Medium | 10M+ devs | Not built |
| `osop import-n8n` | 🟡 Medium | Port `osop-vscode`; 10M+ devs | Not built |

### Ecosystem Plays (New This Week)

| Target | Action | Effort | Timing |
|--------|--------|--------|--------|
| **Salesforce Developer Community** | Agentforce Operations audit trail question | 30 min | **TODAY** |
| **strands-agents/agent-sop** | `osop import-strands-sop` bridge Discussion | 30 min | **TODAY** |
| **CNCF TAG Runtime** | Comment on cncf/toc#1746 | 15 min | **TODAY** |
| **oracle/agent-spec** | `osop import-agent-spec` bridge Discussion | 30 min | Today |
| **AG2** | Examples PR (after OTel mapping doc) | 45 min | Today |
| **Honeycomb** | "OSOP → OTel = vendor-neutral input to Honeycomb Agent Timeline" | 15 min | After doc publishes |
| **OpenClaw** | SOUL.md companion PR | 45 min | Wednesday |
| **osop-examples** | ADK multi-language example | 60 min | Wednesday |
| **Notion Developer Community** | Workflow audit trail question in External Agent API thread | 30 min | Wednesday |
| **LangGraph Discussions** | "OAP runtime + OSOP definition: complementary layers" | 60 min | Thursday |
| **Temporal Community Forum** | "OSOP as portable workflow definition above Temporal" | 45 min | Thursday |
| **SmartBear DevRel** | Email: SwaggerHub + OSOP + Arazzo joint support | 30 min | Thursday |
| **AGNTCon / MCPCon CFP** | Submit abstract (both tracks) | 90 min | Wednesday |
| **n8n community** | `osop import-n8n` proof of concept | 3 hrs | This week |

---

## Top 3 Actions for Today (Tuesday May 19)

### 1. Publish `osoplog-otel-mapping.md` + submit AG2 examples PR (2.5 hrs)

Day 10 pending. Unlocks three downstream ecosystem plays: AG2 PR, Red Hat blog pitch, OTel integration blog. Honeycomb Agent Timeline launch today gives this document immediate news hooks: "OSOP `.osoplog` is the vendor-neutral execution record. Honeycomb, Datadog, or any OTel-compatible tool is the consumer. You're not locked into any vendor's agent observability." Publish to `docs/osoplog-otel-mapping.md`. Submit AG2 PR same afternoon. This is the single output that breaks the zero-trajectory streak across three ecosystem plays simultaneously.

### 2. Publish OSP-0008 `trigger:` RFC as GitHub Discussion (3 hrs)

Day 3 pending; 2-week window before Arazzo 1.1 claims the event-driven namespace. Full spec draft in May 17 brief. Publish as osop-spec GitHub Discussion with "RFC" label. With `trigger:`, OSOP becomes the only YAML workflow format that defines both WHAT the workflow does (nodes + edges) AND WHEN it starts (trigger) in a single portable, schema-validated file. No competitor — Arazzo, Conductor, GitHub AW, Strands SOPs — provides both.

### 3. Salesforce + strands-agents community presence (1 hr combined)

Two 30-minute plays on today's news cycle:
- **Salesforce Agentforce Operations developer thread**: Raise the portable audit trail question. 10M+ developer audience. 30 min.
- **strands-agents/agent-sop GitHub Discussion**: Post `osop import-strands-sop` bridge proposal. Additive framing, zero adoption ask. 30 min.

---

## Positioning Stack (updated 2026-05-19)

| Layer | Standard | Governance | Status |
|-------|----------|------------|--------|
| Tool connectivity | MCP | AAIF / Linux Foundation | ✅ 10K+ servers, 97M SDK downloads/month |
| Agent-to-agent routing | A2A | AAIF / Linux Foundation | ✅ **v1.2** — 150+ orgs; signed agent cards; capability negotiation |
| UI streaming | AG-UI | Emerging / CopilotKit | ✅ Oracle + Google + A2A alignment |
| Enterprise agent orchestration | Salesforce Agentforce Operations | Salesforce (proprietary) | ⚠️ **NEW May 19** — no portable audit layer |
| Agent-native observability | Honeycomb Agent Timeline + OTel | Proprietary + CNCF | ⚠️ **NEW May 19** — proprietary filling gap; OSOP OTel bridge needed TODAY |
| Cross-language agent development | Google ADK 1.0 (Py/Go/Java/TS) | Google (Apache 2.0) | ✅ GA — OSOP as portable workflow def layer |
| Cross-framework runtime comms | LangGraph OAP | LangGraph | ✅ v1.0 GA — 34% enterprise citation |
| YAML multi-agent workflow runner (no audit) | Microsoft Conductor | MIT (no governance) | ⚠️ Day 5 post-launch |
| Markdown agent workflow (GitHub-native) | GitHub Agentic Workflows | GitHub / Microsoft | ⚠️ Technical preview |
| Markdown agent workflow (AWS-native) | Strands Agent SOPs | AWS (Apache 2.0) | ⚠️ Open-sourced |
| Agent behavior + capabilities spec | Oracle Open Agent Spec | Oracle | ⚠️ Coalition with AG-UI + A2A; WayFlow tutorial live |
| No-code workflow automation | n8n JSON (de facto) | n8n (proprietary) | ⚠️ 150K+ stars — no portable export |
| Durable agent execution | Temporal | Temporal (MIT) | ✅ OpenAI Codex + LangGraph in production |
| Span-level observability | OTel GenAI | CNCF | ✅ Stable — OSOP OTel mapping publishes today |
| API workflow documentation | Arazzo | OpenAPI Initiative / LF | ✅ 1.0.1 stable; 1.1 + AsyncAPI in ~2 weeks |
| Kubernetes agentic validation | *(gap)* | CNCF AI WG | ⏳ Comment on cncf/toc#1746 today |
| Regulatory compliance logging | *(gap)* | *(none)* | ⏳ 74-day EU AI Act countdown |
| Event-driven workflow invocation | *(gap — Arazzo 1.1 coming)* | *(gap)* | ⏳ **OSP-0008 publishes TODAY** |
| **Workflow definition + execution audit** | **OSOP** | *Submitting to AAIF* | ⏳ Unoccupied by any governed standard |

---

## Adoption Metrics to Track

| Metric | Day 40 (today) | Day 60 Target (Jun 8) | Day 90 Target (Jul 8) |
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
| AAIF submission status | Pending / Day 40 | In review | Accepted |
| OSP proposals published | 0 | 8 | 12 |
| CFP submissions | 0 | 3 | 1+ accepted |
| `osoplog-otel-mapping.md` | **Publishing TODAY** | Referenced in 3+ tools | Cited in OTel docs |
| OSP-0008 (`trigger:`) RFC | **Publishing TODAY** | Schema merged | Native support in 2+ tools |
| AG2 examples PR | **Submitting TODAY** | Merged | 3 follow-on PRs |
| strands-agents bridge proposal | **Posting TODAY** | Bridge tool drafted | PR submitted |
| Salesforce community presence | **TODAY** | 3 Salesforce threads | Blog cited |
| `osop compile --from-markdown` design | Wednesday | Design doc published | Alpha CLI released |
| OpenClaw PR | Wednesday | Merged | 5 follow-on PRs |
| AGNTCon / MCPCon CFP | Wed–Thu | Submitted (both tracks) | 1+ accepted |
| Google ADK multi-language example | Wednesday | PR merged | Cited in ADK docs |

---

## Key Links (New Today)

- **Salesforce Agentforce Operations launch**: https://venturebeat.com/orchestration/salesforce-launches-agentforce-operations-to-fix-the-workflows-breaking-enterprise-ai
- **A2A v1.2 (signed agent cards + capability negotiation)**: https://cloud.google.com/blog/products/ai-machine-learning/agent2agent-protocol-is-getting-an-upgrade
- **Google ADK 1.0 GA multi-language**: https://explore.n1n.ai/blog/google-adk-1-0-a2a-protocol-multi-agent-standard-2026-05-04
- **Google Cloud Next 2026 — ADK, Agent Engine, A2A**: https://developers.googleblog.com/agents-adk-agent-engine-a2a-enhancements-google-io/
- **ADK Go 1.0**: https://developers.googleblog.com/adk-go-10-arrives/
- **strands-agents/agent-sop**: https://github.com/strands-agents/agent-sop
- **AWS Strands SOP blog**: https://aws.amazon.com/blogs/opensource/introducing-strands-agent-sops-natural-language-workflows-for-ai-agents/
- **CNCF TOC Issue #1746**: https://github.com/cncf/toc/issues/1746
- **Arazzo Specification**: https://spec.openapis.org/arazzo/latest.html
- **EU AI Act enforcement: August 2, 2026 — 74 days**

---

*Previous brief: [`2026-05-18-daily-brief.md`](./2026-05-18-daily-brief.md)*
*Today is Tuesday — Week 3 Tuesday deliverables: `osoplog-otel-mapping.md` + OSP-0008 `trigger:` RFC.*
*Three consecutive weeks of pending top-3 items. The first published doc breaks the streak. Write `osoplog-otel-mapping.md` first — it unblocks the most downstream plays.*
