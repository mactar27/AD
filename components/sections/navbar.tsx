'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = t.data.navLinks

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border/70 shadow-card' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link href="#accueil" aria-label="AD PULSE — accueil" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setLang('fr')}
              className={cn(
                'rounded-full px-3 py-1 text-xs font-bold transition-all',
                lang === 'fr'
                  ? 'bg-brand-gradient text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              FR
            </button>
            <button
              onClick={() => setLang('en')}
              className={cn(
                'rounded-full px-3 py-1 text-xs font-bold transition-all',
                lang === 'en'
                  ? 'bg-brand-gradient text-white shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            {t.nav.cta}
            <ArrowRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border/70 lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-accent hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Language toggle mobile */}
            <li className="flex gap-2 px-3 pt-1">
              <button
                onClick={() => setLang('fr')}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-bold border transition-all',
                  lang === 'fr'
                    ? 'bg-brand-gradient text-white border-transparent shadow-sm'
                    : 'border-border text-muted-foreground',
                )}
              >
                🇫🇷 Français
              </button>
              <button
                onClick={() => setLang('en')}
                className={cn(
                  'rounded-full px-4 py-1.5 text-xs font-bold border transition-all',
                  lang === 'en'
                    ? 'bg-brand-gradient text-white border-transparent shadow-sm'
                    : 'border-border text-muted-foreground',
                )}
              >
                🇬🇧 English
              </button>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                {t.nav.cta}
                <ArrowRight className="size-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
