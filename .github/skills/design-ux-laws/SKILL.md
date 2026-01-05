---
title: UX Laws & Psychology
description: Psychological principles and cognitive laws for creating intuitive user interfaces based on Laws of UX
tags:
  - frontend
  - ux
  - psychology
  - cognitive-science
  - staylook
  - heuristics
  - gestalt
name: ux-laws
---

# UX Laws & Psychology Skill

> **Based on Laws of UX**: Psychological principles for building intuitive interfaces

## What is it?

This skill provides essential psychological principles and cognitive laws that inform great user interface design. Understanding these laws helps create interfaces that align with how human brains naturally process information, make decisions, and perceive visual elements.

## Why use it?

- **Psychology-Backed Design**: Make decisions based on how humans actually think
- **Reduce Friction**: Align interface with natural cognitive patterns
- **Increase Usability**: Apply proven principles that improve task completion
- **Memorable Experiences**: Design for how humans remember and perceive
- **Intuitive Interfaces**: Match user expectations and mental models

---

# Part 1: Core Laws Summary

## Decision & Cognitive Load Laws

| Law | Principle | Staylook Application |
|-----|-----------|---------------------|
| **Hick's Law** | More choices = slower decisions | "One Highlight" reduces decision time |
| **Miller's Law** | ~7 items in working memory | Card layouts chunk information |
| **Tesler's Law** | Complexity must exist somewhere | Shift complexity to the system |
| **Occam's Razor** | Simplest solution is best | Minimal design philosophy |

## Perception & Attention Laws

| Law | Principle | Staylook Application |
|-----|-----------|---------------------|
| **Von Restorff Effect** | Different items are remembered | Expressive element stands out |
| **Selective Attention** | Users filter stimuli | Standard fades, Expressive captures focus |
| **Serial Position** | First/last items remembered best | Primary actions at end (right) |
| **Peak-End Rule** | Experiences judged by peak+end | Delightful success states |

## Visual Organization Laws (Gestalt)

| Law | Principle | Staylook Application |
|-----|-----------|---------------------|
| **Proximity** | Near objects seem grouped | 4px spacing grid |
| **Common Region** | Bounded elements grouped | Radius hierarchy (32→24→16) |
| **Similarity** | Similar styling = related | All buttons pill-shaped |
| **Uniform Connectedness** | Connected = related | Step indicators with lines |
| **Prägnanz** | Prefer simplest interpretation | Clean, minimal layouts |

## Interaction & Performance Laws

| Law | Principle | Staylook Application |
|-----|-----------|---------------------|
| **Fitts's Law** | Bigger + closer = faster | Pill buttons maximize area |
| **Doherty Threshold** | Feedback within 400ms | 150ms/300ms/500ms animation scale |
| **Goal-Gradient Effect** | Motivation increases near goal | Expressive for completed steps |

## User Expectation Laws

| Law | Principle | Staylook Application |
|-----|-----------|---------------------|
| **Jakob's Law** | Users expect familiar patterns | Familiar patterns + curved aesthetic |
| **Mental Models** | Users have preexisting beliefs | Cards = contained, Pill = action |
| **Postel's Law** | Accept varied input, consistent output | Flexible inputs, formatted display |

## Memory & Aesthetics Laws

| Law | Principle | Staylook Application |
|-----|-----------|---------------------|
| **Zeigarnik Effect** | Incomplete tasks remembered | Progress indicators, incomplete highlights |
| **Working Memory** | Limited capacity | Keep context visible |
| **Aesthetic-Usability** | Beautiful = perceived usable | Premium curved aesthetic |

---

# Part 2: Applying Laws to Staylook

## Von Restorff + One Highlight Rule

The "One Highlight" rule is the Von Restorff Effect in action:

**Principle**: When multiple similar objects are present, the different one is remembered.

**Implementation**:
- Use Expressive (accent) for exactly 1 element per screen
- All other elements use Standard (ink) color
- The highlight element captures attention first
- Don't rely on color alone—combine with size/shape

## Hick's Law + Button Hierarchy

Reduce decision time through clear hierarchy:

**Principle**: Fewer choices = faster decisions.

**Implementation**:
- ONE Expressive button (the obvious choice)
- Standard buttons for secondary options
- Ghost buttons for tertiary "maybe later" actions
- Progressive disclosure for complex options

## Fitts's Law + Pill Buttons

Optimize touch/click targets:

**Principle**: Larger and closer targets are easier to acquire.

**Implementation**:
- All buttons are pill-shaped (maximizes area)
- Minimum 44px touch target on mobile
- Primary actions are visually larger
- FAB buttons leverage corner advantage

## Proximity + Spacing Grid

Group related elements:

**Principle**: Near elements are perceived as related.

**Implementation**:
- space-2 (8px): Tightly related (label-input)
- space-4 (16px): Related group members
- space-8 (32px): Between groups
- space-12+ (48px+): Between sections

## Common Region + Radius Hierarchy

Create visual containers:

**Principle**: Bounded elements are perceived as grouped.

**Implementation**:
- Section: 32px radius (outermost)
- Container: 24px radius (major wrapper)
- Card: 16px radius (information group)
- Nesting: Outer more rounded than inner

## Doherty Threshold + Animation Scale

Provide timely feedback:

**Principle**: Feedback must arrive within 400ms.

**Implementation**:
- Fast (150ms): Micro-interactions, hovers
- Base (300ms): Standard transitions
- Slow (500ms): Complex animations
- >400ms: Show loading skeleton/spinner

---

# Part 3: Application Checklist

## Cognitive Load
- [ ] Limited choices per screen (Hick's Law)
- [ ] Content chunked into groups (Miller's Law)
- [ ] Complexity handled by system where possible (Tesler's Law)

## Visual Perception
- [ ] Key action visually distinctive (Von Restorff)
- [ ] Important items at start/end of lists (Serial Position)
- [ ] Related items grouped together (Proximity)
- [ ] Containers define visual regions (Common Region)

## Interaction
- [ ] Touch targets sized appropriately—44px+ (Fitts's Law)
- [ ] Feedback provided within 400ms (Doherty Threshold)
- [ ] Familiar patterns used (Jakob's Law)

## Experience
- [ ] Peak moments are delightful (Peak-End Rule)
- [ ] End moments are satisfying (Peak-End Rule)
- [ ] Aesthetic quality maintained (Aesthetic-Usability)

---

# Part 4: Best Practices

**Do**:
- Apply multiple principles together (they reinforce each other)
- Use Von Restorff for primary actions (Staylook's "One Highlight")
- Respect Fitts's Law for button sizing and placement
- Follow Jakob's Law for familiar patterns
- Create delightful peak and end moments
- Use proximity and common region for visual organization

**Don't**:
- Overwhelm with choices (violates Hick's Law)
- Make all elements equally prominent (violates Von Restorff)
- Use tiny touch targets (violates Fitts's Law)
- Invent unfamiliar navigation patterns (violates Jakob's Law)
- End experiences on negative notes (violates Peak-End Rule)
- Leave users waiting without feedback (violates Doherty Threshold)

---

## Further Resources

- See [references/LAWS-DETAILED.md](references/LAWS-DETAILED.md) for complete law descriptions
- See [references/QUICK-REFERENCE.md](references/QUICK-REFERENCE.md) for one-line summaries
- lawsofux.com - Full collection of UX laws with examples

---

*UX Laws & Psychology Skill — Based on Laws of UX*
