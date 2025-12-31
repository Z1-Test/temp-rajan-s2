import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck, Lock } from 'lucide-react';

export function CheckoutLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      {/* Minimal Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            itsme<span className="text-primary">.fashion</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 px-4 py-8">
        <Outlet />
      </main>

      {/* Minimal Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span>Your payment information is secure</span>
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
