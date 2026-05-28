export function HeroBadge() {
  return (
    <div className="hero-badge-reveal absolute right-[10%] top-1/2 -translate-y-1/2 w-44 h-44 hidden lg:block z-10">
      <div className="relative w-full h-full border border-gold/30 rounded-full flex flex-col items-center justify-center text-center animate-rotate-slow">
        <span className="absolute inset-3.5 border border-dashed border-gold/20 rounded-full" />
        <div className="text-3xl font-light text-gold font-serif leading-none">100+</div>
        <div className="text-[9px] uppercase tracking-[0.25em] text-mid mt-1.5">Animations</div>
      </div>
    </div>
  )
}
