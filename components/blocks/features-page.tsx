"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import dynamic from 'next/dynamic'
const BeamsBackground = dynamic(() => import('@/components/ui/beams-background').then(m => m.BeamsBackground), { ssr: false })
import { cn } from "@/lib/utils";

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

export function FeaturesPage() {
  return (
    <BeamsBackground intensity="medium" className="min-h-screen">
      <main className="overflow-hidden">
        <Hero />
        <Highlights />
        <DetailedFeatures />
        <CTA />
      </main>
    </BeamsBackground>
  );
}

function Hero() {
  return (
    <section className="pt-24 md:pt-36 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Powerful Features for Professional Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Everything you need to manage timing, scheduling, and communication for successful live events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500">
                <Link href="#demo">Try a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4 border-cyan-500/40 hover:bg-cyan-500/10">
                <Link href="#contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    {
      title: "Dual Timer System",
      desc: "Countdown and count-up timers with real-time display, pause/resume functionality, and customizable alerts when time expires.",
    },
    {
      title: "Event Scheduling",
      desc: "Drag-and-drop event queue with auto-fill controls, visual schedule management, and seamless event progression.",
    },
    {
      title: "Message Broadcasting",
      desc: "Send custom messages to all displays with preset options, flash effects, and real-time visibility control.",
    },
    {
      title: "Remote Control",
      desc: "Multi-device access with role-based permissions, WebSocket synchronization, and real-time connection monitoring.",
    },
    {
      title: "Multi-Display Support",
      desc: "Primary control interface with secondary display support, customizable backgrounds, and responsive design.",
    },
    {
      title: "Analytics & Recording",
      desc: "Automatic session tracking, detailed event logs, lag monitoring, and PDF export capabilities for performance analysis.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Core Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for professional show control
          </p>
        </div>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{it.title}</h3>
              <p className="text-sm text-gray-400">{it.desc}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

function DetailedFeatures() {
  const sections = [
    {
      heading: "Precision timing",
      points: [
        "Millisecond accuracy with event‑safe controls",
        "Hold/Resume/Add time with audit trail",
        "Multiple clocks and labels per show",
      ],
    },
    {
      heading: "Multi‑device orchestration",
      points: [
        "Join via QR with expiring tokens",
        "Live presence and role changes",
        "Optimized updates for low‑latency networks",
      ],
    },
    {
      heading: "Displays & branding",
      points: [
        "Secondary display with color, image, or video backgrounds",
        "Adjustable typography and layout presets",
        "Logo overlays and safe‑area awareness",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Advanced Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional-grade features for demanding productions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec) => (
            <div key={sec.heading} className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <h3 className="text-2xl font-bold mb-6 text-white">{sec.heading}</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {sec.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-emerald-400 text-lg">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="bg-background/50 backdrop-blur-lg border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Ready to Run Your Next Show with Confidence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start free, then upgrade when your production needs scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500">
              <Link href="#demo">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 border-cyan-500/40 hover:bg-cyan-500/10">
              <Link href="#contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
