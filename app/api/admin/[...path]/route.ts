import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);

const ADMIN_SECRET = process.env.ADMIN_SECRET ?? "";
const BACKEND_URL =
  process.env.NEXT_PUBLIC_DYTOR_BACKEND_URL ?? "http://localhost:4000";

async function handler(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (ADMIN_EMAILS.length > 0) {
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress ?? "";
    if (!ADMIN_EMAILS.includes(email)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  const { path } = await params;
  const pathStr = path.join("/");
  const search = req.nextUrl.search;
  const backendUrl = `${BACKEND_URL}/admin/${pathStr}${search}`;

  const body =
    req.method !== "GET" && req.method !== "HEAD"
      ? await req.text()
      : undefined;

  const backendRes = await fetch(backendUrl, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ADMIN_SECRET}`,
    },
    body,
  });

  const data = await backendRes.json();
  return NextResponse.json(data, { status: backendRes.status });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
