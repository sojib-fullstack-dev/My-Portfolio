"use client"

import Image from "next/image"
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Code2,
  Database,
  FileText,
  SearchCheck,
  Sparkles,
  Workflow,
} from "lucide-react"
import * as React from "react"

const titles = [
  "Full-Stack Web Developer",
  "MERN Stack Developer",
  "Lead Generation Specialist",
]

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.32c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.08.79 2.17v3.03c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.34 7.84H1.98V21h3.36V7.84ZM3.66 1A1.95 1.95 0 1 0 3.66 4.9 1.95 1.95 0 0 0 3.66 1ZM21 13.34c0-3.98-2.12-5.83-4.95-5.83a4.78 4.78 0 0 0-4.34 2.38V7.84H8.35V21h3.36v-6.54c0-1.73.33-3.41 2.48-3.41 2.12 0 2.15 1.98 2.15 3.52V21H21v-7.66Z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.96H15.8c-1.49 0-1.95.93-1.95 1.88v2.28h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.39.53A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.89.53 9.39.53 9.39.53s7.5 0 9.39-.53a3 3 0 0 0 2.11-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  )
}


const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sojib-fullstack-dev",
    icon: GitHubIcon,
    hoverClass: "hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-slate-900/20 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-950",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samiul-hasan-sojib/",
    icon: LinkedInIcon,
    hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-[#0A66C2]/25",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sojib.fullstack.dev",
    icon: FacebookIcon,
    hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-[#1877F2]/25",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Coding_With_Sojib",
    icon: YouTubeIcon,
    hoverClass: "hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:shadow-[#FF0000]/25",
  },
]

const showcaseCards = [
  {
    eyebrow: "01 / Frontend",
    title: "Interfaces with intention",
    text: "I build responsive React and Next.js experiences that feel clear, fast, and natural to use.",
    icon: Code2,
    accent: "text-emerald-600 dark:text-emerald-400",
    stack: "React · Next.js · Tailwind",
  },
  {
    eyebrow: "02 / Full stack",
    title: "Frontend meets backend",
    text: "I connect polished interfaces to practical server logic, APIs, and real product workflows.",
    icon: Workflow,
    accent: "text-sky-600 dark:text-sky-400",
    stack: "TypeScript · Node.js · Express",
  },
  {
    eyebrow: "03 / Backend",
    title: "APIs built for the product",
    text: "I shape REST APIs around the way people use an app, keeping features connected and maintainable.",
    icon: SearchCheck,
    accent: "text-violet-600 dark:text-violet-400",
    stack: "REST API · Express · Node.js",
  },
  {
    eyebrow: "04 / Data",
    title: "Data that fits the app",
    text: "I use MongoDB to structure application data around real features, relationships, and user needs.",
    icon: Database,
    accent: "text-amber-600 dark:text-amber-400",
    stack: "MongoDB · Mongoose · Models",
  },
  {
    eyebrow: "05 / Product details",
    title: "The details make it feel right",
    text: "Thoughtful responsive layouts, useful feedback, and smooth interactions turn features into a product.",
    icon: Sparkles,
    accent: "text-cyan-600 dark:text-cyan-400",
    stack: "Responsive UI · UX · Polish",
  },
  {
    eyebrow: "06 / Shipping",
    title: "From local build to live",
    text: "I take projects through iteration and deployment, then keep improving what real users experience.",
    icon: ArrowUpRight,
    accent: "text-rose-600 dark:text-rose-400",
    stack: "Git · Vercel · Iteration",
  },
]

export function PortfolioShowcase() {
  return (
    <section
      id="showcase"
      className="overflow-hidden border-y border-slate-200/60 bg-white/45 py-14 dark:border-white/10 dark:bg-slate-950/20 sm:py-16"
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto mb-6 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
          From idea to deployment
        </p>
        <h2
          id="showcase-heading"
          className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl dark:text-white"
        >
          Full-stack craft, built with purpose
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          A closer look at how I turn modern web technologies into useful, production-ready experiences.
        </p>
      </div>

      <div className="showcase-marquee relative" aria-label="Programming and product development highlights">
        <div className="showcase-track flex w-max">
          {[false, true].map((isDuplicate) => (
            <div
              key={isDuplicate ? "duplicate" : "original"}
              className="showcase-card-group flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
              aria-hidden={isDuplicate || undefined}
            >
              {showcaseCards.map(({ eyebrow, title, text, icon: Icon, accent, stack }) => (
                <article
                  key={title}
                  className="group relative isolate w-[min(78vw,310px)] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/10 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-emerald-700"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 -z-10 size-28 rounded-full bg-emerald-200/30 blur-2xl transition-colors group-hover:bg-emerald-300/50 dark:bg-emerald-900/20 dark:group-hover:bg-emerald-800/40" />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-slate-100 ring-1 ring-slate-200/70 dark:bg-slate-800 dark:ring-slate-700">
                      <Icon className={`size-5 ${accent}`} aria-hidden="true" />
                    </span>
                    <span className="pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                      {eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                  <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] font-semibold tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    {stack}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Hero() {
  const [titleIndex, setTitleIndex] = React.useState(0)
  const [displayedTitle, setDisplayedTitle] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState<Date | null>(null)

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => setCurrentTime(new Date()))
    const timer = window.setInterval(() => setCurrentTime(new Date()), 1000)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearInterval(timer)
    }
  }, [])

  React.useEffect(() => {
    const currentTitle = titles[titleIndex]

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reduceMotionTimeout = window.setTimeout(() => {
        setDisplayedTitle(currentTitle)
        setIsDeleting(false)
      }, 0)
      return () => window.clearTimeout(reduceMotionTimeout)
    }

    let delay = isDeleting ? 45 : 75

    if (!isDeleting && displayedTitle === currentTitle) {
      delay = 1800
    } else if (isDeleting && displayedTitle === "") {
      delay = 280
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayedTitle === currentTitle) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && displayedTitle === "") {
        setIsDeleting(false)
        setTitleIndex((index) => (index + 1) % titles.length)
        return
      }

      setDisplayedTitle((value) =>
        isDeleting ? value.slice(0, -1) : currentTitle.slice(0, value.length + 1)
      )
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [displayedTitle, isDeleting, titleIndex])

  const dateLabel = currentTime
    ? new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(currentTime)
    : "Loading date"
  const dayLabel = currentTime
    ? new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currentTime)
    : "Loading day"
  const timeLabel = currentTime
    ? new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" }).format(currentTime)
    : "--:--:--"

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-transparent px-4 py-16 text-slate-950 sm:px-6 sm:py-20 lg:px-8 dark:text-white"
      aria-labelledby="hero-name"
    >
      <div className="absolute -top-32 right-[4%] -z-10 size-[30rem] rounded-full bg-emerald-200/45 blur-[120px] dark:bg-emerald-500/15" />
      <div className="absolute -bottom-48 left-[15%] -z-10 size-[32rem] rounded-full bg-teal-200/35 blur-[130px] dark:bg-teal-500/10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-2xl animate-[fade-in_700ms_ease-out] motion-reduce:animate-none">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 dark:border-emerald-300/20 dark:bg-white/[0.06] dark:text-emerald-200 sm:text-sm">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            Hello, I&apos;m
          </p>

          <h1
            id="hero-name"
            className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Samiul Hasan
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">Sojib</span>
          </h1>

          <div className="mt-5 flex min-h-8 items-center text-lg font-semibold text-slate-700 sm:min-h-10 sm:text-2xl dark:text-slate-200">
            <span>{displayedTitle}</span>
            <span
              className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-emerald-300 align-middle motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span className="sr-only">Full-Stack Web Developer</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            I&apos;m a Full-Stack Web Developer (MERN) focused on building responsive,
            user-friendly web applications with modern technologies. I also
            have 2+ years of experience in lead generation and data management.
          </p>

          <div
            className="mt-7 flex w-fit max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-slate-200 bg-white/75 px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-sm sm:text-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300"
            aria-label={`Current date and time: ${dayLabel}, ${dateLabel}, ${timeLabel}`}
            role="timer"
          >
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
              <span>{dayLabel}</span>
              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">•</span>
              <span>{dateLabel}</span>
            </span>
            <span className="flex items-center gap-1.5 tabular-nums">
              <Clock3 className="size-4 text-emerald-700 dark:text-emerald-300" aria-hidden="true" />
              <span suppressHydrationWarning>{timeLabel}</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2" aria-label="Social profiles">
              {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} profile`}
                  title={label}
                  className={`inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 ${hoverClass}`}
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-bold text-slate-800 transition-colors hover:border-emerald-500 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-white/20 dark:text-white dark:hover:border-emerald-300 dark:hover:bg-white/10 dark:focus-visible:outline-emerald-300"
            >
              Explore projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="/assect/Samiul_Hasan_Sojib_Resume_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300 dark:focus-visible:outline-emerald-300 sm:px-6"
            >
              <FileText className="size-4" aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-[82%] max-w-[420px] lg:max-w-[440px]">
          <div className="absolute -inset-7 -z-10 rounded-full bg-gradient-to-br from-emerald-300/55 via-teal-200/25 to-transparent blur-2xl dark:from-emerald-400/30 dark:via-teal-300/10" />
          <div className="group relative aspect-square w-full animate-[profile-float_5s_ease-in-out_infinite] overflow-hidden rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 shadow-2xl shadow-emerald-950/15 ring-1 ring-emerald-200/70 motion-reduce:animate-none dark:from-emerald-950 dark:to-teal-950 dark:shadow-black/30 dark:ring-emerald-400/20">
            <Image
              src="/assect/profile.png"
              alt="Samiul Hasan Sojib"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="scale-[1.08] object-cover object-center transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.12]"
            />
          </div>
          <div className="absolute -bottom-5 -left-7 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90 sm:-left-12">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Building with</p>
            <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">React · Next.js · Node.js</p>
          </div>
        </div>
      </div>
    </section>
  )
}
