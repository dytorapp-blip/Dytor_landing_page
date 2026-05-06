'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_DYTOR_BACKEND_URL || 'http://localhost:4000';

type Status = 'loading' | 'success' | 'error';
type BackendDesktopSession = {
  accessToken: string;
  refreshToken: string;
  user: { email: string; fullName?: string | null; avatarUrl?: string | null };
};

export default function DesktopAuthCallbackPage() {
  return (
    <Suspense fallback={<DesktopCallbackShell status="loading" message="Finalizing sign-in…" />}>
      <DesktopAuthCallbackContent />
    </Suspense>
  );
}

function DesktopAuthCallbackContent() {
  const params = useSearchParams();
  const scheme = params.get('scheme') || 'dytor';
  const next = params.get('next') || 'auth';

  const [status, setStatus] = useState<Status>('loading');
  const [message, setMessage] = useState('Finalizing sign-in…');
  const [deepLink, setDeepLink] = useState<string | null>(null);

  const authCode = params.get('code') || '';

  const fallbackLink = useMemo(() => deepLink, [deepLink]);

  useEffect(() => {
    let cancelled = false;

    async function complete() {
      if (!authCode) {
        setStatus('error');
        setMessage('Missing Supabase authorization code.');
        return;
      }

      try {
        const supabase = getSupabaseBrowserClient();
        const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
        if (error) throw error;

        const accessToken = data.session?.access_token;
        if (!accessToken) {
          throw new Error('Supabase session is missing an access token.');
        }

        const response = await fetch(
          `${BACKEND_URL.replace(/\/$/, '')}/auth/supabase`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accessToken }),
          },
        );

        const body = (await response.json().catch(() => ({}))) as Partial<BackendDesktopSession> & {
          error?: string;
          detail?: string;
        };

        if (!response.ok || !body.accessToken || !body.refreshToken || !body.user) {
          throw new Error(body.detail || body.error || `Backend error (${response.status})`);
        }

        const session: BackendDesktopSession = {
          accessToken: body.accessToken,
          refreshToken: body.refreshToken,
          user: body.user,
        };

        const link = buildDeepLink(scheme, next, session);
        if (cancelled) return;

        setDeepLink(link);
        setStatus('success');
        setMessage('Opening Dytor…');
        window.location.assign(link);
      } catch (err) {
        if (cancelled) return;
        setStatus('error');
        setMessage(err instanceof Error ? err.message : 'Unable to complete sign-in.');
      }
    }

    complete();

    return () => {
      cancelled = true;
    };
  }, [authCode, next, scheme]);

  return (
    <DesktopCallbackShell
      status={status}
      message={message}
      fallbackLink={fallbackLink}
    />
  );
}

function DesktopCallbackShell({
  status,
  message,
  fallbackLink,
}: {
  status: Status;
  message: string;
  fallbackLink?: string | null;
}) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-xl">
        <h1 className="text-2xl font-bold tracking-tight">
          {status === 'error' ? 'Sign-in failed' : 'Connecting desktop app'}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{message}</p>

        {status === 'loading' && (
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-border">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-brand" />
          </div>
        )}

        {status !== 'loading' && fallbackLink && (
          <a
            href={fallbackLink}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:brightness-110"
          >
            Open Dytor desktop app →
          </a>
        )}
      </div>
    </main>
  );
}

function buildDeepLink(
  scheme: string,
  next: string,
  data: {
    accessToken: string;
    refreshToken: string;
    user: { email: string; fullName?: string | null; avatarUrl?: string | null };
  },
) {
  const params = new URLSearchParams({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    email: data.user.email,
    fullName: data.user.fullName || '',
    avatarUrl: data.user.avatarUrl || '',
  });
  return `${scheme}://${next}?${params.toString()}`;
}
