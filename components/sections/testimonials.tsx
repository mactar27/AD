'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { testimonials } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next: number) => {
    setDir(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1)
    setIndex((next + testimonials.length) % testimonials.length)
  }

  const t = testimonials[index]

  return (
    <section className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils parlent de nous"
          description="La satisfaction de nos clients est la meilleure preuve de notre engagement."
        />

        <div className="relative mt-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
            <Quote className="size-10 text-brand/20" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-2 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 font-heading text-xl font-semibold leading-relaxed text-foreground text-pretty sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="size-14 rounded-full border-2 border-background object-cover"
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Témoignage précédent"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Aller au témoignage ${i + 1}`}
                  onClick={() => go(i)}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-6 bg-brand' : 'w-2 bg-border',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Témoignage suivant"
              className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
