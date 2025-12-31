---
title: Image & Media Patterns
description: Responsive images, avatars, and media display patterns
tags:
  - frontend
  - images
  - media
  - avatar
name: image-media-patterns
---

# Image & Media Patterns Skill

## Responsive Images

```tsx
// Next.js Image
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  className="w-full h-auto object-cover"
  priority // Above fold
/>

// Lazy loaded
<Image
  src="/card.jpg"
  alt="Card"
  width={400}
  height={300}
  loading="lazy"
  placeholder="blur"
  blurDataURL={blurUrl}
/>
```

## Avatar

```tsx
<Avatar className="size-10">
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback>{user.initials}</AvatarFallback>
</Avatar>

// Sizes
<Avatar className="size-8" />  /* Small */
<Avatar className="size-10" /> /* Default */
<Avatar className="size-12" /> /* Large */
<Avatar className="size-16" /> /* XL */

// With status
<div className="relative">
  <Avatar className="size-10">...</Avatar>
  <span className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 ring-2 ring-background" />
</div>

// Avatar group
<div className="flex -space-x-2">
  {users.slice(0, 4).map((user) => (
    <Avatar key={user.id} className="size-8 ring-2 ring-background">
      <AvatarImage src={user.avatar} />
      <AvatarFallback>{user.initials}</AvatarFallback>
    </Avatar>
  ))}
  {users.length > 4 && (
    <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs">
      +{users.length - 4}
    </div>
  )}
</div>
```

## Aspect Ratio

```tsx
<div className="aspect-video overflow-hidden rounded-lg">
  <img src="/video-thumb.jpg" className="size-full object-cover" />
</div>

<div className="aspect-square overflow-hidden rounded-lg">
  <img src="/product.jpg" className="size-full object-cover" />
</div>
```

## Background Images

```tsx
<div 
  className="h-64 bg-cover bg-center"
  style={{ backgroundImage: `url('/hero.jpg')` }}
>
  <div className="flex h-full items-center justify-center bg-black/50">
    <h1 className="text-white text-4xl font-bold">Title</h1>
  </div>
</div>
```

## Best Practices

✅ Use next/image for optimization  
✅ Always include alt text  
✅ Use appropriate aspect ratios  
✅ Add blur placeholders  
❌ Don't use inline base64 for large images  
❌ Don't forget width/height to prevent CLS
