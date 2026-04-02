import { describe, it, expect, beforeAll } from "vitest";
import type { ValidateFunction } from "ajv";
import { createValidator, minimalWorkflow } from "./helpers";

describe("Invalid workflow rejection", () => {
  let validate: ValidateFunction;

  beforeAll(() => {
    ({ validate } = createValidator());
  });

  function expectInvalid(workflow: Record<string, unknown>, expectedKeyword?: string) {
    const valid = validate(workflow);
    expect(valid).toBe(false);
    expect(validate.errors).toBeDefined();
    expect(validate.errors!.length).toBeGreaterThan(0);

    if (expectedKeyword) {
      const keywords = validate.errors!.map((e) => e.keyword);
      expect(keywords).toContain(expectedKeyword);
    }
  }

  // --- Missing required root properties ---

  it("rejects workflow missing osop_version", () => {
    const wf = minimalWorkflow();
    delete wf.osop_version;
    expectInvalid(wf, "required");
  });

  it("rejects workflow missing id", () => {
    const wf = minimalWorkflow();
    delete wf.id;
    expectInvalid(wf, "required");
  });

  it("rejects workflow missing name", () => {
    const wf = minimalWorkflow();
    delete wf.name;
    expectInvalid(wf, "required");
  });

  it("rejects workflow missing nodes", () => {
    const wf = minimalWorkflow();
    delete wf.nodes;
    expectInvalid(wf, "required");
  });

  it("rejects workflow missing edges", () => {
    const wf = minimalWorkflow();
    delete wf.edges;
    expectInvalid(wf, "required");
  });

  // --- Array constraints ---

  it("rejects empty nodes array (minItems: 1)", () => {
    const wf = minimalWorkflow();
    wf.nodes = [];
    expectInvalid(wf, "minItems");
  });

  it("rejects empty edges array (minItems: 1)", () => {
    const wf = minimalWorkflow();
    wf.edges = [];
    expectInvalid(wf, "minItems");
  });

  // --- Invalid enum values ---

  it("rejects invalid node type", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-type",
      name: "Bad Type",
      nodes: [{ id: "s1", type: "foo", purpose: "Nope" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });

  it("rejects invalid edge mode", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-mode",
      name: "Bad Mode",
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1", mode: "bar" }],
    }, "enum");
  });

  // --- Missing required node properties ---

  it("rejects node missing required type", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "no-type",
      name: "No Type",
      nodes: [{ id: "s1", purpose: "Missing type" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "required");
  });

  it("rejects node missing required purpose", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "no-purpose",
      name: "No Purpose",
      nodes: [{ id: "s1", type: "human" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "required");
  });

  it("rejects node missing required id", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "no-node-id",
      name: "No Node ID",
      nodes: [{ type: "human", purpose: "Missing id" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "required");
  });

  // --- additionalProperties ---

  it("rejects unknown property at root level", () => {
    const wf = minimalWorkflow();
    wf.totally_unknown_field = "should fail";
    expectInvalid(wf, "additionalProperties");
  });

  // --- Invalid conformance_level ---

  it("rejects invalid conformance_level (5)", () => {
    const wf = minimalWorkflow();
    wf.conformance_level = 5;
    expectInvalid(wf, "enum");
  });

  it("rejects invalid conformance_level (string)", () => {
    const wf = minimalWorkflow();
    wf.conformance_level = "high";
    expectInvalid(wf, "type");
  });

  // --- Invalid visibility ---

  it("rejects invalid visibility (not public/private)", () => {
    const wf = minimalWorkflow();
    wf.visibility = "internal";
    expectInvalid(wf, "enum");
  });

  // --- Type violations ---

  it("rejects osop_version that does not match pattern", () => {
    const wf = minimalWorkflow();
    wf.osop_version = "v1.0";  // leading 'v' not allowed
    expectInvalid(wf, "pattern");
  });

  it("rejects id with empty string", () => {
    const wf = minimalWorkflow();
    wf.id = "";
    expectInvalid(wf, "minLength");
  });

  it("rejects name with empty string", () => {
    const wf = minimalWorkflow();
    wf.name = "";
    expectInvalid(wf, "minLength");
  });

  it("rejects nodes as non-array", () => {
    const wf = minimalWorkflow();
    wf.nodes = "not-an-array";
    expectInvalid(wf, "type");
  });

  it("rejects edges as non-array", () => {
    const wf = minimalWorkflow();
    wf.edges = "not-an-array";
    expectInvalid(wf, "type");
  });

  // --- Invalid nested structures ---

  it("rejects invalid retry strategy", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-retry",
      name: "Bad Retry",
      nodes: [
        {
          id: "s1",
          type: "api",
          purpose: "Call API",
          retry_policy: { max_retries: 3, strategy: "random" },
        },
      ],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });

  it("rejects invalid trigger type", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-trigger",
      name: "Bad Trigger",
      triggers: [{ type: "smoke_signal" }],
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });

  it("rejects invalid status enum", () => {
    const wf = minimalWorkflow();
    wf.status = "archived";
    expectInvalid(wf, "enum");
  });

  it("rejects invalid usage enum", () => {
    const wf = minimalWorkflow();
    wf.usage = "debug";
    expectInvalid(wf, "enum");
  });

  it("rejects invalid platform enum", () => {
    const wf = minimalWorkflow();
    wf.platforms = ["solaris"];
    expectInvalid(wf, "enum");
  });

  it("rejects invalid message contract kind", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-mc",
      name: "Bad MC",
      message_contracts: [
        { id: "mc1", producer: "a", consumer: "b", kind: "notification", format: "json" },
      ],
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });

  it("rejects invalid test case type", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-test",
      name: "Bad Test",
      tests: [{ id: "t1", type: "smoke" }],
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });

  it("rejects negative timeout_sec", () => {
    const wf = minimalWorkflow();
    wf.timeout_sec = -10;
    expectInvalid(wf, "minimum");
  });

  it("rejects join_mode with invalid value", () => {
    expectInvalid({
      osop_version: "1.1",
      id: "bad-join",
      name: "Bad Join",
      nodes: [
        { id: "a", type: "system", purpose: "A" },
        { id: "b", type: "system", purpose: "B" },
      ],
      edges: [
        { from: "a", to: "b", mode: "parallel", join_mode: "wait_none" },
      ],
    }, "enum");
  });

  it("rejects edge missing required from", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "no-from",
      name: "No From",
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ to: "s1" }],
    }, "required");
  });

  it("rejects edge missing required to", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "no-to",
      name: "No To",
      nodes: [{ id: "s1", type: "human", purpose: "Start" }],
      edges: [{ from: "s1" }],
    }, "required");
  });

  it("rejects spawn_policy with max_children < 1", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-spawn",
      name: "Bad Spawn",
      nodes: [
        {
          id: "s1",
          type: "agent",
          purpose: "Coordinate",
          spawn_policy: { max_children: 0 },
        },
      ],
      edges: [{ from: "s1", to: "s1" }],
    }, "minimum");
  });

  it("rejects invalid evolution strategy", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-evolution",
      name: "Bad Evolution",
      evolution: { enabled: true, strategy: "genetic_algorithm" },
      nodes: [{ id: "s1", type: "agent", purpose: "Work" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });

  it("rejects invalid observability log_level", () => {
    expectInvalid({
      osop_version: "1.0",
      id: "bad-obs",
      name: "Bad Observability",
      observability: { default_log_level: "verbose" },
      nodes: [{ id: "s1", type: "agent", purpose: "Work" }],
      edges: [{ from: "s1", to: "s1" }],
    }, "enum");
  });
});
