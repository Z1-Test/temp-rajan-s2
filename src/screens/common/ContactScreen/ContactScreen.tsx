import { StaticPage } from '@/screens/common/StaticPage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactScreen() {
    return (
        <StaticPage
            title="Contact Us"
            subtitle="Have questions? We're here to help you on your beauty journey."
        >
            <div className="grid gap-12 lg:grid-cols-3">
                {/* Contact Info */}
                <div className="space-y-6 lg:col-span-1">
                    {[
                        { icon: Mail, title: 'Email Us', content: 'support@itsme.fashion', desc: 'Response within 24 hours' },
                        { icon: Phone, title: 'Call Us', content: '+91 800 123 4567', desc: 'Mon-Sat, 9am - 6pm' },
                        { icon: MapPin, title: 'Our Studio', content: '123 Beauty Lane, Bangalore, India', desc: 'By appointment only' },
                        { icon: Clock, title: 'Working Hours', content: 'Mon-Fri: 9am - 7pm', desc: 'Saturday: 10am - 4pm' },
                    ].map((item) => (
                        <div key={item.title} className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className="text-primary font-medium">{item.content}</p>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <Card className="lg:col-span-2">
                    <CardContent className="pt-6">
                        <form className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" />
                            </div>
                            <Button type="submit" className="w-full md:w-auto px-8">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </StaticPage>
    );
}
