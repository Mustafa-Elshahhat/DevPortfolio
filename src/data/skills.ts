import type { LucideIcon } from 'lucide-react'
import { Server, Database, Code2, Wrench } from 'lucide-react'

export interface SkillCategory {
  id:     string
  label:  string
  icon:   LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id:     'backend',
    label:  'Backend',
    icon:   Server,
    skills: ['C#', 'ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'Authentication (JWT)'],
  },
  {
    id:     'databases',
    label:  'Databases',
    icon:   Database,
    skills: ['SQL Server', 'EF Core', 'SQLite', 'Data Modeling'],
  },
  {
    id:     'frontend',
    label:  'Front-End',
    icon:   Code2,
    skills: ['Angular', 'React', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    id:     'tools',
    label:  'Tools & Other',
    icon:   Wrench,
    skills: ['Git & GitHub', 'Postman', 'Node.js', 'WPF (Desktop)', 'Layered / Clean Architecture'],
  },
]
