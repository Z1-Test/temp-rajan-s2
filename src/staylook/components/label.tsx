import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** Label text */
    children: React.ReactNode;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the field is optional (shows optional text) */
    optional?: boolean;
    /** Error state */
    error?: boolean;
    /** Helper text below label */
    helperText?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ children, required, optional, error, helperText, size = 'md', className = '', ...props }, ref) => {
        const sizeClasses = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
        };

        return (
            <div className="label-wrapper">
                <label
                    ref={ref}
                    className={`label ${sizeClasses[size]} ${error ? 'label-error' : ''} ${className}`}
                    {...props}
                >
                    {children}
                    {required && <span className="label-required" aria-label="required">*</span>}
                    {optional && <span className="label-optional">(optional)</span>}
                </label>
                {helperText && (
                    <span className={`label-helper ${error ? 'label-helper-error' : ''}`}>
                        {helperText}
                    </span>
                )}

                <style jsx>{`
          .label-wrapper {
            display: flex;
            flex-direction: column;
            gap: var(--sl-space-1);
          }
          
          .label {
            font-family: var(--sl-font-sans);
            font-weight: var(--sl-font-medium);
            color: var(--sl-on-standard);
            display: inline-flex;
            align-items: center;
            gap: var(--sl-space-1);
            cursor: pointer;
            transition: color var(--sl-duration-base) var(--sl-ease-default);
          }
          
          .label:hover {
            color: var(--sl-standard-soft);
          }
          
          .label-error {
            color: var(--sl-on-error);
          }
          
          .label-required {
            color: var(--sl-on-error);
            font-weight: var(--sl-font-bold);
            margin-left: var(--sl-space-1);
          }
          
          .label-optional {
            color: var(--sl-standard-muted);
            font-size: var(--sl-text-sm);
            font-weight: var(--sl-font-normal);
            margin-left: var(--sl-space-1);
          }
          
          .label-helper {
            font-size: var(--sl-text-sm);
            color: var(--sl-standard-soft);
            font-weight: var(--sl-font-normal);
          }
          
          .label-helper-error {
            color: var(--sl-on-error);
          }
          
          .text-sm {
            font-size: var(--sl-text-sm);
          }
          
          .text-base {
            font-size: var(--sl-text-base);
          }
          
          .text-lg {
            font-size: var(--sl-text-lg);
          }
        `}</style>
            </div>
        );
    }
);

Label.displayName = 'Label';
