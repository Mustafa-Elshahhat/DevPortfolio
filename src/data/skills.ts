import type { LucideIcon } from 'lucide-react'
import { Code2, Palette, Wrench, Layers } from 'lucide-react'

export interface SkillCategory {
  id:     string
  label:  string
  icon:   LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id:     'frontend',
    label:  'Frontend Engineering',
    icon:   Code2,
    skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5 / CSS3', 'State Management (NgRx/Signals)'],
  },
  {
    id:     'styling',
    label:  'Styling & UI',
    icon:   Palette,
    skills: ['Tailwind CSS', 'SASS / CSS Modules', 'Responsive Design', 'Figma (basic)'],
  },
  {
    id:     'engineering',
    label:  'Architecture & Perf.',
    icon:   Layers,
    skills: ['Clean Architecture', 'SOLID Principles', 'Scalable Component Architecture', 'Performance Optimization'],
  },
  {
    id:     'tools',
    label:  'Tools & Integration',
    icon:   Wrench,
    skills: ['REST API Integration', 'Git & GitHub', 'Postman', 'Vite / Webpack'],
  },
]
