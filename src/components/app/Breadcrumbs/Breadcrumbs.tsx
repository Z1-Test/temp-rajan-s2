import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
    className?: string;
    items?: Array<{ label: string; href?: string }>;
}

export function Breadcrumbs({ className, items }: BreadcrumbsProps) {
    const location = useLocation();

    // Auto-generate if not provided
    const generateBreadcrumbs = () => {
        const pathnames = location.pathname.split('/').filter((x) => x);
        return pathnames.map((value, index) => {
            const href = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

            return { label, href: isLast ? undefined : href };
        });
    };

    const breadcrumbItems = items || generateBreadcrumbs();

    if (location.pathname === '/' && !items) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={cn("flex items-center text-sm text-muted-foreground mb-6", className)}
        >
            <ol className="flex items-center gap-1.5 list-none m-0 p-0">
                <li>
                    <Link
                        to="/"
                        className="flex items-center hover:text-foreground transition-colors"
                    >
                        <Home className="h-4 w-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>

                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-1.5">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0" />
                        {item.href ? (
                            <Link
                                to={item.href}
                                className="hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="font-medium text-foreground truncate max-w-[150px] sm:max-w-none">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
