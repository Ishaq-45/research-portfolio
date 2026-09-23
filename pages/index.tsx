import Link from 'next/link'
import Hero from '../components/Hero'
import ResearchFocus from '../components/ResearchFocus'
import ResearchProject from '../components/ResearchProject'
import { netrakshak } from '../data/research'
import SEO from '../components/SEO'
import { SITE } from '../data/site'
import MetricCard from '../components/MetricCard'
import { PROJECTS } from '../data/projects'

export default function Home() {
  const selectedProjects = PROJECTS.filter(
    (project) => project.id !== 'netrakshak'
  )

  return (
    <div className="space-y-12">
      <SEO
        title={SITE.title}
        description={SITE.description}
      />

      {/* Hero */}
      <Hero />

      {/* Research focus */}
      <ResearchFocus />

      {/* Featured research */}
      <section
        className="border-t border-neutral-900 pt-10"
        aria-labelledby="featured-research-heading"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Featured Research
            </p>

            <h2
              id="featured-research-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              NetRakshak
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-400">
              A user-centric threat intelligence framework for real-time
              cyber fraud detection.
            </p>
          </div>

          <Link
            href="/publication"
            className="inline-flex w-fit items-center text-sm font-medium text-violet-300 transition hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            Read publication
            <span className="ml-1.5" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="mt-5">
          <ResearchProject
            title={netrakshak.title}
            tag="Research Publication"
          >
            <div className="mb-4 space-y-1 text-sm text-neutral-400">
              <p>
                {netrakshak.venue} · {netrakshak.volume} · {netrakshak.date}
              </p>
            </div>

            <p className="max-w-4xl leading-7 text-neutral-300">
              {netrakshak.abstract}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/research"
                className="inline-flex items-center rounded-md border border-neutral-700 bg-neutral-900/50 px-3.5 py-2 text-sm font-medium text-neutral-200 transition hover:border-violet-500/50 hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Research methodology
              </Link>

              <Link
                href="/publication"
                className="inline-flex items-center rounded-md bg-violet-600 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Publication details
              </Link>
            </div>
          </ResearchProject>
        </div>
      </section>

      {/* Research evaluation */}
      <section
        aria-labelledby="research-metrics-heading"
      >
        <div className="flex flex-col gap-2">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Evaluation
          </p>

          <h2
            id="research-metrics-heading"
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Research Metrics
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-neutral-400">
            Reported evaluation results from the NetRakshak study, including
            classification performance and system latency.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
          <MetricCard
            value={netrakshak.metrics.accuracy}
            label="Accuracy"
            delay={0}
          />

          <MetricCard
            value={netrakshak.metrics.precision}
            label="Precision"
            delay={80}
          />

          <MetricCard
            value={netrakshak.metrics.recall}
            label="Recall"
            delay={160}
          />

          <MetricCard
            value={netrakshak.metrics.f1}
            label="F1 Score"
            delay={240}
          />

          <MetricCard
            value={netrakshak.metrics.falsePositiveRate}
            label="False Positive Rate"
            delay={320}
          />

          <MetricCard
            value={netrakshak.metrics.scoringLatency}
            label="Scoring Latency"
            delay={400}
          />
        </div>

        <div className="mt-4">
          <Link
            href="/research"
            className="text-sm font-medium text-neutral-400 underline decoration-neutral-700 underline-offset-4 transition hover:text-violet-300 hover:decoration-violet-400"
          >
            View methodology, evaluation and limitations →
          </Link>
        </div>
      </section>

      {/* Selected projects */}
      <section
        aria-labelledby="selected-projects-heading"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Applied Work
            </p>

            <h2
              id="selected-projects-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              Selected Engineering &amp; ML Projects
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-400">
              Systems that complement the research work across AI/ML,
              information retrieval and applied software engineering.
            </p>
          </div>

          <Link
            href="/projects"
            className="w-fit text-sm font-medium text-violet-300 transition hover:text-violet-200"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <article
              key={project.id}
              className="card group transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <span className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-neutral-400">
                  {project.type}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-neutral-300">
                {project.description}
              </p>

              <div className="mt-4 border-t border-neutral-800 pt-3">
                <p className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                  Technologies
                </p>

                <p className="mt-1 text-sm leading-6 text-neutral-400">
                  {project.technologies.join(', ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section
        aria-labelledby="education-heading"
        className="border-t border-neutral-900 pt-10"
      >
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Academic Background
          </p>

          <h2
            id="education-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            Education
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">
          {/* Primary degree */}
          <article className="card transition duration-200 hover:border-violet-500/40">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-violet-300">
                  Primary Qualification
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  Keshav Memorial Institute of Technology
                </h3>
              </div>

              <span className="w-fit rounded-full border border-violet-500/30 bg-violet-500/5 px-2.5 py-1 text-xs font-medium text-violet-200">
                Completed
              </span>
            </div>

            <div className="mt-5 grid gap-4 border-t border-neutral-800 pt-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-white">
                  B.Tech in Computer Science &amp; Engineering
                </p>

                <p className="mt-1 text-sm text-neutral-400">
                  2022–2026
                </p>
              </div>

              <div className="sm:text-right">
                <p className="text-sm font-medium text-white">
                  GPA: 8.2/10
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  Computer Science &amp; Engineering
                </p>
              </div>
            </div>
          </article>

          {/* Earlier education */}
          <article className="card transition duration-200 hover:border-violet-500/40">
            <h3 className="text-lg font-semibold text-white">
              Earlier Education
            </h3>

            <div className="mt-4 space-y-4">
              <div className="border-l border-neutral-700 pl-3">
                <p className="font-medium text-white">
                  MS Junior College
                </p>

                <p className="mt-0.5 text-sm text-neutral-400">
                  Intermediate · MPC · 2020–2022
                </p>

                <p className="mt-1 text-sm text-neutral-300">
                  95.9%
                </p>
              </div>

              <div className="border-l border-neutral-700 pl-3">
                <p className="font-medium text-white">
                  The Progress High School
                </p>

                <p className="mt-0.5 text-sm text-neutral-400">
                  SSC · 2020
                </p>

                <p className="mt-1 text-sm text-neutral-300">
                  CGPA: 10.0
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* CV CTA */}
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            View CV
            <span className="ml-1.5" aria-hidden="true">
              →
            </span>
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-neutral-400 underline decoration-neutral-700 underline-offset-4 transition hover:text-violet-300 hover:decoration-violet-400"
          >
            More about my academic background
          </Link>
        </div>
      </section>
    </div>
  )
}