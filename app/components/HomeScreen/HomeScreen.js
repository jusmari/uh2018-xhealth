import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Switch,
  Modal,
  Button,
  TextInput
} from 'react-native'
import PersonalView from '../PersonalView/PersonalView'
import { connect } from 'react-redux'
import EventList from './EventList'
import {
  toggleTask,
  types,
  toggleModal,
  fetchApiData,
  changeInput
} from '../../actions'
import produce from 'immer'

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchApiData())
  }

  processEvent = (eventKey, eventValue) => {
    const { dispatch } = this.props

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
              style={{ marginTop: 5 }}
            />
            <Text style={{ paddingBottom: 5 }}> {checkValues.title}</Text>
          </View>
        )
      })

      return produce(eventValue, draft => {
        draft.description = (
          <View>
            <Text>{eventValue.description}</Text>
            {switches}
          </View>
        )
      })
    }

    if (eventValue.types.includes(types.WITH_INSTRUCTIONS)) {
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
            />
            <Text> {checkValues.title}</Text>
          </View>
        )
      })

      return produce(eventValue, draft => {
        draft.description = (
          <View>
            <Text>Löydät ohjeet klikkaamalla tästä</Text>
            <Text>{eventValue.description}</Text>
            {switches}
          </View>
        )
      })
    }

    if (eventValue.types.includes(types.INPUT_DATA)) {
      return produce(eventValue, draft => {
        const form = eventValue.asking.map(infoKey => (
          <View key={infoKey}>
            <Text style={{ textAlign: 'center' }}>
              {infoKey
                .split('-')
                .join(' ')
                .toUpperCase()}
            </Text>
            <TextInput
              onChangeText={value =>
                dispatch(changeInput({ eventKey, infoKey }, value))
              }
              value={String(eventValue.infos[infoKey])}
              key={infoKey}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
          </View>
        ))

        const gatheredInfos = eventValue.asking.map(info => (
          <View key={info}>
            <Text>
              {info
                .split('-')
                .join(' ')
                .toUpperCase()}
            </Text>
            <Text>{eventValue.infos[info]}</Text>
          </View>
        ))

        draft.description = (
          <View style={{ flex: 1 }}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={eventValue.modalOpen}
              onRequestClose={() => {
                alert('Modal has been closed.')
              }}
            >
              <View style={{ padding: 100 }}>
                <View>
                  <View>{form}</View>

                  <Button
                    onPress={() => {
                      dispatch(toggleModal(eventKey))
                    }}
                    title="OK"
                  />
                </View>
              </View>
            </Modal>

            {Object.keys(eventValue.infos).length > 0 && (
              <View>
                <Text>Measured:</Text>
                {gatheredInfos}
              </View>
            )}

            <Button
              onPress={() => {
                dispatch(toggleModal(eventKey))
              }}
              title="Täytä tiedot"
            />
          </View>
        )
      })
    }

    return eventValue
  }

  processedEvents = measurementEvents => {
    return Object.entries(measurementEvents).map(values =>
      this.processEvent(values[0], values[1])
    )
  }

  render() {
    const events = Object.entries(this.props.events).map(e =>
      this.processEvent(e[0], e[1])
    )

    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.personal}>
          <PersonalView />
        </View>
        <View style={styles.container}>
          {this.props.measurementEvents && (
            <EventList
              //events={this.processedEvents(this.props.measurementEvents)}
              events={events}
              navigation={this.props.navigation}
            />
          )}
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    measurementEvents: state.measurementEvents
  }
}

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  personal: {
    flex: 1
  },
  container: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 0,
    paddingTop: 0
  }
})
