'use client'

import { motion } from 'framer-motion'

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.1 }}
      className="absolute right-[10%] top-1/2 -translate-y-1/2 w-44 h-44 hidden lg:block z-10"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="relative w-full h-full border border-gold/30 rounded-full flex flex-col items-center justify-center text-center"
      >
        <span className="absolute inset-3.5 border border-dashed border-gold/20 rounded-full" />
        <div className="text-3xl font-light text-gold font-serif leading-none">12+</div>
        <div className="text-[9px] uppercase tracking-[0.25em] text-mid mt-1.5">Years creating</div>
      </motion.div>
    </motion.div>
  )
}
