import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Heading content */
    children: React.ReactNode;
    /** Heading level */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Variant style */
    variant?: 'standard' | 'expressive';
    /** Font weight */
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
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
            variant = 'standard',
            weight = 'bold',
            align = 'left',
            truncate = false,
            as,
            className = '',
            ...props
        },
        ref
    ) => {
        const Component = as || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

        const levelClasses = {
            1: 'heading-1',
            2: 'heading-2',
            3: 'heading-3',
            4: 'heading-4',
            5: 'heading-5',
            6: 'heading-6',
        };

        const variantClasses = {
            standard: 'heading-standard',
            expressive: 'heading-expressive',
        };

        const weightClasses = {
            normal: 'heading-weight-normal',
            medium: 'heading-weight-medium',
            semibold: 'heading-weight-semibold',
            bold: 'heading-weight-bold',
        };

        const alignClasses = {
            left: 'heading-align-left',
            center: 'heading-align-center',
            right: 'heading-align-right',
        };

        return (
            <Component
                ref={ref}
                className={`
          heading
          ${levelClasses[level]}
          ${variantClasses[variant]}
          ${weightClasses[weight]}
          ${alignClasses[align]}
          ${truncate ? 'heading-truncate' : ''}
          ${className}
        `}
                {...props}
            >
                {children}

                <style jsx>{`
          .heading {
            font-family: var(--sl-font-sans);
            line-height: var(--sl-line-height-tight, 1.25);
            margin: 0;
          }
          
          /* Levels */
          .heading-1 {
            font-size: var(--sl-text-5xl);
          }
          
          .heading-2 {
            font-size: var(--sl-text-4xl);
          }
          
          .heading-3 {
            font-size: var(--sl-text-3xl);
          }
          
          .heading-4 {
            font-size: var(--sl-text-2xl);
          }
          
          .heading-5 {
            font-size: var(--sl-text-xl);
          }
          
          .heading-6 {
            font-size: var(--sl-text-lg);
          }
          
          /* Variants */
          .heading-standard {
            color: var(--sl-on-standard);
          }
          
          .heading-expressive {
            color: var(--sl-on-expressive);
          }
          
          /* Weights */
          .heading-weight-normal {
            font-weight: var(--sl-font-normal);
          }
          
          .heading-weight-medium {
            font-weight: var(--sl-font-medium);
          }
          
          .heading-weight-semibold {
            font-weight: var(--sl-font-semibold);
          }
          
          .heading-weight-bold {
            font-weight: var(--sl-font-bold);
          }
          
          /* Alignment */
          .heading-align-left {
            text-align: left;
          }
          
          .heading-align-center {
            text-align: center;
          }
          
          .heading-align-right {
            text-align: right;
          }
          
          /* Truncate */
          .heading-truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        `}</style>
            </Component>
        );
    }
);

Heading.displayName = 'Heading';
