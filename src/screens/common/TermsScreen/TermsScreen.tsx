import { StaticPage } from '@/screens/common/StaticPage';

export function TermsScreen() {
    return (
        <StaticPage
            title="Terms of Service"
            subtitle="Please read these terms carefully before using itsme.fashion."
        >
            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using itsme.fashion, you agree to comply with and be bound by these
                        Terms of Service. If you do not agree, please do not use our website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">2. Use of Website</h2>
                    <p>
                        This website is intended for personal, non-commercial use. You must be at least 18 years
                        of age or have parental consent to purchase products from this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">3. Product Descriptions</h2>
                    <p>
                        We strive to provide accurate information about our beauty products. However,
                        we do not warrant that product descriptions or other content are error-free.
                        Color representation may vary depending on your screen settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">4. Intellectual Property</h2>
                    <p>
                        All content on itsme.fashion, including text, logos, and images, is the property
                        of itsme.fashion and is protected by copyright laws. You may not reproduce
                        any part of this site without our written permission.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4 text-foreground">5. Limitation of Liability</h2>
                    <p>
                        itsme.fashion shall not be liable for any damages that result from the use
                        of, or the inability to use, the materials on this site or the performance of
                        the products.
                    </p>
                </section>
            </div>
        </StaticPage>
    );
}
