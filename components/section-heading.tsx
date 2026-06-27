import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      <span className={cn('text-sm font-bold uppercase tracking-[0.15em]', light ? 'text-brand-light' : 'text-brand')}>
        {eyebrow}
      </span>
      <h2
        className={cn(
          'mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl',
          light ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 max-w-2xl text-base leading-relaxed text-pretty', light ? 'text-white/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
