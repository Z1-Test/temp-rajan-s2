import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AgentCard } from './AgentCard';
import type { AgentCardProps } from './AgentCard.types';

describe('AgentCard', () => {
  const defaultProps: AgentCardProps = {
    agentId: 'agent-123',
    name: 'Test Agent',
    status: 'active',
  };
  
  describe('Rendering', () => {
    it('renders agent name and status', () => {
      render(<AgentCard {...defaultProps} />);
      expect(screen.getByText('Test Agent')).toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });
    
    it('displays description when provided', () => {
      render(<AgentCard {...defaultProps} description="Test description" />);
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });
    
    it('displays version when provided', () => {
      render(<AgentCard {...defaultProps} version="1.0.0" />);
      expect(screen.getByText('v1.0.0')).toBeInTheDocument();
    });
    
    it('displays metrics when provided', () => {
      render(<AgentCard {...defaultProps} tasksCompleted={1247} uptime={99.8} />);
      expect(screen.getByText('1,247')).toBeInTheDocument();
      expect(screen.getByText('99.8%')).toBeInTheDocument();
    });
    
    it('displays capabilities as badges', () => {
      const capabilities = ['Python', 'ML', 'Data Analysis'];
      render(<AgentCard {...defaultProps} capabilities={capabilities} />);
      capabilities.forEach(cap => {
        expect(screen.getByText(cap)).toBeInTheDocument();
      });
    });
  });
  
  describe('Variants', () => {
    it('renders compact variant', () => {
      const { container } = render(<AgentCard {...defaultProps} variant="compact" />);
      expect(container.querySelector('.max-w-\\[300px\\]')).toBeInTheDocument();
    });
    
    it('renders detailed variant by default', () => {
      const { container } = render(<AgentCard {...defaultProps} />);
      expect(container.querySelector('.max-w-\\[400px\\]')).toBeInTheDocument();
    });
  });
  
  describe('Interactions', () => {
    it('calls onDeploy when deploy button clicked', async () => {
      const handleDeploy = jest.fn();
      render(<AgentCard {...defaultProps} status="inactive" onDeploy={handleDeploy} />);
      
      await userEvent.click(screen.getByRole('button', { name: /deploy/i }));
      expect(handleDeploy).toHaveBeenCalledTimes(1);
    });
    
    it('calls onViewDetails for active agent', async () => {
      const handleViewDetails = jest.fn();
      render(<AgentCard {...defaultProps} onViewDetails={handleViewDetails} />);
      
      await userEvent.click(screen.getByRole('button', { name: /view details/i }));
      expect(handleViewDetails).toHaveBeenCalledTimes(1);
    });
    
    it('disables deploy button when deploying', () => {
      render(<AgentCard {...defaultProps} status="deploying" onDeploy={() => {}} />);
      expect(screen.getByRole('button', { name: /deploying/i })).toBeDisabled();
    });
  });
  
  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<AgentCard {...defaultProps} description="Test desc" />);
      const article = screen.getByRole('article');
      expect(article).toHaveAttribute('aria-labelledby', 'agent-agent-123-name');
      expect(article).toHaveAttribute('aria-describedby', 'agent-agent-123-description');
    });
  });
});
