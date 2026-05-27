import { NextRequest, NextResponse } from 'next/server';

// Disable Next.js body parsing — we must forward the raw body intact
// so the backend's HMAC-SHA512 signature check passes.
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get('x-paystack-signature') ?? '';

  const backendUrl = process.env.NEXT_PUBLIC_DYTOR_BACKEND_URL ?? 'http://localhost:4000';

  try {
    const res = await fetch(`${backendUrl}/api/billing/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-paystack-signature': signature,
      },
      body: rawBody,
    });

    return NextResponse.json({ received: true }, { status: res.ok ? 200 : res.status });
  } catch {
    return NextResponse.json({ error: 'Backend unreachable' }, { status: 502 });
  }
}
