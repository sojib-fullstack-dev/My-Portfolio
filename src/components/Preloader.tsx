"use client"

import * as React from "react"

export function Preloader() {
  const [progress, setProgress] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const duration = reduceMotion ? 200 : 1300
    const start = performance.now()
    let finished = false

    const finish = () => {
      if (finished) return
      finished = true
      setProgress(100)
      setDone(true)
    }

    const tick = () => {
      const ratio = Math.min((performance.now() - start) / duration, 1)
      setProgress(Math.round((1 - Math.pow(1 - ratio, 3)) * 100))
      if (ratio >= 1) finish()
    }

    tick()
    const interval = window.setInterval(tick, 50)
    const hardStop = window.setTimeout(finish, duration + 600)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(hardStop)
    }
  }, [])

  React.useEffect(() => {
    if (!done) return
    const timer = window.setTimeout(() => setHidden(true), 600)
    return () => window.clearTimeout(timer)
  }, [done])

  React.useEffect(() => {
    if (hidden) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [hidden])

  if (hidden) return null

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7 bg-gradient-to-br from-[#f7fbf9] via-white to-emerald-50 transition-opacity duration-500 ease-out dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <p className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
          Sojib
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            .dev
          </span>
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
          Full-Stack Web Developer (MERN)
        </p>
      </div>

      <div className="w-60 sm:w-72">
        <div className="h-1.5 overflow-hidden rounded-full border border-white/80 bg-white/70 shadow-inner dark:border-white/10 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
          <span>Loading</span>
          <span className="tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
