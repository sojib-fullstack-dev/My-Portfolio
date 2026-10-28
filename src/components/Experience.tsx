import {
  BriefcaseBusiness,
  Database,
  ExternalLink,
  Mail,
  Search,
  Table2,
  Target,
} from "lucide-react"

const expertise = [
  { label: "B2B Lead Generation", icon: Target },
  { label: "LinkedIn Prospecting", icon: Search },
  { label: "Web & Company Research", icon: Search },
  { label: "Email Finding", icon: Mail },
  { label: "Lead Qualification", icon: BriefcaseBusiness },
  { label: "Data Entry & Data Management", icon: Database },
  { label: "Microsoft Excel", icon: Table2 },
  { label: "Google Sheets", icon: Table2 },
  { label: "RocketReach", icon: Table2 } ,                        
  { label: "Apollo.io", icon: Table2 } ,                        
                         
]

const projects = [
  {
    title: "Chiropractor 1000 contact lead list in Florida",
    description: "A structured prospect research and lead data project demonstrating organized contact discovery, qualification, and data management.",
    skills: [
  "B2B Lead Generation",
  "LinkedIn Prospecting",
  "Email Finding",
  "Web Research",
  "Data Management"
],
    href: "https://docs.google.com/spreadsheets/d/1fUU020uhrPCuyfqxyTJSW4aIzNL7LRxloVWnXJ2TUO4/edit?gid=0#gid=0",
  },
  {
    title: "1000 USA SaaS  Contact Lead List",
    description: "A focused prospect database project covering lead collection, verification, and clean data organization for outreach workflows.",
    skills: [
  "B2B Lead Generation",
  "LinkedIn Prospecting",
  "Email Finding",
  "Web Research",
  "Data Management"
],
    href: "https://docs.google.com/spreadsheets/d/182kuXG8yDH51WKHIpSXVpDVKiCjP_4M55c1WIzR5BFs/edit?gid=0#gid=0",
  },
  {
    title: "USA Dental 1000 Contact Lead List",
    description: "A lead qualification and research project presenting prospect details in an organized spreadsheet for efficient review and use.",
    skills: [
  "B2B Lead Generation",
  "LinkedIn Prospecting",
  "Email Finding",
  "Web Research",
  "Data Management"
],
    href: "https://docs.google.com/spreadsheets/d/1Osvw0DoahPO8A6YPljQ359qDbqzHNiRImtc4bwpM21w/edit?gid=0#gid=0",
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:bg-slate-950"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
          >
            Lead Generation &amp; Data Management
          </h2>
        </div>

        <article className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 p-6 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.35)] sm:p-8 lg:p-10 dark:border-emerald-900/60 dark:from-slate-900 dark:to-emerald-950/20">
          <div className="absolute -right-20 -top-20 size-48 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-800/10" />

          <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <BriefcaseBusiness className="size-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Professional Experience
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                2+ Years of Experience
              </h3>
              <p className="mt-3 font-medium text-slate-600 dark:text-slate-300">
                Lead Generation &amp; Data Management
              </p>
            </div>

            <div>
              <p className="max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                Experienced in building reliable prospect lists and maintaining
                organized data for B2B outreach. Skilled at researching potential
                leads, finding decision-maker contact information, qualifying prospects,
                and delivering accurate, spreadsheet-ready records.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Professional skills">
                {expertise.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    <Icon className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="relative mt-6 overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/70 p-6 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.35)] sm:p-8 lg:p-10 dark:border-emerald-900/60 dark:from-slate-900 dark:to-emerald-950/20">
          <div className="absolute -right-20 -top-20 size-48 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-800/10" />

          <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 text-xl" aria-hidden="true">
                💻
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Personal Projects
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                10+ Projects Completed
              </h3>
              <p className="mt-3 font-medium text-slate-600 dark:text-slate-300">
                Full Stack Web Development
              </p>
            </div>

            <div>
              <p className="max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                Built 10+ real-world full-stack web applications using modern technologies including React, Next.js, Node.js, MongoDB, TypeScript, and Tailwind CSS. Focused on authentication, REST APIs, responsive design, and AI-assisted development.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Full stack development skills">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "Tailwind CSS",
                  "REST APIs",
                  "Better Auth",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-emerald-100 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#projects"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-emerald-600 px-4 text-sm font-bold text-emerald-700 transition-colors duration-200 hover:bg-emerald-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-emerald-400 dark:hover:text-white"
              >
                View Projects
              </a>
            </div>
          </div>
        </article>

        <div className="mt-14">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
             
              <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                Lead Generation Projects
              </h3>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700/70 dark:hover:shadow-black/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <Table2 className="size-5" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold text-slate-300 dark:text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-950 dark:text-white">
                  {project.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} in Google Sheets`}
                  className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-emerald-600 px-4 text-sm font-bold text-emerald-700 transition-colors duration-200 hover:bg-emerald-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-emerald-400 dark:hover:text-white"
                >
                  View Project
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
