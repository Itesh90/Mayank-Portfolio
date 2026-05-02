'use client'

import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

export function HeroContent() {
  return (
    <motion.div
      className="max-w-2xl pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs font-light tracking-[0.3em] uppercase text-gold mb-6"
      >
        Animation Artist & Illustrator
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="font-serif font-light text-charcoal mb-2 leading-none"
        style={{ fontSize: 'clamp(72px, 8vw, 120px)' }}
      >
        Elara<br /><span className="italic text-gold">Voss.</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="font-serif font-light text-mid mb-10 leading-tight"
        style={{ fontSize: 'clamp(40px, 4.5vw, 64px)' }}
      >
        Bringing worlds<br />to life.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-base font-light text-warm max-w-md mb-12 leading-loose"
      >
        Character designer, world-builder, and visual storyteller. Crafting immersive animation from concept to final frame — where imagination meets artistry.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-6 items-center">
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 px-9 py-3.5 bg-charcoal text-cream
            text-xs font-light tracking-[0.2em] uppercase rounded-sm
            hover:bg-gold hover:-translate-y-0.5 transition-all duration-base group"
        >
          View Work
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-base group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-light tracking-[0.2em] uppercase
            text-mid hover:text-charcoal transition-colors"
        >
          Get in Touch
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 4v4M6 3.5v-.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  )
}
