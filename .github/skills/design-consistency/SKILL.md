---
name: design-consistency
description: Ensures all design implementations adhere strictly to established themes, alignment rules, and spacing standards. Prevents deviations and ensures a cohesive, professional, and accessible user interface.
version: 2.0.0
tags: [design-system, ui, ux, accessibility, theming, components]
---

# Design Consistency & Theme Alignment

## Description
This skill ensures that all design implementations adhere strictly to the established design theme, consistency guidelines, alignment rules, and spacing standards. It prevents deviations from the design system and ensures a cohesive, professional, and accessible user interface.

Design consistency is critical because:
- **Users transfer knowledge** from other websites and applications (Jakob's Law)
- **Lower learning curves** mean users can focus on content rather than figuring out the interface
- **Trust and confidence** are built when user expectations are consistently met
- **Reduced cognitive load** allows for better user engagement and task completion

## Types of Consistency

### Internal Consistency
Consistency within a single product or family of products:
- Same patterns, colors, and layouts across all pages/screens
- Consistent component behavior throughout the application
- Unified visual language within the product suite

### External Consistency
Adherence to industry standards and platform conventions:
- Following platform-specific guidelines (iOS HIG, Material Design, etc.)
- Respecting established web conventions (logo placement, navigation patterns)
- Using universally understood icons and interactions

---

## Rules

### 1. Theme Consistency & Integrity

#### Color System
- **Design Tokens**: Strictly use defined CSS variables or design tokens (e.g., `var(--primary-color)`, `theme.colors.background`). 
- **Semantic Naming**: Prefer semantic names over descriptive ones (e.g., use `--color-error` instead of `--color-red-500`).
- **Color Modes**: Ensure all colors have appropriate dark mode counterparts defined in the theme.
- **No Hardcoding**: Do not use hardcoded hex, rgb, or hsl values in component styles.
- **Color Relationships**: Define primary, secondary, accent, and neutral color scales with proper contrast relationships.
- **State Colors**: Establish consistent colors for success, warning, error, and info states.

#### Typography System
- **Type Scale**: Follow the defined type scale for headings (h1-h6), body text, captions, and labels.
- **Font Stack**: Use defined font families with proper fallbacks.
- **Font Weights**: Limit to defined weights (e.g., 400 regular, 500 medium, 600 semibold, 700 bold).
- **Line Heights**: Use consistent line-heights/leading from the type scale.
- **Letter Spacing**: Apply consistent tracking for headings vs body text.
- **No Local Overrides**: Avoid overriding global font settings locally unless absolutely necessary for a specific design pattern.

#### Component Styling
- **Visual Language**: Match the visual language: border-radius, box-shadows, and opacity must come from the theme tokens.
- **Borders**: Use consistent border widths and colors (e.g., `1px solid var(--border-subtle)`).
- **Elevation/Shadows**: Use defined shadow tokens for consistent depth perception (e.g., `--shadow-sm`, `--shadow-md`, `--shadow-lg`).
- **Border Radius**: Maintain consistent corner radius tokens across components.

### 2. Alignment & Layout Precision

#### Grid System
- **Column Grid**: Adhere to the project's grid system (columns, gutters, margins).
- **Baseline Grid**: Align text and elements to a consistent baseline grid (typically 4px or 8px).
- **Responsive Breakpoints**: Respect responsive breakpoints when defining layouts.
- **Container Widths**: Use consistent max-width containers across pages.

#### Modern Layout Techniques
- **Flexbox/Grid**: Use modern CSS layout techniques (Flexbox, Grid) for structural alignment.
- **Alignment Properties**: Ensure `align-items` and `justify-content` are used to center or space items consistently.
- **Gap Property**: Prefer `gap` in Flex/Grid containers over margins on children.
- **Subgrid**: Use CSS Subgrid where supported for nested alignment.

#### Visual Alignment
- **Optical Alignment**: Visually align elements (icons with text, buttons in a row) even if mathematical alignment differs slightly.
- **Baseline Alignment**: Align text baselines across adjacent elements.
- **Edge Alignment**: Maintain consistent left/right edges for content blocks.

#### Stacking Context
- **Z-Index Scale**: Use a defined z-index scale (e.g., `z-10`, `z-modal`, `z-tooltip`) to manage stacking contexts.
- **No Arbitrary Values**: Avoid arbitrary values like `z-index: 9999`.
- **Layer Documentation**: Document z-index layers in a single source of truth.

### 3. Spacing & Sizing

#### Spacing Tokens
- **Design System Scale**: Use the design system's spacing scale (e.g., `p-4`, `m-2`, `gap-x-4` or `var(--spacing-md)`). 
- **8pt Grid**: Align spacing and sizing to an 8px (or 4px for fine adjustments) grid system.
- **No Magic Numbers**: Avoid arbitrary values like `margin: 13px` or `width: 305px`.
- **Consistent Scale**: Use a geometric or arithmetic scale (e.g., 4, 8, 12, 16, 24, 32, 48, 64).

#### Padding & Margins
- **Container Padding**: Apply consistent padding to containers (cards, modals, sections).
- **Sibling Margins**: Use consistent margins between sibling elements.
- **Gap Over Margins**: Use `gap` property in Flex/Grid containers instead of margins on children where supported.
- **Directional Consistency**: Be consistent with margin direction (prefer `margin-bottom` or `margin-top` across the project).

#### Sizing Strategy
- **Relative Units**: Use relative units (`rem`, `em`, `%`) for responsiveness and accessibility.
- **Viewport Units**: Use `vh`, `vw`, `dvh`, `svh` appropriately for full-screen layouts.
- **Fixed Sizes**: Use `px` only for borders, very specific fixed-size elements, or when pixel-perfection is required.
- **Aspect Ratios**: Use `aspect-ratio` CSS property for media containers.
- **Min/Max Constraints**: Use `min-width`, `max-width`, `clamp()` for fluid responsive sizing.

### 4. Design Patterns & Interaction

#### Component Reusability
- **Check First**: Check for existing components before building new ones.
- **Extend, Don't Duplicate**: Extend base components using props/variants rather than duplicating code.
- **Composition**: Build complex components from smaller, reusable primitives.
- **Single Source of Truth**: Maintain components in a central design system library.

#### Interaction States
- **Complete State Coverage**: Define and test all states: `default`, `hover`, `focus`, `focus-visible`, `active`, `disabled`, `loading`, `error`, and `success`.
- **Visual Feedback**: Ensure every interactive element provides clear visual feedback.
- **Consistent Timing**: Use standard duration and easing tokens for animations (e.g., `transition: all var(--duration-fast) var(--ease-out)`).
- **Reduced Motion**: Respect `prefers-reduced-motion` media query for accessibility.

#### Motion & Animation
- **Purposeful Animation**: Every animation should have a purpose (guide attention, show relationships, provide feedback).
- **Consistent Easing**: Use consistent easing curves across the application.
- **Duration Scale**: Define a duration scale (`--duration-fast: 150ms`, `--duration-normal: 300ms`, `--duration-slow: 500ms`).
- **Entry/Exit Animations**: Use consistent patterns for elements entering/leaving the viewport.

#### Iconography
- **Standard Icon Set**: Use the designated icon set consistently.
- **Size Consistency**: Ensure icons are sized consistently with the text they accompany (typically 1em or specific size tokens).
- **Optical Sizing**: Adjust icon visual weight to match text weight when necessary.
- **Meaningful Icons**: Use universally understood icons or pair with labels for clarity.

### 5. Aesthetic Quality & Polish

#### Visual Depth & Hierarchy
- **Purposeful Depth**: Avoid flat, lifeless designs unless explicitly requested. Use subtle shadows, gradients, or textures to add depth where appropriate.
- **Layering**: Use elevation and shadows to communicate hierarchy and interactive states.
- **Visual Weight**: Balance heavy and light elements across the layout.

#### Motion & Delight
- **Micro-interactions**: Incorporate micro-interactions (e.g., button hover effects, modal entry animations) to make the UI feel alive.
- **Skeleton Loading**: Use skeleton screens instead of spinners for better perceived performance.
- **Progressive Disclosure**: Animate content reveals to guide user attention.

#### Typography Hierarchy
- **Clear Hierarchy**: Ensure a clear visual hierarchy using font size, weight, and color.
- **Heading Distinction**: Headings should be visually distinct from body text.
- **Emphasis Patterns**: Use consistent patterns for emphasis (bold, italic, color highlights).

#### Craft & Attention to Detail
- **Avoid "AI Slop"**: Do not settle for generic, cookie-cutter designs. Strive for a polished, human-crafted feel.
- **Pixel Perfection**: Pay attention to subpixel rendering, anti-aliasing, and crisp edges.
- **Content-First**: Design around real content, not lorem ipsum placeholders.

### 6. Content & Language Consistency

#### Tone & Voice
- **Consistent Tone**: Maintain consistent tone across all UI text (formal, casual, friendly, etc.).
- **Brand Voice**: Align UI copy with established brand voice guidelines.
- **Error Messages**: Write helpful, human error messages—avoid technical jargon.

#### Terminology
- **Consistent Vocabulary**: Use the same terms for the same concepts throughout the application.
- **Action Labels**: Use consistent verbs for actions (e.g., always "Save" not sometimes "Submit").
- **Capitalization**: Follow consistent capitalization rules (Title Case vs Sentence case).

#### Microcopy
- **Button Labels**: Use clear, action-oriented button labels.
- **Form Labels**: Write clear, concise form labels and helpful placeholder text.
- **Empty States**: Design thoughtful empty states with helpful guidance.

### 7. Accessibility (A11y)

#### Color & Contrast
- **WCAG Compliance**: Ensure text and interactive elements meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).
- **Color Independence**: Never use color alone to convey meaning—pair with icons, text, or patterns.
- **High Contrast Mode**: Test designs in Windows High Contrast Mode.

#### Focus Management
- **Visible Focus**: Never remove outline on focus (`outline: none`) without providing a visible alternative style.
- **Focus Order**: Ensure logical focus order that matches visual order.
- **Focus Trapping**: Properly trap focus in modals and dialogs.
- **Skip Links**: Provide skip navigation links for keyboard users.

#### Interactive Elements
- **Touch Targets**: Ensure interactive elements have a minimum touch target size (44x44px for mobile, 24x24px minimum for desktop).
- **Clickable Area**: Extend clickable areas beyond visual boundaries when helpful.
- **Keyboard Access**: All interactive elements must be keyboard accessible.

#### Screen Reader Support
- **Semantic HTML**: Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<article>`).
- **ARIA Labels**: Provide appropriate ARIA labels for complex components.
- **Live Regions**: Use ARIA live regions for dynamic content updates.
- **Alt Text**: Provide meaningful alt text for images; use empty alt for decorative images.

### 8. Responsive Design & Cross-Platform

#### Breakpoint Strategy
- **Mobile First**: Design mobile-first, then enhance for larger screens.
- **Defined Breakpoints**: Use consistent, documented breakpoints across the project.
- **Content-Driven Breaks**: Let content needs drive breakpoint decisions, not device sizes.

#### Layout Adaptation
- **Fluid Layouts**: Use fluid layouts that adapt smoothly between breakpoints.
- **Component Variants**: Create responsive variants of components (e.g., horizontal nav → hamburger menu).
- **Touch vs Mouse**: Consider touch interactions on mobile, hover on desktop.

#### Cross-Platform Consistency
- **Platform Conventions**: Respect platform-specific conventions while maintaining brand consistency.
- **Feature Parity**: Strive for feature parity across platforms where appropriate.
- **Performance**: Optimize assets and interactions for each platform's constraints.

### 9. Design System Governance

#### Documentation
- **Component Documentation**: Document every component with usage guidelines, dos/don'ts, and code examples.
- **Design Tokens**: Maintain a single source of truth for all design tokens.
- **Changelog**: Keep a changelog of design system updates.

#### Contribution Process
- **Review Process**: Establish a clear review process for new components or changes.
- **Quality Gates**: Define quality criteria that must be met before merging.
- **Deprecation Policy**: Have a clear policy for deprecating old patterns.

#### Version Control
- **Semantic Versioning**: Use semantic versioning for the design system.
- **Breaking Changes**: Clearly communicate breaking changes and migration paths.
- **Sync Design & Code**: Keep design files and code components in sync.

---

## Anti-Patterns (What to Avoid)

### Code Smells
- ❌ Using inline styles for layout or theming (e.g., `style={{ marginTop: '20px' }}`).
- ❌ Using `!important` to override styles (fix specificity issues instead).
- ❌ Mixing different spacing units (e.g., mixing `px` and `rem` for margins).
- ❌ Creating "snowflake" components that deviate slightly from the system without justification.
- ❌ Using generic system fonts (Arial, Times New Roman) when a custom font stack is defined.

### Design Smells
- ❌ Inconsistent button placement (e.g., primary action on left vs right across different modals).
- ❌ Multiple visual styles for the same component type.
- ❌ Inconsistent icon styles or sizes within the same context.
- ❌ Breaking established platform conventions without strong justification.
- ❌ Mixing formal and casual tone in UI copy.

### Process Smells
- ❌ Building new components without checking the existing library.
- ❌ Making one-off design decisions without updating the system.
- ❌ Skipping design review for "small" changes.
- ❌ Diverging from design specs during implementation without discussion.

---

## Validation Checklist

### Theme & Styling
- [ ] Are all colors, fonts, and shadows using design tokens?
- [ ] Is there a dark mode and does it work correctly?
- [ ] Are semantic color names used consistently?

### Layout & Spacing
- [ ] Is the spacing consistent with the 4px/8px scale?
- [ ] Are elements properly aligned (vertically and horizontally)?
- [ ] Does the layout follow the grid system?
- [ ] Does the code avoid magic numbers and hardcoded values?

### Interactivity
- [ ] Do interactive elements have visible focus and hover states?
- [ ] Are all animations using consistent timing and easing?
- [ ] Do loading states exist for async operations?
- [ ] Is keyboard navigation fully supported?

### Responsiveness
- [ ] Is the component responsive across defined breakpoints?
- [ ] Do touch targets meet minimum size requirements on mobile?
- [ ] Has the design been tested on actual devices?

### Accessibility
- [ ] Do all text/background combinations pass WCAG AA contrast?
- [ ] Are ARIA labels provided where needed?
- [ ] Does the focus order make logical sense?
- [ ] Are screen reader announcements working correctly?

### Quality
- [ ] Does the design feel polished and distinct, avoiding generic aesthetics?
- [ ] Is the component documented in the design system?
- [ ] Has the design been reviewed by another team member?

---

## Design Review Process

### When to Conduct Reviews
- **Regular Reviews**: Weekly or bi-weekly design consistency audits.
- **Pre-Release Reviews**: Before major releases or feature launches.
- **Spot Checks**: Random sampling of recently implemented features.
- **Annual Audits**: Comprehensive yearly review to identify UX debt.

### What to Review
1. **Visual Consistency**: Colors, typography, spacing, iconography.
2. **Interaction Consistency**: Behavior of similar components across pages.
3. **Content Consistency**: Tone, terminology, and microcopy patterns.
4. **Cross-Platform Consistency**: Experience across devices and platforms.

### Review Outcomes
- **Document Deviations**: Record all inconsistencies found.
- **Prioritize Fixes**: Rank issues by user impact and effort to fix.
- **Update System**: Use findings to improve the design system.
- **Share Learnings**: Communicate patterns and anti-patterns to the team.

---

## Resources & References

### Industry Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Web accessibility standards
- [Nielsen Norman Group - Consistency & Standards](https://www.nngroup.com/articles/consistency-and-standards/) - Jakob Nielsen's Heuristic #4
- [Material Design](https://material.io/design) - Google's design system
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) - Apple's design standards

### Popular Design Systems for Reference
- Atlassian Design System
- GitHub Primer
- Salesforce Lightning
- Shopify Polaris
- IBM Carbon

### Tools for Consistency
- **Design Tokens**: Style Dictionary, Theo
- **Linting**: Stylelint, ESLint with design system rules
- **Visual Regression**: Chromatic, Percy, BackstopJS
- **Accessibility**: axe-core, Lighthouse, WAVE

