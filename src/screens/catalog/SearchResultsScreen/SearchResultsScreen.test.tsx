import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchResultsScreen } from './SearchResultsScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('SearchResultsScreen', () => {
  it('renders the search page', () => {
    renderWithRouter(<SearchResultsScreen />);
    expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('shows popular searches when no query', () => {
    renderWithRouter(<SearchResultsScreen />);
    expect(screen.getByText(/try searching for/i)).toBeInTheDocument();
  });
});
