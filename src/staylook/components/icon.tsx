/**
 * Staylook Icon Component
 * 
 * Design Principles:
 * - Minimal: Pure wrapper for visual markers
 * - Editorial: Clear sizing and alignment
 * - Selective Expressive: Can use expressive color for highlight icons
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const iconVariants = cva(
    'inline-flex items-center justify-center shrink-0',
    {
        variants: {
            variant: {
                standard: 'text-[var(--sl-on-standard)]',
                expressive: 'text-[var(--sl-on-expressive)]',
                muted: 'text-[var(--sl-standard-muted)]',
                error: 'text-[var(--sl-on-error)]',
                success: 'text-[var(--sl-on-success)]',
                warning: 'text-[var(--sl-on-warning)]',
                info: 'text-[var(--sl-on-info)]',
                vibrant: 'text-[var(--sl-container-vibrant)]',
            },
            size: {
                xs: 'size-3',
                sm: 'size-4',
                md: 'size-5',
                lg: 'size-6',
                xl: 'size-8',
                '2xl': 'size-12',
            },
        },
        defaultVariants: {
            variant: 'standard',
            size: 'md',
        },
    }
);

export interface IconProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {
    icon: React.ElementType;
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
    ({ className, variant, size, icon: IconComponent, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(iconVariants({ variant, size, className }))}
                {...props}
            >
                <IconComponent className="size-full" />
            </div>
        );
    }
);

Icon.displayName = 'Icon';

export { Icon, iconVariants };
