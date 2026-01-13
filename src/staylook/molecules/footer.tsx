/**
 * Staylook Footer Molecule
 * 
 * Design Principles:
 * - Editorial: Clean typography hierarchy
 * - Minimal: Focused, uncluttered layout
 * - Curved: Uses section radius (32px) for container
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Link } from '../components/link';

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    logo?: React.ReactNode;
    description?: string;
    sections?: FooterSection[];
    socialLinks?: {
        icon: React.ReactNode;
        href: string;
        label: string;
    }[];
    bottomLinks?: FooterLink[];
    copyright?: string;
}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
    (
        {
            logo,
            description,
            sections = [],
            socialLinks = [],
            bottomLinks = [],
            copyright,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <footer
                ref={ref}
                className={cn(
                    'bg-[var(--sl-on-standard)] text-white',
                    'rounded-t-[var(--sl-radius-section)]',
                    className
                )}
                {...props}
            >
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1 space-y-4">
                            {logo && <div className="mb-4">{logo}</div>}
                            {description && (
                                <p className="text-[length:var(--sl-text-sm)] text-white/70 leading-relaxed max-w-xs">
                                    {description}
                                </p>
                            )}
                            {socialLinks.length > 0 && (
                                <div className="flex items-center gap-3 pt-2">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Link Sections */}
                        {sections.map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h4 className="text-[length:var(--sl-text-sm)] font-bold uppercase tracking-wider text-white/50">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-[length:var(--sl-text-sm)] text-white/70 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        {copyright && (
                            <p className="text-[length:var(--sl-text-xs)] text-white/50">
                                {copyright}
                            </p>
                        )}
                        {bottomLinks.length > 0 && (
                            <div className="flex items-center gap-6">
                                {bottomLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="text-[length:var(--sl-text-xs)] text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        );
    }
);

Footer.displayName = 'Footer';

export { Footer };
