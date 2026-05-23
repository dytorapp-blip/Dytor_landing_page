import { Sparkle, Users, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Simple, transparent pricing",
  description = "Start free. Scale as your show grows. Cancel anytime.",
  plans = [
    {
      name: "Free",
      icon: <Sparkle className="size-4" />,
      description: "Perfect for solo operators just getting started",
      price: 0,
      priceNote: "Free forever. No credit card required.",
      cta: {
        variant: "glow",
        label: "Get started free",
        href: "/sign-up",
      },
      features: [
        "1 team seat",
        "Basic countdown timer",
        "Stock backgrounds",
        "Community support",
      ],
      variant: "default",
      className: "hidden lg:flex",
    },
    {
      name: "Starter",
      icon: <Zap className="size-4" />,
      description: "For small production teams running live events",
      price: 19,
      priceNote: "Up to 5 seats. Add more for $5/seat.",
      cta: {
        variant: "glow-brand",
        label: "Start Starter plan",
        href: "/sign-up?plan=starter",
      },
      features: [
        "5 team seats",
        "Custom images & video backgrounds",
        "Unlimited presets",
        "1080p display output",
        "Email support",
        "+$5 per additional seat",
      ],
      variant: "glow-brand",
    },
    {
      name: "Pro",
      icon: <Users className="size-4" />,
      description: "For professional studios and large event companies",
      price: 49,
      priceNote: "Up to 15 seats. Add more for $4/seat.",
      cta: {
        variant: "default",
        label: "Start Pro plan",
        href: "/sign-up?plan=pro",
      },
      features: [
        "15 team seats",
        "Everything in Starter",
        "4K display output",
        "Advanced show analytics",
        "Priority support (24h response)",
        "+$4 per additional seat",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
