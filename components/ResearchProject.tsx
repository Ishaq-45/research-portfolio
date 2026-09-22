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
  'Explainability'
]

export default function ResearchProject({ title, subtitle, children, tag }: Props) {
  return (
    <article className="card p-6 md:p-8">
      <div className="md:flex md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">{title}</h3>
          {subtitle && <p className="text-neutral-400 text-sm md:text-base mt-2">{subtitle}</p>}
        </div>
        {tag && <div className="mt-3 rounded border border-neutral-700 bg-gradient-to-br from-transparent to-violet-500/5 px-3 py-1 text-xs font-medium text-neutral-200 md:mt-0 md:text-sm">{tag}</div>}
      </div>

      <div className="mt-5 text-neutral-300 leading-relaxed">{children}</div>

      <div className="mt-6 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900/70 p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300 md:text-sm">
          {pipeline.map((stage, index) => (
            <Fragment key={stage}>
              <div className="pipeline-stage rounded border border-neutral-700 bg-neutral-800/80 px-2.5 py-1.5 text-center">
                {stage}
              </div>
              {index < pipeline.length - 1 && <span className="text-neutral-500">→</span>}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-neutral-400">System flow emphasizes explainable, evaluation-driven threat assessment.</div>
        <Link href="/research" className="inline-flex items-center text-sm font-medium text-violet-300 transition duration-200 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">View Research →</Link>
      </div>
    </article>
  )
}
