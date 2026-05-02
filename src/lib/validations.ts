// src/lib/validations.ts
import { z } from 'zod'

export const projectCreateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(100),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  shortDescription: z.string().max(200, 'Short description must be under 200 characters'),
  category: z.enum(['character', 'props', 'comics', 'figures', 'sketchbook']),
  featured: z.boolean().default(false),
  year: z.number().min(2000).max(new Date().getFullYear()).optional(),
  tools: z.array(z.string()).default([]),
  link: z.string().url().optional(),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export type ProjectCreate = z.infer<typeof projectCreateSchema>
export type ContactForm = z.infer<typeof contactFormSchema>
export type LoginInput = z.infer<typeof loginSchema>
