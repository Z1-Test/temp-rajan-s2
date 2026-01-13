/**
 * Staylook Badge Component
 * 
 * Design Principles:
 * - Uses radius-badge (8px) following nesting hierarchy
 * - Compact size for labels and indicators
 * - Semantic color variants
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
    [
        'inline-flex items-center gap-1',
        'rounded-[var(--sl-radius-badge)]',
        'px-[var(--sl-space-2)] py-[var(--sl-space-1)]',
        'text-[length:var(--sl-text-xs)] font-[var(--sl-font-medium)]',
        'transition-all duration-[var(--sl-duration-fast)] ease-[var(--sl-ease-default)]',
        'whitespace-nowrap',
    ].join(' '),
    {
        variants: {
            variant: {
                standard: [
                    'bg-[var(--sl-on-standard)]',
                    'text-white',
                ].join(' '),

                expressive: [
                    'bg-[var(--sl-expressive-muted)]',
                    'text-[var(--sl-on-expressive)]',
                    'border border-[var(--sl-outline-expressive)]',
                ].join(' '),

                outline: [
                    'border border-[var(--sl-outline-calm)]',
                    'text-[var(--sl-on-standard)]',
                    'bg-[var(--sl-container-vibrant)]',
                ].join(' '),

                error: [
                    'bg-[var(--sl-on-error)]',
                    'text-white',
                ].join(' '),

                success: [
                    'bg-[var(--sl-on-success)]',
                    'text-white',
                ].join(' '),

                warning: [
                    'bg-[var(--sl-on-warning)]',
                    'text-white',
                ].join(' '),

                info: [
                    'bg-[var(--sl-on-info)]',
                    'text-white',
                ].join(' '),

                muted: [
                    'bg-[var(--sl-container-muted)]',
                    'text-[var(--sl-on-container-muted)]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'standard',
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div
            className={cn(badgeVariants({ variant }), className)}
            data-slot="badge"
            data-variant={variant}
            {...props}
        />
    );
}

export { Badge, badgeVariants };
