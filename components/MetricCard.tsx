type MetricProps = {
  value: string
  label: string
  delay?: number
}

export default function MetricCard({ value, label, delay = 0 }: MetricProps) {
  return (
    <div
      className="metric-card rounded-md border border-neutral-800 bg-neutral-900/80 p-3 text-center transition duration-200 hover:-translate-y-1 hover:border-violet-500/50"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-xl md:text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-neutral-400">{label}</div>
    </div>
  )
}
