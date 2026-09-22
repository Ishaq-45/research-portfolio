export default function ResearchSnapshot() {
  return (
    <section aria-labelledby="research-snapshot" className="mt-6">
      <h2 id="research-snapshot" className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-200">Research Snapshot</h2>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        <div className="card text-center min-h-[88px] flex flex-col items-center justify-center transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
          <div className="text-2xl font-semibold text-white">1</div>
          <div className="text-sm text-neutral-400">Publication</div>
        </div>
        <div className="card text-center min-h-[88px] flex flex-col items-center justify-center transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
          <div className="text-base font-semibold text-white">AI/ML &amp; Cybersecurity</div>
          <div className="text-sm text-neutral-400">Research Areas</div>
        </div>
        <div className="card text-center min-h-[88px] flex flex-col items-center justify-center transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
          <div className="text-2xl font-semibold text-white">3</div>
          <div className="text-sm text-neutral-400">Selected Projects</div>
        </div>
        <div className="card text-center min-h-[88px] flex flex-col items-center justify-center transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
          <div className="text-base font-semibold text-white">B.Tech · 8.2/10</div>
          <div className="text-sm text-neutral-400">Education</div>
        </div>
      </div>
    </section>
  )
}
