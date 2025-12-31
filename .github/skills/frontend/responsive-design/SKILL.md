---
title: Responsive Design
description: Implement mobile-first responsive strategies with proper breakpoints and adaptive patterns
tags:
  - frontend
  - responsive
  - mobile-first
  - breakpoints
  - adaptive
name: responsive-design
---

# Responsive Design Skill

## What is it?

This skill implements mobile-first responsive strategies, ensuring interfaces adapt seamlessly across all device sizes from mobile phones to large desktop monitors.

## Why use it?

- **Mobile First**: 60%+ of traffic is mobile
- **Consistency**: Same experience across all devices
- **Performance**: Mobile-first loads less CSS
- **Accessibility**: Touch targets and readable text
- **SEO**: Google prioritizes mobile-friendly sites

---

## Breakpoint System

```css
/* Mobile-first breakpoints */
--breakpoint-sm: 640px;   /* Small tablets, landscape phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops, small desktops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Tailwind Breakpoint Usage

```tsx
// Mobile-first: Base styles apply to mobile, breakpoints add for larger
<div className="
  p-4          {/* Mobile: 16px padding */}
  sm:p-6       {/* 640px+: 24px padding */}
  md:p-8       {/* 768px+: 32px padding */}
  lg:p-12      {/* 1024px+: 48px padding */}
">

// Grid: 1 col → 2 cols → 3 cols → 4 cols
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

---

## Responsive Patterns

### 1. Stack to Horizontal

```tsx
// Mobile: stacked, Desktop: side-by-side
<div className="flex flex-col lg:flex-row gap-6">
  <div className="lg:w-1/3">{sidebar}</div>
  <div className="lg:w-2/3">{main}</div>
</div>
```

### 2. Responsive Navigation

```tsx
// Mobile navigation (hamburger)
export function MobileNav() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      {/* Hamburger button - visible only on mobile */}
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)}>
        <Menu className="size-6" />
      </Button>
      
      {/* Mobile menu drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-80">
          <nav className="flex flex-col gap-4">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-lg font-medium">
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

// Desktop navigation
export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-6">
      {navItems.map(item => (
        <a key={item.href} href={item.href} className="text-sm font-medium hover:text-primary">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
```

### 3. Responsive Cards

```tsx
// Cards: full width → 2 up → 3 up
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id} className="p-4 md:p-6">
      {/* Content adapts to card size */}
      <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
    </Card>
  ))}
</div>
```

### 4. Responsive Tables

```tsx
// Desktop: full table, Mobile: card view
<div className="hidden md:block">
  <Table>{/* Full table */}</Table>
</div>

<div className="md:hidden space-y-4">
  {data.map(row => (
    <Card key={row.id} className="p-4">
      <div className="flex justify-between">
        <span className="font-medium">{row.name}</span>
        <Badge>{row.status}</Badge>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">
        {row.description}
      </div>
    </Card>
  ))}
</div>
```

### 5. Show/Hide Pattern

```tsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">{desktopOnlyContent}</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">{mobileOnlyContent}</div>

// Show different content per breakpoint
<span className="sm:hidden">Mobile Text</span>
<span className="hidden sm:inline md:hidden">Tablet Text</span>
<span className="hidden md:inline">Desktop Text</span>
```

---

## Responsive Typography

```css
/* Fluid typography with clamp() */
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
--text-5xl: clamp(3rem, 2rem + 5vw, 5rem);
```

```tsx
// Responsive headings
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Heading</h1>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Subheading</h2>

// Or use fluid typography
<h1 className="text-[clamp(2rem,5vw,4rem)] font-bold">Fluid Heading</h1>
```

---

## Touch Target Sizing

```tsx
// Minimum 44x44px touch targets (WCAG requirement)
<Button className="min-h-[44px] min-w-[44px] px-4">Tap Me</Button>

// Icon buttons need explicit sizing
<Button variant="ghost" size="icon" className="size-11">
  <Icon className="size-5" />
</Button>

// Adequate spacing between touch targets
<nav className="flex flex-col gap-2">
  {items.map(item => (
    <a key={item.href} className="py-3 px-4 text-base">{item.label}</a>
  ))}
</nav>
```

---

## Responsive Images

```tsx
// Responsive image with srcset
<img
  src="/hero-800.jpg"
  srcSet="
    /hero-400.jpg 400w,
    /hero-800.jpg 800w,
    /hero-1200.jpg 1200w,
    /hero-1600.jpg 1600w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  alt="Hero image"
  className="w-full h-auto object-cover"
/>

// Next.js Image component (automatic optimization)
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  className="w-full h-auto"
  priority
/>
```

---

## Container Queries

```tsx
// Component-level responsiveness (container queries)
<div className="@container">
  <div className="flex flex-col @md:flex-row gap-4">
    <Avatar className="size-12 @md:size-16" />
    <div>
      <h3 className="text-base @md:text-lg font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{bio}</p>
    </div>
  </div>
</div>
```

---

## Responsive Spacing

```tsx
// Padding: smaller on mobile, larger on desktop
<section className="py-12 sm:py-16 md:py-20 lg:py-24">

// Gap: tighter on mobile
<div className="grid gap-4 sm:gap-6 lg:gap-8">

// Margin: responsive sections
<section className="mt-8 sm:mt-12 lg:mt-16">
```

---

## How to Use

1. **Start mobile-first** - design for smallest screen first
2. **Identify breakpoints** - where does layout need to change?
3. **Apply responsive classes** - sm:, md:, lg:, xl:
4. **Test on real devices** - simulators miss touch nuances
5. **Ensure touch targets** - minimum 44x44px
6. **Optimize images** - use srcset and sizes

---

## Breakpoint Decision Guide

| Breakpoint | Use Case |
|------------|----------|
| Base (mobile) | Single column, hamburger nav, stacked content |
| sm (640px) | 2-column grids, slightly larger text |
| md (768px) | Side-by-side layouts, tablet optimizations |
| lg (1024px) | Full navigation, 3-column grids |
| xl (1280px) | Max container width, larger spacing |
| 2xl (1536px) | Extra-wide layouts, more columns |

---

## Best Practices

✅ **DO**:
- Design mobile-first, enhance for larger screens
- Use relative/fluid units (rem, %, vw)
- Test on actual devices
- Ensure touch targets are 44x44px minimum
- Use container queries for component-level responsiveness

❌ **DON'T**:
- Use fixed pixel widths
- Hide essential content on mobile
- Make text too small on mobile (<16px)
- Forget about landscape orientation
- Ignore performance on slow connections
