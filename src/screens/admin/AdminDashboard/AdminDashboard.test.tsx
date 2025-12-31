import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AdminDashboard } from './AdminDashboard';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AdminDashboard', () => {
  it('renders dashboard title', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  it('renders stats cards', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getByText(/total revenue/i)).toBeInTheDocument();
    expect(screen.getByText(/total orders/i)).toBeInTheDocument();
    expect(screen.getByText(/total products/i)).toBeInTheDocument();
    expect(screen.getByText(/total customers/i)).toBeInTheDocument();
  });

  it('renders recent orders section', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getByText(/recent orders/i)).toBeInTheDocument();
  });

  it('renders top products section', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getByText(/top products/i)).toBeInTheDocument();
  });

  it('renders low stock alert', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getByText(/low stock alert/i)).toBeInTheDocument();
  });

  it('has view all links', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getAllByText(/view all/i).length).toBeGreaterThan(0);
  });

  it('shows revenue in INR', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getByText(/₹/)).toBeInTheDocument();
  });

  it('shows trend indicators', () => {
    renderWithRouter(<AdminDashboard />);

    expect(screen.getAllByText(/%/i).length).toBeGreaterThan(0);
  });
});
