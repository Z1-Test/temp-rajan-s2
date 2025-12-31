---
title: Alignment Consistency
description: Ensure pixel-perfect alignment across all UI elements using systematic alignment patterns
tags:
  - frontend
  - alignment
  - layout
  - consistency
  - visual-rhythm
name: alignment-consistency
---

# Alignment Consistency Skill

## What is it?

This skill ensures pixel-perfect alignment across all UI elements, creating visual harmony through consistent alignment patterns, optical corrections, and proper use of CSS alignment properties.

## Why use it?

- **Visual Polish**: Misaligned elements feel unprofessional
- **Readability**: Proper alignment guides the eye naturally
- **Consistency**: Same alignment rules across all components
- **Efficiency**: Audit and fix alignment issues automatically
- **Accessibility**: Proper alignment aids cognitive processing

---

## Alignment Types

### 1. Horizontal Alignment

```css
/* Flex horizontal alignment */
.align-left { justify-content: flex-start; }
.align-center { justify-content: center; }
.align-right { justify-content: flex-end; }
.align-between { justify-content: space-between; }
.align-around { justify-content: space-around; }
.align-evenly { justify-content: space-evenly; }

/* Text alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }
```

### 2. Vertical Alignment

```css
/* Flex vertical alignment */
.valign-top { align-items: flex-start; }
.valign-center { align-items: center; }
.valign-bottom { align-items: flex-end; }
.valign-baseline { align-items: baseline; }
.valign-stretch { align-items: stretch; }

/* Grid alignment */
.place-center { place-items: center; }
.place-start { place-items: start; }
.place-end { place-items: end; }
```

---

## Common Alignment Patterns

### Icon + Text Alignment

```tsx
// ✅ Correct: Icons aligned to text baseline
<button className="inline-flex items-center gap-2">
  <IconPlus className="size-4" aria-hidden="true" />
  <span>Add Item</span>
</button>

// ✅ For larger icons, use optical centering
<button className="inline-flex items-center gap-2">
  <IconPlus className="size-5 -ml-0.5" aria-hidden="true" />
  <span>Add Item</span>
</button>
```

### Form Label + Input Alignment

```tsx
// Horizontal form (label left of input)
<div className="grid grid-cols-[120px_1fr] items-center gap-4">
  <label className="text-right text-sm font-medium">Email</label>
  <Input type="email" />
</div>

// Vertical form (label above input)
<div className="space-y-2">
  <label className="text-sm font-medium">Email</label>
  <Input type="email" />
</div>
```

### Button Group Alignment

```tsx
// Right-aligned action buttons
<div className="flex justify-end gap-3">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</div>

// Split alignment (secondary left, primary right)
<div className="flex justify-between">
  <Button variant="ghost">Delete</Button>
  <div className="flex gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </div>
</div>
```

### Card Content Alignment

```tsx
// Vertically centered card content
<Card className="flex items-center justify-between p-6">
  <div className="flex items-center gap-4">
    <Avatar />
    <div>
      <h3 className="font-semibold">Title</h3>
      <p className="text-sm text-muted-foreground">Subtitle</p>
    </div>
  </div>
  <Button>Action</Button>
</Card>
```

---

## Optical Alignment Corrections

Sometimes mathematically correct alignment doesn't look right. Apply optical corrections:

### Icon in Circle

```tsx
// Play icon needs slight right offset to appear centered
<div className="flex items-center justify-center size-12 rounded-full bg-primary">
  <IconPlay className="size-5 ml-0.5" /> {/* Optical correction */}
</div>
```

### Text Near Icons

```tsx
// Chevron icons need negative margin for optical balance
<button className="flex items-center gap-1">
  <span>Next</span>
  <IconChevronRight className="size-4 -mr-1" />
</button>
```

### Buttons with Icons

```tsx
// Icon-only buttons need equal padding
<Button size="icon" className="p-2.5">
  <IconSettings className="size-5" />
</Button>

// Buttons with text + icon need adjusted padding
<Button className="pl-3 pr-4">
  <IconPlus className="size-4 mr-2" />
  Add Item
</Button>
```

---

## Visual Rhythm (Baseline Grid)

Maintain consistent vertical rhythm:

```css
/* 8px baseline grid */
:root {
  --baseline: 8px;
}

/* All vertical spacing should be multiples of baseline */
--space-1: calc(var(--baseline) * 0.5);  /* 4px */
--space-2: calc(var(--baseline) * 1);    /* 8px */
--space-3: calc(var(--baseline) * 1.5);  /* 12px */
--space-4: calc(var(--baseline) * 2);    /* 16px */
--space-6: calc(var(--baseline) * 3);    /* 24px */
--space-8: calc(var(--baseline) * 4);    /* 32px */

/* Line-height should create consistent rhythm */
body {
  line-height: calc(var(--baseline) * 3); /* 24px */
}

h1 {
  line-height: calc(var(--baseline) * 5); /* 40px */
  margin-bottom: calc(var(--baseline) * 3); /* 24px */
}
```

---

## Alignment Audit Checklist

### ✅ Check These Alignments:

1. **Header elements** aligned on baseline
2. **Navigation items** evenly spaced
3. **Card contents** consistently aligned
4. **Form labels** aligned (left for LTR, right for RTL)
5. **Button icons** vertically centered with text
6. **Table columns** appropriate alignment (text left, numbers right)
7. **Modal actions** consistently positioned (typically bottom-right)
8. **List items** have consistent indentation
9. **Badges** aligned with adjacent text
10. **Avatar + name** vertically centered

### ❌ Common Alignment Issues:

- Icon not vertically centered with text
- Inconsistent button group spacing
- Form labels not aligned with inputs
- Modal content not centered in viewport
- Table headers not aligned with data
- Uneven spacing between navigation items

---

## Tailwind Alignment Classes

```tsx
// Flex alignment
<div className="flex items-center justify-between">...</div>
<div className="flex items-start justify-center">...</div>
<div className="flex items-end justify-end">...</div>

// Grid alignment
<div className="grid place-items-center">...</div>
<div className="grid items-center justify-items-start">...</div>

// Self alignment (individual items)
<div className="self-start">...</div>
<div className="self-center">...</div>
<div className="self-end">...</div>

// Text alignment
<p className="text-left">...</p>
<p className="text-center">...</p>
<p className="text-right">...</p>
```

---

## How to Use

1. **Identify alignment requirements** for each component
2. **Use Flexbox** for 1D alignment (items-center, justify-between)
3. **Use Grid** for 2D alignment (place-items-center)
4. **Apply optical corrections** where needed
5. **Maintain baseline grid** for vertical rhythm
6. **Audit regularly** for alignment inconsistencies

---

## Best Practices

✅ **DO**:
- Use `items-center` for icon + text combinations
- Apply consistent gap values (gap-2, gap-4, gap-6)
- Right-align numbers in tables
- Center modal content vertically and horizontally
- Use `justify-between` for header layouts

❌ **DON'T**:
- Use arbitrary margin values to "fix" alignment
- Mix alignment approaches inconsistently
- Forget baseline alignment for text + icons
- Ignore RTL layout implications
- Hardcode pixel values for alignment
