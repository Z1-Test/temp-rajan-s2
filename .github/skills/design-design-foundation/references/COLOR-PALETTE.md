# Staylook Color Palette Reference

> Visual color reference for all Staylook design tokens

---

## Standard Colors (90% of UI)

### Ink (Primary Text)
| Token | Light Mode | Dark Mode | Sample |
|-------|------------|-----------|--------|
| `--color-ink` | `#1A1A1A` | `#FFFFFF` | ████ → Text, headings |
| `--color-ink-soft` | `#4A4A4A` | `#B8B8B8` | ████ → Body text |
| `--color-ink-muted` | `#9E9E9E` | `#6A6A6A` | ████ → Captions |

---

## Expressive Colors (10% of UI, max 1 per screen)

### Accent (THE Highlight)
| Token | Light Mode | Dark Mode | Sample |
|-------|------------|-----------|--------|
| `--color-accent` | `#3373CC` | `#5C9FFF` | ████ → Highlight button |
| `--color-accent-light` | `#E8F0FA` | `#1E3A5F` | ████ → Accent bg |
| `--color-accent-dark` | `#264D99` | `#7BB5FF` | ████ → Accent hover |

---

## Base Color

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `--color-base` | `#FFFFFF` | `#121212` |

---

## Intensity Scale - Surfaces

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--surface-muted` | `#FFFFFF` | `#1A1A1A` | Cards, modals |
| `--surface-calm` | `#FAFAFA` | `#242424` | Page backgrounds |
| `--surface-vibrant` | `#F0F0F0` | `#2E2E2E` | Inputs, hover |

---

## Intensity Scale - Outlines

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--outline-muted` | `#F2F2F2` | `#2A2A2A` | Subtle dividers |
| `--outline-calm` | `#E0E0E0` | `#3A3A3A` | Card borders |
| `--outline-vibrant` | `#1A1A1A` | `#FFFFFF` | Focus states |

---

## Intensity Scale - Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-muted` | `0 1px 2px rgba(0,0,0,0.04)` | Resting cards |
| `--shadow-calm` | `0 4px 8px rgba(0,0,0,0.08)` | Dropdowns |
| `--shadow-vibrant` | `0 8px 24px rgba(0,0,0,0.12)` | Modals |

---

## Semantic Colors (Feedback)

| Purpose | Background | Text/Border | Sample |
|---------|------------|-------------|--------|
| Success | `#DCFCE7` | `#16A34A` | ████ |
| Warning | `#FEF3C7` | `#D97706` | ████ |
| Error | `#FEE2E2` | `#DC2626` | ████ |
| Info | `#E8F0FA` | `#3373CC` | ████ |

---

## CSS Variables Template

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
  
  /* Surfaces (Muted → Calm → Vibrant) */
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
  
  /* Semantic */
  --color-success: #16A34A;
  --color-success-bg: #DCFCE7;
  --color-warning: #D97706;
  --color-warning-bg: #FEF3C7;
  --color-error: #DC2626;
  --color-error-bg: #FEE2E2;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-ink: #FFFFFF;
    --color-ink-soft: #B8B8B8;
    --color-ink-muted: #6A6A6A;
    --color-accent: #5C9FFF;
    --color-accent-light: #1E3A5F;
    --color-accent-dark: #7BB5FF;
    --color-base: #121212;
    --surface-muted: #1A1A1A;
    --surface-calm: #242424;
    --surface-vibrant: #2E2E2E;
    --outline-muted: #2A2A2A;
    --outline-calm: #3A3A3A;
    --outline-vibrant: #FFFFFF;
  }
}
```

---

*Staylook Color Palette — Complete Reference*
