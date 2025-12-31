import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
interface User {
    id: string;
    email: string;
    name: string;
    phone?: string;
    avatar?: string;
    role: 'customer' | 'admin';
    isVerified: boolean;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
    phone?: string;
}

interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<User>;
    register: (data: RegisterData) => Promise<User>;
    logout: () => void;
    resetPassword: (email: string) => Promise<void>;
    clearError: () => void;
    updateProfile: (data: Partial<User>) => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock API functions (replace with real API calls)
async function loginAPI(email: string, password: string): Promise<{ user: User; token: string }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock admin login
    if (email === 'admin@itsme.fashion' && password === 'admin123') {
        return {
            user: {
                id: 'admin-1',
                email: 'admin@itsme.fashion',
                name: 'Admin User',
                role: 'admin',
                isVerified: true,
            },
            token: 'mock-admin-token-xyz',
        };
    }

    // Mock customer login
    if (password === 'password123') {
        return {
            user: {
                id: 'user-' + Math.random().toString(36).substr(2, 9),
                email,
                name: email.split('@')[0],
                role: 'customer',
                isVerified: true,
            },
            token: 'mock-token-' + Math.random().toString(36).substr(2, 9),
        };
    }

    throw new Error('Invalid email or password');
}

async function registerAPI(data: RegisterData): Promise<{ user: User; token: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        user: {
            id: 'user-' + Math.random().toString(36).substr(2, 9),
            email: data.email,
            name: data.name,
            phone: data.phone,
            role: 'customer',
            isVerified: false,
        },
        token: 'mock-token-' + Math.random().toString(36).substr(2, 9),
    };
}

async function validateToken(_token: string): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
        return JSON.parse(storedUser);
    }
    throw new Error('Invalid token');
}

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: true,
        error: null,
    });

    // Check for existing session on mount
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('auth_token');
            if (token) {
                try {
                    const user = await validateToken(token);
                    setState({ user, isAuthenticated: true, isLoading: false, error: null });
                } catch {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_user');
                    setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
                }
            } else {
                setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
            }
        };
        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            const { user, token } = await loginAPI(email, password);
            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_user', JSON.stringify(user));
            setState({ user, isAuthenticated: true, isLoading: false, error: null });
            return user;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : 'Login failed',
            }));
            throw error;
        }
    };

    const register = async (data: RegisterData) => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            const { user, token } = await registerAPI(data);
            localStorage.setItem('auth_token', token);
            localStorage.setItem('auth_user', JSON.stringify(user));
            setState({ user, isAuthenticated: true, isLoading: false, error: null });
            return user;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : 'Registration failed',
            }));
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
    };

    const resetPassword = async (_email: string) => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setState((prev) => ({ ...prev, isLoading: false }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : 'Password reset failed',
            }));
            throw error;
        }
    };

    const clearError = () => {
        setState((prev) => ({ ...prev, error: null }));
    };

    const updateProfile = async (data: Partial<User>) => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            const updatedUser = { ...state.user, ...data } as User;
            localStorage.setItem('auth_user', JSON.stringify(updatedUser));
            setState((prev) => ({ ...prev, user: updatedUser, isLoading: false }));
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : 'Profile update failed',
            }));
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                register,
                logout,
                resetPassword,
                clearError,
                updateProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Hook to use auth context
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export type { User, AuthState, RegisterData, AuthContextType };
