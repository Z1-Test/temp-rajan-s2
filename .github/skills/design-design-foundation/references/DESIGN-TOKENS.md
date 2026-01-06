# Staylook Design Tokens Reference

> Hierarchical semantic token system for the Staylook Design System

---

## Token Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        SEMANTIC TOKENS                          │
├─────────────────────────────────────────────────────────────────┤
│  container/     │  on/           │  outline/      │  other      │
│  ├── muted      │  ├── standard  │  ├── standard  │  ├── scrim  │
│  ├── calm       │  ├── expressive│  ├── expressive│  ├── shadow │
│  └── vibrant    │  ├── error     │  ├── error     │  └── ...    │
│                 │  ├── success   │  ├── success   │             │
│                 │  ├── warning   │  ├── warning   │             │
│                 │  └── info      │  └── info      │             │
├─────────────────────────────────────────────────────────────────┤
│                        BASE PALETTE                              │
│  palette/standard/0-100  │  palette/expressive/0-100            │
│  palette/custom/red      │  palette/custom/green                │
│  palette/custom/yellow   │  palette/custom/blue                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 1. Standard Color (Primary Color - 90% of UI)

The standard color is used for most UI elements - text, icons, borders, buttons.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-standard` | `#000000` | `#FFFFFF` | Primary color/text |
| `--sl-standard-soft` | `#4D4D4D` | `#CCCCCC` | Secondary text |
| `--sl-standard-muted` | `#9E9E9E` | `#6A6A6A` | Muted/disabled text |

---

## 2. Expressive Color (Accent - 10% of UI, max 1 per screen)

The expressive color is THE highlight - used sparingly for the single most important element.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-expressive` | `#3373CC` | `#5C9FFF` | THE highlight element |
| `--sl-expressive-soft` | `#5C9FFF` | `#7EB8FF` | Hover state |
| `--sl-expressive-muted` | `#BBDEFB` | `#1E3A5F` | Background tint |

---

## 3. Container Tokens (Surface/Background)

Background colors for surfaces and containers.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-container-muted` | `#EBEBEB` | `#333333` | Cards, modals, elevated content |
| `--sl-container-calm` | `#F5F5F5` | `#292929` | Page backgrounds, sections |
| `--sl-container-vibrant` | `#FFFFFF` | `#1A1A1A` | Inputs, active states, hovers |

### Container Usage
- **Muted**: Subtle backgrounds, secondary cards
- **Calm**: Default page backgrounds
- **Vibrant**: Primary cards, prominent surfaces

---

## 4. On Tokens (Content ON Surfaces)

Colors for text, icons, and elements that appear ON container surfaces.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-on-standard` | `#000000` | `#FFFFFF` | Primary text, icons |
| `--sl-on-expressive` | `#3373CC` | `#7EB8FF` | Links, accent text |
| `--sl-on-error` | `#D32F2F` | `#FF8A80` | Error text, destructive |
| `--sl-on-success` | `#388E3C` | `#81C784` | Success text |
| `--sl-on-warning` | `#F57C00` | `#FFB74D` | Warning text |
| `--sl-on-info` | `#1976D2` | `#64B5F6` | Info text |

### On Token Usage
- **Standard**: Default text and icons (most content)
- **Expressive**: THE highlight (max 1 per screen)
- **Error/Success/Warning/Info**: Semantic feedback states

---

## 5. On/Container Tokens (Content ON Specific Containers)

Secondary/muted text colors for content on specific container types.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-on-container-muted` | `#666666` | `#808080` | Secondary text on muted bg |
| `--sl-on-container-calm` | `#4D4D4D` | `#CCCCCC` | Secondary text on calm bg |
| `--sl-on-container-vibrant` | `#1A1A1A` | `#F5F5F5` | Secondary text on vibrant bg |
| `--sl-on-container-error` | `#B71C1C` | `#FFCDD2` | Text on error backgrounds |
| `--sl-on-container-success` | `#1B5E20` | `#C8E6C9` | Text on success backgrounds |
| `--sl-on-container-warning` | `#E65100` | `#FFECB3` | Text on warning backgrounds |
| `--sl-on-container-info` | `#0D47A1` | `#BBDEFB` | Text on info backgrounds |

---

## 6. Outline Tokens (Borders)

Border and divider colors.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-outline-standard` | `#000000` | `#FFFFFF` | Default borders |
| `--sl-outline-muted` | `#E0E0E0` | `#424242` | Subtle dividers |
| `--sl-outline-calm` | `#BDBDBD` | `#616161` | Card borders |
| `--sl-outline-vibrant` | `#1A1A1A` | `#FAFAFA` | Focus states |
| `--sl-outline-expressive` | `#5C9FFF` | `#BBDEFB` | Accent borders |
| `--sl-outline-error` | `#EF9A9A` | `#D32F2F` | Error borders |
| `--sl-outline-success` | `#A5D6A7` | `#388E3C` | Success borders |
| `--sl-outline-warning` | `#FFE082` | `#F57C00` | Warning borders |
| `--sl-outline-info` | `#90CAF9` | `#1976D2` | Info borders |

---

## 7. Scrim & Overlay Tokens

Overlay and backdrop colors.

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--sl-scrim` | `rgba(0,0,0,0.3)` | `rgba(0,0,0,0.3)` | Light overlay |
| `--sl-scrim-modal` | `rgba(77,77,77,0.7)` | `rgba(77,77,77,0.7)` | Modal backdrop |
| `--sl-shadow` | `rgba(0,0,0,1)` | `rgba(0,0,0,1)` | Shadow base |
| `--sl-transparent` | `rgba(255,255,255,0)` | `rgba(255,255,255,0)` | Transparent |
| `--sl-on-standard-transparent` | `rgba(255,255,255,0.3)` | `rgba(255,255,255,0.3)` | Semi-transparent white |

---

## 8. Shadow Tokens

Elevation and depth shadows.

| Token | Value | Usage |
|-------|-------|-------|
| `--sl-shadow-muted` | `0 1px 2px var(--sl-shadow, rgba(0,0,0,0.04))` | Subtle lift |
| `--sl-shadow-calm` | `0 4px 8px var(--sl-shadow, rgba(0,0,0,0.08))` | Standard elevation |
| `--sl-shadow-vibrant` | `0 8px 24px var(--sl-shadow, rgba(0,0,0,0.12))` | Modal elevation |

---

## 9. Radius Tokens (Strict Nesting)

| Token | Value | Usage |
|-------|-------|-------|
| `--sl-radius-section` | `32px` | Outermost content areas |
| `--sl-radius-container` | `24px` | Major content wrappers, modals |
| `--sl-radius-card` | `16px` | Information containers |
| `--sl-radius-input` | `16px` | Form fields |
| `--sl-radius-badge` | `8px` | Small indicators, tags |
| `--sl-radius-button` | `9999px` | ALL buttons (pill shape) |

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

## 10. Typography Tokens

### Font Families
| Token | Value |
|-------|-------|
| `--sl-font-sans` | `'Plus Jakarta Sans', system-ui, sans-serif` |
| `--sl-font-mono` | `'SF Mono', Monaco, monospace` |

### Type Scale
| Token | Size | Usage |
|-------|------|-------|
| `--sl-text-xs` | `0.75rem` (12px) | Captions, labels |
| `--sl-text-sm` | `0.875rem` (14px) | Secondary text |
| `--sl-text-base` | `1rem` (16px) | Body text |
| `--sl-text-lg` | `1.125rem` (18px) | Emphasized body |
| `--sl-text-xl` | `1.25rem` (20px) | Subheadings |
| `--sl-text-2xl` | `1.5rem` (24px) | Section titles |
| `--sl-text-3xl` | `2rem` (32px) | Page titles |
| `--sl-text-4xl` | `2.5rem` (40px) | Hero titles |

### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `--sl-font-normal` | `400` | Body text |
| `--sl-font-medium` | `500` | Emphasized text |
| `--sl-font-semibold` | `600` | Subheadings |
| `--sl-font-bold` | `700` | Headings |

---

## 11. Spacing Tokens (4px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--sl-space-1` | `4px` | Micro spacing |
| `--sl-space-2` | `8px` | Related elements |
| `--sl-space-3` | `12px` | Small padding |
| `--sl-space-4` | `16px` | Standard padding |
| `--sl-space-5` | `20px` | Card padding |
| `--sl-space-6` | `24px` | Section padding |
| `--sl-space-8` | `32px` | Large gaps |
| `--sl-space-10` | `40px` | Major separations |
| `--sl-space-12` | `48px` | Section margins |
| `--sl-space-16` | `64px` | Major separations |

---

## 12. Animation Tokens

### Duration
| Token | Value | Usage |
|-------|-------|-------|
| `--sl-duration-fast` | `150ms` | Micro-interactions |
| `--sl-duration-base` | `300ms` | Standard transitions |
| `--sl-duration-slow` | `500ms` | Complex animations |

### Easing
| Token | Value |
|-------|-------|
| `--sl-ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--sl-ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--sl-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |

---

## 13. Focus & Interactive Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--sl-focus-ring-width` | `2px` | Focus outline width |
| `--sl-focus-ring-offset` | `2px` | Focus outline offset |
| `--sl-focus-ring-color` | `var(--sl-on-expressive)` | Focus ring color |

---

## CSS Custom Properties Template

```css
:root {
  /* ============================================
     STANDARD COLOR (Primary - 90% of UI)
     ============================================ */
  --sl-standard: #000000;
  --sl-standard-soft: #4D4D4D;
  --sl-standard-muted: #9E9E9E;
  
  /* ============================================
     EXPRESSIVE COLOR (Accent - 10% of UI)
     ============================================ */
  --sl-expressive: #3373CC;
  --sl-expressive-soft: #5C9FFF;
  --sl-expressive-muted: #BBDEFB;
  
  /* ============================================
     CONTAINER TOKENS (Background/Surface)
     ============================================ */
  --sl-container-muted: #EBEBEB;
  --sl-container-calm: #F5F5F5;
  --sl-container-vibrant: #FFFFFF;
  
  /* ============================================
     ON TOKENS (Content ON surfaces)
     ============================================ */
  --sl-on-standard: #000000;
  --sl-on-expressive: #3373CC;
  --sl-on-error: #D32F2F;
  --sl-on-success: #388E3C;
  --sl-on-warning: #F57C00;
  --sl-on-info: #1976D2;
  
  /* ============================================
     ON/CONTAINER TOKENS (Secondary content)
     ============================================ */
  --sl-on-container-muted: #666666;
  --sl-on-container-calm: #4D4D4D;
  --sl-on-container-vibrant: #1A1A1A;
  --sl-on-container-error: #B71C1C;
  --sl-on-container-success: #1B5E20;
  --sl-on-container-warning: #E65100;
  --sl-on-container-info: #0D47A1;
  
  /* ============================================
     OUTLINE TOKENS (Borders)
     ============================================ */
  --sl-outline-standard: #000000;
  --sl-outline-muted: #E0E0E0;
  --sl-outline-calm: #BDBDBD;
  --sl-outline-vibrant: #1A1A1A;
  --sl-outline-expressive: #5C9FFF;
  --sl-outline-error: #EF9A9A;
  --sl-outline-success: #A5D6A7;
  --sl-outline-warning: #FFE082;
  --sl-outline-info: #90CAF9;
  
  /* ============================================
     SCRIM & OVERLAY TOKENS
     ============================================ */
  --sl-scrim: rgba(0,0,0,0.3);
  --sl-scrim-modal: rgba(77,77,77,0.7);
  --sl-shadow: rgba(0,0,0,1);
  --sl-transparent: rgba(255,255,255,0);
  --sl-on-standard-transparent: rgba(255,255,255,0.3);
  
  /* ============================================
     SHADOW TOKENS
     ============================================ */
  --sl-shadow-muted: 0 1px 2px rgba(0,0,0,0.04);
  --sl-shadow-calm: 0 4px 8px rgba(0,0,0,0.08);
  --sl-shadow-vibrant: 0 8px 24px rgba(0,0,0,0.12);
  
  /* ============================================
     RADIUS TOKENS
     ============================================ */
  --sl-radius-section: 32px;
  --sl-radius-container: 24px;
  --sl-radius-card: 16px;
  --sl-radius-input: 16px;
  --sl-radius-badge: 8px;
  --sl-radius-button: 9999px;
  
  /* ============================================
     TYPOGRAPHY TOKENS
     ============================================ */
  --sl-font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  --sl-font-mono: 'SF Mono', Monaco, monospace;
  
  --sl-text-xs: 0.75rem;
  --sl-text-sm: 0.875rem;
  --sl-text-base: 1rem;
  --sl-text-lg: 1.125rem;
  --sl-text-xl: 1.25rem;
  --sl-text-2xl: 1.5rem;
  --sl-text-3xl: 2rem;
  --sl-text-4xl: 2.5rem;
  
  --sl-font-normal: 400;
  --sl-font-medium: 500;
  --sl-font-semibold: 600;
  --sl-font-bold: 700;
  
  /* ============================================
     SPACING TOKENS
     ============================================ */
  --sl-space-1: 4px;
  --sl-space-2: 8px;
  --sl-space-3: 12px;
  --sl-space-4: 16px;
  --sl-space-5: 20px;
  --sl-space-6: 24px;
  --sl-space-8: 32px;
  --sl-space-10: 40px;
  --sl-space-12: 48px;
  --sl-space-16: 64px;
  
  /* ============================================
     ANIMATION TOKENS
     ============================================ */
  --sl-duration-fast: 150ms;
  --sl-duration-base: 300ms;
  --sl-duration-slow: 500ms;
  --sl-ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* ============================================
     FOCUS TOKENS
     ============================================ */
  --sl-focus-ring-width: 2px;
  --sl-focus-ring-offset: 2px;
  --sl-focus-ring-color: var(--sl-on-expressive);
}

/* ============================================
   DARK MODE
   ============================================ */
@media (prefers-color-scheme: dark) {
  :root {
    /* Standard */
    --sl-standard: #FFFFFF;
    --sl-standard-soft: #CCCCCC;
    --sl-standard-muted: #6A6A6A;
    
    /* Expressive */
    --sl-expressive: #5C9FFF;
    --sl-expressive-soft: #7EB8FF;
    --sl-expressive-muted: #1E3A5F;
    
    /* Container */
    --sl-container-muted: #333333;
    --sl-container-calm: #292929;
    --sl-container-vibrant: #1A1A1A;
    
    /* On */
    --sl-on-standard: #FFFFFF;
    --sl-on-expressive: #7EB8FF;
    --sl-on-error: #FF8A80;
    --sl-on-success: #81C784;
    --sl-on-warning: #FFB74D;
    --sl-on-info: #64B5F6;
    
    /* On/Container */
    --sl-on-container-muted: #808080;
    --sl-on-container-calm: #CCCCCC;
    --sl-on-container-vibrant: #F5F5F5;
    --sl-on-container-error: #FFCDD2;
    --sl-on-container-success: #C8E6C9;
    --sl-on-container-warning: #FFECB3;
    --sl-on-container-info: #BBDEFB;
    
    /* Outline */
    --sl-outline-standard: #FFFFFF;
    --sl-outline-muted: #424242;
    --sl-outline-calm: #616161;
    --sl-outline-vibrant: #FAFAFA;
    --sl-outline-expressive: #BBDEFB;
    --sl-outline-error: #D32F2F;
    --sl-outline-success: #388E3C;
    --sl-outline-warning: #F57C00;
    --sl-outline-info: #1976D2;
  }
}
```

---

## Token Reference Quick Guide

### When to use which token:

| I want to... | Use this token |
|--------------|---------------|
| Set a background/surface color | `--sl-container-*` |
| Color text or icons | `--sl-on-*` |
| Color secondary text on a surface | `--sl-on-container-*` |
| Add a border | `--sl-outline-*` |
| Add a backdrop/overlay | `--sl-scrim*` |
| Add elevation/depth | `--sl-shadow-*` |

### Common Patterns

```css
/* Card on page background */
.card {
  background: var(--sl-container-vibrant);
  border: 1px solid var(--sl-outline-muted);
  color: var(--sl-on-standard);
}

/* Secondary text in card */
.card-description {
  color: var(--sl-on-container-vibrant);
}

/* Expressive button (THE highlight) */
.button-expressive {
  background: var(--sl-on-expressive);
  color: var(--sl-container-vibrant);
}

/* Error state */
.error-message {
  color: var(--sl-on-error);
  border: 1px solid var(--sl-outline-error);
}
```

---

*Staylook Design Tokens — Hierarchical Semantic System*
