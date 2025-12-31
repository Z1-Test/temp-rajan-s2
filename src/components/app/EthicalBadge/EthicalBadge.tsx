import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type EthicalBadgeType = 'cruelty-free' | 'vegan' | 'paraben-free' | 'organic' | 'natural';

export interface EthicalBadgeProps {
  type: EthicalBadgeType;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const badgeConfig: Record<EthicalBadgeType, {
  label: string;
  icon: string;
  colorClass: string;
}> = {
  'cruelty-free': {
    label: 'Cruelty-Free',
    icon: '🐰',
    colorClass: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100',
  },
  'vegan': {
    label: 'Vegan',
    icon: '🌱',
    colorClass: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
  },
  'paraben-free': {
    label: 'Paraben-Free',
    icon: '✓',
    colorClass: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
  },
  'organic': {
    label: 'Organic',
    icon: '🍃',
    colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
  },
  'natural': {
    label: 'Natural',
    icon: '🌿',
    colorClass: 'bg-lime-50 text-lime-700 border-lime-200 hover:bg-lime-100',
  },
};

export function EthicalBadge({ type, size = 'md', showIcon = true, className }: EthicalBadgeProps) {
  const config = badgeConfig[type];

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        'inline-flex items-center gap-1 font-medium',
        config.colorClass,
        sizeClasses[size],
        className
      )}
    >
      {showIcon && <span>{config.icon}</span>}
      {config.label}
    </Badge>
  );
}
