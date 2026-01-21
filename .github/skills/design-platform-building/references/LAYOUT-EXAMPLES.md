# Layout Examples Reference

> Grid systems, responsive patterns, and container examples for Staylook

---

## Container Hierarchy

### Visual Representation
```
┌─────────────────────────────────────────────────────────────────────┐
│  PAGE WRAPPER (Calm background, no radius)                          │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │  SECTION CONTAINER (32px radius, Muted surface)               │  │
│  │  ┌─────────────────────────────────────────────────────────┐  │  │
│  │  │  CONTENT CONTAINER (24px radius)                        │  │  │
│  │  │  ┌───────────────────────┐ ┌───────────────────────┐   │  │  │
│  │  │  │  CARD (16px radius)   │ │  CARD (16px radius)   │   │  │  │
│  │  │  │  ┌───────────────┐   │ │  ┌───────────────┐    │   │  │  │
│  │  │  │  │ INPUT (16px)  │   │ │  │ INPUT (16px)  │    │   │  │  │
│  │  │  │  └───────────────┘   │ │  └───────────────┘    │   │  │  │
│  │  │  │  [Button (pill)]     │ │  [Button (pill)]      │   │  │  │
│  │  │  └───────────────────────┘ └───────────────────────┘   │  │  │
│  │  └─────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation
```css
/* Page Wrapper */
.page-wrapper {
  min-height: 100vh;
  background: var(--sl-container-calm); /* #FAFAFA */
  padding: var(--space-6);
}

/* Section Container - Outermost content area */
.section-container {
  background: var(--sl-container-muted); /* #FFFFFF */
  border-radius: var(--radius-section); /* 32px */
  padding: var(--space-8);
  margin-bottom: var(--space-8);
}

/* Content Container - Major wrapper */
.content-container {
  background: transparent;
  border-radius: var(--radius-container); /* 24px */
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-6);
}

/* Card - Information container */
.card {
  background: var(--sl-container-muted);
  border-radius: var(--radius-card); /* 16px */
  border: 1px solid var(--sl-outline-muted);
  padding: var(--space-5);
}

/* Input - Form field */
.input {
  background: var(--sl-container-vibrant); /* #F0F0F0 */
  border-radius: var(--radius-input); /* 16px */
  border: 1px solid var(--sl-outline-muted);
  height: 48px;
  padding: var(--space-3) var(--space-4);
}

/* Button - ALWAYS pill */
.button {
  border-radius: 9999px; /* Pill shape */
  padding: var(--space-3) var(--space-6);
}
```

---

## Grid Systems

### Auto-Fit Grid (Recommended)
Self-adjusting grid that automatically adapts to available width.

```css
.auto-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
}
```

**Use Case**: Card galleries, product grids, feature lists

### Fixed Column Grids

#### 2-Column Grid
```css
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
}
```

**Use Case**: Side-by-side comparisons, form fields

#### 3-Column Grid
```css
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

**Use Case**: Dashboards, feature sections

#### 4-Column Grid
```css
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

@media (max-width: 1280px) {
  .grid-4 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

**Use Case**: Dense data displays, stat cards

### Asymmetric Grids

#### Main + Sidebar (2:1)
```css
.main-sidebar {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .main-sidebar {
    grid-template-columns: 1fr;
  }
}
```

**Use Case**: Detail pages, articles with sidebar

#### Sidebar + Main (1:3)
```css
.sidebar-main {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-6);
}

@media (max-width: 1024px) {
  .sidebar-main {
    grid-template-columns: 1fr;
  }
}
```

**Use Case**: Dashboard with navigation sidebar

---

## Responsive Breakpoints

### Breakpoint System
```css
:root {
  --breakpoint-sm: 640px;   /* Small tablets */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Laptops */
  --breakpoint-xl: 1280px;  /* Desktops */
  --breakpoint-2xl: 1536px; /* Large screens */
}
```

### Mobile-First Media Queries
```css
/* Base: Mobile (< 640px) */
.element {
  padding: var(--space-4);
  grid-template-columns: 1fr;
}

/* Small tablets (640px+) */
@media (min-width: 640px) {
  .element {
    padding: var(--space-5);
  }
}

/* Tablets (768px+) */
@media (min-width: 768px) {
  .element {
    padding: var(--space-6);
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Laptops (1024px+) */
@media (min-width: 1024px) {
  .element {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktops (1280px+) */
@media (min-width: 1280px) {
  .element {
    padding: var(--space-8);
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Spacing Patterns

### Section Spacing
```css
/* Between major page sections */
.section {
  margin-bottom: var(--space-16); /* 64px */
}

/* Mobile adjustment */
@media (max-width: 768px) {
  .section {
    margin-bottom: var(--space-12); /* 48px */
  }
}
```

### Card Spacing
```css
/* Between cards in a grid */
.card-grid {
  gap: var(--space-4); /* 16px */
}

/* Large screens can have more space */
@media (min-width: 1280px) {
  .card-grid {
    gap: var(--space-6); /* 24px */
  }
}
```

### Internal Card Spacing
```css
.card {
  padding: var(--space-4); /* 16px - mobile */
}

@media (min-width: 768px) {
  .card {
    padding: var(--space-5); /* 20px - tablet */
  }
}

@media (min-width: 1280px) {
  .card {
    padding: var(--space-6); /* 24px - desktop */
  }
}
```

---

## Container Width Examples

### Max-Width Container Classes
```css
.container-xs { max-width: 480px; }  /* Narrow forms, modals */
.container-sm { max-width: 640px; }  /* Articles, blog posts */
.container-md { max-width: 768px; }  /* Standard forms */
.container-lg { max-width: 1024px; } /* Wider content */
.container-xl { max-width: 1280px; } /* Default main content */
.container-2xl { max-width: 1440px; } /* Wide screens */

/* All containers are centered */
[class^="container-"] {
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
```

---

## Full Page Layout Example

### Dashboard Layout
```css
.dashboard-layout {
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 280px 1fr;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}

.dashboard-layout__header {
  grid-area: header;
  background: var(--sl-container-muted);
  border-bottom: 1px solid var(--sl-outline-muted);
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
}

.dashboard-layout__sidebar {
  grid-area: sidebar;
  background: var(--sl-container-muted);
  border-right: 1px solid var(--sl-outline-muted);
  padding: var(--space-4);
}

.dashboard-layout__main {
  grid-area: main;
  background: var(--sl-container-calm);
  padding: var(--space-6);
  overflow-y: auto;
}

/* Responsive: Collapse sidebar on tablet */
@media (max-width: 1024px) {
  .dashboard-layout {
    grid-template-areas:
      "header"
      "main";
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
  }
  
  .dashboard-layout__sidebar {
    display: none; /* Use mobile menu instead */
  }
}
```

### Simple Page Layout
```css
.page-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-layout__header {
  height: 64px;
  background: var(--sl-container-muted);
  border-bottom: 1px solid var(--sl-outline-muted);
  position: sticky;
  top: 0;
  z-index: 50;
}

.page-layout__main {
  flex: 1;
  background: var(--sl-container-calm);
  padding: var(--space-6);
}

.page-layout__footer {
  background: var(--sl-container-muted);
  border-top: 1px solid var(--sl-outline-muted);
  padding: var(--space-8) var(--space-6);
}
```

---

## Flexbox Patterns

### Row with Space Between
```css
.row-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}
```

### Centered Stack
```css
.centered-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
}
```

### Inline Actions
```css
.inline-actions {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}
```

---

*Layout Examples — Staylook Platform Building Reference*
