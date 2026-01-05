# UI Development Checklist

> Quick validation checklist for Staylook component compliance

---

## Button Checklist

### Priority Compliance
- [ ] Expressive buttons limited to 1 per screen
- [ ] Standard buttons used for secondary actions
- [ ] Ghost buttons used for tertiary actions

### Shape Compliance
- [ ] ALL buttons are pill-shaped (9999px radius)
- [ ] No square or slightly-rounded buttons
- [ ] Consistent shape across all sizes

### State Compliance
- [ ] Hover state implemented
- [ ] Active/pressed state implemented
- [ ] Focus state with visible outline
- [ ] Disabled state with reduced opacity

### Sizing Compliance
- [ ] Small: 8px × 16px padding, 32px height
- [ ] Medium: 12px × 24px padding, 44px height
- [ ] Large: 16px × 32px padding, 52px height

---

## Card Checklist

### Structure Compliance
- [ ] Border radius is 16px
- [ ] Background is Muted surface (#FFFFFF)
- [ ] Placed on Calm background (#FAFAFA)
- [ ] Padding is 20px (space-5)

### Variant Compliance
- [ ] Interactive cards have state progression
- [ ] Hover increases intensity (border, shadow)
- [ ] Active reduces shadow
- [ ] Expressive cards are max 1 per screen

### Grid Compliance
- [ ] Gap between cards is 16px
- [ ] Minimum card width 280px
- [ ] Responsive column count

---

## Input Checklist

### Structure Compliance
- [ ] Border radius is 16px
- [ ] Background is Vibrant surface (#F0F0F0)
- [ ] Height minimum 48px
- [ ] Labels positioned above with 8px gap

### State Compliance
- [ ] Hover increases border intensity
- [ ] Focus inverts background to Muted
- [ ] Focus has visible blue glow
- [ ] Error state shows red styling
- [ ] Disabled has 70% opacity

### Helper Text Compliance
- [ ] Helper text uses Ink Muted color
- [ ] Error messages in red with icon
- [ ] Positioned below with 8px gap

---

## Layout Checklist

### Container Hierarchy
- [ ] Page wrapper uses Calm background
- [ ] Sections use 32px radius
- [ ] Containers use 24px radius
- [ ] Cards use 16px radius

### Spacing Compliance
- [ ] All spacing from 4px grid
- [ ] Between sections: 48-64px
- [ ] Between cards: 16-24px
- [ ] Card internal: 16-24px

### Responsive Compliance
- [ ] Mobile: single column
- [ ] Tablet: 2 columns
- [ ] Desktop: 3-4 columns

---

## Modal Checklist

### Structure Compliance
- [ ] Border radius is 24px
- [ ] Max width 480px
- [ ] Max height 90vh
- [ ] Backdrop has blur and 50% opacity

### Button Pattern
- [ ] Cancel button uses Standard style
- [ ] Primary action uses Expressive style
- [ ] Buttons right-aligned
- [ ] Gap between buttons is 12px

---

## Badge Checklist

### Structure Compliance
- [ ] Border radius is 8px
- [ ] Padding 4px × 12px
- [ ] Font is uppercase, 12px

### Intensity Compliance
- [ ] Muted for low priority
- [ ] Calm for standard
- [ ] Vibrant for high priority
- [ ] Expressive max 1 per screen

---

## State System Checklist

### Intensity Progression
- [ ] Resting uses Muted tokens
- [ ] Hover uses Calm tokens
- [ ] Active uses Vibrant tokens
- [ ] All states coordinated (surface, border, shadow)

### Focus States
- [ ] All interactive elements have focus state
- [ ] 2px outline with 2px offset
- [ ] Blue glow for visibility
- [ ] Meets 3:1 contrast ratio

### Disabled States
- [ ] 70% opacity
- [ ] Calm surface
- [ ] Muted text
- [ ] cursor: not-allowed

---

## Component Quality Checklist

### Before Marking Complete
- [ ] Uses semantic tokens (no hardcoded colors)
- [ ] Follows radius hierarchy
- [ ] Buttons are pill-shaped
- [ ] States use intensity progression
- [ ] Spacing follows 4px grid
- [ ] Accessible (keyboard, ARIA, contrast)
- [ ] Responsive (all breakpoints)
- [ ] "One Highlight" rule respected

---

*UI Development Checklist — Staylook Compliance*
