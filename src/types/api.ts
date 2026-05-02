// src/types/api.ts

/**
 * Generic API response envelope.
 * `success` indicates outcome; `data` is present on success, `error`/`message` on failure.
 */
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/**
 * Paginated list response.
 * `page` is 1-indexed. `hasMore` is true when items beyond this page exist.
 */
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

/**
 * Inbound payload from the public contact form.
 * Validation (length, email format) is enforced separately via Zod (Task 4).
 */
export interface ContactFormInput {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Persisted contact message record, including server-assigned metadata.
 * `read` flips to true once an admin has viewed the message.
 */
export interface ContactMessage extends ContactFormInput {
  id: string
  read: boolean
  createdAt: string
}
