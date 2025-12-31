import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ProductManagement } from './ProductManagement';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductManagement', () => {
  it('renders page title', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByText(/products/i)).toBeInTheDocument();
  });

  it('has add product button', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByText(/add product/i)).toBeInTheDocument();
  });

  it('renders search input', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument();
  });

  it('renders category filter', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByText(/all categories/i)).toBeInTheDocument();
  });

  it('renders status filter', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByText(/all status/i)).toBeInTheDocument();
  });

  it('renders stats cards', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByText(/total products/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByText(/low stock/i)).toBeInTheDocument();
    expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
  });

  it('renders products table', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getByText(/product/i)).toBeInTheDocument();
    expect(screen.getByText(/sku/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/stock/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
  });

  it('has select all checkbox', () => {
    renderWithRouter(<ProductManagement />);

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  it('shows prices in INR', () => {
    renderWithRouter(<ProductManagement />);

    expect(screen.getAllByText(/₹/i).length).toBeGreaterThan(0);
  });
});
