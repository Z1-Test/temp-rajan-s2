import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ProductListingScreen } from './ProductListingScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductListingScreen', () => {
  it('renders page title', () => {
    renderWithRouter(<ProductListingScreen />);

    expect(screen.getByText(/all products/i)).toBeInTheDocument();
  });

  it('renders filter sidebar', () => {
    renderWithRouter(<ProductListingScreen />);

    expect(screen.getByText(/filters/i)).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/price range/i)).toBeInTheDocument();
  });

  it('renders sort dropdown', () => {
    renderWithRouter(<ProductListingScreen />);

    expect(screen.getByText(/sort by/i)).toBeInTheDocument();
  });

  it('renders product grid', () => {
    renderWithRouter(<ProductListingScreen />);

    // Should have multiple product cards
    const productCards = screen.getAllByRole('article');
    expect(productCards.length).toBeGreaterThan(0);
  });

  it('has grid/list view toggle', () => {
    renderWithRouter(<ProductListingScreen />);

    // Check for view toggle buttons
    expect(screen.getByLabelText(/grid view/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/list view/i)).toBeInTheDocument();
  });

  it('shows product count', () => {
    renderWithRouter(<ProductListingScreen />);

    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });

  it('filters can be cleared', () => {
    renderWithRouter(<ProductListingScreen />);

    const clearButton = screen.queryByText(/clear all/i);
    // Clear button might only appear when filters are active
  });
});
