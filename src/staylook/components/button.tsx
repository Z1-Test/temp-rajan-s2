/**
 * Staylook Button Component
 * 
 * Design Principles:
 * - ALL buttons are pill-shaped (border-radius: 9999px)
 * - Default to Standard color (90% of UI)
 * - Expressive variant for THE highlight (max 1 per screen)
 * - Follows intensity scale: Muted → Calm → Vibrant
 */

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    [
        // Base styles - ALL buttons are pill-shaped
        'inline-flex items-center justify-center gap-2',
        'whitespace-nowrap font-medium',
        'transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]',
        'disabled:pointer-events-none disabled:opacity-50',
        'outline-none',
        'focus-visible:ring-[var(--sl-focus-ring-width)]',
        'focus-visible:ring-offset-[var(--sl-focus-ring-offset)]',
        // CRITICAL: ALL buttons MUST be pill-shaped
        'rounded-[var(--sl-radius-button)]',
        '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    ].join(' '),
    {
        variants: {
            variant: {
                // Standard variant (DEFAULT - 90% of buttons)
                standard: [
                    'bg-[var(--sl-on-standard)] text-white',
                    'hover:bg-[var(--sl-standard-soft)]',
                    'active:bg-[var(--sl-standard)]',
                    'focus-visible:ring-[var(--sl-on-standard)]',
                ].join(' '),

                // Expressive variant (THE HIGHLIGHT - max 1 per screen)
                expressive: [
                    'bg-[var(--sl-on-expressive)] text-white',
                    'hover:bg-[var(--sl-expressive-soft)]',
                    'active:bg-[var(--sl-expressive)]',
                    'focus-visible:ring-[var(--sl-on-expressive)]',
                    'shadow-[var(--sl-shadow-calm)]',
                ].join(' '),

                // Ghost variant (subtle, no background)
                ghost: [
                    'text-[var(--sl-on-standard)]',
                    'hover:bg-[var(--sl-container-calm)]',
                    'active:bg-[var(--sl-container-muted)]',
                    'focus-visible:ring-[var(--sl-outline-calm)]',
                ].join(' '),

                // Outline variant (bordered)
                outline: [
                    'border border-[var(--sl-outline-calm)]',
                    'text-[var(--sl-on-standard)]',
                    'bg-[var(--sl-container-vibrant)]',
                    'hover:bg-[var(--sl-container-calm)]',
                    'hover:border-[var(--sl-outline-vibrant)]',
                    'active:bg-[var(--sl-container-muted)]',
                    'focus-visible:ring-[var(--sl-outline-vibrant)]',
                ].join(' '),

                // Destructive variant (error/delete actions)
                destructive: [
                    'bg-[var(--sl-on-error)] text-[var(--sl-container-vibrant)]',
                    'hover:opacity-90',
                    'active:opacity-80',
                    'focus-visible:ring-[var(--sl-on-error)]',
                ].join(' '),

                // Link variant (text-only)
                link: [
                    'text-[var(--sl-on-expressive)]',
                    'underline-offset-4 hover:underline',
                    'focus-visible:ring-[var(--sl-on-expressive)]',
                ].join(' '),
            },
            size: {
                sm: 'h-8 px-3 text-[length:var(--sl-text-sm)] gap-1.5',
                default: 'h-10 px-4 text-[length:var(--sl-text-base)] gap-2',
                lg: 'h-12 px-6 text-[length:var(--sl-text-lg)] gap-2',
                icon: 'size-10',
                'icon-sm': 'size-8',
                'icon-lg': 'size-12',
            },
        },
        defaultVariants: {
            variant: 'standard',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                data-slot="button"
                data-variant={variant}
                data-size={size}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
