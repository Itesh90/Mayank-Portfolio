// src/lib/supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

/**
 * Browser/anon Supabase client.
 *
 * Uses the public anon key and is safe to expose to the browser. All access is
 * gated by Row Level Security policies defined in the migrations.
 */
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Server-only admin Supabase client.
 *
 * Uses the service role key, which BYPASSES Row Level Security. This client
 * MUST never be imported into client components or otherwise shipped to the
 * browser.
 */
export const supabaseAdmin: SupabaseClient = createClient(supabaseUrl, supabaseServiceKey)
