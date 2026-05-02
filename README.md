# Elara Voss — Animation Portfolio

Personal portfolio site for animator and motion designer Elara Voss. Showcases selected work across character animation, motion design, and interactive 3D.

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with CSS custom-property design tokens
- **3D / animation:** Three.js, @react-three/fiber, @react-three/drei, GSAP, Framer Motion
- **Data:** Supabase (Postgres) via `@supabase/supabase-js`
- **Media:** Cloudinary (`next-cloudinary`)
- **Forms / validation:** react-hook-form + Zod
- **Email:** Resend
- **Tests:** Vitest (unit) + Playwright (E2E)

## Setup

Requires Node.js 20+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.local.example .env.local
# then fill in real Supabase credentials

# 3. Run the dev server
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint
- `npm run test` — Vitest unit tests
- `npm run test:watch` — Vitest watch mode
- `npm run test:e2e` — Playwright E2E (requires `npx playwright install` once)

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for environment variables and Vercel deployment.

## Folder structure

```
.
├── src/
│   ├── app/
│   │   ├── (site)/       # Public marketing routes (home, etc.)
│   │   ├── api/          # Route handlers (REST endpoints)
│   │   ├── layout.tsx    # Root layout + metadata
│   │   └── globals.css   # Design tokens + base styles
│   ├── components/
│   │   ├── 3d/           # Three.js / R3F scene components
│   │   ├── home/         # Hero + CTA sections
│   │   ├── layout/       # Header, Footer
│   │   ├── portfolio/    # Work grid + filtering
│   │   └── ui/           # Reusable primitives (Button, Toast, …)
│   ├── constants/        # Static config (navigation, …)
│   ├── lib/              # Supabase clients, mappers, validations, API utils
│   └── types/            # Shared TypeScript types
├── tests/
│   ├── unit/             # Vitest unit tests
│   └── e2e/              # Playwright smoke tests
├── supabase/migrations/  # SQL schema
├── docs/                 # Project documentation
├── public/               # Static assets
├── .github/workflows/    # CI pipeline
├── vercel.json
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```
