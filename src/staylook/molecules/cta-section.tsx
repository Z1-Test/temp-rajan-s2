/**
 * Staylook CTA Section Molecule
 * 
 * Design Principles:
 * - Editorial: Bold, attention-grabbing typography
 * - Curved: Uses section radius (32px)
 * - Expressive: Strategic use of accent color
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../components/button';

export interface CTASectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    primaryAction?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    secondaryAction?: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    variant?: 'standard' | 'expressive' | 'gradient';
    align?: 'left' | 'center';
}

const CTASection = React.forwardRef<HTMLDivElement, CTASectionProps>(
    (
        {
            title,
            description,
            primaryAction,
            secondaryAction,
            variant = 'standard',
            align = 'center',
            className,
            ...props
        },
        ref
    ) => {
        const bgClasses = {
            standard: 'bg-[var(--sl-container-calm)]',
            expressive: 'bg-[var(--sl-on-expressive)]',
            gradient: 'bg-gradient-to-r from-[var(--sl-on-standard)] to-[var(--sl-standard-soft)]',
        };

        const textClasses = {
            standard: 'text-[var(--sl-on-standard)]',
            expressive: 'text-white',
            gradient: 'text-white',
        };

        const mutedTextClasses = {
            standard: 'text-[var(--sl-standard-muted)]',
            expressive: 'text-white/80',
            gradient: 'text-white/80',
        };

        return (
            <section
                ref={ref}
                className={cn(
                    'px-8 py-16 md:py-20',
                    'rounded-[var(--sl-radius-section)]',
                    bgClasses[variant],
                    className
                )}
                {...props}
            >
                <div
                    className={cn(
                        'max-w-3xl space-y-6',
                        align === 'center' ? 'mx-auto text-center' : 'text-left'
                    )}
                >
                    <h2
                        className={cn(
                            'text-[length:var(--sl-text-3xl)] md:text-[length:var(--sl-text-4xl)] font-bold leading-tight',
                            textClasses[variant]
                        )}
                    >
                        {title}
                    </h2>

                    {description && (
                        <p
                            className={cn(
                                'text-[length:var(--sl-text-lg)] leading-relaxed max-w-2xl',
                                align === 'center' && 'mx-auto',
                                mutedTextClasses[variant]
                            )}
                        >
                            {description}
                        </p>
                    )}

                    {(primaryAction || secondaryAction) && (
                        <div
                            className={cn(
                                'flex flex-wrap gap-4 pt-2',
                                align === 'center' && 'justify-center'
                            )}
                        >
                            {primaryAction && (
                                <Button
                                    variant={variant === 'standard' ? 'expressive' : 'outline'}
                                    size="lg"
                                    onClick={primaryAction.onClick}
                                    className={cn(
                                        variant !== 'standard' &&
                                        'border-white text-white hover:bg-white hover:text-black'
                                    )}
                                >
                                    {primaryAction.label}
                                </Button>
                            )}
                            {secondaryAction && (
                                <Button
                                    variant="ghost"
                                    size="lg"
                                    onClick={secondaryAction.onClick}
                                    className={cn(
                                        variant !== 'standard' && 'text-white hover:bg-white/10'
                                    )}
                                >
                                    {secondaryAction.label}
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </section>
        );
    }
);

CTASection.displayName = 'CTASection';

export { CTASection };
