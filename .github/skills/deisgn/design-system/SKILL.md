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
  - tokens
  - theming
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
- **Scalability**: Enables teams to build features faster with a shared vocabulary and reusable building blocks.
- **Brand Cohesion**: Maintains brand identity across all touchpoints and product surfaces.

---

## Design Tokens System

Design tokens are the atomic values that define the visual language of the system. They are the single source of truth for colors, spacing, typography, and more.

### Token Categories

#### 1. Color Tokens

```css
/* Primitive Colors (raw values - DO NOT use directly in components) */
--color-blue-50: #eff6ff;
--color-blue-100: #dbeafe;
--color-blue-500: #3b82f6;
--color-blue-600: #2563eb;
--color-blue-700: #1d4ed8;
--color-blue-900: #1e3a8a;

/* Semantic Colors (use these in components) */
--color-primary: var(--color-blue-600);
--color-primary-hover: var(--color-blue-700);
--color-primary-active: var(--color-blue-800);

--color-background: var(--color-white);
--color-surface: var(--color-gray-50);
--color-surface-elevated: var(--color-white);

--color-text-primary: var(--color-gray-900);
--color-text-secondary: var(--color-gray-600);
--color-text-muted: var(--color-gray-400);
--color-text-inverse: var(--color-white);

--color-border: var(--color-gray-200);
--color-border-hover: var(--color-gray-300);

--color-success: var(--color-green-600);
--color-warning: var(--color-amber-500);
--color-error: var(--color-red-600);
--color-info: var(--color-blue-500);
```

#### 2. Spacing Tokens

```css
/* Base unit: 4px */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */

/* Component-specific spacing */
--space-button-x: var(--space-4);
--space-button-y: var(--space-2);
--space-card-padding: var(--space-6);
--space-section-gap: var(--space-16);
```

#### 3. Typography Tokens

```css
/* Font Families */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
--font-display: 'Plus Jakarta Sans', var(--font-sans);

/* Font Sizes (fluid typography) */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
--text-5xl: clamp(3rem, 2rem + 5vw, 5rem);

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
```

#### 4. Shadow & Elevation Tokens

```css
/* Shadows */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);

/* Elevation Levels */
--elevation-0: none;                    /* Flat surfaces */
--elevation-1: var(--shadow-sm);        /* Cards, containers */
--elevation-2: var(--shadow-md);        /* Dropdowns, popovers */
--elevation-3: var(--shadow-lg);        /* Modals, dialogs */
--elevation-4: var(--shadow-xl);        /* Notifications, toasts */
```

#### 5. Border & Radius Tokens

```css
/* Border Radius */
--radius-none: 0;
--radius-sm: 0.125rem;  /* 2px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
--radius-3xl: 1.5rem;   /* 24px */
--radius-full: 9999px;

/* Border Widths */
--border-0: 0;
--border-1: 1px;
--border-2: 2px;
--border-4: 4px;

/* Component-specific radius */
--radius-button: var(--radius-lg);
--radius-input: var(--radius-md);
--radius-card: var(--radius-xl);
--radius-modal: var(--radius-2xl);
```

#### 6. Animation & Motion Tokens

```css
/* Durations */
--duration-instant: 0ms;
--duration-fast: 100ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
--duration-slowest: 700ms;

/* Easing Functions */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Standard Transitions */
--transition-colors: color var(--duration-normal) var(--ease-out),
                     background-color var(--duration-normal) var(--ease-out),
                     border-color var(--duration-normal) var(--ease-out);
--transition-transform: transform var(--duration-normal) var(--ease-out);
--transition-opacity: opacity var(--duration-normal) var(--ease-out);
--transition-all: all var(--duration-normal) var(--ease-out);
```

#### 7. Z-Index Scale

```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
--z-toast: 800;
--z-max: 9999;
```

---

## Component Hierarchy (Atomic Design)

Organize components following the Atomic Design methodology:

### 1. Atoms (Primitive Elements)
Basic building blocks that can't be broken down further.

| Component | Description | Example |
|-----------|-------------|---------|
| `Button` | Interactive action trigger | Primary, Secondary, Ghost |
| `Input` | Text input field | Text, Email, Password |
| `Icon` | SVG icon wrapper | Chevron, Close, Check |
| `Badge` | Status indicator | Success, Warning, Error |
| `Avatar` | User representation | Image, Initials, Fallback |
| `Spinner` | Loading indicator | Sizes: sm, md, lg |
| `Checkbox` | Boolean toggle | Checked, Indeterminate |
| `Radio` | Single selection | Part of RadioGroup |
| `Switch` | On/off toggle | With label support |
| `Label` | Form field label | Required indicator |

### 2. Molecules (Simple Combinations)
Groups of atoms that function together as a unit.

| Component | Composition | Purpose |
|-----------|-------------|---------|
| `FormField` | Label + Input + Error | Complete form input |
| `SearchInput` | Input + Icon + Button | Search functionality |
| `MenuItem` | Icon + Text + Badge | Navigation item |
| `Toast` | Icon + Text + Close | Notification message |
| `Tooltip` | Trigger + Content | Contextual help |
| `Breadcrumb` | Links + Separators | Navigation trail |
| `Pagination` | Buttons + Numbers | Page navigation |
| `EmptyState` | Icon + Text + Action | No content message |

### 3. Organisms (Complex Components)
Relatively complex UI patterns composed of molecules and atoms.

| Component | Composition | Purpose |
|-----------|-------------|---------|
| `Header` | Logo + Nav + Actions | Page header |
| `Sidebar` | MenuItems + Sections | Side navigation |
| `Card` | Header + Body + Footer | Content container |
| `Modal` | Overlay + Content | Overlay dialog |
| `DataTable` | Header + Rows + Pagination | Tabular data |
| `Form` | FormFields + Actions | User input collection |
| `Dropdown` | Trigger + Menu | Selection menu |
| `CommandPalette` | Search + Results | Quick actions |

### 4. Templates (Page Layouts)
Page-level structures that arrange organisms.

| Template | Structure | Use Case |
|----------|-----------|----------|
| `DashboardLayout` | Sidebar + Main + Header | Admin pages |
| `AuthLayout` | Centered card | Login/Register |
| `SettingsLayout` | Tabs + Content | Settings pages |
| `LandingLayout` | Hero + Sections + Footer | Marketing pages |

---

## Theming Architecture

### Light/Dark Mode Implementation

```css
/* Light theme (default) */
:root, [data-theme="light"] {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-border: #e5e7eb;
}

/* Dark theme */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-border: #334155;
}

/* System preference detection */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Apply dark theme variables */
  }
}
```

### Theme Provider Pattern (React)

```tsx
interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Brand Customization

```css
/* Brand-specific overrides */
[data-brand="enterprise"] {
  --color-primary: #0066cc;
  --font-display: 'IBM Plex Sans', var(--font-sans);
  --radius-button: var(--radius-sm);
}

[data-brand="startup"] {
  --color-primary: #8b5cf6;
  --font-display: 'Space Grotesk', var(--font-sans);
  --radius-button: var(--radius-full);
}
```

---

## Layout System

### Grid System

```css
/* 12-column grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Responsive columns */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-6 { grid-column: span 6; }
.col-span-12 { grid-column: span 12; }

/* Auto-fit grid for cards */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: var(--space-6);
}
```

### Responsive Breakpoints

```css
/* Mobile-first breakpoints */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */

/* Container max-widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;
```

### Container Component

```tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  centered?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  padding = true,
  centered = true,
  children
}) => (
  <div
    className={cn(
      containerVariants({ size }),
      padding && 'px-4 sm:px-6 lg:px-8',
      centered && 'mx-auto'
    )}
  >
    {children}
  </div>
);
```

---

## How to use it

1. **Frontmatter**: Add a YAML frontmatter with `title`, `description`, and `tags` for every component documentation file.
2. **Structure**: Organize component documentation with clear sections: "Usage", "Props", "Variants", and "Accessibility".
3. **Implementation**:
    - Use the defined technology stack (React, TypeScript, Tailwind/CSS Modules).
    - **Always** consume design tokens (colors, spacing, typography) instead of hardcoded values.
4. **Interactivity**: Ensure all interactive elements are keyboard accessible (Tab, Enter, Space, Arrows) and have proper ARIA attributes.
5. **Documentation**: Include sections: `Accessibility`, `Theming`, `Best Practices`, and `Do's and Don'ts`.

---

## Iconography System

### Icon Library Structure

```
/icons
  ├── /outline          # 1.5px stroke, for UI elements
  ├── /solid            # Filled icons, for emphasis
  ├── /duotone          # Two-tone, for illustrations
  ├── /brand            # Logo marks, social icons
  └── index.ts          # Barrel export
```

### Icon Component API

```tsx
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  color?: 'currentColor' | 'primary' | 'secondary' | 'success' | 'error';
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

// Size mapping
const iconSizes = {
  xs: 12,  // Inline with small text
  sm: 16,  // Buttons, form elements
  md: 20,  // Default, navigation
  lg: 24,  // Headers, emphasis
  xl: 32,  // Hero sections, features
};
```

### Icon Accessibility

```tsx
// Decorative icon (hidden from screen readers)
<Icon name="chevron-right" aria-hidden="true" />

// Meaningful icon (needs label)
<Icon name="warning" aria-label="Warning" />

// Icon button (label on button, not icon)
<button aria-label="Close modal">
  <Icon name="x" aria-hidden="true" />
</button>
```

---

## Motion & Animation Guidelines

### Animation Principles

1. **Purpose-Driven**: Every animation should serve a purpose (feedback, guidance, delight)
2. **Performance**: Only animate `transform` and `opacity` (GPU-accelerated)
3. **Respect Preferences**: Honor `prefers-reduced-motion` setting
4. **Consistency**: Use standard durations and easing across the system

### Standard Animation Patterns

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide In from Bottom */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Reduced motion fallback */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Component Animation Guidelines

| Component | Animation | Duration | Easing |
|-----------|-----------|----------|--------|
| Button hover | Scale + shadow | 150ms | ease-out |
| Modal enter | Fade + scale | 200ms | ease-out |
| Modal exit | Fade + scale | 150ms | ease-in |
| Dropdown | Fade + slide | 200ms | ease-out |
| Toast enter | Slide from edge | 300ms | spring |
| Page transition | Fade | 200ms | ease-in-out |
| Skeleton pulse | Opacity | 1500ms | ease-in-out |

### Framer Motion Variants (React)

```tsx
// Standard animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
```

---

## Style & Visuals

> [!WARNING]
> Do not hardcode hex values or pixel values for layout. Always use design tokens (CSS variables or theme constants).

- **Naming Conventions**:
    - Components: PascalCase (e.g., `PrimaryButton`, `CardHeader`).
    - Props: camelCase (e.g., `isLoading`, `hasError`).
    - Event Handlers: `on[Event]` (e.g., `onClick`, `onChange`).
    - CSS Variables: `--category-property-variant` (e.g., `--color-primary-hover`).
    - CSS Classes: kebab-case or BEM (e.g., `btn-primary`, `card__header--active`).
- **File Structure**: Co-locate component files, styles, tests, and stories in the same directory.
    ```
    /Button
      ├── Button.tsx           # Component implementation
      ├── Button.module.css    # Scoped styles
      ├── Button.test.tsx      # Unit tests
      ├── Button.stories.tsx   # Storybook stories
      ├── Button.types.ts      # TypeScript interfaces (optional)
      └── index.ts             # Public exports
    ```
- **Visuals**: Include screenshots or live previews (Storybook) for all variants (primary, secondary, destructive, etc.).
- **States**: Explicitly define styles for all states: `default`, `hover`, `active`, `focus-visible`, `disabled`, and `loading`.

### Interactive State Tokens

```css
/* Button state example */
.button {
  background: var(--color-primary);
  transition: var(--transition-colors), var(--transition-transform);
}

.button:hover:not(:disabled) {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}

.button:active:not(:disabled) {
  background: var(--color-primary-active);
  transform: translateY(0);
}

.button:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

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

---

## Component API Standards

### Props Interface Pattern

```tsx
// ✅ Good: Clear, typed props with JSDoc
interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Shows loading spinner and disables interaction */
  isLoading?: boolean;
  /** Disables the button */
  isDisabled?: boolean;
  /** Icon to show before the label */
  leftIcon?: React.ReactNode;
  /** Icon to show after the label */
  rightIcon?: React.ReactNode;
  /** Full width button */
  isFullWidth?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button content */
  children: React.ReactNode;
}
```

### Compound Component Pattern

```tsx
// For complex components, use compound pattern
<Select>
  <Select.Trigger>
    <Select.Value placeholder="Select an option" />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
    </Select.Group>
  </Select.Content>
</Select>
```

### Polymorphic Components

```tsx
// Support rendering as different elements
interface BoxProps<T extends React.ElementType = 'div'> {
  as?: T;
  children?: React.ReactNode;
}

type PolymorphicBoxProps<T extends React.ElementType> = BoxProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>;

// Usage
<Box as="section" className="hero">...</Box>
<Box as="article">...</Box>
<Box as={Link} href="/about">...</Box>
```

### Forwarding Refs

```tsx
// Always forward refs for DOM element access
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
```

### Slot Pattern for Flexibility

```tsx
// Use Radix Slot for composition
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps {
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = ({ asChild, children, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp {...props}>{children}</Comp>;
};

// Allows custom wrapper components
<Button asChild>
  <Link href="/next">Continue</Link>
</Button>
```

---

## Form Components Standards

### Form Field Pattern

```tsx
interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  error,
  hint,
  required,
  children
}) => {
  const inputId = `field-${name}`;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;
  
  return (
    <div className="form-field">
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      {React.cloneElement(children as React.ReactElement, {
        id: inputId,
        'aria-describedby': cn(hint && hintId, error && errorId),
        'aria-invalid': !!error,
      })}
      {hint && !error && (
        <p id={hintId} className="form-hint">{hint}</p>
      )}
      {error && (
        <p id={errorId} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
```

### Validation States

```css
/* Input validation states */
.input {
  border: var(--border-1) solid var(--color-border);
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-alpha-20);
}

.input[aria-invalid="true"] {
  border-color: var(--color-error);
}

.input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px var(--color-error-alpha-20);
}
```

---

## Data Display Components

### Table Component Standards

```tsx
interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  emptyState?: React.ReactNode;
  onRowClick?: (row: T) => void;
  sortable?: boolean;
  selectable?: boolean;
  pagination?: PaginationConfig;
}

// Column definition
interface ColumnDef<T> {
  id: string;
  header: string | React.ReactNode;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}
```

### Loading States

```tsx
// Skeleton loading for tables
<TableSkeleton rows={5} columns={4} />

// Skeleton loading for cards
<CardSkeleton />

// Content placeholder
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-4 w-[150px]" />
```

---

## Feedback Components

### Toast/Notification System

```tsx
interface ToastProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number; // ms, 0 = persistent
}

// Toast positioning
type ToastPosition = 
  | 'top-left' | 'top-center' | 'top-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

// Usage
toast.success('Changes saved successfully');
toast.error('Failed to save changes', {
  description: 'Please try again later',
  action: { label: 'Retry', onClick: handleRetry }
});
```

### Alert Component

```tsx
interface AlertProps {
  variant: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

// Accessibility: use role="alert" for important messages
<Alert variant="error" role="alert">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

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

---

## Design-to-Code Workflow

### Figma Integration

1. **Design Tokens Sync**: Use tools like Tokens Studio or Style Dictionary to sync Figma variables with CSS custom properties
2. **Component Mapping**: Maintain a 1:1 mapping between Figma components and code components
3. **Auto-Layout → Flexbox/Grid**: Figma auto-layout translates to CSS flexbox/grid
4. **Variants Mapping**: Figma variants should match component prop variants

### Storybook Documentation

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button>Default</Button>
      <Button isLoading>Loading</Button>
      <Button isDisabled>Disabled</Button>
    </div>
  ),
};
```

### Chromatic Visual Testing

```yaml
# .github/workflows/chromatic.yml
name: Chromatic
on: push

jobs:
  chromatic:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
      - run: npm ci
      - uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
```

## Scalability & Performance

- **Dependencies**: Avoid heavy dependencies within atomic components.
- **Tree-shaking**: Ensure components are exported in a way that allows unused code to be eliminated.
- **Rendering**: Minimize re-renders by keeping state local or using stable callbacks.

### Bundle Size Guidelines

| Component Type | Target Size | Max Size |
|----------------|-------------|----------|
| Atoms | < 1KB | 2KB |
| Molecules | < 3KB | 5KB |
| Organisms | < 10KB | 15KB |
| Full Library | < 50KB | 80KB |

### Performance Patterns

```tsx
// ✅ Memoize expensive computations
const sortedItems = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

// ✅ Stable callback references
const handleClick = useCallback((id: string) => {
  setSelectedId(id);
}, []);

// ✅ Virtualization for long lists
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} className="h-[400px] overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {items[virtualItem.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Code splitting for heavy components
const DataTable = lazy(() => import('./DataTable'));
const Chart = lazy(() => import('./Chart'));
```

### CSS Performance

```css
/* ✅ Use CSS containment */
.card {
  contain: layout style paint;
}

/* ✅ Avoid expensive selectors */
/* ❌ Bad */ .sidebar ul li a span { }
/* ✅ Good */ .nav-link-text { }

/* ✅ Use layers for predictable cascade */
@layer base, components, utilities;
```

## Security & Best Practices

- **Input Sanitization**: Sanitize user inputs if rendering HTML (prevent XSS).
- **Least Privilege**: Components should only have access to the data they strictly need.
- **Prop Drilling**: Avoid excessive prop drilling; use composition or context where appropriate.

### Security Patterns

```tsx
// ✅ Safe: Use DOMPurify for user-generated HTML
import DOMPurify from 'dompurify';

function SafeHTML({ html }: { html: string }) {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: DOMPurify.sanitize(html) 
      }} 
    />
  );
}

// ✅ Safe: Escape user content in attributes
function UserLink({ user }: { user: User }) {
  return (
    <a 
      href={encodeURI(user.website)} 
      rel="noopener noreferrer"
      target="_blank"
    >
      {user.name}
    </a>
  );
}

// ❌ Dangerous: Never interpolate user input into href
// <a href={`javascript:${userInput}`}>
```

## Accessibility (A11y) Checklist

- [ ] **Keyboard Navigation**: Can the component be used entirely without a mouse?
- [ ] **Focus Management**: Is the focus state clearly visible? Does focus return correctly after closing modals/popovers?
- [ ] **Screen Readers**: Are all controls labeled? Do status changes announce themselves?
- [ ] **Contrast**: Do text and interactive elements meet WCAG AA contrast ratios (4.5:1)?
- [ ] **Reduced Motion**: Does the component respect the user's `prefers-reduced-motion` setting?

### Comprehensive A11y Patterns

#### Focus Management

```tsx
// Focus trap for modals
import { FocusTrap } from 'focus-trap-react';

function Modal({ isOpen, onClose, children }: ModalProps) {
  const previousActiveElement = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }
    return () => {
      previousActiveElement.current?.focus();
    };
  }, [isOpen]);

  return (
    <FocusTrap active={isOpen}>
      <div role="dialog" aria-modal="true">
        {children}
      </div>
    </FocusTrap>
  );
}
```

#### Live Regions

```tsx
// Announce dynamic content changes
function SearchResults({ results, isLoading }: SearchResultsProps) {
  return (
    <>
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {isLoading 
          ? 'Loading results...' 
          : `${results.length} results found`}
      </div>
      <ul>{/* results */}</ul>
    </>
  );
}
```

#### ARIA Patterns Reference

| Pattern | Required ARIA | Notes |
|---------|--------------|-------|
| Modal | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` | Focus trap required |
| Tabs | `role="tablist"`, `role="tab"`, `role="tabpanel"` | Arrow key navigation |
| Menu | `role="menu"`, `role="menuitem"` | Focus on first item on open |
| Accordion | `aria-expanded`, `aria-controls` | One or multiple open |
| Toast | `role="alert"` or `role="status"` | Polite vs assertive |
| Combobox | `role="combobox"`, `aria-expanded`, `aria-autocomplete` | Complex pattern |

#### Color Contrast Requirements

| Element | Minimum Ratio | Level |
|---------|---------------|-------|
| Body text | 4.5:1 | AA |
| Large text (18px+) | 3:1 | AA |
| UI components | 3:1 | AA |
| Focus indicators | 3:1 | AA |
| Decorative | N/A | - |

### Screen Reader Testing Commands

```bash
# macOS VoiceOver
CMD + F5                  # Toggle VoiceOver
VO + Right/Left Arrow     # Navigate elements
VO + Space                # Activate element

# NVDA (Windows)
Insert + Space            # Forms mode toggle
Tab                       # Next focusable
Shift + Tab               # Previous focusable
H                         # Next heading
```

## Validation & Quality

- **Unit Tests**: All components must have 100% unit test coverage (Jest/Vitest).
- **Visual Regression**: Visual regression tests are required for all variants (Chromatic/Percy).
- **Accessibility Audits**: Must pass automated accessibility audits (axe-core) in CI.
- **Linting**: Ensure code passes all ESLint and Prettier checks.

### Testing Strategy

#### Unit Testing with Testing Library

```tsx
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when isDisabled is true', () => {
    render(<Button isDisabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows loading state', () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

#### E2E Testing with Playwright

```ts
// button.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Button', () => {
  test('handles keyboard interaction', async ({ page }) => {
    await page.goto('/storybook/button');
    
    const button = page.getByRole('button', { name: 'Submit' });
    await button.focus();
    await expect(button).toBeFocused();
    
    await page.keyboard.press('Enter');
    await expect(page.getByText('Form submitted')).toBeVisible();
  });

  test('meets color contrast requirements', async ({ page }) => {
    await page.goto('/storybook/button');
    
    const results = await page.evaluate(async () => {
      const { run } = await import('axe-core');
      return run();
    });
    
    expect(results.violations).toHaveLength(0);
  });
});
```

### Quality Gates

```yaml
# .github/workflows/quality.yml
name: Quality Checks

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v4

  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build-storybook
      - run: npx storybook test --url http://localhost:6006
```

## Governance

- **Source of Truth**: Keep this SKILL as the canonical source for Design System rules.
- **RFC Process**: Changes to the system tokens, core architecture, or breaking changes require a formal RFC (Request for Comments) process.
- **Versioning**: Follow Semantic Versioning (SemVer) for component library releases.

### Contribution Workflow

```
1. Create RFC Issue → 2. Design Review → 3. Implementation → 4. Code Review → 5. Documentation → 6. Release
```

### RFC Template

```markdown
# RFC: [Component/Feature Name]

## Summary
Brief description of the proposed change.

## Motivation
Why is this change needed? What problem does it solve?

## Detailed Design
Technical implementation details.

## Drawbacks
Potential downsides or risks.

## Alternatives
Other approaches considered.

## Migration Strategy
How will existing consumers update?
```

### Release Process

| Version Type | Change Description | Example |
|--------------|-------------------|---------|
| Major (X.0.0) | Breaking changes | API changes, removed props |
| Minor (0.X.0) | New features, backward compatible | New component, new variant |
| Patch (0.0.X) | Bug fixes, small improvements | A11y fix, style tweak |

### Deprecation Policy

```tsx
/**
 * @deprecated Use `variant="ghost"` instead. Will be removed in v3.0.0
 */
interface ButtonProps {
  /** @deprecated Use `variant` prop instead */
  outline?: boolean;
}

// Console warning in development
if (process.env.NODE_ENV === 'development' && props.outline) {
  console.warn(
    '[Button] The `outline` prop is deprecated. Use `variant="ghost"` instead.'
  );
}
```

## Limitations & trade-offs

- **Flexibility vs. Consistency**: Strict adherence to tokens may limit one-off custom designs but ensures long-term maintainability.
- **Learning Curve**: Developers must learn the token system and component API, which has an initial ramp-up time.

---

## Token Management & Tooling

### Token Architecture Layers

Design tokens should follow a three-tier architecture for maximum flexibility:

```
┌─────────────────────────────────────────────────────────┐
│  COMPONENT TOKENS (Contextual)                          │
│  --button-bg, --card-padding, --input-border-focus      │
├─────────────────────────────────────────────────────────┤
│  SEMANTIC TOKENS (Purpose-driven)                       │
│  --color-primary, --spacing-md, --text-body             │
├─────────────────────────────────────────────────────────┤
│  PRIMITIVE TOKENS (Raw values)                          │
│  --blue-600, --space-4, --font-size-16                  │
└─────────────────────────────────────────────────────────┘
```

### Token Naming Convention

```css
/* Pattern: --{category}-{property}-{variant}-{state} */

/* Colors */
--color-primary-default
--color-primary-hover
--color-primary-active
--color-primary-disabled

/* Spacing */
--spacing-component-padding-sm
--spacing-component-padding-md
--spacing-layout-section-gap

/* Typography */
--typography-heading-1-size
--typography-heading-1-weight
--typography-heading-1-line-height
```

### Token Export Formats

Support multiple output formats for different consumers:

```javascript
// tokens.config.js (Style Dictionary configuration)
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/es6'
      }]
    },
    ios: {
      transformGroup: 'ios-swift',
      buildPath: 'dist/ios/',
      files: [{
        destination: 'StyleDictionary.swift',
        format: 'ios-swift/class.swift'
      }]
    },
    android: {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [{
        destination: 'tokens.xml',
        format: 'android/resources'
      }]
    }
  }
};
```

### Token Source of Truth (JSON Schema)

```json
{
  "$schema": "https://design-tokens.org/schema.json",
  "color": {
    "primitive": {
      "blue": {
        "50": { "$value": "#eff6ff", "$type": "color" },
        "500": { "$value": "#3b82f6", "$type": "color" },
        "600": { "$value": "#2563eb", "$type": "color" }
      }
    },
    "semantic": {
      "primary": {
        "$value": "{color.primitive.blue.600}",
        "$type": "color",
        "$description": "Primary brand color for CTAs and key actions"
      }
    }
  }
}
```

### Token Synchronization with Figma

```typescript
// figma-sync.ts - Bidirectional token sync
interface FigmaTokenSync {
  // Pull tokens from Figma variables
  pullFromFigma: (fileKey: string) => Promise<TokenSet>;
  
  // Push updated tokens to Figma
  pushToFigma: (tokens: TokenSet, fileKey: string) => Promise<void>;
  
  // Validate tokens match between code and Figma
  validateSync: (fileKey: string) => Promise<SyncReport>;
}

// Example workflow
// 1. Designer updates color in Figma
// 2. CI/CD detects change via Figma webhook
// 3. Automated PR created with token updates
// 4. Dev reviews and merges
// 5. Tokens published to npm registry
```

---

## Design-to-Development Handoff

### Handoff Checklist

Before a design is ready for development:

- [ ] All components use design system tokens (no detached styles)
- [ ] Responsive behavior documented (breakpoint annotations)
- [ ] Interactive states specified (hover, focus, active, disabled, loading, error)
- [ ] Accessibility annotations present (focus order, ARIA labels)
- [ ] Animation specifications defined (duration, easing, triggers)
- [ ] Edge cases covered (empty states, error states, long content, truncation)
- [ ] Content guidelines provided (min/max character counts)
- [ ] RTL layout considerations noted

### Figma Component Structure

```
Component Library
├── Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Grid & Layout
├── Atoms
│   ├── Button
│   ├── Input
│   ├── Icon
│   └── Badge
├── Molecules
│   ├── FormField
│   ├── SearchInput
│   └── MenuItem
├── Organisms
│   ├── Header
│   ├── Sidebar
│   └── DataTable
└── Templates
    ├── DashboardLayout
    └── AuthLayout
```

### Design Spec Documentation

Each component in Figma should include:

```
┌─────────────────────────────────────────┐
│ Component: Button                        │
├─────────────────────────────────────────┤
│ Anatomy Diagram                          │
│ ┌────────────────────────────┐          │
│ │ [icon] Label Text [icon]   │          │
│ └────────────────────────────┘          │
│                                          │
│ Spacing:                                 │
│ • Horizontal padding: var(--space-4)    │
│ • Vertical padding: var(--space-2)      │
│ • Icon-to-text gap: var(--space-2)      │
│                                          │
│ States: default, hover, active,          │
│         focus, disabled, loading         │
│                                          │
│ Tokens Used:                             │
│ • Background: var(--color-primary)      │
│ • Text: var(--color-text-inverse)       │
│ • Border-radius: var(--radius-button)   │
├─────────────────────────────────────────┤
│ Dev Notes:                               │
│ - Use native <button> element            │
│ - aria-busy="true" when loading          │
│ - Minimum width: 80px                    │
└─────────────────────────────────────────┘
```

---

## Internationalization (i18n) & Localization (L10n)

### RTL (Right-to-Left) Support

```css
/* Use logical properties instead of physical */
/* ❌ Don't */
.card {
  margin-left: 16px;
  padding-right: 24px;
  text-align: left;
  border-left: 2px solid var(--color-border);
}

/* ✅ Do */
.card {
  margin-inline-start: 16px;
  padding-inline-end: 24px;
  text-align: start;
  border-inline-start: 2px solid var(--color-border);
}

/* Directional tokens */
--spacing-inline-start: var(--space-4);
--spacing-inline-end: var(--space-4);
--spacing-block-start: var(--space-2);
--spacing-block-end: var(--space-2);
```

### Text Expansion Guidelines

Different languages have varying text lengths. Design for expansion:

| Language | Expansion Factor |
|----------|------------------|
| English (base) | 1.0x |
| German | 1.3x |
| French | 1.2x |
| Russian | 1.3x |
| Japanese | 0.9x |
| Arabic | 1.25x |

```css
/* Allow text to breathe */
.button-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px; /* Prevent extreme expansion */
}

/* Use min-width instead of fixed width */
.nav-item {
  min-width: fit-content;
  padding-inline: var(--space-4);
}
```

### Number & Date Formatting

```typescript
// Use Intl API for locale-aware formatting
const formatNumber = (value: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
};

const formatCurrency = (value: number, locale: string, currency: string) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
};

// Examples
formatNumber(1234567.89, 'en-US');  // "1,234,567.89"
formatNumber(1234567.89, 'de-DE');  // "1.234.567,89"
formatDate(new Date(), 'ja-JP');    // "2024年1月15日 14:30"
```

### Translation-Ready Components

```tsx
// Use translation keys, not hardcoded strings
interface ButtonProps {
  /** Translation key for button label */
  labelKey: string;
  /** Fallback text if translation missing */
  labelFallback?: string;
}

// Good: Translation-ready
<Button labelKey="actions.submit" />

// Bad: Hardcoded string
<Button>Submit</Button>
```

---

## Error Handling & Empty States

### Error State Hierarchy

```
┌─────────────────────────────────────────┐
│ Level 1: Page-level Error               │
│ • Full-page error boundary              │
│ • "Something went wrong" + retry        │
├─────────────────────────────────────────┤
│ Level 2: Section Error                  │
│ • Partial content failure               │
│ • Inline error with context             │
├─────────────────────────────────────────┤
│ Level 3: Component Error                │
│ • Individual component failure          │
│ • Graceful degradation                  │
├─────────────────────────────────────────┤
│ Level 4: Field-level Error              │
│ • Form validation errors                │
│ • Inline feedback below field           │
└─────────────────────────────────────────┘
```

### Error Component Pattern

```tsx
interface ErrorStateProps {
  type: 'network' | 'permission' | 'not-found' | 'server' | 'validation';
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

// Error messages should be:
// ✅ Human-readable (not error codes)
// ✅ Actionable (tell user what to do)
// ✅ Contextual (relevant to the failure)
// ✅ Non-blaming (don't say "you did something wrong")

// Good
{
  title: "Unable to load your projects",
  description: "We're having trouble connecting. Check your internet and try again.",
  action: { label: "Try again", onClick: retry }
}

// Bad
{
  title: "Error 500",
  description: "Internal server error occurred"
}
```

### Empty State Patterns

```tsx
interface EmptyStateProps {
  type: 'no-data' | 'no-results' | 'no-permission' | 'first-time';
  illustration?: React.ReactNode;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
}

// Empty state variations
const emptyStates = {
  'no-data': {
    title: "No projects yet",
    description: "Create your first project to get started.",
    action: "Create project"
  },
  'no-results': {
    title: "No results found",
    description: "Try adjusting your search or filters.",
    action: "Clear filters"
  },
  'first-time': {
    title: "Welcome to Projects!",
    description: "This is where you'll manage all your work.",
    action: "Take a tour"
  }
};
```

### Loading State Tokens

```css
/* Skeleton animation */
--skeleton-base-color: var(--color-surface);
--skeleton-highlight-color: var(--color-surface-elevated);
--skeleton-animation-duration: 1.5s;

@keyframes skeleton-pulse {
  0% { background-color: var(--skeleton-base-color); }
  50% { background-color: var(--skeleton-highlight-color); }
  100% { background-color: var(--skeleton-base-color); }
}

.skeleton {
  animation: skeleton-pulse var(--skeleton-animation-duration) ease-in-out infinite;
  border-radius: var(--radius-sm);
}
```

---

## Advanced Component Patterns

### Controlled vs. Uncontrolled Components

```tsx
// Support both patterns for flexibility
interface InputProps {
  // Controlled
  value?: string;
  onChange?: (value: string) => void;
  
  // Uncontrolled
  defaultValue?: string;
  
  // Common
  name?: string;
}

const Input = ({ value, defaultValue, onChange, ...props }: InputProps) => {
  // Determine if controlled or uncontrolled
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  
  const currentValue = isControlled ? value : internalValue;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };
  
  return <input value={currentValue} onChange={handleChange} {...props} />;
};
```

### Headless Component Pattern

```tsx
// Logic-only hook for maximum flexibility
function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  
  return {
    isOpen,
    toggle,
    open,
    close,
    // Props to spread on trigger element
    triggerProps: {
      'aria-expanded': isOpen,
      onClick: toggle,
    },
    // Props to spread on content element
    contentProps: {
      hidden: !isOpen,
    },
  };
}

// Usage with custom UI
function CustomAccordion() {
  const { isOpen, triggerProps, contentProps } = useToggle();
  
  return (
    <div className="my-custom-accordion">
      <button {...triggerProps} className="my-trigger">
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <div {...contentProps} className="my-content">
        Content here
      </div>
    </div>
  );
}
```

### Collection Components Pattern

```tsx
// For lists, tables, selects, etc.
interface CollectionProps<T> {
  items: T[];
  getKey: (item: T) => string;
  children: (item: T) => React.ReactNode;
  emptyState?: React.ReactNode;
  loadingState?: React.ReactNode;
  isLoading?: boolean;
}

function Collection<T>({
  items,
  getKey,
  children,
  emptyState,
  loadingState,
  isLoading
}: CollectionProps<T>) {
  if (isLoading) {
    return loadingState ?? <DefaultLoadingState />;
  }
  
  if (items.length === 0) {
    return emptyState ?? <DefaultEmptyState />;
  }
  
  return (
    <>
      {items.map(item => (
        <React.Fragment key={getKey(item)}>
          {children(item)}
        </React.Fragment>
      ))}
    </>
  );
}

// Usage
<Collection
  items={users}
  getKey={(user) => user.id}
  emptyState={<EmptyState title="No users found" />}
>
  {(user) => <UserCard user={user} />}
</Collection>
```

### Disclosure Components (Modals, Popovers, Drawers)

```tsx
// Unified disclosure pattern
interface DisclosureProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  
  // Control
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  defaultOpen?: boolean;
  
  // Behavior
  closeOnEscape?: boolean;
  closeOnOutsideClick?: boolean;
  trapFocus?: boolean;
  returnFocus?: boolean;
  
  // Portal
  portalContainer?: HTMLElement;
}

// Accessibility requirements for disclosure components:
// ✅ Focus trap when open (Tab cycles within component)
// ✅ Escape key closes
// ✅ Click outside closes (optional)
// ✅ Return focus to trigger on close
// ✅ aria-expanded on trigger
// ✅ aria-controls linking trigger to content
// ✅ role="dialog" for modals
// ✅ aria-modal="true" for modals
// ✅ aria-labelledby pointing to title
// ✅ aria-describedby pointing to description (if exists)
```

---

## Responsive Design Patterns

### Container Query Components

```css
/* Component responds to its container, not viewport */
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    flex-direction: row;
  }
  .card__image {
    width: 40%;
  }
  .card__content {
    width: 60%;
  }
}

@container card (min-width: 600px) {
  .card__actions {
    flex-direction: row;
    gap: var(--space-2);
  }
}
```

### Responsive Spacing Tokens

```css
/* Fluid spacing that scales with viewport */
--space-responsive-xs: clamp(0.25rem, 0.5vw, 0.5rem);
--space-responsive-sm: clamp(0.5rem, 1vw, 1rem);
--space-responsive-md: clamp(1rem, 2vw, 2rem);
--space-responsive-lg: clamp(2rem, 4vw, 4rem);
--space-responsive-xl: clamp(4rem, 8vw, 8rem);

/* Section spacing */
--section-padding-y: clamp(3rem, 8vw, 6rem);
--section-padding-x: clamp(1rem, 5vw, 4rem);
```

### Adaptive Component Variants

```tsx
// Component adapts based on available space
interface AdaptiveNavProps {
  items: NavItem[];
  /** Collapse to hamburger below this width */
  collapseWidth?: number;
}

const AdaptiveNav = ({ items, collapseWidth = 768 }: AdaptiveNavProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { width } = useContainerSize(containerRef);
  
  const isCollapsed = width < collapseWidth;
  
  return (
    <nav ref={containerRef}>
      {isCollapsed ? (
        <MobileNav items={items} />
      ) : (
        <DesktopNav items={items} />
      )}
    </nav>
  );
};
```

---

## Performance Budgets

### Bundle Size Guidelines

| Category | Budget | Notes |
|----------|--------|-------|
| Design System Core | < 50KB gzipped | Base styles + tokens |
| Component Library | < 100KB gzipped | Tree-shakeable |
| Single Component (avg) | < 5KB gzipped | Including styles |
| Icon Sprite | < 20KB gzipped | Or individual icons |
| Font Files (total) | < 100KB | Variable fonts preferred |

### Component Performance Standards

```tsx
// Performance requirements for all components
const performanceStandards = {
  // Rendering
  initialRender: '< 16ms', // 60fps budget
  reRender: '< 8ms',
  
  // Interaction
  responseTime: '< 100ms', // User perceives as instant
  animationFrame: '< 16ms',
  
  // Memory
  memoryLeak: 'none', // No leaked event listeners, refs, or subscriptions
  
  // Bundle
  treeShakeable: true,
  sideEffects: false,
};

// Measuring component performance
import { Profiler } from 'react';

<Profiler
  id="MyComponent"
  onRender={(id, phase, actualDuration) => {
    if (actualDuration > 16) {
      console.warn(`${id} took ${actualDuration}ms to ${phase}`);
    }
  }}
>
  <MyComponent />
</Profiler>
```

### Critical CSS Strategy

```html
<!-- Inline critical CSS for above-the-fold content -->
<head>
  <style>
    /* Critical: Design tokens + layout + above-fold components */
    :root { /* tokens */ }
    .header { /* header styles */ }
    .hero { /* hero styles */ }
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="/styles.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles.css"></noscript>
</head>
```

---

## Migration & Versioning

### Semantic Versioning for Design Systems

```
MAJOR.MINOR.PATCH

MAJOR (Breaking): 
  - Token renamed or removed
  - Component API changed (props removed/renamed)
  - Visual breaking change (significant appearance shift)

MINOR (Feature):
  - New component added
  - New prop added (backward compatible)
  - New token added
  - New variant added

PATCH (Fix):
  - Bug fix
  - Accessibility improvement
  - Documentation update
  - Performance optimization
```

### Deprecation Strategy

```tsx
// 1. Mark as deprecated with migration path
/**
 * @deprecated Use `variant="primary"` instead. Will be removed in v3.0.
 */
interface ButtonProps {
  /** @deprecated Use `variant` instead */
  isPrimary?: boolean;
}

// 2. Show console warning in development
if (process.env.NODE_ENV === 'development' && props.isPrimary) {
  console.warn(
    '[DesignSystem] Button: `isPrimary` is deprecated. ' +
    'Use `variant="primary"` instead. ' +
    'This prop will be removed in v3.0.'
  );
}

// 3. Provide codemod for automated migration
// npx @staystack/codemods button-isprimary-to-variant
```

### Migration Guide Template

```markdown
# Migrating from v1.x to v2.0

## Breaking Changes

### 1. Button `isPrimary` → `variant`

**Before (v1.x):**
\`\`\`tsx
<Button isPrimary>Submit</Button>
\`\`\`

**After (v2.0):**
\`\`\`tsx
<Button variant="primary">Submit</Button>
\`\`\`

**Automated migration:**
\`\`\`bash
npx @staystack/codemods button-isprimary-to-variant
\`\`\`

### 2. Color token rename

| Old Token | New Token |
|-----------|-----------|
| `--color-brand` | `--color-primary` |
| `--color-brand-dark` | `--color-primary-hover` |

**Find and replace regex:**
\`\`\`
--color-brand(?!-) → --color-primary
--color-brand-dark → --color-primary-hover
\`\`\`
```

### Changelog Format

```markdown
# Changelog

## [2.1.0] - 2024-01-15

### Added
- New `Skeleton` component for loading states (#234)
- `size="xl"` variant for `Avatar` component (#245)
- `--color-surface-hover` token (#251)

### Changed
- Improved `Modal` focus trap behavior (#242)
- Updated `Button` hover animation to use spring easing (#248)

### Deprecated
- `Card` `isElevated` prop - use `elevation` prop instead (#250)

### Fixed
- `Select` dropdown positioning on scroll (#239)
- `Tooltip` flickering on rapid mouse movement (#241)
- Color contrast issue in `Badge` warning variant (#244)

### Security
- Updated dependencies to address CVE-XXXX-XXXX (#252)
```

---

## Design System Governance

### Contribution Workflow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   1. Proposal   │ ──▶ │   2. Review     │ ──▶ │ 3. Development  │
│   (RFC Issue)   │     │ (Design + Dev)  │     │ (Branch + PR)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   6. Release    │ ◀── │  5. Document    │ ◀── │   4. Review     │
│   (npm publish) │     │  (Storybook)    │     │ (Code + Visual) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### RFC (Request for Comments) Template

```markdown
# RFC: [Component/Token/Pattern Name]

## Summary
One paragraph description of the proposal.

## Motivation
Why are we doing this? What problem does it solve?

## Detailed Design
- API/props interface
- Visual mockups or Figma links
- Token usage
- Accessibility considerations

## Alternatives Considered
What other approaches did you consider?

## Adoption Strategy
- Breaking changes?
- Migration path?
- Documentation needs?

## Unresolved Questions
What aspects need further discussion?
```

### Decision Log

| Date | Decision | Rationale | Participants |
|------|----------|-----------|--------------|
| 2024-01-10 | Use CSS variables over Tailwind | Better runtime theming support | @designer, @dev |
| 2024-01-15 | Adopt Radix primitives | Accessibility out-of-box | @a11y-lead, @dev |
| 2024-02-01 | 8px spacing grid | Industry standard, easier math | @designer |

---

## Quality Assurance

### Component Review Checklist

Before a component is considered "production-ready":

#### Code Quality
- [ ] TypeScript strict mode compliance
- [ ] No `any` types (use `unknown` if needed)
- [ ] All props documented with JSDoc
- [ ] Memoization applied where beneficial
- [ ] No memory leaks (cleanup in useEffect)

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Focus states visible
- [ ] Color contrast passes WCAG AA
- [ ] Reduced motion respected

#### Visual
- [ ] All variants implemented
- [ ] All states styled (hover, active, focus, disabled, loading)
- [ ] Responsive behavior correct
- [ ] RTL layout works
- [ ] Dark mode works

#### Testing
- [ ] Unit tests (>90% coverage)
- [ ] Integration tests for complex interactions
- [ ] Visual regression tests
- [ ] Accessibility audit passes (axe-core)

#### Documentation
- [ ] Storybook story for each variant
- [ ] Props table complete
- [ ] Usage examples provided
- [ ] Do's and Don'ts section
- [ ] Accessibility notes

### Automated Quality Gates

```yaml
# .github/workflows/quality.yml
name: Quality Gates

on: [pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Type Check
        run: npm run typecheck
        
      - name: Lint
        run: npm run lint
        
      - name: Unit Tests
        run: npm run test -- --coverage
        
      - name: Check Coverage Threshold
        run: |
          COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
          if (( $(echo "$COVERAGE < 90" | bc -l) )); then
            echo "Coverage $COVERAGE% is below 90% threshold"
            exit 1
          fi
          
      - name: Accessibility Audit
        run: npm run test:a11y
        
      - name: Visual Regression
        run: npm run test:visual
        
      - name: Bundle Size Check
        run: npm run build && npx bundlesize
```

---

## Do's and Don'ts

### ✅ Do's

| Practice | Reason |
|----------|--------|
| Use semantic tokens (`--color-primary`) | Enables theming and consistency |
| Forward refs on all components | Allows DOM access when needed |
| Include comprehensive prop types | Better DX and documentation |
| Test keyboard navigation | Ensures accessibility |
| Provide loading states | Better UX feedback |
| Document breaking changes | Smooth migration path |
| Use CSS custom properties | Runtime theming support |

### ❌ Don'ts

| Anti-Pattern | Why It's Bad |
|--------------|--------------|
| Hardcode colors (`#3b82f6`) | Breaks theming, hard to maintain |
| Use `!important` | Specificity wars, hard to override |
| Inline styles for layout | Not responsive, hard to maintain |
| Skip focus states | Breaks keyboard navigation |
| Prop drilling > 3 levels | Use context or composition |
| God components (20+ props) | Hard to maintain, use composition |
| Skip TypeScript generics | Lose type inference benefits |

---

## Component Checklist

Use this checklist before shipping any new component:

### Implementation
- [ ] Uses design tokens exclusively (no hardcoded values)
- [ ] TypeScript interfaces exported
- [ ] Forwards ref properly
- [ ] Supports `className` prop for customization
- [ ] Handles all interactive states
- [ ] Respects `prefers-reduced-motion`

### Accessibility
- [ ] Keyboard navigable
- [ ] Proper ARIA attributes
- [ ] Sufficient color contrast
- [ ] Screen reader tested
- [ ] Focus visible and managed

### Documentation
- [ ] Props table complete
- [ ] Usage examples provided
- [ ] Accessibility notes included
- [ ] Storybook stories created
- [ ] Edge cases documented

### Testing
- [ ] Unit tests written
- [ ] Accessibility tests pass
- [ ] Visual regression added
- [ ] E2E tests for complex interactions

### Review
- [ ] Code review approved
- [ ] Design review approved
- [ ] Accessibility review approved

---

## Resources & References

### Official Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Design System Examples
- [Radix UI Primitives](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Adobe Spectrum](https://spectrum.adobe.com/)
- [Shopify Polaris](https://polaris.shopify.com/)

### Tools
- [axe DevTools](https://www.deque.com/axe/) - Accessibility testing
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast
- [Storybook](https://storybook.js.org/) - Component documentation
- [Chromatic](https://www.chromatic.com/) - Visual regression testing
- [Tokens Studio](https://tokens.studio/) - Design token management
