'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/types/project'
import { DemoProject } from '@/constants/demoProjects'
import { CardArt } from './CardArt'

interface WorkCardProps {
  project: Project | DemoProject
}

const categoryLabel: Record<string, string> = {
  character: 'Character Design',
  props: 'Props',
  comics: 'Comics',
  figures: 'Figures',
  sketchbook: 'Sketchbook',
}

export function WorkCard({ project }: WorkCardProps) {
  const image = project.images[0]
  const demo = 'shape' in project ? (project as DemoProject) : null

  return (
    <motion.div
      data-cursor-hover
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-md bg-ivory cursor-pointer h-full"
    >
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={demo ? { background: demo.gradient } : undefined}
      >
        {image ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : demo ? (
          <div className="opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 group-hover:rotate-[3deg]">
            <CardArt shape={demo.shape} />
          </div>
        ) : null}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex flex-col justify-end p-6"
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold-light font-light mb-1.5">
          {categoryLabel[project.category] ?? project.category}
        </p>
        <p className="font-serif text-2xl font-light text-cream">{project.title}</p>
      </div>
    </motion.div>
  )
}
