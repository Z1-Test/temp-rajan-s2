import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Orientation of the divider */
    orientation?: 'horizontal' | 'vertical';
    /** Variant style */
    variant?: 'solid' | 'dashed';
    /** Spacing around divider */
    spacing?: 'tight' | 'normal' | 'loose';
    /** Label text (only for horizontal) */
    label?: string;
    /** Label position */
    labelPosition?: 'left' | 'center' | 'right';
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    (
        {
            orientation = 'horizontal',
            variant = 'solid',
            spacing = 'normal',
            label,
            labelPosition = 'center',
            className = '',
            ...props
        },
        ref
    ) => {
        const orientationClasses = {
            horizontal: 'divider-horizontal',
            vertical: 'divider-vertical',
        };

        const variantClasses = {
            solid: 'divider-solid',
            dashed: 'divider-dashed',
        };

        const spacingClasses = {
            tight: 'divider-spacing-tight',
            normal: 'divider-spacing-normal',
            loose: 'divider-spacing-loose',
        };

        if (label && orientation === 'horizontal') {
            const labelPositionClasses = {
                left: 'divider-label-left',
                center: 'divider-label-center',
                right: 'divider-label-right',
            };

            return (
                <div
                    ref={ref}
                    className={`
            divider-with-label
            ${orientationClasses[orientation]}
            ${spacingClasses[spacing]}
            ${labelPositionClasses[labelPosition]}
            ${className}
          `}
                    role="separator"
                    {...props}
                >
                    <div className={`divider-line ${variantClasses[variant]}`}></div>
                    <span className="divider-label">{label}</span>
                    <div className={`divider-line ${variantClasses[variant]}`}></div>

                    <style jsx>{`
            .divider-with-label {
              display: flex;
              align-items: center;
              width: 100%;
            }
            
            .divider-line {
              flex: 1;
              height: 1px;
              background: var(--sl-outline-muted);
            }
            
            .divider-solid {
              border-style: solid;
            }
            
            .divider-dashed {
              border-style: dashed;
              background: none;
              border-top: 1px dashed var(--sl-outline-muted);
            }
            
            .divider-label {
              font-family: var(--sl-font-sans);
              font-size: var(--sl-text-sm);
              color: var(--sl-standard-soft);
              font-weight: var(--sl-font-medium);
              white-space: nowrap;
            }
            
            /* Label positions */
            .divider-label-left .divider-line:first-child {
              flex: 0 0 var(--sl-space-4);
            }
            
            .divider-label-left .divider-label {
              margin: 0 var(--sl-space-4) 0 var(--sl-space-2);
            }
            
            .divider-label-center .divider-label {
              margin: 0 var(--sl-space-4);
            }
            
            .divider-label-right .divider-line:last-child {
              flex: 0 0 var(--sl-space-4);
            }
            
            .divider-label-right .divider-label {
              margin: 0 var(--sl-space-2) 0 var(--sl-space-4);
            }
            
            /* Spacing */
            .divider-spacing-tight {
              margin: var(--sl-space-2) 0;
            }
            
            .divider-spacing-normal {
              margin: var(--sl-space-4) 0;
            }
            
            .divider-spacing-loose {
              margin: var(--sl-space-6) 0;
            }
          `}</style>
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={`
          divider
          ${orientationClasses[orientation]}
          ${variantClasses[variant]}
          ${spacingClasses[spacing]}
          ${className}
        `}
                role="separator"
                aria-orientation={orientation}
                {...props}
            >
                <style jsx>{`
          .divider {
            background: var(--sl-outline-muted);
          }
          
          /* Orientation */
          .divider-horizontal {
            width: 100%;
            height: 1px;
          }
          
          .divider-vertical {
            width: 1px;
            height: 100%;
            display: inline-block;
          }
          
          /* Variant */
          .divider-solid {
            border-style: solid;
          }
          
          .divider-dashed {
            background: none;
          }
          
          .divider-horizontal.divider-dashed {
            border-top: 1px dashed var(--sl-outline-muted);
          }
          
          .divider-vertical.divider-dashed {
            border-left: 1px dashed var(--sl-outline-muted);
          }
          
          /* Spacing - Horizontal */
          .divider-horizontal.divider-spacing-tight {
            margin: var(--sl-space-2) 0;
          }
          
          .divider-horizontal.divider-spacing-normal {
            margin: var(--sl-space-4) 0;
          }
          
          .divider-horizontal.divider-spacing-loose {
            margin: var(--sl-space-6) 0;
          }
          
          /* Spacing - Vertical */
          .divider-vertical.divider-spacing-tight {
            margin: 0 var(--sl-space-2);
          }
          
          .divider-vertical.divider-spacing-normal {
            margin: 0 var(--sl-space-4);
          }
          
          .divider-vertical.divider-spacing-loose {
            margin: 0 var(--sl-space-6);
          }
        `}</style>
            </div>
        );
    }
);

Divider.displayName = 'Divider';

// Alias for consistency
export const Separator = Divider;
