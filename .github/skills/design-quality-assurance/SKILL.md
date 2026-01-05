---
title: Quality Assurance
description: Staylook design quality verification including token compliance, accessibility, and aesthetic validation
tags:
  - frontend
  - qa
  - accessibility
  - testing
  - design-compliance
  - staylook
name: quality-assurance
---

# Quality Assurance Skill

> **Staylook QA**: Semantic token compliance, accessibility, and aesthetic verification

## What is it?

This skill ensures Staylook design system compliance—from validating semantic token usage and intensity scale adherence to accessibility testing and design aesthetic verification.

## Why use it?

- **Token Compliance**: Automated checks for semantic token usage
- **Accessibility**: WCAG 2.1 AA compliance verification
- **Design Integrity**: Radius hierarchy and "One Highlight" rule enforcement
- **Quality Gates**: Pre-deployment checklists prevent broken releases

---

# Part 1: Staylook Design Compliance

## Token Usage Validation

Implement automated checks for:

### Color Token Compliance
- **Verify**: No hardcoded hex color values in component files
- **Check**: All colors use semantic token variables (--color-ink, --color-accent, etc.)
- **Detect**: Usage of old token names (primary, secondary) and flag for update
- **Validate**: Proper use of intensity scale tokens (muted, calm, vibrant)

### Semantic Naming Verification
- **Ensure**: Components use "Standard" and "Expressive" terminology
- **Flag**: Any references to "primary" or "secondary" colors
- **Validate**: Correct Standard vs Expressive color selection
- **Check**: Expressive color used only for highlights

## Radius Hierarchy Verification

Validate radius usage:

### Button Radius Compliance
- **Check**: ALL buttons use pill radius (9999px or "full")
- **Flag**: Any button with different radius values
- **Verify**: No exceptions to pill-shaped button rule

### Nesting Hierarchy Validation
- **Verify**: Section containers use 32px radius
- **Check**: Content containers use 24px radius
- **Validate**: Cards use 16px radius
- **Confirm**: Inputs use 16px radius
- **Audit**: Badges use 8px radius
- **Ensure**: Proper nesting (outer elements more rounded than inner)

## "One Highlight" Rule Enforcement

Implement strict checking:

### Expressive Element Counting
- **Parse**: Each page/component file
- **Count**: Usage of Expressive variant/color
- **Validate**: Maximum 1 Expressive element per screen
- **Flag**: Any page with multiple Expressive elements
- **Error**: Build should fail if rule violated

### Contextual Validation
- **Check**: Modal/dialog contains max 1 Expressive button
- **Verify**: Form has max 1 Expressive action
- **Validate**: Card grid doesn't have multiple Expressive cards
- **Ensure**: Navigation has max 1 Expressive item

---

# Part 2: Accessibility Compliance (WCAG 2.1 AA)

## Contrast Ratio Verification

Test color combinations:

### Staylook Color Contrast
- **Test**: Standard Ink on Base (white) meets 4.5:1 ratio
- **Verify**: Standard Ink Soft on Base meets 4.5:1 ratio
- **Check**: Expressive Accent on Base meets 4.5:1 ratio
- **Validate**: All text colors on all background colors

### Button Text Contrast
- **Expressive buttons**: Verify accent background with base text meets 4.5:1
- **Standard buttons**: Verify ink text on muted surface meets 4.5:1
- **Ghost buttons**: Verify ink soft text on background meets 4.5:1

### Interactive Element Contrast
- **Borders**: Ensure visible against backgrounds (3:1 minimum)
- **Icons**: Verify all icons meet 3:1 contrast ratio
- **Focus states**: Check focus indicators meet 3:1 ratio

## Keyboard Navigation Testing

Verify keyboard accessibility:

### Tab Navigation
- **Test**: Tab key moves through all interactive elements
- **Verify**: Tab order is logical and matches visual flow
- **Check**: No keyboard traps (can always tab out)
- **Validate**: Skip links allow bypassing repeated content

### Keyboard Activation
- **Test**: Enter key activates buttons and links
- **Verify**: Space bar activates buttons
- **Check**: Arrow keys navigate lists and menus where appropriate
- **Validate**: Escape key closes modals and dropdowns

### Focus Indicators
- **Verify**: All interactive elements show visible focus state
- **Check**: Focus outline is 2px solid with 2px offset
- **Validate**: Focus state meets 3:1 contrast ratio
- **Ensure**: Focus not hidden by CSS

## ARIA Implementation Verification

Check proper ARIA usage:

### Required ARIA Attributes
- **Modals**: Verify role="dialog", aria-modal="true", aria-labelledby, aria-describedby
-  **Buttons**: Check aria-label when text not visible
- **Forms**: Validate aria-required, aria-invalid, aria-describedby for errors
- **Live regions**: Ensure aria-live for dynamic content updates

### ARIA Best Practices
- **Avoid**: Redundant ARIA (don't add role="button" to <button>)
- **Verify**: Semantic HTML used first, ARIA as enhancement
- **Check**: Screen reader only text (.sr-only) for context
- **Validate**: State changes announced to assistive technology

---

# Part 3: Visual Regression Testing

## Component Visual Validation

Test component rendering:

### Button Visual Tests
- **Capture**: Screenshots of all button variants (Expressive, Standard, Ghost)
- **Verify**: Pill shape (border-radius) remains consistent
- **Compare**: Against baseline images
- **Check**: All sizes render correctly (sm, md, lg)
- **Validate**: States don't break visual design (hover, active, disabled)

### Card Visual Tests
- **Verify**: Cards use correct 16px radius
- **Check**: Interactive cards show proper state progression
- **Compare**: Shadow values match intensity scale
- **Validate**: Card grids maintain consistent spacing

### Layout Visual Tests
- **Test**: Section, container, card nesting renders correctly
- **Verify**: Radius hierarchy maintained (32→24→16→pill)
- **Check**: Responsive breakpoints work as expected
- **Validate**: Spacing follows 4px grid

## Multi-Viewport Testing

Test across screen sizes:

### Breakpoint Validation
- **Mobile** (375px): Verify single column, stacked layout
- **Tablet** (768px): Check 2-column grids, responsive navigation
- **Desktop** (1280px): Validate 3-4 column grids, full navigation

### Visual Snapshots
- **Capture**: Screenshots at each breakpoint
- **Compare**: Against baseline snapshots
- **Threshold**: Allow max 1% pixel difference
- **Flag**: Any significant visual changes

---

# Part 4: Aesthetic Quality Validation

## Radius Hierarchy Audit

Verify visual nesting:

### Structural Validation
- **Parse**: DOM structure of pages
- **Extract**: Border-radius values for each element
- **Verify**: Outer elements have larger radius than inner
- **Check**: Section (32px) > Container (24px) > Card (16px)
- **Validate**: All buttons use pill radius

### Automated Testing
- **Query**: Elements by class/role
- **Read**: Computed border-radius style
- **Compare**: Against expected values
- **Assert**: Matches Staylook specification

## Intensity Scale Validation

Check state progression:

### Interactive Element States
- **Identify**: All interactive components
- **Test**: Hover state increases intensity (Muted → Calm)
- **Verify**: Active state uses Vibrant tokens
- **Check**: Resting state uses Muted tokens
- **Validate**: Progression is consistent

### Surface/Border/Shadow Coordination
- **Ensure**: Surface, border, shadow all progress together
- **Verify**: Muted surface paired with muted border and shadow
- **Check**: No mismatched intensity levels
- **Validate**: Dark mode properly inverts intensity

---

# Part 5: Pre-Deployment Checklist

## Design System Compliance

Verify before deployment:

### Color & Token Validation
- [ ] All colors use semantic tokens (Standard/Expressive, not primary/secondary)
- [ ] No hardcoded hex values in components
- [ ] Intensity scale applied correctly (Muted → Calm → Vibrant)
- [ ] Expressive color used max 1 time per screen
- [ ] Standard color used for 90% of UI

### Radius & Shape Validation
- [ ] Radius hierarchy followed (32px → 24px → 16px → pill)
- [ ] ALL buttons are pill-shaped (9999px or "full")
- [ ] Proper nesting: outer elements more rounded than inner
- [ ] No sharp corners in design

### Typography Validation
- [ ] Font is Plus Jakarta Sans
- [ ] Type scale used (no arbitrary font sizes)
- [ ] Semantic colors applied (Ink for headings, Ink Soft for body, etc.)
- [ ] Expressive highlights used sparingly

### Spacing Validation
- [ ] All spacing follows 4px grid
- [ ] Uses semantic spacing tokens (--space-1 through --space-24)
- [ ] No magic numbers or arbitrary pixel values

## Accessibility Compliance

Verify accessibility:

### Contrast & Visibility
- [ ] Text contrast ratios meet WCAG AA (4.5:1 minimum)
- [ ] Large text meets 3:1 minimum
- [ ] UI component contrast meets 3:1 minimum
- [ ] Focus indicators visible and meet 3:1 ratio

### Keyboard & Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Tab order logical and follows visual flow
- [ ] No keyboard traps
- [ ] Focus states visible on all elements
- [ ] Skip links present for repeated content

### Screen Reader Support
- [ ] ARIA labels present where needed
- [ ] Semantic HTML used (buttons, headings, lists, etc.)
- [ ] Alt text on all images
- [ ] Form labels properly associated
- [ ] Error messages announced to screen readers

### Testing Methods
- [ ] Automated axe-core audit passes with 0 violations
- [ ] Keyboard navigation manually tested
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Color blindness simulation passed

## Visual Consistency

Final visual checks:

### Component Consistency
- [ ] All buttons have consistent pill shape
- [ ] Card borders use Muted or Calm tokens
- [ ] Inputs use Vibrant background
- [ ] Hover states increase intensity uniformly
- [ ] Active states use Vibrant tokens
- [ ] Disabled states use Calm tokens at 70% opacity

### Layout Consistency
- [ ] Pages use Calm background (#FAFAFA)
- [ ] Cards use Muted surface (#FFFFFF)
- [ ] Proper whitespace and breathing room
- [ ] Consistent gaps in grids (space-4)
- [ ] Sections properly separated (space-12 to space-16)

---

# Part 6: Automated Quality Gates

## Continuous Integration Checks

Implement in CI/CD pipeline:

### Pre-Commit Hooks
- **Run**: Token compliance check
- **Execute**: Accessibility audit
- **Test**: Visual regression on changed components
- **Validate**: "One Highlight" rule
- **Block**: Commit if violations found

### Pull Request Checks
- **Verify**: Design token usage
- **Check**: Radius hierarchy compliance
- **Test**: Contrast ratios
- **Validate**: No hardcoded values
- **Review**: Before allowing merge

### Build Pipeline Gates
- **Fail build**: If hardcoded colors detected
- **Fail build**: If multiple Expressive elements on page
- **Fail build**: If accessibility violations found
- **Fail build**: If contrast ratios below threshold
- **Warning**: If spacing doesn't use grid

---

# Part 7: Manual QA Verification

## Visual Inspection Checklist

Manually verify:

### Design Aesthetics
- **Check**: Overall visual harmony
- **Verify**: Curved aesthetic maintained throughout
- **Inspect**: White space and editorial layout
- **Validate**: "One Highlight" creates clear focal point
- **Assess**: Premium, polished feel

### Interaction Quality
- **Test**: All hover states work smoothly
- **Verify**: Transitions use correct duration (150ms, 300ms, 500ms)
- **Check**: Active states provide tactile feedback
- **Validate**: Loading states clear and informative
- **Assess**: Error states helpful and actionable

### Responsive Behavior
- **Test**: On actual devices (mobile, tablet, desktop)
- **Verify**: Touch targets 44px minimum on mobile
- **Check**: Text remains readable at all sizes
- **Validate**: Layouts don't break at any width
- **Assess**: Performance smooth on all devices

## Cross-Browser Testing

Test on all supported browsers:

### Desktop Browsers
- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version
- **Edge**: Latest version

### Mobile Browsers
- **Safari iOS**: Latest version
- **Chrome Android**: Latest version

### Test Points
- **Rendering**: Components render identically
- **Interactions**: All behaviors work consistently
- **Animations**: Transitions smooth on all browsers
- **Typography**: Font loading and rendering correct

---

# Part 8: Quality Report Template

## Structure of QA Report

Document findings in this format:

### Report Header
- Project name
- Date of audit
- Reviewer name
- Environment tested (staging URL)

### Summary Section
- Total checks performed
- Checks passed
- Checks failed
- Warnings flagged

### Design Compliance Section
Table format:
- Check name
- Status (pass/fail/warning)
- Notes or issues found

### Accessibility Section
Table format:
- Accessibility criterion
- Status
- Details of any violations

### Visual Quality Section  
Table format:
- Element tested
- Expected specification
- Actual rendering
- Status

### Issues to Fix
Prioritized list:
- Critical issues (blockers)
- Important issues (must fix before launch)
- Minor issues (nice to have)

### Sign-off Requirements
Checkboxes for:
- Design lead approval
- QA lead approval
- Accessibility specialist approval

---

## Best Practices

**Do**:
- Run token compliance checks in CI/CD
- Verify radius hierarchy on all components
- Test keyboard navigation on every page
- Audit "One Highlight" rule before deployment
- Check contrast ratios for all text
- Validate semantic token usage
- Test on real devices

**Don't**:
- Skip design compliance tests
- Ignore accessibility violations
- Deploy without radius verification
- Allow multiple Expressive elements per screen
- Use hardcoded color values
- Bypass quality gates
- Assume desktop testing covers mobile

---

*Staylook QA — Ensuring Semantic, Accessible, Beautiful Design*
