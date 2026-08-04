import type { ReactNode } from "react"
import { Reveal } from "./primitives"
import { cn } from "@/lib/utils"

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          {index && <span className="font-mono text-xs text-accent">{index}</span>}
          <span className="h-px w-8 bg-accent/50" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className={cn("mt-4 text-sm leading-relaxed text-muted-foreground md:text-base", align === "center" && "mx-auto")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
