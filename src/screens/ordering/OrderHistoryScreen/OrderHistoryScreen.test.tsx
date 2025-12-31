import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { OrderHistoryScreen } from './OrderHistoryScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('OrderHistoryScreen', () => {
  it('renders page title', () => {
    renderWithRouter(<OrderHistoryScreen />);

    expect(screen.getByText(/order history/i)).toBeInTheDocument();
  });

  it('renders search input', () => {
    renderWithRouter(<OrderHistoryScreen />);

    expect(screen.getByPlaceholderText(/search by order id/i)).toBeInTheDocument();
  });

  it('renders status filter', () => {
    renderWithRouter(<OrderHistoryScreen />);

    expect(screen.getByText(/all orders/i)).toBeInTheDocument();
  });

  it('renders order list', () => {
    renderWithRouter(<OrderHistoryScreen />);

    // Should have order IDs visible
    expect(screen.getByText(/ord-/i)).toBeInTheDocument();
  });

  it('shows order status badges', () => {
    renderWithRouter(<OrderHistoryScreen />);

    // At least one status badge should be visible
    const statusBadges = screen.getAllByText(/shipped|delivered|pending|confirmed|processing|cancelled/i);
    expect(statusBadges.length).toBeGreaterThan(0);
  });

  it('has view details button', () => {
    renderWithRouter(<OrderHistoryScreen />);

    expect(screen.getAllByText(/view details/i).length).toBeGreaterThan(0);
  });

  it('shows order totals', () => {
    renderWithRouter(<OrderHistoryScreen />);

    expect(screen.getAllByText(/₹/i).length).toBeGreaterThan(0);
  });

  it('shows order dates', () => {
    renderWithRouter(<OrderHistoryScreen />);

    // Dates should be formatted
    expect(screen.getByText(/dec/i)).toBeInTheDocument();
  });
});
