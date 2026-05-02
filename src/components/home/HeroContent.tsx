'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

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
      className="max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs font-light tracking-widest uppercase text-gold mb-6"
      >
        Animation Artist & Illustrator
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="text-hero font-serif font-light text-charcoal mb-2"
      >
        Elara<br /><span className="italic text-gold">Voss.</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-4xl lg:text-5xl font-serif font-light text-mid mb-10"
      >
        Bringing worlds<br />to life.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-base font-light text-warm max-w-sm mb-12 leading-relaxed"
      >
        Character designer, world-builder, and visual storyteller. Crafting immersive animation from concept to final frame — where imagination meets artistry.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-6">
        <Link href="#work">
          <Button variant="primary">
            View Work <span aria-hidden="true">→</span>
          </Button>
        </Link>
        <Link href="#about">
          <Button variant="ghost">About Me</Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
