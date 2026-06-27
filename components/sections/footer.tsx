'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Logo } from '@/components/logo'
import { contactInfo } from '@/lib/site-data'
import { useLanguage } from '@/lib/i18n'

const serviceLinks = [
  'Développement Web',
  'Développement Mobile',
  'Marketing Digital',
  'Design UI/UX',
  'Cloud & DevOps',
  'Cybersécurité',
]

const socials = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: MessageCircle, href: `https://wa.me/${contactInfo.whatsapp.replace(/\\D/g, '')}`, label: 'WhatsApp' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-light"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">{t.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-2.5">
              {t.footer.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-brand-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">{t.footer.ourServices}</h3>
            <ul className="mt-4 space-y-2.5">
              {/* Here we could also map serviceLinks to translations but we'll use original for now */}
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/70 transition-colors hover:text-brand-light">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">{t.footer.newsletter}</h3>
            <p className="mt-4 text-sm text-white/70">{t.footer.newsletterDesc}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubscribed(true)
              }}
              className="mt-4 flex flex-col gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                aria-label={t.footer.emailPlaceholder}
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/50 focus:border-brand-light"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-light px-4 py-2.5 text-sm font-semibold text-brand-dark transition-opacity hover:opacity-90"
              >
                {subscribed ? t.footer.subscribed : t.footer.subscribe}
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><MapPin className="size-4 text-brand-light" /> Dakar, Sénégal</li>
              <li className="flex items-center gap-2"><Phone className="size-4 text-brand-light" /> {contactInfo.phone}</li>
              <li className="flex items-center gap-2"><Mail className="size-4 text-brand-light" /> {contactInfo.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} AD PULSE. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-brand-light">
              {t.footer.legal}
            </Link>
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-brand-light">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
