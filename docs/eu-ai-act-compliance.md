# EU AI Act Compliance with OSOP

**Document version:** 1.0  
**Last updated:** 2026-04-01  
**Applicable regulation:** Regulation (EU) 2024/1689 (EU AI Act)  
**OSOP spec version:** 1.0  
**License:** Apache 2.0

> OSOP is an open standard released under the Apache 2.0 license. It is not affiliated with any regulatory body. This document provides guidance on how OSOP's `.osoplog` format can support compliance with the EU AI Act. It does not constitute legal advice.

---

## 1. Executive Summary

The EU AI Act (Regulation 2024/1689) imposes strict requirements on providers and deployers of high-risk AI systems, including mandatory automatic logging of system operations. Article 19 requires that high-risk AI systems produce structured, interpretable logs that record events, inputs, outputs, and the involvement of natural persons in oversight and verification.

OSOP's `.osoplog` format is a structured, machine-readable YAML execution log designed to capture exactly this information. Every `.osoplog` file records timestamped node-level execution data, human oversight decisions, AI model metadata, input/output payloads, and reasoning traces. When paired with a `.osop` workflow definition, it provides a complete, auditable record of how an AI system operated -- satisfying Article 19's requirements for automatic logging in high-risk AI systems.

By adopting OSOP as the logging standard for AI workflows, organizations gain a vendor-neutral, interoperable, and audit-ready format that reduces compliance burden while improving transparency.

---

## 2. EU AI Act Article 19 Requirements

Article 19 of the EU AI Act ("Automatically Generated Logs") establishes the following obligations for high-risk AI systems:

### 2.1 Automatic Logging Capability

High-risk AI systems must be designed and developed with capabilities enabling the automatic recording of events (logs) while the system is operating. The logging capabilities must conform to recognised standards or common specifications.

### 2.2 Minimum Content Requirements

Logs must record, at minimum:

- **Events during operation** -- the period during which the AI system is in use, including start and end of each use.
- **Reference database queries** -- when the system queries reference databases, the log must record what was queried and when.
- **Input data** -- the data provided to the system for inference or decision-making.
- **Identification of natural persons** -- persons involved in the verification of results, including their identity where applicable.

### 2.3 Retention Period

Logs must be kept for a minimum period of **six months**, unless otherwise specified by applicable Union or national law. Providers must ensure that the logging mechanism supports this retention requirement.

### 2.4 Interpretability

Logs must be appropriate to the intended purpose of the high-risk AI system and interpretable by the deployers. They must facilitate post-market monitoring and enable auditing by competent authorities.

---

## 3. How .osoplog Satisfies Each Requirement

The following table maps each Article 19 requirement to specific `.osoplog` fields and structures.

| Article 19 Requirement | .osoplog Field(s) | How It Satisfies the Requirement |
|---|---|---|
| **Automatic recording of events** | `node_records[].started_at`, `node_records[].ended_at`, `node_records[].status` | Every node execution is recorded with ISO 8601 timestamps and a completion status (`COMPLETED`, `FAILED`, `SKIPPED`). The log captures the full timeline of system operation. |
| **Period of use (start/end)** | `started_at`, `ended_at`, `duration_ms` | Top-level fields record the overall start and end of the workflow execution, with duration in milliseconds. |
| **Reference database queries** | `node_records[].tools_used[].details[]` | Tool usage records capture database queries, API calls, and external data lookups with specifics on what was queried and the result. |
| **Input data** | `node_records[].inputs` | Each node record includes an `inputs` object capturing the data provided to that step, whether user-submitted, pipeline-derived, or from an external source. |
| **Output data** | `node_records[].outputs` | Each node record includes an `outputs` object capturing what the step produced, including AI predictions, classifications, scores, and recommendations. |
| **Identification of natural persons** | `trigger.actor`, `node_records[].inputs.actor`, `node_records[].outputs.decision_by` | Human-in-the-loop nodes identify the natural person involved by name, role, or identifier. The trigger records who initiated the workflow. |
| **Verification of results** | Node type `human` with subtype `review` | Dedicated human oversight nodes record who reviewed the AI output, what decision they made, and when. |
| **Interpretability** | Paired `.osop` workflow definition, `result_summary`, `node_records[].outputs.reasoning` | The `.osop` file provides a human-readable workflow graph. Reasoning traces and result summaries make logs interpretable without specialized tooling. |
| **Recognised standards** | OSOP spec v1.0, YAML format, ISO 8601 timestamps | OSOP is an open standard with a published specification, JSON Schema validation, and conformance levels. |
| **Retention support** | Immutable YAML files, standard filesystem storage | `.osoplog` files are plain YAML text files that can be stored in any retention-compliant storage system (cloud, on-premises, WORM storage). |

---

## 4. Compliance Checklist

To ensure a `.osoplog` file meets Article 19 requirements for a high-risk AI system, verify the following:

### 4.1 Temporal Completeness

- [ ] Top-level `started_at` and `ended_at` fields are present with ISO 8601 timestamps.
- [ ] `duration_ms` is present and accurate.
- [ ] Every `node_records[]` entry has `started_at` and `ended_at` timestamps.
- [ ] Every `node_records[]` entry has a `status` field (`COMPLETED`, `FAILED`, or `SKIPPED`).

### 4.2 Human Oversight

- [ ] At least one node with `node_type: "human"` exists in the workflow for high-risk decisions.
- [ ] Human nodes include actor identification (name, role, or identifier).
- [ ] Human review decisions are recorded in `outputs` (e.g., `decision: "approved"` or `decision: "rejected"`).
- [ ] The `trigger.actor` field identifies who initiated the workflow.

### 4.3 AI Decision Transparency

- [ ] AI-driven nodes (`node_type: "agent"`) include `ai_metadata` with `model` and token counts.
- [ ] AI nodes include `outputs.reasoning` or equivalent fields explaining the basis for the decision.
- [ ] Confidence scores or probability distributions are recorded where applicable.

### 4.4 Input/Output Recording

- [ ] Every node record includes an `inputs` object describing what data entered the step.
- [ ] Every node record includes an `outputs` object describing what the step produced.
- [ ] Sensitive data is handled according to GDPR requirements (pseudonymization, access controls).

### 4.5 Runtime Metadata

- [ ] `runtime.agent` identifies the AI system or agent framework.
- [ ] `runtime.model` identifies the specific model version used.
- [ ] `workflow_id` links the log to its corresponding `.osop` workflow definition.
- [ ] `run_id` provides a unique identifier for this specific execution.

### 4.6 Auditability

- [ ] The corresponding `.osop` file is retained alongside the `.osoplog.yaml` file.
- [ ] The `result_summary` provides a human-readable description of the outcome.
- [ ] Logs are stored in a retention-compliant system for a minimum of six months.
- [ ] Logs are not modified after creation (append-only or WORM storage recommended).

---

## 5. Why OSOP vs Alternatives

Organizations evaluating logging solutions for EU AI Act compliance have several options. The following comparison highlights why OSOP is purpose-built for this use case.

### 5.1 vs Raw JSON Logs

Most AI systems produce unstructured or semi-structured JSON logs. These lack a standard schema, making cross-system auditing difficult. Each vendor's log format is different, requiring custom parsers. There is no guarantee that required fields (human oversight, reasoning traces) are present.

**OSOP advantage:** A published schema with validation tooling ensures every log contains the fields regulators expect.

### 5.2 vs OpenTelemetry

OpenTelemetry is designed for distributed systems monitoring -- traces, metrics, and spans. While it records timing and service interactions, it is not designed to capture process-level evidence such as human oversight decisions, AI reasoning, or workflow-level input/output data.

**OSOP advantage:** Purpose-built for workflow execution logging, with first-class support for human-in-the-loop nodes, AI metadata, and decision reasoning.

### 5.3 vs Proprietary Formats

Many AI platforms offer built-in logging, but these logs are locked to the vendor's ecosystem. Switching providers means losing audit continuity. Regulators cannot use a single tool to audit logs from different systems.

**OSOP advantage:** Vendor-neutral open standard under Apache 2.0. Any tool can read, validate, and audit `.osoplog` files. No vendor lock-in.

### 5.4 vs Manual Documentation

Some organizations rely on manual documentation of AI system behavior. This is error-prone, incomplete, and cannot scale.

**OSOP advantage:** Automatic generation of structured logs by the AI system itself, with validation tooling to verify completeness.

### Summary Comparison

| Criterion | Raw JSON | OpenTelemetry | Proprietary | OSOP |
|---|---|---|---|---|
| Standard schema | No | Partial | No | Yes |
| Human oversight fields | No | No | Varies | Yes |
| AI reasoning traces | No | No | Varies | Yes |
| Workflow context | No | No | Varies | Yes (paired .osop) |
| Vendor-neutral | Varies | Yes | No | Yes |
| Validation tooling | No | Yes | Varies | Yes |
| Regulatory alignment | Low | Low | Medium | High |
| Open standard | No | Yes | No | Yes (Apache 2.0) |

---

## 6. Example: High-Risk AI Medical Diagnosis Workflow

A complete worked example demonstrating EU AI Act compliance is available in the OSOP examples repository:

- **Workflow definition:** [`osop-examples/compliance/eu-ai-act-high-risk.osop`](../../osop-examples/compliance/eu-ai-act-high-risk.osop)
- **Execution log:** [`osop-examples/compliance/eu-ai-act-high-risk.osoplog.yaml`](../../osop-examples/compliance/eu-ai-act-high-risk.osoplog.yaml)

This example models an AI-assisted medical diagnosis system where:

1. A patient's medical data is ingested and validated.
2. An AI model analyzes the data and produces a preliminary diagnosis with confidence scores.
3. A mandatory risk assessment evaluates the AI output against clinical thresholds.
4. A licensed physician reviews the AI recommendation and makes the final decision.
5. An approval gate ensures no action is taken without human authorization.
6. The final diagnosis is recorded and communicated.

Every node carries a `security.risk_level` annotation. The execution log captures full timestamps, human actor identification, AI model metadata, reasoning traces, and decision outcomes -- satisfying all Article 19 requirements.

To generate an HTML audit report from these files:

```bash
cd osop-editor
npx tsx scripts/osop-report.ts \
  ../osop-examples/compliance/eu-ai-act-high-risk.osop \
  ../osop-examples/compliance/eu-ai-act-high-risk.osoplog.yaml \
  -o eu-ai-act-report.html
```

---

## 7. Recommendations for Deployers

Organizations deploying high-risk AI systems should:

1. **Adopt OSOP as the workflow and logging standard** for all AI systems subject to the EU AI Act.
2. **Validate every `.osoplog` file** against the OSOP JSON Schema before archival using `osop validate`.
3. **Store logs in immutable storage** (WORM, append-only cloud storage) for the required retention period.
4. **Pair every `.osoplog` with its `.osop` workflow definition** to provide full audit context.
5. **Include human oversight nodes** in every workflow that involves high-risk decisions.
6. **Record AI model versions** precisely -- not just "GPT-4" but the specific model identifier and API version.
7. **Test audit readiness** by periodically generating HTML reports and reviewing them with compliance teams.

---

## 8. References

- [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689) -- EU AI Act full text
- [OSOP Specification v1.0](../SPEC.md) -- OSOP workflow and log format specification
- [OSOP Conformance Levels](./conformance-levels.md) -- L1-L4 conformance requirements
- [OSOP Examples Repository](../../osop-examples/) -- Workflow templates and compliance examples

---

*This document is maintained by the OSOP project. Contributions and feedback are welcome via GitHub issues and pull requests. OSOP is released under the Apache 2.0 license.*
