import { Outlet, Link } from 'react-router-dom';
import { ShieldCheck, Lock, Check } from 'lucide-react';
import { CheckoutProvider, useCheckout } from '@/contexts/CheckoutContext';
import { cn } from '@/lib/utils';

function CheckoutStepper() {
  const { currentStep } = useCheckout();
  const steps = [
    { id: 1, label: 'Shipping' },
    { id: 2, label: 'Payment' },
    { id: 3, label: 'Confirmation' },
  ];

  return (
    <div className="flex items-center justify-center py-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300',
                currentStep === step.id
                  ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                  : currentStep > step.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
              )}
            >
              {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
            </div>
            <span
              className={cn(
                'mt-2 text-[10px] font-bold uppercase tracking-wider',
                currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                'mx-4 mb-4 h-[2px] w-12 sm:w-20 transition-all duration-500',
                currentStep > step.id ? 'bg-primary' : 'bg-muted'
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function CheckoutLayout() {
  return (
    <CheckoutProvider>
      <div className="flex min-h-screen flex-col bg-muted/20">
        <header className="border-b bg-background sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between px-4 py-2">
            <Link to="/" className="text-xl font-bold tracking-tight">
              itsme<span className="text-primary">.fashion</span>
            </Link>
            <CheckoutStepper />
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              <Lock className="h-3 w-3" />
              <span>Secure</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto flex-1 px-4 py-8">
          <Outlet />
        </main>

        <footer className="border-t bg-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>100% Secure Transaction</span>
              </div>
              <div className="flex gap-6 text-xs font-medium uppercase tracking-tighter">
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
                <Link to="/shipping" className="hover:text-primary transition-colors">Shipping</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CheckoutProvider>
  );
}
