import { HeroSection } from "@/components/blocks/hero-section-1";
import Script from 'next/script';
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Script id="product-jsonld" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Dytor",
            description: "Smart event timer and controller for professionals.",
            brand: {
              "@type": "Organization",
              name: "Dytor",
              url: "https://dytor.app",
              sameAs: ["https://twitter.com/DytorApp"],
            },
          }),
        }}
      />
      <HeroSection />
    </>
  );
}