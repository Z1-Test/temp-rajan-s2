# Navigation Patterns Reference

> Header, sidebar, tabs, and mobile navigation for Staylook

---

## Header Navigation

### Desktop Structure
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]    Home  Products  About     🔍  👤  🛒            │
└─────────────────────────────────────────────────────────────┘
```

### Specifications
- **Height**: 64px
- **Background**: Muted surface
- **Border**: 1px bottom, Muted outline
- **Position**: Sticky top
- **Logo**: Left, text-xl bold
- **Nav Links**: Center or left, space-6 gap
- **Actions**: Right, space-3 gap

### Link States
- **Default**: Standard-soft color
- **Hover**: Standard color
- **Active**: Standard, font-weight 600

---

## Sidebar Navigation

### Structure
```
┌────────────────────┐
│  [Logo]       [≡]  │
├────────────────────┤
│  📊 Dashboard      │  ← Active
│  📦 Products       │
│  📋 Orders         │
│  ─────────────     │
│  ⚙️ Settings       │
├────────────────────┤
│  👤 John Doe       │
└────────────────────┘
```

### Specifications
- **Width**: 280px expanded, 64px collapsed
- **Nav Item Radius**: 16px
- **Active State**: Vibrant surface, Standard text
- **Hover State**: Calm surface

---

## Tab Navigation

### Horizontal Tabs
```
  Overview    Details    Settings
  ─────────
      ↑ Active (2px underline)
```

### Specifications
- **Active Indicator**: 2px line, Standard color
- **Tab Padding**: space-3 vertical, space-4 horizontal
- **Active Text**: Standard, weight 600
- **Inactive Text**: Standard-soft, weight 500

---

## Bottom Navigation (Mobile)

### Structure
```
┌─────────────────────────────────────────┐
│   🏠      🔍      ➕★     ❤️      👤    │
│  Home   Search  Create  Saved  Profile │
└─────────────────────────────────────────┘
```

### Specifications
- **Height**: 64px + safe-area
- **Position**: Fixed bottom
- **Active Color**: Expressive (ONLY active item)
- **Inactive Color**: Standard-muted
- **FAB Center**: 56px, raised, Expressive

---

## Breadcrumb Navigation

### Structure
```
Home / Products / Category / Current Page
 ↑        ↑          ↑            ↑
Link    Link       Link      Non-link
```

### Specifications
- **Font Size**: text-sm
- **Separator**: "/" or ">"
- **Link Color**: Standard-soft, hover Standard
- **Current**: Standard, weight 500

---

## Dropdown Menu

### Specifications
- **Radius**: 24px (container)
- **Item Radius**: 16px
- **Shadow**: Vibrant
- **Hover**: Calm surface
- **Padding**: space-2 container, space-3 items

---

## Mobile Menu (Drawer)

### Specifications
- **Width**: 100%, max 320px
- **Position**: Right side, slides in
- **Overlay**: 50% black
- **Nav Item Size**: text-lg
- **Close Button**: 40px, pill shape

---

## Pagination

### Structure
```
← Prev    1  2  [3]  4  5    Next →
```

### Specifications
- **Button Size**: 40px min
- **Shape**: Pill (9999px)
- **Active**: Standard fill
- **Inactive**: Ghost style

---

*Navigation Patterns — Staylook Platform Building*
