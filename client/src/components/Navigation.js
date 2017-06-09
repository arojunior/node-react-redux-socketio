import React from 'react'
import {Link} from 'react-router'

const styles = {
  link: {
    display: 'inline-block',
    margin: '0.5em'
  }
}

const Navigation = () => (
  <nav>
    <Link to="/" style={styles.link}>Client</Link>
    <Link to="/manager" style={styles.link}>Manager</Link>
  </nav>
)

export default Navigation
