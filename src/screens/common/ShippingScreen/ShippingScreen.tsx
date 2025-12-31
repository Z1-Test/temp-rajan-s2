import { StaticPage } from '@/screens/common/StaticPage';
import { Truck, Clock, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ShippingScreen() {
    return (
        <StaticPage
            title="Shipping Information"
            subtitle="Fast, safe, and sustainable delivery for your beauty essentials."
        >
            <div className="space-y-12">
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Truck className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Domestic Shipping</h3>
                            <p className="text-muted-foreground">
                                We offer free standard shipping on all orders over ₹999.
                                For orders below this amount, a flat fee of ₹99 applies.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Delivery Timelines</h3>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Metros: 2-4 business days</li>
                                <li>Rest of India: 5-7 business days</li>
                                <li>Express Shipping: 1-2 business days (Select cities)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Order Tracking</h2>
                    <p className="text-muted-foreground">
                        As soon as your package leaves our warehouse, you'll receive a shipping
                        confirmation email with a tracking number and a link to view the progress
                        of your delivery. You can also monitor your order status directly from
                        your account dashboard.
                    </p>
                </section>

                <section className="bg-muted/30 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="h-16 w-16 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-1">Sustainable Packaging</h3>
                        <p className="text-muted-foreground">
                            We care about the planet as much as your skin. All our orders are packed
                            using recyclable materials and biodegradable fillers to minimize
                            environmental impact.
                        </p>
                    </div>
                </section>
            </div>
        </StaticPage>
    );
}
