import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './components/Home'
import configureStore from './store/configureStore'

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/Home', renderApp)
}

renderApp()