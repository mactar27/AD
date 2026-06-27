'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { contactSchema, type ContactFormValues } from '@/lib/contact-schema'
import { contactInfo } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-2 focus:ring-brand/20'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(values: ContactFormValues) {
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const socials = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: MessageCircle, href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`, label: 'WhatsApp' },
  ]

  return (
    <section id="contact" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Démarrons votre projet ensemble"
          description="Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Prénom" error={errors.firstName?.message}>
                  <input className={fieldClass} placeholder="Jean" autoComplete="given-name" {...register('firstName')} />
                </Field>
                <Field label="Nom" error={errors.lastName?.message}>
                  <input className={fieldClass} placeholder="Dupont" autoComplete="family-name" {...register('lastName')} />
                </Field>
                <Field label="Entreprise" optional>
                  <input className={fieldClass} placeholder="Votre société" autoComplete="organization" {...register('company')} />
                </Field>
                <Field label="Téléphone" optional>
                  <input className={fieldClass} placeholder="+221 ..." autoComplete="tel" {...register('phone')} />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input className={fieldClass} type="email" placeholder="jean@exemple.com" autoComplete="email" {...register('email')} />
                </Field>
                <Field label="Sujet" error={errors.subject?.message}>
                  <input className={fieldClass} placeholder="Objet de votre demande" {...register('subject')} />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    rows={5}
                    className={cn(fieldClass, 'resize-y')}
                    placeholder="Décrivez votre projet..."
                    {...register('message')}
                  />
                </Field>
              </div>

              {status === 'success' && (
                <div className="mt-4 flex items-start gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
                  <CheckCircle2 className="size-5 shrink-0 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold">Message envoyé avec succès !</p>
                    <p className="text-xs mt-1">Merci de nous avoir contactés. Un membre de l'équipe AD PULSE vous répondra très rapidement.</p>
                  </div>
                </div>
              )}
              {status === 'error' && (
                <p className="mt-4 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
                <ul className="space-y-5">
                  <InfoItem icon={MapPin} label="Adresse">{contactInfo.address}</InfoItem>
                  <InfoItem icon={Phone} label="Téléphone" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
                    {contactInfo.phone}
                  </InfoItem>
                  <InfoItem icon={Mail} label="Email" href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </InfoItem>
                  <InfoItem
                    icon={MessageCircle}
                    label="WhatsApp"
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  >
                    Disponible sur WhatsApp
                  </InfoItem>
                </ul>
                <div className="mt-6 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-10 items-center justify-center rounded-full bg-accent text-brand transition-colors hover:bg-brand-gradient hover:text-primary-foreground"
                    >
                      <s.icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-card">
                <iframe
                  title="Localisation AD PULSE"
                  src="https://www.google.com/maps?q=Rte+des+Maristes,Dakar,Senegal&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-sm font-medium text-foreground">
        {label}
        {optional && <span className="text-xs font-normal text-muted-foreground">(optionnel)</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  )
}

function InfoItem({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: typeof Mail
  label: string
  href?: string
  children: React.ReactNode
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-brand">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-foreground">{children}</p>
      </div>
    </div>
  )
  return <li>{href ? <a href={href} className="transition-opacity hover:opacity-80">{content}</a> : content}</li>
}
