import React from 'react'
import { Link } from 'react-pages'

import './App.css'

export default function App({ children }) {
  return (
    <div>
      <h1 className="main-title">
      	Increment the counters
      </h1>
      <ul className="main-menu">
        <li> <Link to="/"> Basic </Link> </li>
        <li> <Link to="/advanced"> Advanced </Link> </li>
      </ul>
      <section className="main-content">
      	{children}
      </section>
    </div>
  )
}

App.meta = () => {
  return {
    title: 'Application'
  }
}