/**
 * Staylook Spinner Component
 * 
 * Design Principles:
 * - Curved, smooth animation
 * - Uses Expressive color for THE highlight
 * - Standard color for default state
 * - Multiple sizes following spacing scale
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerVariants = cva(
    [
        'inline-block',
        'animate-spin',
        'rounded-full',
        'border-2 border-solid',
        'border-current border-r-transparent',
    ].join(' '),
    {
        variants: {
            variant: {
                standard: 'text-[var(--sl-on-standard)]',
                expressive: 'text-[var(--sl-on-expressive)]',
                muted: 'text-[var(--sl-standard-muted)]',
            },
            size: {
                sm: 'h-4 w-4',
                default: 'h-6 w-6',
                lg: 'h-8 w-8',
                xl: 'h-12 w-12',
            },
        },
        defaultVariants: {
            variant: 'standard',
            size: 'default',
        },
    }
);

export interface SpinnerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
    label?: string;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, variant, size, label = 'Loading...', ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="status"
                aria-label={label}
                className={cn(spinnerVariants({ variant, size }), className)}
                {...props}
            >
                <span className="sr-only">{label}</span>
            </div>
        );
    }
);

Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
