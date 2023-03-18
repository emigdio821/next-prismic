import Link from 'next/link'
import type { AppProps } from 'next/app'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
// import { Inter } from 'next/font/google'
import '@/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <main className="flex min-h-[100vh] flex-col text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}
