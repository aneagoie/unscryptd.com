import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import smoothScroll from 'smooth-scroll'

smoothScroll.init()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
