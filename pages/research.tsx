import { netrakshak } from '../data/research'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import MetricCard from '../components/MetricCard'
import CalloutCard from '../components/CalloutCard'
import Timeline from '../components/Timeline'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Research() {
  return (
    <div className="space-y-12">
      <SEO
        title={`Research — ${SITE.name}`}
        description={netrakshak.abstract}
      />

      {/* Page header */}
      <header className="border-b border-neutral-900 pb-8">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Research Publication
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            NetRakshak
          </h1>

          <p className="mt-3 text-base leading-7 text-neutral-300 md:text-lg">
            A User-Centric Threat Intelligence Framework for Real-Time Cyber
            Fraud Detection
          </p>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500">
            <span>{netrakshak.venue}</span>
            <span aria-hidden="true">•</span>
            <span>{netrakshak.volume}</span>
            <span aria-hidden="true">•</span>
            <span>{netrakshak.date}</span>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section aria-labelledby="overview-heading">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            01 · Overview
          </p>

          <h2
            id="overview-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Research Overview
          </h2>

          <p className="mt-4 text-base leading-8 text-neutral-300">
            {netrakshak.abstract}
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-500">
            This work was developed and evaluated collaboratively by the
            listed authors and is published in {netrakshak.venue} (
            {netrakshak.date}). The sections below summarize the problem,
            research objectives, system approach, evaluation, limitations,
            and future research directions reported in the work.
          </p>
        </div>
      </section>

      {/* Problem and motivation */}
      <section aria-labelledby="problem-heading">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
              02 · Motivation
            </p>

            <h2
              id="problem-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              Problem &amp; Motivation
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              Many operational cybersecurity tools are fragmented and opaque,
              focusing on single-input decisions or binary verdicts that can
              be difficult for end users to interpret.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              NetRakshak aims to unify multiple input types — including URLs,
              phone numbers, and emails — into an explainable risk-scoring
              pipeline that provides actionable, localised guidance to users
              and incident handlers.
            </p>
          </div>

          <CalloutCard title="Research Focus">
            <ul className="space-y-3 text-sm leading-6 text-neutral-300">
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                  aria-hidden="true"
                />
                <span>Multi-input threat verification</span>
              </li>

              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                  aria-hidden="true"
                />
                <span>Explainable risk scoring</span>
              </li>

              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                  aria-hidden="true"
                />
                <span>Threat intelligence aggregation</span>
              </li>

              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                  aria-hidden="true"
                />
                <span>Actionable post-incident guidance</span>
              </li>
            </ul>
          </CalloutCard>
        </div>
      </section>

      {/* Research gap and objectives */}
      <section aria-labelledby="gap-heading">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            03 · Research Direction
          </p>

          <h2
            id="gap-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Research Gap &amp; Objectives
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
            The work addresses gaps in multi-input unification,
            explainability of risk scores, and provision of actionable
            recommendations for local reporting workflows.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
            The objectives included designing a tiered, explainable scoring
            system and evaluating its effectiveness on a labelled dataset.
          </p>
        </div>
      </section>

      {/* Contributions */}
      <section aria-labelledby="contributions-heading">
        <div className="mb-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            04 · Contributions
          </p>

          <h2
            id="contributions-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Key Contributions
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <CalloutCard title="Unified Verification">
            <p className="text-sm leading-6 text-neutral-300">
              A unified verification pipeline for URLs, phone numbers, and
              emails.
            </p>
          </CalloutCard>

          <CalloutCard title="Explainable Scoring">
            <p className="text-sm leading-6 text-neutral-300">
              Tiered risk scoring with an override rules engine designed to
              make threat assessments interpretable.
            </p>
          </CalloutCard>

          <CalloutCard title="Actionable Guidance">
            <p className="text-sm leading-6 text-neutral-300">
              Actionable, localized user guidance for post-incident steps.
            </p>
          </CalloutCard>
        </div>
      </section>

      {/* Methodology / architecture */}
      <section aria-labelledby="methodology-heading">
        <div className="mb-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            05 · Methodology
          </p>

          <h2
            id="methodology-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            System Architecture &amp; Pipeline
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
            The framework combines input processing, external threat
            intelligence, heuristic analysis, tiered risk scoring, and an
            explainability layer.
          </p>
        </div>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 md:p-6">
          <ArchitectureDiagram />

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-neutral-300 md:text-sm">
            {[
              'Input',
              'Type Detection',
              'Threat Intelligence',
              'Heuristic & Brand Checks',
              'Tiered Scoring',
              'Explainability',
            ].map((stage, index, stages) => (
              <span
                key={stage}
                className="flex items-center gap-2"
              >
                <span className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2">
                  {stage}
                </span>

                {index < stages.length - 1 && (
                  <span
                    className="text-neutral-600"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* System components */}
      <section aria-labelledby="components-heading">
        <div className="mb-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            06 · Components
          </p>

          <h2
            id="components-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Threat Intelligence Components
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <CalloutCard title="WHOIS & Registration Signals">
            <p className="text-sm leading-6 text-neutral-300">
              WHOIS extracts domain age and registration metadata. Cache hits
              reduce latency to under {netrakshak.metrics.whoisCacheHit}, as
              reported.
            </p>
          </CalloutCard>

          <CalloutCard title="Heuristic Phishing Detection">
            <p className="text-sm leading-6 text-neutral-300">
              Rule-based detections consider token patterns, homograph signals,
              and suspicious URL structures. These heuristics support
              explainability but may miss advanced obfuscation.
            </p>
          </CalloutCard>

          <CalloutCard title="Brand-Impersonation Detection">
            <p className="text-sm leading-6 text-neutral-300">
              Inputs are compared against a curated brand list to identify
              likely impersonation. Coverage remains limited and is identified
              as an area for expansion.
            </p>
          </CalloutCard>
        </div>
      </section>

      {/* Risk scoring */}
      <section aria-labelledby="scoring-heading">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
              07 · Decision Layer
            </p>

            <h2
              id="scoring-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              Risk Scoring &amp; Explainability
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              NetRakshak uses tiered scoring and weight multipliers for
              informational, suspicious, and critical signals.
            </p>

            <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
              Scores are presented with concise explanations and recommended
              next steps for end users and incident handlers, emphasizing
              interpretability over raw model opacity.
            </p>
          </div>

          <CalloutCard title="Interpretability Layer">
            <div className="space-y-4 text-sm leading-6 text-neutral-300">
              <p>
                Risk signals are combined into a tiered assessment rather than
                presenting users with an unexplained binary verdict.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-md border border-neutral-800 bg-neutral-950/50 p-3">
                  <p className="font-medium text-white">Safe</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Lower assessed risk
                  </p>
                </div>

                <div className="rounded-md border border-neutral-800 bg-neutral-950/50 p-3">
                  <p className="font-medium text-white">Suspicious</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Signals require caution
                  </p>
                </div>

                <div className="rounded-md border border-neutral-800 bg-neutral-950/50 p-3">
                  <p className="font-medium text-white">High Risk</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Strong threat indicators
                  </p>
                </div>

                <div className="rounded-md border border-neutral-800 bg-neutral-950/50 p-3">
                  <p className="font-medium text-white">Critical</p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Highest assessed risk
                  </p>
                </div>
              </div>
            </div>
          </CalloutCard>
        </div>
      </section>

      {/* Evaluation */}
      <section aria-labelledby="evaluation-heading">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            08 · Evaluation
          </p>

          <h2
            id="evaluation-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Evaluation &amp; Results
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
            Evaluation on a labelled set of 150 samples is reported in the
            paper. The metrics below summarize the reported classification
            performance and system scoring latency.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          <MetricCard
            value={netrakshak.metrics.accuracy}
            label="Accuracy"
          />

          <MetricCard
            value={netrakshak.metrics.precision}
            label="Precision"
          />

          <MetricCard
            value={netrakshak.metrics.recall}
            label="Recall"
          />

          <MetricCard
            value={netrakshak.metrics.f1}
            label="F1 Score"
          />

          <MetricCard
            value={netrakshak.metrics.falsePositiveRate}
            label="False Positive Rate"
          />

          <MetricCard
            value={netrakshak.metrics.scoringLatency}
            label="Scoring Latency"
          />
        </div>

        <div className="mt-5 rounded-lg border border-neutral-800 bg-neutral-900/30 p-4">
          <p className="text-xs leading-5 text-neutral-500">
            These figures are reported results from the published work and
            should be interpreted in the context of its evaluation dataset and
            experimental setup.
          </p>
        </div>
      </section>

      {/* Limitations */}
      <section aria-labelledby="limitations-heading">
        <div className="mb-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            09 · Critical Assessment
          </p>

          <h2
            id="limitations-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Limitations
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-400">
            The published work identifies several limitations that are
            important when interpreting the reported results.
          </p>
        </div>

        <CalloutCard title="Known Limitations">
          <ul className="space-y-3 text-sm leading-6 text-neutral-300">
            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500"
                aria-hidden="true"
              />
              <span>
                Heuristic detection may miss sophisticated phishing variants.
              </span>
            </li>

            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500"
                aria-hidden="true"
              />
              <span>
                The reported false-positive rate was approximately{' '}
                {netrakshak.metrics.falsePositiveRate} on the evaluation
                dataset.
              </span>
            </li>

            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500"
                aria-hidden="true"
              />
              <span>
                Brand database coverage is limited and requires expansion for
                localized performance.
              </span>
            </li>

            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500"
                aria-hidden="true"
              />
              <span>
                Dependence on external APIs can affect latency and availability.
              </span>
            </li>

            <li className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500"
                aria-hidden="true"
              />
              <span>
                The evaluation dataset is limited in scale and larger-scale
                testing is required to assess generalisability.
              </span>
            </li>
          </ul>
        </CalloutCard>
      </section>

      {/* Future research */}
      <section aria-labelledby="future-heading">
        <div className="max-w-4xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            10 · Future Work
          </p>

          <h2
            id="future-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Future Research Directions
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
            Future directions include larger-scale evaluation, learning-based
            phishing detection, explainable security systems, and intelligent
            threat intelligence pipelines.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'Larger-scale evaluation',
              'Learning-based phishing detection',
              'Explainable security systems',
              'Intelligent threat intelligence pipelines',
            ].map((direction) => (
              <div
                key={direction}
                className="rounded-lg border border-neutral-800 bg-neutral-900/35 p-4 text-sm text-neutral-300 transition duration-200 hover:border-violet-500/30"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-violet-400"
                    aria-hidden="true"
                  />
                  <span>{direction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        aria-labelledby="timeline-heading"
        className="border-t border-neutral-900 pt-10"
      >
        <div className="mb-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            11 · Research Journey
          </p>

          <h2
            id="timeline-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Academic &amp; Research Timeline
          </h2>
        </div>

        <Timeline
          items={[
            {
              title: 'B.Tech (2022–2026)',
              detail:
                'Keshav Memorial Institute of Technology — GPA 8.2',
            },
            {
              title: 'NetRakshak Research Project',
              detail:
                'Design and prototype of a threat intelligence verification pipeline.',
            },
            {
              title: 'Publication (April 2026)',
              detail: `${netrakshak.title}`,
            },
            {
              title: 'Applied AI/ML Projects',
              detail:
                'RAG and Pneumonia Detection projects.',
            },
            {
              title: 'Future Research Interests',
              detail:
                'Explainable AI, learning-based detection, and larger-scale evaluation.',
            },
          ]}
        />
      </section>
    </div>
  )
}