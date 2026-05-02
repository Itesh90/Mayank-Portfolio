'use client'

import { motion } from 'framer-motion'

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 1.1 }}
      className="absolute right-1/4 top-1/2 -translate-y-1/2 w-44 h-44 hidden lg:block"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="w-full h-full border border-gold/30 rounded-full flex flex-col items-center justify-center"
      >
        <div className="text-4xl font-light text-gold font-serif">12+</div>
        <div className="text-xs uppercase tracking-wider text-mid">Years creating</div>
      </motion.div>
    </motion.div>
  )
}
