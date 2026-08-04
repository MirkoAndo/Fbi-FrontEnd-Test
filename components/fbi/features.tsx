"use client"

import {
  Infinity as InfinityIcon,
  Waypoints,
  ScrollText,
  GitCompareArrows,
  TrendingUp,
  Users,
  FileOutput,
  FileCode,
  FileDown,
  Languages,
  Moon,
  WifiOff,
} from "lucide-react"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./primitives"

const features = [
  { icon: InfinityIcon, title: "Unlimited Interviews", desc: "No cap on interrogation length or sessions." },
  { icon: Waypoints, title: "Adaptive Question Engine", desc: "Questions reroute based on live responses." },
  { icon: ScrollText, title: "Historical Documentation Style", desc: "Authentic archival typesetting." },
  { icon: GitCompareArrows, title: "Evidence Correlation", desc: "Links artifacts across the case file." },
  { icon: TrendingUp, title: "Behavior Prediction", desc: "Forecasts likely subject responses." },
  { icon: Users, title: "Relationship Analysis", desc: "Weighted network of known associates." },
  { icon: FileOutput, title: "Automatic Report Generation", desc: "Sealed dossier in one command." },
  { icon: FileCode, title: "Markdown Export", desc: "Portable, version-controlled output." },
  { icon: FileDown, title: "PDF Export", desc: "Print-ready classified documents." },
  { icon: Languages, title: "Multi-language", desc: "Interviews across 40+ languages." },
  { icon: Moon, title: "Dark Mode", desc: "Optimized for low-light operations." },
  { icon: WifiOff, title: "Offline Support", desc: "Field-ready without connectivity." },
]

export function Features() {
  return (
    <section id="features" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="Agent Loadout"
          title="Standard-Issue Features"
          description="Everything the agent carries into the field — from adaptive questioning to field-ready export formats."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <div className="group h-full bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-sm border border-border bg-secondary/50 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/50">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                    {f.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
