import { z } from 'zod'

export const contactSchema = z.object({
  firstName: z.string().min(2, { message: 'Le prénom est requis.' }),
  lastName: z.string().min(2, { message: 'Le nom est requis.' }),
  company: z.string().optional(),
  phone: z.string().refine((val) => {
    if (!val) return true
    const clean = val.replace(/[\s-]/g, '')
    return /^(?:\+221|00221)?(?:7[05678]|33)\d{7}$/.test(clean)
  }, { message: 'Numéro invalide (ex: +221 77 123 45 67)' }).optional().or(z.literal('')),
  email: z.string().email({ message: 'Adresse email invalide.' }),
  subject: z.string().min(2, { message: 'Le sujet est requis.' }),
  message: z.string().min(10, { message: 'Votre message doit contenir au moins 10 caractères.' }),
})

export type ContactFormValues = z.infer<typeof contactSchema>
