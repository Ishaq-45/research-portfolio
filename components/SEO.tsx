import Head from 'next/head'

type Props = {
  title?: string
  description?: string
}

export default function SEO({ title, description }: Props) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content="/favicon.svg" />
    </Head>
  )
}
