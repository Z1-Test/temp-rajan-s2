---
title: Color System
description: Comprehensive color token system with semantic colors and palettes
tags:
  - frontend
  - colors
  - tokens
  - theming
name: color-system
---

# Color System Skill

## Base Color Palette

```css
:root {
  /* Neutral (Zinc) */
  --zinc-50: #fafafa;
  --zinc-100: #f4f4f5;
  --zinc-200: #e4e4e7;
  --zinc-300: #d4d4d8;
  --zinc-400: #a1a1aa;
  --zinc-500: #71717a;
  --zinc-600: #52525b;
  --zinc-700: #3f3f46;
  --zinc-800: #27272a;
  --zinc-900: #18181b;
  --zinc-950: #09090b;
}
```

## Semantic Colors

```css
:root {
  /* Backgrounds */
  --background: var(--zinc-50);
  --foreground: var(--zinc-950);
  --card: white;
  --card-foreground: var(--zinc-950);
  --muted: var(--zinc-100);
  --muted-foreground: var(--zinc-500);
  
  /* Brand */
  --primary: #6366f1;
  --primary-foreground: white;
  --secondary: var(--zinc-100);
  --secondary-foreground: var(--zinc-900);
  --accent: var(--zinc-100);
  --accent-foreground: var(--zinc-900);
  
  /* Status */
  --success: #10b981;
  --success-foreground: white;
  --warning: #f59e0b;
  --warning-foreground: white;
  --destructive: #ef4444;
  --destructive-foreground: white;
  --info: #3b82f6;
  --info-foreground: white;
  
  /* UI */
  --border: var(--zinc-200);
  --input: var(--zinc-200);
  --ring: var(--primary);
}
```

## Usage Patterns

```tsx
// Backgrounds
<div className="bg-background" />
<Card className="bg-card" />
<div className="bg-muted" />

// Text
<p className="text-foreground" />
<p className="text-muted-foreground" />

// Brand
<Button className="bg-primary text-primary-foreground" />

// Status
<Badge className="bg-success text-success-foreground">Active</Badge>
<Badge className="bg-destructive text-destructive-foreground">Error</Badge>
<Badge className="bg-warning text-warning-foreground">Warning</Badge>
```

## Opacity Variants

```tsx
<div className="bg-primary/10" />  /* 10% opacity */
<div className="bg-primary/20" />  /* 20% opacity */
<div className="bg-primary/50" />  /* 50% opacity */
```

## Best Practices

✅ Use semantic tokens, not raw colors  
✅ Ensure 4.5:1 contrast for text  
✅ Use opacity variants for hover states  
❌ Don't hardcode hex values  
❌ Don't use pure black (#000)
