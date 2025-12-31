---
title: Flow Completeness Audit
description: Systematic checklist to find missing micro-level flows, states, and interactions in screens
tags:
  - frontend
  - audit
  - flows
  - completeness
  - micro-interactions
name: flow-completeness-audit
---

# Flow Completeness Audit Skill

## What is it?

A systematic skill to audit every screen for missing micro-interactions, edge cases, states, and flows. Ensures no user experience gaps exist at the micro level.

---

## Screen Audit Framework

For EVERY screen, verify these categories:

```
┌─────────────────────────────────────────────────────┐
│              SCREEN COMPLETENESS AUDIT              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. LOADING STATES    - Initial, refresh, lazy     │
│  2. ERROR STATES      - Network, validation, 404   │
│  3. EMPTY STATES      - No data, first time user   │
│  4. SUCCESS STATES    - Confirmation, completion   │
│  5. INTERACTION STATES - Hover, focus, active      │
│  6. USER EXITS        - Cancel, back, escape       │
│  7. EDGE CASES        - Timeout, offline, overflow │
│  8. ACCESSIBILITY     - Keyboard, screen reader    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 1. Loading States Checklist

### Every Async Operation Must Have:

- [ ] **Initial Load** - Skeleton or spinner on first render
- [ ] **Refresh Load** - Loading indicator while refreshing data
- [ ] **Button Loading** - Spinner in button during submit
- [ ] **Lazy Load** - Placeholder for lazy-loaded components
- [ ] **Pagination Load** - Loading indicator for next page

### Missing Loading Examples:

```tsx
// ❌ MISSING: No loading state
const { data } = useQuery(['users']);
return <UserList users={data} />;

// ✅ COMPLETE: Loading handled
const { data, isLoading } = useQuery(['users']);
if (isLoading) return <UserListSkeleton />;
return <UserList users={data} />;
```

---

## 2. Error States Checklist

### Every Failure Point Must Have:

- [ ] **Network Error** - API call failures
- [ ] **Validation Error** - Form field errors
- [ ] **404 Error** - Resource not found
- [ ] **Permission Error** - Unauthorized access
- [ ] **Timeout Error** - Request timeout
- [ ] **Server Error** - 500 errors

### Missing Error Examples:

```tsx
// ❌ MISSING: Error not handled
const { data } = useQuery(['user', id]);

// ✅ COMPLETE: Error state shown
const { data, error, isError } = useQuery(['user', id]);
if (isError) return <ErrorAlert error={error} onRetry={refetch} />;
```

---

## 3. Empty States Checklist

### Every List/Data View Must Have:

- [ ] **No Data** - Empty list/table
- [ ] **No Search Results** - Search with no matches
- [ ] **Filtered Empty** - Active filters with no results
- [ ] **First Time User** - New user onboarding empty
- [ ] **No Permission** - Data exists but user can't see

### Missing Empty Examples:

```tsx
// ❌ MISSING: Empty not handled
return <Table data={users} />;

// ✅ COMPLETE: Empty state shown
if (users.length === 0) {
  return <EmptyState icon={Users} title="No users" action={...} />;
}
return <Table data={users} />;
```

---

## 4. Success States Checklist

### Every Action Must Confirm:

- [ ] **Form Submit** - Toast or redirect
- [ ] **Delete Action** - Confirmation message
- [ ] **Save Action** - "Saved" indicator
- [ ] **Copy Action** - "Copied!" feedback
- [ ] **Upload Action** - "Upload complete"

### Missing Success Examples:

```tsx
// ❌ MISSING: No success feedback
await saveUser(data);
router.push('/users');

// ✅ COMPLETE: Success feedback
await saveUser(data);
toast.success('User saved successfully');
router.push('/users');
```

---

## 5. Interaction States Checklist

### Every Interactive Element Must Have:

| Element | Hover | Focus | Active | Disabled |
|---------|-------|-------|--------|----------|
| Button | ✓ | ✓ | ✓ | ✓ |
| Link | ✓ | ✓ | ✓ | - |
| Input | ✓ | ✓ | - | ✓ |
| Card (clickable) | ✓ | ✓ | ✓ | - |
| Checkbox | ✓ | ✓ | ✓ | ✓ |
| Dropdown Item | ✓ | ✓ | ✓ | ✓ |

### Missing Interaction Examples:

```tsx
// ❌ MISSING: No hover state on clickable card
<Card onClick={...}>

// ✅ COMPLETE: Hover state added
<Card onClick={...} className="hover:border-primary cursor-pointer transition-colors">
```

---

## 6. User Exits Checklist

### Every Flow Must Allow:

- [ ] **Cancel Button** - Visible cancel option
- [ ] **Back Navigation** - Browser back works
- [ ] **Escape Key** - Closes modals/dialogs
- [ ] **Click Outside** - Closes dropdowns/popovers
- [ ] **Unsaved Warning** - Prompt if leaving with changes

### Missing Exit Examples:

```tsx
// ❌ MISSING: No way to cancel
<Dialog>
  <form>...</form>
  <Button type="submit">Save</Button>
</Dialog>

// ✅ COMPLETE: Cancel option
<Dialog>
  <form>...</form>
  <DialogFooter>
    <Button variant="outline" onClick={close}>Cancel</Button>
    <Button type="submit">Save</Button>
  </DialogFooter>
</Dialog>
```

---

## 7. Edge Cases Checklist

### Every Screen Must Handle:

- [ ] **Long Text** - Truncation with ellipsis or tooltip
- [ ] **No Image** - Fallback avatar/placeholder
- [ ] **Offline Mode** - Offline indicator or cache
- [ ] **Slow Network** - Progress indicators
- [ ] **Session Timeout** - Re-auth prompt
- [ ] **Concurrent Edit** - Conflict resolution
- [ ] **Large Data** - Pagination or virtualization

### Missing Edge Case Examples:

```tsx
// ❌ MISSING: Long name breaks layout
<span>{user.name}</span>

// ✅ COMPLETE: Truncation handled
<span className="truncate max-w-[200px]" title={user.name}>
  {user.name}
</span>
```

---

## 8. Accessibility Checklist

### Every Screen Must Support:

- [ ] **Keyboard Navigation** - Tab through all interactive elements
- [ ] **Focus Visible** - Focus ring on focused elements
- [ ] **Screen Reader** - Proper aria labels
- [ ] **Alt Text** - Images have descriptions
- [ ] **Skip Link** - Skip to main content
- [ ] **Announcements** - Dynamic changes announced

### Missing A11y Examples:

```tsx
// ❌ MISSING: Icon button not labeled
<Button size="icon"><Settings /></Button>

// ✅ COMPLETE: Screen reader label
<Button size="icon">
  <Settings />
  <span className="sr-only">Settings</span>
</Button>
```

---

## Component Audit Checklists

### Button Audit

- [ ] Has hover background change
- [ ] Has focus ring (focus-visible)
- [ ] Has active press effect (scale)
- [ ] Has disabled opacity
- [ ] Has loading spinner for async
- [ ] Icon has proper spacing (mr-2 or ml-2)

### Form Audit

- [ ] Labels connected via htmlFor/id
- [ ] Required fields indicated
- [ ] Inline validation errors
- [ ] Error styling on invalid inputs
- [ ] Success state on valid submit
- [ ] Form remembers data on error
- [ ] Submit button has loading state

### Modal/Dialog Audit

- [ ] Closes on backdrop click
- [ ] Closes on Escape key
- [ ] Focus trapped inside
- [ ] Focus returns on close
- [ ] Has close button
- [ ] Has cancel action
- [ ] Loading state for async actions

### Table Audit

- [ ] Loading skeleton for rows
- [ ] Empty state when no data
- [ ] Error state on fetch failure
- [ ] Pagination loading indicator
- [ ] Sortable columns have hover
- [ ] Row hover highlight
- [ ] Selection state visual

---

## Quick Audit Template

```markdown
# Screen: [Screen Name]

## States
- [ ] Loading: Skeleton shows on initial load
- [ ] Error: Error alert with retry button
- [ ] Empty: Empty state with CTA
- [ ] Success: Toast on successful actions

## Interactions
- [ ] All buttons have hover/focus/active
- [ ] All inputs have focus ring
- [ ] Clickable cards have hover

## Exits
- [ ] Cancel button on forms
- [ ] Back navigation works
- [ ] Escape closes modals

## Edge Cases
- [ ] Long text truncates properly
- [ ] Missing images have fallbacks
- [ ] Large lists paginated

## Accessibility
- [ ] Keyboard navigable
- [ ] Focus visible
- [ ] Screen reader labels present
```
