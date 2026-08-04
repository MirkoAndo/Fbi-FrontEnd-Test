"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  UserSearch,
  BrainCog,
  MessageSquareText,
  ScanSearch,
  CalendarClock,
  Share2,
  ShieldAlert,
  Contact,
  Plus,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./primitives"

const caps = [
  {
    icon: UserSearch,
    title: "Behavioral Profiling",
    short: "Maps conduct patterns into a predictive behavioral signature.",
    detail: "Cross-references statements, micro-inconsistencies, and response latency to build a longitudinal model of how a subject acts under pressure.",
  },
  {
    icon: BrainCog,
    title: "Psychological Assessment",
    short: "Reconstructs traits, motivations, and stability indices.",
    detail: "Applies structured clinical frameworks to interview transcripts, producing a defensible profile with confidence bands per trait.",
  },
  {
    icon: MessageSquareText,
    title: "Communication Analysis",
    short: "Detects deception markers and linguistic tells.",
    detail: "Analyzes syntax, hedging, and topic avoidance to flag statements that warrant follow-up during the behavioral interview.",
  },
  {
    icon: ScanSearch,
    title: "Pattern Recognition",
    short: "Surfaces recurring behaviors across the case file.",
    detail: "Correlates events across time to expose habits, triggers, and anomalies that a linear read of the file would miss.",
  },
  {
    icon: CalendarClock,
    title: "Investigative Timeline",
    short: "Assembles a verified chronology of events.",
    detail: "Reconciles conflicting timestamps into a single authoritative timeline, annotated with evidence sources and confidence.",
  },
  {
    icon: Share2,
    title: "Relationship Mapping",
    short: "Charts known associates and influence networks.",
    detail: "Constructs a weighted graph of contacts, ranking each connection by strength, recency, and relevance to the investigation.",
  },
  {
    icon: ShieldAlert,
    title: "Threat Classification",
    short: "Assigns a calibrated risk and escalation tier.",
    detail: "Combines behavioral, psychological, and network signals into a single threat tier with explicit escalation triggers.",
  },
  {
    icon: Contact,
    title: "Identity Reconstruction",
    short: "Rebuilds identity from fragmented records.",
    detail: "Fuses partial identifiers, aliases, and biometric fragments into a coherent, verifiable subject identity.",
  },
]

export function Capabilities() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="capabilities" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow="Field Capabilities"
          title="What the Agent Can Do"
          description="Eight investigative capabilities, each engineered to hold up under scrutiny. Select a card to expand the operational detail."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c, i) => {
            const isOpen = open === i
            return (
              <Reveal key={c.title} delay={(i % 4) * 0.06}>
                <motion.button
                  layout
                  onClick={() => setOpen(isOpen ? null : i)}
                  whileHover={{ y: -4 }}
                  className={`flex h-full w-full flex-col items-start rounded-md border p-6 text-left backdrop-blur-sm transition-colors ${
                    isOpen ? "border-accent/60 bg-card" : "border-border bg-card/50 hover:border-accent/40"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-sm border border-accent/30 bg-accent/10">
                      <c.icon className="size-5 text-accent" />
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-muted-foreground">
                      <Plus className="size-4" />
                    </motion.span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold uppercase leading-tight tracking-wide text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.short}</p>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden border-t border-dashed border-border pt-3 text-xs leading-relaxed text-accent/90"
                      >
                        {c.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
