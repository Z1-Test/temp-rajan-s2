export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  /**
   * Optional text to display below spinner
   */
  text?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
