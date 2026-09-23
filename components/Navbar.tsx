import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NAV_ITEMS = [
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/publication', label: 'Publication' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const isActive = (path: string) => router.pathname === path

  const linkClass = (path: string) =>
    `rounded-lg px-2.5 py-2 text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
      isActive(path)
        ? 'bg-violet-500/10 text-white'
        : 'text-neutral-400 hover:bg-white/[0.03] hover:text-white'
    }`

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-lg px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label="Ishaq — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-sm font-semibold text-violet-200 transition duration-200 group-hover:border-violet-400/40 group-hover:bg-violet-500/15">
            I
          </span>

          <span className="text-base font-semibold tracking-tight text-white">
            Ishaq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}

          {/* CV */}
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-2 inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
              isActive('/resume')
                ? 'border-violet-400/40 bg-violet-500/10 text-violet-100'
                : 'border-violet-400/20 bg-violet-500/[0.05] text-violet-200 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white'
            }`}
            aria-current={isActive('/resume') ? 'page' : undefined}
          >
            CV ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-neutral-300 transition duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 md:hidden"
        >
          {open ? (
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {open && (
          <div
            id="mobile-navigation"
            className="absolute left-4 right-4 top-[4.5rem] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-between rounded-lg border border-violet-400/20 bg-violet-500/[0.05] px-3 py-2.5 text-sm font-medium text-violet-200 transition duration-200 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>View CV</span>
                <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}