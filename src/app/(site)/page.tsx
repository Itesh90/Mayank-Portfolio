import { HeroSection } from '@/components/home/HeroSection'
import { MarqueeStrip } from '@/components/home/MarqueeStrip'
import { WorkGrid } from '@/components/portfolio/WorkGrid'
import { AboutSection } from '@/components/about/AboutSection'
import { CtaSection } from '@/components/home/CtaSection'
import { demoProjects } from '@/constants/demoProjects'
import { supabase } from '@/lib/supabase'
import { Project } from '@/types/project'

export default async function HomePage() {
  let projects: Project[] = []
  try {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .limit(10)
    projects = (data as Project[] | null) ?? []
  } catch {
    // Supabase not configured locally — fall back to demo content
  }

  const display = projects.length > 0 ? projects : demoProjects

  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <WorkGrid projects={display} />
      <AboutSection />
      <CtaSection />
    </>
  )
}
