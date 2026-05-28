import RevealWrapper from '@/components/ui/RevealWrapper'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-section px-5 sm:px-7 md:px-14 bg-charcoal overflow-hidden z-20"
    >
      <div
        aria-hidden="true"
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,150,90,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-2xl">
        <RevealWrapper>
          <p className="text-[10px] font-light tracking-[0.35em] uppercase text-gold-light mb-5 flex items-center gap-4">
            <span className="block w-8 h-px bg-gold-light" />
            About
          </p>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <h2
            className="font-serif font-light leading-[1.05] text-cream mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(32px, 7vw, 64px)' }}
          >
            Hey, I&apos;m <span className="italic text-gold-light">DinoSayz.</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <p className="text-sm sm:text-base font-light leading-loose text-cream/65 mb-5">
            I&apos;m Mayank Bisht, a 2D animator, AI animation artist, and video editor
            from Haldwani, India. For the past 5 years I&apos;ve been building DinoSayz,
            a YouTube channel where I create original animations, story shorts, and
            cinematic edits from the ground up. Every video from the script to the
            final frame is made by me.
          </p>
          <p className="text-sm sm:text-base font-light leading-loose text-cream/65 mb-5">
            Over 100 original videos later, I&apos;ve worked across character animation,
            game ads, explainer content, and client projects. I blend traditional 2D
            animation with AI-powered tools like MidJourney and D-ID to keep things
            fast without losing quality.
          </p>
          <p className="text-sm sm:text-base font-light leading-loose text-cream/65">
            Alongside DinoSayz, I&apos;ve worked with brands like Snowball.Money,
            creating reels, tutorials, and motion graphics that make complex ideas easy
            to understand. Whether it&apos;s a short reel or a full cinematic animation,
            I bring the same energy: clean visuals, strong storytelling, and work that
            actually connects.
          </p>
        </RevealWrapper>
      </div>
    </section>
  )
}
