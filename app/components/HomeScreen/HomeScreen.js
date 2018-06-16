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
import { toggleTask, types, toggleModal, changeInput } from '../../actions'
import produce from 'immer'

export class HomeScreen extends React.Component {
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
              style={{ marginTop: 5 }}
            />
            <Text style={{ paddingBottom: 5 }}> {checkValues.title}</Text>
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
          <View>
            <Text style={{ textAlign: 'center' }}>
              {infoKey
                .split('-')
                .join(' ')
                .toUpperCase()}
            </Text>
            <TextInput
              keyboardType="number-pad"
              onChangeText={value =>
                dispatch(changeInput({ eventKey, infoKey }, value))
              }
              value={eventValue.infos[infoKey]}
              key={infoKey}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
          </View>
        ))

        const gatheredInfos = eventValue.asking.map(info => (
          <View>
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
                <Text>Mitattu:</Text>
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
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0
  }
})
