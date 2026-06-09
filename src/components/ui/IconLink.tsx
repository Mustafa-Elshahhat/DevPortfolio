import { cn } from '../../lib/utils'
import type { IconComponent } from '../icons/types'

interface IconLinkProps {
  href:       string
  icon:       IconComponent
  label:      string
  external?:  boolean
  className?: string
  size?:      number
  /** Show the label text next to the icon on md+ screens (icon-only below). */
  showLabel?: boolean
}

export default function IconLink({
  href,
  icon: Icon,
  label,
  external,
  className,
  size = 20,
  showLabel = false,
}: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'rounded-full',
        'border border-outline-variant/20 bg-white/[0.04]',
        'text-on-surface-variant',
        'transition-all duration-200',
        'hover:border-outline-variant/50 hover:text-primary hover:bg-surface-container-high hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        showLabel ? 'h-10 w-10 md:w-auto md:px-4' : 'w-10 h-10',
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon size={size} aria-hidden="true" strokeWidth={1.5} className="shrink-0" />
      {showLabel && (
        <span className="hidden md:inline font-label text-sm whitespace-nowrap">{label}</span>
      )}
    </a>
  )
}
