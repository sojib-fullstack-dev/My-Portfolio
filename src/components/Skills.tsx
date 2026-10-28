import {
  Bot,
  Braces,
  Code2,
  Component,
  CreditCard,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
} from "lucide-react"

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces & user experiences",
    icon: Component,
    accent: "text-sky-600 dark:text-sky-400",
    accentBg: "bg-sky-50 dark:bg-sky-950/40",
    skills: [
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Braces },
      { name: "JavaScript (ES6+)", icon: FileCode2 },
      { name: "TypeScript", icon: FileCode2 },
      { name: "React.js", icon: Component },
      { name: "Next.js", icon: Globe2 },
      { name: "Tailwind CSS", icon: Sparkles },
    ],
  },
  {
    title: "Backend",
    description: "Servers, APIs & access control",
    icon: Server,
    accent: "text-emerald-600 dark:text-emerald-400",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/40",
    skills: [
      { name: "Node.js", icon: SquareTerminal },
      { name: "Express.js", icon: Network },
      { name: "REST APIs", icon: Globe2 },
      { name: "Better Auth", icon: ShieldCheck },
      { name: "Role-Based Access Control (RBAC)", icon: ShieldCheck },
    ],
  },
  {
    title: "Database & Payments",
    description: "Data storage and transactions",
    icon: Database,
    accent: "text-violet-600 dark:text-violet-400",
    accentBg: "bg-violet-50 dark:bg-violet-950/40",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Mongoose", icon: Database },
      { name: "Stripe", icon: CreditCard },
      { name: "SSLCommerz", icon: CreditCard },
    ],
  },
  {
    title: "Tools",
    description: "Version control & AI workflows",
    icon: GitBranch,
    accent: "text-amber-600 dark:text-amber-400",
    accentBg: "bg-amber-50 dark:bg-amber-950/40",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "AI Integration", icon: Bot },
      { name: "AI-Assisted Coding", icon: Sparkles },
    ],
  },
]

const leadGenerationSkills = [
  "B2B Lead Generation",
  "LinkedIn Prospecting",
  "Prospect List Building",
  "Contact List Building",
  "Email List Building",
  "Web Research",
  "Market Research",
  "Company Research",
  "Contact Research",
  "Email Finding",
  "Lead Qualification",
  "Data Entry",
  "Data Management",
  "Data Mining",
  "CRM Data Entry",
  "Microsoft Excel",
  "Google Sheets",
]

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:bg-slate-950"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Technical Skills
          </p>
          <h2
            id="skills-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
          >
            Technologies I Work With
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            A practical toolkit for building modern web applications and supporting reliable data workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon
            return (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-5 flex items-start gap-3">
                  <div className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${group.accentBg} ${group.accent}`}>
                    <GroupIcon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">{group.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{group.description}</p>
                  </div>
                </div>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {group.skills.map(({ name, icon: SkillIcon }) => (
                    <li
                      key={name}
                      className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-200 hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-950"
                    >
                      <span className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/70 ${group.accent} dark:bg-slate-900 dark:ring-slate-700`}>
                        <SkillIcon className="size-4" aria-hidden="true" />
                      </span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm dark:border-emerald-900/60 dark:bg-slate-900">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:px-6 [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Network className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-left text-lg font-bold text-slate-950 dark:text-white">Lead Generation</h3>
                  <p className="mt-0.5 text-left text-sm text-slate-500 dark:text-slate-400">
                    Prospect research, list building &amp; data workflows
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600 transition-colors group-open:bg-emerald-600 group-open:text-white dark:border-slate-700 dark:text-slate-300">
                <span className="group-open:hidden">View 17 skills</span>
                <span className="hidden group-open:inline">Hide skills</span>
              </span>
            </summary>
            <div className="border-t border-slate-100 px-5 py-5 sm:px-6 dark:border-slate-800">
              <ul className="flex flex-wrap gap-2" aria-label="Lead generation skills">
                {leadGenerationSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-slate-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
