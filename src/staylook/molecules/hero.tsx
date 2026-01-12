/**
 * Staylook Hero Molecule
 * 
 * Design Principles:
 * - Editorial: Bold typography and clear call to action
 * - Selective Expressive: Can use expressive background or text for main CTA
 * - Curved: Follows radius-section (32px) for backgrounds
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Heading } from '../components/heading';
import { Text } from '../components/text';
import { Button } from '../components/button';
import { Container } from '../components/container';

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle: string;
    primaryAction?: { label: string; onClick?: () => void };
    secondaryAction?: { label: string; onClick?: () => void };
    image?: React.ReactNode;
    centered?: boolean;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
    ({ className, title, subtitle, primaryAction, secondaryAction, image, centered = false, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    'overflow-hidden py-20 md:py-32',
                    className
                )}
                {...props}
            >
                <Container>
                    <div className={cn(
                        'flex flex-col gap-12',
                        centered ? 'items-center text-center' : 'lg:flex-row lg:items-center'
                    )}>
                        <div className={cn(
                            'flex-1 space-y-8',
                            centered ? 'max-w-2xl' : ''
                        )}>
                            <div className="space-y-4">
                                <Heading level={1} className="text-balance text-5xl md:text-7xl font-bold tracking-tight">
                                    {title}
                                </Heading>
                                <Text size="xl" variant="muted" className="text-balance max-w-xl mx-auto lg:mx-0">
                                    {subtitle}
                                </Text>
                            </div>

                            <div className={cn(
                                'flex flex-wrap gap-4',
                                centered ? 'justify-center' : ''
                            )}>
                                {primaryAction && (
                                    <Button variant="expressive" size="lg" onClick={primaryAction.onClick}>
                                        {primaryAction.label}
                                    </Button>
                                )}
                                {secondaryAction && (
                                    <Button variant="outline" size="lg" onClick={secondaryAction.onClick}>
                                        {secondaryAction.label}
                                    </Button>
                                )}
                            </div>
                        </div>

                        {image && (
                            <div className="flex-1 w-full max-w-xl lg:max-w-none">
                                {image}
                            </div>
                        )}
                    </div>
                </Container>
            </section>
        );
    }
);

Hero.displayName = 'Hero';

export { Hero };
