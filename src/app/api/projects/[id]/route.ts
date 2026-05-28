/**
 * Single-project endpoints.
 *
 * GET    /api/projects/:id     fetch by UUID or slug
 * PUT    /api/projects/:id     partial update (UUID only)
 * DELETE /api/projects/:id     delete (UUID only)
 *
 * NOTE: PUT and DELETE currently have NO auth gate. The admin dashboard,
 * NextAuth, and `lib/auth.ts` were removed in commit a6113ef. Re-add an
 * authentication check before exposing these routes to production traffic.
 */

import type { NextRequest } from 'next/server'
import { supabase, supabaseAdmin, isSupabaseConfigured } from '@/lib/supabase'
import { mapProject, type DbProject } from '@/lib/mappers'
import { apiError, apiSuccess, zodErrorResponse } from '@/lib/api-utils'
import { projectCreateSchema } from '@/lib/validations'

const SELECT_WITH_RELATIONS = `
  *,
  images:project_images(id, url, public_id, width, height, alt),
  videos:project_videos(id, url, public_id, duration, thumbnail)
`

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

interface RouteContext {
  params: { id: string }
}

export async function GET(_req: NextRequest, { params }: RouteContext) {
  if (!isSupabaseConfigured) return apiError('Supabase not configured', 503)
  try {
    // Allow lookup by either UUID or slug so detail pages can use
    // /api/projects/my-project-slug.
    const column = UUID_REGEX.test(params.id) ? 'id' : 'slug'

    const { data, error } = await supabase
      .from('projects')
      .select(SELECT_WITH_RELATIONS)
      .eq(column, params.id)
      .maybeSingle()

    if (error) {
      console.error('GET /api/projects/[id]:', error)
      return apiError('Failed to fetch project', 500)
    }
    if (!data) return apiError('Project not found', 404)

    return apiSuccess(mapProject(data as unknown as DbProject))
  } catch (err) {
    console.error('GET /api/projects/[id] unexpected:', err)
    return apiError('Internal server error', 500)
  }
}

export async function PUT(req: NextRequest, { params }: RouteContext) {
  if (!isSupabaseConfigured) return apiError('Supabase not configured', 503)
  try {
    if (!UUID_REGEX.test(params.id)) {
      return apiError('Updates require a UUID id', 400)
    }

    const body = await req.json().catch(() => null)
    if (body === null) return apiError('Invalid JSON body', 400)

    // Partial update: every field optional, but the same shape rules apply
    // when present.
    const updateSchema = projectCreateSchema.partial()
    const parsed = updateSchema.safeParse(body)
    if (!parsed.success) return zodErrorResponse(parsed.error)

    // Only set columns that the caller explicitly provided. This prevents
    // overwriting existing values with defaults from `projectCreateSchema`.
    const update: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    }
    if (parsed.data.title !== undefined) update.title = parsed.data.title
    if (parsed.data.description !== undefined)
      update.description = parsed.data.description
    if (parsed.data.shortDescription !== undefined)
      update.short_description = parsed.data.shortDescription
    if (parsed.data.category !== undefined)
      update.category = parsed.data.category
    if (parsed.data.featured !== undefined)
      update.featured = parsed.data.featured
    if (parsed.data.year !== undefined) update.year = parsed.data.year
    if (parsed.data.tools !== undefined) update.tools = parsed.data.tools
    if (parsed.data.link !== undefined) update.link = parsed.data.link

    const { data, error } = await supabaseAdmin
      .from('projects')
      .update(update)
      .eq('id', params.id)
      .select(SELECT_WITH_RELATIONS)
      .maybeSingle()

    if (error) {
      console.error('PUT /api/projects/[id]:', error)
      return apiError('Failed to update project', 500)
    }
    if (!data) return apiError('Project not found', 404)

    return apiSuccess(mapProject(data as unknown as DbProject))
  } catch (err) {
    console.error('PUT /api/projects/[id] unexpected:', err)
    return apiError('Internal server error', 500)
  }
}

export async function DELETE(_req: NextRequest, { params }: RouteContext) {
  if (!isSupabaseConfigured) return apiError('Supabase not configured', 503)
  try {
    if (!UUID_REGEX.test(params.id)) {
      return apiError('Deletes require a UUID id', 400)
    }

    const { error } = await supabaseAdmin
      .from('projects')
      .delete()
      .eq('id', params.id)

    if (error) {
      console.error('DELETE /api/projects/[id]:', error)
      return apiError('Failed to delete project', 500)
    }

    return apiSuccess({ deleted: true })
  } catch (err) {
    console.error('DELETE /api/projects/[id] unexpected:', err)
    return apiError('Internal server error', 500)
  }
}
