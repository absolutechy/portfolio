import { type ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { cn } from '../../lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: FadeInProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        inView ? 'opacity-100' : 'opacity-0',
        direction === 'up' && (inView ? 'translate-y-0' : 'translate-y-8'),
        direction === 'left' && (inView ? 'translate-x-0' : '-translate-x-8'),
        direction === 'right' && (inView ? 'translate-x-0' : 'translate-x-8'),
        className,
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
