import Link from 'next/link'
import SEO from '../components/SEO'
import { SITE } from '../data/site'
import { PUBLICATION } from '../data/publication'

export default function About() {
  return (
    <div className="space-y-8">
      <SEO
        title={`About — ${SITE.name}`}
        description={SITE.description}
      />

      {/* Page Header */}
      <section className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Academic Profile
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
          Computer Science &amp; Engineering graduate with research and
          engineering interests spanning artificial intelligence, machine
          learning, cybersecurity, and threat intelligence.
        </p>
      </section>

      {/* Research Biography */}
      <section className="card">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <h2 className="text-xl font-semibold text-white">
            Research-oriented biography
          </h2>
        </div>

        <div className="mt-5 max-w-4xl space-y-4 text-neutral-300 leading-7">
          <p>
            My interests focus on building practical and explainable
            intelligent systems that can support decision-making in
            real-world environments.
          </p>

          <p>
            My research experience includes cybersecurity and threat
            intelligence, particularly the design of systems that combine
            multiple information sources, risk scoring, explainability, and
            user-oriented recommendations.
          </p>

          <p>
            Alongside cybersecurity research, I have worked on AI/ML systems,
            retrieval-augmented generation, semantic search, and applied
            machine learning. I am particularly interested in research that
            connects methodological evaluation with deployable systems.
          </p>
        </div>
      </section>

      {/* Research Interests */}
      <section className="card">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <h2 className="text-xl font-semibold text-white">
            Research interests
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Explainable AI',
              description:
                'Interpretable intelligent systems, transparent predictions, and evaluation-oriented ML.',
            },
            {
              title: 'Cybersecurity',
              description:
                'Security systems, cyber fraud detection, and practical threat analysis.',
            },
            {
              title: 'Threat Intelligence',
              description:
                'Combining heterogeneous threat signals to support risk assessment and security decisions.',
            },
            {
              title: 'Phishing & Fraud Detection',
              description:
                'Detection workflows for malicious URLs, impersonation, and digital fraud indicators.',
            },
            {
              title: 'AI / Machine Learning',
              description:
                'Applied ML systems with an emphasis on empirical evaluation and real-world use.',
            },
            {
              title: 'Retrieval-Augmented Generation',
              description:
                'Semantic retrieval and RAG-based systems for intelligent document interaction.',
            },
          ].map((interest) => (
            <div
              key={interest.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition duration-200 hover:border-violet-400/30 hover:bg-white/[0.04]"
            >
              <h3 className="font-medium text-white">
                {interest.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-400">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="card">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <h2 className="text-xl font-semibold text-white">
            Education
          </h2>
        </div>

        <div className="mt-6 space-y-6">
          <div className="border-l border-violet-500/50 pl-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  Keshav Memorial Institute of Technology
                </h3>

                <p className="mt-1 text-neutral-300">
                  B.Tech in Computer Science &amp; Engineering
                </p>
              </div>

              <span className="text-sm text-neutral-500">
                2022–2026
              </span>
            </div>

            <p className="mt-2 text-sm text-neutral-400">
              GPA: 8.2/10
            </p>
          </div>

          <div className="border-l border-neutral-700 pl-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  MS Junior College
                </h3>

                <p className="mt-1 text-neutral-300">
                  Intermediate (MPC)
                </p>
              </div>

              <span className="text-sm text-neutral-500">
                2020–2022
              </span>
            </div>

            <p className="mt-2 text-sm text-neutral-400">
              95.9%
            </p>
          </div>

          <div className="border-l border-neutral-700 pl-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-white">
                  The Progress High School
                </h3>

                <p className="mt-1 text-neutral-300">
                  SSC
                </p>
              </div>

              <span className="text-sm text-neutral-500">
                2020
              </span>
            </div>

            <p className="mt-2 text-sm text-neutral-400">
              CGPA: 10.0
            </p>
          </div>
        </div>
      </section>

      {/* Publication */}
      <section className="card about-section-reveal">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <h2 className="text-xl font-semibold text-white">
            Research &amp; Publication
          </h2>
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium uppercase tracking-wide text-violet-300">
            Published Research
          </p>

          <h3 className="mt-2 max-w-4xl text-xl font-semibold leading-8 text-white">
            {PUBLICATION.title}
          </h3>

          <p className="mt-3 text-sm text-neutral-400">
            {PUBLICATION.venue} · {PUBLICATION.volume} · {PUBLICATION.date}
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-neutral-300">
            Research on a user-centric threat intelligence framework for
            real-time cyber fraud detection, combining multiple threat
            intelligence signals with explainable risk scoring and actionable
            security guidance.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition duration-200 hover:border-violet-300/50 hover:bg-violet-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Explore Research →
            </Link>

            <Link
              href="/publication"
              className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 transition duration-200 hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Publication Record →
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Focus */}
      <section className="card">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <h2 className="text-xl font-semibold text-white">
            Technical focus
          </h2>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'AI / Machine Learning',
            'Cybersecurity',
            'Threat Intelligence',
            'RAG & Semantic Search',
            'Full-Stack Systems',
            'Backend & API Development',
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-white/10 px-4 py-3 text-sm text-neutral-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Closing Research Direction */}
      <section className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.04] p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
          Research Direction
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-9 text-white">
          Building intelligent systems that are measurable, interpretable,
          and useful in real-world settings.
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
          My current direction is to deepen my research experience in
          AI/ML and cybersecurity while exploring methods for building
          reliable intelligent systems and evaluating their performance
          under practical constraints.
        </p>
      </section>
    </div>
  )
}