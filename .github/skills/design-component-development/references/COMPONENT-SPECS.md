# Component Specifications Reference

> Detailed specifications for all Staylook UI components

---

## Button Specifications

### Button Priority Hierarchy

| Priority | Name | Color | Budget | Shape |
|----------|------|-------|--------|-------|
| 1 | Expressive | Accent (`#3373CC`) | Max 1/screen | Pill (9999px) |
| 2 | Standard | Ink outline | Unlimited | Pill (9999px) |
| 3 | Ghost | Ink soft, transparent | Unlimited | Pill (9999px) |

### Button Sizes

| Size | Padding | Font Size | Min Height | Use Case |
|------|---------|-----------|------------|----------|
| Small | `8px × 16px` | `text-sm` (14px) | 32px | Inline, dense UI |
| Medium | `12px × 24px` | `text-base` (16px) | 44px | Default |
| Large | `16px × 32px` | `text-lg` (18px) | 52px | Hero sections |

### Button States

| State | Expressive | Standard | Ghost |
|-------|------------|----------|-------|
| Resting | Accent bg, white text | Ink outline, ink text | Transparent, ink soft |
| Hover | Accent dark bg | Vibrant outline | Calm surface |
| Active | Accent dark bg, scale(0.98) | Calm surface | Vibrant surface |
| Focus | 2px outline, 2px offset, blue glow | Same | Same |
| Disabled | 70% opacity, not-allowed | Same | Same |

---

## Card Specifications

### Card Base

| Property | Value |
|----------|-------|
| Border Radius | `16px` (--radius-card) |
| Background | Muted surface (`#FFFFFF`) |
| Border | `1px solid` Outline Muted |
| Shadow | Shadow Muted |
| Padding | `20px` (space-5) |

### Card Variants

| Variant | Border | Shadow | Background | Use Case |
|---------|--------|--------|------------|----------|
| Standard | Muted | Muted | Muted | Static display |
| Interactive | Muted → Calm on hover | Muted → Calm | Muted | Clickable |
| Outlined | Calm | None | Muted | Stronger definition |
| Elevated | None | Calm → Vibrant | Muted | Prominent content |
| Expressive | Accent | Accent | Accent light | THE highlight |

### Interactive Card States

| State | Border | Shadow | Transform |
|-------|--------|--------|-----------|
| Resting | Muted | Muted | none |
| Hover | Calm | Calm | translateY(-2px) |
| Active | Calm | Muted | none |
| Focus | Vibrant | Calm | none + blue outline |

---

## Input Specifications

### Input Base

| Property | Value |
|----------|-------|
| Border Radius | `16px` (--radius-input) |
| Background | Vibrant surface (`#F0F0F0`) |
| Border | `1px solid` Outline Muted |
| Height | `48px` minimum |
| Padding | `12px × 16px` |
| Font | `text-base`, font-sans |

### Input States

| State | Background | Border | Additional |
|-------|------------|--------|------------|
| Resting | Vibrant | Muted | — |
| Hover | Vibrant | Calm | — |
| Focus | Muted | Vibrant | 4px blue glow |
| Error | Light red tint | Red | Error icon |
| Success | Light green tint | Green | Check icon |
| Disabled | Calm | Muted | 70% opacity |

### Input Types

| Type | Height | Resize | Notes |
|------|--------|--------|-------|
| Text | 48px | — | Standard single-line |
| Textarea | 120px min | Vertical only | Multiline |
| Select | 48px | — | Custom dropdown 24px radius |
| Checkbox | 20×20px | — | 4px radius, accent when checked |
| Radio | 20×20px | — | Full circle, accent when checked |

---

## Layout Container Specifications

### Container Hierarchy

| Container | Radius | Background | Padding | Usage |
|-----------|--------|------------|---------|-------|
| Page Wrapper | 0 (full bleed) | Calm | 24px | Outermost |
| Section | 32px | Muted | 32px | Major sections |
| Container | 24px | — | 24px | Content wrappers |
| Card | 16px | Muted | 20px | Information groups |

### Container Max Widths

| Size | Width | Usage |
|------|-------|-------|
| xs | 480px | Narrow forms |
| sm | 640px | Articles |
| md | 768px | Standard forms |
| lg | 1024px | Wider layouts |
| xl | 1280px | Default main |
| 2xl | 1440px | Wide screens |

---

## Badge Specifications

### Badge Base

| Property | Value |
|----------|-------|
| Border Radius | `8px` (--radius-badge) |
| Padding | `4px × 12px` |
| Font Size | `text-xs` (12px) |
| Font Weight | 600 (semibold) |
| Text Transform | uppercase |
| Letter Spacing | 0.05em |

### Badge Variants

| Variant | Background | Text | Border | Use Case |
|---------|------------|------|--------|----------|
| Muted | Vibrant surface | Ink Muted | — | Low priority |
| Calm | Calm surface | `--sl-standard-soft` | Calm | Standard |
| Vibrant | Ink | Base (white) | — | High priority |
| Expressive | Accent | Base (white) | — | THE highlight |
| Expressive Light | Accent Light | Accent Dark | — | Accent info |

### Status Badges

| Status | Background | Text |
|--------|------------|------|
| Success | Light green | Green |
| Warning | Light orange | Orange |
| Error | Light red | Red |
| Info | Accent light | Accent dark |

---

## Modal Specifications

### Modal Structure

| Component | Specification |
|-----------|---------------|
| Backdrop | Fixed, full viewport, black 50%, blur 4px, z-100 |
| Container | 90% width, max 480px, max-height 90vh, overflow auto |
| Border Radius | `24px` (--radius-container) |
| Background | Muted surface |
| Shadow | Vibrant shadow |
| Padding | `24px` (space-6) |

### Modal Sections

| Section | Specification |
|---------|---------------|
| Header | margin-bottom space-4 |
| Title | text-xl, weight 700, `--sl-standard` |
| Body | `--sl-standard-soft` color, leading-relaxed |
| Footer | flex, gap space-3, justify-end, margin-top space-6 |

### Modal Button Pattern

| Position | Button Type |
|----------|-------------|
| Left (Cancel) | Standard button |
| Right (Confirm) | Expressive button (THE highlight) |

---

## Grid Specifications

### Gap Sizes

| Context | Gap |
|---------|-----|
| Card grid | `16px` (space-4) |
| Form fields | `16px` (space-4) |
| Related items | `8px` (space-2) |
| Sections | `32px+` (space-8+) |

### Column Configurations

| Breakpoint | Columns | Min Card Width |
|------------|---------|----------------|
| Mobile (<640px) | 1 | — |
| Tablet (768px) | 2 | 280px |
| Desktop (1024px) | 3 | 280px |
| Large (1280px+) | 4 | 280px |

---

## Stack/Row Specifications

### Gap Scale

| Size | Value | Usage |
|------|-------|-------|
| xs | 4px | Icon gaps |
| sm | 8px | Related items |
| md | 16px | Default |
| lg | 24px | Group spacing |
| xl | 32px | Section spacing |

### Stack (Vertical)
- Direction: flex-direction column
- Align: stretch (default)

### Row (Horizontal)
- Direction: flex-direction row
- Align: center (default)
- Wrap: responsive

---

## Focus State Specifications

### All Interactive Elements

| Property | Value |
|----------|-------|
| Outline | 2px solid blue |
| Outline Offset | 2px |
| Box Shadow | 0 0 0 4px rgba(51, 115, 204, 0.2) |
| Transition | duration-fast ease-default |

---

*Component Specifications — Staylook Reference*
