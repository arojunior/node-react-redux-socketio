import Layout from '../layouts'

import Client from './Client'
import Manager from './Manager/routes'

export default {
  path: '/',
  component: Layout,
  indexRoute: Client,
  childRoutes: [Manager]
}
