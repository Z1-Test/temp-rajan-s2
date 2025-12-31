import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { LoadingSpinnerProps } from './LoadingSpinner.types';

/**
 * Loading spinner with optional text
 */
export function LoadingSpinner({
  size = 'md',
  text,
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  return (
    <div
      className={cn('flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-label={text || 'Loading'}
    >
      <Loader2
        className={cn('animate-spin text-muted-foreground', sizeClasses[size])}
        aria-hidden="true"
      />
      {text && (
        <p className="text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  );
}
