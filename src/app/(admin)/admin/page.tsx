import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default async function AdminPage() {
  const [projectsRes, messagesRes] = await Promise.all([
    supabase.from('projects').select('id', { count: 'exact', head: true }),
    supabase.from('contact_messages').select('id', { count: 'exact', head: true }),
  ])

  const projectCount = projectsRes.count ?? 0
  const messageCount = messagesRes.count ?? 0

  return (
    <div>
      <h1 className="font-serif text-4xl text-cream mb-8">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gold/5 rounded-lg p-6 border border-gold/10">
          <p className="text-sm text-cream/50 mb-2">Total Projects</p>
          <p className="font-serif text-4xl text-gold">{projectCount}</p>
        </div>

        <div className="bg-gold/5 rounded-lg p-6 border border-gold/10">
          <p className="text-sm text-cream/50 mb-2">Messages</p>
          <p className="font-serif text-4xl text-gold">{messageCount}</p>
        </div>

        <div className="bg-gold/5 rounded-lg p-6 border border-gold/10">
          <p className="text-sm text-cream/50 mb-2">Status</p>
          <p className="font-serif text-2xl text-green-400">Live</p>
        </div>
      </div>

      <Link href="/admin/projects/new">
        <Button variant="primary">Add New Project</Button>
      </Link>
    </div>
  )
}
