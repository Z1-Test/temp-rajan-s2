# Platform Building Checklist

> Quick validation checklist for Staylook page and layout compliance

---

## Page Structure Checklist

### Container Hierarchy
- [ ] Page uses Calm background (#FAFAFA)
- [ ] Section containers use 32px radius
- [ ] Content containers use 24px radius
- [ ] Cards use 16px radius
- [ ] Proper nesting (outer more rounded)

### Page Template Selection
- [ ] Correct template chosen for page type
- [ ] Dashboard: stat cards, charts, tables
- [ ] List: filters, table/grid, pagination
- [ ] Detail: breadcrumbs, content, sidebar
- [ ] Form: sections, validation, action bar
- [ ] Landing: hero, features, CTA, footer

---

## Grid System Checklist

### Layout Compliance
- [ ] Uses CSS Grid or Flexbox
- [ ] Gap spacing from 4px grid
- [ ] Auto-fit for responsive card grids
- [ ] Fixed columns where appropriate

### Responsive Behavior
- [ ] Mobile (< 640px): 1 column
- [ ] Tablet (768px+): 2 columns
- [ ] Desktop (1024px+): 3-4 columns
- [ ] Large (1280px+): Full layout

---

## Navigation Checklist

### Header Navigation
- [ ] Height: 64px
- [ ] Sticky or fixed position
- [ ] Logo left, nav center/left, actions right
- [ ] Mobile hamburger menu

### Sidebar Navigation
- [ ] Width: 280px expanded, 64px collapsed
- [ ] Item radius: 16px
- [ ] Active state: Vibrant surface
- [ ] Responsive collapse on tablet

### Tab Navigation
- [ ] Active indicator: 2px underline
- [ ] Active: Standard color, weight 600
- [ ] Inactive: Standard-soft, weight 500

### Bottom Navigation (Mobile)
- [ ] Height: 64px + safe-area
- [ ] Max 5 items
- [ ] Active item: Expressive color
- [ ] FAB center button if needed

### Breadcrumbs
- [ ] Font size: text-sm
- [ ] Separator: "/" or ">"
- [ ] Current page non-clickable

---

## Spacing Checklist

### Section Spacing
- [ ] Between sections: 48-64px
- [ ] Mobile: reduced to 32-48px

### Card Spacing
- [ ] Between cards: 16px (space-4)
- [ ] Large screens: 24px (space-6)

### Internal Spacing
- [ ] Card padding: 16-24px
- [ ] Section padding: 24-32px

---

## State Handling Checklist

### Loading States
- [ ] Skeleton screens for initial load
- [ ] Spinners for actions
- [ ] Progress bars for operations

### Empty States
- [ ] Icon: 64px, Calm background
- [ ] Title: text-xl semibold
- [ ] Description: Standard-soft
- [ ] CTA: Expressive button

### Error States
- [ ] Icon: Red color
- [ ] Clear error message
- [ ] Retry action available

---

## Responsive Checklist

### Breakpoint Testing
- [ ] Mobile (375px) tested
- [ ] Tablet (768px) tested
- [ ] Desktop (1280px) tested
- [ ] Large (1536px) tested

### Touch Targets
- [ ] Minimum 44px on mobile
- [ ] Adequate spacing between targets

### Typography
- [ ] Headings scale down on mobile
- [ ] Body text min 14px

---

## One Highlight Rule

### Per Page
- [ ] Maximum 1 Expressive element
- [ ] Single clear focal point
- [ ] Supporting actions use Standard

---

*Platform Building Checklist — Staylook Compliance*
