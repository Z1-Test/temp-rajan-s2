import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Text content */
    children: React.ReactNode;
    /** Variant style */
    variant?: 'body' | 'caption' | 'label' | 'code';
    /** Color variant */
    color?: 'standard' | 'soft' | 'muted' | 'expressive' | 'error' | 'success' | 'warning' | 'info';
    /** Size variant */
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    /** Font weight */
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Truncate text with ellipsis */
    truncate?: boolean;
    /** HTML element to render as */
    as?: 'span' | 'p' | 'div';
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
    (
        {
            children,
            variant = 'body',
            color = 'standard',
            size = 'base',
            weight = 'normal',
            align = 'left',
            truncate = false,
            as: Component = 'span',
            className = '',
            ...props
        },
        ref
    ) => {
        const variantClasses = {
            body: 'text-body',
            caption: 'text-caption',
            label: 'text-label',
            code: 'text-code',
        };

        const colorClasses = {
            standard: 'text-color-standard',
            soft: 'text-color-soft',
            muted: 'text-color-muted',
            expressive: 'text-color-expressive',
            error: 'text-color-error',
            success: 'text-color-success',
            warning: 'text-color-warning',
            info: 'text-color-info',
        };

        const sizeClasses = {
            xs: 'text-size-xs',
            sm: 'text-size-sm',
            base: 'text-size-base',
            lg: 'text-size-lg',
            xl: 'text-size-xl',
        };

        const weightClasses = {
            normal: 'text-weight-normal',
            medium: 'text-weight-medium',
            semibold: 'text-weight-semibold',
            bold: 'text-weight-bold',
        };

        const alignClasses = {
            left: 'text-align-left',
            center: 'text-align-center',
            right: 'text-align-right',
        };

        return (
            <Component
                ref={ref as any}
                className={`
          text
          ${variantClasses[variant]}
          ${colorClasses[color]}
          ${sizeClasses[size]}
          ${weightClasses[weight]}
          ${alignClasses[align]}
          ${truncate ? 'text-truncate' : ''}
          ${className}
        `}
                {...props}
            >
                {children}

                <style jsx>{`
          .text {
            font-family: var(--sl-font-sans);
            line-height: var(--sl-line-height-normal, 1.5);
            margin: 0;
          }
          
          /* Variants */
          .text-body {
            line-height: var(--sl-line-height-normal, 1.5);
          }
          
          .text-caption {
            line-height: var(--sl-line-height-tight, 1.25);
          }
          
          .text-label {
            line-height: var(--sl-line-height-tight, 1.25);
            letter-spacing: 0.01em;
          }
          
          .text-code {
            font-family: var(--sl-font-mono);
            line-height: var(--sl-line-height-normal, 1.5);
            background: var(--sl-container-muted);
            padding: var(--sl-space-1) var(--sl-space-2);
            border-radius: var(--sl-radius-badge);
          }
          
          /* Colors */
          .text-color-standard {
            color: var(--sl-on-standard);
          }
          
          .text-color-soft {
            color: var(--sl-standard-soft);
          }
          
          .text-color-muted {
            color: var(--sl-standard-muted);
          }
          
          .text-color-expressive {
            color: var(--sl-on-expressive);
          }
          
          .text-color-error {
            color: var(--sl-on-error);
          }
          
          .text-color-success {
            color: var(--sl-on-success);
          }
          
          .text-color-warning {
            color: var(--sl-on-warning);
          }
          
          .text-color-info {
            color: var(--sl-on-info);
          }
          
          /* Sizes */
          .text-size-xs {
            font-size: var(--sl-text-xs);
          }
          
          .text-size-sm {
            font-size: var(--sl-text-sm);
          }
          
          .text-size-base {
            font-size: var(--sl-text-base);
          }
          
          .text-size-lg {
            font-size: var(--sl-text-lg);
          }
          
          .text-size-xl {
            font-size: var(--sl-text-xl);
          }
          
          /* Weights */
          .text-weight-normal {
            font-weight: var(--sl-font-normal);
          }
          
          .text-weight-medium {
            font-weight: var(--sl-font-medium);
          }
          
          .text-weight-semibold {
            font-weight: var(--sl-font-semibold);
          }
          
          .text-weight-bold {
            font-weight: var(--sl-font-bold);
          }
          
          /* Alignment */
          .text-align-left {
            text-align: left;
          }
          
          .text-align-center {
            text-align: center;
          }
          
          .text-align-right {
            text-align: right;
          }
          
          /* Truncate */
          .text-truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        `}</style>
            </Component>
        );
    }
);

Text.displayName = 'Text';
