import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react"

const contactItems = [
  {
    label: "Email",
    value: "samiulhasansojib069@gmail.com",
    href: "mailto:samiulhasansojib069@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "01858022790",
    href: "tel:01858022790",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "01858022790",
    href: "https://wa.me/8801858022790",
    icon: MessageCircle,
  },
]

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






const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samiul-hasan-sojib/", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/sojib-fullstack-dev", icon: GitHubIcon },
  { label: "Facebook", href: "https://www.facebook.com/sojib.fullstack.dev", icon: FacebookIcon },

]

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 dark:bg-slate-950"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Contact
          </p>
          <h2 id="contact-heading" className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Have a project, collaboration, or opportunity in mind? Let&apos;s connect.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700/70"
              aria-label={`${label}: ${value}`}
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950/50 dark:text-emerald-400 dark:group-hover:bg-emerald-600 dark:group-hover:text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</span>
                <span className="mt-1 block break-all text-sm font-bold text-slate-800 sm:text-base dark:text-slate-100">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center">
          <p className="mb-4 text-sm font-semibold text-slate-500 dark:text-slate-400">Connect with me</p>
          <div className="flex flex-wrap justify-center gap-3" aria-label="Social media links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:bg-emerald-600"
              >
                <Icon className="size-[19px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
