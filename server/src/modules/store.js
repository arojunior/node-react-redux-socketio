const {createStore, combineReducers} = require('redux')
const Users = require('./Users')
const Alarms = require('./Alarms')

const rootReducer = combineReducers({
  Users,
  Alarms
})
const store = createStore(rootReducer)

module.exports = store
