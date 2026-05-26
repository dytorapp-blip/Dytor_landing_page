"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Crown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

const plans = [
  {
    key: "starter",
    name: "Starter",
    subtitle: "The essentials to get started",
    monthlyPrice: 0,
    annualPrice: 0,
    annualSavings: 0,
    cta: "Start Free",
    href: "/checkout?plan=starter",
    highlighted: false,
    features: [
      "Basic timer sharing",
      "1 room",
      "Basic audience interaction",
      "Limited outputs",
      "Community support",
    ],
  },
  {
    key: "flow",
    name: "Flow",
    subtitle: "Built for active live events",
    monthlyPrice: 15000,
    annualPrice: 144000,
    annualSavings: 36000,
    cta: "Get Flow",
    href: "/checkout?plan=flow",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "2 team seats",
      "Advanced timing tools",
      "API access",
      "Branding support",
      "Higher usage limits",
      "Professional workflows",
      "Email support",
    ],
  },
  {
    key: "apex",
    name: "Apex",
    subtitle: "For professional production workflows",
    monthlyPrice: 39000,
    annualPrice: 390000,
    annualSavings: 78000,
    cta: "Get Apex",
    href: "/checkout?plan=apex",
    highlighted: false,
    features: [
      "15 team seats",
      "Everything in Flow",
      "Unlimited usage",
      "Full branding customization",
      "Advanced integrations",
      "Enterprise workflows",
      "Full audience interaction suite",
      "Priority 24h support",
    ],
  },
];

// ─── Subcomponents ───────────────────────────────────────────────────────────

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={cn(
          "text-sm font-medium transition-colors",
          !annual ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Monthly
      </span>

      <button
        onClick={() => onChange(!annual)}
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          annual ? "bg-primary" : "bg-muted",
        )}
        aria-label="Toggle billing period"
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          className={cn(
            "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow",
            annual && "translate-x-5",
          )}
          style={{ x: annual ? 20 : 0 }}
        />
      </button>

      <div className="flex items-center gap-2">
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            annual ? "text-foreground" : "text-muted-foreground",
          )}
        >
          Annual
        </span>
        <AnimatePresence>
          {annual && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-400"
            >
              Save up to ₦78,000
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function PlanIcon({ plan }: { plan: (typeof plans)[number] }) {
  if (plan.key === "flow") return <Zap className="size-4" />;
  if (plan.key === "apex") return <Crown className="size-4" />;
  return null;
}

function PlanCard({
  plan,
  annual,
  index,
}: {
  plan: (typeof plans)[number];
  annual: boolean;
  index: number;
}) {
  const displayPrice = annual && plan.annualPrice > 0
    ? Math.round(plan.annualPrice / 12)
    : plan.monthlyPrice;

  const isFlow = plan.key === "flow";
  const isApex = plan.key === "apex";

  const href =
    plan.key === "starter"
      ? "/sign-up"
      : `${plan.href}&interval=${annual ? "annual" : "monthly"}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-shadow duration-300",
        // Starter
        !isFlow && !isApex && "border-border/50 bg-card/40 backdrop-blur-sm",
        // Flow (highlighted)
        isFlow && [
          "border-primary/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_-8px] shadow-primary/25",
          "scale-[1.025] lg:scale-[1.04]",
        ],
        // Apex
        isApex && [
          "border-border/40 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm",
          "shadow-[0_0_30px_-8px] shadow-white/5",
        ],
      )}
    >
      {/* Top glow line */}
      {isFlow && (
        <span className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      {isApex && (
        <span className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          {plan.key !== "starter" && (
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-lg",
                isFlow && "bg-primary/15 text-primary",
                isApex && "bg-white/10 text-white/80",
              )}
            >
              <PlanIcon plan={plan} />
            </span>
          )}
          <h3
            className={cn(
              "text-lg font-semibold tracking-tight",
              isApex && "bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent",
            )}
          >
            {plan.name}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          {plan.monthlyPrice === 0 ? (
            <span className="text-4xl font-bold tracking-tight">Free</span>
          ) : (
            <>
              <span className="text-muted-foreground text-xl font-medium">₦</span>
              <motion.span
                key={`${plan.key}-${annual}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-4xl font-bold tracking-tight"
              >
                {displayPrice.toLocaleString("en-NG")}
              </motion.span>
              <span className="text-muted-foreground text-sm">/mo</span>
            </>
          )}
        </div>

        {annual && plan.annualSavings > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-1.5 text-xs text-muted-foreground"
          >
            ₦{plan.annualPrice.toLocaleString("en-NG")}/year &nbsp;·&nbsp;
            <span className="text-emerald-400 font-medium">
              save ₦{plan.annualSavings.toLocaleString("en-NG")}
            </span>
          </motion.p>
        )}
        {!annual && plan.monthlyPrice === 0 && (
          <p className="mt-1.5 text-xs text-muted-foreground">No credit card required</p>
        )}
      </div>

      {/* CTA */}
      <Link
        href={href}
        className={cn(
          "mb-8 flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          !isFlow && !isApex && "border border-border/60 bg-transparent hover:bg-muted/50 text-foreground",
          isFlow && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20",
          isApex && "border border-white/15 bg-white/8 text-white hover:bg-white/12",
        )}
      >
        {plan.cta}
      </Link>

      {/* Divider */}
      <div className="mb-6 border-t border-border/30" />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                isFlow ? "text-primary" : isApex ? "text-white/50" : "text-muted-foreground",
              )}
            />
            <span className="text-sm text-muted-foreground leading-snug">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className={cn("py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 flex max-w-xl flex-col items-center gap-5 text-center"
        >
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free. Scale as your show grows. Cancel anytime.
          </p>
          <BillingToggle annual={annual} onChange={setAnnual} />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.key} plan={plan} annual={annual} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          All plans include a 14-day refund window. Payments secured by{" "}
          <span className="font-medium text-foreground">Paystack</span>.
        </motion.p>
      </div>
    </section>
  );
}
