import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="container w-full flex-1 py-10">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}