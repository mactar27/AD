'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Globe, Megaphone, PenTool, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const BG = '#ffffff'

const stepIcons = [Globe, Megaphone, PenTool]
const stepColors = ['#2563eb', '#f59e0b', '#8b5cf6']

export function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<'logo' | 'onboard'>('logo')
  const [step, setStep] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (sessionStorage.getItem('adpulse_splash_shown')) return
    setVisible(true)
    const t = setTimeout(() => setPhase('onboard'), 5000)
    return () => clearTimeout(t)
  }, [])

  function handleNext() {
    if (step < t.splash.steps.length - 1) {
      setStep((s) => s + 1)
    } else {
      dismiss()
    }
  }

  function dismiss() {
    sessionStorage.setItem('adpulse_splash_shown', '1')
    setLeaving(true)
    document.documentElement.style.background = ''
    document.documentElement.style.overflow = ''
    setTimeout(() => setVisible(false), 600)
  }

  if (!visible) return null

  const stepsData = t.splash.steps
  const current = stepsData[step]
  const Icon = stepIcons[step]
  const color = stepColors[step]

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: BG }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle background blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              style={{ background: 'rgba(37,99,235,0.06)', filter: 'blur(80px)' }}
              className="absolute -top-32 -left-32 h-96 w-96 rounded-full"
            />
            <div
              style={{ background: 'rgba(139,92,246,0.05)', filter: 'blur(100px)' }}
              className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full"
            />
          </div>

          <AnimatePresence mode="wait">
            {/* Phase 1: Logo */}
            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6"
              >
                {/* Logo */}
                <motion.div
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image src="/splash-logo.png" alt="Ad Pulse" width={280} height={100} className="object-contain" />
                </motion.div>

                {/* Loading bar */}
                <div style={{ background: '#e2e8f0' }} className="h-1 w-36 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.7, ease: 'easeInOut' }}
                    style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)' }}
                    className="h-full rounded-full"
                  />
                </div>

                <p style={{ color: '#94a3b8' }} className="text-xs tracking-wider uppercase">
                  {t.splash.tagline}
                </p>
              </motion.div>
            )}

            {/* Phase 2: Onboarding */}
            {phase === 'onboard' && (
              <motion.div
                key="onboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45 }}
                style={{ background: BG }}
                className="absolute inset-0 flex flex-col items-center justify-center px-6"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="flex max-w-md flex-col items-center gap-5 text-center"
                  >
                    {/* Icon */}
                    <div
                      style={{ background: `${color}14`, border: `1px solid ${color}30` }}
                      className="flex h-20 w-20 items-center justify-center rounded-3xl"
                    >
                      <Icon style={{ color: color }} className="h-10 w-10" />
                    </div>

                    {/* Badge */}
                    <span
                      style={{ background: `${color}10`, border: `1px solid ${color}30`, color: color }}
                      className="rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest"
                    >
                      {current.badge}
                    </span>

                    {/* Title */}
                    <h2 style={{ color: '#0f172a' }} className="text-3xl font-extrabold leading-tight sm:text-4xl">
                      {current.title}
                    </h2>

                    {/* Description */}
                    <p style={{ color: '#64748b' }} className="text-sm leading-relaxed">
                      {current.description}
                    </p>

                    {/* Checklist */}
                    <ul className="w-full max-w-xs space-y-2 text-left">
                      {t.splash.checklist.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 style={{ color: color }} className="h-4 w-4 shrink-0" />
                          <span style={{ color: '#475569' }} className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom controls */}
                <div className="absolute bottom-10 flex w-full max-w-sm flex-col items-center gap-5 px-6">
                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {stepsData.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setStep(i)}
                        style={{
                          width: i === step ? 24 : 8,
                          height: 8,
                          background: i === step ? color : '#e2e8f0',
                          borderRadius: 999,
                          transition: 'all 0.3s',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      />
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleNext}
                    style={{
                      background: `linear-gradient(135deg, ${color}, #1d4ed8)`,
                      boxShadow: `0 8px 24px ${color}40`,
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 active:scale-95"
                  >
                    {step < stepsData.length - 1 ? (
                      <>{t.splash.next} <ArrowRight className="h-4 w-4" /></>
                    ) : (
                      <>{t.splash.discover} <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>

                  {step < stepsData.length - 1 && (
                    <button
                      onClick={dismiss}
                      style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer' }}
                      className="text-xs hover:text-slate-500 transition-colors"
                    >
                      {t.splash.skip}
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
