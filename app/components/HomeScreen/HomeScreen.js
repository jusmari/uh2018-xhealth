import React from 'react'
import { StyleSheet, Text, View, Button, Switch } from 'react-native'
import { connect } from 'react-redux'
import EventList from './EventList'
import { toggleTask } from '../../actions'
import produce from 'immer'

const types = {
  REMINDER: 0,
  CHECKLIST: 1,
  INPUT_DATA: 2
}

class HomeScreen extends React.Component {
  processEvent = (eventKey, eventValue) => {
    const { dispatch, events } = this.props

    if (eventValue.type === types.CHECKLIST) {
      const checks = eventValue.checks
      const switches = Object.entries(checks).map(values => {
        const checkKey = values[0]
        const checkValues = values[1]

        const onChange = (eventKey, checkKey) => {
          dispatch(toggleTask(eventKey, checkKey))
        }

        return (
          <Switch
            value={checkValues.checked}
            onValueChange={() => onChange(eventKey, checkKey)}
          />
        )
      })

      return produce(eventValue, draft => {
        draft.description = <View>{switches}</View>
      })
    } else {
      return eventValue
    }
  }

  render() {
    const events = this.props.events

    const processedEvents = Object.entries(events).map(values =>
      this.processEvent(values[0], values[1])
    )

    return (
      <View style={styles.container}>
        <EventList events={processedEvents} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 65
  }
})
