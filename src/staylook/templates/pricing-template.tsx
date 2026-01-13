/**
 * Staylook Pricing Template
 * 
 * Design Principles:
 * - Editorial: Clear pricing comparison
 * - Curved: Section radius (32px)
 * - Minimal: Focused on value proposition
 * - Expressive: Featured plan stands out
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { PricingCard, PricingFeature } from '../molecules/pricing-card';
import { CTASection } from '../molecules/cta-section';
import { Tabs } from '../components/tabs';
import { Badge } from '../components/badge';


export interface PricingPlan {
    id: string;
    name: string;
    description?: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: PricingFeature[];
    featured?: boolean;
    badge?: string;
    ctaLabel?: string;
}

export interface PricingTemplateProps {
    title?: string;
    subtitle?: string;
    plans: PricingPlan[];
    showFaq?: boolean;
    faqItems?: { question: string; answer: string }[];
}

export const PricingTemplate: React.FC<PricingTemplateProps> = ({
    title = 'Simple, transparent pricing',
    subtitle = 'Choose the plan that fits your needs. All plans include a 14-day free trial.',
    plans,
    showFaq = true,
    faqItems = defaultFaqItems,
}) => {
    const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

    return (
        <div className="min-h-screen bg-[var(--sl-container-vibrant)]">
            {/* Hero Section */}
            <section className="pt-20 pb-12 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <Badge variant="expressive" className="mb-4">
                        Pricing
                    </Badge>
                    <h1 className="text-[length:var(--sl-text-4xl)] md:text-[length:var(--sl-text-5xl)] font-bold text-[var(--sl-on-standard)] leading-tight">
                        {title}
                    </h1>
                    <p className="text-[length:var(--sl-text-lg)] text-[var(--sl-standard-muted)] max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 pt-4">
                        <Tabs
                            items={[
                                { id: 'monthly', label: 'Monthly' },
                                { id: 'yearly', label: 'Yearly' },
                            ]}
                            activeTab={billingCycle}
                            onTabChange={(id) => setBillingCycle(id as 'monthly' | 'yearly')}
                            variant="pills"
                        />
                        {billingCycle === 'yearly' && (
                            <Badge variant="success" className="animate-in fade-in">
                                Save 20%
                            </Badge>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {plans.map((plan) => (
                            <PricingCard
                                key={plan.id}
                                name={plan.name}
                                description={plan.description}
                                price={billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                period={billingCycle === 'monthly' ? '/month' : '/year'}
                                features={plan.features}
                                featured={plan.featured}
                                badge={plan.badge}
                                ctaLabel={plan.ctaLabel}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {showFaq && faqItems.length > 0 && (
                <section className="py-20 px-6 bg-[var(--sl-container-calm)]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-[length:var(--sl-text-3xl)] font-bold text-[var(--sl-on-standard)] text-center mb-12">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <FaqItem key={index} question={item.question} answer={item.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="px-6 py-12">
                <div className="max-w-6xl mx-auto">
                    <CTASection
                        title="Ready to get started?"
                        description="Start your 14-day free trial. No credit card required."
                        primaryAction={{ label: 'Start free trial' }}
                        secondaryAction={{ label: 'Contact sales' }}
                        variant="standard"
                    />
                </div>
            </section>
        </div>
    );
};

// FAQ Item component
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div
            className={cn(
                'rounded-[var(--sl-radius-card)]',
                'border border-[var(--sl-outline-muted)]',
                'bg-[var(--sl-container-vibrant)]',
                'overflow-hidden'
            )}
        >
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
                <span className="text-[length:var(--sl-text-base)] font-medium text-[var(--sl-on-standard)]">
                    {question}
                </span>
                <span
                    className={cn(
                        'shrink-0 size-6 rounded-full bg-[var(--sl-container-calm)] flex items-center justify-center',
                        'transition-transform duration-200',
                        isOpen && 'rotate-45'
                    )}
                >
                    <span className="text-[var(--sl-on-standard)]">+</span>
                </span>
            </button>
            {isOpen && (
                <div className="px-5 pb-5 text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                    {answer}
                </div>
            )}
        </div>
    );
};

const defaultFaqItems = [
    {
        question: 'Can I try before I buy?',
        answer: 'Yes! We offer a 14-day free trial on all plans. No credit card required.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
        question: 'Is there a discount for annual billing?',
        answer: 'Yes, you save 20% when you choose annual billing. The discount is applied automatically.',
    },
];

PricingTemplate.displayName = 'PricingTemplate';
