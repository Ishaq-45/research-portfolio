import Hero from '../components/Hero'
import ResearchFocus from '../components/ResearchFocus'
import ResearchProject from '../components/ResearchProject'
import { netrakshak } from '../data/research'
import SEO from '../components/SEO'
import { SITE } from '../data/site'
import MetricCard from '../components/MetricCard'
import { PROJECTS } from '../data/projects'

export default function Home() {
  return (
    <div className="space-y-8">
      <SEO title={SITE.title} description={SITE.description} />
      <Hero />
      <ResearchFocus />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Featured Research — NetRakshak</h2>
        <div className="mt-4">
          <ResearchProject title={netrakshak.title} tag="Research Publication">
            <div className="mb-2 text-sm text-neutral-400">A User-Centric Threat Intelligence Framework for<br />Real-Time Cyber Fraud Detection</div>
            <div className="mb-4 text-sm text-neutral-400">{netrakshak.venue} · {netrakshak.volume} · {netrakshak.date}</div>
            <p className="text-neutral-300">{netrakshak.abstract}</p>
          </ResearchProject>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Research Metrics</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          <MetricCard value={netrakshak.metrics.accuracy} label="Accuracy" delay={0} />
          <MetricCard value={netrakshak.metrics.precision} label="Precision" delay={80} />
          <MetricCard value={netrakshak.metrics.recall} label="Recall" delay={160} />
          <MetricCard value={netrakshak.metrics.f1} label="F1 Score" delay={240} />
          <MetricCard value={netrakshak.metrics.falsePositiveRate} label="False Positive Rate" delay={320} />
          <MetricCard value={netrakshak.metrics.scoringLatency} label="Scoring Latency" delay={400} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Selected engineering and applied ML projects</h2>
        <div className="mt-4 grid gap-4">
          {PROJECTS.filter(p => p.id !== 'netrakshak').map(p => (
            <div key={p.id} className="card transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
              <h3 className="font-semibold text-white">{p.title} <span className="text-sm text-neutral-400">• {p.type}</span></h3>
              <p className="mt-2 text-neutral-300">{p.description}</p>
              <div className="mt-2 text-sm text-neutral-400">Tech: {p.technologies.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Education & CV</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1.5fr_1fr]">
          <div className="card transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-violet-300">Primary qualification</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Keshav Memorial Institute of Technology</h3>
              </div>
              <span className="rounded-full border border-violet-500/30 bg-violet-500/5 px-2.5 py-1 text-xs font-medium text-violet-200">Completed</span>
            </div>

            <div className="mt-4 space-y-1 text-neutral-300">
              <p className="text-lg font-medium text-white">B.Tech in Computer Science &amp; Engineering</p>
              <p>2022–2026</p>
              <p>GPA: 8.2/10</p>
            </div>
          </div>

          <div className="card transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
            <h3 className="font-semibold text-lg text-white">Academic background</h3>
            <div className="mt-4 space-y-4 text-sm text-neutral-300">
              <div className="border-l border-neutral-700 pl-3">
                <div className="font-medium text-white">MS Junior College</div>
                <div>Intermediate (MPC)</div>
                <div>2020–2022</div>
                <div>95.9%</div>
              </div>
              <div className="border-l border-neutral-700 pl-3">
                <div className="font-medium text-white">The Progress High School</div>
                <div>SSC</div>
                <div>2020</div>
                <div>CGPA: 10.0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">View Resume →</a>
        </div>
      </section>
    </div>
  )
}
