"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { Reveal, Stamp } from "./primitives"

const timeline = [
  ["1971.03", "First recorded contact with subject network."],
  ["1974.11", "Border crossing under alias, flagged by field office."],
  ["1979.06", "Intercepted correspondence, encryption noted."],
  ["1983.02", "Surveillance re-established, associates identified."],
]

const associates = [
  ["████ ██████", "PRIMARY", "0.91"],
  ["A. VANCE", "HANDLER", "0.77"],
  ["████████", "COURIER", "0.64"],
  ["R. KOZLOV", "FINANCIER", "0.52"],
]

export function DossierPreview() {
  return (
    <section id="dossier" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          eyebrow="Sample Output"
          title="Generated Dossier Preview"
          description="This is a representative report produced by FBI-AI — typeset in authentic archival style, sealed, stamped, and ready to file."
        />

        <Reveal delay={0.1}>
          <motion.article
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
            className="mx-auto mt-14 max-w-4xl"
          >
            <div className="relative overflow-hidden border border-paper-foreground/20 bg-paper text-paper-foreground shadow-2xl">
              <div className="bg-grain pointer-events-none absolute inset-0 opacity-20" />
              <div className="bg-scanlines pointer-events-none absolute inset-0 opacity-[0.04]" />

              {/* header */}
              <header className="relative flex flex-wrap items-center justify-between gap-4 border-b-2 border-paper-foreground/25 px-6 py-5 md:px-10">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full border-2 border-paper-foreground/40 text-[7px] font-bold uppercase leading-tight">
                    Bureau<br />Seal
                  </span>
                  <div>
                    <div className="font-display text-lg font-bold uppercase tracking-[0.15em]">Confidential Dossier</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] opacity-60">Federal Bureau Investigation AI</div>
                  </div>
                </div>
                <div className="text-right text-[10px] uppercase leading-relaxed tracking-widest opacity-70">
                  <div>Case No. Δ-0001-14</div>
                  <div>Filed 03 · Archive VII</div>
                </div>
                <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
                  <Stamp label="Top Secret" rotate={-10} className="text-base" />
                </div>
              </header>

              <div className="relative grid gap-8 px-6 py-8 md:grid-cols-[220px_1fr] md:px-10">
                {/* left column: photo, print, vitals */}
                <div className="space-y-5">
                  <div className="relative aspect-[3/4] overflow-hidden border border-paper-foreground/30 grayscale">
                    <Image src="/dossier-subject.png" alt="Redacted surveillance photograph of the subject" fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-paper-foreground/80 px-2 py-1 text-center text-[8px] uppercase tracking-widest text-paper">
                      Surveillance · Do Not Reproduce
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative size-16 shrink-0 overflow-hidden border border-paper-foreground/30 mix-blend-multiply">
                      <Image src="/dossier-fingerprint.png" alt="Subject fingerprint on file" fill className="object-cover" />
                    </div>
                    <div className="text-[9px] uppercase leading-relaxed tracking-widest opacity-70">
                      Print ID<br />
                      <span className="font-semibold opacity-100">FP-88-Δ-14</span>
                    </div>
                  </div>

                  <dl className="space-y-1.5 text-[11px]">
                    {[
                      ["Classification", "TOP SECRET"],
                      ["Threat Level", "TIER IV"],
                      ["Status", "ACTIVE"],
                      ["Confidence", "99.2%"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-dashed border-paper-foreground/25 pb-1">
                        <dt className="uppercase tracking-wider opacity-60">{k}</dt>
                        <dd className="font-bold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* right column: narrative sections */}
                <div className="space-y-6 text-[12px] leading-relaxed">
                  <Section title="Psychological Summary">
                    Subject presents a high-control disposition punctuated by episodic volatility. Response latency and
                    lexical hedging indicate rehearsed concealment. Empathy indices register low; risk of escalation under
                    duress assessed as significant.
                  </Section>

                  <Section title="Behavior Notes">
                    Consistent avoidance of chronological anchoring. Micro-expressions inconsistent with stated affect
                    during segments 04 and 07. Subject stabilizes when steering the interview — a documented control
                    behavior.
                  </Section>

                  <Section title="Interview Summary">
                    147 questions across 3 sittings. Two material contradictions surfaced regarding the 1974 crossing.
                    Subject declined to elaborate on associate network beyond first-degree contacts.
                  </Section>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Section title="Known Associations">
                      <ul className="space-y-1.5">
                        {associates.map(([name, role, w]) => (
                          <li key={name} className="flex items-center justify-between border-b border-dashed border-paper-foreground/20 pb-1">
                            <span className="font-semibold">{name}</span>
                            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-70">
                              {role} · {w}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Section>

                    <Section title="Timeline">
                      <ul className="space-y-2">
                        {timeline.map(([date, note]) => (
                          <li key={date} className="flex gap-3">
                            <span className="shrink-0 font-bold tracking-wider">{date}</span>
                            <span className="opacity-80">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </Section>
                  </div>
                </div>
              </div>

              {/* footer seals */}
              <footer className="relative flex flex-wrap items-center justify-between gap-4 border-t-2 border-paper-foreground/25 px-6 py-5 md:px-10">
                <div className="flex items-center gap-4">
                  {["Analyst", "Reviewer"].map((s) => (
                    <div key={s} className="flex flex-col">
                      <span className="mb-1 h-8 w-28 border-b border-paper-foreground/40" />
                      <span className="text-[9px] uppercase tracking-widest opacity-60">{s} Signature</span>
                    </div>
                  ))}
                </div>
                <span className="grid size-14 place-items-center rounded-full border-2 border-classified/60 text-[7px] font-bold uppercase leading-tight text-classified">
                  Verified<br />Seal
                </span>
              </footer>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em]">
        <span className="h-px w-4 bg-paper-foreground/50" />
        {title}
      </h4>
      <div className="opacity-90">{children}</div>
    </div>
  )
}
