/**
 * Staylook Testimonial Molecule
 * 
 * Design Principles:
 * - Editorial: Quote-focused typography
 * - Curved: Uses card radius (16px)
 * - Minimal: Clean, focused design
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';
import { Avatar } from '../components/avatar';

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
    quote: string;
    author: {
        name: string;
        role?: string;
        company?: string;
        avatar?: string;
    };
    rating?: number;
    variant?: 'standard' | 'featured';
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
    ({ quote, author, rating, variant = 'standard', className, ...props }, ref) => {
        const isFeatured = variant === 'featured';

        return (
            <div
                ref={ref}
                className={cn(
                    'relative p-6',
                    'rounded-[var(--sl-radius-card)]',
                    'border transition-all duration-[var(--sl-duration-base)]',
                    isFeatured
                        ? 'bg-[var(--sl-on-standard)] text-white border-transparent'
                        : 'bg-[var(--sl-container-vibrant)] border-[var(--sl-outline-muted)]',
                    className
                )}
                {...props}
            >
                {/* Quote Icon */}
                <Quote
                    className={cn(
                        'size-8 mb-4',
                        isFeatured ? 'text-white/30' : 'text-[var(--sl-on-expressive)]'
                    )}
                />

                {/* Rating */}
                {rating && (
                    <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    'size-4',
                                    i < rating
                                        ? isFeatured
                                            ? 'text-yellow-400 fill-yellow-400'
                                            : 'text-yellow-500 fill-yellow-500'
                                        : isFeatured
                                            ? 'text-white/30'
                                            : 'text-[var(--sl-outline-muted)]'
                                )}
                            />
                        ))}
                    </div>
                )}

                {/* Quote Text */}
                <blockquote
                    className={cn(
                        'text-[length:var(--sl-text-lg)] leading-relaxed mb-6',
                        isFeatured ? 'text-white' : 'text-[var(--sl-on-standard)]'
                    )}
                >
                    "{quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <Avatar
                        src={author.avatar}
                        fallback={author.name.substring(0, 2).toUpperCase()}
                        size="md"
                    />
                    <div>
                        <p
                            className={cn(
                                'text-[length:var(--sl-text-sm)] font-semibold',
                                isFeatured ? 'text-white' : 'text-[var(--sl-on-standard)]'
                            )}
                        >
                            {author.name}
                        </p>
                        {(author.role || author.company) && (
                            <p
                                className={cn(
                                    'text-[length:var(--sl-text-xs)]',
                                    isFeatured ? 'text-white/70' : 'text-[var(--sl-standard-muted)]'
                                )}
                            >
                                {author.role}
                                {author.role && author.company && ' at '}
                                {author.company}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }
);

Testimonial.displayName = 'Testimonial';

export { Testimonial };
