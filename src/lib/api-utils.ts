// src/lib/api-utils.ts
//
// Small helpers that keep route handlers consistent: every response uses
// the same `{ success, data | error }` envelope shape declared in
// `src/types/api.ts`, and Zod errors are formatted in one place.

import { NextResponse } from 'next/server'
import type { ZodError } from 'zod'

/**
 * Build a successful JSON response. `data` is whatever the route wants to
 * return; the envelope is added here.
 */
export function apiSuccess<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status })
}

/**
 * Build a failed JSON response. `details` is optional and used for
 * structured payloads such as Zod field errors.
 */
export function apiError(error: string, status = 400, details?: unknown) {
  return NextResponse.json(
    { success: false, error, ...(details ? { details } : {}) },
    { status },
  )
}

/**
 * Render a Zod error as a 400 with `{ path, message }` entries so the
 * client can map field-level errors back into a form.
 */
export function zodErrorResponse(err: ZodError) {
  const formatted = err.errors.map((e) => ({
    path: e.path.join('.'),
    message: e.message,
  }))
  return apiError('Validation failed', 400, formatted)
}
