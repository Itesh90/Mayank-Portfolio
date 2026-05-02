// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

/**
 * Browser/anon Supabase client.
 *
 * Uses the public anon key and is safe to expose to the browser. All access is
 * gated by Row Level Security policies defined in the migrations. Use this
 * client for any read/write that should respect RLS (i.e. anything triggered
 * by an end-user request).
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

/**
 * Server-only admin Supabase client.
 *
 * Uses the service role key, which BYPASSES Row Level Security. This client
 * MUST never be imported into client components or otherwise shipped to the
 * browser. Use only in server-side code (route handlers, server actions, edge
 * functions) for trusted admin operations such as CMS writes.
 */
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
)
