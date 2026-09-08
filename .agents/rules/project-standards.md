# Project Standards & Quality Guidelines

## 1. Design & Typography
- **Anti-AI-Slop Icon Policy**: Only standard, clean vector SVG outline icons (`lucide-react`) with consistent sizing (`w-4 h-4`, `w-5 h-5`). Strictly prohibit 3D glossy icons or tacky clipart.
- **Navbar Text Standards**: Keep top navbar navigation links uppercase, concise (`PROCESS`, `FLEET`, `FEATURES`, `FAQ`), and single-line responsive (`whitespace-nowrap`).
- **Typography**: Modern font stack (`Plus Jakarta Sans` & `Space Grotesk`).

## 2. Form & Accessibility Standards
- All `<input>` and `<select>` elements must have unique `id` and appropriate `autoComplete` attributes.

## 3. SPA Routing & Cloudflare Setup
- Clean postbuild fallback to `200.html`.
- Unified CSP header configuration without `unsafe-eval`.
