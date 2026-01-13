/**
 * Staylook NavBar Molecule
 * 
 * Design Principles:
 * - Editorial: Clean, focused navigation
 * - Minimal: Uncluttered with clear hierarchy
 * - Curved: Pill-shaped CTAs and menu items
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';


export interface NavItem {
    label: string;
    href?: string;
    onClick?: () => void;
    children?: NavItem[];
}

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    items?: NavItem[];
    actions?: React.ReactNode;
    sticky?: boolean;
    transparent?: boolean;
}

const NavBar = React.forwardRef<HTMLElement, NavBarProps>(
    (
        {
            logo,
            items = [],
            actions,
            sticky = true,
            transparent = false,
            className,
            ...props
        },
        ref
    ) => {
        const [mobileOpen, setMobileOpen] = React.useState(false);

        return (
            <header
                ref={ref}
                className={cn(
                    'w-full z-[var(--sl-z-header)]',
                    sticky && 'sticky top-0',
                    transparent
                        ? 'bg-transparent'
                        : 'bg-[var(--sl-container-vibrant)]/95 backdrop-blur-md border-b border-[var(--sl-outline-muted)]',
                    className
                )}
                {...props}
            >
                <nav className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        {logo && (
                            <div className="shrink-0">
                                {logo}
                            </div>
                        )}

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {items.map((item, index) => (
                                <NavItemComponent key={index} item={item} />
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            {actions}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="md:hidden p-2 rounded-[var(--sl-radius-badge)] hover:bg-[var(--sl-container-calm)] transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X className="size-6 text-[var(--sl-on-standard)]" />
                            ) : (
                                <Menu className="size-6 text-[var(--sl-on-standard)]" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileOpen && (
                        <div className="md:hidden py-4 border-t border-[var(--sl-outline-muted)] animate-in slide-in-from-top duration-200">
                            <div className="flex flex-col gap-2">
                                {items.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={item.onClick}
                                        className="px-4 py-3 rounded-[var(--sl-radius-badge)] text-[length:var(--sl-text-base)] font-medium text-[var(--sl-on-standard)] hover:bg-[var(--sl-container-calm)] transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                {actions && (
                                    <div className="pt-4 mt-2 border-t border-[var(--sl-outline-muted)] flex flex-col gap-2">
                                        {actions}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        );
    }
);

NavBar.displayName = 'NavBar';

// Desktop Nav Item Component
interface NavItemComponentProps {
    item: NavItem;
}

const NavItemComponent: React.FC<NavItemComponentProps> = ({ item }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    if (item.children && item.children.length > 0) {
        return (
            <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <button
                    className="text-[length:var(--sl-text-sm)] font-medium text-[var(--sl-standard-soft)] hover:text-[var(--sl-on-standard)] transition-colors"
                >
                    {item.label}
                </button>
                {isOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-[var(--sl-container-vibrant)] border border-[var(--sl-outline-muted)] rounded-[var(--sl-radius-card)] shadow-[var(--sl-shadow-vibrant)] py-2 min-w-[180px] animate-in fade-in zoom-in-95 duration-150">
                            {item.children.map((child, index) => (
                                <a
                                    key={index}
                                    href={child.href}
                                    onClick={child.onClick}
                                    className="block px-4 py-2 text-[length:var(--sl-text-sm)] text-[var(--sl-on-standard)] hover:bg-[var(--sl-container-calm)] transition-colors"
                                >
                                    {child.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <a
            href={item.href}
            onClick={item.onClick}
            className="text-[length:var(--sl-text-sm)] font-medium text-[var(--sl-standard-soft)] hover:text-[var(--sl-on-standard)] transition-colors"
        >
            {item.label}
        </a>
    );
};

export { NavBar };
