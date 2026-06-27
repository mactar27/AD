'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { processSteps as originalProcessSteps } from '@/lib/site-data'
import { useLanguage } from '@/lib/i18n'

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="processus" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand/20 via-brand to-brand-light/30 lg:block"
          />
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
            {t.data.processSteps.map((step, i) => {
              const Icon = originalProcessSteps[i].icon
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-4 border-secondary/60 bg-brand-gradient text-primary-foreground shadow-soft">
                    <Icon className="size-6" />
                  </div>
                  <span className="mt-3 font-heading text-xs font-bold tracking-widest text-brand">{step.step}</span>
                  <h3 className="mt-1 font-heading text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
