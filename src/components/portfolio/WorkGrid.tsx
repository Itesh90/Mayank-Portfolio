'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Project, Category } from '@/types/project'
import { DemoProject } from '@/constants/demoProjects'
import { WorkCard } from './WorkCard'
import { FilterBar } from './FilterBar'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'

interface WorkGridProps {
  projects: (Project | DemoProject)[]
  showFilters?: boolean
}

// Exact masonry pattern from portfolio.html — 10 cards
const cardSpans: { col: string; row: string }[] = [
  { col: 'col-start-1 col-end-6',  row: 'row-start-1 row-end-5' },   // 1
  { col: 'col-start-6 col-end-9',  row: 'row-start-1 row-end-4' },   // 2
  { col: 'col-start-9 col-end-13', row: 'row-start-1 row-end-6' },   // 3
  { col: 'col-start-1 col-end-4',  row: 'row-start-5 row-end-9' },   // 4
  { col: 'col-start-4 col-end-9',  row: 'row-start-5 row-end-9' },   // 5
  { col: 'col-start-6 col-end-9',  row: 'row-start-4 row-end-6' },   // 6
  { col: 'col-start-9 col-end-13', row: 'row-start-6 row-end-10' },  // 7
  { col: 'col-start-1 col-end-6',  row: 'row-start-9 row-end-13' },  // 8
  { col: 'col-start-6 col-end-10', row: 'row-start-9 row-end-13' },  // 9
  { col: 'col-start-10 col-end-13',row: 'row-start-9 row-end-13' },  // 10
]

export function WorkGrid({ projects, showFilters = true }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all')

  const visible = projects.map((p) => ({
    project: p,
    matchesFilter: activeFilter === 'all' || p.category === activeFilter,
  }))

  return (
    <section id="work" className="py-section px-14 relative z-20 bg-cream">
      <div className="mb-16 flex justify-between items-end">
        <div>
          <RevealWrapper>
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2
              className="font-serif font-light leading-[1.05] text-charcoal"
              style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
            >
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

      <AnimatePresence>
        <div className="grid grid-cols-12 auto-rows-[80px] gap-5">
          {visible.slice(0, cardSpans.length).map(({ project, matchesFilter }, idx) => {
            const span = cardSpans[idx]
            return (
              <motion.div
                key={project.id}
                animate={{
                  opacity: matchesFilter ? 1 : 0.25,
                  scale: matchesFilter ? 1 : 0.97,
                }}
                transition={{ duration: 0.4 }}
                className={`${span.col} ${span.row}`}
              >
                <WorkCard project={project} />
              </motion.div>
            )
          })}
        </div>
      </AnimatePresence>
    </section>
  )
}
