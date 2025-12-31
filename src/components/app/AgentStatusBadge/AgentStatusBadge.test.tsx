import { render, screen } from '@testing-library/react';
import { AgentStatusBadge } from './AgentStatusBadge';
import type { AgentStatus } from './AgentStatusBadge.types';

describe('AgentStatusBadge', () => {
  describe('Rendering', () => {
    it('renders with active status', () => {
      render(<AgentStatusBadge status="active" />);
      expect(screen.getByRole('status')).toHaveTextContent('Active');
    });
    
    it('renders with inactive status', () => {
      render(<AgentStatusBadge status="inactive" />);
      expect(screen.getByRole('status')).toHaveTextContent('Inactive');
    });
    
    it('renders with deploying status', () => {
      render(<AgentStatusBadge status="deploying" />);
      expect(screen.getByRole('status')).toHaveTextContent('Deploying');
    });
    
    it('renders with error status', () => {
      render(<AgentStatusBadge status="error" />);
      expect(screen.getByRole('status')).toHaveTextContent('Error');
    });
  });
  
  describe('Status Variants', () => {
    it.each<AgentStatus>(['active', 'inactive', 'deploying', 'error'])(
      'applies correct styles for %s status',
      (status) => {
        const { container } = render(<AgentStatusBadge status={status} />);
        const badge = container.firstChild;
        expect(badge).toHaveClass('inline-flex', 'items-center');
      }
    );
  });
  
  describe('Size Variants', () => {
    it('renders small size correctly', () => {
      const { container } = render(<AgentStatusBadge status="active" size="sm" />);
      expect(container.firstChild).toHaveClass('h-5', 'text-xs');
    });
    
    it('renders medium size correctly (default)', () => {
      const { container } = render(<AgentStatusBadge status="active" />);
      expect(container.firstChild).toHaveClass('h-6', 'text-sm');
    });
    
    it('renders large size correctly', () => {
      const { container } = render(<AgentStatusBadge status="active" size="lg" />);
      expect(container.firstChild).toHaveClass('h-7', 'text-base');
    });
  });
  
  describe('Icon Display', () => {
    it('shows icon by default', () => {
      const { container } = render(<AgentStatusBadge status="active" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
    
    it('hides icon when showIcon is false', () => {
      const { container } = render(<AgentStatusBadge status="active" showIcon={false} />);
      const svg = container.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });
  });
  
  describe('Dot Display', () => {
    it('shows dot for active status by default', () => {
      const { container } = render(<AgentStatusBadge status="active" />);
      const dot = container.querySelector('.rounded-full');
      expect(dot).toBeInTheDocument();
    });
    
    it('shows dot for deploying status by default', () => {
      const { container } = render(<AgentStatusBadge status="deploying" />);
      const dot = container.querySelector('.rounded-full');
      expect(dot).toBeInTheDocument();
    });
    
    it('does not show dot for inactive status by default', () => {
      const { container } = render(<AgentStatusBadge status="inactive" />);
      const dot = container.querySelector('.rounded-full');
      expect(dot).not.toBeInTheDocument();
    });
    
    it('hides dot when showDot is false', () => {
      const { container } = render(<AgentStatusBadge status="active" showDot={false} />);
      const dot = container.querySelector('.rounded-full');
      expect(dot).not.toBeInTheDocument();
    });
  });
  
  describe('Accessibility', () => {
    it('has proper ARIA label', () => {
      render(<AgentStatusBadge status="active" />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Agent status: Active');
    });
    
    it('marks decorative elements as aria-hidden', () => {
      const { container } = render(<AgentStatusBadge status="active" />);
      const icon = container.querySelector('svg');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });
  });
  
  describe('Custom className', () => {
    it('applies custom className', () => {
      const { container } = render(
        <AgentStatusBadge status="active" className="custom-class" />
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });
});
