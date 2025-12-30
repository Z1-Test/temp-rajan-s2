import React from 'react';
import type { ButtonProps } from './Button.types';
import {
  StyledButton,
  IconWrapper,
  Spinner,
  ButtonContent,
} from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  type = 'button',
  onClick,
  className,
  'aria-label': ariaLabel,
}) => {
  const isDisabled = disabled || loading;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <StyledButton
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
      aria-disabled={isDisabled || undefined}
      aria-busy={loading || undefined}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
    >
      {loading && (
        <Spinner aria-hidden="true" data-testid="button-spinner" />
      )}
      <ButtonContent $loading={loading}>
        {leftIcon && !loading && (
          <IconWrapper aria-hidden="true">{leftIcon}</IconWrapper>
        )}
        {children}
        {rightIcon && (
          <IconWrapper aria-hidden="true">{rightIcon}</IconWrapper>
        )}
      </ButtonContent>
    </StyledButton>
  );
};

Button.displayName = 'Button';
