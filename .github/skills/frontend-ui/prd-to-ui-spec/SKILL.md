---
title: PRD to UI Specification
description: Transform Product Requirements Documents and feature specifications into detailed UI component specifications aligned with design system
tags:
  - frontend
  - ui
  - specification
  - prd
  - planning
name: prd-to-ui-spec
---

# PRD to UI Specification Skill

## What is it?

This skill transforms high-level Product Requirements Documents (PRD), feature specifications, and markdown documentation into detailed, actionable UI component specifications. It bridges the gap between product vision and implementation by extracting UI requirements, mapping to design system components, and producing structured specifications ready for development.

## Why use it?

- **Automation**: Reduces manual effort in translating PRD requirements into UI specs
- **Consistency**: Ensures all UI specifications follow a standardized format and design system
- **Completeness**: Guarantees all necessary aspects (accessibility, states, variants) are covered
- **Traceability**: Maintains clear links between product requirements and UI implementation
- **Design System Alignment**: Automatically maps requirements to existing design system components
- **Early Validation**: Identifies missing design tokens, patterns, or components before coding begins

---

## Input Requirements

This skill processes the following inputs:

### 1. Product Requirements Document (PRD)
- File location: `docs/product/PRD.md`
- Required sections:
  - Feature descriptions
  - User personas and use cases
  - Success metrics
  - Business value
  - Bounded contexts (DDD)

### 2. Feature Specifications
- Location: `docs/features/{context}/{feature-name}.md`
- Required content:
  - User stories (vertical slices)
  - Gherkin scenarios (acceptance criteria)
  - Feature metadata (issue URLs, status, flags)

### 3. Design System Documentation
- Location: `.github/skills/design-system/SKILL.md`
- Required content:
  - Design tokens (colors, spacing, typography)
  - Component hierarchy (atoms, molecules, organisms)
  - Accessibility standards
  - Component patterns

### 4. Design Assets (Optional)
- Figma files or mockups
- Wireframes or sketches
- Brand guidelines

---

## Output Specifications

The skill generates structured UI specifications in the following locations:

### 1. Requirements Document
**File**: `docs/ui/REQUIREMENTS.md`

Contains:
- Extracted UI requirements from PRD
- User flows and navigation structure
- Key interactions and behaviors
- Data display requirements
- Form and input requirements
- Responsive behavior needs

```markdown
# UI Requirements

## Overview
[Summary of UI needs extracted from PRD]

## User Personas & UI Needs
| Persona | UI Requirements | Priority |
|---------|----------------|----------|
| AI Engineer | Dashboard for agent monitoring | High |
| Platform Engineer | System configuration interface | High |

## Key User Flows
### Flow 1: Deploy Agent
1. Navigate to agent registry
2. Select agent from catalog
3. Configure deployment parameters
4. Review and confirm deployment
5. Monitor deployment progress

## Functional Requirements
### FR-001: Agent Dashboard
**Description**: Real-time monitoring dashboard for active agents
**Components Needed**: DataTable, StatusBadge, Chart, RefreshButton
**Data Requirements**: Agent metrics, health status, logs
**Interactions**: Sort, filter, refresh, drill-down
```

### 2. Component Inventory
**File**: `docs/ui/component-inventory.md`

Lists all required components mapped to design system:

```markdown
# Component Inventory

## Atoms Required
| Component | Design System | Status | Customization Needed |
|-----------|---------------|--------|---------------------|
| Button | ✅ Exists | Ready | None |
| Badge | ✅ Exists | Ready | Add "agent-status" variant |
| Input | ✅ Exists | Ready | None |
| Icon | ✅ Exists | Needs Extension | Add agent-specific icons |

## Molecules Required
| Component | Composition | Status | Priority |
|-----------|-------------|--------|----------|
| AgentCard | Card + Badge + Avatar + Button | New | High |
| MetricDisplay | Label + Value + Trend + Icon | New | High |
| SearchFilter | Input + Dropdown + Button | Exists | Medium |

## Organisms Required
| Component | Composition | Status | Priority |
|-----------|-------------|--------|----------|
| AgentDashboard | Header + Filters + DataTable + Pagination | New | Critical |
| DeploymentForm | FormField[] + Actions | New | Critical |
| AgentRegistry | SearchFilter + Grid + Cards | New | High |

## New Components to Build
- AgentCard
- MetricDisplay
- AgentDashboard
- DeploymentForm
- AgentRegistry

## Design System Gaps
- Need agent status color tokens
- Need specialized icons for agent types
- Need chart component library
```

### 3. Component Specifications
**Location**: `docs/ui/specs/{component-name}.spec.md`

Detailed specs for each new component:

```markdown
# Component Specification: AgentCard

## Metadata
- **Type**: Molecule
- **Category**: Data Display
- **Priority**: High
- **Design System Base**: Card component
- **Related Feature**: Agent Registry Catalog (FE-001)

## Purpose
Display summary information for a single AI agent in the catalog or dashboard.

## Component API

### Props Interface
```typescript
interface AgentCardProps {
  // Agent Data
  agentId: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'deploying' | 'error';
  version: string;
  
  // Metrics
  tasksCompleted?: number;
  uptime?: number;
  lastActive?: Date;
  
  // Visual
  icon?: React.ReactNode;
  badges?: Array<{ label: string; variant: BadgeVariant }>;
  
  // Actions
  onDeploy?: () => void;
  onViewDetails?: () => void;
  onStop?: () => void;
  
  // State
  isLoading?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  
  // Layout
  variant?: 'compact' | 'detailed';
  className?: string;
}
```

## Composition
```
AgentCard
├── Card (design system)
│   ├── Card.Header
│   │   ├── Avatar (icon/logo)
│   │   ├── Heading (name)
│   │   └── StatusBadge (status)
│   ├── Card.Body
│   │   ├── Text (description)
│   │   ├── MetricRow[]
│   │   │   ├── Icon
│   │   │   ├── Label
│   │   │   └── Value
│   │   └── BadgeList (tags/capabilities)
│   └── Card.Footer
│       ├── Button (primary action)
│       └── IconButton (secondary actions)
```

## Design Tokens Used
```css
/* Colors */
--agent-status-active: var(--color-success);
--agent-status-inactive: var(--color-text-muted);
--agent-status-deploying: var(--color-warning);
--agent-status-error: var(--color-error);

/* Spacing */
--agent-card-padding: var(--space-6);
--agent-card-gap: var(--space-4);

/* Sizing */
--agent-card-min-width: 300px;
--agent-card-max-width: 400px;
```

## Variants

### Size Variants
| Variant | Use Case | Dimensions |
|---------|----------|------------|
| compact | Dashboard grid view | 300x200px |
| detailed | Registry list view | 100% x auto |

### State Variants
| State | Visual Treatment | Behavior |
|-------|------------------|----------|
| default | Standard elevation | Hoverable, clickable |
| hover | Elevated shadow | Cursor pointer |
| selected | Primary border | Highlighted background |
| loading | Skeleton overlay | Disabled interactions |
| disabled | Reduced opacity | No interactions |

## Responsive Behavior
```css
/* Mobile (<768px) */
- Stack vertically
- Full width
- Compact variant
- Hide secondary metrics

/* Tablet (768px-1024px) */
- 2-column grid
- Detailed variant
- Show key metrics

/* Desktop (>1024px) */
- 3-column grid
- Full detailed variant
- Show all metrics
```

## Accessibility Requirements

### ARIA Attributes
```tsx
<article
  role="article"
  aria-labelledby={`agent-${agentId}-name`}
  aria-describedby={`agent-${agentId}-description`}
>
  <h3 id={`agent-${agentId}-name`}>{name}</h3>
  <p id={`agent-${agentId}-description`}>{description}</p>
  <div role="status" aria-live="polite">
    Status: {status}
  </div>
</article>
```

### Keyboard Navigation
- Tab: Focus on card
- Enter/Space: Trigger primary action
- Arrow keys: Navigate between cards in grid
- Escape: Deselect card

### Screen Reader Support
- Announce agent name, status, and key metrics
- Live region for status changes
- Action button labels clearly describe intent

### Accessibility Checklist
- [ ] Focus indicator visible and meets 3:1 contrast
- [ ] Status badge has sufficient color contrast (4.5:1)
- [ ] All interactive elements keyboard accessible
- [ ] Status changes announced to screen readers
- [ ] Touch targets minimum 44x44px
- [ ] Respects prefers-reduced-motion

## User Interactions

### Primary Actions
| Action | Trigger | Expected Behavior |
|--------|---------|-------------------|
| Deploy Agent | Click "Deploy" button | Open deployment form modal |
| View Details | Click card or "Details" | Navigate to agent detail page |
| Stop Agent | Click "Stop" button | Confirm and stop agent |

### Secondary Actions
| Action | Trigger | Expected Behavior |
|--------|---------|-------------------|
| Select Agent | Click checkbox/card | Add to selection set |
| Quick Actions | Click overflow menu | Show context menu |

### Hover Effects
- Elevate shadow (--elevation-2 → --elevation-3)
- Scale: 1.0 → 1.02
- Duration: 200ms ease-out

## Data Requirements

### Required Data
- Agent ID (unique identifier)
- Name (display text)
- Status (enum: active, inactive, deploying, error)
- Version (semantic version string)

### Optional Data
- Description (rich text, max 200 chars)
- Tasks completed count
- Uptime percentage
- Last active timestamp
- Custom icon/logo
- Capability badges

### Loading States
- Show skeleton while data fetching
- Progressive loading: name → status → metrics

## Error Handling

| Error Scenario | UI Treatment |
|----------------|--------------|
| Failed to load data | Error state with retry button |
| Missing required fields | Fallback to defaults, log warning |
| Action failed | Toast notification with error message |

## Edge Cases

| Case | Handling |
|------|----------|
| Very long agent name | Truncate with ellipsis, show tooltip on hover |
| No description | Show placeholder text: "No description provided" |
| Zero metrics | Show "N/A" or hide metric rows |
| Disabled during deployment | Show loading spinner, disable all actions |

## Testing Requirements

### Unit Tests
- [ ] Renders with required props
- [ ] Displays all variants correctly
- [ ] Handles missing optional props gracefully
- [ ] Calls action handlers when triggered
- [ ] Shows loading state correctly
- [ ] Keyboard navigation works as expected

### Integration Tests
- [ ] Fetches and displays agent data
- [ ] Updates status in real-time
- [ ] Handles API errors gracefully

### Accessibility Tests
- [ ] Passes axe-core audit
- [ ] Screen reader announces content correctly
- [ ] Keyboard navigation works without mouse

### Visual Regression Tests
- [ ] Default state
- [ ] All status variants
- [ ] Hover state
- [ ] Selected state
- [ ] Loading state
- [ ] Responsive breakpoints

## Implementation Notes

### Performance Considerations
- Memoize card component to prevent unnecessary re-renders
- Lazy load agent icon images
- Virtualize if rendering >50 cards

### Code Quality
- TypeScript strict mode
- 100% test coverage
- No prop drilling (use composition)
- Extract reusable sub-components

### Dependencies
- Design system Card component
- Design system Badge component
- Design system Button component
- date-fns for date formatting (optional)

## Related Components
- AgentList (uses AgentCard)
- AgentDashboard (uses AgentCard)
- AgentRegistry (uses AgentCard)

## Design References
- Figma: [Link to design]
- Storybook: [Link when implemented]

## Changelog
| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-12-30 | Initial specification |
```

---

## Processing Workflow

The skill follows this systematic process:

### Phase 1: Requirements Extraction
1. **Parse PRD**: Extract features, user personas, use cases
2. **Identify UI Needs**: Determine what UI is required for each feature
3. **Map to User Flows**: Define navigation and interaction sequences
4. **List Data Requirements**: Identify what data UI components will display
5. **Extract Constraints**: Note accessibility, performance, security requirements

### Phase 2: Design System Analysis
1. **Load Design System**: Read design tokens and component catalog
2. **Map Components**: Match UI needs to existing components
3. **Identify Gaps**: Find missing components or tokens
4. **Plan Extensions**: Determine which components need variants
5. **Validate Tokens**: Ensure all needed tokens exist

### Phase 3: Component Decomposition
1. **List All Components**: Create complete inventory (atoms → organisms)
2. **Categorize by Type**: Organize by atomic design hierarchy
3. **Prioritize**: Rank by implementation priority (critical → nice-to-have)
4. **Define Dependencies**: Map component composition relationships
5. **Estimate Complexity**: Assess effort for each component

### Phase 4: Specification Generation
1. **Create Template**: Use component spec template for each new component
2. **Define API**: Specify props, types, event handlers
3. **Document Variants**: Detail all visual and behavioral variants
4. **Specify Accessibility**: Define ARIA, keyboard nav, screen reader support
5. **Plan Testing**: Outline required test coverage
6. **Add Examples**: Provide usage examples and edge cases

### Phase 5: Validation & Refinement
1. **Check Completeness**: Ensure all PRD features have UI coverage
2. **Verify Design System**: Confirm all tokens and patterns exist
3. **Accessibility Audit**: Review against WCAG 2.1 AA requirements
4. **Identify Risks**: Flag complex or uncertain areas
5. **Request Clarification**: List any ambiguities needing product input

---

## Skill Outputs

### Primary Outputs
1. **`docs/ui/REQUIREMENTS.md`** - Extracted UI requirements
2. **`docs/ui/component-inventory.md`** - Complete component list
3. **`docs/ui/specs/*.spec.md`** - Detailed component specifications
4. **`docs/ui/design-gaps.md`** - Missing tokens/components

### Validation Artifacts
- **`docs/ui/prd-coverage-matrix.md`** - Maps PRD features to UI specs
- **`docs/ui/accessibility-checklist.md`** - A11y requirements checklist
- **`docs/ui/token-usage-report.md`** - Design token coverage

---

## Best Practices

### Specification Quality
- **Be Specific**: Avoid vague descriptions like "nice UI"
- **Use Design Tokens**: Reference tokens, never hardcode values
- **Show Examples**: Include code snippets and visual examples
- **Cover Edge Cases**: Think about empty states, errors, long content
- **Think Responsive**: Always specify mobile, tablet, desktop behavior

### Traceability
- **Link to PRD**: Reference specific PRD sections and features
- **Link to Issues**: Include GitHub issue URLs for features
- **Version Specs**: Track changes to specifications over time
- **Document Decisions**: Explain why certain approaches were chosen

### Collaboration
- **Use Standard Format**: Follow component spec template exactly
- **Request Feedback**: Flag areas needing designer/product input
- **Iterate Early**: Get specifications reviewed before coding
- **Share Knowledge**: Document patterns for reuse

---

## Common Patterns Extracted from PRD

### Dashboard Patterns
**When PRD mentions**: "monitoring", "real-time", "metrics", "dashboard"

**UI Requirements**:
- Data table with sorting/filtering
- Metric cards with trend indicators
- Status badges
- Refresh mechanism
- Auto-update capability

**Components Needed**:
- DataTable, MetricCard, StatusBadge, RefreshButton, Chart

### Form Patterns
**When PRD mentions**: "configuration", "settings", "create", "edit"

**UI Requirements**:
- Form fields with validation
- Multi-step wizard (if complex)
- Save/cancel actions
- Dirty state tracking
- Error handling

**Components Needed**:
- FormField, Input, Dropdown, Checkbox, Switch, Button, Stepper

### List/Catalog Patterns
**When PRD mentions**: "registry", "catalog", "library", "browse"

**UI Requirements**:
- Grid or list view toggle
- Search and filters
- Sorting options
- Pagination
- Item preview cards

**Components Needed**:
- SearchInput, FilterDropdown, SortDropdown, Pagination, Card, Grid

### Workflow Patterns
**When PRD mentions**: "workflow", "process", "steps", "pipeline"

**UI Requirements**:
- Step indicator
- Navigation between steps
- Progress tracking
- State persistence
- Validation per step

**Components Needed**:
- Stepper, ProgressBar, Button, FormField, StatusIndicator

---

## Integration with Other Skills

### Upstream Skills (Inputs)
- **doc-feature-specification**: Provides structured feature specs
- **research-prd-authoring**: Generates PRD documents
- **design-system**: Provides design tokens and component catalog

### Downstream Skills (Uses Output)
- **component-generation**: Uses specs to generate code
- **accessibility**: Validates accessibility requirements
- **testing-e2e**: Uses specs for test scenarios
- **visual-regression**: Uses specs for visual test baselines

---

## Validation Checklist

Before completing specification generation:

- [ ] All PRD features have corresponding UI requirements
- [ ] All required components are in the inventory
- [ ] All new components have complete specifications
- [ ] All design tokens referenced exist in design system
- [ ] All accessibility requirements documented
- [ ] All responsive behaviors specified
- [ ] All user interactions defined
- [ ] All edge cases covered
- [ ] All testing requirements outlined
- [ ] All dependencies identified
- [ ] Coverage matrix shows 100% PRD-to-UI mapping

---

## Limitations

- **Design Decisions**: This skill identifies UI needs but doesn't make visual design decisions (colors, layout aesthetics)
- **Complex Interactions**: Highly complex interactions may need human design input
- **Brand Guidelines**: Assumes design system already incorporates brand
- **Custom Patterns**: Novel UI patterns not in design system require designer involvement
- **User Research**: Doesn't conduct user research, relies on PRD persona data

---

## Governance

### Specification Updates
- PRD changes trigger specification review
- Specifications versioned alongside PRD versions
- Breaking changes in specs require stakeholder review

### Review Process
1. Product reviews UI requirements for completeness
2. Design reviews component specs for design system alignment
3. Engineering reviews specs for technical feasibility
4. Accessibility specialist reviews a11y requirements

---

## Example: End-to-End Transformation

### Input (from PRD)
```markdown
## Feature: Agent Registry Catalog

Users need to browse available AI agents, view their capabilities, 
and deploy them to their organization. The registry should support 
search, filtering by capability, and quick deployment.

**Personas**: AI Engineer, Platform Engineer
**Priority**: Critical
**Success Metric**: 90% of users can find and deploy an agent in <2 minutes
```

### Output (Component Spec)

✅ Generated `docs/ui/specs/agent-registry.spec.md`:
- Component API with search, filter, grid props
- Responsive grid layout (1-col mobile, 2-col tablet, 3-col desktop)
- Keyboard navigation (Tab, Arrow keys, Enter to deploy)
- ARIA labels for search and filters
- Loading states, empty states, error states
- Integration with AgentCard component

✅ Generated `docs/ui/component-inventory.md`:
- AgentRegistry (new organism)
- SearchInput (exists)
- FilterDropdown (exists)
- AgentCard (new molecule)
- Pagination (exists)

✅ Generated `docs/ui/REQUIREMENTS.md`:
- User flow: Land on registry → Search/filter → View agent → Deploy
- Data requirements: Agent list API, capability taxonomy
- Performance: Support 1000+ agents with virtualization

---

## Summary

This skill automates the critical bridge between product vision (PRD) and technical implementation (UI code) by:

1. **Extracting** UI requirements from PRD and feature docs
2. **Mapping** requirements to design system components
3. **Identifying** gaps and new components needed
4. **Generating** detailed, implementation-ready component specifications
5. **Validating** completeness, accessibility, and design system alignment

**Result**: Development teams receive clear, complete, actionable UI specifications that accelerate implementation while ensuring consistency, accessibility, and alignment with product goals.
