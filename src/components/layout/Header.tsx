'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { navLinks } from '@/constants/navigation'

const sectionIds = ['hero', 'work', 'about', 'contact']

export function Header() {
  const [isCompact, setIsCompact] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    // Compact/expanded header — single rAF-throttled scroll listener, no layout reads
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setIsCompact(window.scrollY > 80)
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Scroll spy via IntersectionObserver — no per-frame offsetTop reads
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // The section closest to the top edge (within ~120px) wins
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (intersecting[0]?.target.id) setActiveSection(intersecting[0].target.id)
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: 0 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        md:backdrop-blur-md border-b border-gold/[0.12] transition-all duration-base
        ${isCompact ? 'py-3 md:py-4' : 'py-4 md:py-7'} px-5 md:px-14 bg-cream/95 md:bg-cream/[0.88]`}
    >
      <Link href="/" aria-label="DinoSayz home">
        <Image
          src="/assets/logo/logo.png"
          alt="DinoSayz Portfolio logo"
          width={160}
          height={90}
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          priority
        />
      </Link>

      <nav aria-label="Main navigation" className="hidden min-[380px]:flex gap-4 md:gap-10 items-center">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = activeSection === id
          return (
            <a
              key={link.href}
              href={link.href}
              className={`group inline-flex items-center min-h-[44px] text-[10px] md:text-xs font-light tracking-[0.18em] uppercase transition-colors relative
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
          className={`inline-flex items-center text-[10px] md:text-[11px] font-light tracking-[0.2em] uppercase border border-gold
            min-h-[44px] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-colors
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
