'use client'

import { HeroContent } from './HeroContent'
import { HeroBadge } from './HeroBadge'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-5 sm:px-7 md:px-14 z-10 overflow-hidden"
    >
      <div className="relative z-20 w-full pb-28 md:pb-32">
        <HeroContent />
      </div>

      <HeroBadge />

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-14 hidden md:flex items-center gap-4 opacity-0 animate-[fadeIn_1s_1.4s_forwards]">
        <div className="w-px h-[60px] bg-gradient-to-b from-gold to-transparent animate-grow-line" />
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
