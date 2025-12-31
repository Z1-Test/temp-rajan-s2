---
title: UI Quality Audit
description: Comprehensive quality audit checklist for design, flows, states, and accessibility
tags:
  - frontend
  - quality
  - audit
  - checklist
  - completeness
name: ui-quality-audit
---

# UI Quality Audit Skill

> **Merged from**: `design-qa-checklist` + `flow-completeness-audit`

## Screen Audit Framework

For every screen, verify these 8 categories:

---

## 1. Layout & Spacing

- [ ] All spacing uses tokens (no hardcoded px)
- [ ] Consistent padding in cards (`p-6`)
- [ ] Proper gaps between elements
- [ ] Grid system used for layout
- [ ] Responsive breakpoints applied

## 2. Typography

- [ ] One h1 per page
- [ ] Logical heading hierarchy
- [ ] Body text ≥16px
- [ ] Proper line-height
- [ ] Text-muted for secondary text

## 3. Colors & Contrast

- [ ] All colors use tokens
- [ ] Text meets WCAG AA (4.5:1)
- [ ] Status colors consistent
- [ ] Dark mode supported

## 4. Loading States

- [ ] Initial load skeleton
- [ ] Refresh loading indicator
- [ ] Button loading spinners
- [ ] Lazy load placeholders

## 5. Error States

- [ ] Network errors handled
- [ ] Validation errors inline
- [ ] 404 pages exist
- [ ] Retry buttons present

## 6. Empty States

- [ ] No data state
- [ ] No search results
- [ ] First-time user onboarding
- [ ] Helpful CTA included

## 7. Interaction States

- [ ] All buttons have hover
- [ ] Focus rings visible
- [ ] Active/pressed states
- [ ] Disabled states styled
- [ ] Touch targets ≥44px

## 8. User Exits

- [ ] Cancel buttons present
- [ ] Back navigation works
- [ ] Escape closes modals
- [ ] Unsaved changes warning

---

## Component Checklists

### Button Audit
- [ ] Hover state
- [ ] Focus ring
- [ ] Loading spinner
- [ ] Disabled opacity
- [ ] Icon spacing (mr-2/ml-2)

### Form Audit
- [ ] Labels connected
- [ ] Required indicators
- [ ] Inline errors
- [ ] Success feedback
- [ ] Submit loading

### Modal Audit
- [ ] Closes on backdrop
- [ ] Closes on Escape
- [ ] Focus trapped
- [ ] Has close button
- [ ] Has cancel action

### Table Audit
- [ ] Loading skeleton
- [ ] Empty state
- [ ] Row hover
- [ ] Pagination loading

---

## Quick Audit Template

```markdown
# Screen: [Name]

## States
- [ ] Loading handled
- [ ] Error handled
- [ ] Empty handled
- [ ] Success feedback

## Interactions
- [ ] Buttons: hover/focus/active
- [ ] Inputs: focus ring
- [ ] Cards: hover if clickable

## Exits
- [ ] Cancel option
- [ ] Back works
- [ ] Escape closes modals

## Accessibility
- [ ] Keyboard navigable
- [ ] Focus visible
- [ ] Screen reader labels
```

---

## Best Practices

✅ Audit every screen before merge  
✅ Test all states (loading/error/empty)  
✅ Verify keyboard navigation  
✅ Check mobile viewport  
❌ Don't skip edge cases  
❌ Don't forget accessibility
