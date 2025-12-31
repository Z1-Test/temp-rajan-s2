---
title: Typography Hierarchy
description: Establish clear typographic hierarchy with proper font pairing, type scale, and readability
tags:
  - frontend
  - typography
  - fonts
  - hierarchy
  - readability
name: typography-hierarchy
---

# Typography Hierarchy Skill

## What is it?

This skill establishes clear typographic hierarchy, ensuring content is readable and scannable through proper font selection, sizing, spacing, and visual weight distribution.

## Why use it?

- **Readability**: Users scan before they read
- **Hierarchy**: Guide attention through size and weight
- **Professionalism**: Good typography feels trustworthy
- **Accessibility**: Proper sizing helps all users
- **Brand**: Typography conveys personality

---

## Font Pairing

### Recommended Pairings

| Display/Headings | Body Text | Use Case |
|------------------|-----------|----------|
| Plus Jakarta Sans | Inter | Modern SaaS |
| Space Grotesk | Inter | Tech/Developer |
| Outfit | DM Sans | Friendly/Approachable |
| Cal Sans | Inter | Bold/Startup |
| Playfair Display | Source Sans 3 | Elegant/Editorial |

### Font Stack Definition

```css
:root {
  /* Primary font for body text */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Display font for headings */
  --font-display: 'Plus Jakarta Sans', var(--font-sans);
  
  /* Monospace for code */
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}

/* Usage */
h1, h2, h3 { font-family: var(--font-display); }
body { font-family: var(--font-sans); }
code, pre { font-family: var(--font-mono); }
```

---

## Type Scale (Modular Scale)

```css
/* Perfect fourth ratio (1.333) */
:root {
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
}
```

### Fluid Typography (Responsive)

```css
/* Scales smoothly between viewport sizes */
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.6vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
--text-5xl: clamp(3rem, 2rem + 5vw, 5rem);
```

---

## Heading Hierarchy

```tsx
// h1 - Page title (one per page)
<h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
  Page Title
</h1>

// h2 - Section headers
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
  Section Title
</h2>

// h3 - Subsection headers
<h3 className="text-xl lg:text-2xl font-semibold">
  Subsection Title
</h3>

// h4 - Card/component headers
<h4 className="text-lg font-semibold">
  Card Title
</h4>

// h5 - Small headers
<h5 className="text-base font-semibold">
  Small Header
</h5>

// h6 - Micro headers (rarely used)
<h6 className="text-sm font-semibold uppercase tracking-wide">
  Category Label
</h6>
```

---

## Font Weights

```css
:root {
  --font-normal: 400;    /* Body text */
  --font-medium: 500;    /* Slightly emphasized */
  --font-semibold: 600;  /* Subheadings, buttons */
  --font-bold: 700;      /* Headlines, strong emphasis */
}
```

### Weight Usage Guidelines

| Weight | Use Case |
|--------|----------|
| 400 (Regular) | Body text, paragraphs |
| 500 (Medium) | Navigation, form labels |
| 600 (Semibold) | Buttons, card titles, h4-h6 |
| 700 (Bold) | h1-h3, strong emphasis |

---

## Line Height (Leading)

```css
:root {
  --leading-none: 1;       /* Headlines only */
  --leading-tight: 1.25;   /* Large headings */
  --leading-snug: 1.375;   /* Small headings */
  --leading-normal: 1.5;   /* Body text */
  --leading-relaxed: 1.625; /* Long-form content */
  --leading-loose: 2;       /* Spacey layouts */
}
```

```tsx
// Headlines - tight leading
<h1 className="text-5xl font-bold leading-tight">{title}</h1>

// Body text - normal leading
<p className="text-base leading-normal">{content}</p>

// Long-form - relaxed leading
<article className="prose leading-relaxed">{article}</article>
```

---

## Letter Spacing (Tracking)

```css
:root {
  --tracking-tighter: -0.05em;  /* Large headlines */
  --tracking-tight: -0.025em;   /* Medium headings */
  --tracking-normal: 0;         /* Body text */
  --tracking-wide: 0.025em;     /* Uppercase labels */
  --tracking-wider: 0.05em;     /* Small caps */
}
```

```tsx
// Large headlines need tighter tracking
<h1 className="text-5xl tracking-tight">Big Headline</h1>

// Uppercase text needs wider tracking
<span className="text-xs uppercase tracking-wide">Category</span>
```

---

## Paragraph Styling

```tsx
// Standard paragraph
<p className="text-base text-foreground leading-normal">
  Regular paragraph text with comfortable reading width.
</p>

// Lead/intro paragraph
<p className="text-lg text-muted-foreground leading-relaxed">
  A larger intro paragraph that sets the context.
</p>

// Small/caption text
<p className="text-sm text-muted-foreground">
  Small supporting text or captions.
</p>

// Optimal line length (45-75 characters)
<p className="max-w-prose">
  Long-form content should be constrained to comfortable reading width.
</p>
```

---

## Text Hierarchy Components

```tsx
// Page header component
function PageHeader({ title, description }) {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}

// Section header component
function SectionHeader({ title, subtitle }) {
  return (
    <header className="space-y-1">
      <h2 className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
}
```

---

## Code Typography

```css
/* Monospace font for code */
code, pre {
  font-family: var(--font-mono);
  font-size: 0.875em; /* Slightly smaller than body */
}

/* Inline code */
code:not(pre code) {
  background: var(--muted);
  padding: 0.2em 0.4em;
  border-radius: var(--radius-sm);
  font-size: 0.9em;
}

/* Code blocks */
pre {
  background: var(--card);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  overflow-x: auto;
  line-height: 1.6;
}
```

---

## Typography Checklist

✅ **Structure**:
- [ ] One h1 per page
- [ ] Logical heading order (h1 → h2 → h3, no skipping)
- [ ] Descriptive heading text (not just "Section 1")

✅ **Readability**:
- [ ] Body text 16px minimum
- [ ] Line length 45-75 characters
- [ ] Adequate line height (1.5 for body)
- [ ] Sufficient color contrast

✅ **Hierarchy**:
- [ ] Clear visual distinction between heading levels
- [ ] Consistent font weights throughout
- [ ] Supporting text styled differently from headings

---

## Tailwind Typography Classes

```tsx
// Headings
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">

// Paragraphs
<p className="leading-7 [&:not(:first-child)]:mt-6">

// Blockquote
<blockquote className="mt-6 border-l-2 pl-6 italic">

// List
<ul className="my-6 ml-6 list-disc [&>li]:mt-2">

// Code
<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
```

---

## How to Use

1. **Choose font pairing** appropriate for brand
2. **Define type scale** using modular ratio
3. **Apply heading hierarchy** consistently
4. **Set line heights** for readability
5. **Constrain line length** for comfortable reading
6. **Test at multiple sizes** for responsiveness

---

## Best Practices

✅ **DO**:
- Use one h1 per page
- Keep body text at 16px minimum
- Limit to 2-3 font families maximum
- Use font-display: swap for web fonts
- Test with real content, not lorem ipsum

❌ **DON'T**:
- Skip heading levels (h1 → h3)
- Use too many font weights
- Center long paragraphs
- Use pure black for body text
- Forget about font loading performance
