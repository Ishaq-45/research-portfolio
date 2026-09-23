import { PUBLICATION } from '../data/publication'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Publication() {
  return (
    <div className="space-y-10">
      <SEO
        title={`Publication — ${SITE.name}`}
        description={PUBLICATION.abstract}
      />

      {/* Page Header */}
      <header className="border-b border-white/10 pb-8">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Research Publication
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Publication
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base">
            Published research in cybersecurity and threat intelligence,
            presented with its bibliographic details, research contributions,
            methodology, evaluation, and full-text access.
          </p>
        </div>
      </header>

      {/* Publication Record */}
      <article className="card overflow-hidden p-6 md:p-8">
        {/* Publication Identity */}
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-violet-200">
                Peer-reviewed research
              </span>

              <span className="rounded-full border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-neutral-400">
                IJERT
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
              {PUBLICATION.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-400 md:text-base">
              {PUBLICATION.venue}
            </p>
          </div>
        </div>

        {/* Bibliographic Metadata */}
        <section
          className="mt-7 border-y border-white/10 py-5"
          aria-labelledby="publication-details-heading"
        >
          <h3
            id="publication-details-heading"
            className="sr-only"
          >
            Publication Details
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Journal
              </p>

              <p className="mt-1.5 text-sm font-medium text-neutral-200">
                IJERT
              </p>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Issue
              </p>

              <p className="mt-1.5 text-sm font-medium text-neutral-200">
                {PUBLICATION.volume} · {PUBLICATION.date}
              </p>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                First Online
              </p>

              <p className="mt-1.5 text-sm font-medium text-neutral-200">
                {PUBLICATION.publishedOnline}
              </p>
            </div>

            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                Paper ID
              </p>

              <p className="mt-1.5 break-all text-sm font-medium text-neutral-200">
                {PUBLICATION.paperId}
              </p>
            </div>
          </div>
        </section>

        {/* Authors */}
        <section
          className="mt-8"
          aria-labelledby="authors-heading"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Authorship
          </p>

          <h3
            id="authors-heading"
            className="mt-2 text-lg font-semibold text-white"
          >
            Authors
          </h3>

          <p className="mt-3 max-w-5xl text-sm leading-7 text-neutral-300 md:text-base">
            {PUBLICATION.portfolioAuthors}
          </p>

          <p className="mt-3 max-w-4xl text-xs leading-6 text-neutral-500">
            Portfolio display order. The formal citation below preserves the
            publication&apos;s bibliographic author order.
          </p>
        </section>

        {/* Abstract */}
        <section
          className="mt-8"
          aria-labelledby="abstract-heading"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Research Summary
          </p>

          <h3
            id="abstract-heading"
            className="mt-2 text-lg font-semibold text-white"
          >
            Abstract
          </h3>

          <div className="mt-3 max-w-5xl rounded-lg border border-white/10 bg-neutral-900/35 p-5">
            <p className="text-sm leading-7 text-neutral-300 md:text-base md:leading-8">
              {PUBLICATION.abstract}
            </p>
          </div>
        </section>

        {/* Contributions */}
        <section
          className="mt-8"
          aria-labelledby="contributions-heading"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Research Contributions
          </p>

          <h3
            id="contributions-heading"
            className="mt-2 text-lg font-semibold text-white"
          >
            Key Contributions
          </h3>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {PUBLICATION.contributions.map((contribution) => (
              <div
                key={contribution}
                className="rounded-lg border border-white/10 bg-neutral-900/30 p-4 transition duration-200 hover:border-violet-500/30 hover:bg-neutral-900/50"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-6 text-neutral-300">
                    {contribution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section
          className="mt-8"
          aria-labelledby="methodology-heading"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Research Methodology
          </p>

          <h3
            id="methodology-heading"
            className="mt-2 text-lg font-semibold text-white"
          >
            Methodology
          </h3>

          <div className="mt-3 rounded-lg border border-white/10 bg-neutral-900/35 p-5">
            <p className="text-sm leading-7 text-neutral-300 md:text-base">
              {PUBLICATION.methodologySummary}
            </p>
          </div>
        </section>

        {/* Evaluation */}
        <section
          className="mt-8"
          aria-labelledby="evaluation-heading"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Empirical Evaluation
          </p>

          <h3
            id="evaluation-heading"
            className="mt-2 text-lg font-semibold text-white"
          >
            Evaluation
          </h3>

          <div className="mt-3 rounded-lg border border-violet-500/20 bg-violet-500/[0.035] p-5">
            <p className="text-sm leading-7 text-neutral-300 md:text-base">
              {PUBLICATION.evaluationSummary}
            </p>
          </div>
        </section>

        {/* Citation */}
        <section
          className="mt-8"
          aria-labelledby="citation-heading"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
            Bibliographic Record
          </p>

          <h3
            id="citation-heading"
            className="mt-2 text-lg font-semibold text-white"
          >
            Citation
          </h3>

          <div className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-neutral-950/70 p-4">
            <p className="min-w-[620px] font-mono text-xs leading-6 text-neutral-400 md:text-sm">
              {PUBLICATION.authors}. &ldquo;{PUBLICATION.title}.&rdquo;{' '}
              {PUBLICATION.venue}, {PUBLICATION.volume},{' '}
              {PUBLICATION.date}. Paper ID: {PUBLICATION.paperId}. DOI:{' '}
              {PUBLICATION.doi}.
            </p>
          </div>
        </section>

        {/* Paper Access */}
        <section
          className="mt-8 overflow-hidden rounded-xl border border-violet-500/20 bg-violet-500/[0.035]"
          aria-labelledby="paper-access-heading"
        >
          <div className="p-5 md:p-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
              Full Text
            </p>

            <h3
              id="paper-access-heading"
              className="mt-2 text-xl font-semibold text-white"
            >
              Access the Research Paper
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-400">
              Read the complete paper for the problem formulation, system
              architecture, threat intelligence pipeline, risk scoring
              methodology, evaluation, limitations, and future research
              directions.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={PUBLICATION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Read on IJERT
                <span className="ml-1.5" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                href={PUBLICATION.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900/60 px-4 py-2.5 text-sm font-semibold text-neutral-200 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                View Full Paper
                <span className="ml-1.5" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                href={PUBLICATION.pdfUrl}
                download
                className="inline-flex items-center justify-center rounded-md border border-neutral-800 px-4 py-2.5 text-sm font-medium text-neutral-400 transition duration-200 hover:border-neutral-600 hover:text-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Download PDF
                <span className="ml-1.5" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* DOI */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs uppercase tracking-[0.14em] text-neutral-500">
            DOI
          </span>

          <a
            href={`https://doi.org/${PUBLICATION.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-sm text-violet-300 transition hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            {PUBLICATION.doi}
          </a>
        </div>
      </article>
    </div>
  )
}