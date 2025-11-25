<!-- Copilot/AI agent instructions for the Dytor Landing Page repo -->
# Copilot instructions — Dytor Landing Page

This repository is a Next.js 15 + TypeScript landing-page template implemented with Tailwind v4 and a shadcn-style UI component structure. The goal of AI agents working on this repo is to safely produce changes that match the repository architecture and conventions (app router, component layers, Tailwind utilities, built UI primitives), and to keep the site fast, accessible and consistent with existing design tokens.

## Top-level architecture (quick summary)
- Next.js App Router (app/): pages are server components by default. Use `use client` when you need React state, hooks or client-only libraries (framer-motion, motion, browser-specific APIs).
- UI primitives: `components/ui/*` contains small building blocks (Button, Section, Navbar) used by `components/sections/*`. Follow the naming and props conventions already used (e.g., `Section` wrapper, `buttonVariants` for styles).
- Pages: `app/page.tsx` (home) composes sections; add pages under `app/` as server components by default.
- Theme + layout: `app/layout.tsx` sets up the `ThemeProvider`, global fonts, `Navbar` and `Footer`.

## Local dev, build and lint commands
- Install deps: `npm install`
- Dev: `npm run dev` (uses `next dev --turbopack`, runs the App Router and hot reload)
- Build: `npm run build` (Next.js build)
- Start production: `npm run start` (after a successful build)
- Lint: `npm run lint` (ESLint configured to follow Next.js rules and plugins)

If the `--turbopack` option causes issues during development, you can remove it by running the server directly with `next dev`.

## Component and stylesheet conventions (do this)
- Use `components/ui/*` components for primitives (Buttons, Inputs, Navigation). Example: `components/ui/button.tsx` exports `Button` and `buttonVariants` (via class-variance-authority) — prefer using `buttonVariants` to ensure consistent styles.
- Use `components/sections/*/default.tsx` for reusable sections (Hero, CTA, Features). Sections export a default component and typically rely on the `Section` primitive from `components/ui/section.tsx`.
- Use `lib/utils.ts` `cn()` helper to combine classes (recommended over raw `clsx` + `twMerge` usage).
- Prefer `Next/Image` and local `public` assets for images (see `components/ui/resizable-navbar.tsx` `NavbarLogo` example).
- If a component uses browser APIs, event listeners, motion, state, or hooks, add `use client` to the top of the file (e.g., `components/ui/resizable-navbar.tsx` and `components/sections/navbar/default.tsx`).
- Follow the `default.tsx` default export pattern for all `sections/*` components; the app pages import sections with `import Hero from '../components/sections/hero/default'`.

## Styling and tokens (project-specific)
- Tailwind v4 with custom `@utility` rules in `styles/utils.css`. Utilities like `glass-4`, `fade-bottom`, `line-x` are defined there — use them as semantic utilities.
- Global CSS variables are defined in `app/globals.css`. Use those variables and design tokens (e.g., `--primary`, `--background`) instead of hard-coded colors.
- Layout spacing and container sizes are centralized (`--spacing-container`), so prefer `max-w-container` classes where appropriate.

## Patterns & examples (do this)
- Use `class-variance-authority` for multi-variant components. Example: `components/ui/button.tsx` uses `cva` to define `buttonVariants`. Use `Button` and pass `variant` and `size` props rather than adding raw Tailwind classes.
- Use `asChild` with `@radix-ui/react-slot` for anchor links in Buttons (see `Hero` implementation for example of `asChild` + `a href` inside a `Button`).
- Default section skeleton:

```tsx
import { Section } from '@/components/ui/section';

export default function FooSection({ ...props }) {
  return (
    <Section>
      {/* Content */}
    </Section>
  );
}
```

## Server vs Client components (important)
- Pages and components in `app/` are server components by default.
- Convert a component to client component by adding `use client` at the top of the file when you need state, hooks, browser-only APIs or animations (examples: `framer-motion`, `useScroll`, `useState`). See `components/ui/resizable-navbar.tsx` for a sample client component.
- Keep non-interactive components as server components by default to maximize performance and reduce bundle size.

## Additional patterns & shortcuts
- `data-slot` attributes are used on `ui` primitives to mark composition points and make layout predictable (example: `data-slot="section"` or `data-slot="navbar"`).
- `components/mvpblocks/*` contains pre-built blocks (re-usable design patterns) — use or copy these as starting points for new sections.
- When adding a new section or page: create `components/sections/<name>/default.tsx` and ensure it exports a default component, then import it from `app/page.tsx` or any page where it should appear.

## Where to update site content and metadata
- `config/site.ts` holds the site name, url, links, and stats. Update this to change social links, logo text or statistics displayed across multiple sections.
- `app/layout.tsx` sets global HTML metadata; update `metadata` or `siteConfig` to affect SEO tags.

## External integrations and dependencies
- Theme: `next-themes` is used for theme switching; `ThemeProvider` supports `defaultTheme="dark"` and explicit system settings are disabled.
- Animations: `motion` / `framer-motion` used in header and other components — keep the animations client-only.
- Icons: `lucide-react` and `@tabler/icons-react` across the UI.

## Testing & debugging tips
- For quick checks, run `npm run dev` and visit `http://localhost:3000`.
- If you change Tailwind utilities or tokens in `app/globals.css`, re-run the dev server and react to Hot Module replacement updates.
- When adding new client components, confirm they don’t break server rendering or introduce hydration mismatches (look for `use client` placement and props flow).

## Common pitfalls (don’t do these)
- Don’t add `use client` unless the component needs client-only features (hooks, state, motion, DOM access).
- Avoid adding raw CSS variables in components — use design tokens in `globals.css` where possible.
- Don’t modify `app/layout.tsx` to remove essential providers (ThemeProvider, Navbar) unless intentionally changing layout.

## Search and jump-to files (handy patterns)
- `components/ui` — primitives & patterns
- `components/sections` — page sections with default exports
- `app/page.tsx`, `app/layout.tsx` — bootstrap & composition
- `config/site.ts` — default site copy and links
- `lib` — utilities (`fonts`, `utils`, helpers)

## Useful examples from repo
- Hero usage in `app/page.tsx`: `Hero` accepts `mockup`, `badge` and `buttons` props; see `components/sections/hero/default.tsx`.
- Button variants: `components/ui/button.tsx` — prefer using `buttonVariants` to create consistent styles across the site.

## If you want to make a change
1. Add tests or a manual QA step (open dev server and inspect visually).
2. Run `npm run lint` and `npm run build` locally before submitting a PR.
3. Keep commits small and focused (e.g., "feat: add hero CTA variant" or "fix: button variant bug in hero").

## Final notes
- Follow the style of existing components when adding new sections or UI primitives.
- Use `cn()` from `lib/utils.ts` to compose classes and `cva` to create variant-based classes.
- If this file conflicts with an existing `.github/copilot-instructions.md`, please merge and preserve any repository-specific rules not visible here.

---

If anything is unclear or you want the instructions expanded to include CI scripts, deployment settings, or test examples, please tell me what to add.

