/**
 * Staylook Feature Molecule
 * 
 * Design Principles:
 * - Editorial: Image/Icon + Text hierarchy
 * - Curved: Follows card radius (16px)
 * - Minimal: Clean focus on benefits
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../components/card';

export interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    icon?: React.ReactNode;
    variant?: 'standard' | 'expressive';
}

const Feature = React.forwardRef<HTMLDivElement, FeatureProps>(
    ({ className, title, description, icon, variant = 'standard', ...props }, ref) => {
        const isExpressive = variant === 'expressive';

        return (
            <Card
                ref={ref}
                className={cn(
                    'transition-all hover:border-[var(--sl-outline-vibrant)] group',
                    isExpressive && 'bg-[var(--sl-expressive-muted)] border-[var(--sl-outline-expressive)]',
                    className
                )}
                {...props}
            >
                <CardContent className="pt-6 flex flex-col gap-4">
                    {icon && (
                        <div className={cn(
                            'size-12 rounded-[var(--sl-radius-badge)] flex items-center justify-center transition-transform group-hover:scale-110',
                            isExpressive
                                ? 'bg-[var(--sl-on-expressive)] text-white'
                                : 'bg-[var(--sl-container-muted)] text-[var(--sl-on-standard)]'
                        )}>
                            {icon}
                        </div>
                    )}
                    <div className="space-y-2">
                        <h3 className="text-[length:var(--sl-text-lg)] font-semibold text-[var(--sl-on-standard)] leading-tight">
                            {title}
                        </h3>
                        <p className="text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)] leading-relaxed">
                            {description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    }
);

Feature.displayName = 'Feature';

export { Feature };
