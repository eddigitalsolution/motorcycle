# 🏍️ APEX RIDERS — Premium Superbike & Motorcycle Rental

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deploys_at_Edge-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![React 19](https://img.shields.io/badge/React_19-Latest-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-Engine-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**Apex Riders** is a high-performance, dark-themed superbike and motorcycle rental web application built with **React 19**, **TypeScript**, **Vite 8**, **Framer Motion 12**, **GSAP**, and **Tailwind CSS v4**, designed specifically for high-speed Cloudflare Pages static hosting.

---

## ✨ Features

- **🏎️ Fleet Showcase**: Filter and inspect elite motorcycles (Ducati Panigale V4, BMW R1250 GS, Yamaha YZF-R1, Kawasaki Ninja H2, Triumph Speed Triple 1200).
- **📅 Interactive Booking Engine**: Instant date picker, location selection, equipment add-ons, and real-time total price calculation.
- **🗺️ Iconic Route Animations**: Interactive visual guides for scenic coastal drives and mountain twisties powered by SVG route tracing.
- **🛡️ Comprehensive Safety & Gear**: Details on included premium safety gear, insurance packages, and 24/7 roadside assistance.
- **⚡ Anti-AI-Slop Clean Design System**: Vector line icons (`lucide-react`), sleek glassmorphism, responsive navigation header, and high-contrast typography.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4, Lucide React Icons
- **Animations**: Framer Motion 12, GSAP
- **Code Audit**: Oxlint (`npx oxlint`)
- **Hosting Target**: Cloudflare Pages (`pages_build_output_dir: "./dist"`)

---

## 🚀 Quick Start

### 1. Installation

```bash
# Clone repository
git clone https://github.com/eddigitalsolution/motorcycle.git
cd motorcycle

# Install dependencies
npm install
```

### 2. Local Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Audit

```bash
# Type check and build
npm run build

# Run code audit
npm run lint

# Local preview of build
npm run preview
```

---

## 🌐 Cloudflare Pages Deployment

This project adheres strictly to **Cloudflare Pages static hosting standards**:

- **Build Output Directory**: `./dist`
- **Configuration File**: [`wrangler.jsonc`](file:///c:/Users/User/Desktop/Progamming/antigravity/motocycle%20rental/wrangler.jsonc)
- **Security Headers**: Managed edge HTTP headers in [`public/_headers`](file:///c:/Users/User/Desktop/Progamming/antigravity/motocycle%20rental/public/_headers) & synchronized CSP meta tag in `index.html`.
- **SPA Route Rewrite**: Automatically generates `dist/200.html` via `postbuild` script for 404-free single-page navigation.

---

## 📞 Support & Business Contact

- **Support Hotline & WhatsApp**: `+60 11-3071 9502`
- **WhatsApp Link**: [Contact via WhatsApp](https://wa.me/601130719502)

---

## 📄 License

MIT © [ED Digital Solution](https://github.com/eddigitalsolution)
