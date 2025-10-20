"use client"
// Metadata exports are not allowed in client components; relying on DefaultSeo

import React from 'react'
import Link from 'next/link'
import { BeamsBackground } from '@/components/ui/beams-background'
import { Button } from '@/components/ui/button'

type DocSection = {
  id: string
  title: string
  content: string
}

const sections: DocSection[] = [
  { id: 'getting-started', title: 'Getting Started', content: 'Install, run dev, and basic project structure. This is placeholder content for now.' },
  { id: 'timers', title: 'Timers', content: 'Create, start, pause, add time, and reset timers. Placeholder content.' },
  { id: 'remotes', title: 'Remotes & Roles', content: 'Join via QR, role permissions, and remote dashboards. Placeholder content.' },
  { id: 'displays', title: 'Displays', content: 'Secondary display customization: colors, images, and video. Placeholder content.' },
  { id: 'messages', title: 'Messages', content: 'Flash cues, presets, and visibility toggles. Placeholder content.' },
  { id: 'schedules', title: 'Schedules', content: 'Auto-advance, records, and exports. Placeholder content.' },
]

export default function DocsPage() {
  return (
    <BeamsBackground intensity="subtle" className="min-h-screen bg-neutral-950/98">
      <main className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <nav className="sticky top-24 space-y-2">
              {sections.map((s) => (
                <Link key={s.id} href={`#${s.id}`} className="block text-sm text-muted-foreground hover:text-accent-foreground">
                  {s.title}
                </Link>
              ))}
            </nav>
          </aside>
          <section className="md:col-span-3">
            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Documentation</h1>
              <p className="mt-3 text-gray-400">Mock docs for now. We can replace with real content later.</p>
              <div className="mt-6 flex gap-3">
                <Button asChild><Link href="#getting-started">Start here</Link></Button>
                <Button asChild variant="outline"><Link href="/features">Explore features</Link></Button>
              </div>
            </header>

            <div className="space-y-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="rounded-2xl border bg-background/50 backdrop-blur-sm p-6">
                  <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-7">{s.content}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </BeamsBackground>
  )
}


