# Test Generation Skill

## Purpose

Generate comprehensive test suites based on feature specifications and Gherkin scenarios.

## Inputs

- Feature specification document
- Gherkin scenarios document (if available)
- Implementation files
- Test coverage requirements

## Responsibilities

- Generate unit tests for all components/services
- Generate integration tests for feature workflows
- Generate e2e tests for critical user journeys
- Map Gherkin scenarios to test cases
- Create test fixtures and mocks
- Ensure test coverage targets are met

## Test Layers

### 1. Unit Tests
- Component rendering
- Service methods
- Utility functions
- Error handling
- Edge cases

### 2. Integration Tests
- Feature workflows
- Component interactions
- Service orchestration
- State management

### 3. E2E Tests
- Critical user journeys
- Cross-feature flows
- Error recovery paths

## Output Format

```typescript
// Unit Test
describe('AuthenticationService', () => {
  describe('authenticate', () => {
    it('should return token for valid credentials', async () => {
      // Arrange
      const credentials = { username: 'test', password: 'pass123' };
      
      // Act
      const result = await authService.authenticate(credentials);
      
      // Assert
      expect(result.token).toBeDefined();
      expect(result.user.username).toBe('test');
    });

    it('should throw error for invalid credentials', async () => {
      // Arrange
      const credentials = { username: 'test', password: 'wrong' };
      
      // Act & Assert
      await expect(authService.authenticate(credentials))
        .rejects.toThrow(AuthenticationError);
    });
  });
});
```

## Rules

- MUST cover all acceptance criteria
- MUST test happy path and error scenarios
- MUST use descriptive test names
- MUST follow AAA pattern (Arrange, Act, Assert)
- MUST mock external dependencies
- MUST NOT make real API calls in unit tests
- MUST achieve minimum 80% code coverage

## Gherkin Mapping

Convert Gherkin scenarios to test cases:

```gherkin
Scenario: User logs in with valid credentials
  Given a registered user exists
  When they submit valid credentials
  Then they receive an authentication token
```

Maps to:

```typescript
it('should return authentication token for registered user with valid credentials', async () => {
  // Given a registered user exists
  const user = await createTestUser();
  
  // When they submit valid credentials
  const result = await authService.authenticate({
    username: user.username,
    password: 'validPassword123'
  });
  
  // Then they receive an authentication token
  expect(result.token).toBeDefined();
  expect(result.token).toMatch(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/);
});
```

## Coverage Requirements

- Line coverage: 80%+
- Branch coverage: 75%+
- Function coverage: 90%+
- Critical paths: 100%

## Prohibited Actions

- Creating tests without assertions
- Testing implementation details
- Coupling tests to internal structure
- Ignoring edge cases
- Committing commented-out tests
