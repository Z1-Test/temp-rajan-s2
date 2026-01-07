# Staylook Design System

> **Curved, Editorial, Minimal, Expressive**

A comprehensive design system built on semantic tokens, curved aesthetics, and selective expressive usage.

## Design Pillars

1. **Curved** - Soft, rounded edges throughout. No sharp corners.
2. **Editorial** - Clean layouts with deliberate white space and strong typographic hierarchy.
3. **Minimal** - Every element serves a purpose. No decoration without function.
4. **Expressive** - Strategic color use to guide attention and create emotional impact.

## Token System

### Color Roles

- **Standard** (Primary) - Default color for structure and readability
- **Expressive** (Selective) - Use only for explicitly marked special moments
- **Container** - Surface/background colors
- **On** - Content colors (text, icons)
- **Outline** - Border colors

### The Expressive Usage Rule

**Use sparingly and intentionally**: Expressive styling is NOT required on every page. Only use it for explicitly marked special moments.

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

### Radius Hierarchy (Strict Nesting)

Outer elements MUST be MORE rounded than inner elements:

```
Section (32px)
  └── Container (24px)
       └── Card (16px)
            └── Input (16px)
                 └── Badge (8px)
                      └── Button (pill/9999px)
```

**Critical**: ALL buttons MUST be pill-shaped (border-radius: 9999px)

## Components

### Core Components
- Button (Standard, Expressive, Ghost, Outline)
- Input (Text, Number, Email, etc.)
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Slider

### Layout Components
- Card
- Container
- Section
- Grid
- Stack

### Feedback Components
- Alert
- Toast
- Badge
- Progress
- Skeleton
- Spinner

### Overlay Components
- Dialog/Modal
- Sheet
- Popover
- Tooltip
- Dropdown Menu

### Navigation Components
- Tabs
- Breadcrumb
- Pagination
- Menu

### Data Display
- Table
- Avatar
- Accordion
- Separator

## Usage

### Import Tokens

```css
@import '@/styles/tokens.css';
```

### Using Components

```tsx
import { Button } from '@/staylook/components/button';

// Standard button (default)
<Button>Continue</Button>

// Expressive button (only for special moments)
<Button variant="expressive">Start Free Trial</Button>
```

### Using Tokens

```css
.my-component {
  background: var(--sl-container-vibrant);
  color: var(--sl-on-standard);
  border: 1px solid var(--sl-outline-muted);
  border-radius: var(--sl-radius-card);
  padding: var(--sl-space-4);
  box-shadow: var(--sl-shadow-calm);
}
```

## Best Practices

### Do ✅
- Use semantic token names
- Follow the 4px grid for all spacing
- Make ALL buttons pill-shaped
- Use Expressive only when explicitly needed (not by default)
- Apply radius nesting hierarchy
- Use intensity scale for state progressions

### Don't ❌
- Use Expressive color unless explicitly needed for special moments
- Feel obligated to use Expressive on every page
- Mix sharp corners with curved design
- Use hardcoded hex values
- Skip the intensity scale progression
- Ignore the radius hierarchy

---

*Staylook Design System — Curved, Editorial, Minimal, Expressive*
