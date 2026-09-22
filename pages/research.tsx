import { netrakshak } from '../data/research'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import MetricCard from '../components/MetricCard'
import CalloutCard from '../components/CalloutCard'
import Timeline from '../components/Timeline'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Research() {
  return (
    <div className="space-y-6">
      <SEO title={`Research — ${SITE.name}`} description={netrakshak.abstract} />
      <h1 className="text-3xl font-bold">NetRakshak — Research Overview</h1>

      <section>
        <h2 className="text-xl font-semibold">Overview & Authorship</h2>
        <p className="text-neutral-300 mt-2">{netrakshak.abstract}</p>
        <p className="text-neutral-400 mt-2">This work was developed and evaluated collaboratively by the listed authors and is published in {netrakshak.venue} ({netrakshak.date}). The text below summarizes the problem, approach, evaluation, and limitations as reported in the paper.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Problem & Motivation</h2>
        <p className="text-neutral-300 mt-2">Many operational cybersecurity tools are fragmented and opaque, focusing on single-input decisions or binary verdicts that are difficult for end users to interpret. NetRakshak aims to unify multiple input types (URLs, phone numbers, emails) into an explainable risk-scoring pipeline that provides actionable, localised guidance to users and incident handlers.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Research Gap & Objectives</h2>
        <p className="text-neutral-300 mt-2">The work addresses gaps in multi-input unification, explainability of risk scores, and provision of actionable recommendations for local reporting workflows. Objectives included designing a tiered, explainable scoring system and evaluating its effectiveness on a labelled dataset.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <CalloutCard title="Key Contributions">
          <ul className="list-disc pl-6">
            <li>Unified verification pipeline for URLs, phone numbers, and emails.</li>
            <li>Explainable tiered risk scoring with an override rules engine.</li>
            <li>Actionable, localized user guidance for post-incident steps.</li>
          </ul>
        </CalloutCard>

        <CalloutCard title="System Pipeline">
          <ArchitectureDiagram />
          <div className="text-neutral-300 mt-2">Input → Type detection → Threat intelligence aggregation (WHOIS, Safe Browsing, VirusTotal) → Heuristic & brand checks → Tiered scoring → Explainability</div>
        </CalloutCard>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <CalloutCard title="WHOIS & Registration Signals">
          <p>WHOIS extracts domain age and registration metadata; cache hits reduce latency to under {netrakshak.metrics.whoisCacheHit} as reported.</p>
        </CalloutCard>

        <CalloutCard title="Heuristic Phishing Detection">
          <p>Rule-based detections for token patterns, homograph and suspicious URL structures. Heuristics support explainability but may miss advanced obfuscation.</p>
        </CalloutCard>

        <CalloutCard title="Brand-Impersonation Detection">
          <p>Compares inputs against a curated brand list to identify likely impersonation; coverage is limited and a target for expansion.</p>
        </CalloutCard>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Risk Scoring & Explainability</h2>
        <p className="text-neutral-300">NetRakshak uses tiered scoring and weight multipliers for informational, suspicious, and critical signals. Scores are presented with concise explanations and recommended next steps for end users and incident handlers, emphasising interpretability over raw model opacity.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Evaluation</h2>
        <p className="text-neutral-300">Evaluation on a labelled set of 150 samples is reported in the paper. The key reported results are shown below; see the publication for experimental details and baseline comparisons.</p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-4">
          <MetricCard value={netrakshak.metrics.accuracy} label="Accuracy" />
          <MetricCard value={netrakshak.metrics.precision} label="Precision" />
          <MetricCard value={netrakshak.metrics.recall} label="Recall" />
          <MetricCard value={netrakshak.metrics.f1} label="F1 Score" />
          <MetricCard value={netrakshak.metrics.falsePositiveRate} label="False Positive Rate" />
          <MetricCard value={netrakshak.metrics.scoringLatency} label="Scoring Latency" />
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Limitations</h2>
        <CalloutCard title="Known limitations">
          <ul className="list-disc pl-6">
            <li>Heuristic detection may miss sophisticated phishing variants.</li>
            <li>Reported ~{netrakshak.metrics.falsePositiveRate} false-positive rate on the evaluation dataset.</li>
            <li>Brand database coverage is limited and needs expansion for localized performance.</li>
            <li>Dependence on external APIs affects latency and availability.</li>
            <li>Small evaluation dataset — larger-scale testing required for generalisability.</li>
          </ul>
        </CalloutCard>

        <h2 className="text-xl font-semibold mt-6">Future Research</h2>
        <p className="text-neutral-300">I am interested in expanding this work through larger-scale evaluation, learning-based phishing detection, explainable security systems, and intelligent threat intelligence pipelines.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Research Timeline</h2>
        <Timeline items={[
          { title: 'B.Tech (2022–2026)', detail: 'Keshav Memorial Institute of Technology — GPA 8.2' },
          { title: 'NetRakshak (Research Project)', detail: 'Design & prototype threat intelligence pipeline' },
          { title: 'Publication (Apr 2026)', detail: `${netrakshak.title}` },
          { title: 'AI Projects', detail: 'RAG, Pneumonia Detection (applied ML)' },
          { title: 'Future Interests', detail: 'Explainable AI, large-scale evaluation' }
        ]} />
      </section>
    </div>
  )
}
