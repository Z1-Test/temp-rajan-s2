# Design Token Generation Skill

## Overview
Automates the generation of design tokens from brand guidelines and design specifications, creating CSS custom properties, Tailwind configuration, and TypeScript types for a complete, type-safe design system.

## Purpose
Eliminate manual token creation and ensure design consistency across all UI components by auto-generating tokens from a single source of truth.

---

## Skill Capabilities

### 1. Token Source Parsing

**Input Sources**:
- `brand-guidelines.md` (Staytuned brand identity)
- `design-system.md` (design token specifications)
- Figma Design Tokens (JSON export, if available)
- Color palettes (hex, RGB, HSL)
- Typography specifications
- Spacing/sizing scales

**Parsing Process**:
1. Extract color values (primary, secondary, semantic)
2. Extract typography (fonts, sizes, weights, line-heights)
3. Extract spacing scale (margins, padding, gaps)
4. Extract border radius, shadows, transitions
5. Validate completeness (no missing values)
6. Check accessibility (contrast ratios)

---

### 2. Token Categories

#### **Color Tokens**
```typescript
// Brand Colors
--color-brand-primary: #6366f1;      // Indigo (Staytuned primary)
--color-brand-secondary: #8b5cf6;    // Purple
--color-brand-accent: #06b6d4;       // Cyan

// Semantic Colors
--color-success: #10b981;            // Green
--color-warning: #f59e0b;            // Amber
--color-error: #ef4444;              // Red
--color-info: #3b82f6;               // Blue

// UI Colors
--color-background: #ffffff;         // Main background
--color-foreground: #09090b;         // Main text
--color-card: #ffffff;               // Card background
--color-border: #e4e4e7;             // Borders
--color-input: #e4e4e7;              // Input borders
--color-ring: #6366f1;               // Focus ring

// Text Colors
--color-text-primary: #09090b;       // Primary text
--color-text-secondary: #71717a;     // Secondary text
--color-text-muted: #a1a1aa;         // Muted text
--color-text-disabled: #d4d4d8;      // Disabled text

// State Colors
--color-hover: #f4f4f5;
--color-active: #e4e4e7;
--color-focus: #6366f1;

// Dark Mode (automatic generation)
[data-theme="dark"] {
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-card: #18181b;
  --color-border: #27272a;
  // ... auto-inverted values
}
```

#### **Typography Tokens**
```typescript
// Font Families
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

// Font Sizes
--text-xs: 0.75rem;      // 12px
--text-sm: 0.875rem;     // 14px
--text-base: 1rem;       // 16px
--text-lg: 1.125rem;     // 18px
--text-xl: 1.25rem;      // 20px
--text-2xl: 1.5rem;      // 24px
--text-3xl: 1.875rem;    // 30px
--text-4xl: 2.25rem;     // 36px
--text-5xl: 3rem;        // 48px

// Font Weights
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

// Line Heights
--leading-none: 1;
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;

// Letter Spacing
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

#### **Spacing Tokens**
```typescript
// Spacing Scale (based on 4px grid)
--space-0: 0;
--space-1: 0.25rem;   // 4px
--space-2: 0.5rem;    // 8px
--space-3: 0.75rem;   // 12px
--space-4: 1rem;      // 16px
--space-5: 1.25rem;   // 20px
--space-6: 1.5rem;    // 24px
--space-8: 2rem;      // 32px
--space-10: 2.5rem;   // 40px
--space-12: 3rem;     // 48px
--space-16: 4rem;     // 64px
--space-20: 5rem;     // 80px
--space-24: 6rem;     // 96px

// Semantic Spacing
--space-xs: var(--space-2);
--space-sm: var(--space-4);
--space-md: var(--space-6);
--space-lg: var(--space-8);
--space-xl: var(--space-12);
```

#### **Border Tokens**
```typescript
// Border Radius
--radius-none: 0;
--radius-sm: 0.125rem;    // 2px
--radius-md: 0.375rem;    // 6px
--radius-lg: 0.5rem;      // 8px
--radius-xl: 0.75rem;     // 12px
--radius-2xl: 1rem;       // 16px
--radius-full: 9999px;

// Semantic Radius
--radius-button: var(--radius-md);
--radius-card: var(--radius-lg);
--radius-input: var(--radius-md);
--radius-dialog: var(--radius-xl);

// Border Width
--border-width-1: 1px;
--border-width-2: 2px;
--border-width-4: 4px;
```

#### **Shadow Tokens**
```typescript
// Elevation Shadows
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

// Semantic Shadows
--elevation-1: var(--shadow-sm);
--elevation-2: var(--shadow-md);
--elevation-3: var(--shadow-lg);
--elevation-4: var(--shadow-xl);

// Focus Shadow
--shadow-focus: 0 0 0 3px var(--color-ring);
```

#### **Transition Tokens**
```typescript
// Duration
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;

// Easing
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

// Combined Transitions
--transition-all: all var(--duration-normal) var(--ease-in-out);
--transition-colors: color, background-color, border-color var(--duration-normal) var(--ease-in-out);
--transition-transform: transform var(--duration-normal) var(--ease-out);
```

#### **Z-Index Tokens**
```typescript
// Z-Index Scale
--z-0: 0;
--z-10: 10;
--z-20: 20;
--z-30: 30;
--z-40: 40;
--z-50: 50;

// Semantic Z-Index
--z-dropdown: var(--z-10);
--z-sticky: var(--z-20);
--z-modal: var(--z-40);
--z-popover: var(--z-30);
--z-toast: var(--z-50);
--z-tooltip: var(--z-50);
```

---

### 3. Output Generation

#### **Output 1: CSS Custom Properties**
**File**: `src/styles/tokens.css`

```css
/**
 * Design Tokens
 * Auto-generated from brand-guidelines.md
 * DO NOT EDIT MANUALLY - use `npm run generate:tokens`
 */

:root {
  /* Colors */
  --color-brand-primary: #6366f1;
  --color-brand-secondary: #8b5cf6;
  --color-brand-accent: #06b6d4;
  
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  --color-background: #ffffff;
  --color-foreground: #09090b;
  --color-card: #ffffff;
  --color-border: #e4e4e7;
  --color-input: #e4e4e7;
  --color-ring: #6366f1;
  
  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  
  /* Borders */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-all: all var(--duration-normal) var(--ease-in-out);
}

/* Dark Mode */
[data-theme="dark"] {
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-card: #18181b;
  --color-border: #27272a;
  --color-input: #3f3f46;
  --color-text-primary: #fafafa;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
}
```

---

#### **Output 2: Tailwind Configuration**
**File**: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent: 'var(--color-brand-accent)',
        },
        // Semantic Colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        // UI Colors
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        // Text Colors
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
      },
      fontWeight: {
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        12: 'var(--space-12)',
        16: 'var(--space-16)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

#### **Output 3: TypeScript Types**
**File**: `src/types/tokens.ts`

```typescript
/**
 * Design Token Types
 * Auto-generated from design tokens
 * DO NOT EDIT MANUALLY
 */

export type ColorToken =
  | 'brand-primary'
  | 'brand-secondary'
  | 'brand-accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'background'
  | 'foreground'
  | 'card'
  | 'border'
  | 'text-primary'
  | 'text-secondary'
  | 'text-muted';

export type SpacingToken =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '6'
  | '8'
  | '12'
  | '16'
  | '20'
  | '24';

export type FontSizeToken = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type FontWeightToken = 'normal' | 'medium' | 'semibold' | 'bold';

export type RadiusToken = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export type ShadowToken = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface DesignTokens {
  colors: Record<ColorToken, string>;
  spacing: Record<SpacingToken, string>;
  fontSize: Record<FontSizeToken, string>;
  fontWeight: Record<FontWeightToken, number>;
  borderRadius: Record<RadiusToken, string>;
  boxShadow: Record<ShadowToken, string>;
}

// Helper type for CSS variable access
export type CSSVariable = `--${string}`;

// Token validation
export function isValidColorToken(token: string): token is ColorToken {
  const validTokens: ColorToken[] = [
    'brand-primary',
    'brand-secondary',
    'brand-accent',
    'success',
    'warning',
    'error',
    'info',
    'background',
    'foreground',
    'card',
    'border',
    'text-primary',
    'text-secondary',
    'text-muted',
  ];
  return validTokens.includes(token as ColorToken);
}
```

---

#### **Output 4: JSON Source of Truth**
**File**: `src/tokens/tokens.json`

```json
{
  "colors": {
    "brand": {
      "primary": "#6366f1",
      "secondary": "#8b5cf6",
      "accent": "#06b6d4"
    },
    "semantic": {
      "success": "#10b981",
      "warning": "#f59e0b",
      "error": "#ef4444",
      "info": "#3b82f6"
    },
    "ui": {
      "background": "#ffffff",
      "foreground": "#09090b",
      "card": "#ffffff",
      "border": "#e4e4e7",
      "input": "#e4e4e7",
      "ring": "#6366f1"
    },
    "text": {
      "primary": "#09090b",
      "secondary": "#71717a",
      "muted": "#a1a1aa"
    }
  },
  "typography": {
    "fontFamily": {
      "sans": "'Inter', sans-serif",
      "mono": "'JetBrains Mono', monospace"
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem"
    },
    "fontWeight": {
      "normal": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    }
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "12": "3rem"
  },
  "borderRadius": {
    "sm": "0.125rem",
    "md": "0.375rem",
    "lg": "0.5rem",
    "xl": "0.75rem"
  },
  "boxShadow": {
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
  }
}
```

---

#### **Output 5: Validation Report**
**File**: `docs/tokens/validation-report.md`

```markdown
# Design Token Validation Report
Generated: 2025-12-31

## Completeness Check
✅ All color tokens defined (14/14)
✅ All typography tokens defined (16/16)
✅ All spacing tokens defined (10/10)
✅ All border radius tokens defined (7/7)
✅ All shadow tokens defined (5/5)

## Accessibility Check
✅ Primary text on background: 21:1 (AAA)
✅ Secondary text on background: 7:1 (AA)
✅ Muted text on background: 4.8:1 (AA)
✅ Primary button contrast: 4.5:1 (AA)
⚠️ Warning text on background: 3.2:1 (AA Large only)

## Dark Mode Check
✅ All tokens have dark mode variants
✅ Dark mode contrast ratios meet WCAG AA
✅ Theme toggle implemented

## Recommendations
- Consider increasing warning text contrast for small text
- Add tertiary brand color for more variety
- Define animation tokens for consistent motion

## Coverage
- CSS Variables: 100%
- Tailwind Config: 100%
- TypeScript Types: 100%
- JSON Source: 100%
```

---

### 4. Dark Mode Auto-Generation

**Algorithm**:
1. For each color token in light mode
2. If background/surface → darken
3. If text → lighten
4. If semantic (success/error) → adjust for dark backgrounds
5. Validate contrast ratios
6. Generate dark mode overrides

**Example**:
```css
/* Light Mode */
:root {
  --color-background: #ffffff;
  --color-foreground: #09090b;
  --color-card: #ffffff;
  --color-border: #e4e4e7;
}

/* Dark Mode (auto-generated) */
[data-theme="dark"] {
  --color-background: #09090b;       /* Inverted */
  --color-foreground: #fafafa;       /* Inverted */
  --color-card: #18181b;             /* Slightly lighter than bg */
  --color-border: #27272a;           /* Adjusted for visibility */
}
```

---

### 5. Accessibility Validation

**Contrast Ratio Checks**:
```typescript
// Auto-validate all text/background combinations
const validations = [
  { fg: '--color-text-primary', bg: '--color-background', required: 4.5 },
  { fg: '--color-text-secondary', bg: '--color-background', required: 4.5 },
  { fg: '--color-text-muted', bg: '--color-card', required: 4.5 },
  // ... all combinations
];

validations.forEach(({ fg, bg, required }) => {
  const ratio = calculateContrastRatio(fg, bg);
  if (ratio < required) {
    warn(`${fg} on ${bg}: ${ratio}:1 (needs ${required}:1)`);
  }
});
```

**Output**:
- ✅ All combinations meet WCAG AA
- ⚠️ Warnings for AA Large only
- ❌ Errors for failures (block generation)

---

### 6. Token Sync Strategy

**Workflow**:
```
brand-guidelines.md (source of truth)
         ↓
  parse-tokens.ts (script)
         ↓
  tokens.json (canonical)
         ↓
  ├─→ tokens.css (CSS variables)
  ├─→ tailwind.config.ts (Tailwind)
  ├─→ tokens.ts (TypeScript types)
  └─→ validation-report.md (quality check)
```

**Commands**:
```bash
# Generate all token files
npm run generate:tokens

# Validate tokens
npm run validate:tokens

# Watch for changes (dev mode)
npm run tokens:watch
```

---

### 7. Figma Integration (Optional)

**If Figma Design Tokens Available**:
```typescript
// Import Figma tokens JSON
import figmaTokens from './figma-tokens.json';

// Map Figma → App tokens
const tokens = {
  colors: {
    'brand-primary': figmaTokens.color.primary.value,
    'brand-secondary': figmaTokens.color.secondary.value,
    // ... auto-map
  },
  spacing: {
    '4': figmaTokens.spacing.md.value,
    // ... auto-map
  },
};
```

---

### 8. Token Documentation Generation

**Auto-Generate**: `docs/design-system/tokens.md`

```markdown
# Design Tokens Reference

## Color Tokens

### Brand Colors
- `--color-brand-primary` (#6366f1) - Primary brand color (Indigo)
- `--color-brand-secondary` (#8b5cf6) - Secondary brand color (Purple)
- `--color-brand-accent` (#06b6d4) - Accent color (Cyan)

### Usage
```css
.button-primary {
  background-color: var(--color-brand-primary);
}
```

```tsx
<div className="bg-brand-primary text-white">
  Primary Button
</div>
```

## Typography Tokens

### Font Sizes
- `--text-xs` (0.75rem / 12px) - Captions, labels
- `--text-sm` (0.875rem / 14px) - Body small, secondary text
- `--text-base` (1rem / 16px) - Body text
- `--text-lg` (1.125rem / 18px) - Subheadings

### Usage
```css
.heading {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
}
```

... (complete documentation)
```

---

### 9. Integration with shadcn/ui

**shadcn Token Mapping**:
```css
/* shadcn expects these CSS variables */
:root {
  --background: 0 0% 100%;        /* HSL format */
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --primary: 240 80% 63%;         /* #6366f1 in HSL */
  --secondary: 265 83% 65%;       /* #8b5cf6 in HSL */
  /* ... */
}

/* Our tokens reference shadcn */
:root {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-brand-primary: hsl(var(--primary));
  /* Bidirectional compatibility */
}
```

**Auto-Generation**:
1. Parse brand colors (hex)
2. Convert to HSL
3. Generate shadcn-compatible variables
4. Generate our semantic variables
5. Link them together

---

### 10. Validation Rules

**Before Generation**:
- [ ] All required color tokens defined
- [ ] All font families referenced exist
- [ ] Spacing scale follows 4px grid
- [ ] No hardcoded values
- [ ] All semantic tokens map to primitive tokens

**After Generation**:
- [ ] All CSS variables valid
- [ ] Tailwind config compiles
- [ ] TypeScript types match JSON
- [ ] Contrast ratios meet WCAG AA
- [ ] Dark mode variants exist
- [ ] No duplicate tokens

---

### 11. Token Naming Convention

**Pattern**: `--{category}-{name}-{variant}`

**Examples**:
```css
/* Colors */
--color-brand-primary
--color-text-secondary
--color-border-input

/* Spacing */
--space-4
--space-md

/* Typography */
--text-xl
--font-bold

/* Effects */
--shadow-lg
--radius-md
```

**Rules**:
- Kebab-case only
- Category prefix required
- Semantic names preferred
- No abbreviations unless standard

---

### 12. Performance Optimization

**CSS Variable Strategy**:
```css
/* Define once in :root */
:root {
  --color-primary: #6366f1;
}

/* Reference everywhere (no duplication) */
.button {
  background: var(--color-primary);
}

.badge {
  color: var(--color-primary);
}

/* Runtime theming works instantly */
[data-theme="dark"] {
  --color-primary: #818cf8;  /* Lighter for dark mode */
}
```

**Benefits**:
- Single source of truth
- Instant theme switching
- Smaller CSS bundle
- Type-safe with TypeScript

---

### 13. Migration Strategy

**For Existing Projects**:
1. Audit current hardcoded values
2. Extract unique colors/sizes/etc.
3. Map to semantic token names
4. Generate token files
5. Replace hardcoded → token references
6. Validate no visual changes

**Script**: `npm run migrate:tokens`

---

### 14. Quality Metrics

**Success Criteria**:
- ✅ 100% token coverage (no hardcoded values)
- ✅ WCAG AA compliance (all text/bg combos)
- ✅ Dark mode support (all tokens)
- ✅ Type safety (TypeScript types)
- ✅ Documentation complete
- ✅ Figma sync (if applicable)

---

### 15. Example: Full Generation Flow

**Input**: [`brand-guidelines.md`](brand-guidelines.md )
```markdown
# Staytuned Brand Colors
Primary: #6366f1 (Indigo)
Secondary: #8b5cf6 (Purple)
Accent: #06b6d4 (Cyan)
```

**Command**:
```bash
npm run generate:tokens -- --source brand-guidelines.md
```

**Output** (in 30 seconds):
```
✓ Parsed brand-guidelines.md
✓ Generated tokens.json (52 tokens)
✓ Generated tokens.css (150 lines)
✓ Generated tailwind.config.ts
✓ Generated tokens.ts (TypeScript types)
✓ Generated dark mode variants (52 tokens)
✓ Validated contrast ratios (14/14 passed)
✓ Generated documentation

Summary:
  Colors: 14 tokens (✓ WCAG AA)
  Typography: 16 tokens
  Spacing: 10 tokens
  Effects: 12 tokens
  Total: 52 tokens

Next steps:
  1. Import tokens.css in your app
  2. Use Tailwind classes (bg-brand-primary)
  3. Or use CSS variables (var(--color-brand-primary))
```

---

## Integration with Other Skills

**Upstream** (provides to this skill):
- `brand-guidelines` → Brand colors, typography
- `design-system` → Token specifications
- `aesthetic-director` → Design direction

**Downstream** (this skill provides to):
- `shadcn-integration` → CSS variables for components
- `component-generation-from-specs` → Tailwind classes
- `dark-mode-generation` → Theme tokens
- `brand-application` → Brand-compliant styles

---

## Conclusion

This skill eliminates manual token creation, ensures design consistency, and provides a type-safe, accessible, performant design system foundation for all UI components. Generates complete token infrastructure in under 1 minute vs. hours of manual work.
