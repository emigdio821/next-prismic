import Head from 'next/head'

interface HelmetProps {
  description?: string
}

export default function Helmet({ description }: HelmetProps) {
  const desc =
    description || 'Simple app using Next.js, Typescript and Tailwind CSS.'
  return (
    <Head>
      <title>Prismicool</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:image" content="https://emtorres.vercel.app/api/og" />
      <link rel="icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
