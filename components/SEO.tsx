import Head from 'next/head'
import { SITE } from '../data/site'

type Props = {
  title?: string
  description?: string
}

export default function SEO({
  title = SITE.name,
  description = SITE.description,
}: Props) {
  const siteUrl = 'https://research-portfolio-six.vercel.app'

  const canonicalUrl = siteUrl

  return (
    <Head>
      {/* Primary metadata */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="author"
        content="Shaik Mohd Ishaq"
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content="Shaik Mohd Ishaq"
      />

      <meta
        property="og:image"
        content={`${siteUrl}/favicon.svg`}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${siteUrl}/favicon.svg`}
      />

      {/* Theme */}
      <meta
        name="theme-color"
        content="#09090b"
      />

      {/* Favicon */}
      <link
        rel="icon"
        href="/favicon.svg"
        type="image/svg+xml"
      />
    </Head>
  )
}