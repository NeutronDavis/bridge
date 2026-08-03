# Portable static deployment

Run `npm ci` and `npm run build`, then publish the contents of `out/`.

The output uses directory-index routes and can be hosted by Azure Static Web Apps, SBCloud, Nginx, S3-compatible hosting, Cloudflare Pages or another conventional static host.

For non-Azure hosts:

- Serve directory `index.html` files for trailing-slash routes.
- Return `404.html` with HTTP status 404 for missing files.
- Translate the headers from `out/staticwebapp.config.json` into the host's configuration format.
- Redirect HTTP to HTTPS.
- Configure one canonical host.
- Do not rewrite every request to the homepage.

The generated CSP contains hashes for the exact exported HTML. Rebuild and redeploy the generated header whenever application content or build-time environment variables change.
