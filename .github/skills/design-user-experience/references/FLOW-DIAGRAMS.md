# User Flow Diagrams Reference

> Mermaid diagrams for common Staylook user flows

---

## Authentication Flows

### Login Flow

```mermaid
flowchart TD
    A[Login Page] --> B{Enter Credentials}
    B --> C[Submit]
    C --> D{Validate}
    D -->|Valid| E[Processing State]
    D -->|Invalid| F[Show Error]
    F --> B
    E --> G{Auth Result}
    G -->|Success| H[Redirect to Dashboard]
    G -->|Failed| I[Show Error Toast]
    I --> B
```

### Registration Flow

```mermaid
flowchart TD
    A[Register Page] --> B[Enter Details]
    B --> C{Validate Fields}
    C -->|Invalid| D[Show Inline Errors]
    D --> B
    C -->|Valid| E[Submit]
    E --> F[Processing State]
    F --> G{API Result}
    G -->|Success| H[Verify Email Page]
    G -->|Error| I[Show Error]
    I --> B
    H --> J[User Verifies Email]
    J --> K[Login Page]
```

### Password Reset Flow

```mermaid
flowchart TD
    A[Forgot Password] --> B[Enter Email]
    B --> C[Submit]
    C --> D[Processing]
    D --> E{Email Exists?}
    E -->|Yes| F[Success Message]
    E -->|No| F
    F --> G[Check Email]
    G --> H[Reset Password Page]
    H --> I[Enter New Password]
    I --> J[Submit]
    J --> K[Success Toast]
    K --> L[Login Page]
```

---

## CRUD Flows

### Create Item Flow

```mermaid
flowchart TD
    A[List View] --> B[Click Add Button<br>Expressive]
    B --> C[Open Modal/Form]
    C --> D[Fill Fields]
    D --> E{Validate}
    E -->|Invalid| F[Show Errors]
    F --> D
    E -->|Valid| G[Submit]
    G --> H[Processing State]
    H --> I{API Result}
    I -->|Success| J[Close Modal]
    J --> K[Update List]
    K --> L[Success Toast]
    I -->|Error| M[Show Error]
    M --> D
```

### Edit Item Flow

```mermaid
flowchart TD
    A[Item Detail/Row] --> B[Click Edit<br>Standard Button]
    B --> C[Open Edit Form]
    C --> D[Pre-fill Data]
    D --> E[Modify Fields]
    E --> F{Has Changes?}
    F -->|No| G[Cancel/Close]
    F -->|Yes| H[Submit]
    H --> I[Processing]
    I --> J{Save Result}
    J -->|Success| K[Close Form]
    K --> L[Update Display]
    L --> M[Success Toast]
    J -->|Error| N[Show Error]
    N --> E
```

### Delete Item Flow

```mermaid
flowchart TD
    A[Item Row/Detail] --> B[Click Delete<br>Ghost Button]
    B --> C[Confirmation Modal]
    C --> D{User Choice}
    D -->|Cancel| E[Close Modal]
    D -->|Confirm| F[Processing]
    F --> G{Delete Result}
    G -->|Success| H[Remove from UI]
    H --> I[Success Toast]
    G -->|Error| J[Error Toast]
    J --> E
```

---

## Wizard/Multi-Step Flows

### Onboarding Wizard

```mermaid
flowchart TD
    A[Welcome Screen] --> B[Step 1: Profile]
    B --> C{Valid?}
    C -->|No| D[Show Errors]
    D --> B
    C -->|Yes| E[Step 2: Preferences]
    E --> F{Valid?}
    F -->|No| G[Show Errors]
    G --> E
    F -->|Yes| H[Step 3: Review]
    H --> I[Complete]
    I --> J[Processing]
    J --> K[Success Screen]
    K --> L[Dashboard]
    
    B -.->|Back| A
    E -.->|Back| B
    H -.->|Back| E
```

### Checkout Wizard

```mermaid
flowchart TD
    A[Cart] --> B[Step 1: Shipping]
    B --> C[Step 2: Payment]
    C --> D[Step 3: Review]
    D --> E[Place Order]
    E --> F[Processing]
    F --> G{Result}
    G -->|Success| H[Confirmation]
    G -->|Failed| I[Error]
    I --> C
    
    C -.->|Back| B
    D -.->|Back| C
```

---

## Search & Filter Flow

```mermaid
flowchart TD
    A[Search Page] --> B[Enter Query]
    B --> C[Debounce 300ms]
    C --> D[Loading State]
    D --> E{Results?}
    E -->|Found| F[Show Results Grid]
    E -->|None| G[Empty State]
    F --> H[Apply Filter]
    H --> D
    G --> I[Suggest Actions]
    I --> B
```

---

## Form Submission States

```mermaid
stateDiagram-v2
    [*] --> Pristine
    Pristine --> Dirty: User Types
    Dirty --> Validating: Submit
    Validating --> Invalid: Validation Failed
    Invalid --> Dirty: User Corrects
    Validating --> Submitting: Validation Passed
    Submitting --> Success: API Success
    Submitting --> Error: API Error
    Error --> Dirty: User Retries
    Success --> [*]
```

---

## Navigation Guards

```mermaid
flowchart TD
    A[Route Request] --> B{Auth Required?}
    B -->|No| C[Allow Access]
    B -->|Yes| D{User Authenticated?}
    D -->|Yes| E{Has Permission?}
    D -->|No| F[Redirect to Login]
    E -->|Yes| C
    E -->|No| G[Access Denied Page]
    F --> H[Store Return URL]
```

---

*Flow Diagrams — Staylook UX Reference*
