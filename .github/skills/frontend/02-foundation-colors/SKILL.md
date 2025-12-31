---
title: Color System
description: Complete color system with semantic colors, palettes, and accessibility
tags:
  - frontend
  - colors
  - palette
  - accessibility
  - theming
name: color-system
---

# Color System Skill

## Semantic Color Tokens

| Token | Purpose | Light | Dark |
|-------|---------|-------|------|
| `background` | Page background | white | zinc-950 |
| `foreground` | Primary text | zinc-950 | zinc-50 |
| `card` | Card backgrounds | white | zinc-900 |
| `muted` | Subtle backgrounds | zinc-100 | zinc-800 |
| `muted-foreground` | Secondary text | zinc-500 | zinc-400 |
| `border` | Borders, dividers | zinc-200 | zinc-800 |
| `primary` | Brand, CTAs | indigo-600 | indigo-500 |
| `destructive` | Error, delete | red-600 | red-500 |

## Status Colors

```tsx
// Success
<div className="text-green-600 bg-green-50 border-green-200">

// Warning  
<div className="text-amber-600 bg-amber-50 border-amber-200">

// Error
<div className="text-destructive bg-destructive/10 border-destructive/20">

// Info
<div className="text-blue-600 bg-blue-50 border-blue-200">
```

## Color Usage Rules

```tsx
// ✅ Use semantic tokens
<div className="bg-background text-foreground">
<Card className="bg-card border-border">
<Button className="bg-primary text-primary-foreground">
<p className="text-muted-foreground">

// ❌ Avoid hardcoded colors
<div className="bg-[#ffffff] text-[#09090b]">
<Card className="bg-white border-gray-200">
```

## Contrast Requirements

| Text Size | Min Contrast | WCAG |
|-----------|--------------|------|
| Normal (<18px) | 4.5:1 | AA |
| Large (≥18px bold) | 3:1 | AA |
| UI Components | 3:1 | AA |

## Opacity Variations

```tsx
// Hover states
<div className="bg-primary hover:bg-primary/90">

// Subtle backgrounds
<div className="bg-primary/10 text-primary">

// Overlay
<div className="bg-black/50 backdrop-blur">

// Disabled
<Button disabled className="opacity-50">
```

## Best Practices

✅ Use semantic tokens for all colors  
✅ Test contrast with dev tools  
✅ Support dark mode variants  
✅ Use opacity for subtle variations  
❌ Don't use hardcoded hex values  
❌ Don't ignore contrast requirements
