/**
 * Staylook Pricing Card Molecule
 * 
 * Design Principles:
 * - Editorial: Clear pricing hierarchy
 * - Curved: Uses card radius (16px)
 * - Expressive: Highlight featured plan selectively
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '../components/button';
import { Badge } from '../components/badge';

export interface PricingFeature {
    text: string;
    included: boolean;
}

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    description?: string;
    price: string;
    period?: string;
    features: PricingFeature[];
    ctaLabel?: string;
    onCtaClick?: () => void;
    featured?: boolean;
    badge?: string;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
    (
        {
            name,
            description,
            price,
            period = '/month',
            features,
            ctaLabel = 'Get Started',
            onCtaClick,
            featured = false,
            badge,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'relative flex flex-col p-6',
                    'rounded-[var(--sl-radius-card)]',
                    'border transition-all duration-[var(--sl-duration-base)]',
                    featured
                        ? 'bg-[var(--sl-on-standard)] text-white border-transparent shadow-[var(--sl-shadow-vibrant)] scale-105'
                        : 'bg-[var(--sl-container-vibrant)] border-[var(--sl-outline-muted)] hover:border-[var(--sl-outline-vibrant)]',
                    className
                )}
                {...props}
            >
                {badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge variant={featured ? 'expressive' : 'standard'}>
                            {badge}
                        </Badge>
                    </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                    <h3
                        className={cn(
                            'text-[length:var(--sl-text-xl)] font-bold mb-1',
                            featured ? 'text-white' : 'text-[var(--sl-on-standard)]'
                        )}
                    >
                        {name}
                    </h3>
                    {description && (
                        <p
                            className={cn(
                                'text-[length:var(--sl-text-sm)]',
                                featured ? 'text-white/70' : 'text-[var(--sl-standard-muted)]'
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                    <span
                        className={cn(
                            'text-[length:var(--sl-text-4xl)] font-bold',
                            featured ? 'text-white' : 'text-[var(--sl-on-standard)]'
                        )}
                    >
                        {price}
                    </span>
                    <span
                        className={cn(
                            'text-[length:var(--sl-text-sm)]',
                            featured ? 'text-white/70' : 'text-[var(--sl-standard-muted)]'
                        )}
                    >
                        {period}
                    </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-1">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className={cn(
                                'flex items-center gap-3 text-[length:var(--sl-text-sm)]',
                                featured
                                    ? feature.included
                                        ? 'text-white'
                                        : 'text-white/40 line-through'
                                    : feature.included
                                        ? 'text-[var(--sl-on-standard)]'
                                        : 'text-[var(--sl-standard-muted)] line-through'
                            )}
                        >
                            <Check
                                className={cn(
                                    'size-4 shrink-0',
                                    featured
                                        ? feature.included
                                            ? 'text-white'
                                            : 'text-white/40'
                                        : feature.included
                                            ? 'text-[var(--sl-on-success)]'
                                            : 'text-[var(--sl-standard-muted)]'
                                )}
                            />
                            {feature.text}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Button
                    variant={featured ? 'outline' : 'standard'}
                    onClick={onCtaClick}
                    className={cn(
                        'w-full',
                        featured && 'border-white text-white hover:bg-white hover:text-black'
                    )}
                >
                    {ctaLabel}
                </Button>
            </div>
        );
    }
);

PricingCard.displayName = 'PricingCard';

export { PricingCard };
