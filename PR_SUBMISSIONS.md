# OSOP PR Submission Tracker

## Awesome Lists

### awesome-mcp-servers
- **Repos:** punkpeye/awesome-mcp-servers, TensorBlock/awesome-mcp-servers, wong2/awesome-mcp-servers
- **Section:** Workflow & Automation
- **Entry:** `[OSOP MCP Server](https://github.com/Archie0125/osop-mcp) — 5 tools for workflow validation, rendering, reporting, diff, and risk assessment via MCP.`
- **Status:** Ready to submit

### awesome-ai-agents
- **Repo:** e2b-dev/awesome-ai-agents
- **Section:** Developer Tools / Frameworks
- **Entry:** `[OSOP](https://osop.ai) — Open standard for defining AI agent workflows in YAML. Bidirectional converters for CrewAI, LangGraph, AutoGen. VS Code extension, MCP server, Python & JS SDKs.`
- **Status:** Ready to submit

### awesome-langchain
- **Repo:** kyrolabs/awesome-langchain
- **Section:** Tools / Workflow
- **Entry:** `[OSOP LangGraph Converter](https://github.com/Archie0125/osop-interop) — Import LangGraph StateGraph definitions into portable OSOP YAML workflows. AST-based Python parser.`
- **Status:** Ready to submit

### awesome-workflow-engines
- **Repo:** meirwah/awesome-workflow-engines
- **Entry:** `[OSOP](https://osop.ai) — Open Standard Operating Procedures. Standard format for AI agent workflows. 4 Core node types, visual editor, MCP server, Python CLI.`
- **Status:** Ready to submit

### awesome-n8n
- **Repo:** n8n-io/awesome-n8n (if exists), or n8n community forum
- **Section:** Community Nodes
- **Entry:** `[OSOP Converter](https://github.com/Archie0125/osop-interop) — Convert n8n workflow JSON to/from portable OSOP YAML format.`
- **Status:** Ready to submit

---

## Framework PRs

### CrewAI
- **Repo:** crewAIInc/crewAI
- **Target:** `docs/interop/` or `examples/`
- **Content:** OSOP converter documentation + example showing agents.yaml ↔ OSOP YAML equivalence
- **File:** `osop-examples/pr-ready/crewai-research-pipeline.osop.yaml`
- **Status:** Ready to submit

### AutoGen / AG2
- **Repo:** ag2ai/ag2
- **Target:** `samples/` or `examples/`
- **Content:** Multi-agent debate workflow in OSOP format
- **File:** `osop-examples/pr-ready/autogen-debate.osop.yaml`
- **Status:** Ready to submit

### LangChain
- **Repo:** langchain-ai/langchain
- **Target:** `libs/community/langchain_community/`
- **Content:** OSOP integration package (OsopWorkflowLoader)
- **Status:** Needs langchain-osop package first

### Semantic Kernel
- **Repo:** microsoft/semantic-kernel
- **Target:** `python/samples/` or `dotnet/samples/`
- **Content:** Code review workflow in OSOP format
- **File:** `osop-examples/pr-ready/semantic-kernel-code-review.osop.yaml`
- **Status:** Ready to submit

### Dify
- **Repo:** langgenius/dify
- **Target:** `api/core/workflow/` or community templates
- **Content:** RAG chatbot template in OSOP format
- **File:** `osop-examples/pr-ready/dify-rag-chatbot.osop.yaml`
- **Status:** Ready to submit

### n8n
- **Repo:** n8n-io/n8n
- **Target:** Community nodes or examples
- **Content:** OSOP import/export community node
- **Status:** Needs n8n-nodes-osop package first

### Apache Airflow
- **Repo:** apache/airflow
- **Target:** `airflow/example_dags/` or docs
- **Content:** ETL pipeline with OSOP equivalent
- **File:** `osop-examples/pr-ready/airflow-etl-pipeline.osop.yaml`
- **Status:** Ready to submit

### Argo Workflows
- **Repo:** argoproj/argo-workflows
- **Target:** `examples/`
- **Content:** ML training pipeline with OSOP equivalent
- **File:** `osop-examples/pr-ready/argo-ml-training.osop.yaml`
- **Status:** Ready to submit

---

## Priority Order

1. awesome-mcp-servers (3 repos) — lowest effort, high visibility
2. awesome-ai-agents — high visibility in AI agent community
3. CrewAI — most natural alignment (YAML-native)
4. Dify — Chinese ecosystem entry point
5. AutoGen — Microsoft ecosystem
6. Semantic Kernel — Microsoft ecosystem
7. Airflow — enterprise workflow community
8. Argo — Kubernetes/DevOps community
9. awesome-langchain — LangChain community
10. awesome-workflow-engines — workflow community
