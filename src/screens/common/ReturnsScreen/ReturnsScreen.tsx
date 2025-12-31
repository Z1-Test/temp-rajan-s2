import { StaticPage } from '@/screens/common/StaticPage';
import { RefreshCcw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ReturnsScreen() {
    return (
        <StaticPage
            title="Returns & Exchanges"
            subtitle="Easy returns for a worry-free shopping experience."
        >
            <div className="space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-primary">
                        <RefreshCcw className="h-6 w-6" />
                        <h2 className="text-2xl font-bold text-foreground">15-Day Return Policy</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        We want you to love your itsme.fashion purchase. If you're not completely satisfied,
                        you can return unopened and unused products within 15 days of delivery for a full
                        refund or exchange.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-4 flex gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            Note: For hygiene reasons, opened beauty products cannot be returned unless
                            they are defective or caused an allergic reaction (documented).
                        </p>
                    </div>
                </section>

                <section className="grid gap-8 md:grid-cols-3">
                    {[
                        { step: "1", title: "Initiate Request", desc: "Go to your Order History and select 'Return Item' for the specific order." },
                        { step: "2", title: "Pack Securely", desc: "Place the item in its original packaging with all labels intact." },
                        { step: "3", title: "Wait for Pickup", desc: "Our courier partner will arrive within 2-3 business days to collect the item." },
                    ].map((item) => (
                        <div key={item.step} className="space-y-3">
                            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                {item.step}
                            </div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </section>

                <section className="bg-muted py-12 rounded-3xl text-center px-6">
                    <h2 className="text-2xl font-bold mb-4">Damaged or Incorrect Items</h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Received something broken or not what you ordered? Don't worry, we'll fix it
                        immediately at no extra cost to you.
                    </p>
                    <Button asChild>
                        <Link to="/contact">Report an Issue</Link>
                    </Button>
                </section>
            </div>
        </StaticPage>
    );
}
