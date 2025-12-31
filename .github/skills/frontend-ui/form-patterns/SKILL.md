---
title: Form Patterns
description: Complete form patterns including inputs, layouts, validation, and accessibility
tags:
  - frontend
  - form
  - input
  - validation
  - layout
name: form-patterns
---

# Form Patterns Skill

> **Merged from**: `input-patterns` + `form-layout-generation`

## Input Types

```tsx
<Input placeholder="Text" />
<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="••••••••" />
<Input disabled placeholder="Disabled" />
<Textarea placeholder="Description..." rows={4} />
```

## Input with Label

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>
```

## Input with Icon

```tsx
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-10" placeholder="Email" />
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
// Error
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

// Success
<div className="space-y-2">
  <Label>Username</Label>
  <Input className="border-green-500 focus-visible:ring-green-500" />
  <p className="text-sm text-green-600 flex items-center gap-1">
    <CheckCircle className="size-4" />
    Username is available
  </p>
</div>
```

---

## Form Layouts

### Single Column (Default)

```tsx
<form className="space-y-6 max-w-md">
  <div className="space-y-2">
    <Label>Full Name</Label>
    <Input placeholder="John Doe" />
  </div>
  <div className="space-y-2">
    <Label>Email</Label>
    <Input type="email" />
  </div>
  <Button type="submit" className="w-full">Submit</Button>
</form>
```

### Two Column Grid

```tsx
<form className="space-y-6 max-w-2xl">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label>First Name</Label>
      <Input />
    </div>
    <div className="space-y-2">
      <Label>Last Name</Label>
      <Input />
    </div>
  </div>
  <div className="space-y-2">
    <Label>Email</Label>
    <Input type="email" className="w-full" />
  </div>
</form>
```

### Sectioned Form

```tsx
<form className="space-y-8 max-w-2xl">
  <section className="space-y-4">
    <h2 className="text-lg font-semibold border-b pb-2">Personal Info</h2>
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>First Name</Label>
        <Input />
      </div>
      <div className="space-y-2">
        <Label>Last Name</Label>
        <Input />
      </div>
    </div>
  </section>
  
  <section className="space-y-4">
    <h2 className="text-lg font-semibold border-b pb-2">Address</h2>
    {/* Address fields */}
  </section>
</form>
```

---

## Button Alignment

```tsx
// Right-aligned (most common)
<div className="flex justify-end gap-3 pt-6">
  <Button type="button" variant="outline">Cancel</Button>
  <Button type="submit">Save</Button>
</div>

// Full-width
<div className="space-y-3 pt-6">
  <Button type="submit" className="w-full">Submit</Button>
  <Button type="button" variant="outline" className="w-full">Cancel</Button>
</div>

// Split (destructive far left)
<div className="flex justify-between pt-6">
  <Button type="button" variant="destructive">Delete</Button>
  <div className="flex gap-3">
    <Button variant="outline">Cancel</Button>
    <Button type="submit">Save</Button>
  </div>
</div>
```

---

## Required Field Indicator

```tsx
<Label>
  Email
  <span className="text-destructive ml-1" aria-hidden="true">*</span>
  <span className="sr-only">(required)</span>
</Label>
```

---

## Accessibility Requirements

- [ ] All inputs have associated labels (`htmlFor`/`id`)
- [ ] Required fields indicated visually AND for screen readers
- [ ] Error messages linked to inputs (`aria-describedby`)
- [ ] Invalid state indicated (`aria-invalid`)
- [ ] Focus moves to first error on submit

---

## Best Practices

✅ Use single column for most forms  
✅ Keep labels above inputs  
✅ Show validation errors inline  
✅ Include clear help text  
✅ Use proper input types  
❌ Don't use placeholder as label  
❌ Don't hide labels  
❌ Don't disable submit until valid
