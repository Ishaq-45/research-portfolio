import Link from 'next/link'
import ResearchSnapshot from './ResearchSnapshot'

export default function Hero() {
  return (
    <section className="relative mt-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),transparent_35%)]" />
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" aria-labelledby="hero-heading">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="text-violet-300 font-medium text-[0.7rem] uppercase tracking-[0.22em] md:text-xs">AI/ML • Cybersecurity • Research</p>
          <h1 id="hero-heading" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.96] tracking-[-0.05em] text-white">SHAIK MOHD ISHAQ</h1>
          <p className="mt-3 text-sm md:text-base text-neutral-300/90 font-medium tracking-[0.08em] uppercase">CSE Graduate — Research Systems &amp; Threat Intelligence</p>
          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-neutral-300 mt-5">
            Research-oriented engineer focused on explainable, evaluation-driven systems at the intersection of machine learning and applied cybersecurity. Published research in cybersecurity and threat intelligence through NetRakshak (IJERT, Apr 2026).
          </p>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link href="/research" className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">Explore Research</Link>
            <Link href="/projects" className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900/50 px-4 py-2.5 text-sm font-medium text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">View Projects</Link>
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-neutral-100 underline decoration-neutral-600 underline-offset-4 transition duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">Download CV</a>
          </div>

          <div className="pt-5 text-sm text-neutral-400">GitHub: <a href="https://github.com/Ishaq-45" target="_blank" rel="noreferrer" className="text-violet-300 transition hover:text-violet-200">github.com/Ishaq-45</a></div>

          <div className="mt-6 lg:mt-10">
            <ResearchSnapshot />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-5">
          <div className="research-panel relative h-72 overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-neutral-900 to-violet-950/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),transparent_35%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

            <svg aria-hidden="true" viewBox="0 0 600 400" className="relative z-10 h-full w-full">
              <defs>
                <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.08"/></filter>
              </defs>
              <g stroke="rgba(148,163,184,0.14)" strokeWidth="1">
                {[...Array(12)].map((_,i) => <line key={`v${i}`} x1={50 + i * 40} y1={20} x2={50 + i * 40} y2={380} />)}
                {[...Array(8)].map((_,i) => <line key={`h${i}`} x1={40} y1={30 + i * 40} x2={560} y2={30 + i * 40} />)}
              </g>

              <g className="animate-[pulse-soft_5s_ease-in-out_infinite]" stroke="rgba(168,85,247,0.26)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="120" y1="90" x2="250" y2="150" />
                <line x1="250" y1="150" x2="370" y2="95" />
                <line x1="180" y1="220" x2="300" y2="235" />
                <line x1="300" y1="235" x2="420" y2="200" />
                <line x1="370" y1="95" x2="510" y2="120" />
              </g>

              <g fill="white" fillOpacity="0.9">
                <circle cx="120" cy="90" r="5" fill="#e2e8f0" style={{ filter: 'url(#soft)' }} />
                <circle cx="250" cy="150" r="6" fill="#a78bfa" />
                <circle cx="370" cy="95" r="5" fill="#e2e8f0" style={{ filter: 'url(#soft)' }} />
                <circle cx="180" cy="220" r="5" fill="#93c5fd" />
                <circle cx="300" cy="235" r="6" fill="#a78bfa" />
                <circle cx="420" cy="200" r="5" fill="#e2e8f0" style={{ filter: 'url(#soft)' }} />
                <circle cx="510" cy="120" r="5" fill="#e2e8f0" style={{ filter: 'url(#soft)' }} />
              </g>

              <g fill="rgba(255,255,255,0.74)" fontSize="11" fontFamily="sans-serif">
                <text x="130" y="70">Input</text>
                <text x="210" y="180">Threat Intelligence</text>
                <text x="385" y="70">WHOIS</text>
                <text x="145" y="250">Explainability</text>
                <text x="430" y="230">Risk Scoring</text>
                <text x="470" y="104">AI/ML</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
