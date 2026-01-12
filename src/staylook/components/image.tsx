/**
 * Staylook Image Component
 * 
 * Design Principles:
 * - Curved: Follows --sl-radius-card or container
 * - Minimal: Pure visual content
 * - Editorial: Supports aspect ratios
 */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';

const imageVariants = cva(
    'relative overflow-hidden bg-[var(--sl-container-calm)]',
    {
        variants: {
            ratio: {
                auto: '',
                square: 'aspect-square',
                video: 'aspect-video',
                wide: 'aspect-[21/9]',
                portrait: 'aspect-[3/4]',
            },
            radius: {
                none: 'rounded-none',
                sm: 'rounded-[var(--sl-radius-badge)]',
                md: 'rounded-[var(--sl-radius-card)]',
                lg: 'rounded-[var(--sl-radius-container)]',
                xl: 'rounded-[var(--sl-radius-section)]',
                full: 'rounded-full',
            },
        },
        defaultVariants: {
            ratio: 'auto',
            radius: 'md',
        },
    }
);

export interface ImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
    containerClassName?: string;
    fallbackIcon?: React.ElementType;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ className, containerClassName, ratio, radius, src, alt, fallbackIcon: FallbackIcon = ImageIcon, ...props }, ref) => {
        const [isLoading, setIsLoading] = React.useState(true);
        const [hasError, setHasError] = React.useState(false);

        return (
            <div className={cn(imageVariants({ ratio, radius, className: containerClassName }))}>
                {src && !hasError ? (
                    <img
                        ref={ref}
                        src={src}
                        alt={alt}
                        className={cn(
                            'h-full w-full object-cover transition-opacity duration-[var(--sl-duration-base)]',
                            isLoading ? 'opacity-0' : 'opacity-100',
                            className
                        )}
                        onLoad={() => setIsLoading(false)}
                        onError={() => {
                            setIsLoading(false);
                            setHasError(true);
                        }}
                        {...props}
                    />
                ) : null}

                {(isLoading || !src || hasError) && (
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--sl-standard-muted)]">
                        {isLoading && !hasError ? (
                            <div className="h-full w-full animate-pulse bg-[var(--sl-container-muted)]" />
                        ) : (
                            <FallbackIcon className="size-8" />
                        )}
                    </div>
                )}
            </div>
        );
    }
);

Image.displayName = 'Image';

export { Image, imageVariants };
