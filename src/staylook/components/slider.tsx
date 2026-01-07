/**
 * Staylook Slider Component
 * 
 * Design Principles:
 * - Curved: Pill-shaped thumb (9999px)
 * - Minimal: Clean track and fill representation
 * - Expressive: Highlight for active range
 */

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
        variant?: 'standard' | 'expressive'
    }
>(({ className, variant = 'standard', ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
        )}
        {...props}
    >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[var(--sl-container-calm)]">
            <SliderPrimitive.Range
                className={cn(
                    "absolute h-full",
                    variant === 'expressive' ? "bg-[var(--sl-on-expressive)]" : "bg-[var(--sl-on-standard)]"
                )}
            />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={cn(
            "block h-5 w-5 rounded-full border-2 bg-[var(--sl-container-vibrant)] ring-offset-[var(--sl-container-vibrant)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variant === 'expressive' ? "border-[var(--sl-on-expressive)] focus-visible:ring-[var(--sl-on-expressive)]" : "border-[var(--sl-on-standard)] focus-visible:ring-[var(--sl-on-standard)]"
        )} />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
