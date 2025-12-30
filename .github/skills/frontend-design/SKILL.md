---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

---

## Core Frontend Technologies

### Foundation Layer
- **HTML5**: Semantic markup, accessibility attributes (ARIA), proper document structure, SEO-friendly elements (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`)
- **CSS3**: Modern layout systems (Flexbox, Grid), custom properties (CSS variables), pseudo-elements, media queries, container queries, `@layer` for cascade management
- **JavaScript (ES6+)**: DOM manipulation, event handling, async/await, modules, Web APIs (Intersection Observer, ResizeObserver, fetch)

### Modern Framework Ecosystem
- **React**: Component architecture, hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`), context API, server components, Suspense boundaries
- **Vue.js**: Composition API, reactive refs, computed properties, watchers, Pinia for state management
- **Svelte/SvelteKit**: Reactive declarations, stores, transitions, server-side rendering
- **Solid.js**: Fine-grained reactivity, signals, resources
- **Angular**: Components, services, dependency injection, RxJS observables

### CSS Frameworks & Styling
- **Tailwind CSS**: Utility-first approach, custom configurations, @apply directives, plugins
- **CSS-in-JS**: Styled-components, Emotion, vanilla-extract
- **CSS Modules**: Scoped styles, composition
- **Sass/SCSS**: Variables, mixins, nesting, functions, partials

### Build Tools & Bundlers
- **Vite**: Fast HMR, optimized builds, plugin ecosystem
- **esbuild/SWC**: High-performance transpilation
- **Webpack**: Code splitting, tree shaking, asset management
- **Turbopack**: Next-generation bundling for Next.js

### Type Safety
- **TypeScript**: Interfaces, generics, utility types, strict mode, type guards, discriminated unions

---

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

---

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

---

## Responsive Design & Layout

### Responsive Strategies
- **Mobile-First**: Start with mobile layouts, progressively enhance for larger screens
- **Fluid Typography**: `clamp()` for scalable font sizes (`font-size: clamp(1rem, 2.5vw, 2rem)`)
- **Container Queries**: Component-based responsiveness (`@container`)
- **Viewport Units**: `vh`, `vw`, `dvh`, `svh`, `lvh` for dynamic viewport handling
- **Aspect Ratios**: `aspect-ratio` property for consistent media proportions

### Layout Techniques
```css
/* Modern CSS Grid with auto-fit */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}

/* Flexbox with wrapping */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
```

### Breakpoint Philosophy
- Design for content, not devices
- Use `min-width` for mobile-first approaches
- Consider accessibility at every breakpoint
- Test with real content, not lorem ipsum

---

## Performance Optimization

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: Optimize hero images, preload critical assets, use `fetchpriority="high"`
- **FID/INP (Interaction to Next Paint)**: Minimize JavaScript execution, use web workers for heavy computation
- **CLS (Cumulative Layout Shift)**: Reserve space for dynamic content, use `aspect-ratio`, avoid injecting content above existing content

### Asset Optimization
- **Images**: WebP/AVIF formats, `srcset` for responsive images, lazy loading (`loading="lazy"`), blur-up placeholders
- **Fonts**: `font-display: swap`, subset fonts, preload critical fonts, variable fonts for multiple weights
- **Code Splitting**: Dynamic imports, route-based splitting, component-level lazy loading

### Rendering Strategies
- **SSR (Server-Side Rendering)**: Next.js, Nuxt.js, SvelteKit for SEO and initial load
- **SSG (Static Site Generation)**: Astro, Next.js static export, Eleventy for content sites
- **ISR (Incremental Static Regeneration)**: Best of both worlds for dynamic content
- **Streaming**: React Server Components, progressive HTML rendering

### Caching Strategies
```javascript
// Service Worker caching
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

---

## Accessibility (A11y)

### WCAG 2.1 Compliance
- **Perceivable**: Alt text, captions, sufficient color contrast (4.5:1 for text, 3:1 for large text)
- **Operable**: Keyboard navigation, focus management, skip links, no keyboard traps
- **Understandable**: Clear labels, error identification, consistent navigation
- **Robust**: Valid HTML, ARIA when needed, tested with screen readers

### Essential Patterns
```html
<!-- Accessible button -->
<button 
  type="button" 
  aria-pressed="false"
  aria-label="Toggle menu"
>
  <span class="sr-only">Menu</span>
  <svg aria-hidden="true">...</svg>
</button>

<!-- Skip link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Live regions for dynamic updates -->
<div aria-live="polite" aria-atomic="true">
  {notification}
</div>
```

### Focus Management
- Visible focus indicators (never `outline: none` without replacement)
- Logical tab order
- Focus trapping in modals
- Return focus after modal close

### Screen Reader Testing
- Test with NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android)
- Use semantic HTML before reaching for ARIA
- Announce dynamic content changes

---

## Animation & Motion

### Performance-First Animation
```css
/* GPU-accelerated properties only */
.animate {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  will-change: transform, opacity;
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Libraries
- **Framer Motion (React)**: Layout animations, gestures, variants, AnimatePresence
- **GSAP**: Timeline-based animations, ScrollTrigger, complex sequences
- **Motion One**: Lightweight, performant, framework-agnostic
- **View Transitions API**: Native page transitions in supported browsers

### Micro-Interactions
- Button hover states with subtle transforms
- Form validation feedback
- Loading skeletons and shimmer effects
- Scroll-linked animations (parallax, reveal on scroll)

---

## State Management

### Local State
- **React**: `useState`, `useReducer` for complex state
- **Vue**: `ref`, `reactive`, `computed`
- **Svelte**: `$state`, `$derived` runes

### Global State Solutions
- **React**: Zustand (lightweight), Jotai (atomic), Redux Toolkit (enterprise)
- **Vue**: Pinia (official)
- **Framework-agnostic**: Nanostores

### Server State
- **TanStack Query (React Query)**: Caching, background refetching, optimistic updates
- **SWR**: Stale-while-revalidate pattern
- **Apollo Client**: GraphQL state management

---

## Testing Strategies

### Testing Pyramid
- **Unit Tests**: Vitest, Jest for logic and utilities
- **Component Tests**: Testing Library (@testing-library/react, @testing-library/vue)
- **E2E Tests**: Playwright (recommended), Cypress for user flows
- **Visual Regression**: Chromatic, Percy, Playwright visual comparisons

### Key Testing Patterns
```javascript
// Component test with Testing Library
import { render, screen, fireEvent } from '@testing-library/react';

test('button handles click', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  await fireEvent.click(screen.getByRole('button', { name: /click me/i }));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## Security Best Practices

### Common Vulnerabilities
- **XSS Prevention**: Sanitize user input, use `textContent` over `innerHTML`, CSP headers
- **CSRF Protection**: Token-based validation, SameSite cookies
- **Content Security Policy**: Strict CSP headers to prevent script injection

### Secure Patterns
```javascript
// Safe innerHTML alternative
element.textContent = userInput; // Escaped by default

// DOMPurify for rich content
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(richContent);
```

### Authentication UI
- Secure form handling (no autocomplete for sensitive fields)
- Clear session timeout messaging
- Password strength indicators
- Multi-factor authentication flows

---

## Developer Experience

### Code Quality Tools
- **ESLint**: Code linting with framework-specific plugins
- **Prettier**: Consistent formatting
- **Husky + lint-staged**: Pre-commit hooks
- **TypeScript**: Static type checking

### Development Workflow
```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "test": "vitest",
    "test:e2e": "playwright test"
  }
}
```

### Documentation
- Storybook for component documentation
- JSDoc/TSDoc for inline documentation
- README files for setup and architecture decisions

---

## Modern Web APIs

### Essential Browser APIs
- **Intersection Observer**: Lazy loading, infinite scroll, scroll animations
- **ResizeObserver**: Responsive component behavior
- **MutationObserver**: DOM change detection
- **Web Animations API**: JavaScript-controlled animations
- **Clipboard API**: Modern copy/paste functionality
- **Web Storage**: localStorage, sessionStorage, IndexedDB for offline data
- **Geolocation API**: Location-based features
- **Web Share API**: Native sharing dialogs

### Progressive Web Apps (PWA)
- Service workers for offline support
- Web App Manifest for installability
- Push notifications
- Background sync

---

## Component Architecture

### Design System Principles
- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages
- **Composition over Inheritance**: Build complex UIs from simple, reusable pieces
- **Single Responsibility**: Each component does one thing well
- **Prop Drilling Prevention**: Context/providers for deep data needs

### Component Patterns
```tsx
// Compound component pattern
<Tabs>
  <Tabs.List>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Content 1</Tabs.Panel>
    <Tabs.Panel>Content 2</Tabs.Panel>
  </Tabs.Panels>
</Tabs>

// Render props pattern
<DataFetcher url="/api/data">
  {({ data, loading, error }) => (
    loading ? <Spinner /> : <DataDisplay data={data} />
  )}
</DataFetcher>
```

---

## Version Control & Collaboration

### Git Workflow
- Feature branches with descriptive names
- Conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`)
- Pull request templates with checklists
- Code review best practices

### CI/CD Integration
- Automated testing on PR
- Preview deployments (Vercel, Netlify)
- Lighthouse CI for performance budgets
- Bundle size tracking

---

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
