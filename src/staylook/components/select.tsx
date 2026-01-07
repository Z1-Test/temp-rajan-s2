/**
 * Staylook Select Component
 * 
 * Design Principles:
 * - Curved: Follows --sl-radius-input (16px)
 * - Editorial: Clean spacing, clear selection states
 * - Minimal: Pure functional dropdown
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const selectVariants = cva(
    [
        'flex h-11 w-full items-center justify-between rounded-[var(--sl-radius-input)] border border-[var(--sl-outline-calm)] bg-[var(--sl-container-vibrant)] px-4 py-2 text-[var(--sl-text-base)]',
        'ring-offset-[var(--sl-focus-ring-offset)] placeholder:text-[var(--sl-standard-muted)]',
        'focus:outline-none focus:ring-2 focus:ring-[var(--sl-on-standard)] focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]',
        'appearance-none cursor-pointer',
    ].join(' '),
    {
        variants: {
            variant: {
                standard: 'border-[var(--sl-outline-muted)] focus:border-[var(--sl-outline-vibrant)]',
                expressive: 'border-[var(--sl-outline-expressive)] focus:ring-[var(--sl-on-expressive)]',
            },
        },
        defaultVariants: {
            variant: 'standard',
        },
    }
);

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
    label?: string;
    helperText?: string;
    error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, variant, label, helperText, error, children, ...props }, ref) => {
        return (
            <div className="w-full space-y-1.5">
                {label && (
                    <label
                        className={cn(
                            "text-[var(--sl-text-sm)] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                            error ? "text-[var(--sl-on-error)]" : "text-[var(--sl-on-standard)]"
                        )}
                    >
                        {label}
                    </label>
                )}
                <div className="relative">
                    <select
                        className={cn(
                            selectVariants({ variant }),
                            error && "border-[var(--sl-on-error)] focus:ring-[var(--sl-on-error)]",
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        {children}
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
                {helperText && (
                    <p className={cn(
                        "text-[var(--sl-text-xs)]",
                        error ? "text-[var(--sl-on-error)]" : "text-[var(--sl-standard-muted)]"
                    )}>
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';

export { Select };
