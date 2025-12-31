---
title: Button Patterns
description: Consistent button variants, sizes, and states
tags:
  - frontend
  - buttons
  - cta
  - actions
name: button-patterns
---

# Button Patterns Skill

## Variants

```tsx
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
```

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>
```

## With Icons

```tsx
// Icon left
<Button>
  <Plus className="size-4 mr-2" />
  Add Item
</Button>

// Icon right
<Button>
  Continue
  <ArrowRight className="size-4 ml-2" />
</Button>

// Icon only
<Button size="icon" variant="ghost">
  <Settings className="size-5" />
  <span className="sr-only">Settings</span>
</Button>
```

## States

```tsx
// Loading
<Button disabled>
  <Loader2 className="size-4 mr-2 animate-spin" />
  Loading...
</Button>

// Disabled
<Button disabled>Disabled</Button>
```

## Button Groups

```tsx
// Right aligned
<div className="flex justify-end gap-3">
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</div>

// Full width
<Button className="w-full">Submit</Button>

// Split (destructive separate)
<div className="flex justify-between">
  <Button variant="destructive">Delete</Button>
  <div className="flex gap-3">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </div>
</div>
```

## Best Practices

✅ Use primary for main action  
✅ Use destructive for dangerous actions  
✅ Add loading state for async  
✅ Include sr-only for icon buttons  
❌ Don't use more than 2 primary buttons  
❌ Don't disable without explanation
