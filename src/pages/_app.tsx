import Link from 'next/link'
import type { AppProps } from 'next/app'
import Helmet from '@/components/Helmet'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import '@/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Helmet />
        <main className="mx-auto flex min-h-[100vh] max-w-[2560px] flex-col">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}
