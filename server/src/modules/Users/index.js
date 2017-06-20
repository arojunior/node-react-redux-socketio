const {handleActions} = require('redux-actions')

const initialState = {
  count: 0,
  users: []
}

module.exports = handleActions(
  {
    ['USER_CONNECTED']: (state, action) => ({
      count: action.payload.id,
      users: [state.users, action.payload]
    }),
    ['USER_DISCONNECTED']: (state, action) => ({
      sending: true
    })
  },
  initialState
)
