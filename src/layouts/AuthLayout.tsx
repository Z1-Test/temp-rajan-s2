import { Outlet, Link } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 py-12">
      <Link to="/" className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          itsme<span className="text-primary">.fashion</span>
        </h1>
      </Link>
      <div className="w-full max-w-md">
        <Outlet />
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Premium Beauty • Clean Ingredients • Cruelty-Free
      </p>
    </div>
  );
}
