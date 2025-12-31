import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Package, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';

export type OrderStatusType = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

export interface OrderStatusProps {
  status: OrderStatusType;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const statusConfig: Record<OrderStatusType, {
  label: string;
  icon: typeof Package;
  variant: 'default' | 'secondary' | 'destructive' | 'outline';
  colorClass: string;
}> = {
  pending: {
    label: 'Pending',
    icon: Clock,
    variant: 'secondary',
    colorClass: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  confirmed: {
    label: 'Confirmed',
    icon: CheckCircle,
    variant: 'default',
    colorClass: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  processing: {
    label: 'Processing',
    icon: Package,
    variant: 'secondary',
    colorClass: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  shipped: {
    label: 'Shipped',
    icon: Truck,
    variant: 'default',
    colorClass: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  delivered: {
    label: 'Delivered',
    icon: CheckCircle,
    variant: 'default',
    colorClass: 'text-green-600 bg-green-50 border-green-200',
  },
  cancelled: {
    label: 'Cancelled',
    icon: XCircle,
    variant: 'destructive',
    colorClass: 'text-red-600 bg-red-50 border-red-200',
  },
};

export function OrderStatus({ status, size = 'md', showIcon = true, className }: OrderStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        'inline-flex items-center gap-1.5 font-medium',
        config.colorClass,
        sizeClasses[size],
        className
      )}
    >
      {showIcon && <Icon className={iconSizes[size]} />}
      {config.label}
    </Badge>
  );
}
