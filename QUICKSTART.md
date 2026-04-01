# OSOP Quick Start

## 1. Install
```bash
pip install osop
```

## 2. Create workflow
```bash
cat > deploy.osop.yaml << 'EOF'
osop_version: "1.0"
id: deploy
name: Deploy
nodes:
  - id: build
    type: cli
    name: Build
  - id: deploy
    type: cli
    name: Deploy
edges:
  - from: build
    to: deploy
EOF
```

## 3. Validate
```bash
osop validate deploy.osop.yaml
```

## 4. View report
```bash
osop report deploy.osop.yaml
```

## 5. Add to CI
```yaml
# .github/workflows/osop.yml
on: push
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: osop/validate-action@v1
```

## 6. Declare support
```bash
echo '{"osop_version":"1.0","conformance":"parse"}' > .osop-compat.json
```
