import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Target, Zap, Layers, Gauge } from 'lucide-react'
import { projects, type Project } from '../../data/projects'
import { Link } from '../../lib/Link'
import Container from '../ui/Container'
import Button from '../ui/Button'
import GithubIcon from '../icons/GithubIcon'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

function BackToProjects() {
  return (
    <Link
      to="/#projects"
      className="inline-flex items-center gap-2 h-10 px-4 rounded-full
                 border border-outline-variant/20 bg-white/[0.05] backdrop-blur-md
                 shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                 font-headline font-semibold text-sm text-on-surface-variant
                 hover:text-primary hover:border-outline-variant/50 hover:bg-surface-container-high hover:-translate-y-0.5
                 transition-all duration-200
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Projects
    </Link>
  )
}

function ProjectCaseStudy({ project }: { project: Project }) {
  const reduced = useReducedMotion()
  const gallery = project.gallery ?? [project.imageUrl]
  const [activeImage, setActiveImage] = useState(gallery[0])

  const details = [
    { icon: Target, label: 'Problem',      text: project.details.problem },
    { icon: Zap,    label: 'Solution',     text: project.details.solution },
    { icon: Layers, label: 'Architecture', text: project.details.architecture },
    { icon: Gauge,  label: 'Performance',  text: project.details.performance },
  ]

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial:    { opacity: 0, y: 24 },
          animate:    { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        }

  const fadeRight = reduced
    ? {}
    : {
        initial:    { opacity: 0, x: 32 },
        animate:    { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.1, ease: EASE },
      }

  return (
    <main id="main-content" className="relative z-10 pt-20 sm:pt-24 pb-14 sm:pb-16">
      <Container className="space-y-8 sm:space-y-12">
        <motion.div {...fadeUp(0)}>
          <BackToProjects />
        </motion.div>

        {/* Hero split — summary on the left, active screenshot on the right.
            Thumbnails sit directly below, aligned with the screenshot column. */}
        <section aria-labelledby="project-title" className="space-y-4 sm:space-y-5">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <motion.header {...fadeUp(0.05)} className="lg:col-span-5 space-y-4 sm:space-y-5">
              <p className="font-label text-xs uppercase tracking-[0.15em] text-primary">Case Study</p>
              <h1
                id="project-title"
                className="font-headline text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-on-surface"
              >
                {project.title}
              </h1>
              <p className="text-on-surface-variant/80 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="skill-chip inline-flex items-center px-3 py-1.5 rounded-full text-xs font-label font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {project.liveUrl && (
                    <Button variant="primary" size="sm" href={project.liveUrl} external>
                      Live Demo <ExternalLink size={16} aria-hidden="true" />
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="secondary" size="sm" href={project.githubUrl} external>
                      Code <GithubIcon size={16} aria-hidden="true" />
                    </Button>
                  )}
                </div>
              )}
            </motion.header>

            <motion.div {...fadeRight} className="lg:col-span-7">
              <figure
                className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden gradient-border"
                style={{
                  background: project.imageBg,
                  boxShadow:  '0 30px 80px rgba(0, 0, 0, 0.45), 0 0 60px rgba(192, 193, 255, 0.06)',
                }}
              >
                <img
                  src={activeImage}
                  alt={`${project.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div
                  className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(192,193,255,0.1) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-8 -left-8 w-36 h-36 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(75,77,216,0.16) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />
              </figure>
            </motion.div>
          </div>

          {gallery.length > 1 && (
            <motion.div {...fadeUp(0.2)} className="lg:grid lg:grid-cols-12 lg:gap-12">
              <ul
                aria-label={`${project.title} screenshot thumbnails`}
                className="flex gap-3 overflow-x-auto pb-1 m-0 p-0 list-none lg:col-span-7 lg:col-start-6"
              >
                {gallery.map((src, idx) => {
                  const isActive = src === activeImage
                  return (
                    <li key={src} className="flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveImage(src)}
                        aria-label={`View screenshot ${idx + 1} of ${project.title}`}
                        aria-current={isActive ? 'true' : undefined}
                        className="relative block w-24 sm:w-32 aspect-[16/9] rounded-lg overflow-hidden transition-all duration-200
                                   hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        style={{
                          background: project.imageBg,
                          border:     isActive ? '2px solid rgba(192,193,255,0.7)' : '1px solid rgba(255,255,255,0.1)',
                          opacity:    isActive ? 1 : 0.6,
                          boxShadow:  isActive ? '0 0 20px rgba(192,193,255,0.18)' : 'none',
                        }}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain"
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </section>

        {/* Case study breakdown */}
        <motion.section
          {...fadeUp(0.25)}
          aria-label="Case study details"
          className="grid gap-3 sm:gap-4 sm:grid-cols-2"
        >
          {details.map((detail) => {
            const Icon = detail.icon
            return (
              <div key={detail.label} className="glass-panel rounded-2xl p-4 sm:p-6 flex gap-3 sm:gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(192,193,255,0.12) 0%, rgba(75,77,216,0.08) 100%)',
                    border:     '1px solid rgba(192,193,255,0.15)',
                  }}
                >
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-headline text-sm font-bold text-primary mb-1">{detail.label}</h2>
                  <p className="text-on-surface-variant/85 text-sm leading-relaxed">{detail.text}</p>
                </div>
              </div>
            )
          })}
        </motion.section>

        <div className="pt-2">
          <BackToProjects />
        </div>
      </Container>
    </main>
  )
}

export default function ProjectDetailsPage({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId)

  // Always open a project page at the top, even when arriving from a scrolled
  // homepage or switching between projects.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return (
      <main id="main-content" className="relative z-10 min-h-screen flex items-center">
        <Container className="py-32 text-center">
          <p className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">404</p>
          <h1 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Project not found
          </h1>
          <p className="text-on-surface-variant/70 max-w-md mx-auto mb-8">
            We couldn&rsquo;t find the project you&rsquo;re looking for. It may have been moved or renamed.
          </p>
          <BackToProjects />
        </Container>
      </main>
    )
  }

  // Keyed by project id so the active screenshot resets when switching projects.
  return <ProjectCaseStudy key={project.id} project={project} />
}
