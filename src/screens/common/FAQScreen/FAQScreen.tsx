import { StaticPage } from '@/screens/common/StaticPage';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
    {
        question: "Are your products truly cruelty-free?",
        answer: "Yes, 100%. itsme.fashion is committed to ethical beauty. We do not test our products on animals, and we only partner with suppliers who share this commitment. Many of our products are also vegan-certified."
    },
    {
        question: "Do you use parabens or sulfates?",
        answer: "No. Our 'Clean Beauty' promise means all products are formulated without parabens, sulfates, phthalates, and other harmful chemicals. We prioritize natural, plant-based ingredients."
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within major cities and 5-7 business days for other locations. Express shipping options are available at checkout."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 15-day hassle-free return policy for unopened and unused products. If you receive a damaged item, please contact us within 48 hours for a replacement."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive an email with a tracking link. You can also track your order status in the 'My Orders' section of your account."
    }
];

export function FAQScreen() {
    return (
        <StaticPage
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about our products and services."
        >
            <div className="mx-auto max-w-2xl">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </StaticPage>
    );
}
