import { socialLinks } from '@/constants/navigation'

export function CtaSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream px-container overflow-hidden">
      {/* Small circle icon top-left */}
      <div className="absolute top-16 left-14 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
      </div>

      {/* Main headline */}
      <div className="text-center z-10">
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-charcoal leading-tight mb-12">
          Let&apos;s create<br />
          <span className="italic text-gold">something</span><br />
          remarkable.
        </h2>

        {/* Email */}
        <a
          href="mailto:hello@elaravoss.com"
          className="inline-flex items-center gap-3 text-base text-mid hover:text-charcoal transition-colors mb-12"
        >
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className="text-mid">
            <rect x="0.5" y="0.5" width="19" height="15" rx="1.5" stroke="currentColor"/>
            <path d="M1 1L10 9L19 1" stroke="currentColor"/>
          </svg>
          hello@elaravoss.com
        </a>

        {/* Social links */}
        <div className="flex gap-10 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-dust hover:text-charcoal transition-colors"
            >
              {link.label}
              <span className="sr-only">(opens in new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
