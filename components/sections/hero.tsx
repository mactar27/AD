'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, Star, Users } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      {/* Background image */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Votre partenaire digital pour créer les{' '}
            <span className="text-gradient">solutions qui font grandir</span> votre entreprise.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Chez AD PULSE, nous transformons vos idées en applications, plateformes web et
            stratégies digitales performantes.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Demander un devis
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              <PlayCircle className="size-4 text-brand" />
              Découvrir nos services
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-4">
            <div className="flex h-10 items-center justify-center rounded-full bg-blue-50 px-4 border border-blue-100">
              <Users className="size-5 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current text-amber-400" />
                ))}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">30+ clients nous font déjà confiance</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
