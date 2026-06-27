import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"
import { Footer } from "@/components/sections/footer"

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string
  updatedAt: string
  children: React.ReactNode
}) {
  return (
    <main>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Retour à l'accueil AD PULSE">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {"Retour à l'accueil"}
          </Link>
        </div>
      </header>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Dernière mise à jour : {updatedAt}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose-legal space-y-8 leading-relaxed text-muted-foreground">{children}</div>
      </article>

      <Footer />
    </main>
  )
}

export function LegalBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}
