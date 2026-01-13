/**
 * Staylook Heading Component
 * 
 * Design Principles:
 * - Editorial typography with Plus Jakarta Sans
 * - Clear hierarchy using design tokens
 * - Consistent sizing following typographic scale
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const headingVariants = cva(
  [
    'font-[var(--sl-font-sans)]',
    'leading-tight',
    'm-0',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'text-[length:var(--sl-text-xs)]',
        sm: 'text-[length:var(--sl-text-sm)]',
        md: 'text-[length:var(--sl-text-lg)]',
        lg: 'text-[length:var(--sl-text-xl)]',
        xl: 'text-[length:var(--sl-text-2xl)]',
        '2xl': 'text-[length:var(--sl-text-3xl)]',
        '3xl': 'text-[length:var(--sl-text-4xl)]',
        '4xl': 'text-[length:var(--sl-text-5xl)]',
      },
      variant: {
        standard: 'text-[var(--sl-on-standard)]',
        expressive: 'text-[var(--sl-on-expressive)]',
        muted: 'text-[var(--sl-standard-muted)]',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'xl',
      variant: 'standard',
      weight: 'bold',
      align: 'left',
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  /** Heading level */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Truncate text with ellipsis */
  truncate?: boolean;
  /** HTML element to render as (overrides level) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      level = 2,
      size,
      variant,
      weight,
      align,
      truncate = false,
      as,
      className = '',
      ...props
    },
    ref
  ) => {
    const Component = as || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({ size, variant, weight, align }),
          truncate && 'overflow-hidden text-ellipsis whitespace-nowrap',
          className
        )}
        data-slot="heading"
        data-variant={variant}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';
