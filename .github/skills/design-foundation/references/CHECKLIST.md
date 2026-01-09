# Design Foundation Checklist

> Quick validation checklist for Staylook design system compliance

---

## Color Usage Checklist

### Standard Color (90% of UI)
- [ ] All regular buttons use `--sl-standard` color
- [ ] All text uses `--sl-standard` / `--sl-standard-soft` / `--sl-standard-muted`
- [ ] All icons use Standard colors
- [ ] All borders use `--sl-outline-*` tokens
- [ ] Navigation elements use Standard color

### Expressive Color (10% of UI)
- [ ] Maximum 1 Expressive element per screen
- [ ] Expressive used only for THE highlight action
- [ ] No multiple accent-colored buttons on same screen
- [ ] Expressive not used for default primary buttons

### Intensity Scale
- [ ] Surfaces follow Muted → Calm → Vibrant
- [ ] Outlines follow Muted → Calm → Vibrant
- [ ] Shadows follow Muted → Calm → Vibrant
- [ ] State progression uses intensity scale correctly

---

## Radius Hierarchy Checklist

### Nesting Compliance
- [ ] Section containers use `--sl-radius-section` (32px)
- [ ] Content containers use `--sl-radius-container` (24px)
- [ ] Cards use `--sl-radius-card` (16px)
- [ ] Inputs use `--sl-radius-input` (16px)
- [ ] Badges use `--sl-radius-badge` (8px)

### Button Compliance
- [ ] ALL buttons are pill-shaped (`--sl-radius-button`)
- [ ] No square or slightly-rounded buttons
- [ ] Button radius consistent across all sizes

### Nesting Rule
- [ ] Outer elements are MORE rounded than inner
- [ ] Parent radius > Child radius always
- [ ] No inverted nesting (inner more rounded than outer)

---

## Typography Checklist

### Font Usage
- [ ] Font family is Plus Jakarta Sans (`--sl-font-sans`)
- [ ] Type scale tokens used (no arbitrary sizes)
- [ ] Weight tokens used correctly

### Semantic Typography Colors
- [ ] Headings use `--sl-standard`
- [ ] Body text uses `--sl-standard-soft`
- [ ] Captions use `--sl-standard-muted`
- [ ] Links use `--sl-expressive`
- [ ] Highlights use `--sl-expressive` (sparingly)

---

## Spacing Checklist

### 4px Grid
- [ ] All spacing uses 4px increments
- [ ] Spacing tokens used (`--sl-space-*`)
- [ ] No magic numbers or arbitrary values

### Contextual Spacing
- [ ] Between sections: `--sl-space-12` to `--sl-space-16`
- [ ] Between cards: `--sl-space-4` to `--sl-space-6`
- [ ] Card internal: `--sl-space-4` to `--sl-space-6`
- [ ] Button padding: 12px × 24px
- [ ] Input padding: 12px × 16px

---

## Semantic Token Checklist

### Naming Compliance
- [ ] Uses `--sl-standard` not `--color-primary`
- [ ] Uses `--sl-expressive` not `--color-accent`
- [ ] Uses intensity names (muted, calm, vibrant)
- [ ] No hardcoded hex values

### Token Categories
- [ ] Container tokens: `--sl-container-*`
- [ ] On tokens: `--sl-on-*`
- [ ] Outline tokens: `--sl-outline-*`
- [ ] All spacing from `--sl-space-*`
- [ ] All animations from `--sl-duration-*`

---

## "One Highlight" Rule Checklist

### Per Screen Validation
- [ ] Count of Expressive elements = 1 or 0
- [ ] No competing accent-colored buttons
- [ ] Clear single focal point

### Appropriate Usage
- [ ] Used for most important action only
- [ ] Not used for all primary actions
- [ ] Not used for decoration

---

## Quick Reference

### Colors
```
Standard:   --sl-standard, --sl-standard-soft, --sl-standard-muted
Expressive: --sl-expressive, --sl-expressive-soft, --sl-expressive-muted
Container:  --sl-container-muted, --sl-container-calm, --sl-container-vibrant
On:         --sl-on-standard, --sl-on-expressive, --sl-on-error, etc.
Outline:    --sl-outline-muted, --sl-outline-calm, --sl-outline-vibrant
```

### Radius
```
Section: 32px → Container: 24px → Card: 16px → Button: pill
```

### Spacing
```
4px base: 4, 8, 12, 16, 20, 24, 32, 48, 64
```

### Animation
```
Fast: 150ms | Base: 300ms | Slow: 500ms
```

---

*Design Foundation Checklist — Staylook Compliance*
