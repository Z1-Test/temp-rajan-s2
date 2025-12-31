---
title: UI Polish Mastery
description: Advanced spacing, alignment, and visual polish knowledge with common mistakes and fixes
tags:
  - frontend
  - spacing
  - alignment
  - polish
  - mastery
name: ui-polish-mastery
---

# UI Polish Mastery Skill

## What is it?

Advanced skill for mastering spacing, alignment, and visual polish. Goes beyond basic rules to cover common mistakes, optical corrections, and component-specific patterns.

---

## Common Spacing Mistakes & Fixes

### Button Issues

| Problem | Before | After | Fix |
|---------|--------|-------|-----|
| Icon off-center | `<Icon />` | `<Icon className="ml-0.5" />` | Optical correction |
| Uneven padding | `px-3 py-3` | `px-4 py-2` | Standard button ratio |
| No icon gap | `<Icon />Text` | `<Icon className="mr-2" />Text` | Add consistent gap |

### Card Issues

| Problem | Before | After | Fix |
|---------|--------|-------|-----|
| Mixed padding | `p-4`, `p-5`, `p-6` | Always `p-6` | Consistent card padding |
| Cramped content | `space-y-2` | `space-y-4` | Standard content gap |
| No header gap | Header touching content | `pb-4` on header | Separator spacing |

### Form Issues

| Problem | Before | After | Fix |
|---------|--------|-------|-----|
| Label too close | `space-y-1` | `space-y-2` | Label-input gap |
| Fields cramped | `space-y-2` | `space-y-4` | Field-to-field gap |
| No error space | Error pushes content | Reserve `min-h-[20px]` | Error placeholder |

---

## Optical Alignment Corrections

Some elements need optical corrections to *look* centered even if they're mathematically aligned:

### Play Button (Triangle)

```tsx
// ❌ Looks off-center
<div className="flex items-center justify-center">
  <Play className="size-6" />
</div>

// ✅ Optically centered
<div className="flex items-center justify-center">
  <Play className="size-6 ml-1" />
</div>
```

### Chevron Icons

```tsx
// ❌ Too much space on right
<Button>Next <ChevronRight /></Button>

// ✅ Tighter optical spacing
<Button>Next <ChevronRight className="-mr-1 ml-1" /></Button>
```

### Checkbox/Radio + Label

```tsx
// ❌ Baseline misalignment
<div className="flex gap-2">
  <Checkbox />
  <label>Option text</label>
</div>

// ✅ Proper alignment
<label className="flex items-start gap-2">
  <Checkbox className="mt-0.5" />
  <span>Option text</span>
</label>
```

---

## Component Spacing Rules

### Card Anatomy

```
┌──────────────────────────────────┐
│         p-6 (24px)               │
│  ┌──────────────────────────┐   │
│  │  CardHeader              │   │
│  │  pb-4 (separator)        │   │
│  ├──────────────────────────┤   │
│  │  CardContent             │   │
│  │  space-y-4 (internal)    │   │
│  ├──────────────────────────┤   │
│  │  CardFooter              │   │
│  │  pt-6 (separator)        │   │
│  └──────────────────────────┘   │
│                                  │
└──────────────────────────────────┘
```

```tsx
<Card className="p-6">
  <CardHeader className="p-0 pb-4">...</CardHeader>
  <CardContent className="p-0 space-y-4">...</CardContent>
  <CardFooter className="p-0 pt-6">...</CardFooter>
</Card>
```

### Form Anatomy

```
┌─────────────────────────────────────┐
│                                     │
│  Label              space-y-2       │
│  ────────────────                   │
│  Input                              │
│  Helper text                        │
│                                     │
│              space-y-4              │
│                                     │
│  Label                              │
│  ────────────────                   │
│  Input                              │
│                                     │
│              space-y-6              │
│                                     │
│  [Cancel]  [Submit]   gap-3         │
│                                     │
└─────────────────────────────────────┘
```

### Header Anatomy

```
┌─────────────────────────────────────────────────────┐
│  h-16 (64px)  │  px-6  │  flex items-center        │
├───────────────┴────────┴────────────────────────────┤
│                                                     │
│  [Logo]          [Nav items]           [Actions]    │
│                  gap-6                  gap-4       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Spacing Relationships

### Parent-Child Ratio

| Parent Padding | Child Gap | Example |
|----------------|-----------|---------|
| `p-4` | `space-y-2` | Compact components |
| `p-6` | `space-y-4` | Standard cards |
| `p-8` | `space-y-6` | Spacious sections |

**Rule**: Child gap = Parent padding ÷ 1.5

### Sibling Spacing

| Relationship | Gap | Example |
|--------------|-----|---------|
| Tightly related | `gap-2` | Icon + label |
| Related | `gap-3` | Button group |
| Grouped | `gap-4` | Form fields |
| Sectioned | `gap-6` | Card grid |
| Separated | `gap-8` | Page sections |

### Section Spacing

| Section Level | Margin | Example |
|---------------|--------|---------|
| Within component | `space-y-4` | Card content items |
| Between components | `space-y-6` | Cards in a list |
| Between sections | `space-y-12` | Dashboard sections |
| Between page parts | `space-y-16` | Hero → Features |

---

## Visual Rhythm Patterns

### Consistent Heights

| Element | Height | Class |
|---------|--------|-------|
| Small button | 32px | `h-8` |
| Default button | 40px | `h-10` |
| Large button | 48px | `h-12` |
| Input | 40px | `h-10` |
| Header | 64px | `h-16` |
| Card row | 64px | `h-16` or `py-4` |

### Consistent Widths

| Element | Width | Class |
|---------|-------|-------|
| Sidebar | 256px | `w-64` |
| Sidebar collapsed | 64px | `w-16` |
| Modal sm | 400px | `max-w-sm` |
| Modal md | 512px | `max-w-md` |
| Modal lg | 640px | `max-w-lg` |
| Content max | 1280px | `max-w-screen-xl` |

---

## Polish Checklist

### Before Considering Done:

- [ ] All padding uses tokens (no arbitrary values)
- [ ] Card padding consistent (`p-6` standard)
- [ ] Form label-input gap is `space-y-2`
- [ ] Form field-to-field gap is `space-y-4`
- [ ] Button icons have `mr-2` or `ml-2`
- [ ] Icon-only buttons have equal padding
- [ ] Chevrons have optical margin corrections
- [ ] Headers are `h-16` with `px-6`
- [ ] Sections have `space-y-12` or more

---

## Quick Reference

```tsx
// Button with icon
<Button><Plus className="mr-2 size-4" />Add</Button>

// Icon button
<Button size="icon"><Settings className="size-5" /></Button>

// Card
<Card className="p-6"><CardContent className="space-y-4">...</CardContent></Card>

// Form field
<div className="space-y-2">
  <Label>Name</Label>
  <Input />
</div>

// Form
<form className="space-y-4">...</form>

// Button group
<div className="flex gap-3">...</div>

// Page sections
<div className="space-y-12">...</div>
```
