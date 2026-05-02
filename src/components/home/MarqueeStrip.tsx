'use client'

const items = [
  'Character Design',
  '3D Animation',
  'World Building',
  'Comics & Illustration',
  'Props & Environments',
  'Visual Storytelling',
  'Concept Art',
  'Figures & Sculpture',
]

export function MarqueeStrip() {
  // Duplicate the list so the animation loops seamlessly
  const loopItems = [...items, ...items]

  return (
    <div className="relative z-20 bg-charcoal py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {loopItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-serif italic font-light text-cream/35 text-lg px-10 flex items-center gap-10 flex-shrink-0"
          >
            {item}
            <span className="text-gold-light not-italic text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
