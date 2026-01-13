/**
 * Staylook Accordion Component
 * 
 * Design Principles:
 * - Clean, minimal collapsible sections
 * - Smooth height animations
 * - Uses card radius (16px) for items
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export interface AccordionProps {
    items: AccordionItem[];
    type?: 'single' | 'multiple';
    defaultOpen?: string[];
    className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
    items,
    type = 'single',
    defaultOpen = [],
    className,
}) => {
    const [openItems, setOpenItems] = React.useState<string[]>(defaultOpen);

    const toggleItem = (id: string) => {
        if (type === 'single') {
            setOpenItems(openItems.includes(id) ? [] : [id]);
        } else {
            setOpenItems(
                openItems.includes(id)
                    ? openItems.filter((item) => item !== id)
                    : [...openItems, id]
            );
        }
    };

    return (
        <div className={cn('space-y-2', className)}>
            {items.map((item) => (
                <AccordionItemComponent
                    key={item.id}
                    item={item}
                    isOpen={openItems.includes(item.id)}
                    onToggle={() => !item.disabled && toggleItem(item.id)}
                />
            ))}
        </div>
    );
};

Accordion.displayName = 'Accordion';

interface AccordionItemComponentProps {
    item: AccordionItem;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
    item,
    isOpen,
    onToggle,
}) => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<number | undefined>(undefined);

    React.useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div
            className={cn(
                'rounded-[var(--sl-radius-card)]',
                'border border-[var(--sl-outline-muted)]',
                'bg-[var(--sl-container-vibrant)]',
                'overflow-hidden',
                'transition-all duration-[var(--sl-duration-base)]',
                item.disabled && 'opacity-50'
            )}
        >
            {/* Header */}
            <button
                type="button"
                onClick={onToggle}
                disabled={item.disabled}
                aria-expanded={isOpen}
                className={cn(
                    'w-full flex items-center justify-between gap-4 p-4',
                    'text-left',
                    'text-[length:var(--sl-text-base)] font-medium text-[var(--sl-on-standard)]',
                    'transition-colors duration-[var(--sl-duration-fast)]',
                    !item.disabled && 'hover:bg-[var(--sl-container-calm)]',
                    item.disabled && 'cursor-not-allowed'
                )}
            >
                <div className="flex items-center gap-3">
                    {item.icon && (
                        <span className="shrink-0 text-[var(--sl-standard-muted)]">
                            {item.icon}
                        </span>
                    )}
                    <span>{item.title}</span>
                </div>
                <ChevronDown
                    className={cn(
                        'size-5 shrink-0 text-[var(--sl-standard-muted)]',
                        'transition-transform duration-[var(--sl-duration-base)]',
                        isOpen && 'rotate-180'
                    )}
                />
            </button>

            {/* Content */}
            <div
                style={{ height: height !== undefined ? `${height}px` : 'auto' }}
                className="overflow-hidden transition-all duration-[var(--sl-duration-base)] ease-[var(--sl-ease-default)]"
            >
                <div
                    ref={contentRef}
                    className="px-4 pb-4 text-[length:var(--sl-text-sm)] text-[var(--sl-standard-soft)] leading-relaxed"
                >
                    {item.content}
                </div>
            </div>
        </div>
    );
};
