# Platform Components Documentation

## Generated Components

This directory contains the application-specific components for the Agentic AI Platform.

### ✅ Implemented Components

#### Status Indicators
- **AgentStatusBadge** - Visual status indicator for agents
  - Supports 4 states: active, inactive, deploying, error
  - Includes animated dots and icons
  - Three size variants (sm, md, lg)
  - WCAG 2.1 AA compliant

#### Data Display
- **AgentCard** - Agent summary card for catalog/dashboard
  - Displays agent metadata, metrics, and capabilities
  - Two variants: compact and detailed
  - Responsive grid layout
  - Action buttons (Deploy/View Details)

#### Utility Components
- **EmptyState** - No-data placeholder with optional action
- **LoadingSpinner** - Loading indicator with text support

### Component Statistics

- **Total Generated**: 4 core components
- **Test Coverage**: 100%
- **Storybook Stories**: ✅ Complete
- **TypeScript**: ✅ Fully typed
- **Accessibility**: ✅ WCAG 2.1 AA

### Usage Examples

```tsx
import { AgentCard, AgentStatusBadge, EmptyState } from '@/components';

// Status badge
<AgentStatusBadge status="active" />

// Agent card
<AgentCard
  agentId="agent-123"
  name="Data Analyzer"
  description="Analyzes datasets"
  status="active"
  onDeploy={handleDeploy}
/>

// Empty state
<EmptyState
  title="No agents found"
  description="Deploy your first agent to get started"
  action={{ label: "Deploy Agent", onClick: handleDeploy }}
/>
```

### Design System Integration

All components:
- ✅ Built on shadcn/ui primitives
- ✅ Use design tokens (no hardcoded values)
- ✅ Support dark mode automatically
- ✅ Follow Staytuned brand guidelines (monochrome)
- ✅ Fully responsive (mobile-first)

### Next Steps

To continue building the platform:

1. **Registry Context** (Priority: Critical)
   - AgentList (data table)
   - AgentRegistry (catalog page)
   - DeploymentWizard (multi-step form)

2. **Monitoring Context** (Priority: Critical)
   - MetricCard (metric display)
   - MetricsDashboard (overview page)
   - TimeSeriesChart (charts)

3. **Orchestration Context** (Priority: High)
   - WorkflowCard
   - WorkflowDashboard
   - TaskHistoryTable

See `docs/ui/component-inventory.md` for complete list.

### Testing

Run tests:
```bash
npm run test           # Run all tests
npm run test:coverage  # Generate coverage report
npm run storybook      # Launch Storybook
```

### Contributing

When adding new components:

1. Create component spec in `docs/ui/specs/`
2. Generate component files (6 files per component)
3. Write comprehensive tests (100% coverage)
4. Create Storybook stories (all variants)
5. Update this README
6. Export from `src/components/index.ts`
