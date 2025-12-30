---
name: design-consistency
description: Ensures all design implementations adhere strictly to established themes, alignment rules, and spacing standards. Prevents deviations and ensures a cohesive, professional, and accessible user interface.
---

# Design Consistency & Theme Alignment

## Description
This skill ensures that all design implementations adhere strictly to the established design theme, consistency guidelines, alignment rules, and spacing standards. It prevents deviations from the design system and ensures a cohesive, professional, and accessible user interface.

## Rules

### 1. Theme Consistency & Integrity
- **Color Palette**: 
    - Strictly use defined CSS variables or design tokens (e.g., `var(--primary-color)`, `theme.colors.background`). 
    - **Semantic Naming**: Prefer semantic names over descriptive ones (e.g., use `--color-error` instead of `--color-red-500`).
    - **Dark Mode**: Ensure all colors have appropriate dark mode counterparts defined in the theme.
    - **No Hardcoding**: Do not use hardcoded hex, rgb, or hsl values in component styles.
- **Typography**: 
    - Follow the type scale for headings, body text, and captions.
    - Use defined font families, weights, and line-heights (leading).
    - Avoid overriding global font settings locally unless absolutely necessary for a specific design pattern.
- **Component Styling**: 
    - Match the visual language: border-radius, box-shadows, and opacity must come from the theme tokens.
    - **Borders**: Use consistent border widths and colors (e.g., `1px solid var(--border-subtle)`).

### 2. Alignment & Layout Precision
- **Grid System**: 
    - Adhere to the project's grid system (columns, gutters, margins).
    - Respect responsive breakpoints when defining layouts.
- **Flexbox/Grid**: 
    - Use modern CSS layout techniques (Flexbox, Grid) for structural alignment.
    - Ensure `align-items` and `justify-content` are used to center or space items consistently.
- **Optical Alignment**: 
    - Visually align elements (icons with text, buttons in a row) even if mathematical alignment differs slightly.
- **Z-Index**: 
    - Use a defined z-index scale (e.g., `z-10`, `z-modal`, `z-tooltip`) to manage stacking contexts. Avoid arbitrary values like `z-index: 9999`.

### 3. Spacing & Sizing
- **Spacing Tokens**: 
    - Use the design system's spacing scale (e.g., `p-4`, `m-2`, `gap-x-4` or `var(--spacing-md)`). 
    - **8pt Grid**: Whenever possible, align spacing and sizing to an 8px (or 4px) grid.
    - **No Magic Numbers**: Avoid arbitrary values like `margin: 13px` or `width: 305px`.
- **Padding & Margins**: 
    - Apply consistent padding to containers (cards, modals) and margins between sibling elements.
    - Use `gap` property in Flex/Grid containers instead of margins on children where supported.
- **Sizing**: 
    - Use relative units (`rem`, `em`, `%`) for responsiveness and accessibility.
    - Use `px` only for borders or very specific fixed-size elements (like 1px lines).

### 4. Design Patterns & Interaction
- **Reusability**: 
    - Check for existing components before building new ones.
    - Extend base components using props/variants rather than duplicating code.
- **Interaction States**: 
    - Define and test all states: `default`, `hover`, `focus`, `active`, `disabled`, and `loading`.
    - Transitions: Use standard duration and easing tokens for animations (e.g., `transition: all var(--duration-fast) var(--ease-out)`).
- **Iconography**: 
    - Use the standard icon set.
    - Ensure icons are sized consistently with the text they accompany.

### 5. Aesthetic Quality & Polish
- **Visual Depth**: Avoid flat, lifeless designs unless explicitly requested. Use subtle shadows, gradients, or textures to add depth where appropriate.
- **Motion & Delight**: Incorporate micro-interactions (e.g., button hover effects, modal entry animations) to make the UI feel alive.
- **Typography Hierarchy**: Ensure a clear visual hierarchy using font size, weight, and color. Headings should be distinct from body text.
- **Avoid "AI Slop"**: Do not settle for generic, cookie-cutter designs. Strive for a polished, human-crafted feel.

### 6. Accessibility (A11y)
- **Contrast**: Ensure text and interactive elements meet WCAG AA contrast ratios against their background.
- **Focus Indicators**: Never remove outline on focus (`outline: none`) without providing a visible alternative style.
- **Click Targets**: Ensure interactive elements have a minimum touch target size (usually 44x44px).

## Anti-Patterns (What to Avoid)
- ❌ Using inline styles for layout or theming (e.g., `style={{ marginTop: '20px' }}`).
- ❌ Using `!important` to override styles (fix specificity issues instead).
- ❌ Mixing different spacing units (e.g., mixing `px` and `rem` for margins).
- ❌ Creating "snowflake" components that deviate slightly from the system without justification.
- ❌ Using generic system fonts (Arial, Times New Roman) when a custom font stack is defined.

## Validation Checklist
- [ ] Are all colors, fonts, and shadows using design tokens?
- [ ] Is the spacing consistent with the 4px/8px scale?
- [ ] Are elements properly aligned (vertically and horizontally)?
- [ ] Do interactive elements have visible focus and hover states?
- [ ] Is the component responsive across defined breakpoints?
- [ ] Does the code avoid magic numbers and hardcoded values?
- [ ] Does the design feel polished and distinct, avoiding generic aesthetics?

