import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeInUp, scaleIn, slideUpReveal } from '../../lib/motion'
import { skillCategories } from '../../data/skills'
import { cn } from '../../lib/utils'

// On mobile the grid shows two compact cards per row, so only the first few
// skill chips are shown with a "+N" overflow chip; the full list returns at sm+.
const MOBILE_CHIP_LIMIT = 4

export default function SkillsSection() {
  const ref     = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const reduced  = useReducedMotion()

  const ap = reduced ? {} : { initial: 'hidden', animate: isInView ? 'visible' : 'hidden' }

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
      className="w-full relative py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          variants={reduced ? undefined : staggerContainer}
          {...ap}
          className="text-center mb-8 sm:mb-10 space-y-2"
        >
          <motion.p
            variants={reduced ? undefined : fadeInUp}
            className="font-label text-xs uppercase tracking-[0.15em] text-primary"
          >
            02 / Skills
          </motion.p>

          <motion.h2
            id="skills-heading"
            variants={reduced ? undefined : slideUpReveal}
            className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface"
          >
            Full-Stack .NET Engineering Stack
          </motion.h2>

          <motion.p
            variants={reduced ? undefined : fadeInUp}
            className="text-on-surface-variant/75 text-lg max-w-xl mx-auto"
          >
            The technologies I use across the stack — from ASP.NET Core APIs and SQL Server databases to Angular and React front-ends.
          </motion.p>
        </motion.div>

        <motion.div
          variants={reduced ? undefined : staggerContainer}
          {...ap}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
        >
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.id}
                variants={reduced ? undefined : scaleIn}
                custom={i}
                className="group relative flex flex-col gap-3 p-4 sm:gap-4 sm:p-5 lg:gap-5 lg:p-6 rounded-3xl cursor-default card-hover gradient-border"
                style={{
                  background:           'rgba(255, 255, 255, 0.04)',
                  backdropFilter:       'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border:               '1px solid rgba(255, 255, 255, 0.07)',
                  boxShadow:            '0 8px 40px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(192,193,255,0.15) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                <div
                  className="w-10 h-10 rounded-xl sm:w-12 sm:h-12 sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(192,193,255,0.15) 0%, rgba(75,77,216,0.1) 100%)',
                    border:     '1px solid rgba(192,193,255,0.18)',
                  }}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-primary"
                  />
                </div>

                <h3 className="font-headline text-base sm:text-lg font-bold text-on-surface tracking-tight">
                  {cat.label}
                </h3>

                <div
                  className="h-px w-full"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={skill}
                      className={cn(
                        'skill-chip inline-flex items-center rounded-full font-label font-medium px-2 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-xs',
                        idx >= MOBILE_CHIP_LIMIT && 'hidden sm:inline-flex',
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                  {cat.skills.length > MOBILE_CHIP_LIMIT && (
                    <span className="skill-chip inline-flex sm:hidden items-center rounded-full font-label font-medium px-2 py-1 text-[10px]">
                      +{cat.skills.length - MOBILE_CHIP_LIMIT}
                    </span>
                  )}
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(192,193,255,0.4), transparent)',
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
