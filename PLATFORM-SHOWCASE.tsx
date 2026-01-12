/**
 * Staylook Platform Showcase
 * 
 * Demonstrating the Product Dashboard Template with atoms and molecules.
 */

import * as React from 'react';
import {
    ProductTemplate,
    Stat,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Button,
    Icon,
    Badge,
    Text,
    Heading,
    HStack,
    VStack,
    Avatar
} from './src/staylook';
import {
    LayoutDashboard,
    Users,
    BarChart3,
    Globe,
    Zap,
    TrendingUp,
    MoreHorizontal,
    Plus
} from 'lucide-react';

const sidebarItems = [
    { label: 'Overview', icon: LayoutDashboard, href: '#', active: true },
    { label: 'Customers', icon: Users, href: '#' },
    { label: 'Analytics', icon: BarChart3, href: '#' },
    { label: 'Global', icon: Globe, href: '#' },
    { label: 'Automations', icon: Zap, href: '#' },
];

const currentUser = {
    name: 'Alex Rivera',
    email: 'alex@staylook.com',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80'
};

export default function PlatformShowcase() {
    return (
        <ProductTemplate
            sidebarItems={sidebarItems}
            user={currentUser}
            title="Overview"
        >
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Stat
                    label="Total Revenue"
                    value="$45,231.89"
                    description="+20.1% from last month"
                    trend={{ value: '12%', type: 'positive' }}
                />
                <Stat
                    label="Subscriptions"
                    value="+2,350"
                    description="+180.1% from last month"
                    trend={{ value: '180%', type: 'positive' }}
                />
                <Stat
                    label="Sales"
                    value="+12,234"
                    description="+19% from last month"
                    trend={{ value: '19%', type: 'positive' }}
                />
                <Stat
                    label="Active Now"
                    value="+573"
                    description="+201 since last hour"
                    icon={<Zap className="size-4 text-[var(--sl-on-expressive)]" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                {/* Main Chart Area */}
                <Card className="lg:col-span-4 h-[400px]">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <VStack gap={1}>
                            <CardTitle>Revenue Over Time</CardTitle>
                            <Text variant="muted" size="sm">Monthly performance data across all regions.</Text>
                        </VStack>
                        <Button variant="outline" size="sm">
                            <Icon icon={TrendingUp} size="xs" />
                            Insights
                        </Button>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center pt-10 text-[var(--sl-standard-muted)] italic">
                        [Chart Visualization Area]
                    </CardContent>
                </Card>

                {/* Secondary Sidebar Content */}
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <Text variant="muted" size="sm">You made 265 sales this month.</Text>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {[
                            { name: 'Olivia Martin', email: 'olivia.m@email.com', amount: '+$1,999.00', initial: 'OM' },
                            { name: 'Jackson Lee', email: 'jackson.l@email.com', amount: '+$39.00', initial: 'JL' },
                            { name: 'Isabella Nguyen', email: 'isabella.n@email.com', amount: '+$299.00', initial: 'IN' },
                            { name: 'William Chen', email: 'will@email.com', amount: '+$99.00', initial: 'WC' },
                            { name: 'Sofia Davis', email: 'sofia.d@email.com', amount: '+$39.00', initial: 'SD' },
                        ].map((sale) => (
                            <HStack key={sale.email} justify="between" align="center">
                                <HStack gap={3}>
                                    <Avatar fallback={sale.initial} size="sm" />
                                    <VStack gap={0}>
                                        <Text size="sm" className="font-bold">{sale.name}</Text>
                                        <Text size="xs" variant="muted">{sale.email}</Text>
                                    </VStack>
                                </HStack>
                                <Text size="sm" className="font-bold text-[var(--sl-on-success)]">{sale.amount}</Text>
                            </HStack>
                        ))}
                        <Button variant="ghost" className="w-full text-[var(--sl-text-sm)]">
                            View all transactions
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Actions Row */}
            <HStack justify="between" align="center" className="pt-4">
                <HStack gap={4}>
                    <Button variant="standard">
                        <Icon icon={Plus} size="sm" />
                        New Campaign
                    </Button>
                    <Button variant="ghost">Export Data</Button>
                </HStack>
                <div className="flex gap-2">
                    <Badge variant="expressive">Enterprise Plan</Badge>
                    <Badge variant="standard">v2.4.0</Badge>
                </div>
            </HStack>
        </ProductTemplate>
    );
}
