/**
 * Staylook Sidebar Molecule
 * 
 * Design Principles:
 * - Minimal: Focused on navigation and structure
 * - Editorial: Clear hierarchy and active states
 * - Curved: Follows container radius
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../components/button';
import { Icon } from '../components/icon';
import { Text } from '../components/text';

export interface SidebarItem {
    label: string;
    icon: React.ElementType;
    href: string;
    active?: boolean;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    items: SidebarItem[];
    footer?: React.ReactNode;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
    ({ className, items, footer, ...props }, ref) => {
        return (
            <aside
                ref={ref}
                className={cn(
                    'flex h-full w-64 flex-col border-r border-[var(--sl-outline-muted)] bg-[var(--sl-container-calm)]',
                    className
                )}
                {...props}
            >
                <div className="flex h-16 items-center px-6 font-bold text-xl tracking-tight border-b border-[var(--sl-outline-muted)]">
                    STAYLOOK
                </div>

                <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
                    {items.map((item) => (
                        <Button
                            key={item.label}
                            variant={item.active ? 'standard' : 'ghost'}
                            size="default"
                            className={cn(
                                'w-full justify-start gap-3',
                                !item.active && 'bg-transparent text-[var(--sl-standard-soft)] hover:bg-[var(--sl-container-muted)]'
                            )}
                        >
                            <Icon icon={item.icon} size="sm" />
                            {item.label}
                        </Button>
                    ))}
                </nav>

                {footer && (
                    <div className="border-t border-[var(--sl-outline-muted)] p-4">
                        {footer}
                    </div>
                )}
            </aside>
        );
    }
);

Sidebar.displayName = 'Sidebar';

export { Sidebar };
