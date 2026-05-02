import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-charcoal">
      <aside className="w-60 bg-charcoal border-r border-gold/10">
        <div className="p-6 border-b border-gold/10">
          <h2 className="font-serif text-xl text-cream">Admin</h2>
        </div>

        <nav aria-label="Admin navigation" className="p-4 space-y-1">
          {[
            { href: '/admin', label: 'Dashboard' },
            { href: '/admin/projects', label: 'Projects' },
            { href: '/admin/messages', label: 'Messages' },
            { href: '/admin/about', label: 'About' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded text-sm text-cream/70 hover:text-cream hover:bg-gold/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
