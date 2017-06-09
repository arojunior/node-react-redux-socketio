const {createAction} = require('redux-actions')

exports.userId = previous => previous + 1

exports.userConnected = createAction('USER_CONNECTED', userId => ({
  id: userId,
  name: `User ${userId}`
}))
