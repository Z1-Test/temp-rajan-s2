# Staylook Design Guidelines - Aesthetic Semantic Edition

> A comprehensive guide to building beautiful, consistent, and intentional interfaces.

---

## 1. Visual Philosophy

| Principle | Description |
|-----------|-------------|
| **Curved** | Soft, rounded edges create warmth and approachability. No sharp corners. |
| **Editorial** | Clean layouts with deliberate white space and strong typographic hierarchy. |
| **Minimal** | Every element serves a purpose. No decoration without function. |
| **Expressive** | Strategic use of color to guide attention and create emotional impact. |

### Design Pillars
- **Clarity** — Information is easy to find and understand
- **Consistency** — Patterns and behaviors are predictable
- **Delight** — Micro-interactions and thoughtful details create joy
- **Accessibility** — Designed for everyone, regardless of ability

---

## 2. Color System: Semantic Color Architecture

The Staylook color system uses a **semantic naming convention** that describes the *purpose* and *intensity* of colors, rather than arbitrary names like "Primary" or "Secondary".

### 2.1 Core Color Roles

| Role | Purpose | Usage Frequency |
|------|---------|----------------|
| **Standard** | The **MAIN UI COLOR**. Used for 90% of the interface. | Everywhere: buttons, text, icons, borders |
| **Expressive** | The **PRODUCT HIGHLIGHT COLOR**. Brand identity moments only. | Sparingly: special CTAs, brand moments, key highlights |
| **Base** | The foundational white/light color. Creates breathing room. | Backgrounds, card fills, contrast zones |

### 2.2 The Golden Rule: Standard is MAIN, Expressive is SPECIAL

```
┌─────────────────────────────────────────────────────────────────────┐
│                    COLOR PHILOSOPHY                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   ██████████████████████████████████████████████████  STANDARD      │
│   ══════════════════════════════════════════════════                │
│   • THE MAIN COLOR - Used for 90% of UI elements                    │
│   • All buttons (except special product highlights)                 │
│   • All text, headings, labels                                      │
│   • All icons, borders, dividers                                    │
│   • Navigation, form elements, cards                                │
│   • Variables: --color-ink, --color-ink-soft, --color-ink-muted     │
│                                                                      │
│   ────────────────────────────────────────────────────────────────  │
│                                                                      │
│   ████  EXPRESSIVE (Product Highlight Color)                         │
│   ════                                                               │
│   • ONLY for special "product moments" - used VERY sparingly        │
│   • Floating Action Buttons (FAB)                                   │
│   • Special promotional CTAs ("Continue", "Get Started")            │
│   • Active/selected states that need brand emphasis                 │
│   • Success confirmations, progress indicators                      │
│   • Variables: --color-accent, --color-accent-light                 │
│                                                                      │
│   ⚠️  NEVER use Expressive as the default button color!             │
│   ⚠️  Standard buttons should ALWAYS use --color-ink                │
│                                                                      │
│   ────────────────────────────────────────────────────────────────  │
│                                                                      │
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  BASE          │
│   ══════════════════════════════════════════════════                │
│   • The canvas upon which all other colors rest                     │
│   • Creates contrast and visual breathing room                      │
│   • Variable: --color-base                                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.3 Standard vs Expressive: Key Differences

| Aspect | Standard (MAIN) | Expressive (HIGHLIGHT) |
|--------|-----------------|------------------------|
| **Usage** | 90% of UI | 10% of UI |
| **Buttons** | Default buttons: "Confirm", "Submit", "Save" | Special CTAs: "Get Started", FAB buttons |
| **Purpose** | Structure, actions, readability | Brand moments, product highlights |
| **Emotion** | Professional, trustworthy, solid | Energetic, special, celebratory |
| **Decision** | Default choice | Intentional decision by design |

### 2.4 The "One Highlight" Rule (Strict)

The Expressive color (Blue) has a **strict budget of 1 per screen**. It is the single focal point.

#### ✅ Use STANDARD (Black) For:
- Primary action buttons (Confirm, Submit, Continue) - **Yes, even primary actions are Black!**
- All navigation elements
- All text and headings
- All icons and borders

#### ✅ Use EXPRESSIVE (Blue) For:
- **ONLY ONE SPOT PER PAGE** (The Single Focus)
- Example: The Floating Action Button (FAB) on a dashboard
- Example: The "Get Premium" button in a sea of standard options
- Example: A single active state in a navigation bar

#### ❌ DON'T:
- ❌ Don't have a Blue "Continue" button AND a Blue "Back" button
- ❌ Don't use Blue for all primary actions (Use Black)
- ❌ Don't sprinkle Blue around for decoration

> 💡 **The Spotlight Rule**: Imagine a dark stage with a single spotlight. That spotlight is your Expressive color. You can't have 10 spotlights, or the audience won't know where to look. **If there is more than one blue element on the screen, you are likely breaking the rules.**

---

## 3. The Intensity Scale: Muted → Calm → Vibrant

Every visual property follows a **three-step intensity scale** from lightest to darkest. This creates a predictable and harmonious visual system.

### The Scale Philosophy

```
   MUTED                     CALM                      VIBRANT
   ┌─────┐                   ┌─────┐                   ┌─────┐
   │░░░░░│  ───────────>     │▒▒▒▒▒│  ───────────>     │█████│
   └─────┘                   └─────┘                   └─────┘
   Lightest                  Balanced                  Darkest/Strongest
   Subtle                    Standard                  Emphasized
   Background                Default                   Active/Focused
```

### 3.1 Surfaces (Backgrounds)

Surfaces define the foundational layer of your interface.

| Level | Name | Hex Value | Appearance | When to Use |
|-------|------|-----------|------------|-------------|
| 1 | **Muted** | `#FFFFFF` | Pure White | Cards, modals, elevated content |
| 2 | **Calm** | `#FAFAFA` | Off-White | Page backgrounds, section dividers |
| 3 | **Vibrant** | `#F0F0F0` | Light Grey | Inputs, active states, hover backgrounds |

```css
/* Surface Token Usage */
.page { background: var(--surface-calm); }
.card { background: var(--surface-muted); }
.input { background: var(--surface-vibrant); }
```

### 3.2 Outlines (Borders)

Borders define edges and create visual separation.

| Level | Name | Hex Value | Visibility | When to Use |
|-------|------|-----------|------------|-------------|
| 1 | **Muted** | `#F2F2F2` | Barely visible | Subtle dividers, ghost elements |
| 2 | **Calm** | `#E0E0E0` | Standard | Card borders, input borders |
| 3 | **Vibrant** | `#1A1A1A` | High contrast | Focus states, active elements |

```css
/* Border Token Usage */
.divider { border-color: var(--border-muted); }
.card { border: 1px solid var(--border-calm); }
.input:focus { border-color: var(--border-vibrant); }
```

### 3.3 Shadows (Elevation)

Shadows communicate depth and importance.

| Level | Name | Intensity | When to Use |
|-------|------|-----------|-------------|
| 1 | **Muted** | Very Soft | Subtle lift, resting cards |
| 2 | **Calm** | Medium | Standard elevation, dropdowns |
| 3 | **Vibrant** | Deep/Strong | Modals, popovers, focused elements |

```css
/* Shadow Token Usage */
.card { box-shadow: var(--shadow-muted); }
.card:hover { box-shadow: var(--shadow-calm); }
.modal { box-shadow: var(--shadow-vibrant); }
```

### 3.4 Visual Intensity Progression

```
┌───────────────────────────────────────────────────────────────────┐
│                    INTENSITY PROGRESSION                           │
├───────────────────────────────────────────────────────────────────┤
│                                                                    │
│   State          Surface         Outline         Shadow           │
│   ─────          ───────         ───────         ──────           │
│   Resting        Muted           Muted           Muted            │
│   Default        Calm            Calm            Calm             │
│   Hover          Calm            Calm            Calm             │
│   Active/Focus   Vibrant         Vibrant         Vibrant          │
│                                                                    │
│   • Elements progress through intensity as interaction increases  │
│   • Consistent progression creates predictable behavior           │
│   • Users learn the visual language intuitively                   │
│                                                                    │
└───────────────────────────────────────────────────────────────────┘
```

---

## 4. Layout & Container System

### 4.1 Page Structure

All pages follow a consistent structural pattern with rounded containers at every level.

```
┌──────────────────────────────────────────────────────────┐
│  PAGE WRAPPER (Full viewport)                            │
│  └── radius: none | background: --surface-calm           │
│                                                          │
│    ┌────────────────────────────────────────────────┐    │
│    │  SECTION (Major content area)                  │    │
│    │  └── radius: --radius-section (32px)           │    │
│    │      └── background: --surface-muted           │    │
│    │                                                │    │
│    │    ┌──────────────────────────────────────┐    │    │
│    │    │  CONTAINER (Content wrapper)         │    │    │
│    │    │  └── radius: --radius-container (24px)    │    │
│    │    │      └── max-width: 1280px           │    │    │
│    │    │                                      │    │    │
│    │    │    ┌────────────┐ ┌────────────┐     │    │    │
│    │    │    │   CARD     │ │   CARD     │     │    │    │
│    │    │    │ radius:16px│ │ radius:16px│     │    │    │
│    │    │    └────────────┘ └────────────┘     │    │    │
│    │    │                                      │    │    │
│    │    └──────────────────────────────────────┘    │    │
│    │                                                │    │
│    └────────────────────────────────────────────────┘    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 4.2 Container Guidelines

| Container Type | Max Width | Padding | Radius | Use Case |
|---------------|-----------|---------|--------|----------|
| **Full Width** | 100% | 0 | 0 | Hero sections, full-bleed images |
| **Wide** | 1440px | 32px | 32px | Feature sections |
| **Standard** | 1280px | 24px | 24px | Main content areas |
| **Narrow** | 768px | 16px | 16px | Article content, forms |
| **Compact** | 480px | 12px | 16px | Modals, dialogs |

### 4.3 Spacing Within Containers

```css
/* Container padding follows the intensity scale */
.container-compact { padding: var(--space-4); }   /* 16px */
.container-standard { padding: var(--space-6); }  /* 24px */
.container-spacious { padding: var(--space-8); }  /* 32px */
```

---

## 5. Radius Hierarchy (Strict)

Every rounded element follows a strict nesting hierarchy. Outer elements are more rounded than inner elements.

### 5.1 The Nesting Rule

```
OUTER elements = MORE rounded
INNER elements = LESS rounded

┌──────────────────────────────────────┐  ←── Section: 32px
│                                      │
│  ┌────────────────────────────────┐  │  ←── Container: 24px
│  │                                │  │
│  │  ┌──────────────────────────┐  │  │  ←── Card: 16px
│  │  │                          │  │  │
│  │  │   ┌────────────────────┐ │  │  │  ←── Element: 8px
│  │  │   │      Button        │ │  │  │
│  │  │   └────────────────────┘ │  │  │  ←── (Pill for interactive)
│  │  │                          │  │  │
│  │  └──────────────────────────┘  │  │
│  │                                │  │
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

### 5.2 Radius Token Reference

| Element | Radius | Token | Description |
|---------|--------|-------|-------------|
| **Section** | 32px | `--radius-section` | Outermost content areas |
| **Container** | 24px | `--radius-container` | Major content wrappers |
| **Card** | 16px | `--radius-card` | Information containers |
| **Input** | 16px | `--radius-input` | Form fields |
| **Badge** | 8px | `--radius-sm` | Small indicators |
| **Button** | 9999px | `--radius-button` | **Always pill-shaped** |

### 5.3 Why Pill Buttons?

Buttons use a full pill radius (`9999px`) because:
- ✅ Creates clear visual distinction from other rounded elements
- ✅ Highly tappable/clickable appearance
- ✅ Consistent across all button sizes
- ✅ Modern, premium aesthetic

---

## 6. Typography System

### 6.1 Font Family

| Role | Font | Fallbacks |
|------|------|-----------|
| **Sans** | Plus Jakarta Sans | -apple-system, BlinkMacSystemFont, sans-serif |
| **Mono** | SF Mono | Monaco, monospace |

### 6.2 Type Scale

| Token | Size | Typical Use |
|-------|------|-------------|
| `--text-xs` | 0.75rem (12px) | Captions, labels |
| `--text-sm` | 0.875rem (14px) | Secondary text, metadata |
| `--text-base` | 1rem (16px) | Body text |
| `--text-lg` | 1.125rem (18px) | Emphasized body |
| `--text-xl` | 1.25rem (20px) | Subheadings |
| `--text-2xl` | 1.5rem (24px) | Section titles |
| `--text-3xl` | 2rem (32px) | Page titles |
| `--text-4xl` | 2.5rem (40px) | Hero titles |
| `--text-5xl` | 3rem (48px) | Display text |

### 6.3 Semantic Typography Colors

Typography follows the semantic color system for consistent meaning:

| Text Role | Color Token | When to Use |
|-----------|-------------|-------------|
| **Primary** | `--color-ink` | Main headings, important labels |
| **Secondary** | `--color-ink-soft` | Body paragraphs, descriptions |
| **Tertiary** | `--color-ink-muted` | Captions, placeholders, hints |
| **Link** | `--color-accent` | Interactive text links |
| **Highlight** | `--color-accent` | Emphasized words/phrases |
| **Inverse** | `--color-base` | Text on dark backgrounds |

```css
/* Typography Semantic Color Usage */
h1, h2, h3 { color: var(--color-ink); }
p { color: var(--color-ink-soft); }
.caption { color: var(--color-ink-muted); }
.highlight { color: var(--color-accent); }
```

### 6.4 Expressive Typography

Use the **Expressive** color sparingly in typography for maximum impact:

| Usage | Description |
|-------|-------------|
| ✅ **DO** | Highlight a key word in a headline |
| ✅ **DO** | Style a call-to-action link |
| ✅ **DO** | Mark active navigation items |
| ❌ **DON'T** | Use for body paragraphs |
| ❌ **DON'T** | Apply to all headings |
| ❌ **DON'T** | Use as the default text color |

---

## 7. Spacing System

### 7.1 Spacing Scale

Based on a 4px base unit, creating harmonious relationships.

| Token | Value | Typical Use |
|-------|-------|-------------|
| `--space-1` | 4px | Micro spacing, icon gaps |
| `--space-2` | 8px | Related element gaps |
| `--space-3` | 12px | Small internal padding |
| `--space-4` | 16px | Standard padding |
| `--space-6` | 24px | Section padding |
| `--space-8` | 32px | Large gaps |
| `--space-12` | 48px | Section margins |
| `--space-16` | 64px | Major separations |
| `--space-20` | 80px | Hero spacing |
| `--space-24` | 96px | Page sections |

### 7.2 Spacing Guidelines

| Context | Recommended Spacing |
|---------|---------------------|
| Between sections | `--space-12` to `--space-16` |
| Between cards in a grid | `--space-4` to `--space-6` |
| Card internal padding | `--space-4` to `--space-6` |
| Button internal padding | `--space-3` × `--space-6` |
| Input internal padding | `--space-3` × `--space-4` |

---

## 8. Motion & Animation

### 8.1 Duration Scale

| Token | Duration | Use Case |
|-------|----------|----------|
| `--duration-fast` | 150ms | Micro-interactions, hovers |
| `--duration-base` | 300ms | Standard transitions |
| `--duration-slow` | 500ms | Complex animations, page transitions |

### 8.2 Animation Principles

- **Purposeful**: Every animation should communicate meaning
- **Subtle**: Don't distract from content
- **Responsive**: Animations should never block interaction
- **Natural**: Use easing curves that mimic real-world physics

```css
/* Default easing for all transitions */
.element {
    transition: all var(--duration-base) cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 9. Dark Mode Considerations

When implementing dark mode, the intensity scale **inverts**:

| Property | Light Mode | Dark Mode |
|----------|------------|-----------|
| **Surface Muted** | Lightest (White) | Darkest (Near Black) |
| **Surface Calm** | Middle (Off-White) | Middle (Dark Grey) |
| **Surface Vibrant** | Darkest (Light Grey) | Lightest (Medium Grey) |

The semantic names remain the same—only the values change.

---

## 10. Quick Reference Cheat Sheet

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STAYLOOK QUICK REFERENCE                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  COLORS                                                              │
│  ──────                                                              │
│  Standard = Main color (text, structure)                             │
│  Expressive = Highlight color (CTAs, attention)                      │
│  Muted → Calm → Vibrant = Intensity progression                      │
│                                                                      │
│  RADIUS                                                              │
│  ──────                                                              │
│  Section: 32px → Container: 24px → Card: 16px → Button: Pill         │
│                                                                      │
│  TYPOGRAPHY                                                          │
│  ──────────                                                          │
│  Headings: --color-ink                                               │
│  Body: --color-ink-soft                                              │
│  Captions: --color-ink-muted                                         │
│  Links/Highlights: --color-accent                                    │
│                                                                      │
│  SURFACES                                                            │
│  ────────                                                            │
│  Page: --surface-calm                                                │
│  Card: --surface-muted                                               │
│  Input: --surface-vibrant                                            │
│                                                                      │
│  SHADOWS                                                             │
│  ───────                                                             │
│  Resting: --shadow-muted                                             │
│  Hover: --shadow-calm                                                │
│  Active: --shadow-vibrant                                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

*Last updated: January 2026*
