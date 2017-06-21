import React, {Component} from 'react'
import {connect} from 'react-redux'

import Socket from '../../modules/socket'
import {fireAlarm, setAlarms} from '../../modules/Alarms/actions'

class Manager extends Component {
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
    const buttons = alarms
      ? alarms.map(alarm =>
          <a
            key={alarm.id}
            href="#"
            className="btn btn-default"
            onClick={() => fireAlarm(alarm.id)}>
            {alarm.name}
          </a>
        )
      : null

    return <div>{buttons}</div>
  }
}

const mapStateToProps = state => ({
  alarms: state.Alarms.data
})

export default connect(mapStateToProps)(Manager)
