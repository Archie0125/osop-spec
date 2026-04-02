import { describe, it, expect } from "vitest";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { loadSchema } from "./helpers";

describe("Schema self-validation", () => {
  const schema = loadSchema();

  it("is valid JSON (loaded without parse errors)", () => {
    expect(schema).toBeDefined();
    expect(typeof schema).toBe("object");
  });

  it("declares JSON Schema Draft 2020-12", () => {
    expect(schema.$schema).toBe("https://json-schema.org/draft/2020-12/schema");
  });

  it("is compilable by Ajv (structurally valid JSON Schema)", () => {
    const ajv = new Ajv2020({ strict: true, validateFormats: true });
    addFormats(ajv);
    expect(() => ajv.compile(schema)).not.toThrow();
  });

  it("has all required top-level properties defined", () => {
    const required = schema.required as string[];
    expect(required).toEqual(
      expect.arrayContaining(["osop_version", "id", "name", "nodes", "edges"])
    );

    const properties = schema.properties as Record<string, unknown>;
    for (const prop of required) {
      expect(properties).toHaveProperty(prop);
    }
  });

  it("defines exactly 12 node types", () => {
    const defs = schema.$defs as Record<string, any>;
    const nodeTypeEnum = defs.node.properties.type.enum as string[];
    expect(nodeTypeEnum).toHaveLength(12);
    expect(nodeTypeEnum).toEqual([
      "human", "agent", "api", "cli", "db", "git",
      "docker", "cicd", "mcp", "system", "infra", "data",
    ]);
  });

  it("defines exactly 10 edge modes (including switch)", () => {
    const defs = schema.$defs as Record<string, any>;
    const edgeModeEnum = defs.edge.properties.mode.enum as string[];
    expect(edgeModeEnum).toHaveLength(10);
    expect(edgeModeEnum).toEqual([
      "sequential", "conditional", "parallel", "loop", "event",
      "fallback", "error", "timeout", "spawn", "switch",
    ]);
  });

  it("has all expected $defs defined", () => {
    const defs = schema.$defs as Record<string, unknown>;
    const expectedDefs = [
      "trigger",
      "node",
      "ioSpec",
      "edge",
      "messageContract",
      "testCase",
      "retryPolicy",
      "idempotencyPolicy",
      "handoffSpec",
      "explainSpec",
      "observabilityPolicy",
      "observabilityNode",
      "securityPolicy",
      "securityNode",
      "approvalGate",
      "evolutionPolicy",
      "ledgerPolicy",
    ];
    for (const defName of expectedDefs) {
      expect(defs).toHaveProperty(defName);
    }
  });

  it("node requires id, type, and purpose", () => {
    const defs = schema.$defs as Record<string, any>;
    const nodeRequired = defs.node.required as string[];
    expect(nodeRequired).toEqual(["id", "type", "purpose"]);
  });

  it("edge requires from and to", () => {
    const defs = schema.$defs as Record<string, any>;
    const edgeRequired = defs.edge.required as string[];
    expect(edgeRequired).toEqual(["from", "to"]);
  });

  it("root disallows additionalProperties (with x- extension support)", () => {
    expect(schema.additionalProperties).toBe(false);
    expect(schema.patternProperties).toEqual({ "^x-": {} });
  });

  it("conformance_level accepts only 0, 1, 2, 3", () => {
    const props = schema.properties as Record<string, any>;
    expect(props.conformance_level.enum).toEqual([0, 1, 2, 3]);
  });

  it("visibility accepts only public and private", () => {
    const props = schema.properties as Record<string, any>;
    expect(props.visibility.enum).toEqual(["public", "private"]);
  });
});
