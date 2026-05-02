'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import RevealWrapper from '@/components/ui/RevealWrapper'

const stats = [
  { num: '120+', label: 'Projects Completed' },
  { num: '34',   label: 'Industry Awards' },
  { num: '8',    label: 'Countries Exhibited' },
  { num: '12',   label: 'Years of Practice' },
]

const skills: { icon: string; name: string; value: number }[] = [
  { icon: '✏️', name: 'Character Design',     value: 0.97 },
  { icon: '🎬', name: '3D Animation',         value: 0.92 },
  { icon: '🖼️', name: 'Concept Art',          value: 0.95 },
  { icon: '📖', name: 'Comic Illustration',   value: 0.88 },
  { icon: '🗿', name: 'Sculpting & Figures',  value: 0.82 },
  { icon: '🌍', name: 'World Building',       value: 0.90 },
]

function SkillBar({
  icon,
  name,
  value,
  delay,
  inView,
}: {
  icon: string
  name: string
  value: number
  delay: number
  inView: boolean
}) {
  return (
    <div
      data-cursor-hover
      className="flex items-center gap-5 px-6 py-[18px] border border-cream/[0.06]
        rounded-[3px] hover:bg-gold/[0.06] hover:border-gold/20 transition-all duration-base"
    >
      <div
        className="w-9 h-9 rounded-full border border-gold/30 flex items-center
          justify-center text-sm flex-shrink-0"
      >
        {icon}
      </div>
      <div className="flex-1 text-sm font-light text-cream/80 tracking-wide">{name}</div>
      <div className="w-[120px] h-0.5 bg-cream/10 rounded-sm overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? value : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: 'left' }}
          className="h-full bg-gradient-to-r from-gold to-gold-light rounded-sm"
        />
      </div>
    </div>
  )
}

export function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null)
  const skillsInView = useInView(skillsRef, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section
      id="about"
      className="relative py-section px-14 bg-charcoal overflow-hidden z-20"
    >
      {/* Soft radial accent (top right) */}
      <div
        aria-hidden="true"
        className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full
          pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,150,90,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <RevealWrapper>
          <div>
            <p className="text-[10px] font-light tracking-[0.35em] uppercase text-gold-light mb-5 flex items-center gap-4">
              <span className="block w-8 h-px bg-gold-light" />
              The Artist
            </p>
            <h2
              className="font-serif font-light leading-[1.05] text-cream"
              style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}
            >
              Crafted with<br />
              <span className="italic text-gold-light">Passion.</span>
            </h2>

            <p className="text-base font-light leading-loose text-cream/65 mt-8 max-w-md">
              I&apos;m Elara Voss — an animation artist and visual storyteller based in
              Los Angeles. With over a decade of experience, I breathe life into
              characters and worlds that resonate deeply with audiences. My work
              spans feature film, indie comics, and immersive installations.
            </p>
            <p className="text-base font-light leading-loose text-cream/65 mt-4 max-w-md">
              Every piece I create begins with curiosity — a question about emotion,
              movement, or the invisible thread that connects us to fictional worlds.
            </p>

            <div className="grid grid-cols-2 gap-10 mt-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif font-light text-gold-light text-[52px] leading-none">
                    {stat.num}
                  </div>
                  <div className="text-xs font-light tracking-[0.2em] uppercase text-cream/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* RIGHT */}
        <RevealWrapper delay={0.2}>
          <div ref={skillsRef} className="grid gap-[3px]">
            {skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                value={skill.value}
                delay={i * 0.13 + 0.2}
                inView={skillsInView}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
