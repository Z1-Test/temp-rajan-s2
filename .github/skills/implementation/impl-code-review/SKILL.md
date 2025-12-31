# Code Review Skill

## Purpose

Perform automated code review to ensure implementation quality and specification compliance.

## Inputs

- Feature specification document
- Implementation code
- Test files
- Feature acceptance criteria

## Responsibilities

- Verify all acceptance criteria are implemented
- Check code quality and best practices
- Validate test coverage
- Review error handling
- Check security vulnerabilities
- Verify performance considerations
- Ensure accessibility compliance

## Review Checklist

### ✅ Specification Compliance
- [ ] All acceptance criteria implemented
- [ ] All Gherkin scenarios covered
- [ ] Feature scope respected (no scope creep)
- [ ] Business rules correctly implemented

### ✅ Code Quality
- [ ] Follows SOLID principles
- [ ] Proper separation of concerns
- [ ] No code duplication
- [ ] Clear naming conventions
- [ ] Proper TypeScript usage
- [ ] No any types
- [ ] Proper error handling

### ✅ Testing
- [ ] Unit tests present
- [ ] Integration tests present
- [ ] 80%+ code coverage
- [ ] All edge cases covered
- [ ] Mocks properly configured
- [ ] No flaky tests

### ✅ Security
- [ ] Input validation
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Secrets not hardcoded
- [ ] Proper authentication checks
- [ ] Authorization enforced

### ✅ Performance
- [ ] No N+1 queries
- [ ] Proper caching strategy
- [ ] Efficient algorithms
- [ ] No memory leaks
- [ ] Lazy loading where appropriate

### ✅ Observability
- [ ] Logging present
- [ ] Metrics instrumented
- [ ] Tracing enabled
- [ ] Error tracking configured

### ✅ Accessibility
- [ ] ARIA labels present
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast compliance

## Output Format

```markdown
## Code Review: feature-user-authentication-authorization

### ✅ Passing Checks (8)
- All acceptance criteria implemented
- Proper TypeScript usage
- Unit tests present (92% coverage)
- Input validation implemented
- Error handling comprehensive
- ARIA labels present
- Logging configured
- No hardcoded secrets

### ⚠️ Warnings (2)
- **Performance**: Consider caching user lookups
  - File: authService.ts:45
  - Suggestion: Add Redis cache layer

- **Security**: Rate limiting recommended
  - File: authController.ts:23
  - Suggestion: Implement rate limiting middleware

### ❌ Issues (1)
- **Specification**: Missing acceptance criterion AC-5
  - Criterion: "Support multi-factor authentication"
  - Status: Not implemented
  - Action Required: Implement MFA flow

### Overall Assessment
**Status**: NEEDS WORK
**Blocking Issues**: 1
**Estimated Fix Time**: 4 hours

### Recommendations
1. Implement missing AC-5 (MFA support)
2. Add rate limiting to prevent brute force
3. Consider caching strategy for production scale
```

## Review Severity Levels

- **❌ Blocking**: Must fix before merge
- **⚠️ Warning**: Should fix, but not blocking
- **ℹ️ Info**: Nice to have improvements

## Rules

- MUST fail review if acceptance criteria missing
- MUST fail review if security vulnerabilities present
- MUST fail review if test coverage < 80%
- MUST provide specific file locations
- MUST provide actionable suggestions
- MUST link to relevant guidelines/docs

## Prohibited Actions

- Approving incomplete implementations
- Ignoring security issues
- Passing without test coverage
- Generic feedback without specifics
- Modifying code directly (review only)
