import {createAction} from 'redux-actions'
import Socket from '../../modules/socket'

export const ALARM = 'modules/Alarm/SET'

export const fireAlarm = id => Socket.emit('alarm:fire', id)

export const setAlarms = createAction(ALARM)
