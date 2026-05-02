'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { navLinks } from '@/constants/navigation'

const sectionIds = ['hero', 'work', 'about', 'process', 'contact']

export function Header() {
  const [isCompact, setIsCompact] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 80)

      // Scroll spy: pick the section whose top has passed the 120px line
      let current = 'hero'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        backdrop-blur-md border-b border-border transition-all duration-base
        ${isCompact ? 'py-4' : 'py-7'} px-14 bg-cream/90`}
    >
      <Link href="/" className="font-serif text-xl font-light tracking-widest uppercase text-charcoal">
        Elara <span className="text-gold">Voss</span>
      </Link>

      <nav aria-label="Main navigation" className="flex gap-10 items-center">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = activeSection === id
          return (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-light tracking-widest uppercase transition-colors relative
                ${isActive ? 'text-charcoal' : 'text-mid hover:text-charcoal'}`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute left-0 -bottom-1 h-px bg-gold transition-all duration-base
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </a>
          )
        })}
        <a
          href="#contact"
          className={`text-xs font-light tracking-widest uppercase border border-gold
            px-5 py-2.5 rounded-sm transition-colors
            ${activeSection === 'contact'
              ? 'bg-gold text-cream'
              : 'text-gold hover:bg-gold hover:text-cream'}`}
        >
          Contact
        </a>
      </nav>
    </header>
  )
}
