/**
 * Staylook Card Component
 * 
 * Design Principles:
 * - Uses radius-card (16px) following nesting hierarchy
 * - Container-vibrant background for elevated surfaces
 * - Subtle shadow for depth
 * - Follows intensity scale for hover states
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'rounded-[var(--sl-radius-card)]',
            'bg-[var(--sl-container-muted)]',
            'border border-[var(--sl-outline-muted)]',
            'shadow-[var(--sl-shadow-calm)]',
            'text-[var(--sl-on-standard)]',
            'transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]',
            className
        )}
        {...props}
    />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex flex-col gap-[var(--sl-space-2)]',
            'p-[var(--sl-space-6)]',
            className
        )}
        {...props}
    />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            'text-[length:var(--sl-text-2xl)]',
            'font-[var(--sl-font-semibold)]',
            'leading-[var(--sl-leading-tight)]',
            'text-[var(--sl-on-standard)]',
            className
        )}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            'text-[length:var(--sl-text-sm)]',
            'text-[var(--sl-standard-soft)]',
            'leading-[var(--sl-leading-normal)]',
            className
        )}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('p-[var(--sl-space-6)] pt-0', className)}
        {...props}
    />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'flex items-center gap-[var(--sl-space-4)]',
            'p-[var(--sl-space-6)] pt-0',
            className
        )}
        {...props}
    />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
