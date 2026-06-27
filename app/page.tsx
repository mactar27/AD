import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { Technologies } from "@/components/sections/technologies"
import { Realisations } from "@/components/sections/realisations"
import { Testimonials } from "@/components/sections/testimonials"
import { Process } from "@/components/sections/process"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Technologies />
      <Realisations />
      <Testimonials />
      <Process />
      <Faq />
      <Cta />
      <Contact />
      <Footer />
    </main>
  )
}
