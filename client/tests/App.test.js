import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from '../src/modules'
import Manager from '../src/routes/Manager'
import Client from '../src/routes/Client'

describe('Render test', () => {
  it('Should render Client component without crashing', () => {
    render(
      <Provider store={store}>
        <Client.component />
      </Provider>,
      document.createElement('div')
    )
  })

  it('Should render Manager component without crashing', () => {
    render(
      <Provider store={store}>
        <Manager />
      </Provider>,
      document.createElement('div')
    )
  })
})
