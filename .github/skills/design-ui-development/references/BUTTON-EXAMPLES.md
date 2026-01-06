# Button Examples Reference

> Code examples for all Staylook button variants

---

## Button Priority System

### 1. Expressive Button (THE Highlight) - Max 1 per screen

```tsx
// React/TSX
<Button variant="expressive" size="md">
  Get Started
</Button>
```

```css
.button-expressive {
  background: var(--color-accent);
  color: var(--color-base);
  border: none;
  border-radius: 9999px; /* ALWAYS pill */
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
}

.button-expressive:hover {
  background: var(--color-accent-dark);
}

.button-expressive:active {
  transform: scale(0.98);
}

.button-expressive:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.2);
}

.button-expressive:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
```

---

### 2. Standard Button (Secondary Actions) - Unlimited

```tsx
// React/TSX
<Button variant="standard" size="md">
  Save Draft
</Button>
```

```css
.button-standard {
  background: transparent;
  color: var(--color-ink);
  border: 1px solid var(--outline-calm);
  border-radius: 9999px; /* ALWAYS pill */
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
}

.button-standard:hover {
  border-color: var(--outline-vibrant);
}

.button-standard:active {
  background: var(--surface-calm);
}

.button-standard:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.button-standard:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
```

---

### 3. Ghost Button (Tertiary Actions) - Unlimited

```tsx
// React/TSX
<Button variant="ghost" size="md">
  Skip
</Button>
```

```css
.button-ghost {
  background: transparent;
  color: var(--color-ink-soft);
  border: none;
  border-radius: 9999px; /* ALWAYS pill */
  padding: 12px 24px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
}

.button-ghost:hover {
  background: var(--surface-calm);
  color: var(--color-ink);
}

.button-ghost:active {
  background: var(--surface-vibrant);
}

.button-ghost:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

## Button Sizes

```css
/* Small */
.button-sm {
  padding: 8px 16px;
  font-size: var(--text-sm);
  min-height: 32px;
}

/* Medium (Default) */
.button-md {
  padding: 12px 24px;
  font-size: var(--text-base);
  min-height: 44px;
}

/* Large */
.button-lg {
  padding: 16px 32px;
  font-size: var(--text-lg);
  min-height: 52px;
}
```

---

## Button with Icon

```tsx
// React/TSX
<Button variant="expressive" size="md">
  <Plus className="w-4 h-4 mr-2" />
  Add Item
</Button>
```

```css
.button-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.button-icon svg {
  width: 16px;
  height: 16px;
}
```

---

## Loading State

```tsx
// React/TSX
<Button variant="expressive" disabled loading>
  <Spinner className="animate-spin" />
  Processing...
</Button>
```

```css
.button-loading {
  position: relative;
  pointer-events: none;
}

.button-loading .spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## Destructive Button (Delete Actions)

```tsx
// React/TSX - Used in confirmation modals
<Button variant="destructive" size="md">
  Delete
</Button>
```

```css
.button-destructive {
  background: var(--color-error);
  color: var(--color-base);
  border: none;
  border-radius: 9999px;
  padding: 12px 24px;
  font-weight: 600;
}

.button-destructive:hover {
  background: #B91C1C; /* darker red */
}
```

---

## Complete Button Component

```tsx
interface ButtonProps {
  variant?: 'expressive' | 'standard' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = 'standard',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        'button',
        `button-${variant}`,
        `button-${size}`,
        loading && 'button-loading'
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <Spinner className="animate-spin mr-2" />}
      {children}
    </button>
  );
}
```

---

*Button Examples — Staylook UI Reference*
