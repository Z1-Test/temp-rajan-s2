# Staylook Design Skills Update Summary

**Date**: January 2, 2026  
**Updated By**: Design System Team  
**Location**: `.github/new-skills/`

---

## Overview

All four design skills have been completely rewritten to align with the **Staylook Design Guidelines** located in `.github/guidelines/`. The skills now reflect Staylook's unique design philosophy: **Curved, Editorial, Minimal, and Expressive**.

---

## What Changed

### 1. **Design Foundation** (`design-design-foundation/SKILL.md`)

#### Before
- Generic design tokens (primary/secondary)
- Standard radius values
- Generic color system

#### After  
✅ **Semantic Color System**
- Standard (ink) - 90% of UI, the main color
- Expressive (accent) - 10% of UI, the highlight color
- Base - The canvas
- Intensity Scale: Muted → Calm → Vibrant

✅ **Radius Hierarchy (Strict Nesting)**
- Section: 32px
- Container: 24px
- Card: 16px
- Button: Pill (9999px) - ALWAYS

✅ **Typography**
- Font: Plus Jakarta Sans
- Semantic color usage for text
- Expressive highlights (sparingly)

✅ **The "One Highlight" Rule**
- Max 1 Expressive element per screen
- Creates clear visual hierarchy
- Guides user attention

---

### 2. **UI Development** (`design-ui-development/SKILL.md`)

#### Before
- Generic button variants
- Standard component patterns
- No specific aesthetic rules

#### After
✅ **Button Priority System**
- Priority 1: Expressive (THE main action, max 1)
- Priority 2: Standard (secondary actions)
- Priority 3: Ghost (tertiary actions)
- ALL buttons are pill-shaped

✅ **Card Patterns**
- Use 16px radius (--radius-card)
- Follow intensity scale for states
- Muted surface on Calm backgrounds

✅ **Input Patterns**
- Use Vibrant background for depth
- 16px radius (--radius-input)
- Focus state inverts to Muted

✅ **Layout Components**
- Section → Container → Card hierarchy
- All follow radius nesting
- Semantic token usage throughout

---

### 3. **Quality Assurance** (`design-quality-assurance/SKILL.md`)

#### Before
- Generic accessibility tests
- Standard component tests
- No design system specific validation

#### After
✅ **Token Compliance Checks**
- Detect hardcoded colors
- Verify semantic token usage (Standard/Expressive)
- Check for old token names (primary/secondary)

✅ **Radius Hierarchy Verification**
- Automated tests for pill buttons
- Verify 32px → 24px → 16px nesting
- Component radius mapping validation

✅ **"One Highlight" Rule Enforcement**
- Automated count of Expressive elements per page
- Must be ≤ 1 per screen
- Fails build if violated

✅ **Aesthetic Validation**
- Intensity scale progression tests
- Plus Jakarta Sans font verification
- 4px grid spacing checks

---

### 4. **User Experience** (`design-user-experience/SKILL.md`)

#### Before
- Generic user flow patterns
- Standard form patterns
- No visual hierarchy rules

#### After
✅ **Visual Hierarchy UX**
- "One Highlight" principle for user attention
- Expressive = THE focal point
- Standard = supporting actions
- Ghost = minimal actions

✅ **Semantic Action States**
- Intensity scale for all states
- Muted (idle) → Calm (processing) → Vibrant (complete)
- Standard color for loading, Expressive for completion

✅ **Form UX Patterns**
- Button hierarchy in forms
- Semantic feedback colors
- Clear error/success states

✅ **Feedback Patterns**
- Toast notifications with semantic colors
- Inline alerts using intensity scale
- Loading states with Standard color

---

## Key Design Principles Now Enforced

### 1. **Semantic Naming**
```css
/* ❌ OLD: Generic */
--color-primary
--color-secondary

/* ✅ NEW: Semantic */
--color-ink          /* Standard - Main UI color */
--color-accent       /* Expressive - Highlight color */
```

### 2. **Intensity Scale**
```
Muted → Calm → Vibrant
(Lightest → Medium → Darkest)

Applies to:
- Surfaces
- Borders
- Shadows
- States
```

### 3. **Radius Hierarchy**
```
Section (32px)
  └── Container (24px)
       └── Card (16px)
            └── Button (9999px - PILL)
```

### 4. **The "One Highlight" Rule**
```tsx
// ✅ CORRECT
<Page>
  <Button variant="standard">Cancel</Button>
  <Button variant="standard">Save</Button>
  <Button variant="expressive">Publish</Button> {/* THE ONE */}
</Page>

// ❌ WRONG
<Page>
  <Button variant="expressive">Back</Button>     {/* Too many! */}
  <Button variant="expressive">Continue</Button> {/* Too many! */}
</Page>
```

---

## Implementation Checklist

### For Developers

- [ ] Review all four updated skills
- [ ] Update existing components to use semantic tokens
- [ ] Replace `primary`/`secondary` with `Standard`/`Expressive`
- [ ] Make all buttons pill-shaped (`--radius-button`)
- [ ] Enforce "One Highlight" rule on all pages
- [ ] Update font to Plus Jakarta Sans
- [ ] Apply radius hierarchy (32px → 24px → 16px → pill)
- [ ] Use intensity scale for all interactive states

### For Designers

- [ ] Use Staylook naming in design files
- [ ] Apply "One Highlight" rule to all screens
- [ ] Verify radius hierarchy in layouts
- [ ] Ensure Standard color is used for 90% of UI
- [ ] Use Expressive color for max 1 element per screen
- [ ] Follow Muted → Calm → Vibrant for surfaces/borders

### For QA

- [ ] Run token compliance tests
- [ ] Verify radius hierarchy on all components
- [ ] Check "One Highlight" rule on all pages
- [ ] Test keyboard navigation
- [ ] Verify WCAG AA contrast ratios
- [ ] Validate Plus Jakarta Sans loading

---

## Migration Guide

### Step 1: Update Color Tokens

```diff
// tokens.css
- --color-primary: #3373CC;
- --color-secondary: #6B7280;
+ --color-accent: #3373CC;        /* Expressive */
+ --color-ink: #1A1A1A;           /* Standard */
+ --color-ink-soft: #4A4A4A;
+ --color-ink-muted: #9E9E9E;
```

### Step 2: Update Button Variants

```diff
// Button.tsx
- <Button variant="primary">Submit</Button>
+ <Button variant="expressive">Submit</Button>

- <Button variant="secondary">Cancel</Button>
+ <Button variant="standard">Cancel</Button>

// CSS
- border-radius: 8px;
+ border-radius: var(--radius-button); /* 9999px - PILL */
```

### Step 3: Apply Radius Hierarchy

```diff
// Layout.tsx
- <section className="rounded-lg">
+ <section className="rounded-[--radius-section]"> {/* 32px */}

- <div className="container rounded-md">
+ <div className="container rounded-[--radius-container]"> {/* 24px */}

- <Card className="rounded">
+ <Card className="rounded-[--radius-card]"> {/* 16px */}
```

### Step 4: Enforce "One Highlight"

```diff
// Page.tsx
<Page>
-  <Button variant="primary">Back</Button>
+  <Button variant="standard">Back</Button>
  
-  <Button variant="primary">Continue</Button>
+  <Button variant="expressive">Continue</Button> {/* THE ONE */}
</Page>
```

---

## Testing Your Updates

### Visual Verification

```bash
# Check all buttons are pill-shaped
npm run test:radius

# Verify semantic token usage
npm run test:tokens

# Enforce "One Highlight" rule
npm run test:one-highlight

# Run full Staylook QA suite
npm run test:staylook
```

### Manual Checks

1. **Open any page** → Count Expressive elements → Should be ≤ 1
2. **Inspect buttons** → All should be pill-shaped (border-radius: 9999px)
3. **Check colors** → No hardcoded hex values, only tokens
4. **Verify nesting** → Section (32px) > Container (24px) > Card (16px)

---

## Resources

### Design Guidelines
- `.github/guidelines/design-guidelines.md` - Complete Staylook design system
- `.github/guidelines/component-guidelines.md` - Component implementation details

### Updated Skills
- `.github/new-skills/design-design-foundation/SKILL.md`
- `.github/new-skills/design-ui-development/SKILL.md`
- `.github/new-skills/design-quality-assurance/SKILL.md`
- `.github/new-skills/design-user-experience/SKILL.md`

### Quick Reference

```
COLORS:      Standard (90%) vs Expressive (10%)
INTENSITY:   Muted → Calm → Vibrant
RADIUS:      Section (32px) → Container (24px) → Card (16px) → Button (Pill)
FONT:        Plus Jakarta Sans
SPACING:     4px grid (space-1 to space-24)
BUTTONS:     ALWAYS pill-shaped, default to Standard
RULE:        One Highlight per screen (Expressive budget = 1)
```

---

## Questions?

If you have questions about the Staylook design system or these skill updates, refer to:

1. **Design Guidelines**: `.github/guidelines/design-guidelines.md`
2. **Component Guidelines**: `.github/guidelines/component-guidelines.md`
3. **Skills Documentation**: `.github/new-skills/*/SKILL.md`

---

*Last Updated: January 2, 2026*  
*Staylook Design System — Curved, Editorial, Minimal, Expressive*
