import React from 'react'
import {fireAlarm} from '../../../modules/Alarms/actions'

const ButtonsComponent = alarms =>
  alarms.map(
    alarm =>
      alarm.isFired
        ? <a
            key={alarm.id}
            href="#"
            className="btn btn-danger"
            onClick={() => fireAlarm(alarm.id)}>
            {alarm.name}
          </a>
        : <a
            key={alarm.id}
            href="#"
            className="btn btn-default"
            onClick={() => fireAlarm(alarm.id)}>
            {alarm.name}
          </a>
  )
export default ButtonsComponent
