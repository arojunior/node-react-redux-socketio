import React, {Component} from 'react'
import {connect} from 'react-redux'
import Socket from '../../modules/socket'
import {setAlarms} from '../../modules/Alarms/actions'

import Alert from '../../components/Alert'

class Client extends Component {
  constructor(props) {
    super(props)
    Socket.on('alarm:list_response', alarms => {
      this.props.dispatch(setAlarms(alarms))
    })
  }

  componentDidMount() {
    Socket.emit('alarm:list')
  }

  render() {
    const {alarms} = this.props
    const checkAlarms = alarms && alarms.filter(alarm => alarm.isFired)

    const alarmAlert = checkAlarms
      ? checkAlarms.map(alarm => (
          <Alert key={alarm.id} msg={`FIRE IN THE HOLE ${alarm.name}`} />
        ))
      : null

    return (
      <div>
        {alarmAlert && `IT'S OK`}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alarms: state.Alarms.data
})

export default {
  component: connect(mapStateToProps)(Client)
}
