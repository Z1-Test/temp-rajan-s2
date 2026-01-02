# Staylook Design System - Quick Reference Card

**📋 Keep this handy while building with Staylook**

---

## The 4 Core Principles

```
┌────────────────────────────────────────────────────────┐
│  CURVED      EDITORIAL      MINIMAL      EXPRESSIVE    │
│  ───────     ─────────      ───────      ──────────    │
│  Soft edges  White space    Purpose      Strategic     │
│  Rounded     Typography     Function     Color use     │
│  Warm        Hierarchy      Clean        Attention     │
└────────────────────────────────────────────────────────┘
```

---

## Color System (Semantic)

### The 3 Roles

| Role | Purpose | Usage |
|------|---------|-------|
| **Standard** | Main UI color (black/ink) | 90% of interface |
| **Expressive** | Highlight color (blue/accent) | 10% of interface |
| **Base** | Canvas (white) | Backgrounds, contrast |

### Intensity Scale

```
MUTED          CALM           VIBRANT
░░░░░    →     ▒▒▒▒▒    →     █████
Lightest       Medium         Darkest
Subtle         Standard       Emphasized
```

---

## The "One Highlight" Rule

⚠️ **STRICT**: Max **1** Expressive element per screen

```tsx
// ✅ CORRECT
<Button variant="standard">Cancel</Button>
<Button variant="expressive">Submit</Button> ← THE ONE

// ❌ WRONG
<Button variant="expressive">Back</Button>    ← Too many
<Button variant="expressive">Next</Button>    ← Competing!
```

---

## Radius Hierarchy (Strict Nesting)

```
OUTER = MORE ROUNDED
INNER = LESS ROUNDED

Section:      32px
  Container:  24px
    Card:     16px
      Button: PILL (9999px)
```

**Rule**: All buttons are ALWAYS pill-shaped.

---

## Token Reference

### Colors
```css
/* Standard (Main) - 90% usage */
--color-ink: #1A1A1A           /* Headings, structure */
--color-ink-soft: #4A4A4A      /* Body text */
--color-ink-muted: #9E9E9E     /* Captions */

/* Expressive (Highlight) - 10% usage */
--color-accent: #3373CC        /* THE highlight */
--color-accent-light: #E8F2FF  /* Subtle backgrounds */
--color-accent-dark: #1E5AAA   /* Hover states */

/* Base (Canvas) */
--color-base: #FFFFFF          /* White */
```

### Surfaces (Intensity Scale)
```css
--surface-muted: #FFFFFF       /* Cards, modals */
--surface-calm: #FAFAFA        /* Page backgrounds */
--surface-vibrant: #F0F0F0     /* Input backgrounds */
```

### Borders (Intensity Scale)
```css
--border-muted: #F2F2F2        /* Subtle dividers */
--border-calm: #E0E0E0         /* Standard borders */
--border-vibrant: #1A1A1A      /* Focus states */
```

### Shadows (Intensity Scale)
```css
--shadow-muted: ...            /* Resting cards */
--shadow-calm: ...             /* Hover */
--shadow-vibrant: ...          /* Modals */
```

### Radius
```css
--radius-section: 32px         /* Outermost */
--radius-container: 24px       /* Major wrappers */
--radius-card: 16px            /* Content blocks */
--radius-input: 16px           /* Form fields */
--radius-sm: 8px               /* Badges */
--radius-button: 9999px        /* ALL buttons */
```

### Typography
```css
--font-sans: 'Plus Jakarta Sans'

--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 2rem      /* 32px */
```

### Spacing (4px Grid)
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
```

---

## Button Patterns

### Priority System

```tsx
// Priority 1: Expressive (THE main action, max 1/screen)
<Button variant="expressive">Submit</Button>

// Priority 2: Standard (secondary actions, unlimited)
<Button variant="standard">Cancel</Button>

// Priority 3: Ghost (tertiary actions, minimal weight)
<Button variant="ghost">Skip</Button>
```

### All buttons are pill-shaped!
```css
.btn-* {
  border-radius: var(--radius-button); /* 9999px */
}
```

---

## Component Patterns

### Card
```tsx
<Card className="rounded-[--radius-card]"> {/* 16px */}
  <CardHeader>
    <h3 className="text-[--color-ink]">Title</h3>
  </CardHeader>
  <CardContent>
    <p className="text-[--color-ink-soft]">Body</p>
  </CardContent>
</Card>
```

### Input
```tsx
<Input
  label="Email"
  className="input" // Uses --surface-vibrant, --radius-input
/>
```

### Modal
```tsx
<Dialog>
  <DialogContent className="modal"> {/* --radius-container: 24px */}
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    <DialogFooter>
      <Button variant="standard">Cancel</Button>
      <Button variant="expressive">Confirm</Button> {/* THE ONE */}
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

## State Progression

### Interactive Elements
```
RESTING           HOVER             ACTIVE/FOCUS
────────          ─────             ────────────
Muted             Calm              Vibrant
--surface-muted   --surface-calm    --surface-vibrant
--border-muted    --border-calm     --border-vibrant
--shadow-muted    --shadow-calm     --shadow-vibrant
```

### Example
```css
.card {
  background: var(--surface-muted);
  border: 1px solid var(--border-muted);
  box-shadow: var(--shadow-muted);
}

.card:hover {
  background: var(--surface-calm);
  border-color: var(--border-calm);
  box-shadow: var(--shadow-calm);
}

.card:active {
  background: var(--surface-vibrant);
  border-color: var(--border-vibrant);
  box-shadow: var(--shadow-vibrant);
}
```

---

## Typography Usage

```tsx
// Headings - Standard Ink
<h1 className="text-[--color-ink]">Page Title</h1>

// Body - Standard Ink Soft
<p className="text-[--color-ink-soft]">Paragraph text</p>

// Captions - Standard Ink Muted
<span className="text-[--color-ink-muted]">Caption</span>

// Links - Expressive Accent
<a href="#" className="text-[--color-accent]">Learn more</a>

// Highlight (sparingly!) - Expressive
<h2>Build <span className="text-[--color-accent]">Amazing</span> Products</h2>
```

---

## Layout Structure

```tsx
<div className="page bg-[--surface-calm]">           {/* Calm background */}
  <section className="rounded-[--radius-section]">   {/* 32px */}
    <div className="container rounded-[--radius-container]"> {/* 24px */}
      <Card className="rounded-[--radius-card]">     {/* 16px */}
        <Button variant="expressive">Action</Button> {/* Pill */}
      </Card>
    </div>
  </section>
</div>
```

---

## Common Mistakes to Avoid

### ❌ DON'T
```tsx
// Multiple Expressive elements
<Button variant="expressive">Back</Button>
<Button variant="expressive">Next</Button>

// Sharp corners on buttons
<button className="rounded-lg">Submit</button>

// Hardcoded colors
<div style={{ color: '#3373CC' }}>Text</div>

// Wrong token names
<Button variant="primary">Submit</Button>
```

### ✅ DO
```tsx
// One Expressive element
<Button variant="standard">Back</Button>
<Button variant="expressive">Next</Button>

// Pill buttons
<button className="rounded-full">Submit</button>

// Use tokens
<div className="text-[--color-accent]">Text</div>

// Semantic names
<Button variant="expressive">Submit</Button>
```

---

## Pre-Deploy Checklist

- [ ] All colors use semantic tokens (Standard/Expressive)
- [ ] Intensity scale applied (Muted → Calm → Vibrant)
- [ ] Radius hierarchy enforced (32→24→16→pill)
- [ ] ALL buttons are pill-shaped
- [ ] "One Highlight" rule (≤1 Expressive per screen)
- [ ] Font is Plus Jakarta Sans
- [ ] Spacing follows 4px grid
- [ ] WCAG AA contrast (4.5:1 for text)

---

## Quick Test Commands

```bash
# Check token compliance
npm run test:tokens

# Verify radius hierarchy
npm run test:radius

# Enforce "One Highlight" rule
npm run test:one-highlight

# Full Staylook QA
npm run test:staylook
```

---

## Need Help?

📚 **Full Guidelines**: `.github/guidelines/design-guidelines.md`  
🎨 **Component Guide**: `.github/guidelines/component-guidelines.md`  
🛠️ **Skills Docs**: `.github/new-skills/*/SKILL.md`

---

**Remember**: Curved, Editorial, Minimal, Expressive 🎨
