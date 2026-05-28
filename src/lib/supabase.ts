// src/lib/supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

/**
 * Lazy proxy that defers `createClient` until first property access. This lets
 * the app build and run without Supabase env vars — calls only fail when code
 * actually tries to query the database, which call sites handle by falling
 * back to demo content (homepage) or returning a 503 (API routes).
 */
function lazyClient(key: string): SupabaseClient {
  let client: SupabaseClient | null = null
  const handler: ProxyHandler<object> = {
    get(_target, prop) {
      if (!client) {
        if (!supabaseUrl || !key) {
          throw new Error(
            'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY to enable database access.',
          )
        }
        client = createClient(supabaseUrl, key)
      }
      const value = (client as unknown as Record<string | symbol, unknown>)[prop as string]
      return typeof value === 'function' ? (value as (...args: unknown[]) => unknown).bind(client) : value
    },
  }
  return new Proxy({}, handler) as unknown as SupabaseClient
}

/**
 * Browser/anon Supabase client. Safe to expose to the browser; access is gated
 * by Row Level Security policies defined in the migrations.
 */
export const supabase: SupabaseClient = lazyClient(supabaseAnonKey)

/**
 * Server-only admin Supabase client. Uses the service role key, which BYPASSES
 * Row Level Security. MUST never be imported into client components.
 */
export const supabaseAdmin: SupabaseClient = lazyClient(supabaseServiceKey)
