# User Experience Checklist

> Quick validation checklist for Staylook UX patterns

---

## "One Highlight" Rule Checklist

### Per Screen Validation
- [ ] Maximum 1 Expressive element per screen
- [ ] Clear single focal point
- [ ] Primary action uses Expressive (THE button)
- [ ] Secondary actions use Standard
- [ ] Tertiary actions use Ghost

### Priority Compliance
- [ ] Level 1 (Expressive): 1 per screen
- [ ] Level 2 (Standard): Unlimited
- [ ] Level 3 (Ghost): Unlimited

---

## Action States Checklist

### Complete State Coverage
- [ ] Idle state (Muted intensity)
- [ ] Processing state (loading indicator)
- [ ] Success state (green confirmation)
- [ ] Error state (red with message)
- [ ] Disabled state (70% opacity)

### Transitions
- [ ] Smooth duration (150-300ms)
- [ ] Clear visual feedback
- [ ] Position/layout stable

---

## Form Design Checklist

### States Covered
- [ ] Pristine (no input yet)
- [ ] Dirty (user has entered data)
- [ ] Validating (checking data)
- [ ] Invalid (errors shown)
- [ ] Submitting (loading)
- [ ] Success (confirmation)
- [ ] Error (allow retry)

### Layout
- [ ] Labels above inputs (8px gap)
- [ ] Helper text below (8px gap)
- [ ] Error messages red with icon
- [ ] Buttons right-aligned
- [ ] Cancel left, Primary right

---

## CRUD Flow Checklist

### Create Flow
- [ ] Entry point visible (Expressive if main action)
- [ ] Modal/page with proper radius
- [ ] Validation provides feedback
- [ ] Loading state on submit
- [ ] Success toast on completion

### Update Flow
- [ ] Pre-fill existing data
- [ ] Track unsaved changes
- [ ] Warn before leaving if unsaved
- [ ] Success toast on save

### Delete Flow
- [ ] Confirmation modal required
- [ ] Clear warning message
- [ ] Cancel (Standard) + Delete (Red Expressive)
- [ ] Success toast on deletion

---

## Wizard/Multi-Step Checklist

### Progress Indication
- [ ] Step numbers visible
- [ ] Current step highlighted
- [ ] Completed steps show check
- [ ] Future steps muted

### Navigation
- [ ] Back button (Standard/Ghost)
- [ ] Next button (Expressive)
- [ ] Final step says "Complete"
- [ ] Data preserved between steps

---

## Feedback Patterns Checklist

### Toast Notifications
- [ ] Success: green with check
- [ ] Error: red with X/warning
- [ ] Info: Standard or Accent
- [ ] Duration: 3-5 seconds
- [ ] Dismissible

### Loading States
- [ ] Skeleton for content loading
- [ ] Spinner for actions
- [ ] Progress bar if duration known
- [ ] Button text changes during load

### Empty States
- [ ] Icon (64px, muted)
- [ ] Title (Ink, semibold)
- [ ] Description (Ink Soft)
- [ ] CTA button if applicable

---

## Confirmation Levels

| Risk | Pattern | Buttons |
|------|---------|---------|
| Low | No confirmation | N/A |
| Medium | Simple modal | Cancel + Confirm (Standard) |
| High | Warning modal | Cancel + Delete (Red Expressive) |
| Critical | Type-to-confirm | Input + Disabled button |

---

*User Experience Checklist — Staylook UX Compliance*
