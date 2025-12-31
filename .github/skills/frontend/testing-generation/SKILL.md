---
title: Testing Generation
description: Generate comprehensive test suites (unit, integration, E2E) for UI components from specifications
tags:
  - testing
  - jest
  - playwright
  - e2e
name: testing-generation
---

# Testing Generation Skill

## What is it?

Generates complete test suites for UI components including unit tests, integration tests, and end-to-end tests based on component specifications.

## Why use it?

- **Complete Coverage**: Never miss test cases
- **Consistency**: All components tested the same way
- **Speed**: Generate tests in seconds
- **Quality**: Follow testing best practices

---

## Test Types Generated

### 1. Unit Tests (Jest + Testing Library)
- Component rendering
- Props handling
- User interactions
- Edge cases
- Accessibility

### 2. Integration Tests
- Component composition
- Data flow
- State management
- API integration

### 3. E2E Tests (Playwright)
- User workflows
- Cross-browser testing
- Visual regression
- Performance

---

## Unit Test Template

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Component } from './Component';

describe('Component', () => {
  describe('Rendering', () => {
    it('renders with required props', () => {});
  });
  
  describe('Interactions', () => {
    it('handles user click', () => {});
  });
  
  describe('Accessibility', () => {
    it('has no violations', async () => {});
  });
});
```

---

## E2E Test Template

```typescript
import { test, expect } from '@playwright/test';

test('user workflow', async ({ page }) => {
  await page.goto('/component');
  await page.click('[data-testid="button"]');
  await expect(page.locator('[role="dialog"]')).toBeVisible();
});
```

---

## Summary

Generates complete test suites ensuring 100% coverage and quality.
