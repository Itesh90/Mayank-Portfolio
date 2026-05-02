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
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
