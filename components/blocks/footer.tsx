"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Mail, Twitter, Linkedin } from "lucide-react";

export function Footer({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  const pendulum = 9 + 2;
  return (
    <footer className={cn("border-t border-white/10 bg-background/80 backdrop-blur-lg", className)}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/assets/Dytor_logo_name.png"
                alt="DYTOR Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <p className="mt-4 text-gray-300 max-w-xs leading-relaxed">
              Professional show control and stage management for live events, conferences, and theatrical productions.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link aria-label="Email" href="mailto:dytor.app@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
              <Link aria-label="X (formerly Twitter)" href="https://x.com/dytorapp" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link aria-label="LinkedIn" href="https://www.linkedin.com/company/dytor/" target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <nav aria-label="Product">
            <h3 className="text-base font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/features" className="hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link href="/use-cases" className="hover:text-cyan-400 transition-colors">Use Cases</Link></li>
              <li><Link href="/docs" className="hover:text-cyan-400 transition-colors">Documentation</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-base font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="#careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link href="#press" className="hover:text-cyan-400 transition-colors">Press</Link></li>
            </ul>
          </nav>

          <nav aria-label="Support">
            <h3 className="text-base font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="#help" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#security" className="hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {year} DYTOR. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Built for professional event management
          </p>
        </div>
      </div>
    </footer>
  );
}
