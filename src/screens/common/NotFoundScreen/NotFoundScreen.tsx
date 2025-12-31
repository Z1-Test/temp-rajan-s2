import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NotFoundScreen() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      {/* 404 Illustration */}
      <div className="mb-8">
        <div className="relative">
          <span className="text-[150px] font-bold leading-none text-muted/30 sm:text-[200px]">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-primary/10 p-6">
              <Search className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Oops! The page you're looking for seems to have wandered off. It might have been moved,
        deleted, or maybe it never existed.
      </p>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products">
            Browse Products
          </Link>
        </Button>
      </div>

      {/* Helpful Links */}
      <div className="mt-12 rounded-lg border bg-muted/30 p-6">
        <h2 className="mb-4 font-semibold">Looking for something?</h2>
        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <Link to="/products/skincare" className="text-primary hover:underline">
            Skincare
          </Link>
          <Link to="/products/haircare" className="text-primary hover:underline">
            Haircare
          </Link>
          <Link to="/products/makeup" className="text-primary hover:underline">
            Makeup
          </Link>
          <Link to="/products/body" className="text-primary hover:underline">
            Body Care
          </Link>
        </div>
      </div>

      {/* Go Back */}
      <button
        onClick={() => window.history.back()}
        className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Go back to previous page
      </button>
    </div>
  );
}
