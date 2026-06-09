import { Code2, Mail, Link2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  label: string
  href:  string
  icon:  LucideIcon
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href:  'https://github.com/moustafa-elshahhat',
    icon:  Code2,
  },
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/moustafa-elshahhat/',
    icon:  Link2,
  },
  {
    label: 'Email',
    href:  'mailto:mustafaelshahhat@gmail.com',
    icon:  Mail,
  },
]
