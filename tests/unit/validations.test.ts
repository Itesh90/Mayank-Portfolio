import { describe, it, expect } from 'vitest'
import { projectCreateSchema, contactFormSchema, loginSchema } from '@/lib/validations'

describe('projectCreateSchema', () => {
  it('accepts a valid project', () => {
    const result = projectCreateSchema.safeParse({
      title: 'Test Project',
      description: 'A test project description',
      shortDescription: 'Short desc',
      category: 'character',
    })
    expect(result.success).toBe(true)
  })

  it('rejects title shorter than 3 chars', () => {
    const result = projectCreateSchema.safeParse({
      title: 'AB',
      description: 'A test project description',
      shortDescription: 'Short desc',
      category: 'character',
    })
    expect(result.success).toBe(false)
  })

  it('rejects unknown category', () => {
    const result = projectCreateSchema.safeParse({
      title: 'Test Project',
      description: 'A description that is long enough',
      shortDescription: 'Short',
      category: 'invalid',
    })
    expect(result.success).toBe(false)
  })

  it('applies default false to featured', () => {
    const result = projectCreateSchema.safeParse({
      title: 'Test Project',
      description: 'A description that is long enough',
      shortDescription: 'Short',
      category: 'character',
    })
    expect(result.success).toBe(true)
    if (result.success) expect(result.data.featured).toBe(false)
  })
})

describe('contactFormSchema', () => {
  it('accepts a valid contact submission', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Project Inquiry',
      message: 'I would like to discuss a project with you',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid email', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'not-an-email',
      subject: 'Project Inquiry',
      message: 'I would like to discuss a project with you',
    })
    expect(result.success).toBe(false)
  })

  it('rejects messages shorter than 20 chars', () => {
    const result = contactFormSchema.safeParse({
      name: 'Jane Doe',
      email: 'jane@example.com',
      subject: 'Subject',
      message: 'Too short',
    })
    expect(result.success).toBe(false)
  })
})

describe('loginSchema', () => {
  it('accepts a valid email + 8-char password', () => {
    const result = loginSchema.safeParse({
      email: 'admin@example.com',
      password: 'password123',
    })
    expect(result.success).toBe(true)
  })

  it('rejects passwords shorter than 8 chars', () => {
    const result = loginSchema.safeParse({
      email: 'admin@example.com',
      password: 'short',
    })
    expect(result.success).toBe(false)
  })
})
