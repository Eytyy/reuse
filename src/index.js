import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import DefaultErrorBoundry from './DefaultErrorBoundry'

if (process.env.Node_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById('app')
)
