"use client"

import {
  ArrowUpRight,
  Code2,
  Database,
  SearchCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

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
      className="overflow-hidden border-y border-white/60 bg-gradient-to-r from-emerald-50/70 via-white/40 to-sky-50/70 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 dark:border-white/10 dark:from-emerald-950/25 dark:via-slate-950/10 dark:to-sky-950/25"
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
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
                    className="glass group relative isolate w-[min(78vw,310px)] shrink-0 overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/10 dark:hover:border-emerald-700"
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
      </div>
    </section>
  )
}
