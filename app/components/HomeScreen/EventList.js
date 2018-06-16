import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const EventList = ({ events }) => {
  const eventList = events.map(event => <Text>{event.title}</Text>)

  return <View>{eventList}</View>
}

export default EventList

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
