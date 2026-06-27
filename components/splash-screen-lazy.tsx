'use client'

import dynamic from 'next/dynamic'

const SplashScreen = dynamic(
  () => import('@/components/splash-screen').then((m) => ({ default: m.SplashScreen })),
  { ssr: false }
)

export function SplashScreenLazy() {
  return <SplashScreen />
}
