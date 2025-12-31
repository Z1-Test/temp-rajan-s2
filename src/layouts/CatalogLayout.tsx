import { Outlet } from 'react-router-dom';

export function CatalogLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Outlet />
    </div>
  );
}
