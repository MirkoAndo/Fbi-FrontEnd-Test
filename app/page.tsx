import { BackgroundEffects } from "@/components/fbi/background-effects"
import { MouseGlow } from "@/components/fbi/mouse-glow"
import { Nav } from "@/components/fbi/nav"
import { Hero } from "@/components/fbi/hero"
import { About } from "@/components/fbi/about"
import { Workflow } from "@/components/fbi/workflow"
import { Capabilities } from "@/components/fbi/capabilities"
import { Dashboard } from "@/components/fbi/dashboard"
import { DossierPreview } from "@/components/fbi/dossier-preview"
import { Features } from "@/components/fbi/features"
import { Comparison } from "@/components/fbi/comparison"
import { Testimonials } from "@/components/fbi/testimonials"
import { FAQ } from "@/components/fbi/faq"
import { CTA, Footer } from "@/components/fbi/cta-footer"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <MouseGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Workflow />
        <Capabilities />
        <Dashboard />
        <DossierPreview />
        <Features />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
