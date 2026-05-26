import type { Metadata } from "next";
import Pricing from "@/components/sections/pricing/default";

export const metadata: Metadata = {
  title: "Pricing — DYTOR",
  description:
    "Simple, transparent pricing for every production team. Start free with Starter, scale with Flow, or go professional with Apex.",
};

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Pricing />
    </main>
  );
}
