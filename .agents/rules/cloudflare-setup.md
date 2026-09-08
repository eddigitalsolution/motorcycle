# Cloudflare Setup & Deployment Rule

## Pages Static Deployment Setup
- **`wrangler.jsonc`**: Must use `pages_build_output_dir: "./dist"`. Do NOT include an `assets` block in Pages mode.
- **`public/_headers`**: Edge HTTP security headers configured.
- **`index.html`**: CSP meta tag synchronized with `public/_headers`.
- **`package.json` deploy command**: Set strictly to `"npm run build"`. Do not embed `wrangler deploy` inside `package.json` for Cloudflare CI builds.
