import CTA from "../../components/sections/cta/default";
import FAQ from "../../components/sections/faq/default";
import Hero from "../../components/sections/hero/default";
import Items from "../../components/sections/items/default";
import Logos from "../../components/sections/logos/default";
import FeaturesPage from "../../components/sections/feature/default";

export default function GetStarted() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Hero
        title="Get Started with DYTOR"
        description="Download DYTOR and bring drift-free timing control to your stage, studio, or classroom in minutes."
      />
      <Logos />
      <FeaturesPage />
      <Items />
      <FAQ />
      <CTA />
    </main>
  );
}
