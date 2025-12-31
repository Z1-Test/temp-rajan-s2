---
title: Button Patterns
description: Comprehensive button patterns including variants, states, groups, and compositions
tags:
  - frontend
  - buttons
  - cta
  - actions
  - interactions
name: button-patterns
---

# Button Patterns Skill

## Button Variants

| Variant | Use Case | Example |
|---------|----------|---------|
| `default` | Primary actions | Submit, Save, Create |
| `secondary` | Secondary actions | Cancel, Back |
| `outline` | Tertiary actions | Edit, Settings |
| `ghost` | Subtle actions | Icon buttons, menu items |
| `destructive` | Dangerous actions | Delete, Remove |
| `link` | Navigation-like | See more, Learn more |

```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
```

## Button Sizes

| Size | Height | Use Case |
|------|--------|----------|
| `sm` | 32px | Compact UI, tables |
| `default` | 40px | Standard buttons |
| `lg` | 48px | Hero CTA, prominent |
| `icon` | 40x40px | Icon-only buttons |

```tsx
<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Settings className="size-5" /></Button>
```

## Button with Icons

```tsx
// Icon before text
<Button>
  <Plus className="mr-2 size-4" />
  Add Item
</Button>

// Icon after text
<Button>
  Continue
  <ArrowRight className="ml-2 size-4" />
</Button>

// Icon only (must have sr-only text)
<Button size="icon" variant="ghost">
  <Settings className="size-5" />
  <span className="sr-only">Settings</span>
</Button>
```

## Button States

```tsx
// Loading state
<Button disabled>
  <Loader2 className="mr-2 size-4 animate-spin" />
  Loading...
</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Success state (temporary)
<Button className="bg-green-600 hover:bg-green-600">
  <Check className="mr-2 size-4" />
  Saved!
</Button>
```

## Button Groups

```tsx
// Horizontal group (gap-based)
<div className="flex gap-3">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</div>

// Split actions (justify-between)
<div className="flex justify-between">
  <Button variant="ghost" className="text-destructive">Delete</Button>
  <div className="flex gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </div>
</div>

// Attached buttons
<div className="flex">
  <Button className="rounded-r-none">Left</Button>
  <Button className="rounded-none border-x-0">Middle</Button>
  <Button className="rounded-l-none">Right</Button>
</div>
```

## Special Button Types

```tsx
// Full-width button
<Button className="w-full">Full Width Action</Button>

// Button as link
<Button asChild>
  <Link href="/page">Navigate</Link>
</Button>

// Floating action button
<Button 
  size="icon" 
  className="fixed bottom-6 right-6 size-14 rounded-full shadow-lg"
>
  <Plus className="size-6" />
</Button>
```

## Best Practices

✅ One primary CTA per section  
✅ Verb-based button text (Save, Create, Delete)  
✅ Loading state for async actions  
✅ Icon + text for clarity  
❌ Don't use destructive for non-dangerous actions  
❌ Don't have multiple primary buttons competing
