"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Activity, Users, FileCheck2, Link2, Radio } from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal, ProgressRing, Counter } from "./primitives"

function Panel({
  title,
  status,
  children,
  className,
}: {
  title: string
  status?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-md border border-border bg-card/60 p-5 backdrop-blur-sm ${className ?? ""}`}>
      <div className="bg-scanlines pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="relative flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{title}</span>
        {status && (
          <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-accent">
            <span className="size-1.5 animate-blink rounded-full bg-accent" />
            {status}
          </span>
        )}
      </div>
      <div className="relative mt-4 flex-1">{children}</div>
    </div>
  )
}

/* live behavior line graph */
function BehaviorGraph() {
  // Deterministic seed so server and client render identically (avoids hydration mismatch)
  const [points, setPoints] = useState<number[]>(
    Array.from({ length: 24 }).map((_, i) => 45 + Math.sin(i / 2) * 20),
  )
  useEffect(() => {
    const id = setInterval(() => {
      setPoints((p) => [...p.slice(1), 35 + Math.random() * 45])
    }, 1400)
    return () => clearInterval(id)
  }, [])

  const w = 100
  const h = 46
  const max = 90
  const path = points
    .map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / max) * h}`)
    .join(" ")

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bg-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.76 0.13 72 / 0.35)" />
          <stop offset="100%" stopColor="oklch(0.76 0.13 72 / 0)" />
        </linearGradient>
      </defs>
      <polyline points={`0,${h} ${path} ${w},${h}`} fill="url(#bg-fill)" stroke="none" />
      <polyline points={path} fill="none" stroke="var(--accent)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

const bars = [
  { label: "Openness", v: 72 },
  { label: "Control", v: 58 },
  { label: "Volatility", v: 84 },
  { label: "Deception", v: 41 },
  { label: "Empathy", v: 29 },
]

const crossRefs = [
  ["INTERPOL", "3 MATCHES"],
  ["FIELD OFFICE", "SYNCED"],
  ["ARCHIVE 1974", "1 MATCH"],
  ["WATCHLIST", "PENDING"],
]

export function Dashboard() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setProgress((p) => (p >= 68 ? 68 : p + 1)), 40)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="dashboard" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Operations Center"
          title="Live AI Investigation Dashboard"
          description="A real-time view into an active case. Every panel reflects the agent's current assessment of the subject under review."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {/* Subject status */}
            <Panel title="Subject Status" status="Live" className="lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="relative grid size-14 place-items-center overflow-hidden rounded-sm border border-border bg-secondary/50">
                  <div className="bg-grain absolute inset-0 opacity-30" />
                  <Users className="size-6 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-foreground">SUBJECT-14</div>
                  <div className="text-[10px] uppercase tracking-widest text-classified">Under Review</div>
                </div>
              </div>
              <dl className="mt-4 space-y-2 text-[11px]">
                {[
                  ["Detained", "72:14:06"],
                  ["Clearance", "RESTRICTED"],
                  ["Case Agent", "AI-Δ"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-dashed border-border/60 pb-1.5">
                    <dt className="uppercase tracking-wider text-muted-foreground">{k}</dt>
                    <dd className="font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Panel>

            {/* Risk meter */}
            <Panel title="Risk Meter">
              <div className="flex flex-col items-center justify-center gap-1">
                <ProgressRing value={78} size={116} color="var(--classified)" sublabel="Threat" />
                <span className="mt-2 rounded-sm border border-classified/40 bg-classified/10 px-3 py-1 text-[10px] uppercase tracking-widest text-classified">
                  Tier IV · Elevated
                </span>
              </div>
            </Panel>

            {/* Behavior graph */}
            <Panel title="Behavior Graph" status="Streaming" className="lg:col-span-2">
              <BehaviorGraph />
              <div className="mt-3 flex justify-between text-[9px] uppercase tracking-widest text-muted-foreground">
                <span>t-24m</span>
                <span>Volatility index</span>
                <span>now</span>
              </div>
            </Panel>

            {/* Psych stability bars */}
            <Panel title="Psychological Stability" className="lg:col-span-2">
              <div className="space-y-3">
                {bars.map((b, i) => (
                  <div key={b.label}>
                    <div className="mb-1 flex justify-between text-[10px] uppercase tracking-widest">
                      <span className="text-muted-foreground">{b.label}</span>
                      <span className="text-foreground">{b.v}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className={b.v > 70 ? "h-full bg-classified" : "h-full bg-accent"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Investigation progress */}
            <Panel title="Investigation Progress" status="Active">
              <div className="flex items-center justify-center">
                <ProgressRing value={68} size={116} />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <Activity className="size-3 text-accent" /> Stage 06 of 08
              </div>
            </Panel>

            {/* Interview progress + counts */}
            <Panel title="Interview Progress">
              <div className="flex h-full flex-col justify-center gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-3xl font-bold text-foreground">
                      <Counter to={147} />
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Questions Asked</div>
                  </div>
                  <Radio className="size-8 text-accent/40" />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div className="h-full bg-accent" animate={{ width: `${progress}%` }} />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">{progress}% transcript coverage</span>
              </div>
            </Panel>

            {/* Evidence + cross refs */}
            <Panel title="Evidence Count">
              <div className="flex items-center gap-3">
                <FileCheck2 className="size-8 text-accent/50" />
                <div>
                  <div className="font-display text-4xl font-bold text-foreground">
                    <Counter to={312} />
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Items Logged</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-1.5 text-center text-[9px]">
                {["DOCS 128", "AUDIO 64", "PHOTO 120"].map((x) => (
                  <span key={x} className="rounded-sm border border-border bg-secondary/40 py-1.5 uppercase tracking-widest text-muted-foreground">
                    {x}
                  </span>
                ))}
              </div>
            </Panel>

            <Panel title="Cross References" className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-2">
                {crossRefs.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-sm border border-border bg-secondary/30 px-3 py-2">
                    <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <Link2 className="size-3 text-accent" />
                      {k}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
