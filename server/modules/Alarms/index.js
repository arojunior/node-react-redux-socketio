const {handleAction} = require('redux-actions')
const {FIRE} = require('./actions')

const initialState = [
  {
    id: 1,
    name: 'Alarm 1',
    location: 'Rua Nirberto Haase, 60 - Florianópolis - SC',
    isFired: null
  },
  {
    id: 2,
    name: 'Alarm 2',
    location: 'Av. Gov. Ivo Silveira, 1601 - Florianópolis - SC',
    isFired: null
  }
]

module.exports = (state = initialState, action) => {
  if (action.type === FIRE) {
    if (state.id !== action.payload.id) {
      return state
    }

    return Object.assign({}, state, {isFired: !state.isFired})
  }
  return state
}
