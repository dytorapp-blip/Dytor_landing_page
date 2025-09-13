'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X, Clock, Users, Mic, Camera, Calendar, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { BeamsBackground } from '@/components/ui/beams-background'
import { cn } from '@/lib/utils'

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
}

const useCases = [
    {
        id: 1,
        title: "Conference & Events",
        subtitle: "Professional Event Management",
        description: "Transform your conferences with precise timing control. DYTOR's role-based dashboards let speakers focus on content while stage managers orchestrate seamless transitions. Real-time messaging keeps everyone synchronized, and schedule automation ensures your event runs like clockwork.",
        features: [
            "Speaker countdown timers with visual cues",
            "Stage manager remote control dashboard", 
            "Live messaging system for announcements",
            "Automated schedule progression",
            "Multi-screen display synchronization"
        ],
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
        icon: Users,
        gradient: "from-cyan-500 to-blue-600"
    },
    {
        id: 2,
        title: "Theater Productions",
        subtitle: "Dramatic Timing Precision",
        description: "Elevate theatrical performances with millisecond-accurate timing. DYTOR's neural networks maintain perfect sync across lighting, sound, and stage cues. Directors get real-time control while actors receive subtle countdown notifications, creating flawless productions every night.",
        features: [
            "Cue-based timing with visual countdowns",
            "Director's remote control interface",
            "Actor notification system",
            "Lighting and sound synchronization",
            "Performance recording and analysis"
        ],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
        icon: Camera,
        gradient: "from-purple-500 to-pink-600"
    },
    {
        id: 3,
        title: "Broadcast & Live TV",
        subtitle: "Television Production Control",
        description: "Master live television with broadcast-grade timing precision. DYTOR's holographic displays provide crystal-clear countdowns visible from any angle. Producers maintain complete control while talent receives discrete timing cues, ensuring seamless live broadcasts.",
        features: [
            "Broadcast-quality countdown displays",
            "Producer control dashboard",
            "Talent cue notification system",
            "Commercial break automation",
            "Live broadcast synchronization"
        ],
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center",
        icon: Camera,
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        id: 4,
        title: "Podcast & Streaming",
        subtitle: "Content Creation Excellence",
        description: "Perfect your podcast and streaming content with professional timing tools. DYTOR's telepathic messaging system keeps hosts and guests perfectly synchronized. Segment timing, ad break management, and live audience interaction create engaging content every time.",
        features: [
            "Host and guest timing coordination",
            "Segment duration tracking",
            "Ad break management",
            "Live audience interaction tools",
            "Content recording and editing sync"
        ],
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop&crop=center",
        icon: Mic,
        gradient: "from-orange-500 to-red-600"
    },
    {
        id: 5,
        title: "Educational Presentations",
        subtitle: "Academic Excellence",
        description: "Enhance educational experiences with intelligent timing systems. DYTOR adapts to different learning styles with customizable countdown displays. Teachers maintain control while students receive appropriate timing cues, creating focused and engaging learning environments.",
        features: [
            "Adaptive timing for different subjects",
            "Teacher control interface",
            "Student-friendly countdown displays",
            "Break and transition management",
            "Learning analytics and insights"
        ],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
        icon: Calendar,
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        id: 6,
        title: "Corporate Training",
        subtitle: "Professional Development",
        description: "Streamline corporate training sessions with enterprise-grade timing control. DYTOR's dimensional sync ensures all participants stay aligned across multiple locations. Trainers can focus on content delivery while the system manages timing, breaks, and participant engagement.",
        features: [
            "Multi-location synchronization",
            "Trainer dashboard with participant view",
            "Break and activity timing",
            "Participant engagement tracking",
            "Training session analytics"
        ],
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&crop=center",
        icon: MessageSquare,
        gradient: "from-rose-500 to-pink-600"
    }
]

export default function UseCasesPage() {
    return (
        <BeamsBackground intensity="medium" className="min-h-screen">
            <UseCaseHeader />
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-24 md:pt-36 pb-20">
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center">
                            <AnimatedGroup variants={transitionVariants}>
                                <h1 className="text-4xl md:text-6xl font-extrabold mb-6" style={{fontFamily: 'Montserrat, sans-serif'}}>
                                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent leading-tight">
                                        Use Cases
                                    </span>
                                </h1>
                                <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-300 leading-relaxed">
                                    Discover how DYTOR transforms timing control across industries. From conferences to theater, 
                                    broadcasting to education — see how professionals achieve perfect synchronization.
                                </p>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>

                {/* Use Cases Grid */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        {useCases.map((useCase, index) => {
                            const IconComponent = useCase.icon;
                            const isEven = index % 2 === 0;
                            
                            return (
                                <div key={useCase.id} className="mb-32 last:mb-0">
                                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                                        {/* Text Content */}
                                        <div className="flex-1">
                                            <AnimatedGroup variants={transitionVariants}>
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6`}>
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                                    {useCase.title}
                                                </h2>
                                                <h3 className="text-xl text-gray-300 mb-6 font-medium">
                                                    {useCase.subtitle}
                                                </h3>
                                                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                                    {useCase.description}
                                                </p>
                                                <ul className="space-y-3 mb-8">
                                                    {useCase.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-start gap-3">
                                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient} mt-2 flex-shrink-0`}></div>
                                                            <span className="text-gray-300">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Button asChild size="lg" className={`bg-gradient-to-r ${useCase.gradient} hover:opacity-90`}>
                                                    <Link href="#demo">
                                                        <span>Try This Use Case</span>
                                                        <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            </AnimatedGroup>
                                        </div>

                                        {/* Image */}
                                        <div className="flex-1">
                                            <div className="relative group">
                                                <div className={`absolute -inset-4 bg-gradient-to-r ${useCase.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                                                <div className="relative bg-background/80 rounded-2xl p-4 backdrop-blur-sm border border-white/10 overflow-hidden">
                                                    <img
                                                        src={useCase.image}
                                                        alt={useCase.title}
                                                        className="w-full h-80 object-cover rounded-xl"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
                                                                <span className="text-sm font-medium text-white">Live Demo</span>
                                                            </div>
                                                            <p className="text-xs text-gray-300">See {useCase.title.toLowerCase()} in action</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <AnimatedGroup variants={transitionVariants}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Ready to Transform Your Timing?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                                Join thousands of professionals who've already elevated their productions with DYTOR's 
                                next-generation timing control.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/30">
                                    <Link href="#demo">Start Free Trial</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="px-10 py-5 border-cyan-500/40 hover:bg-cyan-500/10">
                                    <Link href="#contact">Request Demo</Link>
                                </Button>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </BeamsBackground>
    )
}

const menuItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/#about' },
]

const UseCaseHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/assets/Dytor_logo_name.png"
            alt="DYTOR Logo"
            width={120}
            height={32}
            className={cn('h-8 w-auto', className)}
            priority
        />
    )
}
