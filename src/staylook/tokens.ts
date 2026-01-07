/**
 * Staylook Design System - TypeScript Token Definitions
 * Type-safe access to design tokens
 */

// ============================================
// COLOR TOKENS
// ============================================

export const StandardColors = {
    standard: 'var(--sl-standard)',
    standardSoft: 'var(--sl-standard-soft)',
    standardMuted: 'var(--sl-standard-muted)',
} as const;

export const ExpressiveColors = {
    expressive: 'var(--sl-expressive)',
    expressiveSoft: 'var(--sl-expressive-soft)',
    expressiveMuted: 'var(--sl-expressive-muted)',
} as const;

export const ContainerColors = {
    muted: 'var(--sl-container-muted)',
    calm: 'var(--sl-container-calm)',
    vibrant: 'var(--sl-container-vibrant)',
} as const;

export const OnColors = {
    standard: 'var(--sl-on-standard)',
    expressive: 'var(--sl-on-expressive)',
    error: 'var(--sl-on-error)',
    success: 'var(--sl-on-success)',
    warning: 'var(--sl-on-warning)',
    info: 'var(--sl-on-info)',
} as const;

export const OnContainerColors = {
    muted: 'var(--sl-on-container-muted)',
    calm: 'var(--sl-on-container-calm)',
    vibrant: 'var(--sl-on-container-vibrant)',
    error: 'var(--sl-on-container-error)',
    success: 'var(--sl-on-container-success)',
    warning: 'var(--sl-on-container-warning)',
    info: 'var(--sl-on-container-info)',
} as const;

export const OutlineColors = {
    standard: 'var(--sl-outline-standard)',
    muted: 'var(--sl-outline-muted)',
    calm: 'var(--sl-outline-calm)',
    vibrant: 'var(--sl-outline-vibrant)',
    expressive: 'var(--sl-outline-expressive)',
    error: 'var(--sl-outline-error)',
    success: 'var(--sl-outline-success)',
    warning: 'var(--sl-outline-warning)',
    info: 'var(--sl-outline-info)',
} as const;

export const ScrimColors = {
    scrim: 'var(--sl-scrim)',
    scrimModal: 'var(--sl-scrim-modal)',
    shadow: 'var(--sl-shadow)',
    transparent: 'var(--sl-transparent)',
    onStandardTransparent: 'var(--sl-on-standard-transparent)',
} as const;

// ============================================
// SHADOW TOKENS
// ============================================

export const Shadows = {
    muted: 'var(--sl-shadow-muted)',
    calm: 'var(--sl-shadow-calm)',
    vibrant: 'var(--sl-shadow-vibrant)',
} as const;

// ============================================
// RADIUS TOKENS
// ============================================

export const Radius = {
    section: 'var(--sl-radius-section)',
    container: 'var(--sl-radius-container)',
    card: 'var(--sl-radius-card)',
    input: 'var(--sl-radius-input)',
    badge: 'var(--sl-radius-badge)',
    button: 'var(--sl-radius-button)',
} as const;

// ============================================
// TYPOGRAPHY TOKENS
// ============================================

export const FontFamilies = {
    sans: 'var(--sl-font-sans)',
    mono: 'var(--sl-font-mono)',
} as const;

export const FontSizes = {
    xs: 'var(--sl-text-xs)',
    sm: 'var(--sl-text-sm)',
    base: 'var(--sl-text-base)',
    lg: 'var(--sl-text-lg)',
    xl: 'var(--sl-text-xl)',
    '2xl': 'var(--sl-text-2xl)',
    '3xl': 'var(--sl-text-3xl)',
    '4xl': 'var(--sl-text-4xl)',
    '5xl': 'var(--sl-text-5xl)',
} as const;

export const FontWeights = {
    normal: 'var(--sl-font-normal)',
    medium: 'var(--sl-font-medium)',
    semibold: 'var(--sl-font-semibold)',
    bold: 'var(--sl-font-bold)',
} as const;

export const LineHeights = {
    tight: 'var(--sl-leading-tight)',
    normal: 'var(--sl-leading-normal)',
    relaxed: 'var(--sl-leading-relaxed)',
} as const;

// ============================================
// SPACING TOKENS
// ============================================

export const Spacing = {
    0: 'var(--sl-space-0)',
    1: 'var(--sl-space-1)',
    2: 'var(--sl-space-2)',
    3: 'var(--sl-space-3)',
    4: 'var(--sl-space-4)',
    5: 'var(--sl-space-5)',
    6: 'var(--sl-space-6)',
    8: 'var(--sl-space-8)',
    10: 'var(--sl-space-10)',
    12: 'var(--sl-space-12)',
    16: 'var(--sl-space-16)',
    20: 'var(--sl-space-20)',
    24: 'var(--sl-space-24)',
} as const;

// ============================================
// ANIMATION TOKENS
// ============================================

export const Durations = {
    fast: 'var(--sl-duration-fast)',
    base: 'var(--sl-duration-base)',
    slow: 'var(--sl-duration-slow)',
} as const;

export const Easings = {
    default: 'var(--sl-ease-default)',
    in: 'var(--sl-ease-in)',
    out: 'var(--sl-ease-out)',
    inOut: 'var(--sl-ease-in-out)',
} as const;

// ============================================
// FOCUS TOKENS
// ============================================

export const Focus = {
    ringWidth: 'var(--sl-focus-ring-width)',
    ringOffset: 'var(--sl-focus-ring-offset)',
    ringColor: 'var(--sl-focus-ring-color)',
} as const;

// ============================================
// Z-INDEX TOKENS
// ============================================

export const ZIndex = {
    base: 'var(--sl-z-base)',
    dropdown: 'var(--sl-z-dropdown)',
    sticky: 'var(--sl-z-sticky)',
    fixed: 'var(--sl-z-fixed)',
    modalBackdrop: 'var(--sl-z-modal-backdrop)',
    modal: 'var(--sl-z-modal)',
    popover: 'var(--sl-z-popover)',
    tooltip: 'var(--sl-z-tooltip)',
} as const;

// ============================================
// COMBINED TOKENS EXPORT
// ============================================

export const Tokens = {
    colors: {
        standard: StandardColors,
        expressive: ExpressiveColors,
        container: ContainerColors,
        on: OnColors,
        onContainer: OnContainerColors,
        outline: OutlineColors,
        scrim: ScrimColors,
    },
    shadows: Shadows,
    radius: Radius,
    typography: {
        families: FontFamilies,
        sizes: FontSizes,
        weights: FontWeights,
        lineHeights: LineHeights,
    },
    spacing: Spacing,
    animation: {
        durations: Durations,
        easings: Easings,
    },
    focus: Focus,
    zIndex: ZIndex,
} as const;

// ============================================
// TYPE DEFINITIONS
// ============================================

export type StandardColor = keyof typeof StandardColors;
export type ExpressiveColor = keyof typeof ExpressiveColors;
export type ContainerColor = keyof typeof ContainerColors;
export type OnColor = keyof typeof OnColors;
export type OnContainerColor = keyof typeof OnContainerColors;
export type OutlineColor = keyof typeof OutlineColors;
export type ScrimColor = keyof typeof ScrimColors;

export type Shadow = keyof typeof Shadows;
export type RadiusSize = keyof typeof Radius;
export type FontFamily = keyof typeof FontFamilies;
export type FontSize = keyof typeof FontSizes;
export type FontWeight = keyof typeof FontWeights;
export type LineHeight = keyof typeof LineHeights;
export type SpacingSize = keyof typeof Spacing;
export type Duration = keyof typeof Durations;
export type Easing = keyof typeof Easings;
export type ZIndexLevel = keyof typeof ZIndex;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get a token value by path
 * @example getToken('colors.standard.standard') // 'var(--sl-standard)'
 */
export function getToken(path: string): string {
    const parts = path.split('.');
    let value: any = Tokens;

    for (const part of parts) {
        value = value[part];
        if (value === undefined) {
            console.warn(`Token not found: ${path}`);
            return '';
        }
    }

    return value;
}

/**
 * Create a CSS custom property reference
 * @example cssVar('standard') // 'var(--sl-standard)'
 */
export function cssVar(tokenName: string): string {
    return `var(--sl-${tokenName})`;
}

export default Tokens;
