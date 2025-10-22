import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'DYTOR Blog - Professional Show Control & Production Insights',
    template: '%s | DYTOR Blog'
  },
  description: 'Expert insights on professional show control, timing, and live production. Learn best practices, case studies, and industry trends from the DYTOR team.',
  keywords: ['show control', 'live production', 'timing', 'professional audio', 'broadcast', 'streaming', 'production software', 'DYTOR'],
  authors: [{ name: 'DYTOR Team' }],
  creator: 'DYTOR',
  publisher: 'DYTOR',
  alternates: { 
    canonical: 'https://blog.dytor.app',
    types: {
      'application/rss+xml': 'https://blog.dytor.app/rss'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.dytor.app',
    siteName: 'DYTOR Blog',
    title: 'DYTOR Blog - Professional Show Control & Production Insights',
    description: 'Expert insights on professional show control, timing, and live production. Learn best practices, case studies, and industry trends.',
    images: [
      {
        url: 'https://blog.dytor.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DYTOR Blog - Professional Show Control Insights'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dytorapp',
    creator: '@dytorapp',
    title: 'DYTOR Blog - Professional Show Control & Production Insights',
    description: 'Expert insights on professional show control, timing, and live production.',
    images: ['https://blog.dytor.app/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DYTOR Blog',
    url: 'https://blog.dytor.app',
    description: 'Expert insights on professional show control, timing, and live production.',
    publisher: {
      '@type': 'Organization',
      name: 'DYTOR',
      url: 'https://dytor.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dytor.app/logo.png'
      }
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://blog.dytor.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a href="https://dytor.app" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                  DYTOR
                </a>
                <span className="text-slate-400">Blog</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="https://dytor.app" className="text-slate-300 hover:text-white transition-colors">Home</a>
                <a href="https://dytor.app/features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="https://dytor.app/pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="https://dytor.app/docs" className="text-slate-300 hover:text-white transition-colors">Docs</a>
              </div>
            </nav>
          </div>
        </header>
        
        <main className="mx-auto max-w-4xl px-6 py-12">
          {children}
        </main>
        
        <footer className="border-t border-slate-700/50 bg-slate-900/50 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">DYTOR</h3>
                <p className="text-slate-400 text-sm">
                  Professional show control and timing software for live production.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://dytor.app" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="https://dytor.app/features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
                  <li><a href="https://dytor.app/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="https://dytor.app/docs" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/rss" className="text-slate-400 hover:text-white transition-colors">RSS Feed</a></li>
                  <li><a href="https://twitter.com/dytorapp" className="text-slate-400 hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="https://github.com/dytor" className="text-slate-400 hover:text-white transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700/50 mt-8 pt-6 text-center text-sm text-slate-400">
              <p>&copy; 2024 DYTOR. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


