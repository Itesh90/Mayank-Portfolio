'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Project, Category } from '@/types/project'
import { WorkCard } from './WorkCard'
import { FilterBar } from './FilterBar'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

interface WorkGridProps {
  projects: Project[]
  showFilters?: boolean
  featured?: boolean
}

export function WorkGrid({
  projects,
  showFilters = true,
  featured = false,
}: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const displayProjects = featured
    ? filteredProjects.slice(0, 6)
    : filteredProjects

  return (
    <section id="work" className="py-section px-container">
      <div className="mb-16 flex justify-between items-end">
        <div>
          <RevealWrapper>
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Recent <span className="italic text-gold">Projects</span>
            </h2>
          </RevealWrapper>
        </div>

        {showFilters && (
          <RevealWrapper delay={0.2}>
            <FilterBar
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </RevealWrapper>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid grid-cols-12 auto-rows-[80px] gap-5"
        >
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`rounded-lg overflow-hidden ${
                idx === 0 ? 'col-span-6 row-span-5' :
                idx === 1 ? 'col-span-3 row-span-4' :
                idx === 2 ? 'col-span-3 row-span-6' :
                idx === 3 ? 'col-span-4 row-span-4' :
                idx === 4 ? 'col-span-5 row-span-4' :
                'col-span-3 row-span-2'
              }`}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
