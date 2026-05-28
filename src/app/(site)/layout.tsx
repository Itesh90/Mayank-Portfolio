import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <CustomCursor />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
