---
title: Design Foundation
description: Staylook design system foundation with semantic tokens, curved aesthetic, and editorial style
tags:
  - frontend
  - design-system
  - tokens
  - staylook
  - foundation
  - semantic-design
name: design-foundation
---

# Design Foundation Skill

> **Staylook Design System**: Curved, Editorial, Minimal, and Expressive

## What is it?

This skill establishes the Staylook design foundation—a semantic, aesthetic design system with curved elements, editorial layouts, and a strict color hierarchy.

## Why use it?

- **Semantic Clarity**: Color names describe intensity and purpose
- **Visual Consistency**: Strict radius hierarchy and "One Highlight" rule
- **Premium Aesthetic**: Curved, rounded elements with editorial spacing
- **Accessibility**: WCAG AA compliant
- **Predictable**: Every component follows the same semantic patterns

---

# Part 1: Visual Philosophy

## Design Pillars

Apply these four principles to all design work:

1. **Curved** - Use soft, rounded edges throughout. No sharp corners anywhere.
2. **Editorial** - Create clean layouts with deliberate white space and strong typographic hierarchy.
3. **Minimal** - Ensure every element serves a purpose. Avoid decoration without function.
4. **Expressive** - Use color strategically to guide attention and create emotional impact.

## Core Values

When making design decisions, prioritize:

- **Clarity** — Make information easy to find and understand
- **Consistency** — Ensure patterns and behaviors are predictable
- **Delight** — Add micro-interactions and thoughtful details
- **Accessibility** — Design for everyone, regardless of ability

---

# Part 2: Semantic Color System

## The Three Color Roles

Establish three distinct color roles with clear purposes:

### 1. Standard (The Main Color)
- **Purpose**: The primary UI color used for structure and readability
- **Usage**: 90% of all interface elements
- **Elements**: All buttons (except special highlights), text, icons, borders, navigation
- **Variables**: Define as `--color-ink`, `--color-ink-soft`, `--color-ink-muted`
- **Value**: Black or very dark gray (#1A1A1A)

### 2. Expressive (The Highlight Color)
- **Purpose**: Strategic highlight for special product moments
- **Usage**: 10% of interface, maximum 1 element per screen
- **Elements**: FAB buttons, special CTAs, active selected states, success confirmations
- **Variables**: Define as `--color-accent`, `--color-accent-light`, `--color-accent-dark`
- **Value**: Blue (#3373CC)
- **Critical Rule**: NEVER use as default button color

### 3. Base (The Canvas)
- **Purpose**: Foundational color that creates breathing room
- **Usage**: Backgrounds, contrast zones
- **Variable**: Define as `--color-base`
- **Value**: White (#FFFFFF)

## The "One Highlight" Rule (STRICT)

**Enforce this rule rigorously**: The Expressive color has a strict budget of 1 per screen.

### Apply Expressive Color To:
- The single most important action on the page (e.g., FAB button)
- One special promotional CTA (e.g., "Get Started")
- One active/selected state that needs brand emphasis
- One progress indicator or success confirmation

### Use Standard Color For:
- Primary action buttons (Confirm, Submit, Continue) - Yes, even primary actions use Standard!
- All navigation elements
- All text and headings
- All icons and borders

### Never Do:
- DO NOT have multiple Expressive buttons on the same screen
- DO NOT use Expressive for all primary actions
- DO NOT sprinkle Expressive color around for decoration

**The Spotlight Rule**: If there is more than one Expressive element on the screen, you are breaking the rules.

---

# Part 3: The Intensity Scale

## Scale Philosophy

Apply a three-step intensity scale from lightest to darkest:

**Muted** → **Calm** → **Vibrant**
- Lightest → Balanced → Darkest
- Subtle → Standard → Emphasized
- Background → Default → Active/Focused

This scale creates predictable and harmonious visual progression.

## Apply to Surfaces (Backgrounds)

Define three levels:

1. **Muted** (#FFFFFF) - Use for cards, modals, elevated content
2. **Calm** (#FAFAFA) - Use for page backgrounds, section dividers
3. **Vibrant** (#F0F0F0) - Use for inputs, active states, hover backgrounds

## Apply to Outlines (Borders)

Define three levels:

1. **Muted** (#F2F2F2) - Use for subtle dividers, ghost elements
2. **Calm** (#E0E0E0) - Use for card borders, input borders
3. **Vibrant** (#1A1A1A) - Use for focus states, active elements

## Apply to Shadows (Elevation)

Define three levels:

1. **Muted** - Use for subtle lift, resting cards
2. **Calm** - Use for standard elevation, dropdowns
3. **Vibrant** - Use for modals, popovers, focused elements

## State Progression Pattern

Interactive elements should progress through intensity levels:

- **Resting**: Use Muted tokens
- **Default/Hover**: Use Calm tokens
- **Active/Focus**: Use Vibrant tokens

This creates consistent, learnable behavior across all components.

---

# Part 4: Radius Hierarchy (Strict Nesting)

## The Nesting Rule

**Apply this rule strictly**: Outer elements must be MORE rounded than inner elements.

Visual hierarchy from outside to inside:
1. **Section** - 32px (outermost content areas)
2. **Container** - 24px (major content wrappers)
3. **Card** - 16px (information containers)
4. **Input** - 16px (form fields)
5. **Badge** - 8px (small indicators)
6. **Button** - PILL/9999px (ALWAYS, no exceptions)

## Button Radius Rule (Critical)

**ALL buttons MUST be pill-shaped** (border-radius: 9999px or "full").

Reasons:
- Creates clear visual distinction from other rounded elements
- Highly tappable/clickable appearance
- Consistent across all button sizes
- Modern, premium aesthetic

Never use any other radius value for buttons.

---

# Part 5: Typography System

## Font Family

Set the primary font to:
- **Sans**: 'Plus Jakarta Sans' with system font fallbacks
- **Mono**: 'SF Mono' or Monaco with monospace fallbacks

## Type Scale

Define a harmonious scale (in rem):
- **xs**: 0.75rem (12px) - Captions, labels
- **sm**: 0.875rem (14px) - Secondary text, metadata
- **base**: 1rem (16px) - Body text
- **lg**: 1.125rem (18px) - Emphasized body
- **xl**: 1.25rem (20px) - Subheadings
- **2xl**: 1.5rem (24px) - Section titles
- **3xl**: 2rem (32px) - Page titles
- **4xl**: 2.5rem (40px) - Hero titles
- **5xl**: 3rem (48px) - Display text

## Semantic Typography Colors

Apply color based on text role:

- **Headings (H1-H3)**: Use Standard Ink color
- **Body Paragraphs**: Use Standard Ink Soft color
- **Captions/Hints**: Use Standard Ink Muted color
- **Links**: Use Expressive Accent color
- **Highlights**: Use Expressive Accent color (sparingly!)
- **Inverse Text**: Use Base color (on dark backgrounds)

## Expressive Typography Guidelines

Use Expressive color in typography sparingly:

**Do Use For**:
- Highlighting one key word in a headline
- Styling a call-to-action link
- Marking active navigation items

**Don't Use For**:
- Body paragraphs
- All headings
- Default text color

---

# Part 6: Spacing System (4px Grid)

## Base Unit

Use 4px as the base unit for all spacing.

## Define Spacing Scale

Create tokens for common spacing values:
- **1**: 4px - Micro spacing, icon gaps
- **2**: 8px - Related element gaps
- **3**: 12px - Small internal padding
- **4**: 16px - Standard padding
- **6**: 24px - Section padding
- **8**: 32px - Large gaps
- **12**: 48px - Section margins
- **16**: 64px - Major separations
- **20**: 80px - Hero spacing
- **24**: 96px - Page sections

## Spacing Guidelines

Apply spacing based on context:

- **Between sections**: 48-64px (space-12 to space-16)
- **Between cards**: 16-24px (space-4 to space-6)
- **Card internal**: 16-24px (space-4 to space-6)
- **Button padding**: 12px × 24px (space-3 × space-6)
- **Input padding**: 12px × 16px (space-3 × space-4)

---

# Part 7: Animation Tokens

## Duration Scale

Define three timing levels:
- **Fast**: 150ms - Use for micro-interactions, hovers
- **Base**: 300ms - Use for standard transitions
- **Slow**: 500ms - Use for complex animations, page transitions

## Easing

Use cubic-bezier(0.4, 0, 0.2, 1) for all transitions to create natural, physics-like motion.

---

# Part 8: Dark Mode Strategy

## Inversion Principle

When implementing dark mode, **invert the intensity scale**:

- What was light (Muted) becomes dark
- What was medium (Calm) stays medium
- What was dark (Vibrant) becomes light

**Important**: The semantic names remain the same—only the values change.

## Color Inversions

Apply these inversions:

**Surfaces**:
- Muted: #FFFFFF → #1A1A1A (inverts to darkest)
- Calm: #FAFAFA → #242424 (stays middle)
- Vibrant: #F0F0F0 → #2E2E2E (inverts to lightest)

**Text**:
- Ink: #1A1A1A → #FFFFFF (inverts)
- Ink Soft: #4A4A4A → #B8B8B8 (inverts)
- Ink Muted: #9E9E9E → #6A6A6A (inverts)

**Expressive**: Keep similar, slightly adjust for dark backgrounds (#5C9FFF)

---

# Part 9: Implementation Workflow

## Step 1: Define Token Files

Create token files in this order:

1. **Color tokens** - Standard, Expressive, Base, Intensity Scale
2. **Radius tokens** - Section, Container, Card, Input, Button
3. **Typography tokens** - Font families, type scale, weights
4. **Spacing tokens** - 4px grid scale
5. **Animation tokens** - Duration, easing

## Step 2: Generate Output Formats

From your token source, generate:

1. CSS custom properties file
2. Tailwind config extension
3. TypeScript token types
4. JSON source of truth

## Step 3: Validate Implementation

Before using in production, verify:

- All colors use design tokens (no hardcoded hex values)
- Spacing follows 4px grid
- Typography uses type scale
- Interactive states are consistent
- Radius hierarchy is enforced
- Dark mode variants exist
- Contrast ratios meet WCAG AA (4.5:1)
- All tokens have TypeScript types

---

# Part 10: Design Guidelines Reference

## Quick Rules Summary

**Colors**:
- Standard (ink/black) for 90% of UI
- Expressive (accent/blue) for 10% of UI, max 1 per screen
- Intensity scale: Muted → Calm → Vibrant

**Radius**:
- Strict nesting: 32px → 24px → 16px → pill
- ALL buttons are pill-shaped (9999px)

**Typography**:
- Font: Plus Jakarta Sans
- Headings: Standard Ink
- Body: Standard Ink Soft
- Captions: Standard Ink Muted
- Highlights: Expressive Accent (sparingly)

**Spacing**:
- Use 4px base grid
- Apply semantic spacing for context

**Buttons**:
- ALWAYS pill-shaped
- Default to Standard color
- ONE Expressive button per screen maximum

**Rule**:
- One Highlight per screen (Expressive budget = 1)

---

## Best Practices Checklist

**Do**:
- Use semantic token names (Standard/Expressive, not primary/secondary)
- Follow the 4px grid for all spacing
- Make ALL buttons pill-shaped
- Enforce "One Highlight" rule on every screen
- Apply radius nesting hierarchy
- Use intensity scale for state progressions

**Don't**:
- Use Expressive color for regular buttons
- Have multiple Expressive elements on one screen
- Mix sharp corners with curved design
- Use hardcoded hex values
- Skip the intensity scale progression
- Ignore the radius hierarchy

---

*Staylook Design System — Curved, Editorial, Minimal, Expressive*
