import { Outlet } from 'react-router-dom';
import { Header } from '@/components/app/Header';
import { Footer } from '@/components/app/Footer';

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
