// src/types/project.ts

/**
 * Discriminated union of allowed project categories.
 * Used to constrain Project.category to a known set of values.
 */
export type Category =
  | 'character'
  | 'thumbnail'
  | 'artwork'
  | 'background'
  | 'client'
  | 'creations'

/**
 * A single image asset attached to a Project.
 * `publicId` corresponds to the Cloudinary public ID for transformations.
 */
export interface ProjectImage {
  id: string
  url: string
  publicId: string
  width: number
  height: number
  alt: string
}

/**
 * A single video asset attached to a Project.
 * `duration` is expressed in seconds.
 * `thumbnail` is an optional poster/preview image URL.
 */
export interface ProjectVideo {
  id: string
  url: string
  publicId: string
  duration: number
  thumbnail?: string
}

/**
 * Full Project entity as returned from the API / database.
 * `slug` is a URL-safe unique identifier.
 * `order` controls display ordering within a category (ascending).
 */
export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  category: Category
  images: ProjectImage[]
  videos?: ProjectVideo[]
  featured: boolean
  order: number
  year: number
  tools: string[]
  link?: string
  createdAt: string
  updatedAt: string
}

/**
 * Input shape for creating a new Project.
 * Server is responsible for assigning id, slug, timestamps, and asset arrays.
 */
export interface ProjectCreateInput {
  title: string
  description: string
  shortDescription: string
  category: Category
  featured?: boolean
  year?: number
  tools?: string[]
  link?: string
}

/**
 * Input shape for updating an existing Project.
 * All Create fields become optional except `id`, which is required to target the record.
 */
export interface ProjectUpdateInput extends Partial<ProjectCreateInput> {
  id: string
}
