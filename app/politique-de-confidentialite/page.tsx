import type { Metadata } from "next"
import { LegalPage, LegalBlock } from "@/components/legal-page"
import { company } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles d'AD PULSE.",
  alternates: { canonical: "/politique-de-confidentialite" },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage title="Politique de confidentialité" updatedAt="27 juin 2026">
      <LegalBlock heading="Collecte des données">
        <p>
          {
            "AD PULSE collecte les données personnelles que vous nous communiquez volontairement via notre formulaire de contact (nom, email, téléphone, message). Ces données sont utilisées uniquement pour répondre à votre demande."
          }
        </p>
      </LegalBlock>

      <LegalBlock heading="Utilisation des données">
        <p>
          {
            "Les informations recueillies servent à traiter vos demandes, établir des devis et assurer le suivi de notre relation commerciale. Elles ne sont jamais vendues à des tiers."
          }
        </p>
      </LegalBlock>

      <LegalBlock heading="Conservation des données">
        <p>
          {
            "Vos données sont conservées pour la durée nécessaire au traitement de votre demande, puis archivées conformément aux obligations légales en vigueur."
          }
        </p>
      </LegalBlock>

      <LegalBlock heading="Vos droits">
        <p>
          {
            "Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à "
          }
          {company.email}.
        </p>
      </LegalBlock>

      <LegalBlock heading="Cookies">
        <p>
          {
            "Ce site utilise des cookies de mesure d'audience afin d'améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour les refuser."
          }
        </p>
      </LegalBlock>
    </LegalPage>
  )
}
