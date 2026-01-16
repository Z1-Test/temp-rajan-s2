import * as React from 'react';
import {
    Button,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    Badge,
    Label,
    Select,
    Slider,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Container,
    VStack,
    HStack,
    Divider,
    Heading,
    Text,
    Avatar,
    Stat,
    Header,
    Hero,
    Feature,
    // New Components
    Modal,
    ModalFooter,
    Tabs,
    TabPanel,
    Accordion,
    Toast,
    Breadcrumb,
    Dropdown,
    DropdownButton,
    // New Molecules
    PricingCard,
    Testimonial,
    CTASection,
    Footer,
    NavBar,
    TeamMember,
    // Latest Components
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Sheet,
    SheetFooter,
    Popover,
    Command,
} from './index';
import {
    Layers,
    Search,
    Type,
    Component,
    Layout,
    CheckCircle2,
    Info,
    AlertCircle,
    Activity,
    User,
    Menu,
    ChevronRight,
    Code,
    ExternalLink,
    CreditCard,
    Quote,
    MessageSquare,
    Zap,
    Settings,
    Trash,
    Edit,
    Twitter,
    Github,
} from 'lucide-react';

const SECTIONS = [
    {
        id: 'getting-started',
        title: 'Getting Started',
        items: [
            { id: 'introduction', label: 'Introduction', icon: Info },
            { id: 'tokens', label: 'Design Tokens', icon: Layers },
        ]
    },
    {
        id: 'atoms',
        title: 'Atomic Components',
        items: [
            { id: 'button', label: 'Button', icon: Component },
            { id: 'input', label: 'Input', icon: Type },
            { id: 'select', label: 'Select', icon: Menu },
            { id: 'checkbox', label: 'Checkbox', icon: CheckCircle2 },
            { id: 'radio', label: 'Radio', icon: ChevronRight },
            { id: 'switch', label: 'Switch', icon: Activity },
            { id: 'slider', label: 'Slider', icon: Activity },
            { id: 'badge', label: 'Badge', icon: CheckCircle2 },
            { id: 'avatar', label: 'Avatar', icon: User },
            { id: 'table', label: 'Table', icon: Layout },
            { id: 'label', label: 'Label', icon: Type },
        ]
    },
    {
        id: 'interactive',
        title: 'Interactive Components',
        items: [
            { id: 'modal', label: 'Modal', icon: Layout },
            { id: 'tabs', label: 'Tabs', icon: Layout },
            { id: 'accordion', label: 'Accordion', icon: ChevronRight },
            { id: 'dropdown', label: 'Dropdown', icon: Menu },
            { id: 'toast', label: 'Toast', icon: AlertCircle },
            { id: 'breadcrumb', label: 'Breadcrumb', icon: ChevronRight },
            { id: 'sheet', label: 'Sheet (Drawer)', icon: Layout },
            { id: 'popover', label: 'Popover', icon: MessageSquare },
            { id: 'command', label: 'Command Palette', icon: Search },
        ]
    },
    {
        id: 'layout',
        title: 'Layout & Structure',
        items: [
            { id: 'card', label: 'Card', icon: Layout },
            { id: 'container', label: 'Container', icon: Layout },
            { id: 'stack', label: 'Stack', icon: Layout },
            { id: 'divider', label: 'Divider', icon: Layout },
        ]
    },
    {
        id: 'molecules',
        title: 'Molecules',
        items: [
            { id: 'header-molecule', label: 'Header', icon: Layout },
            { id: 'hero-molecule', label: 'Hero', icon: Layout },
            { id: 'feature-molecule', label: 'Feature Card', icon: Layout },
            { id: 'stat-molecule', label: 'Stat Display', icon: Activity },
            { id: 'pricing-card', label: 'Pricing Card', icon: CreditCard },
            { id: 'testimonial', label: 'Testimonial', icon: Quote },
            { id: 'cta-section', label: 'CTA Section', icon: Zap },
            { id: 'footer-molecule', label: 'Footer', icon: Layout },
            { id: 'navbar', label: 'NavBar', icon: Menu },
            { id: 'team-member', label: 'Team Member', icon: User },
        ]
    }
];

export default function Portal() {
    const [activeTab, setActiveTab] = React.useState('introduction');
    const [commandOpen, setCommandOpen] = React.useState(false);

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setCommandOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const renderPreview = (id: string) => {
        switch (id) {
            case 'introduction':
                return (
                    <VStack gap={8}>
                        <VStack gap={4}>
                            <Heading size="3xl">Design Principles</Heading>
                            <Text size="lg" variant="muted">
                                Staylook is a design system focused on being Curved, Editorial, Minimal, and Selective Expressive.
                            </Text>
                        </VStack>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <Card className="p-6">
                                <VStack gap={4}>
                                    <Heading size="lg">Curved</Heading>
                                    <Text variant="muted">Soft, rounded edges throughout. No sharp corners. Radius follows a strict hierarchy from 32px to 8px.</Text>
                                </VStack>
                            </Card>
                            <Card className="p-6">
                                <VStack gap={4}>
                                    <Heading size="lg">Editorial</Heading>
                                    <Text variant="muted">Clean layouts with strong typographic hierarchy using Plus Jakarta Sans.</Text>
                                </VStack>
                            </Card>
                        </div>
                    </VStack>
                );
            case 'tokens':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <VStack gap={4}>
                            <Heading size="md">Colors</Heading>
                            <HStack gap={2}>
                                <div className="size-12 rounded-2xl bg-black border border-white/10" title="Standard" />
                                <div className="size-12 rounded-2xl bg-[var(--sl-on-expressive)]" title="Expressive" />
                                <div className="size-12 rounded-2xl bg-[var(--sl-container-calm)] border border-black/5" title="Container" />
                            </HStack>
                        </VStack>
                        <VStack gap={4}>
                            <Heading size="md">Radius</Heading>
                            <VStack gap={2}>
                                <div className="h-10 w-full rounded-[32px] bg-[var(--sl-container-muted)] flex items-center justify-center text-xs px-4">Section (32px)</div>
                                <div className="h-10 w-3/4 rounded-[24px] bg-[var(--sl-container-muted)] flex items-center justify-center text-xs px-4">Container (24px)</div>
                                <div className="h-10 w-1/2 rounded-[16px] bg-[var(--sl-container-muted)] flex items-center justify-center text-xs px-4">Card (16px)</div>
                            </VStack>
                        </VStack>
                    </div>
                );
            case 'button':
                return (
                    <VStack gap={8}>
                        <HStack gap={4} wrap="wrap" justify="center">
                            <Button variant="standard">Standard Button</Button>
                            <Button variant="expressive">Expressive Button</Button>
                            <Button variant="outline">Outline Button</Button>
                            <Button variant="ghost">Ghost Button</Button>
                        </HStack>
                        <HStack gap={4} wrap="wrap" justify="center">
                            <Button size="sm">Small</Button>
                            <Button size="default">Medium</Button>
                            <Button size="lg">Large</Button>
                        </HStack>
                    </VStack>
                );
            case 'input':
                return (
                    <VStack gap={6} className="max-w-md w-full">
                        <VStack gap={2}>
                            <Label>Email Address</Label>
                            <Input placeholder="Enter your email" type="email" />
                            <Text size="xs" variant="muted">Standard text input with 16px radius.</Text>
                        </VStack>
                    </VStack>
                );
            case 'select':
                return (
                    <div className="w-full max-w-xs">
                        <Select
                            defaultValue=""
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </Select>
                    </div>
                );
            case 'checkbox':
                return (
                    <VStack gap={4}>
                        <HStack gap={3} align="center">
                            <Checkbox id="c1" />
                            <Label htmlFor="c1" className="cursor-pointer">Accept terms and conditions</Label>
                        </HStack>
                        <HStack gap={3} align="center">
                            <Checkbox id="c2" defaultChecked />
                            <Label htmlFor="c2" className="cursor-pointer">Subscribe to newsletter</Label>
                        </HStack>
                    </VStack>
                );
            case 'radio':
                return (
                    <RadioGroup defaultValue="1">
                        <VStack gap={3}>
                            <HStack gap={3} align="center">
                                <Radio id="r1" value="1" />
                                <Label htmlFor="r1" className="cursor-pointer">Option One</Label>
                            </HStack>
                            <HStack gap={3} align="center">
                                <Radio id="r2" value="2" />
                                <Label htmlFor="r2" className="cursor-pointer">Option Two</Label>
                            </HStack>
                        </VStack>
                    </RadioGroup>
                );
            case 'switch':
                return (
                    <VStack gap={4}>
                        <HStack gap={4} align="center">
                            <Switch id="s1" />
                            <Label htmlFor="s1" className="cursor-pointer">Notifications</Label>
                        </HStack>
                    </VStack>
                );
            case 'slider':
                return (
                    <VStack gap={8} className="w-full max-w-sm">
                        <Slider defaultValue={[50]} max={100} step={1} />
                    </VStack>
                );
            case 'badge':
                return (
                    <HStack gap={3} wrap="wrap">
                        <Badge variant="standard">Standard</Badge>
                        <Badge variant="expressive">Expressive</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="success">Success</Badge>
                    </HStack>
                );
            case 'avatar':
                return (
                    <HStack gap={6} align="end">
                        <Avatar size="sm" fallback="JD" />
                        <Avatar size="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" />
                        <Avatar size="lg" fallback="AR" />
                    </HStack>
                );
            case 'card':
                return (
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Staylook Pro</CardTitle>
                            <CardDescription>Get access to premium templates.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Text>Unlock the full power of the design system with advanced components and templates.</Text>
                        </CardContent>
                        <CardFooter>
                            <Button variant="expressive" className="w-full">Upgrade Now</Button>
                        </CardFooter>
                    </Card>
                );
            case 'container':
                return (
                    <Container background="calm" className="h-40 w-full flex items-center justify-center">
                        <Text className="font-bold">Calm Container (Radius 24px)</Text>
                    </Container>
                );
            case 'stack':
                return (
                    <VStack gap={4} className="w-full">
                        <HStack gap={4} className="bg-[var(--sl-container-muted)] p-4 rounded-xl">
                            <div className="size-10 bg-black rounded-lg" />
                            <div className="size-10 bg-black rounded-lg" />
                            <div className="size-10 bg-black rounded-lg" />
                        </HStack>
                    </VStack>
                );
            case 'divider':
                return (
                    <VStack gap={8} className="w-full max-w-md items-stretch">
                        <Text>Above</Text>
                        <Divider />
                        <Text>Below</Text>
                    </VStack>
                );
            case 'stat-molecule':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <Stat label="Total Revenue" value="$45,231.89" trend={{ value: '12%', type: 'positive' }} />
                        <Stat label="Active Users" value="1,234" />
                    </div>
                );
            case 'feature-molecule':
                return (
                    <Feature
                        title="Hyper-realistic Imagery"
                        description="Generate amazing visuals with our integrated AI tool."
                        icon={<Layers className="size-6" />}
                        variant="expressive"
                        className="max-w-md"
                    />
                );
            case 'hero-molecule':
                return (
                    <Hero
                        title="Design at the speed of thought"
                        subtitle="The Staylook design system provides everything you need to build stunning interfaces."
                        primaryAction={{ label: 'Get Started', onClick: () => { } }}
                        secondaryAction={{ label: 'Docs', onClick: () => { } }}
                    />
                );
            case 'header-molecule':
                return (
                    <div className="w-full border border-[var(--sl-outline-muted)] rounded-2xl overflow-hidden bg-white">
                        <Header
                            logo="STAYLOOK"
                            navItems={[{ label: 'Home', href: '#' }, { label: 'Pricing', href: '#' }]}
                        />
                    </div>
                );
            // New Interactive Components
            case 'modal':
                return (
                    <VStack gap={6} className="w-full">
                        <Text variant="muted">Click the button to open a modal dialog.</Text>
                        <ModalDemo />
                    </VStack>
                );
            case 'tabs':
                return (
                    <VStack gap={6} className="w-full max-w-lg">
                        <TabsDemo />
                    </VStack>
                );
            case 'accordion':
                return (
                    <div className="w-full max-w-md">
                        <Accordion
                            items={[
                                { id: '1', title: 'What is Staylook?', content: 'Staylook is a modern design system focused on being Curved, Editorial, Minimal, and Selective Expressive.' },
                                { id: '2', title: 'How do I get started?', content: 'Install the package via npm and import the components you need. All components follow the same design principles.' },
                                { id: '3', title: 'Is it accessible?', content: 'Yes! All components are built with accessibility in mind, including keyboard navigation and ARIA labels.' },
                            ]}
                        />
                    </div>
                );
            case 'dropdown':
                return (
                    <Dropdown
                        trigger={<DropdownButton label="Actions" />}
                        items={[
                            { id: 'edit', label: 'Edit', icon: <Edit className="size-4" /> },
                            { id: 'settings', label: 'Settings', icon: <Settings className="size-4" /> },
                            { id: 'divider', label: '', divider: true },
                            { id: 'delete', label: 'Delete', icon: <Trash className="size-4" />, danger: true },
                        ]}
                    />
                );
            case 'toast':
                return (
                    <VStack gap={4} className="w-full max-w-md">
                        <Toast
                            id="demo"
                            title="Success!"
                            description="Your changes have been saved."
                            variant="success"
                            duration={0}
                            onDismiss={() => { }}
                        />
                        <Toast
                            id="demo2"
                            title="Error"
                            description="Something went wrong."
                            variant="error"
                            duration={0}
                            onDismiss={() => { }}
                        />
                    </VStack>
                );
            case 'breadcrumb':
                return (
                    <Breadcrumb
                        items={[
                            { label: 'Products', href: '#' },
                            { label: 'Category', href: '#' },
                            { label: 'Current Page' },
                        ]}
                    />
                );
            case 'table':
                return (
                    <div className="w-full">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Project</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[
                                    { client: 'Acme Corp', project: 'Design System', status: 'Active', amount: '$4,500.00' },
                                    { client: 'Vercel', project: 'Analytics Dashboard', status: 'Completed', amount: '$12,200.00' },
                                    { client: 'Stripe', project: 'Payment Flow', status: 'Pending', amount: '$8,900.00' },
                                ].map((row, i) => (
                                    <TableRow key={i}>
                                        <TableCell className="font-medium">{row.client}</TableCell>
                                        <TableCell>{row.project}</TableCell>
                                        <TableCell>
                                            <Badge variant={row.status === 'Completed' ? 'success' : row.status === 'Active' ? 'expressive' : 'standard'}>
                                                {row.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                );
            case 'sheet':
                return (
                    <VStack gap={6}>
                        <Text variant="muted">Side drawers for complex navigation or task-based sub-flows.</Text>
                        <SheetDemo />
                    </VStack>
                );
            case 'popover':
                return (
                    <VStack gap={6} align="center">
                        <Text variant="muted">Floating content triggered by interaction.</Text>
                        <PopoverDemo />
                    </VStack>
                );
            case 'command':
                return (
                    <VStack gap={6} align="center">
                        <Text variant="muted">Search-first command palette interface (Press Cmd+K to demo interaction in production).</Text>
                        <CommandDemo />
                    </VStack>
                );
            // New Molecules
            case 'pricing-card':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PricingCard
                            name="Starter"
                            description="Perfect for individuals"
                            price="$9"
                            features={[
                                { text: '5 Projects', included: true },
                                { text: 'Basic Support', included: true },
                                { text: 'Analytics', included: false },
                            ]}
                        />
                        <PricingCard
                            name="Pro"
                            description="For growing teams"
                            price="$29"
                            featured
                            badge="Popular"
                            features={[
                                { text: 'Unlimited Projects', included: true },
                                { text: 'Priority Support', included: true },
                                { text: 'Advanced Analytics', included: true },
                            ]}
                        />
                    </div>
                );
            case 'testimonial':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Testimonial
                            quote="Staylook has completely transformed how we build our products. The design system is intuitive and beautiful."
                            author={{ name: 'Sarah Chen', role: 'Product Designer', company: 'Acme Inc' }}
                            rating={5}
                        />
                        <Testimonial
                            quote="The attention to detail is incredible. Every component feels polished and professional."
                            author={{ name: 'Mike Johnson', role: 'CTO', company: 'StartupCo' }}
                            rating={5}
                            variant="featured"
                        />
                    </div>
                );
            case 'cta-section':
                return (
                    <CTASection
                        title="Ready to get started?"
                        description="Join thousands of designers who use Staylook to build amazing products."
                        primaryAction={{ label: 'Start Free Trial', onClick: () => { } }}
                        secondaryAction={{ label: 'Learn More', onClick: () => { } }}
                        variant="expressive"
                    />
                );
            case 'footer-molecule':
                return (
                    <div className="w-full">
                        <Footer
                            logo={<span className="font-bold text-lg text-white">STAYLOOK</span>}
                            description="Modern design system for building beautiful interfaces."
                            sections={[
                                { title: 'Product', links: [{ label: 'Features', href: '#' }, { label: 'Pricing', href: '#' }] },
                                { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Contact', href: '#' }] },
                            ]}
                            socialLinks={[
                                { icon: <Twitter className="size-4" />, href: '#', label: 'Twitter' },
                                { icon: <Github className="size-4" />, href: '#', label: 'GitHub' },
                            ]}
                            copyright="© 2024 Staylook. All rights reserved."
                        />
                    </div>
                );
            case 'navbar':
                return (
                    <div className="w-full border border-[var(--sl-outline-muted)] rounded-2xl overflow-hidden">
                        <NavBar
                            logo={<span className="font-bold">STAYLOOK</span>}
                            items={[
                                { label: 'Features', href: '#' },
                                { label: 'Pricing', href: '#' },
                                { label: 'About', href: '#' },
                            ]}
                            actions={
                                <>
                                    <Button variant="ghost" size="sm">Sign In</Button>
                                    <Button variant="expressive" size="sm">Get Started</Button>
                                </>
                            }
                        />
                    </div>
                );
            case 'team-member':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TeamMember
                            name="Sarah Chen"
                            role="CEO & Founder"
                            bio="Leading the vision for Staylook."
                            socialLinks={[
                                { icon: <Twitter className="size-4" />, href: '#', label: 'Twitter' },
                            ]}
                        />
                        <TeamMember
                            name="Mike Johnson"
                            role="Head of Design"
                            bio="Crafting beautiful experiences."
                        />
                        <TeamMember
                            name="Emily Davis"
                            role="Lead Engineer"
                            variant="compact"
                        />
                    </div>
                );
            default:
                return <Text variant="muted">Component preview for "{id}" coming soon.</Text>;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[var(--sl-container-vibrant)] font-sans">
            {/* Sidebar */}
            <aside className="w-72 border-r border-[var(--sl-outline-muted)] bg-[var(--sl-container-calm)] flex flex-col shrink-0">
                <div className="p-6 border-b border-[var(--sl-outline-muted)]">
                    <HStack gap={2} align="center">
                        <div className="bg-black text-white p-2 rounded-xl">
                            <Layers size={20} />
                        </div>
                        <Heading size="lg" className="font-bold">Staylook DS</Heading>
                    </HStack>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-6">
                    {SECTIONS.map(section => (
                        <div key={section.id} className="space-y-2">
                            <Text size="xs" className="font-bold text-[var(--sl-standard-muted)] uppercase tracking-wider px-2">
                                {section.title}
                            </Text>
                            <div className="space-y-1">
                                {section.items.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === item.id
                                            ? 'bg-black text-white shadow-lg shadow-black/5'
                                            : 'text-[var(--sl-on-standard)] hover:bg-[var(--sl-container-muted)]'
                                            }`}
                                    >
                                        <item.icon size={16} />
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="p-4 border-t border-[var(--sl-outline-muted)]">
                    <Card className="p-4 bg-[var(--sl-container-vibrant)]">
                        <HStack justify="between" align="center">
                            <Text size="xs" className="font-bold">v1.0.0</Text>
                            <Badge variant="standard">Stable</Badge>
                        </HStack>
                    </Card>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[var(--sl-outline-muted)] px-8 py-6 flex justify-between items-center">
                    <VStack gap={1}>
                        <Heading size="2xl" className="capitalize">{activeTab.replace('-', ' ')}</Heading>
                        <Text variant="muted" size="sm">Native Staylook TSX Component Preview</Text>
                    </VStack>
                    <HStack gap={3}>
                        <Button variant="outline" size="sm">
                            <Code size={16} />
                            View Code
                        </Button>
                        <Button variant="standard" size="sm">
                            <ExternalLink size={16} />
                            Docs
                        </Button>
                    </HStack>
                </header>

                <div className="max-w-5xl mx-auto p-8 lg:p-12 space-y-12">
                    {/* Live Preview */}
                    <section className="space-y-4">
                        <HStack justify="between" align="end">
                            <Heading size="lg">Preview</Heading>
                            <Badge variant="expressive">Live Rendering</Badge>
                        </HStack>
                        <div className="min-h-[300px] border border-[var(--sl-outline-muted)] rounded-3xl p-12 bg-[var(--sl-container-calm)] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                            {renderPreview(activeTab)}
                        </div>
                    </section>

                    {/* Usage Guideline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8 border-l-4 border-l-black">
                            <VStack gap={4}>
                                <Heading size="md">Usage Guidelines</Heading>
                                <Text variant="muted">Follow standard implementation patterns. Ensure all colors use CSS variables to support dynamic themes.</Text>
                                <ul className="space-y-2">
                                    {['Accessibility first', 'Responsive by default', 'Consistent radius'].map(txt => (
                                        <li key={txt} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 size={14} className="text-green-500" />
                                            {txt}
                                        </li>
                                    ))}
                                </ul>
                            </VStack>
                        </Card>
                        <Card className="p-8 border-l-4 border-l-[var(--sl-on-expressive)]">
                            <VStack gap={4}>
                                <Heading size="md">Expressive Variants</Heading>
                                <Text variant="muted">Only use the expressive variant for key call-to-actions or featured content to maintain high visual hierarchy.</Text>
                                <Button variant="expressive" size="sm">Example Action</Button>
                            </VStack>
                        </Card>
                    </div>
                </div>
            </main>

            <Command
                open={commandOpen}
                onClose={() => setCommandOpen(false)}
                items={[
                    { id: '1', label: 'Search Components', description: 'Find atomic and interactive elements', icon: <Search size={20} />, onClick: () => setActiveTab('button') },
                    { id: '2', label: 'Design Tokens', description: 'View colors, radius, and spacing', icon: <Layers size={20} />, onClick: () => setActiveTab('tokens') },
                    { id: '3', label: 'View Dashboard', description: 'Go to the platform showcase demo', icon: <Layout size={20} />, onClick: () => window.location.reload() },
                ]}
            />
        </div>
    );
}

// Demo components for interactive previews
function ModalDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)} variant="standard">
                Open Modal
            </Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title="Modal Title"
                description="This is a modal dialog example."
            >
                <VStack gap={4}>
                    <Text>This is the modal content. You can put anything here.</Text>
                    <ModalFooter>
                        <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button variant="expressive" onClick={() => setOpen(false)}>Confirm</Button>
                    </ModalFooter>
                </VStack>
            </Modal>
        </>
    );
}

function TabsDemo() {
    const [activeTab, setActiveTab] = React.useState('tab1');
    return (
        <VStack gap={6} className="w-full">
            <Tabs
                items={[
                    { id: 'tab1', label: 'Overview' },
                    { id: 'tab2', label: 'Features' },
                    { id: 'tab3', label: 'Settings' },
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                variant="pills"
            />
            <TabPanel id="tab1" activeTab={activeTab}>
                <Card className="p-6">
                    <Text>This is the Overview tab content.</Text>
                </Card>
            </TabPanel>
            <TabPanel id="tab2" activeTab={activeTab}>
                <Card className="p-6">
                    <Text>This is the Features tab content.</Text>
                </Card>
            </TabPanel>
            <TabPanel id="tab3" activeTab={activeTab}>
                <Card className="p-6">
                    <Text>This is the Settings tab content.</Text>
                </Card>
            </TabPanel>
        </VStack>
    );
}

function SheetDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <HStack gap={4}>
            <Button onClick={() => setOpen(true)} variant="outline">Open Right Sheet</Button>
            <Sheet
                open={open}
                onClose={() => setOpen(false)}
                title="Project Settings"
                description="Manage your project preferences and team access."
            >
                <VStack gap={6}>
                    <VStack gap={4}>
                        <VStack gap={2}>
                            <Label>Project Name</Label>
                            <Input defaultValue="Staylook Design System" />
                        </VStack>
                        <VStack gap={2}>
                            <Label>Visibility</Label>
                            <Select>
                                <option>Public</option>
                                <option>Private</option>
                                <option>Internal</option>
                            </Select>
                        </VStack>
                    </VStack>
                    <SheetFooter>
                        <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button variant="expressive" onClick={() => setOpen(false)}>Save Changes</Button>
                    </SheetFooter>
                </VStack>
            </Sheet>
        </HStack>
    );
}

function PopoverDemo() {
    return (
        <Popover
            trigger={<Button variant="outline">View Profile Info</Button>}
        >
            <VStack gap={4} className="w-64">
                <HStack gap={3} align="center">
                    <Avatar size="sm" fallback="SC" />
                    <div>
                        <Text className="font-bold">Sarah Chen</Text>
                        <Text size="xs" variant="muted">Product Designer</Text>
                    </div>
                </HStack>
                <Divider />
                <VStack gap={1}>
                    <Button variant="ghost" size="sm" className="justify-start">View Profile</Button>
                    <Button variant="ghost" size="sm" className="justify-start">Account Settings</Button>
                </VStack>
            </VStack>
        </Popover>
    );
}

function CommandDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)} variant="standard">Open Command Palette</Button>
            <Command
                open={open}
                onClose={() => setOpen(false)}
                items={[
                    { id: '1', label: 'Search Projects', description: 'Find existing design files', icon: <Search size={20} />, shortcut: '⌘P' },
                    { id: '2', label: 'Create New Page', description: 'Add a new layout to your project', icon: <Layout size={20} />, shortcut: '⌘N' },
                    { id: '3', label: 'System Settings', description: 'Manage your global preferences', icon: <Settings size={20} />, shortcut: '⌘,' },
                    { id: '4', label: 'Profile Settings', description: 'Update your personal information', icon: <User size={20} /> },
                ]}
            />
        </>
    );
}
