'use client'

import dynamic from 'next/dynamic'
import { useLanguage } from '@/lib/i18n'

const Chatbot = dynamic(() => import('@/components/chatbot'), { ssr: false })

export function ChatbotLazy() {
  const { lang } = useLanguage()
  return <Chatbot key={lang} />
}
