/**
 * Staylook Dashboard Template
 * 
 * Design Principles:
 * - Editorial: Clear data presentation
 * - Curved: Consistent radius hierarchy
 * - Minimal: Clean, focused interface
 * - Expressive: Strategic highlights for key metrics
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Badge } from '../components/badge';
import { Avatar } from '../components/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../components/card';
import { Stat } from '../molecules/stat';
import {
    Search,
    Bell,
    Settings,
    Home,
    BarChart3,
    Users,
    FolderKanban,
    MessageSquare,
    HelpCircle,
    Plus,
    TrendingUp,
    MoreHorizontal,
} from 'lucide-react';

export interface DashboardTemplateProps {
    user?: {
        name: string;
        email: string;
        avatar?: string;
    };
    children?: React.ReactNode;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
    user = { name: 'John Doe', email: 'john@example.com' },
    children,
}) => {
    const [sidebarCollapsed] = React.useState(false);

    const navItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: BarChart3, label: 'Analytics' },
        { icon: FolderKanban, label: 'Projects', badge: '5' },
        { icon: Users, label: 'Team' },
        { icon: MessageSquare, label: 'Messages', badge: '12' },
    ];

    const bottomNavItems = [
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Help' },
    ];

    return (
        <div className="min-h-screen flex bg-[var(--sl-container-calm)]">
            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50',
                    'flex flex-col',
                    'bg-[var(--sl-container-vibrant)]',
                    'border-r border-[var(--sl-outline-muted)]',
                    'transition-all duration-[var(--sl-duration-base)]',
                    sidebarCollapsed ? 'w-20' : 'w-64'
                )}
            >
                {/* Logo */}
                <div className="h-16 flex items-center justify-center border-b border-[var(--sl-outline-muted)]">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-[var(--sl-radius-badge)] bg-[var(--sl-on-standard)] flex items-center justify-center">
                            <span className="text-white font-bold text-[length:var(--sl-text-lg)]">S</span>
                        </div>
                        {!sidebarCollapsed && (
                            <span className="font-bold text-[length:var(--sl-text-xl)] text-[var(--sl-on-standard)]">
                                Staylook
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={cn(
                                'flex items-center gap-3 px-4 py-3',
                                'rounded-[var(--sl-radius-badge)]',
                                'transition-colors duration-[var(--sl-duration-fast)]',
                                item.active
                                    ? 'bg-[var(--sl-on-standard)] text-white'
                                    : 'text-[var(--sl-standard-muted)] hover:bg-[var(--sl-container-calm)] hover:text-[var(--sl-on-standard)]'
                            )}
                        >
                            <item.icon className="size-5 shrink-0" />
                            {!sidebarCollapsed && (
                                <>
                                    <span className="flex-1 text-[length:var(--sl-text-sm)] font-medium">
                                        {item.label}
                                    </span>
                                    {item.badge && (
                                        <Badge
                                            variant={item.active ? 'expressive' : 'muted'}
                                            className="text-[length:var(--sl-text-xs)]"
                                        >
                                            {item.badge}
                                        </Badge>
                                    )}
                                </>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Bottom Navigation */}
                <div className="p-4 space-y-2 border-t border-[var(--sl-outline-muted)]">
                    {bottomNavItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flex items-center gap-3 px-4 py-3 rounded-[var(--sl-radius-badge)] text-[var(--sl-standard-muted)] hover:bg-[var(--sl-container-calm)] hover:text-[var(--sl-on-standard)] transition-colors"
                        >
                            <item.icon className="size-5 shrink-0" />
                            {!sidebarCollapsed && (
                                <span className="text-[length:var(--sl-text-sm)] font-medium">
                                    {item.label}
                                </span>
                            )}
                        </a>
                    ))}

                    {/* User */}
                    <div className={cn(
                        'flex items-center gap-3 p-3 mt-4',
                        'rounded-[var(--sl-radius-badge)]',
                        'bg-[var(--sl-container-calm)]'
                    )}>
                        <Avatar
                            src={user.avatar}
                            fallback={user.name.substring(0, 2).toUpperCase()}
                            size="sm"
                        />
                        {!sidebarCollapsed && (
                            <div className="flex-1 min-w-0">
                                <p className="text-[length:var(--sl-text-sm)] font-medium text-[var(--sl-on-standard)] truncate">
                                    {user.name}
                                </p>
                                <p className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)] truncate">
                                    {user.email}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main
                className={cn(
                    'flex-1 transition-all duration-[var(--sl-duration-base)]',
                    sidebarCollapsed ? 'ml-20' : 'ml-64'
                )}
            >
                {/* Header */}
                <header className="sticky top-0 z-40 h-16 flex items-center justify-between px-6 bg-[var(--sl-container-vibrant)]/95 backdrop-blur-md border-b border-[var(--sl-outline-muted)]">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[length:var(--sl-text-xl)] font-bold text-[var(--sl-on-standard)]">
                            Dashboard
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--sl-standard-muted)]" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-64 pl-10 h-9"
                            />
                        </div>
                        <button className="relative p-2 rounded-full hover:bg-[var(--sl-container-calm)] transition-colors">
                            <Bell className="size-5 text-[var(--sl-standard-muted)]" />
                            <span className="absolute top-1 right-1 size-2 bg-[var(--sl-on-error)] rounded-full" />
                        </button>
                        <Button variant="expressive" size="sm" className="gap-2">
                            <Plus className="size-4" />
                            New Project
                        </Button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-6">
                    {children || <DashboardContent />}
                </div>
            </main>
        </div>
    );
};

// Default Dashboard Content
const DashboardContent: React.FC = () => {
    const stats = [
        { label: 'Total Revenue', value: '$45,231.89', trend: { value: '12%', type: 'positive' as const } },
        { label: 'Active Users', value: '2,350', trend: { value: '8%', type: 'positive' as const } },
        { label: 'New Orders', value: '12,234', trend: { value: '3%', type: 'negative' as const } },
        { label: 'Conversion Rate', value: '3.24%', trend: { value: '2%', type: 'positive' as const } },
    ];

    const recentActivity = [
        { user: 'Sarah Chen', action: 'Created a new project', time: '2 hours ago' },
        { user: 'Mike Johnson', action: 'Completed a task', time: '4 hours ago' },
        { user: 'Emily Davis', action: 'Added a comment', time: '6 hours ago' },
        { user: 'Alex Wilson', action: 'Uploaded a file', time: '1 day ago' },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <Stat
                        key={index}
                        label={stat.label}
                        value={stat.value}
                        trend={stat.trend}
                        icon={<TrendingUp className="size-4" />}
                    />
                ))}
            </div>

            {/* Charts & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Revenue Overview</CardTitle>
                        <Button variant="ghost" size="icon-sm">
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 flex items-center justify-center text-[var(--sl-standard-muted)]">
                            [Chart Visualization]
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <Avatar
                                    fallback={activity.user.substring(0, 2).toUpperCase()}
                                    size="sm"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-[length:var(--sl-text-sm)] text-[var(--sl-on-standard)]">
                                        <span className="font-medium">{activity.user}</span>{' '}
                                        <span className="text-[var(--sl-standard-muted)]">{activity.action}</span>
                                    </p>
                                    <p className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

DashboardTemplate.displayName = 'DashboardTemplate';
