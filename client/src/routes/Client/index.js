import React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, withProps} from 'recompose'

import Socket from '../../modules/socket'
import {setAlarms} from '../../modules/Alarms/actions'
import AlertsComponent from './components/AlertsComponent'

const Client = ({alarms, dispatch, AlertsComponent}) => {
  const alarmAlert = alarms ? AlertsComponent(alarms) : null

  Socket.on('alarm:list_response', alarms => {
    dispatch(setAlarms(alarms))
  })

  return (
    <div className="container">
      <div className="col-md-4 col-md-offset-4">
        {alarmAlert}
      </div>
    </div>
  )
}

const enhance = compose(
  connect(state => ({
    alarms: state.Alarms.data
  })),
  withProps({
    AlertsComponent
  }),
  lifecycle({
    componentDidMount() {
      Socket.emit('alarm:list')
    }
  })
)

export default {
  component: enhance(Client)
}
