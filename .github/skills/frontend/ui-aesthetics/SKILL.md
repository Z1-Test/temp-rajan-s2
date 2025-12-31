---
title: UI Aesthetics
description: Apply premium visual polish via glassmorphism, gradients, shadows, and modern design patterns
tags:
  - frontend
  - aesthetics
  - visual-design
  - polish
  - modern-ui
name: ui-aesthetics
---

# UI Aesthetics Skill

## What is it?

This skill applies premium visual polish and modern design trends to create stunning, professional interfaces that wow users at first glance.

## Why use it?

- **First Impression**: Users judge quality within seconds
- **Premium Feel**: Modern aesthetics increase perceived value
- **Engagement**: Beautiful interfaces encourage exploration
- **Trust**: Polished design builds confidence
- **Differentiation**: Stand out from generic UIs

---

## Modern Visual Techniques

### 1. Glassmorphism

```css
/* Glass effect with blur */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
}

/* Dark mode glass */
.glass-dark {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Colored glass */
.glass-primary {
  background: rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(99, 102, 241, 0.3);
}
```

```tsx
// Glassmorphism card
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
  <h3 className="text-white font-semibold">Glass Card</h3>
</div>
```

### 2. Gradient Overlays

```css
/* Hero gradient overlay */
.hero-gradient {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
}

/* Subtle mesh gradient */
.mesh-gradient {
  background: 
    radial-gradient(at 40% 20%, hsla(263, 100%, 60%, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 60%, 0.2) 0px, transparent 50%);
}

/* Text gradient */
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 3. Depth & Shadows

```css
/* Layered shadow for depth */
.shadow-layered {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 12px 24px rgba(0, 0, 0, 0.06);
}

/* Colored shadow */
.shadow-primary {
  box-shadow: 0 8px 24px -4px rgba(99, 102, 241, 0.25);
}

/* Inset glow */
.glow-inset {
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);
}
```

### 4. Border Treatments

```css
/* Gradient border */
.border-gradient {
  background: linear-gradient(var(--color-card), var(--color-card)) padding-box,
              linear-gradient(135deg, var(--color-primary), var(--color-secondary)) border-box;
  border: 2px solid transparent;
  border-radius: var(--radius-xl);
}

/* Subtle inner glow */
.border-glow {
  border: 1px solid var(--color-border);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Animated border */
@keyframes border-dance {
  0%, 100% { border-color: var(--color-primary); }
  50% { border-color: var(--color-secondary); }
}
```

---

## Interactive Polish

### Hover Effects

```tsx
// Lift on hover
<Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

// Glow on hover
<Button className="transition-shadow hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">

// Scale on hover
<Avatar className="transition-transform hover:scale-110">

// Background shift on hover
<div className="bg-muted hover:bg-accent transition-colors duration-200">
```

### Focus States

```css
/* Premium focus ring */
.focus-ring:focus-visible {
  outline: none;
  ring: 2px;
  ring-offset: 2px;
  ring-color: var(--color-primary);
  ring-offset-color: var(--color-background);
}

/* Glow focus */
.focus-glow:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
}
```

### Loading States

```css
/* Shimmer effect */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-muted) 25%,
    var(--color-accent) 50%,
    var(--color-muted) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Pulse loading */
.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

## Card Design Patterns

### Premium Card

```tsx
<Card className="
  relative overflow-hidden
  bg-gradient-to-br from-card to-card/80
  border border-border/50
  shadow-lg shadow-black/5
  hover:shadow-xl hover:border-border
  transition-all duration-300
">
  {/* Subtle gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
  
  <CardContent className="relative z-10">
    {/* Content */}
  </CardContent>
</Card>
```

### Feature Card with Icon

```tsx
<Card className="group p-6 hover:border-primary/50 transition-colors">
  <div className="
    size-12 rounded-xl mb-4
    bg-gradient-to-br from-primary/10 to-primary/5
    flex items-center justify-center
    group-hover:scale-110 transition-transform
  ">
    <Icon className="size-6 text-primary" />
  </div>
  <h3 className="font-semibold mb-2">Feature Title</h3>
  <p className="text-sm text-muted-foreground">Feature description here.</p>
</Card>
```

### Stats Card

```tsx
<Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
  <p className="text-sm opacity-80 mb-1">Total Revenue</p>
  <p className="text-3xl font-bold">$45,231</p>
  <p className="text-sm mt-2 flex items-center gap-1">
    <TrendingUp className="size-4" />
    <span className="text-green-300">+12.5%</span>
    <span className="opacity-60">from last month</span>
  </p>
</Card>
```

---

## Hero Section Patterns

```tsx
// Gradient background hero
<section className="relative min-h-screen overflow-hidden">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
  
  {/* Animated orbs */}
  <div className="absolute top-1/4 left-1/4 size-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 size-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 py-24">
    <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      Hero Title
    </h1>
  </div>
</section>
```

---

## Visual Hierarchy Techniques

1. **Size**: Larger = more important
2. **Weight**: Bold text draws attention
3. **Color**: Brand colors for CTAs, muted for secondary
4. **Space**: More whitespace around important elements
5. **Depth**: Elevated elements appear closer

```tsx
// Clear hierarchy
<Card className="p-8">
  <Badge variant="secondary" className="mb-4">New Feature</Badge>
  <h2 className="text-2xl font-bold mb-2">Main Heading</h2>
  <p className="text-muted-foreground mb-6">Supporting description text.</p>
  <Button size="lg">Primary Action</Button>
</Card>
```

---

## Whitespace Optimization

```css
/* Generous padding for premium feel */
.section { padding: var(--space-24) 0; }
.card { padding: var(--space-8); }
.content-gap { gap: var(--space-6); }

/* Breathing room between sections */
.section + .section { margin-top: var(--space-16); }
```

---

## How to Use

1. **Choose aesthetic direction** (minimal, glassmorphic, gradient-heavy)
2. **Apply depth** with layered shadows
3. **Add subtle gradients** for visual interest
4. **Polish interactions** with smooth hover/focus effects
5. **Create visual hierarchy** through size, weight, color
6. **Use whitespace generously** for premium feel

---

## Best Practices

✅ **DO**:
- Use subtle gradients (not jarring color shifts)
- Apply consistent shadow styles throughout
- Add micro-interactions for engagement
- Maintain whitespace for breathing room
- Test glassmorphism on various backgrounds

❌ **DON'T**:
- Overuse effects (less is more)
- Apply animation to everything
- Use pure black (#000) shadows
- Sacrifice accessibility for aesthetics
- Forget reduced-motion preferences
