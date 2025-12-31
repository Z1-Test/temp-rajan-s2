---
title: Design Language System
description: Master skill for understanding and implementing a cohesive design language across all UI
tags:
  - frontend
  - design-language
  - ui-system
  - cohesion
  - master-skill
name: design-language-system
---

# Design Language System Skill

## What is it?

This is the **master skill** that ties together all design patterns, tokens, and principles to create a unified, cohesive design language. It ensures every UI element speaks the same visual vocabulary.

## Why use it?

- **Cohesion**: Every element feels part of the same system
- **Recognition**: Users learn the language once, use everywhere
- **Efficiency**: Consistent patterns reduce decision fatigue
- **Quality**: Systematic approach prevents visual inconsistencies
- **Scale**: New features integrate seamlessly

---

## Core Design Language Principles

### 1. Visual Vocabulary

Every design language has a consistent vocabulary:

| Element | Description | Example |
|---------|-------------|---------|
| **Primary Action** | Main CTA, filled button | `bg-primary text-primary-foreground` |
| **Secondary Action** | Supporting action, outline | `border-border bg-background` |
| **Destructive Action** | Delete, remove, danger | `bg-destructive text-destructive-foreground` |
| **Informational** | Notices, help text | `text-muted-foreground` |
| **Success** | Completion, positive | `text-green-600 bg-green-50` |
| **Warning** | Caution, attention | `text-amber-600 bg-amber-50` |
| **Error** | Failure, validation | `text-destructive border-destructive` |

### 2. Elevation System

Consistent depth creates spatial understanding:

```css
/* Elevation levels */
--elevation-0: /* Base - background */
  none;

--elevation-1: /* Raised - cards, tiles */
  0 1px 2px 0 rgba(0, 0, 0, 0.05);

--elevation-2: /* Floating - dropdowns, popovers */
  0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);

--elevation-3: /* Modal - dialogs */
  0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05);

--elevation-4: /* Notification - toasts */
  0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

```tsx
// Usage
<Card className="shadow-sm" />        {/* elevation-1 */}
<Popover className="shadow-md" />     {/* elevation-2 */}
<Dialog className="shadow-lg" />      {/* elevation-3 */}
<Toast className="shadow-2xl" />      {/* elevation-4 */}
```

### 3. Visual Weight Distribution

Balance visual weight across layouts:

```
┌──────────────────────────────────────────┐
│  [Logo]            [Nav]        [CTA●]   │  ← Heavy elements at edges
├──────────────────────────────────────────┤
│                                          │
│   ┌─────────────────────────────────┐   │
│   │   ████ Large Prominent Title    │   │  ← Primary focus centered
│   │   ░░░░ Supporting description   │   │
│   │           [Action]              │   │
│   └─────────────────────────────────┘   │
│                                          │
│   ┌──────┐  ┌──────┐  ┌──────┐         │  ← Equal weight cards
│   │ Card │  │ Card │  │ Card │         │
│   └──────┘  └──────┘  └──────┘         │
└──────────────────────────────────────────┘
```

---

## Component Hierarchy

### Primary Elements (High Visual Weight)
- Page titles
- Primary CTA buttons
- Hero images
- Featured cards

### Secondary Elements (Medium Weight)
- Section headings
- Secondary buttons
- Standard cards
- Navigation items

### Tertiary Elements (Low Weight)
- Body text
- Helper text
- Icons
- Subtle dividers

```tsx
// Visual weight in code
<h1 className="text-4xl font-bold">Primary</h1>
<h2 className="text-2xl font-semibold">Secondary</h2>
<p className="text-base text-muted-foreground">Tertiary</p>
```

---

## Consistent Interaction States

Every interactive element follows the same state pattern:

```css
/* State machine for interactions */
.interactive {
  /* Default */
  background: var(--color-background);
  color: var(--color-foreground);
  
  /* Hover */
  &:hover {
    background: var(--color-muted);
  }
  
  /* Focus */
  &:focus-visible {
    outline: 2px solid var(--color-ring);
    outline-offset: 2px;
  }
  
  /* Active/Pressed */
  &:active {
    transform: scale(0.98);
  }
  
  /* Disabled */
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
```

```tsx
// All buttons follow same interaction model
<Button>Default → Hover → Focus → Active</Button>
<Link>Default → Hover → Focus → Active</Link>
<Card interactive>Default → Hover → Focus → Active</Card>
```

---

## Layout Language

### Content Density

| Density | Padding | Gap | Use Case |
|---------|---------|-----|----------|
| **Compact** | `p-2` | `gap-2` | Dense data, tables |
| **Default** | `p-4` | `gap-4` | Most UI components |
| **Spacious** | `p-6` | `gap-6` | Cards, sections |
| **Generous** | `p-8` | `gap-8` | Hero, marketing |

```tsx
// Compact density (data-heavy)
<div className="p-2 space-y-2">

// Default density (standard UI)
<div className="p-4 space-y-4">

// Spacious density (content focus)
<div className="p-6 space-y-6">

// Generous density (marketing/hero)
<div className="p-8 space-y-8">
```

### Alignment Rules

```
┌─────────────────────────────────────────────────────┐
│ Left-aligned:                    Right-aligned:     │
│ ───────────                      ───────────────    │
│ • Primary text                   • Numbers/Data    │
│ • Labels                         • Prices          │
│ • Descriptions                   • Actions (row)   │
│ • Lists                          • Status badges   │
│                                                     │
│ Center-aligned:                                     │
│ ────────────────                                    │
│ • Page/section titles (optional)                   │
│ • Empty states                                      │
│ • Modal headers                                     │
│ • Short notifications                               │
└─────────────────────────────────────────────────────┘
```

---

## Pattern Library Integration

### Card Patterns

```tsx
// Information Card
<Card className="p-6">
  <CardHeader className="p-0 pb-4">
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent className="p-0">
    {/* Content */}
  </CardContent>
</Card>

// Action Card (interactive)
<Card className="p-6 cursor-pointer hover:border-primary transition-colors">
  <div className="flex items-center gap-4">
    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="size-5 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold">Action Item</h3>
      <p className="text-sm text-muted-foreground">Click to proceed</p>
    </div>
    <ChevronRight className="ml-auto size-5 text-muted-foreground" />
  </div>
</Card>

// Stats Card
<Card className="p-6">
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">Metric</span>
    <Icon className="size-4 text-muted-foreground" />
  </div>
  <div className="mt-2">
    <span className="text-3xl font-bold">$12,345</span>
    <Badge className="ml-2" variant="success">+12%</Badge>
  </div>
</Card>
```

### Form Patterns

```tsx
// Standard form field
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
  <p className="text-sm text-muted-foreground">We'll never share your email.</p>
</div>

// Error state
<div className="space-y-2">
  <Label htmlFor="email" className="text-destructive">Email</Label>
  <Input id="email" className="border-destructive" aria-invalid="true" />
  <p className="text-sm text-destructive flex items-center gap-1">
    <AlertCircle className="size-4" />
    Email is required.
  </p>
</div>

// Form section
<fieldset className="space-y-6 p-6 border rounded-lg">
  <legend className="px-2 font-semibold">Personal Information</legend>
  {/* Form fields */}
</fieldset>
```

---

## Motion Language

### Timing Scale

```css
:root {
  --duration-instant: 0ms;      /* No transition */
  --duration-fast: 150ms;       /* Micro-interactions */
  --duration-normal: 200ms;     /* Standard transitions */
  --duration-slow: 300ms;       /* Emphasis transitions */
  --duration-slower: 400ms;     /* Page transitions */
}
```

### Easing Language

```css
:root {
  --ease-linear: linear;                          /* Spinners */
  --ease-in: cubic-bezier(0.4, 0, 1, 1);         /* Exit animations */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);        /* Enter animations */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);   /* Emphasis */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* Playful */
}
```

---

## Design Tokens Integration

All design language elements must reference tokens:

```tsx
// ✅ CORRECT: Uses design tokens
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
<Card className="p-6 shadow-sm rounded-card border-border">
<Text className="text-muted-foreground text-sm">

// ❌ WRONG: Hardcoded values
<Button className="bg-[#6366f1] text-white">
<Card className="p-[22px] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
<Text className="text-gray-500 text-[13px]">
```

---

## Quality Checklist

### Before Merging Any UI:

- [ ] All colors use design tokens
- [ ] Spacing follows 4px grid
- [ ] Typography uses type scale
- [ ] Interactive states are consistent
- [ ] Elevation follows z-index scale
- [ ] Motion uses timing/easing tokens
- [ ] Cards follow card patterns
- [ ] Forms follow form patterns
- [ ] Layout follows alignment rules
- [ ] Responsive breakpoints applied

---

## How to Use

1. **Reference this skill** when building any UI component
2. **Validate against patterns** before implementation
3. **Use token-based values** exclusively
4. **Follow state machines** for interactions
5. **Apply consistent elevation** for depth
6. **Maintain visual hierarchy** through weight

---

## Best Practices

✅ **DO**:
- Think in terms of design vocabulary
- Use the same patterns everywhere
- Reference tokens, never hardcode
- Maintain consistent density per context
- Follow established interaction patterns

❌ **DON'T**:
- Invent new visual patterns ad-hoc
- Use magic numbers for spacing/colors
- Break the elevation system
- Mix different interaction models
- Ignore visual weight balance
