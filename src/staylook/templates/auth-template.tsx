/**
 * Staylook Auth Template
 * 
 * Design Principles:
 * - Editorial: Clean, focused forms
 * - Curved: Consistent radius throughout
 * - Minimal: Distraction-free authentication
 * - Expressive: Strategic brand accent
 */

import * as React from 'react';

import { Button } from '../components/button';
import { Input } from '../components/input';
import { Checkbox } from '../components/checkbox';

import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

export interface AuthTemplateProps {
    variant?: 'login' | 'register' | 'forgot-password';
    logo?: React.ReactNode;
    title?: string;
    subtitle?: string;
    onSubmit?: (data: Record<string, string>) => void;
    showSocialLogin?: boolean;
    backgroundImage?: string;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
    variant = 'login',
    logo,
    title,
    subtitle,
    onSubmit,
    showSocialLogin = true,
    backgroundImage,
}) => {
    const [formData, setFormData] = React.useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const defaultTitle = {
        login: 'Welcome back',
        register: 'Create your account',
        'forgot-password': 'Reset your password',
    };

    const defaultSubtitle = {
        login: 'Sign in to continue to your dashboard',
        register: 'Start your 14-day free trial',
        'forgot-password': "We'll send you a reset link",
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Panel - Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-[var(--sl-container-vibrant)]">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    {logo && <div className="mb-8">{logo}</div>}

                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-[length:var(--sl-text-3xl)] font-bold text-[var(--sl-on-standard)]">
                            {title || defaultTitle[variant]}
                        </h1>
                        <p className="text-[length:var(--sl-text-base)] text-[var(--sl-standard-muted)]">
                            {subtitle || defaultSubtitle[variant]}
                        </p>
                    </div>

                    {/* Social Login */}
                    {showSocialLogin && variant !== 'forgot-password' && (
                        <>
                            <div className="flex gap-3">
                                <Button variant="outline" className="flex-1 gap-2">
                                    <Chrome className="size-5" />
                                    Google
                                </Button>
                                <Button variant="outline" className="flex-1 gap-2">
                                    <Github className="size-5" />
                                    GitHub
                                </Button>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-[var(--sl-outline-muted)]" />
                                </div>
                                <div className="relative flex justify-center text-[length:var(--sl-text-xs)]">
                                    <span className="px-4 bg-[var(--sl-container-vibrant)] text-[var(--sl-standard-muted)]">
                                        Or continue with email
                                    </span>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {variant === 'register' && (
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--sl-standard-muted)]" />
                                <Input
                                    type="text"
                                    placeholder="Full name"
                                    className="pl-12"
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                            </div>
                        )}

                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--sl-standard-muted)]" />
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="pl-12"
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                        </div>

                        {variant !== 'forgot-password' && (
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--sl-standard-muted)]" />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="pl-12"
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                />
                            </div>
                        )}

                        {variant === 'register' && (
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--sl-standard-muted)]" />
                                <Input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="pl-12"
                                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                />
                            </div>
                        )}

                        {variant === 'login' && (
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-[length:var(--sl-text-sm)] text-[var(--sl-on-standard)]">
                                    <Checkbox />
                                    Remember me
                                </label>
                                <a
                                    href="#"
                                    className="text-[length:var(--sl-text-sm)] text-[var(--sl-on-expressive)] hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        )}

                        {variant === 'register' && (
                            <label className="flex items-start gap-2 text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)]">
                                <Checkbox className="mt-0.5" />
                                <span>
                                    I agree to the{' '}
                                    <a href="#" className="text-[var(--sl-on-expressive)] hover:underline">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-[var(--sl-on-expressive)] hover:underline">
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>
                        )}

                        <Button variant="expressive" size="lg" className="w-full gap-2">
                            {variant === 'login' && 'Sign in'}
                            {variant === 'register' && 'Create account'}
                            {variant === 'forgot-password' && 'Send reset link'}
                            <ArrowRight className="size-4" />
                        </Button>
                    </form>

                    {/* Footer Links */}
                    <p className="text-center text-[length:var(--sl-text-sm)] text-[var(--sl-standard-muted)]">
                        {variant === 'login' && (
                            <>
                                Don't have an account?{' '}
                                <a href="#" className="text-[var(--sl-on-expressive)] font-medium hover:underline">
                                    Sign up
                                </a>
                            </>
                        )}
                        {variant === 'register' && (
                            <>
                                Already have an account?{' '}
                                <a href="#" className="text-[var(--sl-on-expressive)] font-medium hover:underline">
                                    Sign in
                                </a>
                            </>
                        )}
                        {variant === 'forgot-password' && (
                            <>
                                Remember your password?{' '}
                                <a href="#" className="text-[var(--sl-on-expressive)] font-medium hover:underline">
                                    Sign in
                                </a>
                            </>
                        )}
                    </p>
                </div>
            </div>

            {/* Right Panel - Image/Branding */}
            <div
                className="hidden lg:flex flex-1 items-center justify-center p-12 bg-[var(--sl-on-standard)] text-white"
                style={
                    backgroundImage
                        ? {
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }
                        : undefined
                }
            >
                {!backgroundImage && (
                    <div className="max-w-md text-center space-y-6">
                        <div className="size-20 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                            <div className="size-10 rounded-full bg-[var(--sl-on-expressive)]" />
                        </div>
                        <h2 className="text-[length:var(--sl-text-2xl)] font-bold">
                            Build something amazing
                        </h2>
                        <p className="text-[length:var(--sl-text-base)] text-white/70 leading-relaxed">
                            Join thousands of developers who trust our platform to build, deploy, and scale their applications.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

AuthTemplate.displayName = 'AuthTemplate';
