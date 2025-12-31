/**
 * Agent operational status types
 */
export type AgentStatus = 'active' | 'inactive' | 'deploying' | 'error';

/**
 * Props for AgentStatusBadge component
 */
export interface AgentStatusBadgeProps {
  /**
   * Current operational status of the agent
   */
  status: AgentStatus;
  
  /**
   * Size variant of the badge
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Whether to show status icon
   * @default true
   */
  showIcon?: boolean;
  
  /**
   * Whether to show animated status dot
   * @default true for 'active' and 'deploying'
   */
  showDot?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
