/**
 * Staylook Design System - Component Exports
 * 
 * Curved, Editorial, Minimal, Expressive
 */

// Core Components
export { Button, buttonVariants, type ButtonProps } from './components/button';
export { Input, type InputProps } from './components/input';
export { Textarea, type TextareaProps } from './components/textarea';
export { Checkbox, type CheckboxProps } from './components/checkbox';
export { Badge, badgeVariants, type BadgeProps } from './components/badge';
export { Label, type LabelProps } from './components/label';
export { Radio, RadioGroup, type RadioProps, type RadioGroupProps } from './components/radio';
export { Switch, type SwitchProps } from './components/switch';

// Typography Components
export { Text, type TextProps } from './components/text';
export { Heading, type HeadingProps } from './components/heading';
export { Link, type LinkProps } from './components/link';

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

// Tokens
export * from './tokens';
