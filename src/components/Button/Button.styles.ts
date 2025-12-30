import styled, { css, keyframes } from 'styled-components';
import type { ButtonProps } from './Button.types';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles = {
  sm: css`
    height: 32px;
    padding: 0 12px;
    font-size: 14px;
    gap: 6px;
  `,
  md: css`
    height: 40px;
    padding: 0 16px;
    font-size: 14px;
    gap: 8px;
  `,
  lg: css`
    height: 48px;
    padding: 0 24px;
    font-size: 16px;
    gap: 8px;
  `,
};

const variantStyles = {
  primary: css`
    background-color: #2563eb;
    color: #ffffff;
    border: none;

    &:hover:not(:disabled) {
      background-color: #1d4ed8;
    }

    &:active:not(:disabled) {
      background-color: #1e40af;
    }
  `,
  secondary: css`
    background-color: #f1f5f9;
    color: #334155;
    border: none;

    &:hover:not(:disabled) {
      background-color: #e2e8f0;
    }

    &:active:not(:disabled) {
      background-color: #cbd5e1;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #2563eb;
    border: 1px solid #2563eb;

    &:hover:not(:disabled) {
      background-color: #eff6ff;
    }

    &:active:not(:disabled) {
      background-color: #dbeafe;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #475569;
    border: none;

    &:hover:not(:disabled) {
      background-color: #f1f5f9;
    }

    &:active:not(:disabled) {
      background-color: #e2e8f0;
    }
  `,
  destructive: css`
    background-color: #ef4444;
    color: #ffffff;
    border: none;

    &:hover:not(:disabled) {
      background-color: #dc2626;
    }

    &:active:not(:disabled) {
      background-color: #b91c1c;
    }
  `,
};

interface StyledButtonProps {
  $variant: NonNullable<ButtonProps['variant']>;
  $size: NonNullable<ButtonProps['size']>;
  $fullWidth: boolean;
  $loading: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 500;
  line-height: 1;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease;
  white-space: nowrap;
  user-select: none;

  /* Size styles */
  ${({ $size }) => sizeStyles[$size]}

  /* Variant styles */
  ${({ $variant }) => variantStyles[$variant]}

  /* Full width */
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  /* Focus styles */
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }

  /* Disabled styles */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Loading styles */
  ${({ $loading }) =>
    $loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;

export const Spinner = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  animation: ${spin} 600ms linear infinite;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-top-color: transparent;
  }
`;

export const ButtonContent = styled.span<{ $loading: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: inherit;
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};
`;
