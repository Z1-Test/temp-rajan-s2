---
name: brand-guidelines
description: Applies Staytuned brand colors and typography to artifacts that should match Staytuned’s look-and-feel (docs, UI mockups, slides, marketing assets, and internal tooling).
license: Complete terms in LICENSE.txt
---

# Staytuned Brand Guidelines (Black & White)

## Overview

Use these guidelines to keep Staytuned artifacts visually consistent, minimal, and high-contrast.

Keywords: branding, corporate identity, visual identity, styling, brand colors, typography, visual formatting, visual design

## Brand Guidelines

### Color Palette (Monochrome)

Main colors:

- Black: `#000000` — primary text, primary surfaces in dark mode
- White: `#FFFFFF` — primary backgrounds, text on dark surfaces

Supporting grays:

- Gray 900: `#111111` — elevated dark surfaces, dividers on dark
- Gray 700: `#333333` — secondary text on light backgrounds
- Gray 400: `#999999` — tertiary text, disabled states
- Gray 100: `#F5F5F5` — subtle backgrounds, panels, table stripes
- Gray 050: `#FAFAFA` — page background alternative (light mode)

Usage rules:

- Default to white backgrounds with black text.
- Use grays only for hierarchy (secondary/tertiary text, borders, subtle fills).
- Avoid color accents unless explicitly required by the artifact (e.g., status states in a product UI).

### Typography

- Headings: Poppins (fallback: Arial)
- Body text: Lora (fallback: Georgia)
- Note: Fonts should be pre-installed in your environment for best results.

## Features

### Smart Font Application

- Use Poppins for headings (24pt and larger).
- Use Lora for body text.
- Fall back to Arial/Georgia if the preferred fonts are unavailable.
- Preserve legibility across platforms.

### Text Styling

- Use size and weight (not color) as the primary hierarchy mechanism.
- Keep contrast high: black text on white, or white text on black.
- Use gray text sparingly and only for secondary/tertiary content.

### Shapes, Borders, and Dividers

- Use monochrome fills (black/white/grays).
- Prefer 1px dividers in Gray 900 (dark) or Gray 100/700 (light, depending on background).
- Avoid drop shadows where possible; prefer solid separation and spacing.

## Technical Details

### Font Management

- Uses system-installed fonts when available.
- Provides fallback to Arial (headings) and Georgia (body).
- No font installation required, but pre-installing the preferred fonts improves consistency.

### Color Application

- Use RGB/hex values exactly as specified to avoid drift.
- If tooling supports tokens, map the palette to semantic tokens (e.g., background, text, border, muted).
