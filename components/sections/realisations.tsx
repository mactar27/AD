'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { projectCategories, projects } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Realisations() {
  const [active, setActive] = useState('Tous')
  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="realisations" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Réalisations"
        title="Découvrez quelques-uns de nos projets"
        description="Un aperçu des solutions que nous avons conçues pour nos clients à travers différents secteurs."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              active === cat
                ? 'bg-brand-gradient text-primary-foreground shadow-soft'
                : 'border border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-brand',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Projet ${project.title} — ${project.category}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {project.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-brand opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
