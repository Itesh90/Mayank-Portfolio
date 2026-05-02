import { socialLinks } from '@/constants/navigation'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream py-8 px-14">
      <div className="flex justify-between items-center">
        <span className="font-serif text-sm font-light">Elara Voss</span>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-light tracking-widest uppercase text-dust
                hover:text-gold transition-colors"
            >
              {link.label}
              <span className="sr-only">(opens in new tab)</span>
            </a>
          ))}
        </div>
        <span className="text-xs font-light tracking-widest text-dust">
          © {currentYear} — All rights reserved
        </span>
      </div>
    </footer>
  )
}
