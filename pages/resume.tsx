import Link from 'next/link'

export default function Resume() {
  return (
    <div className="min-h-[80vh] py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="card">
            <h1 className="text-2xl font-semibold tracking-tight">SHAIK MOHD ISHAQ</h1>
            <div className="mt-2 text-sm text-neutral-400">+91 9700330630 · ishaqsm007@gmail.com · <a href="https://github.com/Ishaq-45" target="_blank" rel="noreferrer" className="text-violet-300 transition hover:text-violet-200">github.com/Ishaq-45</a></div>

            <section className="mt-6">
              <h2 className="font-semibold">Professional summary</h2>
              <p className="mt-2 max-w-3xl text-neutral-300">Computer Science Engineering graduate with hands-on experience in software development, AI/ML, cybersecurity, and backend systems. Published research in cybersecurity and threat intelligence through NetRakshak, alongside development of AI-powered applications using RAG, FastAPI, React, and modern cloud technologies. Strong foundation in data structures, algorithms, and full-stack development.</p>
            </section>

            <section className="mt-6">
              <h2 className="font-semibold">Education</h2>
              <div className="mt-2 text-neutral-300">
                <div className="font-medium text-white">Keshav Memorial Institute of Technology</div>
                B.Tech in Computer Science &amp; Engineering · GPA: 8.2 · 2022–2026
                <div className="mt-2">MS Junior College — Intermediate (MPC) · 95.9% · 2020–2022</div>
                <div className="mt-1">The Progress High School — SSC · CGPA: 10.0 · 2020</div>
              </div>
            </section>

            <section className="mt-6">
              <h2 className="font-semibold">Technical skills</h2>
              <div className="mt-2 text-neutral-300">Languages: Java, Python, JavaScript, HTML, CSS<br />Frameworks: React.js, Next.js, Node.js, Express.js, FastAPI, LangChain<br />Databases: MongoDB, SQL, Pinecone, FAISS<br />Tools: Git, Docker, Jenkins, Vercel, Oracle Cloud Infrastructure<br />Core: DSA, AI/ML, RAG, Cybersecurity, Threat Intelligence, REST APIs</div>
            </section>

            <section className="mt-6">
              <h2 className="font-semibold">Projects</h2>
              <div className="mt-2 text-neutral-300">
                <div className="font-medium text-white">NetRakshak — Real-Time Cyber Fraud Detection Framework</div>
                • Developed a threat intelligence framework using React.js, FastAPI, Python, MongoDB, WHOIS API, VirusTotal API, and Google Safe Browsing. Built an explainable risk-scoring engine achieving 91.3% accuracy, 93.1% precision, and 92.7% recall.

                <div className="mt-3 font-medium text-white">AI Document Search (RAG Chatbot)</div>
                • Built an AI-powered chatbot for PDF interaction using React, FastAPI, LangChain, OpenAI, Pinecone/FAISS, Docker, and Vercel with semantic search and RAG.

                <div className="mt-3 font-medium text-white">Pneumonia Detection using CNN</div>
                • Designed and trained a CNN model using TensorFlow and Keras for pneumonia detection from chest X-ray images.
              </div>
            </section>

            <section className="mt-6">
              <h2 className="font-semibold">Publication</h2>
              <div className="mt-2 text-neutral-300">NetRakshak: A User-Centric Threat Intelligence Framework for Real-Time Cyber Fraud Detection — International Journal of Engineering Research &amp; Technology (IJERT), Vol.15, Issue 04, April 2026.</div>
            </section>

            <section className="mt-6">
              <h2 className="font-semibold">Certifications</h2>
              <ul className="mt-2 list-disc pl-5 text-neutral-300">
                <li>Oracle Cloud Infrastructure 2025 Certified Data Science Professional</li>
                <li>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</li>
                <li>Automated Machine Learning by AIBrains Inc</li>
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="font-semibold">Strengths</h2>
              <div className="mt-2 text-neutral-300">Analytical Thinking &amp; Problem Solving · Data Structures &amp; Algorithms · Quick Learning &amp; Adaptability · Team Collaboration &amp; Communication</div>
            </section>
          </div>
        </div>

        <aside className="hidden md:block">
          <div className="card h-fit transition duration-200 hover:-translate-y-1 hover:border-violet-500/50">
            <h3 className="font-semibold text-white">Resume PDF</h3>
            <p className="mt-2 text-sm text-neutral-300">You can download or view the original PDF below.</p>
            <div className="mt-4 flex gap-2">
              <a href="/resumee.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white transition duration-200 hover:bg-violet-500">Open PDF</a>
              <a href="/resumee.pdf" download className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-3 py-2 text-sm text-neutral-200 transition duration-200 hover:border-violet-500/60 hover:text-white">Download</a>
            </div>

            <div className="mt-6">
              <object data="/resumee.pdf" type="application/pdf" width="100%" height="400">Your browser does not support inline PDFs. <a href="/resumee.pdf">Download the resume</a>.</object>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-8 text-sm text-neutral-400">Return to <Link href="/" className="text-violet-300 transition hover:text-violet-200">home</Link></div>
    </div>
  )
}
