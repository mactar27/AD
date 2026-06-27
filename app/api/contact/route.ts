import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Données invalides.', issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    )
  }

  const data = parsed.data
  const to = process.env.CONTACT_EMAIL ?? 'contact@adpulse.com'
  const apiKey = process.env.RESEND_API_KEY

  const html = `
    <h2>Nouvelle demande de contact — AD PULSE</h2>
    <p><strong>Nom :</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Entreprise :</strong> ${data.company ?? '—'}</p>
    <p><strong>Email :</strong> ${data.email}</p>
    <p><strong>Téléphone :</strong> ${data.phone ?? '—'}</p>
    <p><strong>Sujet :</strong> ${data.subject}</p>
    <p><strong>Message :</strong></p>
    <p>${data.message.replace(/\n/g, '<br/>')}</p>
  `

  // Send via Resend when an API key is configured. Otherwise, log the request
  // so the form stays functional in preview without a third-party provider.
  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'AD PULSE <onboarding@resend.dev>',
          to: [to],
          reply_to: data.email,
          subject: `[Contact] ${data.subject}`,
          html,
        }),
      })
      if (!res.ok) {
        const detail = await res.text()
        console.log('[v0] Resend error:', detail)
        return NextResponse.json({ error: "L'envoi de l'email a échoué." }, { status: 502 })
      }
    } catch (error) {
      console.log('[v0] Contact send error:', error)
      return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
    }
  } else {
    console.log('[v0] Contact request received (no RESEND_API_KEY set):', {
      ...data,
      to,
    })
  }

  return NextResponse.json({ success: true })
}
