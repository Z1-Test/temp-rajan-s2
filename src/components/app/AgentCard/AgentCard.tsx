import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AgentStatusBadge } from '../AgentStatusBadge';
import { cn } from '@/lib/utils';
import type { AgentCardProps } from './AgentCard.types';

/**
 * Display summary information for a single AI agent
 * 
 * @example
 * ```tsx
 * <AgentCard
 *   agentId="agent-123"
 *   name="Data Analyzer"
 *   description="Analyzes datasets"
 *   status="active"
 *   onDeploy={handleDeploy}
 * />
 * ```
 */
export function AgentCard({
  agentId,
  name,
  description,
  status,
  version,
  tasksCompleted,
  uptime,
  capabilities = [],
  variant = 'detailed',
  onDeploy,
  onViewDetails,
  className,
}: AgentCardProps) {
  const isCompact = variant === 'compact';
  
  return (
    <Card
      className={cn(
        'agent-card flex flex-col transition-all hover:shadow-md',
        isCompact ? 'max-w-[300px]' : 'max-w-[400px]',
        className
      )}
      role="article"
      aria-labelledby={`agent-${agentId}-name`}
      aria-describedby={description ? `agent-${agentId}-description` : undefined}
    >
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3
              id={`agent-${agentId}-name`}
              className="font-semibold text-lg leading-tight truncate"
            >
              {name}
            </h3>
            {version && (
              <p className="text-sm text-muted-foreground">v{version}</p>
            )}
          </div>
          <AgentStatusBadge status={status} size="sm" />
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 space-y-3">
        {description && (
          <p
            id={`agent-${agentId}-description`}
            className={cn(
              'text-sm text-muted-foreground',
              isCompact ? 'line-clamp-2' : 'line-clamp-3'
            )}
          >
            {description}
          </p>
        )}
        
        {!isCompact && (tasksCompleted !== undefined || uptime !== undefined) && (
          <div className="grid grid-cols-2 gap-2 text-sm">
            {tasksCompleted !== undefined && (
              <div className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-muted-foreground">Tasks:</span>
                <span className="font-medium">{tasksCompleted.toLocaleString()}</span>
              </div>
            )}
            {uptime !== undefined && (
              <div>
                <span className="text-muted-foreground">Uptime:</span>{' '}
                <span className="font-medium">{uptime}%</span>
              </div>
            )}
          </div>
        )}
        
        {capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {capabilities.slice(0, isCompact ? 3 : 5).map((capability, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {capability}
              </Badge>
            ))}
            {capabilities.length > (isCompact ? 3 : 5) && (
              <Badge variant="secondary" className="text-xs">
                +{capabilities.length - (isCompact ? 3 : 5)}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {status === 'active' && onViewDetails ? (
          <Button
            onClick={onViewDetails}
            variant="default"
            className="flex-1"
            size="sm"
          >
            View Details
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Button>
        ) : onDeploy ? (
          <Button
            onClick={onDeploy}
            variant="default"
            className="flex-1"
            size="sm"
            disabled={status === 'deploying'}
          >
            {status === 'deploying' ? 'Deploying...' : 'Deploy'}
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
