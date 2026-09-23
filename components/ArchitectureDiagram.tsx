export default function ArchitectureDiagram() {
  const stages = [
    {
      title: 'Input',
      subtitle: 'URL / Phone / Email',
    },
    {
      title: 'Type Detection',
      subtitle: 'Identify input type',
    },
    {
      title: 'Threat Intelligence',
      subtitle: 'External signals',
    },
    {
      title: 'WHOIS',
      subtitle: 'Registration data',
    },
    {
      title: 'Heuristic & Brand',
      subtitle: 'Threat indicators',
    },
    {
      title: 'Risk Scoring',
      subtitle: 'Tiered assessment',
    },
    {
      title: 'Explainability',
      subtitle: 'Reasons & guidance',
    },
  ]

  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950/70">
      {/* Diagram header */}
      <div className="border-b border-neutral-800 px-4 py-4 md:px-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
          System Architecture
        </p>

        <p className="mt-1 text-xs leading-5 text-neutral-500">
          High-level flow from input verification to explainable threat
          assessment.
        </p>
      </div>

      {/* Desktop diagram */}
      <div className="hidden overflow-x-auto px-5 py-8 lg:block">
        <svg
          aria-hidden="true"
          viewBox="0 0 1120 230"
          className="h-auto min-w-[1000px] w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="architecture-line"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient
              id="architecture-node"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#171717" />
              <stop offset="100%" stopColor="#0f0f0f" />
            </linearGradient>

            <filter
              id="architecture-shadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feDropShadow
                dx="0"
                dy="6"
                stdDeviation="8"
                floodOpacity="0.12"
              />
            </filter>

            <marker
              id="architecture-arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path
                d="M0,0 L8,4 L0,8"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="1.5"
              />
            </marker>
          </defs>

          {/* Background grid */}
          <g
            stroke="rgba(148,163,184,0.07)"
            strokeWidth="1"
          >
            {[...Array(15)].map((_, index) => (
              <line
                key={`vertical-${index}`}
                x1={20 + index * 80}
                y1="15"
                x2={20 + index * 80}
                y2="215"
              />
            ))}

            {[...Array(5)].map((_, index) => (
              <line
                key={`horizontal-${index}`}
                x1="20"
                y1={35 + index * 45}
                x2="1100"
                y2={35 + index * 45}
              />
            ))}
          </g>

          {/* Pipeline connector */}
          <line
            x1="125"
            y1="108"
            x2="985"
            y2="108"
            stroke="url(#architecture-line)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
            markerEnd="url(#architecture-arrow)"
          />

          {/* Nodes */}
          {stages.map((stage, index) => {
            const x = 25 + index * 155

            return (
              <g key={stage.title}>
                {/* Node */}
                <rect
                  x={x}
                  y="75"
                  width="125"
                  height="66"
                  rx="9"
                  fill="url(#architecture-node)"
                  stroke={
                    index === stages.length - 1
                      ? 'rgba(167,139,250,0.55)'
                      : 'rgba(71,85,105,0.75)'
                  }
                  strokeWidth="1.2"
                  style={{ filter: 'url(#architecture-shadow)' }}
                />

                {/* Node accent */}
                <rect
                  x={x}
                  y="75"
                  width="4"
                  height="66"
                  rx="2"
                  fill={
                    index === stages.length - 1
                      ? '#a78bfa'
                      : '#64748b'
                  }
                  opacity={index === stages.length - 1 ? 0.9 : 0.55}
                />

                {/* Node number */}
                <circle
                  cx={x + 17}
                  cy="94"
                  r="8"
                  fill="rgba(167,139,250,0.10)"
                  stroke="rgba(167,139,250,0.35)"
                  strokeWidth="1"
                />

                <text
                  x={x + 17}
                  y="97"
                  textAnchor="middle"
                  fill="#c4b5fd"
                  fontSize="8"
                  fontFamily="Inter, sans-serif"
                >
                  {index + 1}
                </text>

                {/* Node title */}
                <text
                  x={x + 67}
                  y="96"
                  textAnchor="middle"
                  fill="#f5f5f5"
                  fontSize="10.5"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                >
                  {stage.title}
                </text>

                {/* Node subtitle */}
                <text
                  x={x + 67}
                  y="116"
                  textAnchor="middle"
                  fill="#737373"
                  fontSize="8.5"
                  fontFamily="Inter, sans-serif"
                >
                  {stage.subtitle}
                </text>
              </g>
            )
          })}

          {/* Flow labels */}
          <text
            x="560"
            y="178"
            textAnchor="middle"
            fill="rgba(167,139,250,0.65)"
            fontSize="9"
            fontFamily="Inter, sans-serif"
            letterSpacing="1.5"
          >
            THREAT ASSESSMENT PIPELINE
          </text>
        </svg>
      </div>

      {/* Mobile / tablet flow */}
      <div className="px-4 py-5 lg:hidden">
        <div className="space-y-2">
          {stages.map((stage, index) => (
            <div key={stage.title}>
              <div
                className={`rounded-lg border p-3 transition ${
                  index === stages.length - 1
                    ? 'border-violet-500/40 bg-violet-500/5'
                    : 'border-neutral-800 bg-neutral-900/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                      index === stages.length - 1
                        ? 'border-violet-500/40 bg-violet-500/10 text-violet-200'
                        : 'border-neutral-700 bg-neutral-950 text-neutral-400'
                    }`}
                  >
                    {index + 1}
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-neutral-100">
                      {stage.title}
                    </p>

                    <p className="mt-0.5 text-xs text-neutral-500">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {index < stages.length - 1 && (
                <div
                  className="flex h-5 items-center justify-center text-neutral-700"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Caption */}
      <figcaption className="border-t border-neutral-800 px-4 py-3 text-xs leading-5 text-neutral-500 md:px-5">
        NetRakshak architecture: Input → Type Detection → Threat Intelligence
        → WHOIS → Heuristic &amp; Brand Checks → Risk Scoring → Explainability.
      </figcaption>
    </figure>
  )
}