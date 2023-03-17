import { components } from '@@/slices'
import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient } from '@/prismicio'
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>
type PageParams = { uid: string }

export default function Page({ page }: PageProps) {
  return <SliceZone slices={page?.data.slices} components={components} />
}

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData })

  if (params?.uid) {
    const page = await client.getByUID('page', params.uid)
    return {
      props: {
        page,
      },
    }
  }

  return {
    props: {},
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
