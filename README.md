# Bridge Dynamics Website

Production-oriented static marketing website for Bridge Dynamics, developed by Southbridge Technologies.

## Active implementation

- Next.js 16 App Router
- React 19 and strict TypeScript
- Static export to `out/`
- Node.js 24 LTS and npm
- Native CSS with no Bootstrap, Tailwind, external CDN or web-font dependency

The former .NET 10 Razor Pages prototype remains preserved at commit `b874ea684a4a0810a829f6df35895ed9de8e7956`. To retrieve it without changing branches:

```powershell
git checkout b874ea684a4a0810a829f6df35895ed9de8e7956 -- src tests BridgeDynamics.Website.slnx global.json
```

## Local development

```powershell
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` when environment-specific values are required.

## Validation

```powershell
npm run lint
npm run typecheck
npm run test
npm run build
npm run build:e2e
npm run test:e2e
```

`npm run build` generates the complete portable website in `out/`, generates a hash-based CSP for all emitted inline scripts, and verifies routes and local links.

## Lead handling

Browser forms use a typed `LeadSubmissionClient`. Local development without an endpoint uses a non-persistent simulation. Production builds without `NEXT_PUBLIC_LEAD_API_BASE_URL` fail safely at submission time. The future lead API must implement authoritative validation, throttling, abuse controls, storage and email or CRM delivery. No submitted personal information is logged or persisted by this website.

## Deployment

See [Azure Static Web Apps](docs/azure-static-web-apps.md), [portable deployment](docs/deployment.md), and [migration notes](docs/migration.md).
