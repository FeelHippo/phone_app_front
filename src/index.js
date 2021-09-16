import React from 'react'
import ReactDOM from 'react-dom'

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
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

