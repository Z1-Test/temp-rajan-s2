---
title: User Journey Mapping
description: Document complete end-to-end user journeys with Mermaid diagrams
tags:
  - frontend
  - user-journey
  - mermaid
  - flow
  - documentation
name: user-journey-mapping
---

# User Journey Mapping Skill

## What is it?

This skill documents complete end-to-end user journeys using Mermaid diagrams, providing a visual blueprint that maps directly to frontend implementation.

## Why use it?

- **Clarity**: Visualize entire user flow before coding
- **Completeness**: Catch missing screens/states early
- **Communication**: Share flows with team/stakeholders
- **Planning**: Know exactly what to build
- **Testing**: Define test scenarios from flows

---

## Journey Diagram Types

### 1. Flowchart (Main User Path)

```mermaid
flowchart TD
    subgraph "User Onboarding"
        A[Landing Page] --> B{Has Account?}
        B -->|No| C[Sign Up]
        B -->|Yes| D[Login]
        C --> E[Email Verification]
        E --> F[Profile Setup]
        D --> G[Dashboard]
        F --> G
    end
    
    style A fill:#f0f9ff,stroke:#0ea5e9
    style G fill:#dcfce7,stroke:#22c55e
```

### 2. State Diagram (Screen States)

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Loading: fetch data
    Loading --> Success: data received
    Loading --> Error: request failed
    Error --> Loading: retry
    Success --> Editing: edit clicked
    Editing --> Saving: save clicked
    Saving --> Success: saved
    Saving --> Error: save failed
```

### 3. Sequence Diagram (User Interactions)

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant A as API
    participant D as Database
    
    U->>F: Click "Add Item"
    F->>F: Open Modal
    U->>F: Fill Form & Submit
    F->>A: POST /items
    A->>D: INSERT item
    D-->>A: Success
    A-->>F: 201 Created
    F->>F: Close Modal, Show Toast
    F-->>U: "Item added!"
```

---

## Journey Documentation Template

### Feature: Feature Name

```markdown
## User Journey: [Journey Name]

### Overview
Brief description of what user accomplishes.

### Actors
- Primary: End User
- Secondary: Admin (if applicable)

### Entry Points
- Direct URL: `/feature`
- Navigation: Dashboard → Feature Link
- Deep Link: Email notification

### Journey Flow

[Mermaid flowchart here]

### Screen Inventory

| Step | Screen | Route | Components |
|------|--------|-------|------------|
| 1 | Landing | `/feature` | Hero, CTAButton |
| 2 | Form | `/feature/new` | Form, Input, Button |
| 3 | Success | `/feature/success` | SuccessCard |

### Data Requirements

| Screen | Input Data | Output Data | API Calls |
|--------|------------|-------------|-----------|
| Form | user input | formData | POST /api/items |
| Success | itemId | item details | GET /api/items/:id |

### Edge Cases
- [ ] User cancels mid-flow
- [ ] Validation errors
- [ ] Network failure
- [ ] Session timeout
```

---

## Common Journey Patterns

### Authentication Flow

```mermaid
flowchart TD
    A[Public Page] --> B{Authenticated?}
    B -->|No| C[Login Page]
    B -->|Yes| D[Protected Page]
    C --> E{Credentials Valid?}
    E -->|No| C
    E -->|Yes| F[Redirect to Original]
    F --> D
```

### E-commerce Checkout Flow

```mermaid
flowchart TD
    A[Cart] --> B{Cart Empty?}
    B -->|Yes| C[Continue Shopping]
    B -->|No| D[Checkout]
    D --> E{Logged In?}
    E -->|No| F[Guest or Login]
    E -->|Yes| G[Shipping]
    F --> G
    G --> H[Payment]
    H --> I{Payment Success?}
    I -->|No| J[Retry Payment]
    I -->|Yes| K[Order Confirmation]
    J --> H
```

### Form Wizard Flow

```mermaid
flowchart TD
    A[Step 1: Basic Info] --> B{Valid?}
    B -->|No| A
    B -->|Yes| C[Step 2: Details]
    C --> D{Valid?}
    D -->|No| C
    D -->|Yes| E[Step 3: Review]
    E --> F{Confirm?}
    F -->|Edit| A
    F -->|Submit| G[Processing]
    G --> H{Success?}
    H -->|No| I[Error]
    H -->|Yes| J[Complete]
```

### CRUD Flow

```mermaid
flowchart TD
    A[List View] --> B[View Item]
    A --> C[Create Item]
    B --> D[Edit Item]
    B --> E[Delete Item]
    C --> F{Save?}
    D --> G{Save?}
    E --> H{Confirm?}
    F -->|Yes| A
    G -->|Yes| B
    H -->|Yes| A
```

---

## Screen Mapping Table

For each journey, create a mapping table:

```markdown
| Journey Step | Screen Name | Route | Entry Action | Exit Actions | Components |
|--------------|-------------|-------|--------------|--------------|------------|
| Start | Home | `/` | Page load | Click CTA | Hero, Nav |
| Sign Up | Register | `/register` | Click "Sign Up" | Submit form, Cancel | Form, Input |
| Verify | Verification | `/verify` | Form submit | Enter code, Resend | OTPInput |
| Complete | Dashboard | `/dashboard` | Verification success | - | DashboardLayout |
```

---

## Best Practices

✅ **DO**:
- Start with happy path, then add error branches
- Include all entry points (direct, deep links)
- Document data needs per screen
- Mark decision points clearly
- Use consistent naming

❌ **DON'T**:
- Skip edge cases (errors, cancellation)
- Forget authentication gates
- Ignore mobile-specific flows
- Leave screens unnamed
- Mix different journeys in one diagram
