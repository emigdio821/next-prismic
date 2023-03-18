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
        <main className="flex min-h-[100vh] flex-col text-zinc-800 duration-200 dark:bg-zinc-900 dark:text-zinc-200">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}
