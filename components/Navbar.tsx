import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const linkClass = (path: string) => `rounded px-1 py-1 transition duration-200 hover:-translate-y-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${router.pathname === path ? 'bg-violet-500/10 text-white' : ''}`

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="border-b border-neutral-800 bg-transparent sticky top-0 z-40 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">Ishaq</Link>

        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden text-neutral-300"
          onClick={() => setOpen(!open)}
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <nav className="hidden items-center gap-6 text-neutral-300 md:flex">
          <Link href="/research" className={linkClass('/research')} aria-current={router.pathname === '/research' ? 'page' : undefined}>Research</Link>
          <Link href="/projects" className={linkClass('/projects')} aria-current={router.pathname === '/projects' ? 'page' : undefined}>Projects</Link>
          <Link href="/publication" className={linkClass('/publication')} aria-current={router.pathname === '/publication' ? 'page' : undefined}>Publication</Link>
          <Link href="/about" className={linkClass('/about')} aria-current={router.pathname === '/about' ? 'page' : undefined}>About</Link>
          <a href="/resume" target="_blank" rel="noopener noreferrer" className={linkClass('/resume')} aria-current={router.pathname === '/resume' ? 'page' : undefined}>CV</a>
          <Link href="/contact" className={linkClass('/contact')} aria-current={router.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="absolute left-4 right-4 top-20 rounded-md border border-neutral-800 bg-neutral-900 p-4 md:hidden">
            <nav className="flex flex-col gap-3 text-neutral-300">
              <Link href="/research" onClick={() => setOpen(false)} className={linkClass('/research')} aria-current={router.pathname === '/research' ? 'page' : undefined}>Research</Link>
              <Link href="/projects" onClick={() => setOpen(false)} className={linkClass('/projects')} aria-current={router.pathname === '/projects' ? 'page' : undefined}>Projects</Link>
              <Link href="/publication" onClick={() => setOpen(false)} className={linkClass('/publication')} aria-current={router.pathname === '/publication' ? 'page' : undefined}>Publication</Link>
              <Link href="/about" onClick={() => setOpen(false)} className={linkClass('/about')} aria-current={router.pathname === '/about' ? 'page' : undefined}>About</Link>
              <a href="/resume" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={linkClass('/resume')} aria-current={router.pathname === '/resume' ? 'page' : undefined}>CV</a>
              <Link href="/contact" onClick={() => setOpen(false)} className={linkClass('/contact')} aria-current={router.pathname === '/contact' ? 'page' : undefined}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
