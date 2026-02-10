import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/use-cases(.*)",
  "/changelog(.*)",
  "/contact(.*)",
  "/get-started(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(
  async (auth, req) => {
    const { pathname } = req.nextUrl;
    const isStaticAsset =
      pathname.startsWith("/_next") || /\.[^/]+$/.test(pathname);

    if (isStaticAsset) {
      return;
    }

    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  { authorizedParties: ["https://dytor.app"] },
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
