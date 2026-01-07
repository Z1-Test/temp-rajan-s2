/**
 * Staylook Kbd (Keyboard) Component
 * 
 * Design Principles:
 * - Curved: Follows --sl-radius-badge (8px)
 * - Minimal: Editorial look for shortcuts
 * - Mono: JetBrains Mono for the key name
 */

import { cn } from '@/lib/utils';

interface KbdProps extends React.HTMLAttributes<HTMLElement> { }

function Kbd({ className, ...props }: KbdProps) {
    return (
        <kbd
            className={cn(
                "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-[var(--sl-radius-badge)] border border-[var(--sl-outline-muted)] bg-[var(--sl-container-calm)] px-1.5 font-mono text-[10px] font-medium text-[var(--sl-standard-soft)] opacity-100",
                className
            )}
            {...props}
        />
    );
}

export { Kbd };
