"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Highlights />
      <DetailedFeatures />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Powerful features for real productions
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
          DYTOR brings precision timing, multi‑device control, and broadcast‑grade reliability to your shows.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="#demo">Try a demo</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Contact sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    {
      title: "Drift‑free sync",
      desc: "BroadcastChannel + WebSocket fusion keeps every device in perfect time.",
    },
    {
      title: "Role‑based dashboards",
      desc: "Purpose‑built views for admin, queue manager, speakers, and observers.",
    },
    {
      title: "Secondary display",
      desc: "Beautiful big‑screen view with customizable backgrounds and branding.",
    },
    {
      title: "Message cues",
      desc: "Flash, presets, and visibility toggles for crisp on‑air coordination.",
    },
    {
      title: "Schedule automation",
      desc: "Plan vs actual tracking, with auto‑advance and clear logs for post‑mortems.",
    },
    {
      title: "Secure remote access",
      desc: "Short‑lived QR links and explicit permissions ensure least‑privilege control.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border bg-background/50 backdrop-blur-sm p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
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
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <div key={sec.heading} className="rounded-2xl border p-6 bg-background/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">{sec.heading}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {sec.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
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
    <section className="py-20 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          Ready to run your next show with confidence?
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Start free, then upgrade when your production needs scale.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="#demo">Get started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
