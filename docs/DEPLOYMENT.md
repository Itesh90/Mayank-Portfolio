# Deployment Guide

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in real values
npm run dev
```

The site runs at <http://localhost:3000>.

## Environment variables

The app reads three Supabase variables at runtime. Anything else in `.env.local.example` is optional (Cloudinary for media CDN, Resend for transactional email).

| Variable | Where used | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Browser + server Supabase clients | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Browser + server Supabase clients (RLS-respecting) | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only Supabase admin client (bypasses RLS) — used by API write endpoints | Yes |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Media URLs | Optional |
| `RESEND_API_KEY` | Transactional email | Optional |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL helpers | Optional |

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit tests (run mode) |
| `npm run test:watch` | Vitest watch mode |
| `npm run test:e2e` | Playwright E2E tests (needs `npx playwright install` once) |

## Database migrations

Schema lives in `supabase/migrations/`. To apply a new migration:

1. Create a new SQL file: `supabase/migrations/00X_describe_change.sql`
2. Run it in the Supabase dashboard SQL editor (or via the Supabase CLI)
3. Commit the file to git

## Deployment to Vercel

### First-time setup

1. Push this repo to GitHub
2. Go to <https://vercel.com/new> and import the repository
3. Vercel will auto-detect Next.js — keep the defaults
4. Add the three required Supabase environment variables in the Vercel project settings (Production + Preview)
5. Deploy

### Subsequent deploys

Vercel's GitHub integration auto-deploys on every push:
- Push to `main` → production deploy
- PRs against `main` → preview deploy

### CI

`.github/workflows/ci.yml` runs lint, type-check, unit tests, and a build on every push and PR. The build step uses placeholder Supabase values — it validates that the project compiles, not that env wiring is correct.

## Monitoring

- **Uptime / build status**: Vercel dashboard
- **Performance / web vitals**: Vercel Analytics (enable in project settings)
- **Database**: Supabase dashboard
- **Media**: Cloudinary dashboard (if used)
