import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { OrderManagement } from './OrderManagement';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('OrderManagement', () => {
  it('renders page title', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByText(/orders/i)).toBeInTheDocument();
  });

  it('has export button', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByText(/export/i)).toBeInTheDocument();
  });

  it('renders search input', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByPlaceholderText(/search orders/i)).toBeInTheDocument();
  });

  it('renders status filter', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByText(/all status/i)).toBeInTheDocument();
  });

  it('renders stats cards', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByText(/total orders/i)).toBeInTheDocument();
    expect(screen.getByText(/pending/i)).toBeInTheDocument();
    expect(screen.getByText(/processing/i)).toBeInTheDocument();
    expect(screen.getByText(/shipped/i)).toBeInTheDocument();
    expect(screen.getByText(/delivered/i)).toBeInTheDocument();
  });

  it('renders orders table', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByText(/order/i)).toBeInTheDocument();
    expect(screen.getByText(/customer/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByText(/payment/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
  });

  it('has select all checkbox', () => {
    renderWithRouter(<OrderManagement />);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  it('shows order IDs as links', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getAllByText(/ord-/i).length).toBeGreaterThan(0);
  });

  it('shows totals in INR', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getAllByText(/₹/i).length).toBeGreaterThan(0);
  });

  it('has pagination', () => {
    renderWithRouter(<OrderManagement />);

    expect(screen.getByText(/showing/i)).toBeInTheDocument();
  });
});
