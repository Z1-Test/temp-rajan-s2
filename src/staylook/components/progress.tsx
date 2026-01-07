/**
 * Staylook Progress Component
 * 
 * Design Principles:
 * - Curved: Round edges for track and bar
 * - Minimal: Pure functional progress bar
 * - Expressive: Highlight for completion status
 */

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
        variant?: 'standard' | 'expressive' | 'success' | 'error'
    }
>(({ className, value, variant = 'standard', ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-[var(--sl-container-calm)]",
            className
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={cn(
                "h-full w-full flex-1 transition-all duration-[var(--sl-duration-slow)] ease-[var(--sl-ease-default)]",
                variant === 'standard' && "bg-[var(--sl-on-standard)]",
                variant === 'expressive' && "bg-[var(--sl-on-expressive)]",
                variant === 'success' && "bg-[var(--sl-on-success)]",
                variant === 'error' && "bg-[var(--sl-on-error)]"
            )}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
