"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, AlertCircle, ExternalLink } from "lucide-react";
import Glow from "@/components/ui/glow";

function CheckoutInner() {
  const { isLoaded, isSignedIn, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const params = useSearchParams();

  const plan = params.get("plan") ?? "flow";
  const interval = params.get("interval") ?? "monthly";

  const [status, setStatus] = useState<"idle" | "loading" | "redirecting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [payUrl, setPayUrl] = useState<string | null>(null);
  const started = useRef(false);

  async function startCheckout(clerkUserId: string) {
    setError(null);
    setStatus("loading");

    const email = user?.primaryEmailAddress?.emailAddress ?? "";
    const fullName = user?.fullName ?? "";

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DYTOR_BACKEND_URL}/api/billing/web-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-clerk-user-id": clerkUserId,
          },
          body: JSON.stringify({ tier: plan, interval, email, fullName }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? `Server error (${res.status})`);
      }

      if (!data.authorization_url) {
        throw new Error("No payment URL received from server");
      }

      setPayUrl(data.authorization_url);
      setStatus("redirecting");
      window.location.href = data.authorization_url;
    } catch (err: any) {
      setStatus("error");
      setError(err.message ?? "Something went wrong");
    }
  }

  useEffect(() => {
    if (!isLoaded) return;
    if (started.current) return;

    if (!isSignedIn || !userId) {
      const redirectUrl = encodeURIComponent(
        `/checkout?plan=${plan}&interval=${interval}`
      );
      router.replace(`/sign-in?redirect_url=${redirectUrl}`);
      return;
    }

    started.current = true;
    startCheckout(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, isSignedIn, userId]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Glow variant="center" className="pointer-events-none scale-75 opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-sm">

        {(status === "idle" || status === "loading") && (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Loader2 className="size-7 animate-spin text-primary" />
            </div>
            <div>
              <p className="text-lg font-semibold">Connecting to Paystack…</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Setting up your{" "}
                <span className="font-medium capitalize text-foreground">{plan}</span>{" "}
                subscription.
              </p>
            </div>
          </>
        )}

        {status === "redirecting" && (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10">
              <ExternalLink className="size-7 text-emerald-400" />
            </div>
            <div>
              <p className="text-lg font-semibold">Redirecting to Paystack…</p>
              <p className="mt-1 text-sm text-muted-foreground">
                If you are not redirected automatically,{" "}
                <a
                  href={payUrl ?? "#"}
                  className="text-primary underline underline-offset-2"
                >
                  click here
                </a>
                .
              </p>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10">
              <AlertCircle className="size-7 text-destructive" />
            </div>
            <div>
              <p className="text-lg font-semibold">Something went wrong</p>
              <p className="mt-1 text-sm text-muted-foreground">{error}</p>
            </div>
            <button
              onClick={() => {
                if (userId) {
                  started.current = false;
                  startCheckout(userId);
                }
              }}
              className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Try again
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutInner />
    </Suspense>
  );
}
