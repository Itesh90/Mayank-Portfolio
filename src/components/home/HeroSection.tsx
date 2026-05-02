'use client'

import { HeroScene } from '@/components/3d/HeroScene'
import { HeroContent } from './HeroContent'
import { HeroBadge } from './HeroBadge'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-14 z-10 overflow-hidden"
    >
      <HeroScene />

      <div className="relative z-20 w-full">
        <HeroContent />
      </div>

      <HeroBadge />

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-14 hidden md:flex items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-dust"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
