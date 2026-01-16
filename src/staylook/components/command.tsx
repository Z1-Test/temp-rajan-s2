/**
 * Staylook Command Palette Component
 * 
 * Design Principles:
 * - Editorial: Search-first interface
 * - Minimal: Clean list display
 * - Curved: Follows container radius (24px)
 */

import * as React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CommandItem {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    shortcut?: string;
    onClick?: () => void;
}

export interface CommandProps {
    open: boolean;
    onClose: () => void;
    items: CommandItem[];
    placeholder?: string;
    className?: string;
}

export const Command: React.FC<CommandProps> = ({
    open,
    onClose,
    items,
    placeholder = "Type a command or search...",
    className,
}) => {
    const [search, setSearch] = React.useState("");
    const commandRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                // Toggle open state logic would be outside
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (!open) return null;

    const filteredItems = items.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[var(--sl-z-modal)] flex items-start justify-center pt-[10vh] px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Command Palette */}
            <div
                ref={commandRef}
                className={cn(
                    "relative w-full max-w-2xl overflow-hidden",
                    "bg-[var(--sl-container-muted)]",
                    "rounded-[var(--sl-radius-container)]",
                    "shadow-[var(--sl-shadow-vibrant)]",
                    "border border-[var(--sl-outline-muted)]",
                    "animate-in zoom-in-95 fade-in duration-200",
                    className
                )}
            >
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--sl-outline-muted)]">
                    <Search className="size-5 text-[var(--sl-standard-muted)]" />
                    <input
                        autoFocus
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={placeholder}
                        className={cn(
                            "flex-1 bg-transparent border-none outline-none",
                            "text-[length:var(--sl-text-base)] text-[var(--sl-on-standard)]",
                            "placeholder:text-[var(--sl-standard-muted)]"
                        )}
                    />
                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded border border-[var(--sl-outline-muted)] text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)] bg-[var(--sl-container-calm)]">
                            ESC
                        </kbd>
                    </div>
                </div>

                {/* Items List */}
                <div className="max-h-[400px] overflow-y-auto py-2">
                    {filteredItems.length === 0 ? (
                        <div className="px-4 py-8 text-center text-[var(--sl-standard-muted)]">
                            No results found for "{search}"
                        </div>
                    ) : (
                        filteredItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    item.onClick?.();
                                    onClose();
                                }}
                                className={cn(
                                    "w-full flex items-center justify-between px-4 py-3",
                                    "transition-colors hover:bg-[var(--sl-container-calm)]",
                                    "text-left"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    {item.icon && <div className="shrink-0 size-5 text-[var(--sl-standard-soft)]">{item.icon}</div>}
                                    <div>
                                        <div className="text-[length:var(--sl-text-sm)] font-medium text-[var(--sl-on-standard)]">
                                            {item.label}
                                        </div>
                                        {item.description && (
                                            <div className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">
                                                {item.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {item.shortcut && (
                                    <kbd className="text-[length:var(--sl-text-xs)] text-[var(--sl-standard-muted)]">
                                        {item.shortcut}
                                    </kbd>
                                )}
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

Command.displayName = 'Command';
