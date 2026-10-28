import { ArrowUpRight, Code2, Database, GraduationCap, Layers3 } from "lucide-react"

const highlights = [
  {
    value: "Full-Stack",
    label: "Developer Toolkit",
    detail: "React · Next.js · Node.js · MongoDB",
    icon: Code2,
  },
  {
    value: "2+ Years",
    label: "Lead Generation Experience",
    detail: "RS ZONE IT · Shakil Lead Agency",
    icon: Database,
  },
  {
    value: "10 +",
    label: "Completed Projects",
    detail: "Modern, responsive web applications",
    icon: Layers3,
  },
]

export function About() {
  return (
    <section
      id="about"
      className="bg-transparent px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            About Me
          </p>
          <h2
            id="about-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
          >
            Building useful digital experiences
          </h2>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-emerald-50/60 p-6 shadow-sm sm:p-8 lg:p-10 dark:border-slate-800 dark:from-slate-900 dark:to-emerald-950/20">
            <div className="absolute -right-16 -top-16 size-44 rounded-full bg-emerald-200/35 blur-3xl dark:bg-emerald-800/10" />

            <div className="relative">
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <Code2 className="size-6" aria-hidden="true" />
              </div>

              <p className="animate-[fade-in_700ms_ease-out] text-lg leading-8 text-slate-600 motion-reduce:animate-none sm:text-xl sm:leading-9 dark:text-slate-300">
                I&apos;m a <strong className="font-bold text-slate-950 dark:text-white">Full-Stack Web Developer and Lead Generation Specialist</strong>. I enjoy combining technical development with accurate data research, outreach, and business-focused problem solving.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Professional specialties">
                {["B2B Lead Generation", "LinkedIn Prospecting", "Email Finding", "Web Research", "Data Management"].map((skill) => (
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
                    <Database className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">Professional Lead Generation Experience</h3>
                    <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">
                      I work as a Lead Generation Specialist at <strong className="font-semibold text-slate-800 dark:text-slate-200">RS ZONE IT</strong> and <strong className="font-semibold text-slate-800 dark:text-slate-200">Shakil Lead Agency</strong>, building reliable prospect lists and maintaining organized, accurate business data.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:text-emerald-400 dark:ring-slate-700">
                    <GraduationCap className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">Modern Web Development</h3>
                    <p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">
                      I&apos;m interested in building modern, scalable web applications with Next.js, React, and TypeScript, while continuing to improve my full-stack development skills.
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
                className="group flex min-h-44 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/10 sm:flex-col lg:min-h-0 lg:flex-row lg:items-center dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700/70"
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
