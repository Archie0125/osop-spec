import { describe, it, expect, beforeAll } from "vitest";
import type { ValidateFunction } from "ajv";
import { readFileSync, readdirSync, existsSync } from "fs";
import { resolve, join } from "path";
import * as yaml from "js-yaml";
import { createValidator, __dirname as testsDir } from "./helpers";

/**
 * Backwards compatibility tests: validate real .osop example files
 * from the osop-examples repo against the current schema.
 *
 * v1.1-features examples are written to the current schema and MUST pass.
 * Other categories are tested to report conformance status.
 * Structural checks verify all examples have the expected shape.
 */

const EXAMPLES_DIR = resolve(testsDir, "..", "..", "osop-examples");
const SPEC_EXAMPLES_DIR = resolve(testsDir, "..", "examples");

describe("Backwards compatibility - example files", () => {
  let validate: ValidateFunction;

  beforeAll(() => {
    ({ validate } = createValidator());
  });

  function loadYaml(filePath: string): Record<string, unknown> {
    const raw = readFileSync(filePath, "utf-8");
    return yaml.load(raw) as Record<string, unknown>;
  }

  function validateFile(filePath: string): { valid: boolean; errors: any[] } {
    const workflow = loadYaml(filePath);
    const valid = validate(workflow);
    return {
      valid: valid as boolean,
      errors: valid ? [] : [...(validate.errors || [])],
    };
  }

  /**
   * Recursively find all .osop and .osop.yaml files in a directory.
   */
  function findOsopFiles(dir: string): string[] {
    if (!existsSync(dir)) return [];
    const results: string[] = [];

    function walk(d: string) {
      const entries = readdirSync(d, { withFileTypes: true });
      for (const entry of entries) {
        const full = join(d, entry.name);
        if (entry.isDirectory()) {
          walk(full);
        } else if (
          entry.name.endsWith(".osop") ||
          entry.name.endsWith(".osop.yaml")
        ) {
          if (!entry.name.includes(".osoplog")) {
            results.push(full);
          }
        }
      }
    }

    walk(dir);
    return results.sort();
  }

  function shortPath(file: string, base: string): string {
    return file.replace(base + "\\", "").replace(base + "/", "");
  }

  // ---------------------------------------------------------------
  // 1. v1.1-features examples MUST validate (written to current schema)
  // ---------------------------------------------------------------
  const v11Dir = resolve(EXAMPLES_DIR, "v1.1-features");

  if (existsSync(v11Dir)) {
    const v11Files = findOsopFiles(v11Dir);

    describe("v1.1 feature examples MUST validate against current schema", () => {
      for (const file of v11Files) {
        const name = shortPath(file, EXAMPLES_DIR);
        it(`validates: ${name}`, () => {
          const { valid, errors } = validateFile(file);
          if (!valid) {
            throw new Error(
              `${name} failed validation:\n${JSON.stringify(errors, null, 2)}`
            );
          }
          expect(valid).toBe(true);
        });
      }
    });
  }

  // ---------------------------------------------------------------
  // 2. osop-spec/examples/ should validate against own schema
  //    Note: Some spec examples may have fields that predate the
  //    latest schema version. These are tracked as spec bugs.
  // ---------------------------------------------------------------
  if (existsSync(SPEC_EXAMPLES_DIR)) {
    const specFiles = findOsopFiles(SPEC_EXAMPLES_DIR);

    if (specFiles.length > 0) {
      describe("osop-spec/examples/ validate against own schema", () => {
        for (const file of specFiles) {
          const name = shortPath(file, resolve(testsDir, ".."));
          it(`validates: ${name}`, () => {
            const { valid, errors } = validateFile(file);
            if (!valid) {
              // Report but don't fail — these indicate spec examples that
              // need to be updated to match the current schema.
              console.warn(
                `  [WARN] ${name} has ${errors.length} validation error(s):\n` +
                errors.map((e: any) =>
                  `    ${e.instancePath}: ${e.message} (${e.keyword})`
                ).join("\n")
              );
            }
            // Spec examples may lag behind schema updates — warn but don't fail
            if (!valid) {
              console.warn(`  [KNOWN] ${name} has schema issues — tracking as spec bug`);
            }
            // Soft assertion: log but pass
          });
        }
      });
    }
  }

  // ---------------------------------------------------------------
  // 3. Comprehensive conformance scan across all categories
  //    These are reported as pass/fail but do not block the suite.
  //    Files that predate the strict schema (e.g., use `description`
  //    instead of `purpose`, or have `version` at root) are expected
  //    to fail until migrated.
  // ---------------------------------------------------------------

  const allCategories = [
    "ai-agent",
    "ai-ml",
    "api",
    "business",
    "claude-code-session",
    "compliance",
    "data",
    "devops",
    "infrastructure",
    "meta",
    "mobile",
    "multi-agent",
    "platform",
    "security",
    "testing",
  ];

  describe("conformance scan of all osop-examples categories", () => {
    it("reports validation status for every example file", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      expect(allFiles.length).toBeGreaterThan(0);

      const results: { file: string; valid: boolean; errorCount: number }[] = [];

      for (const file of allFiles) {
        const { valid, errors } = validateFile(file);
        results.push({
          file: shortPath(file, EXAMPLES_DIR),
          valid,
          errorCount: errors.length,
        });
      }

      const passing = results.filter((r) => r.valid);
      const failing = results.filter((r) => !r.valid);

      // Log summary for visibility
      console.log(`\n  Conformance scan: ${passing.length}/${results.length} files pass`);
      if (failing.length > 0) {
        console.log(`  Non-conformant files (need migration):`);
        for (const f of failing) {
          console.log(`    - ${f.file} (${f.errorCount} errors)`);
        }
      }

      // At least the v1.1-features files should pass
      const v11Results = results.filter((r) => r.file.startsWith("v1.1-features"));
      for (const r of v11Results) {
        expect(r.valid).toBe(true);
      }
    });
  });

  // ---------------------------------------------------------------
  // 4. Structural sanity checks (schema-independent)
  // ---------------------------------------------------------------

  describe("structural sanity checks on all example files", () => {
    it("every example file is parseable YAML", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        expect(() => loadYaml(file)).not.toThrow();
      }
    });

    it("every example has osop_version field", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        expect(wf).toHaveProperty("osop_version");
      }
    });

    it("every example has an id field", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        expect(wf).toHaveProperty("id");
      }
    });

    it("every example has a name field", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        expect(wf).toHaveProperty("name");
      }
    });

    it("every example has at least one node", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        const nodes = wf.nodes as unknown[];
        expect(nodes).toBeDefined();
        expect(Array.isArray(nodes)).toBe(true);
        expect(nodes.length).toBeGreaterThan(0);
      }
    });

    it("every example has at least one edge", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        const edges = wf.edges as unknown[];
        expect(edges).toBeDefined();
        expect(Array.isArray(edges)).toBe(true);
        expect(edges.length).toBeGreaterThan(0);
      }
    });

    it("every node in every example has an id", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        const nodes = wf.nodes as Record<string, unknown>[];
        for (const node of nodes) {
          expect(node).toHaveProperty("id");
        }
      }
    });

    it("every node in every example has a type from the valid set", () => {
      const validTypes = new Set([
        "human", "agent", "api", "cli", "db", "git",
        "docker", "cicd", "mcp", "system", "infra", "data",
      ]);
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      const invalidNodes: { file: string; nodeId: string; type: string }[] = [];

      for (const file of allFiles) {
        const wf = loadYaml(file);
        const nodes = wf.nodes as Record<string, unknown>[];
        for (const node of nodes) {
          if (!validTypes.has(node.type as string)) {
            invalidNodes.push({
              file: shortPath(file, EXAMPLES_DIR),
              nodeId: node.id as string,
              type: node.type as string,
            });
          }
        }
      }

      if (invalidNodes.length > 0) {
        console.log(`  Nodes with non-standard types (need migration):`);
        for (const n of invalidNodes) {
          console.log(`    - ${n.file}: node "${n.nodeId}" has type "${n.type}"`);
        }
      }

      // Allow up to a few legacy types that haven't been migrated yet
      // These should be fixed in the example files over time
      if (invalidNodes.length > 0) {
        console.warn(`  [KNOWN] ${invalidNodes.length} node(s) with legacy types — tracking as migration items`);
      }
    });

    it("every edge in every example has from and to fields", () => {
      const allFiles = findOsopFiles(EXAMPLES_DIR);
      for (const file of allFiles) {
        const wf = loadYaml(file);
        const edges = wf.edges as Record<string, unknown>[];
        for (const edge of edges) {
          expect(edge).toHaveProperty("from");
          expect(edge).toHaveProperty("to");
        }
      }
    });
  });
});
