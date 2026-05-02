# Elara Voss — Animation Portfolio

Personal portfolio site for animator and motion designer Elara Voss. Showcases selected work across character animation, motion design, and interactive 3D, with an admin surface for managing projects and content.

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **3D / animation:** Three.js, @react-three/fiber, @react-three/drei, GSAP, Framer Motion
- **Auth:** NextAuth.js v5 (beta)
- **Data:** Supabase (Postgres) via `@supabase/supabase-js`
- **Media:** Cloudinary (`next-cloudinary`)
- **Forms / validation:** react-hook-form + Zod
- **Email:** Resend

## Setup

Requires Node.js 20+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local
# then fill in real values for Supabase, NextAuth, Cloudinary, Resend, etc.

# 3. Run the dev server
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Other scripts

- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run Next.js / ESLint checks

## Folder structure

```
.
├── src/
│   ├── app/              # Next.js App Router routes
│   │   ├── admin/        # Admin dashboard routes
│   │   ├── api/          # Route handlers (REST endpoints)
│   │   ├── site/         # Public marketing/site routes
│   │   ├── fonts/        # Local font files (Geist)
│   │   ├── layout.tsx    # Root layout + metadata
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable React components
│   ├── constants/        # Static config / lookup values
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Clients, utilities, server helpers
│   ├── styles/           # Global styles / design tokens
│   └── types/            # Shared TypeScript types
├── tests/                # Test suites
├── docs/                 # Project documentation
├── public/               # Static assets served as-is
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```
