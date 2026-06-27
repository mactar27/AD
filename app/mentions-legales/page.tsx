import type { Metadata } from "next"
import { LegalPage, LegalBlock } from "@/components/legal-page"
import { company } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site AD PULSE, agence digitale.",
  alternates: { canonical: "/mentions-legales" },
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" updatedAt="27 juin 2026">
      <LegalBlock heading="Éditeur du site">
        <p>
          Le présent site est édité par <strong>{company.name}</strong>, agence digitale.
        </p>
        <p>
          Adresse : {company.address}
          <br />
          Téléphone : {company.phone}
          <br />
          Email : {company.email}
        </p>
      </LegalBlock>

      <LegalBlock heading="Hébergement">
        <p>
          Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
        </p>
      </LegalBlock>

      <LegalBlock heading="Propriété intellectuelle">
        <p>
          {
            "L'ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) sont la propriété exclusive de "
          }
          {company.name}
          {
            ", sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, est interdite sans autorisation préalable écrite."
          }
        </p>
      </LegalBlock>

      <LegalBlock heading="Responsabilité">
        <p>
          {
            "AD PULSE s'efforce d'assurer l'exactitude des informations diffusées sur ce site mais ne saurait être tenue responsable des erreurs, omissions ou d'une indisponibilité des informations."
          }
        </p>
      </LegalBlock>

      <LegalBlock heading="Contact">
        <p>
          {"Pour toute question relative aux présentes mentions légales, vous pouvez nous écrire à "}
          {company.email}.
        </p>
      </LegalBlock>
    </LegalPage>
  )
}
