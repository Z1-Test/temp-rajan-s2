import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ForgotPasswordScreen } from './ForgotPasswordScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ForgotPasswordScreen', () => {
  it('renders the forgot password form', () => {
    renderWithRouter(<ForgotPasswordScreen />);
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
  });

  it('has link back to login', () => {
    renderWithRouter(<ForgotPasswordScreen />);
    expect(screen.getByText(/back to sign in/i)).toBeInTheDocument();
  });
});
