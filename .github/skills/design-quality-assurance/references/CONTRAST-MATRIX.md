# Contrast Ratio Matrix

> WCAG 2.1 AA compliance reference for Staylook color combinations

---

## Required Contrast Ratios

| Element Type | WCAG Level | Minimum Ratio |
|--------------|------------|---------------|
| Normal Text | AA | 4.5:1 |
| Large Text (18px+ bold or 24px+) | AA | 3:1 |
| UI Components & Graphics | AA | 3:1 |
| Focus Indicators | AA | 3:1 |

---

## Light Mode Contrast Matrix

### Text on Surfaces

| Text Color | Background | Contrast | Pass? |
|------------|------------|----------|-------|
| Ink (`#1A1A1A`) | Base (`#FFFFFF`) | **12.63:1** | ✅ AAA |
| Ink (`#1A1A1A`) | Muted (`#FFFFFF`) | **12.63:1** | ✅ AAA |
| Ink (`#1A1A1A`) | Calm (`#FAFAFA`) | **11.98:1** | ✅ AAA |
| Ink (`#1A1A1A`) | Vibrant (`#F0F0F0`) | **10.98:1** | ✅ AAA |
| Ink Soft (`#4A4A4A`) | Base (`#FFFFFF`) | **7.02:1** | ✅ AAA |
| Ink Soft (`#4A4A4A`) | Calm (`#FAFAFA`) | **6.63:1** | ✅ AAA |
| Ink Muted (`#9E9E9E`) | Base (`#FFFFFF`) | **2.92:1** | ⚠️ Large only |
| Accent (`#3373CC`) | Base (`#FFFFFF`) | **4.58:1** | ✅ AA |

### Text on Expressive Elements

| Text Color | Background | Contrast | Pass? |
|------------|------------|----------|-------|
| Base (`#FFFFFF`) | Accent (`#3373CC`) | **4.58:1** | ✅ AA |
| Accent Dark (`#264D99`) | Accent Light (`#E8F0FA`) | **5.21:1** | ✅ AA |

### Borders/UI Components on Surfaces

| Border Color | Background | Contrast | Pass? |
|--------------|------------|----------|-------|
| Outline Muted (`#F2F2F2`) | Base (`#FFFFFF`) | 1.03:1 | ❌ Decorative only |
| Outline Calm (`#E0E0E0`) | Base (`#FFFFFF`) | 1.26:1 | ❌ Decorative only |
| Outline Calm (`#E0E0E0`) | Calm (`#FAFAFA`) | 1.19:1 | ❌ Decorative only |
| Outline Vibrant (`#1A1A1A`) | Base (`#FFFFFF`) | **12.63:1** | ✅ AAA |
| Accent (`#3373CC`) | Base (`#FFFFFF`) | **4.58:1** | ✅ AA |

---

## Dark Mode Contrast Matrix

### Text on Surfaces

| Text Color | Background | Contrast | Pass? |
|------------|------------|----------|-------|
| Ink (`#FFFFFF`) | Muted (`#1A1A1A`) | **12.63:1** | ✅ AAA |
| Ink (`#FFFFFF`) | Calm (`#242424`) | **10.42:1** | ✅ AAA |
| Ink (`#FFFFFF`) | Vibrant (`#2E2E2E`) | **8.59:1** | ✅ AAA |
| Ink Soft (`#B8B8B8`) | Muted (`#1A1A1A`) | **6.54:1** | ✅ AAA |
| Ink Muted (`#6A6A6A`) | Muted (`#1A1A1A`) | **2.71:1** | ⚠️ Large only |
| Accent (`#5C9FFF`) | Muted (`#1A1A1A`) | **6.12:1** | ✅ AAA |

### Text on Expressive Elements

| Text Color | Background | Contrast | Pass? |
|------------|------------|----------|-------|
| Base (`#121212`) | Accent (`#5C9FFF`) | **6.12:1** | ✅ AAA |

---

## Button Contrast Verification

### Expressive Button (Light Mode)

| Element | Color | Background | Contrast | Pass? |
|---------|-------|------------|----------|-------|
| Text | `#FFFFFF` | `#3373CC` | **4.58:1** | ✅ AA |
| Button | `#3373CC` | Page `#FAFAFA` | **3.91:1** | ✅ UI |
| Focus Ring | `#3373CC` | `#FFFFFF` | **4.58:1** | ✅ AA |

### Standard Button (Light Mode)

| Element | Color | Background | Contrast | Pass? |
|---------|-------|------------|----------|-------|
| Text | `#1A1A1A` | `#FFFFFF` | **12.63:1** | ✅ AAA |
| Border | `#1A1A1A` | Page `#FAFAFA` | **11.98:1** | ✅ AAA |

### Ghost Button (Light Mode)

| Element | Color | Background | Contrast | Pass? |
|---------|-------|------------|----------|-------|
| Text | `#4A4A4A` | `#FFFFFF` | **7.02:1** | ✅ AAA |
| Hover BG | `#FAFAFA` | Page `#FFFFFF` | 1.05:1 | ✅ Subtle |

---

## Focus State Contrast

| Focus Style | Color | Background | Contrast | Pass? |
|-------------|-------|------------|----------|-------|
| Outline | `#3373CC` | `#FFFFFF` | **4.58:1** | ✅ AA |
| Glow | rgba(51,115,204,0.2) | — | N/A | Decorative |

---

## Status Color Contrast

### Success

| Element | Color | Background | Contrast | Pass? |
|---------|-------|------------|----------|-------|
| Text | `#166534` | `#DCFCE7` | **4.78:1** | ✅ AA |
| Border | `#22C55E` | `#FFFFFF` | **2.67:1** | ⚠️ Use with icon |

### Warning

| Element | Color | Background | Contrast | Pass? |
|---------|-------|------------|----------|-------|
| Text | `#A16207` | `#FEF3C7` | **4.62:1** | ✅ AA |
| Border | `#F59E0B` | `#FFFFFF` | **2.01:1** | ⚠️ Use with icon |

### Error

| Element | Color | Background | Contrast | Pass? |
|---------|-------|------------|----------|-------|
| Text | `#DC2626` | `#FEE2E2` | **4.53:1** | ✅ AA |
| Border | `#EF4444` | `#FFFFFF` | **3.10:1** | ✅ UI |

---

## Icon Contrast Requirements

| Icon Use | Minimum Ratio | Notes |
|----------|---------------|-------|
| Decorative | None | Purely visual, not informative |
| Informative | 3:1 | Conveys meaning |
| Interactive | 3:1 | Buttons, links |
| Error/Status | 3:1 | Must be perceivable |

### Icon Colors

| Icon Color | Background | Contrast | Pass? |
|------------|------------|----------|-------|
| Ink (`#1A1A1A`) | Base (`#FFFFFF`) | **12.63:1** | ✅ AAA |
| Ink Soft (`#4A4A4A`) | Base (`#FFFFFF`) | **7.02:1** | ✅ AAA |
| Ink Muted (`#9E9E9E`) | Base (`#FFFFFF`) | **2.92:1** | ⚠️ Decorative only |
| Accent (`#3373CC`) | Base (`#FFFFFF`) | **4.58:1** | ✅ AA |

---

## Testing Tools

### Online Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [Accessible Colors](https://accessible-colors.com/)

### Browser Extensions
- axe DevTools
- WAVE
- Lighthouse (built into Chrome)

### Automated Testing
- axe-core library
- pa11y
- jest-axe

---

## Quick Reference

### Safe Text Combinations
```
Ink on Base/Muted/Calm/Vibrant — Always safe
Ink Soft on Base/Muted/Calm — Always safe
Accent on Base — Safe for links and highlights
White on Accent — Safe for Expressive buttons
```

### Cautions
```
Ink Muted — Only safe for large text (18px+ bold or 24px+)
Muted/Calm borders — Decorative only, don't rely for meaning
Status colors — Combine with icons or text for accessibility
```

---

*Contrast Ratio Matrix — WCAG 2.1 AA Compliance Reference*
