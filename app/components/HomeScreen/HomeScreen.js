import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native'
import PersonalView from '../PersonalView/PersonalView'
import SegmentControl from 'react-native-segment-controller'
import { connect } from 'react-redux'
import EventList from './EventList'
import { toggleTask, types } from '../../actions'
import produce from 'immer'

class HomeScreen extends React.Component {
  processEvent = (eventKey, eventValue) => {
    const { dispatch, events } = this.props

    if (eventValue.types.includes(types.CHECKLIST)) {
      const checks = eventValue.checks
      const switches = Object.entries(checks).map(values => {
        const checkKey = values[0]
        const checkValues = values[1]

        const onChange = (eventKey, checkKey) => {
          dispatch(toggleTask(eventKey, checkKey))
        }

        return (
          <View
            style={{ flexDirection: 'row', alignItems: 'center' }}
            key={`${eventKey}-${checkKey}`}
          >
            <Switch
              value={checkValues.checked}
              onValueChange={() => onChange(eventKey, checkKey)}
              style={{ marginBottom: 5 }}
            />
            <Text style={{ paddingBottom: 5 }}> {checkValues.title}</Text>
          </View>
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
      <SafeAreaView style={styles.safearea}>
        <View style={styles.personal}>
          <PersonalView />
        </View>
        <SegmentControl
          values={['Timeline', 'Measurements', 'Chat']}
          badges={[0, 0, 0]}
          selectedIndex={0}
          height={30}
          onTabPress={() => {}}
          borderRadius={5}
        />
        <View style={styles.container}>
          <EventList
            events={processedEvents}
            navigation={this.props.navigation}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  personal: {
    flex: 1
  },
  container: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 65
  }
})
