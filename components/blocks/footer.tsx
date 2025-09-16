"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <footer className={cn("border-t bg-background/60 backdrop-blur-sm", className)}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-bold tracking-tight">DYTOR</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Precision timing and show control for professional productions.
            </p>
          </div>

          <nav aria-label="Product">
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-accent-foreground">Features</Link></li>
              <li><Link href="/use-cases" className="hover:text-accent-foreground">Use Cases</Link></li>
              <li><Link href="/pricing" className="hover:text-accent-foreground">Pricing</Link></li>
              <li><Link href="/docs" className="hover:text-accent-foreground">Docs</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#contact" className="hover:text-accent-foreground">Contact</Link></li>
              <li><Link href="#careers" className="hover:text-accent-foreground">Careers</Link></li>
              <li><Link href="#press" className="hover:text-accent-foreground">Press</Link></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#privacy" className="hover:text-accent-foreground">Privacy</Link></li>
              <li><Link href="#terms" className="hover:text-accent-foreground">Terms</Link></li>
              <li><Link href="#security" className="hover:text-accent-foreground">Security</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t pt-6">
          <p className="text-xs text-muted-foreground">© {year} DYTOR. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link aria-label="GitHub" href="https://github.com" target="_blank" className="text-muted-foreground hover:text-accent-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link aria-label="Twitter" href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-accent-foreground">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link aria-label="LinkedIn" href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-accent-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
