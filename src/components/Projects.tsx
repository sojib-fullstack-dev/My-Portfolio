"use client"

import Image from "next/image"
import * as React from "react"
import { ChevronDown, ExternalLink, GitBranch, Layers3, X } from "lucide-react"

interface Project {
  name: string
  description: string
  tech: string[]
  github: string
  live: string
  imageName: string
}

const projects: Project[] = [
  {
    name: "Bazar Dor",
    description: "A Next.js web application built with TypeScript, authentication, MongoDB, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "React", "MongoDB"],
    github: "https://github.com/sojib-fullstack-dev/Bazar-Dor",
    live: "https://bazar-dor-web-bd.vercel.app/",
    imageName: "Bazar-Dor.jpeg",
  },
  {
    name: "Hero Apps",
    description: "A React and Next.js web application built with TypeScript and Tailwind CSS.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sojib-fullstack-dev/Hero-Apps",
    live: "https://hero-apps-web.vercel.app/",
    imageName: "Hero-Apps.jpeg",
  },
  {
    name: "Fit-Log",
    description: "A React and Next.js web application built with TypeScript and Tailwind CSS.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sojib-fullstack-dev/Fit-Log",
    live: "https://fit-log-pro.vercel.app/",
    imageName: "Fit-Log.jpeg",
  },
  {
    name: "Book Vibe",
    description: "A React and Next.js web application built with TypeScript and Tailwind CSS.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sojib-fullstack-dev/Book-Vibe",
    live: "https://bookvibe-web.vercel.app/",
    imageName: "Book-Vibe.jpeg",
  },
  {
    name: "Dev Stack",
    description: "A React web application built with TypeScript and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sojib-fullstack-dev/Dev-Stack",
    live: "https://webdev-stack.vercel.app/",
    imageName: "Dev-Stack.jpeg",
  },
  {
    name: "DEVCONF2026",
    description: "A static HTML and CSS website hosted on GitHub Pages.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/sojib-fullstack-dev/DEVCONF2026",
    live: "https://sojib-fullstack-dev.github.io/DEVCONF2026/",
    imageName: "DEVCONF2026.jpeg",
  },
  {
    name: "Demo Portfolio",
    description: "A static HTML and CSS portfolio website hosted on GitHub Pages.",
    tech: ["HTML5", "CSS3"],
    github: "https://github.com/sojib-fullstack-dev/demo-portfolio",
    live: "https://sojib-fullstack-dev.github.io/demo-portfolio/",
    imageName: "Demo-Portfolio.jpeg",
  },
]

function ProjectPreview({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = React.useState(false)

  if (imageFailed) {
    return (
      <div
        role="img"
        aria-label={`${project.name} project preview placeholder using ${project.tech.join(", ")}`}
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-6 text-center"
      >
        <div className="absolute -right-16 -top-16 size-44 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 size-48 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative max-w-xs">
          <div className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-emerald-300">
            <Layers3 className="size-5" aria-hidden="true" />
          </div>
          <p className="text-xl font-bold tracking-tight text-white">{project.name}</p>
          <p className="mt-2 text-xs font-medium text-slate-300">{project.tech.join(" · ")}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
      <Image
        src={`/assets/${project.imageName}`}
        alt={`${project.name} project screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        onError={() => setImageFailed(true)}
      />
    </div>
  )
}

export function Projects() {
  const [showMore, setShowMore] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)

  React.useEffect(() => {
    if (!selectedProject) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [selectedProject])

  const visibleProjects = showMore ? projects : projects.slice(0, 4)

  return (
    <section
      id="projects"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:bg-slate-950"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Portfolio
          </p>
          <h2 id="projects-heading" className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Selected web projects and experiments with live demos and source code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700/70"
            >
              <ProjectPreview project={project} />

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-bold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                  >
                    <GitBranch className="size-4" aria-hidden="true" />
                    GitHub
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="col-span-2 inline-flex h-10 items-center justify-center rounded-lg border border-emerald-600 px-3 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/40"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 shadow-sm transition-all hover:border-emerald-600 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
              aria-expanded={showMore}
            >
              Show More
              <ChevronDown className="size-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
              aria-label="Close project details"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="border-b border-slate-100 p-6 pr-16 sm:p-7 dark:border-slate-800">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">Project Details</p>
              <h3 id="project-modal-title" className="mt-2 text-2xl font-extrabold text-slate-950 dark:text-white">
                {selectedProject.name}
              </h3>
            </div>

            <div className="grid gap-6 p-6 sm:p-7">
              <section aria-labelledby="overview-heading">
                <h4 id="overview-heading" className="text-sm font-bold text-slate-950 dark:text-white">Overview</h4>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{selectedProject.description}</p>
              </section>

              <section aria-labelledby="stack-heading">
                <h4 id="stack-heading" className="text-sm font-bold text-slate-950 dark:text-white">Tech Stack</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <li key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="features-heading">
                <h4 id="features-heading" className="text-sm font-bold text-slate-950 dark:text-white">Features</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Feature details are not currently documented.</p>
              </section>

              <section aria-labelledby="improvements-heading">
                <h4 id="improvements-heading" className="text-sm font-bold text-slate-950 dark:text-white">Potential Improvements</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Project-specific improvement details are not currently documented.</p>
              </section>

              <section className="grid gap-3 border-t border-slate-100 pt-6 sm:grid-cols-2 dark:border-slate-800" aria-label="Project links">
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white transition-colors hover:bg-emerald-700">
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Live URL
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-bold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                  <GitBranch className="size-4" aria-hidden="true" />
                  GitHub URL
                </a>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
