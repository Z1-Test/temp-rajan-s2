/**
 * Staylook Text Component
 * 
 * Design Principles:
 * - Editorial typography with Plus Jakarta Sans
 * - Clear color hierarchy using design tokens
 * - Consistent sizing and spacing
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva(
  [
    'font-[var(--sl-font-sans)]',
    'm-0',
  ].join(' '),
  {
    variants: {
      variant: {
        default: '',
        muted: 'text-[var(--sl-standard-muted)]',
        soft: 'text-[var(--sl-standard-soft)]',
        expressive: 'text-[var(--sl-on-expressive)]',
        success: 'text-[var(--sl-on-success)]',
        error: 'text-[var(--sl-on-error)]',
        warning: 'text-[var(--sl-on-warning)]',
        info: 'text-[var(--sl-on-info)]',
      },
      size: {
        xs: 'text-[length:var(--sl-text-xs)]',
        sm: 'text-[length:var(--sl-text-sm)]',
        base: 'text-[length:var(--sl-text-base)]',
        lg: 'text-[length:var(--sl-text-lg)]',
        xl: 'text-[length:var(--sl-text-xl)]',
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
      variant: 'default',
      size: 'base',
      weight: 'normal',
      align: 'left',
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof textVariants> {
  /** HTML element to render as */
  as?: 'span' | 'p' | 'div';
  /** Truncate text with ellipsis */
  truncate?: boolean;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      variant,
      size,
      weight,
      align,
      truncate = false,
      as: Component = 'span',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref as any}
        className={cn(
          textVariants({ variant, size, weight, align }),
          truncate && 'overflow-hidden text-ellipsis whitespace-nowrap',
          className
        )}
        data-slot="text"
        data-variant={variant}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
