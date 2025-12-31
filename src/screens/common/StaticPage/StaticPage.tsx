import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StaticPageProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export function StaticPage({ title, subtitle, children, className }: StaticPageProps) {
    return (
        <div className={cn("container mx-auto px-4 py-12 md:py-24", className)}>
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
                    {subtitle && (
                        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
                    )}
                </div>
                <div className="prose prose-stone max-w-none dark:prose-invert">
                    {children}
                </div>
            </div>
        </div>
    );
}
