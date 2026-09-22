export default function ArchitectureDiagram() {
  return (
    <div className="mt-6 rounded-md border border-neutral-800 bg-neutral-900/80 p-4">
      <svg aria-hidden="true" viewBox="0 0 800 200" className="h-40 w-full" preserveAspectRatio="xMidYMid meet">
        <style>{`.label{fill:#e6eef0;font-family:Inter,sans-serif;font-size:12px}`}</style>
        <rect x="10" y="60" width="110" height="40" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="65" y="85" textAnchor="middle" className="label">Input</text>

        <rect x="140" y="30" width="120" height="40" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="200" y="55" textAnchor="middle" className="label">Type Detection</text>

        <rect x="280" y="30" width="120" height="40" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="340" y="55" textAnchor="middle" className="label">Threat Intelligence</text>

        <rect x="420" y="30" width="90" height="40" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="465" y="55" textAnchor="middle" className="label">WHOIS</text>

        <rect x="530" y="30" width="120" height="40" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="590" y="55" textAnchor="middle" className="label">Heuristic & Brand</text>

        <rect x="660" y="30" width="120" height="40" rx="6" fill="#0f172a" stroke="#334155" />
        <text x="720" y="55" textAnchor="middle" className="label">Risk Scoring</text>

        <g stroke="rgba(168,85,247,0.55)" strokeWidth="2.2" strokeLinecap="round">
          <line x1="120" y1="80" x2="140" y2="50" />
          <line x1="260" y1="50" x2="280" y2="50" />
          <line x1="400" y1="50" x2="420" y2="50" />
          <line x1="510" y1="50" x2="530" y2="50" />
          <line x1="650" y1="50" x2="660" y2="50" />
        </g>
      </svg>
      <div className="mt-2 text-sm text-neutral-400">High-level architecture: Input → Type Detection → Threat Intelligence → WHOIS → Heuristic & Brand → Risk Scoring → Explainability</div>
    </div>
  )
}
