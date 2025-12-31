---
title: Accessibility Validation & Remediation
description: Validate WCAG 2.1 AA compliance and generate remediation reports for UI components
tags:
  - accessibility
  - a11y
  - wcag
  - validation
name: accessibility-validation
---

# Accessibility Validation & Remediation Skill

## What is it?

Validates UI components against WCAG 2.1 AA standards using automated tools and generates actionable remediation reports with code fixes.

## Why use it?

- **Compliance**: Ensure WCAG 2.1 AA compliance before deployment
- **Early Detection**: Find accessibility issues during development
- **Automated Fixes**: Generate code fixes for common violations
- **Education**: Learn best practices through detailed explanations

---

## Validation Tools

### Automated Testing
- **axe-core**: Automated accessibility testing library
- **pa11y**: CLI accessibility testing tool
- **jest-axe**: Jest integration for accessibility tests

### Manual Checks
- **Keyboard navigation**: Tab order, focus management
- **Screen reader**: NVDA, JAWS, VoiceOver testing
- **Color contrast**: Contrast ratio validation

---

## WCAG 2.1 AA Checklist

### Perceivable
- [ ] Text alternatives for non-text content (1.1.1)
- [ ] Captions for audio/video (1.2.1, 1.2.2)
- [ ] Color is not the only visual means (1.4.1)
- [ ] Text contrast ratio ≥ 4.5:1 (1.4.3)
- [ ] Text can be resized to 200% (1.4.4)
- [ ] Images of text avoided (1.4.5)

### Operable
- [ ] All functionality keyboard accessible (2.1.1)
- [ ] No keyboard traps (2.1.2)
- [ ] Bypass blocks (skip links) (2.4.1)
- [ ] Page titled (2.4.2)
- [ ] Focus order logical (2.4.3)
- [ ] Link purpose clear from text (2.4.4)
- [ ] Multiple ways to navigate (2.4.5)
- [ ] Headings and labels descriptive (2.4.6)
- [ ] Focus visible (2.4.7)

### Understandable
- [ ] Page language identified (3.1.1)
- [ ] Labels or instructions provided (3.3.2)
- [ ] Error suggestions provided (3.3.3)
- [ ] Error prevention for legal/financial (3.3.4)

### Robust
- [ ] Valid HTML (4.1.1)
- [ ] Name, role, value for UI components (4.1.2)

---

## Output Format

### Accessibility Report
**File**: `docs/ui/accessibility-report.md`

Contains:
- Violations by severity (critical, serious, moderate, minor)
- Code snippets showing current vs fixed code
- WCAG criterion references
- Remediation priority

---

## Common Fixes

### 1. Color Contrast
```typescript
// Increase contrast to meet 4.5:1 ratio
--color-button-text: #374151; // was #6b7280
```

### 2. Keyboard Navigation
```tsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Click me
</div>
```

### 3. Screen Reader Support
```tsx
<div
  role="status"
  aria-live="polite"
  className="sr-only"
>
  {`${results.length} results found`}
</div>
```

---

## Summary

Validates accessibility compliance and generates actionable remediation reports.
