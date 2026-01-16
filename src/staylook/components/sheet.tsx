/**
 * Staylook Sheet Component (Side Drawer)
 * 
 * Design Principles:
 * - Uses radius-container (24px) on the appropriate corners
 * - Clean backdrop with blur effect
 * - Slide-in animations
 * - Accessible and keyboard friendly
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Button } from './button';

export interface SheetProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    description?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    showCloseButton?: boolean;
    closeOnBackdrop?: boolean;
    className?: string;
}

const sideClasses = {
    left: 'left-0 inset-y-0 h-full animate-in slide-in-from-left duration-300',
    right: 'right-0 inset-y-0 h-full animate-in slide-in-from-right duration-300',
    top: 'top-0 inset-x-0 w-full animate-in slide-in-from-top duration-300',
    bottom: 'bottom-0 inset-x-0 w-full animate-in slide-in-from-bottom duration-300',
};

const sizeClasses = {
    sm: {
        left: 'max-w-xs',
        right: 'max-w-xs',
        top: 'h-48',
        bottom: 'h-48',
    },
    md: {
        left: 'max-w-sm',
        right: 'max-w-sm',
        top: 'h-72',
        bottom: 'h-72',
    },
    lg: {
        left: 'max-w-md',
        right: 'max-w-md',
        top: 'h-96',
        bottom: 'h-96',
    },
    xl: {
        left: 'max-w-xl',
        right: 'max-w-xl',
        top: 'h-[50vh]',
        bottom: 'h-[50vh]',
    },
    full: {
        left: 'max-w-full',
        right: 'max-w-full',
        top: 'h-full',
        bottom: 'h-full',
    },
};

const radiusClasses = {
    left: 'rounded-r-[var(--sl-radius-container)]',
    right: 'rounded-l-[var(--sl-radius-container)]',
    top: 'rounded-b-[var(--sl-radius-container)]',
    bottom: 'rounded-t-[var(--sl-radius-container)]',
};

export const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
    (
        {
            open,
            onClose,
            children,
            title,
            description,
            side = 'right',
            size = 'md',
            showCloseButton = true,
            closeOnBackdrop = true,
            className,
        },
        ref
    ) => {
        React.useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape' && open) onClose();
            };
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }, [open, onClose]);

        React.useEffect(() => {
            if (open) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return () => {
                document.body.style.overflow = '';
            };
        }, [open]);

        if (!open) return null;

        return (
            <div className="fixed inset-0 z-[var(--sl-z-modal)] flex overflow-hidden">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={closeOnBackdrop ? onClose : undefined}
                    aria-hidden="true"
                />

                {/* Sheet Content */}
                <div
                    ref={ref}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? 'sheet-title' : undefined}
                    aria-describedby={description ? 'sheet-description' : undefined}
                    className={cn(
                        'relative flex flex-col',
                        'bg-[var(--sl-container-muted)]',
                        'shadow-[var(--sl-shadow-vibrant)]',
                        'border-[var(--sl-outline-muted)]',
                        sideClasses[side],
                        sizeClasses[size][side],
                        radiusClasses[side],
                        className
                    )}
                >
                    {/* Header */}
                    {(title || showCloseButton) && (
                        <div className="flex items-start justify-between p-6 border-b border-[var(--sl-outline-muted)]">
                            <div className="space-y-1">
                                {title && (
                                    <h2
                                        id="sheet-title"
                                        className="text-[length:var(--sl-text-xl)] font-bold text-[var(--sl-on-standard)]"
                                    >
                                        {title}
                                    </h2>
                                )}
                                {description && (
                                    <p
                                        id="sheet-description"
                                        className="text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)]"
                                    >
                                        {description}
                                    </p>
                                )}
                            </div>
                            {showCloseButton && (
                                <Button
                                    variant="ghost"
                                    size="icon-sm"
                                    onClick={onClose}
                                    className="shrink-0 -mt-1 -mr-1"
                                    aria-label="Close sheet"
                                >
                                    <X className="size-4" />
                                </Button>
                            )}
                        </div>
                    )}

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-6">{children}</div>
                </div>
            </div>
        );
    }
);

Sheet.displayName = 'Sheet';

// Sheet Footer helper component
export const SheetFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => (
    <div
        className={cn(
            'flex items-center justify-end gap-3 p-6 border-t border-[var(--sl-outline-muted)] bg-[var(--sl-container-calm)]',
            className
        )}
    >
        {children}
    </div>
);

SheetFooter.displayName = 'SheetFooter';
