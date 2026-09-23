import Link from 'next/link'
import { Fragment } from 'react'

type Props = {
  title: string
  subtitle?: string
  children?: React.ReactNode
  tag?: string
}

const pipeline = [
  'Input',
  'Threat Intelligence',
  'WHOIS',
  'Heuristics & Brand Checks',
  'Risk Scoring',
  'Explainability',
]

export default function ResearchProject({
  title,
  subtitle,
  children,
  tag,
}: Props) {
  return (
    <article className="card overflow-hidden p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-violet-300">
              Research Work
            </span>

            {tag && (
              <span className="rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-neutral-400">
                {tag}
              </span>
            )}
          </div>

          <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-400 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Research description */}
      <div className="mt-6 max-w-4xl text-sm leading-7 text-neutral-300 md:text-base">
        {children}
      </div>

      {/* System pipeline */}
      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
              System Pipeline
            </p>

            <p className="mt-1 text-xs text-neutral-600">
              From input verification to explainable risk assessment
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 md:p-4">
          <div className="flex min-w-max items-center gap-2 text-xs text-neutral-300 md:text-sm">
            {pipeline.map((stage, index) => (
              <Fragment key={stage}>
                <div
                  className={`pipeline-stage rounded-md border px-3 py-2 text-center transition duration-200 ${
                    index === pipeline.length - 1
                      ? 'border-violet-500/40 bg-violet-500/10 text-violet-200'
                      : 'border-neutral-700 bg-neutral-900/80 hover:border-neutral-600'
                  }`}
                >
                  {stage}
                </div>

                {index < pipeline.length - 1 && (
                  <span
                    className="shrink-0 text-neutral-600"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-7 flex flex-col gap-4 border-t border-neutral-800 pt-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xs leading-5 text-neutral-500 md:text-sm">
          The system combines threat intelligence, heuristic analysis, tiered
          risk scoring, and explainability to support transparent threat
          assessment.
        </p>

        <Link
          href="/research"
          className="inline-flex shrink-0 items-center text-sm font-semibold text-violet-300 transition duration-200 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        >
          View Research
          <span className="ml-1.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}