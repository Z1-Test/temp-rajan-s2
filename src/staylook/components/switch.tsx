import React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** Variant style */
    variant?: 'standard' | 'expressive';
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Label text */
    label?: string;
    /** Label position */
    labelPosition?: 'left' | 'right';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ variant = 'standard', size = 'md', label, labelPosition = 'right', className = '', disabled, ...props }, ref) => {
        const sizeClasses = {
            sm: 'switch-sm',
            md: 'switch-md',
            lg: 'switch-lg',
        };

        const variantClasses = {
            standard: 'switch-standard',
            expressive: 'switch-expressive',
        };

        const switchElement = (
            <>
                <input
                    ref={ref}
                    type="checkbox"
                    className="switch-input"
                    disabled={disabled}
                    {...props}
                />
                <span className={`switch-slider ${sizeClasses[size]} ${variantClasses[variant]}`}></span>
            </>
        );

        if (label) {
            return (
                <label className={`switch-container ${disabled ? 'switch-disabled' : ''} ${labelPosition === 'left' ? 'switch-label-left' : ''}`}>
                    {labelPosition === 'left' && <span className="switch-label">{label}</span>}
                    <div className="switch">
                        {switchElement}
                    </div>
                    {labelPosition === 'right' && <span className="switch-label">{label}</span>}

                    <style jsx>{`
            .switch-container {
              display: inline-flex;
              align-items: center;
              gap: var(--sl-space-2);
              cursor: pointer;
              user-select: none;
            }
            
            .switch-label-left {
              flex-direction: row-reverse;
            }
            
            .switch-disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
            
            .switch {
              position: relative;
              display: inline-block;
            }
            
            .switch-input {
              opacity: 0;
              width: 0;
              height: 0;
              position: absolute;
            }
            
            .switch-slider {
              position: relative;
              display: inline-block;
              background: var(--sl-outline-calm);
              border-radius: var(--sl-radius-button);
              transition: all var(--sl-duration-base) var(--sl-ease-default);
              cursor: pointer;
            }
            
            .switch-slider::before {
              content: '';
              position: absolute;
              background: var(--sl-container-vibrant);
              border-radius: 50%;
              transition: all var(--sl-duration-base) var(--sl-ease-default);
              box-shadow: var(--sl-shadow-muted);
            }
            
            /* Sizes */
            .switch-sm {
              width: 32px;
              height: 18px;
            }
            
            .switch-sm::before {
              width: 14px;
              height: 14px;
              left: 2px;
              top: 2px;
            }
            
            .switch-md {
              width: 44px;
              height: 24px;
            }
            
            .switch-md::before {
              width: 18px;
              height: 18px;
              left: 3px;
              top: 3px;
            }
            
            .switch-lg {
              width: 56px;
              height: 30px;
            }
            
            .switch-lg::before {
              width: 24px;
              height: 24px;
              left: 3px;
              top: 3px;
            }
            
            /* Hover state */
            .switch-slider:hover:not(.switch-disabled) {
              background: var(--sl-outline-vibrant);
            }
            
            /* Focus state */
            .switch-input:focus + .switch-slider {
              box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color);
              outline-offset: var(--sl-focus-ring-offset);
            }
            
            /* Checked state - Standard */
            .switch-input:checked + .switch-slider.switch-standard {
              background: var(--sl-on-standard);
            }
            
            .switch-input:checked + .switch-slider.switch-sm::before {
              transform: translateX(14px);
            }
            
            .switch-input:checked + .switch-slider.switch-md::before {
              transform: translateX(20px);
            }
            
            .switch-input:checked + .switch-slider.switch-lg::before {
              transform: translateX(26px);
            }
            
            /* Checked state - Expressive */
            .switch-input:checked + .switch-slider.switch-expressive {
              background: var(--sl-on-expressive);
            }
            
            /* Disabled state */
            .switch-input:disabled + .switch-slider {
              cursor: not-allowed;
              opacity: 0.5;
            }
            
            .switch-label {
              font-family: var(--sl-font-sans);
              font-size: var(--sl-text-base);
              color: var(--sl-on-standard);
              font-weight: var(--sl-font-normal);
            }
            
            .switch-disabled .switch-label {
              color: var(--sl-standard-muted);
            }
          `}</style>
                </label>
            );
        }

        return (
            <div className={`switch ${disabled ? 'switch-disabled' : ''}`}>
                {switchElement}

                <style jsx>{`
          .switch {
            position: relative;
            display: inline-block;
          }
          
          .switch-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .switch-input {
            opacity: 0;
            width: 0;
            height: 0;
            position: absolute;
          }
          
          .switch-slider {
            position: relative;
            display: inline-block;
            background: var(--sl-outline-calm);
            border-radius: var(--sl-radius-button);
            transition: all var(--sl-duration-base) var(--sl-ease-default);
            cursor: pointer;
          }
          
          .switch-slider::before {
            content: '';
            position: absolute;
            background: var(--sl-container-vibrant);
            border-radius: 50%;
            transition: all var(--sl-duration-base) var(--sl-ease-default);
            box-shadow: var(--sl-shadow-muted);
          }
          
          /* Sizes */
          .switch-sm {
            width: 32px;
            height: 18px;
          }
          
          .switch-sm::before {
            width: 14px;
            height: 14px;
            left: 2px;
            top: 2px;
          }
          
          .switch-md {
            width: 44px;
            height: 24px;
          }
          
          .switch-md::before {
            width: 18px;
            height: 18px;
            left: 3px;
            top: 3px;
          }
          
          .switch-lg {
            width: 56px;
            height: 30px;
          }
          
          .switch-lg::before {
            width: 24px;
            height: 24px;
            left: 3px;
            top: 3px;
          }
          
          /* Hover state */
          .switch-slider:hover:not(.switch-disabled) {
            background: var(--sl-outline-vibrant);
          }
          
          /* Focus state */
          .switch-input:focus + .switch-slider {
            box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color);
            outline-offset: var(--sl-focus-ring-offset);
          }
          
          /* Checked state - Standard */
          .switch-input:checked + .switch-slider.switch-standard {
            background: var(--sl-on-standard);
          }
          
          .switch-input:checked + .switch-slider.switch-sm::before {
            transform: translateX(14px);
          }
          
          .switch-input:checked + .switch-slider.switch-md::before {
            transform: translateX(20px);
          }
          
          .switch-input:checked + .switch-slider.switch-lg::before {
            transform: translateX(26px);
          }
          
          /* Checked state - Expressive */
          .switch-input:checked + .switch-slider.switch-expressive {
            background: var(--sl-on-expressive);
          }
          
          /* Disabled state */
          .switch-input:disabled + .switch-slider {
            cursor: not-allowed;
            opacity: 0.5;
          }
        `}</style>
            </div>
        );
    }
);

Switch.displayName = 'Switch';
