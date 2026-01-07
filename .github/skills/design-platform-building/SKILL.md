---
title: Platform Building
description: Building complete web platforms, pages, and responsive layouts using Staylook components
tags:
  - frontend
  - platform
  - website
  - pages
  - layouts
  - responsive
  - staylook
name: platform-building
---

# Platform Building Skill

> **Building Complete UIs**: Pages, Layouts, and Full Applications

## What is it?

This skill covers how to assemble Staylook components into complete, functional platforms—including page layouts, navigation structures, responsive grids, and end-to-end user interfaces.

## Why use it?

- **Structured Assembly**: Combine components into cohesive, navigable pages
- **Responsive Design**: Build layouts that work across all screen sizes
- **Page Templates**: Create reusable page structures for common patterns
- **End-to-End UIs**: Deliver complete, polished user experiences
- **Consistent Architecture**: Maintain design system principles at the page level

---

# Part 1: Page Structure & Architecture

## Page Hierarchy

Build pages with this structural hierarchy:

**Level 1 - App Shell**:
- Navigation (header/sidebar)
- Main content area
- Optional footer
- Manages authentication, routing

**Level 2 - Page Layout**:
- Page wrapper (Calm background, full height)
- Content container (centered, max-width)
- Section divisions

**Level 3 - Sections**:
- Major content groups
- Use Section Container (32px radius)
- Clear visual separation between sections

**Level 4 - Components**:
- Cards, forms, lists, tables
- Individual UI elements

## Page Wrapper Pattern

Every page should have:

```
Page Wrapper (Calm background, min-height: 100vh)
  └── Content Container (max-width, centered, padding)
        └── Header Section (page title, breadcrumbs)
        └── Main Content Section(s)
        └── Footer Section (optional)
```

---

# Part 2: Layout Component System

## Section Container (Outermost)

The largest content wrapper:

- Border radius: 32px (--radius-section)
- Background: Muted surface
- Padding: 32px (space-8)
- Margin bottom: 32px (space-8) between sections
- Use for major page sections

## Content Container (Major Wrapper)

Standard content wrapper:

- Border radius: 24px (--radius-container)
- Max widths available:
  - xs: 480px (narrow forms)
  - sm: 640px (articles)
  - md: 768px (standard forms)
  - lg: 1024px (wider layouts)
  - xl: 1280px (default main content)
  - 2xl: 1440px (wide screens)
- Padding: 24px (space-6)
- Center with auto margins

## Page Wrapper

The outermost page container:

- Background: Calm surface (#FAFAFA)
- Minimum height: 100vh
- Padding: 24px (space-6)
- No border radius (full bleed)

---

# Part 3: Grid System

## Basic Grid

Create responsive grids:

- Use CSS Grid
- Gap: 16px (space-4)
- Define columns: 2, 3, or 4 based on content

## Auto-fit Grid

Self-managing responsive grid:

- Columns auto-calculate based on minimum width
- Minimum: 280px per column
- Maximum: 1fr (equal distribution)
- Automatically responsive
- Ideal for card galleries, dashboards

## Common Grid Patterns

**Dashboard Grid**:
- 3-4 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Equal gap all around

**Feature Grid**:
- 3 columns for feature cards
- Centered content
- Larger gaps (24px)

**Form Grid**:
- 2 columns for side-by-side fields
- Single column on mobile
- Tight vertical spacing (16px)

---

# Part 4: Navigation Patterns

## Header Navigation

Desktop pattern:

- Fixed or sticky position
- Logo on left
- Navigation links center or right
- Actions (search, profile) on far right
- Height: 64-72px
- Background: Muted surface with subtle border/shadow

## Sidebar Navigation

Side panel pattern:

- Width: 240-280px when expanded
- Collapsible to icon-only (64px)
- Sticky position
- Hierarchical menu structure
- Active state uses Standard emphasis

## Bottom Navigation (Mobile)

Mobile-first pattern:

- Fixed at bottom
- 4-5 navigation items maximum
- Icon + optional label
- Active state uses Expressive color (only active item)
- Height: 64px + safe area

## Breadcrumb Navigation

Location indicator:

- Shows page hierarchy
- Links to parent pages
- Current page is non-clickable
- Separator: / or >
- Font size: text-sm

---

# Part 5: Responsive Design

## Breakpoint System

Define standard breakpoints:

- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Large screens

## Mobile-First Approach

Design mobile first, enhance for larger screens:

- Start with single column layouts
- Stack elements vertically on mobile
- Convert to rows/grids on larger screens
- Hide/show elements based on screen size
- Adjust spacing for different viewports

## Common Responsive Patterns

**Navigation**:
- Mobile: Hamburger menu or bottom tabs
- Desktop: Horizontal inline navigation

**Sidebar**:
- Mobile: Hidden or drawer
- Tablet: Collapsible
- Desktop: Fixed expanded

**Grid Columns**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Card Padding**:
- Mobile: 16px (space-4)
- Tablet: 24px (space-6)
- Desktop: 32px (space-8)

**Typography Scale**:
- Reduce heading sizes on mobile
- Maintain base body size
- Adjust line heights for mobile readability

---

# Part 6: Page Templates

## Dashboard Template

Layout pattern for data-heavy pages:

- Optional sidebar navigation
- Header with title and actions
- Stat cards row at top
- Main content area with cards/tables
- Grid-based layout

## List/Table Template

Pattern for data listings:

- Filter bar at top
- Search input
- Table or card grid
- Pagination at bottom
- Bulk actions when items selected

## Detail Template

Single item view pattern:

- Breadcrumb navigation
- Title with actions
- Content in sections
- Related items sidebar (optional)
- Action footer (mobile)

## Form Template

Data entry pattern:

- Clear form title
- Progress indicator (multi-step)
- Input sections grouped logically
- Validation messages inline
- Submit/Cancel buttons at bottom
- Sticky action bar on mobile

## Landing/Marketing Template

Public-facing pages:

- Hero section (full-width, dramatic)
- Feature sections (alternating layout)
- Social proof section
- CTA section
- Footer with links

---

# Part 7: Complete Page Assembly

## Assembly Workflow

Follow this process for each page:

1. **Define Page Type**: Dashboard, list, detail, form, or landing
2. **Choose Template**: Select appropriate template pattern
3. **Set Up Layout**: Page wrapper, containers, grid structure
4. **Add Navigation**: Header, sidebar, breadcrumbs as needed
5. **Place Components**: Cards, forms, tables in layout
6. **Implement Responsiveness**: Adjust for all breakpoints
7. **Validate Design**: Check spacing, alignment, visual hierarchy

## Page-Level Checklist

Before marking page complete:

- [ ] Uses correct template pattern
- [ ] All containers follow radius hierarchy
- [ ] Navigation is clear and accessible
- [ ] Responsive at all breakpoints
- [ ] Proper spacing between sections
- [ ] "One Highlight" rule respected per viewport
- [ ] Loading and empty states handled
- [ ] Accessible (keyboard navigation, screen readers)

---

# Part 8: State Management at Page Level

## Loading States

Handle loading at page level:

- Skeleton screens for initial load
- Inline spinners for actions
- Progress bars for long operations
- Disable interactions during mutations

## Empty States

Design meaningful empty states:

- Clear illustration or icon
- Helpful message
- Action to resolve (create first item, adjust filters)
- Center in content area

## Error States

Handle errors gracefully:

- Error message with explanation
- Retry action when appropriate
- Don't break entire page for partial errors
- Log errors for debugging

---

# Part 9: Performance Considerations

## Lazy Loading

Optimize page performance:

- Lazy load below-the-fold content
- Defer non-critical JavaScript
- Progressive image loading
- Code-split by route

## Critical Rendering

Prioritize visible content:

- Inline critical CSS
- Pre-connect to required origins
- Preload key assets
- Optimize Largest Contentful Paint

---

# Part 10: Best Practices

## Do

- Use established page templates
- Follow responsive patterns consistently
- Maintain navigation hierarchy
- Keep "One Highlight" rule at page level
- Test on real devices

## Don't

- Create unique layouts for every page
- Break navigation patterns between pages
- Ignore mobile experience
- Have multiple competing highlights per viewport
- Skip loading/empty/error states

---

*Staylook Design System — Building Complete Experiences*
