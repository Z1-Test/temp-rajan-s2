/**
 * Staylook Ping (Status Dot) Component
 * 
 * Design Principles:
 * - Curved: Perfectly circular
 * - Expressive: Animated status indicator
 * - Minimal: Tiny dot for feedback
 */

import { cn } from '@/lib/utils';

interface PingProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'standard' | 'expressive' | 'success' | 'error' | 'warning';
    animate?: boolean;
}

function Ping({
    className,
    variant = 'success',
    animate = true,
    ...props
}: PingProps) {
    const variantColors = {
        standard: 'bg-[var(--sl-on-standard)]',
        expressive: 'bg-[var(--sl-on-expressive)]',
        success: 'bg-[var(--sl-on-success)]',
        error: 'bg-[var(--sl-on-error)]',
        warning: 'bg-[var(--sl-on-warning)]',
    };

    return (
        <span className={cn("relative flex h-2.5 w-2.5", className)} {...props}>
            {animate && (
                <span className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    variantColors[variant]
                )} />
            )}
            <span className={cn(
                "relative inline-flex h-2.5 w-2.5 rounded-full",
                variantColors[variant]
            )} />
        </span>
    );
}

export { Ping };
