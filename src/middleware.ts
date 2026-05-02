// src/middleware.ts
//
// Edge middleware that gates /admin/* and /api/admin/* routes behind a valid
// NextAuth JWT. Unauthenticated requests to admin pages are bounced to
// /login. We use `getToken` from `next-auth/jwt` (still supported in v5) so
// the middleware stays Edge-runtime compatible without pulling the full
// auth() helper.

import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET,
  })

  // Protect admin routes (pages + API).
  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/api/admin')
  ) {
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
