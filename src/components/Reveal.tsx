"use client"

import * as React from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
}

export function Reveal({ children, className = "" }: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    // No observer support or user prefers reduced motion → show immediately
    // (reduced-motion is also handled by CSS, this is a belt-and-suspenders)
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            observer.disconnect()
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  )
}
