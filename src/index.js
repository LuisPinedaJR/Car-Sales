import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import rootReducer from './reducers'

import App from './App'

import './styles.scss'

const store = createStore(rootReducer, applyMiddleware(logger))
// console.log("store from src/index.js", store);

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
