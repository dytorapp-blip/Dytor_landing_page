import { auth, currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL =
  process.env.DYTOR_BACKEND_URL ||
  process.env.NEXT_PUBLIC_DYTOR_BACKEND_URL ||
  'http://localhost:4000';

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json(
      { error: 'unauthorized' },
      { status: 401 },
    );
  }

  const secret = process.env.DESKTOP_AUTH_SHARED_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'desktop_auth_not_configured' },
      { status: 503 },
    );
  }

  const body = (await req.json().catch(() => null)) as
    | { state?: string }
    | null;

  if (!body?.state || typeof body.state !== 'string') {
    return NextResponse.json({ error: 'invalid_state' }, { status: 400 });
  }

  if (
    process.env.NODE_ENV === 'production' &&
    /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(BACKEND_URL.replace(/\/$/, ''))
  ) {
    return NextResponse.json(
      {
        error: 'backend_url_misconfigured',
        detail:
          'Desktop auth backend URL points to localhost in production. Set DYTOR_BACKEND_URL or NEXT_PUBLIC_DYTOR_BACKEND_URL to your deployed backend.',
      },
      { status: 503 },
    );
  }

  const user = await currentUser();
  const primaryEmail =
    user?.emailAddresses.find((item) => item.id === user.primaryEmailAddressId)
      ?.emailAddress || user?.emailAddresses[0]?.emailAddress;

  if (!user || !primaryEmail) {
    return NextResponse.json(
      { error: 'missing_user_email' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(`${BACKEND_URL.replace(/\/$/, '')}/auth/desktop/code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-desktop-auth-secret': secret,
      },
      body: JSON.stringify({
        state: body.state,
        identity: {
          clerkUserId: user.id,
          email: primaryEmail,
          fullName: user.fullName || [user.firstName, user.lastName].filter(Boolean).join(' ') || null,
          avatarUrl: user.imageUrl || null,
        },
      }),
      cache: 'no-store',
    });

    const payload = await response.json().catch(() => ({}));
    return NextResponse.json(payload, { status: response.status });
  } catch {
    return NextResponse.json(
      {
        error: 'backend_unreachable',
        detail: `Unable to reach desktop auth backend at ${BACKEND_URL}.`,
      },
      { status: 502 },
    );
  }
}
