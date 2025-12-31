---
title: Visual Composition
description: Advanced visual composition rules for balanced, harmonious UI layouts
tags:
  - frontend
  - composition
  - hierarchy
  - balance
name: visual-composition
---

# Visual Composition Skill

## Visual Hierarchy Levels

| Level | Element | Style |
|-------|---------|-------|
| 1 - Critical | Page title, main CTA | `text-4xl font-bold`, largest |
| 2 - Primary | Section headings | `text-2xl font-semibold` |
| 3 - Secondary | Body, cards | `text-base text-foreground` |
| 4 - Tertiary | Meta info, hints | `text-sm text-muted-foreground` |

## Balance Patterns

### Symmetric (Formal)
```tsx
<section className="text-center">
  <h1>Centered Headline</h1>
  <div className="grid grid-cols-3 gap-6">{/* Equal cards */}</div>
</section>
```

### Asymmetric (Dynamic)
```tsx
<div className="grid grid-cols-[2fr_1fr] gap-6">
  <Card className="p-8">Large Featured</Card>
  <div className="space-y-4">
    <Card className="p-4">Small 1</Card>
    <Card className="p-4">Small 2</Card>
  </div>
</div>
```

## Whitespace Ratios

| Zone | Padding | Use Case |
|------|---------|----------|
| Sparse | `p-16 to p-24` | Hero, landing |
| Medium | `p-6 to p-8` | Dashboards |
| Dense | `p-2 to p-4` | Tables, lists |

## Reading Patterns

- **F-Pattern**: Content pages - horizontal scans, vertical descent
- **Z-Pattern**: Landing pages - diagonal scan across layout

## Focal Point Techniques

1. **Size** - Larger draws attention
2. **Color** - Contrast against surroundings  
3. **Position** - Top-left/center power points
4. **Isolation** - Whitespace around element
5. **Motion** - Animation draws eye

## Best Practices

✅ Use 4 hierarchy levels max  
✅ Balance visual weight  
✅ Generous whitespace  
✅ Group related elements  
❌ Don't make everything same size  
❌ Don't scatter related items
