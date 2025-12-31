---
title: Form Layout Generation
description: Generate accessible, well-aligned form layouts with proper validation UI
tags:
  - frontend
  - form
  - layout
  - validation
  - accessibility
name: form-layout-generation
---

# Form Layout Generation Skill

## What is it?

This skill generates accessible, well-aligned form layouts with proper label positioning, error handling, and validation UI patterns.

## Why use it?

- **Consistency**: All forms follow same patterns
- **Accessibility**: WCAG-compliant from the start
- **Speed**: No reinventing form layouts
- **UX**: Proven patterns for usability
- **Validation**: Built-in error state handling

---

## Form Layout Patterns

### 1. Single Column (Stacked)

```tsx
<form className="space-y-6 max-w-md">
  <FormField>
    <FormLabel>Full Name</FormLabel>
    <FormControl>
      <Input placeholder="John Doe" />
    </FormControl>
    <FormMessage />
  </FormField>
  
  <FormField>
    <FormLabel>Email</FormLabel>
    <FormControl>
      <Input type="email" placeholder="john@example.com" />
    </FormControl>
    <FormDescription>We'll never share your email.</FormDescription>
    <FormMessage />
  </FormField>
  
  <Button type="submit" className="w-full">Submit</Button>
</form>
```

### 2. Two Column Grid

```tsx
<form className="space-y-6 max-w-2xl">
  <div className="grid grid-cols-2 gap-4">
    <FormField>
      <FormLabel>First Name</FormLabel>
      <FormControl>
        <Input placeholder="John" />
      </FormControl>
    </FormField>
    
    <FormField>
      <FormLabel>Last Name</FormLabel>
      <FormControl>
        <Input placeholder="Doe" />
      </FormControl>
    </FormField>
  </div>
  
  <FormField>
    <FormLabel>Email</FormLabel>
    <FormControl>
      <Input type="email" className="w-full" />
    </FormControl>
  </FormField>
  
  <div className="grid grid-cols-2 gap-4">
    <FormField>
      <FormLabel>Country</FormLabel>
      <Select>...</Select>
    </FormField>
    
    <FormField>
      <FormLabel>State</FormLabel>
      <Select>...</Select>
    </FormField>
  </div>
</form>
```

### 3. Horizontal Form (Label Left)

```tsx
<form className="space-y-4 max-w-xl">
  <div className="grid grid-cols-[140px_1fr] items-center gap-4">
    <FormLabel className="text-right">Email</FormLabel>
    <Input type="email" />
  </div>
  
  <div className="grid grid-cols-[140px_1fr] items-center gap-4">
    <FormLabel className="text-right">Password</FormLabel>
    <Input type="password" />
  </div>
  
  <div className="grid grid-cols-[140px_1fr] items-center gap-4">
    <div /> {/* Empty cell for alignment */}
    <Button type="submit">Sign In</Button>
  </div>
</form>
```

### 4. Inline Form

```tsx
<form className="flex flex-wrap items-end gap-4">
  <FormField className="flex-1 min-w-[200px]">
    <FormLabel>Email</FormLabel>
    <Input type="email" placeholder="Enter email" />
  </FormField>
  
  <Button type="submit">Subscribe</Button>
</form>
```

### 5. Sectioned Form

```tsx
<form className="space-y-8 max-w-2xl">
  {/* Section 1: Personal Info */}
  <section className="space-y-4">
    <h2 className="text-lg font-semibold border-b pb-2">Personal Information</h2>
    <div className="grid grid-cols-2 gap-4">
      <FormField>
        <FormLabel>First Name</FormLabel>
        <Input />
      </FormField>
      <FormField>
        <FormLabel>Last Name</FormLabel>
        <Input />
      </FormField>
    </div>
    <FormField>
      <FormLabel>Email</FormLabel>
      <Input type="email" />
    </FormField>
  </section>
  
  {/* Section 2: Address */}
  <section className="space-y-4">
    <h2 className="text-lg font-semibold border-b pb-2">Address</h2>
    <FormField>
      <FormLabel>Street Address</FormLabel>
      <Input />
    </FormField>
    <div className="grid grid-cols-3 gap-4">
      <FormField>
        <FormLabel>City</FormLabel>
        <Input />
      </FormField>
      <FormField>
        <FormLabel>State</FormLabel>
        <Select>...</Select>
      </FormField>
      <FormField>
        <FormLabel>ZIP</FormLabel>
        <Input />
      </FormField>
    </div>
  </section>
</form>
```

---

## Label Positioning

### Top Labels (Default - Recommended)

```tsx
<FormField className="space-y-2">
  <FormLabel>Email Address</FormLabel>
  <Input type="email" />
  <FormDescription>Your primary email</FormDescription>
</FormField>
```

### Left Labels (Horizontal)

```tsx
<div className="grid grid-cols-[120px_1fr] items-center gap-4">
  <FormLabel className="text-right">Email</FormLabel>
  <div className="space-y-1">
    <Input type="email" />
    <FormDescription>Your primary email</FormDescription>
  </div>
</div>
```

### Floating Labels

```tsx
<div className="relative">
  <Input
    id="email"
    type="email"
    placeholder=" "
    className="peer pt-6"
  />
  <Label
    htmlFor="email"
    className="
      absolute left-3 top-4
      text-muted-foreground text-sm
      transition-all duration-200
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
      peer-focus:top-4 peer-focus:text-sm peer-focus:text-primary
    "
  >
    Email Address
  </Label>
</div>
```

---

## Input Groups

### With Addon

```tsx
<div className="flex">
  <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-muted text-muted-foreground text-sm">
    https://
  </span>
  <Input className="rounded-l-none" placeholder="example.com" />
</div>

{/* With button */}
<div className="flex">
  <Input className="rounded-r-none" placeholder="Search..." />
  <Button className="rounded-l-none">Search</Button>
</div>
```

### With Icon

```tsx
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-10" type="email" placeholder="Email" />
</div>

{/* Icon right */}
<div className="relative">
  <Input className="pr-10" type="password" />
  <Button
    type="button"
    variant="ghost"
    size="icon"
    className="absolute right-0 top-0 h-full px-3"
    onClick={togglePassword}
  >
    <Eye className="size-4" />
  </Button>
</div>
```

---

## Error State Handling

### Field-Level Errors

```tsx
<FormField>
  <FormLabel>Email</FormLabel>
  <FormControl>
    <Input
      type="email"
      className={errors.email ? 'border-destructive' : ''}
      aria-invalid={!!errors.email}
      aria-describedby="email-error"
    />
  </FormControl>
  {errors.email && (
    <FormMessage id="email-error" className="text-destructive flex items-center gap-1">
      <AlertCircle className="size-4" />
      {errors.email.message}
    </FormMessage>
  )}
</FormField>
```

### Form-Level Error Summary

```tsx
{Object.keys(errors).length > 0 && (
  <Alert variant="destructive">
    <AlertCircle className="size-4" />
    <AlertTitle>Please fix the following errors:</AlertTitle>
    <AlertDescription>
      <ul className="list-disc list-inside">
        {Object.values(errors).map((error, i) => (
          <li key={i}>{error.message}</li>
        ))}
      </ul>
    </AlertDescription>
  </Alert>
)}
```

---

## Required Field Indicators

```tsx
<FormLabel>
  Email Address
  <span className="text-destructive ml-1" aria-hidden="true">*</span>
  <span className="sr-only">(required)</span>
</FormLabel>

{/* Or using CSS */}
<FormLabel className="after:content-['*'] after:ml-0.5 after:text-destructive">
  Email Address
</FormLabel>
```

---

## Help Text Patterns

```tsx
{/* Below input */}
<FormField>
  <FormLabel>Password</FormLabel>
  <Input type="password" />
  <FormDescription>Must be at least 8 characters</FormDescription>
</FormField>

{/* Tooltip help */}
<FormField>
  <div className="flex items-center gap-2">
    <FormLabel>API Key</FormLabel>
    <Tooltip>
      <TooltipTrigger>
        <HelpCircle className="size-4 text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent>
        Find this in your account settings
      </TooltipContent>
    </Tooltip>
  </div>
  <Input />
</FormField>
```

---

## Button Alignment

```tsx
{/* Right-aligned (most common) */}
<div className="flex justify-end gap-3 pt-6">
  <Button type="button" variant="outline">Cancel</Button>
  <Button type="submit">Save Changes</Button>
</div>

{/* Full-width (mobile-friendly) */}
<div className="space-y-3 pt-6">
  <Button type="submit" className="w-full">Create Account</Button>
  <Button type="button" variant="outline" className="w-full">Cancel</Button>
</div>

{/* Split (destructive action far) */}
<div className="flex justify-between pt-6">
  <Button type="button" variant="destructive">Delete</Button>
  <div className="flex gap-3">
    <Button type="button" variant="outline">Cancel</Button>
    <Button type="submit">Save</Button>
  </div>
</div>
```

---

## Responsive Form Layouts

```tsx
<form className="space-y-6">
  {/* Stack on mobile, side-by-side on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <FormField>
      <FormLabel>First Name</FormLabel>
      <Input />
    </FormField>
    <FormField>
      <FormLabel>Last Name</FormLabel>
      <Input />
    </FormField>
  </div>
  
  {/* Address fields: 1 col → 2 col → 3 col */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <FormField className="sm:col-span-2 lg:col-span-1">
      <FormLabel>City</FormLabel>
      <Input />
    </FormField>
    <FormField>
      <FormLabel>State</FormLabel>
      <Select>...</Select>
    </FormField>
    <FormField>
      <FormLabel>ZIP</FormLabel>
      <Input />
    </FormField>
  </div>
</form>
```

---

## Accessibility Requirements

### ✅ Required for All Forms:

- [ ] All inputs have associated labels (`htmlFor`/`id`)
- [ ] Required fields indicated visually AND for screen readers
- [ ] Error messages linked to inputs (`aria-describedby`)
- [ ] Invalid state indicated (`aria-invalid`)
- [ ] Form submission feedback announced
- [ ] Focus moves to first error on submit
- [ ] Keyboard navigation works throughout

```tsx
<FormField>
  <FormLabel htmlFor="email">
    Email <span className="sr-only">(required)</span>
    <span aria-hidden="true" className="text-destructive">*</span>
  </FormLabel>
  <Input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={!!error}
    aria-describedby={error ? 'email-error' : 'email-hint'}
  />
  <p id="email-hint" className="text-sm text-muted-foreground">
    We'll use this for login
  </p>
  {error && (
    <p id="email-error" role="alert" className="text-sm text-destructive">
      {error}
    </p>
  )}
</FormField>
```

---

## How to Use

1. **Choose layout pattern** (single column, grid, horizontal)
2. **Define sections** for long forms
3. **Set label position** (top recommended)
4. **Add validation** with proper error states
5. **Include help text** where needed
6. **Test accessibility** with screen reader

---

## Best Practices

✅ **DO**:
- Use single column for most forms
- Keep labels above inputs (better scannability)
- Show validation errors inline
- Include clear help text
- Use proper input types (email, tel, url)

❌ **DON'T**:
- Hide labels (use visible labels always)
- Use placeholder as label
- Show all errors on submit only
- Disable submit before form is valid
- Use horizontal forms on mobile
