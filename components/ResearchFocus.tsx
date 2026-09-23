export default function ResearchFocus() {
  const interests = [
    {
      title: 'Cybersecurity',
      description: 'Security systems and practical cyber defense.',
    },
    {
      title: 'Threat Intelligence',
      description: 'Threat analysis, verification, and intelligence signals.',
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Applied AI/ML for real-world problem solving.',
    },
    {
      title: 'Explainable AI',
      description: 'Interpretable systems and transparent model decisions.',
    },
    {
      title: 'Phishing / Fraud Detection',
      description: 'Detection and analysis of malicious digital activity.',
    },
    {
      title: 'Retrieval-Augmented Generation (RAG)',
      description: 'Grounded information retrieval and AI-assisted systems.',
    },
  ]

  return (
    <section
      className="border-t border-neutral-900 pt-10"
      aria-labelledby="research-interests-heading"
    >
      <div className="max-w-3xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-violet-300">
          Research Direction
        </p>

        <h2
          id="research-interests-heading"
          className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          Research Interests
        </h2>

        <p className="mt-3 text-sm leading-7 text-neutral-400 md:text-base">
          I focus on explainable, evaluation-driven systems at the
          intersection of AI/ML and cybersecurity, with interests spanning
          threat intelligence, fraud detection, and retrieval-augmented
          systems.
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest) => (
          <article
            key={interest.title}
            className="group rounded-lg border border-neutral-800 bg-neutral-900/35 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-neutral-900/65"
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 transition duration-200 group-hover:scale-125"
                aria-hidden="true"
              />

              <div>
                <h3 className="text-sm font-semibold leading-5 text-neutral-100">
                  {interest.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-neutral-500">
                  {interest.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
