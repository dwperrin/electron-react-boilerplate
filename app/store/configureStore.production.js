import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { historyMiddleware } from '../history'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import { counterStateType } from '../reducers/counter'

const enhancer = applyMiddleware(thunk, historyMiddleware)

export default function configureStore (initialState?: counterStateType) {
  return createStore(rootReducer, initialState, enhancer); // eslint-disable-line
}
