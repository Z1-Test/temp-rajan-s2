/**
 * Staylook Tabs Component
 * 
 * Design Principles:
 * - Pill-shaped active tab indicator
 * - Smooth transitions
 * - Clean typography hierarchy
 */

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export interface TabsProps {
    items: TabItem[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    variant?: 'pills' | 'underline' | 'enclosed';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
    items,
    activeTab,
    onTabChange,
    variant = 'pills',
    size = 'md',
    className,
}) => {
    const sizeClasses = {
        sm: 'text-[length:var(--sl-text-xs)] px-3 py-1.5 gap-1.5',
        md: 'text-[length:var(--sl-text-sm)] px-4 py-2 gap-2',
        lg: 'text-[length:var(--sl-text-base)] px-5 py-2.5 gap-2',
    };

    const containerClasses = {
        pills: 'bg-[var(--sl-container-muted)] p-1 rounded-[var(--sl-radius-button)]',
        underline: 'border-b border-[var(--sl-outline-muted)]',
        enclosed: 'bg-[var(--sl-container-calm)] p-1 rounded-[var(--sl-radius-card)]',
    };

    const getTabClasses = (isActive: boolean, isDisabled: boolean) => {
        const base = cn(
            'inline-flex items-center justify-center font-medium transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]',
            sizeClasses[size]
        );

        if (isDisabled) {
            return cn(base, 'opacity-50 cursor-not-allowed');
        }

        switch (variant) {
            case 'pills':
                return cn(
                    base,
                    'rounded-[var(--sl-radius-button)]',
                    isActive
                        ? 'bg-[var(--sl-on-standard)] text-white shadow-sm'
                        : 'text-[var(--sl-standard-soft)] hover:text-[var(--sl-on-standard)] hover:bg-[var(--sl-container-calm)]'
                );
            case 'underline':
                return cn(
                    base,
                    'border-b-2 -mb-px',
                    isActive
                        ? 'border-[var(--sl-on-standard)] text-[var(--sl-on-standard)]'
                        : 'border-transparent text-[var(--sl-standard-soft)] hover:text-[var(--sl-on-standard)] hover:border-[var(--sl-outline-calm)]'
                );
            case 'enclosed':
                return cn(
                    base,
                    'rounded-[var(--sl-radius-badge)]',
                    isActive
                        ? 'bg-[var(--sl-container-vibrant)] text-[var(--sl-on-standard)] shadow-sm'
                        : 'text-[var(--sl-standard-soft)] hover:text-[var(--sl-on-standard)]'
                );
            default:
                return base;
        }
    };

    return (
        <div
            role="tablist"
            className={cn('inline-flex items-center', containerClasses[variant], className)}
        >
            {items.map((item) => (
                <button
                    key={item.id}
                    role="tab"
                    aria-selected={activeTab === item.id}
                    aria-disabled={item.disabled}
                    tabIndex={item.disabled ? -1 : 0}
                    onClick={() => !item.disabled && onTabChange(item.id)}
                    className={getTabClasses(activeTab === item.id, !!item.disabled)}
                >
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    {item.label}
                </button>
            ))}
        </div>
    );
};

Tabs.displayName = 'Tabs';

// Tab Panel component
export interface TabPanelProps {
    id: string;
    activeTab: string;
    children: React.ReactNode;
    className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ id, activeTab, children, className }) => {
    if (activeTab !== id) return null;

    return (
        <div
            role="tabpanel"
            aria-labelledby={id}
            className={cn('animate-in fade-in duration-200', className)}
        >
            {children}
        </div>
    );
};

TabPanel.displayName = 'TabPanel';
