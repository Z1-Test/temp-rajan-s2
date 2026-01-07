/**
 * Staylook Checkbox Component
 * 
 * Design Principles:
 * - Curved design with rounded corners
 * - Standard color by default, Expressive when checked
 * - Smooth transitions following animation tokens
 */

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            // Base styles
            'peer h-5 w-5 shrink-0',
            'rounded-[var(--sl-radius-badge)]',

            // Border and background
            'border-2 border-[var(--sl-outline-calm)]',
            'bg-[var(--sl-container-vibrant)]',

            // Focus state
            'focus-visible:outline-none',
            'focus-visible:ring-[var(--sl-focus-ring-width)]',
            'focus-visible:ring-[var(--sl-focus-ring-color)]',
            'focus-visible:ring-offset-[var(--sl-focus-ring-offset)]',

            // Disabled state
            'disabled:cursor-not-allowed',
            'disabled:opacity-50',

            // Checked state
            'data-[state=checked]:bg-[var(--sl-on-expressive)]',
            'data-[state=checked]:border-[var(--sl-on-expressive)]',
            'data-[state=checked]:text-[var(--sl-container-vibrant)]',

            // Transitions
            'transition-all duration-[var(--sl-duration-fast)] ease-[var(--sl-ease-default)]',

            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
        >
            <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
