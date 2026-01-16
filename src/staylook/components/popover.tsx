/**
 * Staylook Popover Component
 * 
 * Design Principles:
 * - Uses card radius (16px)
 * - Shadow for depth (vibrant)
 * - Minimal background (muted)
 * - Interactive content wrapper
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface PopoverProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
    trigger,
    children,
    open: controlledOpen,
    onOpenChange,
    align = 'center',
    side = 'bottom',
    className,
}) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
    const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
    const setIsOpen = onOpenChange || setUncontrolledOpen;

    const popoverRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, setIsOpen]);

    const alignClasses = {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
    };

    const sideClasses = {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2 top-1/2 -translate-y-1/2',
        right: 'left-full ml-2 top-1/2 -translate-y-1/2',
    };

    return (
        <div className="relative inline-block">
            <div
                ref={triggerRef}
                className="inline-block"
                onClick={() => setIsOpen(!isOpen)}
            >
                {trigger}
            </div>

            {isOpen && (
                <div
                    ref={popoverRef}
                    className={cn(
                        'absolute z-[var(--sl-z-popover)]',
                        'min-w-[240px] p-4',
                        'bg-[var(--sl-container-muted)]',
                        'border border-[var(--sl-outline-muted)]',
                        'rounded-[var(--sl-radius-card)]',
                        'shadow-[var(--sl-shadow-vibrant)]',
                        'animate-in fade-in zoom-in-95 duration-200',
                        sideClasses[side],
                        side === 'top' || side === 'bottom' ? alignClasses[align] : '',
                        className
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

Popover.displayName = 'Popover';
