import { PUBLICATION } from '../data/publication'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Publication() {
  return (
    <div className="space-y-6">
      <SEO title={`Publication — ${SITE.name}`} description={PUBLICATION.abstract} />
      <h1 className="text-3xl font-bold">Publication</h1>

      <article className="card p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">Peer-reviewed research</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">{PUBLICATION.title}</h2>
            <p className="mt-3 text-neutral-400">{PUBLICATION.venue}</p>
          </div>
          <div className="w-fit rounded border border-neutral-700 px-2.5 py-1 text-xs text-neutral-300">IJERT</div>
        </div>

        <div className="mt-6 grid gap-3 border-y border-neutral-800 py-4 text-sm text-neutral-300 sm:grid-cols-2 lg:grid-cols-4">
          <div><div className="text-xs uppercase tracking-[0.14em] text-neutral-500">Journal</div><div className="mt-1">IJERT</div></div>
          <div><div className="text-xs uppercase tracking-[0.14em] text-neutral-500">Issue</div><div className="mt-1">Vol. 15 · Issue 04 · April 2026</div></div>
          <div><div className="text-xs uppercase tracking-[0.14em] text-neutral-500">Published first online</div><div className="mt-1">{PUBLICATION.publishedOnline}</div></div>
          <div><div className="text-xs uppercase tracking-[0.14em] text-neutral-500">Paper ID</div><div className="mt-1">{PUBLICATION.paperId}</div></div>
        </div>

        <section className="mt-6">
          <h3 className="font-semibold text-white">Authors</h3>
          <p className="mt-2 max-w-4xl leading-relaxed text-neutral-300">{PUBLICATION.authors}</p>
        </section>

        <section className="mt-6 max-w-4xl">
          <h3 className="font-semibold text-white">Abstract</h3>
          <p className="mt-2 leading-relaxed text-neutral-300">{PUBLICATION.abstract}</p>
        </section>

        <section className="mt-6">
          <h3 className="font-semibold text-white">Key Contributions</h3>
          <ul className="mt-2 max-w-4xl list-disc space-y-1 pl-6 text-neutral-300">
            {PUBLICATION.contributions.map(c => <li key={c}>{c}</li>)}
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="font-semibold text-white">Citation</h3>
          <div className="mt-2 rounded bg-neutral-900 p-3 font-mono text-sm leading-relaxed text-neutral-400">{PUBLICATION.authors}. “{PUBLICATION.title}.” {PUBLICATION.venue}, {PUBLICATION.volume}, {PUBLICATION.date}. Paper ID: {PUBLICATION.paperId}.</div>
        </section>

        <section className="mt-6 rounded-md border border-violet-500/20 bg-violet-500/5 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/40">
          <h3 className="text-lg font-semibold text-white">Full Research Paper</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-300">Read the complete paper covering the problem formulation, system architecture, threat intelligence pipeline, risk scoring methodology, evaluation, limitations, and future research.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={PUBLICATION.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Read on IJERT →</a>
            <a href={PUBLICATION.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">View Full Paper →</a>
            <a href={PUBLICATION.pdfUrl} download className="inline-flex items-center rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">Download PDF ↓</a>
          </div>
        </section>

        <div className="mt-5 text-sm text-neutral-400">
          DOI: <a href={`https://doi.org/${PUBLICATION.doi}`} target="_blank" rel="noopener noreferrer" className="text-violet-300 transition hover:text-violet-200">{PUBLICATION.doi}</a>
        </div>
      </article>
    </div>
  )
}
