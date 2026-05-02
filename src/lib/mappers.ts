// src/lib/mappers.ts
//
// Mapper functions that translate raw Supabase rows (snake_case, separate
// images/videos tables) into the camelCase Project shape consumed by the
// rest of the app. Keep all DB <-> domain translation in this file so route
// handlers stay free of column-name churn.

import type {
  Category,
  Project,
  ProjectImage,
  ProjectVideo,
} from '@/types/project'

/**
 * Raw row shape returned from `project_images`.
 */
export interface DbProjectImage {
  id: string
  url: string
  public_id: string
  width: number | null
  height: number | null
  alt: string | null
}

/**
 * Raw row shape returned from `project_videos`.
 */
export interface DbProjectVideo {
  id: string
  url: string
  public_id: string
  duration: number | null
  thumbnail: string | null
}

/**
 * Raw row shape returned from `projects`, optionally including embedded
 * relations when the Supabase select uses the relationship syntax.
 */
export interface DbProject {
  id: string
  slug: string
  title: string
  description: string
  short_description: string
  category: Category
  featured: boolean | null
  year: number | null
  tools: string[] | null
  link: string | null
  created_at: string
  updated_at: string
  images?: DbProjectImage[] | null
  videos?: DbProjectVideo[] | null
}

export function mapProjectImage(row: DbProjectImage): ProjectImage {
  return {
    id: row.id,
    url: row.url,
    publicId: row.public_id,
    width: row.width ?? 0,
    height: row.height ?? 0,
    alt: row.alt ?? '',
  }
}

export function mapProjectVideo(row: DbProjectVideo): ProjectVideo {
  return {
    id: row.id,
    url: row.url,
    publicId: row.public_id,
    duration: row.duration ?? 0,
    thumbnail: row.thumbnail ?? undefined,
  }
}

/**
 * Convert a DB project row (with optional embedded images/videos) into the
 * canonical `Project` domain object.
 *
 * Notes:
 *  - The DB schema has no `order` column. The `Project` interface still
 *    declares `order: number` as a legacy field, so we set it to 0 here.
 *    Sorting is performed by `year DESC, created_at DESC` at query time.
 *  - `year` falls back to the current year if the DB row is null, so the
 *    domain object's `number` contract holds.
 */
export function mapProject(row: DbProject): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    shortDescription: row.short_description,
    category: row.category,
    featured: row.featured ?? false,
    order: 0,
    year: row.year ?? new Date().getFullYear(),
    tools: row.tools ?? [],
    link: row.link ?? undefined,
    images: (row.images ?? []).map(mapProjectImage),
    videos: row.videos ? row.videos.map(mapProjectVideo) : undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}
