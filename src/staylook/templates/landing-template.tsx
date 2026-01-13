/**
 * Staylook Landing Page Template
 * 
 * Design Principles:
 * - Editorial: Cohesive flow from hero to conversion
 * - Minimal: Focused on value proposition
 * - Selective Expressive: Guided conversion points
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Header } from '../molecules/header';
import { Hero } from '../molecules/hero';
import { Container } from '../components/container';
import { Divider } from '../components/divider';

export interface LandingTemplateProps {
    headerLogo?: React.ReactNode;
    headerNavItems?: { label: string; href: string }[];
    heroTitle: string;
    heroSubtitle: string;
    features?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}

export function LandingTemplate({
    headerLogo,
    headerNavItems,
    heroTitle,
    heroSubtitle,
    features,
    children,
    footer,
}: LandingTemplateProps) {
    return (
        <div className="min-h-screen bg-[var(--sl-container-vibrant)] text-[var(--sl-on-standard)] font-[var(--sl-font-sans)]">
            <Header logo={headerLogo} navItems={headerNavItems} />

            <main>
                <Hero
                    title={heroTitle}
                    subtitle={heroSubtitle}
                    primaryAction={{ label: 'Start for free' }}
                    secondaryAction={{ label: 'View demo' }}
                    centered
                />

                <Divider />

                {features && (
                    <section className="py-24 bg-[var(--sl-container-calm)]">
                        <Container>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {features}
                            </div>
                        </Container>
                    </section>
                )}

                {children}
            </main>

            <footer className="border-t border-[var(--sl-outline-muted)] py-20 bg-[var(--sl-container-calm)]">
                <Container>
                    {footer || (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            <div className="col-span-1 md:col-span-2 space-y-4">
                                <div className="font-bold text-xl tracking-tight text-[var(--sl-on-standard)]">STAYLOOK</div>
                                <p className="text-[var(--sl-standard-soft)] max-w-sm">
                                    A premium design system for high-performing teams who value aesthetics and speed.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold uppercase tracking-widest text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">Product</h4>
                                <ul className="space-y-2 text-[length:var(--sl-text-sm)]">
                                    <li><a href="#" className="hover:text-[var(--sl-on-expressive)] transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-[var(--sl-on-expressive)] transition-colors">Components</a></li>
                                    <li><a href="#" className="hover:text-[var(--sl-on-expressive)] transition-colors">Pricing</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold uppercase tracking-widest text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">Company</h4>
                                <ul className="space-y-2 text-[length:var(--sl-text-sm)]">
                                    <li><a href="#" className="hover:text-[var(--sl-on-expressive)] transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-[var(--sl-on-expressive)] transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-[var(--sl-on-expressive)] transition-colors">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    )}
                    <Divider className="my-12" />
                    <p className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">
                        © {new Date().getFullYear()} Staylook Design System. All rights reserved.
                    </p>
                </Container>
            </footer>
        </div>
    );
}
