# Dependency Resolution Skill

## Purpose

Analyze and resolve implementation dependencies between features following the execution flow.

## Inputs

- `docs/execution/execution-flow.md`
- Feature specification documents
- Current implementation state

## Responsibilities

- Parse execution flow document
- Identify feature dependencies
- Determine implementation order
- Detect circular dependencies
- Validate dependency availability
- Generate implementation plan

## Output Format

```yaml
implementation_order:
  phase_1_foundation:
    - feature: user-authentication-authorization
      dependencies: []
      status: ready
    
    - feature: api-key-management
      dependencies: []
      status: ready

  phase_2_core:
    - feature: agent-registry-catalog
      dependencies: [user-authentication-authorization]
      status: blocked
      blocking_on: [user-authentication-authorization]
    
    - feature: workflow-definition-engine
      dependencies: [user-authentication-authorization, api-key-management]
      status: blocked
      blocking_on: [user-authentication-authorization, api-key-management]

  phase_3_parallel:
    parallel_streams:
      - stream: orchestration
        features: [workflow-execution-engine, dynamic-agent-task-routing]
        dependencies: [workflow-definition-engine]
      
      - stream: monitoring
        features: [real-time-agent-metrics, observability-infrastructure]
        dependencies: [agent-registry-catalog]
```

## Rules

- MUST follow execution-flow.md exactly
- MUST NOT invent new dependencies
- MUST validate all dependencies exist
- MUST detect circular dependencies
- MUST allow parallel implementation where specified
- MUST block dependent features until dependencies complete

## Validation Checks

1. All referenced features exist in `docs/features/`
2. No circular dependency cycles
3. All dependencies are declared
4. Execution order is deterministic
5. Parallel groups are truly independent

## Error Handling

If validation fails:
- List missing feature specifications
- Report circular dependency chains
- Suggest resolution strategies
- HALT implementation until resolved

## Example Analysis

Input:
```
Epic: Foundation Layer
  - Feature A
  - Feature B

Epic: Core Layer  
  - Feature C (depends on Feature A)
  - Feature D (depends on Feature B)
```

Output:
```
Phase 1: [Feature A, Feature B] (parallel OK)
Phase 2: [Feature C, Feature D] (parallel OK, requires Phase 1)
```

## Prohibited Actions

- Modifying execution flow
- Reordering without approval
- Implementing without dependencies
- Creating new dependencies
- Skipping validation
