---
title: Component Generation from Specifications
description: Generate production-ready React/TypeScript components from detailed specifications with complete tests, styles, and documentation
tags:
  - frontend
  - ui
  - component
  - generation
  - react
  - typescript
name: component-generation-from-specs
---

# Component Generation from Specifications Skill

## What is it?

This skill generates complete, production-ready UI components from detailed component specifications. It produces all necessary files including component implementation, TypeScript types, styles, tests, and Storybook stories—all aligned with the project's design system and coding standards.

## Why use it?

- **Speed**: Generate complete component scaffolding in seconds
- **Consistency**: Every component follows exact same structure and patterns
- **Completeness**: Never forget tests, types, or documentation
- **Quality**: Generated code meets all quality gates (linting, typing, testing)
- **Design System Compliance**: Automatically uses correct tokens and patterns
- **Best Practices**: Implements React/TypeScript best practices by default

---

## Input Requirements

This skill requires a complete component specification file with the following structure:

### Required Spec Sections
1. **Component API** - Props interface with TypeScript types
2. **Composition** - Component structure and children
3. **Design Tokens** - CSS variables used
4. **Variants** - All visual and behavioral variants
5. **Accessibility** - ARIA attributes, keyboard nav, screen reader support
6. **Responsive Behavior** - Breakpoint-specific behavior
7. **User Interactions** - Events and handlers
8. **Testing Requirements** - Test cases needed

### Spec File Location
- **Path**: `docs/ui/specs/{component-name}.spec.md`
- **Format**: Markdown with code blocks
- **Example**: `docs/ui/specs/agent-card.spec.md`

---

## Output Structure

Generates a complete component directory:

```
src/components/{ComponentName}/
├── index.ts                      # Public exports
├── {ComponentName}.tsx           # Component implementation
├── {ComponentName}.types.ts      # TypeScript interfaces
├── {ComponentName}.styles.ts     # Styled components or CSS modules
├── {ComponentName}.test.tsx      # Unit & integration tests
├── {ComponentName}.stories.tsx   # Storybook stories
└── README.md                     # Component documentation
```

---

## File Generation Details

### 1. Index File (`index.ts`)

**Purpose**: Barrel export for clean imports

```typescript
export { {ComponentName} } from './{ComponentName}';
export type { {ComponentName}Props } from './{ComponentName}.types';
```

**Example**: `src/components/AgentCard/index.ts`
```typescript
export { AgentCard } from './AgentCard';
export type { AgentCardProps } from './AgentCard.types';
```

---

### 2. Types File (`{ComponentName}.types.ts`)

**Purpose**: TypeScript interfaces and type definitions

**Generated from**: Component API section of spec

```typescript
/**
 * {Component description from spec}
 */
export interface {ComponentName}Props {
  /**
   * {Prop description from spec}
   */
  {propName}: {propType};
  
  /**
   * {Optional prop description}
   * @default {default value}
   */
  {optionalProp}?: {propType};
  
  // ... all props from spec
}

// Additional types for complex props
export type {AdditionalType} = {type definition};
```

**Example**: `src/components/AgentCard/AgentCard.types.ts`
```typescript
/**
 * Display summary information for a single AI agent
 */
export interface AgentCardProps {
  /**
   * Unique identifier for the agent
   */
  agentId: string;
  
  /**
   * Display name of the agent
   */
  name: string;
  
  /**
   * Current operational status
   */
  status: AgentStatus;
  
  /**
   * Visual variant
   * @default 'detailed'
   */
  variant?: 'compact' | 'detailed';
  
  /**
   * Shows loading state
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Called when deploy button is clicked
   */
  onDeploy?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Child elements
   */
  children?: React.ReactNode;
}

export type AgentStatus = 'active' | 'inactive' | 'deploying' | 'error';
```

---

### 3. Component File (`{ComponentName}.tsx`)

**Purpose**: Main component implementation

**Structure**:
1. Imports
2. Component declaration with forwardRef (if needed)
3. Prop destructuring with defaults
4. Hooks (state, effects, callbacks)
5. Computed values
6. Event handlers
7. Render logic
8. Display name assignment

**Template**:
```typescript
import React from 'react';
import { cn } from '@/lib/utils';
import { {ComponentName}Props } from './{ComponentName}.types';
import { Styled{ComponentName}, {/* style components */} } from './{ComponentName}.styles';

/**
 * {Component description from spec}
 * 
 * @example
 * ```tsx
 * <{ComponentName}
 *   {example props from spec}
 * />
 * ```
 */
export const {ComponentName} = React.forwardRef<HTML{Element}Element, {ComponentName}Props>(
  (
    {
      // Destructure all props with defaults
      prop1,
      prop2 = 'defaultValue',
      className,
      children,
      ...restProps
    },
    ref
  ) => {
    // 1. Hooks
    const [internalState, setInternalState] = React.useState();
    
    // 2. Computed values
    const computedValue = React.useMemo(() => {
      // computation
    }, [dependencies]);
    
    // 3. Event handlers
    const handleEvent = React.useCallback(() => {
      // handler logic
    }, [dependencies]);
    
    // 4. Effects
    React.useEffect(() => {
      // effect logic
    }, [dependencies]);
    
    // 5. Render
    return (
      <Styled{ComponentName}
        ref={ref}
        className={cn('{component-class}', className)}
        {...restProps}
      >
        {/* Component structure from spec */}
        {children}
      </Styled{ComponentName}>
    );
  }
);

{ComponentName}.displayName = '{ComponentName}';
```

**Example**: `src/components/AgentCard/AgentCard.tsx`
```typescript
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { AgentCardProps, AgentStatus } from './AgentCard.types';
import {
  StyledAgentCard,
  CardHeader,
  CardBody,
  CardFooter,
  MetricRow
} from './AgentCard.styles';

/**
 * Display summary information for a single AI agent in the catalog or dashboard.
 * 
 * @example
 * ```tsx
 * <AgentCard
 *   agentId="agent-123"
 *   name="Data Analyzer"
 *   status="active"
 *   onDeploy={() => console.log('Deploy')}
 * />
 * ```
 */
export const AgentCard = React.forwardRef<HTMLDivElement, AgentCardProps>(
  (
    {
      agentId,
      name,
      description,
      status,
      version,
      tasksCompleted,
      uptime,
      lastActive,
      icon,
      badges = [],
      onDeploy,
      onViewDetails,
      onStop,
      isLoading = false,
      isDisabled = false,
      isSelected = false,
      variant = 'detailed',
      className,
      ...restProps
    },
    ref
  ) => {
    // Status badge variant mapping
    const statusVariant = React.useMemo(() => {
      const variantMap: Record<AgentStatus, string> = {
        active: 'success',
        inactive: 'secondary',
        deploying: 'warning',
        error: 'destructive',
      };
      return variantMap[status];
    }, [status]);
    
    // Handle primary action
    const handlePrimaryAction = React.useCallback(() => {
      if (status === 'active') {
        onViewDetails?.();
      } else {
        onDeploy?.();
      }
    }, [status, onDeploy, onViewDetails]);
    
    // Format metrics
    const formattedUptime = uptime ? `${uptime}%` : 'N/A';
    const formattedLastActive = lastActive
      ? new Intl.RelativeTimeFormat('en').format(
          Math.floor((lastActive.getTime() - Date.now()) / 1000 / 60),
          'minute'
        )
      : 'N/A';
    
    return (
      <StyledAgentCard
        ref={ref}
        className={cn(
          'agent-card',
          `agent-card--${variant}`,
          isSelected && 'agent-card--selected',
          isDisabled && 'agent-card--disabled',
          className
        )}
        role="article"
        aria-labelledby={`agent-${agentId}-name`}
        aria-describedby={`agent-${agentId}-description`}
        {...restProps}
      >
        {isLoading ? (
          <CardSkeleton />
        ) : (
          <>
            <CardHeader>
              {icon && <div className="agent-icon">{icon}</div>}
              <h3 id={`agent-${agentId}-name`}>{name}</h3>
              <Badge variant={statusVariant}>
                {status}
              </Badge>
            </CardHeader>
            
            <CardBody>
              {description && (
                <p id={`agent-${agentId}-description`}>{description}</p>
              )}
              
              {variant === 'detailed' && (
                <>
                  <MetricRow>
                    <span>Tasks:</span>
                    <strong>{tasksCompleted ?? 'N/A'}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>Uptime:</span>
                    <strong>{formattedUptime}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>Last Active:</span>
                    <strong>{formattedLastActive}</strong>
                  </MetricRow>
                </>
              )}
              
              {badges.length > 0 && (
                <div className="badge-list">
                  {badges.map((badge, idx) => (
                    <Badge key={idx} variant={badge.variant}>
                      {badge.label}
                    </Badge>
                  ))}
                </div>
              )}
            </CardBody>
            
            <CardFooter>
              <Button
                onClick={handlePrimaryAction}
                isDisabled={isDisabled}
                variant="primary"
              >
                {status === 'active' ? 'View Details' : 'Deploy'}
              </Button>
              {status === 'active' && onStop && (
                <Button
                  onClick={onStop}
                  variant="ghost"
                  isDisabled={isDisabled}
                >
                  Stop
                </Button>
              )}
            </CardFooter>
          </>
        )}
      </StyledAgentCard>
    );
  }
);

AgentCard.displayName = 'AgentCard';
```

---

### 4. Styles File (`{ComponentName}.styles.ts`)

**Purpose**: Component styling using design tokens

**Approaches Supported**:
- Styled Components (styled-components)
- CSS Modules (*.module.css)
- Tailwind CSS (utility classes)
- Vanilla Extract

**Example (Styled Components)**: `src/components/AgentCard/AgentCard.styles.ts`
```typescript
import styled from 'styled-components';

export const StyledAgentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--agent-card-gap);
  padding: var(--agent-card-padding);
  background: var(--color-surface);
  border: var(--border-1) solid var(--color-border);
  border-radius: var(--radius-card);
  transition: var(--transition-all);
  min-width: var(--agent-card-min-width);
  max-width: var(--agent-card-max-width);
  
  &:hover:not(.agent-card--disabled) {
    box-shadow: var(--elevation-2);
    transform: translateY(-2px);
  }
  
  &.agent-card--selected {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px var(--color-primary-alpha-20);
  }
  
  &.agent-card--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.agent-card--compact {
    max-width: 300px;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  
  .agent-icon {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  
  h3 {
    flex: 1;
    margin: 0;
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--color-text-primary);
  }
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
  }
  
  .badge-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: var(--border-1) solid var(--color-border);
`;

export const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--text-sm);
  
  span {
    color: var(--color-text-secondary);
  }
  
  strong {
    color: var(--color-text-primary);
    font-weight: var(--font-medium);
  }
`;
```

**Example (CSS Modules)**: `src/components/AgentCard/AgentCard.module.css`
```css
.agentCard {
  display: flex;
  flex-direction: column;
  gap: var(--agent-card-gap);
  padding: var(--agent-card-padding);
  background: var(--color-surface);
  border: var(--border-1) solid var(--color-border);
  border-radius: var(--radius-card);
  transition: var(--transition-all);
}

.agentCard:hover:not(.disabled) {
  box-shadow: var(--elevation-2);
  transform: translateY(-2px);
}

.agentCard.selected {
  border-color: var(--color-primary);
}

/* ... rest of styles */
```

---

### 5. Test File (`{ComponentName}.test.tsx`)

**Purpose**: Comprehensive unit and integration tests

**Generated from**: Testing Requirements section of spec

**Structure**:
1. Imports and setup
2. Describe block per component
3. Test cases for:
   - Rendering
   - Props handling
   - User interactions
   - Accessibility
   - Edge cases

**Template**:
```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { {ComponentName} } from './{ComponentName}';
import type { {ComponentName}Props } from './{ComponentName}.types';

expect.extend(toHaveNoViolations);

describe('{ComponentName}', () => {
  const defaultProps: {ComponentName}Props = {
    // minimal required props
  };
  
  describe('Rendering', () => {
    it('renders with required props', () => {
      render(<{ComponentName} {...defaultProps} />);
      expect(screen.getByRole('...')).toBeInTheDocument();
    });
    
    it('applies custom className', () => {
      const { container } = render(
        <{ComponentName} {...defaultProps} className="custom-class" />
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
  
  describe('Variants', () => {
    it('renders {variant} variant correctly', () => {
      render(<{ComponentName} {...defaultProps} variant="{variant}" />);
      // assertions
    });
  });
  
  describe('Interactions', () => {
    it('calls {handler} when {action}', async () => {
      const handleEvent = vi.fn();
      render(<{ComponentName} {...defaultProps} on{Event}={handleEvent} />);
      
      await userEvent.click(screen.getByRole('button'));
      expect(handleEvent).toHaveBeenCalledTimes(1);
    });
  });
  
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<{ComponentName} {...defaultProps} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
    
    it('supports keyboard navigation', async () => {
      render(<{ComponentName} {...defaultProps} />);
      const element = screen.getByRole('...');
      
      element.focus();
      await userEvent.keyboard('{Enter}');
      // assertions
    });
  });
  
  describe('Edge Cases', () => {
    it('handles missing optional props gracefully', () => {
      render(<{ComponentName} {...defaultProps} optionalProp={undefined} />);
      // assertions
    });
  });
});
```

**Example**: `src/components/AgentCard/AgentCard.test.tsx`
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AgentCard } from './AgentCard';
import type { AgentCardProps } from './AgentCard.types';

expect.extend(toHaveNoViolations);

describe('AgentCard', () => {
  const defaultProps: AgentCardProps = {
    agentId: 'agent-123',
    name: 'Test Agent',
    status: 'active' as const,
    version: '1.0.0',
  };
  
  describe('Rendering', () => {
    it('renders agent name and status', () => {
      render(<AgentCard {...defaultProps} />);
      
      expect(screen.getByText('Test Agent')).toBeInTheDocument();
      expect(screen.getByText('active')).toBeInTheDocument();
    });
    
    it('displays description when provided', () => {
      render(
        <AgentCard {...defaultProps} description="Test description" />
      );
      
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });
    
    it('renders compact variant', () => {
      const { container } = render(
        <AgentCard {...defaultProps} variant="compact" />
      );
      
      expect(container.firstChild).toHaveClass('agent-card--compact');
    });
  });
  
  describe('Status Variants', () => {
    it.each(['active', 'inactive', 'deploying', 'error'] as const)(
      'displays %s status correctly',
      (status) => {
        render(<AgentCard {...defaultProps} status={status} />);
        expect(screen.getByText(status)).toBeInTheDocument();
      }
    );
  });
  
  describe('Interactions', () => {
    it('calls onDeploy when deploy button clicked', async () => {
      const handleDeploy = vi.fn();
      render(
        <AgentCard
          {...defaultProps}
          status="inactive"
          onDeploy={handleDeploy}
        />
      );
      
      await userEvent.click(screen.getByRole('button', { name: /deploy/i }));
      expect(handleDeploy).toHaveBeenCalledTimes(1);
    });
    
    it('calls onViewDetails for active agent', async () => {
      const handleViewDetails = vi.fn();
      render(
        <AgentCard {...defaultProps} onViewDetails={handleViewDetails} />
      );
      
      await userEvent.click(
        screen.getByRole('button', { name: /view details/i })
      );
      expect(handleViewDetails).toHaveBeenCalledTimes(1);
    });
    
    it('does not trigger actions when disabled', async () => {
      const handleDeploy = vi.fn();
      render(
        <AgentCard
          {...defaultProps}
          isDisabled
          onDeploy={handleDeploy}
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      
      await userEvent.click(button);
      expect(handleDeploy).not.toHaveBeenCalled();
    });
  });
  
  describe('Loading State', () => {
    it('shows skeleton when loading', () => {
      render(<AgentCard {...defaultProps} isLoading />);
      
      expect(screen.queryByText('Test Agent')).not.toBeInTheDocument();
      // Check for skeleton (implementation-specific)
    });
  });
  
  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<AgentCard {...defaultProps} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
    
    it('has proper ARIA labels', () => {
      render(<AgentCard {...defaultProps} description="Test desc" />);
      
      const article = screen.getByRole('article');
      expect(article).toHaveAttribute('aria-labelledby', 'agent-agent-123-name');
      expect(article).toHaveAttribute('aria-describedby', 'agent-agent-123-description');
    });
    
    it('supports keyboard navigation', async () => {
      const handleDeploy = vi.fn();
      render(
        <AgentCard {...defaultProps} status="inactive" onDeploy={handleDeploy} />
      );
      
      const button = screen.getByRole('button', { name: /deploy/i });
      button.focus();
      
      await userEvent.keyboard('{Enter}');
      expect(handleDeploy).toHaveBeenCalled();
    });
  });
  
  describe('Edge Cases', () => {
    it('handles very long agent names', () => {
      const longName = 'A'.repeat(100);
      render(<AgentCard {...defaultProps} name={longName} />);
      
      expect(screen.getByText(longName)).toBeInTheDocument();
    });
    
    it('renders without optional metrics', () => {
      render(<AgentCard {...defaultProps} variant="detailed" />);
      
      expect(screen.getByText('N/A')).toBeInTheDocument();
    });
    
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<AgentCard {...defaultProps} ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});
```

---

### 6. Stories File (`{ComponentName}.stories.tsx`)

**Purpose**: Storybook documentation and interactive examples

**Structure**:
1. Meta configuration
2. Default story
3. Stories for each variant
4. Stories for each state
5. Interactive playground story

**Template**:
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { {ComponentName} } from './{ComponentName}';

const meta: Meta<typeof {ComponentName}> = {
  title: 'Components/{Category}/{ComponentName}',
  component: {ComponentName},
  tags: ['autodocs'],
  argTypes: {
    // Control definitions from spec
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof {ComponentName}>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const {Variant}: Story = {
  args: {
    variant: '{variant}',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <{ComponentName} variant="variant1" />
      <{ComponentName} variant="variant2" />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    // Interactive props
  },
  play: async ({ canvasElement }) => {
    // Interaction testing
  },
};
```

**Example**: `src/components/AgentCard/AgentCard.stories.tsx`
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { AgentCard } from './AgentCard';

const meta: Meta<typeof AgentCard> = {
  title: 'Components/DataDisplay/AgentCard',
  component: AgentCard,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['active', 'inactive', 'deploying', 'error'],
    },
    variant: {
      control: 'select',
      options: ['compact', 'detailed'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AgentCard>;

export const Default: Story = {
  args: {
    agentId: 'agent-001',
    name: 'Data Analyzer',
    description: 'Analyzes large datasets and extracts insights',
    status: 'active',
    version: '2.1.0',
    tasksCompleted: 1247,
    uptime: 99.8,
    badges: [
      { label: 'Python', variant: 'secondary' },
      { label: 'ML', variant: 'info' },
    ],
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    variant: 'compact',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      <AgentCard
        agentId="agent-1"
        name="Active Agent"
        status="active"
        version="1.0.0"
      />
      <AgentCard
        agentId="agent-2"
        name="Inactive Agent"
        status="inactive"
        version="1.0.0"
      />
      <AgentCard
        agentId="agent-3"
        name="Deploying Agent"
        status="deploying"
        version="1.0.0"
      />
      <AgentCard
        agentId="agent-4"
        name="Error Agent"
        status="error"
        version="1.0.0"
      />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    onDeploy: () => alert('Deploy clicked'),
    onViewDetails: () => alert('View details clicked'),
    onStop: () => alert('Stop clicked'),
  },
};

export const LongContent: Story = {
  args: {
    agentId: 'agent-long',
    name: 'Agent with a Very Long Name That Should Truncate Properly',
    description: 'This is a very long description that contains a lot of text to test how the component handles content overflow and text wrapping in various scenarios including mobile and desktop viewports.',
    status: 'active',
    version: '1.0.0',
    badges: Array.from({ length: 10 }, (_, i) => ({
      label: `Skill ${i + 1}`,
      variant: 'secondary' as const,
    })),
  },
};
```

---

### 7. README File (`README.md`)

**Purpose**: Component documentation for developers

**Sections**:
1. Overview
2. Installation (if standalone)
3. Usage examples
4. Props API reference
5. Accessibility notes
6. Related components

**Example**: `src/components/AgentCard/README.md`
```markdown
# AgentCard

Display summary information for a single AI agent in the catalog or dashboard.

## Usage

```tsx
import { AgentCard } from '@/components/AgentCard';

function AgentRegistry() {
  return (
    <AgentCard
      agentId="agent-123"
      name="Data Analyzer"
      description="Analyzes datasets"
      status="active"
      onDeploy={handleDeploy}
    />
  );
}
```

## Props

See [AgentCard.types.ts](./AgentCard.types.ts) for complete TypeScript definitions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `agentId` | `string` | - | Unique identifier (required) |
| `name` | `string` | - | Display name (required) |
| `status` | `AgentStatus` | - | Current status (required) |
| `variant` | `'compact' \| 'detailed'` | `'detailed'` | Visual variant |
| `onDeploy` | `() => void` | - | Deploy button handler |

## Accessibility

- Keyboard navigable (Tab, Enter, Space)
- Screen reader announcements for status changes
- ARIA labels for all interactive elements
- Focus indicators meet WCAG 2.1 AA

## Related Components

- `AgentList` - Container for multiple AgentCards
- `AgentDashboard` - Uses AgentCard in dashboard context
- `Card` - Base component

## Storybook

View interactive examples in [Storybook](http://localhost:6006/?path=/story/components-datadisplay-agentcard).
```

---

## Generation Patterns

### Pattern 1: Atomic Component (Button, Input)
- Simple, single-purpose
- Minimal composition
- Few variants
- Straightforward tests

### Pattern 2: Molecule (FormField, SearchInput)
- Combines 2-3 atoms
- Moderate complexity
- State management
- Integration tests

### Pattern 3: Organism (DataTable, Modal)
- Complex composition
- Multiple sub-components
- Advanced state/logic
- Comprehensive test suites

---

## Code Quality Standards

### TypeScript
- [ ] Strict mode enabled
- [ ] All props typed with interfaces
- [ ] No `any` types
- [ ] Exported types for consumers
- [ ] JSDoc comments for all public APIs

### React
- [ ] Functional components with hooks
- [ ] ForwardRef for DOM access
- [ ] Memoization where appropriate (`React.memo`, `useMemo`, `useCallback`)
- [ ] Proper dependency arrays
- [ ] Display name assigned

### Styling
- [ ] Design tokens used (no hardcoded values)
- [ ] Responsive behavior implemented
- [ ] Dark mode support (if applicable)
- [ ] CSS follows naming convention
- [ ] Minimal specificity

### Testing
- [ ] 100% code coverage
- [ ] All variants tested
- [ ] User interactions tested
- [ ] Accessibility tested (axe)
- [ ] Edge cases covered

### Performance
- [ ] No unnecessary re-renders
- [ ] Expensive computations memoized
- [ ] Lazy loading for heavy deps
- [ ] Bundle size monitored

---

## Integration with Design System

### Token Usage
- **Always use**: Design token variables
- **Never use**: Hardcoded values (colors, spacing, fonts)
- **Reference**: Design system token documentation

### Component Inheritance
- **Extend**: Existing design system components when possible
- **Compose**: Build organisms from design system atoms/molecules
- **Override**: Only when absolutely necessary with clear documentation

---

## Best Practices

1. **Start Simple**: Generate minimal viable component first
2. **Test Early**: Write tests alongside implementation
3. **Document as You Go**: Add JSDoc comments during development
4. **Review Spec**: Constantly reference the component spec
5. **Validate Tokens**: Ensure all design tokens exist before using
6. **Think Accessibility**: Implement ARIA from the start, not as afterthought
7. **Handle Edge Cases**: Consider empty states, long content, errors
8. **Optimize Performance**: Profile and optimize before committing

---

## Validation Checklist

Before marking component complete:

- [ ] All files generated (tsx, types, styles, test, stories, README)
- [ ] Component renders without errors
- [ ] All tests pass with 100% coverage
- [ ] No TypeScript errors or warnings
- [ ] No ESLint errors or warnings
- [ ] Storybook stories load and render correctly
- [ ] Accessibility audit passes (axe-core)
- [ ] Meets performance budgets
- [ ] Design tokens used correctly
- [ ] Responsive behavior works as specced
- [ ] All variants implemented
- [ ] All user interactions work
- [ ] Documentation complete

---

## Example Generation Flow

### Input
`docs/ui/specs/agent-card.spec.md` containing:
- Props interface
- Composition structure
- Design tokens
- Variants and states
- Accessibility requirements

### Process
1. Parse spec file
2. Extract props → Generate `.types.ts`
3. Extract composition → Generate `.tsx`
4. Extract tokens → Generate `.styles.ts`
5. Extract test cases → Generate `.test.tsx`
6. Extract variants → Generate `.stories.tsx`
7. Create exports → Generate `index.ts`
8. Summarize usage → Generate `README.md`

### Output
Complete `src/components/AgentCard/` directory with 7 files

### Validation
Run linting, type checking, tests, and Storybook build

---

## Limitations

- **Novel Patterns**: Completely new UI patterns not in spec require human design
- **Complex State**: Very complex state management may need custom logic
- **Third-party Integrations**: External library integrations may need manual tweaking
- **Advanced Animations**: Complex animations beyond standard transitions need custom work

---

## Summary

This skill automates component scaffolding from specifications, generating:
- Type-safe React/TypeScript components
- Design system-aligned styles
- Comprehensive test suites
- Interactive Storybook documentation
- Developer-friendly README files

**Result**: Production-ready components in minutes, not hours, with guaranteed quality, consistency, and completeness.
