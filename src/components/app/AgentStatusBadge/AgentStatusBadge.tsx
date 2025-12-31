import React from 'react';
import { CheckCircle, Circle, Loader2, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AgentStatusBadgeProps, AgentStatus } from './AgentStatusBadge.types';

/**
 * Display visual status indicator for agent operational state
 * 
 * @example
 * ```tsx
 * <AgentStatusBadge status="active" />
 * <AgentStatusBadge status="error" size="lg" />
 * ```
 */
export function AgentStatusBadge({
  status,
  size = 'md',
  showIcon = true,
  showDot = status === 'active' || status === 'deploying',
  className,
}: AgentStatusBadgeProps) {
  const statusConfig = React.useMemo(() => {
    const configs: Record<AgentStatus, {
      label: string;
      icon: React.ElementType;
      colorClass: string;
      dotClass: string;
    }> = {
      active: {
        label: 'Active',
        icon: CheckCircle,
        colorClass: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800',
        dotClass: 'bg-green-500 animate-pulse',
      },
      inactive: {
        label: 'Inactive',
        icon: Circle,
        colorClass: 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700',
        dotClass: 'bg-gray-400',
      },
      deploying: {
        label: 'Deploying',
        icon: Loader2,
        colorClass: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800',
        dotClass: 'bg-amber-500 animate-pulse',
      },
      error: {
        label: 'Error',
        icon: AlertCircle,
        colorClass: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800',
        dotClass: 'bg-red-500',
      },
    };
    
    return configs[status];
  }, [status]);
  
  const sizeClasses = {
    sm: 'h-5 text-xs px-2 gap-1',
    md: 'h-6 text-sm px-3 gap-1.5',
    lg: 'h-7 text-base px-4 gap-2',
  };
  
  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };
  
  const Icon = statusConfig.icon;
  const iconSize = iconSizes[size];
  
  return (
    <Badge
      variant="outline"
      className={cn(
        'inline-flex items-center font-medium border',
        sizeClasses[size],
        statusConfig.colorClass,
        className
      )}
      role="status"
      aria-label={`Agent status: ${statusConfig.label}`}
    >
      {showDot && (
        <span
          className={cn(
            'inline-block w-2 h-2 rounded-full',
            statusConfig.dotClass
          )}
          aria-hidden="true"
        />
      )}
      
      {showIcon && (
        <Icon
          size={iconSize}
          className={cn(
            status === 'deploying' && 'animate-spin'
          )}
          aria-hidden="true"
        />
      )}
      
      <span>{statusConfig.label}</span>
    </Badge>
  );
}
