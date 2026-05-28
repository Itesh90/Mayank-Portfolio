'use client'

import RevealWrapper from '@/components/ui/RevealWrapper'

const steps = [
  {
    num: '01',
    title: 'Concept',
    desc:
      'Every story begins with an idea. I dive deep into research, mood boards, and the essence of what a character or world needs to feel.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="var(--color-gold)" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Sketch',
    desc:
      "Pencil meets paper — or stylus meets screen. Hundreds of tiny gestures that slowly reveal a character's soul and personality.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 16 L8 8 L12 12 L15 6 L18 10"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Refine',
    desc:
      'Shapes gain depth. Color, light, and shadow begin to breathe life. Each iteration moves closer to the final vision.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <polygon
          points="10,3 17,7.5 17,12.5 10,17 3,12.5 3,7.5"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="10" cy="10" r="2.5" fill="var(--color-gold)" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Deliver',
    desc:
      'The finished work arrives — polished, purposeful, and ready to move audiences. A story told without a single word.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 10 L8 13 L15 7"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="10" r="7" stroke="var(--color-gold)" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 md:py-section px-7 md:px-14 bg-ivory z-20">
      <div className="text-center mb-20">
        <RevealWrapper>
          <p className="text-[10px] font-light tracking-[0.35em] uppercase text-gold mb-5">
            How I Work
          </p>
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2
            className="font-serif font-light leading-[1.05] text-charcoal"
            style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
          >
            The Creative <span className="italic text-gold">Process</span>
          </h2>
        </RevealWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {steps.map((step, i) => (
          <RevealWrapper key={step.num} delay={0.1 + i * 0.1}>
            <div
              data-cursor-hover
              className="group relative h-full px-9 py-12 bg-cream rounded-[3px] overflow-hidden
                transition-all duration-base hover:-translate-y-2 hover:bg-white"
            >
              <span
                aria-hidden="true"
                className="absolute top-4 right-6 font-serif font-light text-gold/[0.12] leading-none
                  pointer-events-none select-none text-[80px]"
              >
                {step.num}
              </span>

              <div
                className="w-[52px] h-[52px] border border-gold/25 rounded-full flex items-center
                  justify-center mb-6 transition-colors duration-base group-hover:border-gold"
              >
                {step.icon}
              </div>

              <h3 className="font-serif text-2xl font-light text-charcoal mb-4">
                {step.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-mid">{step.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
