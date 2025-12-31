---
name: brand-guidelines
description: Applies Staytuned brand colors and typography to artifacts that should match Staytuned's look-and-feel (docs, UI mockups, slides, marketing assets, and internal tooling).
license: Complete terms in LICENSE.txt
version: 2.0.0
tags: [branding, design-system, visual-identity, typography, color, layout, accessibility]
---

# Staytuned Brand Guidelines (Black & White)

## Overview

Use these guidelines to keep Staytuned artifacts visually consistent, minimal, and high-contrast. This document serves as the single source of truth for all brand-related design decisions.

**Keywords:** branding, corporate identity, visual identity, styling, brand colors, typography, visual formatting, visual design, logo usage, iconography, spacing, layout, accessibility

---

## Brand Identity

### Vision & Design Principles

Staytuned's design philosophy is built on these core principles:

1. **Minimalism** — Remove unnecessary elements; every component must earn its place
2. **Clarity** — Information should be immediately understandable
3. **Consistency** — Uniform visual language across all touchpoints
4. **Accessibility** — Design for all users, regardless of ability
5. **Timelessness** — Avoid trends; prefer classic, enduring aesthetics

### Tone of Voice

- **Professional** — Confident and authoritative without being cold
- **Clear** — Direct communication; avoid jargon unless context-appropriate
- **Helpful** — Guide users toward their goals
- **Concise** — Respect users' time; say more with less

---

## Color System

### Primary Palette (Monochrome)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-black` | `#000000` | `rgb(0, 0, 0)` | Primary text, primary surfaces (dark mode), logos |
| `--color-white` | `#FFFFFF` | `rgb(255, 255, 255)` | Primary backgrounds, text on dark surfaces |

### Extended Gray Scale

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-gray-950` | `#0A0A0A` | `rgb(10, 10, 10)` | Near-black for subtle variation |
| `--color-gray-900` | `#111111` | `rgb(17, 17, 17)` | Elevated dark surfaces, dividers on dark |
| `--color-gray-800` | `#1F1F1F` | `rgb(31, 31, 31)` | Dark mode cards, secondary surfaces |
| `--color-gray-700` | `#333333` | `rgb(51, 51, 51)` | Secondary text on light backgrounds |
| `--color-gray-600` | `#555555` | `rgb(85, 85, 85)` | Muted text, icons |
| `--color-gray-500` | `#777777` | `rgb(119, 119, 119)` | Placeholder text, borders |
| `--color-gray-400` | `#999999` | `rgb(153, 153, 153)` | Tertiary text, disabled states |
| `--color-gray-300` | `#BBBBBB` | `rgb(187, 187, 187)` | Light borders, subtle icons |
| `--color-gray-200` | `#DDDDDD` | `rgb(221, 221, 221)` | Dividers on light backgrounds |
| `--color-gray-100` | `#F5F5F5` | `rgb(245, 245, 245)` | Subtle backgrounds, panels, table stripes |
| `--color-gray-050` | `#FAFAFA` | `rgb(250, 250, 250)` | Page background alternative (light mode) |

### Semantic Color Tokens

Map these to the palette above based on context:

| Semantic Token | Light Mode | Dark Mode | Purpose |
|----------------|------------|-----------|---------|
| `--color-background` | `#FFFFFF` | `#000000` | Primary background |
| `--color-background-subtle` | `#FAFAFA` | `#111111` | Secondary background |
| `--color-background-muted` | `#F5F5F5` | `#1F1F1F` | Tertiary background |
| `--color-text-primary` | `#000000` | `#FFFFFF` | Primary text |
| `--color-text-secondary` | `#333333` | `#BBBBBB` | Secondary text |
| `--color-text-tertiary` | `#777777` | `#999999` | Muted/helper text |
| `--color-text-disabled` | `#999999` | `#555555` | Disabled text |
| `--color-border` | `#DDDDDD` | `#333333` | Default borders |
| `--color-border-strong` | `#000000` | `#FFFFFF` | Emphasized borders |
| `--color-divider` | `#F5F5F5` | `#1F1F1F` | Section dividers |

### Functional Colors (Use Sparingly)

When UI requires status indication, use these carefully:

| Status | Hex | Usage |
|--------|-----|-------|
| `--color-success` | `#1A8754` | Success states, confirmations |
| `--color-warning` | `#CC8400` | Warnings, cautions |
| `--color-error` | `#CC0000` | Errors, destructive actions |
| `--color-info` | `#0066CC` | Informational messages |

> ⚠️ **Note:** Functional colors should be used only when absolutely necessary. Prefer monochrome with clear labeling and iconography.

### Color Usage Rules

1. **Default to white backgrounds with black text** in light mode
2. **Use grays for hierarchy** — secondary/tertiary text, borders, subtle fills
3. **Avoid color accents** unless explicitly required (e.g., status states)
4. **Never use color alone** to convey meaning — always pair with text or icons
5. **Maintain WCAG AA contrast** — minimum 4.5:1 for body text, 3:1 for large text

### Color Accessibility

| Combination | Contrast Ratio | WCAG Level |
|-------------|----------------|------------|
| Black on White | 21:1 | AAA |
| Gray 700 on White | 10.69:1 | AAA |
| Gray 400 on White | 3.94:1 | AA Large |
| White on Black | 21:1 | AAA |
| Gray 300 on Black | 10.69:1 | AAA |

---

## Typography

### Font Families

| Purpose | Primary Font | Fallback Stack |
|---------|--------------|----------------|
| Headings | Poppins | `'Poppins', 'Arial', 'Helvetica Neue', sans-serif` |
| Body Text | Lora | `'Lora', 'Georgia', 'Times New Roman', serif` |
| Monospace/Code | JetBrains Mono | `'JetBrains Mono', 'Fira Code', 'Consolas', monospace` |

### Type Scale

Based on a modular scale with ratio 1.25 (Major Third):

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `--text-display` | 48px / 3rem | 1.1 | 700 | Hero headlines, landing pages |
| `--text-h1` | 36px / 2.25rem | 1.2 | 600 | Page titles |
| `--text-h2` | 28px / 1.75rem | 1.25 | 600 | Section headers |
| `--text-h3` | 24px / 1.5rem | 1.3 | 600 | Subsection headers |
| `--text-h4` | 20px / 1.25rem | 1.35 | 600 | Card titles, minor headings |
| `--text-h5` | 18px / 1.125rem | 1.4 | 600 | Small headings |
| `--text-h6` | 16px / 1rem | 1.4 | 600 | Overlines, labels |
| `--text-body-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| `--text-body` | 16px / 1rem | 1.6 | 400 | Default body text |
| `--text-body-sm` | 14px / 0.875rem | 1.5 | 400 | Secondary body text |
| `--text-caption` | 12px / 0.75rem | 1.4 | 400 | Captions, footnotes |
| `--text-overline` | 11px / 0.6875rem | 1.3 | 500 | Category labels, metadata |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `--font-weight-regular` | 400 | Body text, default |
| `--font-weight-medium` | 500 | Emphasis, buttons, labels |
| `--font-weight-semibold` | 600 | Headings, strong emphasis |
| `--font-weight-bold` | 700 | Display text, critical emphasis |

### Letter Spacing (Tracking)

| Context | Value | Token |
|---------|-------|-------|
| Display/Headlines | -0.02em | `--tracking-tight` |
| Body text | 0 | `--tracking-normal` |
| Overlines/Labels | 0.05em | `--tracking-wide` |
| All caps text | 0.1em | `--tracking-wider` |

### Line Height (Leading)

| Context | Value | Token |
|---------|-------|-------|
| Headlines | 1.1–1.3 | `--leading-tight` |
| Body text | 1.5–1.6 | `--leading-normal` |
| Relaxed reading | 1.75 | `--leading-relaxed` |

### Typography Best Practices

1. **Hierarchy through size and weight** — not color
2. **Optimal line length** — 50-75 characters for body text
3. **Consistent alignment** — prefer left-aligned text; center only for short headings
4. **Responsive scaling** — reduce heading sizes on mobile by ~15-20%
5. **No underlines** except for links

### Responsive Typography

| Breakpoint | Scale Factor | Example: H1 |
|------------|--------------|-------------|
| Mobile (<640px) | 0.85x | 30px |
| Tablet (640-1024px) | 0.925x | 33px |
| Desktop (>1024px) | 1x | 36px |

---

## Layout & Spacing

### Spacing Scale

Based on an 8px base unit (4px for fine adjustments):

| Token | Value | Common Uses |
|-------|-------|-------------|
| `--space-0` | 0 | Reset |
| `--space-1` | 4px | Tight inline spacing, icon gaps |
| `--space-2` | 8px | Related element spacing |
| `--space-3` | 12px | Compact padding |
| `--space-4` | 16px | Default padding, component gaps |
| `--space-5` | 20px | Comfortable padding |
| `--space-6` | 24px | Card padding, section gaps |
| `--space-8` | 32px | Large gaps, section spacing |
| `--space-10` | 40px | Major section separation |
| `--space-12` | 48px | Page section margins |
| `--space-16` | 64px | Hero sections, large separations |
| `--space-20` | 80px | Page-level spacing |
| `--space-24` | 96px | Maximum section spacing |

### Grid System

| Breakpoint | Columns | Gutter | Margin | Max Width |
|------------|---------|--------|--------|-----------|
| Mobile (<640px) | 4 | 16px | 16px | 100% |
| Tablet (640-1024px) | 8 | 24px | 32px | 100% |
| Desktop (1024-1280px) | 12 | 24px | 48px | 1200px |
| Wide (>1280px) | 12 | 32px | auto | 1440px |

### Breakpoints

| Token | Value | Target |
|-------|-------|--------|
| `--breakpoint-sm` | 640px | Large phones, small tablets |
| `--breakpoint-md` | 768px | Tablets |
| `--breakpoint-lg` | 1024px | Small desktops, landscape tablets |
| `--breakpoint-xl` | 1280px | Desktops |
| `--breakpoint-2xl` | 1536px | Large desktops |

### Container Widths

| Token | Max Width | Usage |
|-------|-----------|-------|
| `--container-sm` | 640px | Narrow content (articles) |
| `--container-md` | 768px | Medium content |
| `--container-lg` | 1024px | Standard content |
| `--container-xl` | 1280px | Wide content |
| `--container-full` | 100% | Full-width sections |

---

## Logo & Brand Assets

### Logo Usage

#### Clear Space

Maintain minimum clear space around the logo equal to the height of the "S" in "Staytuned" on all sides.

```
┌─────────────────────────────┐
│         [clear]             │
│  [clear] LOGO [clear]       │
│         [clear]             │
└─────────────────────────────┘
```

#### Minimum Sizes

| Format | Minimum Width | Context |
|--------|---------------|---------|
| Digital | 80px | Web, mobile apps |
| Print | 25mm | Business cards, small print |
| Favicon | 16px | Browser tab |

#### Logo Variations

| Variant | Background | Usage |
|---------|------------|-------|
| Primary (Black) | Light backgrounds | Default |
| Reversed (White) | Dark backgrounds | Dark mode, overlays |
| Monochrome | Any | Single-color contexts |

### Logo Don'ts

- ❌ Don't stretch or distort proportions
- ❌ Don't rotate the logo
- ❌ Don't add effects (shadows, gradients, glows)
- ❌ Don't change the colors outside approved variants
- ❌ Don't place on busy backgrounds without contrast
- ❌ Don't recreate or modify the logo

---

## Iconography

### Icon Style

- **Style:** Outlined (stroke-based), not filled
- **Stroke Width:** 1.5px at 24px size (scale proportionally)
- **Corner Radius:** Slightly rounded (2px radius at 24px)
- **Grid:** 24x24px bounding box with 2px padding

### Icon Sizes

| Token | Size | Usage |
|-------|------|-------|
| `--icon-xs` | 12px | Inline with small text |
| `--icon-sm` | 16px | Buttons, form elements |
| `--icon-md` | 20px | Navigation, list items |
| `--icon-base` | 24px | Default, standalone icons |
| `--icon-lg` | 32px | Feature highlights |
| `--icon-xl` | 48px | Hero sections, empty states |

### Icon Colors

- Use `--color-text-primary` for actionable icons
- Use `--color-text-secondary` for decorative/supportive icons
- Use `--color-text-disabled` for disabled states
- Inherit color from parent text when inline

### Reserved Icons

These icons have fixed meanings and must not be repurposed:

| Icon | Reserved Meaning |
|------|------------------|
| ✕ (Close) | Close/dismiss |
| ← (Arrow left) | Back/previous |
| → (Arrow right) | Forward/next |
| ↓ (Arrow down) | Download/expand |
| + (Plus) | Add/create |
| − (Minus) | Remove/collapse |
| ✓ (Check) | Success/selected |
| ⚠ (Warning) | Warning/caution |
| ⓘ (Info) | Information |

---

## Elevation & Depth

### Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-none` | none | Flat elements |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift (buttons) |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, popovers |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Dialogs, overlays |

> **Note:** In the monochrome Staytuned style, prefer **borders and spacing** over shadows for separation. Use shadows sparingly.

### Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default stacking |
| `--z-dropdown` | 100 | Dropdowns, selects |
| `--z-sticky` | 200 | Sticky headers |
| `--z-overlay` | 300 | Overlays, backdrops |
| `--z-modal` | 400 | Modals, dialogs |
| `--z-popover` | 500 | Popovers, tooltips |
| `--z-toast` | 600 | Toast notifications |
| `--z-max` | 9999 | Emergency overrides only |

---

## Motion & Animation

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-instant` | 0ms | Immediate (no animation) |
| `--duration-fast` | 100ms | Micro-interactions (hover, focus) |
| `--duration-normal` | 200ms | Standard transitions |
| `--duration-slow` | 300ms | Complex animations |
| `--duration-slower` | 500ms | Page transitions, modals |

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-linear` | `linear` | Progress bars, continuous |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |

### Animation Principles

1. **Purpose** — Every animation should have a reason (guide attention, show relationships)
2. **Subtlety** — Prefer subtle, quick animations over dramatic ones
3. **Consistency** — Use the same timing for similar interactions
4. **Accessibility** — Respect `prefers-reduced-motion` preference

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Borders & Dividers

### Border Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--border-none` | 0 | No border |
| `--border-thin` | 1px | Default borders |
| `--border-medium` | 2px | Emphasized borders, focus rings |
| `--border-thick` | 4px | Strong emphasis |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Sharp corners |
| `--radius-sm` | 2px | Subtle rounding |
| `--radius-md` | 4px | Default (buttons, inputs) |
| `--radius-lg` | 8px | Cards, containers |
| `--radius-xl` | 12px | Large cards, modals |
| `--radius-full` | 9999px | Pills, avatars |

### Divider Styles

- **Light mode:** 1px solid `--color-gray-200`
- **Dark mode:** 1px solid `--color-gray-800`
- **Strong divider:** 1px solid `--color-border-strong`

---

## Imagery & Photography

### Photography Style

- **Aesthetic:** High contrast, black and white preferred
- **Mood:** Professional, clean, authentic
- **Subjects:** Real people, genuine moments, minimal staging
- **Composition:** Clean backgrounds, rule of thirds, ample negative space

### Image Treatment

1. **Color images:** Convert to grayscale or apply black/white filter
2. **Contrast:** Increase contrast slightly for impact
3. **Overlays:** Use semi-transparent black (`rgba(0,0,0,0.4-0.6)`) for text overlay

### Aspect Ratios

| Token | Ratio | Usage |
|-------|-------|-------|
| `--aspect-square` | 1:1 | Avatars, thumbnails |
| `--aspect-video` | 16:9 | Videos, hero images |
| `--aspect-photo` | 4:3 | Standard photos |
| `--aspect-portrait` | 3:4 | Portrait images |
| `--aspect-wide` | 21:9 | Cinematic banners |

---

## Accessibility Guidelines

### Contrast Requirements

| Content Type | Minimum Ratio | WCAG Level |
|--------------|---------------|------------|
| Body text | 4.5:1 | AA |
| Large text (18px+ or 14px bold) | 3:1 | AA |
| UI components, graphics | 3:1 | AA |
| Enhanced (preferred) | 7:1 | AAA |

### Focus States

All interactive elements must have visible focus indicators:

```css
:focus-visible {
  outline: 2px solid var(--color-black);
  outline-offset: 2px;
}
```

### Touch Targets

- **Minimum size:** 44x44px for touch devices
- **Desktop minimum:** 24x24px
- **Spacing:** At least 8px between adjacent targets

### Screen Reader Considerations

- Use semantic HTML (`<button>`, `<nav>`, `<main>`, `<article>`)
- Provide `aria-label` for icon-only buttons
- Use `aria-live` regions for dynamic content updates
- Ensure logical heading hierarchy (h1 → h2 → h3)

---

## Writing & Content Guidelines

### Microcopy Standards

| Element | Guidelines | Example |
|---------|------------|---------|
| Buttons | Action verb, 1-3 words | "Save changes" not "Click here to save" |
| Labels | Noun or short phrase | "Email address" |
| Placeholders | Example format | "name@example.com" |
| Error messages | What went wrong + how to fix | "Email is required. Please enter your email." |
| Empty states | Explain + suggest action | "No results found. Try adjusting your filters." |

### Capitalization

- **Headings:** Title Case for major headings, Sentence case for subheadings
- **Buttons:** Sentence case ("Save changes")
- **Labels:** Sentence case ("Email address")
- **Navigation:** Title Case ("About Us")

### Punctuation

- No periods on single-sentence labels or buttons
- Use periods in multi-sentence help text
- Avoid exclamation points (use sparingly if necessary)

---

## Component Patterns

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| Primary | Black | White | None | Primary actions |
| Secondary | White | Black | 1px Black | Secondary actions |
| Ghost | Transparent | Black | None | Tertiary actions |
| Disabled | Gray 100 | Gray 400 | None | Unavailable actions |

### Form Elements

- **Input height:** 44px (touch-friendly)
- **Border:** 1px solid `--color-gray-300`
- **Focus border:** 2px solid `--color-black`
- **Error border:** 2px solid `--color-error`
- **Border radius:** `--radius-md` (4px)

### Cards

- **Background:** `--color-white` (light) / `--color-gray-900` (dark)
- **Border:** 1px solid `--color-border`
- **Padding:** `--space-6` (24px)
- **Border radius:** `--radius-lg` (8px)

---

## Implementation Checklist

### Design Tokens Setup

- [ ] Color tokens defined (semantic + raw values)
- [ ] Typography scale implemented
- [ ] Spacing scale configured
- [ ] Border radius tokens set
- [ ] Shadow tokens created
- [ ] Z-index scale established
- [ ] Motion/animation tokens defined
- [ ] Breakpoints configured

### Accessibility

- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Focus states visible on all interactive elements
- [ ] Touch targets minimum 44x44px
- [ ] Reduced motion preferences respected
- [ ] Semantic HTML used throughout

### Dark Mode

- [ ] All semantic color tokens have dark mode variants
- [ ] Shadows adjusted for dark backgrounds
- [ ] Images/icons work on both light and dark

---

## Technical Details

### Font Management

- Uses system-installed fonts when available
- Provides fallback to Arial (headings) and Georgia (body)
- No font installation required, but pre-installing preferred fonts improves consistency
- Use `font-display: swap` for web fonts to prevent FOIT

### Color Application

- Use RGB/hex values exactly as specified to avoid drift
- If tooling supports tokens, map the palette to semantic tokens
- Always define both light and dark mode values
- Test colors in actual usage contexts, not just in isolation

### CSS Custom Properties Example

```css
:root {
  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-gray-100: #F5F5F5;
  --color-gray-700: #333333;
  
  /* Typography */
  --font-heading: 'Poppins', Arial, sans-serif;
  --font-body: 'Lora', Georgia, serif;
  
  /* Spacing */
  --space-4: 16px;
  --space-6: 24px;
  
  /* Borders */
  --radius-md: 4px;
  --border-default: 1px solid var(--color-gray-200);
}
```

---

## Resources & References

### Internal Resources

- Design token files (Figma/Sketch libraries)
- Component library documentation
- Brand asset repository

### External References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Material Design](https://material.io/design)
- [Nielsen Norman Group](https://www.nngroup.com/)
- [Inclusive Components](https://inclusive-components.design/)
