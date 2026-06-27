'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '@/lib/site-data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading text-4xl font-extrabold text-brand sm:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-4 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
