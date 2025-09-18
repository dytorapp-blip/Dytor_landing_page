'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X, Users, Target, Zap, Globe, Award, Heart } from 'lucide-react'
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

export function AboutSection() {
    return (
        <BeamsBackground intensity="medium" className="min-h-screen">
            <AboutHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                {/* Hero Section */}
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                                {/* Left side - Copy */}
                                <div className="flex-1 text-center lg:text-left">
                                    <AnimatedGroup variants={transitionVariants}>
                                        <h1
                                            className="mt-8 max-w-4xl mx-auto lg:mx-0 text-balance text-2xl md:text-3xl lg:mt-16 xl:text-4xl font-extrabold" style={{fontFamily: 'Montserrat, sans-serif'}}>
                                            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight uppercase">
                                                About
                                            </span>
                                            <span className="block bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent leading-tight uppercase">
                                                DYTOR
                                            </span>
                                        </h1>
                                        <p
                                            className="mx-auto lg:mx-0 mt-4 max-w-2xl text-balance text-base">
                                            Born from the frustration of unreliable show control, DYTOR represents the next evolution in professional stage timing and production management.
                                        </p>
                                    </AnimatedGroup>

                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="mt-12 flex flex-col items-center lg:items-start justify-center gap-2 md:flex-row">
                                        <div
                                            key={1}
                                            className="bg-foreground/10 rounded-[14px] border p-0.5">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="rounded-xl px-5 text-base">
                                                <Link href="/">
                                                    <span className="text-nowrap">Back to Home</span>
                                                </Link>
                                            </Button>
                                        </div>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="h-10.5 rounded-xl px-5">
                                            <Link href="#mission">
                                                <span className="text-nowrap">Our Mission</span>
                                            </Link>
                                        </Button>
                                    </AnimatedGroup>
                                </div>

                                {/* Right side - Hero Image */}
                                <div className="flex-1 flex justify-center lg:justify-end">
                                    <div className="w-full max-w-md lg:max-w-lg">
                                        <Image
                                            src="/app/resources/heropic.png"
                                            alt="DYTOR Hero"
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover transform -rotate-90"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section id="mission" className="py-20">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Our Mission
                        </h2>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                            To eliminate the chaos of live production through intelligent, reliable, and intuitive show control technology
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Precision</h3>
                            <p className="text-gray-400 mb-4">Millisecond-accurate timing that never fails when the show must go on.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">±0.001s accuracy</p>
                        </div>
                        
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                            <p className="text-gray-400 mb-4">Role-based access that puts the right tools in the right hands at the right time.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Team-first design</p>
                        </div>
                        
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-gray-400 mb-4">Cutting-edge technology that anticipates your needs before you realize them.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">Future-ready</p>
                        </div>
                        
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                            <p className="text-gray-400 mb-4">Professional-grade tools accessible to productions of any size, anywhere.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Universal access</p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                The Story Behind DYTOR
                            </h2>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p>
                                    DYTOR was born from a simple frustration: why should professional productions struggle with unreliable, 
                                    outdated timing systems when technology has advanced so far? Our founders, veterans of live events, 
                                    theater, and broadcast production, experienced firsthand the chaos that ensues when timing fails.
                                </p>
                                <p>
                                    We envisioned a world where show control is intuitive, reliable, and powerful enough to handle 
                                    the most demanding productions while remaining accessible to smaller teams. DYTOR represents 
                                    that vision realized—a platform that doesn't just meet current needs but anticipates future ones.
                                </p>
                                <p>
                                    Every feature in DYTOR has been battle-tested in real productions, from intimate theater 
                                    performances to large-scale conferences and live broadcasts. We understand that when the 
                                    curtain rises, there's no room for error.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Our Values
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The principles that guide everything we build
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                            <p className="text-gray-400">We don't settle for "good enough." Every feature is crafted with the precision and reliability that professional productions demand.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Empathy</h3>
                            <p className="text-gray-400">We understand the pressure of live production. Our tools are designed to reduce stress, not add to it.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                            <p className="text-gray-400">We're constantly pushing boundaries, exploring new technologies, and reimagining what show control can be.</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Built by Professionals, for Professionals
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our team combines decades of production experience with cutting-edge software development
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                        Production Veterans
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Our founders have worked on everything from Broadway shows to major tech conferences. 
                                        They've felt the panic of a failed timer, the frustration of poor communication, 
                                        and the relief when everything works perfectly.
                                    </p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li>• 50+ years combined production experience</li>
                                        <li>• Worked with Fortune 500 companies</li>
                                        <li>• Broadway and West End credits</li>
                                        <li>• Live broadcast expertise</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                        Technology Innovators
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Our engineering team brings expertise from top tech companies, ensuring DYTOR 
                                        uses the latest technologies while maintaining the reliability that live production demands.
                                    </p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li>• Former Google, Microsoft, and Apple engineers</li>
                                        <li>• Real-time systems specialists</li>
                                        <li>• WebRTC and WebSocket experts</li>
                                        <li>• Open source contributors</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Ready to Experience the Future?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of production teams who have already made the switch to DYTOR
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/30">
                                <Link href="/">Start Free Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-10 py-5 border-cyan-500/40 hover:bg-cyan-500/10">
                                <Link href="/#contact">Schedule Demo</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </BeamsBackground>
    )
}

const menuItems = [
    { name: 'Features', href: '/#features' },
    { name: 'Use Case', href: '/#use-cases' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' },
]

const AboutHeader = () => {
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
                                    <Link href="/">
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
