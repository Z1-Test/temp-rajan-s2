/**
 * Staylook Product Dashboard Template
 * 
 * Design Principles:
 * - Minimal: Pure focus on user data and tools
 * - Editorial: Structured layout with clear navigation
 * - Curved: Follows container radii for inner content
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Sidebar, SidebarItem } from '../molecules/sidebar';
import { Avatar } from '../components/avatar';
import { Button } from '../components/button';
import { Icon } from '../components/icon';
import { Bell, Search, Settings, HelpCircle, LogOut } from 'lucide-react';

export interface ProductTemplateProps {
    sidebarItems: SidebarItem[];
    user: {
        name: string;
        email: string;
        avatar?: string;
    };
    children: React.ReactNode;
    title?: string;
}

export function ProductTemplate({
    sidebarItems,
    user,
    children,
    title,
}: ProductTemplateProps) {
    return (
        <div className="flex h-screen bg-[var(--sl-container-vibrant)] text-[var(--sl-on-standard)] font-[var(--sl-font-sans)]">
            <Sidebar
                items={sidebarItems}
                footer={
                    <div className="flex items-center gap-3">
                        <Avatar src={user.avatar} fallback={user.name.substring(0, 2)} size="sm" />
                        <div className="flex-1 min-w-0">
                            <p className="text-[length:var(--sl-text-sm)] font-bold truncate">{user.name}</p>
                            <p className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)] truncate">{user.email}</p>
                        </div>
                        <Button variant="ghost" size="icon-sm">
                            <Icon icon={Settings} size="sm" />
                        </Button>
                    </div>
                }
            />

            <main className="flex-1 flex flex-col min-w-0 bg-[var(--sl-container-vibrant)] overflow-hidden">
                {/* Product Header */}
                <header className="flex h-16 items-center justify-between px-8 border-b border-[var(--sl-outline-muted)] bg-[var(--sl-container-vibrant)]">
                    <h1 className="text-[length:var(--sl-text-xl)] font-bold tracking-tight">
                        {title || 'Dashboard'}
                    </h1>

                    <div className="flex items-center gap-2">
                        <div className="relative group hidden md:block">
                            <Icon icon={Search} size="xs" className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--sl-standard-muted)]" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="h-9 w-64 rounded-[var(--sl-radius-input)] border border-[var(--sl-outline-muted)] bg-[var(--sl-container-calm)] pl-9 pr-4 text-[length:var(--sl-text-sm)] focus:outline-none focus:border-[var(--sl-outline-vibrant)] transition-all"
                            />
                        </div>
                        <Button variant="ghost" size="icon">
                            <Icon icon={Bell} size="sm" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Icon icon={HelpCircle} size="sm" />
                        </Button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-8 bg-[var(--sl-container-calm)]/30">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
