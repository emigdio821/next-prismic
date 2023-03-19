import sm from '@@/sm.json'
import * as prismic from '@prismicio/client'
// import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import { JSXMapSerializer } from '@prismicio/react'
import { RTLinkNode } from '@prismicio/types'

interface Hyperlink {
  children: JSX.Element[]
  node: RTLinkNode & { data: { target?: string } }
}

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

const routes = [
  {
    type: 'homepage',
    path: '/'
  },
  {
    type: 'page',
    path: '/:uid'
  }
]
export const components: JSXMapSerializer = {
  strong: ({ children }) => <span className="font-semibold">{children}</span>,
  hyperlink: ({ children, node: { data } }: Hyperlink) => (
    <a
      href={data.url}
      className="link"
      target={data.target}
      rel={data.target ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export const createClient = ({
  ...config
}: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}
