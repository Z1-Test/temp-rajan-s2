---
title: Animation & Micro-Interactions
description: Add purposeful animations and micro-interactions using Framer Motion and CSS
tags:
  - frontend
  - animation
  - micro-interactions
  - framer-motion
  - transitions
name: animation-micro-interactions
---

# Animation & Micro-Interactions Skill

## What is it?

This skill adds purposeful animations and micro-interactions to create engaging, responsive interfaces that provide visual feedback and delight users.

## Why use it?

- **Feedback**: Users understand actions were registered
- **Guidance**: Animations direct attention to changes
- **Polish**: Smooth transitions feel premium
- **Engagement**: Delightful interactions increase time on site
- **Clarity**: Motion reveals relationships between elements

---

## Animation Principles

1. **Purpose-Driven**: Every animation should serve a purpose
2. **Performance**: Only animate `transform` and `opacity` (GPU-accelerated)
3. **Subtlety**: Animations should be barely noticeable
4. **Consistency**: Same animation patterns throughout
5. **Respect Preferences**: Honor `prefers-reduced-motion`

---

## CSS Animation Recipes

### Entry Animations

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(16px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Scale in */
@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* Pop */
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.animate-fade-in { animation: fadeIn 0.2s ease-out; }
.animate-slide-up { animation: slideUp 0.3s ease-out; }
.animate-scale-in { animation: scaleIn 0.2s ease-out; }
.animate-pop { animation: pop 0.3s ease-out; }
```

### Loading States

```css
/* Skeleton shimmer */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    hsl(var(--muted)) 25%,
    hsl(var(--accent)) 50%,
    hsl(var(--muted)) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}

/* Pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse { animation: pulse 2s ease-in-out infinite; }

/* Spin */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin { animation: spin 1s linear infinite; }
```

---

## Hover Micro-Interactions

```tsx
// Lift on hover
<Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">

// Glow on hover
<Button className="transition-shadow hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">

// Scale on hover
<Avatar className="transition-transform duration-200 hover:scale-110">

// Color shift
<a className="text-muted-foreground hover:text-primary transition-colors">

// Background reveal
<div className="group">
  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
</div>

// Arrow slide
<Button className="group">
  Continue
  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
</Button>
```

---

## Framer Motion Patterns

### Basic Animations

```tsx
import { motion } from 'framer-motion';

// Fade in on mount
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2 }}
>
  Content
</motion.div>

// Slide up on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  Content
</motion.div>

// Exit animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.2 }}
>
  Content
</motion.div>
```

### Animation Variants

```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

// Usage
<motion.div variants={fadeInUp} initial="hidden" animate="visible" exit="exit">
  Content
</motion.div>
```

### Staggered Children

```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Usage
<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map(i => (
    <motion.li key={i.id} variants={item}>
      {i.name}
    </motion.li>
  ))}
</motion.ul>
```

### Interactive Animations

```tsx
// Tap effect
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.1 }}
>
  Click Me
</motion.button>

// Drag
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
  dragElastic={0.1}
>
  Drag Me
</motion.div>

// Layout animation
<motion.div layout>
  {expanded && <ExpandedContent />}
</motion.div>
```

---

## Page Transitions

```tsx
// pages/_app.tsx or layout.tsx
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
```

---

## Scroll Animations

```tsx
import { motion, useInView } from 'framer-motion';

function FadeInWhenVisible({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Usage
<FadeInWhenVisible>
  <Card>Appears on scroll</Card>
</FadeInWhenVisible>
```

---

## Reduced Motion Support

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```tsx
// Framer Motion respects reduced motion automatically
// But you can also check manually:
import { useReducedMotion } from 'framer-motion';

function MyComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ y: prefersReducedMotion ? 0 : [0, -10, 0] }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
    >
      Content
    </motion.div>
  );
}
```

---

## Animation Timing Guidelines

| Animation | Duration | Easing |
|-----------|----------|--------|
| Button hover | 150ms | ease-out |
| Modal enter | 200ms | ease-out |
| Modal exit | 150ms | ease-in |
| Dropdown | 200ms | ease-out |
| Toast enter | 300ms | spring |
| Page transition | 200ms | ease-in-out |
| Skeleton pulse | 1500ms | ease-in-out |
| Spinner | 1000ms | linear |

---

## How to Use

1. **Identify purpose**: What does this animation communicate?
2. **Choose type**: Enter, exit, interaction, loading, or attention
3. **Set timing**: Fast for interactions (150-200ms), slower for content (300-500ms)
4. **Apply easing**: ease-out for entrances, ease-in for exits
5. **Test reduced motion**: Ensure app works without animations
6. **Performance check**: Only animate transform and opacity

---

## Best Practices

✅ **DO**:
- Animate only transform and opacity
- Keep durations under 500ms for UI
- Use consistent easing functions
- Provide visual feedback for interactions
- Respect reduced-motion preferences

❌ **DON'T**:
- Animate layout properties (width, height, margin)
- Use animations that block interaction
- Animate everything on the page
- Use jarring, fast movements
- Ignore motion sickness concerns
