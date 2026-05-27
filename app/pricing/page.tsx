import type { Metadata } from "next";

import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Pricing from "@/components/sections/pricing/default";

export const metadata: Metadata = {
  title: "Pricing - DYTOR",
  description:
    "Simple, transparent pricing for every production team. Start free with Starter, scale with Flow, or go professional with Apex.",
};

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Pricing className="pt-28 pb-12 sm:pt-32 sm:pb-16" />
      <FAQ />
      <CTA />
    </main>
  );
}
