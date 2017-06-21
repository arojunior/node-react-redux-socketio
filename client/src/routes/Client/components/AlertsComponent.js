import React from 'react'
import Alert from '../../../components/Alert'

const AlertsComponent = alarms =>
  alarms
    .filter(alarm => alarm.isFired)
    .map(alarm =>
      <Alert key={alarm.id} msg={`FIRE IN THE HOLE ${alarm.name}`} />
    )

export default AlertsComponent
