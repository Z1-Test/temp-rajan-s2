# Component Specification: AgentCard

## Metadata
- **Type**: Molecule
- **Category**: Data Display
- **Priority**: Critical
- **Composition**: Card + Badge + Avatar + Button
- **Related Feature**: Agent Registry Catalog

## Purpose
Display summary information for a single AI agent in the catalog or dashboard with action buttons.

## Component API

### Props Interface
```typescript
interface AgentCardProps {
  agentId: string;
  name: string;
  description?: string;
  status: 'active' | 'inactive' | 'deploying' | 'error';
  version?: string;
  tasksCompleted?: number;
  uptime?: number;
  capabilities?: string[];
  variant?: 'compact' | 'detailed';
  onDeploy?: () => void;
  onViewDetails?: () => void;
  className?: string;
}
```

## Composition
Card (shadcn) + AgentStatusBadge + Button (shadcn) + responsive grid layout

## Responsive Behavior
- Mobile: Full width, stacked layout
- Tablet: 2-column grid
- Desktop: 3-column grid
