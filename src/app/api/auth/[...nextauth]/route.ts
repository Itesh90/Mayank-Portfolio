// src/app/api/auth/[...nextauth]/route.ts
//
// NextAuth v5 route handler. The actual config and handler factory live in
// src/lib/auth.ts; here we re-export the GET / POST handlers from the
// `handlers` object returned by NextAuth() so that /api/auth/* (callback,
// signin, signout, session, csrf, providers) are served by NextAuth.

import { handlers } from '@/lib/auth'

export const { GET, POST } = handlers
