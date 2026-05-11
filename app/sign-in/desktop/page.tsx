import { SignIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type DesktopSignInPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function readValue(
  value: string | string[] | undefined,
  fallback: string,
) {
  if (Array.isArray(value)) return value[0] || fallback;
  return value || fallback;
}

export default async function DesktopSignInPage({
  searchParams,
}: DesktopSignInPageProps) {
  const params = (await searchParams) || {};
  const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  if (!hasClerk) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-xl">
          <h1 className="text-2xl font-bold tracking-tight">Desktop sign-in unavailable</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Clerk is not configured for this website build.
          </p>
        </div>
      </main>
    );
  }

  const source = readValue(params.source, 'desktop');
  const state = readValue(params.state, '');
  const scheme = readValue(params.scheme, 'dytor');

  if (!state) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-card-foreground shadow-xl">
          <h1 className="text-2xl font-bold tracking-tight">Missing desktop state</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The desktop app did not provide a valid `state` value.
          </p>
        </div>
      </main>
    );
  }

  const callbackUrl = `/auth/desktop/callback?source=${encodeURIComponent(source)}&state=${encodeURIComponent(state)}&scheme=${encodeURIComponent(scheme)}`;
  const { userId } = await auth();

  if (userId) {
    redirect(callbackUrl);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 w-full max-w-[440px]">
        <SignIn forceRedirectUrl={callbackUrl} fallbackRedirectUrl={callbackUrl} />
      </div>
    </main>
  );
}
