---
title: Dark Mode Generation
description: Auto-generate dark mode themes from light mode with proper color mapping and contrast validation
tags:
  - frontend
  - dark-mode
  - theming
  - colors
  - accessibility
name: dark-mode-generation
---

# Dark Mode Generation Skill

## What is it?

This skill auto-generates dark mode themes from light mode designs, ensuring proper color inversion, contrast ratios, and smooth theme transitions.

## Why use it?

- **User Preference**: 80%+ users prefer dark mode option
- **Eye Strain**: Reduces eye fatigue in low-light environments
- **Battery**: OLED screens use less power with dark themes
- **Accessibility**: Accommodates light sensitivity
- **Modern Expectation**: Dark mode is now table stakes

---

## Color Mapping Strategy

### Light → Dark Conversion

| Light Mode | Dark Mode | Token |
|------------|-----------|-------|
| `#ffffff` (white) | `#09090b` (near-black) | `--background` |
| `#f9fafb` (light gray) | `#18181b` (dark gray) | `--card` |
| `#f4f4f5` (muted) | `#27272a` (muted dark) | `--muted` |
| `#09090b` (text) | `#fafafa` (light text) | `--foreground` |
| `#71717a` (secondary) | `#a1a1aa` (secondary) | `--muted-foreground` |
| `#e4e4e7` (border) | `#27272a` (dark border) | `--border` |

### Semantic Colors (Stay Similar)

| Token | Light | Dark |
|-------|-------|------|
| `--primary` | `#6366f1` | `#818cf8` (slightly lighter) |
| `--success` | `#10b981` | `#34d399` |
| `--warning` | `#f59e0b` | `#fbbf24` |
| `--error` | `#ef4444` | `#f87171` |

---

## CSS Variables Setup

```css
/* Light theme (default) */
:root {
  /* Backgrounds */
  --background: #ffffff;
  --card: #ffffff;
  --popover: #ffffff;
  --muted: #f4f4f5;
  
  /* Foregrounds */
  --foreground: #09090b;
  --card-foreground: #09090b;
  --popover-foreground: #09090b;
  --muted-foreground: #71717a;
  
  /* Brand colors */
  --primary: #6366f1;
  --primary-foreground: #ffffff;
  --secondary: #f4f4f5;
  --secondary-foreground: #18181b;
  
  /* Semantic colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  
  /* Borders */
  --border: #e4e4e7;
  --input: #e4e4e7;
  --ring: #6366f1;
}

/* Dark theme */
[data-theme="dark"],
.dark {
  /* Backgrounds - inverted */
  --background: #09090b;
  --card: #18181b;
  --popover: #18181b;
  --muted: #27272a;
  
  /* Foregrounds - inverted */
  --foreground: #fafafa;
  --card-foreground: #fafafa;
  --popover-foreground: #fafafa;
  --muted-foreground: #a1a1aa;
  
  /* Brand colors - adjusted for dark backgrounds */
  --primary: #818cf8;
  --primary-foreground: #09090b;
  --secondary: #27272a;
  --secondary-foreground: #fafafa;
  
  /* Semantic colors - slightly lighter */
  --success: #34d399;
  --warning: #fbbf24;
  --error: #f87171;
  
  /* Borders - darker */
  --border: #27272a;
  --input: #27272a;
  --ring: #818cf8;
}
```

---

## Theme Provider Implementation

```tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    let resolved: 'light' | 'dark';
    
    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    } else {
      resolved = theme;
    }
    
    root.classList.add(resolved);
    root.setAttribute('data-theme', resolved);
    setResolvedTheme(resolved);
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setResolvedTheme(e.matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

---

## Theme Toggle Component

```tsx
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 size-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Monitor className="mr-2 size-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

---

## Image Handling in Dark Mode

```tsx
// Invert light images in dark mode
<img 
  src="/logo.svg" 
  className="dark:invert dark:brightness-150"
  alt="Logo"
/>

// Different image per theme
<picture>
  <source srcSet="/hero-dark.jpg" media="(prefers-color-scheme: dark)" />
  <img src="/hero-light.jpg" alt="Hero" />
</picture>

// Or using Tailwind
<img 
  src="/hero-light.jpg" 
  className="dark:hidden" 
  alt="Hero" 
/>
<img 
  src="/hero-dark.jpg" 
  className="hidden dark:block" 
  alt="Hero" 
/>
```

---

## Shadow Adjustments

```css
/* Shadows need adjustment in dark mode */
:root {
  --shadow-color: 0 0% 0%;
  --shadow-sm: 0 1px 2px hsl(var(--shadow-color) / 0.05);
  --shadow-md: 0 4px 6px hsl(var(--shadow-color) / 0.1);
  --shadow-lg: 0 10px 15px hsl(var(--shadow-color) / 0.1);
}

.dark {
  /* Darker, more spread shadows on dark backgrounds */
  --shadow-color: 0 0% 0%;
  --shadow-sm: 0 1px 3px hsl(var(--shadow-color) / 0.2);
  --shadow-md: 0 4px 8px hsl(var(--shadow-color) / 0.3);
  --shadow-lg: 0 10px 20px hsl(var(--shadow-color) / 0.4);
}
```

---

## Contrast Validation

```typescript
// Ensure WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
function getContrastRatio(fg: string, bg: string): number {
  const fgLum = getLuminance(fg);
  const bgLum = getLuminance(bg);
  const lighter = Math.max(fgLum, bgLum);
  const darker = Math.min(fgLum, bgLum);
  return (lighter + 0.05) / (darker + 0.05);
}

// Validate dark mode colors
const darkModeContrasts = [
  { fg: '--foreground', bg: '--background', min: 4.5 },
  { fg: '--muted-foreground', bg: '--background', min: 4.5 },
  { fg: '--primary-foreground', bg: '--primary', min: 4.5 },
  { fg: '--foreground', bg: '--card', min: 4.5 },
];

darkModeContrasts.forEach(({ fg, bg, min }) => {
  const ratio = getContrastRatio(tokens[fg], tokens[bg]);
  if (ratio < min) {
    console.warn(`Contrast too low: ${fg} on ${bg} = ${ratio.toFixed(2)}:1 (min: ${min}:1)`);
  }
});
```

---

## Smooth Theme Transitions

```css
/* Smooth color transitions when switching themes */
:root {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}

/* Transition all color properties */
* {
  transition: background-color 0.2s ease, 
              border-color 0.2s ease, 
              color 0.2s ease;
}

/* Disable transitions during theme switch to prevent flash */
.theme-switching * {
  transition: none !important;
}
```

---

## How to Use

1. **Define CSS variables** for light theme
2. **Create dark theme variables** with inverted values
3. **Wrap app** in ThemeProvider
4. **Add ThemeToggle** to header/settings
5. **Validate contrast ratios** for accessibility
6. **Handle images** that need inversion
7. **Add smooth transitions** for theme switching

---

## Best Practices

✅ **DO**:
- Use CSS variables for all colors
- Provide system preference option
- Persist theme choice to localStorage
- Validate contrast ratios (4.5:1 minimum)
- Add smooth transitions between themes

❌ **DON'T**:
- Use pure black (#000) backgrounds
- Forget to adjust semantic colors
- Ignore reduced-motion preferences
- Skip contrast validation
- Use separate stylesheets per theme
