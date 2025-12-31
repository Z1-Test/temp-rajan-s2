# Component Specification: AgentStatusBadge

## Metadata
- **Type**: Atom
- **Category**: Status Indicator
- **Priority**: Critical
- **Design System Base**: Badge component
- **Related Feature**: Agent Registry Catalog

## Purpose
Display visual status indicator for agent operational state with appropriate color coding and icon.

## Component API

### Props Interface
```typescript
interface AgentStatusBadgeProps {
  status: 'active' | 'inactive' | 'deploying' | 'error';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  showDot?: boolean;
  className?: string;
}
```

## Composition
```
AgentStatusBadge
└── Badge (shadcn)
    ├── StatusDot (optional animated dot)
    ├── Icon (optional status icon)
    └── Text (status label)
```

## Variants

### Status Variants
| Status | Color | Background | Icon | Behavior |
|--------|-------|------------|------|----------|
| active | Green (#1A8754) | Light green (#E6F7EF) | CheckCircle | Pulse animation |
| inactive | Gray (#777777) | Light gray (#F5F5F5) | Circle | None |
| deploying | Amber (#CC8400) | Light amber (#FFF4E5) | Loader | Spin animation |
| error | Red (#CC0000) | Light red (#FFEBEE) | AlertCircle | None |

### Size Variants
| Size | Height | Font Size | Icon Size | Padding |
|------|--------|-----------|-----------|---------|
| sm | 20px | 12px | 12px | 4px 8px |
| md | 24px | 14px | 14px | 6px 12px |
| lg | 28px | 16px | 16px | 8px 16px |

## Accessibility Requirements
- Use semantic color + text (not color alone)
- Include ARIA label describing status
- Status changes announced to screen readers via aria-live

## Implementation Notes
- Use shadcn Badge as base
- Apply variant styles via className
- Animated dot for "active" and "deploying" states
- Icons from lucide-react
