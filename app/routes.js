import React from 'react'
import { Route } from 'react-router'
import HomePage from './containers/HomePage'
import CounterPage from './containers/CounterPage'

export default (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path='/counter' component={CounterPage} />
  </div>
)
