import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { OrderConfirmationScreen } from './OrderConfirmationScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter initialEntries={['/order/confirmation/ORD-001']}>
      <Routes>
        <Route path="/order/confirmation/:id" element={component} />
      </Routes>
    </MemoryRouter>
  );
};

describe('OrderConfirmationScreen', () => {
  it('renders success message', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/order confirmed/i)).toBeInTheDocument();
  });

  it('renders order number', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/ord-/i)).toBeInTheDocument();
  });

  it('has copy order ID button', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/copy/i)).toBeInTheDocument();
  });

  it('renders shipping address', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/shipping address/i)).toBeInTheDocument();
  });

  it('renders delivery information', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/delivery information/i)).toBeInTheDocument();
    expect(screen.getByText(/estimated delivery/i)).toBeInTheDocument();
  });

  it('renders order items', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/order items/i)).toBeInTheDocument();
  });

  it('shows what\'s next section', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/what's next/i)).toBeInTheDocument();
  });

  it('has track order button', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/track order/i)).toBeInTheDocument();
  });

  it('has continue shopping button', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/continue shopping/i)).toBeInTheDocument();
  });

  it('renders order total', () => {
    renderWithRouter(<OrderConfirmationScreen />);

    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByText(/₹/)).toBeInTheDocument();
  });
});
