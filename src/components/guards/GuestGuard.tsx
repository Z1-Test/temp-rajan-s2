import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface GuestGuardProps {
    children: React.ReactNode;
}

/**
 * GuestGuard - Protects routes that should only be accessible to guests (non-authenticated users)
 * Redirects authenticated users away from login/register pages
 */
export function GuestGuard({ children }: GuestGuardProps) {
    const { isAuthenticated, isLoading, user } = useAuth();
    const location = useLocation();

    // Show loading spinner while checking auth state
    if (isLoading) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    // If authenticated, redirect to intended destination or appropriate default
    if (isAuthenticated) {
        // Check if there's a saved destination
        const from = (location.state as { from?: { pathname: string } })?.from?.pathname;

        // Redirect admins to admin dashboard, customers to their destination or home
        if (user?.role === 'admin') {
            return <Navigate to={from || '/admin/dashboard'} replace />;
        }

        return <Navigate to={from || '/'} replace />;
    }

    return <>{children}</>;
}
