---
title: Visual Regression Testing
description: Setup and maintain visual regression tests using Chromatic and Playwright
tags:
  - visual-regression
  - chromatic
  - playwright
  - testing
name: visual-regression
---

# Visual Regression Testing Skill

## What is it?

Sets up automated visual regression testing to catch unintended visual changes using Chromatic and Playwright.

## Why use it?

- **Catch Visual Bugs**: Detect unintended changes automatically
- **Cross-Browser**: Test across Chrome, Firefox, Safari
- **Responsive**: Test all breakpoints
- **CI/CD Integration**: Block PRs with visual regressions

---

## Chromatic Setup

```yaml
# .github/workflows/chromatic.yml
name: Visual Regression
on: [push, pull_request]

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

---

## Playwright Visual Testing

```typescript
import { test, expect } from '@playwright/test';

test('visual snapshot', async ({ page }) => {
  await page.goto('/component');
  await expect(page).toHaveScreenshot('component.png');
});
```

---

## Summary

Provides automated visual regression testing preventing UI bugs.
