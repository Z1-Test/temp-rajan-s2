# Integration Orchestration Skill

## Purpose

Coordinate integration between implemented features following dependency contracts.

## Inputs

- Implemented features
- Feature specifications
- Integration requirements
- API contracts

## Responsibilities

- Identify integration points between features
- Generate integration layer code
- Create integration tests
- Validate API contracts
- Handle cross-feature communication
- Ensure data consistency

## Integration Patterns

### 1. Service-to-Service
```typescript
// Feature A exposes service
export class WorkflowDefinitionService {
  async createWorkflow(definition: WorkflowDefinition): Promise<Workflow> {
    // Implementation
  }
}

// Feature B consumes service
export class WorkflowExecutionEngine {
  constructor(
    private readonly definitionService: WorkflowDefinitionService
  ) {}
  
  async execute(workflowId: string) {
    const definition = await this.definitionService.getWorkflow(workflowId);
    // Execute workflow
  }
}
```

### 2. Event-Driven
```typescript
// Feature A emits events
export class AgentRegistryService {
  async registerAgent(agent: Agent) {
    const registered = await this.repository.save(agent);
    this.eventBus.publish(new AgentRegisteredEvent(registered));
    return registered;
  }
}

// Feature B listens to events
export class MetricsCollector {
  @OnEvent('agent.registered')
  handleAgentRegistered(event: AgentRegisteredEvent) {
    this.startMetricsCollection(event.agent.id);
  }
}
```

### 3. Shared State
```typescript
// Feature A manages state
export class WorkflowStateManager {
  async updateState(workflowId: string, state: WorkflowState) {
    await this.stateStore.set(workflowId, state);
  }
}

// Feature B reads state
export class DynamicTaskRouter {
  async routeTask(task: Task) {
    const workflowState = await this.stateManager.getState(task.workflowId);
    // Route based on state
  }
}
```

## Output Format

```typescript
// Integration layer
src/
  integrations/
    workflow-to-execution/
      index.ts
      integration.ts
      integration.test.ts
    registry-to-metrics/
      index.ts
      integration.ts
      integration.test.ts
```

## Rules

- MUST respect feature boundaries
- MUST use defined API contracts
- MUST handle integration failures gracefully
- MUST test integration scenarios
- MUST NOT create tight coupling
- MUST use dependency injection
- MUST version integration contracts

## Integration Tests

```typescript
describe('Workflow Definition to Execution Integration', () => {
  it('should execute workflow created by definition service', async () => {
    // Create workflow via definition service
    const workflow = await definitionService.createWorkflow({
      name: 'Test Workflow',
      steps: [...]
    });
    
    // Execute via execution engine
    const execution = await executionEngine.execute(workflow.id);
    
    // Verify integration
    expect(execution.workflowId).toBe(workflow.id);
    expect(execution.status).toBe('running');
  });
});
```

## Validation Checks

- All integration points identified
- API contracts documented
- Error scenarios handled
- Retry logic implemented
- Circuit breakers configured
- Integration tests passing

## Prohibited Actions

- Creating direct dependencies between features
- Bypassing API contracts
- Sharing database tables directly
- Hardcoding integration logic
- Skipping integration tests
