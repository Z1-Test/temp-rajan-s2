import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';

// Layouts
import { RootLayout } from '@/layouts/RootLayout';
import { MarketingLayout } from '@/layouts/MarketingLayout';
import { CatalogLayout } from '@/layouts/CatalogLayout';
import { AuthLayout } from '@/layouts/AuthLayout';
import { AccountLayout } from '@/layouts/AccountLayout';
import { CheckoutLayout } from '@/layouts/CheckoutLayout';
import { AdminLayout } from '@/layouts/AdminLayout';

// Identity Screens
import { LoginScreen } from '@/screens/identity/LoginScreen';
import { RegisterScreen } from '@/screens/identity/RegisterScreen';
import { ProfileScreen } from '@/screens/identity/ProfileScreen';
import { AddressesScreen } from '@/screens/identity/AddressesScreen';
import { ForgotPasswordScreen } from '@/screens/identity/ForgotPasswordScreen';

// Catalog Screens
import { HomeScreen } from '@/screens/catalog/HomeScreen';
import { ProductListingScreen } from '@/screens/catalog/ProductListingScreen';
import { ProductDetailScreen } from '@/screens/catalog/ProductDetailScreen';
import { WishlistScreen } from '@/screens/catalog/WishlistScreen';
import { SearchResultsScreen } from '@/screens/catalog/SearchResultsScreen';

// Ordering Screens
import { CartScreen } from '@/screens/ordering/CartScreen';
import { CheckoutScreen } from '@/screens/ordering/CheckoutScreen';
import { OrderConfirmationScreen } from '@/screens/ordering/OrderConfirmationScreen';
import { OrderHistoryScreen } from '@/screens/ordering/OrderHistoryScreen';
import { OrderDetailScreen } from '@/screens/ordering/OrderDetailScreen';

// Admin Screens
import { AdminDashboard } from '@/screens/admin/AdminDashboard';
import { ProductManagement } from '@/screens/admin/ProductManagement';
import { OrderManagement } from '@/screens/admin/OrderManagement';

// Common Screens
import { NotFoundScreen } from '@/screens/common/NotFoundScreen';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      // Marketing / Public routes (with marketing layout)
      {
        element: <MarketingLayout />,
        children: [
          { index: true, element: <HomeScreen /> },
        ],
      },

      // Catalog routes (with catalog layout)
      {
        element: <CatalogLayout />,
        children: [
          { path: 'products', element: <ProductListingScreen /> },
          { path: 'products/:category', element: <ProductListingScreen /> },
          { path: 'product/:slug', element: <ProductDetailScreen /> },
        ],
      },

      // Auth routes (centered layout)
      {
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <LoginScreen /> },
          { path: 'register', element: <RegisterScreen /> },
          { path: 'forgot-password', element: <ForgotPasswordScreen /> },
        ],
      },

      // Account routes (with account sidebar)
      {
        path: 'account',
        element: <AccountLayout />,
        children: [
          { index: true, element: <Navigate to="profile" replace /> },
          { path: 'profile', element: <ProfileScreen /> },
          { path: 'addresses', element: <AddressesScreen /> },
          { path: 'orders', element: <OrderHistoryScreen /> },
          { path: 'orders/:id', element: <OrderDetailScreen /> },
          { path: 'wishlist', element: <WishlistScreen /> },
        ],
      },

      // Cart (standard layout)
      {
        path: 'cart',
        element: <CartScreen />,
      },

      // Search results
      {
        path: 'search',
        element: <SearchResultsScreen />,
      },

      // Order routes (standard layout)
      {
        path: 'order',
        children: [
          { path: ':id', element: <OrderConfirmationScreen /> },
          { path: 'confirmation/:id', element: <OrderConfirmationScreen /> },
        ],
      },
    ],
  },

  // Checkout routes (minimal layout with stepper)
  {
    path: '/checkout',
    element: <CheckoutLayout />,
    children: [
      { index: true, element: <CheckoutScreen /> },
    ],
  },

  // Admin routes (separate layout with admin sidebar)
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'products', element: <ProductManagement /> },
      { path: 'orders', element: <OrderManagement /> },
    ],
  },

  // 404 fallback
  {
    path: '*',
    element: (
      <RootLayout>
        <NotFoundScreen />
      </RootLayout>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
