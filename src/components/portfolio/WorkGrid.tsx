'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Category } from '@/types/project'
import { DemoProject } from '@/constants/demoProjects'
import { Project } from '@/types/project'
import { WorkCard } from './WorkCard'
import { FilterBar } from './FilterBar'
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

interface WorkGridProps {
  projects: (Project | DemoProject)[]
  showFilters?: boolean
}

export function WorkGrid({ projects, showFilters = true }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all')
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null)

  const visible = useMemo(
    () => projects.filter((p) => activeFilter === 'all' || p.category === activeFilter),
    [projects, activeFilter]
  )

  return (
    <section id="work" className="py-16 md:py-section px-5 sm:px-7 md:px-14 relative z-20 bg-cream">
      <div className="mb-10 sm:mb-16 flex flex-col lg:flex-row justify-between lg:items-end gap-6 sm:gap-8">
        <div>
          <RevealWrapper>
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2
              className="font-serif font-light leading-[1.05] text-charcoal"
              style={{ fontSize: 'clamp(34px, 7vw, 72px)' }}
            >
              Recent <span className="italic text-gold">Projects</span>
            </h2>
          </RevealWrapper>
        </div>

        {showFilters && (
          <RevealWrapper delay={0.2}>
            <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </RevealWrapper>
        )}
      </div>

      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]"
      >
        {visible.map((project) => (
          <WorkCard
            key={project.id}
            project={project}
            onOpen={setLightboxItem}
          />
        ))}
      </motion.div>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </section>
  )
}
