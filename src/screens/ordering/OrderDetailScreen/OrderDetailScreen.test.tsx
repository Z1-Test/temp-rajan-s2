import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { OrderDetailScreen } from './OrderDetailScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('OrderDetailScreen', () => {
  it('renders the order detail page', () => {
    renderWithRouter(<OrderDetailScreen />);
    expect(screen.getByText(/order tracking/i)).toBeInTheDocument();
    expect(screen.getByText(/order items/i)).toBeInTheDocument();
    expect(screen.getByText(/order summary/i)).toBeInTheDocument();
  });

  it('displays shipping address', () => {
    renderWithRouter(<OrderDetailScreen />);
    expect(screen.getByText(/shipping address/i)).toBeInTheDocument();
  });

  it('shows order timeline', () => {
    renderWithRouter(<OrderDetailScreen />);
    expect(screen.getByText(/order placed/i)).toBeInTheDocument();
    expect(screen.getByText(/shipped/i)).toBeInTheDocument();
  });
});
