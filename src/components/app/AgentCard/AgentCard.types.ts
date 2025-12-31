import type { AgentStatus } from '../AgentStatusBadge/AgentStatusBadge.types';

/**
 * Props for AgentCard component
 */
export interface AgentCardProps {
  /**
   * Unique identifier for the agent
   */
  agentId: string;
  
  /**
   * Display name of the agent
   */
  name: string;
  
  /**
   * Brief description of agent capabilities
   */
  description?: string;
  
  /**
   * Current operational status
   */
  status: AgentStatus;
  
  /**
   * Agent version string
   */
  version?: string;
  
  /**
   * Number of tasks completed
   */
  tasksCompleted?: number;
  
  /**
   * Uptime percentage
   */
  uptime?: number;
  
  /**
   * Agent capabilities/skills
   */
  capabilities?: string[];
  
  /**
   * Visual variant
   * @default 'detailed'
   */
  variant?: 'compact' | 'detailed';
  
  /**
   * Called when deploy button is clicked
   */
  onDeploy?: () => void;
  
  /**
   * Called when view details action is triggered
   */
  onViewDetails?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
