// src/types/about.ts

/**
 * A single skill displayed on the About page.
 * `proficiency` is a normalized value in the range 0..1 (0 = none, 1 = expert).
 */
export interface Skill {
  id: string
  name: string
  icon: string
  /** Proficiency level, normalized between 0 and 1 inclusive. */
  proficiency: number
  category: 'technical' | 'creative' | 'soft'
}

/**
 * A labeled statistic (e.g. "Years Experience", "Projects Shipped").
 * `value` may be numeric or a pre-formatted string ("100+").
 */
export interface Stat {
  label: string
  value: number | string
}

/**
 * Full About content document.
 * Singleton-style: there is typically one AboutContent record per site.
 */
export interface AboutContent {
  id: string
  bio: string
  shortBio: string
  location: string
  yearsExperience: number
  skills: Skill[]
  stats: Stat[]
  email: string
  updatedAt: string
}
