---
title: UI Development
description: Staylook component patterns with semantic tokens, curved aesthetics, and editorial layouts
tags:
  - frontend
  - ui
  - components
  - staylook
  - semantic-design
  - button-patterns
name: ui-development
---

# UI Development Skill

> **Staylook Components**: Curved, Semantic, and Hierarchical

## What is it?

This skill covers Staylook UI component patterns—from building buttons and cards to creating responsive layouts with proper semantic tokens, radius hierarchy, and the "One Highlight" rule.

## Why use it?

- **Semantic Consistency**: All components use Standard/Expressive color roles
- **Visual Hierarchy**: Radius nesting creates clear structure
- **Intensity Progression**: Muted → Calm → Vibrant for all states
- **Premium Aesthetic**: Curved, pill-shaped buttons and editorial spacing
- **Accessibility**: WCAG AA compliant with proper contrast

---

# Part 1: Button Hierarchy System

## The Three Button Priorities

Implement a clear three-tier button system:

### Priority 1: Expressive Button (THE Main Action)
- **Purpose**: The single most important action on the page
- **Color**: Use Expressive (accent) color
- **Budget**: Maximum 1 per screen or section
- **Examples**: "Get Started", "Publish", "Complete Purchase", FAB buttons
- **Shape**: ALWAYS pill-shaped (border-radius: 9999px)
- **Visual Weight**: Filled, high contrast, shadowed
- **States**: Hover darkens, active adds slight press effect

### Priority 2: Standard Button (Secondary Actions)
- **Purpose**: Supporting actions, default choice
- **Color**: Use Standard (ink) color with outline
- **Budget**: Unlimited usage
- **Examples**: "Cancel", "Save Draft", "Continue", "Back"
- **Shape**: ALWAYS pill-shaped (border-radius: 9999px)
- **Visual Weight**: Outlined or subtle fill
- **States**: Hover increases border contrast, active changes background subtly

### Priority 3: Ghost Button (Tertiary Actions)
- **Purpose**: Optional or dismissive actions
- **Color**: Use Standard (ink soft) color, transparent background
- **Budget**: Unlimited usage
- **Examples**: "Skip", "Maybe Later", "Dismiss", "Learn More"
- **Shape**: ALWAYS pill-shaped (border-radius: 9999px)
- **Visual Weight**: Minimal, text-only with hover background
- **States**: Hover adds subtle background, active slightly darker

## Button Sizing Guidelines

Define three standard button sizes:

**Small**:
- Padding: 8px × 16px (space-2 × space-4)
- Font size: text-sm
- Use for: Inline actions, dense interfaces

**Medium** (Default):
- Padding: 12px × 24px (space-3 × space-6)
- Font size: text-base
- Use for: Most standard actions

**Large**:
- Padding: 16px × 32px (space-4 × space-8)
- Font size: text-lg
- Use for: Hero sections, primary CTAs

## Button Implementation Rules

When creating buttons:

1. **Always use pill shape** - Set border-radius to 9999px or "full"
2. **Choose correct priority** - Expressive for THE action, Standard for supporting, Ghost for tertiary
3. **Respect the budget** - Never more than 1 Expressive per screen
4. **Apply proper states** - All buttons need hover, active, focus, and disabled states
5. **Use semantic tokens** - Never hardcode colors
6. **Add focus indicators** - 2px outline with 2px offset for keyboard navigation

---

# Part 2: Card Component Patterns

## Card Structure

Build cards with this anatomy:

**Base Card**:
- Border radius: 16px (--radius-card)
- Background: Muted surface (#FFFFFF)
- Border: 1px solid Muted or Calm border
- Shadow: Muted shadow (subtle)
- Padding: 20px (space-5)

**Optional Sections**:
- Header: Optional top section with title/actions
- Body: Main content area
- Footer: Optional bottom section with actions/metadata

## Card Variants

Create these card types:

### Standard Card
- Use on Calm (#FAFAFA) page backgrounds
- Muted (#FFFFFF) surface makes it "pop"
- Subtle border and shadow
- Non-interactive, static display

### Interactive Card
- Responds to hover and click
- Progressive states using intensity scale:
  - Resting: Muted surface, Muted border, Muted shadow
  - Hover: Calm border, Calm shadow, slight lift (-2px translateY)
  - Active: Calm surface, Muted shadow, no lift
- Add cursor pointer
- Include focus state for keyboard navigation

### Outlined Card
- Stronger border (Calm instead of Muted)
- No shadow
- Use when cards need more definition

### Elevated Card
- No border
- Stronger shadow (Calm instead of Muted)
-  Hover increases shadow to Vibrant
- Use for prominent content

### Expressive Card (Use Sparingly)
- Background: Accent-light color
- Border: Accent color
- Use only when card IS the "One Highlight"

## Card Grid Layouts

Arrange cards using:

**Auto-fit Grid**:
- Minimum card width: 280px
- Cards automatically flow to new rows
- Gap between cards: 16px (space-4)

**Fixed Columns**:
- 2-column: For side-by-side comparisons
- 3-column: For dashboards, galleries
- 4-column: For dense data displays

---

# Part 3: Input Component Patterns

## Standard Input Design

Build inputs with:

**Visual Design**:
- Border radius: 16px (--radius-input)
- Background: Vibrant surface (#F0F0F0) for depth
- Border: 1px Muted border
- Height: 48px minimum (touch-friendly)
- Font: Base size, sans family

**States**:
- **Resting**: Vibrant background, Muted border
- **Hover**: Calm border (not focused)
- **Focus**: Muted background (inverts for clarity), Vibrant border, 4px blue glow
- **Error**: Red border, light red background tint
- **Success**: Green border, light green background tint
- **Disabled**: Calm background, muted text, cursor not-allowed, 70% opacity

## Input Components

Create these input types:

**Text Input**:
- Standard single-line input
- Placeholder text uses Ink Muted color
- Label above with space-2 margin

**Textarea**:
- Multiline input
- Minimum height: 120px
- Vertical resize only
- Same styling as text input

**Select Dropdown**:
- Appears like text input
- Chevron icon on right
- Custom dropdown styling matches modal radius (24px)

**Checkbox/Radio**:
- 20px × 20px size
- Rounded (checkbox: 4px, radio: full circle)
- Checked state uses Expressive color (when it's THE selection)
- Otherwise use Standard color

## Input Label Pattern

Always include labels:

- Font weight: 600 (semibold)
- Font size: text-sm
- Color: Standard Ink
- Position: Above input with space-2 gap
- Required fields: Add asterisk in Accent color

## Input Helper Text

Provide guidance with:

- Font size: text-sm
- Color: Standard Ink Muted
- Position: Below input with space-2 gap
- Error messages: Use red color, include icon

---

# Part 4: Layout Component System

## Section Container (Outermost)

The largest content wrapper:

- Border radius: 32px (--radius-section)
- Background: Muted surface
- Padding: 32px (space-8)
- Margin bottom: 32px (space-8) between sections
- Use for major page sections

## Content Container (Major Wrapper)

Standard content wrapper:

- Border radius: 24px (--radius-container)
- Max widths available:
  - xs: 480px (narrow forms)
  - sm: 640px (articles)
  - md: 768px (standard forms)
  - lg: 1024px (wider layouts)
  - xl: 1280px (default main content)
  - 2xl: 1440px (wide screens)
- Padding: 24px (space-6)
- Center with auto margins

## Page Wrapper

The outermost page container:

- Background: Calm surface (#FAFAFA)
- Minimum height: 100vh
- Padding: 24px (space-6)
- No border radius (full bleed)

## Grid System

Create responsive grids:

**Basic Grid**:
- Use CSS Grid
- Gap: 16px (space-4)
- Define columns: 2, 3, or 4 based on content

**Auto-fit Grid**:
- Columns auto-calculate based on minimum width
- Minimum: 280px per column
- Maximum: 1fr (equal distribution)
- Automatically responsive

## Stack Component (Vertical)

Stack elements vertically:

- Use flexbox column
- Gap sizes:
  - xs: 4px (space-1)
  - sm: 8px (space-2)
  - md: 16px (space-4) - default
  - lg: 24px (space-6)
  - xl: 32px (space-8)

## Row Component (Horizontal)

Arrange elements horizontally:

- Use flexbox row
- Align items center
- Gap sizes: same as Stack
- Responsive: convert to stack on mobile

---

# Part 5: Badge & Tag Components

## Badge Base Design

Small status indicators:

- Border radius: 8px (--radius-sm)
- Padding: 4px × 12px (space-1 × space-3)
- Font size: text-xs
- Font weight: 600 (semibold)
- Text transform: uppercase
- Letter spacing: 0.05em

## Badge Variants (Intensity Scale)

Create badges using intensity levels:

**Muted Badge** (Lightest):
- Background: Vibrant surface
- Text: Ink Muted
- Use for: Low-priority labels

**Calm Badge** (Standard):
- Background: Calm surface
- Text: Ink Soft
- Border: 1px Calm border
- Use for: Standard labels

**Vibrant Badge** (Strongest):
- Background: Standard Ink
- Text: Base (white)
- Use for: High-priority labels

**Expressive Badge** (Highlight):
- Background: Expressive Accent
- Text: Base (white)
- Use when: Badge IS the "One Highlight"

**Expressive Light Badge**:
- Background: Accent Light
- Text: Accent Dark
- Use for: Accent information that's not THE highlight

## Status Badges

Create semantic status badges:

- **Success**: Green background tint, green text
- **Warning**: Orange background tint, orange text
- **Error**: Red background tint, red text
- **Info**: Accent light background, accent dark text

---

# Part 6: Modal & Dialog Components

## Modal Structure

Build modals with:

**Backdrop**:
- Fixed position, full viewport
- Background: black at 50% opacity
- Backdrop blur: 4px
- z-index: 100+

**Modal Container**:
- Width: 90% of viewport, max 480px
- Max height: 90vh
- Overflow: auto (if content exceeds)
- Background: Muted surface
- Border radius: 24px (--radius-container)
- Shadow: Vibrant shadow (strongest)
- Padding: 24px (space-6)

**Modal Sections**:
- Header: Title area, margin-bottom space-4
- Title: text-xl, weight 700, Ink color
- Body: Main content, Ink Soft color, relaxed line height
- Footer: Button area, flexbox, gap space-3, justify-end, margin-top space-6

## Modal Button Pattern

In modal footers:

- Cancel/Close: Use Standard button
- Primary action: Use Expressive button (this IS the highlight)
- Align right
- Gap between: space-3

---

# Part 7: Typography Components

## Heading Styles

Apply semantic colors to headings:

**Primary Headings**:
- Color: Standard Ink
- Weight: 700 (bold)
- Line height: Tight (1.25)
- Letter spacing: -0.02em
- Use for: H1, H2, H3

**Secondary Headings**:
- Color: Standard Ink Soft
- Weight: 600 (semibold)
- Line height: Tight (1.25)
- Use for: H4, H5, H6

**Expressive Headings** (Rare):
- Color: Expressive Accent
- Weight: 700 (bold)
- Use sparingly: Only when heading IS the highlight

**Headings with Highlight**:
- Base: Standard Ink
- Highlight word: Expressive Accent
- Use to: Emphasize one key word

## Body Text Styles

Apply appropriate colors:

**Standard Body**:
- Color: Standard Ink Soft
- Size: text-base
- Line height: Relaxed (1.75)
- Use for: Paragraphs, descriptions

**Muted Text**:
- Color: Standard Ink Muted
- Size: text-sm
- Use for: Captions, hints, metadata

**Expressive Text** (Rare):
- Color: Expressive Accent
- Weight: 500 (medium)
- Use for: Links, important highlighted words

---

# Part 8: Component State System

## Intensity-Based States

Apply intensity progression to ALL interactive components:

**Resting State**:
- Surface: Muted
- Border: Muted
- Shadow: Muted
- Transform: none

**Hover State**:
- Surface: Calm (or stay Muted for buttons)
- Border: Calm
- Shadow: Calm
- Transform: translateY(-2px) for cards, none for buttons

**Active/Pressed State**:
- Surface: Vibrant for inputs, Calm for cards
- Border: Vibrant
- Shadow: Muted (reduces on press)
- Transform: translateY(0) or scale(0.98)

**Focus State**:
- Maintain surface color
- Border: Vibrant
- Outline: 2px solid blue, 2px offset
- Shadow: 4px blue glow

**Disabled State**:
- Surface: Calm
- Text: Ink Muted
- Opacity: 70%
- Cursor: not-allowed
- Pointer events: none

---

# Part 9: Responsive Design Patterns

## Breakpoint System

Define standard breakpoints:

- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Large screens

## Mobile-First Approach

Design mobile first, enhance for larger screens:

- Start with single column layouts
- Stack elements vertically on mobile
- Convert to rows/grids on larger screens
- Hide/show elements based on screen size
- Adjust spacing for different viewports

## Common Responsive Patterns

**Navigation**:
- Mobile: Hamburger menu or bottom tabs
- Desktop: Horizontal inline navigation

**Sidebar**:
- Mobile: Hidden or drawer
- Tablet: Collapsible
- Desktop: Fixed expanded

**Grid Columns**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Card Padding**:
- Mobile: 16px (space-4)
- Tablet: 24px (space-6)
- Desktop: 32px (space-8)

---

# Part 10: Implementation Guidelines

## Component Development Workflow

Follow this process for each component:

1. **Define Semantic Tokens**: Choose Standard vs Expressive, select intensity level
2. **Apply Radius**: Follow nesting hierarchy (32→24→16→pill)
3. **Set Spacing**: Use 4px grid values
4. **Create States**: Implement intensity progression
5. **Add Accessibility**: Include ARIA, keyboard support, focus states
6. **Test Responsiveness**: Verify on all breakpoints
7. **Validate Design**: Ensure "One Highlight" rule if using Expressive

## Quality Checklist

Before marking component complete:

- [ ] Uses semantic tokens (no hardcoded colors)
- [ ] Follows radius hierarchy
- [ ] Buttons are pill-shaped
- [ ] States use intensity progression
- [ ] Spacing follows 4px grid
- [ ] Accessible (keyboard navigation, ARIA labels, contrast)
- [ ] Responsive (works on all breakpoints)
- [ ] "One Highlight" rule respected

---

## Best Practices

**Do**:
- Make ALL buttons pill-shaped
- Use Standard color for default buttons
- Reserve Expressive for ONE element per screen
- Follow radius nesting hierarchy
- Apply intensity scale to states
- Place cards on Calm backgrounds

**Don't**:
- Mix sharp corners with curved design
- Use multiple Expressive buttons on one screen
- Skip intensity progression
- Hardcode radius values
- Ignore the Standard vs Expressive distinction
- Break the radius nesting order

---

*Staylook Design System — Beautiful, Semantic, Hierarchical*
