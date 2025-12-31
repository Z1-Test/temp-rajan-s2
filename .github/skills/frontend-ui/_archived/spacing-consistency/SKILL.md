---
title: Spacing Consistency
description: Enforce consistent spacing using the 4px grid system with automated auditing
tags:
  - frontend
  - spacing
  - consistency
  - grid-system
  - layout
name: spacing-consistency
---

# Spacing Consistency Skill

## What is it?

This skill enforces consistent spacing throughout the interface using a systematic approach based on a 4px grid, detecting and preventing hardcoded values.

## Why use it?

- **Visual Harmony**: Consistent spacing feels intentional
- **Maintainability**: Change spacing globally via tokens
- **Speed**: No decisions about "how much padding"
- **Quality**: Eliminates arbitrary magic numbers
- **Scalability**: Spacing works across all screen sizes

---

## 4px Grid System

All spacing values should be multiples of 4px:

```css
:root {
  /* Spacing scale */
  --space-0: 0;
  --space-0.5: 0.125rem;  /* 2px - micro adjustments only */
  --space-1: 0.25rem;     /* 4px */
  --space-1.5: 0.375rem;  /* 6px */
  --space-2: 0.5rem;      /* 8px */
  --space-2.5: 0.625rem;  /* 10px */
  --space-3: 0.75rem;     /* 12px */
  --space-3.5: 0.875rem;  /* 14px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-7: 1.75rem;     /* 28px */
  --space-8: 2rem;        /* 32px */
  --space-9: 2.25rem;     /* 36px */
  --space-10: 2.5rem;     /* 40px */
  --space-11: 2.75rem;    /* 44px */
  --space-12: 3rem;       /* 48px */
  --space-14: 3.5rem;     /* 56px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */
  --space-28: 7rem;       /* 112px */
  --space-32: 8rem;       /* 128px */
}
```

---

## Semantic Spacing Tokens

```css
:root {
  /* Component internal padding */
  --space-button-x: var(--space-4);
  --space-button-y: var(--space-2);
  --space-input-x: var(--space-3);
  --space-input-y: var(--space-2);
  --space-card: var(--space-6);
  --space-modal: var(--space-6);
  --space-popover: var(--space-4);
  
  /* Section/page spacing */
  --space-section: var(--space-16);
  --space-page-x: var(--space-4);
  --space-page-y: var(--space-8);
  
  /* Content gaps */
  --space-stack-sm: var(--space-2);  /* Between related items */
  --space-stack-md: var(--space-4);  /* Standard stack */
  --space-stack-lg: var(--space-6);  /* Between groups */
  --space-stack-xl: var(--space-8);  /* Between sections */
}
```

---

## Common Spacing Patterns

### Component Internal Spacing

```tsx
// Button
<Button className="px-4 py-2">Click Me</Button>

// Input
<Input className="px-3 py-2" />

// Card
<Card className="p-6">
  <CardHeader className="pb-4">
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Content */}
  </CardContent>
</Card>
```

### Stack Spacing (Vertical)

```tsx
// Tight stack (related items)
<div className="space-y-2">
  <Label>Email</Label>
  <Input />
  <p className="text-sm text-muted-foreground">Helper text</p>
</div>

// Standard stack
<div className="space-y-4">
  <FormField />
  <FormField />
  <FormField />
</div>

// Section stack
<div className="space-y-8">
  <Section />
  <Section />
</div>

// Page sections
<div className="space-y-16">
  <HeroSection />
  <FeaturesSection />
  <CTASection />
</div>
```

### Grid Gap

```tsx
// Card grid
<div className="grid grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>

// Tight grid (icons, badges)
<div className="flex flex-wrap gap-2">
  <Badge />
  <Badge />
  <Badge />
</div>

// Form grid
<div className="grid grid-cols-2 gap-4">
  <FormField />
  <FormField />
</div>
```

### Inline Spacing

```tsx
// Icon + text
<div className="flex items-center gap-2">
  <Icon className="size-4" />
  <span>Label</span>
</div>

// Button group
<div className="flex gap-3">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</div>

// Avatar + info
<div className="flex items-center gap-3">
  <Avatar />
  <div>
    <p className="font-medium">{name}</p>
    <p className="text-sm text-muted-foreground">{email}</p>
  </div>
</div>
```

---

## Gap vs Margin Guidelines

| Use Case | Approach |
|----------|----------|
| Items in a flex/grid container | `gap-*` |
| Component internal spacing | `p-*` (padding) |
| Between sibling sections | `space-y-*` on parent |
| First/last child special | `first:`, `last:` modifiers |
| One-off adjustments | `mt-*`, `mb-*` (margin) |

```tsx
// ✅ Prefer gap for flex/grid
<div className="flex gap-4">{items}</div>

// ✅ Prefer space-y for stacks
<div className="space-y-4">{items}</div>

// ⚠️ Use margin sparingly for one-offs
<h2 className="mb-4">Section Title</h2>
```

---

## Hardcoded Value Detection

### ❌ Invalid (Hardcoded)

```tsx
// Bad: arbitrary pixel values
<div style={{ padding: '17px' }}>
<div className="p-[13px]">
<div className="mt-[22px]">
<div className="gap-[7px]">
```

### ✅ Valid (Token Based)

```tsx
// Good: using Tailwind spacing scale
<div className="p-4">      {/* 16px */}
<div className="p-6">      {/* 24px */}
<div className="mt-6">     {/* 24px */}
<div className="gap-2">    {/* 8px */}
```

---

## Spacing Audit Script

```typescript
// Find hardcoded spacing values in codebase
const hardcodedPatterns = [
  /style={{.*padding: ['"]\d+px['"]/g,
  /style={{.*margin: ['"]\d+px['"]/g,
  /className=".*p-\[\d+px\]/g,
  /className=".*m-\[\d+px\]/g,
  /className=".*gap-\[\d+px\]/g,
];

function auditSpacing(files: string[]) {
  const issues: SpacingIssue[] = [];
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    
    for (const pattern of hardcodedPatterns) {
      const matches = content.matchAll(pattern);
      for (const match of matches) {
        issues.push({
          file,
          line: getLineNumber(content, match.index),
          value: match[0],
          suggestion: findNearestToken(extractPixelValue(match[0])),
        });
      }
    }
  }
  
  return issues;
}
```

---

## Optical Spacing Corrections

Sometimes mathematical spacing doesn't look right:

```tsx
// Play button in circle needs slight offset
<div className="flex items-center justify-center">
  <PlayIcon className="ml-0.5" /> {/* Optical correction */}
</div>

// Text near chevron needs tighter spacing
<button className="flex items-center">
  <span>Next</span>
  <ChevronRight className="-mr-1" /> {/* Pull in */}
</button>

// First/last item in list
<ul className="space-y-2">
  <li className="pt-0">{/* First item no extra top padding */}</li>
  <li>{/* ... */}</li>
  <li className="pb-0">{/* Last item no extra bottom padding */}</li>
</ul>
```

---

## Responsive Spacing

```tsx
// Smaller spacing on mobile, larger on desktop
<section className="py-12 sm:py-16 md:py-20 lg:py-24">

// Container padding
<div className="px-4 sm:px-6 lg:px-8">

// Card padding
<Card className="p-4 sm:p-6 lg:p-8">

// Grid gap
<div className="grid gap-4 sm:gap-6 lg:gap-8">
```

---

## Spacing Decision Matrix

| Relationship | Spacing Token |
|--------------|---------------|
| Related items (label + input) | `space-2` (8px) |
| Standard elements | `space-4` (16px) |
| Grouped components | `space-6` (24px) |
| Between sections | `space-8` (32px) |
| Page sections | `space-16` (64px) |
| Major page divisions | `space-24` (96px) |

---

## How to Use

1. **Start with semantic tokens** for common patterns
2. **Use gap** for flex and grid containers
3. **Use space-y** for vertical stacks
4. **Avoid arbitrary values** (p-[17px])
5. **Run audits** to catch hardcoded values
6. **Apply optical corrections** sparingly

---

## Best Practices

✅ **DO**:
- Stick to the 4px grid (multiples of 4)
- Use semantic tokens (--space-card)
- Prefer gap over margin for grid items
- Keep spacing consistent across similar components
- Document exceptions with comments

❌ **DON'T**:
- Use arbitrary pixel values (17px, 23px)
- Mix % and px for related elements
- Hardcode spacing in inline styles
- Ignore responsive spacing needs
- Use negative margins to "fix" spacing issues
