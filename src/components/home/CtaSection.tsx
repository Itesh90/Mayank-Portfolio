import { socialLinks } from '@/constants/navigation'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-[140px] flex flex-col items-center justify-center bg-cream px-14 overflow-hidden text-center z-20"
    >
      {/* Section label */}
      <p className="text-[10px] font-light tracking-[0.35em] uppercase text-gold mb-6">
        Get in Touch
      </p>

      {/* Main headline */}
      <h2
        className="font-serif font-light leading-none text-charcoal mb-12"
        style={{ fontSize: 'clamp(60px, 7vw, 100px)' }}
      >
        Let&apos;s create<br />
        <span className="italic text-gold">something</span><br />
        remarkable.
      </h2>

      {/* Email */}
      <a
        href="mailto:hello@elaravoss.com"
        className="inline-flex items-center gap-3 font-serif text-2xl md:text-[26px] font-light text-mid hover:text-gold transition-colors mb-16"
      >
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <rect x="1" y="1" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
          <path d="M1 4 L10 9 L19 4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        hello@elaravoss.com
      </a>

      {/* Social links */}
      <div className="flex gap-8 justify-center">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-light tracking-[0.25em] uppercase text-dust hover:text-charcoal transition-colors"
          >
            {link.label}
            <span className="sr-only">(opens in new tab)</span>
          </a>
        ))}
      </div>
    </section>
  )
}
