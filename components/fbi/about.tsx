"use client"

import { FileSearch, BrainCircuit, ShieldAlert, Archive } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { GlowCard, Reveal, Counter } from "./primitives"

const cards = [
  {
    icon: FileSearch,
    title: "Authentic Documentation",
    body: "Every dossier is composed in the visual and procedural language of historical intelligence records — file numbers, classifications, and chain-of-custody intact.",
  },
  {
    icon: BrainCircuit,
    title: "Behavioral Reasoning",
    body: "The agent conducts adaptive interviews, weighs contradictions, and reconstructs a psychological model of the subject in real time.",
  },
  {
    icon: ShieldAlert,
    title: "Risk Classification",
    body: "Threat scoring, stability indices, and escalation triggers are derived from evidence and rendered as structured, defensible assessments.",
  },
  {
    icon: Archive,
    title: "Archive Fidelity",
    body: "Outputs read like declassified Cold War case files — because the model was tuned on the documentation conventions of intelligence agencies.",
  },
]

const stats = [
  { to: 1970, label: "Archive Era", suffix: "" },
  { to: 8, label: "Investigation Stages", suffix: "" },
  { to: 99.2, label: "Profile Confidence", suffix: "%", decimals: 1 },
  { to: 24, label: "Active Field Hours", suffix: "/7" },
]

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          eyebrow="Case Brief"
          title={<>What is <span className="text-accent">FBI-AI?</span></>}
          description="FBI-AI is an autonomous investigative agent that produces authentic classified dossiers inspired by historical intelligence documentation. It interviews, profiles, and compiles — then files the report."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <GlowCard className="h-full p-6">
                <c.icon className="size-7 text-accent" />
                <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card/60 px-6 py-7 text-center backdrop-blur-sm">
                <div className="font-display text-3xl font-bold text-accent md:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
