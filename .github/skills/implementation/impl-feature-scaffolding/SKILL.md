# Feature Scaffolding Skill

## Purpose

Generate the initial code structure for a feature based on its approved specification document.

## Inputs

- Feature specification document path
- Target bounded context
- Technology stack configuration

## Responsibilities

- Read feature specification from `docs/features/`
- Create folder structure following project conventions
- Generate base files (components, services, types, tests)
- Apply naming conventions and architectural patterns
- Create placeholder implementations with TODO markers
- Generate initial test files with describe blocks

## Output Format

```typescript
// Feature implementation structure
src/
  features/
    <bounded-context>/
      <feature-name>/
        index.ts
        types.ts
        components/
        services/
        hooks/
        __tests__/
```

## Rules

- MUST preserve all acceptance criteria as test cases
- MUST follow existing project structure patterns
- MUST NOT implement business logic (scaffolding only)
- MUST generate TypeScript types from feature spec
- MUST create test files for each component/service
- MUST include JSDoc comments with feature context

## Dependencies

- Feature specification document
- Project architecture guidelines
- Technology stack definition

## Example

Input: `docs/features/platform/feature-user-authentication-authorization.md`

Output:
```
src/features/platform/authentication/
  index.ts
  types.ts
  components/
    LoginForm/
      LoginForm.tsx
      LoginForm.test.tsx
      LoginForm.types.ts
  services/
    authService.ts
    authService.test.ts
  hooks/
    useAuth.ts
    useAuth.test.ts
```

## Prohibited Actions

- Implementing business logic
- Making API calls
- Creating database schemas
- Deploying infrastructure
- Creating issues or PRs
