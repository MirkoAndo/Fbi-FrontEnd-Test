"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, ChevronDown, Radar } from "lucide-react"
import { Stamp, Tag } from "./primitives"

const meta = [
  ["FILE NO.", "FBI-AI-0001-Δ"],
  ["CLEARANCE", "LEVEL VII"],
  ["STATUS", "ACTIVE"],
  ["ORIGIN", "BUREAU ARCHIVE"],
]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      {/* radar pulse decoration */}
      <div className="pointer-events-none absolute right-6 top-32 hidden size-72 lg:block xl:right-20">
        <div className="absolute inset-0 rounded-full border border-accent/20" />
        <div className="absolute inset-6 rounded-full border border-accent/15" />
        <div className="absolute inset-12 rounded-full border border-accent/10" />
        <div className="absolute inset-0 origin-center animate-radar-sweep bg-[conic-gradient(from_0deg,oklch(0.76_0.13_72/0.22),transparent_35%)] rounded-full" />
        <Radar className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-accent/50" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Tag className="border-classified/40 text-classified">
              <span className="size-1.5 animate-blink rounded-full bg-classified" /> Top Secret
            </Tag>
            <Tag>Dossier // Declassified Interface</Tag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Federal Bureau
            <br />
            <span className="text-accent">Investigation</span> AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Behavioral Intelligence <span className="text-accent">•</span> Psychological Profiling{" "}
            <span className="text-accent">•</span> Investigative Documentation. An autonomous agent that assembles
            authentic classified dossiers from any subject.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 bg-classified px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:brightness-110"
            >
              Open Investigation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 border border-border bg-secondary/40 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
            >
              <FileText className="size-4" />
              View Documentation
            </a>
          </motion.div>

          {/* meta strip */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4"
          >
            {meta.map(([k, v]) => (
              <div key={k} className="bg-card/70 px-4 py-3 backdrop-blur-sm">
                <dt className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-display text-sm font-semibold text-foreground">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* dossier folder opening effect */}
        <motion.div
          initial={{ opacity: 0, rotateX: 40, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden border border-border bg-paper/95 p-6 text-paper-foreground shadow-2xl">
            <div className="bg-scanlines pointer-events-none absolute inset-0 opacity-[0.08]" />
            <div className="flex items-center justify-between border-b-2 border-paper-foreground/20 pb-3">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em]">Case Dossier</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">No. Δ-0001</span>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="relative grid h-24 w-20 shrink-0 place-items-center border border-paper-foreground/30 bg-paper-foreground/5">
                <div className="absolute inset-0 bg-grain opacity-30" />
                <span className="text-[9px] uppercase tracking-widest opacity-50">Photo</span>
              </div>
              <div className="flex-1 space-y-2">
                {[
                  ["Subject", "REDACTED"],
                  ["Alias", "████████"],
                  ["Risk", "ELEVATED"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-dashed border-paper-foreground/20 pb-1 text-[11px]">
                    <span className="uppercase tracking-wider opacity-60">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-1.5">
              {["████ ██████ ███ ██████████ ██", "██████████ ███ ████ ██████", "███ ██████████ ████ ███"].map(
                (line, i) => (
                  <div key={i} className="h-2 rounded-sm bg-paper-foreground/15" style={{ width: `${90 - i * 12}%` }} />
                ),
              )}
            </div>

            <div className="mt-5 flex items-center justify-between border-t-2 border-paper-foreground/20 pt-3">
              <span className="text-[9px] uppercase tracking-widest opacity-50">Bureau Archive</span>
              <span className="grid size-10 place-items-center rounded-full border border-paper-foreground/30 text-[7px] uppercase leading-tight opacity-60">
                Seal
              </span>
            </div>

            <div className="absolute -right-2 top-8">
              <Stamp label="Classified" rotate={9} className="text-sm" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll to declassify</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
