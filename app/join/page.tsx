'use client';

/**
 * /join?code=ABCDEF
 *
 * The desktop's "Share with team" QR points at this URL. What happens here
 * depends on the device:
 *
 *   • If the Dytor mobile app is installed and the OS recognizes
 *     `dytor.app/join` as an Android App Link or an iOS Universal Link, the
 *     app opens *instead* of this page and auto-pairs into the team —
 *     this page is never reached. (See Dytor_mobile/app.json's
 *     `intentFilters` + `associatedDomains`.)
 *
 *   • If the app *isn't* installed (or the user is on desktop), this page
 *     shows the pair code and a deep-link button to launch the app, plus
 *     install links for the App Store / Play Store.
 */

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_DYTOR_IOS_URL || 'https://apps.apple.com/app/idDYTOR';
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_DYTOR_ANDROID_URL ||
  'https://play.google.com/store/apps/details?id=com.serenity.dytor';

export default function JoinPage() {
  return (
    <Suspense fallback={<JoinShell code="" />}>
      <Inner />
    </Suspense>
  );
}

function Inner() {
  const params = useSearchParams();
  const code = (params.get('code') || '').toUpperCase().slice(0, 8);
  return <JoinShell code={code} />;
}

function JoinShell({ code }: { code: string }) {
  const deepLink = code ? `dytor://join?code=${encodeURIComponent(code)}` : '';

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 sm:p-10 text-card-foreground shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Join a Dytor team
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">
          {code ? "You're invited" : 'Missing code'}
        </h1>

        {code ? (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              Open the Dytor app on your phone to see the timer and join the
              chat. Already installed? Tap the button below.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pair code
              </p>
              <code className="mt-2 block text-3xl font-mono tracking-[0.5em] text-foreground">
                {code}
              </code>
            </div>

            <a
              href={deepLink}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:brightness-110"
            >
              Open in Dytor app →
            </a>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border px-4 py-3 text-center text-xs font-semibold hover:bg-accent"
              >
                Get it on App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border px-4 py-3 text-center text-xs font-semibold hover:bg-accent"
              >
                Get it on Google Play
              </a>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Or open the app and enter the code manually under{' '}
              <span className="font-semibold">Account → Join a team</span>.
            </p>
          </>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            This link is missing a pair code. Ask the host to share a fresh QR
            code from their desktop app.
          </p>
        )}
      </div>
    </main>
  );
}
