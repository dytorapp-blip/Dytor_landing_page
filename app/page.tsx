import { HeroSection } from "@/components/blocks/hero-section-1";
import Script from 'next/script';
import type { Metadata } from 'next';

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: 'Dytor Pro | Professional Stage Timer & Event Management Software | Free Trial',
  description: 'Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide. Start your free trial today.',
  keywords: [
    'stage timer software',
    'event management tool', 
    'show control software',
    'production timer',
    'stage manager software',
    'event timer',
    'conference management',
    'live event timing',
    'professional timer',
    'stage control',
    'event scheduling',
    'production management',
    'live production',
    'stage management',
    'event coordination'
  ],
  openGraph: {
    title: 'Dytor Pro | Professional Stage Timer & Event Management Software',
    description: 'Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide.',
    images: ['/assets/Dytor_logo_name.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dytor Pro |  Professional Stage Timer & Event Management Software',
    description: 'Professional stage timer software with real-time sync, role-based access, and event management.',
    images: ['/assets/Dytor_logo_name.png'],
  },
  alternates: {
    canonical: 'https://dytor.app/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Enhanced Product Schema */}
      <Script id="product-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Dytor Pro",
            description: "Professional stage timer software with real-time sync, role-based access, and event management. Trusted by production teams worldwide.",
            brand: {
              "@type": "Organization",
              name: "Dytor",
              url: "https://dytor.app",
              sameAs: ["https://twitter.com/DytorApp"],
            },
            category: "Business Software",
            image: "https://dytor.app/assets/Dytor_logo_name.png",
            url: "https://dytor.app",
            offers: [
              {
                "@type": "Offer",
                name: "Starter Plan",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description: "Free forever plan for small events"
              },
              {
                "@type": "Offer", 
                name: "Pro Plan",
                price: "12",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description: "Professional plan for production teams"
              }
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1"
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sarah Chen"
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5"
                },
                reviewBody: "DYTOR transformed our conference management. The remote roles feature is a game-changer."
              },
              {
                "@type": "Review", 
                author: {
                  "@type": "Person",
                  name: "Marcus Rodriguez"
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5", 
                  bestRating: "5"
                },
                reviewBody: "The precision timing and multi-device sync never fails us. Essential for live productions."
              }
            ]
          }),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <Script id="breadcrumb-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://dytor.app"
              }
            ]
          }),
        }}
      />
      
      <HeroSection />
    </>
  );
}