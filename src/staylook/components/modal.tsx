/**
 * Staylook Modal/Dialog Component
 * 
 * Design Principles:
 * - Uses radius-container (24px) for overlay content
 * - Clean backdrop with blur effect
 * - Smooth enter/exit animations
 * - Accessible with keyboard navigation
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Button } from './button';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    showCloseButton?: boolean;
    closeOnBackdrop?: boolean;
    className?: string;
}

const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-4xl',
};

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
    (
        {
            open,
            onClose,
            children,
            title,
            description,
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
            <div className="fixed inset-0 z-[var(--sl-z-modal)] flex items-center justify-center p-4">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={closeOnBackdrop ? onClose : undefined}
                    aria-hidden="true"
                />

                {/* Modal Content */}
                <div
                    ref={ref}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? 'modal-title' : undefined}
                    aria-describedby={description ? 'modal-description' : undefined}
                    className={cn(
                        'relative w-full',
                        sizeClasses[size],
                        'bg-[var(--sl-container-vibrant)]',
                        'rounded-[var(--sl-radius-container)]',
                        'shadow-[var(--sl-shadow-vibrant)]',
                        'border border-[var(--sl-outline-muted)]',
                        'animate-in zoom-in-95 fade-in duration-200',
                        className
                    )}
                >
                    {/* Header */}
                    {(title || showCloseButton) && (
                        <div className="flex items-start justify-between p-6 border-b border-[var(--sl-outline-muted)]">
                            <div className="space-y-1">
                                {title && (
                                    <h2
                                        id="modal-title"
                                        className="text-[length:var(--sl-text-xl)] font-bold text-[var(--sl-on-standard)]"
                                    >
                                        {title}
                                    </h2>
                                )}
                                {description && (
                                    <p
                                        id="modal-description"
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
                                    aria-label="Close modal"
                                >
                                    <X className="size-4" />
                                </Button>
                            )}
                        </div>
                    )}

                    {/* Body */}
                    <div className="p-6">{children}</div>
                </div>
            </div>
        );
    }
);

Modal.displayName = 'Modal';

// Modal Footer helper component
export const ModalFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
}) => (
    <div
        className={cn(
            'flex items-center justify-end gap-3 pt-4 border-t border-[var(--sl-outline-muted)] -mx-6 -mb-6 px-6 py-4 mt-4 bg-[var(--sl-container-calm)] rounded-b-[var(--sl-radius-container)]',
            className
        )}
    >
        {children}
    </div>
);

ModalFooter.displayName = 'ModalFooter';
