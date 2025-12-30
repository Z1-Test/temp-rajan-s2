import React from 'react';

export interface ButtonProps {
  /** Button content */
  children: React.ReactNode;

  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';

  /** Size variant */
  size?: 'sm' | 'md' | 'lg';

  /** Disabled state */
  disabled?: boolean;

  /** Loading state - shows spinner and disables interaction */
  loading?: boolean;

  /** Icon displayed before the label */
  leftIcon?: React.ReactNode;

  /** Icon displayed after the label */
  rightIcon?: React.ReactNode;

  /** Makes the button full width */
  fullWidth?: boolean;

  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Additional CSS class */
  className?: string;

  /** Accessible label for screen readers */
  'aria-label'?: string;
}
