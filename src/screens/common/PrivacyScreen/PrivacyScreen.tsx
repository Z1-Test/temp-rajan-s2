import { StaticPage } from '@/screens/common/StaticPage';

export function PrivacyScreen() {
    return (
        <StaticPage
            title="Privacy Policy"
            subtitle="Last updated: December 31, 2025"
        >
            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground">
                        At itsme.fashion, we respect your privacy and are committed to protecting your personal data.
                        This policy explains how we collect, use, and safeguard your information when you visit our
                        website and purchase our beauty products.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">2. Data We Collect</h2>
                    <p className="text-muted-foreground mb-4">
                        We collect information that you provide directly to us when you:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Create an account or profile</li>
                        <li>Place an order for products</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact our customer support</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">3. How We Use Your Data</h2>
                    <p className="text-muted-foreground">
                        We use your information to process transactions, provide personalized beauty
                        recommendations, send updates about your orders, and improve our website experience.
                        We do not sell your personal data to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-4">4. Cookies</h2>
                    <p className="text-muted-foreground">
                        Our website uses cookies to enhance your browsing experience, remember your preferences,
                        and analyze traffic. You can manage your cookie settings through your browser.
                    </p>
                </section>
            </div>
        </StaticPage>
    );
}
