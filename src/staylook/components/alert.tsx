/**
 * Staylook Alert Component
 * 
 * Design Principles:
 * - Uses radius-card (16px) for consistency
 * - Semantic color variants for different message types
 * - Clear visual hierarchy with icons
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const alertVariants = cva(
    [
        'relative w-full',
        'rounded-[var(--sl-radius-card)]',
        'border',
        'p-[var(--sl-space-4)]',
        'transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]',
    ].join(' '),
    {
        variants: {
            variant: {
                standard: [
                    'bg-[var(--sl-container-vibrant)]',
                    'border-[var(--sl-outline-calm)]',
                    'text-[var(--sl-on-standard)]',
                ].join(' '),

                expressive: [
                    'bg-[var(--sl-expressive-muted)]',
                    'border-[var(--sl-outline-expressive)]',
                    'text-[var(--sl-on-expressive)]',
                ].join(' '),

                error: [
                    'bg-[var(--sl-outline-error)]/20',
                    'border-[var(--sl-outline-error)]',
                    'text-[var(--sl-on-error)]',
                ].join(' '),

                success: [
                    'bg-[var(--sl-outline-success)]/20',
                    'border-[var(--sl-outline-success)]',
                    'text-[var(--sl-on-success)]',
                ].join(' '),

                warning: [
                    'bg-[var(--sl-outline-warning)]/20',
                    'border-[var(--sl-outline-warning)]',
                    'text-[var(--sl-on-warning)]',
                ].join(' '),

                info: [
                    'bg-[var(--sl-outline-info)]/20',
                    'border-[var(--sl-outline-info)]',
                    'text-[var(--sl-on-info)]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'standard',
        },
    }
);

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(
            'mb-[var(--sl-space-1)]',
            'text-[length:var(--sl-text-base)]',
            'font-[var(--sl-font-semibold)]',
            'leading-[var(--sl-leading-tight)]',
            className
        )}
        {...props}
    />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'text-[length:var(--sl-text-sm)]',
            'leading-[var(--sl-leading-normal)]',
            'opacity-90',
            className
        )}
        {...props}
    />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription, alertVariants };
