# Cloudflare Deployment Skill (`cloudflare-deployment`)

This project implements the standards defined by `cloudflare-deployment`:
- **Security Headers**: `public/_headers` configured with strict CSP policy, `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy`.
- **Local & Edge CSP**: Synchronized CSP meta tag inside `index.html`.
- **SPA Routing & Fallback**: `package.json` contains postbuild script to copy `dist/index.html` to `dist/200.html` for Cloudflare single-page routing, along with `public/_redirects`.
- **Environment**: Configured for Node 20 runtime (`NODE_VERSION=20`).
