'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Globe, Megaphone, PenTool, CheckCircle2 } from 'lucide-react'

const BG = '#0a1628'

const steps = [
  {
    icon: Globe,
    color: '#2563eb',
    badge: 'Développement Web',
    title: 'Des sites & apps qui convertissent',
    description:
      'Nous créons des expériences web modernes, rapides et optimisées pour transformer vos visiteurs en clients.',
  },
  {
    icon: Megaphone,
    color: '#f59e0b',
    badge: 'Marketing Digital',
    title: 'Visibilité & croissance sur mesure',
    description:
      'SEO, SEA, réseaux sociaux et email marketing : nous pilotons votre acquisition digitale pour des résultats concrets.',
  },
  {
    icon: PenTool,
    color: '#8b5cf6',
    badge: 'Design & Image',
    title: 'Une identité visuelle qui marque les esprits',
    description:
      'UI/UX, graphisme, photographie et vidéo : nous construisons une image de marque forte et cohérente pour votre entreprise.',
  },
]

export function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<'logo' | 'onboard'>('logo')
  const [step, setStep] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('adpulse_splash_shown')) return
    sessionStorage.setItem('adpulse_splash_shown', '1')
    setVisible(true)

    // Auto-advance from logo to onboard
    const t = setTimeout(() => setPhase('onboard'), 2000)
    return () => clearTimeout(t)
  }, [])

  function handleNext() {
    if (step < steps.length - 1) {
      setStep((s) => s + 1)
    } else {
      // Last step: fade out and hide
      setLeaving(true)
      setTimeout(() => setVisible(false), 700)
    }
  }

  if (!visible) return null

  const current = steps[step]
  const Icon = current.icon

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{ background: BG }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ background: 'rgba(37,99,235,0.25)', filter: 'blur(100px)' }}
              className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ background: 'rgba(34,211,238,0.18)', filter: 'blur(120px)' }}
              className="absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full"
            />
          </div>

          {/* Phase 1: Logo */}
          <AnimatePresence mode="wait">
            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6"
              >
                <motion.div
                  animate={{ boxShadow: ['0 0 0px rgba(37,99,235,0)', '0 0 40px 20px rgba(37,99,235,0.3)', '0 0 0px rgba(37,99,235,0)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  className="flex h-24 w-24 items-center justify-center rounded-3xl overflow-hidden"
                >
                  <Image src="/icon.png" alt="AD PULSE" width={64} height={64} className="object-contain" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold tracking-widest text-white"
                >
                  AD PULSE
                </motion.p>

                <div style={{ background: 'rgba(255,255,255,0.1)' }} className="h-0.5 w-32 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    style={{ background: 'linear-gradient(to right, #3b82f6, #22d3ee)' }}
                    className="h-full"
                  />
                </div>
              </motion.div>
            )}

            {/* Phase 2: Onboarding steps */}
            {phase === 'onboard' && (
              <motion.div
                key="onboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ background: BG }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
              >
                {/* Step content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex max-w-lg flex-col items-center gap-6 text-center"
                  >
                    {/* Icon */}
                    <div
                      style={{ background: `${current.color}22`, border: `1px solid ${current.color}44` }}
                      className="flex h-20 w-20 items-center justify-center rounded-3xl"
                    >
                      <Icon style={{ color: current.color }} className="h-10 w-10" />
                    </div>

                    {/* Badge */}
                    <span
                      style={{ background: `${current.color}1a`, border: `1px solid ${current.color}44`, color: current.color }}
                      className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
                    >
                      {current.badge}
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                      {current.title}
                    </h2>

                    {/* Description */}
                    <p style={{ color: '#94a3b8' }} className="text-base leading-relaxed">
                      {current.description}
                    </p>

                    {/* Checklist */}
                    <ul className="space-y-2 text-left w-full max-w-xs">
                      {['Expertise locale Dakar', 'Livraison rapide', 'Support continu'].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 style={{ color: current.color }} className="h-4 w-4 shrink-0" />
                          <span style={{ color: '#cbd5e1' }} className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom controls */}
                <div className="absolute bottom-12 flex w-full max-w-lg flex-col items-center gap-6 px-6">
                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setStep(i)}
                        style={{
                          width: i === step ? 24 : 8,
                          height: 8,
                          background: i === step ? current.color : 'rgba(255,255,255,0.2)',
                          borderRadius: 999,
                          transition: 'all 0.3s',
                        }}
                      />
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleNext}
                    style={{ background: `linear-gradient(135deg, #2563eb, #1d4ed8)`, boxShadow: '0 8px 30px rgba(37,99,235,0.4)' }}
                    className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 active:scale-95"
                  >
                    {step < steps.length - 1 ? (
                      <>Suivant <ArrowRight className="h-4 w-4" /></>
                    ) : (
                      <>Découvrir AD PULSE <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>

                  {step < steps.length - 1 && (
                    <button
                      onClick={() => { setLeaving(true); setTimeout(() => setVisible(false), 700) }}
                      style={{ color: '#64748b' }}
                      className="text-xs hover:text-slate-400 transition-colors"
                    >
                      Passer l'introduction
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
