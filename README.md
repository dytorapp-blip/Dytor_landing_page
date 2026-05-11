# Dytor Landing Page

Public marketing site and Clerk-based auth entry point for Dytor.

## Auth Role

- `/sign-in` renders Clerk sign-in
- `/sign-up` renders Clerk sign-up
- `/sign-in/desktop` handles the desktop auth bridge
- `/auth/desktop/callback` mints a one-time desktop auth code and deep-links back to Tauri

## Required Environment

Use [`.env.example`](/abs/path/c:/Users/chimd/Desktop/Serenity/Dytor/Dytor_landing_page/.env.example:1) and provide:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`
- `NEXT_PUBLIC_DYTOR_BACKEND_URL`
- `NEXT_PUBLIC_DYTOR_WEBSITE_URL`
- `DESKTOP_AUTH_SHARED_SECRET`

## Development

```bash
npm install
npm run dev
```
