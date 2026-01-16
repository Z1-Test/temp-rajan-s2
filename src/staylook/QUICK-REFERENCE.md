# Staylook Design System - Quick Reference

## 🎨 Color Tokens

### Standard (90% of UI)
```css
var(--sl-standard)        /* #000000 - Primary text/icons */
var(--sl-standard-soft)   /* #4D4D4D - Secondary text */
var(--sl-standard-muted)  /* #808080 - Muted/disabled */
```

### Expressive (Use Selectively - THE HIGHLIGHT)
```css
var(--sl-expressive)       /* #3373CC - Special moments only */
var(--sl-expressive-soft)  /* #5C9FFF - Hover state */
var(--sl-expressive-muted) /* #BBDEFB - Background tint */
```

### Container (Surfaces)
**Intensity Scale: Muted (Lightest) → Calm → Vibrant (Darkest)**
```css
var(--sl-container-muted)   /* #FFFFFF - Elevated surfaces (Cards, Modals) */
var(--sl-container-calm)    /* #FAFAFA - Page backgrounds, Sidebars */
var(--sl-container-vibrant) /* #F5F5F5 - Recessed surfaces (Inputs, Active states) */
```

### On (Content Colors)
```css
var(--sl-on-standard)   /* #000000 - Primary text */
var(--sl-on-expressive) /* #3373CC - Accent text */
var(--sl-on-error)      /* #D32F2F - Error text */
var(--sl-on-success)    /* #388E3C - Success text */
var(--sl-on-warning)    /* #F57C00 - Warning text */
var(--sl-on-info)       /* #1976D2 - Info text */
```

### Outline (Borders)
```css
var(--sl-outline-muted)   /* #F2F2F2 - Subtle dividers */
var(--sl-outline-calm)    /* #E0E0E0 - Card borders */
var(--sl-outline-vibrant) /* #1A1A1A - Focus states, Active borders */
```

## 📐 Radius Tokens

```css
var(--sl-radius-section)   /* 32px - Outermost areas */
var(--sl-radius-container) /* 24px - Major wrappers (Modals, Sheets) */
var(--sl-radius-card)      /* 16px - Cards */
var(--sl-radius-input)     /* 16px - Form fields */
var(--sl-radius-badge)     /* 8px - Small indicators */
var(--sl-radius-button)    /* 9999px - ALL BUTTONS (pill) */
```

**Nesting Rule**: Section > Container > Card > Input > Badge > Button

## 📏 Spacing Tokens (4px Grid)

```css
var(--sl-space-1)  /* 4px - Micro spacing */
var(--sl-space-2)  /* 8px - Related elements */
var(--sl-space-3)  /* 12px - Small padding */
var(--sl-space-4)  /* 16px - Standard padding */
var(--sl-space-6)  /* 24px - Section padding */
var(--sl-space-8)  /* 32px - Large gaps */
var(--sl-space-12) /* 48px - Section margins */
var(--sl-space-16) /* 64px - Major separations */
```

## 🔤 Typography Tokens

### Font Families
```css
var(--sl-font-sans) /* Plus Jakarta Sans */
var(--sl-font-mono) /* SF Mono */
```

### Font Sizes
```css
var(--sl-text-xs)   /* 0.75rem (12px) - Captions */
var(--sl-text-sm)   /* 0.875rem (14px) - Secondary Body */
var(--sl-text-base) /* 1rem (16px) - Primary Body */
var(--sl-text-lg)   /* 1.125rem (18px) - Emphasized Body */
var(--sl-text-xl)   /* 1.25rem (20px) - Large Headings (h3) */
var(--sl-text-2xl)  /* 1.5rem (24px) - Section Titles (h2) */
var(--sl-text-3xl)  /* 2rem (32px) - Page Titles (h1) */
var(--sl-text-4xl)  /* 2.5rem (40px) - Hero Titles */
```

### Font Weights
```css
var(--sl-font-normal)   /* 400 - Body text */
var(--sl-font-medium)   /* 500 - Emphasized */
var(--sl-font-semibold) /* 600 - Subheadings */
var(--sl-font-bold)     /* 700 - Headings */
```

## 🎭 Shadow Tokens

```css
var(--sl-shadow-muted)   /* 0 1px 2px - Subtle lift */
var(--sl-shadow-calm)    /* 0 4px 8px - Card elevation */
var(--sl-shadow-vibrant) /* 0 8px 24px - Modal elevation */
```

## ⏱️ Animation Tokens

```css
var(--sl-duration-fast) /* 150ms - Micro-interactions */
var(--sl-duration-base) /* 300ms - Standard transitions */
var(--sl-duration-slow) /* 500ms - Layout/complex animations */

var(--sl-ease-default) /* cubic-bezier(0.4, 0, 0.2, 1) */
```

## 📦 Component Overview

### Core Elements
- **Button**: ALL buttons must be pill-shaped. `Standard` for 90% of UI, `Expressive` for the main CTA.
- **Input/Textarea/Select**: Use `container-vibrant` as base, `container-calm` on hover, and `container-muted` (white) on focus.
- **Card**: Uses `container-muted` (#FFFFFF) and `sl-radius-card` (16px).
- **Modal/Sheet**: Uses `container-muted` (#FFFFFF) and `sl-radius-container` (24px).
- **Table**: Uses `container-muted` with `container-calm` for header and hover states.

### Interactive Components
- **Accordion**: Curved sections with smooth height transitions.
- **Tabs**: Pill-shaped active states or minimal underlines.
- **Command Palette**: Search-first interface with `container-muted` background.
- **Popover/Tooltip**: Floating content with `card` radius and `vibrant` shadow.

## ⚡ Common Implementation Patterns

### Standard Button
```tsx
<Button>Continue</Button>
```

### Expressive Highlight (Max 1 per screen)
```tsx
<Button variant="expressive">Get Started</Button>
```

### Card with Header and Footer
```tsx
<Card>
  <CardHeader>
    <CardTitle>Settings</CardTitle>
    <CardDescription>Manage your preferences</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>
    <Button variant="ghost">Cancel</Button>
    <Button>Save Changes</Button>
  </CardFooter>
</Card>
```

## 🚫 Common Mistakes to Avoid

1. **Radius Mismatch**: Using `8px` or `4px` for cards. Always use `var(--sl-radius-card)`.
2. **Button Shapes**: Creating rectangular buttons. ALL buttons must be `var(--sl-radius-button)` (pill).
3. **Overusing Expressive**: Using blue for every button. 90% of buttons should be `Standard` (Black/White).
4. **Hardcoded Colors**: Using `#F5F5F5` instead of `var(--sl-container-vibrant)`.
5. **Wrong Nesting**: Putting a `radius-container` inside a `radius-card`. Larger radius must be outside.

## 📋 Pre-Submission Checklist

- [ ] Does it support **Dark Mode**?
- [ ] Are ALL buttons **Pill-shaped**?
- [ ] Is **Expressive** used ONLY for the main highlight?
- [ ] Does the **Radius Hierarchy** follow Section > Container > Card > Input?
- [ ] Are **Intensity Scales** used correctly for background/hover/active?
- [ ] Is it responsive for **Mobile and Desktop**?

---

*Staylook Design System — Curved, Editorial, Minimal, Expressive*
