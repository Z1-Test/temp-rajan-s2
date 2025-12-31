import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ErrorStateProps } from './ErrorState.types';

export function ErrorState({
    title,
    description,
    icon: Icon = AlertCircle,
    onRetry,
    className,
}: ErrorStateProps) {
    return (
        <div className={cn('flex flex-col items-center justify-center py-12 px-4 text-center', className)}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 mb-4">
                <Icon className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            {description && (
                <p className="text-sm text-muted-foreground max-w-md mb-6">{description}</p>
            )}
            {onRetry && (
                <Button onClick={onRetry} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                </Button>
            )}
        </div>
    );
}
