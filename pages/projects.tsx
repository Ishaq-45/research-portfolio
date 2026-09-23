import Link from 'next/link'
import { PROJECTS } from '../data/projects'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Projects() {
  const researchProject = PROJECTS.find(
    (project) => project.id === 'netrakshak'
  )

  const engineeringProjects = PROJECTS.filter(
    (project) => project.id !== 'netrakshak'
  )

  return (
    <div className="space-y-10">
      <SEO
        title={`Projects — ${SITE.name}`}
        description={`Selected research and engineering projects by ${SITE.name}.`}
      />

      {/* Header */}
      <section className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Research &amp; Engineering
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Projects
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
          Selected work spanning cybersecurity, artificial intelligence,
          machine learning, retrieval-augmented generation, and full-stack
          system development.
        </p>
      </section>

      {/* Research Project */}
      {researchProject && (
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
                Featured Research
              </p>
            </div>
          </div>

          <article className="rounded-2xl border border-violet-500/30 bg-violet-500/[0.04] p-6 shadow-[0_0_40px_rgba(139,92,246,0.06)] sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                  {researchProject.type}
                </p>

                <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {researchProject.title}
                </h2>

                {researchProject.subtitle && (
                  <p className="mt-2 text-sm text-neutral-400">
                    {researchProject.subtitle}
                  </p>
                )}
              </div>

              <Link
                href="/research"
                className="inline-flex shrink-0 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition duration-200 hover:border-violet-300/50 hover:bg-violet-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Explore Research →
              </Link>
            </div>

            {/* Overview */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Research overview
              </p>

              <p className="mt-2 max-w-4xl text-sm leading-7 text-neutral-300 sm:text-base">
                {researchProject.description}
              </p>
            </div>

            {/* Research Details */}
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {researchProject.focus && (
                <div className="rounded-xl border border-white/10 bg-black/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Research focus
                  </p>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-300">
                    {researchProject.focus.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {researchProject.approach && (
                <div className="rounded-xl border border-white/10 bg-black/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Methodological approach
                  </p>

                  <p className="mt-3 text-sm leading-6 text-neutral-300">
                    {researchProject.approach}
                  </p>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Technologies &amp; research tools
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {researchProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-3 py-1.5 text-xs text-violet-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Result */}
            {researchProject.result && (
              <div className="mt-7 rounded-xl border border-violet-400/20 bg-violet-500/[0.06] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                  Reported result
                </p>

                <p className="mt-2 text-sm leading-6 text-violet-100">
                  {researchProject.result}
                </p>
              </div>
            )}
          </article>
        </section>
      )}

      {/* Engineering Projects */}
      {engineeringProjects.length > 0 && (
        <section>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
                Selected Engineering Work
              </p>

              <h2 className="mt-1 text-2xl font-semibold text-white">
                AI, ML &amp; Software Systems
              </h2>
            </div>
          </div>

          <div className="grid gap-5">
            {engineeringProjects.map((project) => (
              <article
                key={project.id}
                className="card p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-500/30"
              >
                {/* Project Heading */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                      {project.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="mt-2 text-sm text-neutral-400">
                        {project.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Overview */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Overview
                  </p>

                  <p className="mt-2 max-w-4xl text-sm leading-7 text-neutral-300">
                    {project.description}
                  </p>
                </div>

                {/* Focus + Approach */}
                {(project.focus || project.approach) && (
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {project.focus && (
                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          Technical focus
                        </p>

                        <ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-300">
                          {project.focus.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.approach && (
                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          Approach
                        </p>

                        <p className="mt-3 text-sm leading-6 text-neutral-300">
                          {project.approach}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1.5 text-xs text-neutral-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Result */}
                {project.result && (
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      Result / outcome
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-300">
                      {project.result}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Research Perspective */}
      <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300">
          Project Philosophy
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-9 text-white">
          From implementation to measurable research outcomes.
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400">
          My project work combines system implementation with an emphasis on
          methodology, evaluation, interpretability, and practical
          constraints. The goal is to understand not only whether a system
          works, but also how it can be evaluated and improved.
        </p>
      </section>
    </div>
  )
}