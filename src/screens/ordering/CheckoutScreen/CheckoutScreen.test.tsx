import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CheckoutScreen } from './CheckoutScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CheckoutScreen', () => {
  it('renders shipping address section', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/shipping address/i)).toBeInTheDocument();
  });

  it('renders saved addresses', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/office/i)).toBeInTheDocument();
  });

  it('has add new address option', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/add new address/i)).toBeInTheDocument();
  });

  it('renders payment section', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/payment method/i)).toBeInTheDocument();
  });

  it('renders order summary', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/order summary/i)).toBeInTheDocument();
  });

  it('shows payment options', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/credit \/ debit card/i)).toBeInTheDocument();
    expect(screen.getByText(/upi/i)).toBeInTheDocument();
    expect(screen.getByText(/net banking/i)).toBeInTheDocument();
  });

  it('has place order button', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/place order/i)).toBeInTheDocument();
  });

  it('shows total amount', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/₹/)).toBeInTheDocument();
  });

  it('mentions Cashfree payment', () => {
    renderWithRouter(<CheckoutScreen />);

    expect(screen.getByText(/cashfree/i)).toBeInTheDocument();
  });
});
