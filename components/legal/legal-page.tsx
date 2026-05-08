"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  FileCheck2,
  LockKeyhole,
  Mail,
} from "lucide-react";

import Glow from "@/components/ui/glow";

type LegalSection = {
  title: string;
  body?: readonly string[];
  bullets?: readonly string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  lastUpdated: string;
  contactEmail: string;
  sections: readonly LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  lastUpdated,
  contactEmail,
  sections,
}: LegalPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Glow variant="top" className="pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,182,255,0.14),transparent_38%),linear-gradient(180deg,transparent,rgba(94,182,255,0.05))]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-xl backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-foreground">
                {eyebrow === "Privacy Policy" ? (
                  <LockKeyhole className="h-3.5 w-3.5" />
                ) : (
                  <FileCheck2 className="h-3.5 w-3.5" />
                )}
                {eyebrow}
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {summary}
              </p>

              <div className="mt-8 rounded-2xl border border-border/50 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Last updated
                </p>
                <p className="mt-2 text-sm font-medium">{lastUpdated}</p>
              </div>

              <div className="mt-4 rounded-2xl border border-border/50 bg-background/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Contact
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand-foreground transition hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  {contactEmail}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-background transition hover:brightness-110"
                >
                  Open Dytor
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold transition hover:bg-accent"
                >
                  Contact team
                </Link>
              </div>
            </div>
          </aside>

          <section className="rounded-[2rem] border border-border/50 bg-card/60 p-6 shadow-xl backdrop-blur sm:p-8 lg:p-10">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              {sections.map((section) => (
                <section
                  key={section.title}
                  className="border-b border-border/50 py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>

                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-8 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-base leading-8 text-muted-foreground marker:text-brand-foreground"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
