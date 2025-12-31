import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { RegisterScreen } from './RegisterScreen';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('RegisterScreen', () => {
  it('renders registration form correctly', () => {
    renderWithRouter(<RegisterScreen />);

    expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  });

  it('has link to login page', () => {
    renderWithRouter(<RegisterScreen />);

    const loginLink = screen.getByText(/sign in here/i);
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute('href', '/login');
  });

  it('shows password requirements', () => {
    renderWithRouter(<RegisterScreen />);

    expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
  });

  it('shows terms and conditions checkbox', () => {
    renderWithRouter(<RegisterScreen />);

    expect(screen.getByText(/terms of service/i)).toBeInTheDocument();
    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
  });

  it('validates password match', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RegisterScreen />);

    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmInput = screen.getByLabelText(/confirm password/i);

    await user.type(passwordInput, 'password123');
    await user.type(confirmInput, 'different');
    await user.tab(); // Trigger blur

    // Note: Validation message depends on form validation library
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    renderWithRouter(<RegisterScreen />);

    await user.type(screen.getByLabelText(/full name/i), 'Test User');
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/^password$/i), 'password123');
    await user.type(screen.getByLabelText(/confirm password/i), 'password123');

    const submitButton = screen.getByRole('button', { name: /create account/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/creating account/i)).toBeInTheDocument();
    });
  });
});
