import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { ChatbotLazy } from '@/components/chatbot-lazy'
import dynamic from 'next/dynamic'
import './globals.css'

const SplashScreen = dynamic(() => import('@/components/splash-screen').then(m => ({ default: m.SplashScreen })), { ssr: false })

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

const siteUrl = 'https://adpulse.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AD PULSE — Agence digitale, développement web & marketing',
    template: '%s | AD PULSE',
  },
  description:
    "AD PULSE est une agence digitale qui transforme vos idées en applications, plateformes web et stratégies digitales performantes. Développement, marketing digital et communication sur mesure.",
  keywords: [
    'agence digitale',
    'développement web',
    'développement mobile',
    'marketing digital',
    'SEO',
    'SEA',
    'UI/UX design',
    'e-commerce',
    'ERP',
    'CRM',
    'Next.js',
    'AD PULSE',
  ],
  authors: [{ name: 'AD PULSE' }],
  creator: 'AD PULSE',
  publisher: 'AD PULSE',
  alternates: { canonical: '/' },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'AD PULSE',
    title: 'AD PULSE — Agence digitale, développement web & marketing',
    description:
      'Votre partenaire digital pour créer les solutions qui font grandir votre entreprise.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'AD PULSE — Agence Digitale à Dakar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AD PULSE — Agence digitale',
    description:
      'Votre partenaire digital pour créer les solutions qui font grandir votre entreprise.',
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0a56c5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background font-sans antialiased">
        <SplashScreen />
        {children}
        <ChatbotLazy />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
