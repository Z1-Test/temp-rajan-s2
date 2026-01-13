/**
 * Staylook Dropdown Menu Component
 * 
 * Design Principles:
 * - Uses card radius (16px)
 * - Clean, minimal design
 * - Smooth animations
 * - Keyboard accessible
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Button } from './button';

export interface DropdownItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    danger?: boolean;
    divider?: boolean;
}

export interface DropdownProps {
    trigger: React.ReactNode;
    items: DropdownItem[];
    align?: 'start' | 'center' | 'end';
    className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
    trigger,
    items,
    align = 'start',
    className,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const alignClasses = {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
    };

    return (
        <div ref={dropdownRef} className={cn('relative inline-block', className)}>
            <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

            {isOpen && (
                <div
                    className={cn(
                        'absolute top-full mt-2 z-[var(--sl-z-dropdown)]',
                        'min-w-[180px] py-1',
                        'bg-[var(--sl-container-vibrant)]',
                        'border border-[var(--sl-outline-muted)]',
                        'rounded-[var(--sl-radius-card)]',
                        'shadow-[var(--sl-shadow-vibrant)]',
                        'animate-in fade-in zoom-in-95 duration-150',
                        alignClasses[align]
                    )}
                    role="menu"
                >
                    {items.map((item, index) => {
                        if (item.divider) {
                            return (
                                <div
                                    key={`divider-${index}`}
                                    className="my-1 border-t border-[var(--sl-outline-muted)]"
                                    role="separator"
                                />
                            );
                        }

                        return (
                            <button
                                key={item.id}
                                role="menuitem"
                                disabled={item.disabled}
                                onClick={() => {
                                    item.onClick?.();
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    'w-full flex items-center gap-3 px-3 py-2',
                                    'text-left text-[length:var(--sl-text-sm)]',
                                    'transition-colors duration-[var(--sl-duration-fast)]',
                                    item.disabled
                                        ? 'opacity-50 cursor-not-allowed'
                                        : item.danger
                                            ? 'text-[var(--sl-on-error)] hover:bg-[var(--sl-outline-error)]/10'
                                            : 'text-[var(--sl-on-standard)] hover:bg-[var(--sl-container-calm)]'
                                )}
                            >
                                {item.icon && (
                                    <span className="shrink-0 size-4">{item.icon}</span>
                                )}
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';

// Simple dropdown button trigger
export interface DropdownButtonProps {
    label: string;
    icon?: React.ReactNode;
    className?: string;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
    label,
    icon,
    className,
}) => (
    <Button variant="outline" className={cn('justify-between', className)}>
        <span className="flex items-center gap-2">
            {icon}
            {label}
        </span>
        <ChevronDown className="size-4 ml-2" />
    </Button>
);

DropdownButton.displayName = 'DropdownButton';
