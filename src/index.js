import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import App from './App'
import './styles.scss'

const middleware = [logger]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
// console.log("store from src/index.js", store);

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
