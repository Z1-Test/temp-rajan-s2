import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ProductDetailScreen } from './ProductDetailScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductDetailScreen', () => {
  it('renders product name and price', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByText(/rose glow serum/i)).toBeInTheDocument();
    expect(screen.getByText(/₹/)).toBeInTheDocument();
  });

  it('renders product images', () => {
    renderWithRouter(<ProductDetailScreen />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('has add to cart button', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  it('has wishlist button', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByRole('button', { name: /add to wishlist/i })).toBeInTheDocument();
  });

  it('renders quantity selector', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
  });

  it('renders product tabs', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByText(/details/i)).toBeInTheDocument();
    expect(screen.getByText(/ingredients/i)).toBeInTheDocument();
    expect(screen.getByText(/how to use/i)).toBeInTheDocument();
  });

  it('renders ethical badges', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByText(/cruelty-free/i)).toBeInTheDocument();
  });

  it('renders related products section', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByText(/you may also like/i)).toBeInTheDocument();
  });

  it('shows stock status', () => {
    renderWithRouter(<ProductDetailScreen />);

    expect(screen.getByText(/in stock/i)).toBeInTheDocument();
  });
});
