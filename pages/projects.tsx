import Link from 'next/link'
import { PROJECTS } from '../data/projects'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Projects() {
  return (
    <div className="space-y-6">
      <SEO title={`Projects — ${SITE.name}`} description={SITE.description} />
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-5">
        {PROJECTS.map(p => (
          <article
            key={p.id}
            className={`card p-5 transition duration-200 hover:-translate-y-1 hover:border-violet-500/50 ${p.id === 'netrakshak' ? 'border-violet-500/40 bg-neutral-900/80' : ''}`}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">{p.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{p.title}</h3>
                {p.subtitle && <p className="mt-2 text-sm text-neutral-400">{p.subtitle}</p>}
              </div>
              {p.id === 'netrakshak' && (
                <Link href="/research" className="inline-flex items-center rounded-md border border-violet-500/40 px-3 py-2 text-sm font-medium text-violet-200 transition hover:border-violet-400 hover:text-white">View research →</Link>
              )}
            </div>

            <div className="mt-4 max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Overview</div>
              <p className="mt-2 text-neutral-300">{p.description}</p>
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Technologies</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.technologies.map(tech => (
                  <span key={tech} className="rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-xs text-neutral-200">{tech}</span>
                ))}
              </div>
            </div>

            {p.focus && (
              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Technical focus</div>
                <ul className="mt-2 max-w-3xl list-disc space-y-1 pl-5 text-neutral-300">
                  {p.focus.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            )}

            {p.approach && (
              <div className="mt-4 rounded-md border border-neutral-800 bg-neutral-900/80 p-3 text-sm text-neutral-300">
                <span className="font-medium text-white">Approach:</span> {p.approach}
              </div>
            )}

            {p.result && (
              <div className="mt-4 rounded-md border border-violet-500/20 bg-violet-500/5 p-3 text-sm text-violet-100">
                {p.result}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
