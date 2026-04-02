import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Loads the OSOP schema from disk and returns a configured Ajv 2020-12 validator.
 */
export function createValidator() {
  const schemaPath = resolve(__dirname, "..", "schema", "osop.schema.json");
  const schema = JSON.parse(readFileSync(schemaPath, "utf-8"));

  const ajv = new Ajv2020({
    strict: true,
    allErrors: true,
    validateFormats: true,
  });
  addFormats(ajv);

  const validate = ajv.compile(schema);
  return { ajv, schema, validate };
}

/**
 * Returns the raw schema object.
 */
export function loadSchema(): Record<string, unknown> {
  const schemaPath = resolve(__dirname, "..", "schema", "osop.schema.json");
  return JSON.parse(readFileSync(schemaPath, "utf-8"));
}

/** Directory containing tests (for relative path resolution). */
export { __dirname };

/**
 * Minimal valid OSOP workflow for use as a base in tests.
 */
export function minimalWorkflow(): Record<string, unknown> {
  return {
    osop_version: "1.0",
    id: "test-workflow",
    name: "Test Workflow",
    nodes: [
      { id: "step1", type: "human", purpose: "Do something" },
    ],
    edges: [
      { from: "step1", to: "step1" },
    ],
  };
}
