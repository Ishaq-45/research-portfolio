type MetricProps = {
  value: string
  label: string
  delay?: number
}

export default function MetricCard({
  value,
  label,
  delay = 0,
}: MetricProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/55 p-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-neutral-900/80"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle research accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 transition duration-200 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">
        {value}
      </div>

      <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.08em] text-neutral-400">
        {label}
      </div>
    </div>
  )
}