# Contributing to OSOP

Thank you for your interest in contributing to OSOP. This document covers how to participate in the project, from reporting issues to proposing protocol changes.

## Ways to Contribute

- **Report bugs** in the specification or tooling
- **Propose new features** via the RFC process
- **Improve documentation** — fix typos, clarify language, add examples
- **Write adapters** for new platforms and tools
- **Build tooling** — validators, editors, visualizers, engines
- **Share workflows** — contribute `.osop.yaml` examples for common processes

## Getting Started

1. Fork the repository on [GitHub](https://github.com/osop/spec).
2. Clone your fork locally.
3. Create a branch for your change: `git checkout -b my-change`.
4. Make your changes.
5. Run validation if applicable: `make validate`.
6. Commit with a clear message describing the change.
7. Push your branch and open a pull request.

## RFC Process for Protocol Changes

Changes to the OSOP protocol specification (new fields, new node types, new edge modes, behavioral changes) require an RFC. See [docs/versioning.md](./docs/versioning.md) for the full RFC process.

### Quick Summary

1. Open a GitHub Discussion to gauge interest.
2. Write an RFC document in `rfcs/NNNN-short-title.md`.
3. Submit as a pull request.
4. Minimum review period: 14 days (minor), 30 days (major).
5. Final Comment Period: 7 days.
6. Merge and implement.

### RFC Template

```markdown
# RFC NNNN: Title

## Summary
One-paragraph description.

## Motivation
Why is this change needed? What problem does it solve?

## Design
Detailed proposal with YAML/JSON examples.

## Breaking Changes
Is this a major or minor change? Why?

## Migration Path
How do existing documents adapt?

## Alternatives Considered
What other approaches were evaluated?

## Open Questions
Unresolved issues for discussion.
```

## Pull Request Guidelines

### For Documentation Changes

- Use clear, concise language.
- Follow the existing document structure and tone.
- Include examples where they aid understanding.
- Link to related documents within the spec.

### For Schema Changes

- Include the JSON Schema diff.
- Add or update examples that exercise the new schema.
- Update the relevant documentation pages.
- Add validation test cases.

### For Tooling Changes

- Include tests for new functionality.
- Update CLI help text if applicable.
- Maintain backward compatibility unless the change is part of a major release.

### Commit Messages

Use clear, descriptive commit messages:

```
Add `mcp` node type for Model Context Protocol integration

Introduces the `mcp` node type with subtypes: tool, resource, prompt,
sampling. Includes runtime configuration schema and documentation.

Refs: RFC-0042
```

## Code of Conduct

All participants in the OSOP community are expected to follow our Code of Conduct:

- **Be respectful.** Treat everyone with dignity and courtesy.
- **Be constructive.** Offer solutions, not just criticism.
- **Be inclusive.** Welcome newcomers and diverse perspectives.
- **Be collaborative.** Work toward consensus and shared goals.
- **Be professional.** Keep discussions focused on the technical merits.

Harassment, discrimination, and disruptive behavior will not be tolerated. Violations should be reported to conduct@osop.ai.

## Development Setup

### Prerequisites

- Git
- A YAML-aware text editor
- Node.js 18+ (for tooling, optional)
- Python 3.10+ (for schema validation, optional)

### Validating Changes Locally

```bash
# Clone the repository
git clone https://github.com/osop/spec.git
cd spec

# Install dependencies
npm install

# Validate all example OSOP files against the schema
npm run validate

# Run documentation link checker
npm run check-links

# Build documentation site locally
npm run docs:build
```

## Issue Labels

| Label | Description |
|---|---|
| `bug` | Something in the spec is incorrect |
| `enhancement` | Proposal for a new feature or improvement |
| `rfc` | Formal protocol change proposal |
| `docs` | Documentation improvement |
| `tooling` | Validator, editor, or engine tooling |
| `good-first-issue` | Suitable for new contributors |
| `breaking` | Would require a major version bump |
| `discussion` | Needs community input before proceeding |

## License

By contributing to OSOP, you agree that your contributions will be licensed under the [Apache License 2.0](./LICENSE).

## Questions?

- **GitHub Discussions**: [github.com/osop/spec/discussions](https://github.com/osop/spec/discussions)
- **Website**: [osop.ai](https://osop.ai)
- **Email**: hello@osop.ai

---

*We appreciate every contribution, no matter how small. Thank you for helping build the standard for process definitions.*
