# Feature Implementation Skill

## Purpose

Implement complete feature business logic based on approved specification and scaffolded structure.

## Inputs

- Feature specification document
- Scaffolded code structure
- Gherkin scenarios (if available)
- Dependency specifications

## Responsibilities

- Read acceptance criteria from feature spec
- Implement business logic for all scenarios
- Implement error handling and edge cases
- Add comprehensive logging and monitoring hooks
- Implement validation logic
- Follow SOLID principles and design patterns
- Ensure type safety and null checks

## Output Format

Fully implemented feature with:
- Complete business logic
- Error boundaries
- Input validation
- State management
- Side effect handling
- Integration points

## Rules

- MUST satisfy all acceptance criteria
- MUST handle all error scenarios
- MUST include observability hooks
- MUST follow security best practices
- MUST use existing services and utilities
- MUST NOT create infrastructure
- MUST NOT modify other features without explicit dependency

## Implementation Phases

1. **Core Logic**: Implement happy path scenarios
2. **Error Handling**: Add validation and error boundaries
3. **Edge Cases**: Handle boundary conditions
4. **Integration**: Connect to dependent features/services
5. **Observability**: Add logging, metrics, traces

## Quality Gates

- All acceptance criteria implemented
- No hardcoded values
- Proper error messages
- Type-safe implementations
- No console.log statements

## Example Implementation Pattern

```typescript
/**
 * User Authentication Service
 * Implements: feature-user-authentication-authorization.md
 * Acceptance Criteria: AC-1, AC-2, AC-3
 */
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly logger: Logger
  ) {}

  async authenticate(credentials: Credentials): Promise<AuthResult> {
    this.logger.info('Authentication attempt', { username: credentials.username });
    
    try {
      // AC-1: Validate credentials format
      this.validateCredentials(credentials);
      
      // AC-2: Verify against user store
      const user = await this.userRepository.findByUsername(credentials.username);
      
      if (!user || !await this.verifyPassword(credentials.password, user.passwordHash)) {
        throw new AuthenticationError('Invalid credentials');
      }
      
      // AC-3: Generate session token
      const token = await this.tokenService.generate(user);
      
      this.logger.info('Authentication successful', { userId: user.id });
      return { token, user };
      
    } catch (error) {
      this.logger.error('Authentication failed', { error });
      throw error;
    }
  }
}
```

## Prohibited Actions

- Implementing features not in specification
- Creating new features
- Modifying infrastructure
- Direct database access (use repositories)
- Bypassing security controls
