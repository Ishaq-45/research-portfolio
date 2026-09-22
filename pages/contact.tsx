import SEO from '../components/SEO'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <div className="space-y-6">
      <SEO title={`Contact — ${SITE.name}`} description={`Contact ${SITE.name} via email.`} />
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="p-4 bg-neutral-800 rounded-md border border-neutral-800">
        <p className="text-neutral-300">Email: ishaqsm007@gmail.com</p>
        <p className="text-neutral-300">GitHub: <a href="https://github.com/Ishaq-45" target="_blank" rel="noreferrer" className="text-primary">github.com/Ishaq-45</a></p>
      </div>
    </div>
  )
}
