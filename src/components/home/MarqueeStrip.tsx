'use client'

const items = [
  'Character Design',
  '2D Animation',
  'World Building',
  'Comics & Illustration',
  'Visual Storytelling',
  'Concept Art',
  'AI Animation',
  'Video Editing',
]

export function MarqueeStrip() {
  // Four copies so the seamless -25% loop works at any viewport width
  const loopItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative z-20 bg-charcoal py-4 sm:py-5 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marqueeScroll 40s linear infinite', willChange: 'transform' }}
      >
        {loopItems.map((item, i) => (
          <span
            key={i}
            className="font-serif italic font-light text-cream/35 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 flex items-center gap-6 sm:gap-8 md:gap-10 flex-shrink-0"
          >
            {item}
            <span className="text-gold-light not-italic text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
