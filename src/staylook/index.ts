/**
 * Staylook Design System - Component Exports
 * 
 * Curved, Editorial, Minimal, Expressive
 */

// Core Components
export { Button, buttonVariants, type ButtonProps } from './components/button';
export { Input, type InputProps } from './components/input';
export { Textarea, type TextareaProps } from './components/textarea';
export { Checkbox } from './components/checkbox';
export { Badge, badgeVariants, type BadgeProps } from './components/badge';
export { Label, type LabelProps } from './components/label';
export { Radio, RadioGroup, type RadioProps, type RadioGroupProps } from './components/radio';
export { Switch, type SwitchProps } from './components/switch';
export { Select, type SelectProps } from './components/select';
export { Slider } from './components/slider';

// Typography Components
export { Text, type TextProps } from './components/text';
export { Heading, type HeadingProps } from './components/heading';
export { Link, type LinkProps } from './components/link';
export { Kbd } from './components/kbd';

// Layout Components
export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from './components/card';
export { Container, containerVariants, type ContainerProps } from './components/container';
export { Stack, VStack, HStack, stackVariants, type StackProps } from './components/stack';
export { Divider, Separator, type DividerProps } from './components/divider';

// Feedback Components
export {
    Alert,
    AlertTitle,
    AlertDescription,
    alertVariants,
} from './components/alert';
export { Spinner, spinnerVariants, type SpinnerProps } from './components/spinner';
export { Skeleton } from './components/skeleton';
export { Progress } from './components/progress';
export { Ping } from './components/ping';
export { Tooltip, type TooltipProps } from './components/tooltip';

// Interactive Components (NEW)
export { Modal, ModalFooter, type ModalProps } from './components/modal';
export { Tabs, TabPanel, type TabsProps, type TabItem, type TabPanelProps } from './components/tabs';
export { Accordion, type AccordionProps, type AccordionItem } from './components/accordion';
export { Toast, ToastContainer, type ToastProps, type ToastContainerProps } from './components/toast';
export { Breadcrumb, type BreadcrumbProps, type BreadcrumbItem } from './components/breadcrumb';
export { Dropdown, DropdownButton, type DropdownProps, type DropdownItem } from './components/dropdown';

// Media & Icons
export { Avatar } from './components/avatar';
export { Icon, iconVariants, type IconProps } from './components/icon';
export { Image, imageVariants, type ImageProps } from './components/image';

// Molecules
export { Header, type HeaderProps } from './molecules/header';
export { Feature, type FeatureProps } from './molecules/feature';
export { Sidebar, type SidebarProps, type SidebarItem } from './molecules/sidebar';
export { Hero, type HeroProps } from './molecules/hero';
export { Stat, type StatProps } from './molecules/stat';

// Molecules (NEW)
export { PricingCard, type PricingCardProps, type PricingFeature } from './molecules/pricing-card';
export { Testimonial, type TestimonialProps } from './molecules/testimonial';
export { CTASection, type CTASectionProps } from './molecules/cta-section';
export { Footer, type FooterProps, type FooterSection, type FooterLink } from './molecules/footer';
export { NavBar, type NavBarProps, type NavItem } from './molecules/navbar';
export { TeamMember, type TeamMemberProps } from './molecules/team-member';

// Templates
export { LandingTemplate, type LandingTemplateProps } from './templates/landing-template';
export { ProductTemplate, type ProductTemplateProps } from './templates/product-template';

// Templates (NEW)
export { AuthTemplate, type AuthTemplateProps } from './templates/auth-template';
export { DashboardTemplate, type DashboardTemplateProps } from './templates/dashboard-template';
export { PricingTemplate, type PricingTemplateProps, type PricingPlan } from './templates/pricing-template';

// Tokens
export * from './tokens';

