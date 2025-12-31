---
title: Modal & Dialog Patterns
description: Generate consistent modal, dialog, sheet, and popover patterns
tags:
  - frontend
  - modal
  - dialog
  - sheet
name: modal-dialog-patterns
---

# Modal & Dialog Patterns Skill

## Dialog (Modal)

### Confirmation Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Delete Account</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Form Dialog

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="sm:max-w-lg">
    <DialogHeader>
      <DialogTitle>Create Project</DialogTitle>
    </DialogHeader>
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
        <Button type="submit">Create</Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
```

## Sheet (Slide-Over)

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-[400px]">
    <SheetHeader>
      <SheetTitle>Details</SheetTitle>
    </SheetHeader>
    <div className="py-6">{/* Content */}</div>
    <SheetFooter>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Popover

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="icon">
      <HelpCircle className="size-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <p className="text-sm">Help text here.</p>
  </PopoverContent>
</Popover>
```

## Dialog Sizes

- `sm:max-w-sm` - Alerts
- `sm:max-w-md` - Forms  
- `sm:max-w-lg` - Detailed forms
- `sm:max-w-xl` - Complex content

## Best Practices

✅ Use Dialog for focused tasks  
✅ Use Sheet for detail views  
✅ Use Popover for contextual info  
✅ Focus first element on open  
❌ Don't nest dialogs  
❌ Don't use modals for navigation
