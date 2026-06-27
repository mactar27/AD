'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { reasons } from '@/lib/site-data'

export function WhyUs() {
  return (
    <section id="pourquoi" className="bg-brand-dark relative overflow-hidden py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-gradient absolute inset-0 opacity-90" />
        <div className="absolute -top-32 right-0 size-[30rem] rounded-full bg-brand-light/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 size-[24rem] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Pourquoi choisir AD PULSE ?"
          title="Votre succès est notre mission"
          description="Nous combinons expertise, créativité et technologie pour fournir des solutions qui font vraiment la différence."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/15 text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
