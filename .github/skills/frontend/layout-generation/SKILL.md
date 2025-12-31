---
title: Layout Generation
description: Generate responsive layouts using CSS Grid, Flexbox, and modern layout patterns with automatic breakpoint handling
tags:
  - frontend
  - layout
  - grid
  - flexbox
  - responsive
name: layout-generation
---

# Layout Generation Skill

## What is it?

This skill generates responsive layouts using CSS Grid and Flexbox patterns, creating consistent page structures that adapt seamlessly across all viewport sizes.

## Why use it?

- **Speed**: Generate complete layout structures in seconds
- **Consistency**: All layouts follow the same grid system and spacing
- **Responsiveness**: Mobile-first layouts with proper breakpoints
- **Maintainability**: Standardized patterns easy to modify
- **Best Practices**: Modern CSS techniques (Grid, Flexbox, Container Queries)

---

## Layout Patterns

### 1. Grid System (12-Column)

```css
/* Base grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Column spans */
.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-12 { grid-column: span 12; }

/* Responsive columns */
@media (max-width: 768px) {
  .col-md-12 { grid-column: span 12; }
}
```

### 2. Auto-Fit Card Grid

```tsx
// Automatically adjusts columns based on available space
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  {cards.map(card => <Card key={card.id} {...card} />)}
</div>
```

### 3. Dashboard Layout

```tsx
interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
}

export function DashboardLayout({ sidebar, header, children }: DashboardLayoutProps) {
  return (
    <div className="grid grid-cols-[280px_1fr] grid-rows-[64px_1fr] h-screen">
      {/* Sidebar - spans full height */}
      <aside className="row-span-2 border-r border-border bg-sidebar">
        {sidebar}
      </aside>
      
      {/* Header - top of main area */}
      <header className="border-b border-border bg-background px-6 flex items-center">
        {header}
      </header>
      
      {/* Main content */}
      <main className="overflow-auto p-6 bg-background">
        {children}
      </main>
    </div>
  );
}
```

### 4. Holy Grail Layout (Flexbox)

```tsx
export function HolyGrailLayout({ header, sidebar, content, aside, footer }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 border-b">{header}</header>
      
      <div className="flex flex-1">
        <aside className="w-64 border-r">{sidebar}</aside>
        <main className="flex-1 p-6">{content}</main>
        <aside className="w-64 border-l">{aside}</aside>
      </div>
      
      <footer className="h-16 border-t">{footer}</footer>
    </div>
  );
}
```

### 5. Split View Layout

```tsx
// 50/50 split with resizable divider
export function SplitViewLayout({ left, right }) {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border-r overflow-auto">{left}</div>
      <div className="overflow-auto">{right}</div>
    </div>
  );
}

// Sidebar + Main (1/3 + 2/3)
export function SidebarMainLayout({ sidebar, main }) {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-full gap-6">
      <aside>{sidebar}</aside>
      <main>{main}</main>
    </div>
  );
}
```

### 6. Bento Grid Layout

```tsx
// Modern bento-style grid with varying cell sizes
export function BentoGrid({ items }) {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
      {/* Large featured item */}
      <div className="col-span-2 row-span-2 rounded-2xl bg-card p-6">
        {items[0]}
      </div>
      
      {/* Medium items */}
      <div className="col-span-2 rounded-2xl bg-card p-6">{items[1]}</div>
      <div className="rounded-2xl bg-card p-6">{items[2]}</div>
      <div className="rounded-2xl bg-card p-6">{items[3]}</div>
      
      {/* Bottom row */}
      <div className="col-span-4 rounded-2xl bg-card p-6">{items[4]}</div>
    </div>
  );
}
```

---

## Container Component

```tsx
type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

const containerSizes: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',   // 640px
  md: 'max-w-screen-md',   // 768px
  lg: 'max-w-screen-lg',   // 1024px
  xl: 'max-w-screen-xl',   // 1280px
  '2xl': 'max-w-screen-2xl', // 1536px
  full: 'max-w-full',
};

interface ContainerProps {
  size?: ContainerSize;
  centered?: boolean;
  padding?: boolean;
  children: React.ReactNode;
}

export function Container({
  size = 'xl',
  centered = true,
  padding = true,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        containerSizes[size],
        centered && 'mx-auto',
        padding && 'px-4 sm:px-6 lg:px-8'
      )}
    >
      {children}
    </div>
  );
}
```

---

## Responsive Breakpoints

```css
/* Mobile-first breakpoints */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Responsive Layout Pattern

```tsx
// Stacked on mobile, side-by-side on desktop
<div className="flex flex-col lg:flex-row gap-6">
  <div className="lg:w-1/3">{sidebar}</div>
  <div className="lg:w-2/3">{main}</div>
</div>

// 1 column → 2 columns → 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## Page Layout Templates

### Auth Layout
```tsx
export function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
```

### Settings Layout
```tsx
export function SettingsLayout({ navigation, children }) {
  return (
    <div className="grid grid-cols-[240px_1fr] gap-8 max-w-6xl mx-auto py-8">
      <nav className="space-y-1">{navigation}</nav>
      <main>{children}</main>
    </div>
  );
}
```

### Landing Page Layout
```tsx
export function LandingLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

---

## How to Use

1. **Identify layout pattern** needed (dashboard, auth, settings, landing)
2. **Choose grid strategy** (12-column, auto-fit, flexbox)
3. **Apply breakpoints** for responsive behavior
4. **Use Container** component for max-width and padding
5. **Apply spacing tokens** consistently (gap-4, gap-6, gap-8)

---

## Best Practices

✅ **DO**:
- Use CSS Grid for 2D layouts (rows AND columns)
- Use Flexbox for 1D layouts (row OR column)
- Apply mobile-first breakpoints
- Use gap instead of margins between grid items
- Use semantic HTML elements (main, aside, header, footer)

❌ **DON'T**:
- Hardcode pixel widths (use tokens)
- Nest grids unnecessarily
- Use floats for layout
- Forget overflow handling on scrollable areas
- Ignore z-index stacking for overlays
