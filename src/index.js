import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// inject Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import state from './store/reducer'

import './index.css'
import App from './App'

const store = createStore(
  state,
  applyMiddleware(thunk),
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
        <Suspense fallback={ null }>
          <App /> 
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

