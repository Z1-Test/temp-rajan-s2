---
title: Card Patterns
description: Card composition patterns for various use cases
tags:
  - frontend
  - card
  - display
  - composition
name: card-patterns
---

# Card Patterns Skill

## Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Stats Card

```tsx
<Card>
  <CardContent className="p-6">
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Total Revenue</span>
      <DollarSign className="size-4 text-muted-foreground" />
    </div>
    <div className="mt-2">
      <span className="text-3xl font-bold">$45,231</span>
      <span className="ml-2 text-sm text-green-500">+12.5%</span>
    </div>
  </CardContent>
</Card>
```

## User Card

```tsx
<Card>
  <CardContent className="p-6 flex items-center gap-4">
    <Avatar className="size-12">
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-muted-foreground">{user.email}</p>
    </div>
    <Badge>{user.role}</Badge>
  </CardContent>
</Card>
```

## Action Card

```tsx
<Card className="hover:border-primary transition-colors cursor-pointer">
  <CardContent className="p-6 text-center">
    <div className="mx-auto size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
      <Plus className="size-6 text-primary" />
    </div>
    <h3 className="font-semibold">Create New</h3>
    <p className="text-sm text-muted-foreground mt-1">
      Click to add a new item
    </p>
  </CardContent>
</Card>
```

## Feature Card

```tsx
<Card>
  <CardContent className="p-6">
    <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4">
      <Zap className="size-5 text-white" />
    </div>
    <h3 className="font-semibold">{feature.title}</h3>
    <p className="text-sm text-muted-foreground mt-2">
      {feature.description}
    </p>
  </CardContent>
</Card>
```

## Pricing Card

```tsx
<Card className={popular ? 'border-primary' : ''}>
  {popular && (
    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
      Most Popular
    </div>
  )}
  <CardHeader>
    <CardTitle>{plan.name}</CardTitle>
    <div className="mt-2">
      <span className="text-4xl font-bold">${plan.price}</span>
      <span className="text-muted-foreground">/month</span>
    </div>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2">
      {plan.features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm">
          <Check className="size-4 text-green-500" />
          {f}
        </li>
      ))}
    </ul>
  </CardContent>
  <CardFooter>
    <Button className="w-full" variant={popular ? 'default' : 'outline'}>
      Get Started
    </Button>
  </CardFooter>
</Card>
```

## Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id}>
      <CardContent className="p-6">...</CardContent>
    </Card>
  ))}
</div>
```

## Best Practices

✅ Use CardHeader for title/description  
✅ Use CardFooter for actions  
✅ Add hover states for clickable cards  
✅ Keep card content focused  
❌ Don't overload cards with content  
❌ Don't mix card sizes in same grid
