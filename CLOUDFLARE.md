# Cloudflare Pages Deployment & Security Reference

## Deployment Architecture

- **Deployment Model**: Cloudflare Pages (Automatic GitHub Integration / Dashboard CI)
- **Output Directory**: `./dist`
- **Wrangler Config**: `wrangler.jsonc` (`pages_build_output_dir: "./dist"`)

## Security & Header Configuration

- **`public/_headers`**: Defines Content-Security-Policy (CSP), X-Content-Type-Options (`nosniff`), X-Frame-Options (`SAMEORIGIN`), and Referrer-Policy (`strict-origin-when-cross-origin`).
- **`index.html`**: Contains synchronized `<meta http-equiv="Content-Security-Policy">` for local and edge alignment.
- **`package.json`**: Enforces postbuild step generating `200.html` SPA route fallback while removing edge-conflicting files.
