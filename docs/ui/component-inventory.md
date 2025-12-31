# Component Inventory - Agentic AI Platform

## Overview

This document catalogs all UI components required for the Agentic AI Platform, mapping them to shadcn/ui primitives and defining new application components to be built.

**Total Components**: 75+ (25 shadcn primitives + 50+ application components)

---

## shadcn/ui Primitives (Already Available)

These components are already implemented in `src/components/ui/` and ready to use:

### Form Components ✅
| Component | Status | Usage |
|-----------|--------|-------|
| Button | ✅ Ready | Primary actions, CTAs, form submissions |
| Input | ✅ Ready | Text input, email, password fields |
| Textarea | ⚠️ Missing | Multi-line text input |
| Select | ✅ Ready | Dropdown selections |
| Checkbox | ✅ Ready | Boolean toggles, multi-select lists |
| Switch | ✅ Ready | On/off settings |
| Radio Group | ✅ Ready | Single selection from options |
| Label | ✅ Ready | Form field labels |
| Form | ✅ Ready | Form wrapper with validation |

### Display Components ✅
| Component | Status | Usage |
|-----------|--------|-------|
| Card | ✅ Ready | Content containers, agent cards |
| Badge | ✅ Ready | Status indicators, tags |
| Avatar | ✅ Ready | User/agent representations |
| Separator | ✅ Ready | Visual dividers |
| Skeleton | ✅ Ready | Loading placeholders |
| Aspect Ratio | ⚠️ Missing | Image/video containers |
| Progress | ✅ Ready | Progress bars, completion indicators |

### Overlay Components ✅
| Component | Status | Usage |
|-----------|--------|-------|
| Dialog | ✅ Ready | Modal dialogs, confirmations |
| Sheet | ✅ Ready | Slide-out panels, drawers |
| Popover | ✅ Ready | Contextual popovers |
| Tooltip | ✅ Ready | Hover hints |
| Dropdown Menu | ✅ Ready | Action menus |
| Context Menu | ⚠️ Missing | Right-click menus |
| Alert Dialog | ⚠️ Missing | Confirmations, destructive actions |

### Data Components ✅
| Component | Status | Usage |
|-----------|--------|-------|
| Table | ✅ Ready | Data tables, lists |
| Slider | ✅ Ready | Range selections |
| Scroll Area | ✅ Ready | Scrollable containers |
| Calendar | ⚠️ Missing | Date pickers |
| Command | ⚠️ Missing | Command palette, search |

### Navigation Components ✅
| Component | Status | Usage |
|-----------|--------|-------|
| Tabs | ✅ Ready | Section switching |
| Accordion | ✅ Ready | Collapsible sections |
| Collapsible | ⚠️ Missing | Expandable content |

---

## Application Components to Build

### Priority Levels
- 🔴 **Critical**: Core platform functionality, blocks other features
- 🟠 **High**: Important user workflows, needed soon
- 🟡 **Medium**: Enhanced UX, can be iterative
- 🟢 **Low**: Nice-to-have, future enhancement

---

## Registry Context Components

### Agent Components

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **AgentCard** | Molecule | Card + Badge + Avatar + Button | 🔴 Critical | Display agent summary in catalog |
| **AgentList** | Organism | Table + Badge + DropdownMenu | 🔴 Critical | Tabular view of agents with actions |
| **AgentRegistry** | Organism | Grid + AgentCard + Input + Select | 🔴 Critical | Catalog browser with search/filter |
| **AgentDetailView** | Organism | Card + Tabs + Badge + Button | 🔴 Critical | Full agent details page |
| **AgentVersionSelector** | Molecule | Select + Badge | 🟠 High | Version dropdown with deprecation warnings |
| **AgentCapabilityTag** | Atom | Badge (variant) | 🟡 Medium | Capability badge with icon |
| **AgentStatusBadge** | Atom | Badge (custom) | 🔴 Critical | Agent status indicator (active/inactive/deploying/error) |
| **DeploymentWizard** | Organism | Multi-step Form + Stepper | 🔴 Critical | Agent deployment configuration flow |
| **DeploymentProgress** | Molecule | Progress + Timeline | 🟠 High | Deployment progress tracker |

### Estimated Files: 9 components × 6 files = 54 files

---

## Orchestration Context Components

### Workflow Components

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **WorkflowCard** | Molecule | Card + Badge + Progress | 🔴 Critical | Workflow summary card |
| **WorkflowList** | Organism | Table + Badge + DropdownMenu | 🔴 Critical | Workflow data table |
| **WorkflowDashboard** | Page | Grid + WorkflowCard + Filters | 🔴 Critical | Workflows overview page |
| **WorkflowCanvas** | Organism | Custom Canvas + Drag-Drop | 🟠 High | Visual workflow designer |
| **WorkflowExecutionViewer** | Organism | Graph Visualization + Timeline | 🔴 Critical | Real-time workflow execution view |
| **TaskNode** | Molecule | Card + Badge + Icon | 🟠 High | Individual task in workflow graph |
| **TaskDetailPanel** | Organism | Sheet + Form + Table | 🟠 High | Task configuration/detail drawer |
| **WorkflowStepper** | Molecule | Stepper + Status | 🟡 Medium | Multi-step workflow indicator |
| **TaskHistoryTable** | Organism | Table + Badge + Popover | 🟠 High | Historical task execution data |

### Estimated Files: 9 components × 6 files = 54 files

---

## Monitoring Context Components

### Metrics & Monitoring Components

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **MetricCard** | Molecule | Card + Icon + Value + Trend | 🔴 Critical | Single metric display with trend |
| **MetricsDashboard** | Page | Grid + MetricCard + Charts | 🔴 Critical | Real-time metrics overview |
| **TimeSeriesChart** | Molecule | Chart (Recharts) + Controls | 🔴 Critical | Line/area charts for metrics over time |
| **BarChart** | Molecule | Chart (Recharts) + Legend | 🟠 High | Bar charts for categorical data |
| **GaugeChart** | Molecule | Custom SVG + Animation | 🟡 Medium | Circular gauge for single metrics |
| **ChartControls** | Molecule | Select + DatePicker + Buttons | 🟠 High | Time range and metric selection |
| **AlertList** | Organism | Table + Badge + Actions | 🟠 High | Active alerts table |
| **AlertRuleEditor** | Organism | Form + ThresholdInput | 🟡 Medium | Create/edit alert rules |
| **TraceTimeline** | Organism | Custom Timeline + Spans | 🟠 High | Distributed trace visualization |
| **TraceSpanDetail** | Molecule | Accordion + Table | 🟡 Medium | Individual span details |
| **LogViewer** | Organism | ScrollArea + VirtualList + Search | 🟠 High | Real-time log streaming viewer |
| **HealthIndicator** | Atom | Badge + Icon (animated) | 🔴 Critical | System/agent health status |

### Estimated Files: 12 components × 6 files = 72 files

---

## Platform Context Components

### Authentication & Settings

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **LoginForm** | Organism | Form + Input + Button | 🔴 Critical | Login page form |
| **AuthLayout** | Template | Centered Layout + Card | 🔴 Critical | Authentication page wrapper |
| **UserProfileMenu** | Molecule | DropdownMenu + Avatar | 🔴 Critical | User menu in header |
| **OrganizationSettings** | Page | Form + Tabs | 🟠 High | Org settings page |
| **UserManagementTable** | Organism | Table + Badge + Actions | 🟠 High | User list with role management |
| **InviteUserDialog** | Molecule | Dialog + Form | 🟠 High | Invite user modal |
| **APIKeyList** | Organism | Table + Actions + CopyButton | 🟠 High | API key management table |
| **APIKeyCreateDialog** | Molecule | Dialog + Form + CodeBlock | 🟠 High | Create API key modal |
| **AuditLogViewer** | Organism | Table + Filters + Export | 🟡 Medium | Audit log browser |

### Estimated Files: 9 components × 6 files = 54 files

---

## Knowledge Context Components

### Knowledge Management

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **DocumentCard** | Molecule | Card + Icon + Badge + Actions | 🟠 High | Document in knowledge base |
| **DocumentUploader** | Molecule | File Input + Progress + List | 🟠 High | Drag-and-drop document upload |
| **KnowledgeBaseExplorer** | Page | Grid + Search + Filters | 🟠 High | Knowledge base browser |
| **MemoryTimeline** | Organism | Timeline + Cards | 🟡 Medium | Agent memory chronological view |
| **MemorySearchPanel** | Organism | Search + Filters + Results | 🟡 Medium | Search across agent memories |
| **EmbeddingStatusCard** | Molecule | Card + Progress + Status | 🟡 Medium | Embedding process status |
| **RetentionPolicyForm** | Organism | Form + DatePicker + Rules | 🟡 Medium | Configure memory retention |

### Estimated Files: 7 components × 6 files = 42 files

---

## Collaboration Context Components

### Agent Communication

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **MessageList** | Organism | ScrollArea + MessageCard | 🟡 Medium | Agent message timeline |
| **MessageCard** | Molecule | Card + Avatar + Timestamp | 🟡 Medium | Individual message display |
| **ChannelSidebar** | Organism | ScrollArea + List + Badge | 🟡 Medium | Channel navigation |
| **ChannelCreateDialog** | Molecule | Dialog + Form | 🟡 Medium | Create new channel |
| **AgentParticipantsList** | Molecule | List + Avatar + Badge | 🟡 Medium | Channel participants |

### Estimated Files: 5 components × 6 files = 30 files

---

## Simulation Context Components

### Testing & Simulation

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **ScenarioCard** | Molecule | Card + Badge + Actions | 🟡 Medium | Test scenario summary |
| **ScenarioBuilder** | Organism | Form + Stepper + CodeEditor | 🟡 Medium | Create simulation scenario |
| **SimulationResultsCard** | Molecule | Card + Progress + Chart | 🟡 Medium | Test results summary |
| **SimulationDiff** | Organism | Split View + Highlight | 🟢 Low | Compare results to baseline |
| **TestLogViewer** | Organism | ScrollArea + Tree + Search | 🟡 Medium | Detailed test execution logs |

### Estimated Files: 5 components × 6 files = 30 files

---

## Layout & Navigation Components

### Global Layout

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **AppHeader** | Organism | Logo + Nav + UserMenu + Search | 🔴 Critical | Global header |
| **AppSidebar** | Organism | Nav + Collapsible | 🔴 Critical | Main navigation sidebar |
| **DashboardLayout** | Template | Header + Sidebar + Main | 🔴 Critical | Primary app layout |
| **PageHeader** | Molecule | Heading + Breadcrumbs + Actions | 🔴 Critical | Page title with context |
| **Breadcrumbs** | Molecule | Links + Separators | 🟠 High | Navigation breadcrumbs |
| **SearchCommand** | Organism | Command + Input + Results | 🟠 High | Global search (Cmd+K) |
| **NavItem** | Atom | Link + Icon + Badge | 🔴 Critical | Navigation menu item |
| **Footer** | Molecule | Links + Text | 🟢 Low | Global footer |

### Estimated Files: 8 components × 6 files = 48 files

---

## Shared/Utility Components

### Common Utilities

| Component | Type | Composition | Priority | Description |
|-----------|------|-------------|----------|-------------|
| **EmptyState** | Molecule | Icon + Text + Button | 🔴 Critical | No-data placeholder |
| **ErrorState** | Molecule | Alert + Icon + Text + Button | 🔴 Critical | Error display with retry |
| **LoadingSpinner** | Atom | Custom SVG + Animation | 🔴 Critical | Loading indicator |
| **CopyButton** | Atom | Button + Tooltip + Animation | 🟠 High | Copy-to-clipboard button |
| **StatusIndicator** | Atom | Dot + Animation (pulse) | 🔴 Critical | Live status dot |
| **CodeBlock** | Molecule | Pre + Code + CopyButton + Syntax | 🟠 High | Syntax-highlighted code display |
| **JSONViewer** | Molecule | Tree + Collapse + Copy | 🟠 High | Interactive JSON explorer |
| **ConfirmDialog** | Molecule | AlertDialog + Form | 🔴 Critical | Confirmation modal |
| **Toast** | Molecule | Sonner + Custom Styling | ✅ Ready | Notification toasts (already installed) |
| **DataTable** | Organism | Table + Pagination + Sort + Filter | 🔴 Critical | Reusable data table with features |
| **Pagination** | Molecule | Buttons + Info | 🔴 Critical | Table pagination controls |
| **DateRangePicker** | Molecule | Popover + Calendar | 🟠 High | Date range selection |
| **ThemeToggle** | Atom | Button + Icon | 🟠 High | Dark mode toggle |
| **IconButton** | Atom | Button + Icon (no text) | 🔴 Critical | Icon-only button |
| **Kbd** | Atom | Styled span | 🟡 Medium | Keyboard shortcut display |

### Estimated Files: 15 components × 6 files = 90 files

---

## Missing shadcn Primitives to Add

| Component | Priority | Usage |
|-----------|----------|-------|
| Textarea | 🔴 Critical | Multi-line text input (comments, descriptions) |
| Aspect Ratio | 🟡 Medium | Image containers with fixed ratios |
| Context Menu | 🟡 Medium | Right-click menus |
| Alert Dialog | 🔴 Critical | Confirmation dialogs (separate from Dialog) |
| Calendar | 🟠 High | Date pickers |
| Command | 🟠 High | Command palette, search |
| Collapsible | 🟡 Medium | Expandable sections |

**Action Required**: Install missing shadcn components before generating app components.

---

## Component Statistics

### By Type
- **Atoms**: 15 components
- **Molecules**: 30 components
- **Organisms**: 28 components
- **Templates**: 3 components
- **Pages**: 6 components
- **Total Application Components**: 82 components

### By Priority
- 🔴 **Critical**: 32 components (build first)
- 🟠 **High**: 28 components (build second)
- 🟡 **Medium**: 17 components (build third)
- 🟢 **Low**: 5 components (future)

### By Context
- **Registry**: 9 components
- **Orchestration**: 9 components
- **Monitoring**: 12 components
- **Platform**: 9 components
- **Knowledge**: 7 components
- **Collaboration**: 5 components
- **Simulation**: 5 components
- **Layout**: 8 components
- **Shared**: 15 components
- **shadcn (existing)**: 25+ primitives

### Estimated File Count
- **Application Components**: 82 components × 6 files/component = **492 files**
- **shadcn Primitives**: 25 components × 1 file/component = **25 files**
- **Total**: **517 files**

---

## Build Order Recommendation

### Phase 1: Foundation (Week 1)
1. Install missing shadcn primitives
2. Build shared utility components
3. Build layout components
4. Create design tokens

### Phase 2: Core Features (Weeks 2-3)
1. Registry components (agent catalog)
2. Monitoring components (dashboards)
3. Platform components (auth, settings)

### Phase 3: Advanced Features (Weeks 4-5)
1. Orchestration components (workflow designer)
2. Knowledge components (knowledge base)
3. Collaboration components (messaging)
4. Simulation components (testing)

### Phase 4: Polish (Week 6)
1. Responsive refinements
2. Accessibility audits
3. Performance optimization
4. Storybook documentation

---

## Next Steps

1. ✅ Generate design tokens (CSS variables, Tailwind config)
2. ✅ Install missing shadcn primitives
3. ✅ Create component specifications for Critical components
4. ✅ Generate Critical components (32 components)
5. ✅ Generate High-priority components (28 components)
6. ⏸️ Generate Medium/Low-priority components (optional)
7. ✅ Create CI/CD pipelines
8. ✅ Create Pull Request

**Estimated Time**: 
- Critical components: ~4-6 hours (automated generation)
- High-priority components: ~3-4 hours
- Documentation + Tests: ~2 hours
- **Total**: 1 day for end-to-end platform

---

## Component Dependencies Graph

```
shadcn Primitives
    ↓
Shared Utilities (EmptyState, LoadingSpinner, StatusIndicator)
    ↓
Atoms (AgentStatusBadge, IconButton, NavItem)
    ↓
Molecules (AgentCard, MetricCard, PageHeader)
    ↓
Organisms (AgentRegistry, MetricsDashboard, WorkflowCanvas)
    ↓
Templates (DashboardLayout, AuthLayout)
    ↓
Pages (Agent Registry Page, Monitoring Page, Workflow Dashboard)
```

---

## Summary

This inventory identifies **82 application components** to build, composed from **25 shadcn primitives**. Following the shadcn integration strategy, we'll compose simple primitives into powerful application-specific components, ensuring:

- ✅ Consistent design system usage
- ✅ Accessibility built-in (from shadcn)
- ✅ Dark mode support
- ✅ TypeScript type safety
- ✅ 100% test coverage
- ✅ Complete Storybook documentation

**Ready to proceed with component generation!**
