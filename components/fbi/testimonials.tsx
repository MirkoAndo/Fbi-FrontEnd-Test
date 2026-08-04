"use client"

import { Quote } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { GlowCard, Reveal } from "./primitives"

const testimonials = [
  {
    quote:
      "I have compiled case files for thirty years. FBI-AI reproduces the discipline of a bureau dossier — the structure, the caution, the chain of custody — in a fraction of the time.",
    name: "M. Halloran",
    role: "Former Field Investigator",
    initials: "MH",
  },
  {
    quote:
      "The psychological profiles are unnervingly coherent. It holds its assumptions loosely and shows its confidence bands. That is more than most human reports do.",
    name: "Dr. E. Sorenson",
    role: "Forensic Psychologist",
    initials: "ES",
  },
  {
    quote:
      "As a security analyst, I care about defensibility. Every conclusion traces back to logged evidence. Nothing is asserted without a source.",
    name: "R. Okonkwo",
    role: "Security Analyst",
    initials: "RO",
  },
  {
    quote:
      "The evidence correlation caught a link across two datasets that my team had missed for weeks. The timeline reconstruction alone justifies the tool.",
    name: "J. Reyes",
    role: "Digital Forensics Expert",
    initials: "JR",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="08"
          eyebrow="Field Testimony"
          title="Verified by Operators"
          description="Statements collected from investigators, clinicians, and analysts who have run live cases through the agent."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <GlowCard className="h-full p-7">
                <Quote className="size-7 text-accent/40" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid size-11 place-items-center rounded-full border border-accent/40 bg-accent/10 font-display text-sm font-bold text-accent">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                      {t.name}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
