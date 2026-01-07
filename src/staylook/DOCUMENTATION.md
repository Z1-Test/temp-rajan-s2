# Staylook Design System - Complete Documentation

## Table of Contents
1. [Overview](#overview)
2. [Design Principles](#design-principles)
3. [Token System](#token-system)
4. [Components](#components)
5. [Usage Guide](#usage-guide)
6. [Best Practices](#best-practices)

---

## Overview

Staylook is a comprehensive design system built on four core pillars: **Curved**, **Editorial**, **Minimal**, and **Expressive**. It provides a complete set of semantic design tokens, reusable components, and clear guidelines for building beautiful, consistent user interfaces.

### Key Features

- ✨ **Semantic Token System** - Hierarchical color naming with clear purpose
- 🎨 **"One Highlight" Rule** - Strategic use of accent color (max 1 per screen)
- 🔄 **Intensity Scale** - Predictable state progressions (Muted → Calm → Vibrant)
- 📐 **Radius Hierarchy** - Strict nesting rules for visual consistency
- 🌓 **Dark Mode Support** - Automatic color inversion with semantic tokens
- ♿ **Accessibility First** - WCAG AA compliant color contrasts

---

## Design Principles

### 1. Curved
Use soft, rounded edges throughout. No sharp corners anywhere.

**Implementation:**
- ALL buttons are pill-shaped (border-radius: 9999px)
- Cards use 16px radius
- Containers use 24px radius
- Follow strict nesting hierarchy

### 2. Editorial
Create clean layouts with deliberate white space and strong typographic hierarchy.

**Implementation:**
- Use 4px base grid for all spacing
- Apply semantic spacing tokens
- Clear type scale (xs to 5xl)
- Generous padding and margins

### 3. Minimal
Ensure every element serves a purpose. Avoid decoration without function.

**Implementation:**
- Remove unnecessary visual elements
- Use subtle shadows for depth
- Limit color palette to Standard + Expressive
- Clean, uncluttered layouts

### 4. Expressive
Use color strategically to guide attention and create emotional impact.

**Implementation:**
- Standard color for 90% of UI
- Expressive color for 10% of UI (max 1 per screen)
- Semantic colors for feedback states
- Strategic use of shadows and elevation

---

## Token System

### Color Roles

#### Standard (Primary - 90% of UI)
The main color for structure and readability.

```css
--sl-standard: #000000;        /* Primary text/icons */
--sl-standard-soft: #4D4D4D;   /* Secondary text */
--sl-standard-muted: #9E9E9E;  /* Muted/disabled */
```

**Usage:** All buttons (except THE highlight), text, icons, borders, navigation

#### Expressive (Accent - Use Selectively)
Use ONLY for explicitly marked special moments.

```css
--sl-expressive: #3373CC;       /* Special moments only */
--sl-expressive-soft: #5C9FFF;  /* Hover state */
--sl-expressive-muted: #BBDEFB; /* Background tint */
```

**Usage:** Critical CTAs (e.g., "Start Free Trial"), promotional campaigns, celebration states, unique brand moments. NOT for regular buttons or standard interactions.

#### Container (Surfaces)
Background colors for surfaces.

```css
--sl-container-muted: #EBEBEB;   /* Secondary surfaces */
--sl-container-calm: #F5F5F5;    /* Page backgrounds */
--sl-container-vibrant: #FFFFFF; /* Primary surfaces */
```

#### On (Content Colors)
Colors for text and icons on surfaces.

```css
--sl-on-standard: #000000;   /* Primary text */
--sl-on-expressive: #3373CC; /* Accent text */
--sl-on-error: #D32F2F;      /* Error text */
--sl-on-success: #388E3C;    /* Success text */
--sl-on-warning: #F57C00;    /* Warning text */
--sl-on-info: #1976D2;       /* Info text */
```

#### Outline (Borders)
Border and divider colors.

```css
--sl-outline-muted: #E0E0E0;     /* Subtle dividers */
--sl-outline-calm: #BDBDBD;      /* Card borders */
--sl-outline-vibrant: #1A1A1A;   /* Focus states */
--sl-outline-expressive: #5C9FFF; /* Accent borders */
```

### The Expressive Usage Rule (SELECTIVE)

**Use sparingly and intentionally:** Expressive styling is NOT required on every page. Only use it for explicitly marked special moments.

✅ **Use Expressive ONLY When Explicitly Needed For:**
- Critical conversion moments (e.g., "Start Free Trial", "Subscribe Now")
- Special promotional campaigns or featured content
- Celebration states (e.g., success confirmations, achievements)
- Unique brand moments that need emphasis

✅ **Most Pages Should Use Standard Only:**
- Standard action buttons (Confirm, Submit, Continue, Save, etc.)
- All navigation elements
- All text and headings
- All icons and borders
- Regular interactive elements

**Key Principle:** If an element is not explicitly marked as "expressive" or a "special moment," use Standard styling. Expressive is the exception, not the rule.

### Radius Hierarchy

**Strict Nesting Rule:** Outer elements MUST be MORE rounded than inner elements.

```
Section (32px)
  └── Container (24px)
       └── Card (16px)
            └── Input (16px)
                 └── Badge (8px)
                      └── Button (pill/9999px)
```

**Critical:** ALL buttons MUST be pill-shaped (border-radius: 9999px)

### Spacing System (4px Grid)

All spacing follows a 4px base grid:

```css
--sl-space-1: 4px;   /* Micro spacing */
--sl-space-2: 8px;   /* Related elements */
--sl-space-3: 12px;  /* Small padding */
--sl-space-4: 16px;  /* Standard padding */
--sl-space-6: 24px;  /* Section padding */
--sl-space-8: 32px;  /* Large gaps */
--sl-space-12: 48px; /* Section margins */
--sl-space-16: 64px; /* Major separations */
```

---

## Components

### Core Components

#### Button
```tsx
import { Button } from '@/staylook';

// Standard button (default - 90% of buttons)
<Button>Continue</Button>

// Expressive button (THE highlight - max 1 per screen)
<Button variant="expressive">Get Started</Button>

// Other variants
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Close</Button>
<Button variant="destructive">Delete</Button>
```

#### Input
```tsx
import { Input } from '@/staylook';

<Input placeholder="Enter text..." />
<Input error placeholder="Invalid input" />
<Input success placeholder="Valid input" />
```

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/staylook';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Layout Components

#### Container
```tsx
import { Container } from '@/staylook';

<Container maxWidth="xl" padding="md">
  Content
</Container>
```

#### Stack
```tsx
import { Stack, VStack, HStack } from '@/staylook';

// Vertical stack
<VStack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</VStack>

// Horizontal stack
<HStack gap={2} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</HStack>
```

### Feedback Components

#### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/staylook';

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

#### Badge
```tsx
import { Badge } from '@/staylook';

<Badge variant="standard">New</Badge>
<Badge variant="expressive">Featured</Badge>
<Badge variant="success">Active</Badge>
```

#### Spinner
```tsx
import { Spinner } from '@/staylook';

<Spinner variant="expressive" size="lg" />
```

---

## Usage Guide

### Installation

1. Import the tokens CSS file:
```tsx
// In your main app file
import '@/styles/tokens.css';
```

2. Import components:
```tsx
import { Button, Card, Input } from '@/staylook';
```

### Using Tokens in Custom Components

```tsx
// Using CSS variables
const MyComponent = () => (
  <div style={{
    background: 'var(--sl-container-vibrant)',
    color: 'var(--sl-on-standard)',
    borderRadius: 'var(--sl-radius-card)',
    padding: 'var(--sl-space-4)',
  }}>
    Content
  </div>
);

// Using TypeScript tokens
import { Tokens } from '@/staylook';

const styles = {
  background: Tokens.colors.container.vibrant,
  color: Tokens.colors.on.standard,
};
```

### Dark Mode

Dark mode is automatically applied via CSS media query:

```css
@media (prefers-color-scheme: dark) {
  /* Token values automatically invert */
}
```

To manually toggle dark mode, add a class-based override:

```css
.dark {
  --sl-standard: #FFFFFF;
  --sl-container-vibrant: #1A1A1A;
  /* ... other dark mode tokens */
}
```

---

## Best Practices

### Do ✅

1. **Use semantic token names**
   - ✅ `var(--sl-on-standard)`
   - ❌ `#000000`

2. **Follow the 4px grid**
   - ✅ `padding: var(--sl-space-4)`
   - ❌ `padding: 15px`

3. **Make ALL buttons pill-shaped**
   - ✅ `border-radius: var(--sl-radius-button)`
   - ❌ `border-radius: 8px`

4. **Use Expressive selectively and intentionally**
   - ✅ Only for explicitly marked special moments
   - ❌ Not required on every page

5. **Apply radius nesting hierarchy**
   - ✅ Container (24px) > Card (16px) > Button (pill)
   - ❌ Card (24px) inside Container (16px)

6. **Use intensity scale for states**
   - ✅ Muted (rest) → Calm (hover) → Vibrant (active)
   - ❌ Random state colors

### Don't ❌

1. **Don't use Expressive unless explicitly needed**
   - ❌ Use Standard for regular primary actions

2. **Don't feel obligated to use Expressive on every page**
   - ❌ Many pages work perfectly with Standard only

3. **Don't mix sharp corners**
   - ❌ All elements should be curved

4. **Don't use hardcoded values**
   - ❌ Use tokens, not hex codes or pixel values

5. **Don't skip the intensity scale**
   - ❌ States should progress logically

6. **Don't ignore accessibility**
   - ❌ Maintain WCAG AA contrast ratios

---

## Component Checklist

When creating a new component:

- [ ] Uses semantic design tokens (no hardcoded values)
- [ ] Follows radius hierarchy
- [ ] Uses 4px grid spacing
- [ ] Has proper focus states
- [ ] Supports dark mode
- [ ] Meets WCAG AA contrast
- [ ] Has TypeScript types
- [ ] Includes documentation
- [ ] Uses Expressive only when explicitly needed (not by default)
- [ ] Uses intensity scale for states

---

*Staylook Design System — Curved, Editorial, Minimal, Expressive*
