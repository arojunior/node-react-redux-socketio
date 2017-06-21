import React from 'react'
import {fireAlarm} from '../../../modules/Alarms/actions'

const Button = (alarm, className) =>
  <a
    key={alarm.id}
    href="#"
    className={`btn ${className}`}
    onClick={() => fireAlarm(alarm.id)}>
    {alarm.name}
  </a>

const ButtonsComponent = alarms =>
  alarms.map(
    alarm =>
      alarm.isFired ? Button(alarm, 'btn-danger') : Button(alarm, 'btn-default')
  )
export default ButtonsComponent
