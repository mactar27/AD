'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { techGroups } from '@/lib/site-data'

export function Technologies() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Technologies"
        title="Les meilleures technologies pour vos projets"
        description="Nous maîtrisons un écosystème moderne pour construire des solutions fiables, rapides et évolutives."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-accent hover:text-brand"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
