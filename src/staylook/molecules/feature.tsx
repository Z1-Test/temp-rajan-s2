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
import { Heading } from '../components/heading';
import { Text } from '../components/text';
import { Icon } from '../components/icon';

export interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    icon?: React.ElementType;
    expressive?: boolean;
}

const Feature = React.forwardRef<HTMLDivElement, FeatureProps>(
    ({ className, title, description, icon, expressive, ...props }, ref) => {
        return (
            <Card
                ref={ref}
                className={cn(
                    'transition-all hover:border-[var(--sl-outline-vibrant)] group',
                    expressive && 'bg-[var(--sl-expressive-muted)] border-active',
                    className
                )}
                {...props}
            >
                <CardContent className="pt-6 flex flex-col gap-4">
                    {icon && (
                        <div className={cn(
                            'size-10 rounded-[var(--sl-radius-badge)] flex items-center justify-center transition-transform group-hover:scale-110',
                            expressive ? 'bg-[var(--sl-on-expressive)] text-white' : 'bg-[var(--sl-container-calm)] text-[var(--sl-on-standard)]'
                        )}>
                            <Icon icon={icon} size="md" variant={expressive ? 'vibrant' : 'standard'} />
                        </div>
                    )}
                    <div className="space-y-2">
                        <Heading level={3} className="text-[var(--sl-text-lg)]">
                            {title}
                        </Heading>
                        <Text variant="muted" size="sm" className="leading-relaxed">
                            {description}
                        </Text>
                    </div>
                </CardContent>
            </Card>
        );
    }
);

Feature.displayName = 'Feature';

export { Feature };
