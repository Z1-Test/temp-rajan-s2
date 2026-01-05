# Staylook Design Tokens Reference

> Complete token values for the Staylook Design System

---

## Color Tokens

### Standard Colors (90% of UI)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-ink` | `#1A1A1A` | `#FFFFFF` | Primary text, headings, icons |
| `--color-ink-soft` | `#4A4A4A` | `#B8B8B8` | Body text, descriptions |
| `--color-ink-muted` | `#9E9E9E` | `#6A6A6A` | Captions, hints, placeholders |

### Expressive Colors (10% of UI, max 1 per screen)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-accent` | `#3373CC` | `#5C9FFF` | THE highlight button, links |
| `--color-accent-light` | `#E8F0FA` | `#1E3A5F` | Accent backgrounds |
| `--color-accent-dark` | `#264D99` | `#7BB5FF` | Accent hover states |

### Base Color

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-base` | `#FFFFFF` | `#121212` | Page canvas, inverse text |

---

## Intensity Scale

### Surfaces (Backgrounds)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--surface-muted` | `#FFFFFF` | `#1A1A1A` | Cards, modals, elevated content |
| `--surface-calm` | `#FAFAFA` | `#242424` | Page backgrounds, sections |
| `--surface-vibrant` | `#F0F0F0` | `#2E2E2E` | Inputs, active states, hovers |

### Outlines (Borders)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--outline-muted` | `#F2F2F2` | `#2A2A2A` | Subtle dividers, ghost elements |
| `--outline-calm` | `#E0E0E0` | `#3A3A3A` | Card borders, input borders |
| `--outline-vibrant` | `#1A1A1A` | `#FFFFFF` | Focus states, active elements |

### Shadows (Elevation)

| Token | Light Mode | Usage |
|-------|------------|-------|
| `--shadow-muted` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle lift, resting cards |
| `--shadow-calm` | `0 4px 8px rgba(0,0,0,0.08)` | Standard elevation, dropdowns |
| `--shadow-vibrant` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, popovers, focused |

---

## Radius Tokens (Strict Nesting)

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-section` | `32px` | Outermost content areas |
| `--radius-container` | `24px` | Major content wrappers, modals |
| `--radius-card` | `16px` | Information containers |
| `--radius-input` | `16px` | Form fields |
| `--radius-badge` | `8px` | Small indicators, tags |
| `--radius-button` | `9999px` | ALL buttons (pill shape) |

### Nesting Hierarchy

```
Section (32px)
  └── Container (24px)
       └── Card (16px)
            └── Input (16px)
                 └── Badge (8px)
                      └── Button (pill/9999px)
```

---

## Typography Tokens

### Font Families

| Token | Value |
|-------|-------|
| `--font-sans` | `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif` |
| `--font-mono` | `'SF Mono', Monaco, 'Fira Code', monospace` |

### Type Scale

| Token | Size (rem) | Size (px) | Usage |
|-------|------------|-----------|-------|
| `--text-xs` | `0.75rem` | 12px | Captions, labels |
| `--text-sm` | `0.875rem` | 14px | Secondary text, metadata |
| `--text-base` | `1rem` | 16px | Body text |
| `--text-lg` | `1.125rem` | 18px | Emphasized body |
| `--text-xl` | `1.25rem` | 20px | Subheadings |
| `--text-2xl` | `1.5rem` | 24px | Section titles |
| `--text-3xl` | `2rem` | 32px | Page titles |
| `--text-4xl` | `2.5rem` | 40px | Hero titles |
| `--text-5xl` | `3rem` | 48px | Display text |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-normal` | `400` | Body text |
| `--font-medium` | `500` | Emphasized text |
| `--font-semibold` | `600` | Subheadings, labels |
| `--font-bold` | `700` | Headings, strong emphasis |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--leading-tight` | `1.25` | Headings |
| `--leading-normal` | `1.5` | UI text |
| `--leading-relaxed` | `1.75` | Body paragraphs |

---

## Spacing Tokens (4px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Micro spacing, icon gaps |
| `--space-2` | `8px` | Related element gaps |
| `--space-3` | `12px` | Small internal padding |
| `--space-4` | `16px` | Standard padding |
| `--space-5` | `20px` | Card internal padding |
| `--space-6` | `24px` | Section padding |
| `--space-8` | `32px` | Large gaps |
| `--space-10` | `40px` | Major separations |
| `--space-12` | `48px` | Section margins |
| `--space-16` | `64px` | Major separations |
| `--space-20` | `80px` | Hero spacing |
| `--space-24` | `96px` | Page sections |

---

## Animation Tokens

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | `150ms` | Micro-interactions, hovers |
| `--duration-base` | `300ms` | Standard transitions |
| `--duration-slow` | `500ms` | Complex animations, page transitions |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | All transitions |

---

## Breakpoint Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--breakpoint-sm` | `640px` | Small tablets |
| `--breakpoint-md` | `768px` | Tablets |
| `--breakpoint-lg` | `1024px` | Laptops |
| `--breakpoint-xl` | `1280px` | Desktops |
| `--breakpoint-2xl` | `1536px` | Large screens |

---

## Container Max Widths

| Token | Value | Usage |
|-------|-------|-------|
| `--container-xs` | `480px` | Narrow forms |
| `--container-sm` | `640px` | Articles |
| `--container-md` | `768px` | Standard forms |
| `--container-lg` | `1024px` | Wider layouts |
| `--container-xl` | `1280px` | Default main content |
| `--container-2xl` | `1440px` | Wide screens |

---

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-dropdown` | `50` | Dropdowns, select menus |
| `--z-sticky` | `60` | Sticky headers |
| `--z-fixed` | `70` | Fixed elements |
| `--z-modal-backdrop` | `80` | Modal backdrop |
| `--z-modal` | `90` | Modal content |
| `--z-popover` | `100` | Popovers, tooltips |
| `--z-toast` | `110` | Toast notifications |

---

## CSS Custom Properties Template

```css
:root {
  /* Standard Colors */
  --color-ink: #1A1A1A;
  --color-ink-soft: #4A4A4A;
  --color-ink-muted: #9E9E9E;
  
  /* Expressive Colors */
  --color-accent: #3373CC;
  --color-accent-light: #E8F0FA;
  --color-accent-dark: #264D99;
  
  /* Base */
  --color-base: #FFFFFF;
  
  /* Surfaces */
  --surface-muted: #FFFFFF;
  --surface-calm: #FAFAFA;
  --surface-vibrant: #F0F0F0;
  
  /* Outlines */
  --outline-muted: #F2F2F2;
  --outline-calm: #E0E0E0;
  --outline-vibrant: #1A1A1A;
  
  /* Shadows */
  --shadow-muted: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-calm: 0 4px 8px rgba(0,0,0,0.08);
  --shadow-vibrant: 0 8px 24px rgba(0,0,0,0.12);
  
  /* Radius */
  --radius-section: 32px;
  --radius-container: 24px;
  --radius-card: 16px;
  --radius-input: 16px;
  --radius-badge: 8px;
  --radius-button: 9999px;
  
  /* Typography */
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'SF Mono', Monaco, monospace;
  
  /* Animation */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

*Staylook Design Tokens — Complete Reference*
