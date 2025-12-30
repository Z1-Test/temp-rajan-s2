---
title: CI/CD Integration
description: Setup CI/CD pipelines for frontend components with quality gates
tags:
  - ci-cd
  - github-actions
  - automation
name: ci-cd-integration
---

# CI/CD Integration Skill

## What is it?

Sets up comprehensive CI/CD pipelines for frontend components ensuring quality gates are met before deployment.

## Why use it?

- **Quality Gates**: Enforce standards automatically
- **Fast Feedback**: Catch issues in minutes
- **Automated Deployment**: Deploy on merge
- **Consistency**: Same checks every time

---

## Pipeline Stages

### 1. Lint & Type Check
```yaml
lint:
  runs-on: ubuntu-latest
  steps:
    - run: npm run lint
    - run: npm run type-check
```

### 2. Tests
```yaml
test:
  runs-on: ubuntu-latest
  steps:
    - run: npm run test:coverage
```

### 3. Build
```yaml
build:
  runs-on: ubuntu-latest
  steps:
    - run: npm run build
```

### 4. Deploy
```yaml
deploy:
  needs: [lint, test, build]
  if: github.ref == 'refs/heads/main'
  steps:
    - run: npm run deploy
```

---

## Quality Gates

- ✅ All lints pass
- ✅ All types check
- ✅ 100% test coverage
- ✅ Build succeeds
- ✅ Visual regressions approved

---

## Summary

Provides automated quality assurance and deployment for frontend components.
