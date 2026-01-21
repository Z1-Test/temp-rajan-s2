# Staylook Skills Matrix

> Master reference for all 7 design skills and their validation requirements

---

## Skill Hierarchy Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STAYLOOK DESIGN SKILLS (7)                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  TIER 1: FOUNDATION                                                  │
│  └── design-foundation                                        │
│      • Tokens, colors, radius, typography, spacing                   │
│      • "One Highlight" rule, intensity scale                         │
│                                                                      │
│  TIER 2: COMPONENTS                                                  │
│  └── design-component-development                                    │
│      • Buttons, cards, inputs, modals, badges                        │
│      • Component states, pill buttons                                │
│                                                                      │
│  TIER 3: PLATFORM                                                    │
│  └── design-platform-building                                        │
│      • Pages, layouts, grids, navigation                             │
│      • Page templates, responsive design                             │
│                                                                      │
│  TIER 4: EXPERIENCE                                                  │
│  ├── design-user-experience                                          │
│  │   • User journeys, CRUD flows, feedback                           │
│  │   • Action lifecycle, wizards, states                             │
│  │                                                                   │
│  └── design-ux-laws                                                  │
│      • Cognitive principles (Hick's, Fitts's)                        │
│      • Von Restorff, Gestalt laws                                    │
│                                                                      │
│  TIER 5: QUALITY                                                     │
│  ├── design-quality-assurance                                        │
│  │   • Token compliance, accessibility                               │
│  │   • Audit checklists, WCAG AA                                     │
│  │                                                                   │
│  └── design-visual-testing                                           │
│      • 5-second tests, preference testing                            │
│      • A/B testing, desirability testing                             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Skills Per Phase Matrix

| Phase | Primary Skills | Validation Checkpoint |
|-------|---------------|----------------------|
| **1. PRD Analysis** | user-experience, ux-laws | All user flows mapped |
| **2. Design Tokens** | design-foundation | All tokens exist in CSS |
| **3. Component Check** | component-development | Components exist or created |
| **4. Page Building** | platform-building | All pages use templates |
| **5. User Flows** | user-experience | No dead ends |
| **6. States** | user-experience | Loading/error/empty done |
| **7. Accessibility** | quality-assurance | WCAG AA passes |
| **8. Validation** | quality-assurance | One Highlight enforced |
| **9. Testing** | visual-testing | Tests documented |
| **10. Checkpoint** | ALL SKILLS | Complete audit passes |

---

## Skill Dependency Map

```
design-foundation (REQUIRED FIRST)
       │
       ├──► design-component-development
       │           │
       │           └──► design-platform-building
       │                       │
       │                       ├──► design-user-experience
       │                       │           │
       │                       │           └──► design-ux-laws
       │                       │
       │                       └──► design-quality-assurance
       │                                   │
       │                                   └──► design-visual-testing
       │
       └──► (All skills depend on foundation)
```

---

## Pre-Generation Validation (Phase 0)

Before any UI generation, verify ALL skills are accessible:

### Skill Readability Check
- [ ] `design-foundation/SKILL.md` readable
- [ ] `design-component-development/SKILL.md` readable
- [ ] `design-platform-building/SKILL.md` readable
- [ ] `design-user-experience/SKILL.md` readable
- [ ] `design-ux-laws/SKILL.md` readable
- [ ] `design-quality-assurance/SKILL.md` readable
- [ ] `design-visual-testing/SKILL.md` readable

### Token Existence Check
- [ ] CSS custom properties defined (--sl-* tokens)
- [ ] Color tokens exist (Standard, Expressive)
- [ ] Radius tokens exist (section, container, card, pill)
- [ ] Spacing tokens exist (4px grid)
- [ ] Typography tokens exist (Plus Jakarta Sans)

### PRD Analysis Check
- [ ] PRD.md exists and parsed
- [ ] All bounded contexts identified
- [ ] All user flows mapped
- [ ] Component inventory created

---

## Complete Skill File Inventory

### design-design-foundation/ (5 files)
```
├── SKILL.md
└── references/
    ├── BASE-PALETTE.md
    ├── CHECKLIST.md
    ├── COLOR-PALETTE.md
    └── DESIGN-TOKENS.md
```

### design-component-development/ (6 files)
```
├── SKILL.md
└── references/
    ├── BUTTON-EXAMPLES.md
    ├── CARD-EXAMPLES.md
    ├── CHECKLIST.md
    ├── COMPONENT-SPECS.md
    └── INPUT-EXAMPLES.md
```

### design-platform-building/ (4 files)
```
├── SKILL.md
└── references/
    ├── PAGE-TEMPLATES.md
    ├── LAYOUT-EXAMPLES.md
    └── NAVIGATION-PATTERNS.md
```

### design-user-experience/ (4 files)
```
├── SKILL.md
└── references/
    ├── FLOW-DIAGRAMS.md
    ├── STATE-TEMPLATES.md
    └── UX-CHECKLIST.md
```

### design-ux-laws/ (3 files)
```
├── SKILL.md
└── references/
    ├── LAWS-DETAILED.md
    └── QUICK-REFERENCE.md
```

### design-quality-assurance/ (4 files)
```
├── SKILL.md
└── references/
    ├── ACCESSIBILITY-TESTS.md
    ├── CONTRAST-MATRIX.md
    └── QA-CHECKLIST.md
```

### design-visual-testing/ (3 files)
```
├── SKILL.md
└── references/
    ├── METHODS-DETAILED.md
    └── TEST-TEMPLATES.md
```

**Total: 29 files across 7 skills**

---

## Cross-Skill Validation Rules

### Rule 1: Foundation First
All other skills inherit from `design-foundation`. Never generate components or pages without tokens.

### Rule 2: Radius Hierarchy
Enforce across all skills:
- Section: 32px
- Container: 24px
- Card: 16px
- Button: 9999px (ALWAYS pill)

### Rule 3: One Highlight Rule
Maximum 1 Expressive element per screen/viewport. Validated in:
- `quality-assurance` (automated check)
- `ux-laws` (Von Restorff principle)

### Rule 4: Intensity Scale
All interactive states must follow Muted → Calm → Vibrant. Validated in:
- `component-development` (component states)
- `user-experience` (action lifecycle)

### Rule 5: Complete Flows
No dead-end navigation. Validated in:
- `user-experience` (flow diagrams)
- `quality-assurance` (flow audit)

---

## Agent Handoff Quick Reference

| Handoff | Skills Applied |
|---------|---------------|
| Generate Complete UI | ALL 7 skills |
| Generate Missing Features | foundation, component, platform, user-experience |
| PRD Sync & Update | user-experience, ux-laws |
| Unified Checkpoint | quality-assurance, visual-testing |
| Refine UI | component-development, platform-building |
| Auto Review | quality-assurance |

---

*Skill Matrix — Staylook Design System Master Reference*
