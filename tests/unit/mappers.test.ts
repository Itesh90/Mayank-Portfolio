import { describe, it, expect } from 'vitest'
import { mapProject, mapProjectImage, mapProjectVideo } from '@/lib/mappers'

describe('mapProjectImage', () => {
  it('converts snake_case row to camelCase image', () => {
    const result = mapProjectImage({
      id: 'img-1',
      url: 'https://cdn.example.com/img.jpg',
      public_id: 'cloudinary/abc',
      width: 1200,
      height: 800,
      alt: 'Test image',
    })
    expect(result).toEqual({
      id: 'img-1',
      url: 'https://cdn.example.com/img.jpg',
      publicId: 'cloudinary/abc',
      width: 1200,
      height: 800,
      alt: 'Test image',
    })
  })

  it('coalesces null width/height to 0 and null alt to empty string', () => {
    const result = mapProjectImage({
      id: 'img-2',
      url: 'https://cdn.example.com/img.jpg',
      public_id: 'cloudinary/xyz',
      width: null,
      height: null,
      alt: null,
    })
    expect(result.width).toBe(0)
    expect(result.height).toBe(0)
    expect(result.alt).toBe('')
  })
})

describe('mapProjectVideo', () => {
  it('converts snake_case row to camelCase video', () => {
    const result = mapProjectVideo({
      id: 'vid-1',
      url: 'https://cdn.example.com/v.mp4',
      public_id: 'cloudinary/v1',
      duration: 120,
      thumbnail: 'https://cdn.example.com/v1.jpg',
    })
    expect(result).toEqual({
      id: 'vid-1',
      url: 'https://cdn.example.com/v.mp4',
      publicId: 'cloudinary/v1',
      duration: 120,
      thumbnail: 'https://cdn.example.com/v1.jpg',
    })
  })

  it('omits thumbnail when null', () => {
    const result = mapProjectVideo({
      id: 'vid-2',
      url: 'https://cdn.example.com/v.mp4',
      public_id: 'cloudinary/v2',
      duration: 60,
      thumbnail: null,
    })
    expect(result.thumbnail).toBeUndefined()
  })

  it('coalesces null duration to 0', () => {
    const result = mapProjectVideo({
      id: 'vid-3',
      url: 'https://cdn.example.com/v.mp4',
      public_id: 'cloudinary/v3',
      duration: null,
      thumbnail: null,
    })
    expect(result.duration).toBe(0)
  })
})

describe('mapProject', () => {
  const baseRow = {
    id: 'proj-1',
    slug: 'my-project',
    title: 'My Project',
    description: 'Description',
    short_description: 'Short',
    category: 'character' as const,
    featured: true,
    year: 2024,
    tools: ['Blender', 'Photoshop'],
    link: 'https://example.com',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-06-01T00:00:00Z',
  }

  it('converts a fully populated row', () => {
    const result = mapProject({
      ...baseRow,
      images: [{ id: 'i1', url: 'u1', public_id: 'p1', width: 100, height: 100, alt: 'a' }],
      videos: [{ id: 'v1', url: 'vu1', public_id: 'vp1', duration: 30, thumbnail: 'vt1' }],
    })
    expect(result.id).toBe('proj-1')
    expect(result.shortDescription).toBe('Short')
    expect(result.createdAt).toBe('2024-01-01T00:00:00Z')
    expect(result.updatedAt).toBe('2024-06-01T00:00:00Z')
    expect(result.images).toHaveLength(1)
    expect(result.videos).toHaveLength(1)
  })

  it('returns empty array for null images', () => {
    const result = mapProject({ ...baseRow, images: null })
    expect(result.images).toEqual([])
  })

  it('returns undefined for null videos', () => {
    const result = mapProject({ ...baseRow, videos: null })
    expect(result.videos).toBeUndefined()
  })

  it('coalesces null featured to false', () => {
    const result = mapProject({ ...baseRow, featured: null })
    expect(result.featured).toBe(false)
  })

  it('coalesces null tools to empty array', () => {
    const result = mapProject({ ...baseRow, tools: null })
    expect(result.tools).toEqual([])
  })

  it('coalesces null link to undefined', () => {
    const result = mapProject({ ...baseRow, link: null })
    expect(result.link).toBeUndefined()
  })

  it('coalesces null year to current year', () => {
    const result = mapProject({ ...baseRow, year: null })
    expect(result.year).toBe(new Date().getFullYear())
  })
})
