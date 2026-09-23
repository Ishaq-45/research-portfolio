import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <div className="space-y-8">
      <SEO
        title={`Contact — ${SITE.name}`}
        description={`Contact ${SITE.name} for research, academic, and professional opportunities.`}
      />

      {/* Header */}
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Get in touch
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Contact
        </h1>

        <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
          I am open to research discussions, academic opportunities,
          collaborations, and conversations around AI/ML and cybersecurity.
        </p>
      </section>

      {/* Contact Information */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-violet-300">
              @
            </span>

            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <h2 className="font-semibold text-white">
                Academic &amp; professional contact
              </h2>
            </div>
          </div>

          <a
            href="mailto:ishaqsm007@gmail.com"
            className="mt-5 inline-flex break-all text-sm font-medium text-violet-300 transition duration-200 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            ishaqsm007@gmail.com
          </a>

          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Email is the preferred channel for research discussions,
            university opportunities, collaborations, and professional
            inquiries.
          </p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/20 bg-violet-500/10 text-xs font-bold text-violet-300">
              GH
            </span>

            <div>
              <p className="text-sm text-neutral-500">Code &amp; Projects</p>
              <h2 className="font-semibold text-white">
                GitHub
              </h2>
            </div>
          </div>

          <a
            href="https://github.com/Ishaq-45"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-sm font-medium text-violet-300 transition duration-200 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            github.com/Ishaq-45 ↗
          </a>

          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Selected software projects, implementations, and technical work.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="card">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-violet-400" />

          <h2 className="text-xl font-semibold text-white">
            Research areas
          </h2>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            'Artificial Intelligence',
            'Machine Learning',
            'Cybersecurity',
            'Threat Intelligence',
            'Explainable AI',
            'Phishing & Fraud Detection',
            'Retrieval-Augmented Generation',
          ].map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-neutral-300"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Research Invitation */}
      <section className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.04] p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
          Research &amp; Collaboration
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-9 text-white">
          Interested in discussing research, intelligent systems, or
          cybersecurity?
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
          I welcome conversations with researchers, faculty members,
          students, and professionals working in related areas.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:ishaqsm007@gmail.com"
            className="inline-flex items-center rounded-lg border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-200 transition duration-200 hover:border-violet-300/50 hover:bg-violet-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            Send an Email →
          </a>

          <a
            href="https://github.com/Ishaq-45"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition duration-200 hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            View GitHub ↗
          </a>
        </div>
      </section>
    </div>
  )
}