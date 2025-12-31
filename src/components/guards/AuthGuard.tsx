import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
    children: React.ReactNode;
    requiredRole?: 'customer' | 'admin';
    redirectTo?: string;
}

/**
 * AuthGuard - Protects routes that require authentication
 * Redirects to login if not authenticated, preserving the intended destination
 */
export function AuthGuard({
    children,
    requiredRole,
    redirectTo = '/login',
}: AuthGuardProps) {
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

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    // Check role if required
    if (requiredRole && user?.role !== requiredRole) {
        // Redirect admins to admin dashboard, customers to home
        const fallbackRoute = user?.role === 'admin' ? '/admin/dashboard' : '/';
        return <Navigate to={fallbackRoute} replace />;
    }

    return <>{children}</>;
}
