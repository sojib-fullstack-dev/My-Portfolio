"use client"

import Image from "next/image"
import { Menu, Moon, Sun, X } from "lucide-react"
import * as React from "react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("#home")
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    const preferredTheme = savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"

    document.documentElement.classList.toggle("dark", preferredTheme === "dark")
    const frame = window.requestAnimationFrame(() => setTheme(preferredTheme))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    window.localStorage.setItem("theme", nextTheme)
  }

  React.useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(`#${visible.target.id}`)
        }
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-gradient-to-br from-white/95 via-white/95 to-emerald-50/80 backdrop-blur-md dark:border-slate-800 dark:from-slate-950/95 dark:via-slate-950/95 dark:to-emerald-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={() => {
            closeMenu()
            setActiveSection("#home")
          }}
          className="group inline-flex items-center text-lg font-bold tracking-tight text-slate-950 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-400"
          aria-label="Go to home section"
        >
          <span className="mr-2 inline-flex size-9 shrink-0 overflow-hidden rounded-full border-2 border-white bg-emerald-50 shadow-md ring-1 ring-emerald-200/70 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg group-hover:ring-emerald-300 motion-reduce:transform-none dark:border-slate-900 dark:bg-slate-800 dark:ring-slate-700">
            <Image
              src="/assets/profile.png"
              alt="Samiul Hasan Sojib"
              width={36}
              height={36}
              priority
              className="size-full object-cover"
            />
          </span>
          <span>Sojib<span className="text-emerald-600 dark:text-emerald-400">.dev</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveSection(href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:right-3 after:-bottom-[1px] after:left-3 after:h-0.5 after:origin-left after:rounded-full after:bg-emerald-600 after:transition-transform ${
                activeSection === href
                  ? "text-emerald-700 after:scale-x-100 dark:text-emerald-400"
                  : "text-slate-600 after:scale-x-0 hover:text-slate-950 hover:after:scale-x-100 dark:text-slate-300 dark:hover:text-white"
              }`}
              aria-current={activeSection === href ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#contact"
            onClick={() => setActiveSection("#contact")}
            className="inline-flex rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors duration-200 hover:bg-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:text-white"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? <Moon className="size-5" aria-hidden="true" /> : <Sun className="size-5" aria-hidden="true" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition-colors hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? <Moon className="size-5" aria-hidden="true" /> : <Sun className="size-5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-slate-800 transition-colors hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-slate-100 bg-gradient-to-br from-white via-white to-emerald-50/70 px-4 py-3 shadow-lg dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  closeMenu()
                  setActiveSection(href)
                }}
                className={`rounded-md border-l-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === href
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-white"
                }`}
                aria-current={activeSection === href ? "page" : undefined}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                closeMenu()
                setActiveSection("#contact")
              }}
              className="mt-2 rounded-md border border-emerald-600 px-4 py-2.5 text-center text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
