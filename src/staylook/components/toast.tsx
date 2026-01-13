/**
 * Staylook Toast Component
 * 
 * Design Principles:
 * - Pill-shaped notification with subtle shadow
 * - Semantic color variants
 * - Smooth slide-in animation
 * - Auto-dismiss with progress indicator
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface ToastProps {
    id: string;
    title: string;
    description?: string;
    variant?: 'standard' | 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    onDismiss: (id: string) => void;
}

const variantConfig = {
    standard: {
        bg: 'bg-[var(--sl-on-standard)]',
        text: 'text-white',
        icon: null,
    },
    success: {
        bg: 'bg-[var(--sl-on-success)]',
        text: 'text-white',
        icon: CheckCircle2,
    },
    error: {
        bg: 'bg-[var(--sl-on-error)]',
        text: 'text-white',
        icon: AlertCircle,
    },
    warning: {
        bg: 'bg-[var(--sl-on-warning)]',
        text: 'text-white',
        icon: AlertTriangle,
    },
    info: {
        bg: 'bg-[var(--sl-on-info)]',
        text: 'text-white',
        icon: Info,
    },
};

export const Toast: React.FC<ToastProps> = ({
    id,
    title,
    description,
    variant = 'standard',
    duration = 5000,
    onDismiss,
}) => {
    const [isExiting, setIsExiting] = React.useState(false);
    const config = variantConfig[variant];
    const IconComponent = config.icon;

    React.useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setIsExiting(true);
                setTimeout(() => onDismiss(id), 200);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, id, onDismiss]);

    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(() => onDismiss(id), 200);
    };

    return (
        <div
            role="alert"
            className={cn(
                'flex items-start gap-3 p-4 min-w-[320px] max-w-md',
                'rounded-[var(--sl-radius-card)]',
                'shadow-[var(--sl-shadow-vibrant)]',
                config.bg,
                config.text,
                'transition-all duration-200',
                isExiting
                    ? 'animate-out slide-out-to-right fade-out'
                    : 'animate-in slide-in-from-right fade-in'
            )}
        >
            {IconComponent && (
                <IconComponent className="size-5 shrink-0 mt-0.5" />
            )}
            <div className="flex-1 space-y-1">
                <p className="text-[length:var(--sl-text-sm)] font-semibold">{title}</p>
                {description && (
                    <p className="text-[length:var(--sl-text-xs)] opacity-90">{description}</p>
                )}
            </div>
            <button
                onClick={handleDismiss}
                className="shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Dismiss"
            >
                <X className="size-4" />
            </button>
        </div>
    );
};

Toast.displayName = 'Toast';

// Toast Container for positioning
export interface ToastContainerProps {
    children: React.ReactNode;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
    children,
    position = 'top-right',
}) => (
    <div
        className={cn(
            'fixed z-[var(--sl-z-toast,1700)] flex flex-col gap-2',
            positionClasses[position]
        )}
    >
        {children}
    </div>
);

ToastContainer.displayName = 'ToastContainer';
