/**
 * Staylook Avatar Component
 * 
 * Design Principles:
 * - Curved: Follows --sl-radius-container (24px) or circle
 * - Minimal: Clean user representation
 * - Expressive: Status indicators for presence
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const avatarVariants = cva(
    'relative flex shrink-0 overflow-hidden',
    {
        variants: {
            size: {
                xs: 'h-6 w-6',
                sm: 'h-8 w-8',
                md: 'h-10 w-10',
                lg: 'h-12 w-12',
                xl: 'h-16 w-16',
                '2xl': 'h-24 w-24',
            },
            shape: {
                circle: 'rounded-full',
                rounded: 'rounded-[var(--sl-radius-card)]',
            }
        },
        defaultVariants: {
            size: 'md',
            shape: 'circle',
        }
    }
);

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, size, shape, src, alt, fallback, status, ...props }, ref) => {
        const [hasError, setHasError] = React.useState(false);

        const statusColors = {
            online: 'bg-[var(--sl-on-success)]',
            offline: 'bg-[var(--sl-outline-calm)]',
            away: 'bg-[var(--sl-on-warning)]',
            busy: 'bg-[var(--sl-on-error)]',
        };

        return (
            <div className="relative inline-block">
                <div
                    ref={ref}
                    className={cn(avatarVariants({ size, shape, className }))}
                    {...props}
                >
                    {src && !hasError ? (
                        <img
                            src={src}
                            alt={alt}
                            className="aspect-square h-full w-full object-cover"
                            onError={() => setHasError(true)}
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[var(--sl-container-calm)] text-[var(--sl-on-standard)] font-medium">
                            {fallback || alt?.substring(0, 2).toUpperCase() || '??'}
                        </div>
                    )}
                </div>
                {status && (
                    <span
                        className={cn(
                            "absolute bottom-0 right-0 block rounded-full ring-2 ring-[var(--sl-container-vibrant)]",
                            statusColors[status],
                            size === 'xs' ? 'h-1.5 w-1.5' :
                                size === 'sm' ? 'h-2 w-2' :
                                    size === 'md' ? 'h-2.5 w-2.5' :
                                        size === 'lg' ? 'h-3 w-3' :
                                            size === 'xl' ? 'h-4 w-4' : 'h-6 w-6'
                        )}
                    />
                )}
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';

export { Avatar };
