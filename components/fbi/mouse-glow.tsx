"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function MouseGlow() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 20 })
  const sy = useSpring(y, { stiffness: 120, damping: 20 })
  const bg = useTransform(
    [sx, sy],
    ([mx, my]) => `radial-gradient(500px circle at ${mx}px ${my}px, oklch(0.76 0.13 72 / 0.06), transparent 70%)`,
  )

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [x, y])

  return <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-30 hidden md:block" style={{ background: bg }} />
}
