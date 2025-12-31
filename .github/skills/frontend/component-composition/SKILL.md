---
title: Component Composition
description: Patterns for composing complex components from primitive building blocks
tags:
  - frontend
  - composition
  - components
  - patterns
  - reusable
name: component-composition
---

# Component Composition Skill

## Composition Philosophy

Build complex components by combining primitive building blocks rather than creating monolithic components.

## Primitive Components

| Primitive | Purpose | Example |
|-----------|---------|---------|
| `Card` | Container with border/shadow | Wrapper for content |
| `Button` | Action trigger | Form submit, navigation |
| `Input` | Data entry | Text, email, password |
| `Badge` | Status/label | Tags, counts, status |
| `Avatar` | User identity | Profile images |
| `Icon` | Visual symbol | Actions, status |

## Composition Patterns

### Card Compositions

```tsx
// Stats Card = Card + Icon + Text
<Card className="p-6">
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">Revenue</span>
    <DollarSign className="size-4 text-muted-foreground" />
  </div>
  <div className="mt-2">
    <span className="text-3xl font-bold">$12,345</span>
    <Badge className="ml-2">+12%</Badge>
  </div>
</Card>

// User Card = Card + Avatar + Text + Badge
<Card className="p-6">
  <div className="flex items-center gap-4">
    <Avatar className="size-12">
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-muted-foreground">{user.email}</p>
    </div>
    <Badge>{user.role}</Badge>
  </div>
</Card>

// Action Card = Card + Icon Container + Text + Chevron
<Card className="p-6 cursor-pointer hover:border-primary transition-colors">
  <div className="flex items-center gap-4">
    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <Plus className="size-5 text-primary" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold">Add Item</h3>
      <p className="text-sm text-muted-foreground">Click to add</p>
    </div>
    <ChevronRight className="size-5 text-muted-foreground" />
  </div>
</Card>
```

### Form Compositions

```tsx
// Form Field = Label + Input + Helper
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
  <p className="text-sm text-muted-foreground">We'll never share your email.</p>
</div>

// Input Group = Input + Button
<div className="flex gap-2">
  <Input placeholder="Enter code..." className="flex-1" />
  <Button>Apply</Button>
</div>

// Search Input = Icon + Input
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input placeholder="Search..." className="pl-10" />
</div>
```

### List Compositions

```tsx
// List Item = Avatar + Text + Action
<div className="flex items-center gap-4 py-3">
  <Avatar className="size-10">
    <AvatarImage src={item.avatar} />
    <AvatarFallback>{item.initials}</AvatarFallback>
  </Avatar>
  <div className="flex-1 min-w-0">
    <p className="font-medium truncate">{item.title}</p>
    <p className="text-sm text-muted-foreground truncate">{item.subtitle}</p>
  </div>
  <Button variant="ghost" size="icon">
    <MoreHorizontal className="size-4" />
  </Button>
</div>

// Selectable List Item = Checkbox + Text
<label className="flex items-center gap-3 py-2 cursor-pointer">
  <Checkbox checked={selected} onCheckedChange={setSelected} />
  <span>{item.name}</span>
</label>
```

### Header Compositions

```tsx
// Page Header = Title + Description + Actions
<div className="flex items-start justify-between">
  <div>
    <h1 className="text-3xl font-bold tracking-tight">Page Title</h1>
    <p className="mt-2 text-muted-foreground">Page description here.</p>
  </div>
  <div className="flex gap-2">
    <Button variant="outline">Secondary</Button>
    <Button>Primary</Button>
  </div>
</div>

// Section Header = Title + See All Link
<div className="flex items-center justify-between">
  <h2 className="text-xl font-semibold">Section Title</h2>
  <Button variant="link" className="text-sm">
    See all <ChevronRight className="size-4 ml-1" />
  </Button>
</div>
```

## Compound Components

```tsx
// Create compound component with shared context
const DataCard = ({ children, ...props }) => (
  <Card {...props}>{children}</Card>
);

DataCard.Header = ({ children }) => (
  <div className="flex items-center justify-between pb-4">{children}</div>
);

DataCard.Title = ({ children }) => (
  <h3 className="font-semibold">{children}</h3>
);

DataCard.Value = ({ children }) => (
  <p className="text-3xl font-bold">{children}</p>
);

DataCard.Footer = ({ children }) => (
  <div className="pt-4 border-t text-sm text-muted-foreground">{children}</div>
);

// Usage
<DataCard className="p-6">
  <DataCard.Header>
    <DataCard.Title>Revenue</DataCard.Title>
    <DollarSign className="size-4" />
  </DataCard.Header>
  <DataCard.Value>$12,345</DataCard.Value>
  <DataCard.Footer>+12% from last month</DataCard.Footer>
</DataCard>
```

## Best Practices

✅ Build from smallest primitives up  
✅ Use consistent spacing patterns  
✅ Extract repeated compositions  
✅ Keep components focused  
❌ Don't create one-off compositions  
❌ Don't hard-code values in compositions
