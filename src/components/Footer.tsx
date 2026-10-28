"use client"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.34 7.84H1.98V21h3.36V7.84ZM3.66 1A1.95 1.95 0 1 0 3.66 4.9 1.95 1.95 0 0 0 3.66 1ZM21 13.34c0-3.98-2.12-5.83-4.95-5.83a4.78 4.78 0 0 0-4.34 2.38V7.84H8.35V21h3.36v-6.54c0-1.73.33-3.41 2.48-3.41 2.12 0 2.15 1.98 2.15 3.52V21H21v-7.66Z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.32c.98 0 1.95.13 2.87.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.08.79 2.17v3.03c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
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

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.25-8.29L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.38 4.05H6.54L17.8 19.84Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m18 15-6-6-6 6" />
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samiul-hasan-sojib/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/sojib-fullstack-dev", icon: GitHubIcon },
  { label: "Facebook", href: "https://www.facebook.com/sojib.fullstack.dev", icon: FacebookIcon },
  { label: "Twitter / X", href: "https://x.com/sojib_fullstack", icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/sojib.fullstack.dev/", icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com/@Coding_With_Sojib", icon: YouTubeIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-white via-white to-emerald-50/70 px-4 py-10 text-slate-600 sm:px-6 sm:py-12 lg:px-8 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20 dark:text-slate-300">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="max-w-md">
            <p className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Samiul Hasan Sojib<span className="text-emerald-600 dark:text-emerald-400">.</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Full-Stack Web Developer | MERN Stack
            </p>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
              Focused on building responsive, user-friendly web applications with modern technologies and 2+ years of experience in lead generation and data management.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:gap-x-12" aria-label="Social media links">
            {[socialLinks.slice(0, 3), socialLinks.slice(3)].map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-3">
                {column.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="group inline-flex items-center gap-2.5 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
                  >
                    <span className="inline-flex size-6 items-center justify-center text-slate-500 transition-colors group-hover:text-emerald-600 dark:text-slate-400 dark:group-hover:text-emerald-400">
                      <Icon className="size-4" />
                    </span>
                    <span>{label === "Twitter / X" ? "X" : label}</span>
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="relative mt-10 border-t border-slate-200 pt-5 text-center dark:border-slate-800">
          <p className="text-xs text-slate-500 sm:text-sm dark:text-slate-400">
            © {year} Samiul Hasan Sojib. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="mx-auto mt-5 inline-flex size-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-emerald-500 hover:bg-emerald-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:absolute sm:right-0 sm:top-5 sm:mt-0 dark:border-slate-700 dark:text-slate-300"
          >
            <ArrowUpIcon className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
