import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import FeaturesPage from "../components/sections/feature/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Hero />
      <Logos />
      <FeaturesPage />
      <Items />
      <FAQ />
      <CTA />
    </main>
  );
}
