'use client'

import { useEffect, useCallback } from 'react'

export type LightboxItem =
  | { type: 'image'; src: string; alt: string; title: string }
  | { type: 'video'; src: string; title: string }

interface LightboxProps {
  item: LightboxItem | null
  onClose: () => void
}

export function Lightbox({ item, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    if (!item) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [item, handleKey])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-3 sm:p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-3 right-3 sm:top-5 sm:right-6 text-cream/70 hover:text-cream text-2xl leading-none transition-colors z-10 w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10"
      >
        ✕
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[82vh] max-w-full object-contain rounded-sm shadow-2xl"
          />
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-h-[82vh] max-w-full rounded-sm shadow-2xl bg-black"
          />
        )}
        <p className="mt-4 text-xs font-light tracking-[0.2em] uppercase text-cream/50">
          {item.title}
        </p>
      </div>
    </div>
  )
}
