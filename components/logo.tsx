import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
  variant = 'default',
}: {
  className?: string
  showText?: boolean
  variant?: 'default' | 'light'
}) {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <Image
        src="/logo.png"
        alt="AD PULSE Logo"
        width={140}
        height={40}
        className={cn('h-24 w-auto object-contain', variant === 'light' && 'brightness-0 invert')}
        priority
      />
    </span>
  )
}
