import Link from 'next/link'
import ResearchSnapshot from './ResearchSnapshot'

export default function Hero() {
  return (
    <section
      className="relative mt-4 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.16),transparent_36%)]" />
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-violet-600/5 blur-3xl" />

      <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Main introduction */}
        <div className="animate-fade-up lg:col-span-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-violet-300 md:text-xs">
            AI/ML • Cybersecurity • Research
          </p>

          <h1
            id="hero-heading"
            className="mt-4 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.045em] text-white md:text-5xl lg:text-6xl"
          >
            SHAIK MOHD ISHAQ
          </h1>

          <p className="mt-4 text-sm font-medium uppercase tracking-[0.08em] text-neutral-300 md:text-base">
            CSE Graduate — Research Systems &amp; Threat Intelligence
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
            I build and study practical AI/ML and cybersecurity systems with a
            focus on explainability, evaluation, and real-world threat
            intelligence.
          </p>

          {/* Featured research callout */}
          <div className="mt-6 max-w-2xl rounded-lg border border-neutral-800 bg-neutral-900/45 px-4 py-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div
                className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-400"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Featured Research
                </p>

                <p className="mt-1 text-sm leading-6 text-neutral-400">
                  <span className="text-neutral-200">
                    NetRakshak: A User-Centric Threat Intelligence Framework
                    for Real-Time Cyber Fraud Detection
                  </span>{' '}
                  — published in IJERT, April 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Primary actions */}
          <div className="flex flex-wrap gap-3 pt-7">
            <Link
              href="/research"
              className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              Explore Research
            </Link>

            <Link
              href="/publication"
              className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2.5 text-sm font-semibold text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              View Publication
            </Link>

            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition duration-200 hover:text-white hover:decoration-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              View CV
            </Link>
          </div>

          {/* GitHub */}
          <div className="pt-5 text-sm text-neutral-500">
            <span>GitHub: </span>
            <a
              href="https://github.com/Ishaq-45"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 transition hover:text-violet-300"
            >
              github.com/Ishaq-45
            </a>
          </div>

          {/* Mobile research snapshot */}
          <div className="mt-8 lg:hidden">
            <ResearchSnapshot />
          </div>
        </div>

        {/* Research visual / snapshot */}
        <div className="lg:col-span-5">
          <div className="research-panel relative overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-900 to-violet-950/30 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:p-6">
            {/* Decorative backgrounds */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),transparent_38%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Panel heading */}
            <div className="relative z-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
                Research Snapshot
              </p>

              <h2 className="mt-2 text-lg font-semibold text-white">
                NetRakshak
              </h2>

              <p className="mt-1 max-w-sm text-sm leading-6 text-neutral-400">
                A threat-intelligence framework designed for explainable
                real-time cyber fraud detection.
              </p>
            </div>

            {/* Research pipeline */}
            <div className="relative z-10 mt-5">
              <svg
                aria-hidden="true"
                viewBox="0 0 600 260"
                className="h-auto w-full"
              >
                <defs>
                  <filter
                    id="hero-soft-shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="5"
                      stdDeviation="8"
                      floodOpacity="0.08"
                    />
                  </filter>
                </defs>

                {/* Grid */}
                <g
                  stroke="rgba(148,163,184,0.10)"
                  strokeWidth="1"
                >
                  {[...Array(11)].map((_, i) => (
                    <line
                      key={`vertical-${i}`}
                      x1={35 + i * 53}
                      y1={15}
                      x2={35 + i * 53}
                      y2={245}
                    />
                  ))}

                  {[...Array(5)].map((_, i) => (
                    <line
                      key={`horizontal-${i}`}
                      x1={25}
                      y1={30 + i * 50}
                      x2={575}
                      y2={30 + i * 50}
                    />
                  ))}
                </g>

                {/* Pipeline connections */}
                <g
                  stroke="rgba(167,139,250,0.35)"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="80" y1="95" x2="205" y2="95" />
                  <line x1="205" y1="95" x2="330" y2="95" />
                  <line x1="330" y1="95" x2="455" y2="95" />
                  <line x1="455" y1="95" x2="535" y2="155" />
                </g>

                {/* Secondary connections */}
                <g
                  stroke="rgba(148,163,184,0.20)"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                >
                  <line x1="205" y1="95" x2="205" y2="180" />
                  <line x1="330" y1="95" x2="330" y2="180" />
                  <line x1="455" y1="95" x2="455" y2="180" />
                </g>

                {/* Main nodes */}
                <g>
                  <circle
                    cx="80"
                    cy="95"
                    r="8"
                    fill="#e2e8f0"
                    style={{ filter: 'url(#hero-soft-shadow)' }}
                  />

                  <circle
                    cx="205"
                    cy="95"
                    r="9"
                    fill="#a78bfa"
                  />

                  <circle
                    cx="330"
                    cy="95"
                    r="9"
                    fill="#a78bfa"
                  />

                  <circle
                    cx="455"
                    cy="95"
                    r="9"
                    fill="#a78bfa"
                  />

                  <circle
                    cx="535"
                    cy="155"
                    r="9"
                    fill="#e2e8f0"
                    style={{ filter: 'url(#hero-soft-shadow)' }}
                  />
                </g>

                {/* Supporting nodes */}
                <g>
                  <circle
                    cx="205"
                    cy="180"
                    r="5"
                    fill="#93c5fd"
                  />

                  <circle
                    cx="330"
                    cy="180"
                    r="5"
                    fill="#93c5fd"
                  />

                  <circle
                    cx="455"
                    cy="180"
                    r="5"
                    fill="#93c5fd"
                  />
                </g>

                {/* Labels */}
                <g
                  fill="rgba(255,255,255,0.78)"
                  fontSize="11"
                  fontFamily="sans-serif"
                >
                  <text x="52" y="72">
                    Input
                  </text>

                  <text x="170" y="72">
                    Threat Intel
                  </text>

                  <text x="306" y="72">
                    Analysis
                  </text>

                  <text x="424" y="72">
                    Risk Score
                  </text>

                  <text x="500" y="190">
                    Action
                  </text>

                  <text x="166" y="202">
                    WHOIS
                  </text>

                  <text x="291" y="202">
                    Heuristics
                  </text>

                  <text x="416" y="202">
                    Explainability
                  </text>
                </g>
              </svg>
            </div>

            {/* Research metrics */}
            <div className="relative z-10 mt-2 grid grid-cols-3 gap-2 border-t border-neutral-800 pt-4">
              <div>
                <p className="text-lg font-semibold text-white">91.3%</p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500">
                  Accuracy
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">93.1%</p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500">
                  Precision
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">92.7%</p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500">
                  Recall
                </p>
              </div>
            </div>
          </div>

          {/* Desktop research snapshot */}
          <div className="mt-5 hidden lg:block">
            <ResearchSnapshot />
          </div>
        </div>
      </div>
    </section>
  )
}