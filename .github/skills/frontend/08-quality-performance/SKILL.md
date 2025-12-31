---
title: Performance Optimization
description: Optimize frontend performance through code splitting, lazy loading, and Core Web Vitals improvements
tags:
  - frontend
  - performance
  - optimization
  - bundle-size
  - core-web-vitals
name: performance-optimization
---

# Performance Optimization Skill

## What is it?

This skill optimizes frontend performance through code splitting, lazy loading, image optimization, and targeting Core Web Vitals metrics.

## Why use it?

- **User Experience**: Fast sites feel premium
- **SEO**: Core Web Vitals affect rankings
- **Conversion**: 1s delay = 7% conversion loss
- **Accessibility**: Performance is accessibility
- **Cost**: Smaller bundles = lower bandwidth costs

---

## Core Web Vitals Targets

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| **LCP** (Largest Contentful Paint) | ≤2.5s | 2.5-4.0s | >4.0s |
| **FID** (First Input Delay) | ≤100ms | 100-300ms | >300ms |
| **CLS** (Cumulative Layout Shift) | ≤0.1 | 0.1-0.25 | >0.25 |
| **INP** (Interaction to Next Paint) | ≤200ms | 200-500ms | >500ms |
| **TTFB** (Time to First Byte) | ≤800ms | 800-1800ms | >1800ms |

---

## Code Splitting

### Route-Based Splitting (Next.js)

```tsx
// pages/ or app/ automatically code-splits

// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/Chart'), {
  loading: () => <Skeleton className="h-[400px]" />,
  ssr: false, // Disable SSR for client-only components
});

const MarkdownEditor = dynamic(
  () => import('@/components/MarkdownEditor'),
  { loading: () => <Skeleton className="h-[300px]" /> }
);
```

### Component-Level Splitting (React.lazy)

```tsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

---

## Lazy Loading

### Images

```tsx
// Next.js Image (automatic optimization)
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  loading="lazy"        // Lazy load below-fold images
  placeholder="blur"    // Show blur while loading
  blurDataURL={blurUrl} // Base64 blur placeholder
/>

// For above-fold images, use priority
<Image
  src="/hero.jpg"
  priority  // Preload this image
/>
```

### Components

```tsx
// Intersection Observer for lazy loading
function LazyComponent({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <Skeleton />}
    </div>
  );
}
```

---

## Image Optimization

### Modern Formats

```tsx
// Next.js automatically serves WebP/AVIF
<Image src="/photo.jpg" ... />

// Manual picture element
<picture>
  <source srcSet="/photo.avif" type="image/avif" />
  <source srcSet="/photo.webp" type="image/webp" />
  <img src="/photo.jpg" alt="Photo" />
</picture>
```

### Responsive Images

```tsx
<Image
  src="/hero.jpg"
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 80vw, 
         1200px"
  fill
  className="object-cover"
/>
```

### Placeholder Strategies

```tsx
// Blur placeholder (best UX)
<Image placeholder="blur" blurDataURL={base64} />

// Color placeholder
<div className="bg-muted animate-pulse aspect-video" />

// Skeleton
<Skeleton className="aspect-video" />
```

---

## Font Loading

```css
/* Use font-display: swap to prevent FOIT */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  src: url('/fonts/inter.woff2') format('woff2');
}
```

```tsx
// Next.js font optimization
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

// Preload critical fonts
<link 
  rel="preload" 
  href="/fonts/inter.woff2" 
  as="font" 
  type="font/woff2" 
  crossOrigin="anonymous" 
/>
```

---

## React Performance

### Memoization

```tsx
// React.memo for expensive components
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return items.map(item => <Item key={item.id} {...item} />);
});

// useMemo for expensive calculations
const sortedItems = useMemo(() => {
  return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// useCallback for stable function references
const handleClick = useCallback((id: string) => {
  setSelected(id);
}, []);
```

### Virtualization

```tsx
// For long lists, use virtualization
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef<HTMLDivElement>(null);
  
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} className="h-[400px] overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: virtualRow.start,
              height: virtualRow.size,
            }}
          >
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Bundle Analysis

```bash
# Next.js bundle analyzer
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

### Bundle Size Targets

| Category | Target | Example |
|----------|--------|---------|
| First Load JS | <100KB | Critical path only |
| Page JS | <200KB | Per-route bundle |
| Total JS | <500KB | Entire app |
| CSS | <50KB | Utility CSS + custom |

---

## Critical CSS

```tsx
// Inline critical CSS in head
<head>
  <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
  <link rel="stylesheet" href="/main.css" media="print" onLoad="this.media='all'" />
</head>
```

---

## Lighthouse Performance Checklist

### ✅ Images
- [ ] Use next/image or optimized images
- [ ] Serve WebP/AVIF formats
- [ ] Set explicit width/height (prevent CLS)
- [ ] Lazy load below-fold images
- [ ] Use blur placeholders

### ✅ JavaScript
- [ ] Code split by route
- [ ] Lazy load heavy components
- [ ] Tree-shake unused code
- [ ] Minimize third-party scripts
- [ ] Use production builds

### ✅ CSS
- [ ] Remove unused CSS
- [ ] Inline critical CSS
- [ ] Avoid render-blocking stylesheets
- [ ] Use CSS containment

### ✅ Fonts
- [ ] Use font-display: swap
- [ ] Preload critical fonts
- [ ] Subset fonts to used characters
- [ ] Use variable fonts

---

## Performance Monitoring

```tsx
// Report Web Vitals
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    // Send to analytics
    analytics.track('Web Vital', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
    });
  });
  return null;
}
```

---

## How to Use

1. **Measure first** with Lighthouse/PageSpeed
2. **Identify bottlenecks** (images, JS, fonts)
3. **Apply optimizations** starting with biggest wins
4. **Code split** heavy components
5. **Lazy load** below-fold content
6. **Monitor continuously** with Web Vitals

---

## Best Practices

✅ **DO**:
- Optimize images before everything else
- Use next/image for automatic optimization
- Code split by route
- Preload critical resources
- Monitor Web Vitals in production

❌ **DON'T**:
- Ship unused JavaScript
- Load all fonts upfront
- Block rendering with CSS
- Use synchronous third-party scripts
- Ignore mobile performance
