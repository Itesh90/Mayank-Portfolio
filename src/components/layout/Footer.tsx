export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 bg-charcoal py-6 sm:py-8 px-5 sm:px-7 md:px-14">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 text-center">
        <span className="font-serif text-base sm:text-lg font-light tracking-[0.1em] text-cream/50">
          DinoSayz
        </span>
        <span className="text-[10px] sm:text-[11px] font-light tracking-[0.15em] text-cream/30">
          © {currentYear} — All rights reserved
        </span>
      </div>
    </footer>
  )
}
