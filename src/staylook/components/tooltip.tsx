/**
 * Staylook Tooltip Component
 * 
 * Design Principles:
 * - Minimal: Small contextual popup
 * - Curved: Follows --sl-radius-badge (8px)
 * - Editorial: Clean positioning and typography
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    content: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
    ({ className, content, position = 'top', children, ...props }, ref) => {
        const [isVisible, setIsVisible] = React.useState(false);

        const positionClasses = {
            top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
            bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
            left: 'right-full top-1/2 -translate-y-1/2 mr-2',
            right: 'left-full top-1/2 -translate-y-1/2 ml-2',
        };

        const arrowClasses = {
            top: 'top-full left-1/2 -translate-x-1/2 border-t-[var(--sl-on-standard)]',
            bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-[var(--sl-on-standard)]',
            left: 'left-full top-1/2 -translate-y-1/2 border-l-[var(--sl-on-standard)]',
            right: 'right-full top-1/2 -translate-y-1/2 border-r-[var(--sl-on-standard)]',
        };

        return (
            <div
                className="relative inline-block"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                ref={ref}
                {...props}
            >
                {children}
                {isVisible && (
                    <div className={cn(
                        'absolute z-[var(--sl-z-tooltip,100)] px-2 py-1',
                        'bg-[var(--sl-on-standard)] text-[var(--sl-container-vibrant)]',
                        'text-[var(--sl-text-xs)] font-medium whitespace-nowrap',
                        'rounded-[var(--sl-radius-badge)] shadow-[var(--sl-shadow-calm)]',
                        'transition-all duration-[var(--sl-duration-fast)] ease-out animate-in fade-in zoom-in-95',
                        positionClasses[position],
                        className
                    )}>
                        {content}
                        <div className={cn(
                            'absolute border-4 border-transparent',
                            arrowClasses[position]
                        )} />
                    </div>
                )}
            </div>
        );
    }
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };
