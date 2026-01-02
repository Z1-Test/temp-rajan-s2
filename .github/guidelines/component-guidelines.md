# Component Guidelines - Aesthetic Semantic Edition

> Detailed implementation patterns for every component in the Staylook Design System.

---

## 1. Buttons

Buttons are **pill-shaped** interactive elements using semantic colors. The hierarchy follows **attention priority**.

### 1.1 Button Hierarchy

```
┌────────────────────────────────────────────────────────────────────┐
│                    BUTTON PRIORITY SYSTEM                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Priority 1: EXPRESSIVE BUTTON                                      │
│  ─────────────────────────────                                      │
│  • The MOST important action on the page                           │
│  • Uses Expressive (highlight) color                               │
│  • Maximum 1 per view/section                                      │
│  • Examples: "Get Started", "Submit", "Purchase"                   │
│                                                                     │
│  Priority 2: STANDARD BUTTON                                        │
│  ───────────────────────────                                        │
│  • Secondary actions                                                │
│  • Uses outline + Standard color                                    │
│  • Examples: "Cancel", "Learn More", "View Details"                │
│                                                                     │
│  Priority 3: GHOST/TEXT BUTTON                                      │
│  ─────────────────────────────                                      │
│  • Tertiary/subtle actions                                          │
│  • Minimal visual weight                                            │
│  • Examples: "Skip", "Maybe Later", "Dismiss"                       │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### 1.2 Expressive Button (Primary CTA)

The most important button. Uses the **Expressive** color to stand out.

```css
.btn-expressive {
    /* Appearance */
    background-color: var(--color-accent);
    color: var(--color-base);
    border: none;
    border-radius: var(--radius-button); /* Pill */
    
    /* Spacing */
    padding: var(--space-3) var(--space-6);
    
    /* Typography */
    font-weight: 600;
    font-size: var(--text-base);
    
    /* Feedback */
    box-shadow: var(--shadow-muted);
    transition: all var(--duration-fast) var(--ease-default);
    cursor: pointer;
}

.btn-expressive:hover {
    background-color: var(--color-accent-dark);
    box-shadow: var(--shadow-calm);
    transform: translateY(-1px);
}

.btn-expressive:active {
    transform: translateY(0);
    box-shadow: var(--shadow-muted);
}

.btn-expressive:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}
```

### 1.3 Standard Button (Secondary Action)

Uses the **Standard** color palette with an outline style.

```css
.btn-standard {
    /* Appearance */
    background-color: var(--surface-muted);
    color: var(--color-ink);
    border: 1px solid var(--border-calm);
    border-radius: var(--radius-button); /* Pill */
    
    /* Spacing */
    padding: var(--space-3) var(--space-6);
    
    /* Typography */
    font-weight: 600;
    font-size: var(--text-base);
    
    /* Feedback */
    transition: all var(--duration-fast) var(--ease-default);
    cursor: pointer;
}

.btn-standard:hover {
    background-color: var(--surface-calm);
    border-color: var(--border-vibrant);
    box-shadow: var(--shadow-muted);
}

.btn-standard:active {
    background-color: var(--surface-vibrant);
}

.btn-standard:focus-visible {
    outline: 2px solid var(--color-ink);
    outline-offset: 2px;
}
```

### 1.4 Ghost Button (Tertiary Action)

Minimal visual weight, uses text-only styling.

```css
.btn-ghost {
    /* Appearance */
    background-color: transparent;
    color: var(--color-ink-soft);
    border: none;
    border-radius: var(--radius-button); /* Pill */
    
    /* Spacing */
    padding: var(--space-3) var(--space-4);
    
    /* Typography */
    font-weight: 500;
    font-size: var(--text-base);
    
    /* Feedback */
    transition: all var(--duration-fast) var(--ease-default);
    cursor: pointer;
}

.btn-ghost:hover {
    background-color: var(--surface-calm);
    color: var(--color-ink);
}

.btn-ghost:active {
    background-color: var(--surface-vibrant);
}
```

### 1.5 Button Sizes

```css
/* Small Button */
.btn-sm {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
}

/* Medium Button (Default) */
.btn-md {
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
}

/* Large Button */
.btn-lg {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-lg);
}
```

---

## 2. Cards

Cards are **rounded containers** that group related information. They follow the **Muted → Calm → Vibrant** intensity scale.

### 2.1 Card Anatomy

```
┌────────────────────────────────────────────────────────────┐
│  CARD                                                       │
│  └── radius: --radius-card (16px)                          │
│  └── background: --surface-muted                           │
│  └── border: 1px solid --border-muted OR --border-calm     │
│  └── shadow: --shadow-muted (resting)                      │
│                                                             │
│    ┌──────────────────────────────────────────────────┐    │
│    │  CARD HEADER (optional)                          │    │
│    │  └── padding: --space-4                          │    │
│    │  └── border-bottom: 1px --border-muted           │    │
│    └──────────────────────────────────────────────────┘    │
│                                                             │
│    ┌──────────────────────────────────────────────────┐    │
│    │  CARD BODY                                        │    │
│    │  └── padding: --space-4 to --space-6             │    │
│    └──────────────────────────────────────────────────┘    │
│                                                             │
│    ┌──────────────────────────────────────────────────┐    │
│    │  CARD FOOTER (optional)                          │    │
│    │  └── padding: --space-4                          │    │
│    │  └── border-top: 1px --border-muted              │    │
│    │  └── background: --surface-calm (subtle)         │    │
│    └──────────────────────────────────────────────────┘    │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### 2.2 Standard Card

Placed on **Calm** (off-white) page backgrounds; card uses **Muted** (white) to pop.

```css
.card {
    /* Appearance */
    background-color: var(--surface-muted);
    border: 1px solid var(--border-muted);
    border-radius: var(--radius-card); /* 16px */
    
    /* Elevation */
    box-shadow: var(--shadow-muted);
    
    /* Spacing */
    padding: var(--space-5);
    
    /* Feedback */
    transition: all var(--duration-base) var(--ease-default);
}
```

### 2.3 Interactive Card

Cards that respond to user interaction.

```css
.card-interactive {
    /* Base styles from .card */
    background-color: var(--surface-muted);
    border: 1px solid var(--border-muted);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-muted);
    padding: var(--space-5);
    
    /* Interaction */
    cursor: pointer;
    transition: all var(--duration-base) var(--ease-default);
}

.card-interactive:hover {
    /* Intensity increases: Muted → Calm */
    border-color: var(--border-calm);
    box-shadow: var(--shadow-calm);
    transform: translateY(-2px);
}

.card-interactive:active {
    /* Intensity increases: Calm → Vibrant */
    background-color: var(--surface-calm);
    box-shadow: var(--shadow-muted);
    transform: translateY(0);
}

.card-interactive:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
}
```

### 2.4 Card Variants

#### Outlined Card
```css
.card-outlined {
    background-color: var(--surface-muted);
    border: 1px solid var(--border-calm);
    border-radius: var(--radius-card);
    box-shadow: none;
    padding: var(--space-5);
}
```

#### Elevated Card
```css
.card-elevated {
    background-color: var(--surface-muted);
    border: none;
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-calm);
    padding: var(--space-5);
}

.card-elevated:hover {
    box-shadow: var(--shadow-vibrant);
}
```

#### Colored Card (Using Expressive)
```css
.card-expressive {
    background-color: var(--color-accent-light);
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-card);
    padding: var(--space-5);
}
```

### 2.5 Card Grid Layout

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-4);
}

/* For 2-column layout */
.card-grid-2 {
    grid-template-columns: repeat(2, 1fr);
}

/* For 3-column layout */
.card-grid-3 {
    grid-template-columns: repeat(3, 1fr);
}
```

---

## 3. Inputs

Form inputs use the **Vibrant** surface for contrast and depth. They follow the intensity scale for state changes.

### 3.1 Input Anatomy

```
┌───────────────────────────────────────────────────────────────────┐
│  INPUT WRAPPER                                                     │
│                                                                    │
│    ┌─────────────────────────────────────────────────────────┐    │
│    │  LABEL                                                   │    │
│    │  └── color: --color-ink                                 │    │
│    │  └── font-weight: 600                                   │    │
│    │  └── margin-bottom: --space-2                           │    │
│    └─────────────────────────────────────────────────────────┘    │
│                                                                    │
│    ┌─────────────────────────────────────────────────────────┐    │
│    │  INPUT FIELD                                             │    │
│    │  └── radius: --radius-input (16px)                      │    │
│    │  └── background: --surface-vibrant (resting)            │    │
│    │  └── border: 1px --border-muted                         │    │
│    │                                                          │    │
│    │  ┌─────────────────────────────────────────────────┐    │    │
│    │  │  Placeholder / Value                            │    │    │
│    │  └─────────────────────────────────────────────────┘    │    │
│    │                                                          │    │
│    └─────────────────────────────────────────────────────────┘    │
│                                                                    │
│    ┌─────────────────────────────────────────────────────────┐    │
│    │  HELPER TEXT (optional)                                 │    │
│    │  └── color: --color-ink-muted                           │    │
│    │  └── font-size: --text-sm                               │    │
│    └─────────────────────────────────────────────────────────┘    │
│                                                                    │
└───────────────────────────────────────────────────────────────────┘
```

### 3.2 Standard Input

```css
.input {
    /* Size */
    width: 100%;
    height: 48px;
    
    /* Appearance - Vibrant surface for depth */
    background-color: var(--surface-vibrant);
    border: 1px solid var(--border-muted);
    border-radius: var(--radius-input); /* 16px */
    
    /* Spacing */
    padding: var(--space-3) var(--space-4);
    
    /* Typography */
    font-family: var(--font-sans);
    font-size: var(--text-base);
    color: var(--color-ink);
    
    /* Feedback */
    transition: all var(--duration-fast) var(--ease-default);
}

.input::placeholder {
    color: var(--color-ink-muted);
}

/* Focus: Intensity increases Vibrant → Muted (inverts for clarity) */
.input:focus {
    background-color: var(--surface-muted);
    border-color: var(--border-vibrant);
    box-shadow: 0 0 0 4px rgba(51, 115, 204, 0.1);
    outline: none;
}

.input:hover:not(:focus) {
    border-color: var(--border-calm);
}
```

### 3.3 Input States

```css
/* Error State */
.input-error {
    border-color: #E53935;
    background-color: rgba(229, 57, 53, 0.05);
}

.input-error:focus {
    box-shadow: 0 0 0 4px rgba(229, 57, 53, 0.1);
}

/* Success State */
.input-success {
    border-color: #43A047;
    background-color: rgba(67, 160, 71, 0.05);
}

/* Disabled State */
.input:disabled {
    background-color: var(--surface-calm);
    color: var(--color-ink-muted);
    cursor: not-allowed;
    opacity: 0.7;
}
```

### 3.4 Input Label

```css
.input-label {
    display: block;
    font-weight: 600;
    font-size: var(--text-sm);
    color: var(--color-ink);
    margin-bottom: var(--space-2);
}

.input-label-required::after {
    content: '*';
    color: var(--color-accent);
    margin-left: var(--space-1);
}
```

### 3.5 Input Helper Text

```css
.input-helper {
    display: block;
    font-size: var(--text-sm);
    color: var(--color-ink-muted);
    margin-top: var(--space-2);
}

.input-helper-error {
    color: #E53935;
}
```

### 3.6 Textarea

```css
.textarea {
    /* Inherits input styles */
    min-height: 120px;
    resize: vertical;
    padding: var(--space-4);
}
```

### 3.7 Select Dropdown

```css
.select {
    /* Inherits input styles */
    appearance: none;
    background-image: url("data:image/svg+xml,..."); /* Chevron icon */
    background-repeat: no-repeat;
    background-position: right var(--space-4) center;
    padding-right: var(--space-10);
}
```

---

## 4. Layout Components

### 4.1 Section Container

Outermost content wrapper with maximum roundness.

```css
.section {
    /* Appearance */
    background-color: var(--surface-muted);
    border-radius: var(--radius-section); /* 32px */
    
    /* Spacing */
    padding: var(--space-8);
    margin-bottom: var(--space-8);
}

/* Full-width section variant */
.section-full {
    border-radius: 0;
    padding: var(--space-12) var(--space-8);
}
```

### 4.2 Content Container

Standard content wrapper within sections.

```css
.container {
    /* Size */
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    
    /* Appearance */
    border-radius: var(--radius-container); /* 24px */
    
    /* Spacing */
    padding: var(--space-6);
}

/* Container widths */
.container-xs { max-width: 480px; }
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1440px; }
```

### 4.3 Page Wrapper

The outermost page wrapper.

```css
.page {
    /* Appearance */
    background-color: var(--surface-calm);
    min-height: 100vh;
    
    /* Spacing */
    padding: var(--space-6);
}

/* For full-bleed pages */
.page-bleed {
    padding: 0;
}
```

### 4.4 Grid System

```css
.grid {
    display: grid;
    gap: var(--space-4);
}

/* Column variations */
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grid */
.grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### 4.5 Stack (Vertical Layout)

```css
.stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

/* Stack spacing variants */
.stack-xs { gap: var(--space-1); }
.stack-sm { gap: var(--space-2); }
.stack-md { gap: var(--space-4); }
.stack-lg { gap: var(--space-6); }
.stack-xl { gap: var(--space-8); }
```

### 4.6 Row (Horizontal Layout)

```css
.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-4);
}

/* Row spacing variants */
.row-xs { gap: var(--space-1); }
.row-sm { gap: var(--space-2); }
.row-md { gap: var(--space-4); }
.row-lg { gap: var(--space-6); }
```

---

## 5. Badges & Tags

Small indicators that use the semantic color system.

### 5.1 Badge Base

```css
.badge {
    /* Size */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    /* Appearance */
    border-radius: var(--radius-sm); /* 8px */
    
    /* Spacing */
    padding: var(--space-1) var(--space-3);
    
    /* Typography */
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```

### 5.2 Badge Variants (Intensity Scale)

```css
/* Muted Badge - Lightest, subtle */
.badge-muted {
    background-color: var(--surface-vibrant);
    color: var(--color-ink-muted);
}

/* Calm Badge - Standard */
.badge-calm {
    background-color: var(--surface-calm);
    color: var(--color-ink-soft);
    border: 1px solid var(--border-calm);
}

/* Vibrant Badge - Strongest emphasis */
.badge-vibrant {
    background-color: var(--color-ink);
    color: var(--color-base);
}

/* Expressive Badge - Using highlight color */
.badge-expressive {
    background-color: var(--color-accent);
    color: var(--color-base);
}

/* Expressive Light Badge - Softer highlight */
.badge-expressive-light {
    background-color: var(--color-accent-light);
    color: var(--color-accent-dark);
}
```

### 5.3 Status Badges

```css
.badge-success {
    background-color: rgba(67, 160, 71, 0.1);
    color: #2E7D32;
}

.badge-warning {
    background-color: rgba(255, 152, 0, 0.1);
    color: #E65100;
}

.badge-error {
    background-color: rgba(229, 57, 53, 0.1);
    color: #C62828;
}

.badge-info {
    background-color: var(--color-accent-light);
    color: var(--color-accent-dark);
}
```

---

## 6. Modal & Dialog

### 6.1 Modal Structure

```css
/* Backdrop */
.modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

/* Modal Container */
.modal {
    /* Size */
    width: 90%;
    max-width: 480px;
    max-height: 90vh;
    overflow-y: auto;
    
    /* Appearance */
    background-color: var(--surface-muted);
    border-radius: var(--radius-container); /* 24px */
    box-shadow: var(--shadow-vibrant);
    
    /* Spacing */
    padding: var(--space-6);
}

.modal-header {
    margin-bottom: var(--space-4);
}

.modal-title {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--color-ink);
}

.modal-body {
    color: var(--color-ink-soft);
    line-height: var(--leading-relaxed);
}

.modal-footer {
    display: flex;
    gap: var(--space-3);
    justify-content: flex-end;
    margin-top: var(--space-6);
}
```

---

## 7. Typography Components

### 7.1 Heading Styles with Semantic Colors

```css
/* Primary Headings - Maximum emphasis */
.heading-primary {
    color: var(--color-ink);
    font-weight: 700;
    line-height: var(--leading-tight);
    letter-spacing: -0.02em;
}

/* Secondary Headings - Softer emphasis */
.heading-secondary {
    color: var(--color-ink-soft);
    font-weight: 600;
    line-height: var(--leading-tight);
}

/* Expressive Heading - Highlighted */
.heading-expressive {
    color: var(--color-accent);
    font-weight: 700;
}

/* Heading with Expressive Highlight */
.heading-with-highlight span.highlight {
    color: var(--color-accent);
}
```

### 7.2 Body Text

```css
/* Standard body text */
.text-body {
    color: var(--color-ink-soft);
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
}

/* Muted/Caption text */
.text-muted {
    color: var(--color-ink-muted);
    font-size: var(--text-sm);
}

/* Expressive text */
.text-expressive {
    color: var(--color-accent);
    font-weight: 500;
}
```

---

## 8. Quick Implementation Reference

### 8.1 Component Radius Mapping

| Component | Radius Token | Value |
|-----------|--------------|-------|
| Section | `--radius-section` | 32px |
| Container | `--radius-container` | 24px |
| Modal | `--radius-container` | 24px |
| Card | `--radius-card` | 16px |
| Input | `--radius-input` | 16px |
| Badge | `--radius-sm` | 8px |
| Button | `--radius-button` | Pill |

### 8.2 Intensity Mapping (State Progression)

| State | Surface | Border | Shadow |
|-------|---------|--------|--------|
| Resting | `--surface-muted` | `--border-muted` | `--shadow-muted` |
| Hover | `--surface-calm` | `--border-calm` | `--shadow-calm` |
| Active/Focus | `--surface-vibrant` | `--border-vibrant` | `--shadow-vibrant` |

### 8.3 Typography Color Mapping

| Text Type | Color Token |
|-----------|-------------|
| Headings (H1-H3) | `--color-ink` |
| Subheadings (H4-H6) | `--color-ink-soft` |
| Body Paragraphs | `--color-ink-soft` |
| Captions/Hints | `--color-ink-muted` |
| Links | `--color-accent` |
| Highlights | `--color-accent` |
| On Dark/Colored | `--color-base` |

---

*Last updated: January 2026*
