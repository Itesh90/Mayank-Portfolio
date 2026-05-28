/**
 * Projects collection endpoints.
 *
 * GET  /api/projects   list with optional category/featured filters + pagination
 * POST /api/projects   create a new project
 *
 * NOTE: POST currently has NO auth gate. The admin dashboard, NextAuth, and
 * `lib/auth.ts` were removed in commit a6113ef, so any caller can hit this
 * endpoint. Re-add an authentication check before exposing this route to
 * production traffic.
 */

import type { NextRequest } from 'next/server'
import { supabase, supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { mapProject, type DbProject } from '@/lib/mappers'
import { apiError, apiSuccess, zodErrorResponse } from '@/lib/api-utils'
import { projectCreateSchema } from '@/lib/validations'

/**
 * Single source of truth for the columns this route reads. Embeds image and
 * video relations in one round trip via PostgREST relationship syntax.
 */
const SELECT_WITH_RELATIONS = `
  *,
  images:project_images(id, url, public_id, width, height, alt),
  videos:project_videos(id, url, public_id, duration, thumbnail)
`

const DEFAULT_LIMIT = 20
const MAX_LIMIT = 50

function parseIntParam(raw: string | null, fallback: number): number {
  if (raw === null) return fallback
  const n = parseInt(raw, 10)
  return Number.isFinite(n) ? n : fallback
}

export async function GET(req: NextRequest) {
  if (!isSupabaseConfigured) return apiError('Supabase not configured', 503)
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured') === 'true'
    const limit = Math.min(
      Math.max(parseIntParam(searchParams.get('limit'), DEFAULT_LIMIT), 1),
      MAX_LIMIT,
    )
    const offset = Math.max(parseIntParam(searchParams.get('offset'), 0), 0)

    let query = supabase
      .from('projects')
      .select(SELECT_WITH_RELATIONS, { count: 'exact' })

    if (category) query = query.eq('category', category)
    if (featured) query = query.eq('featured', true)

    // The DB has no `order` column. Sort by year then created_at so newer
    // work surfaces first within a tied year.
    const { data, count, error } = await query
      .order('year', { ascending: false, nullsFirst: false })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('GET /api/projects:', error)
      return apiError('Failed to fetch projects', 500)
    }

    const rows = (data ?? []) as unknown as DbProject[]
    const total = count ?? 0

    return apiSuccess({
      items: rows.map(mapProject),
      total,
      limit,
      offset,
      hasMore: offset + limit < total,
    })
  } catch (err) {
    console.error('GET /api/projects unexpected:', err)
    return apiError('Internal server error', 500)
  }
}

export async function POST(req: NextRequest) {
  if (!isSupabaseConfigured) return apiError('Supabase not configured', 503)
  try {
    const body = await req.json().catch(() => null)
    if (body === null) return apiError('Invalid JSON body', 400)

    const parsed = projectCreateSchema.safeParse(body)
    if (!parsed.success) return zodErrorResponse(parsed.error)

    const slug = parsed.data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    if (!slug) {
      return apiError(
        'Title must contain at least one alphanumeric character',
        400,
      )
    }

    const { data, error } = await supabaseAdmin
      .from('projects')
      .insert({
        slug,
        title: parsed.data.title,
        description: parsed.data.description,
        short_description: parsed.data.shortDescription,
        category: parsed.data.category,
        featured: parsed.data.featured,
        year: parsed.data.year ?? new Date().getFullYear(),
        tools: parsed.data.tools,
        link: parsed.data.link,
      })
      .select(SELECT_WITH_RELATIONS)
      .single()

    if (error) {
      console.error('POST /api/projects:', error)
      // Postgres unique_violation
      if (error.code === '23505') {
        return apiError('A project with that slug already exists', 409)
      }
      return apiError('Failed to create project', 500)
    }

    return apiSuccess(mapProject(data as unknown as DbProject), 201)
  } catch (err) {
    console.error('POST /api/projects unexpected:', err)
    return apiError('Internal server error', 500)
  }
}
