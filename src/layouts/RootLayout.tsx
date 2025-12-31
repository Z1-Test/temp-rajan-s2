import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/app/Header';
import { Footer } from '@/components/app/Footer';

interface RootLayoutProps {
  children?: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Header />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
