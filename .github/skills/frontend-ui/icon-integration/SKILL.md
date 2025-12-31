---
title: Icon Integration
description: Consistent icon usage with Lucide React icons
tags:
  - frontend
  - icons
  - lucide
  - visual
name: icon-integration
---

# Icon Integration Skill

## What is it?

This skill provides patterns for consistent icon usage using Lucide React icons, ensuring proper sizing, alignment, and accessibility.

## Why use it?

- **Consistency**: Same icon style everywhere
- **Accessibility**: Proper aria labels
- **Performance**: Tree-shakeable icons
- **Alignment**: Correct sizing with text
- **Semantics**: Icons enhance meaning

---

## Icon Library: Lucide React

```bash
npm install lucide-react
```

### Basic Usage

```tsx
import { Home, Settings, User, Plus, Search } from 'lucide-react';

// Direct usage
<Home className="size-5" />

// With text
<Button>
  <Plus className="mr-2 size-4" />
  Add Item
</Button>
```

---

## Icon Sizing

| Context | Class | Size | Usage |
|---------|-------|------|-------|
| Inline text | `size-4` | 16px | Buttons, badges, inline |
| Standalone | `size-5` | 20px | Menus, cards |
| Large | `size-6` | 24px | Headers, empty states |
| Hero | `size-8` to `size-12` | 32-48px | Empty states, errors |

```tsx
// Inline with text
<span className="flex items-center gap-2">
  <Check className="size-4" />
  Completed
</span>

// Button icon
<Button>
  <Plus className="size-4 mr-2" />
  Add
</Button>

// Icon-only button
<Button size="icon">
  <Settings className="size-5" />
</Button>

// Large (empty state)
<div className="flex flex-col items-center">
  <Inbox className="size-12 text-muted-foreground" />
  <p className="mt-4">No messages</p>
</div>
```

---

## Icon + Text Alignment

```tsx
// ✅ Correct: flex items-center
<div className="flex items-center gap-2">
  <Mail className="size-4" />
  <span>Contact us</span>
</div>

// ✅ Button with icon
<Button>
  <Download className="size-4 mr-2" />
  Download
</Button>

// ✅ Icon after text
<Button variant="ghost">
  Next
  <ChevronRight className="size-4 ml-1" />
</Button>

// ✅ Icon-only with tooltip
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <Settings className="size-5" />
      <span className="sr-only">Settings</span>
    </Button>
  </TooltipTrigger>
  <TooltipContent>Settings</TooltipContent>
</Tooltip>
```

---

## Semantic Icon Usage

### Actions

```tsx
// Create/Add
<Plus className="size-4" />

// Edit
<Pencil className="size-4" />

// Delete
<Trash2 className="size-4" />

// Save
<Save className="size-4" />

// Close/Cancel
<X className="size-4" />

// Search
<Search className="size-4" />

// Filter
<Filter className="size-4" />

// Sort
<ArrowUpDown className="size-4" />
```

### Status

```tsx
// Success
<CheckCircle className="size-4 text-green-500" />

// Error
<XCircle className="size-4 text-destructive" />

// Warning
<AlertTriangle className="size-4 text-yellow-500" />

// Info
<Info className="size-4 text-blue-500" />

// Loading
<Loader2 className="size-4 animate-spin" />
```

### Navigation

```tsx
// Home
<Home className="size-5" />

// Back
<ArrowLeft className="size-5" />

// Menu
<Menu className="size-5" />

// More options
<MoreHorizontal className="size-5" />
<MoreVertical className="size-5" />

// Expand/Collapse
<ChevronDown className="size-4" />
<ChevronRight className="size-4" />
```

### Objects

```tsx
// User/Profile
<User className="size-5" />
<Users className="size-5" />

// Settings
<Settings className="size-5" />

// Notifications
<Bell className="size-5" />

// Mail
<Mail className="size-5" />

// File/Document
<FileText className="size-5" />
<Folder className="size-5" />

// Calendar
<Calendar className="size-5" />

// Clock
<Clock className="size-5" />
```

---

## Icon Colors

```tsx
// Inherit color (default)
<Icon className="size-4" /> // Uses text color

// Muted (secondary)
<Icon className="size-4 text-muted-foreground" />

// Primary brand
<Icon className="size-4 text-primary" />

// Status colors
<CheckCircle className="size-4 text-green-500" />
<XCircle className="size-4 text-destructive" />
<AlertTriangle className="size-4 text-yellow-500" />
<Info className="size-4 text-blue-500" />
```

---

## Icon Buttons

```tsx
// Small icon button
<Button variant="ghost" size="icon" className="size-8">
  <X className="size-4" />
</Button>

// Default icon button
<Button variant="ghost" size="icon">
  <Settings className="size-5" />
</Button>

// Large icon button
<Button variant="ghost" size="icon" className="size-12">
  <Menu className="size-6" />
</Button>

// Icon button with badge
<Button variant="ghost" size="icon" className="relative">
  <Bell className="size-5" />
  <span className="absolute -right-1 -top-1 size-4 rounded-full bg-destructive text-[10px] text-destructive-foreground flex items-center justify-center">
    3
  </span>
</Button>
```

---

## Accessibility

```tsx
// Icon-only buttons MUST have sr-only text
<Button variant="ghost" size="icon">
  <Trash2 className="size-4" />
  <span className="sr-only">Delete item</span>
</Button>

// Decorative icons should be hidden
<div className="flex items-center gap-2">
  <CheckCircle className="size-4 text-green-500" aria-hidden="true" />
  <span>Task completed</span>
</div>

// Icons that convey meaning need labels
<span role="img" aria-label="Warning">
  <AlertTriangle className="size-4 text-yellow-500" />
</span>
```

---

## Common Patterns

### Menu Item

```tsx
<DropdownMenuItem>
  <Settings className="mr-2 size-4" />
  Settings
</DropdownMenuItem>
```

### List Item

```tsx
<li className="flex items-center gap-3 py-2">
  <div className="flex size-8 items-center justify-center rounded-full bg-muted">
    <FileText className="size-4" />
  </div>
  <span>Document.pdf</span>
</li>
```

### Status Badge

```tsx
<Badge variant="outline" className="gap-1">
  <Circle className="size-2 fill-green-500 text-green-500" />
  Active
</Badge>
```

### Input with Icon

```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-10" placeholder="Search..." />
</div>
```

---

## Best Practices

✅ **DO**:
- Use consistent size-4 for inline, size-5 for standalone
- Add mr-2 when icon precedes text
- Add ml-1 when icon follows text
- Use aria-hidden for decorative icons
- Add sr-only text for icon-only buttons

❌ **DON'T**:
- Mix icon libraries in same project
- Use arbitrary pixel sizes
- Forget accessibility labels
- Use icons without clear meaning
- Make icons too small to see
