/**
 * Staylook Header Molecule
 * 
 * Design Principles:
 * - Editorial: Strong branding and clear navigation
 * - Minimal: Uncluttered layout
 * - Curved: Follows container radius if floated
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../components/button';
import { Link } from '../components/link';
import { Container } from '../components/container';
import { HStack } from '../components/stack';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    navItems?: { label: string; href: string }[];
    actions?: React.ReactNode;
    isSticky?: boolean;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
    ({ className, logo, navItems, actions, isSticky = true, ...props }, ref) => {
        return (
            <header
                ref={ref}
                className={cn(
                    'w-full border-b border-[var(--sl-outline-muted)] bg-[var(--sl-container-vibrant)]/80 backdrop-blur-md z-[var(--sl-z-header,50)]',
                    isSticky && 'sticky top-0',
                    className
                )}
                {...props}
            >
                <Container>
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="flex-shrink-0 font-bold text-xl tracking-tight">
                                {logo || 'STAYLOOK'}
                            </div>

                            <nav className="hidden md:flex items-center gap-6">
                                {navItems?.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-[length:var(--sl-text-sm)] font-medium text-[var(--sl-standard-soft)] hover:text-[var(--sl-on-standard)] transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            {actions || (
                                <>
                                    <Button variant="ghost" size="sm">Log in</Button>
                                    <Button variant="standard" size="sm">Get Started</Button>
                                </>
                            )}
                        </div>
                    </div>
                </Container>
            </header>
        );
    }
);

Header.displayName = 'Header';

export { Header };
