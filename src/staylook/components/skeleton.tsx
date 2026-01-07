/**
 * Staylook Skeleton Component
 * 
 * Design Principles:
 * - Curved: Follows various radius tokens
 * - Minimal: Subtle pulse animation
 * - Editorial: Placeholders for content hierarchy
 */

import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'text' | 'circle' | 'rectangle';
}

function Skeleton({
    className,
    variant = 'rectangle',
    ...props
}: SkeletonProps) {
    return (
        <div
            className={cn(
                "animate-pulse bg-[var(--sl-container-calm)]",
                variant === 'text' && "h-4 w-full rounded-[var(--sl-radius-badge)]",
                variant === 'circle' && "h-12 w-12 rounded-full",
                variant === 'rectangle' && "h-24 w-full rounded-[var(--sl-radius-card)]",
                className
            )}
            {...props}
        />
    );
}

export { Skeleton };
