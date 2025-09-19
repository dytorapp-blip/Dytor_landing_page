'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Image */}
        <div className="mb-8">
          <Image
            src="/assets/page_not_found.png"
            alt="404 - Page Not Found"
            width={400}
            height={300}
            className="mx-auto"
            priority
          />
        </div>

        {/* Error Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, even the best stage managers lose their scripts sometimes!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/docs" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Browse Docs
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/features" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Features
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                href="/pricing" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Pricing
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                href="/use-cases" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Use Cases
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                href="/about" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
