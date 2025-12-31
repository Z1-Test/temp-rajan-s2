---
title: Input Patterns
description: Form input variants, validation states, and input groups
tags:
  - frontend
  - input
  - form
  - validation
name: input-patterns
---

# Input Patterns Skill

## Basic Inputs

```tsx
// Text input
<Input placeholder="Enter name" />

// Email
<Input type="email" placeholder="email@example.com" />

// Password
<Input type="password" placeholder="••••••••" />

// Disabled
<Input disabled placeholder="Disabled" />
```

## With Label

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>
```

## With Icon

```tsx
// Icon left
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-10" placeholder="Email" />
</div>

// Icon right
<div className="relative">
  <Input className="pr-10" type="password" />
  <button className="absolute right-3 top-1/2 -translate-y-1/2">
    <Eye className="size-4 text-muted-foreground" />
  </button>
</div>
```

## Input Groups

```tsx
// With addon
<div className="flex">
  <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-sm">
    https://
  </span>
  <Input className="rounded-l-none" placeholder="example.com" />
</div>

// With button
<div className="flex">
  <Input className="rounded-r-none" placeholder="Search..." />
  <Button className="rounded-l-none">Search</Button>
</div>
```

## Validation States

```tsx
// Error state
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    className="border-destructive focus-visible:ring-destructive" 
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
    <AlertCircle className="size-4" />
    Please enter a valid email
  </p>
</div>

// Success state
<div className="space-y-2">
  <Label>Username</Label>
  <Input className="border-green-500 focus-visible:ring-green-500" />
  <p className="text-sm text-green-600 flex items-center gap-1">
    <CheckCircle className="size-4" />
    Username is available
  </p>
</div>
```

## Textarea

```tsx
<Textarea placeholder="Enter description..." rows={4} />

// With character count
<div className="space-y-2">
  <Textarea maxLength={500} />
  <p className="text-sm text-muted-foreground text-right">
    {text.length}/500
  </p>
</div>
```

## Select

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

## Best Practices

✅ Always include labels (not just placeholders)  
✅ Use appropriate input types  
✅ Show validation errors inline  
✅ Use aria attributes for accessibility  
❌ Don't use placeholder as label  
❌ Don't hide error messages on focus
