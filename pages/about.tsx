import SEO from '../components/SEO'
import { SITE } from '../data/site'
import { PUBLICATION } from '../data/publication'
import Link from 'next/link'

export default function About() {
  return (
    <div className="space-y-6">
      <SEO title={`About — ${SITE.name}`} description={SITE.description} />
      <h1 className="text-3xl font-bold">About</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="font-semibold text-xl text-white">Research-oriented biography</h2>
          <p className="mt-3 max-w-3xl text-neutral-300">
            Computer Science &amp; Engineering graduate focused on AI/ML, cybersecurity, and threat intelligence. My research and engineering interests centre on explainable, evaluation-driven systems that connect machine learning with practical security workflows and intelligent decision support.
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-xl text-white">Research focus</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-300">
            <li>Explainable AI and evaluation-oriented ML systems</li>
            <li>Cybersecurity and threat intelligence</li>
            <li>Phishing and fraud detection systems</li>
            <li>Applied RAG and intelligent document systems</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2 className="font-semibold text-xl text-white">Education</h2>
        <div className="mt-4 space-y-5 text-neutral-300">
          <div className="border-l border-violet-500/40 pl-4">
            <div className="font-medium text-white">Keshav Memorial Institute of Technology</div>
            <div>B.Tech in Computer Science &amp; Engineering</div>
            <div>2022–2026</div>
            <div>GPA: 8.2/10</div>
          </div>
          <div className="border-l border-neutral-700 pl-4">
            <div className="font-medium text-white">MS Junior College</div>
            <div>Intermediate (MPC)</div>
            <div>2020–2022</div>
            <div>95.9%</div>
          </div>
          <div className="border-l border-neutral-700 pl-4">
            <div className="font-medium text-white">The Progress High School</div>
            <div>SSC</div>
            <div>2020</div>
            <div>CGPA: 10.0</div>
          </div>
        </div>
      </div>

      <div className="card about-section-reveal">
        <h2 className="font-semibold text-xl text-white">Research &amp; Publication</h2>
        <p className="mt-3 max-w-3xl font-medium text-white">NetRakshak</p>
        <p className="mt-1 max-w-3xl text-neutral-300">A User-Centric Threat Intelligence Framework for Real-Time Cyber Fraud Detection</p>
        <p className="mt-2 text-sm text-neutral-400">IJERT · April 2026</p>
        <Link href="/research" className="mt-4 inline-flex items-center text-sm font-medium text-violet-300 transition duration-200 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">View Research →</Link>
      </div>

      <div className="card">
        <h2 className="font-semibold text-xl text-white">Technical focus</h2>
        <p className="mt-3 text-neutral-300">AI/ML system design, cybersecurity research, threat intelligence, retrieval-augmented generation, and applied data-driven model development.</p>
      </div>
    </div>
  )
}
