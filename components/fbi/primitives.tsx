"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ── Scroll reveal wrapper ── */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Animated number counter ── */
export function Counter({
  to,
  duration = 1.6,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let raf = 0
    const step = (t: number) => {
      if (start === null) start = t
      const p = Math.min((t - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(to * eased)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ── Circular progress ring ── */
export function ProgressRing({
  value,
  size = 120,
  stroke = 8,
  label,
  sublabel,
  color = "var(--accent)",
}: {
  value: number
  size?: number
  stroke?: number
  label?: string
  sublabel?: string
  color?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const radius = (size - stroke) / 2
  const circ = 2 * Math.PI * radius
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (inView) setProgress(value)
  }, [inView, value])

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="var(--border)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circ}
          strokeDashoffset={circ - (progress / 100) * circ}
          style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-bold text-foreground">
          <Counter to={value} suffix="%" />
        </span>
        {sublabel && <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{sublabel}</span>}
      </div>
      {label && (
        <span className="absolute -bottom-6 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      )}
    </div>
  )
}

/* ── Mouse-follow glow card ── */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const bg = useTransform(
    [mx, my],
    ([x, y]) => `radial-gradient(340px circle at ${x}px ${y}px, oklch(0.76 0.13 72 / 0.1), transparent 70%)`,
  )

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-md border border-border bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40",
        className,
      )}
    >
      <motion.div style={{ background: bg }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  )
}

/* ── Classified stamp ── */
export function Stamp({
  label = "CLASSIFIED",
  className,
  rotate = -8,
}: {
  label?: string
  className?: string
  rotate?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.8, rotate: rotate - 20 }}
      animate={inView ? { opacity: 1, scale: 1, rotate } : {}}
      transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
      className={cn(
        "inline-flex items-center justify-center border-[3px] border-classified px-4 py-1.5 font-display text-xl font-bold uppercase tracking-[0.2em] text-classified",
        "shadow-[0_0_0_2px_oklch(0.55_0.205_25/0.25)]",
        className,
      )}
      style={{ borderStyle: "double" }}
    >
      {label}
    </motion.div>
  )
}

/* ── Small mono label chip ── */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}
