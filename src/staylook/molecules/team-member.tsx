/**
 * Staylook Team Member Card Molecule
 * 
 * Design Principles:
 * - Editorial: Clean profile presentation
 * - Curved: Uses card radius (16px)
 * - Minimal: Focused on essential information
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '../components/avatar';

export interface TeamMemberProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    role: string;
    bio?: string;
    avatar?: string;
    socialLinks?: {
        icon: React.ReactNode;
        href: string;
        label: string;
    }[];
    variant?: 'standard' | 'compact';
}

const TeamMember = React.forwardRef<HTMLDivElement, TeamMemberProps>(
    (
        { name, role, bio, avatar, socialLinks = [], variant = 'standard', className, ...props },
        ref
    ) => {
        if (variant === 'compact') {
            return (
                <div
                    ref={ref}
                    className={cn(
                        'flex items-center gap-4 p-4',
                        'rounded-[var(--sl-radius-card)]',
                        'bg-[var(--sl-container-vibrant)]',
                        'border border-[var(--sl-outline-muted)]',
                        'hover:border-[var(--sl-outline-vibrant)]',
                        'transition-all duration-[var(--sl-duration-base)]',
                        className
                    )}
                    {...props}
                >
                    <Avatar src={avatar} fallback={name.substring(0, 2).toUpperCase()} size="lg" />
                    <div className="flex-1 min-w-0">
                        <h3 className="text-[length:var(--sl-text-base)] font-semibold text-[var(--sl-on-standard)] truncate">
                            {name}
                        </h3>
                        <p className="text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)] truncate">
                            {role}
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(
                    'text-center p-6',
                    'rounded-[var(--sl-radius-card)]',
                    'bg-[var(--sl-container-vibrant)]',
                    'border border-[var(--sl-outline-muted)]',
                    'hover:border-[var(--sl-outline-vibrant)]',
                    'transition-all duration-[var(--sl-duration-base)]',
                    className
                )}
                {...props}
            >
                <Avatar
                    src={avatar}
                    fallback={name.substring(0, 2).toUpperCase()}
                    size="xl"
                    className="mx-auto mb-4"
                />
                <h3 className="text-[length:var(--sl-text-lg)] font-semibold text-[var(--sl-on-standard)] mb-1">
                    {name}
                </h3>
                <p className="text-[length:var(--sl-text-sm)] text-[var(--sl-on-expressive)] font-medium mb-3">
                    {role}
                </p>
                {bio && (
                    <p className="text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)] leading-relaxed mb-4">
                        {bio}
                    </p>
                )}
                {socialLinks.length > 0 && (
                    <div className="flex items-center justify-center gap-2">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="p-2 rounded-full text-[var(--sl-standard-muted)] hover:text-[var(--sl-on-standard)] hover:bg-[var(--sl-container-calm)] transition-colors"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

TeamMember.displayName = 'TeamMember';

export { TeamMember };
