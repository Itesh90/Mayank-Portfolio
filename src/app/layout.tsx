import type { Metadata } from 'next'
import { Outfit, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Elara Voss — Animation Artist & Illustrator',
  description: 'Character designer, world-builder, and visual storyteller. Crafting immersive animation from concept to final frame.',
  openGraph: {
    title: 'Elara Voss — Animation Artist & Illustrator',
    description: 'Character designer, world-builder, and visual storyteller.',
    type: 'website',
    url: 'https://elaravoss.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
