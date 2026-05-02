'use client'

import { HeroScene } from '@/components/3d/HeroScene'
import { HeroContent } from './HeroContent'
import { HeroBadge } from './HeroBadge'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-16 px-container z-10 overflow-hidden"
    >
      <HeroScene />

      <div className="relative z-20 flex items-center justify-between w-full">
        <HeroContent />
        <HeroBadge />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-container flex items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-xs uppercase tracking-widest text-dust">
          Scroll
        </span>
      </div>
    </section>
  )
}
