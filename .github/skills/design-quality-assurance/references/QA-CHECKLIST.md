# Quality Assurance Checklist Reference

> Complete QA verification checklists for Staylook design system

---

## Pre-Deployment Master Checklist

### 1. Design Token Compliance

#### Color Tokens
- [ ] No hardcoded hex values in component files
- [ ] All colors use semantic token variables
- [ ] Standard/Expressive terminology used (not primary/secondary)
- [ ] Intensity scale applied correctly

#### Token Naming
- [ ] Uses `--color-text` not `--color-primary`
- [ ] Uses `--color-accent` for expressive
- [ ] Uses `--surface-muted/calm/vibrant`
- [ ] Uses `--outline-muted/calm/vibrant`

### 2. "One Highlight" Rule

#### Per Page/Screen
- [ ] Maximum 1 Expressive element
- [ ] Single clear focal point
- [ ] No competing accent elements

#### Per Component/Modal
- [ ] Modal: max 1 Expressive button
- [ ] Form: max 1 Expressive action
- [ ] Card grid: max 1 Expressive card
- [ ] Navigation: max 1 Expressive item

### 3. Radius Hierarchy

#### Value Compliance
- [ ] Section containers: 32px
- [ ] Content containers: 24px
- [ ] Cards: 16px
- [ ] Inputs: 16px
- [ ] Badges: 8px
- [ ] ALL buttons: 9999px (pill)

#### Nesting Compliance
- [ ] Outer elements > inner elements
- [ ] No inverted nesting
- [ ] Consistent within component type

### 4. Typography

#### Font Compliance
- [ ] Font family: Plus Jakarta Sans
- [ ] All sizes from type scale
- [ ] Weights from token scale

#### Color Compliance
- [ ] Headings: `--sl-standard`
- [ ] Body: `--sl-standard-soft`
- [ ] Captions: `--sl-standard-muted`
- [ ] Links: `--sl-expressive`

### 5. Spacing

- [ ] All spacing from 4px grid
- [ ] Uses --space-X tokens
- [ ] No arbitrary pixel values
- [ ] Consistent contextual spacing

---

## Accessibility Checklist (WCAG 2.1 AA)

### Contrast Ratios

#### Text Contrast (4.5:1 minimum)
- [ ] `--sl-standard` on Base: ✓
- [ ] `--sl-standard-soft` on Base: ✓
- [ ] `--sl-expressive` on Base: ✓
- [ ] All text/background combinations verified

#### UI Component Contrast (3:1 minimum)
- [ ] Borders against backgrounds
- [ ] Icons meet contrast
- [ ] Focus indicators visible

### Keyboard Navigation

#### Tab Navigation
- [ ] Tab key moves through all interactive elements
- [ ] Tab order matches visual flow
- [ ] No keyboard traps
- [ ] Skip links present

#### Keyboard Activation
- [ ] Enter activates buttons/links
- [ ] Space activates buttons
- [ ] Escape closes modals/dropdowns
- [ ] Arrow keys navigate menus

### Focus States

- [ ] All interactive elements show focus
- [ ] Focus outline 2px with 2px offset
- [ ] Focus meets 3:1 contrast
- [ ] Focus not hidden by CSS

### ARIA Implementation

#### Required Attributes
- [ ] Modals: role="dialog", aria-modal="true", aria-labelledby
- [ ] Buttons: aria-label when text not visible
- [ ] Forms: aria-required, aria-invalid, aria-describedby
- [ ] Live regions: aria-live for dynamic content

#### Best Practices
- [ ] Semantic HTML used first
- [ ] No redundant ARIA
- [ ] Screen reader only text where needed
- [ ] State changes announced

### Testing Methods

- [ ] Automated axe-core audit: 0 violations
- [ ] Keyboard navigation manually tested
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Color blindness simulation passed

---

## Visual Regression Checklist

### Component Snapshots

#### Buttons
- [ ] All variants captured
- [ ] All sizes captured
- [ ] All states captured
- [ ] Pill shape consistent

#### Cards
- [ ] Standard card captured
- [ ] Interactive states captured
- [ ] Elevated variant captured
- [ ] Grid layout captured

#### Inputs
- [ ] All types captured
- [ ] All states captured
- [ ] Error states captured
- [ ] With labels captured

### Breakpoint Validation

- [ ] Mobile (375px): single column, stacked
- [ ] Tablet (768px): 2-column grids
- [ ] Desktop (1280px): 3-4 column grids
- [ ] Large (1536px+): full layouts

### Comparison Thresholds

- [ ] Max 1% pixel difference allowed
- [ ] Baseline images up to date
- [ ] Significant changes flagged

---

## Cross-Browser Checklist

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)

### Test Points
- [ ] Components render identically
- [ ] Interactions work consistently
- [ ] Animations smooth
- [ ] Typography rendering correct

---

## Manual Visual Inspection

### Design Aesthetics
- [ ] Overall visual harmony
- [ ] Curved aesthetic maintained
- [ ] Editorial white space
- [ ] "One Highlight" creates focal point
- [ ] Premium, polished feel

### Interaction Quality
- [ ] Hover states smooth
- [ ] Transitions correct timing
- [ ] Active states provide feedback
- [ ] Loading states clear
- [ ] Error states helpful

### Responsive Behavior
- [ ] Tested on real devices
- [ ] Touch targets 44px minimum
- [ ] Text readable at all sizes
- [ ] Layouts don't break
- [ ] Performance smooth

---

## CI/CD Quality Gates

### Pre-Commit
- [ ] Token compliance check
- [ ] Accessibility audit
- [ ] Visual regression
- [ ] "One Highlight" validation

### Pull Request
- [ ] Design token usage verified
- [ ] Radius hierarchy checked
- [ ] Contrast ratios tested
- [ ] No hardcoded values

### Build Pipeline
- [ ] Fail if hardcoded colors
- [ ] Fail if multiple Expressive/screen
- [ ] Fail if accessibility violations
- [ ] Fail if contrast below threshold

---

## QA Report Template

### Required Sections
- [ ] Project name and date
- [ ] Environment tested
- [ ] Total checks performed
- [ ] Pass/Fail/Warning counts
- [ ] Design compliance details
- [ ] Accessibility details
- [ ] Visual quality details
- [ ] Prioritized issues list
- [ ] Sign-off section

---

*Quality Assurance Checklist — Complete Staylook Verification*
