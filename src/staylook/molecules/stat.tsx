/**
 * Staylook Stat Component
 * 
 * Design Principles:
 * - Editorial: Clear typographic hierarchy for data
 * - Minimal: Focused on the number and label
 * - Expressive: Selective color for trends
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Text } from '../components/text';
import { Heading } from '../components/heading';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
    description?: string;
    trend?: {
        value: string | number;
        type: 'positive' | 'negative' | 'neutral';
    };
    icon?: React.ReactNode;
}

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
    ({ className, label, value, description, trend, icon, ...props }, ref) => {
        const trendColor = trend?.type === 'positive'
            ? 'text-[var(--sl-on-success)]'
            : trend?.type === 'negative'
                ? 'text-[var(--sl-on-error)]'
                : 'text-[var(--sl-standard-muted)]';

        return (
            <div
                ref={ref}
                className={cn(
                    'flex flex-col gap-1 p-4 rounded-[var(--sl-radius-card)] bg-[var(--sl-container-vibrant)] border border-[var(--sl-outline-muted)]',
                    className
                )}
                {...props}
            >
                <div className="flex items-center justify-between">
                    <Text variant="muted" size="sm" className="font-medium uppercase tracking-wider">
                        {label}
                    </Text>
                    {icon && <div className="text-[var(--sl-standard-muted)]">{icon}</div>}
                </div>

                <div className="flex items-baseline gap-2">
                    <Heading level={2} className="text-[var(--sl-on-standard)]">
                        {value}
                    </Heading>
                    {trend && (
                        <span className={cn('text-[var(--sl-text-xs)] font-bold', trendColor)}>
                            {trend.type === 'positive' && '+'}
                            {trend.value}
                        </span>
                    )}
                </div>

                {description && (
                    <Text size="xs" variant="muted">
                        {description}
                    </Text>
                )}
            </div>
        );
    }
);

Stat.displayName = 'Stat';

export { Stat };
