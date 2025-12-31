import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NotFoundScreen } from './NotFoundScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NotFoundScreen', () => {
  it('renders the 404 page', () => {
    renderWithRouter(<NotFoundScreen />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

  it('has link to home page', () => {
    renderWithRouter(<NotFoundScreen />);
    expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument();
  });

  it('has link to browse products', () => {
    renderWithRouter(<NotFoundScreen />);
    expect(screen.getByRole('link', { name: /browse products/i })).toBeInTheDocument();
  });
});
