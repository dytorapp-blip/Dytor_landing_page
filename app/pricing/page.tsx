import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, Star, Zap, Shield, Users, Clock, MessageSquare, Calendar, Download, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { BeamsBackground } from '@/components/ui/beams-background';
import { Breadcrumbs, BreadcrumbSchema } from '@/components/ui/breadcrumbs';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Pricing Plans - Dytor Pro Stage Timer Software | Free Trial Available',
  description: 'Choose the perfect Dytor Pro plan for your event management needs. Free starter plan available. Professional plans start at $12/month. No setup fees, cancel anytime.',
  keywords: [
    'stage timer pricing',
    'event management software cost',
    'show control software plans',
    'production timer pricing',
    'stage manager software cost',
    'event timer subscription',
    'conference management pricing',
    'live event software plans'
  ],
  openGraph: {
    title: 'Pricing Plans - Dytor Pro Stage Timer Software',
    description: 'Choose the perfect Dytor Pro plan for your event management needs. Free starter plan available. Professional plans start at $12/month.',
    images: ['/assets/Dytor_logo_name.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans - Dytor Pro Stage Timer Software',
    description: 'Choose the perfect Dytor Pro plan for your event management needs. Free starter plan available.',
    images: ['/assets/Dytor_logo_name.png'],
  },
  alternates: {
    canonical: 'https://dytor.app/pricing',
  },
};

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

const pricingPlans = [
    {
        name: 'Starter',
        price: '$0',
        period: 'forever',
        description: 'Perfect for small events and personal use',
        features: [
            'Local controller interface',
            'Secondary display window',
            'Basic timer controls',
            'Simple message display',
            'Single device operation',
            'Community support'
        ],
        buttonText: 'Get Started Free',
        buttonVariant: 'outline' as const,
        popular: false,
        icon: Clock
    },
    {
        name: 'Pro',
        price: '$12',
        period: 'per month',
        description: 'For professional productions and teams',
        features: [
            'Everything in Starter',
            'Remote dashboards with roles',
            'QR code authentication',
            'Message flashing & presets',
            'Schedule automation',
            'Records & exports',
            'Multi-device sync',
            'Priority support'
        ],
        buttonText: 'Start Pro Trial',
        buttonVariant: 'default' as const,
        popular: true,
        icon: Zap
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact us',
        description: 'For large organizations and custom needs',
        features: [
            'Everything in Pro',
            'On-premise deployment',
            'SSO integration',
            'Advanced audit logs',
            'Custom integrations',
            'Dedicated support',
            'SLA guarantees',
            'Training & onboarding'
        ],
        buttonText: 'Contact Sales',
        buttonVariant: 'outline' as const,
        popular: false,
        icon: Shield
    }
];

const featureCategories = [
    {
        title: 'Core Features',
        features: [
            { name: 'Precision Timing', description: 'Millisecond-accurate timers with drift correction', icon: Clock },
            { name: 'Multi-Device Sync', description: 'Real-time synchronization across all devices', icon: Globe },
            { name: 'Role-Based Access', description: 'Admin, queue manager, speaker, and viewer roles', icon: Users },
            { name: 'Message System', description: 'Live messaging with flash cues and presets', icon: MessageSquare }
        ]
    },
    {
        title: 'Advanced Features',
        features: [
            { name: 'Schedule Automation', description: 'Auto-advance schedules with records', icon: Calendar },
            { name: 'Data Export', description: 'Export timing data and performance reports', icon: Download },
            { name: 'Secure Access', description: 'QR-based authentication with expiry', icon: Lock },
            { name: 'Custom Displays', description: 'Customizable backgrounds and layouts', icon: Star }
        ]
    }
];

const testimonials = [
    {
        quote: "DYTOR transformed our conference management. The remote roles feature is a game-changer.",
        author: "Sarah Chen",
        role: "Event Director, TechConf 2024",
        rating: 5
    },
    {
        quote: "The precision timing and multi-device sync never fails us. Essential for live productions.",
        author: "Marcus Rodriguez",
        role: "Stage Manager, ArenaLive",
        rating: 5
    },
    {
        quote: "Schedule automation and records make post-event analysis effortless. Highly recommended.",
        author: "Emily Watson",
        role: "Production Lead, BroadcastOne",
        rating: 5
    }
];

const faqs = [
    {
        question: "Can I switch plans anytime?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
        question: "Is there a free trial for Pro?",
        answer: "Yes, we offer a 14-day free trial for the Pro plan. No credit card required to start your trial."
    },
    {
        question: "What happens to my data if I cancel?",
        answer: "Your data is preserved for 30 days after cancellation. You can export all your timing records and schedules during this period."
    },
    {
        question: "Do you offer educational discounts?",
        answer: "Yes, we offer 50% off for educational institutions and non-profit organizations. Contact us for verification."
    },
    {
        question: "Can I use DYTOR offline?",
        answer: "The Starter plan requires internet connectivity. Pro and Enterprise plans support offline mode for critical productions."
    },
    {
        question: "What support do you provide?",
        answer: "Starter includes community support. Pro includes priority email support. Enterprise includes dedicated support with SLA guarantees."
    }
];

export default function PricingPage() {
    const breadcrumbItems = [
        { label: 'Pricing', href: '/pricing' }
    ];

    return (
        <BeamsBackground intensity="medium" className="min-h-screen">
            <BreadcrumbSchema items={breadcrumbItems} />
            <main className="overflow-hidden">
                <header className="sr-only">
                    <h1>Pricing</h1>
                    <p>Plans and pricing for DYTOR show control software.</p>
                </header>
                
                {/* Breadcrumbs */}
                <div className="pt-20 pb-4">
                    <div className="mx-auto max-w-7xl px-6">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>
                </div>
                
                {/* Hero Section */}
                <section className="pt-8 pb-16">
                    <div className="mx-auto max-w-7xl px-6">
                        <AnimatedGroup variants={transitionVariants}>
                            <div className="text-center mb-16">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                    Simple, Transparent Pricing
                                </h1>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                    Start free and scale as you grow. No hidden fees, no surprises. 
                                    Choose the plan that fits your production needs.
                                </p>
                                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <span>14-day free trial</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <span>No setup fees</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <span>Cancel anytime</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>

                        {/* Pricing Cards */}
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.3,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                        >
                            {pricingPlans.map((plan, index) => {
                                const IconComponent = plan.icon;
                                return (
                                    <div
                                        key={plan.name}
                                        className={cn(
                                            "relative bg-background/50 backdrop-blur-lg border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:transform hover:-translate-y-2",
                                            plan.popular 
                                                ? "border-cyan-500/40 ring-1 ring-cyan-500/40 shadow-lg shadow-cyan-500/10" 
                                                : "border-white/10 hover:border-white/20"
                                        )}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                                    Most Popular
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{plan.name}</h3>
                                                <p className="text-sm text-gray-400">{plan.description}</p>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-bold">{plan.price}</span>
                                                {plan.period !== 'forever' && (
                                                    <span className="text-gray-400">{plan.period}</span>
                                                )}
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-8 flex-1">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            asChild
                                            variant={plan.buttonVariant}
                                            size="lg"
                                            className={cn(
                                                "w-full",
                                                plan.popular && "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500"
                                            )}
                                        >
                                            <Link href="#contact">
                                                {plan.buttonText}
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                );
                            })}
                        </AnimatedGroup>
                    </div>
                </section>

                {/* Feature Comparison */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Everything You Need
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Comprehensive features designed for professional productions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {featureCategories.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="space-y-6">
                                    <h3 className="text-2xl font-bold text-center lg:text-left">{category.title}</h3>
                                    <div className="space-y-4">
                                        {category.features.map((feature, featureIndex) => {
                                            const IconComponent = feature.icon;
                                            return (
                                                <div key={featureIndex} className="bg-background/30 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                                            <IconComponent className="w-5 h-5 text-white" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold mb-2">{feature.name}</h4>
                                                            <p className="text-sm text-gray-400">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Loved by Production Teams
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                See what professionals say about DYTOR
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                                    <div>
                                        <div className="font-semibold">{testimonial.author}</div>
                                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray-400">
                                Everything you need to know about DYTOR pricing
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32">
                    <div className="mx-auto max-w-4xl px-6 text-center">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of production teams who trust DYTOR for their most important events
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500">
                                    <Link href="#contact">
                                        Start Free Trial
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="px-8 py-4">
                                    <Link href="#demo">
                                        Schedule Demo
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </BeamsBackground>
    );
}

