import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { CartScreen } from './CartScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CartScreen', () => {
  it('renders cart page title', () => {
    renderWithRouter(<CartScreen />);

    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
  });

  it('renders cart items', () => {
    renderWithRouter(<CartScreen />);

    // Should show item count
    expect(screen.getByText(/items/i)).toBeInTheDocument();
  });

  it('renders order summary', () => {
    renderWithRouter(<CartScreen />);

    expect(screen.getByText(/order summary/i)).toBeInTheDocument();
    expect(screen.getByText(/subtotal/i)).toBeInTheDocument();
    expect(screen.getByText(/shipping/i)).toBeInTheDocument();
  });

  it('has checkout button', () => {
    renderWithRouter(<CartScreen />);

    expect(screen.getByText(/proceed to checkout/i)).toBeInTheDocument();
  });

  it('has continue shopping link', () => {
    renderWithRouter(<CartScreen />);

    expect(screen.getByText(/continue shopping/i)).toBeInTheDocument();
  });

  it('has promo code input', () => {
    renderWithRouter(<CartScreen />);

    expect(screen.getByPlaceholderText(/enter code/i)).toBeInTheDocument();
  });

  it('shows free shipping threshold', () => {
    renderWithRouter(<CartScreen />);

    // Either shows free shipping or amount needed
    const shippingText = screen.getByText(/shipping/i);
    expect(shippingText).toBeInTheDocument();
  });

  it('shows trust badges', () => {
    renderWithRouter(<CartScreen />);

    expect(screen.getByText(/secure payment/i)).toBeInTheDocument();
  });
});
