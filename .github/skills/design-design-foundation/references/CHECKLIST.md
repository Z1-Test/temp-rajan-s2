# Design Foundation Checklist

> Quick validation checklist for Staylook design system compliance

---

## Color Usage Checklist

### Standard Color (90% of UI)
- [ ] All regular buttons use Standard (ink) color
- [ ] All text uses Standard color tokens
- [ ] All icons use Standard colors
- [ ] All borders use Standard outline tokens
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
- [ ] Section containers use 32px radius
- [ ] Content containers use 24px radius
- [ ] Cards use 16px radius
- [ ] Inputs use 16px radius
- [ ] Badges use 8px radius

### Button Compliance
- [ ] ALL buttons are pill-shaped (9999px)
- [ ] No square or slightly-rounded buttons
- [ ] Button radius consistent across all sizes

### Nesting Rule
- [ ] Outer elements are MORE rounded than inner
- [ ] Parent radius > Child radius always
- [ ] No inverted nesting (inner more rounded than outer)

---

## Typography Checklist

### Font Usage
- [ ] Font family is Plus Jakarta Sans
- [ ] Type scale tokens used (no arbitrary sizes)
- [ ] Weight tokens used correctly

### Semantic Typography Colors
- [ ] Headings use Standard Ink color
- [ ] Body text uses Standard Ink Soft
- [ ] Captions use Standard Ink Muted
- [ ] Links use Expressive Accent
- [ ] Highlights use Expressive Accent (sparingly)

---

## Spacing Checklist

### 4px Grid
- [ ] All spacing uses 4px increments
- [ ] Spacing tokens used (--space-X)
- [ ] No magic numbers or arbitrary values

### Contextual Spacing
- [ ] Between sections: 48-64px
- [ ] Between cards: 16-24px
- [ ] Card internal: 16-24px
- [ ] Button padding: 12px × 24px
- [ ] Input padding: 12px × 16px

---

## Semantic Token Checklist

### Naming Compliance
- [ ] Uses "Standard" not "primary"
- [ ] Uses "Expressive" not "secondary"
- [ ] Uses intensity names (Muted, Calm, Vibrant)
- [ ] No hardcoded hex values

### Token Usage
- [ ] All colors from design tokens
- [ ] All radii from design tokens
- [ ] All spacing from design tokens
- [ ] All animations from design tokens

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
Standard: #1A1A1A (ink), #4A4A4A (soft), #9E9E9E (muted)
Expressive: #3373CC (accent)
Base: #FFFFFF
Surfaces: #FFFFFF (muted) → #FAFAFA (calm) → #F0F0F0 (vibrant)
```

### Radius
```
Section: 32px → Container: 24px → Card: 16px → Button: pill
```

### Spacing
```
4px base: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96
```

### Animation
```
Fast: 150ms | Base: 300ms | Slow: 500ms
```

---

*Design Foundation Checklist — Staylook Compliance*
