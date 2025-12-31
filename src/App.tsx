import { Toaster } from '@/components/ui/sonner';
import Router from '@/router';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router />
          <Toaster position="top-right" richColors />
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
