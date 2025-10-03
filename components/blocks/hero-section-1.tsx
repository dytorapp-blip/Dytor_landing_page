'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
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

export function HeroSection() {
    return (
        <BeamsBackground intensity="medium" className="min-h-screen">
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative min-h-screen flex items-center pt-20 md:pt-36 pb-12">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6 w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
                                {/* Hero Content - Left Side */}
                                <div className="flex flex-col justify-center items-center md:items-start space-y-8 text-center md:text-left">
                                <AnimatedGroup variants={transitionVariants}>
                                        <h1
                                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                                            <div className="text-white dark:text-white">
                                                Professional Show Control<br />
                                                & Stage Management
                                            </div>
                                    </h1>
                                    <p
                                            className="mt-8 max-w-2xl text-sm md:text-base text-gray-200 dark:text-gray-200 leading-relaxed">
                                            Control your event timing, schedule<br />
                                            and communications from anywhere.
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
                                        className="flex flex-row gap-3 justify-center md:justify-start flex-nowrap">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-6 md:px-8 py-3 text-sm md:text-base font-semibold whitespace-nowrap">
                                            <Link href="#demo">
                                                    <span className="text-nowrap">Download</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-xl px-6 md:px-8 text-sm md:text-base font-semibold whitespace-nowrap">
                                        <Link href="/features">
                                            <span className="text-nowrap">Explore Features</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                                
                                {/* Trust Badge */}
                                <div className="mt-6">
                                    <p className="text-base text-gray-300 dark:text-gray-300">
                                        Trusted by event managers, stage directors, and conference organizers worldwide
                                    </p>
                                    </div>
                                </div>

                                {/* Hero Image - Right Side */}
                                <div className="flex items-start justify-center lg:justify-end mt-6 md:-mt-16 pt-4">
                                    <Image
                                        src="/assets/hero section.png"
                                        alt="DYTOR Professional Show Control Interface"
                                        width={1200}
                                        height={900}
                                        className="w-full h-auto max-w-5xl shadow-2xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Dual Timer System Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image - Left Side */}
                            <div className="flex items-center justify-center lg:justify-start">
                                <Image
                                    src="/assets/control.png"
                                    alt="Dual Timer System Interface"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto max-w-lg shadow-2xl"
                                    priority
                                />
                            </div>

                            {/* Copy - Right Side */}
                            <div className="space-y-6 text-center lg:text-left">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                    Dual Timer System
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                    Countdown and count-up timers with real-time display, pause/resume functionality, and customizable alerts when time expires.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <span className="text-gray-200">Real-time precision timing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <span className="text-gray-200">Pause and resume functionality</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <span className="text-gray-200">Customizable alerts and notifications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Scheduling Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Copy - Left Side */}
                            <div className="space-y-6 text-center lg:text-left">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                    Event Scheduling
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                    Drag-and-drop event queue with auto-fill controls, visual schedule management, and seamless event progression.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-gray-200">Drag-and-drop event management</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-gray-200">Auto-fill controls and presets</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="text-gray-200">Visual schedule progression</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image - Right Side */}
                            <div className="flex items-center justify-center lg:justify-end">
                                <Image
                                    src="/assets/Event Scheduling.png"
                                    alt="Event Scheduling Interface"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto max-w-lg shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Powerful Features for Professional Events
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to manage timing, scheduling, and communication for successful live events
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Dual Timer System */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12,6 12,12 16,14"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Dual Timer System</h3>
                            <p className="text-gray-400 mb-4">Countdown and count-up timers with real-time display, pause/resume functionality, and customizable alerts when time expires.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">Real-time precision</p>
                        </div>
                        
                        {/* Event Scheduling */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Event Scheduling</h3>
                            <p className="text-gray-400 mb-4">Drag-and-drop event queue with auto-fill controls, visual schedule management, and seamless event progression.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Visual management</p>
                        </div>
                        
                        {/* Message Broadcasting */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Message Broadcasting</h3>
                            <p className="text-gray-400 mb-4">Send custom messages to all displays with preset options, flash effects, and real-time visibility control.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">Instant communication</p>
                        </div>
                        
                        {/* Remote Control */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Remote Control</h3>
                            <p className="text-gray-400 mb-4">Multi-device access with role-based permissions, WebSocket synchronization, and real-time connection monitoring.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Multi-device sync</p>
                        </div>
                        
                        {/* Multi-Display Support */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Multi-Display Support</h3>
                            <p className="text-gray-400 mb-4">Primary control interface with secondary display support, customizable backgrounds, and responsive design.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">Customizable displays</p>
                        </div>
                        
                        {/* Analytics & Recording */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Analytics & Recording</h3>
                            <p className="text-gray-400 mb-4">Automatic session tracking, detailed event logs, lag monitoring, and PDF export capabilities for performance analysis.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Performance insights</p>
                        </div>
                    </div>
                </section>

                {/* Roles Section */}
                <section className="py-20">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Role-Based Access Control
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tailored permissions and interfaces for every team member
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Admin - Full Control */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Admin - Full Control</h3>
                            <p className="text-gray-400 mb-4">Complete timer and schedule management, message controls, display settings, and user permission management.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">Complete access</p>
                        </div>
                        
                        {/* Queue Manager */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Queue Manager - Event Flow Control</h3>
                            <p className="text-gray-400 mb-4">Timer control, schedule management, preset messaging, and event flow coordination capabilities.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Event coordination</p>
                        </div>
                        
                        {/* Speaker */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Speaker - Personal Access</h3>
                            <p className="text-gray-400 mb-4">Personal timer control, message reception, schedule viewing, and session management for presenters.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">Personal control</p>
                        </div>
                        
                        {/* Viewer */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Viewer - Display Only</h3>
                            <p className="text-gray-400 mb-4">View-only access to timers and messages, perfect for audience displays and monitoring screens.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Display only</p>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            How It Works
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Three steps from zero to show‑ready. No installs required.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <div className="text-sm text-cyan-400 font-semibold mb-2">1. Launch</div>
                            <h3 className="text-xl font-bold mb-2">Open Controller</h3>
                            <p className="text-gray-400 text-sm">Load the controller in your browser. Secondary display opens in a separate window.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <div className="text-sm text-cyan-400 font-semibold mb-2">2. Connect</div>
                            <h3 className="text-xl font-bold mb-2">Scan Remote QR</h3>
                            <p className="text-gray-400 text-sm">Team members scan a time‑limited QR to join with roles and permissions.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <div className="text-sm text-cyan-400 font-semibold mb-2">3. Orchestrate</div>
                            <h3 className="text-xl font-bold mb-2">Run Your Show</h3>
                            <p className="text-gray-400 text-sm">Start/pause/add time, trigger messages, and auto‑advance schedules — all in sync.</p>
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Why DYTOR Wins
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Designed for real productions — fast, reliable, and built for teams.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4">DYTOR</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">✓</span>
                                    <span>Role‑based remote dashboards (admin, queue manager, speaker, viewer)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">✓</span>
                                    <span>Secondary display with customizable background (color, image, video)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">✓</span>
                                    <span>Live messages with flash, presets, and visibility toggle</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">✓</span>
                                    <span>Auto‑follow schedule with records of planned vs. actual</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">✓</span>
                                    <span>BroadcastChannel + WebSocket sync for zero drift</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400">✓</span>
                                    <span>QR auth links with expiry for secure remote access</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4">Typical Stage Timer</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400">✕</span>
                                    <span>Single generic remote view without roles</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400">✕</span>
                                    <span>Limited or no secondary display customization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400">✕</span>
                                    <span>No real message cueing or flashing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400">✕</span>
                                    <span>Weak or missing schedule automation and records</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400">✕</span>
                                    <span>Inconsistent sync across devices</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-400">✕</span>
                                    <span>Manual credential sharing for access</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Loved by Show Runners
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            What production teams say after switching to DYTOR.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 mb-4">"Remote roles are a game‑changer. Our speakers see only what they need, and our queue manager moves lightning fast."</p>
                            <div className="text-sm text-gray-400">Production Lead, TechConf</div>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 mb-4">"Messages with flash cues saved us multiple times. The sync never drifts, even with dozens of devices."</p>
                            <div className="text-sm text-gray-400">Stage Manager, ArenaLive</div>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <p className="text-gray-300 mb-4">"The schedule records are gold — planned vs actual at a glance. Post‑mortems are effortless."</p>
                            <div className="text-sm text-gray-400">Show Director, BroadcastOne</div>
                        </div>
                    </div>
                </section>

                

                {/* FAQ */}
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to know before your next show.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Do I need to install anything?</h3>
                            <p className="text-gray-400 text-sm">No installs. Controller, remotes, and displays run in the browser. Tauri desktop available for offline workflows.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">How secure is remote access?</h3>
                            <p className="text-gray-400 text-sm">Remotes join with short‑lived QR tokens. Roles and explicit permissions ensure least‑privilege control.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Will the timer stay in sync?</h3>
                            <p className="text-gray-400 text-sm">Yes. DYTOR combines BroadcastChannel and WebSocket updates to maintain drift‑free synchronization.</p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-2">Can I customize the display?</h3>
                            <p className="text-gray-400 text-sm">Choose solid colors, imagery, or video backgrounds with opacity control. Title and timer sizes are adjustable.</p>
                        </div>
                    </div>
                </section>

                {/* Demo Section */}
                <section id="demo" className="py-20">
                    <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-6 md:p-12 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                    See Dytor Pro in Action
                                </h2>
                                <p className="text-gray-400 mb-8 max-w-md">
                                    Experience professional-grade timing and event management with real-time synchronization across all connected devices.
                                </p>
                                
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-4 text-white">Key Features:</h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <span className="text-cyan-400">✓</span>
                                            <span>Real-time timer synchronization</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-cyan-400">✓</span>
                                            <span>Instant message broadcasting</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-cyan-400">✓</span>
                                            <span>Cross-device compatibility</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-cyan-400">✓</span>
                                            <span>Professional display options</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-cyan-400">✓</span>
                                            <span>Comprehensive event tracking</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-cyan-400">✓</span>
                                            <span>Role-based access control</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <Button asChild size="lg" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500">
                                    <Link href="#demo">
                                        <span>Download Free Trial</span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                                <div className="relative bg-background/80 rounded-xl p-6 md:p-8 backdrop-blur-sm border border-white/10">
                                        <div className="text-center mb-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Live Timer Display</h3>
                                            <p className="text-sm text-gray-400">Current Event: Opening Keynote</p>
                                        </div>
                                    <div className="text-4xl md:text-6xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                                            15:00.000
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                                            <span>4 devices connected</span>
                                            <span>SYNC ACTIVE</span>
                                            <span>LIVE</span>
                                        </div>
                                        <div className="mt-6 h-2 rounded-full bg-gray-800 overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse" style={{width: '75%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24">
                    <div className="mx-auto max-w-4xl px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                Get in Touch
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Have questions or want a guided demo? Send us a message and we’ll respond shortly.
                            </p>
                        </div>

                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10">
                            <div className="grid grid-cols-1 gap-6 text-center">
                                <p className="text-gray-300">Prefer email? Reach us directly.</p>
                                <div className="flex justify-center">
                                    <Button asChild size="lg" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500">
                                        <a href="mailto:contact@dytor.app?subject=DYTOR%20Demo%20Request">Email Us</a>
                                    </Button>
                                </div>
                                <p className="text-xs text-gray-500">We usually respond within one business day.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-32 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Ready to Transform Your Event Management?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of professionals who trust Dytor Pro for their live events
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/30">
                                <Link href="#demo">Start Free Trial</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-10 py-5 border-cyan-500/40 hover:bg-cyan-500/10">
                                <Link href="#contact">Schedule Demo</Link>
                        </Button>
                        </div>
                    </div>
                </section>
            </main>
        </BeamsBackground>
    )
}