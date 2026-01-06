# Staylook Color Palette Reference

> Visual reference for hierarchical color tokens

---

## Token Hierarchy

```
standard       →  Primary color (90% of UI)
expressive     →  Accent color (10% of UI, max 1 per screen)
container/     →  Background/surface colors
on/            →  Content ON surfaces (text, icons)
on/container/  →  Secondary content ON containers
outline/       →  Border colors
```

---

## 1. Standard Color (Primary - 90% of UI)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--sl-standard` | `#000000` | `#FFFFFF` | Primary text/icons |
| `--sl-standard-soft` | `#4D4D4D` | `#CCCCCC` | Secondary text |
| `--sl-standard-muted` | `#9E9E9E` | `#6A6A6A` | Muted/disabled |

---

## 2. Expressive Color (Accent - 10% of UI)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--sl-expressive` | `#3373CC` | `#5C9FFF` | THE highlight |
| `--sl-expressive-soft` | `#5C9FFF` | `#7EB8FF` | Hover state |
| `--sl-expressive-muted` | `#BBDEFB` | `#1E3A5F` | Background tint |

---

## 3. Container Tokens (Surfaces)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--sl-container-muted` | `#EBEBEB` | `#333333` | Secondary surfaces |
| `--sl-container-calm` | `#F5F5F5` | `#292929` | Page backgrounds |
| `--sl-container-vibrant` | `#FFFFFF` | `#1A1A1A` | Primary surfaces |

---

## 4. On Tokens (Content Colors)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--sl-on-standard` | `#000000` | `#FFFFFF` | Primary text/icons |
| `--sl-on-expressive` | `#3373CC` | `#7EB8FF` | Accent elements |
| `--sl-on-error` | `#D32F2F` | `#FF8A80` | Error states |
| `--sl-on-success` | `#388E3C` | `#81C784` | Success states |
| `--sl-on-warning` | `#F57C00` | `#FFB74D` | Warning states |
| `--sl-on-info` | `#1976D2` | `#64B5F6` | Info states |

---

## 5. On/Container Tokens (Secondary Content)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--sl-on-container-muted` | `#666666` | `#808080` | Muted text |
| `--sl-on-container-calm` | `#4D4D4D` | `#CCCCCC` | Secondary text |
| `--sl-on-container-vibrant` | `#1A1A1A` | `#F5F5F5` | Body text |

---

## 6. Outline Tokens (Borders)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--sl-outline-muted` | `#E0E0E0` | `#424242` | Subtle dividers |
| `--sl-outline-calm` | `#BDBDBD` | `#616161` | Card borders |
| `--sl-outline-vibrant` | `#1A1A1A` | `#FAFAFA` | Focus states |
| `--sl-outline-expressive` | `#5C9FFF` | `#BBDEFB` | Accent borders |

---

## 7. Scrim & Overlay

| Token | Value | Usage |
|-------|-------|-------|
| `--sl-scrim` | `rgba(0,0,0,0.3)` | Light overlay |
| `--sl-scrim-modal` | `rgba(77,77,77,0.7)` | Modal backdrop |

---

## Quick Reference CSS

```css
:root {
  /* Standard (90% of UI) */
  --sl-standard: #000000;
  --sl-standard-soft: #4D4D4D;
  --sl-standard-muted: #9E9E9E;
  
  /* Expressive (10% of UI) */
  --sl-expressive: #3373CC;
  --sl-expressive-soft: #5C9FFF;
  --sl-expressive-muted: #BBDEFB;
  
  /* Container (Surfaces) */
  --sl-container-muted: #EBEBEB;
  --sl-container-calm: #F5F5F5;
  --sl-container-vibrant: #FFFFFF;
  
  /* On (Content) */
  --sl-on-standard: #000000;
  --sl-on-expressive: #3373CC;
  --sl-on-error: #D32F2F;
  --sl-on-success: #388E3C;
  --sl-on-warning: #F57C00;
  --sl-on-info: #1976D2;
  
  /* Outline (Borders) */
  --sl-outline-muted: #E0E0E0;
  --sl-outline-calm: #BDBDBD;
  --sl-outline-vibrant: #1A1A1A;
  
  /* Scrim */
  --sl-scrim: rgba(0,0,0,0.3);
  --sl-scrim-modal: rgba(77,77,77,0.7);
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --sl-standard: #FFFFFF;
    --sl-standard-soft: #CCCCCC;
    --sl-standard-muted: #6A6A6A;
    --sl-expressive: #5C9FFF;
    --sl-container-muted: #333333;
    --sl-container-calm: #292929;
    --sl-container-vibrant: #1A1A1A;
    --sl-on-standard: #FFFFFF;
    --sl-on-expressive: #7EB8FF;
    --sl-outline-muted: #424242;
    --sl-outline-calm: #616161;
    --sl-outline-vibrant: #FAFAFA;
  }
}
```

---

*Staylook Color Palette — Hierarchical Reference*
