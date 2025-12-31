---
title: Grid System Mastery
description: Advanced 12-column grid system with complex layouts and responsive patterns
tags:
  - frontend
  - grid
  - layout
  - columns
  - responsive
name: grid-system-mastery
---

# Grid System Mastery Skill

## 12-Column Grid Fundamentals

```css
/* Base grid */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}
```

## Column Spans

| Span | Width | Use Case |
|------|-------|----------|
| `col-span-12` | 100% | Full-width content |
| `col-span-8` | 66% | Main content area |
| `col-span-6` | 50% | Two-column split |
| `col-span-4` | 33% | Sidebar, cards |
| `col-span-3` | 25% | Four-column cards |

## Layout Patterns

### Content + Sidebar

```tsx
<div className="grid grid-cols-12 gap-6">
  <main className="col-span-8">{content}</main>
  <aside className="col-span-4">{sidebar}</aside>
</div>
```

### Dashboard Grid

```tsx
<div className="grid grid-cols-12 gap-6">
  {/* Stats row - 3 per column */}
  <Card className="col-span-4">Stat 1</Card>
  <Card className="col-span-4">Stat 2</Card>
  <Card className="col-span-4">Stat 3</Card>
  
  {/* Main chart - 8 columns, sidebar - 4 columns */}
  <Card className="col-span-8">Chart</Card>
  <Card className="col-span-4">List</Card>
</div>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-12 gap-4 md:gap-6">
  {/* Full width mobile → 2/3 desktop */}
  <main className="col-span-12 lg:col-span-8">{content}</main>
  
  {/* Hidden mobile → 1/3 desktop */}
  <aside className="hidden lg:block lg:col-span-4">{sidebar}</aside>
</div>
```

## Auto-Fit Cards

```tsx
{/* Auto-adjust columns based on container */}
<div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
  {cards.map(card => <Card key={card.id}>{card.content}</Card>)}
</div>
```

## Nested Grids

```tsx
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-8">
    {/* Nested 2-column inside */}
    <div className="grid grid-cols-2 gap-4">
      <Card>Nested 1</Card>
      <Card>Nested 2</Card>
    </div>
  </div>
  <aside className="col-span-4">Sidebar</aside>
</div>
```

## Alignment

```tsx
{/* Stretch items (default) */}
<div className="grid grid-cols-3 gap-6">

{/* Center items vertically */}
<div className="grid grid-cols-3 gap-6 items-center">

{/* Align items to start */}
<div className="grid grid-cols-3 gap-6 items-start">

{/* Place in center both axes */}
<div className="grid place-items-center min-h-screen">
```

## Gap Consistency

| Gap | Pixels | Use Case |
|-----|--------|----------|
| `gap-2` | 8px | Tight grids, badges |
| `gap-4` | 16px | Cards, compact layout |
| `gap-6` | 24px | Standard spacing |
| `gap-8` | 32px | Generous spacing |

## Best Practices

✅ Use 12-column for complex layouts  
✅ Apply responsive column changes  
✅ Maintain consistent gap per grid  
✅ Nest grids for complex areas  
❌ Don't mix gap sizes in same grid  
❌ Don't skip alignment properties
