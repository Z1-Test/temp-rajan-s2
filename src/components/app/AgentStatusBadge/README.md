# AgentStatusBadge

Display visual status indicator for agent operational state with appropriate color coding and animated elements.

## Usage

```tsx
import { AgentStatusBadge } from '@/components/app/AgentStatusBadge';

function AgentCard() {
  return (
    <div>
      <h3>Data Analyzer</h3>
      <AgentStatusBadge status="active" />
    </div>
  );
}
```

## Props

See [AgentStatusBadge.types.ts](./AgentStatusBadge.types.ts) for complete TypeScript definitions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'active' \| 'inactive' \| 'deploying' \| 'error'` | - | Current operational status (required) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size variant |
| `showIcon` | `boolean` | `true` | Whether to show status icon |
| `showDot` | `boolean` | `true` (for active/deploying) | Whether to show animated dot |
| `className` | `string` | - | Additional CSS classes |

## Status Variants

- **Active**: Green with pulse animation - agent is running
- **Inactive**: Gray - agent is stopped
- **Deploying**: Amber with pulse and spinning icon - deployment in progress
- **Error**: Red - agent encountered an error

## Accessibility

- Uses semantic HTML with `role="status"`
- Includes ARIA label describing the status
- Decorative icons marked with `aria-hidden`
- Color is not the only indicator (includes icon and text)
- Supports screen readers with status announcements

## Examples

### All Status Variants
```tsx
<AgentStatusBadge status="active" />
<AgentStatusBadge status="inactive" />
<AgentStatusBadge status="deploying" />
<AgentStatusBadge status="error" />
```

### Different Sizes
```tsx
<AgentStatusBadge status="active" size="sm" />
<AgentStatusBadge status="active" size="md" />
<AgentStatusBadge status="active" size="lg" />
```

### Minimal Variant
```tsx
<AgentStatusBadge 
  status="active" 
  showIcon={false} 
  showDot={false} 
/>
```

## Related Components

- `Badge` - Base component from shadcn/ui
- `AgentCard` - Uses AgentStatusBadge to show agent status
- `AgentList` - Displays multiple AgentStatusBadges in table

## Storybook

View interactive examples in [Storybook](http://localhost:6006/?path=/story/app-agentstatusbadge).
