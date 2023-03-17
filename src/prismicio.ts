import sm from '@@/sm.json'
import * as prismic from '@prismicio/client'
// import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

const routes = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
]

export const createClient = ({
  ...config
}: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
