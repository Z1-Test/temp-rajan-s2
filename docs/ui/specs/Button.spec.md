# Button Component Specification

## Overview

| Property    | Value                                    |
|-------------|------------------------------------------|
| Name        | Button                                   |
| Category    | Interactive / Action                     |
| Status      | Specification Complete                   |

## Purpose

A versatile, accessible button component for triggering actions, submitting forms, and navigation.

## Props / API Definition

```typescript
interface ButtonProps {
  // Content
  children: React.ReactNode;
  
  // Variants
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  
  // States
  disabled?: boolean;
  loading?: boolean;
  
  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  
  // Layout
  fullWidth?: boolean;
  
  // HTML Button Props
  type?: 'button' | 'submit' | 'reset';
  
  // Event Handlers
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  // Styling
  className?: string;
  
  // Accessibility
  'aria-label'?: string;
}
```

## Variant Matrix

### Visual Variants

| Variant     | Use Case                                      |
|-------------|-----------------------------------------------|
| primary     | Main CTA, form submissions                    |
| secondary   | Secondary actions, cancel buttons             |
| outline     | Tertiary actions, less emphasis               |
| ghost       | Minimal emphasis, toolbar actions             |
| destructive | Delete, remove, dangerous actions             |

### Size Variants

| Size | Height | Use Case                           |
|------|--------|------------------------------------|
| sm   | 32px   | Compact UIs, tables, inline        |
| md   | 40px   | Default, most use cases            |
| lg   | 48px   | Hero sections, primary CTAs        |

### State Variants

| State    | Description                              |
|----------|------------------------------------------|
| default  | Normal resting state                     |
| hover    | Mouse over                               |
| active   | Mouse down / pressed                     |
| focus    | Keyboard focused                         |
| disabled | Non-interactive, reduced opacity         |
| loading  | Action in progress, shows spinner        |

## Accessibility Requirements

### ARIA Attributes

- `role="button"` (implicit for `<button>`)
- `aria-disabled="true"` when disabled
- `aria-busy="true"` when loading
- `aria-label` when no visible text

### Keyboard Navigation

| Key         | Action                    |
|-------------|---------------------------|
| Tab         | Focus the button          |
| Enter       | Activate the button       |
| Space       | Activate the button       |

### Focus Management

- Visible focus ring (3px primary color ring)
- Focus ring only on keyboard focus (`:focus-visible`)
- No focus trap

### Screen Reader Announcements

- Loading state: "Loading" announced via aria-busy
- Disabled state: "disabled" announced via aria-disabled

## Responsive Behavior

| Breakpoint | Behavior                                |
|------------|-----------------------------------------|
| Mobile     | Full-width option, larger touch targets |
| Tablet+    | Inline by default                       |

## Visual Design

### Spacing

```
[leftIcon?] [spacing-2] [children] [spacing-2] [rightIcon?]
```

### Focus Ring

```css
outline: none;
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
```

### Disabled State

```css
opacity: 0.5;
cursor: not-allowed;
```

### Loading State

- Replace leftIcon with spinner
- Maintain button dimensions
- Disable pointer events

## Usage Examples

```tsx
// Primary button
<Button variant="primary">Save Changes</Button>

// With icons
<Button leftIcon={<PlusIcon />}>Add Item</Button>

// Loading state
<Button loading>Submitting...</Button>

// Destructive action
<Button variant="destructive">Delete Account</Button>

// Full width on mobile
<Button fullWidth>Continue</Button>
```

## Do's and Don'ts

### Do's

- Use clear, action-oriented labels
- Use primary variant for main CTA (one per section)
- Provide loading feedback for async actions
- Ensure sufficient color contrast

### Don'ts

- Don't use multiple primary buttons in one section
- Don't disable buttons without explanation
- Don't use generic labels like "Click here"
- Don't remove focus indicators
