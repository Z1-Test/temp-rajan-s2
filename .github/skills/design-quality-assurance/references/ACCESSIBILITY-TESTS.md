# Accessibility Testing Reference

> Setup and scripts for accessibility testing

---

## Quick Setup

### Install Dependencies

```bash
npm install -D @axe-core/playwright axe-core
# or
npm install -D @axe-core/react axe-core
```

---

## Playwright Accessibility Testing

### Basic Test Setup

```typescript
// tests/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage should have no accessibility violations', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('login page should have no violations', async ({ page }) => {
    await page.goto('/login');
    
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa']) // WCAG 2.1 Level AA
      .analyze();
    
    expect(results.violations).toEqual([]);
  });
});
```

### Testing Specific Components

```typescript
test('modal should be accessible', async ({ page }) => {
  await page.goto('/');
  await page.click('button[data-testid="open-modal"]');
  
  // Wait for modal to be visible
  await page.waitForSelector('[role="dialog"]');
  
  const results = await new AxeBuilder({ page })
    .include('[role="dialog"]')
    .analyze();
  
  expect(results.violations).toEqual([]);
});
```

### Exclude Known Issues

```typescript
const results = await new AxeBuilder({ page })
  .exclude('.third-party-widget')
  .disableRules(['color-contrast']) // Only if intentional
  .analyze();
```

---

## React Component Testing

### Setup with @axe-core/react

```typescript
// src/setupTests.ts
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
```

### Component Test Example

```typescript
// components/Button.test.tsx
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Button } from './Button';

describe('Button Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Button variant="expressive">Click me</Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('disabled button should be accessible', async () => {
    const { container } = render(
      <Button variant="expressive" disabled>
        Disabled
      </Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

## Keyboard Navigation Tests

### Tab Order Test

```typescript
test('keyboard navigation should follow logical order', async ({ page }) => {
  await page.goto('/login');
  
  // Tab through elements
  await page.keyboard.press('Tab');
  const firstFocused = await page.evaluate(() => document.activeElement?.id);
  expect(firstFocused).toBe('email');
  
  await page.keyboard.press('Tab');
  const secondFocused = await page.evaluate(() => document.activeElement?.id);
  expect(secondFocused).toBe('password');
  
  await page.keyboard.press('Tab');
  const thirdFocused = await page.evaluate(() => document.activeElement?.id);
  expect(thirdFocused).toBe('submit-button');
});
```

### Focus Visibility Test

```typescript
test('focus states should be visible', async ({ page }) => {
  await page.goto('/');
  
  await page.keyboard.press('Tab');
  
  const focusedElement = await page.locator(':focus');
  const outline = await focusedElement.evaluate(el => 
    getComputedStyle(el).outline
  );
  
  expect(outline).not.toBe('none');
});
```

### Modal Focus Trap Test

```typescript
test('modal should trap focus', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="open-modal"]');
  
  // Tab to last element
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  
  // Tab should cycle back to first element
  await page.keyboard.press('Tab');
  
  const focusedElement = await page.evaluate(() => 
    document.activeElement?.getAttribute('data-testid')
  );
  
  // Should be back at first focusable element in modal
  expect(focusedElement).toBe('modal-close-button');
});
```

---

## Color Contrast Tests

### Test Contrast Ratios

```typescript
test('text contrast meets WCAG AA', async ({ page }) => {
  await page.goto('/');
  
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2aa'])
    .analyze();
  
  const contrastViolations = results.violations.filter(
    v => v.id === 'color-contrast'
  );
  
  expect(contrastViolations).toEqual([]);
});
```

### Manual Contrast Check Script

```javascript
// Check contrast ratio of element
function checkContrast(element) {
  const style = getComputedStyle(element);
  const color = style.color;
  const bgColor = style.backgroundColor;
  
  // Calculate luminance and ratio
  // (implement or use a library)
  const ratio = calculateContrastRatio(color, bgColor);
  
  return {
    element: element.tagName,
    color,
    bgColor,
    ratio,
    passesAA: ratio >= 4.5,
    passesAAA: ratio >= 7
  };
}
```

---

## CI/CD Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/accessibility.yml
name: Accessibility Tests

on: [push, pull_request]

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright browsers
        run: npx playwright install --with-deps
      
      - name: Run accessibility tests
        run: npx playwright test tests/accessibility.spec.ts
      
      - name: Upload results
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: a11y-results
          path: test-results/
```

---

## Staylook-Specific Tests

### Test One Highlight Rule

```typescript
test('page should have max 1 expressive element', async ({ page }) => {
  await page.goto('/dashboard');
  
  const expressiveButtons = await page.locator('.button-expressive').count();
  
  expect(expressiveButtons).toBeLessThanOrEqual(1);
});
```

### Test Radius Hierarchy

```typescript
test('buttons should have pill radius', async ({ page }) => {
  await page.goto('/');
  
  const buttons = await page.locator('button').all();
  
  for (const button of buttons) {
    const borderRadius = await button.evaluate(el => 
      getComputedStyle(el).borderRadius
    );
    expect(borderRadius).toBe('9999px');
  }
});
```

### Test Token Compliance

```typescript
test('no hardcoded colors in components', async ({ page }) => {
  await page.goto('/');
  
  const allElements = await page.locator('*').all();
  
  for (const element of allElements.slice(0, 50)) { // Sample
    const color = await element.evaluate(el => 
      getComputedStyle(el).color
    );
    
    // Should not be a hardcoded hex (allow rgb from variables)
    expect(color).not.toMatch(/^#[0-9A-Fa-f]{6}$/);
  }
});
```

---

## Quick Checklist

### Automated Tests
- [ ] axe-core integration
- [ ] WCAG 2.1 AA tag filter
- [ ] Color contrast checks
- [ ] Keyboard navigation tests
- [ ] Focus visibility tests
- [ ] Modal focus trap tests

### Manual Tests
- [ ] Screen reader testing (VoiceOver/NVDA)
- [ ] Keyboard-only navigation
- [ ] Zoom to 200%
- [ ] Color blindness simulation
- [ ] Reduced motion preference

---

*Accessibility Testing — Staylook QA Reference*
