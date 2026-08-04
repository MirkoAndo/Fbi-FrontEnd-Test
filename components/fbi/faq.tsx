"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./primitives"

const faqs = [
  {
    q: "Is FBI-AI affiliated with any government agency?",
    a: "No. FBI-AI is a fictional, independent AI product. It emulates the documentation style of historical intelligence archives for creative, analytical, and educational use — it holds no official standing.",
  },
  {
    q: "How does the agent conduct an interview?",
    a: "It runs an adaptive question engine that reroutes based on each response, probing contradictions and gaps until it can form a confident, evidence-backed assessment.",
  },
  {
    q: "Where does the psychological analysis come from?",
    a: "Profiles are generated from structured behavioral frameworks applied to the interview transcript. Every trait is reported with an explicit confidence band rather than stated as fact.",
  },
  {
    q: "Can I export the generated dossier?",
    a: "Yes. Reports export to Markdown for version control and to print-ready PDF that preserves the archival typesetting, stamps, and seals.",
  },
  {
    q: "Is my case data kept private?",
    a: "Cases are isolated per investigation. You control retention, and files can be purged on demand. Offline mode keeps sensitive material entirely on-device.",
  },
  {
    q: "How accurate are the risk classifications?",
    a: "Threat tiers combine behavioral, psychological, and network signals into a calibrated score. Each tier ships with the specific triggers that produced it, so conclusions remain auditable.",
  },
  {
    q: "Does it support languages other than English?",
    a: "The agent conducts interviews and compiles reports across 40+ languages, preserving nuance in both questioning and the final documentation.",
  },
  {
    q: "Can it run in the field without connectivity?",
    a: "Yes. Offline support lets the agent operate on-device, syncing evidence and cross-references when a secure connection is restored.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="09"
          eyebrow="Cleared Questions"
          title="Frequently Asked"
          description="Answers to the questions we field most often about the agent, its methods, and its output."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={(i % 4) * 0.04}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-base font-semibold uppercase tracking-wide text-foreground">
                        {f.q}
                      </span>
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-accent">
                      <Plus className="size-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-9 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
