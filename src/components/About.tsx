import { ArrowUpRight, Code2, Database, Layers3 } from "lucide-react"

const highlights = [
  {
    value: "Full-Stack",
    label: "Developer Toolkit",
    detail: "React · Next.js · Node.js · MongoDB",
    icon: Code2,
  },
  {
    value: "15+",
    label: "Completed Projects",
    detail: "Modern, responsive web applications",
    icon: Layers3,
  },
  {
    value: "2+ Years",
    label: "Lead Generation Experience",
    detail: "RS ZONE IT · Shakil Lead Agency",
    icon: Database,
  },
]

export function About() {
  return (
    <section
      id="about"
      className="bg-transparent px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
            About Me
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white"
          >
            Full-stack developer building for the web
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            A little about what I build, how I work, and the experience I bring to a team.
          </p>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <article className="glass relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-emerald-200/35 blur-3xl dark:bg-emerald-800/10" />

            <div className="relative">
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <Code2 className="size-6" aria-hidden="true" />
              </div>

              <p className="animate-[fade-in_700ms_ease-out] text-lg leading-8 text-slate-600 motion-reduce:animate-none sm:text-xl sm:leading-9 dark:text-slate-300">
                I&apos;m a <strong className="font-bold text-slate-950 dark:text-white">Full-Stack Web Developer</strong> focused on building modern, responsive applications. I enjoy taking an idea from a thoughtful interface to a working product with dependable backend features.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Professional specialties">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:text-emerald-700 dark:border-emerald-900/60 dark:bg-slate-950 dark:text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-7 space-y-5 border-t border-slate-200/80 pt-7 dark:border-slate-800">
                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:text-emerald-400 dark:ring-slate-700">
                    <Code2 className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">Modern Web Development</h3>
                    <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">
                      I build full-stack applications with Next.js, React, TypeScript, Node.js, Express, and MongoDB, connecting clean interfaces to useful backend features and APIs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:text-emerald-400 dark:ring-slate-700">
                    <Database className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">Lead Generation Experience</h3>
                    <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">
                      Alongside development, I bring 2+ years of experience at <strong className="font-semibold text-slate-800 dark:text-slate-200">RS ZONE IT</strong> and <strong className="font-semibold text-slate-800 dark:text-slate-200">Shakil Lead Agency</strong>, with a focus on research, accurate data, and organized prospect lists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map(({ value, label, detail, icon: Icon }) => (
              <article
                key={label}
                className="glass group flex min-h-44 items-start gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/10 sm:flex-col lg:min-h-0 lg:flex-row lg:items-center dark:hover:border-emerald-700/70"
              >
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <ArrowUpRight className="mt-1 size-4 text-slate-300 transition-colors group-hover:text-emerald-600 dark:text-slate-600 dark:group-hover:text-emerald-400" aria-hidden="true" />
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">{label}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
