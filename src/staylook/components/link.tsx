import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Link content */
    children: React.ReactNode;
    /** Variant style */
    variant?: 'standard' | 'expressive' | 'muted';
    /** Size variant */
    size?: 'sm' | 'base' | 'lg';
    /** Underline style */
    underline?: 'none' | 'hover' | 'always';
    /** Show external link icon */
    external?: boolean;
    /** Disabled state */
    disabled?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (
        {
            children,
            variant = 'standard',
            size = 'base',
            underline = 'hover',
            external = false,
            disabled = false,
            className = '',
            href,
            ...props
        },
        ref
    ) => {
        const variantClasses = {
            standard: 'link-standard',
            expressive: 'link-expressive',
            muted: 'link-muted',
        };

        const sizeClasses = {
            sm: 'link-size-sm',
            base: 'link-size-base',
            lg: 'link-size-lg',
        };

        const underlineClasses = {
            none: 'link-underline-none',
            hover: 'link-underline-hover',
            always: 'link-underline-always',
        };

        return (
            <a
                ref={ref}
                href={disabled ? undefined : href}
                className={`
          link
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${underlineClasses[underline]}
          ${disabled ? 'link-disabled' : ''}
          ${className}
        `}
                aria-disabled={disabled}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                {...props}
            >
                {children}
                {external && (
                    <svg
                        className="link-external-icon"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                )}

                <style jsx>{`
          .link {
            font-family: var(--sl-font-sans);
            font-weight: var(--sl-font-medium);
            cursor: pointer;
            transition: all var(--sl-duration-base) var(--sl-ease-default);
            display: inline-flex;
            align-items: center;
            gap: var(--sl-space-1);
            text-decoration: none;
          }
          
          /* Variants */
          .link-standard {
            color: var(--sl-on-standard);
          }
          
          .link-standard:hover:not(.link-disabled) {
            color: var(--sl-standard-soft);
          }
          
          .link-standard:active:not(.link-disabled) {
            color: var(--sl-standard-muted);
          }
          
          .link-expressive {
            color: var(--sl-on-expressive);
          }
          
          .link-expressive:hover:not(.link-disabled) {
            color: var(--sl-expressive-soft);
          }
          
          .link-expressive:active:not(.link-disabled) {
            color: var(--sl-expressive-muted);
          }
          
          .link-muted {
            color: var(--sl-standard-soft);
          }
          
          .link-muted:hover:not(.link-disabled) {
            color: var(--sl-on-standard);
          }
          
          /* Sizes */
          .link-size-sm {
            font-size: var(--sl-text-sm);
          }
          
          .link-size-base {
            font-size: var(--sl-text-base);
          }
          
          .link-size-lg {
            font-size: var(--sl-text-lg);
          }
          
          /* Underline */
          .link-underline-none {
            text-decoration: none;
          }
          
          .link-underline-hover {
            text-decoration: none;
          }
          
          .link-underline-hover:hover:not(.link-disabled) {
            text-decoration: underline;
          }
          
          .link-underline-always {
            text-decoration: underline;
          }
          
          /* Disabled */
          .link-disabled {
            color: var(--sl-standard-muted);
            cursor: not-allowed;
            pointer-events: none;
            opacity: 0.5;
          }
          
          /* Focus */
          .link:focus-visible {
            outline: var(--sl-focus-ring-width) solid var(--sl-focus-ring-color);
            outline-offset: var(--sl-focus-ring-offset);
            border-radius: var(--sl-radius-badge);
          }
          
          /* External icon */
          .link-external-icon {
            flex-shrink: 0;
            margin-left: var(--sl-space-1);
          }
        `}</style>
            </a>
        );
    }
);

Link.displayName = 'Link';
