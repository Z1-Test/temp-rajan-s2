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
                    'flex flex-col gap-2 p-5 rounded-[var(--sl-radius-card)] bg-[var(--sl-container-vibrant)] border border-[var(--sl-outline-muted)]',
                    className
                )}
                {...props}
            >
                <div className="flex items-center justify-between">
                    <span className="text-[length:var(--sl-text-xs)] font-medium uppercase tracking-wider text-[var(--sl-standard-muted)]">
                        {label}
                    </span>
                    {icon && <div className="text-[var(--sl-standard-muted)]">{icon}</div>}
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-[length:var(--sl-text-3xl)] font-bold text-[var(--sl-on-standard)] leading-tight">
                        {value}
                    </span>
                    {trend && (
                        <span className={cn('text-[length:var(--sl-text-sm)] font-semibold', trendColor)}>
                            {trend.type === 'positive' && '+'}
                            {trend.value}
                        </span>
                    )}
                </div>

                {description && (
                    <span className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">
                        {description}
                    </span>
                )}
            </div>
        );
    }
);

Stat.displayName = 'Stat';

export { Stat };
