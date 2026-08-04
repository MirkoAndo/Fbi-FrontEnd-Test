"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  UserPlus,
  Fingerprint,
  MessagesSquare,
  BrainCircuit,
  Gauge,
  Network,
  FileStack,
  FileLock2,
} from "lucide-react"
import { SectionHeading } from "./section-heading"

const stages = [
  { icon: UserPlus, title: "Subject Intake", code: "S-01", note: "Case opened, identifiers logged." },
  { icon: Fingerprint, title: "Identity Verification", code: "S-02", note: "Biometric + record cross-match." },
  { icon: MessagesSquare, title: "Behavioral Interview", code: "S-03", note: "Adaptive questioning begins." },
  { icon: BrainCircuit, title: "Psychological Analysis", code: "S-04", note: "Trait model reconstructed." },
  { icon: Gauge, title: "Risk Assessment", code: "S-05", note: "Threat index computed." },
  { icon: Network, title: "Cross-reference Intel", code: "S-06", note: "Associations mapped." },
  { icon: FileStack, title: "Case Compilation", code: "S-07", note: "Evidence assembled." },
  { icon: FileLock2, title: "Final Classified Report", code: "S-08", note: "Dossier sealed & filed." },
]

export function Workflow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="workflow" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow="Operational Sequence"
          title="Investigation Workflow"
          description="Eight sequential stages carry a subject from intake to a sealed classified report. Each node advances only when the prior clears verification."
        />

        <div ref={ref} className="mt-16 overflow-x-auto pb-6">
          <div className="relative flex min-w-[900px] gap-0 lg:min-w-full">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-8 h-px bg-border">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 2.4, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
                className="h-full bg-gradient-to-r from-accent via-classified to-accent"
              />
            </div>

            {stages.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.22 }}
                className="relative flex flex-1 flex-col items-center px-2 text-center"
              >
                <div className="relative z-10 grid size-16 place-items-center rounded-full border border-accent/40 bg-card">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 + i * 0.22 }}
                    className="grid size-full place-items-center rounded-full"
                  >
                    <s.icon className="size-6 text-accent" />
                  </motion.span>
                  <span className="absolute -inset-1 animate-ping rounded-full border border-accent/20 [animation-duration:3s]" />
                </div>
                <span className="mt-4 font-mono text-[10px] tracking-widest text-classified">{s.code}</span>
                <h3 className="mt-1 font-display text-sm font-semibold uppercase leading-tight tracking-wide text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
