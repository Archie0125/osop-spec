# OSOP Daily Strategy Brief — 2026-04-08

## Intelligence

- **Agentic AI is mainstream**: The $8.5B autonomous AI agent market (2026) is projected to reach $35B by 2030. Enterprises implementing agentic automation report 30–50% process time reductions. Workflow standardization is now a genuine enterprise need, not a futurist talking point.
- **MCP donated to Linux Foundation**: Anthropic has donated the Model Context Protocol to the new Agentic AI Foundation (AAIF), co-founded by Anthropic, Block, and OpenAI, operating under the Linux Foundation. Founding projects are MCP (Anthropic), goose (Block), and AGENTS.md (OpenAI). This is the governance body that will define the agentic AI standard stack for the next decade.
- **Anthropic launched "Agent Skills" (Dec 2025)**: A direct OSOP competitor. Agent Skills is an open standard for repeatable, teachable agent workflows. It is Claude-native, AAIF-backed, and actively being marketed as "the universal language for AI agent interoperability." This is the single biggest competitive threat to OSOP.
- **CNCF cloud-native agentic standards**: CNCF announced work on cloud-native agentic standards (March 23, 2026), focusing on agent/tool registries and dynamic capability discovery. The infrastructure layer is getting standardized independently of the workflow definition layer.
- **GitHub Agentic Workflows in technical preview** (February 2026): GitHub is building native agentic workflow support — a potential high-leverage integration target for OSOP.
- **AWS Strands mentioned OSOP**: An AWS open-source blog post referenced Strands Agent SOPs and natural language workflows for AI agents — OSOP has already entered AWS's awareness orbit.
- **No unified framework standard yet**: LangGraph, CrewAI, AutoGen, Dify, and n8n (150k+ GitHub stars) each maintain proprietary workflow representations. The fragmentation problem OSOP solves is real and unresolved.
- **OSOP current state**: 17 repos, CLI, VS Code extension, MCP server, JS+Python SDKs, 113+ examples, 28 open PRs to external frameworks. Spec v1.0 complete (4 node types, 4 edge modes). v1.1 in development (12 types, 10 modes). Zero external stars yet — adoption is still pre-network-effect.

## Threats

- **Agent Skills (Anthropic)** is the primary existential threat: institutional AAIF backing, Claude-native execution, Linux Foundation legitimacy, and active enterprise marketing. If it gets deep Claude IDE integration (Cursor, Windsurf, Claude Code), OSOP's MCP-server foothold could erode.
- **AAIF founding project priority**: MCP, goose, and AGENTS.md have governance seats. Latecomers must demonstrate non-overlapping value and cross-vendor support to earn a seat. The window to influence AAIF direction is narrow (early 2026).
- **De facto standards via dominance**: LangGraph (Python-heavy) and n8n (150k stars, automation layer) could establish serialization formats that become industry conventions without formal standardization. OSOP must integrate both before they calcify.
- **Enterprise vendor lock-in**: Oracle (AI Agent Studio), AWS, and Azure are all building proprietary agent workflow builders with strong enterprise distribution. Enterprises that standardize on these platforms may never evaluate open formats.
- **28 PRs, unknown merge rate**: The PR-based outreach campaign is the right strategy, but if merge rates are low or PRs stall, the external adoption signal weakens. Framework maintainers often require strong community pressure to merge interop contributions.

## Opportunities

### Immediate (This Week)

- **AAIF submission**: The Agentic AI Foundation's governance model welcomes new project proposals. OSOP should formally submit for consideration as an AAIF project. Unique positioning: OSOP is the *workflow definition layer* (what agents do), not overlapping with MCP (tool connectivity), AGENTS.md (agent identity), or goose (agent communication). The stack is: MCP + OSOP + AGENTS.md + goose = complete agentic interop. Submission contact: agentic-ai-foundation.org governance page.
- **MCP + OSOP co-marketing narrative**: Publish a technical piece titled "MCP handles the tools; OSOP handles the workflows" targeting The New Stack, dev.to, and the MCP community Slack. Frame OSOP as the missing workflow definition complement to MCP — not competing with it. This capitalizes on MCP's Linux Foundation moment while inserting OSOP into the conversation.
- **n8n integration push**: n8n has 150k+ GitHub stars, an AI Workflow Builder that accepts plain English, and no standard export format. An OSOP ↔ n8n converter (or n8n-nodes-osop plugin) would expose OSOP to n8n's massive community. The n8n PR is already in development — accelerate it.
- **GitHub Agentic Workflows integration**: GitHub's agentic workflows are in technical preview. OSOP should publish a "OSOP + GitHub Actions" interop example and proactively reach out to the GitHub Actions team.

### Medium-Term (This Month)

- **Conference CFP targeting**: Submit talks to AIEngineer World's Fair, KubeCon NA, and LangChain community events. Talk angle: "Why the agentic AI era needs open workflow standards" — not pitching OSOP but educating on the problem space with OSOP as the solution.
- **Enterprise case study**: Document one real workflow (e.g., an EU AI Act compliance workflow) end-to-end with OSOP + MCP + observability. Show cost, tracing, audit trail. This is the "proof of enterprise readiness" artifact that procurement teams need.
- **Awesome-list presence**: Track merge status of the awesome-mcp-servers, awesome-ai-agents, and awesome-langchain PRs. These are discovery surfaces with high-intent developer traffic. Follow up weekly.

## Evolution Ideas

### Spec Improvements

- **OSOP ↔ Agent Skills bridge document**: Write a technical comparison of OSOP vs. Anthropic Agent Skills. Objective tone, no FUD. Show where they overlap (workflow definition), where OSOP is stronger (multi-framework, RFC 2119 precision, v1.1 advanced modes), and how they can coexist. Position OSOP as the portable superset.
- **Security & threat model doc**: Add `docs/security-model.md` covering execution sandboxing, secret handling, input validation, and supply chain concerns. This is a blocker for enterprise adoption and a gap in current docs.
- **Performance & scale guidance**: Add `docs/performance.md` with guidance on workflow size limits, parallelism bounds, and optimization strategies. No spec-level changes needed — just documentation.
- **Best practices / patterns guide**: Add `docs/patterns.md` documenting canonical error handling, retry strategies, human-in-the-loop patterns, and large workflow decomposition via sub-workflows.
- **v1.1 feature documentation**: Sub-workflows, foreach, and switch edge modes are implemented but sparsely documented. Each needs a dedicated doc page with 2+ worked examples.

### Tooling Gaps

- **OSOP ↔ Agent Skills converter**: Build a bidirectional converter between OSOP and Anthropic's Agent Skills format. Makes OSOP the interop hub. Demonstrates openness. Gives Agent Skills users an upgrade path.
- **OSOP ↔ n8n converter** (accelerate): n8n's workflow JSON is well-documented. A converter would unlock the 150k-star n8n community.
- **osop validate --strict CI mode**: A CI-friendly validation mode with machine-readable exit codes and SARIF output for GitHub Actions integration. Lowers the cost of adopting OSOP in existing pipelines.
- **OSOP workflow linter**: Beyond schema validation, a semantic linter that catches unreachable nodes, missing fallback edges, circular dependencies, and undeclared variables. This is a developer experience multiplier.

### Ecosystem Plays

- **Submit to AAIF**: The highest-leverage governance play available right now.
- **Reach AWS Strands team**: They mentioned OSOP/Agent SOPs in a blog post. A direct outreach to the Strands team could yield an official integration or co-announcement.
- **LangGraph adapter**: LangGraph is the dominant Python agent framework. An `osop-langchain` adapter that compiles OSOP workflows to LangGraph state graphs would unlock the largest Python agent developer community.
- **Kestra & Windmill PR follow-up**: Both PRs were submitted. Follow up with maintainers. Offer to iterate on the integration based on their feedback.
- **Community infrastructure**: Launch the OSOP Discord (mentioned in roadmap). Community presence is required before any conference talk or AAIF submission will be taken seriously. Target: 100 members by day 60.

## Top 3 Actions for This Week

1. **Draft and submit OSOP to the Agentic AI Foundation (AAIF)**
   - Research the AAIF project submission process at agentic-ai-foundation.org
   - Draft a 1-page project proposal: OSOP's scope, current ecosystem (17 repos, CLI, SDKs, MCP server, 113+ examples), unique positioning (workflow definition layer, not overlapping with MCP/AGENTS.md/goose), and governance model
   - Identify a contact at Anthropic, Block, or OpenAI who can sponsor or champion the submission
   - Goal: get OSOP into the AAIF pipeline before the initial project roster solidifies

2. **Publish "MCP + OSOP: The Complete Agent Stack" technical piece**
   - Write a 1,200-word technical post on dev.to and submit to The New Stack
   - Core thesis: MCP = tool connectivity layer; OSOP = workflow definition layer; they are complementary, not competing
   - Include a concrete example: a 3-node OSOP workflow that uses MCP tools at each step
   - Include a diagram showing the full agentic stack (AAIF layer cake)
   - Goal: get picked up by MCP community discussion channels and generate first external GitHub stars

3. **Accelerate n8n integration and PR follow-up**
   - Finalize the n8n-nodes-osop plugin with a working OSOP → n8n workflow converter
   - Ensure the PR includes a runnable demo (Docker compose or CodeSandbox) so maintainers can evaluate without setup friction
   - Post in n8n community Discord to generate upvotes/interest before the maintainer review
   - Goal: first external framework integration merged within 2 weeks

## Adoption Metrics to Track

| Metric | Current | Target (Day 30) | Target (Day 60) | Target (Day 90) |
|--------|---------|-----------------|-----------------|-----------------|
| GitHub stars (osop-spec) | 0 | 50 | 200 | 500 |
| Combined ecosystem stars | 0 | 100 | 500 | 2,000 |
| External PRs merged | 0 | 3 | 10 | 25 |
| Active adopters (badge) | 0 | 2 | 10 | 25 |
| NPM downloads (osop-sdk-js) | — | 500/mo | 2k/mo | 10k/mo |
| PyPI downloads (osop-sdk-py) | — | 500/mo | 2k/mo | 10k/mo |
| Discord members | 0 | 50 | 200 | 500 |
| Repos with .osop files (GitHub search) | 0 | 5 | 20 | 50 |
| Blog/content views | 0 | 2k | 10k | 50k |
| AAIF submission status | Not started | Submitted | In review | Accepted/Pending |

## Notes

- Today is Wednesday — no ROADMAP update (Mondays only).
- This is the first daily brief. The `docs/strategy/` directory is new.
- Priority sequence: AAIF submission > MCP co-marketing > n8n integration. All three can run in parallel across the team but the AAIF window is time-sensitive.
