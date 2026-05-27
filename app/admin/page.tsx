"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Loader2, Users, CreditCard, TrendingUp, Activity, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Overview = {
  totalUsers: number;
  tiers: { starter: number; flow: number; apex: number };
  totalPaid: number;
  estimatedMRR: number;
  recentActivations7d: number;
};

type Subscription = {
  id: string;
  teamId: string;
  teamName: string;
  ownerEmail: string;
  ownerName: string | null;
  userJoinedAt: string;
  tier: string;
  status: string;
  billingInterval: string;
  nextBillingAt: string | null;
  paystackCustomerCode: string | null;
  paystackReference: string | null;
  currentSeats: number;
  maxSeats: number;
  updatedAt: string;
};

type ActivityItem = {
  id: string;
  action: string;
  userEmail: string | null;
  userName: string | null;
  teamName: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
};

type SubscriptionsResponse = {
  data: Subscription[];
  pagination: { page: number; limit: number; total: number; pages: number };
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmt = (n: number) => n.toLocaleString("en-NG");
const fmtDate = (s: string | null) =>
  s ? new Date(s).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" }) : "—";
const fmtTime = (s: string) =>
  new Date(s).toLocaleString("en-NG", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });

const TIER_COLORS: Record<string, string> = {
  starter: "text-muted-foreground",
  flow: "text-primary",
  apex: "text-amber-400",
};

const STATUS_COLORS: Record<string, string> = {
  active: "bg-emerald-500/15 text-emerald-400",
  cancelled: "bg-destructive/15 text-destructive",
  downgrade_pending: "bg-amber-500/15 text-amber-400",
  suspended: "bg-orange-500/15 text-orange-400",
};

const ACTION_LABELS: Record<string, string> = {
  web_checkout_initiated: "Checkout started",
  subscription_activated: "Subscription activated",
  subscription_cancelled: "Subscription cancelled",
  subscription_upgraded: "Upgraded",
  subscription_downgrade_initiated: "Downgrade scheduled",
  checkout_session_created: "Checkout created",
};

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        accent
          ? "border-primary/40 bg-primary/5"
          : "border-border/50 bg-card/40"
      )}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-muted/50">
        <Icon className={cn("size-5", accent ? "text-primary" : "text-muted-foreground")} />
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-bold tabular-nums">{value}</p>
      {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

// ─── Filter tabs ──────────────────────────────────────────────────────────────

function FilterTab({
  options,
  value,
  onChange,
}: {
  options: { key: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex rounded-lg border border-border/50 bg-muted/30 p-0.5 gap-0.5">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          className={cn(
            "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
            value === o.key
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { user, isLoaded } = useUser();

  const [overview, setOverview] = useState<Overview | null>(null);
  const [subs, setSubs] = useState<SubscriptionsResponse | null>(null);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [tierFilter, setTierFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);

  async function fetchAll(p = page, tier = tierFilter, status = statusFilter) {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ page: String(p), tier, status, limit: "25" });
      const [ovRes, subRes, actRes] = await Promise.all([
        fetch("/api/admin/billing/overview"),
        fetch(`/api/admin/billing/subscriptions?${params}`),
        fetch("/api/admin/billing/activity?limit=30"),
      ]);

      if (ovRes.status === 403 || subRes.status === 403) {
        setError("Access denied. Your account does not have admin privileges.");
        return;
      }

      const [ov, sub, act] = await Promise.all([
        ovRes.json(),
        subRes.json(),
        actRes.json(),
      ]);

      setOverview(ov);
      setSubs(sub);
      setActivity(act.data ?? []);
    } catch {
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isLoaded) fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  function applyFilter(tier: string, status: string) {
    setTierFilter(tier);
    setStatusFilter(status);
    setPage(1);
    fetchAll(1, tier, status);
  }

  function goPage(p: number) {
    setPage(p);
    fetchAll(p);
  }

  if (!isLoaded || (loading && !overview)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="size-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-semibold">Access Denied</p>
          <p className="mt-1 text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10 lg:px-12">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Signed in as {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
        <button
          onClick={() => fetchAll()}
          disabled={loading}
          className="flex items-center gap-2 rounded-lg border border-border/50 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("size-3.5", loading && "animate-spin")} />
          Refresh
        </button>
      </div>

      {/* Overview stats */}
      {overview && (
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard
            icon={Users}
            label="Total Users"
            value={fmt(overview.totalUsers)}
          />
          <StatCard
            icon={CreditCard}
            label="Paid Subscribers"
            value={fmt(overview.totalPaid)}
            sub={`${overview.tiers.flow} Flow · ${overview.tiers.apex} Apex`}
            accent
          />
          <StatCard
            icon={TrendingUp}
            label="Estimated MRR"
            value={`₦${fmt(overview.estimatedMRR)}`}
            sub="Monthly recurring"
          />
          <StatCard
            icon={Activity}
            label="New This Week"
            value={fmt(overview.recentActivations7d)}
            sub="Paid activations"
          />
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Subscriptions table */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base font-semibold">Subscriptions</h2>
            <div className="flex flex-wrap gap-2">
              <FilterTab
                options={[
                  { key: "all", label: "All tiers" },
                  { key: "flow", label: "Flow" },
                  { key: "apex", label: "Apex" },
                  { key: "starter", label: "Starter" },
                ]}
                value={tierFilter}
                onChange={(v) => applyFilter(v, statusFilter)}
              />
              <FilterTab
                options={[
                  { key: "all", label: "All status" },
                  { key: "active", label: "Active" },
                  { key: "cancelled", label: "Cancelled" },
                ]}
                value={statusFilter}
                onChange={(v) => applyFilter(tierFilter, v)}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30 text-xs text-muted-foreground">
                    <th className="px-4 py-3 text-left font-medium">User</th>
                    <th className="px-4 py-3 text-left font-medium">Plan</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                    <th className="px-4 py-3 text-left font-medium">Next Billing</th>
                    <th className="px-4 py-3 text-left font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {subs?.data.map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-border/20 last:border-0 hover:bg-muted/10 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium truncate max-w-[180px]">
                          {s.ownerName || s.ownerEmail}
                        </p>
                        <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                          {s.ownerName ? s.ownerEmail : ""}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "font-semibold capitalize",
                            TIER_COLORS[s.tier] ?? "text-foreground"
                          )}
                        >
                          {s.tier}
                        </span>
                        <p className="text-xs text-muted-foreground capitalize">
                          {s.billingInterval}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                            STATUS_COLORS[s.status] ?? "bg-muted/30 text-muted-foreground"
                          )}
                        >
                          {s.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {fmtDate(s.nextBillingAt)}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {fmtDate(s.updatedAt)}
                      </td>
                    </tr>
                  ))}
                  {!subs?.data.length && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-10 text-center text-sm text-muted-foreground"
                      >
                        No subscriptions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {subs && subs.pagination.pages > 1 && (
              <div className="flex items-center justify-between border-t border-border/30 px-4 py-3">
                <p className="text-xs text-muted-foreground">
                  {subs.pagination.total} total · page {subs.pagination.page} of{" "}
                  {subs.pagination.pages}
                </p>
                <div className="flex gap-1">
                  <button
                    onClick={() => goPage(page - 1)}
                    disabled={page === 1}
                    className="rounded-lg border border-border/50 p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft className="size-3.5" />
                  </button>
                  <button
                    onClick={() => goPage(page + 1)}
                    disabled={page >= subs.pagination.pages}
                    className="rounded-lg border border-border/50 p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  >
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent billing activity */}
        <div>
          <h2 className="mb-4 text-base font-semibold">Recent Activity</h2>
          <div className="rounded-2xl border border-border/50 bg-card/40 overflow-hidden">
            <ul className="divide-y divide-border/20">
              {activity.map((a) => (
                <li key={a.id} className="px-4 py-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-medium leading-snug">
                        {ACTION_LABELS[a.action] ?? a.action}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground truncate">
                        {a.userEmail ?? "—"}
                      </p>
                      {a.metadata && typeof a.metadata === "object" && (
                        <p className="mt-0.5 text-[10px] text-muted-foreground/70">
                          {[
                            (a.metadata as any).tier && `tier: ${(a.metadata as any).tier}`,
                            (a.metadata as any).interval && `${(a.metadata as any).interval}`,
                          ]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                    </div>
                    <p className="shrink-0 text-[10px] text-muted-foreground/60">
                      {fmtTime(a.createdAt)}
                    </p>
                  </div>
                </li>
              ))}
              {!activity.length && (
                <li className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No billing activity yet.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
