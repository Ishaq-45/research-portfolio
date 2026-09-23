import Link from 'next/link'
import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Resume() {
  return (
    <div className="space-y-8 py-4">
      <SEO
        title={`CV / Resume — ${SITE.name}`}
        description={`Academic CV and research profile of ${SITE.name}, covering education, research, projects, technical skills, publication, and certifications.`}
      />

      {/* Header */}
      <section className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Academic CV
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Curriculum Vitae
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300 sm:text-lg">
          Academic and technical profile covering research experience,
          publication, education, AI/ML, cybersecurity, and software systems.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        {/* CV Content */}
        <main className="card">
          {/* Identity */}
          <header className="border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              SHAIK MOHD ISHAQ
            </h2>

            <p className="mt-2 text-sm text-neutral-400">
              Computer Science &amp; Engineering Graduate · AI/ML ·
              Cybersecurity · Research
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-400">
              <a
                href="mailto:ishaqsm007@gmail.com"
                className="transition hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                ishaqsm007@gmail.com
              </a>

              <span className="text-neutral-700">•</span>

              <span>+91 9700330630</span>

              <span className="text-neutral-700">•</span>

              <a
                href="https://github.com/Ishaq-45"
                target="_blank"
                rel="noreferrer"
                className="text-violet-300 transition hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                github.com/Ishaq-45 ↗
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mt-7">
            <SectionTitle title="Professional Summary" />

            <p className="mt-3 leading-7 text-neutral-300">
              Computer Science Engineering graduate with hands-on experience
              in software development, AI/ML, cybersecurity, and backend
              systems. Published research in cybersecurity and threat
              intelligence through NetRakshak, alongside development of
              AI-powered applications using RAG, FastAPI, React, and modern
              cloud technologies. Strong foundation in data structures,
              algorithms, and full-stack development.
            </p>
          </section>

          {/* Research Profile */}
          <section className="mt-8">
            <SectionTitle title="Research Profile" />

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                'Artificial Intelligence & Machine Learning',
                'Cybersecurity & Threat Intelligence',
                'Explainable AI',
                'Phishing & Fraud Detection',
                'Retrieval-Augmented Generation',
                'Intelligent Decision Support Systems',
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-neutral-300"
                >
                  {area}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mt-8">
            <SectionTitle title="Education" />

            <div className="mt-4 space-y-5">
              <EducationItem
                institution="Keshav Memorial Institute of Technology"
                degree="B.Tech in Computer Science & Engineering"
                period="2022–2026"
                result="GPA: 8.2/10"
                featured
              />

              <EducationItem
                institution="MS Junior College"
                degree="Intermediate (MPC)"
                period="2020–2022"
                result="95.9%"
              />

              <EducationItem
                institution="The Progress High School"
                degree="SSC"
                period="2020"
                result="CGPA: 10.0"
              />
            </div>
          </section>

          {/* Research & Projects */}
          <section className="mt-8">
            <SectionTitle title="Research & Projects" />

            <div className="mt-4 space-y-6">
              <ProjectEntry
                title="NetRakshak — Real-Time Cyber Fraud Detection Framework"
                description="Developed a threat intelligence framework using React.js, FastAPI, Python, MongoDB, WHOIS API, VirusTotal API, and Google Safe Browsing. Built an explainable risk-scoring engine for multi-factor cyber fraud and phishing analysis."
                result="Evaluation: 150 labeled samples · 91.3% accuracy · 93.1% precision · 92.7% recall · 92.9% F1"
                featured
              />

              <ProjectEntry
                title="AI Document Search (RAG Chatbot)"
                description="Built an AI-powered chatbot for PDF interaction using React, FastAPI, LangChain, OpenAI, Pinecone/FAISS, Docker, and Vercel with semantic search and retrieval-augmented generation."
              />

              <ProjectEntry
                title="Pneumonia Detection using CNN"
                description="Designed and trained a convolutional neural network using TensorFlow and Keras for pneumonia detection from chest X-ray images."
              />
            </div>
          </section>

          {/* Publication */}
          <section className="mt-8">
            <SectionTitle title="Publication" />

            <div className="mt-4 rounded-xl border border-violet-400/20 bg-violet-500/[0.04] p-5">
              <p className="font-semibold leading-7 text-white">
                NetRakshak: A User-Centric Threat Intelligence Framework for
                Real-Time Cyber Fraud Detection
              </p>

              <p className="mt-2 text-sm leading-6 text-neutral-400">
                International Journal of Engineering Research &amp; Technology
                (IJERT), Vol. 15, Issue 04, April 2026.
              </p>

              <Link
                href="/publication"
                className="mt-4 inline-flex text-sm font-medium text-violet-300 transition hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                View publication record →
              </Link>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mt-8">
            <SectionTitle title="Technical Skills" />

            <div className="mt-4 space-y-4">
              <SkillGroup
                label="Languages"
                value="Java, Python, JavaScript, HTML, CSS"
              />

              <SkillGroup
                label="Frameworks"
                value="React.js, Next.js, Node.js, Express.js, FastAPI, LangChain"
              />

              <SkillGroup
                label="Databases & Search"
                value="MongoDB, SQL, Pinecone, FAISS"
              />

              <SkillGroup
                label="Tools & Platforms"
                value="Git, Docker, Jenkins, Vercel, Oracle Cloud Infrastructure"
              />

              <SkillGroup
                label="Core Areas"
                value="Data Structures & Algorithms, AI/ML, RAG, Cybersecurity, Threat Intelligence, REST APIs"
              />
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-8">
            <SectionTitle title="Certifications" />

            <ul className="mt-4 space-y-3">
              {[
                'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
                'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
                'Automated Machine Learning by AIBrains Inc',
              ].map((certification) => (
                <li
                  key={certification}
                  className="flex gap-3 text-sm leading-6 text-neutral-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Strengths */}
          <section className="mt-8">
            <SectionTitle title="Strengths" />

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Analytical Thinking & Problem Solving',
                'Data Structures & Algorithms',
                'Quick Learning & Adaptability',
                'Team Collaboration & Communication',
              ].map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-300"
                >
                  {strength}
                </span>
              ))}
            </div>
          </section>
        </main>

        {/* PDF Viewer */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                Official Document
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">
                Resume PDF
              </h2>

              <p className="mt-2 text-sm leading-6 text-neutral-400">
                View the original PDF directly in your browser or download a
                copy for applications.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:flex-col">
              <a
                href="/resumee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition duration-200 hover:border-violet-300/50 hover:bg-violet-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Open PDF ↗
              </a>

              <a
                href="/resumee.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-neutral-200 transition duration-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
              <iframe
                src="/resumee.pdf#view=FitH"
                title="SHAIK MOHD ISHAQ Resume PDF"
                className="h-[520px] w-full"
              />

              <div className="border-t border-white/10 p-3 text-center">
                <p className="text-xs text-neutral-500">
                  If the preview does not load, use Open PDF above.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Navigation */}
      <div className="border-t border-white/10 pt-6 text-sm text-neutral-400">
        Return to{' '}
        <Link
          href="/"
          className="text-violet-300 transition hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          home
        </Link>
      </div>
    </div>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-violet-400" />

      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>
    </div>
  )
}

function EducationItem({
  institution,
  degree,
  period,
  result,
  featured = false,
}: {
  institution: string
  degree: string
  period: string
  result: string
  featured?: boolean
}) {
  return (
    <div
      className={`border-l pl-5 ${
        featured
          ? 'border-violet-500/50'
          : 'border-neutral-700'
      }`}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-medium text-white">
            {institution}
          </h3>

          <p className="mt-1 text-sm text-neutral-300">
            {degree}
          </p>
        </div>

        <span className="text-sm text-neutral-500">
          {period}
        </span>
      </div>

      <p className="mt-2 text-sm text-neutral-400">
        {result}
      </p>
    </div>
  )
}

function ProjectEntry({
  title,
  description,
  result,
  featured = false,
}: {
  title: string
  description: string
  result?: string
  featured?: boolean
}) {
  return (
    <article
      className={`rounded-xl border p-5 ${
        featured
          ? 'border-violet-400/20 bg-violet-500/[0.04]'
          : 'border-white/10 bg-white/[0.02]'
      }`}
    >
      <h3 className="font-semibold leading-6 text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-neutral-300">
        {description}
      </p>

      {result && (
        <p className="mt-3 text-xs leading-5 text-violet-200">
          {result}
        </p>
      )}
    </article>
  )
}

function SkillGroup({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-4">
      <span className="text-sm font-medium text-white">
        {label}
      </span>

      <span className="text-sm leading-6 text-neutral-400">
        {value}
      </span>
    </div>
  )
}