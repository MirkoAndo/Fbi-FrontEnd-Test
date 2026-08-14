"use client"

import { motion } from "framer-motion"
import { ArrowRight, Fingerprint } from "lucide-react"
import { Reveal, Stamp } from "./primitives"

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-border py-28 md:py-40">
      {/* spotlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.76_0.13_72/0.14),transparent_65%)]" />
        <div className="bg-scanlines absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <div className="flex justify-center">
            <Stamp label="Case Open" rotate={-6} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl">
            Every Investigation Begins
            <br />
            With <span className="text-accent">One Question.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Open a case file, brief the agent, and watch a classified dossier assemble itself — interview by interview,
            inference by inference.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <motion.a
            href="#top"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-10 inline-flex items-center gap-3 bg-classified px-9 py-4 font-display text-base font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:brightness-110"
          >
            <Fingerprint className="size-5" />
            Start Investigation
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}

const footerCols = [
  { title: "Documentation", links: ["Overview", "Field Manual", "API Reference", "Changelog"] },
  { title: "Bureau", links: ["GitHub", "License", "Privacy", "Contact"] },
  { title: "Operations", links: ["Status", "Security", "Compliance", "Support"] },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* ticker */}
      <div className="overflow-hidden border-b border-border bg-secondary/30 py-2.5">
        <div className="flex w-max animate-ticker whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, r) => (
            <span key={r} className="flex">
              {[
                "// Secure line established",
                "// Clearance level VII",
                "// Archive synced",
                "// Do not distribute",
                "// Case file active",
                "// Encryption nominal",
              ].map((t) => (
                <span key={t} className="mx-6 flex items-center gap-2">
                  <span className="size-1 rounded-full bg-accent" />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center border border-accent/50 bg-accent/10 text-accent">
              <Fingerprint className="size-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-[0.15em] text-foreground">FBI-AI</span>
          </div>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
            An autonomous investigative agent for behavioral intelligence, psychological profiling, and archive-grade
            documentation.
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-classified">
            Fictional product · Not affiliated with any agency
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground">{col.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Mirko Andò</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 animate-blink rounded-full bg-accent" />
            System v2.7.0 · Build Δ-0001
          </span>
        </div>
      </div>
    </footer>
  )
}
