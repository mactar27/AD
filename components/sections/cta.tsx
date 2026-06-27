'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Fingerprint } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function Cta() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-12 shadow-soft sm:px-12 sm:py-14"
      >
        <Fingerprint
          aria-hidden="true"
          className="absolute -left-6 top-1/2 size-48 -translate-y-1/2 text-white/10"
        />
        <div className="absolute -right-10 -top-10 size-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-white text-balance sm:text-3xl">
              {t.cta.title}
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              {t.cta.subtitle}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand shadow-lg transition-transform hover:-translate-y-0.5"
          >
            {t.cta.button}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
