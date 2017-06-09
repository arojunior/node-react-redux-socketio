import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import store from '../../src/modules'
import Manager from '../../src/routes/Manager'

const Routes = {
  path: '/',
  Manager
}

describe('Manager Route', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    render(
      <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
      </Provider>,
      div
    )
  })
})
