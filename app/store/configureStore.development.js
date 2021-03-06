import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { historyMiddleware } from '../history'
import { push } from 'react-router-redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

import * as counterActions from '../actions/counter'
import { counterStateType } from '../reducers/counter'

const actionCreators = {
  ...counterActions,
  push
}

const logger = createLogger({
  level: 'info',
  collapsed: true
})

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://extension.remotedev.io/docs/API/Arguments.html
    actionCreators
  })
  : compose
/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(
  applyMiddleware(thunk, historyMiddleware, logger)
)

export default function configureStore (initialState?: counterStateType) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }

  return store
}
