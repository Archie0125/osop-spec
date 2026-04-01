## Add optional OSOP workflow support

### What
This PR adds optional support for [OSOP](https://osop.ai) (Open Standard Operating Process) as a workflow specification format.

### Why
- Standardize workflow definitions across tools
- Enable AI agents to read, validate, and execute workflows
- Improve traceability and auditability
- Interoperable with 30+ workflow templates

### Changes
- Add `.osop-compat.json` declaring OSOP support
- Add example `.osop.yaml` workflow
- [Optional: Add validation step / parser / integration]

### Impact
- **Zero breaking changes** — purely additive
- **Optional** — doesn't affect existing functionality
- **<5 minute review** — minimal footprint

### Quick Start
```bash
pip install osop
osop validate example.osop.yaml
```

### Links
- [OSOP Spec](https://github.com/osop/spec)
- [Examples](https://github.com/osop/examples)
- [Editor](https://osop.ai/editor)
