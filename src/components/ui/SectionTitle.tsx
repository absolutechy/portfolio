import { cn } from '../../lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  )
}
