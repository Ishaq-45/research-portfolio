import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shaik Mohd Ishaq | AI/ML, Cybersecurity & Research</title>
        <meta name="description" content="Portfolio of Shaik Mohd Ishaq, Computer Science Engineer working at the intersection of AI/ML, cybersecurity, threat intelligence, and intelligent systems." />
        <meta property="og:title" content="Shaik Mohd Ishaq | AI/ML, Cybersecurity & Research" />
        <meta property="og:description" content="Portfolio of Shaik Mohd Ishaq, Computer Science Engineer." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full container py-10">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
