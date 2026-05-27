"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Period = "daily" | "monthly" | "annual";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PERIODS: { key: Period; label: string; note: string }[] = [
  { key: "daily",   label: "Daily",   note: "1–27 days"  },
  { key: "monthly", label: "Monthly", note: "≈ ₦500/day" },
  { key: "annual",  label: "Annual",  note: "Save 20%"   },
];

const PLANS = [
  {
    key: "starter" as const,
    name: "Starter",
    subtitle: "Get started, no commitment",
    dailyRate: 0,
    monthlyPrice: 0,
    annualPrice: 0,
    annualMonthlyPrice: 0,
    features: [
      "Basic timer sharing",
      "1 room",
      "Basic audience interaction",
      "Limited outputs",
      "Community support",
    ],
  },
  {
    key: "flow" as const,
    name: "Flow",
    subtitle: "For regular productions & teams",
    badge: "Most Popular",
    dailyRate: 650,
    monthlyPrice: 15_000,
    annualPrice: 144_000,
    annualMonthlyPrice: 12_000,
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
    key: "apex" as const,
    name: "Apex",
    subtitle: "For studios, theaters & large crews",
    dailyRate: 1_600,
    monthlyPrice: 39_000,
    annualPrice: 374_400,
    annualMonthlyPrice: 31_200,
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
] as const;

type Plan = (typeof PLANS)[number];

const fmt = (n: number) => n.toLocaleString("en-NG");

// ─── Period tabs ──────────────────────────────────────────────────────────────

function PeriodTabs({
  period,
  onChange,
}: {
  period: Period;
  onChange: (p: Period) => void;
}) {
  return (
    <div className="flex rounded-xl border border-border/50 bg-muted/30 p-1 gap-1 w-full">
      {PERIODS.map(({ key, label, note }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            "relative flex flex-1 flex-col items-center rounded-lg py-2 px-1 text-sm font-medium transition-all duration-200 focus-visible:outline-none",
            period === key
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {label}
          <span
            className={cn(
              "text-[10px] leading-none mt-0.5 transition-colors",
              period === key
                ? key === "annual"
                  ? "text-emerald-400 font-medium"
                  : key === "daily"
                  ? "text-primary/70"
                  : "text-muted-foreground"
                : "text-muted-foreground/50",
            )}
          >
            {note}
          </span>
        </button>
      ))}
    </div>
  );
}

// ─── Day stepper ──────────────────────────────────────────────────────────────

function DayStepper({
  days,
  onChange,
  accent,
}: {
  days: number;
  onChange: (n: number) => void;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-xl border p-1.5",
        accent ? "border-primary/40 bg-primary/5" : "border-border/50 bg-muted/30",
      )}
    >
      <button
        onClick={() => onChange(Math.max(1, days - 1))}
        aria-label="Fewer days"
        className={cn(
          "flex size-8 items-center justify-center rounded-lg transition-colors active:scale-95",
          accent
            ? "text-primary hover:bg-primary/10"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <Minus className="size-3.5" />
      </button>
      <div className="min-w-[5rem] text-center">
        <motion.span
          key={days}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12 }}
          className="text-2xl font-bold tabular-nums leading-none"
        >
          {days}
        </motion.span>
        <span className="ml-1 text-xs text-muted-foreground">
          day{days !== 1 ? "s" : ""}
        </span>
      </div>
      <button
        onClick={() => onChange(Math.min(27, days + 1))}
        aria-label="More days"
        className={cn(
          "flex size-8 items-center justify-center rounded-lg transition-colors active:scale-95",
          accent
            ? "text-primary hover:bg-primary/10"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

// ─── Price block ──────────────────────────────────────────────────────────────

function PriceBlock({
  plan,
  period,
  days,
  onDaysChange,
}: {
  plan: Plan;
  period: Period;
  days: number;
  onDaysChange: (n: number) => void;
}) {
  const isFlow = plan.key === "flow";

  if (plan.key === "starter") {
    return (
      <div className="mb-8">
        <span className="text-4xl font-bold tracking-tight">Free</span>
        <p className="mt-1.5 text-xs text-muted-foreground">No credit card required</p>
      </div>
    );
  }

  if (period === "daily") {
    const total = plan.dailyRate * days;
    return (
      <div className="mb-6 flex flex-col gap-3">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-medium text-muted-foreground">₦</span>
          <span className="text-4xl font-bold tracking-tight">{fmt(plan.dailyRate)}</span>
          <span className="text-sm text-muted-foreground">/day</span>
        </div>
        <DayStepper days={days} onChange={onDaysChange} accent={isFlow} />
        <motion.p
          key={total}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm"
        >
          <span className="font-semibold">₦{fmt(total)}</span>
          <span className="text-muted-foreground"> total</span>
        </motion.p>
      </div>
    );
  }

  if (period === "monthly") {
    return (
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-medium text-muted-foreground">₦</span>
          <motion.span
            key={`${plan.key}-mo`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight"
          >
            {fmt(plan.monthlyPrice)}
          </motion.span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">
          ≈ ₦{fmt(Math.round(plan.monthlyPrice / 30))}/day
        </p>
      </div>
    );
  }

  // annual
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-medium text-muted-foreground">₦</span>
        <motion.span
          key={`${plan.key}-yr`}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight"
        >
          {fmt(plan.annualMonthlyPrice)}
        </motion.span>
        <span className="text-sm text-muted-foreground">/mo</span>
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">
        ₦{fmt(plan.annualPrice)}/yr ·{" "}
        <span className="font-medium text-emerald-400">save 20%</span>
      </p>
    </div>
  );
}

// ─── Plan card ────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  period,
  days,
  onDaysChange,
  index,
}: {
  plan: Plan;
  period: Period;
  days: number;
  onDaysChange: (n: number) => void;
  index: number;
}) {
  const isFlow = plan.key === "flow";
  const isApex = plan.key === "apex";
  const isFree = plan.key === "starter";

  let href: string;
  let ctaLabel: string;

  if (isFree) {
    href = "/sign-up";
    ctaLabel = "Start Free";
  } else if (period === "daily") {
    href = `/checkout?plan=${plan.key}&interval=daily&days=${days}`;
    ctaLabel = `Get ${plan.name} · ${days} day${days !== 1 ? "s" : ""}`;
  } else {
    href = `/checkout?plan=${plan.key}&interval=${period}`;
    ctaLabel = period === "annual" ? `Get ${plan.name} Annual` : `Get ${plan.name}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-shadow duration-300",
        !isFlow && !isApex && "border-border/50 bg-card/40 backdrop-blur-sm",
        isFlow && [
          "border-primary/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_-8px] shadow-primary/25",
          "scale-[1.025] lg:scale-[1.04]",
        ],
        isApex && [
          "border-border/40 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-sm",
          "shadow-[0_0_30px_-8px] shadow-white/5",
        ],
      )}
    >
      {isFlow && (
        <span className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      {isApex && (
        <span className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      {"badge" in plan && plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          {!isFree && (
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-lg",
                isFlow && "bg-primary/15 text-primary",
                isApex && "bg-white/10 text-white/80",
              )}
            >
              {isFlow ? <Zap className="size-4" /> : <Crown className="size-4" />}
            </span>
          )}
          <h3
            className={cn(
              "text-lg font-semibold tracking-tight",
              isApex &&
                "bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent",
            )}
          >
            {plan.name}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
      </div>

      {/* Price */}
      <PriceBlock
        plan={plan}
        period={period}
        days={days}
        onDaysChange={onDaysChange}
      />

      {/* CTA */}
      <Link
        href={href}
        className={cn(
          "mb-8 flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isFree &&
            "border border-border/60 bg-transparent text-foreground hover:bg-muted/50",
          isFlow &&
            "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90",
          isApex &&
            "border border-white/15 bg-white/8 text-white hover:bg-white/12",
        )}
      >
        {ctaLabel}
      </Link>

      <div className="mb-6 border-t border-border/30" />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                isFlow
                  ? "text-primary"
                  : isApex
                  ? "text-white/50"
                  : "text-muted-foreground",
              )}
            />
            <span className="text-sm leading-snug text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Pricing({ className }: { className?: string }) {
  const [period, setPeriod] = useState<Period>("monthly");
  const [flowDays, setFlowDays] = useState(7);
  const [apexDays, setApexDays] = useState(7);

  const getDays = (key: string) =>
    key === "flow" ? flowDays : key === "apex" ? apexDays : 1;
  const setDays = (key: string) => (n: number) => {
    if (key === "flow") setFlowDays(n);
    else if (key === "apex") setApexDays(n);
  };

  return (
    <section className={cn("py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 flex max-w-sm flex-col items-center gap-5 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Pay only for what you need.
            </p>
          </div>
          <PeriodTabs period={period} onChange={setPeriod} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {PLANS.map((plan, i) => (
            <PlanCard
              key={plan.key}
              plan={plan}
              period={period}
              days={getDays(plan.key)}
              onDaysChange={setDays(plan.key)}
              index={i}
            />
          ))}
        </div>

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
