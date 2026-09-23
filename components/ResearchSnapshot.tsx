export default function ResearchSnapshot() {
  const researchMetrics = [
    {
      value: '1',
      label: 'Publication',
      detail: 'IJERT · 2026',
    },
    {
      value: 'AI/ML',
      label: 'Research Focus',
      detail: 'Cybersecurity',
    },
    {
      value: '3',
      label: 'Selected Projects',
      detail: 'Applied Systems',
    },
    {
      value: '8.2/10',
      label: 'B.Tech GPA',
      detail: 'CSE · 2022–2026',
    },
  ]

  return (
    <section
      aria-labelledby="research-overview"
      className="mt-6"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2
          id="research-overview"
          className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-neutral-400"
        >
          Research at a Glance
        </h2>

        <span className="hidden text-[0.65rem] uppercase tracking-[0.14em] text-neutral-600 sm:block">
          Academic Profile
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {researchMetrics.map((metric) => (
          <div
            key={metric.label}
            className="group rounded-lg border border-neutral-800 bg-neutral-900/45 px-3 py-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-neutral-900/70"
          >
            <div className="text-lg font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-violet-200 sm:text-xl">
              {metric.value}
            </div>

            <div className="mt-1 text-xs font-medium text-neutral-300">
              {metric.label}
            </div>

            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.08em] text-neutral-500">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}