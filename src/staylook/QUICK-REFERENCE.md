# Staylook Design System - Quick Reference

## 🎨 Color Tokens

### Standard (90% of UI)
```css
var(--sl-standard)        /* #000 - Primary text/icons */
var(--sl-standard-soft)   /* #4D4D4D - Secondary text */
var(--sl-standard-muted)  /* #9E9E9E - Muted/disabled */
```

### Expressive (Use Selectively - Only When Explicitly Needed)
```css
var(--sl-expressive)       /* #3373CC - Special moments only */
var(--sl-expressive-soft)  /* #5C9FFF - Hover state */
var(--sl-expressive-muted) /* #BBDEFB - Background tint */
```

### Container (Backgrounds)
```css
var(--sl-container-muted)   /* #EBEBEB - Secondary surfaces */
var(--sl-container-calm)    /* #F5F5F5 - Page backgrounds */
var(--sl-container-vibrant) /* #FFFFFF - Primary surfaces */
```

### On (Content Colors)
```css
var(--sl-on-standard)   /* #000 - Primary text */
var(--sl-on-expressive) /* #3373CC - Accent text */
var(--sl-on-error)      /* #D32F2F - Error text */
var(--sl-on-success)    /* #388E3C - Success text */
var(--sl-on-warning)    /* #F57C00 - Warning text */
var(--sl-on-info)       /* #1976D2 - Info text */
```

### Outline (Borders)
```css
var(--sl-outline-muted)   /* #E0E0E0 - Subtle dividers */
var(--sl-outline-calm)    /* #BDBDBD - Card borders */
var(--sl-outline-vibrant) /* #1A1A1A - Focus states */
```

## 📐 Radius Tokens

```css
var(--sl-radius-section)   /* 32px - Outermost areas */
var(--sl-radius-container) /* 24px - Major wrappers */
var(--sl-radius-card)      /* 16px - Cards */
var(--sl-radius-input)     /* 16px - Form fields */
var(--sl-radius-badge)     /* 8px - Small indicators */
var(--sl-radius-button)    /* 9999px - ALL BUTTONS (pill) */
```

**Nesting Rule**: Section > Container > Card > Input > Badge > Button

## 📏 Spacing Tokens (4px Grid)

```css
var(--sl-space-1)  /* 4px - Micro spacing */
var(--sl-space-2)  /* 8px - Related elements */
var(--sl-space-3)  /* 12px - Small padding */
var(--sl-space-4)  /* 16px - Standard padding */
var(--sl-space-6)  /* 24px - Section padding */
var(--sl-space-8)  /* 32px - Large gaps */
var(--sl-space-12) /* 48px - Section margins */
var(--sl-space-16) /* 64px - Major separations */
```

## 🔤 Typography Tokens

### Font Families
```css
var(--sl-font-sans) /* Plus Jakarta Sans */
var(--sl-font-mono) /* SF Mono */
```

### Font Sizes
```css
var(--sl-text-xs)   /* 0.75rem (12px) - Captions */
var(--sl-text-sm)   /* 0.875rem (14px) - Secondary */
var(--sl-text-base) /* 1rem (16px) - Body */
var(--sl-text-lg)   /* 1.125rem (18px) - Emphasized */
var(--sl-text-xl)   /* 1.25rem (20px) - Subheadings */
var(--sl-text-2xl)  /* 1.5rem (24px) - Section titles */
var(--sl-text-3xl)  /* 2rem (32px) - Page titles */
var(--sl-text-4xl)  /* 2.5rem (40px) - Hero titles */
```

### Font Weights
```css
var(--sl-font-normal)   /* 400 - Body text */
var(--sl-font-medium)   /* 500 - Emphasized */
var(--sl-font-semibold) /* 600 - Subheadings */
var(--sl-font-bold)     /* 700 - Headings */
```

## 🎭 Shadow Tokens

```css
var(--sl-shadow-muted)   /* 0 1px 2px - Subtle lift */
var(--sl-shadow-calm)    /* 0 4px 8px - Standard elevation */
var(--sl-shadow-vibrant) /* 0 8px 24px - Modal elevation */
```

## ⏱️ Animation Tokens

```css
var(--sl-duration-fast) /* 150ms - Micro-interactions */
var(--sl-duration-base) /* 300ms - Standard transitions */
var(--sl-duration-slow) /* 500ms - Complex animations */

var(--sl-ease-default) /* cubic-bezier(0.4, 0, 0.2, 1) */
```

## 🎯 Focus Tokens

```css
var(--sl-focus-ring-width)  /* 2px */
var(--sl-focus-ring-offset) /* 2px */
var(--sl-focus-ring-color)  /* var(--sl-on-expressive) */
```

## 📦 Component Examples

### Button
```tsx
<Button>Continue</Button>                    {/* Standard */}
<Button variant="expressive">Get Started</Button>  {/* THE highlight */}
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Close</Button>
<Button variant="destructive">Delete</Button>
```

### Input
```tsx
<Input placeholder="Enter text..." />
<Input error placeholder="Invalid" />
<Input success placeholder="Valid" />
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Badge
```tsx
<Badge>Default</Badge>
<Badge variant="expressive">Featured</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="error">Error</Badge>
```

### Alert
```tsx
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Changes saved.</AlertDescription>
</Alert>
```

### Stack
```tsx
<VStack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</VStack>

<HStack gap={2} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</HStack>
```

## ⚡ Common Patterns

### Card on Page
```css
.card {
  background: var(--sl-container-vibrant);
  border: 1px solid var(--sl-outline-muted);
  border-radius: var(--sl-radius-card);
  padding: var(--sl-space-6);
  box-shadow: var(--sl-shadow-calm);
}
```

### Button States
```css
.button {
  background: var(--sl-on-standard);
  color: var(--sl-container-vibrant);
  border-radius: var(--sl-radius-button);
  padding: var(--sl-space-3) var(--sl-space-6);
  transition: all var(--sl-duration-base) var(--sl-ease-default);
}

.button:hover {
  background: var(--sl-standard-soft);
}
```

### Input Field
```css
.input {
  background: var(--sl-container-vibrant);
  border: 1px solid var(--sl-outline-calm);
  border-radius: var(--sl-radius-input);
  padding: var(--sl-space-3) var(--sl-space-4);
  color: var(--sl-on-standard);
}

.input:hover {
  border-color: var(--sl-outline-vibrant);
  background: var(--sl-container-calm);
}

.input:focus {
  border-color: var(--sl-outline-vibrant);
  ring: var(--sl-focus-ring-width) var(--sl-focus-ring-color);
}
```

## 🚫 Common Mistakes

### ❌ Don't
```tsx
// Using Expressive for regular actions
<Button variant="expressive">Save</Button>
<Button variant="expressive">Continue</Button>

// Hardcoded values
<div style={{ color: '#000', padding: '15px' }} />

// Wrong radius
<button style={{ borderRadius: '8px' }} />

// Breaking nesting hierarchy
<div style={{ borderRadius: '16px' }}>
  <div style={{ borderRadius: '24px' }} />
</div>
```

### ✅ Do
```tsx
// Use Standard for regular actions, Expressive only when explicitly needed
<Button>Save</Button>
<Button>Continue</Button>
<Button variant="expressive">Start Free Trial</Button>  {/* Special moment */}

// Use tokens
<div style={{ 
  color: 'var(--sl-on-standard)', 
  padding: 'var(--sl-space-4)' 
}} />

// ALL buttons are pill-shaped
<button style={{ borderRadius: 'var(--sl-radius-button)' }} />

// Proper nesting
<div style={{ borderRadius: 'var(--sl-radius-container)' }}>
  <div style={{ borderRadius: 'var(--sl-radius-card)' }} />
</div>
```

## 📋 Quick Checklist

- [ ] Import `@/styles/tokens.css`
- [ ] Use semantic tokens (no hardcoded values)
- [ ] Follow 4px grid for spacing
- [ ] ALL buttons are pill-shaped (9999px)
- [ ] Use Expressive only when explicitly needed (not by default)
- [ ] Follow radius nesting hierarchy
- [ ] Use intensity scale for states
- [ ] Include proper focus states
- [ ] Support dark mode
- [ ] Meet WCAG AA contrast

---

*Staylook Design System — Curved, Editorial, Minimal, Expressive*
