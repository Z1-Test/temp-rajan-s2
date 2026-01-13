/**
 * Staylook Breadcrumb Component
 * 
 * Design Principles:
 * - Clean, minimal navigation path
 * - Clear visual hierarchy
 * - Accessible navigation
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}

export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    showHome?: boolean;
    className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    separator = <ChevronRight className="size-4" />,
    showHome = true,
    className,
}) => {
    const allItems = showHome
        ? [{ label: 'Home', href: '/', icon: <Home className="size-4" /> }, ...items]
        : items;

    return (
        <nav aria-label="Breadcrumb" className={cn('flex items-center', className)}>
            <ol className="flex items-center gap-2">
                {allItems.map((item, index) => {
                    const isLast = index === allItems.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <span className="text-[var(--sl-standard-muted)]" aria-hidden="true">
                                    {separator}
                                </span>
                            )}
                            {isLast ? (
                                <span
                                    className={cn(
                                        'flex items-center gap-1.5',
                                        'text-[length:var(--sl-text-sm)] font-medium',
                                        'text-[var(--sl-on-standard)]'
                                    )}
                                    aria-current="page"
                                >
                                    {item.icon}
                                    {item.label}
                                </span>
                            ) : item.href ? (
                                <a
                                    href={item.href}
                                    className={cn(
                                        'flex items-center gap-1.5',
                                        'text-[length:var(--sl-text-sm)]',
                                        'text-[var(--sl-standard-muted)]',
                                        'hover:text-[var(--sl-on-standard)]',
                                        'transition-colors duration-[var(--sl-duration-fast)]'
                                    )}
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            ) : (
                                <span
                                    className={cn(
                                        'flex items-center gap-1.5',
                                        'text-[length:var(--sl-text-sm)]',
                                        'text-[var(--sl-standard-muted)]'
                                    )}
                                >
                                    {item.icon}
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

Breadcrumb.displayName = 'Breadcrumb';
