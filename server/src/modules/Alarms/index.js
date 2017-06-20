const initialState = [
  {
    id: 1,
    name: 'Alarm 1',
    location: 'Rua Nirberto Haase, 60 - Florianópolis - SC',
    isFired: false
  },
  {
    id: 2,
    name: 'Alarm 2',
    location: 'Av. Gov. Ivo Silveira, 1601 - Florianópolis - SC',
    isFired: false
  }
]

module.exports = (state = initialState, action) => {
  if (action.type === 'FIRE_ALARM') {
    return Object.assign(
      {},
      state,
      state.map(
        alarm =>
          alarm.id === action.payload
            ? Object.assign({}, alarm, {isFired: !alarm.isFired})
            : alarm
      )
    )
  }
  return state
}
