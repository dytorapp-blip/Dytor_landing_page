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
    <Suspense fallback={null}>
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
  if (status === 'success' || status === 'loading') {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6" aria-live="polite">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-xl">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-lg">
              <div className="h-6 w-6 rounded-full border-2 border-brand border-t-transparent animate-spin" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Logging in</h1>
              <p className="text-sm text-muted-foreground">
                Approve the browser prompt if asked. We&apos;re opening Dytor now.
              </p>
            </div>
            <p className="sr-only">{message}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-xl">
        <h1 className="text-2xl font-bold tracking-tight">
          {status === 'error' ? 'Sign-in failed' : 'Connecting desktop app'}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{message}</p>

        {status === 'error' && fallbackLink && (
          <a
            href={fallbackLink}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground hover:brightness-110"
          >
            Try opening Dytor again {'->'}
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
