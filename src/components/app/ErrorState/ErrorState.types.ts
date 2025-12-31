import { LucideIcon } from 'lucide-react';

export interface ErrorStateProps {
    /**
     * Error title
     */
    title: string;

    /**
     * Error description or message
     */
    description?: string;

    /**
     * Error icon (lucide-react)
     */
    icon?: LucideIcon;

    /**
     * Retry action
     */
    onRetry?: () => void;

    /**
     * Additional className
     */
    className?: string;
}
