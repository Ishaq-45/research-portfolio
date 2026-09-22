export default function ResearchFocus() {
  const interests = [
    'Cybersecurity',
    'Threat Intelligence',
    'Artificial Intelligence & Machine Learning',
    'Explainable AI',
    'Phishing / Fraud Detection',
    'Retrieval-Augmented Generation (RAG)'
  ]

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-3">Research Interests</h2>
      <p className="mb-4 max-w-3xl text-neutral-400">I focus on explainable, evaluation-driven systems at the intersection of AI/ML and cybersecurity.</p>
      <ul className="flex flex-wrap gap-2 text-neutral-200">
        {interests.map((interest, index) => (
          <li
            key={interest}
            className="research-tag rounded-full border border-neutral-700 bg-neutral-800/70 px-3 py-1.5 text-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-white"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  )
}
