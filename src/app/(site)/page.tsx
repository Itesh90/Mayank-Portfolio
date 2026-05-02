import { supabase } from '@/lib/supabase'
import { HeroSection } from '@/components/home/HeroSection'
import { WorkGrid } from '@/components/portfolio/WorkGrid'
import { CtaSection } from '@/components/home/CtaSection'
import { Project } from '@/types/project'

export default async function HomePage() {
  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .limit(6)

  return (
    <>
      <HeroSection />
      <WorkGrid projects={(projects as Project[]) ?? []} featured showFilters={false} />
      <CtaSection />
    </>
  )
}
