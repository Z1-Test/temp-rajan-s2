import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Radio label */
    label?: string;
    /** Variant style */
    variant?: 'standard' | 'expressive';
    /** Error state */
    error?: boolean;
    /** Success state */
    success?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ label, variant = 'standard', error, success, className = '', disabled, ...props }, ref) => {
        const variantClasses = {
            standard: 'radio-standard',
            expressive: 'radio-expressive',
        };

        return (
            <label className={`radio-container ${disabled ? 'radio-disabled' : ''}`}>
                <input
                    ref={ref}
                    type="radio"
                    className={`radio ${variantClasses[variant]} ${error ? 'radio-error' : ''} ${success ? 'radio-success' : ''} ${className}`}
                    disabled={disabled}
                    {...props}
                />
                {label && <span className="radio-label">{label}</span>}

                <style jsx>{`
          .radio-container {
            display: inline-flex;
            align-items: center;
            gap: var(--sl-space-2);
            cursor: pointer;
            user-select: none;
          }
          
          .radio-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .radio {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid var(--sl-outline-calm);
            background: var(--sl-container-vibrant);
            cursor: pointer;
            position: relative;
            transition: all var(--sl-duration-base) var(--sl-ease-default);
            flex-shrink: 0;
          }
          
          .radio:hover:not(:disabled) {
            border-color: var(--sl-outline-vibrant);
            background: var(--sl-container-calm);
          }
          
          .radio:focus {
            outline: none;
            box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color);
            outline-offset: var(--sl-focus-ring-offset);
          }
          
          .radio:checked::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            transition: all var(--sl-duration-base) var(--sl-ease-default);
          }
          
          .radio-standard:checked {
            border-color: var(--sl-on-standard);
          }
          
          .radio-standard:checked::before {
            background: var(--sl-on-standard);
          }
          
          .radio-expressive:checked {
            border-color: var(--sl-on-expressive);
          }
          
          .radio-expressive:checked::before {
            background: var(--sl-on-expressive);
          }
          
          .radio-error {
            border-color: var(--sl-outline-error);
          }
          
          .radio-error:checked {
            border-color: var(--sl-on-error);
          }
          
          .radio-error:checked::before {
            background: var(--sl-on-error);
          }
          
          .radio-success {
            border-color: var(--sl-outline-success);
          }
          
          .radio-success:checked {
            border-color: var(--sl-on-success);
          }
          
          .radio-success:checked::before {
            background: var(--sl-on-success);
          }
          
          .radio:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }
          
          .radio-label {
            font-family: var(--sl-font-sans);
            font-size: var(--sl-text-base);
            color: var(--sl-on-standard);
            font-weight: var(--sl-font-normal);
          }
          
          .radio-disabled .radio-label {
            color: var(--sl-standard-muted);
          }
        `}</style>
            </label>
        );
    }
);

Radio.displayName = 'Radio';

export interface RadioGroupProps {
    /** Radio group label */
    label?: string;
    /** Radio options */
    children: React.ReactNode;
    /** Orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Error message */
    error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    children,
    orientation = 'vertical',
    error,
}) => {
    return (
        <div className="radio-group">
            {label && <div className="radio-group-label">{label}</div>}
            <div className={`radio-group-options ${orientation === 'horizontal' ? 'radio-group-horizontal' : 'radio-group-vertical'}`}>
                {children}
            </div>
            {error && <div className="radio-group-error">{error}</div>}

            <style jsx>{`
        .radio-group {
          display: flex;
          flex-direction: column;
          gap: var(--sl-space-2);
        }
        
        .radio-group-label {
          font-family: var(--sl-font-sans);
          font-size: var(--sl-text-base);
          font-weight: var(--sl-font-medium);
          color: var(--sl-on-standard);
        }
        
        .radio-group-options {
          display: flex;
          gap: var(--sl-space-3);
        }
        
        .radio-group-vertical {
          flex-direction: column;
        }
        
        .radio-group-horizontal {
          flex-direction: row;
          flex-wrap: wrap;
        }
        
        .radio-group-error {
          font-size: var(--sl-text-sm);
          color: var(--sl-on-error);
          font-weight: var(--sl-font-normal);
        }
      `}</style>
        </div>
    );
};

RadioGroup.displayName = 'RadioGroup';
