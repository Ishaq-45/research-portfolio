import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Identity */}
          <div>
            <Link
              href="/"
              className="font-semibold tracking-tight text-white transition hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Shaik Mohd Ishaq
            </Link>

            <p className="mt-1 text-sm text-neutral-500">
              AI/ML · Cybersecurity · Research
            </p>
          </div>

          {/* Links */}
          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
            aria-label="Footer navigation"
          >
            <Link
              href="/research"
              className="text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Research
            </Link>

            <Link
              href="/publication"
              className="text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Publication
            </Link>

            <Link
              href="/resume"
              className="text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              CV
            </Link>

            <Link
              href="/contact"
              className="text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Contact
            </Link>

            <a
              href="https://github.com/Ishaq-45"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              GitHub ↗
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} Shaik Mohd Ishaq. All rights reserved.
          </span>

          <a
            href="mailto:ishaqsm007@gmail.com"
            className="transition hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            ishaqsm007@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}