"use client"

import { useEffect, useRef } from "react"

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let raf = 0

    const count = Math.min(70, Math.floor(width / 22))
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.2,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.4 + 0.05,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(214, 200, 160, ${p.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* deep navy radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,oklch(0.28_0.05_260/0.7),transparent_45%),radial-gradient(circle_at_85%_80%,oklch(0.24_0.04_20/0.4),transparent_50%)]" />
      {/* blueprint grid */}
      <div className="bg-blueprint absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      {/* floating dust particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />
      {/* moving light sweep */}
      <div className="absolute inset-y-0 left-0 w-1/3 animate-light-sweep bg-gradient-to-r from-transparent via-accent/[0.04] to-transparent" />
      {/* scanlines */}
      <div className="bg-scanlines absolute inset-0 opacity-[0.5] mix-blend-overlay" />
      {/* paper grain */}
      <div className="bg-grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,oklch(0.08_0.01_260/0.85))]" />
    </div>
  )
}
