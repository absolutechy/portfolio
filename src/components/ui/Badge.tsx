import { type ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'accent'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variant === 'default' && 'bg-gray-100 text-gray-600',
        variant === 'accent' && 'bg-indigo-50 text-indigo-700',
        className,
      )}
    >
      {children}
    </span>
  )
}
