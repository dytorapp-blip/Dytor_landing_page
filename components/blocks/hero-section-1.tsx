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
                    <div className="relative min-h-screen flex items-center pt-24 md:pt-36 pb-16">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6 w-full">
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 min-h-[60vh]">
                                {/* Left side - Copy */}
                                <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
                                <AnimatedGroup variants={transitionVariants}>
                                        <h1
                                            className="max-w-4xl mx-auto lg:mx-0 text-balance text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                                            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent uppercase">
                                                Own
                                                </span>
                                            <span className="block bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent uppercase">
                                                the Stage
                                                </span>
                                    </h1>
                                    <p
                                            className="mx-auto lg:mx-0 mt-6 max-w-2xl text-balance text-lg md:text-xl text-gray-600 dark:text-gray-300">
                                            Professional timer app for complete event control conferences, theater, and broadcasts.
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
                                        className="mt-8 flex flex-col items-center lg:items-start justify-center gap-4 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-8 py-3 text-base font-semibold">
                                            <Link href="#link">
                                                    <span className="text-nowrap">Get Started</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-xl px-8 font-semibold">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                                </div>

                                {/* Right side - Optimized image */}
                                <div className="flex-1 flex justify-center lg:justify-end items-center">
                                    <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                                        <Image
                                            src="/assets/Dytor_icon_dark_mode.png"
                                            alt="Dytor Logo"
                                            width={400} 
                                            height={400} 
                                            priority={false}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

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
                            }}>
                            <div className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-20 md:mt-24">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <img
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2700&h=1440&fit=crop&crop=center"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <img
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2700&h=1440&fit=crop&crop=center"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-20 pt-20 md:pb-32 md:pt-24">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=20&fit=crop&crop=center"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=16&fit=crop&crop=center"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=16&fit=crop&crop=center"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=20&fit=crop&crop=center"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=20&fit=crop&crop=center"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=16&fit=crop&crop=center"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=28&fit=crop&crop=center"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=24&fit=crop&crop=center"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Beyond Traditional Control
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Elevate your productions with technology that anticipates your needs before you do
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Quantum Precision */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12,6 12,12 16,14"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Quantum Precision</h3>
                            <p className="text-gray-400 mb-4">Millisecond-accurate timing with predictive algorithms that adapt to your production's rhythm.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">±0.001s accuracy</p>
                        </div>
                        
                        {/* Neural Networks */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Neural Networks</h3>
                            <p className="text-gray-400 mb-4">Multi-device orchestration through advanced WebSocket architecture that feels telepathic.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Real-time sync across ∞ devices</p>
                        </div>
                        
                        {/* Holographic Displays */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Holographic Displays</h3>
                            <p className="text-gray-400 mb-4">Next-gen projection mapping with adaptive backgrounds that respond to environmental changes.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">8K resolution support</p>
                        </div>
                        
                        {/* Temporal Intelligence */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Temporal Intelligence</h3>
                            <p className="text-gray-400 mb-4">AI-powered schedule optimization that learns from your patterns and predicts adjustments.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Adaptive scheduling</p>
                        </div>
                        
                        {/* Telepathic Messaging */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Telepathic Messaging</h3>
                            <p className="text-gray-400 mb-4">Instant thought-to-screen communication that eliminates delays in crew coordination.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
                            <p className="text-sm text-cyan-400">50ms latency</p>
                        </div>
                        
                        {/* Dimensional Sync */}
                        <div className="bg-background/50 backdrop-blur-lg border border-white/10 p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Dimensional Sync</h3>
                            <p className="text-gray-400 mb-4">Cross-platform consciousness that transcends devices and maintains perfect state alignment.</p>
                            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-4"></div>
                            <p className="text-sm text-purple-400">Omnichannel awareness</p>
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
                <section className="py-20">
                    <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-12 flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                                    See Tomorrow, Today
                                </h2>
                                <p className="text-gray-400 mb-8 max-w-md">
                                    Neural-linked precision timing in action. Witness how DYTOR maintains perfect sync across all elements of your production.
                                </p>
                                <Button asChild variant="outline" className="border-cyan-500/40 hover:bg-cyan-500/10">
                                    <Link href="#contact">
                                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent font-medium">
                                            Request Private Demo
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                                    <div className="relative bg-background/80 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                                        <div className="text-6xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
                                            15:00.000
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>CUE 24</span>
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

                {/* Footer CTA */}
                <section className="py-32 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            Ready to Transcend?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Join the pioneers who've already stepped into the future of show control
                        </p>
                        <Button asChild size="lg" className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/30">
                            <Link href="#contact">Launch Into Tomorrow</Link>
                        </Button>
                    </div>
                </section>
            </main>
        </BeamsBackground>
    )
}