import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import fetchMiddleware from 'fetch-middleware'

import Alarms from './Alarms'

const combineReducer = combineReducers({
  Alarms
})

const store = createStore(
  combineReducer,
  {},
  compose(
    applyMiddleware(fetchMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
