'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { navLinks } from '@/constants/navigation'
import Button from '@/components/ui/Button'

export function Header() {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between
        backdrop-blur-sm border-b border-border transition-all duration-base
        ${isCompact ? 'py-4' : 'py-7'} px-14 bg-cream/88`}
    >
      <Link href="/" className="font-serif text-xl font-light text-charcoal">
        Elara <span className="text-gold">Voss</span>
      </Link>

      <nav aria-label="Main navigation" className="flex gap-10 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-light tracking-widest uppercase text-mid hover:text-charcoal
              transition-colors relative group"
          >
            {link.label}
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 w-0 h-px bg-gold transition-all duration-base
                group-hover:w-full"
            />
          </Link>
        ))}
        <Link href="/contact">
          <Button variant="nav-cta">Contact</Button>
        </Link>
      </nav>
    </header>
  )
}
