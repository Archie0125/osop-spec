import { describe, it, expect, beforeAll } from "vitest";
import type { ValidateFunction } from "ajv";
import { createValidator, minimalWorkflow } from "./helpers";

describe("Valid workflow acceptance", () => {
  let validate: ValidateFunction;

  beforeAll(() => {
    ({ validate } = createValidator());
  });

  function expectValid(workflow: Record<string, unknown>) {
    const valid = validate(workflow);
    if (!valid) {
      // Show errors for debugging
      throw new Error(
        `Expected valid but got errors:\n${JSON.stringify(validate.errors, null, 2)}`
      );
    }
    expect(valid).toBe(true);
  }

  it("accepts minimal valid workflow (only required fields)", () => {
    expectValid(minimalWorkflow());
  });

  it("accepts workflow with all common optional fields", () => {
    expectValid({
      osop_version: "1.0",
      id: "full-workflow",
      name: "Full Workflow",
      description: "A workflow with many optional fields",
      owner: "team-alpha",
      visibility: "public",
      tags: ["test", "full"],
      status: "active",
      usage: "execution",
      workflow_type: { primary: "automation", secondary: ["testing"] },
      extends: "base-workflow",
      metadata: {
        created_at: "2025-01-01T00:00:00Z",
        updated_at: "2025-06-01T12:00:00Z",
        version: "2.0.0",
        change_summary: "Added new steps",
      },
      roles: ["developer", "reviewer"],
      variables: { env: "production", region: "us-east-1" },
      env: { NODE_ENV: "production" },
      platforms: ["linux", "macos"],
      conformance_level: 2,
      views: ["graph", "story"],
      nodes: [
        { id: "s1", type: "human", purpose: "Start" },
        { id: "s2", type: "agent", purpose: "Process" },
      ],
      edges: [
        { from: "s1", to: "s2", mode: "sequential" },
      ],
    });
  });

  it("accepts workflow with all 12 node types", () => {
    const nodeTypes = [
      "human", "agent", "api", "cli", "db", "git",
      "docker", "cicd", "mcp", "system", "infra", "data",
    ];
    const nodes = nodeTypes.map((type, i) => ({
      id: `node_${i}`,
      type,
      purpose: `Node of type ${type}`,
    }));
    const edges = nodeTypes.slice(0, -1).map((_, i) => ({
      from: `node_${i}`,
      to: `node_${i + 1}`,
    }));

    expectValid({
      osop_version: "1.0",
      id: "all-node-types",
      name: "All Node Types",
      nodes,
      edges,
    });
  });

  it("accepts workflow with all 10 edge modes", () => {
    const modes = [
      "sequential", "conditional", "parallel", "loop", "event",
      "fallback", "error", "timeout", "spawn", "switch",
    ];
    const nodes = [
      { id: "a", type: "human" as const, purpose: "Source" },
      { id: "b", type: "agent" as const, purpose: "Target" },
    ];
    const edges = modes.map((mode) => ({
      from: "a",
      to: "b",
      mode,
    }));

    expectValid({
      osop_version: "1.0",
      id: "all-edge-modes",
      name: "All Edge Modes",
      nodes,
      edges,
    });
  });

  it("accepts v1.1 workflow with timeout_sec", () => {
    expectValid({
      osop_version: "1.1",
      id: "timeout-workflow",
      name: "Workflow with Timeout",
      timeout_sec: 300,
      nodes: [
        { id: "s1", type: "cli", purpose: "Run build", timeout_sec: 60 },
      ],
      edges: [
        { from: "s1", to: "s1" },
      ],
    });
  });

  it("accepts v1.1 workflow with foreach (for_each + iterator_var)", () => {
    expectValid({
      osop_version: "1.1",
      id: "foreach-workflow",
      name: "Foreach Iteration",
      nodes: [
        { id: "fetch", type: "db", purpose: "Fetch items" },
        { id: "process", type: "agent", purpose: "Process each item" },
      ],
      edges: [
        {
          from: "fetch",
          to: "process",
          mode: "loop",
          for_each: "outputs.fetch.rows",
          iterator_var: "item",
        },
      ],
    });
  });

  it("accepts v1.1 workflow with join_mode", () => {
    expectValid({
      osop_version: "1.1",
      id: "join-workflow",
      name: "Parallel Join",
      nodes: [
        { id: "fan_out", type: "system", purpose: "Dispatch" },
        { id: "worker", type: "agent", purpose: "Work" },
        { id: "collect", type: "system", purpose: "Collect results" },
      ],
      edges: [
        { from: "fan_out", to: "worker", mode: "parallel" },
        { from: "worker", to: "collect", mode: "parallel", join_mode: "wait_all" },
      ],
    });
  });

  it("accepts v1.1 workflow with join_mode wait_n", () => {
    expectValid({
      osop_version: "1.1",
      id: "join-n-workflow",
      name: "Wait N Join",
      nodes: [
        { id: "dispatch", type: "system", purpose: "Dispatch" },
        { id: "worker", type: "agent", purpose: "Work" },
        { id: "collect", type: "system", purpose: "Collect" },
      ],
      edges: [
        { from: "dispatch", to: "worker", mode: "parallel" },
        {
          from: "worker",
          to: "collect",
          mode: "parallel",
          join_mode: "wait_n",
          join_count: 2,
        },
      ],
    });
  });

  it("accepts v1.1 workflow with switch/case", () => {
    expectValid({
      osop_version: "1.1",
      id: "switch-workflow",
      name: "Switch Routing",
      nodes: [
        { id: "classify", type: "agent", purpose: "Classify input" },
        { id: "route_a", type: "api", purpose: "Handle type A" },
        { id: "route_b", type: "api", purpose: "Handle type B" },
        { id: "fallback", type: "human", purpose: "Handle unknown" },
      ],
      edges: [
        {
          from: "classify",
          to: "route_a",
          mode: "switch",
          when: "outputs.classify.category",
          cases: [
            { value: "type_a", to: "route_a" },
            { value: "type_b", to: "route_b" },
          ],
          default_to: "fallback",
        },
      ],
    });
  });

  it("accepts v1.1 workflow with sub-workflow (workflow_ref)", () => {
    expectValid({
      osop_version: "1.1",
      id: "sub-workflow-parent",
      name: "Sub-Workflow Composition",
      nodes: [
        { id: "init", type: "human", purpose: "Kick off" },
        {
          id: "sub",
          type: "system",
          purpose: "Run sub-workflow",
          workflow_ref: "https://osop.ai/examples/data-pipeline.osop",
          workflow_inputs: { table: "users", limit: 100 },
        },
        { id: "done", type: "human", purpose: "Review results" },
      ],
      edges: [
        { from: "init", to: "sub" },
        { from: "sub", to: "done" },
      ],
    });
  });

  it("accepts workflow with security policies", () => {
    expectValid({
      osop_version: "1.0",
      id: "secure-workflow",
      name: "Secure Workflow",
      security: {
        secrets_provider: "vault",
        default_permissions: ["read", "write"],
        approval_required_for: ["deploy", "delete"],
      },
      nodes: [
        {
          id: "s1",
          type: "cli",
          purpose: "Deploy",
          security: {
            permissions: ["deploy"],
            secrets: ["AWS_SECRET_KEY"],
            risk_level: "high",
          },
        },
      ],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with retry policies", () => {
    expectValid({
      osop_version: "1.0",
      id: "retry-workflow",
      name: "Retry Workflow",
      nodes: [
        {
          id: "flaky_api",
          type: "api",
          purpose: "Call unreliable API",
          retry_policy: {
            max_retries: 3,
            strategy: "exponential_backoff",
            backoff_sec: 2,
          },
        },
      ],
      edges: [{ from: "flaky_api", to: "flaky_api" }],
    });
  });

  it("accepts workflow with approval gates", () => {
    expectValid({
      osop_version: "1.0",
      id: "approval-workflow",
      name: "Approval Gate Workflow",
      nodes: [
        {
          id: "deploy",
          type: "cicd",
          purpose: "Deploy to production",
          approval_gate: {
            required: true,
            approver_role: "tech-lead",
          },
        },
      ],
      edges: [{ from: "deploy", to: "deploy" }],
    });
  });

  it("accepts workflow with spawn policies (OSP-0001)", () => {
    expectValid({
      osop_version: "1.0",
      id: "spawn-workflow",
      name: "Agent Spawning Workflow",
      nodes: [
        {
          id: "coordinator",
          type: "agent",
          purpose: "Coordinate sub-agents",
          spawn_policy: {
            max_children: 5,
            child_tools: ["Read", "Grep", "Glob"],
            can_spawn_children: false,
          },
        },
        {
          id: "worker1",
          type: "agent",
          purpose: "Explore module A",
          parent: "coordinator",
        },
      ],
      edges: [
        { from: "coordinator", to: "worker1", mode: "spawn", spawn_count: 3 },
      ],
    });
  });

  it("accepts workflow with triggers", () => {
    expectValid({
      osop_version: "1.0",
      id: "triggered-workflow",
      name: "Triggered Workflow",
      triggers: [
        { type: "cron", config: { schedule: "0 9 * * 1" } },
        { type: "webhook", config: { path: "/api/trigger" } },
        { type: "git_push", config: { branch: "main" } },
        { type: "manual" },
        { type: "event", config: { event_type: "deployment.created" } },
      ],
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with message contracts", () => {
    expectValid({
      osop_version: "1.0",
      id: "contract-workflow",
      name: "Message Contract Workflow",
      message_contracts: [
        {
          id: "mc1",
          producer: "step1",
          consumer: "step2",
          kind: "task",
          format: "json",
          schema_ref: "TaskPayload",
        },
      ],
      nodes: [
        { id: "step1", type: "agent", purpose: "Produce" },
        { id: "step2", type: "agent", purpose: "Consume" },
      ],
      edges: [{ from: "step1", to: "step2" }],
    });
  });

  it("accepts workflow with test cases", () => {
    expectValid({
      osop_version: "1.0",
      id: "tested-workflow",
      name: "Tested Workflow",
      tests: [
        {
          id: "test1",
          type: "unit",
          target_node: "s1",
          input: { data: "hello" },
          expect: { status: "ok" },
        },
        {
          id: "test2",
          type: "e2e",
          run: "full_workflow",
          input: {},
          expect: { completed: true },
        },
      ],
      nodes: [{ id: "s1", type: "agent", purpose: "Process" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with observability policies", () => {
    expectValid({
      osop_version: "1.0",
      id: "observable-workflow",
      name: "Observable Workflow",
      observability: {
        emit_events: true,
        trace_id_required: true,
        default_log_level: "info",
      },
      nodes: [
        {
          id: "s1",
          type: "agent",
          purpose: "Process",
          observability: {
            log: true,
            metrics: ["duration_ms", "retry_count"],
          },
        },
      ],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with evolution policy", () => {
    expectValid({
      osop_version: "1.0",
      id: "evolving-workflow",
      name: "Self-Improving Workflow",
      evolution: {
        enabled: true,
        strategy: "ai_assisted",
        feedback_sources: ["logs", "metrics", "human_feedback"],
        output: {
          mode: "pull_request",
          require_human_approval: true,
        },
      },
      nodes: [{ id: "s1", type: "agent", purpose: "Work" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with ledger policy", () => {
    expectValid({
      osop_version: "1.0",
      id: "ledger-workflow",
      name: "Auditable Workflow",
      ledger: {
        enabled: true,
        store: "postgres",
        artifact_store: "s3",
      },
      nodes: [{ id: "s1", type: "agent", purpose: "Work" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with x- extension properties at root", () => {
    expectValid({
      osop_version: "1.0",
      id: "ext-workflow",
      name: "Extended Workflow",
      "x-custom-field": "custom-value",
      "x-internal-id": 12345,
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with node inputs and outputs (ioSpec)", () => {
    expectValid({
      osop_version: "1.0",
      id: "io-workflow",
      name: "IO Workflow",
      nodes: [
        {
          id: "s1",
          type: "agent",
          purpose: "Transform data",
          inputs: [
            { name: "raw_data", schema: "string", required: true, description: "Raw input" },
          ],
          outputs: [
            { name: "result", schema: "object", required: false },
          ],
        },
      ],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with handoff and explain specs", () => {
    expectValid({
      osop_version: "1.0",
      id: "handoff-workflow",
      name: "Handoff Workflow",
      nodes: [
        {
          id: "s1",
          type: "agent",
          purpose: "Analyze",
          handoff: {
            summary_for_next_node: "Analysis complete, found 3 issues",
            expected_output: "Fix plan as JSON",
            escalation: "Ping #team-channel if stuck",
          },
          explain: {
            why: "Need to understand root cause before fixing",
            what: "Static analysis of auth module",
            result: "List of potential race conditions",
          },
        },
      ],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with schemas registry", () => {
    expectValid({
      osop_version: "1.0",
      id: "schema-reg-workflow",
      name: "Schema Registry Workflow",
      schemas: {
        TaskPayload: { type: "object", properties: { task: { type: "string" } } },
        ResultPayload: { type: "object", properties: { status: { type: "string" } } },
      },
      nodes: [{ id: "s1", type: "agent", purpose: "Work" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });

  it("accepts workflow with imports", () => {
    expectValid({
      osop_version: "1.0",
      id: "import-workflow",
      name: "Import Workflow",
      imports: [
        "https://osop.ai/examples/shared-nodes.osop",
        "./local-defs.osop",
      ],
      nodes: [{ id: "s1", type: "system", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1" }],
    });
  });
});
