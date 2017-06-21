import React from 'react'
import Navigation from './../components/Navigation'

import '../assets/css/App.css'

const Layout = ({children}) =>
  <div>
    <Navigation />
    <div className="App">
      {children}
    </div>
  </div>

export default Layout
