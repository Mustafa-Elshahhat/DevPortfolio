import { type Variants } from 'framer-motion'

/* ── Easing curves ──────────────────────────────────────── */
const ease     = [0.22, 1, 0.36, 1]         as [number,number,number,number]
const easeBack = [0.34, 1.56, 0.64, 1]   as [number,number,number,number]

/* ── Individual item variants ───────────────────────────── */
export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

export const scaleInBounce: Variants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeBack },
  },
}

export const slideUpReveal: Variants = {
  hidden:  { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
}

/* ── Container / stagger variants ──────────────────────── */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
}

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

export const heroContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

/* ── Section wrapper — shared entrance for all sections ── */
export const sectionEntrance: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.1 },
  },
}
