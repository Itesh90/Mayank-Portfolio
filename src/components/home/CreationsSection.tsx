'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionLabel from '@/components/ui/SectionLabel'
import { Lightbox, LightboxItem } from '@/components/ui/Lightbox'

const creations = [
  { id: 'c-1', title: 'Dream',          src: '/assets/creations/dream-6.mp4' },
  { id: 'c-2', title: 'Snapchat Reel',  src: '/assets/creations/snapchat-video.mp4' },
  { id: 'c-3', title: 'Personal Work',  src: '/assets/creations/personal-video.mov' },
]

function VideoCard({
  title,
  src,
  onOpen,
}: {
  title: string
  src: string
  onOpen: (item: LightboxItem) => void
}) {
  const ref = useRef<HTMLVideoElement>(null)

  return (
    <motion.div
      data-cursor-hover
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpen({ type: 'video', src, title })}
      className="group relative overflow-hidden rounded-md bg-charcoal cursor-pointer aspect-video"
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onMouseEnter={() => ref.current?.play()}
        onMouseLeave={() => { ref.current?.pause(); if (ref.current) ref.current.currentTime = 0 }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center
          group-hover:opacity-0 transition-opacity duration-300">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 4l9 5-9 5V4z" fill="white" />
          </svg>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex flex-col justify-end p-5"
      >
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold-light font-light mb-1">
          Personal
        </p>
        <p className="font-serif text-xl font-light text-cream">{title}</p>
      </div>
    </motion.div>
  )
}

export function CreationsSection() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null)

  return (
    <section
      id="creations"
      className="py-20 md:py-section px-7 md:px-14 relative z-20 bg-charcoal"
    >
      <div className="mb-16">
        <RevealWrapper>
          <SectionLabel className="[&_span:first-child]:bg-gold-light [&_span:last-child]:text-gold-light">
            Creations
          </SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2
            className="font-serif font-light leading-[1.05] text-cream"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            Personal <span className="italic text-gold-light">Work</span>
          </h2>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {creations.map((c, i) => (
          <RevealWrapper key={c.id} delay={i * 0.1}>
            <VideoCard title={c.title} src={c.src} onOpen={setLightboxItem} />
          </RevealWrapper>
        ))}
      </div>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </section>
  )
}
