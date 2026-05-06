'use client';

import { Suspense, useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase-browser';

type Status = 'idle' | 'redirecting' | 'error';

export default function DesktopSignInPage() {
  return (
    <Suspense fallback={<DesktopSignInShell status="idle" />}>
      <DesktopSignInContent />
    </Suspense>
  );
}

function DesktopSignInContent() {
  const params = useSearchParams();
  const scheme = params.get('scheme') || 'dytor';
  const next = params.get('next') || 'auth';
  const clientId = params.get('clientId') || '';

  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const callbackUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const url = new URL('/auth/desktop/callback', window.location.origin);
    if (clientId) url.searchParams.set('clientId', clientId);
    url.searchParams.set('scheme', scheme);
    url.searchParams.set('next', next);
    return url.toString();
  }, [clientId, next, scheme]);

  const startGoogleSignIn = useCallback(async () => {
    setStatus('redirecting');
    setErrorMsg('');

    try {
      const supabase = getSupabaseBrowserClient();
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: callbackUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'select_account',
          },
        },
      });

      if (error) throw error;
      if (data.url) {
        window.location.assign(data.url);
        return;
      }

      throw new Error('Supabase did not return an OAuth redirect URL.');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Unable to start Google sign-in.',
      );
    }
  }, [callbackUrl]);

  return (
    <DesktopSignInShell
      status={status}
      errorMsg={errorMsg}
      scheme={scheme}
      onContinue={startGoogleSignIn}
    />
  );
}

function DesktopSignInShell({
  status,
  errorMsg = '',
  scheme = 'dytor',
  onContinue,
}: {
  status: Status;
  errorMsg?: string;
  scheme?: string;
  onContinue?: () => void;
}) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-xl">
        <h1 className="text-2xl font-bold tracking-tight">Sign in to Dytor</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Continue with Google. Supabase will authenticate you in the browser,
          then we’ll send the session back to the desktop app.
        </p>

        <button
          type="button"
          onClick={onContinue}
          disabled={status === 'redirecting' || !onContinue}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110 disabled:opacity-60"
        >
          <GoogleGlyph />
          {status === 'redirecting' ? 'Redirecting to Google…' : 'Continue with Google'}
        </button>

        <p className="mt-4 text-xs text-muted-foreground">
          The desktop app opened this page with scheme <code>{scheme}://</code>.
        </p>

        {status === 'error' && errorMsg && (
          <div className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {errorMsg}
          </div>
        )}
      </div>
    </main>
  );
}

function GoogleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.614z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.181l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958l3.007 2.332C4.672 5.163 6.656 3.58 9 3.58z"
        fill="#EA4335"
      />
    </svg>
  );
}
