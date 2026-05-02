'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'

interface WorkCardProps {
  project: Project
}

export function WorkCard({ project }: WorkCardProps) {
  const image = project.images[0]

  return (
    <Link href={`/work/${project.slug}`}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-lg bg-ivory cursor-none h-full"
      >
        <div className="relative w-full h-full">
          {image && (
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
            flex flex-col justify-end p-6"
        >
          <p className="text-xs uppercase tracking-widest text-gold-light mb-1">
            {project.category}
          </p>
          <p className="font-serif text-2xl font-light text-cream">
            {project.title}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}
