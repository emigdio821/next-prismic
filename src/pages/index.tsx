import Head from 'next/head'
import { components } from '@@/slices'
import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({ page }: PageProps) {
  return (
    <>
      <Head>
        <title>PrismicNext</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')
  return {
    props: {
      page,
    },
  }
}
