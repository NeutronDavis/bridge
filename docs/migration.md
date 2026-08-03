# Next.js migration and handover

The active implementation replaces the approved ASP.NET Core Razor Pages prototype with a static Next.js website. It preserves approved positioning, routes, commercial language, industry focus, lead journeys, accessibility behavior and responsible security claims while introducing a redesigned React component system.

The Razor implementation was removed from the active branch to avoid maintaining two production applications. It remains available in Git history at `b874ea684a4a0810a829f6df35895ed9de8e7956`.

## Architecture

Most components are React Server Components rendered during static generation. Client components are limited to:

- `MobileNavigation` for accessible disclosure state.
- `ContactForm` and `DemoRequestForm` for validation and submission state.
- `app/error.tsx` for the App Router client error boundary.

Content lives in `content/`, reusable components in `components/`, form and SEO infrastructure in `lib/`, and public routes in `app/`.

## Production decisions still required

- Approved lead API and allowed CSP origin.
- Final public site URL.
- Legally approved privacy and terms text.
- Data retention, subprocessors and hosting disclosures.
- Public corporate contact details.
- Complete resource articles and delivery behavior.
- Analytics and consent strategy, if analytics are introduced.
