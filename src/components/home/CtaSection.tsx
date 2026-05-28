import { socialLinks } from '@/constants/navigation'
import RevealWrapper from '@/components/ui/RevealWrapper'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-[140px] flex flex-col items-center justify-center bg-cream px-5 sm:px-7 md:px-14 overflow-hidden text-center z-20"
    >
      <RevealWrapper>
        <p className="text-[10px] font-light tracking-[0.35em] uppercase text-gold mb-6">
          Get in Touch
        </p>
      </RevealWrapper>

      <RevealWrapper delay={0.1}>
        <h2
          className="font-serif font-light leading-[1.05] text-charcoal mb-10 sm:mb-12"
          style={{ fontSize: 'clamp(40px, 9vw, 100px)' }}
        >
          Let&apos;s create<br />
          <span className="italic text-gold">something</span><br />
          remarkable.
        </h2>
      </RevealWrapper>

      <RevealWrapper delay={0.2}>
        <a
          href="mailto:dinosayz28@gmail.com"
          className="inline-flex items-center gap-2 sm:gap-3 font-serif text-base sm:text-2xl md:text-[26px] font-light text-mid hover:text-gold transition-colors mb-12 sm:mb-16 break-all"
        >
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <rect x="1" y="1" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M1 4 L10 9 L19 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          dinosayz28@gmail.com
        </a>
      </RevealWrapper>

      <RevealWrapper delay={0.3}>
        <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-8 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-2 text-xs font-light tracking-[0.25em] uppercase text-dust hover:text-charcoal transition-colors"
            >
              {link.label}
              <span className="sr-only">(opens in new tab)</span>
            </a>
          ))}
        </div>
      </RevealWrapper>
    </section>
  )
}
