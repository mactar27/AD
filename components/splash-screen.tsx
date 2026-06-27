'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<'logo' | 'onboard' | 'out'>('logo')

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('adpulse_splash_shown')) return
    sessionStorage.setItem('adpulse_splash_shown', '1')
    setVisible(true)

    // Phase 1: Logo (1.8s) → Phase 2: Onboard (2.5s) → Phase 3: Out
    const t1 = setTimeout(() => setPhase('onboard'), 1800)
    const t2 = setTimeout(() => setPhase('out'), 4500)
    const t3 = setTimeout(() => setVisible(false), 5200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (!visible) return null

  return (
    <AnimatePresence>
      {phase !== 'out' ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#0a1628' }}
        >
          {/* Animated gradient blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/30 blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute right-1/4 bottom-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
            />
          </div>

          {/* Phase 1 — Logo */}
          <AnimatePresence mode="wait">
            {phase === 'logo' && (
              <motion.div
                key="logo-phase"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6"
              >
                <motion.div
                  animate={{ boxShadow: ['0 0 0px 0px rgba(37,99,235,0)', '0 0 40px 20px rgba(37,99,235,0.3)', '0 0 0px 0px rgba(37,99,235,0)'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
                >
                  <Image src="/icon.png" alt="AD PULSE" width={64} height={64} className="object-contain" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-2xl font-bold tracking-widest text-white"
                >
                  AD PULSE
                </motion.p>
                {/* Loading bar */}
                <div className="h-0.5 w-32 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                </div>
              </motion.div>
            )}

            {/* Phase 2 — Onboarding */}
            {phase === 'onboard' && (
              <motion.div
                key="onboard-phase"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex max-w-xl flex-col items-center gap-8 px-8 text-center"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Agence Digitale Premium — Dakar
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
                >
                  Transformons vos idées en{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    solutions digitales
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-base text-slate-400 leading-relaxed"
                >
                  Développement web, marketing digital et design sur mesure
                  pour accélérer votre croissance.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-6 text-sm text-slate-500"
                >
                  {['120+ Projets', '4.9/5 Satisfaction', '10+ Ans'].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-blue-500" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </span>
                  ))}
                </motion.div>

                {/* Progress dots */}
                <div className="flex gap-2 mt-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.3, scale: 0.8 }}
                      animate={{ opacity: i === 1 ? 1 : 0.3, scale: i === 1 ? 1 : 0.8 }}
                      className={`h-1.5 rounded-full ${i === 1 ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
