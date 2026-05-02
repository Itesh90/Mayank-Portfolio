// src/lib/auth.ts
//
// NextAuth.js v5 configuration. We expose a single Credentials provider for
// the portfolio owner (single-admin model) and rely on JWT sessions so we
// don't need a database session table.
//
// The authorize() callback validates input shape with Zod (loginSchema from
// Task 4) and then compares against ADMIN_EMAIL / ADMIN_PASSWORD from the
// environment. This is intentionally hardcoded for v1 — Task 14+ may swap in
// a Supabase lookup with bcrypt-hashed passwords.

import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { loginSchema } from './validations'

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const result = loginSchema.safeParse(credentials)
          if (!result.success) return null

          // Hardcoded for now — replace with database lookup when we move
          // admin user records into Supabase.
          const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@elaravoss.com'
          const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme'

          if (
            result.data.email === ADMIN_EMAIL &&
            result.data.password === ADMIN_PASSWORD
          ) {
            return {
              id: '1',
              email: result.data.email,
              name: 'Admin',
            }
          }

          return null
        } catch (error) {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      // `user` is only present on initial sign-in. Persist id/email onto the
      // token so subsequent requests don't need to re-authorize.
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
