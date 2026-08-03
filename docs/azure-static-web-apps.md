# Azure Static Web Apps preparation

No Azure resource is created by this repository.

## Build settings

| Setting | Value |
|---|---|
| App location | `/` |
| Output location | `out` |
| Node version | Node 24 LTS |
| Install command | `npm ci` |
| Build command | `npm run build` |

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: the final HTTPS origin used for canonical URLs, Open Graph metadata, sitemap and robots.
- `NEXT_PUBLIC_LEAD_API_BASE_URL`: optional public API origin. It must never contain a secret. When configured, the build-generated CSP adds only its origin to `connect-src`.

Build-time values are embedded in static output. Any change requires a rebuild.

## Routing and errors

Next.js uses trailing-slash directory exports. `staticwebapp.config.json` supplies security headers and rewrites missing routes to `404.html` with status 404. Do not use a single-page-application fallback to `index.html`.

## Security headers

The root configuration defines the restrictive baseline. During `npm run build`, `scripts/generate-csp.mjs` inspects every exported HTML file, rejects inline styles, hashes all framework and JSON-LD inline scripts, and writes the deployable configuration to `out/staticwebapp.config.json`. `unsafe-inline` is not used.

## Custom domain and HTTPS

1. Add the custom domain in the Azure Static Web Apps resource.
2. Create the DNS validation record requested by Azure.
3. Add the final CNAME or apex-compatible record at the DNS provider.
4. Wait for validation and Azure-managed HTTPS certificate issuance.
5. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin and rebuild.

Azure redirects and domain canonicalisation should be configured after the final domain is selected.

## GitHub deployment and previews

The included CI workflow validates and uploads `out/`; it does not deploy. After the Azure resource is explicitly approved and created, add the Azure-generated deployment workflow and repository secret. Azure pull-request deployments can then provide isolated preview environments. Public lead submissions from previews should use an approved non-production endpoint or remain unavailable.

No Azure Functions API is included. The lead API is an independent future service.
