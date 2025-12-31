import type { LucideIcon } from 'lucide-react';

export interface EmptyStateProps {
  /**
   * Icon to display
   */
  icon?: LucideIcon;
  
  /**
   * Title text
   */
  title: string;
  
  /**
   * Description text
   */
  description?: string;
  
  /**
   * Primary action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
