'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type Status = 'loading' | 'success' | 'error';
type DesktopCodeResponse = {
  code: string;
  expiresAt?: string;
};

export default function DesktopAuthCallbackPage() {
  return (
    <Suspense fallback={<DesktopCallbackShell status="loading" message="Finalizing sign-in..." />}>
      <DesktopAuthCallbackContent />
    </Suspense>
  );
}

function DesktopAuthCallbackContent() {
  const params = useSearchParams();
  const scheme = params.get('scheme') || 'dytor';
  const source = params.get('source') || 'desktop';
  const state = params.get('state') || '';

  const [status, setStatus] = useState<Status>('loading');
  const [message, setMessage] = useState('Finalizing sign-in...');
  const [deepLink, setDeepLink] = useState<string | null>(null);

  const fallbackLink = useMemo(() => deepLink, [deepLink]);

  useEffect(() => {
    let cancelled = false;

    async function complete() {
      if (source !== 'desktop') {
        setStatus('error');
        setMessage('This sign-in callback is only valid for the desktop app.');
        return;
      }

      if (!state) {
        setStatus('error');
        setMessage('Missing desktop auth state.');
        return;
      }

      try {
        const response = await fetch('/api/auth/desktop/code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ state }),
        });

        const body = (await response.json().catch(() => ({}))) as Partial<DesktopCodeResponse> & {
          error?: string;
          detail?: string;
        };

        if (!response.ok || !body.code) {
          throw new Error(body.detail || body.error || `Desktop auth failed (${response.status})`);
        }

        const link = buildDeepLink(scheme, body.code, state, body.expiresAt);
        if (cancelled) return;

        setDeepLink(link);
        setStatus('success');
        setMessage('Opening Dytor...');
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
  }, [scheme, source, state]);

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
            Open Dytor desktop app {'->'}
          </a>
        )}
      </div>
    </main>
  );
}

function buildDeepLink(
  scheme: string,
  code: string,
  state: string,
  expiresAt?: string,
) {
  const params = new URLSearchParams({ code, state });
  if (expiresAt) {
    params.set('expiresAt', expiresAt);
  }
  return `${scheme}://auth/callback?${params.toString()}`;
}
