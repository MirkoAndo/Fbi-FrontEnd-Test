"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Fingerprint } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Overview", href: "#about" },
  { label: "Workflow", href: "#workflow" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Operations", href: "#dashboard" },
  { label: "Dossier", href: "#dossier" },
  { label: "FAQ", href: "#faq" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center border border-accent/50 bg-accent/10 text-accent">
            <Fingerprint className="size-5" />
          </span>
          <span className="flex flex-col leading-none">

            <span className="font-display text-lg font-bold tracking-[0.15em] text-foreground">FBI-AI</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">Bureau · Intelligence</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-accent">
            <span className="size-2 animate-blink rounded-full bg-accent" /> Secure Line
          </span>
          <a
            href="#cta"
            className="border border-classified/60 bg-classified/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground text-classified transition-colors hover:bg-classified hover:text-primary-foreground"
          >
            Open Investigation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center border border-border text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

<span className="mt-4 block text-center font-display text-lg font-bold uppercase leading-[1.2] tracking-tight text-foreground sm:text-xl md:text-2xl xl:text-3xl">
  Mirko Andò<br />Complete Landing Page Test
</span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/50 py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-3 border border-classified/60 bg-classified/10 py-3 text-center text-xs uppercase tracking-[0.2em] text-classified"
              >
                Open Investigation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
