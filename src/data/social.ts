import { Code2, Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  label: string
  href:  string
  icon:  LucideIcon
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Phone',
    href:  'tel:+201097673063',
    icon:  Phone,
  },
  {
    label: 'GitHub',
    href:  'https://github.com/mustafaelshahhat-art',
    icon:  Code2,
  },

  {
    label: 'Email',
    href:  'mailto:mustafaelshhahat@gmail.com',
    icon:  Mail,
  },
]
