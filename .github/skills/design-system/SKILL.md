---
title: Design System Rules for staystack-ts
description: Rules and conventions for creating, documenting, and consuming Design System components in the staystack-ts repository.
tags:
  - design-system
  - ui
  - components
  - accessibility
  - react
  - styling
name: design-system
---

# Design System Skill (staystack-ts)

## What is it?

This skill codifies the repository's Design System conventions: component architecture, naming patterns, accessibility standards, token usage, and required documentation sections. It serves as the single source of truth for building UI that is consistent, accessible, and maintainable.

## Why use it?

- **Consistency**: Ensures visual and functional uniformity across the application, reducing cognitive load for users.
- **Accessibility**: Enforces WCAG 2.1 AA standards by default, making the app usable by everyone.
- **Efficiency**: Accelerates development by providing reusable, well-tested, and documented components.
- **Maintainability**: Centralizes UI logic and styling, making updates and refactors safer and easier.

## How to use it

1. **Frontmatter**: Add a YAML frontmatter with `title`, `description`, and `tags` for every component documentation file.
2. **Structure**: Organize component documentation with clear sections: "Usage", "Props", "Variants", and "Accessibility".
3. **Implementation**:
    - Use the defined technology stack (React, TypeScript, Tailwind/CSS Modules).
    - **Always** consume design tokens (colors, spacing, typography) instead of hardcoded values.
4. **Interactivity**: Ensure all interactive elements are keyboard accessible (Tab, Enter, Space, Arrows) and have proper ARIA attributes.
5. **Documentation**: Include sections: `Accessibility`, `Theming`, `Best Practices`, and `Do's and Don'ts`.

## Style & Visuals

> [!WARNING]
> Do not hardcode hex values or pixel values for layout. Always use design tokens (CSS variables or theme constants).

- **Naming Conventions**:
    - Components: PascalCase (e.g., `PrimaryButton`, `CardHeader`).
    - Props: camelCase (e.g., `isLoading`, `hasError`).
    - Event Handlers: `on[Event]` (e.g., `onClick`, `onChange`).
- **File Structure**: Co-locate component files, styles, tests, and stories in the same directory.
    ```
    /Button
      ├── Button.tsx
      ├── Button.module.css
      ├── Button.test.tsx
      ├── Button.stories.tsx
      └── index.ts
    ```
- **Visuals**: Include screenshots or live previews (Storybook) for all variants (primary, secondary, destructive, etc.).
- **States**: Explicitly define styles for all states: `default`, `hover`, `active`, `focus-visible`, `disabled`, and `loading`.

## Content & Structure requirements

- **Component Overview**:
    - **Description**: A clear, one-sentence explanation of what the component does.
    - **Import**: Code snippet showing how to import the component.
- **Props Interface**:
    - Use a table or list to detail every prop: Name, Type, Default Value, Description, and Required status.
- **Usage Examples**:
    - Provide copy-pasteable code snippets for common use cases.
    - Show examples of composition with other components.
- **Accessibility Section**:
    - List specific accessibility features (e.g., "Manages focus on open", "Supports screen reader announcements").
    - Mention relevant ARIA roles and attributes used.
- **Scalability & Performance**:
    - Discuss memoization strategies (`React.memo`, `useMemo`).
    - Mention bundle size implications if heavy libraries are used.
- **Limitations & Trade-offs**:
    - Be honest about constraints (e.g., "Not designed for mobile-first", "Fixed height").

> [!NOTE]
> Prioritize composition over configuration. Avoid "God components" with too many props. Use slots or children for flexibility.

## Technical accuracy & examples

- **TypeScript**:
    - Use `interface` for defining Props.
    - Export the Props interface so consumers can use it.
    - Avoid `any`; use specific types or generics.
- **Deprecation**:
    - Mark old props/components using the `@deprecated` JSDoc tag with a migration path.

Example frontmatter and snippet:

````plaintext
---
title: Button
description: "Interactive element that triggers an action."
tags: [component, ui, atom]
---

## What is it?

A standard button component for user actions.

## Quick start

```tsx
import { Button } from '@staystack/ui';

<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style of the button. |
| `isLoading` | `boolean` | `false` | Shows a loading spinner and disables interaction. |

````

## Scalability & Performance

- **Dependencies**: Avoid heavy dependencies within atomic components.
- **Tree-shaking**: Ensure components are exported in a way that allows unused code to be eliminated.
- **Rendering**: Minimize re-renders by keeping state local or using stable callbacks.

## Security & Best Practices

- **Input Sanitization**: Sanitize user inputs if rendering HTML (prevent XSS).
- **Least Privilege**: Components should only have access to the data they strictly need.
- **Prop Drilling**: Avoid excessive prop drilling; use composition or context where appropriate.

## Accessibility (A11y) Checklist

- [ ] **Keyboard Navigation**: Can the component be used entirely without a mouse?
- [ ] **Focus Management**: Is the focus state clearly visible? Does focus return correctly after closing modals/popovers?
- [ ] **Screen Readers**: Are all controls labeled? Do status changes announce themselves?
- [ ] **Contrast**: Do text and interactive elements meet WCAG AA contrast ratios (4.5:1)?
- [ ] **Reduced Motion**: Does the component respect the user's `prefers-reduced-motion` setting?

## Validation & Quality

- **Unit Tests**: All components must have 100% unit test coverage (Jest/Vitest).
- **Visual Regression**: Visual regression tests are required for all variants (Chromatic/Percy).
- **Accessibility Audits**: Must pass automated accessibility audits (axe-core) in CI.
- **Linting**: Ensure code passes all ESLint and Prettier checks.

## Governance

- **Source of Truth**: Keep this SKILL as the canonical source for Design System rules.
- **RFC Process**: Changes to the system tokens, core architecture, or breaking changes require a formal RFC (Request for Comments) process.
- **Versioning**: Follow Semantic Versioning (SemVer) for component library releases.

## Limitations & trade-offs

- **Flexibility vs. Consistency**: Strict adherence to tokens may limit one-off custom designs but ensures long-term maintainability.
- **Learning Curve**: Developers must learn the token system and component API, which has an initial ramp-up time.
