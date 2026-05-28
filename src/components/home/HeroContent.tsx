export function HeroContent() {
  return (
    <div className="max-w-2xl pt-32 sm:pt-36 md:pt-44">
      <p className="hero-reveal hero-reveal-1 text-[10px] sm:text-xs font-light tracking-[0.3em] uppercase text-gold mb-4 sm:mb-6">
        2D Animator &amp; AI Animation Artist
      </p>

      <h1
        className="hero-reveal hero-reveal-2 font-serif font-light text-charcoal mb-2 leading-none"
        style={{ fontSize: 'clamp(56px, 12vw, 120px)' }}
      >
        Mayank<br /><span className="italic text-gold">Bisht.</span>
      </h1>

      <p
        className="hero-reveal hero-reveal-3 font-serif font-light text-mid mb-8 sm:mb-10 leading-tight"
        style={{ fontSize: 'clamp(30px, 6vw, 64px)' }}
      >
        Bringing stories<br />to life.
      </p>

      <p className="hero-reveal hero-reveal-4 text-sm sm:text-base font-light text-warm max-w-md mb-10 sm:mb-12 leading-loose">
        2D animator, AI animation artist, and video editor with 4+ years of experience. Creator of DinoSayz — 100+ original animations crafted through visual storytelling, AI-enhanced workflows, and fast-paced editing.
      </p>

      <div className="hero-reveal hero-reveal-5 flex flex-wrap gap-4 sm:gap-6 items-center">
        <a
          href="#work"
          className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 bg-charcoal text-cream
            text-[10px] sm:text-xs font-light tracking-[0.2em] uppercase rounded-sm
            hover:bg-gold hover:-translate-y-0.5 transition-all duration-base group"
        >
          View Work
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-base group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-light tracking-[0.2em] uppercase
            text-mid hover:text-charcoal transition-colors"
        >
          Get in Touch
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 4v4M6 3.5v-.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
