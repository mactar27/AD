import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamText, type UIMessage } from "ai"
import { NextResponse } from "next/server"

export const maxDuration = 30

const SYSTEM_PROMPT = `Tu es l'assistant IA d'AD PULSE, une agence digitale basée à Dakar, Sénégal, spécialisée dans le développement web, le marketing digital et la communication.

Services proposés :
- Développement Web Full Stack (applications, sites vitrines, PWA, e-commerce)
- Développement Mobile (iOS & Android, natif et hybride)
- Marketing Digital (SEO, SEA, Community Management, Email Marketing, Publicité Digitale)
- Design UI/UX (interfaces modernes, identité visuelle, graphisme)
- ERP & CRM sur mesure
- Cloud & DevOps
- Cybersécurité
- Analyse de données & tableaux de bord
- Photographie professionnelle & Montage vidéo

Informations de contact :
- Adresse : Rte des Maristes, Dakar, Sénégal
- Téléphone / WhatsApp : +221 77 351 91 28
- Email : contact@adpulse.com

Comportement :
- Réponds dans la langue de l'utilisateur (français ou anglais), de façon concise, chaleureuse et professionnelle.
- Mets en avant les services d'AD PULSE et propose toujours d'aider.
- IMPORTANT : N'invente jamais de tarifs et ne t'engage sur aucun délai. Pour toute question sur les prix ou les délais, explique que chaque projet est sur mesure et invite l'utilisateur à nous contacter.
- Si tu ne sais pas, invite l'utilisateur à nous contacter directement via le formulaire de contact ou sur WhatsApp.
- Ne mentionne jamais de concurrents.
- Pour toute demande de devis, invite l'utilisateur à remplir le formulaire en bas de la page ou à nous contacter par téléphone.`

// Basic in-memory rate limiter (resets on server restart/cold start)
// For production across multiple edge nodes, consider @vercel/kv or Upstash
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const LIMIT = 10 // Max 10 messages
const WINDOW_MS = 60 * 1000 // Per minute

export async function POST(req: Request) {
  // Extract IP for rate limiting
  const ip = req.headers.get("x-forwarded-for") || "anonymous"
  
  const now = Date.now()
  const userRate = rateLimit.get(ip)

  if (userRate) {
    if (now - userRate.timestamp > WINDOW_MS) {
      // Reset window
      rateLimit.set(ip, { count: 1, timestamp: now })
    } else if (userRate.count >= LIMIT) {
      // Block request
      return new NextResponse("Too many requests. Please slow down.", { status: 429 })
    } else {
      // Increment count
      userRate.count++
    }
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now })
  }

  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toTextStreamResponse()
}
