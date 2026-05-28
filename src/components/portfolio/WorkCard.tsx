'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/types/project'
import { DemoProject } from '@/constants/demoProjects'
import { CardArt } from './CardArt'
import { LightboxItem } from '@/components/ui/Lightbox'

interface WorkCardProps {
  project: Project | DemoProject
  onOpen: (item: LightboxItem) => void
}

const categoryLabel: Record<string, string> = {
  character:  'Character Design',
  thumbnail:  'Thumbnail',
  artwork:    'Artwork',
  background: 'Background',
  client:     'Client Work',
}

export function WorkCard({ project, onOpen }: WorkCardProps) {
  const image   = project.images[0]
  const video   = project.videos?.[0]
  const demo    = 'shape' in project ? (project as DemoProject) : null
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleClick() {
    if (video) {
      onOpen({ type: 'video', src: video.url, title: project.title })
    } else if (image) {
      onOpen({ type: 'image', src: image.url, alt: image.alt, title: project.title })
    }
  }

  return (
    <motion.button
      type="button"
      data-cursor-hover
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      aria-label={`${video ? 'Play' : 'View'} ${project.title} — ${categoryLabel[project.category] ?? project.category}`}
      className="group relative overflow-hidden rounded-md bg-ivory cursor-pointer h-full w-full text-left block"
    >
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={!image && !video && demo?.gradient ? { background: demo.gradient } : undefined}
      >
        {video ? (
          <video
            ref={videoRef}
            src={video.url}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onMouseEnter={() => videoRef.current?.play().catch(() => {})}
            onMouseLeave={() => { videoRef.current?.pause(); if (videoRef.current) videoRef.current.currentTime = 0 }}
          />
        ) : image ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : demo?.shape ? (
          <div className="opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-105 group-hover:rotate-[3deg]">
            <CardArt shape={demo.shape} />
          </div>
        ) : null}

        {video && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center
              group-hover:opacity-0 transition-opacity duration-300">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4l9 5-9 5V4z" fill="white" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Caption: always visible on touch devices, hover-revealed on pointer devices */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent
          opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-300
          flex flex-col justify-end p-4 sm:p-5 pointer-events-none"
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold-light font-light mb-1">
          {categoryLabel[project.category] ?? project.category}
        </p>
        <p className="font-serif text-base sm:text-xl font-light text-cream leading-tight">{project.title}</p>
      </div>
    </motion.button>
  )
}
