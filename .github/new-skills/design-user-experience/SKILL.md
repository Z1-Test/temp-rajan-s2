---
title: User Experience
description: Staylook user experience patterns with semantic feedback, curved interactions, and editorial flows
tags:
  - frontend
  - ux
  - user-journey
  - flows
  - interactions
  - staylook
  - semantic-ux
name: user-experience
---

# User Experience Skill

> **Staylook UX**: Semantic feedback, curved interactions, and the "One Highlight" principle

## What is it?

This skill covers Staylook user experience patterns—from designing user journeys with proper visual hierarchy to implementing action lifecycles with semantic feedback, all while maintaining the curved aesthetic and "One Highlight" rule.

## Why use it?

- **Semantic Clarity**: Feedback uses Standard vs Expressive distinction
- **Visual Hierarchy**: "One Highlight" guides user attention
- **Curved Interaction**: All interactive elements follow radius hierarchy
- **Predictable States**: Intensity scale for all interactions

---

# Part 1: The "One Highlight" UX Principle

## Visual Attention Hierarchy

Design every screen with a clear focal point:

### The Three Attention Levels

**Level 1: THE ONE HIGHLIGHT (Expressive)**
- Purpose: The single most important action or element
- Color: Expressive (accent/blue)
- Priority: Highest
- Budget: Exactly 1 per screen
- Examples: FAB button, "Complete Purchase", "Get Started"
- Effect: User's eyes drawn here first

**Level 2: SUPPORTING ACTIONS (Standard)**
- Purpose: All other necessary buttons and actions
- Color: Standard (ink/black)
- Priority: Medium
- Budget: Unlimited
- Examples: "Cancel", "Save Draft", "Back", "Continue"
- Effect: Provide functionality without competing for attention

**Level 3: TERTIARY ACTIONS (Ghost)**
- Purpose: Optional or dismissive actions
- Color: Standard Ink Soft, transparent background
- Priority: Low
- Budget: Unlimited
- Examples: "Skip", "Maybe Later", "Dismiss", "Not Now"
- Effect: Minimal visual weight, easily ignorable

## Implementing Visual Hierarchy

Apply this pattern to every screen:

### Page-Level Hierarchy
- **Identify**: The ONE most important action on the page
- **Apply**: Expressive variant only to that element
- **Use**: Standard variant for all other primary actions
- **Reserve**: Ghost variant for optional/dismissive actions

### Section-Level Hierarchy
- **Within sections**: Max 1 Expressive element
- **Across sections**: If page has multiple sections, each could have 1 highlight
- **Best practice**: Prefer single page-level highlight over multiple section highlights

### Form-Level Hierarchy
- **Submit button**: Usually the Expressive element
- **Cancel button**: Use Standard variant
- **Optional actions**: Use Ghost variant
- **Rule**: Never make both Submit and Cancel expressive

---

# Part 2: Action Lifecycle Design

## The Five Action States

Design actions with complete state coverage:

### 1. Idle State
- **Visual**: Muted intensity (lightest)
- **Appearance**: Resting, waiting for interaction
- **Interaction**: Hover-ready
- **Feedback**: None, neutral

### 2. Processing State
- **Visual**: Calm intensity (medium)
- **Appearance**: Active, showing progress
- **Indicator**: Loading spinner or progress bar
- **Button**: Disabled during processing
- **Text**: Changes to "Processing..." or similar
- **Feedback**: Visual indication processing is occurring

### 3. Success State
- **Visual**: Vibrant intensity (emphasized)
- **Appearance**: Completion indication
- **Indicator**: Check icon or success symbol
- **Color**: Can use green for success confirmation
- **Duration**: Show for 2-3 seconds before returning to idle
- **Feedback**: Toast notification with success message

### 4. Error State
- **Visual**: Vibrant intensity with error color
- **Appearance**: Problem indication
- **Indicator**: X icon or warning symbol
- **Color**: Red for errors
- **Duration**: Persists until user takes corrective action
- **Feedback**: Inline error message explaining what went wrong

### 5. Disabled State
- **Visual**: Calm intensity (muted)
- **Appearance**: Unavailable for interaction
- **Opacity**: 70%
- **Cursor**: Not-allowed
- **Reason**: Clearly indicate why disabled if possible

## State Progression Flow

Design the complete action flow:

**User initiates** → **Processing** → **Success or Error** → **Return to Idle**

Ensure smooth transitions between states using:
- Appropriate duration (150-300ms)
- Clear visual feedback
- Accessible announcements for screen readers
- Maintain button shape and position (don't shift layout)

---

# Part 3: Form Interaction Patterns

## Form State Management

Design forms with these states:

### Pristine State
- **Condition**: Form just opened, no user input yet
- **Submit button**: Disabled
- **Visual**: All inputs in resting state (Vibrant background, Muted border)
- **Validation**: Not yet triggered

### Dirty State
- **Condition**: User has entered data
- **Submit button**: Enabled (if data valid)
- **Visual**: Modified inputs maintain Vibrant background
- **Validation**: Can validate on blur or submit

### Validating State
- **Condition**: Form is being validated
- **Submit button**: Disabled during validation
- **Visual**: Brief validation indicator if remote validation
- **Feedback**: Loading state if validation takes time

### Invalid State
- **Condition**: Validation failed
- **Submit button**: Disabled
- **Visual**: Error borders (red) on invalid fields
- **Feedback**: Inline error messages below each invalid field
- **Focus**: Move focus to first invalid field

### Submitting State
- **Condition**: Form data being submitted to server
- **All inputs**: Disabled
- **Submit button**: Shows loading spinner
- **Visual**: Cannot interact with form during submission
- **Feedback**: Loading indicator on submit button

### Success State
- **Condition**: Form successfully submitted
- **Visual**: Success confirmation message
- **Action**: Usually redirect to next page or show confirmation
- **Feedback**: Toast notification with success message

### Error State
- **Condition**: Submission failed
- **Visual**: Error message displayed
- **Form**: Re-enabled for corrections
- **Feedback**: Specific error messages about what failed
- **Retry**: Allow user to correct and resubmit

## Form Layout Guidelines

Structure forms for usability:

### Input Organization
- **Group**: Related fields together
- **Spacing**: Use space-4 between groups, space-2 between related fields
- **Labels**: Always visible above inputs
- **Width**: Appropriate for expected input (e.g., ZIP code narrow, email wide)

### Button Placement
- **Position**: Bottom right for western layouts
- **Order**: Cancel/Back on left, Primary action on right
- **Spacing**: space-3 gap between buttons
- **Alignment**: Right-aligned unless full-width mobile layout

### Helper Text
- **Placement**: Below input with space-2 gap
- **Color**: Standard Ink Muted
- **Content**: Provide guidance before errors occur

### Error Messages
- **Placement**: Below input, replacing or alongside helper text
- **Color**: Red with error icon
- **Content**: Specific, actionable description of error
- **Icon**: Include warning icon for visibility

---

# Part 4: CRUD Operation Flows

## Create Flow Design

Structure the create flow:

### Entry Point
- **Trigger**: Expressive button (if it's THE main action)
- **Example**: "+ Add New" FAB button
- **Icon**: Plus icon for creation
- **Placement**: Prominent location

### Form Presentation
- **Container**: Modal or dedicated page
- **Radius**: Modal uses 24px (container radius)
- **Fields**: Only essential fields required
- **Optional**: Clearly marked, can be skipped

### Validation
- **Timing**: On blur for individual fields, on submit for form
- **Feedback**: Immediate for each field
- **Blocking**: Prevent submission if invalid

### Submission
- **Button**: "Create" or similar action-specific text
- **Variant**: Expressive (THE action in the modal)
- **State**: Show loading during submission
- **Feedback**: Loading spinner on button

### Outcome
- **Success**: Close modal/navigate to new item, show toast
- **Error**: Keep modal open, show error, allow correction
- **Confirmation**: Toast notification "Item created successfully"

## Update/Edit Flow Design

Structure the edit flow:

### Entry Point
- **Trigger**: Standard button or ghost icon button
- **Example**: Edit button or pencil icon
- **Context**: Near the item being edited

### Form Presentation
- **Pre-fill**: Load existing data into form
- **Highlight**: Indicate which fields changed (optional)
- **Mode**: Can be inline edit or separate form

### Change Detection
- **Track**: Which fields user modified
- **Indication**: Show unsaved changes indicator
- **Warning**: Prevent accidental navigation if unsaved

### Submission
- **Button**: "Save Changes" or "Update"
- **Variant**: Expressive in modal, Standard if inline
- **Comparison**: Optionally show what changed

### Outcome
- **Success**: Close edit mode, update display, show toast
- **Error**: Keep in edit mode, show error
- **Confirmation**: Toast "Changes saved"

## Delete Flow Design

Structure the delete flow:

### Entry Point
- **Trigger**: Ghost button or small icon
- **Icon**: Trash icon
- **Color**: Standard Ink Muted (subtle)
- **Placement**: Usually in overflow menu or card actions

### Confirmation Required
- **Modal**: AlertDialog for confirmation
- **Title**: "Delete [Item Name]?"
- **Description**: Explain consequences, mention if irreversible
- **Warning**: Clear indication this is destructive

### Confirmation Buttons
- **Cancel**: Standard button, on left
- **Delete**: Expressive button with red background
- **Labels**: Clear action verbs ("Delete", not "OK")

### Deletion Process
- **Loading**: Show loading state on Delete button
- **Optimistic**: Can update UI optimistically
- **Rollback**: Ability to undo if delete is reversible

### Outcome
- **Success**: Remove item from display, show toast
- **Error**: Keep item, show error explanation
- **Confirmation**: Toast "[Item] deleted"

---

# Part 5: Multi-Step Process Design (Wizards)

## Wizard Structure

Design step-by-step processes:

### Progress Indication
- **Visual**: Step indicators at top
- **Numbers**: Show step numbers (1, 2, 3)
- **Labels**: Brief label for each step
- **State**: Completed (Expressive color), Current (Expressive outline), Future (Muted)
- **Icons**: Can use check icon for completed steps

### Step Content
- **Container**: Card with 16px radius
- **Padding**: Generous (space-6 to space-8)
- **Focus**: One clear task per step
- **Fields**: Only relevant to current step

### Navigation Controls
- **Back Button**: Standard or Ghost variant, left side
- **Next Button**: Expressive variant, right side (THE action)
- **First Step**: Hide or disable Back button
- **Last Step**: Change "Next" to "Complete" or "Finish"

### Data Persistence
- **Save**: Store data as user progresses
- **Back**: Allow return to previous steps with data intact
- **Exit**: Offer save draft if user leaves mid-flow

### Completion
- **Final Step**: Often a review/confirmation
- **Finish Button**: Expressive, clearly final action
- **Success**: Navigate to result page, show confirmation

---

# Part 6: Feedback Pattern Design

## Toast Notification Guidelines

Design toast messages:

### Standard Feedback Toast
- **Color**: Standard (black/ink)
- **Icon**: Appropriate icon (check, info, etc.)
- **Duration**: 3-5 seconds
- **Position**: Bottom center or top right
- **Content**: Brief, specific message

### Success Toast
- **Background**: Light green tint
- **Border**: Green
- **Icon**: Check mark icon
- **Color**: Green text
- **Message**: Confirm what succeeded

### Error Toast
- **Background**: Light red tint
- **Border**: Red
- **Icon**: X or warning icon
- **Color**: Red text
- **Message**: Explain what failed
- **Action**: Optional retry button

### Expressive Toast (Rare)
- **Use**: Only for special product moments
- **Background**: Accent light color
- **Border**: Accent color
- **Icon**: Sparkles or special icon
- **Example**: "New feature unlocked!"

## Inline Alert Design

Display contextual alerts:

### Information Alert (Muted)
- **Background**: Calm surface
- **Border**: Muted border
- **Icon**: Info icon in Standard Ink Soft
- **Use**: General information, low priority

### Important Alert (Calm)
- **Background**: Accent light
- **Border**: Accent color
- **Icon**: Info icon in Accent
- **Use**: Information that needs attention

### Warning Alert
- **Background**: Light orange tint
- **Border**: Orange
- **Icon**: Warning triangle
- **Use**: Caution, potential issues

### Error Alert (Vibrant)
- **Background**: Light red tint
- **Border**: Red
- **Icon**: X or alert triangle
- **Use**: Errors, problems requiring action

---

# Part 7: Loading State Design

## Skeleton Loading Pattern

Show content structure while loading:

### Skeleton Elements
- **Shape**: Match actual content shape
- **Color**: Use Vibrant surface for skeleton blocks
- **Secondary**: Use Calm surface for less important blocks
- **Animation**: Subtle pulse or shimmer
- **Layout**: Preserve exact layout of loaded content

### Skeleton Types
- **Text**: Horizontal bars for text lines
- **Cards**: Full card shape with internal lines
- **Images**: Rectangular blocks for images
- **Avatar**: Circular skeleton for profile pictures

## Spinner Loading Pattern

Show progress for actions:

### Button Loading
- **Icon**: Spinner icon replacing button icon
- **Position**: Left side (leading position)
- **Text**: Change to "Loading..." or "Processing..."
- **Disabled**: Button disabled during loading
- **Color**: Match button variant (Base for Expressive, Ink for Standard)

### Page Loading
- **Position**: Center of container
- **Size**: Medium to large
- **Color**: Standard Ink or Expressive Accent
- **Text**: Optional loading message below spinner

### Progress Indicators
- **Use**: When load time is known
- **Type**: Progress bar showing completion percentage
- **Color**: Expressive Accent for progress
- **Background**: Calm or Muted surface

---

# Part 8: Empty State Design

## Empty State Components

Design helpful empty states:

### Structure
- **Icon**: Large, relevant icon (48-64px)
- **Background**: Calm surface, circular container
- **Color**: Standard Ink Muted
- **Title**: Clear heading explaining state
- **Description**: Brief explanation of why empty
- **Action**: Call to action to populate

### Icon Design
- **Size**: 64px recommended
- **Container**: Circular background with Calm surface
- **Color**: Standard Ink Muted
- **Type**: Related to content type (Inbox for messages, etc.)

### Title Text
- **Color**: Standard Ink
- **Weight**: Semibold (600)
- **Message**: "No items yet" or similar
- **Tone**: Friendly, not alarming

### Description Text
- **Color**: Standard Ink Soft
- **Size**: text-sm
- **Content**: Brief explanation or guidance
- **Tone**: Helpful and encouraging

### Call to Action
- **Button**: Expressive variant (if THE main action)
- **Icon**: Plus or similar action icon
- **Text**: "Create Item" or specific action
- **Placement**: Below description

## Empty State Variations

Different contexts:

### First-Use Empty State
- **Focus**: Onboarding, getting started
- **Action**: Guide user to create first item
- **Tone**: Welcoming, encouraging

### No-Results Empty State
- **Context**: Search or filter returned nothing
- **Action**: Suggest clearing filters or trying different search
- **Tone**: Helpful, not blaming

### Error Empty State
- **Context**: Failed to load data
- **Action**: Retry button
- **Message**: Explain what went wrong
- **Tone**: Apologetic, solution-oriented

---

# Part 9: Confirmation Pattern Design

## Confirmation Levels

Match confirmation to risk:

### Low-Risk Actions (No Confirmation)
- **Examples**: Closing non-modal windows, minimizing
- **Pattern**: No confirmation needed
- **Undo**: Offer undo option if possible

### Medium-Risk Actions (Simple Confirmation)
- **Examples**: Deleting a draft, clearing form
- **Pattern**: Simple modal with Yes/No
- **Buttons**: Cancel (Standard), Confirm (Standard)

### High-Risk Actions (Strong Confirmation)
- **Examples**: Deleting published content, permanent actions
- **Pattern**: Modal with clear warning
- **Buttons**: Cancel (Standard), Delete (Expressive in red)
- **Content**: Explain irreversibility

### Critical Actions (Type-to-Confirm)
- **Examples**: Deleting account, destroying data
- **Pattern**: Require typing item name or "DELETE" to confirm
- **Input**: Text input that must match exactly
- **Button**: Disabled until correct text entered
- **Color**: Red Expressive button for final action

## Confirmation Dialog Design

Structure confirmation modals:

### Dialog Container
- **Radius**: 24px (container radius)
- **Width**: Max 480px
- **Padding**: 24px
- **Shadow**: Vibrant shadow

### Dialog Content
- **Title**: Clear question ("Delete [Item]?")
- **Description**: Explain consequences
- **Warning**: Bold important warnings
- **Input**: If type-to-confirm required

### Dialog Actions
- **Layout**: Right-aligned buttons
- **Spacing**: space-3 gap
- **Cancel**: Standard variant, left position
- **Confirm**: Expressive variant (appropriate color), right position

---

# Part 10: UX Best Practices

## Visual Hierarchy Checklist

Verify on every screen:

- [ ] Exactly ONE Expressive element (the focal point)
- [ ] Primary actions use Expressive (max 1 per screen)
- [ ] Secondary actions use Standard
- [ ] Tertiary actions use Ghost
- [ ] All buttons are pill-shaped
- [ ] Interactive elements follow intensity progression

## Feedback Clarity Checklist

Ensure complete feedback:

- [ ] Every action provides immediate visual feedback
- [ ] Loading states use Standard color
- [ ] Success states use green with clear confirmation
- [ ] Error states use red with helpful message
- [ ] Toast notifications follow semantic color rules
- [ ] Form validation errors are clear and actionable

## Accessibility Checklist

Maintain accessibility:

- [ ] Focus states visible on all interactive elements
- [ ] Keyboard navigation works for all flows
- [ ] ARIA labels present for screen readers
- [ ] Color is not the only visual means (use icons + text)
- [ ] Contrast ratios meet WCAG AA (4.5:1)
- [ ] Error messages announced to screen readers

## Flow Completeness Checklist

Verify complete flows:

- [ ] All user flows have clear entry and exit points
- [ ] Success path is clear and intuitive
- [ ] Error paths are handled gracefully
- [ ] User data is never lost unexpectedly
- [ ] Confirmations prevent accidental destructive actions
- [ ] Loading states prevent double-submission

---

## Best Practices

**Do**:
- Use ONE Expressive element per screen (the focal point)
- Make primary actions Expressive, secondary Standard, tertiary Ghost
- Follow intensity scale for all state changes
- Provide immediate feedback for all actions
- Use semantic colors with clear meaning
- Make all buttons pill-shaped
- Confirm destructive actions appropriately
- Preserve user data across flows

**Don't**:
- Have multiple Expressive buttons competing for attention
- Use Expressive color for default buttons
- Skip loading or error states
- Lose user data on errors
- Ignore keyboard navigation
- Make actions without appropriate confirmation
- Use confirmation for low-risk actions
- Break browser back button or expected navigation

---

*Staylook UX — Clear, Hierarchical, Delightful*
