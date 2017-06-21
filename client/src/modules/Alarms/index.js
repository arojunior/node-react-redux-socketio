import {handleAction} from 'redux-actions'

import {ALARM} from './actions'

const initialState = {
  data: null
}

export default handleAction(
  ALARM,
  (state, action) => ({
    data: action.payload.data
  }),
  initialState
)
