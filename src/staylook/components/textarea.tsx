/**
 * Staylook Textarea Component
 * 
 * Design Principles:
 * - Uses radius-input (16px) following nesting hierarchy
 * - Intensity scale progression for states
 * - Semantic error/success states
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    success?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, success, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    // Base styles
                    'flex min-h-[80px] w-full',
                    'px-[var(--sl-space-4)] py-[var(--sl-space-3)]',
                    'text-[length:var(--sl-text-base)] font-[var(--sl-font-normal)]',
                    'rounded-[var(--sl-radius-input)]',

                    // Colors
                    'bg-[var(--sl-container-vibrant)]',
                    'text-[var(--sl-on-standard)]',
                    'border border-[var(--sl-outline-calm)]',

                    // Placeholder
                    'placeholder:text-[var(--sl-standard-muted)]',

                    // States
                    'hover:border-[var(--sl-outline-vibrant)]',
                    'hover:bg-[var(--sl-container-calm)]',

                    'focus:outline-none',
                    'focus:border-[var(--sl-outline-vibrant)]',
                    'focus:bg-[var(--sl-container-muted)]',
                    'focus:ring-[var(--sl-focus-ring-width)]',
                    'focus:ring-[var(--sl-focus-ring-color)]',
                    'focus:ring-offset-[var(--sl-focus-ring-offset)]',

                    // Disabled
                    'disabled:cursor-not-allowed',
                    'disabled:opacity-50',
                    'disabled:bg-[var(--sl-container-vibrant)]',
                    'disabled:border-[var(--sl-outline-muted)]',

                    // Transitions
                    'transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]',

                    // Resize
                    'resize-y',

                    // Error state
                    error && [
                        'border-[var(--sl-outline-error)]',
                        'focus:ring-[var(--sl-on-error)]',
                    ],

                    // Success state
                    success && [
                        'border-[var(--sl-outline-success)]',
                        'focus:ring-[var(--sl-on-success)]',
                    ],

                    className
                )}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';

export { Textarea };
