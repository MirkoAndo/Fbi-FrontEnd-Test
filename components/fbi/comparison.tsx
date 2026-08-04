"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./primitives"

const rows = [
  ["Time to full dossier", "3–6 weeks", "Under 20 minutes"],
  ["Interview consistency", "Analyst-dependent", "Deterministic"],
  ["Bias control", "Manual review", "Structured & audited"],
  ["Evidence correlation", "Spreadsheet-based", "Automatic graph"],
  ["Documentation style", "Varies by office", "Archive-authentic"],
  ["Availability", "Business hours", "24/7 · offline capable"],
  ["Language coverage", "1–2 languages", "40+ languages"],
  ["Export formats", "Manual typing", "Markdown · PDF"],
]

export function Comparison() {
  return (
    <section id="comparison" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          eyebrow="Field Comparison"
          title="Traditional Interview vs FBI-AI"
          description="The same investigative rigor, without the delay, drift, or clerical overhead of a manual process."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-md border border-border">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-secondary/50">
              <div className="px-5 py-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Criteria</div>
              <div className="border-l border-border px-5 py-4 text-center font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Traditional
              </div>
              <div className="border-l border-accent/30 bg-accent/10 px-5 py-4 text-center font-display text-xs font-semibold uppercase tracking-widest text-accent">
                FBI-AI
              </div>
            </div>

            {rows.map((r, i) => (
              <motion.div
                key={r[0]}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-[1.4fr_1fr_1fr] border-t border-border text-xs"
              >
                <div className="px-5 py-4 uppercase tracking-wider text-foreground">{r[0]}</div>
                <div className="flex items-center justify-center gap-2 border-l border-border px-5 py-4 text-center text-muted-foreground">
                  <X className="size-3.5 shrink-0 text-classified/70" />
                  <span>{r[1]}</span>
                </div>
                <div className="flex items-center justify-center gap-2 border-l border-accent/30 bg-accent/[0.06] px-5 py-4 text-center text-foreground">
                  <Check className="size-3.5 shrink-0 text-accent" />
                  <span>{r[2]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
