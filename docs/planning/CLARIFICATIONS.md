# Project Clarifications

> Please review and select options or provide input for each question.

---

## Q1: Telemetry Data Authority

The PRD mentions both real-time telemetry and vehicle sensor data but does not specify the authoritative source when data conflicts occur.

**Decision Required:**

If sensor data is received via multiple channels (e.g., direct from vehicle, via FIA systems, via team relay), which source is authoritative?

- [ ] Option A: Vehicle-direct data is always authoritative
- [ ] Option B: Most recent timestamp wins regardless of source
- [x] Option C: FIA systems are authoritative for compliance; vehicle-direct for team operations
- [ ] Other: [Please specify]

**Impact:** Affects conflict resolution logic, data validation rules, and compliance reporting.

---

## Q2: Data Retention & Historical Access

The PRD specifies 5-year telemetry retention but does not define query performance expectations for historical data.

**Decision Required:**

What are the acceptable query response times for historical analytics across different time ranges?

- [x] Option A: All historical queries must meet same < 2s target as current session queries
- [ ] Option B: Multi-season queries can take up to 30s; single-session queries < 2s
- [ ] Option C: Performance degrades gracefully; no strict limits for historical data
- [ ] Other: [Please specify]

**Impact:** Affects database architecture, indexing strategy, and cost projections.

---

## Q3: Multi-Team Data Isolation

The PRD states the platform is "single-tenant per team" but does not specify hosting model.

**Decision Required:**

How is team data isolated?

- [ ] Option A: Completely separate infrastructure per team (dedicated instances)
- [x] Option B: Shared infrastructure with database-level tenant isolation
- [ ] Option C: Shared infrastructure with application-level tenant isolation
- [ ] Other: [Please specify]

**Impact:** Affects security posture, compliance certification, infrastructure costs, and scalability.

---

## Q4: Real-Time Telemetry During Network Failures

The PRD mentions local buffering for network instability but does not define behavior during extended outages.

**Decision Required:**

If network connectivity is lost for more than 60 seconds during a race session, should the system:

- [x] Option A: Continue buffering indefinitely (with disk space limits)
- [ ] Option B: Drop oldest data when buffer is full, prioritize most recent telemetry
- [ ] Option C: Transition to degraded mode with reduced data fidelity
- [ ] Other: [Please specify]

**Impact:** Affects reliability architecture, local storage requirements, and failure mode documentation.

---

## Q5: Driver Profile Data Ownership

The PRD includes a Driver Profile bounded context but does not clarify data ownership when drivers change teams.

**Decision Required:**

When a driver leaves a team, who controls their historical performance data?

- [ ] Option A: Team retains all data; driver profile is deleted or anonymized
- [x] Option B: Driver owns personal data; team retains vehicle/session data
- [ ] Option C: Data is jointly owned; requires both team and driver consent for deletion
- [ ] Other: [Please specify]

**Impact:** Affects GDPR compliance, data retention policies, and contract language.

---

## Q6: Race Simulation Divergence Handling

The PRD specifies a target of 80% prediction accuracy but does not define handling when simulations diverge from reality.

**Decision Required:**

When race conditions deviate significantly from simulations (e.g., safety car, weather change), should the system:

- [ ] Option A: Re-run simulations in real-time with updated conditions
- [ ] Option B: Flag divergence but maintain original simulation for reference
- [x] Option C: Automatically invalidate simulation and require manual strategist input
- [ ] Other: [Please specify]

**Impact:** Affects simulation engine requirements, real-time processing load, and user workflow.

---

## Q7: Team Collaboration Message Retention

The PRD defines data retention for telemetry but not for team communications.

**Decision Required:**

How long should team collaboration messages (race radio, strategy notes) be retained?

- [ ] Option A: Same as telemetry data (5 years)
- [x] Option B: Only for current season (purge at season end)
- [ ] Option C: Indefinitely (until explicit deletion)
- [ ] Other: [Please specify]

**Impact:** Affects storage costs, compliance requirements, and audit capabilities.

---

## Q8: Component Maintenance Event Verification

The Vehicle Management context includes maintenance events, but authority to log these events is unclear.

**Decision Required:**

Who is authorized to create official maintenance records?

- [x] Option A: Only certified technicians can create records
- [ ] Option B: Any team member can log; technicians must verify/approve
- [ ] Option C: System auto-generates based on sensor data; technicians confirm
- [ ] Other: [Please specify]

**Impact:** Affects audit trail integrity, compliance with safety regulations, and workflow design.

---

## Q9: Accessibility Compliance Scope

The PRD mandates WCAG 2.1 AA compliance but does not specify testing coverage.

**Decision Required:**

What percentage of platform functionality must pass WCAG 2.1 AA before launch?

- [ ] Option A: 100% of all UI components and workflows
- [x] Option B: 100% of critical paths (telemetry, race ops); 80% of admin features
- [ ] Option C: Best effort; non-blocking for launch
- [ ] Other: [Please specify]

**Impact:** Affects launch timeline, testing scope, and potential legal risk.

---

## Q10: Feature Flag Service Provider

The PRD specifies "LaunchDarkly (or equivalent)" but does not define selection criteria.

**Decision Required:**

Has a feature flag provider been selected, or should provider selection be part of technical planning?

- [ ] Option A: LaunchDarkly is mandated
- [ ] Option B: Provider must meet specific requirements: [Please specify requirements]
- [x] Option C: Decision deferred to engineering team with budget constraint
- [ ] Other: [Please specify]

**Impact:** Affects integration timeline, budget allocation, and vendor management.

---

## Q11: API Authentication for External Integrations

The PRD specifies OAuth 2.0 + MFA for user authentication but does not address machine-to-machine API access.

**Decision Required:**

How should external systems (e.g., third-party analytics tools, FIA reporting systems) authenticate to platform APIs?

- [x] Option A: Service accounts with OAuth 2.0 client credentials flow
- [ ] Option B: API keys with IP allowlisting
- [ ] Option C: External integrations are out of scope for initial release
- [ ] Other: [Please specify]

**Impact:** Affects security architecture, integration capabilities, and third-party onboarding process.

---

## Q12: Session Data Immutability

The Analytics bounded context stores lap and sector data, but mutability rules are not defined.

**Decision Required:**

Once a lap or sector time is recorded, can it be modified?

- [ ] Option A: Completely immutable once recorded
- [ ] Option B: Mutable within session; immutable after session ends
- [x] Option C: Mutable with full audit trail of all changes
- [ ] Other: [Please specify]

**Impact:** Affects database schema, audit requirements, and data integrity guarantees.

---

**Ambiguity Count: 0**

**Status: ✅ RESOLVED**

All clarifications have been addressed and incorporated into the PRD (v1.0.0).

## Resolution Summary

All 12 critical ambiguities have been resolved:

1. ✅ **Telemetry Data Authority** — FIA for compliance; vehicle-direct for operations
2. ✅ **Historical Query Performance** — < 2s for all time ranges
3. ✅ **Multi-Team Isolation** — Database-level tenant isolation
4. ✅ **Network Failure Buffering** — Indefinite buffering with disk limits
5. ✅ **Driver Data Ownership** — Driver owns personal data; team owns vehicle data
6. ✅ **Simulation Divergence** — Auto-invalidate and require manual strategist input
7. ✅ **Message Retention** — Current season only
8. ✅ **Maintenance Authority** — Certified technicians only
9. ✅ **Accessibility Scope** — 100% critical paths; 80% admin
10. ✅ **Feature Flag Provider** — Engineering team selection with budget constraints
11. ✅ **API Authentication** — OAuth 2.0 client credentials for M2M
12. ✅ **Data Mutability** — Mutable with full audit trail

Proceeding to roadmap decomposition.
