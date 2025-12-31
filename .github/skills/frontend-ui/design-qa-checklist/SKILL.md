---
title: Design QA Checklist
description: Complete design quality assurance checklist for frontend UI components
tags:
  - frontend
  - qa
  - checklist
  - quality
  - review
name: design-qa-checklist
---

# Design QA Checklist Skill

## Pre-Merge Checklist

### ✅ Layout & Structure

- [ ] Uses consistent grid system (12-column or auto-fit)
- [ ] All spacing follows 4px grid (multiples of 4)
- [ ] Proper responsive breakpoints applied
- [ ] No overlapping or clipped content
- [ ] Scroll areas handle overflow correctly
- [ ] Fixed/sticky elements don't overlap content

### ✅ Typography

- [ ] Only one h1 per page
- [ ] Heading hierarchy is logical (h1→h2→h3, no skipping)
- [ ] Body text minimum 16px (1rem)
- [ ] Line length 45-75 characters for readability
- [ ] Proper line-height for each text size
- [ ] No orphaned words on headings

### ✅ Spacing & Alignment

- [ ] All padding/margin uses tokens, not hardcoded values
- [ ] Icon + text vertically centered
- [ ] Form labels aligned with inputs
- [ ] Button groups have consistent gaps
- [ ] Card content uses consistent internal spacing
- [ ] Section spacing creates clear visual groups

### ✅ Colors & Contrast

- [ ] All colors use design tokens
- [ ] Text meets WCAG AA contrast (4.5:1 normal, 3:1 large)
- [ ] Interactive elements have distinct hover states
- [ ] Error states use destructive color
- [ ] Success states use green/success color
- [ ] No hardcoded hex values

### ✅ Interactive States

- [ ] All buttons have hover states
- [ ] Focus states visible and accessible
- [ ] Disabled states clearly show non-interactivity
- [ ] Loading states show spinner/skeleton
- [ ] Active/selected states are distinguishable
- [ ] Touch targets minimum 44x44px

### ✅ Components

- [ ] Cards follow established card patterns
- [ ] Forms follow form layout patterns
- [ ] Navigation uses consistent patterns
- [ ] Modals/dialogs use standard patterns
- [ ] Empty states are helpful and actionable
- [ ] Error states provide recovery options

### ✅ Animation & Motion

- [ ] Only transform/opacity animated (performance)
- [ ] Durations under 500ms for UI
- [ ] Consistent easing functions
- [ ] Respects prefers-reduced-motion
- [ ] Loading spinners for async operations
- [ ] No jarring or sudden movements

### ✅ Responsive Design

- [ ] Mobile layout works at 320px width
- [ ] Tablet layout works at 768px width
- [ ] Desktop layout works at 1280px+ width
- [ ] No horizontal scroll on any viewport
- [ ] Touch-friendly on mobile (large tap targets)
- [ ] Hidden elements use proper breakpoint classes

### ✅ Dark Mode

- [ ] All colors adapt to dark mode
- [ ] Sufficient contrast in dark mode
- [ ] Images/icons visible in dark mode
- [ ] No hardcoded colors breaking dark mode
- [ ] Shadows adjusted for dark backgrounds

### ✅ Accessibility

- [ ] All images have alt text
- [ ] Form inputs have associated labels
- [ ] Buttons have descriptive text or aria-label
- [ ] Focus order is logical (tab navigation)
- [ ] Screen reader announces dynamic changes
- [ ] No color-only information conveyance

## Quick Visual Inspection

```
┌─────────────────────────────────────────────────────────────────┐
│ VISUAL INSPECTION CHECKLIST                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ □ Does the page feel balanced and organized?                    │
│ □ Is there a clear visual hierarchy?                            │
│ □ Are related elements grouped together?                        │
│ □ Is there sufficient whitespace?                               │
│ □ Do interactive elements look clickable?                       │
│ □ Is the reading flow logical?                                  │
│ □ Does it look professional/premium?                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Common Issues to Check

| Issue | How to Check | Fix |
|-------|--------------|-----|
| Hardcoded colors | Search for `#` in className | Use token |
| Arbitrary spacing | Search for `[px]` patterns | Use scale |
| Missing hover | Tab through interface | Add `:hover` |
| Low contrast | Browser dev tools | Increase contrast |
| No focus ring | Tab through interface | Add `focus-visible` |
| Broken responsive | Resize browser | Add breakpoints |

## Test Scenarios

1. **Zoom to 200%** - Content should remain usable
2. **Keyboard only** - All functions accessible via keyboard
3. **Screen reader** - Announces content logically
4. **Slow network** - Loading states appear properly
5. **Error state** - Trigger errors, verify messages
6. **Empty state** - Remove data, verify empty UI

## Sign-Off

Before merge, verify:

- [ ] Passes all checklist items above
- [ ] Tested on Chrome, Safari, Firefox
- [ ] Tested on mobile viewport
- [ ] Peer reviewed by another developer
- [ ] Designer approved (if applicable)
