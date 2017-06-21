import React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle, withProps} from 'recompose'

import Socket from '../../modules/socket'
import {setAlarms} from '../../modules/Alarms/actions'
import ButtonsComponent from './components/ButtonsComponent'

const Manager = ({alarms, ButtonsComponent, dispatch}) => {
  const buttons = alarms && ButtonsComponent(alarms)

  Socket.on('alarm:list_response', alarms => {
    dispatch(setAlarms(alarms))
  })

  return <div>{buttons}</div>
}

export default compose(
  connect(state => ({
    alarms: state.Alarms.data
  })),
  withProps({
    ButtonsComponent
  }),
  lifecycle({
    componentDidMount() {
      Socket.emit('alarm:list')
    }
  })
)(Manager)
