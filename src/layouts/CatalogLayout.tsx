import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '@/components/app/Breadcrumbs/Breadcrumbs';

export function CatalogLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs className="mb-8" />
      <Outlet />
    </div>
  );
}
