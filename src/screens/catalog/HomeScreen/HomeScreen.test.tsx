import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { HomeScreen } from './HomeScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomeScreen', () => {
  it('renders hero section', () => {
    renderWithRouter(<HomeScreen />);

    expect(screen.getByText(/discover your natural beauty/i)).toBeInTheDocument();
    expect(screen.getByText(/shop now/i)).toBeInTheDocument();
  });

  it('renders feature badges', () => {
    renderWithRouter(<HomeScreen />);

    expect(screen.getByText(/free shipping/i)).toBeInTheDocument();
    expect(screen.getByText(/cruelty-free/i)).toBeInTheDocument();
    expect(screen.getByText(/clean ingredients/i)).toBeInTheDocument();
  });

  it('renders category cards', () => {
    renderWithRouter(<HomeScreen />);

    expect(screen.getByText(/skincare/i)).toBeInTheDocument();
    expect(screen.getByText(/haircare/i)).toBeInTheDocument();
    expect(screen.getByText(/makeup/i)).toBeInTheDocument();
  });

  it('renders featured products section', () => {
    renderWithRouter(<HomeScreen />);

    expect(screen.getByText(/trending products/i)).toBeInTheDocument();
  });

  it('renders call to action section', () => {
    renderWithRouter(<HomeScreen />);

    expect(screen.getByText(/join the beauty revolution/i)).toBeInTheDocument();
  });

  it('has links to product pages', () => {
    renderWithRouter(<HomeScreen />);

    const shopLinks = screen.getAllByText(/shop now/i);
    expect(shopLinks.length).toBeGreaterThan(0);
  });
});
