/**
 * Staylook Stack Component
 * 
 * Design Principles:
 * - Flexible layout primitive for vertical/horizontal stacking
 * - Uses semantic spacing tokens (4px grid)
 * - Supports alignment and distribution
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const stackVariants = cva('flex', {
    variants: {
        direction: {
            row: 'flex-row',
            column: 'flex-col',
            'row-reverse': 'flex-row-reverse',
            'column-reverse': 'flex-col-reverse',
        },
        gap: {
            0: 'gap-0',
            1: 'gap-[var(--sl-space-1)]',
            2: 'gap-[var(--sl-space-2)]',
            3: 'gap-[var(--sl-space-3)]',
            4: 'gap-[var(--sl-space-4)]',
            5: 'gap-[var(--sl-space-5)]',
            6: 'gap-[var(--sl-space-6)]',
            8: 'gap-[var(--sl-space-8)]',
            10: 'gap-[var(--sl-space-10)]',
            12: 'gap-[var(--sl-space-12)]',
            16: 'gap-[var(--sl-space-16)]',
        },
        align: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end',
            stretch: 'items-stretch',
            baseline: 'items-baseline',
        },
        justify: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly',
        },
        wrap: {
            nowrap: 'flex-nowrap',
            wrap: 'flex-wrap',
            'wrap-reverse': 'flex-wrap-reverse',
        },
    },
    defaultVariants: {
        direction: 'column',
        gap: 4,
        align: 'stretch',
        justify: 'start',
        wrap: 'nowrap',
    },
});

export interface StackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> { }

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, direction, gap, align, justify, wrap, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    stackVariants({ direction, gap, align, justify, wrap }),
                    className
                )}
                {...props}
            />
        );
    }
);

Stack.displayName = 'Stack';

// Convenience components
const VStack = React.forwardRef<
    HTMLDivElement,
    Omit<StackProps, 'direction'>
>((props, ref) => <Stack ref={ref} direction="column" {...props} />);
VStack.displayName = 'VStack';

const HStack = React.forwardRef<
    HTMLDivElement,
    Omit<StackProps, 'direction'>
>((props, ref) => <Stack ref={ref} direction="row" {...props} />);
HStack.displayName = 'HStack';

export { Stack, VStack, HStack, stackVariants };
