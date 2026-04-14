# OSOP Node Types

**Version:** 1.0.0-draft

---

## Overview

OSOP defines 4 Core node types (agent, api, cli, human) + 8 Extended types that cover the full spectrum of process participants — from human decision-makers to infrastructure automation. Each node type has a set of subtypes that provide further classification and may influence runtime behavior.

Every node MUST specify a `type`. The `subtype` field is OPTIONAL but RECOMMENDED for executable workflows (Level 2+).

---

## 1. `human`

Tasks performed by people. Human nodes represent manual steps that require a person to take action, make a decision, or provide input.

### Subtypes

| Subtype | Description |
|---|---|
| `approval` | Binary or multi-option approval gate |
| `review` | Review of an artifact (code, document, design) |
| `input` | Collect structured input from a person |
| `decision` | Route the workflow based on human judgment |

### Runtime Configuration

```yaml
- id: "prod-approval"
  type: "human"
  subtype: "approval"
  name: "Production Deployment Approval"
  runtime:
    assignees: ["eng-manager", "security-lead"]
    min_approvals: 2
    channel: "slack"                  # Notification channel
    timeout: "48h"
    prompt: "Approve v${inputs.version} for production?"
    options: ["approved", "rejected", "deferred"]
    escalation:
      after: "24h"
      to: ["vp-engineering"]
```

### Use Cases
- Production deployment approval gates
- Pull request code reviews
- Compliance sign-offs
- Manual data validation steps
- Incident severity classification

---

## 2. `agent`

AI and LLM agent operations. Agent nodes represent work performed by artificial intelligence systems, including large language models, classifiers, planners, and multi-agent systems.

### Subtypes

| Subtype | Description |
|---|---|
| `llm` | Single LLM invocation (completion, chat, function calling) |
| `rag` | Retrieval-augmented generation |
| `classifier` | Classification or categorization task |
| `planner` | Planning and task decomposition |
| `multi-agent` | Coordinated multi-agent execution |

### Runtime Configuration

```yaml
- id: "code-review-agent"
  type: "agent"
  subtype: "llm"
  name: "AI Code Review"
  runtime:
    model: "claude-sonnet-4-20250514"
    provider: "anthropic"
    system_prompt: "You are a senior code reviewer. Review the diff for bugs, security issues, and style."
    temperature: 0.2
    max_tokens: 4096
    tools:
      - name: "read_file"
        description: "Read a file from the repository"
      - name: "search_code"
        description: "Search the codebase"
    input_mapping:
      messages:
        - role: "user"
          content: "Review this diff:\n${inputs.diff}"
    output_mapping:
      review: "$.content"
      approved: "$.tool_calls.approve"
```

### Use Cases
- Automated code review
- Document summarization and extraction
- Intelligent ticket triage and routing
- Data quality assessment
- Multi-step reasoning and research tasks

---

## 3. `api`

HTTP, gRPC, and GraphQL calls to external services. API nodes represent network requests to web services and APIs.

### Subtypes

| Subtype | Description |
|---|---|
| `rest` | RESTful HTTP API call |
| `graphql` | GraphQL query or mutation |
| `grpc` | gRPC service call |
| `webhook` | Outbound webhook notification |
| `soap` | SOAP/XML web service call |

### Runtime Configuration

```yaml
- id: "notify-slack"
  type: "api"
  subtype: "rest"
  name: "Send Slack Notification"
  runtime:
    method: POST
    url: "https://hooks.slack.com/services/${secrets.SLACK_WEBHOOK}"
    headers:
      Content-Type: "application/json"
    body:
      text: "Deployment of ${inputs.service_name} v${inputs.version} completed."
      channel: "#deployments"
    expected_status: 200
    response_mapping:
      message_id: "$.ts"
```

### Use Cases
- Sending notifications (Slack, email, PagerDuty)
- Calling third-party SaaS APIs
- Service-to-service communication
- Webhook integrations
- Health check pings

---

## 4. `cli`

Command-line operations. CLI nodes represent execution of shell commands, scripts, or binary programs.

### Subtypes

| Subtype | Description |
|---|---|
| `script` | Shell script execution (bash, sh, zsh) |
| `binary` | Compiled binary or installed tool |
| `repl` | Interactive REPL session (automated) |

### Runtime Configuration

```yaml
- id: "run-tests"
  type: "cli"
  subtype: "script"
  name: "Run Unit Tests"
  runtime:
    shell: "bash"
    command: |
      cd ${inputs.repo_path}
      npm install --ci
      npm test -- --coverage
    working_directory: "${inputs.repo_path}"
    environment:
      NODE_ENV: "test"
      CI: "true"
    timeout: "10m"
    success_codes: [0]
    capture:
      stdout: true
      stderr: true
    output_mapping:
      coverage: "stdout | grep 'All files' | awk '{print $10}'"
```

### Use Cases
- Running test suites
- Build scripts
- Database migrations
- Linting and static analysis
- System administration tasks

---

## 5. `db`

Database operations. DB nodes represent interactions with relational databases, document stores, and other data persistence systems.

### Subtypes

| Subtype | Description |
|---|---|
| `query` | Read query (SELECT, find, scan) |
| `migration` | Schema migration (up/down) |
| `backup` | Database backup operation |
| `seed` | Data seeding or initialization |

### Runtime Configuration

```yaml
- id: "run-migration"
  type: "db"
  subtype: "migration"
  name: "Apply Database Migration"
  runtime:
    engine: "postgresql"
    connection: "${secrets.DATABASE_URL}"
    migration_tool: "flyway"
    migration_path: "./db/migrations"
    direction: "up"
    dry_run: false
    backup_before: true
    timeout: "5m"
```

### Use Cases
- Running schema migrations before deployment
- Seeding test databases
- Backing up data before destructive operations
- Data validation queries
- Scheduled data cleanup jobs

---

## 6. `git`

Version control operations. Git nodes represent interactions with Git repositories and hosting platforms.

### Subtypes

| Subtype | Description |
|---|---|
| `commit` | Create a commit |
| `branch` | Create, delete, or switch branches |
| `merge` | Merge branches |
| `tag` | Create or manage tags |
| `pr` | Create or manage pull requests |

### Runtime Configuration

```yaml
- id: "create-release-tag"
  type: "git"
  subtype: "tag"
  name: "Tag Release"
  runtime:
    repository: "${inputs.repo_url}"
    tag: "v${inputs.version}"
    ref: "${inputs.commit_sha}"
    message: "Release ${inputs.version}"
    sign: true
    push: true
```

### Use Cases
- Tagging releases
- Creating release branches
- Automated pull request creation
- Branch protection enforcement
- Changelog generation from commit history

---

## 7. `docker`

Container operations. Docker nodes represent building, pushing, running, and orchestrating containers.

### Subtypes

| Subtype | Description |
|---|---|
| `build` | Build a container image |
| `push` | Push an image to a registry |
| `run` | Run a container |
| `compose` | Docker Compose operations |

### Runtime Configuration

```yaml
- id: "build-image"
  type: "docker"
  subtype: "build"
  name: "Build Application Image"
  runtime:
    dockerfile: "./Dockerfile"
    context: "."
    image: "registry.example.com/${inputs.service_name}"
    tag: "${inputs.version}"
    build_args:
      APP_VERSION: "${inputs.version}"
      BUILD_DATE: "${metadata.timestamp}"
    labels:
      maintainer: "platform-team"
      version: "${inputs.version}"
    cache_from: "registry.example.com/${inputs.service_name}:latest"
    platform: ["linux/amd64", "linux/arm64"]
    push: true
```

### Use Cases
- Building application images in CI/CD
- Multi-architecture image builds
- Local development environment setup
- Integration test environments
- Image vulnerability scanning

---

## 8. `cicd`

CI/CD pipeline steps. CICD nodes represent stages in a continuous integration and delivery pipeline. They are higher-level abstractions over build, test, and deploy operations.

### Subtypes

| Subtype | Description |
|---|---|
| `build` | Compile and package the application |
| `test` | Run automated tests |
| `deploy` | Deploy to an environment |
| `release` | Create a versioned release |
| `rollback` | Revert to a previous version |

### Runtime Configuration

```yaml
- id: "deploy-canary"
  type: "cicd"
  subtype: "deploy"
  name: "Canary Deployment"
  runtime:
    strategy: "canary"
    platform: "github-actions"
    environment: "${inputs.environment}"
    canary:
      initial_weight: 10
      step_weight: 20
      step_interval: "5m"
      max_weight: 100
      analysis:
        metrics:
          - name: "error_rate"
            threshold: 0.01
            comparison: "less_than"
          - name: "p99_latency_ms"
            threshold: 500
            comparison: "less_than"
      rollback_on_failure: true
```

### Use Cases
- Progressive canary deployments
- Blue-green deployment orchestration
- Automated rollback on failure
- Release artifact publishing
- Multi-stage pipeline orchestration

---

## 9. `mcp`

Model Context Protocol operations. MCP nodes represent interactions with MCP-compatible tool servers, enabling AI agents to access external tools and resources through a standardized protocol.

### Subtypes

| Subtype | Description |
|---|---|
| `tool` | Invoke an MCP tool |
| `resource` | Access an MCP resource |
| `prompt` | Use an MCP prompt template |
| `sampling` | Request LLM sampling via MCP |

### Runtime Configuration

```yaml
- id: "search-codebase"
  type: "mcp"
  subtype: "tool"
  name: "Search Codebase via MCP"
  runtime:
    server: "filesystem-server"
    transport: "stdio"
    tool_name: "search_files"
    arguments:
      path: "${inputs.repo_path}"
      pattern: "${inputs.search_query}"
      file_types: ["*.py", "*.js", "*.ts"]
    timeout: "30s"
    output_mapping:
      results: "$.content"
      count: "$.content | length"
```

### Use Cases
- AI agent tool access through standardized protocol
- File system operations via MCP servers
- Database querying through MCP
- Web browsing and research via MCP tools
- Multi-tool orchestration for complex agent tasks

---

## 10. `system`

Operating system and system-level operations. System nodes represent interactions with the host operating system, file system, network, and process management.

### Subtypes

| Subtype | Description |
|---|---|
| `file` | File system operations (read, write, copy, move) |
| `network` | Network operations (DNS, ping, port check) |
| `process` | Process management (start, stop, signal) |
| `cron` | Scheduled job management |

### Runtime Configuration

```yaml
- id: "check-port"
  type: "system"
  subtype: "network"
  name: "Verify Service Port is Open"
  runtime:
    operation: "tcp_connect"
    host: "${inputs.service_host}"
    port: 443
    timeout: "5s"
    output_mapping:
      reachable: "$.connected"
      latency_ms: "$.latency_ms"
```

### Use Cases
- Pre-deployment port and connectivity checks
- File system cleanup and archival
- Process health monitoring
- Log file rotation
- Scheduled maintenance tasks

---

## 11. `infra`

Infrastructure provisioning and management. Infra nodes represent operations that create, modify, or destroy infrastructure resources.

### Subtypes

| Subtype | Description |
|---|---|
| `terraform` | Terraform/OpenTofu operations |
| `cloudformation` | AWS CloudFormation stacks |
| `pulumi` | Pulumi infrastructure programs |
| `k8s` | Kubernetes resource management |
| `helm` | Helm chart operations |

### Runtime Configuration

```yaml
- id: "provision-db"
  type: "infra"
  subtype: "terraform"
  name: "Provision Database"
  runtime:
    working_directory: "./infra/database"
    backend:
      type: "s3"
      config:
        bucket: "terraform-state"
        key: "db/${inputs.environment}.tfstate"
    variables:
      instance_class: "db.r6g.large"
      environment: "${inputs.environment}"
      allocated_storage: 100
    auto_approve: false
    plan_output: true
    timeout: "15m"
```

### Use Cases
- Provisioning cloud infrastructure
- Kubernetes deployments and service management
- Environment creation and teardown
- Infrastructure drift detection
- Disaster recovery automation

---

## 12. `data`

Data processing and pipeline operations. Data nodes represent extract, transform, load, and validation operations on datasets.

### Subtypes

| Subtype | Description |
|---|---|
| `extract` | Extract data from a source |
| `transform` | Transform data (map, filter, aggregate) |
| `validate` | Validate data quality and schema |
| `load` | Load data into a destination |
| `aggregate` | Aggregate and summarize data |

### Runtime Configuration

```yaml
- id: "validate-data"
  type: "data"
  subtype: "validate"
  name: "Validate Input Data Quality"
  runtime:
    engine: "great-expectations"
    source:
      type: "s3"
      path: "s3://data-lake/raw/${inputs.dataset}/"
      format: "parquet"
    expectations:
      - column: "user_id"
        checks: ["not_null", "unique"]
      - column: "email"
        checks: ["not_null", "matches_regex:^[^@]+@[^@]+$"]
      - column: "created_at"
        checks: ["not_null", "is_datetime"]
      - table:
        checks:
          - row_count:
              min: 1000
          - column_count:
              equals: 12
    on_failure: "halt"
    report_output: "./reports/validation_${metadata.run_id}.html"
```

### Use Cases
- ETL/ELT pipeline stages
- Data quality validation gates
- Data warehouse loading
- Stream processing checkpoints
- ML feature engineering pipelines

---

## Custom Node Types via Extensions

If the 12 built-in types do not cover your use case, use the `x-` extension mechanism:

```yaml
- id: "send-sms"
  type: "api"
  subtype: "rest"
  name: "Send SMS Notification"
  x-custom-type: "notification"
  x-notification-channel: "sms"
  runtime:
    method: POST
    url: "https://api.twilio.com/2010-04-01/Accounts/${secrets.TWILIO_SID}/Messages.json"
    body:
      To: "${inputs.phone_number}"
      From: "${secrets.TWILIO_FROM}"
      Body: "${inputs.message}"
```

Extensions allow tooling to recognize domain-specific node categories while maintaining compatibility with any OSOP engine.

---

*See [SPEC.md](./SPEC.md) for the full protocol specification.*
