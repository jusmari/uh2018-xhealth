import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import EventList from './EventList'

export default class HomeScreen extends React.Component {
  state = {}

  render() {
    const events = [
      {
        type: 'REMINER',
        title: 'Röntgen klo 12.30',
        date: '12.30'
      },
      {
        type: 'CHECKLIST',
        title: 'Mittaa verenpaine',
        date: '15.00'
      }
    ]

    return (
      <View style={styles.container}>
        <EventList events={events} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
