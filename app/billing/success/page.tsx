"use client";

import { Suspense, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";
import Glow from "@/components/ui/glow";

type Status = "verifying" | "success" | "error";

function SuccessInner() {
  const { user, isLoaded } = useUser();
  const params = useSearchParams();

  // Paystack appends ?reference=...&trxref=... to the callback URL
  const reference = params.get("reference") ?? params.get("trxref") ?? "";

  const [status, setStatus] = useState<Status>("verifying");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!isLoaded || !user || !reference) return;

    async function verify() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DYTOR_BACKEND_URL}/api/billing/web-verify`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-clerk-user-id": user!.id,
            },
            body: JSON.stringify({ reference }),
          }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Verification failed");
        setStatus("success");
      } catch (err: any) {
        setErrorMsg(err.message ?? "Could not verify payment");
        setStatus("error");
      }
    }

    verify();
  }, [isLoaded, user, reference]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Glow variant="center" className="pointer-events-none scale-75 opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {status === "verifying" && (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Loader2 className="size-7 animate-spin text-primary" />
            </div>
            <p className="text-lg font-semibold">Verifying your payment…</p>
            <p className="text-sm text-muted-foreground">Just a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle className="size-7 text-emerald-400" />
            </div>
            <div>
              <p className="text-lg font-semibold">You&apos;re all set!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your subscription is now active. Open the DYTOR app to get started.
              </p>
            </div>
            <Link
              href="/download"
              className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Download the app
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10">
              <AlertCircle className="size-7 text-destructive" />
            </div>
            <div>
              <p className="text-lg font-semibold">Verification failed</p>
              <p className="mt-1 text-sm text-muted-foreground">{errorMsg}</p>
              {reference && (
                <p className="mt-2 text-xs text-muted-foreground">
                  If you were charged, contact us and quote reference:{" "}
                  <span className="font-mono text-foreground">{reference}</span>
                </p>
              )}
            </div>
            <Link
              href="/contact"
              className="rounded-xl border border-border px-6 py-2.5 text-sm font-semibold transition hover:bg-muted/50"
            >
              Contact support
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function BillingSuccessPage() {
  return (
    <Suspense>
      <SuccessInner />
    </Suspense>
  );
}
