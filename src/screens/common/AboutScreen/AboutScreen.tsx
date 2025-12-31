import { StaticPage } from '@/screens/common/StaticPage';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf, Sparkles, ShieldCheck } from 'lucide-react';

export function AboutScreen() {
    return (
        <StaticPage
            title="Our Story"
            subtitle="Pure nature, premium results. Discover the philosophy behind itsme.fashion."
        >
            <div className="space-y-12">
                <section className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Vision</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            At itsme.fashion, we believe that beauty should never come at a cost to nature or our conscience.
                            Our journey began with a simple mission: to create a premium beauty destination that exclusively
                            features clean, cruelty-free, and effective products.
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            We handpick every product in our collection, ensuring they meet our rigorous standards for
                            ingredient purity and ethical manufacturing. Because when you feel good about what you put on
                            your skin, your true beauty shines through.
                        </p>
                    </div>
                    <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
                        <img
                            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop"
                            alt="Natural beauty"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: Leaf, title: 'Pure Ingredients', desc: 'No harmful chemicals, only nature.' },
                            { icon: Heart, title: 'Cruelty-Free', desc: 'Strictly no animal testing, ever.' },
                            { icon: Sparkles, title: 'Premium Quality', desc: 'Luxury that delivers real results.' },
                            { icon: ShieldCheck, title: 'Full Transparency', desc: 'Know exactly what you are using.' },
                        ].map((value) => (
                            <Card key={value.title} className="text-center border-none shadow-none bg-muted/30">
                                <CardContent className="pt-6">
                                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <value.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-bold mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                        We are more than just a beauty platform. We are a community of individuals who value
                        sustainability and ethical choices. Join us in our mission to redefine beauty standards
                        and make clean beauty accessible to everyone.
                    </p>
                </section>
            </div>
        </StaticPage>
    );
}
